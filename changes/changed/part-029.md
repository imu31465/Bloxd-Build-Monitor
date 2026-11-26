# Changed — Bundle Modifications Report (Part 029 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `29 / 116` (**303** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 14. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L176-L629` → after: `L192-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L192-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L192-L207) · [Before (L176-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L176-L629)

```diff
-     var JV = xV(38272),
-       YV = xV(38278),
-       UV = xV(38280),
-       yV = xV(38287),
-       pV = xV(38303),
-       QV = xV(38311),
-       nV = xV(38318);
-     const wV = VV => parseInt(VV.toString().replace(/\W/g, ""));
-     class ZV {
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = VV, this.y = eV
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (438 more removed lines; see GitHub link above)
+     const SH = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function hH(HH, BH) {
+       const LH = SH.map((LH => function(HH, BH, LH) {
+         const AH = HH[BH];
+         if ("function" !== typeof AH) return null;
+         const rH = function() {
+           const AH = HH.length,
+             SH = rH.previous.apply(HH, arguments);
+           return LH(BH, AH), SH
+         };
+         return AH.next = rH, rH.previous = AH, HH[BH] = rH, () => {
+           const LH = rH.previous;
+           if (!LH) return;
+           const AH = rH.next;
+           AH ? (LH.next = AH, AH.previous = LH) : (LH.next = void 0, HH[BH] = LH), rH.next = void 0, rH.previous = void 0
```

#### 15. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L631-L859` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L209-L211) · [Before (L631-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L631-L859)

```diff
-         return xV
-       }
-       equals(VV) {
-         return VV && this._x === VV._x && this._y === VV._y && this._z === VV._z
-       }
-       equalsWithEpsilon(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.b;
-         return VV && (0, pV.WithinEpsilon)(this._x, VV._x, eV) && (0, pV.WithinEpsilon)(this._y, VV._y, eV) && (0, pV.WithinEpsilon)(this._z, VV._z, eV)
-       }
-       rQV(VV, eV, xV) {
-         return this._x === VV && this._y === eV && this._z === xV
-       }
-       multiplyInPlace(VV) {
-         return this._x *= VV._x, this._y *= VV._y, this._z *= VV._z, this._isDirty = !0, this
-       }
-       multiply(VV) {
- ... (213 more removed lines; see GitHub link above)
+       }(HH, LH, BH)));
+       return () => {
+         for (const HH of LH) HH?.()
```

#### 16. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2783` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L215) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L2783)

```diff
-   38296: (VV, eV, xV) => {
+   38012: (HH, BH, LH) => {
```

#### 17. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2785` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L217-L218) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L2785)

```diff
-       c: () => yV
+       b: () => SH,
+       f: () => rH
```

#### 18. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2787-L2810` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L220-L223) · [Before (L2787-L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L2787-L2810)

```diff
-     const JV = "undefined" !== typeof WeakRef;
-     class YV {
-       constructor(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 ? arguments[2] : void 0,
-           JV = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(VV, eV, xV, JV)
-       }
-       initialize(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 ? arguments[2] : void 0,
-           JV = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = VV, this.skipNextObservers = eV, this.target = xV, this.currentTarget = JV, this
-       }
-     }
-     class UV {
- ... (8 more removed lines; see GitHub link above)
+     const AH = {};
+ 
+     function rH(HH, BH) {
+       AH[HH] = BH
```

#### 19. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2812-L2916` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L225-L227) · [Before (L2812-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L2812-L2916)

```diff
-     class yV {
-       static FromPromise(VV, eV) {
-         const xV = new yV;
-         return VV.then((VV => {
-           xV.notifyObservers(VV)
-         })).catch((VV => {
-           if (!eV) throw VV;
-           eV.notifyObservers(VV)
-         })), xV
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = eV, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new YV(0), VV && (this._onObserverAdded = VV)
- ... (89 more removed lines; see GitHub link above)
+ 
+     function SH(HH) {
+       return AH[HH]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L2)

```diff
- export const ids = [255];
+ export const ids = [255, 262];
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4-L9` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L5-L25) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L4-L9)

```diff
-   38389: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => ZV,
-       h: () => vV,
-       i: () => bV,
-       k: () => rV
+   39173: HH => {
+     HH.exports = function(HH) {
+       return null != HH && null != HH.constructor && "function" === typeof HH.constructor.isBuffer && HH.constructor.isBuffer(HH)
+     }
+   },
+   39162: (HH, BH, LH) => {
+     var AH = LH(39167),
+       rH = LH(39171),
+       SH = LH(39173);
+     LH.g.__TYPEDARRAY_POOL || (LH.g.__TYPEDARRAY_POOL = {
+       UINT8: rH([32, 0]),
+       UINT16: rH([32, 0]),
+       UINT32: rH([32, 0]),
+       INT8: rH([32, 0]),
+       INT16: rH([32, 0]),
+       INT32: rH([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L11-L14` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L27-L31) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L11-L14)

```diff
-     var JV = xV(38278),
-       YV = xV(38272),
-       UV = xV(38303),
-       yV = xV(38318);
+     var hH = "undefined" !== typeof Uint8ClampedArray,
+       tH = LH.g.__TYPEDARRAY_POOL;
+     tH.UINT8C || (tH.UINT8C = rH([32, 0])), tH.BUFFER || (tH.BUFFER = rH([32, 0]));
+     var zH = tH.DATA,
+       CH = tH.BUFFER;
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L17` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L34-L38) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L17)

```diff
-       return Math.pow(VV, YV.f)
+       if (HH) {
+         var BH = HH.length || HH.byteLength,
+           LH = AH.log2(BH);
+         zH[LH].push(HH)
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L21` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L42-L45) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L21)

```diff
-       return VV <= .04045 ? .0773993808 * VV : Math.pow(.947867299 * (VV + .055), 2.4)
+       HH = AH.nextPow2(HH);
+       var BH = AH.log2(HH),
+         LH = zH[BH];
+       return LH.length > 0 ? LH.pop() : new ArrayBuffer(HH)
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L25` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L49) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L25)

```diff
-       return Math.pow(VV, YV.c)
+       return new Uint8Array(XH(HH), 0, HH)
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L29` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L53) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L29)

```diff
-       return VV <= .0031308 ? 12.92 * VV : 1.055 * Math.pow(VV, .41666) - .055
+       return new Uint16Array(XH(2 * HH), 0, HH)
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L31-L179` → after: `L55-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L55-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L55-L221) · [Before (L31-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L31-L179)

```diff
-     class ZV {
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = VV, this.g = eV, this.b = xV
-       }
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
-       }
-       getClassName() {
-         return "Color3"
-       }
-       getHashCode() {
-         let VV = 255 * this.r | 0;
-         return VV = 397 * VV ^ 255 * this.g, VV = 397 * VV ^ 255 * this.b, VV
- ... (133 more removed lines; see GitHub link above)
+ 
+     function uH(HH) {
+       return new Uint32Array(XH(4 * HH), 0, HH)
+     }
+ 
+     function QH(HH) {
+       return new Int8Array(XH(HH), 0, HH)
+     }
+ 
+     function WH(HH) {
+       return new Int16Array(XH(2 * HH), 0, HH)
+     }
+ 
+     function MH(HH) {
+       return new Int32Array(XH(4 * HH), 0, HH)
+     }
+ ... (151 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L181-L182` → after: `L223-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L223-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L223-L244) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L181-L182)

```diff
-       iG(VV) {
-         return this.r = VV.r, this.g = VV.g, this.b = VV.b, this
+       return SH
+     }
+ 
+     function CH(HH, BH, LH, AH) {
+       var tH = HH.length,
+         CH = BH.length;
+       if (!(tH <= 0 || CH <= 0)) {
+         var EH = HH[0].length >>> 1;
+         if (!(EH <= 0)) {
+           var XH, GH = rH.mallocDouble(2 * EH * tH),
+             YH = rH.mallocInt32(tH);
+           if ((tH = zH(HH, EH, GH, YH)) > 0) {
+             if (1 === EH && AH) SH.init(tH), XH = SH.sweepComplete(EH, LH, 0, tH, GH, YH, 0, tH, GH, YH);
+             else {
+               var uH = rH.mallocDouble(2 * EH * CH),
+                 QH = rH.mallocInt32(CH);
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L184-L185` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L246-L283) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L184-L185)

```diff
-       FeV(VV, eV, xV) {
-         return this.r = VV, this.g = eV, this.b = xV, this
+     }
+ 
+     function EH(HH, BH) {
+       AH.push([HH, BH])
+     }
+   },
+   39194: (HH, BH) => {
+     var LH = "d",
+       AH = "ax",
+       rH = "fp",
+       SH = "es",
+       hH = "rs",
+       tH = "re",
+       zH = "rb",
+       CH = "bs",
+       EH = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L187-L188` → after: `L285-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L285-L364) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L187-L188)

```diff
-       set(VV, eV, xV) {
-         return this.FeV(VV, eV, xV)
+       tH.push("if(re-rs>be-bs){"), HH ? (zH(!0, !1), tH.push("}else{"), zH(!1, !1)) : (tH.push("if(fp){"), zH(!0, !0), tH.push("}else{"), zH(!0, !1), tH.push("}}else{if(fp){"), zH(!1, !0), tH.push("}else{"), zH(!1, !1), tH.push("}")), tH.push("}}return " + BH);
+       var CH = AH.join("") + tH.join("");
+       return new Function(CH)()
+     }
+     BH.partial = YH(!1), BH.full = YH(!0)
+   },
+   39189: (HH, BH, LH) => {
+     HH.exports = function(HH, BH, LH, SH, EH, mH, oH, IH, fH) {
+       ! function(HH, BH) {
+         var LH = 8 * rH.log2(BH + 1) * (HH + 1) | 0,
+           SH = rH.nextPow2(PH * LH);
+         UH.length < SH && (AH.free(UH), UH = AH.mallocInt32(SH));
+         var hH = rH.nextPow2(TH * LH);
+         VH.length < hH && (AH.free(VH), VH = AH.mallocDouble(hH))
+       }(HH, SH + oH);
+       var lH, KH = 0,
+ ... (64 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L190-L191` → after: `L366-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L366-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L366-L411) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L190-L191)

```diff
-       HVV(VV) {
-         return this.r = this.g = this.b = VV, this
+     };
+     var AH = LH(39162),
+       rH = LH(39167),
+       SH = LH(39194),
+       hH = SH.partial,
+       tH = SH.full,
+       zH = LH(39176),
+       CH = LH(39202),
+       EH = LH(39211),
+       XH = 128,
+       GH = 1 << 22,
+       YH = 1 << 22,
+       uH = EH("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
+       QH = EH("lo===p0", ["p0"]),
+       WH = EH("lo<p0", ["p0"]),
+       MH = EH("hi<=p0", ["p0"]),
+ ... (30 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L193-L197` → after: `L413-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L413-L434) · [Before (L193-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L193-L197)

```diff
-       toHexString() {
-         const VV = Math.round(255 * this.r),
-           eV = Math.round(255 * this.g),
-           xV = Math.round(255 * this.b);
-         return "#" + (0, UV.ToHex)(VV) + (0, UV.ToHex)(eV) + (0, UV.ToHex)(xV)
+     }
+ 
+     function kH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+       var EH = 2 * HH,
+         XH = tH * EH,
+         GH = zH[XH + BH];
+       HH: for (var YH = AH, uH = AH * EH; YH < rH; ++YH, uH += EH) {
+         var QH = hH[YH];
+         if (QH !== CH) {
+           var WH = SH[uH + BH],
+             MH = SH[uH + BH + HH];
+           if (!(GH < WH || MH < GH)) {
+             for (var xH = BH + 1; xH < HH; ++xH) {
+               WH = SH[uH + xH], MH = SH[uH + xH + HH];
+               var vH = zH[XH + xH],
+                 PH = zH[XH + xH + HH];
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L199-L200` → after: `L436-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L436-L477) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L199-L200)

```diff
-       fromHexString(VV) {
-         return "#" !== VV.substring(0, 1) || 7 !== VV.length || (this.r = parseInt(VV.substring(1, 3), 16) / 255, this.g = parseInt(VV.substring(3, 5), 16) / 255, this.b = parseInt(VV.substring(5, 7), 16) / 255), this
+     }
+   },
+   39202: (HH, BH, LH) => {
+     HH.exports = function(HH, BH, LH, hH, tH, zH) {
+       if (hH <= LH + 1) return LH;
+       var CH = LH,
+         EH = hH,
+         XH = hH + LH >>> 1,
+         GH = 2 * HH,
+         YH = XH,
+         uH = tH[GH * XH + BH];
+       for (; CH < EH;) {
+         if (EH - CH < rH) {
+           SH(HH, BH, CH, EH, tH, zH), uH = tH[GH * XH + BH];
+           break
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L202-L203` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L479-L521) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L202-L203)

```diff
-       toHSV() {
-         return this.toHSVToRef(new ZV)
+       return AH(HH, BH, LH, XH, tH, zH, tH[GH * XH + BH])
+     };
+     var AH = LH(39211)("lo<p0", ["p0"]),
+       rH = 8;
+ 
+     function SH(HH, BH, LH, AH, rH, SH) {
+       for (var hH = 2 * HH, tH = hH * (LH + 1) + BH, zH = LH + 1; zH < AH; ++zH, tH += hH)
+         for (var CH = rH[tH], EH = zH, XH = hH * (zH - 1); EH > LH && rH[XH + BH] > CH; --EH, XH -= hH) {
+           for (var GH = XH, YH = XH + hH, uH = 0; uH < hH; ++uH, ++GH, ++YH) {
+             var QH = rH[GH];
+             rH[GH] = rH[YH], rH[YH] = QH
+           }
+           var WH = SH[EH];
+           SH[EH] = SH[EH - 1], SH[EH - 1] = WH
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L205-L211` → after: `L523-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L523-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L523-L621) · [Before (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L205-L211)

```diff
-       toHSVToRef(VV) {
-         const eV = this.r,
-           xV = this.g,
-           JV = this.b,
-           YV = Math.max(eV, xV, JV),
-           UV = Math.min(eV, xV, JV);
-         let yV = 0,
+     }
+ 
+     function AH(HH, BH, LH) {
+       BH *= 2;
+       var AH = LH[HH *= 2],
+         rH = LH[HH + 1];
+       LH[HH] = LH[BH], LH[HH + 1] = LH[BH + 1], LH[BH] = AH, LH[BH + 1] = rH
+     }
+ 
+     function rH(HH, BH, LH) {
+       BH *= 2, LH[HH *= 2] = LH[BH], LH[HH + 1] = LH[BH + 1]
+     }
+ 
+     function SH(HH, BH, LH, AH) {
+       BH *= 2, LH *= 2;
+       var rH = AH[HH *= 2],
+ ... (83 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L213-L237` → after: `L623-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L623-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L623-L656) · [Before (L213-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L213-L237)

```diff
-         const QV = YV,
-           nV = YV - UV;
-         return 0 !== YV && (pV = nV / YV), YV != UV && (YV == eV ? (yV = (xV - JV) / nV, xV < JV && (yV += 6)) : YV == xV ? yV = (JV - eV) / nV + 2 : YV == JV && (yV = (eV - xV) / nV + 4), yV *= 60), VV.r = yV, VV.g = pV, VV.b = QV, VV
-       }
-       toLinearSpace() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = new ZV;
-         return this.toLinearSpaceToRef(eV, VV), eV
-       }
-       toLinearSpaceToRef(VV) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (VV.r = QV(this.r), VV.g = QV(this.g), VV.b = QV(this.b)) : (VV.r = pV(this.r), VV.g = pV(this.g), VV.b = pV(this.b)), this
-       }
-       toGammaSpace() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = new ZV;
-         return this.toGammaSpaceToRef(eV, VV), eV
- ... (9 more removed lines; see GitHub link above)
+         for (VH = 0; VH < mH; ++VH) {
+           var fH = 0 | uH[2 * VH + 1];
+           if (fH >= hH) QH(EH, XH, IH--, fH = fH - hH | 0);
+           else if (fH >= 0) QH(zH, CH, oH--, fH);
+           else if (fH <= -hH) {
+             fH = -fH - hH | 0;
+             for (var lH = 0; lH < oH; ++lH) {
+               if (void 0 !== (KH = BH(zH[lH], fH))) return KH
+             }
+             WH(EH, XH, IH++, fH)
+           } else {
+             fH = -fH - 1 | 0;
+             for (lH = 0; lH < IH; ++lH) {
+               var KH;
+               if (void 0 !== (KH = BH(fH, EH[lH]))) return KH
+             }
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L240-L309` → after: `L659-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L659-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L659-L770) · [Before (L240-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L240-L309)

```diff
-         UV >= 0 && UV <= 1 ? (pV = YV, QV = yV) : UV >= 1 && UV <= 2 ? (pV = yV, QV = YV) : UV >= 2 && UV <= 3 ? (QV = YV, nV = yV) : UV >= 3 && UV <= 4 ? (QV = yV, nV = YV) : UV >= 4 && UV <= 5 ? (pV = yV, nV = YV) : UV >= 5 && UV <= 6 && (pV = YV, nV = yV);
-         const wV = xV - YV;
-         return JV.r = pV + wV, JV.g = QV + wV, JV.b = nV + wV, JV
-       }
-       static FromHSV(VV, eV, xV) {
-         const JV = new ZV(0, 0, 0);
-         return ZV.HSVtoRGBToRef(VV, eV, xV, JV), JV
-       }
-       static FromHexString(VV) {
-         return new ZV(0, 0, 0).fromHexString(VV)
-       }
-       static FromArray(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new ZV(VV[eV], VV[eV + 1], VV[eV + 2])
-       }
-       static FromArrayToRef(VV) {
- ... (54 more removed lines; see GitHub link above)
+         for (OH = 0; OH < oH; ++OH) {
+           var KH = 0 | uH[2 * OH + 1],
+             cH = 1 & KH;
+           if (OH < oH - 1 && KH >> 1 === uH[2 * OH + 3] >> 1 && (cH = 2, OH += 1), KH < 0) {
+             for (var eH = -(KH >> 1) - 1, qH = 0; qH < lH; ++qH) {
+               if (void 0 !== (gH = BH(GH[qH], eH))) return gH
+             }
+             if (0 !== cH)
+               for (qH = 0; qH < IH; ++qH) {
+                 if (void 0 !== (gH = BH(zH[qH], eH))) return gH
+               }
+             if (1 !== cH)
+               for (qH = 0; qH < fH; ++qH) {
+                 var gH;
+                 if (void 0 !== (gH = BH(EH[qH], eH))) return gH
+               }
+ ... (96 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L311-L312` → after: `L772-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L772-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L772-L843) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L311-L312)

```diff
-       static Magenta() {
-         return new ZV(1, 0, 1)
+     };
+     var AH = LH(39162),
+       rH = LH(39167),
+       SH = LH(39185),
+       hH = 1 << 28,
+       tH = 1024,
+       zH = AH.mallocInt32(tH),
+       CH = AH.mallocInt32(tH),
+       EH = AH.mallocInt32(tH),
+       XH = AH.mallocInt32(tH),
+       GH = AH.mallocInt32(tH),
+       YH = AH.mallocInt32(tH),
+       uH = AH.mallocDouble(8192);
+ 
+     function QH(HH, BH, LH, AH) {
+       var rH = BH[AH],
+ ... (56 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L314-L315` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L845-L847) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L314-L315)

```diff
-       static Yellow() {
-         return new ZV(1, 1, 0)
+ 
+       function CH() {
+         tH.timeout || (tH.timeout = !0, setTimeout(EH, 1))
```

#### 21. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L317-L318` → after: `L849-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L849-L851) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L317-L318)

```diff
-       static Gray() {
-         return new ZV(.5, .5, .5)
+ 
+       function EH() {
+         tH.timeout = !1, XH()
```

#### 22. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L320-L321` → after: `L853-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L853-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L853-L988) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L320-L321)

```diff
-       static Teal() {
-         return new ZV(0, 1, 1)
+ 
+       function XH() {
+         tH.multiComps.length && function(HH) {
+           for (var BH = 0; BH < HH.length; BH++) {
+             var {
+               entID: LH,
+               data: AH
+             } = HH[BH], rH = AH.hash[LH];
+             if (rH) {
+               for (var SH = 0; SH < rH.length; SH++) rH[SH] || (rH.splice(SH, 1), SH--);
+               0 === rH.length && (AH.remove(LH), tH.removals.push(AH))
+             }
+           }
+           HH.length = 0
+         }(tH.multiComps), tH.removals.length && function(HH) {
+           for (var BH = 0; BH < HH.length; BH++) {
+ ... (120 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L323-L324` → after: `L990-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L990-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L990-L1001) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L323-L324)

```diff
-       static Random() {
-         return new ZV(Math.random(), Math.random(), Math.random())
+     };
+     var AH = LH(39127)
+   },
+   39127: HH => {
+     function BH(HH, BH) {
+       var LH = HH._map[BH];
+       if (delete HH.hash[BH], delete HH._map[BH], LH === HH.list.length - 1) HH.list.pop(), HH._idList.pop();
+       else {
+         var AH = HH.list.pop();
+         HH.list[LH] = AH;
+         var rH = HH._idList.pop();
+         HH._idList[LH] = rH, HH._map[rH] = LH
```

#### 24. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L327-L328` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1004) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L327-L328)

```diff
-     ZV._V8PerformanceHack = new ZV(.5, .5, .5), ZV._BlackReadOnly = ZV.Black();
-     class vV {
+     HH.exports = class {
```

#### 25. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L330-L499` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1006) · [Before (L330-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L330-L499)

```diff
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = VV, this.g = eV, this.b = xV, this.a = JV
-       }
-       WYV() {
-         return [this.r, this.g, this.b, this.a]
-       }
-       toArray(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return VV[eV] = this.r, VV[eV + 1] = this.g, VV[eV + 2] = this.b, VV[eV + 3] = this.a, this
-       }
-       wZ(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return this.r = VV[eV], this.g = VV[eV + 1], this.b = VV[eV + 2], this.a = VV[eV + 3], this
- ... (154 more removed lines; see GitHub link above)
+         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
```

#### 26. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L501-L504` → after: `L1008-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1008-L1012) · [Before (L501-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L501-L504)

```diff
-       toGammaSpace() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = new vV;
-         return this.toGammaSpaceToRef(eV, VV), eV
+       add(HH, BH) {
+         if ("number" === typeof this._map[HH]) {
+           var LH = this._map[HH];
+           this.hash[HH] = BH, this.list[LH] = BH, this._idList[LH] = HH
+         } else this._map[HH] = this.list.length, this.hash[HH] = BH, this.list.push(BH), this._idList.push(HH)
```

#### 27. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L506-L507` → after: `L1014-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1014-L1016) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L506-L507)

```diff
-       toGammaSpaceToRef(VV) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (VV.r = wV(this.r), VV.g = wV(this.g), VV.b = wV(this.b)) : (VV.r = nV(this.r), VV.g = nV(this.g), VV.b = nV(this.b)), VV.a = this.a, this
+       remove(HH) {
+         var BH = this._map[HH];
+         this.hash[HH] = null, this.list[BH] = null, this._pendingRemovals.push(HH)
```

#### 28. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L509-L510` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1018-L1019) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L509-L510)

```diff
-       static FromHexString(VV) {
-         return "#" !== VV.substring(0, 1) || 9 !== VV.length && 7 !== VV.length ? new vV(0, 0, 0, 0) : new vV(0, 0, 0, 1).fromHexString(VV)
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
```

#### 29. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L512-L562` → after: `L1021-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1021-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1021-L1024) · [Before (L512-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L512-L562)

```diff
-       static Lerp(VV, eV, xV) {
-         return vV.LerpToRef(VV, eV, xV, new vV)
-       }
-       static LerpToRef(VV, eV, xV, JV) {
-         return JV.r = VV.r + (eV.r - VV.r) * xV, JV.g = VV.g + (eV.g - VV.g) * xV, JV.b = VV.b + (eV.b - VV.b) * xV, JV.a = VV.a + (eV.a - VV.a) * xV, JV
-       }
-       static Hermite(VV, eV, xV, JV, YV) {
-         const UV = YV * YV,
-           yV = YV * UV,
-           pV = 2 * yV - 3 * UV + 1,
-           QV = -2 * yV + 3 * UV,
-           nV = yV - 2 * UV + YV,
-           wV = yV - UV,
-           ZV = VV.r * pV + xV.r * QV + eV.r * nV + JV.r * wV,
-           rV = VV.g * pV + xV.g * QV + eV.g * nV + JV.g * wV,
-           kV = VV.b * pV + xV.b * QV + eV.b * nV + JV.b * wV,
- ... (35 more removed lines; see GitHub link above)
+       flush() {
+         for (var HH = 0; HH < this._pendingRemovals.length; HH++) {
+           var LH = this._pendingRemovals[HH];
+           null === this.hash[LH] && BH(this, LH)
```

#### 30. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L564` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1026) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L564)

```diff
-         return VV
+         this._pendingRemovals.length = 0
```

#### 31. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L590-L604` → after: `L1030-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1030-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1030-L1069) · [Before (L590-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L590-L604)

```diff
-   38272: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV,
-       c: () => JV,
-       f: () => YV
-     });
-     const JV = 1 / 2.2,
-       YV = 2.2;
-     Math.sqrt(5);
-     let UV = .001
-   },
-   38303: (VV, eV, xV) => {
-     function JV(VV) {
-       return parseInt(VV.toString().replace(/\W/g, ""))
-     }
+   38921: (HH, BH, LH) => {
+     HH = LH.nmd(HH);
+     var AH = "__lodash_hash_undefined__",
+       rH = 9007199254740991,
+       SH = "[object Arguments]",
+       hH = "[object Boolean]",
+       tH = "[object Date]",
+       zH = "[object Function]",
+       CH = "[object GeneratorFunction]",
+       EH = "[object Map]",
+       XH = "[object Number]",
+       GH = "[object Object]",
+       YH = "[object Promise]",
+       uH = "[object RegExp]",
+       QH = "[object Set]",
+       WH = "[object String]",
+ ... (24 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L607-L613` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1072) · [Before (L607-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L607-L613)

```diff
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(VV - eV) <= xV
-     }
- 
-     function UV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return VV < eV - JV || VV > xV + JV
+       return HH.set(BH[0], BH[1]), HH
```

#### 33. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L617` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1076) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L617)

```diff
-       return VV === eV ? VV : Math.random() * (eV - VV) + VV
+       return HH.add(BH), HH
```

#### 34. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L620-L621` → after: `L1079-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1079-L1083) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L620-L621)

```diff
-     function pV(VV, eV, xV) {
-       return VV + (eV - VV) * xV
+     function DH(HH, BH, LH, AH) {
+       var rH = -1,
+         SH = HH ? HH.length : 0;
+       for (AH && SH && (LH = HH[++rH]); ++rH < SH;) LH = BH(LH, HH[rH], rH, HH);
+       return LH
```

#### 35. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L624-L626` → after: `L1086-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1086-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1086-L1091) · [Before (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L624-L626)

```diff
-     function QV(VV, eV, xV) {
-       let JV = EV(eV - VV, 360);
-       return JV > 180 && (JV -= 360), VV + JV * vV(xV)
+     function wH(HH) {
+       var BH = !1;
+       if (null != HH && "function" != typeof HH.toString) try {
+         BH = !!(HH + "")
+       } catch (LH) {}
+       return BH
```

#### 36. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L629-L631` → after: `L1094-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1094-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1094-L1099) · [Before (L629-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L629-L631)

```diff
-     function nV(VV, eV, xV) {
-       let JV;
-       return JV = VV != eV ? vV((xV - VV) / (eV - VV)) : 0, JV
+     function ZH(HH) {
+       var BH = -1,
+         LH = Array(HH.size);
+       return HH.forEach((function(HH, AH) {
+         LH[++BH] = [AH, HH]
+       })), LH
```

#### 37. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L634-L637` → after: `L1102-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1102-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1102-L1105) · [Before (L634-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L634-L637)

```diff
-     function wV(VV, eV, xV, JV, YV) {
-       const UV = YV * YV,
-         yV = YV * UV;
-       return VV * (2 * yV - 3 * UV + 1) + xV * (-2 * yV + 3 * UV) + eV * (yV - 2 * UV + YV) + JV * (yV - UV)
+     function dH(HH, BH) {
+       return function(LH) {
+         return HH(BH(LH))
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L640-L642` → after: `L1108-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1108-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1108-L1113) · [Before (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L640-L642)

```diff
-     function ZV(VV, eV, xV, JV, YV) {
-       const UV = YV * YV;
-       return 6 * (UV - YV) * VV + (3 * UV - 4 * YV + 1) * eV + 6 * (-UV + YV) * xV + (3 * UV - 2 * YV) * JV
+     function aH(HH) {
+       var BH = -1,
+         LH = Array(HH.size);
+       return HH.forEach((function(HH) {
+         LH[++BH] = HH
+       })), LH
```

#### 39. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L646-L648` → after: `L1152-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1152-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1152-L1157) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L646-L648)

```diff
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(xV, Math.max(eV, VV))
+       var BH = -1,
+         LH = HH ? HH.length : 0;
+       for (this.clear(); ++BH < LH;) {
+         var AH = HH[BH];
+         this.set(AH[0], AH[1])
+       }
```

#### 40. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L652` → after: `L1161-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1161-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1161-L1166) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L652)

```diff
-       return VV -= 2 * Math.PI * Math.floor((VV + Math.PI) / (2 * Math.PI))
+       var BH = -1,
+         LH = HH ? HH.length : 0;
+       for (this.clear(); ++BH < LH;) {
+         var AH = HH[BH];
+         this.set(AH[0], AH[1])
+       }
```

#### 41. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L656-L657` → after: `L1170-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1170-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1170-L1175) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L656-L657)

```diff
-       const eV = VV.toString(16);
-       return VV <= 15 ? ("0" + eV).toUpperCase() : eV.toUpperCase()
+       var BH = -1,
+         LH = HH ? HH.length : 0;
+       for (this.clear(); ++BH < LH;) {
+         var AH = HH[BH];
+         this.set(AH[0], AH[1])
+       }
```

#### 42. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L661-L670` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1179) · [Before (L661-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L661-L670)

```diff
-       if (Math.log2) return Math.floor(Math.log2(VV));
-       if (VV < 0) return NaN;
-       if (0 === VV) return -1 / 0;
-       let eV = 0;
-       if (VV < 1) {
-         for (; VV < 1;) eV++, VV *= 2;
-         eV = -eV
-       } else if (VV > 1)
-         for (; VV > 1;) eV++, VV = Math.floor(VV / 2);
-       return eV
+       this.__data__ = new oB(HH)
```

#### 43. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L674` → after: `L1183-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1183-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1183-L1196) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L674)

```diff
-       return VV - Math.floor(VV / eV) * eV
+       var LH = aB(HH) || function(HH) {
+           return function(HH) {
+             return function(HH) {
+               return !!HH && "object" == typeof HH
+             }(HH) && sB(HH)
+           }(HH) && BB.call(HH, "callee") && (!CB.call(HH, "callee") || LB.call(HH) == SH)
+         }(HH) ? function(HH, BH) {
+           for (var LH = -1, AH = Array(HH); ++LH < HH;) AH[LH] = BH(LH);
+           return AH
+         }(HH.length, String) : [],
+         AH = LH.length,
+         rH = !!AH;
+       for (var hH in HH) !BH && !BB.call(HH, hH) || rH && ("length" == hH || DB(hH, AH)) || LH.push(hH);
+       return LH
```

#### 44. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L678` → after: `L1200-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1200-L1201) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L678)

```diff
-       return (VV - eV) / (xV - eV)
+       var AH = HH[BH];
+       BB.call(HH, BH) && dB(AH, LH) && (void 0 !== LH || BH in HH) || (HH[BH] = LH)
```

#### 45. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L681-L682` → after: `L1204-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1204-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1204-L1335) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L681-L682)

```diff
-     function jV(VV, eV, xV) {
-       return VV * (xV - eV) + eV
+     function cB(HH, BH) {
+       for (var LH = HH.length; LH--;)
+         if (dB(HH[LH][0], BH)) return LH;
+       return -1
+     }
+ 
+     function eB(HH, BH, LH, AH, rH, YH, xH) {
+       var lH;
+       if (AH && (lH = YH ? AH(HH, rH, YH, xH) : AH(HH)), void 0 !== lH) return lH;
+       if (!pB(HH)) return HH;
+       var KH = aB(HH);
+       if (KH) {
+         if (lH = function(HH) {
+             var BH = HH.length,
+               LH = HH.constructor(BH);
+             BH && "string" == typeof HH[0] && BB.call(HH, "index") && (LH.index = HH.index, LH.input = HH.input);
+ ... (116 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L686-L687` → after: `L1339-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1339-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1339-L1343) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L686-L687)

```diff
-       let xV = EV(eV - VV, 360);
-       return xV > 180 && (xV -= 360), xV
+       var LH = HH.__data__;
+       return function(HH) {
+         var BH = typeof HH;
+         return "string" == BH || "number" == BH || "symbol" == BH || "boolean" == BH ? "__proto__" !== HH : null === HH
+       }(BH) ? LH["string" == typeof BH ? "string" : "hash"] : LH.map
```

#### 47. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L691-L692` → after: `L1347-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1347-L1350) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L691-L692)

```diff
-       const xV = EV(VV, 2 * eV);
-       return eV - Math.abs(xV - eV)
+       var LH = function(HH, BH) {
+         return null == HH ? void 0 : HH[BH]
+       }(HH, BH);
+       return qB(LH) ? LH : void 0
```

#### 48. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L695-L697` → after: `L1422-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1422-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1422-L1423) · [Before (L695-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L695-L697)

```diff
-     function FV(VV, eV, xV) {
-       let JV = vV(xV);
-       return JV = -2 * JV * JV * JV + 3 * JV * JV, eV * JV + VV * (1 - JV)
+     function DB(HH, BH) {
+       return !!(BH = null == BH ? rH : BH) && ("number" == typeof HH || KH.test(HH)) && HH > -1 && HH % 1 == 0 && HH < BH
```

#### 49. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L700-L702` → after: `L1426-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1426-L1428) · [Before (L700-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L700-L702)

```diff
-     function TV(VV, eV, xV) {
-       let JV;
-       return JV = Math.abs(eV - VV) <= xV ? eV : VV + Math.sign(eV - VV) * xV, JV
+     function wB(HH) {
+       var BH = HH && HH.constructor;
+       return HH === ("function" == typeof BH && BH.prototype || iH)
```

#### 50. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L705-L708` → after: `L1431-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1431-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1431-L1440) · [Before (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L705-L708)

```diff
-     function PV(VV, eV, xV) {
-       const JV = qV(VV, eV);
-       let YV;
-       return YV = -xV < JV && JV < xV ? eV : TV(VV, eV = VV + JV, xV), YV
+     function ZB(HH) {
+       if (null != HH) {
+         try {
+           return HB.call(HH)
+         } catch (BH) {}
+         try {
+           return HH + ""
+         } catch (BH) {}
+       }
+       return ""
```

#### 51. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L711-L712` → after: `L1443-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1443-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1443-L1468) · [Before (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L711-L712)

```diff
-     function AV(VV, eV, xV) {
-       return (VV - eV) / (xV - eV)
+     function dB(HH, BH) {
+       return HH === BH || HH !== HH && BH !== BH
+     }(uB && FB(new uB(new ArrayBuffer(1))) != PH || QB && FB(new QB) != EH || WB && FB(WB.resolve()) != YH || MB && FB(new MB) != QH || xB && FB(new xB) != xH) && (FB = function(HH) {
+       var BH = LB.call(HH),
+         LH = BH == GH ? HH.constructor : void 0,
+         AH = LH ? ZB(LH) : void 0;
+       if (AH) switch (AH) {
+         case PB:
+           return PH;
+         case TB:
+           return EH;
+         case UB:
+           return YH;
+         case VB:
+           return QH;
+         case OB:
+ ... (10 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L715-L716` → after: `L1474-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1474-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1474-L1476) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L715-L716)

```diff
-     function NV(VV, eV, xV) {
-       return (xV - eV) * VV + eV
+     function iB(HH) {
+       var BH = pB(HH) ? LB.call(HH) : "";
+       return BH == zH || BH == CH
```

#### 53. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L719-L721` → after: `L1479-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1479-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1479-L1493) · [Before (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L719-L721)

```diff
-     function XV(VV, eV) {
-       const xV = VV % eV;
-       return 0 === xV ? eV : XV(eV, xV)
+     function pB(HH) {
+       var BH = typeof HH;
+       return !!HH && ("object" == BH || "function" == BH)
+     }
+ 
+     function yB(HH) {
+       return sB(HH) ? lB(HH) : function(HH) {
+         if (!wB(HH)) return YB(HH);
+         var BH = [];
+         for (var LH in Object(HH)) BB.call(HH, LH) && "constructor" != LH && BH.push(LH);
+         return BH
+       }(HH)
+     }
+     HH.exports = function(HH) {
+       return eB(HH, !0, !0)
```

#### 54. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L750-L754` → after: `L1496-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1496-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1496-L1508) · [Before (L750-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L750-L754)

```diff
-   38278: (VV, eV, xV) => {
-     function JV(VV, eV) {
-       const xV = [];
-       for (let JV = 0; JV < VV; ++JV) xV.push(eV());
-       return xV
+   39318: HH => {
+     function BH(HH, BH, LH) {
+       for (var AH = HH.length, rH = -1 / 0, SH = 1 / 0, hH = 0; hH < AH; hH++) {
+         var tH = (LH[0][hH] - HH[hH]) / BH[hH],
+           zH = (LH[1][hH] - HH[hH]) / BH[hH];
+         if (tH > zH) {
+           var CH = tH;
+           tH = zH, zH = CH
+         }
+         if (zH < rH || tH > SH) return 1 / 0;
+         tH > rH && (rH = tH), zH < SH && (SH = zH)
+       }
+       return rH > SH ? 1 / 0 : rH
```

#### 55. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L757-L758` → after: `L1523-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1523-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1523-L1550) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L757-L758)

```diff
-     function YV(VV, eV) {
-       return JV(VV, eV)
+     function rH(HH) {
+       for (var BH, LH, rH = 0, SH = HH.length, hH = 0; hH < HH.length;) {
+         for (BH = HH[hH], LH = 0; hH < SH && HH[hH] === BH;) ++hH, ++LH;
+         rH += AH.log2(LH) / 7 | 0, rH += AH.log2(BH >>> 0) / 7 | 0, rH += 2
+       }
+       return rH
+     }
+     BH.size = rH, BH.encode = function(HH, BH) {
+       BH || (BH = new Uint8Array(rH(HH)));
+       for (var LH, AH, SH = 0, hH = BH.length, tH = 0; tH < HH.length;) {
+         for (LH = HH[tH], AH = 0; tH < HH.length && HH[tH] === LH;) ++tH, ++AH;
+         for (; SH < hH && AH >= 128;) BH[SH++] = 128 + (127 & AH), AH >>>= 7;
+         if (SH >= hH) throw new Error("RLE buffer overflow");
+         for (BH[SH++] = AH, LH >>>= 0; SH < hH && LH >= 128;) BH[SH++] = 128 + (127 & LH), LH >>>= 7;
+         if (SH >= hH) throw new Error("RLE buffer overflow");
+         BH[SH++] = LH
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L761-L763` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1609-L1610) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L761-L763)

```diff
-       e: () => JV,
-       h: () => YV,
-       i: () => yV
+       Color3: () => AH.c,
+       d: () => AH.g
```

#### 57. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L765-L784` → after: `L1612-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1612-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1612-L1656) · [Before (L765-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L765-L784)

```diff
-     const UV = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function yV(VV, eV) {
-       const xV = UV.map((xV => function(VV, eV, xV) {
-         const JV = VV[eV];
-         if ("function" !== typeof JV) return null;
-         const YV = function() {
-           const JV = VV.length,
-             UV = YV.previous.apply(VV, arguments);
-           return xV(eV, JV), UV
-         };
-         return JV.next = YV, YV.previous = JV, VV[eV] = YV, () => {
-           const xV = YV.previous;
-           if (!xV) return;
-           const JV = YV.next;
-           JV ? (xV.next = JV, JV.previous = xV) : (xV.next = void 0, VV[eV] = xV), YV.next = void 0, YV.previous = void 0
- ... (4 more removed lines; see GitHub link above)
+     var AH = LH(38074);
+     (0, AH.j)()
+   },
+   38610: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH
+     });
+     var AH = LH(38619);
+     class rH {
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
+       }
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+ ... (29 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L788` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1660) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L788)

```diff
-   38318: (VV, eV, xV) => {
+   38619: (HH, BH, LH) => {
```

#### 59. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L793-L796` → after: `L1664-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1664-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1664-L1741) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L793-L796)

```diff
-     const JV = {};
- 
-     function YV(VV, eV) {
-       JV[VV] = eV
+     var AH = LH(37963);
+     class rH {
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
+       }
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+ ... (62 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L798-L800` → after: `L1743-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1743-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/255.js#L1743-L1782) · [Before (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/255.js#L798-L800)

```diff
- 
-     function UV(VV) {
-       return JV[VV]
+     rH._TmpMatrix = AH.e.Identity()
+   },
+   37961: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       Matrix: () => AH.e,
+       Quaternion: () => AH.f,
+       RegisterMathVector: () => AH.h,
+       TmpVectors: () => AH.l,
+       Vector2: () => AH.n,
+       lu: () => AH.o,
+       Vector4: () => AH.q
+     });
+     var AH = LH(37963);
+     (0, AH.h)()
+   },
+   38966: (HH, BH, LH) => {
+ ... (24 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L2)

```diff
- export const ids = [256];
+ export const ids = [256, 262, 266];
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L4-L250) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   38287: (VV, eV, xV) => {
+   41520: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH,
+       e: () => tH
+     });
+     var AH = LH(39595),
+       rH = LH(41319),
+       SH = LH(41489),
+       hH = {};
+     class tH {
+       constructor(HH) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = HH, this.checkInputs = () => {}
+       }
+       add(HH) {
+         const BH = HH.getSimpleName();
+         this.attached[BH] ? AH.e.Warn("camera input of type " + BH + " already exists on camera") : (this.attached[BH] = HH, HH.camera = this.camera, HH.checkInputs && (this.checkInputs = this._addCheckInputs(HH.checkInputs.bind(HH))), this.attachedToElement && HH.attachControl(t … [truncated]
+ ... (231 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8` → after: `L254-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L254-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L254-L351) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L8)

```diff
-     var JV = xV(38296);
+     var AH = LH(37963);
+     class rH {
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
+       }
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+ ... (82 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L10-L11` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L353-L354) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L10-L11)

```diff
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       constructor(HH, BH, LH, AH) {
+         this.x = HH, this.y = BH, this.width = LH, this.height = AH
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L13-L14` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L356-L357) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+       toGlobal(HH, BH) {
+         return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L17` → after: `L437-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L437-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L437-L444) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L17)

```diff
-     YV.Instances = [], YV.OnEnginesDisposedObservable = new JV.c, YV._LastCreatedScene = null, YV.UseFallbackTexture = !0, YV.FallbackTexture = ""
+     let EH = !1;
+     EH || (EH = !0, hH.b.CreateBox = zH, SH.c.CreateBox = function(HH, BH) {
+       return CH(HH, {
+         size: BH,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L19` → after: `L446-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L446-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L446-L708) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L19)

```diff
-   39867: (VV, eV, xV) => {
+   41749: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => XH
+     });
+     var AH = LH(37963),
+       rH = LH(41693),
+       SH = LH(41703),
+       hH = LH(41754),
+       tH = LH(41427),
+       zH = LH(39595);
+ 
+     function CH(HH) {
+       const BH = [],
+         LH = [],
+         AH = HH.lines,
+         rH = HH.colors,
+ ... (247 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L23` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L712) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L23)

```diff
-     var JV = xV(39870);
+     var AH = LH(39595);
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L56` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L745) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L56)

```diff
-             JV.b.Warn(QV.message)
+             AH.e.Warn(zH.message)
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L62` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L751) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L62)

```diff
-   39058: (VV, eV, xV) => {
+   38790: (HH, BH, LH) => {
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L66` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L755) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L66)

```diff
-         return ("x" === VV ? eV : 3 & eV | 8).toString(16)
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L70` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L759) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L70)

```diff
-       d: () => JV
+       e: () => AH
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L73` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L762) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L73)

```diff
-   39870: (VV, eV, xV) => {
+   39595: (HH, BH, LH) => {
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L75` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L764) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L75)

```diff
-       b: () => JV
+       e: () => AH
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L96` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L785) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L96)

```diff
-         const eV = VV => VV < 10 ? "0" + VV : "" + VV,
+         const BH = HH => HH < 10 ? "0" + HH : "" + HH,
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L111` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L800) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L111)

```diff
-         const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
+         const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L144` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L833) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L144)

```diff
-   38296: (VV, eV, xV) => {
+   41374: (HH, BH, LH) => {
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L146` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L835) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L146)

```diff
-       c: () => yV
+       e: () => AH.d
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L148-L303` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/256.js#L837-L838) · [Before (L148-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/256.js#L148-L303)

```diff
-     const JV = "undefined" !== typeof WeakRef;
-     class YV {
-       constructor(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 ? arguments[2] : void 0,
-           JV = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(VV, eV, xV, JV)
-       }
-       initialize(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 ? arguments[2] : void 0,
-           JV = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = VV, this.skipNextObservers = eV, this.target = xV, this.currentTarget = JV, this
-       }
-     }
-     class UV {
- ... (140 more removed lines; see GitHub link above)
+     var AH = LH(41383);
+     (0, AH.c)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257];
+ export const ids = [257, 262];
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   38349: (VV, eV, xV) => {
+   45301: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6-L8` → after: `L6-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L6-L613) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L6-L8)

```diff
-       b: () => pV,
-       f: () => yV,
-       j: () => YV
+       e: () => hH
+     });
+     var AH = LH(45245),
+       rH = LH(41283);
+     let SH = !1;
+ 
+     function hH() {
+       SH || (SH = !0, rH.e.prototype._sphericalPolynomialTargetSize = 0, rH.e.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(rH.e.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = AH.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = HH, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+ ... (592 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10-L12` → after: `L615-L13394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L615-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L615-L13394) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L10-L12)

```diff
-     const JV = 1024,
-       YV = 16,
-       UV = 36e4;
+     var AH = LH(37961),
+       rH = LH(64093),
+       SH = LH(41573);
+     class hH {
+       static OBJ(HH, BH, LH, hH) {
+         const tH = [];
+         let zH = 1,
+           CH = 1;
+         BH && (LH || (LH = "mat"), tH.push("mtllib " + LH + ".mtl"));
+         for (let EH = 0; EH < HH.length; EH++) {
+           const LH = HH[EH],
+             XH = LH.name || `mesh${EH}}`;
+           tH.push(`o ${XH}`);
+           let GH = null;
+           if (hH) {
+             const HH = LH.computeWorldMatrix(!0);
+ ... (12764 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L15` → after: `L13397-L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13397-L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L13397-L13416) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L15)

```diff
-         this.boneCount = VV, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * VV), this.position = new Float64Array(3 * VV), this.scale = new Float64Array(3 * VV).fill(1), this.touched = new Uint8Arra … [truncated]
+         this.name = kS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
+         const AH = [];
+         if (LH instanceof er) {
+           if (this._isExtensionEnabled(LH)) return LH.subSurface.thicknessTexture && AH.push(LH.subSurface.thicknessTexture), AH
+         } else LH instanceof pB && (LH.transmissionWeight > 0 || LH.subsurfaceWeight > 0) && LH.geometryThicknessTexture && AH.push(LH.geometryThicknessTexture);
+         return AH
+       }
+       _isExtensionEnabled(HH) {
+         if (HH.unlit) return !1;
+         const BH = HH.subSurface;
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L17-L24` → after: `L13418-L13470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13418-L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L13418-L13470) · [Before (L17-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L17-L24)

```diff
-       clampToLimits() {
-         for (let VV = 0; VV < this.boneCount; VV++)
-           if (0 !== this.touched[VV])
-             for (let eV = 3 * VV; eV < 3 * VV + 3; eV++) {
-               const VV = this.rotation[eV],
-                 xV = this.position[eV],
-                 yV = this.scale[eV];
-               VV >= -36e4 && VV <= UV || (this.rotation[eV] = QV(VV, UV)), xV >= -1024 && xV <= JV || (this.position[eV] = QV(xV, JV)), yV >= -YV && yV <= YV || (this.scale[eV] = QV(yV, YV, 1))
+       postExportMaterialAsync(HH, BH, LH) {
+         return new Promise((HH => {
+           if (LH instanceof er && this._isExtensionEnabled(LH)) {
+             this._wasUsed = !0;
+             const HH = LH.subSurface,
+               AH = {
+                 thicknessFactor: 0 == HH.maximumThickness ? void 0 : HH.maximumThickness,
+                 thicknessTexture: this._exporter._materialExporter.getTextureInfo(HH.thicknessTexture) ?? void 0,
+                 attenuationDistance: HH.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : HH.tintColorAtDistance,
+                 attenuationColor: HH.tintColor.equalsFloats(1, 1, 1) ? void 0 : HH.tintColor.xrH()
+               };
+             this._hasTexturesExtension(LH) && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions = BH.extensions || {}, BH.extensions[kS] = AH
+           } else if (LH instanceof pB) {
+             const HH = LH.transmissionWeight > 0 && !LH.geometryThinWalled,
+               AH = LH.subsurfaceWeight > 0 && !LH.geometryThinWalled;
+             if (HH || AH) {
+ ... (37 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L27-L31` → after: `L13476-L13539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13476-L13539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L13476-L13539) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L27-L31)

```diff
-       reset() {
-         for (let VV = 0; VV < this.boneCount; VV++)
-           if (0 !== this.touched[VV]) {
-             this.touched[VV] = 0;
-             for (let eV = 3 * VV; eV < 3 * VV + 3; eV++) this.rotation[eV] = 0, this.position[eV] = 0, this.scale[eV] = 1
+     }
+     let oS = !1;
+ 
+     function IS() {
+       oS || (oS = !0, cA.RegisterExtension(kS, (HH => new mS(HH))))
+     }
+     IS();
+     const fS = "KHR_materials_volume_scatter";
+     class lS {
+       constructor(HH) {
+         this.name = fS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (48 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L37` → after: `L13554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L13554) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L37)

```diff
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * VV), this.position = new Float64Arra … [truncated]
+         this.name = eS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
```

#### 9. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L39-L40` → after: `L13556-L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13556-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L13556-L13558) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L39-L40)

```diff
-       touch(VV, eV, xV) {
-         0 === this.touched[VV] && (this.touched[VV] = 1, this.touchedBones[this.touchedCount++] = VV), this.boneWeight[VV] += eV, xV && (this.overrides[VV] = 1)
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 10. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L42-L49` → after: `L13560-L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13560-L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L13560-L14153) · [Before (L42-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L42-L49)

```diff
-       applyTo(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let YV = 0; YV < this.touchedCount; YV++) {
-           const UV = this.touchedBones[YV],
-             yV = this.boneWeight[UV];
-           if (xV || 1 === this.overrides[UV]) {
-             const xV = eV * Math.min(1, yV);
-             for (let eV = 3 * UV; eV < 3 * UV + 3; eV++) VV.rotation[eV] += (this.rotation[eV] / yV - VV.rotation[eV]) * xV, VV.position[eV] += (this.position[eV] / yV - VV.position[eV]) * xV, VV.scale[eV] += (1 + this.scaleDelta[eV] / yV - VV.scale[eV]) * xV
+       async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
+         const AH = [];
+         if (LH instanceof UB) {
+           if (LH._baseDiffuseRoughness) return LH._baseDiffuseRoughnessTexture && AH.push(LH._baseDiffuseRoughnessTexture), AH
+         } else if (LH instanceof pB && LH.baseDiffuseRoughness) return LH.baseDiffuseRoughnessTexture && AH.push(LH.baseDiffuseRoughnessTexture), AH;
+         return []
+       }
+       postExportMaterialAsync(HH, BH, LH) {
+         return new Promise((HH => {
+           let AH = null,
+             rH = null;
+           if (LH instanceof UB ? (AH = LH._baseDiffuseRoughness, rH = LH._baseDiffuseRoughnessTexture) : LH instanceof pB && (AH = LH.baseDiffuseRoughness, rH = LH.baseDiffuseRoughnessTexture), !AH) return void HH(BH);
+           this._wasUsed = !0, BH.extensions = BH.extensions || {};
+           const SH = {
+             diffuseRoughnessFactor: AH,
+             diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(rH) ?? void 0
+ ... (578 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L51-L52` → after: `L14155-L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14155-L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14155-L14159) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L51-L52)

```diff
-             const xV = JV && yV > 1 ? eV / yV : eV;
-             for (let eV = 3 * UV; eV < 3 * UV + 3; eV++) VV.rotation[eV] += this.rotation[eV] * xV, VV.position[eV] += this.position[eV] * xV, VV.scale[eV] *= 1 + this.scaleDelta[eV] * xV
+             LH += `${0===BH?"ROOT":`${AH}JOINT`} ${HH.name}\n`, LH += `${AH}{\n`;
+             const SH = this._GetBoneOffset(HH);
+             LH += `${AH}    OFFSET ${SH.x.toFixed(6)} ${SH.y.toFixed(6)} ${SH.z.toFixed(6)}\n`;
+             const hH = [];
+             rH.hasPositionChannels && hH.push("Xposition", "Yposition", "Zposition"), rH.hasRotationChannels && hH.push("Zrotation", "Xrotation", "Yrotation"), hH.length > 0 && (LH += `${AH}    CHANNELS ${hH.length} ${hH.join(" ")}\n`), rH.children.length > 0 && (LH += this._Expo … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L57-L63` → after: `L14335-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14335-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14335-L14350) · [Before (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L57-L63)

```diff
-       clear() {
-         for (let VV = 0; VV < this.touchedCount; VV++) {
-           const eV = this.touchedBones[VV];
-           this.touched[eV] = 0, this.overrides[eV] = 0, this.boneWeight[eV] = 0;
-           for (let VV = 3 * eV; VV < 3 * eV + 3; VV++) this.rotation[VV] = 0, this.position[VV] = 0, this.scaleDelta[VV] = 0
-         }
-         this.touchedCount = 0
+       toString(HH) {
+         if (!Number.isFinite(HH)) throw new Error(`Cannot format non-finite number: ${HH}`);
+         const BH = this._o,
+           LH = this._clampInt(BH.maxDecimalsCap ?? 15, 0, 20),
+           AH = BH.trimTrailingZeros ?? !0,
+           rH = BH.snapNearZero ?? !0,
+           SH = BH.zeroThreshold ?? BH.eps,
+           hH = 1 / BH.eps;
+         let tH, zH = Math.round(HH * hH) / hH;
+         if (Object.is(zH, -0) && (zH = 0), rH && Math.abs(zH) <= SH && (zH = 0), tH = void 0 !== BH.fixedDecimals ? this._clampInt(BH.fixedDecimals, 0, LH) : this._clampInt(Math.ceil(-Math.log10(BH.eps)), 0, LH), BH.allowScientific, 0 === tH) return String(Math.trunc(zH));
+         let CH = zH.toFixed(tH);
+         if (AH && void 0 === BH.fixedDecimals && (CH = CH.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(CH)) throw new Error(`Scientific notation not allowed in XML output: ${CH}`);
+         return CH
+       }
+       _clampInt(HH, BH, LH) {
+         return Number.isFinite(HH) ? (HH = Math.trunc(HH), Math.max(BH, Math.min(LH, HH))) : BH
```

#### 13. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L67-L69` → after: `L14354-L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14354-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14354-L14355) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L67-L69)

```diff
-     function QV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       return Number.isNaN(VV) ? xV : Math.min(eV, Math.max(-eV, VV))
+     function Zh(HH) {
+       return HH instanceof Date
```

#### 14. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L83-L84` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14359) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L83-L84)

```diff
-       if ("PY" in VV) return NV.createAnimationScript(VV);
-       return new wV(VV).createAnimationScript()
+       return "string" === typeof HH
```

#### 15. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L87-L89` → after: `L14362-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14362-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14362-L14367) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L87-L89)

```diff
-     function QV(VV, eV, xV, YV) {
-       const UV = VV.PY <= 0 ? 1 : eV + xV * Math.max(0, YV) / VV.PY;
-       return VV.AY === JV.n.LoopOnLastFrame ? UV % 1 : VV.AY === JV.n.NoLoop && UV >= 1 ? null : Math.min(1, UV)
+     function ah(HH) {
+       return "string" === typeof HH || "number" === typeof HH || "boolean" === typeof HH || "bigint" === typeof HH || Zh(HH)
+     }
+ 
+     function sh(HH) {
+       return "number" === typeof HH || "boolean" === typeof HH || "bigint" === typeof HH || Zh(HH)
```

#### 16. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L92-L101` → after: `L14370-L14390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14370-L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14370-L14390) · [Before (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L92-L101)

```diff
-       createAnimationScript(VV) {
-         const {
-           PY: eV,
-           loop: xV,
-           NY: JV
-         } = VV;
-         return {
-           PY: Math.round(eV),
-           AY: this.createLoopMode(null !== xV && void 0 !== xV && xV),
-           NY: this.createNodeSkeletonAnimationScript(null !== JV && void 0 !== JV ? JV : null)
+       constructor(HH, BH) {
+         this._ns = new Map, this._prefixCount = 0, this._builder = HH, this._format = Dh(BH), this._nFmt = new wh(this._format)
+       }
+       withNamespace() {
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         for (const AH of BH) this._assignNamespace(AH);
+         return this
+       }
+       serialize(HH, BH) {
+         if (!(BH = BH ?? qh(HH))) throw new Error("can not find name for given object");
+         const LH = Nh(BH);
+         LH.ns && this._assignNamespace(LH.ns, "xmlns"), this._gatherNamespaces(HH, new WeakSet);
+         const AH = this._builder.ele(null, LH.name);
+         for (const [rH, SH] of Array.from(this._ns.entries())) AH.att("xmlns", SH, rH);
+         this._writeObjectContent(AH, HH, (new WeakSet).add(HH)), this._builder.end()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L104-L111` → after: `L14399-L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14399-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14399-L14402) · [Before (L104-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L104-L111)

```diff
-       createLoopMode(VV) {
-         switch (VV) {
-           case !1:
-             return JV.n.NoLoop;
-           case !0:
-             return JV.n.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return JV.n.HoldOnLastFrame
+       _getPrefix(HH) {
+         if (HH.ns) {
+           const BH = this._ns.get(HH.ns.toLowerCase());
+           if ("xmlns" !== BH) return BH
```

#### 18. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L115-L118` → after: `L14405-L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14405-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14405-L14416) · [Before (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L115-L118)

```diff
-       createNodeSkeletonAnimationScript(VV) {
-         if (null === VV) return null;
-         const eV = {};
-         for (const xV in VV) {
+       _writeObjectContent(HH, BH, LH) {
+         const AH = eh(BH) ?? [],
+           rH = new Map;
+         for (const hH of AH) {
+           const HH = rH.get(hH.prop) ?? [];
+           HH.push(hH), rH.set(hH.prop, HH)
+         }
+         const SH = Object.keys(BH).sort(((HH, BH) => {
+           const LH = (rH.get(HH) ?? []).some((HH => "attr" === HH.kind));
+           return LH === (rH.get(BH) ?? []).some((HH => "attr" === HH.kind)) ? 0 : LH ? -1 : 1
+         }));
+         for (const hH of SH) {
```

#### 19. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L120` → after: `L14418-L14440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14418-L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14418-L14440) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L120)

```diff
-           eV[xV] = this.createNodeAnimationScript(JV)
+           if (null === AH || void 0 === AH) continue;
+           const SH = rH.get(hH);
+           if (SH) {
+             if (SH.some((HH => !0 === HH.ignore || "none" === HH.kind))) continue;
+             for (const BH of SH) {
+               const LH = BH.name ?? BH.prop.toLowerCase();
+               if (LH) switch (BH.kind) {
+                 case "attr": {
+                   let rH = null;
+                   if ("number" === typeof AH && this._nFmt && (rH = this._nFmt.toString(AH)), BH.formatter) {
+                     rH = new BH.formatter(this._format).toString(AH)
+                   }
+                   if (rH = rH ?? AH.toString(), rH) {
+                     const BH = Nh(LH),
+                       AH = this._getPrefix(BH),
+                       SH = Rh(BH.name, AH);
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L124-L131` → after: `L14443-L14447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14443-L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14443-L14447) · [Before (L124-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L124-L131)

```diff
-       createNodeAnimationScript(VV) {
-         const {
-           timeline: eV
-         } = VV, xV = eV.filter((VV => Number.isFinite(VV.timeFraction)));
-         return xV.sort(((VV, eV) => VV.timeFraction - eV.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(xV, "rotation", rV),
-           position: this.createTimelineFromKeyframes(xV, "position", bV),
-           scale: this.createTimelineFromKeyframes(xV, "scale", bV, BV)
+       _gatherNamespaces(HH, BH) {
+         if (BH.has(HH)) return;
+         if (BH.add(HH), Array.isArray(HH)) {
+           for (const LH of HH) ah(LH) || this._gatherNamespaces(LH, BH);
+           return
```

#### 21. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L133-L136` → after: `L14449-L14452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14449-L14452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14449-L14452) · [Before (L133-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L133-L136)

```diff
-       }
-       createTimelineFromKeyframes(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV => VV;
-         const YV = [];
+         const LH = qh(HH);
+         LH && this._assignNamespace(LH);
+         const AH = eh(HH) ?? [],
+           rH = new Map;
```

#### 22. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L140-L141` → after: `L14463-L14464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14463-L14464) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L140-L141)

```diff
-             const eV = this.createAnimationFrameWithoutPrecomputes(nV.timeFraction, VV, JV);
-             ZV(eV) && YV.push(eV)
+             if (LH.some((HH => !0 === HH.ignore || "none" === HH.kind))) continue;
+             for (const HH of LH) HH.name && this._assignNamespace(HH.name)
```

#### 23. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L144-L156` → after: `L14468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14468) · [Before (L144-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L144-L156)

```diff
-         const UV = [];
-         for (let nV = 0; nV < YV.length; nV++) {
-           var yV, pV, QV;
-           const VV = YV[nV],
-             eV = null !== (yV = YV[nV - 1]) && void 0 !== yV ? yV : VV,
-             JV = null !== (pV = YV[nV + 1]) && void 0 !== pV ? pV : VV,
-             wV = null !== (QV = YV[nV + 2]) && void 0 !== QV ? QV : JV;
-           UV.push({
-             ...VV,
-             ...xV(eV.post, eV.timeFraction, VV.post, VV.timeFraction, JV.pre, JV.timeFraction, wV.pre, wV.timeFraction)
-           })
-         }
-         return UV
+         for (const hH of SH) ah(hH) || this._gatherNamespaces(hH, BH)
```

#### 24. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L158-L170` → after: `L14470-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14470-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14470-L14477) · [Before (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L158-L170)

```diff
-       createAnimationFrameWithoutPrecomputes(VV, eV, xV) {
-         let JV, YV, UV = null;
-         var yV;
-         if ("object" === typeof eV && "point" in eV) UV = null !== (yV = eV.zY) && void 0 !== yV ? yV : null, JV = eV.point, YV = eV.point;
-         else if ("object" === typeof eV && "pre" in eV) {
-           var pV;
-           UV = null !== (pV = eV.zY) && void 0 !== pV ? pV : null, JV = eV.pre, YV = eV.post
-         } else JV = eV, YV = eV;
-         return {
-           timeFraction: VV,
-           zY: this.createLerpMode(UV),
-           pre: xV(JV),
-           post: xV(YV)
+       _assignNamespace(HH, BH) {
+         const LH = Nh(HH);
+         if (LH?.ns) {
+           const HH = LH.ns.toLowerCase();
+           this._ns.get(HH) || this._ns.set(HH, BH ?? this._buildNsPrefix(HH))
+         } else if ("xmlns" === BH) {
+           const HH = LH.name.toLowerCase();
+           this._ns.get(HH) || this._ns.set(HH, BH ?? this._buildNsPrefix(HH))
```

#### 25. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L173-L174` → after: `L14480-L14490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14480-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14480-L14490) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L173-L174)

```diff
-       createLerpMode(VV) {
-         return null === VV ? JV.k.Linear : nV.LERP_MODE_SCHEMA_MAPPING[VV]
+       _buildNsPrefix(HH) {
+         let BH, LH = !1;
+         do {
+           BH = "ns" + this._prefixCount++;
+           for (const HH of Array.from(this._ns.values()))
+             if (HH === BH) {
+               LH = !0;
+               break
+             }
+         } while (LH);
+         return BH
```

#### 26. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L177-L180` → after: `L14493-L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14493-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14493-L14498) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L177-L180)

```diff
-     nV.LERP_MODE_SCHEMA_MAPPING = {
-       linear: JV.k.Linear,
-       "catmull-rom-spline": JV.k.CatmullRomSpline
-     };
+     class ih {}
+     var ph;
+     ih.OpenTag = "<", ih.CloseTag = ">", ih.Slash = "/", ih.Question = "?", ih.Quote = '"', ih.Equal = "=", ih.Space = " ", ih.Semicolon = ":", ih.Dec = "<?xml", ih.Xml = "xml", ih.Xmlns = "xmlns", ih.Xsi = "xsi", ih.VersionKeyword = "version", ih.EncodingKeyword = "encoding", ih … [truncated]
+       function(HH) {
+         HH[HH.Declaration = 0] = "Declaration", HH[HH.Tag = 1] = "Tag", HH[HH.Attribute = 2] = "Attribute", HH[HH.Text = 3] = "Text"
+       }(ph || (ph = {}));
```

#### 27. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L183` → after: `L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14501) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L183)

```diff
-         this.animationSchema = VV
+         this._ctxStack = [], this._d = 0, this._w = HH
```

#### 28. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L185-L195` → after: `L14503-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14503-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14503-L14504) · [Before (L185-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L185-L195)

```diff
-       createAnimationScript() {
-         const {
-           animation_length: VV,
-           loop: eV,
-           bones: xV
-         } = this.animationSchema;
-         return {
-           PY: Math.round(1e3 * VV),
-           AY: this.createLoopMode(null !== eV && void 0 !== eV && eV),
-           NY: this.createNodeSkeletonAnimationScript(null !== xV && void 0 !== xV ? xV : null)
-         }
+       dec(HH, BH, LH) {
+         return this._w.write(ih.Dec), this._writeAttStr(ih.VersionKeyword, HH), BH && this._writeAttStr(ih.EncodingKeyword, BH), void 0 !== LH && this._writeAttStr(ih.StandaloneKeyword, LH ? "yes" : "no"), this._w.write(ih.Question, ih.CloseTag), this
```

#### 29. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L197-L204` → after: `L14506-L14517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14506-L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14506-L14517) · [Before (L197-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L197-L204)

```diff
-       createLoopMode(VV) {
-         switch (VV) {
-           case !1:
-             return JV.n.NoLoop;
-           case !0:
-             return JV.n.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return JV.n.HoldOnLastFrame
+       att(HH, BH, LH) {
+         const AH = this._peekContext();
+         if (!AH) throw new Error("att() without open element");
+         if (AH.closed) throw new Error(`att() after start tag closed for <${AH.name}>`);
+         if (this._isXmlnsDecl(HH, BH)) {
+           if (BH === ih.Xmlns) AH.defaultNs = LH, this._registerNamespace(AH, "", LH), this._writeAttStr(ih.Xmlns, LH);
+           else if (HH) this._registerNamespace(AH, BH, LH), this._writeAttStr(`${HH}:${BH}`, LH);
+           else {
+             const HH = BH.slice(6);
+             this._registerNamespace(AH, HH, LH), this._writeAttStr(BH, LH)
+           }
+           return AH.lastToken = ph.Attribute, this
```

#### 30. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L206-L213` → after: `L14519-L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14519-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14519-L14521) · [Before (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L206-L213)

```diff
-         throw new Error(`Invalid Blockbench loop mode schema: ${VV}`)
-       }
-       createNodeSkeletonAnimationScript(VV) {
-         if (null === VV) return null;
-         const eV = {};
-         for (const xV in VV) {
-           const JV = VV[xV];
-           eV[xV] = this.createNodeAnimationScript(JV)
+         let rH = BH;
+         if (HH) {
+           rH = `${this._ensurePrefixDeclared(AH,HH)}:${BH}`
```

#### 31. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L215` → after: `L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14523) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L215)

```diff
-         return eV
+         return AH.lastToken = ph.Attribute, this._writeAttStr(rH, LH), this
```

#### 32. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L217-L226` → after: `L14525-L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14525-L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14525-L14530) · [Before (L217-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L217-L226)

```diff
-       createNodeAnimationScript(VV) {
-         const {
-           rotation: eV,
-           position: xV,
-           scale: JV
-         } = VV;
-         return {
-           rotation: this.createAnimationTimeline(null !== eV && void 0 !== eV ? eV : null, qV, rV, !0),
-           position: this.createAnimationTimeline(null !== xV && void 0 !== xV ? xV : null, FV, bV, !1),
-           scale: this.createAnimationTimeline(null !== JV && void 0 !== JV ? JV : null, EV, bV, !1)
+       ele(HH, BH) {
+         const LH = this._peekContext();
+         LH && this._closeOpenTagIfNeeded(LH);
+         let AH = BH;
+         if (HH) {
+           AH = `${this._lookupPrefix(HH)??HH}:${BH}`
```

#### 33. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L229-L265` → after: `L14534-L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14534-L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14534-L14537) · [Before (L229-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L229-L265)

```diff
-       createAnimationTimeline(VV, eV, xV, JV) {
-         if (null === VV) return [];
-         (Array.isArray(VV) || "number" === typeof VV) && (VV = {
-           "0.0": VV
-         });
-         const YV = Object.entries(VV).map((VV => {
-           let [xV, JV] = VV;
-           const YV = Number(xV) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(YV, JV, eV)
-         })).filter(ZV);
-         YV.sort(((VV, eV) => VV.timeFraction - eV.timeFraction)), JV && function(VV) {
-           for (let eV = 1; eV < VV.length; eV++) {
-             const xV = VV[eV - 1].post,
-               JV = VV[eV],
-               YV = TV(JV.pre),
-               UV = TV(JV.post),
- ... (21 more removed lines; see GitHub link above)
+       text(HH) {
+         const BH = this._peekContext();
+         if (!BH) throw new Error("text() without open element");
+         return this._closeOpenTagIfNeeded(BH), BH.lastToken = ph.Text, this._w.write(this._escText(HH)), this
```

#### 34. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L267-L280` → after: `L14539-L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14539-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14539-L14590) · [Before (L267-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L267-L280)

```diff
-       createAnimationFrameWithoutPrecomputes(VV, eV, xV) {
-         let JV, YV, UV = null;
-         if ("object" === typeof eV && "post" in eV) {
-           var yV;
-           UV = null !== (yV = eV.lerp_mode) && void 0 !== yV ? yV : null, YV = xV(eV.post), JV = void 0 !== eV.pre ? xV(eV.pre) : YV
-         } else {
-           const VV = xV(eV);
-           YV = VV, JV = VV
-         }
-         return {
-           timeFraction: VV,
-           zY: this.createLerpMode(UV),
-           pre: JV,
-           post: YV
+       end() {
+         const HH = this._popContext();
+         return HH && (this._d--, HH.closed ? this._w.write(ih.OpenTag, ih.Slash, HH.name, ih.CloseTag) : this._w.write(ih.Slash, ih.CloseTag)), this
+       }
+       _pushContext(HH, BH) {
+         const LH = new yh.Context(HH, BH);
+         return this._ctxStack.push(LH), LH
+       }
+       _popContext() {
+         return this._ctxStack.pop()
+       }
+       _peekContext() {
+         return this._ctxStack[this._ctxStack.length - 1]
+       }
+       get _contextDepth() {
+         return this._ctxStack.length
+ ... (36 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L283-L284` → after: `L14593-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14593-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14593-L14601) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L283-L284)

```diff
-       createLerpMode(VV) {
-         return null === VV ? JV.k.Linear : wV.LERP_MODE_SCHEMA_MAPPING[VV]
+       _ensurePrefixDeclared(HH, BH) {
+         const LH = this._lookupPrefix(BH);
+         if (LH) return LH;
+         if (HH.closed) throw new Error(`can not declare namespace after start tag closed for <${HH.name}>`);
+         const AH = this._allocPrefix(HH);
+         return this._writeAttStr(`${ih.Xmlns}:${AH}`, BH), this._registerNamespace(HH, AH, BH), AH
+       }
+       _closeOpenTagIfNeeded(HH) {
+         HH.closed || (this._w.write(ih.CloseTag), HH.closed = !0)
```

#### 36. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L287-L289` → after: `L14604-L14624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14604-L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14604-L14624) · [Before (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L287-L289)

```diff
- 
-     function ZV(VV) {
-       return Number.isFinite(VV.timeFraction) && vV(VV.pre) && vV(VV.post)
+     yh.Context = class {
+       constructor(HH, BH) {
+         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = HH, this.depth = BH
+       }
+     };
+     class Ht {
+       constructor() {
+         this.count = 0, this._chunks = []
+       }
+       write() {
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         if (0 === BH.length) return this;
+         const AH = BH.join("");
+         return this._chunks.push(AH), this.count += AH.length, this
+       }
+       toString() {
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L291-L293` → after: `L14626-L14650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14626-L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14626-L14650) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L291-L293)

```diff
- 
-     function vV(VV) {
-       return Number.isFinite(VV[0]) && Number.isFinite(VV[1]) && Number.isFinite(VV[2])
+     class Bt {
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = HH, this._opts = BH, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
+       }
+       write() {
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         if (0 === BH.length) return this;
+         const AH = BH.join("");
+         if (0 === AH.length) return this;
+         this._pending += AH, this._pendingChars += AH.length;
+         const rH = this._opts.flushChars ?? 65536;
+         return this._pendingChars >= rH && this.flush(), this
+       }
+       flush() {
+         if (0 === this._pendingChars) return this;
+ ... (9 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L295-L304` → after: `L14652-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14652-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14652-L14677) · [Before (L295-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L295-L304)

```diff
- 
-     function rV(VV, eV, xV, JV, YV, UV, yV, pV) {
-       const QV = UV - eV,
-         nV = UV - JV,
-         wV = pV - JV,
-         ZV = [null, null, null];
-       for (let vV = 0; vV < ZV.length; vV++) ZV[vV] = kV(VV[vV], xV[vV], YV[vV], yV[vV], QV, wV);
-       return {
-         GY: nV,
-         WY: ZV
+     const Lt = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
+       At = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
+     var rt, St;
+     ! function(HH) {
+       HH.micron = "micron", HH.millimeter = "millimeter", HH.centimeter = "centimeter", HH.inch = "inch", HH.foot = "foot", HH.meter = "meter"
+     }(rt || (rt = {})),
+     function(HH) {
+       HH.model = "model", HH.solidsupport = "solidsupport", HH.support = "support", HH.surface = "surface", HH.other = "other"
+     }(St || (St = {}));
+     const ht = "http://schemas.openxmlformats.org/package/2006/content-types",
+       tt = "http://schemas.openxmlformats.org/package/2006/relationships";
+     var zt;
+     ! function(HH) {
+       HH.Relationships = "application/vnd.openxmlformats-package.relationships+xml", HH.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", HH.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", HH.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
+     }(zt || (zt = {}));
+     const Ct = "_rels/",
+ ... (10 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L307-L312` → after: `L14680-L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14680-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14680-L14882) · [Before (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L307-L312)

```diff
- 
-     function kV(VV, eV, xV, JV, UV, yV) {
-       return {
-         gY: YV.b.computeShortestRotation(VV, xV) / UV,
-         DY: YV.b.computeShortestRotation(eV, JV) / yV,
-         delta: YV.b.computeShortestRotation(eV, xV)
+     ut.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", ut.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", ut.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", ut.MustPre … [truncated]
+     let Qt = (() => {
+         let HH, BH, LH = [fh({
+             ns: ht,
+             name: "Types"
+           })],
+           AH = [];
+         BH = class {
+           constructor() {
+             this.items = []
+           }
+         };
+         return (0, bH.m)(BH, "ThreeMfContentTypes"), (() => {
+           const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, bH.g)(null, HH = {
+             value: BH
+ ... (187 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L315-L328` → after: `L14885-L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14885-L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14885-L14893) · [Before (L315-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L315-L328)

```diff
- 
-     function bV(VV, eV, xV, JV, YV, UV, yV, pV) {
-       const QV = UV - eV,
-         nV = UV - JV,
-         wV = pV - JV,
-         ZV = [null, null, null];
-       for (let vV = 0; vV < ZV.length; vV++) ZV[vV] = {
-         gY: (YV[vV] - VV[vV]) / QV,
-         DY: (yV[vV] - xV[vV]) / wV,
-         delta: YV[vV] - xV[vV]
-       };
-       return {
-         GY: nV,
-         WY: ZV
+     class Pt {
+       static Zero() {
+         return new Pt([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
+       }
+       constructor(HH) {
+         this.values = HH
+       }
+       toString() {
+         return this.values.join(" ")
```

#### 41. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L331-L333` → after: `L14896-L14902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14896-L14902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14896-L14902) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L331-L333)

```diff
- 
-     function EV(VV) {
-       return BV("number" === typeof VV ? [VV, VV, VV] : VV)
+     class Tt {
+       constructor(HH) {
+         this.o = HH, this._f = new wh(HH)
+       }
+       toString(HH) {
+         return HH.values.map((HH => this._f.toString(HH))).join(" ")
+       }
```

#### 42. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L335-L337` → after: `L14904-L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14904-L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L14904-L15888) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L335-L337)

```diff
- 
-     function BV(VV) {
-       return [jV(VV[0]), jV(VV[1]), jV(VV[2])]
+     let Ut = (() => {
+         let HH, BH, LH, AH, rH, SH = [fh({
+             ns: Lt,
+             name: "model"
+           })],
+           hH = [],
+           tH = [],
+           zH = [],
+           CH = [],
+           EH = [],
+           XH = [],
+           GH = [];
+         BH = class {
+           constructor() {
+             this.unit = (0, bH.k)(this, tH, rt.millimeter), this.requiredextensions = ((0, bH.k)(this, zH), (0, bH.k)(this, CH, void 0)), this.recommendedextensions = ((0, bH.k)(this, EH), (0, bH.k)(this, XH, void 0)), this.metadata = (0, bH.k)(this, GH)
+           }
+ ... (969 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L339-L341` → after: `L15890-L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15890-L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L15890-L15896) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L339-L341)

```diff
- 
-     function jV(VV) {
-       return Number.isFinite(VV) ? Math.min(yV.j, Math.max(-yV.j, VV)) : VV
+     class jt extends Rt {
+       constructor(HH) {
+         super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : St.model), this._object.content = new Kt
+       }
+       withComponent(HH, BH) {
+         return this._object.content.component.push(new ct(HH, BH)), this
+       }
```

#### 44. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L343-L346` → after: `L15898-L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15898-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L15898-L15939) · [Before (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L343-L346)

```diff
- 
-     function qV(VV) {
-       const [eV, xV, JV] = VV, yV = -(0, UV.k)(eV), pV = -(0, UV.k)(xV), QV = (0, UV.k)(JV), nV = YV.b.quaternionFromEulerZYX(yV, pV, QV);
-       return YV.b.eulerYXZFromQuaternion(nV)
+     class nt extends Rt {
+       constructor(HH) {
+         super(HH, St.model)
+       }
+       withPostProcessHandlers(HH, BH) {
+         return this._vh = HH, this._th = BH, this
+       }
+       withData(HH) {
+         return this._object.content = this._buildMesh(HH), this
+       }
+       withMaterial(HH, BH) {
+         return this._object.pid = HH, this._object.pindex = BH, this
+       }
+       _buildMesh(HH) {
+         const BH = this._buildVertices(HH.positions),
+           LH = this._buildTriangle(HH.indices);
+ ... (26 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L348-L355` → after: `L15941-L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15941-L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L15941-L15962) · [Before (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L348-L355)

```diff
-     wV.LERP_MODE_SCHEMA_MAPPING = {
-       linear: JV.k.Linear,
-       catmullrom: JV.k.CatmullRomSpline
-     };
-     const tV = 1 / 16;
- 
-     function FV(VV) {
-       return [-VV[0] * tV, VV[1] * tV, VV[2] * tV]
+     class Ft {
+       constructor(HH) {
+         this._m = new et(HH)
+       }
+       withColor(HH, BH) {
+         this._m.base = this._m.base ?? [];
+         let LH = this._m.base.find((BH => BH.name.toLowerCase() === HH.toLowerCase()));
+         return LH ? (LH.displaycolor = this._rgbaToHex(BH), this) : (LH = new qt(HH, this._rgbaToHex(BH)), this._m.base.push(LH), this)
+       }
+       build() {
+         return this._m
+       }
+       _rgbaToHex(HH) {
+         const BH = HH => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(HH, 1 / 2.2)))),
+           LH = BH(HH.r).toString(16).padStart(2, "0").toUpperCase(),
+           AH = BH(HH.g).toString(16).padStart(2, "0").toUpperCase(),
+ ... (6 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L357-L360` → after: `L15964-L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15964-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L15964-L15993) · [Before (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L357-L360)

```diff
- 
-     function TV(VV) {
-       const [eV, xV, JV] = VV;
-       return [eV >= 0 ? Math.PI - eV : -Math.PI - eV, PV(xV + Math.PI), PV(JV + Math.PI)]
+     class Dt {
+       constructor() {
+         this._model = new Ut, this._objects = new Map
+       }
+       withMetaData(HH, BH, LH, AH) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Vt(HH, BH, LH, AH)), this
+       }
+       withMaterial(HH) {
+         return HH instanceof Ft && (HH = HH.build()), HH && (this._model.resources = this._model.resources ?? new bt, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(HH)), this
+       }
+       withMesh(HH) {
+         return HH instanceof nt && (HH = HH.build()), this._model.resources = this._model.resources ?? new bt, this._model.resources.object.push(HH), this
+       }
+       withComponents(HH) {
+         return HH instanceof jt && (HH = HH.build()), this._model.resources = this._model.resources ?? new bt, this._model.resources.object.push(HH), this
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L362-L364` → after: `L15995-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15995-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L15995-L16018) · [Before (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L362-L364)

```diff
- 
-     function PV(VV) {
-       return YV.b.mod(VV + Math.PI, 2 * Math.PI) - Math.PI
+     Dt.KnownMetaSet = new Set(Ut.KnownMeta.map((HH => HH.toLowerCase())));
+     class wt {
+       withContentType(HH) {
+         this._cts || (this._cts = new Qt);
+         const BH = this._cts.items;
+         return BH.some((BH => BH.ext === HH.ext && BH.ct === HH.ct)) || BH.push(HH), this
+       }
+       withRelationship(HH) {
+         this._rs || (this._rs = new Mt);
+         const BH = this._rs.items;
+         return BH.some((BH => BH.id === HH.id)) || BH.push(HH), this.withContentType(new Wt("rels", zt.Relationships)), this
+       }
+       withModel(HH) {
+         return HH instanceof Dt && (HH = HH.build()), this._m = HH, this.withContentType(new Wt("model", zt.Model)), this
+       }
+       build() {
+ ... (8 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L366-L368` → after: `L16020-L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L16020-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L16020-L16059) · [Before (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L366-L368)

```diff
- 
-     function AV(VV, eV) {
-       return Math.abs(YV.b.computeShortestRotation(VV[0], eV[0])) + Math.abs(YV.b.computeShortestRotation(VV[1], eV[1])) + Math.abs(YV.b.computeShortestRotation(VV[2], eV[2]))
+     class Zt {
+       constructor(HH) {
+         this._o = HH
+       }
+       get options() {
+         return this._o
+       }
+       async serializeAsync(HH) {
+         const BH = await this.ensureZipLibReadyAsync();
+         if (!BH) return;
+         const LH = BH.Zip,
+           AH = BH.ZipDeflate;
+         if (!LH || !AH) throw new Error("fflate Zip / ZipDeflate not available");
+         const rH = function(HH, BH, LH) {
+           const rH = new AH(BH, {
+             level: 6
+ ... (24 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L370-L390` → after: `L16061-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R16061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L16061-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/257.js#L16061-L16197) · [Before (L370-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/257.js#L370-L390)

```diff
-     const NV = new nV
-   },
-   38328: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => yV,
-       h: () => UV,
-       k: () => JV,
-       n: () => YV
-     });
-     let JV = function(VV) {
-         return VV[VV.Linear = 0] = "Linear", VV[VV.CatmullRomSpline = 1] = "CatmullRomSpline", VV
-       }({}),
-       YV = function(VV) {
-         return VV[VV.NoLoop = 0] = "NoLoop", VV[VV.LoopOnLastFrame = 1] = "LoopOnLastFrame", VV[VV.HoldOnLastFrame = 2] = "HoldOnLastFrame", VV
-       }({}),
-       UV = function(VV) {
- ... (5 more removed lines; see GitHub link above)
+     class dt {
+       static async SerializeToMemoryAsync(HH) {
+         const BH = new Array;
+         let LH = 0;
+         for (var AH = arguments.length, rH = new Array(AH > 1 ? AH - 1 : 0), SH = 1; SH < AH; SH++) rH[SH - 1] = arguments[SH];
+         if (await HH.serializeAsync((function(HH, AH, rH) {
+             BH.push(AH), LH += AH.length
+           }), ...rH), !LH) return;
+         const hH = new Uint8Array(LH);
+         let tH = 0;
+         for (const zH of BH) hH.set(zH, tH), tH += zH.length;
+         return hH
+       }
+     }
+     class st {}
+     st.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
+ ... (121 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   38387: (VV, eV, xV) => {
+   37989: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/258.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/258.js#L6-L7)

```diff
-       Color3: () => JV.d,
-       c: () => JV.h
+       d: () => rH
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L9-L10` → after: `L8-L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L8-L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/258.js#L8-L2917) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/258.js#L9-L10)

```diff
-     var JV = xV(38389);
-     (0, JV.i)()
+     var AH = LH(37997);
+     class rH {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     rH.Instances = [], rH.OnEnginesDisposedObservable = new AH.d, rH._LastCreatedScene = null, rH.UseFallbackTexture = !0, rH.FallbackTexture = ""
+   },
+   37982: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH
+     });
+     class AH {
+ ... (2894 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L4-L722) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   64307: (VV, eV, xV) => {
+   38074: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => XH,
+       g: () => GH,
+       j: () => QH,
+       m: () => YH
+     });
+     var AH = LH(37974),
+       rH = LH(37972),
+       SH = LH(38002),
+       hH = LH(38012);
+ 
+     function tH(HH) {
+       return Math.pow(HH, rH.f)
+     }
+ 
+ ... (703 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6-L7` → after: `L724-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L724-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L724-L763) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L6-L7)

```diff
-       DEVTOOLS_SHADERS: () => UV,
-       registerDevtoolsShader: () => yV
+       Clamp: () => GH,
+       DeltaAngle: () => vH,
+       Denormalize: () => xH,
+       ExtractAsInt: () => AH,
+       Hermite: () => EH,
+       Hermite1stDerivative: () => XH,
+       HighestCommonFactor: () => kH,
+       ILog2: () => QH,
+       InverseLerp: () => CH,
+       Lerp: () => tH,
+       LerpAngle: () => zH,
+       MoveTowards: () => UH,
+       MoveTowardsAngle: () => VH,
+       Normalize: () => MH,
+       NormalizeRadians: () => YH,
+       OutsideRange: () => SH,
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L9-L15` → after: `L765-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L765-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L765-L780) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L9-L15)

```diff
-     var JV = xV(41108),
-       YV = xV(38399);
-     const UV = {
-       devtoolsNormal: function(VV) {
-         return {
-           vertex: `\n\t\t\t${(0,YV.f)(VV,"position","vec3")}\n\t\t\t${(0,YV.f)(VV,"normal","vec3")}\n\t\t\t${(0,YV.Db)(VV,"worldViewProjection","mat4")}\n\t\t\t${(0,YV.Db)(VV,"world","mat4")}\n\t\t\t${(0,YV.Ib)(VV,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,YV.Jb)(VV,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,YV.Ib)(VV,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,YV.V)(VV,`\n\t\t\t\t\n\t\t\t\t${(0,YV.F)(VV,"vec3","normalColor",`abs(${(0,YV.X)(VV,"vNormal")})`)}\n\t\t\t\t${(0,YV.S)(VV)} = ${(0,YV.p)(VV,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+     const SH = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function hH(HH, BH) {
+       const LH = SH.map((LH => function(HH, BH, LH) {
+         const AH = HH[BH];
+         if ("function" !== typeof AH) return null;
+         const rH = function() {
+           const AH = HH.length,
+             SH = rH.previous.apply(HH, arguments);
+           return LH(BH, AH), SH
+         };
+         return AH.next = rH, rH.previous = AH, HH[BH] = rH, () => {
+           const LH = rH.previous;
+           if (!LH) return;
+           const AH = rH.next;
+           AH ? (LH.next = AH, AH.previous = LH) : (LH.next = void 0, HH[BH] = LH), rH.next = void 0, rH.previous = void 0
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L17-L37` → after: `L782-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L782-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L782-L785) · [Before (L17-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L17-L37)

```diff
-       },
-       devtoolsWhite: function(VV) {
-         return {
-           vertex: `\n\t\t\t${(0,YV.f)(VV,"position","vec3")}\n\t\t\t${(0,YV.Db)(VV,"worldViewProjection","mat4")}\n\n\t\t\t${(0,YV.Jb)(VV,`\n\t\t\t\t${(0,YV.m)(VV)} = ${(0,YV.Gb)(VV,"worldViewProjection")} * ${(0,YV.p)(VV,"vec4",(0,YV.Kb)(VV,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,YV.V)(VV,`\n\t\t\t\t${(0,YV.S)(VV)} = ${(0,YV.p)(VV,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(VV) {
-         return {
-           vertex: `\n\t\t\t${(0,YV.f)(VV,"position","vec3")}\n\t\t\t${(0,YV.Db)(VV,"worldViewProjection","mat4")}\n\t\t\t${(0,YV.Db)(VV,"world","mat4")}\n\t\t\t${(0,YV.Db)(VV,"cameraPosition","vec3")}\n\t\t\t${(0,YV.Ib)(VV,"vDepth","float","mediump")}\n\n\t\t\t${(0,YV.Jb)(VV,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,YV.Ib)(VV,"vDepth","float","mediump")}\n\t\t\t${(0,YV.Db)(VV,"maxDepth","float")}\n\t\t\t${(0,YV.Db)(VV,"minDepth","float")}\n\n\t\t\t${(0,YV.V)(VV,`\n\t\t\t\t\n\t\t\t\t${(0,YV.F)(VV,"float","normalizedDepth",`clamp((${(0,YV.X)(VV,"vDepth")} - ${ … [truncated]
-         }
-       }
-     };
- 
-     function yV(VV, eV) {
- ... (5 more removed lines; see GitHub link above)
+       }(HH, LH, BH)));
+       return () => {
+         for (const HH of LH) HH?.()
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L40` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L788) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L40)

```diff
-   38399: (VV, eV, xV) => {
+   38012: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L42-L78` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L790-L791) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L42-L78)

```diff
-       $: () => oV,
-       Ab: () => nV,
-       C: () => ZV,
-       Db: () => BV,
-       F: () => wV,
-       Gb: () => GV,
-       Ib: () => EV,
-       J: () => AV,
-       Jb: () => qV,
-       Kb: () => XV,
-       N: () => RV,
-       Nb: () => MV,
-       P: () => UV,
-       S: () => iV,
-       T: () => DV,
-       V: () => tV,
- ... (21 more removed lines; see GitHub link above)
+       b: () => SH,
+       f: () => rH
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L80-L280` → after: `L793-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L793-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/259.js#L793-L801) · [Before (L80-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/259.js#L80-L280)

```diff
-     const JV = {
-       GLSL: 0,
-       WGSL: 1
-     };
- 
-     function YV(VV) {
-       return VV === JV.WGSL
-     }
- 
-     function UV(VV, eV, xV) {
-       return YV(VV) ? xV : eV
-     }
-     const yV = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
- ... (185 more removed lines; see GitHub link above)
+     const AH = {};
+ 
+     function rH(HH, BH) {
+       AH[HH] = BH
+     }
+ 
+     function SH(HH) {
+       return AH[HH]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4-L12` → after: `L4-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/260.js#L4-L299) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/260.js#L4-L12)

```diff
-   42389: (VV, eV, xV) => {
-     xV.d(eV, {
-       noaDevTools: () => ZV
-     });
-     var JV = xV(38630),
-       YV = xV(38604),
-       UV = xV(3093),
-       yV = xV(1838),
-       pV = xV(42290);
+   37989: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => rH
+     });
+     var AH = LH(37997);
+     class rH {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     rH.Instances = [], rH.OnEnginesDisposedObservable = new AH.d, rH._LastCreatedScene = null, rH.UseFallbackTexture = !0, rH.FallbackTexture = ""
+   },
+   39588: (HH, BH, LH) => {
+ ... (280 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L15-L579` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/260.js#L302) · [Before (L15-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/260.js#L15-L579)

```diff
-       const {
-         gZ: eV
-       } = VV, xV = eV.engine, JV = {
-         width: xV.getRenderWidth(),
-         height: xV.getRenderHeight()
-       };
-       return {
-         canvas: xV.getRenderingCanvas(),
-         maxTextureSize: xV.getCaps().maxTextureSize,
-         zZ: () => !VV.DZ,
-         resize: (VV, eV) => {
-           xV.setSize(VV, eV)
-         },
-         restoreSize: () => {
-           xV.setSize(JV.width, JV.height), eV.resize()
-         },
- ... (549 more removed lines; see GitHub link above)
+       return AH[HH]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261, 262];
+ export const ids = [261];
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   41512: (VV, eV, xV) => {
+   38032: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7-L230` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L7-L8) · [Before (L7-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L7-L230)

```diff
-       g: () => vV
-     });
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(38269),
-       yV = xV(38389),
-       pV = xV(41521),
-       QV = xV(41486),
-       nV = xV(38318);
-     let wV = (() => {
-         var VV;
-         let eV, xV, QV = pV.d,
-           nV = [],
-           wV = [],
-           ZV = [],
-           vV = [];
- ... (208 more removed lines; see GitHub link above)
+       g: () => hH,
+       h: () => rH
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L233-L240` → after: `L14-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L14-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L14-L25) · [Before (L233-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L233-L240)

```diff
-       constructor(VV, eV, xV, JV) {
-         this.x = VV, this.y = eV, this.width = xV, this.height = JV
-       }
-       toGlobal(VV, eV) {
-         return new JV(this.x * VV, this.y * eV, this.width * VV, this.height * eV)
-       }
-       toGlobalToRef(VV, eV, xV) {
-         return xV.x = this.x * VV, xV.y = this.y * eV, xV.width = this.width * VV, xV.height = this.height * eV, this
+       constructor(HH) {
+         this.boneCount = HH, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * HH), this.position = new Float64Array(3 * HH), this.scale = new Float64Array(3 * HH).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let HH = 0; HH < this.boneCount; HH++)
+           if (0 !== this.touched[HH])
+             for (let BH = 3 * HH; BH < 3 * HH + 3; BH++) {
+               const HH = this.rotation[BH],
+                 LH = this.position[BH],
+                 hH = this.scale[BH];
+               HH >= -36e4 && HH <= SH || (this.rotation[BH] = zH(HH, SH)), LH >= -1024 && LH <= AH || (this.position[BH] = zH(LH, AH)), hH >= -rH && hH <= rH || (this.scale[BH] = zH(hH, rH, 1))
+             }
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L242-L243` → after: `L27-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L27-L32) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L242-L243)

```diff
-       clone() {
-         return new JV(this.x, this.y, this.width, this.height)
+       reset() {
+         for (let HH = 0; HH < this.boneCount; HH++)
+           if (0 !== this.touched[HH]) {
+             this.touched[HH] = 0;
+             for (let BH = 3 * HH; BH < 3 * HH + 3; BH++) this.rotation[BH] = 0, this.position[BH] = 0, this.scale[BH] = 1
+           }
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L256-L284` → after: `L36-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L36-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L36-L52) · [Before (L256-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L256-L284)

```diff
-       static DeepCopy(VV, eV, xV, UV) {
-         let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const pV = function(VV) {
-           const eV = [];
-           do {
-             const xV = Object.getOwnPropertyNames(VV);
-             for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
-           } while (VV = Object.getPrototypeOf(VV));
-           return eV
-         }(VV);
-         for (const nV of pV) {
-           if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
-           if (nV.endsWith("Observable")) continue;
-           if (xV && -1 !== xV.indexOf(nV)) continue;
-           const pV = VV[nV],
-             wV = typeof pV;
- ... (13 more removed lines; see GitHub link above)
+       constructor(HH) {
+         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * HH), this.position = new Float64Arra … [truncated]
+       }
+       touch(HH, BH, LH) {
+         0 === this.touched[HH] && (this.touched[HH] = 1, this.touchedBones[this.touchedCount++] = HH), this.boneWeight[HH] += BH, LH && (this.overrides[HH] = 1)
+       }
+       applyTo(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         for (let rH = 0; rH < this.touchedCount; rH++) {
+           const SH = this.touchedBones[rH],
+             hH = this.boneWeight[SH];
+           if (LH || 1 === this.overrides[SH]) {
+             const LH = BH * Math.min(1, hH);
+             for (let BH = 3 * SH; BH < 3 * SH + 3; BH++) HH.rotation[BH] += (this.rotation[BH] / hH - HH.rotation[BH]) * LH, HH.position[BH] += (this.position[BH] / hH - HH.position[BH]) * LH, HH.scale[BH] += (1 + this.scaleDelta[BH] / hH - HH.scale[BH]) * LH
+           } else {
+             const LH = AH && hH > 1 ? BH / hH : BH;
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L289-L295` → after: `L66-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L66-L69) · [Before (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L289-L295)

```diff
-   },
-   39058: (VV, eV, xV) => {
-     function JV() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
-         const eV = 16 * Math.random() | 0;
-         return ("x" === VV ? eV : 3 & eV | 8).toString(16)
-       }))
+ 
+     function zH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       return Number.isNaN(HH) ? LH : Math.min(BH, Math.max(-BH, HH))
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L301` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L72) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L301)

```diff
-   39870: (VV, eV, xV) => {
+   38029: (HH, BH, LH) => {
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L303` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L74-L75) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L303)

```diff
-       b: () => JV
+       d: () => zH,
+       h: () => tH
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L305-L494` → after: `L77-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L77-L84) · [Before (L305-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L305-L494)

```diff
-     class JV {
-       static _CheckLimit(VV, eV) {
-         let xV = JV._LogLimitOutputs[VV];
-         return xV ? xV.current++ : (xV = {
-           limit: eV,
-           current: 1
-         }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
-       }
-       static _GenerateLimitMessage(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const xV = JV._LogLimitOutputs[VV];
-         if (!xV || !JV.MessageLimitReached) return;
-         const YV = this._Levels[eV];
-         xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
-       }
-       static _AddLogEntry(VV) {
- ... (174 more removed lines; see GitHub link above)
+     var AH = LH(38020),
+       rH = LH(317),
+       SH = LH(1962),
+       hH = LH(38032);
+ 
+     function tH(HH) {
+       if ("kB" in HH) return bH.createAnimationScript(HH);
+       return new EH(HH).createAnimationScript()
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L496-L550` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L86-L89) · [Before (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L496-L550)

```diff
-     class tV extends jV {
-       static IsRenderPass(VV) {
-         return void 0 !== VV.setRenderTarget
-       }
-       get renderTarget() {
-         return this._renderTarget
-       }
-       get renderTargetDepth() {
-         return this._renderTargetDepth
-       }
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
-       }
-       constructor(VV, eV, xV, JV) {
-         super(VV, eV, xV), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = JV
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function zH(HH, BH, LH, rH) {
+       const SH = HH.kB <= 0 ? 1 : BH + LH * Math.max(0, rH) / HH.kB;
+       return HH.mB === AH.m.LoopOnLastFrame ? SH % 1 : HH.mB === AH.m.NoLoop && SH >= 1 ? null : Math.min(1, SH)
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L554-L631` → after: `L92-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L92-L101) · [Before (L554-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L554-L631)

```diff
-       get name() {
-         return this._name
-       }
-       set name(VV) {
-         this._name = VV
-       }
-       get disabled() {
-         return this._disabled
-       }
-       set disabled(VV) {
-         this._disabled = VV
-       }
-       get passes() {
-         return this._passes
-       }
-       get passesDisabled() {
- ... (62 more removed lines; see GitHub link above)
+       createAnimationScript(HH) {
+         const {
+           kB: BH,
+           loop: LH,
+           oB: AH
+         } = HH;
+         return {
+           kB: Math.round(BH),
+           mB: this.createLoopMode(null !== LH && void 0 !== LH && LH),
+           oB: this.createNodeSkeletonAnimationScript(null !== AH && void 0 !== AH ? AH : null)
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L634-L640` → after: `L104-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L104-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L104-L111) · [Before (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L634-L640)

```diff
-       _execute() {
-         const VV = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const eV of VV) eV._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
+       createLoopMode(HH) {
+         switch (HH) {
+           case !1:
+             return AH.m.NoLoop;
+           case !0:
+             return AH.m.LoopOnLastFrame;
+           case "hold-on-last-frame":
+             return AH.m.HoldOnLastFrame
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L642-L650` → after: `L113-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L113-L120) · [Before (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L642-L650)

```diff
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const VV of this._passes) VV._initialize();
-           for (const VV of this._passesDisabled) VV._initialize()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
+         throw new Error(`Invalid loop mode schema: ${HH}`)
+       }
+       createNodeSkeletonAnimationScript(HH) {
+         if (null === HH) return null;
+         const BH = {};
+         for (const LH in HH) {
+           const AH = HH[LH];
+           BH[LH] = this.createNodeAnimationScript(AH)
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L653-L678` → after: `L124-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L124-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L124-L132) · [Before (L653-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L653-L678)

```diff
-       _checkSameRenderTarget(VV, eV) {
-         if (null === VV || null === eV) return VV === eV;
-         if (VV.length !== eV.length) return !1;
-         for (let xV = 0; xV < VV.length; xV++)
-           if (VV[xV] !== eV[xV]) return !1;
-         return !0
-       }
-     }
-     class PV extends TV {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(VV) {
-         this.postProcess.alphaMode = VV
-       }
-       get drawWrapper() {
- ... (10 more removed lines; see GitHub link above)
+       createNodeAnimationScript(HH) {
+         const {
+           timeline: BH
+         } = HH, LH = BH.filter((HH => Number.isFinite(HH.timeFraction)));
+         return LH.sort(((HH, BH) => HH.timeFraction - BH.timeFraction)), {
+           rotation: this.createTimelineFromKeyframes(LH, "rotation", YH),
+           position: this.createTimelineFromKeyframes(LH, "position", QH),
+           scale: this.createTimelineFromKeyframes(LH, "scale", QH, MH)
+         }
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L680-L688` → after: `L134-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L134-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L134-L142) · [Before (L680-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L680-L688)

```diff
-       record() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           eV = arguments.length > 1 ? arguments[1] : void 0,
-           xV = arguments.length > 2 ? arguments[2] : void 0;
-         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
-         const JV = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
-         if (JV && (JV.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, JV), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
-           const VV = this._frameGraph.textureManager.getTextureAbsoluteDimensions(JV);
-           this._sourceWidth = VV.width, this._sourceHeight = VV.height
+       createTimelineFromKeyframes(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH => HH;
+         const rH = [];
+         for (const CH of HH) {
+           const HH = CH[BH];
+           if (HH) {
+             const BH = this.createAnimationFrameWithoutPrecomputes(CH.timeFraction, HH, AH);
+             XH(BH) && rH.push(BH)
+           }
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L690-L701` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L144-L154) · [Before (L690-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L690-L701)

```diff
-         const YV = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
-         this._outputWidth = YV.size.width, this._outputHeight = YV.size.height;
-         const UV = this._frameGraph.addRenderPass(this.name);
-         if (UV.depthReadOnly = this.depthReadOnly, UV.stencilReadOnly = this.stencilReadOnly, UV.addDependencies(this.sourceTexture), UV.setRenderTarget(this.outputTexture), UV.setRenderTargetDepth(this.depthAttachmentTexture), UV.setExecuteFunc((VV => {
-             VV.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && VV.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), eV?.(VV), this.viewport && VV.setViewport(this.viewport), VV.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
-               void 0 !== this.sourceTexture && VV.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), xV?.(VV), this.postProcess.bind()
-             }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), VV.restoreDefaultFramebuffer(), VV.popDebugGroup()
-           })), !VV) {
-           const VV = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
-           VV.depthReadOnly = this.depthReadOnly, VV.stencilReadOnly = this.stencilReadOnly, VV.addDependencies(this.sourceTexture), VV.setRenderTarget(this.outputTexture), VV.setRenderTargetDepth(this.depthAttachmentTexture), VV.setExecuteFunc((VV => {
-             void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && VV.setViewport(this.viewport), VV.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
-           }))
+         const SH = [];
+         for (let CH = 0; CH < rH.length; CH++) {
+           var hH, tH, zH;
+           const HH = rH[CH],
+             BH = null !== (hH = rH[CH - 1]) && void 0 !== hH ? hH : HH,
+             AH = null !== (tH = rH[CH + 1]) && void 0 !== tH ? tH : HH,
+             EH = null !== (zH = rH[CH + 2]) && void 0 !== zH ? zH : AH;
+           SH.push({
+             ...HH,
+             ...LH(BH.post, BH.timeFraction, HH.post, HH.timeFraction, AH.pre, AH.timeFraction, EH.pre, EH.timeFraction)
+           })
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L705-L727` → after: `L158-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L158-L171) · [Before (L705-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L705-L727)

```diff
-       dispose() {
-         this.postProcess.dispose(), super.dispose()
-       }
-     }
-     class AV extends PV {
-       constructor(VV, eV, xV) {
-         super(VV, eV, xV || new wV(VV, eV.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           eV = arguments.length > 1 ? arguments[1] : void 0,
-           xV = arguments.length > 2 ? arguments[2] : void 0;
-         const JV = super.record(VV, eV, xV);
- ... (7 more removed lines; see GitHub link above)
+       createAnimationFrameWithoutPrecomputes(HH, BH, LH) {
+         let AH, rH, SH = null;
+         var hH;
+         if ("object" === typeof BH && "point" in BH) SH = null !== (hH = BH.lB) && void 0 !== hH ? hH : null, AH = BH.point, rH = BH.point;
+         else if ("object" === typeof BH && "pre" in BH) {
+           var tH;
+           SH = null !== (tH = BH.lB) && void 0 !== tH ? tH : null, AH = BH.pre, rH = BH.post
+         } else AH = BH, rH = BH;
+         return {
+           timeFraction: HH,
+           lB: this.createLerpMode(SH),
+           pre: LH(AH),
+           post: LH(rH)
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L729-L730` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L173-L174) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L729-L730)

```diff
-       getClassName() {
-         return "FrameGraphPassTask"
+       createLerpMode(HH) {
+         return null === HH ? AH.j.Linear : CH.LERP_MODE_SCHEMA_MAPPING[HH]
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L733-L737` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L177-L180) · [Before (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L733-L737)

```diff
-     var MV = xV(41337),
-       zV = xV(41433),
-       GV = xV(41390),
-       WV = xV(41512),
-       RV = xV(38389);
+     CH.LERP_MODE_SCHEMA_MAPPING = {
+       linear: AH.j.Linear,
+       "catmull-rom-spline": AH.j.CatmullRomSpline
+     };
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L739-L743` → after: `L182-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L182-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L182-L194) · [Before (L739-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L739-L743)

```diff
-       getRenderCamera(VV) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let eV;
-           return eV = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, VV && eV && eV.isRigCamera ? eV.rigParent : eV
+       constructor(HH) {
+         this.animationSchema = HH
+       }
+       createAnimationScript() {
+         const {
+           animation_length: HH,
+           loop: BH,
+           bones: LH
+         } = this.animationSchema;
+         return {
+           kB: Math.round(1e3 * HH),
+           mB: this.createLoopMode(null !== BH && void 0 !== BH && BH),
+           oB: this.createNodeSkeletonAnimationScript(null !== LH && void 0 !== LH ? LH : null)
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L746-L761` → after: `L197-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L197-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L197-L215) · [Before (L746-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L746-L761)

```diff
-       setRenderCamera(VV) {
-         this._renderCamera = VV
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new WV.c("shared gizmo light", new nV.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = RV.d.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == gV._DefaultUtilityLayer ? gV._CreateDefaultUtilityLayerFromScene(QV.d.LastCreatedScene) : gV._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(VV) {
-         return gV._DefaultUtilityLayer = new gV(VV), gV._DefaultUtilityLayer.originalScene.eC.addOnce((() => {
-           gV._DefaultUtilityLayer = null
-         })), gV._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == gV._DefaultKeepDepthUtilityLayer ? gV._CreateDefaultKeepUtilityLayerFromScene(QV.d.LastCreatedScene) : gV._DefaultKeepDepthUtilityLayer
+       createLoopMode(HH) {
+         switch (HH) {
+           case !1:
+             return AH.m.NoLoop;
+           case !0:
+             return AH.m.LoopOnLastFrame;
+           case "hold_on_last_frame":
+             return AH.m.HoldOnLastFrame
+         }
+         throw new Error(`Invalid Blockbench loop mode schema: ${HH}`)
+       }
+       createNodeSkeletonAnimationScript(HH) {
+         if (null === HH) return null;
+         const BH = {};
+         for (const LH in HH) {
+           const AH = HH[LH];
+ ... (3 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L763-L766` → after: `L217-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L217-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L217-L227) · [Before (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L763-L766)

```diff
-       static _CreateDefaultKeepUtilityLayerFromScene(VV) {
-         return gV._DefaultKeepDepthUtilityLayer = new gV(VV), gV._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, gV._DefaultKeepDepthUtilityLayer.originalScene.eC.addOnce((() => {
-           gV._DefaultKeepDepthUtilityLayer = null
-         })), gV._DefaultKeepDepthUtilityLayer
+       createNodeAnimationScript(HH) {
+         const {
+           rotation: BH,
+           position: LH,
+           scale: AH
+         } = HH;
+         return {
+           rotation: this.createAnimationTimeline(null !== BH && void 0 !== BH ? BH : null, vH, YH, !0),
+           position: this.createAnimationTimeline(null !== LH && void 0 !== LH ? LH : null, TH, QH, !1),
+           scale: this.createAnimationTimeline(null !== AH && void 0 !== AH ? AH : null, WH, QH, !1)
+         }
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L768-L797` → after: `L229-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L229-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L229-L250) · [Before (L768-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L768-L797)

```diff
-       constructor(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.originalScene = VV, this.handleEvents = eV, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
-           virtual: !0,
-           useFloatingOrigin: VV.floatingOriginMode
-         }), this.utilityLayerScene.useRightHandedSystem = VV.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), eV && (this._originalPointerObserver = VV.onPrePoi … [truncated]
-           if (!this.utilityLayerScene.activeCamera) return;
-           if (!this.pickingEnabled) return;
-           if (!this.processAllEvents && eV.type !== zV.b.POINTERMOVE && eV.type !== zV.b.POINTERUP && eV.type !== zV.b.POINTERDOWN && eV.type !== zV.b.POINTERDOUBLETAP) return;
-           this.utilityLayerScene.pointerX = VV.pointerX, this.utilityLayerScene.pointerY = VV.pointerY;
-           const xV = eV.event;
-           if (VV.isPointerCaptured(xV.pointerId)) return void(this._pointerCaptures[xV.pointerId] = !1);
-           const JV = xV => {
-               let JV;
-               if (eV.nearInteractionPickingInfo) JV = eV.nearInteractionPickingInfo.pickedMesh.dD() == xV ? eV.nearInteractionPickingInfo : new GV.c;
- ... (14 more removed lines; see GitHub link above)
+       createAnimationTimeline(HH, BH, LH, AH) {
+         if (null === HH) return [];
+         (Array.isArray(HH) || "number" === typeof HH) && (HH = {
+           "0.0": HH
+         });
+         const rH = Object.entries(HH).map((HH => {
+           let [LH, AH] = HH;
+           const rH = Number(LH) / this.animationSchema.animation_length;
+           return this.createAnimationFrameWithoutPrecomputes(rH, AH, BH)
+         })).filter(XH);
+         rH.sort(((HH, BH) => HH.timeFraction - BH.timeFraction)), AH && function(HH) {
+           for (let BH = 1; BH < HH.length; BH++) {
+             const LH = HH[BH - 1].post,
+               AH = HH[BH],
+               rH = UH(AH.pre),
+               SH = UH(AH.post),
+ ... (6 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L799-L806` → after: `L252-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L252-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L252-L265) · [Before (L799-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L799-L806)

```diff
-         })), this._originalPointerObserver && VV.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, xV || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((VV => {
-           this.shouldRender && VV == this.getRenderCamera() && this.render()
-         }))), this._sceneDisposeObserver = this.originalScene.eC.add((() => {
-           this.dispose()
-         })), this._updateCamera()
-       }
-       _notifyObservers(VV, eV, xV) {
-         VV.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new zV.i(VV.type, VV.event, eV), VV.type), this._lastPointerEvents[xV.pointerId] = !0)
+         }(rH);
+         const SH = [];
+         for (let CH = 0; CH < rH.length; CH++) {
+           var hH, tH, zH;
+           const HH = rH[CH],
+             BH = null !== (hH = rH[CH - 1]) && void 0 !== hH ? hH : HH,
+             AH = null !== (tH = rH[CH + 1]) && void 0 !== tH ? tH : HH,
+             EH = null !== (zH = rH[CH + 2]) && void 0 !== zH ? zH : AH;
+           SH.push({
+             ...HH,
+             ...LH(BH.post, BH.timeFraction, HH.post, HH.timeFraction, AH.pre, AH.timeFraction, EH.pre, EH.timeFraction)
+           })
+         }
+         return SH
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L808-L812` → after: `L267-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L267-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L267-L280) · [Before (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L808-L812)

```diff
-       render() {
-         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
-           const VV = this.utilityLayerScene.activeCamera.dD(),
-             eV = this.utilityLayerScene.activeCamera;
-           eV._scene = this.utilityLayerScene, eV.leftCamera && (eV.leftCamera._scene = this.utilityLayerScene), eV.rightCamera && (eV.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), eV._scene = VV, eV.leftCamera && (eV.leftCamera._scene = VV), eV. … [truncated]
+       createAnimationFrameWithoutPrecomputes(HH, BH, LH) {
+         let AH, rH, SH = null;
+         if ("object" === typeof BH && "post" in BH) {
+           var hH;
+           SH = null !== (hH = BH.lerp_mode) && void 0 !== hH ? hH : null, rH = LH(BH.post), AH = void 0 !== BH.pre ? LH(BH.pre) : rH
+         } else {
+           const HH = LH(BH);
+           rH = HH, AH = HH
+         }
+         return {
+           timeFraction: HH,
+           lB: this.createLerpMode(SH),
+           pre: AH,
+           post: rH
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L815-L816` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L283-L284) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.eC.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       createLerpMode(HH) {
+         return null === HH ? AH.j.Linear : EH.LERP_MODE_SCHEMA_MAPPING[HH]
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L818-L819` → after: `L286-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L286-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L286-L304) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L818-L819)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+     }
+ 
+     function XH(HH) {
+       return Number.isFinite(HH.timeFraction) && GH(HH.pre) && GH(HH.post)
+     }
+ 
+     function GH(HH) {
+       return Number.isFinite(HH[0]) && Number.isFinite(HH[1]) && Number.isFinite(HH[2])
+     }
+ 
+     function YH(HH, BH, LH, AH, rH, SH, hH, tH) {
+       const zH = SH - BH,
+         CH = SH - AH,
+         EH = tH - AH,
+         XH = [null, null, null];
+       for (let GH = 0; GH < XH.length; GH++) XH[GH] = uH(HH[GH], LH[GH], rH[GH], hH[GH], zH, EH);
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L822-L842` → after: `L307-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L307-L312) · [Before (L822-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L822-L842)

```diff
-     gV._DefaultUtilityLayer = null, gV._DefaultKeepDepthUtilityLayer = null;
-     const DV = {
-       FindMainCamera: function(VV) {
-         return VV.findMainCamera()
-       },
-       FindMainObjectRenderer: function(VV) {
-         return VV.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const xV = VV.yE,
-           JV = new gV(xV, eV, !0);
-         JV.utilityLayerScene.activeCamera = xV.activeCamera;
-         let YV = DV.FindMainCamera(xV.frameGraph);
-         !YV && xV.cameras.length > 0 && (YV = xV.cameras[0]), YV && (JV.setRenderCamera(YV), JV.utilityLayerScene.activeCamera = YV);
-         const UV = xV.onAfterRenderObservable.add((() => {
- ... (5 more removed lines; see GitHub link above)
+ 
+     function uH(HH, BH, LH, AH, SH, hH) {
+       return {
+         gB: rH.d.computeShortestRotation(HH, LH) / SH,
+         NB: rH.d.computeShortestRotation(BH, AH) / hH,
+         delta: rH.d.computeShortestRotation(BH, LH)
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L844-L845` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L314) · [Before (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L844-L845)

```diff
-     };
-     let iV = null;
+     }
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L847-L862` → after: `L316-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L316-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L316-L328) · [Before (L847-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L847-L862)

```diff
-     function CV(VV, eV, xV, JV) {
-       let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         yV = arguments.length > 6 ? arguments[6] : void 0,
-         pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: nV,
-         width: wV
-       } = LV(VV, eV, xV);
-       if (!nV || !wV) return void vV.b.Error("Invalid 'size' parameter !");
-       const ZV = eV.dD();
-       let kV = ZV.activeCamera !== eV;
-       if (ZV.frameGraph) {
-         const VV = DV.FindMainObjectRenderer(ZV.frameGraph);
-         VV && (kV = VV.camera !== eV)
+     function QH(HH, BH, LH, AH, rH, SH, hH, tH) {
+       const zH = SH - BH,
+         CH = SH - AH,
+         EH = tH - AH,
+         XH = [null, null, null];
+       for (let GH = 0; GH < XH.length; GH++) XH[GH] = {
+         gB: (rH[GH] - HH[GH]) / zH,
+         NB: (hH[GH] - LH[GH]) / EH,
+         delta: rH[GH] - LH[GH]
+       };
+       return {
+         cB: CH,
+         eB: XH
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L888-L898` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L331-L333) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L888-L898)

```diff
-     async function aV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         YV = arguments.length > 4 ? arguments[4] : void 0,
-         UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((QV, nV) => {
-         CV(VV, eV, xV, (VV => {
-           "undefined" !== typeof VV ? QV(VV) : nV(new Error("Data is undefined"))
-         }), JV, pV, YV, UV, yV)
-       }))
+ 
+     function WH(HH) {
+       return MH("number" === typeof HH ? [HH, HH, HH] : HH)
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L900-L911` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L335-L337) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L900-L911)

```diff
-     async function oV(VV, eV, xV, JV) {
-       let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         UV = arguments.length > 5 ? arguments[5] : void 0,
-         yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((pV => {
-         CV(VV, eV, {
-           width: xV,
-           height: JV
-         }, (() => {
-           pV()
-         }), YV, !0, UV, yV)
-       }))
+ 
+     function MH(HH) {
+       return [xH(HH[0]), xH(HH[1]), xH(HH[2])]
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L914-L986` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L340-L341) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L914-L986)

```diff
-     function cV(VV, eV, UV, yV) {
-       let pV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         QV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         nV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         wV = arguments.length > 7 ? arguments[7] : void 0,
-         rV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         BV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         jV = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         qV = arguments.length > 11 ? arguments[11] : void 0,
-         tV = arguments.length > 12 ? arguments[12] : void 0,
-         FV = arguments.length > 13 ? arguments[13] : void 0,
-         TV = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         PV = arguments.length > 15 ? arguments[15] : void 0;
-       const AV = eV.dD();
-       if (AV.frameGraph) return void lV(AV.frameGraph, eV, UV, pV, QV, nV, wV, qV, FV, !yV).then((VV => {
-         yV && yV(VV)
- ... (57 more removed lines; see GitHub link above)
+     function xH(HH) {
+       return Number.isFinite(HH) ? Math.min(hH.h, Math.max(-hH.h, HH)) : HH
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L988-L1003` → after: `L343-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L343-L346) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L988-L1003)

```diff
-     async function hV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         yV = arguments.length > 6 ? arguments[6] : void 0,
-         pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         nV = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         wV = arguments.length > 10 ? arguments[10] : void 0,
-         ZV = arguments.length > 11 ? arguments[11] : void 0,
-         vV = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((rV, kV) => {
-         cV(VV, eV, xV, (VV => {
-           "undefined" !== typeof VV ? rV(VV) : kV(new Error("Data is undefined"))
-         }), JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV)
-       }))
+ 
+     function vH(HH) {
+       const [BH, LH, AH] = HH, hH = -(0, SH.h)(BH), tH = -(0, SH.h)(LH), zH = (0, SH.h)(AH), CH = rH.d.quaternionFromEulerZYX(hH, tH, zH);
+       return rH.d.eulerYXZFromQuaternion(CH)
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1005-L1092` → after: `L348-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L348-L355) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L1005-L1092)

```diff
-     async function lV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         yV = arguments.length > 6 ? arguments[6] : void 0,
-         pV = arguments.length > 7 ? arguments[7] : void 0,
-         QV = arguments.length > 8 ? arguments[8] : void 0,
-         nV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         wV = arguments.length > 10 ? arguments[10] : void 0;
-       const ZV = VV.engine,
-         vV = VV.textureManager,
-         {
-           height: rV,
-           width: bV,
-           finalWidth: EV,
-           finalHeight: jV
- ... (72 more removed lines; see GitHub link above)
+     EH.LERP_MODE_SCHEMA_MAPPING = {
+       linear: AH.j.Linear,
+       catmullrom: AH.j.CatmullRomSpline
+     };
+     const PH = 1 / 16;
+ 
+     function TH(HH) {
+       return [-HH[0] * PH, HH[1] * PH, HH[2] * PH]
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1095-L1109` → after: `L358-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L358-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L358-L364) · [Before (L1095-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L1095-L1109)

```diff
-     function LV(VV, eV, xV) {
-       let JV = 0,
-         YV = 0,
-         UV = 0,
-         yV = 0;
-       if ("object" === typeof xV) {
-         const pV = xV.precision ? Math.abs(xV.precision) : 1;
-         xV.width && xV.height ? (JV = xV.height * pV, YV = xV.width * pV) : xV.width && !xV.height ? (YV = xV.width * pV, JV = Math.round(YV / VV.getAspectRatio(eV))) : xV.height && !xV.width ? (JV = xV.height * pV, YV = Math.round(JV * VV.getAspectRatio(eV))) : (YV = Math.round( … [truncated]
-       } else isNaN(xV) || (JV = xV, YV = xV, UV = xV, yV = xV);
-       return YV && (YV = Math.floor(YV)), JV && (JV = Math.floor(JV)), UV && (UV = Math.floor(UV)), yV && (yV = Math.floor(yV)), {
-         height: 0 | JV,
-         width: 0 | YV,
-         finalWidth: 0 | UV,
-         finalHeight: 0 | yV
-       }
+     function UH(HH) {
+       const [BH, LH, AH] = HH;
+       return [BH >= 0 ? Math.PI - BH : -Math.PI - BH, VH(LH + Math.PI), VH(AH + Math.PI)]
+     }
+ 
+     function VH(HH) {
+       return rH.d.mod(HH + Math.PI, 2 * Math.PI) - Math.PI
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1121-L1124` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L367-L368) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L1121-L1124)

```diff
-     function KV() {
-       if (mV) return;
-       mV = !0;
-       rV.j.CreateScreenshot = CV, rV.j.CreateScreenshotAsync = aV, rV.j.CreateScreenshotUsingRenderTarget = cV, rV.j.CreateScreenshotUsingRenderTargetAsync = hV
+     function OH(HH, BH) {
+       return Math.abs(rH.d.computeShortestRotation(HH[0], BH[0])) + Math.abs(rH.d.computeShortestRotation(HH[1], BH[1])) + Math.abs(rH.d.computeShortestRotation(HH[2], BH[2]))
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1126` → after: `L370-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L370-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/261.js#L370-L390) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/261.js#L1126)

```diff
-     KV()
+     const bH = new CH
+   },
+   38020: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH,
+       g: () => SH,
+       j: () => AH,
+       m: () => rH
+     });
+     let AH = function(HH) {
+         return HH[HH.Linear = 0] = "Linear", HH[HH.CatmullRomSpline = 1] = "CatmullRomSpline", HH
+       }({}),
+       rH = function(HH) {
+         return HH[HH.NoLoop = 0] = "NoLoop", HH[HH.LoopOnLastFrame = 1] = "LoopOnLastFrame", HH[HH.HoldOnLastFrame = 2] = "HoldOnLastFrame", HH
+       }({}),
+       SH = function(HH) {
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   38908: (VV, eV, xV) => {
+   38071: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/262.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       e: () => YV
+       Color3: () => AH.c,
+       d: () => AH.g
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L257` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/262.js#L9-L10) · [Before (L8-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/262.js#L8-L257)

```diff
-     var JV = xV(38917);
-     class YV {
-       static GetPlanes(VV) {
-         const eV = [];
-         for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
-         return YV.GetPlanesToRef(VV, eV), eV
-       }
-       static GetNearPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
-       }
-       static GetFarPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
-       }
-       static GetLeftPlaneToRef(VV, eV) {
- ... (234 more removed lines; see GitHub link above)
+     var AH = LH(38074);
+     (0, AH.j)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L2)

```diff
- export const ids = [262, 263];
+ export const ids = [263];
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   64284: (VV, eV, xV) => {
+   64115: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L6-L11` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L6-L7) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L6-L11)

```diff
-       RegisterShaderMaterial: () => JV.c,
-       ShaderMaterial: () => JV.n,
-       ShaderMaterialCreateFromSnippetAsync: () => JV.f,
-       ShaderMaterialParse: () => JV.l,
-       ShaderMaterialParseFromFileAsync: () => JV.g,
-       ShaderMaterialParseFromSnippetAsync: () => JV.j
+       DEVTOOLS_SHADERS: () => SH,
+       registerDevtoolsShader: () => hH
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L13-L14` → after: `L9-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L9-L38) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L13-L14)

```diff
-     var JV = xV(41729);
-     (0, JV.c)()
+     var AH = LH(41138),
+       rH = LH(38086);
+     const SH = {
+       devtoolsNormal: function(HH) {
+         return {
+           vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.d)(HH,"normal","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\t\t\t${(0,rH.yb)(HH,"world","mat4")}\n\t\t\t${(0,rH.Eb)(HH,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,rH.Eb)(HH,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t\n\t\t\t\t${(0,rH.C)(HH,"vec3","normalColor",`abs(${(0,rH.U)(HH,"vNormal")})`)}\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(HH) {
+         return {
+           vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${(0,rH.j)(HH)} = ${(0,rH.Cb)(HH,"worldViewProjection")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsDepth: function(HH) {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L40) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L16)

```diff
-   38908: (VV, eV, xV) => {
+   38086: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L18` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L42-L78) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L18)

```diff
-       e: () => YV
+       $: () => rH,
+       C: () => EH,
+       Cb: () => IH,
+       Eb: () => WH,
+       G: () => OH,
+       Hb: () => vH,
+       J: () => lH,
+       Lb: () => kH,
+       M: () => SH,
+       Mb: () => mH,
+       P: () => eH,
+       R: () => cH,
+       T: () => PH,
+       U: () => oH,
+       V: () => fH,
+       Z: () => NH,
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L20-L58` → after: `L80-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L80-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L80-L262) · [Before (L20-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L20-L58)

```diff
-     var JV = xV(38917);
-     class YV {
-       static GetPlanes(VV) {
-         const eV = [];
-         for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
-         return YV.GetPlanesToRef(VV, eV), eV
-       }
-       static GetNearPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
-       }
-       static GetFarPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
-       }
-       static GetLeftPlaneToRef(VV, eV) {
- ... (23 more removed lines; see GitHub link above)
+     const AH = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function rH(HH) {
+       return HH === AH.WGSL
+     }
+ 
+     function SH(HH, BH, LH) {
+       return rH(HH) ? LH : BH
+     }
+     const hH = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (167 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L61` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L265) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L61)

```diff
-   38917: (VV, eV, xV) => {
+   41138: (HH, BH, LH) => {
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L63-L202` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L267) · [Before (L63-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L63-L202)

```diff
-       d: () => YV
-     });
-     var JV = xV(38269);
-     class YV {
-       constructor(VV, eV, xV, YV) {
-         this.normal = new JV.o(VV, eV, xV), this.d = YV
-       }
-       WYV() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
- ... (124 more removed lines; see GitHub link above)
+       c: () => AH
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L205-L269` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/263.js#L270-L280) · [Before (L205-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/263.js#L205-L269)

```diff
-       static _CheckLimit(VV, eV) {
-         let xV = JV._LogLimitOutputs[VV];
-         return xV ? xV.current++ : (xV = {
-           limit: eV,
-           current: 1
-         }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
-       }
-       static _GenerateLimitMessage(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const xV = JV._LogLimitOutputs[VV];
-         if (!xV || !JV.MessageLimitReached) return;
-         const YV = this._Levels[eV];
-         xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
-       }
-       static _AddLogEntry(VV) {
-         JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
- ... (49 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersStore : AH.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.IncludesShadersStore : AH.IncludesShadersStoreWGSL
+       }
+     }
+     AH.ShadersRepository = "src/Shaders/", AH.ShadersStore = {}, AH.IncludesShadersStore = {}, AH.ShadersRepositoryWGSL = "src/ShadersWGSL/", AH.ShadersStoreWGSL = {}, AH.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   38966: (VV, eV, xV) => {
+   42369: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L6-L7)

```diff
-       b: () => ZV,
-       d: () => yV
+       noaDevTools: () => XH
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L9-L3406` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L8-L12) · [Before (L9-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L9-L3406)

```diff
-     var JV = xV(9843),
-       YV = xV(9820),
-       UV = xV(375);
-     const yV = {
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
- ... (3382 more removed lines; see GitHub link above)
+     var AH = LH(38304),
+       rH = LH(38295),
+       SH = LH(3038),
+       hH = LH(1789),
+       tH = LH(42292);
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3410-L3564` → after: `L22-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L22-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L22-L37) · [Before (L3410-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3410-L3564)

```diff
-         [`${VV} Banner`]: {
-           positions: [{
-             block: `${VV} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${VV} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${VV} Banner|meta|rot2|bot`]: {
-           positions: [{
-             block: `${VV} Banner|meta|rot2|bot`,
- ... (139 more removed lines; see GitHub link above)
+         canvas: LH.getRenderingCanvas(),
+         maxTextureSize: LH.getCaps().maxTextureSize,
+         VX: () => !HH.oX,
+         resize: (HH, BH) => {
+           LH.setSize(HH, BH)
+         },
+         restoreSize: () => {
+           LH.setSize(AH.width, AH.height), BH.resize()
+         },
+         onFrameDrawn: LH => {
+           const AH = () => {
+             BH.kU && LH()
+           };
+           return HH.on("afterRender", AH), () => {
+             HH.off("afterRender", AH)
+           }
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3569-L3665` → after: `L43-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L43-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L43-L72) · [Before (L3569-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3569-L3665)

```diff
-     function QV(VV) {
-       const eV = (0, UV.Tb)(VV);
-       return {
-         [eV]: {
-           positions: [{
-             block: eV,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${eV} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${eV} Top Right`,
- ... (81 more removed lines; see GitHub link above)
+     function EH(HH, BH) {
+       let {
+         width: CH,
+         height: EH,
+         colouring: XH
+       } = BH;
+       const GH = "normals" === XH,
+         YH = "depth" === XH;
+       return new Promise((BH => {
+         try {
+           const uH = (0, SH.c)();
+           if (uH.mX.yu) return "screenshot" !== HH || null !== XH ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void BH()) : void(0, tH.f)(zH(uH), CH, EH).finally(BH);
+           const QH = uH.mX.engine,
+             WH = uH.mX.yN(),
+             MH = CH,
+             xH = EH;
+ ... (14 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3667-L3741` → after: `L74-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L74-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L74-L227) · [Before (L3667-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3667-L3741)

```diff
-     function nV(VV) {
-       const eV = `_${VV} Back`,
-         xV = `_${VV} Dish`;
-       return {
-         [VV]: {
-           positions: [{
-             block: VV,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: eV,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (59 more removed lines; see GitHub link above)
+             function VH() {
+               var HH;
+               TH && (TH = !1, (0, AH.f)(WH.meshes, !1)), null === (HH = UH) || void 0 === HH || HH(), UH = null, PH.forEach((HH => {
+                 const BH = vH.get(HH);
+                 BH && (HH.material = BH)
+               }))
+             }
+             if (GH) {
+               const HH = [],
+                 BH = [];
+               PH.forEach((LH => {
+                 const AH = LH.name.toLowerCase(),
+                   rH = LH.jF().boundingBox.center,
+                   SH = WH.activeCamera.position.subtract(rH).length();
+                 AH.includes("sky") || AH.includes("background") || AH.includes("environment") || SH > 1e3 ? BH.push(LH) : HH.push(LH)
+               })), XH("devtoolsNormal", uH);
+ ... (138 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3743` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L229) · [Before (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3743)

```diff
-       }
+       }))
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3745-L3766` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L231-L233) · [Before (L3745-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3745-L3766)

```diff
- 
-     function wV(VV) {
-       const eV = `Small ${VV} Pod`;
-       return {
-         [eV]: {
-           positions: [{
-             block: eV,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${VV} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
- ... (6 more removed lines; see GitHub link above)
+     const XH = new class {
+       constructor() {
+         this.tools = CH.ALL_DEV_TOOLS
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3768-L3789` → after: `L235-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L235-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L235-L247) · [Before (L3768-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3768-L3789)

```diff
-     }
-     for (const vV in yV) {
-       for (const VV of yV[vV].positions)
-         if (VV.id = YV.k[VV.block].id, vV === VV.block && (0 !== VV.x || 0 !== VV.y || 0 !== VV.z)) throw new Error(`Multiblock "${vV}" has main block "${VV.block}" at non-origin position (${VV.x}, ${VV.y}, ${VV.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       yV[YV.k[vV].id] = yV[vV]
-     }
-     const ZV = {};
-     for (const vV in yV)
-       for (const {
-           block: VV,
-           x: eV,
-           y: xV,
-           z: JV
-         }
-         of yV[vV].positions) {
-         const UV = {
- ... (6 more removed lines; see GitHub link above)
+       downloadScene(HH, BH) {
+         return EH(HH, BH)
+       }
+       async setAmbientLightIntensity(HH) {
+         const {
+           Color3: BH
+         } = await Promise.all([LH.e(259), LH.e(262)]).then((() => LH(38071)));
+         (0, SH.c)().mX.yN().ambientColor = BH.FromArray([HH, HH, HH])
+       }
+       capturePhoto(HH, BH, LH) {
+         return function(HH, BH, LH, AH) {
+           return (0, tH.c)(zH(HH), BH, LH, AH)
+         }((0, SH.c)(), HH, BH, LH)
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3792` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L251) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3792)

```diff
-   39360: (VV, eV, xV) => {
+   42292: (HH, BH, LH) => {
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3797-L3806` → after: `L256-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L256-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L256-L259) · [Before (L3797-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3797-L3806)

```diff
-     var JV = xV(9820),
-       YV = xV(9865),
-       UV = xV(9873);
-     const yV = YV.w.map((VV => {
-       let {
-         dx: eV,
-         dz: xV
-       } = VV;
-       return [eV, 0, xV]
-     }));
+     var AH = LH(1807);
+     const rH = 33177600,
+       SH = 3e4;
+     let hH = !1;
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3808-L3851` → after: `L261-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L261-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L261-L277) · [Before (L3808-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3808-L3851)

```diff
-     function pV(VV) {
-       const eV = JV.k[VV];
-       return !!eV && VV !== JV.e && !eV.model && !eV.Cr && !1 !== eV.solid && !eV.PE
-     }
-     class QV {
-       constructor(VV) {
-         this.model = VV, this.reshapeOffsets = [...yV, [0, -1, 0]]
-       }
-       handles(VV) {
-         const eV = JV.k[VV];
-         return (null === eV || void 0 === eV ? void 0 : eV.model) === this.model && void 0 !== eV.attachedTop
-       }
-       affects(VV) {
-         return this.handles(VV) || pV(VV) || (0, UV.n)(JV.k[VV])
-       }
-       shape(VV, eV, xV, yV, QV) {
- ... (28 more removed lines; see GitHub link above)
+     function tH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: tH = 1,
+         type: zH = "image/png",
+         quality: CH
+       } = AH;
+       return HH.VX() ? hH ? Promise.reject(new Error("A screenshot is already being taken")) : (hH = !0, new Promise(((AH, EH) => {
+         let XH, GH = 2,
+           YH = null;
+         const uH = () => {
+           var BH;
+           hH = !1, null === (BH = YH) || void 0 === BH || BH(), clearTimeout(XH);
+           try {
+             HH.restoreSize()
+           } catch (LH) {
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3854-L3860` → after: `L297-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L297-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L297-L315) · [Before (L3854-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3854-L3860)

```diff
-       if (JV.enchantmentData)
-         for (const ZV in JV.enchantmentData) {
-           const VV = JV.enchantmentData[ZV];
-           if (!VV) continue;
-           if ("object" !== typeof VV) {
-             JV.enchantmentData[ZV] = void 0;
-             continue
+         YH = HH.onFrameDrawn((() => {
+           if (GH--, GH > 0) return;
+           const {
+             canvas: BH
+           } = HH, LH = {
+             width: BH.width,
+             height: BH.height
+           };
+           try {
+             BH.toBlob((HH => {
+               HH ? AH({
+                 blob: HH,
+                 ...LH
+               }) : EH(new Error("The canvas gave no image"))
+             }), zH, CH)
+           } catch (QH) {
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3862-L3868` → after: `L317-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L317-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L317-L326) · [Before (L3862-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3862-L3868)

```diff
-           const eV = VV.icon,
-             xV = VV.description;
-           var pV, QV, nV, wV;
-           if ("string" !== typeof eV) JV.enchantmentData[ZV].icon = null !== (pV = null === eV || void 0 === eV || null === (QV = eV.toString) || void 0 === QV ? void 0 : QV.call(eV)) && void 0 !== pV ? pV : void 0;
-           if ("string" !== typeof xV) JV.enchantmentData[ZV].description = null !== (nV = null === xV || void 0 === xV || null === (wV = xV.toString) || void 0 === wV ? void 0 : wV.call(xV)) && void 0 !== nV ? nV : void 0
-         }
-       return eV.customAttributes = JV, eV
+         }))
+       }))) : Promise.reject(new Error("Screenshots need a game to be running"))
+     }
+     async function zH(HH, BH, LH) {
+       try {
+         const rH = await tH(HH, BH, LH);
+         (0, AH.e)(rH.blob, `bloxd-screenshot-${rH.width}x${rH.height}-${Date.now()}.png`)
+       } catch (rH) {
+         console.error("Error taking screenshot:", rH)
+       }
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3874` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L329) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3874)

```diff
-   39352: (VV, eV, xV) => {
+   38304: (HH, BH, LH) => {
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3878-L3879` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L332) · [Before (L3878-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3878-L3879)

```diff
-       e: () => QV,
-       g: () => ZV,
+       f: () => tH,
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3882-L3895` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L335-L337) · [Before (L3882-L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3882-L3895)

```diff
-     var JV = xV(9820),
-       YV = xV(9848),
-       UV = xV(39360);
-     const yV = (0, JV.n)("Noticeboard"),
-       pV = (0, JV.n)("Standing Noticeboard|meta|rot4|lrud");
- 
-     function QV(VV) {
-       return yV <= VV && VV <= pV
-     }
-     const nV = new Uint8Array(pV - yV + 1);
-     for (let NV = yV; NV <= pV; NV++) nV[NV - yV] = (0, YV.p)(JV.k[NV].meta.metaStr);
-     const wV = 64,
-       ZV = wV * wV,
-       [vV, rV, kV, bV] = [0, 1, 2, 3];
+     var AH = LH(38302),
+       rH = LH(38308);
+     let SH = 0;
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3897-L3903` → after: `L339-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L339-L343) · [Before (L3897-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3897-L3903)

```diff
-     function EV(VV) {
-       var eV, xV;
-       return "string" === typeof(null === VV || void 0 === VV || null === (eV = VV.persisted) || void 0 === eV || null === (xV = eV.shared) || void 0 === xV ? void 0 : xV.text)
-     }
- 
-     function BV(VV) {
-       return EV(VV) && "" !== VV.persisted.shared.text.trim()
+     function hH(HH, BH) {
+       const LH = HH;
+       LH._noaFaceGroups = null !== BH && void 0 !== BH ? BH : null, LH._noaFaceEpoch = -1, LH._noaFaceMask = -1, LH._noaFaceCount = -1, LH._noaFaceMaterial = null;
+       const AH = HH.jU;
+       AH && 1 === AH.length && (AH[0].indexStart = 0, AH[0].indexCount = HH.getTotalIndices())
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3907-L3909` → after: `L347-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L347-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L347-L353) · [Before (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3907-L3909)

```diff
-       let [xV, , JV] = eV;
-       const [UV, , yV] = YV.t[VV][rV];
-       return xV * UV + JV * yV
+       if (BH) {
+         SH++;
+         for (const BH of HH) {
+           const HH = BH._noaFaceGroups;
+           HH && hH(BH, HH)
+         }
+       } else SH = Math.max(0, SH - 1)
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3913-L3921` → after: `L357-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L357-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L357-L364) · [Before (L3913-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3913-L3921)

```diff
-       return xV[1] - eV[1] || jV(VV, eV) - jV(VV, xV)
-     }
- 
-     function tV(VV, eV, xV, UV, pV) {
-       var QV;
-       let wV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : VV(eV[0], eV[1], eV[2]);
-       if (!(nV[wV - yV] & 1 << xV)) return null;
-       const [ZV, vV, rV] = YV.t[pV][xV], kV = [eV[0] + ZV, eV[1] + vV, eV[2] + rV], bV = VV(kV[0], kV[1], kV[2]), EV = null === (QV = JV.k[bV]) || void 0 === QV ? void 0 : QV.meta;
-       return (null === EV || void 0 === EV ? void 0 : EV.rootId) === UV && EV.rot === pV && nV[bV - yV] & 1 << (1 ^ xV) ? kV : null
+       let rH = -1,
+         SH = 0;
+       for (let hH = 0; hH < AH.e; hH++) {
+         const LH = HH[hH],
+           tH = HH[hH + 1];
+         tH > LH && BH & 1 << AH.c[hH] && (rH < 0 && (rH = LH), SH = tH)
+       }
+       return rH < 0 ? (LH[0] = 0, LH[1] = 0, 0) : (LH[0] = rH, LH[1] = SH - rH, SH - rH)
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3923-L3936` → after: `L366-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L366-L410) · [Before (L3923-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3923-L3936)

```diff
- 
-     function FV(VV, eV, xV, UV) {
-       const yV = VV(eV, xV, UV);
-       if (!QV(yV)) return null;
-       const {
-         rootId: pV,
-         rot: nV
-       } = JV.k[yV].meta, ZV = (eV, xV) => {
-         let JV = eV,
-           YV = 1;
-         for (let UV = tV(VV, JV, xV, pV, nV); UV && YV < wV; UV = tV(VV, JV, xV, pV, nV)) JV = UV, YV++;
-         return {
-           end: JV,
-           cells: YV
+     class CH {
+       constructor(HH, BH) {
+         this.xX = HH, this.engine = BH, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(HH, BH) {
+         if (!BH) return;
+         const LH = BH.getProjectionMatrix().m,
+           hH = 0 === SH && 0 === LH[15],
+           tH = BH.globalPosition,
+           {
+             engine: CH
+           } = this,
+           EH = hH ? (0, rH.d)(LH, CH.getRenderWidth(), CH.getRenderHeight()) : 0;
+         tH.x === this.eyeX && tH.y === this.eyeY && tH.z === this.eyeZ && EH === this.focalPx && hH === this.culling || (this.epoch++, this.eyeX = tH.x, this.eyeY = tH.y, this.eyeZ = tH.z, this.focalPx = EH, this.culling = hH);
+         const {
+           epoch: XH,
+ ... (29 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3938-L3948` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L412) · [Before (L3938-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3938-L3948)

```diff
-       }, EV = ZV(ZV([eV, xV, UV], vV).end, kV).end, BV = ZV(EV, rV).cells, [jV, , qV] = YV.t[nV][rV];
-       let FV = 1;
-       VV: for (; FV < wV; FV++)
-         for (let eV = 0; eV < BV; eV++)
-           if (!tV(VV, [EV[0] + jV * eV, EV[1] - FV + 1, EV[2] + qV * eV], bV, pV, nV)) break VV;
-       return {
-         anchor: EV,
-         rootId: pV,
-         rot: nV,
-         width: BV,
-         height: FV
+         HH.length = MH
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3953-L3966` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L426) · [Before (L3953-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3953-L3966)

```diff
-       for (const xV of function(VV) {
-           let {
-             anchor: eV,
-             rot: xV,
-             width: JV,
-             height: UV
-           } = VV;
-           const [yV, , pV] = YV.t[xV][rV], QV = [];
-           for (let YV = 0; YV < UV; YV++)
-             for (let VV = 0; VV < JV; VV++) QV.push([eV[0] + yV * VV, eV[1] - YV, eV[2] + pV * VV]);
-           return QV
-         }(VV))
-         if (EV(eV(xV[0], xV[1], xV[2]))) return xV;
-       return null
+       HH._data = BH
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3969-L3996` → after: `L429-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L429-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L429-L431) · [Before (L3969-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3969-L3996)

```diff
-     function PV(VV, eV, xV, YV, UV) {
-       const yV = VV(xV, YV, UV);
-       if (!QV(yV)) return null;
-       const {
-         rootId: pV,
-         rot: nV
-       } = JV.k[yV].meta, wV = [
-         [xV, YV, UV]
-       ], vV = new Set([wV[0].join()]);
-       let rV = wV[0],
-         kV = null;
-       for (let JV = 0; JV < wV.length; JV++) {
-         const xV = wV[JV];
-         if (qV(nV, xV, rV) < 0 && (rV = xV), EV(eV(xV[0], xV[1], xV[2]))) {
-           const eV = FV(VV, xV[0], xV[1], xV[2]);
-           (!kV || qV(nV, eV.anchor, kV.anchor) < 0) && (kV = eV)
- ... (12 more removed lines; see GitHub link above)
+     function tH(HH) {
+       var BH, LH;
+       (null !== (BH = null === (LH = HH.getBuffer()) || void 0 === LH ? void 0 : LH.aX) && void 0 !== BH ? BH : 0) > 0 && (AH.add(HH), 0 === rH ? hH(HH, null) : SH.add(HH))
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3999-L4010` → after: `L434-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L434-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L434-L452) · [Before (L3999-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L3999-L4010)

```diff
-     function AV(VV, eV, xV, yV, pV) {
-       if (null !== xV && QV(xV)) {
-         const {
-           rootName: VV,
-           rot: eV
-         } = JV.k[xV].meta;
-         if (YV.t[eV].some((VV => {
-             let [eV, xV, JV] = VV;
-             return eV === yV[0] && xV === yV[1] && JV === yV[2]
-           }))) return {
-           root: VV,
-           rot: eV
+     function zH(HH) {
+       rH++;
+       for (const LH of function(HH) {
+           const BH = new Set;
+           for (const rH of HH) {
+             const HH = rH.geometry;
+             for (const rH of Object.values(null !== (LH = null === HH || void 0 === HH ? void 0 : HH.getVertexBuffers()) && void 0 !== LH ? LH : {})) {
+               var LH;
+               const HH = rH.getWrapperBuffer();
+               AH.has(HH) && BH.add(HH)
+             }
+           }
+           return BH
+         }(HH)) LH.getData() || CH(LH), SH.add(LH);
+       let BH = !0;
+       return () => {
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4013-L4017` → after: `L455-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L455-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L455-L462) · [Before (L4013-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4013-L4017)

```diff
-       const [nV, wV] = YV.n[pV], ZV = VV(eV[0] - nV, eV[1], eV[2] - wV);
-       return {
-         root: (0, UV.f)(ZV) ? YV.w : YV.u,
-         rot: pV
-       }
+     }
+ 
+     function CH(HH) {
+       const BH = HH.getBuffer();
+       if (!BH || !(BH.aX > 0)) return;
+       const LH = HH._engine,
+         AH = new Uint8Array(BH.aX);
+       LH.bindArrayBuffer(BH), LH._gl.getBufferSubData(LH._gl.ARRAY_BUFFER, 0, AH), LH._resetVertexBufferBinding(), hH(HH, AH)
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4020` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L465) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4020)

```diff
-   39343: (VV, eV, xV) => {
+   38302: (HH, BH, LH) => {
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4023-L4024` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L468) · [Before (L4023-L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4023-L4024)

```diff
-       d: () => tV,
-       g: () => PV,
+       e: () => SH,
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4031` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L473) · [Before (L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4031)

```diff
-       u: () => vV
+       v: () => CH
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4033-L4375` → after: `L475-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L475-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L475-L486) · [Before (L4033-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4033-L4375)

```diff
-     var JV = xV(7024),
-       YV = xV(38237),
-       UV = xV(9820);
-     const yV = (0, UV.n)("Water"),
-       pV = (0, UV.n)("Lava"),
-       QV = (0, UV.n)("Air"),
-       nV = {
-         physicsState: {
-           type: JV.q.CAR,
-           tier: JV.j.KART
-         },
-         validBlockIds: "solidBlocks",
-         meshSize: 4,
-         placeSound: null
-       },
-       wV = {
- ... (327 more removed lines; see GitHub link above)
+     const AH = 6,
+       rH = [0, 2, 4, 1, 3, 5, 0, 2],
+       SH = 6,
+       hH = [1, 0, 3, 2, 5, 4];
+     for (let EH = SH; EH < rH.length; EH++)
+       if (rH[EH] !== rH[EH - SH]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
+     const tH = rH.length + 1,
+       zH = (() => {
+         const HH = [];
+         for (let BH = 0; BH < SH; BH++) HH[rH[BH]] = BH;
+         return HH
+       })();
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4378-L4379` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L489) · [Before (L4378-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4378-L4379)

```diff
-       var eV;
-       return null === VV || void 0 === VV ? null : null !== (eV = EV[VV]) && void 0 !== eV ? eV : null
+       return !!HH && HH.backFaceCulling && (0 === HH.transparencyMode || 1 === HH.transparencyMode)
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4381-L4417` → after: `L491-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L491-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L491-L504) · [Before (L4381-L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4381-L4417)

```diff
-     const jV = {
-         meshAttachment: {
-           size: 3,
-           offset: [0, .72, .3],
-           rotation: [-Math.PI / 2, Math.PI, Math.PI]
-         }
-       },
-       qV = {
-         "Wood Hang Glider": {
-           ...jV,
-           physicsState: {
-             type: JV.q.GLIDER,
-             tier: JV.n.WOOD
-           }
-         },
-         "Iron Hang Glider": {
- ... (21 more removed lines; see GitHub link above)
+   },
+   38308: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => tH,
+       h: () => zH,
+       i: () => EH,
+       m: () => CH,
+       o: () => uH
+     });
+     var AH = LH(38302);
+     const rH = 1 / 16,
+       SH = 1 / 64,
+       hH = 2048;
+     AH.m;
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4419-L4421` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L506-L507) · [Before (L4419-L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4419-L4421)

```diff
-     function tV(VV) {
-       var eV;
-       return null === VV || void 0 === VV ? null : null !== (eV = qV[VV]) && void 0 !== eV ? eV : null
+     function tH(HH, BH, LH) {
+       return Math.min(Math.abs(HH[0] * BH), Math.abs(HH[5] * LH)) / 2
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4426-L4427` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L510-L511) · [Before (L4426-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4426-L4427)

```diff
-     function PV(VV) {
-       return FV.has(VV)
+     function zH(HH, BH) {
+       return rH + SH * HH * HH / BH
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4430-L4431` → after: `L514-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L514-L516) · [Before (L4430-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4430-L4431)

```diff
-     function AV(VV) {
-       return TV.has(VV)
+     function CH(HH, BH, LH, rH, SH) {
+       const hH = AH.q;
+       return EH(HH[hH], HH[hH + 1], HH[hH + 2], HH[hH + 3], HH[hH + 4], HH[hH + 5], BH, LH, rH, SH)
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4434-L4437` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L519-L520) · [Before (L4434-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4434-L4437)

```diff
-     function NV(VV) {
-       return VV === JV.q.DEFAULT || function(VV) {
-         return FV.has(VV) || TV.has(VV)
-       }(VV)
+     function EH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+       return (hH <= HH - CH ? 0 : 1) | (hH >= BH + CH ? 0 : 2) | (tH <= LH - CH ? 0 : 4) | (tH >= AH + CH ? 0 : 8) | (zH <= rH - CH ? 0 : 16) | (zH >= SH + CH ? 0 : 32)
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4440-L4441` → after: `L540-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L540-L542) · [Before (L4440-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4440-L4441)

```diff
-     function XV(VV) {
-       return !NV(VV) && VV !== JV.q.SLEEPING
+     function YH(HH, BH) {
+       const LH = AH.i[BH];
+       return HH[LH + 1] - HH[LH]
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4455-L4462` → after: `L545-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L545-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/264.js#L545-L577) · [Before (L4455-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/264.js#L4455-L4462)

```diff
-     function yV(VV) {
-       const eV = VV.indexOf("|");
-       return -1 === eV ? {
-         item: VV,
-         clientPredictedThrower: null
-       } : {
-         item: VV.slice(0, eV),
-         clientPredictedThrower: VV.slice(eV + 1)
+     function uH(HH, BH, LH) {
+       let rH = 0;
+       for (let hH = 0; hH < AH.m; hH++) YH(HH, hH) > 0 && (rH |= 1 << hH);
+       if (0 === (BH &= rH)) return 0;
+       if (BH === rH) return LH[0] = 0, LH[1] = HH[AH.e], 1;
+       let SH = null,
+         tH = 1 / 0;
+       for (const CH of function(HH) {
+           let BH = GH[HH];
+           if (BH) return BH;
+           const LH = new Map,
+             AH = (HH, BH) => {
+               const AH = 4 * HH + BH.length / 2;
+               LH.has(AH) || LH.set(AH, {
+                 pS: HH,
+                 windows: BH
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L2)

```diff
- export const ids = [265];
+ export const ids = [265, 266];
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   39211: (VV, eV, xV) => {
+   41533: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6-L11` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L6-L7) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L6-L11)

```diff
-       e: () => nV,
-       i: () => JV,
-       m: () => pV,
-       q: () => YV,
-       s: () => yV,
-       u: () => UV
+       b: () => EH,
+       c: () => GH
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L13-L18` → after: `L9-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L9-L92) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L13-L18)

```diff
-     const JV = 1.001,
-       YV = .501,
-       UV = .025,
-       yV = .75,
-       pV = .08,
-       QV = 4;
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37963),
+       hH = LH(38074),
+       tH = LH(41535),
+       zH = LH(41498),
+       CH = LH(38012);
+     let EH = (() => {
+         var HH;
+         let BH, LH, zH = tH.b,
+           CH = [],
+           EH = [],
+           XH = [],
+           GH = [];
+         return HH = class extends zH {
+           constructor(HH, BH, LH, rH) {
+ ... (68 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L21-L35` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L95) · [Before (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L21-L35)

```diff
-       const VV = YV,
-         eV = UV,
-         xV = VV - eV / 2,
-         JV = (2 * VV - 2 * eV) / (2 * QV - 1),
-         yV = [];
-       for (const YV of [-xV, xV])
-         for (const UV of [-xV, xV])
-           for (let xV = 0; xV < QV; xV++) {
-             const pV = -VV + eV + JV * (2 * xV + .5);
-             yV.push([JV, eV, eV, pV, YV, UV]), yV.push([eV, JV, eV, YV, pV, UV]), yV.push([eV, eV, JV, YV, UV, pV])
-           }
-       for (const YV of [-xV, xV])
-         for (const VV of [-xV, xV])
-           for (const JV of [-xV, xV]) yV.push([eV, eV, eV, YV, VV, JV]);
-       return yV
+       XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_3", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.HemisphericLight", EH))
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L38` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L98) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L38)

```diff
-   39575: (VV, eV, xV) => {
+   38610: (HH, BH, LH) => {
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L40-L56` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L100) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L40-L56)

```diff
-       A: () => AV,
-       D: () => FV,
-       H: () => tV,
-       K: () => vV,
-       O: () => bV,
-       P: () => BV,
-       T: () => YV,
-       d: () => wV,
-       f: () => QV,
-       i: () => qV,
-       j: () => nV,
-       l: () => pV,
-       n: () => yV,
-       o: () => UV,
-       s: () => PV,
-       v: () => rV,
- ... (1 more removed lines; see GitHub link above)
+       e: () => rH
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L58-L102` → after: `L102-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L102-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L102-L139) · [Before (L58-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L58-L102)

```diff
-     var JV = xV(9906);
- 
-     function YV(VV) {
-       return Math.floor(VV).toLocaleString("en-US")
-     }
-     const UV = 2e3,
-       yV = .005,
-       pV = .001,
-       QV = 2,
-       nV = "Fluid Tank",
-       wV = "Coolant Mixer",
-       ZV = 144;
- 
-     function vV(VV) {
-       const eV = VV.split("|")[0];
-       return (0, JV.j)(eV) ? eV === JV.e ? "cryo" : "water" : null
- ... (29 more removed lines; see GitHub link above)
+     var AH = LH(38619);
+     class rH {
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
+       }
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
+       }
+       static GetFarPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
+       }
+       static GetLeftPlaneToRef(HH, BH) {
+ ... (22 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L105-L107` → after: `L142-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L142-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L142-L224) · [Before (L105-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L105-L107)

```diff
- 
-     function EV(VV) {
-       return "pipe" === VV || "tank" === VV || "maker" === VV
+   },
+   38619: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => rH
+     });
+     var AH = LH(37963);
+     class rH {
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
+       }
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L109-L111` → after: `L226-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L226-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L226-L244) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L109-L111)

```diff
- 
-     function BV(VV, eV, xV) {
-       return 0 !== (VV.faces & 1 << xV) && 0 !== (eV.faces & 1 << (1 ^ xV)) && (EV(VV.kind) || EV(eV.kind))
+     rH._TmpMatrix = AH.e.Identity()
+   },
+   38966: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => AH
+     });
+     class AH {
+       constructor(HH, BH, LH, AH) {
+         this.x = HH, this.y = BH, this.width = LH, this.height = AH
+       }
+       toGlobal(HH, BH) {
+         return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
+       }
+       toGlobalToRef(HH, BH, LH) {
+         return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L113-L164` → after: `L246-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L246-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L246-L285) · [Before (L113-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L113-L164)

```diff
-     const jV = (VV, eV, xV, JV) => ({
-         input: VV,
-         inputAmount: JV,
-         output: eV,
-         outputAmount: xV
-       }),
-       qV = {
-         Condenser: {
-           kind: "Condenser",
-           opMs: 2e3,
-           inputSlot: null,
-           fuelSlot: null,
-           outputSlots: [],
-           recipes: [],
-           powerPerOp: 60,
-           fluidMade: 12,
- ... (36 more removed lines; see GitHub link above)
+   },
+   39588: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
+     });
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+             const LH = Object.getOwnPropertyNames(HH);
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L166-L169` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L287) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L166-L169)

```diff
-       };
- 
-     function tV(VV, eV) {
-       return 1e3 * (null !== eV && void 0 !== eV ? eV : 0) / VV.opMs
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L171-L175` → after: `L289-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L289-L295) · [Before (L171-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L171-L175)

```diff
- 
-     function FV(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       const xV = tV(qV["Coolant Mixer"], ZV) * eV;
-       return VV <= 0 ? 0 : Math.ceil(VV / xV - 1e-9)
+   },
+   38790: (HH, BH, LH) => {
+     function AH() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L177-L179` → after: `L297-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L297-L299) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L177-L179)

```diff
-     const TV = "baf2Water",
-       PV = "baf2waterclose",
-       AV = "baf2wateropen"
+     LH.d(BH, {
+       e: () => AH
+     })
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L181` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L301) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L181)

```diff
-   39562: (VV, eV, xV) => {
+   39595: (HH, BH, LH) => {
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L183-L184` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L303) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L183-L184)

```diff
-       d: () => gV,
-       f: () => DV
+       e: () => AH
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L186-L227` → after: `L305-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L305-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L305-L356) · [Before (L186-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L186-L227)

```diff
-     var JV = xV(9820),
-       YV = xV(9848);
-     const UV = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var yV = xV(9865),
-       pV = xV(39360),
-       QV = xV(9861);
-     const nV = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (26 more removed lines; see GitHub link above)
+     class AH {
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+       }
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
+       }
+       static _AddLogEntry(HH) {
+ ... (36 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L229-L245` → after: `L358-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L358-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L358-L417) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L229-L245)

```diff
-     const EV = "Splitter",
-       BV = "Sorting Gate",
-       jV = new Set(kV.I),
-       qV = new Set([...kV.I, "Belt Loader", "Fast Loader", BV]),
-       tV = new Set(kV.u),
-       FV = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0],
-         [0, -1, 0]
-       ];
- 
-     function TV(VV) {
-       var eV, xV;
- ... (1 more removed lines; see GitHub link above)
+     AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
+   },
+   64095: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+ ... (44 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L247-L249` → after: `L419-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L419-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L419-L449) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L247-L249)

```diff
- 
-     function PV(VV) {
-       return TV(VV) === kV.i && (0, kV.R)(JV.k[VV].name)
+     EH.VertexUrl = "fxaa", EH.FragmentUrl = "fxaa", EH.Uniforms = ["texelSize"];
+     class XH extends SH.d {
+       getClassName() {
+         return "FxaaPostProcess"
+       }
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           rH = arguments.length > 3 ? arguments[3] : void 0,
+           SH = arguments.length > 4 ? arguments[4] : void 0,
+           hH = arguments.length > 5 ? arguments[5] : void 0,
+           tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const zH = {
+           uniforms: EH.Uniforms,
+           size: "number" === typeof BH ? BH : void 0,
+           camera: LH,
+           samplingMode: rH || AH.g.BILINEAR_SAMPLINGMODE,
+ ... (15 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L251-L265` → after: `L451-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L451-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L451-L465) · [Before (L251-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L251-L265)

```diff
-     var AV = xV(9853),
-       NV = xV(9881);
-     const XV = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
- 
-     function MV(VV) {
-       var eV, xV;
-       const YV = null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta;
-       return (null === YV || void 0 === YV ? void 0 : YV.rootName) !== NV.p ? null : {
-         rot: null !== (xV = YV.rot) && void 0 !== xV ? xV : 1,
-         half: (0, NV.f)(YV.rootName, YV.metaStr)
+     var GH = LH(39595),
+       YH = LH(41387),
+       uH = LH(45299),
+       QH = LH(45285),
+       WH = LH(41179);
+     const MH = 0;
+     class xH {
+       constructor(HH, BH, LH) {
+         this.name = HH, this._parentTask = BH, this._context = LH, this.disabled = !1
+       }
+       setInitializeFunc(HH) {
+         this._initFunc = HH
+       }
+       setExecuteFunc(HH) {
+         this._executeFunc = HH
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L268-L270` → after: `L478-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L478-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L478-L494) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L268-L270)

```diff
- 
-     function zV(VV, eV, xV, JV) {
-       return MV(VV(eV, xV, JV))
+     class vH extends xH {
+       static IsObjectListPass(HH) {
+         return void 0 !== HH.setObjectList
+       }
+       get objectList() {
+         return this._objectList
+       }
+       setObjectList(HH) {
+         this._objectList = HH
+       }
+       constructor(HH, BH, LH, AH) {
+         super(HH, BH, LH), this._engine = AH
+       }
+       _isValid() {
+         const HH = super._isValid();
+         return HH || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L272-L279` → after: `L496-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L496-L550) · [Before (L272-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L272-L279)

```diff
- 
-     function GV(VV, eV, xV, JV, YV) {
-       let {
-         rot: UV,
-         half: yV
-       } = YV;
-       const [pV, QV] = (0, NV.m)(UV, yV), nV = zV(VV, eV + pV, xV, JV + QV);
-       return null !== nV && nV.rot === UV && nV.half === NV.t[yV]
+     class PH extends xH {
+       static IsRenderPass(HH) {
+         return void 0 !== HH.setRenderTarget
+       }
+       get renderTarget() {
+         return this._renderTarget
+       }
+       get renderTargetDepth() {
+         return this._renderTargetDepth
+       }
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
+       }
+       constructor(HH, BH, LH, AH) {
+         super(HH, BH, LH), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = AH
+       }
+ ... (39 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L281-L284` → after: `L552-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L552-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L552-L555) · [Before (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L281-L284)

```diff
-     var WV = xV(39568);
-     const RV = [new class {
-       constructor() {
-         this.reshapeOffsets = rV
+     var TH = LH(37997);
+     class UH {
+       get name() {
+         return this._name
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L286-L306` → after: `L557-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L557-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L557-L631) · [Before (L286-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L286-L306)

```diff
-       handles(VV) {
-         var eV;
-         return "Stairs" === (null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.model)
-       }
-       affects(VV) {
-         return this.handles(VV)
-       }
-       shape(VV, eV, xV, YV, UV) {
-         const yV = this.stairsOf(UV),
-           pV = this.cornerAt(VV, eV, xV, YV, yV),
-           nV = yV.half === QV.e.top ? "top" : "bot";
-         return (0, JV.n)(`${JV.k[UV].meta.rootName}|meta|rot${yV.rot}|${nV}${null===pV?"":`|${pV}`}`)
-       }
-       stairsOf(VV) {
-         const {
-           rot: eV,
- ... (5 more removed lines; see GitHub link above)
+       set name(HH) {
+         this._name = HH
+       }
+       get disabled() {
+         return this._disabled
+       }
+       set disabled(HH) {
+         this._disabled = HH
+       }
+       get passes() {
+         return this._passes
+       }
+       get passesDisabled() {
+         return this._passesDisabled
+       }
+       getClassName() {
+ ... (59 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L309-L327` → after: `L634-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L634-L640) · [Before (L309-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L309-L327)

```diff
-       stairsAt(VV, eV, xV, JV) {
-         const YV = VV(eV, xV, JV);
-         return this.handles(YV) ? this.stairsOf(YV) : null
-       }
-       cornerAt(VV, eV, xV, JV, YV) {
-         let {
-           rot: UV,
-           half: yV
-         } = YV;
-         const pV = nV[UV],
-           QV = YV => {
-             let [pV, QV] = YV;
-             const nV = this.stairsAt(VV, eV + pV, xV, JV + QV);
-             return null !== nV && nV.rot === UV && nV.half === yV
-           },
-           rV = this.stairsAt(VV, eV + pV[0], xV, JV + pV[1]);
- ... (3 more removed lines; see GitHub link above)
+       _execute() {
+         const HH = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
+         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const BH of HH) BH._execute()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L329-L332` → after: `L642-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L642-L650) · [Before (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L329-L332)

```diff
-         const kV = this.stairsAt(VV, eV - pV[0], xV, JV - pV[1]);
-         if (null !== kV && kV.half === yV) {
-           const VV = nV[kV.rot];
-           if (vV(pV, VV) && !QV(VV)) return ZV(VV, wV(pV)) ? "innerLeft" : "innerRight"
+         this.onAfterTaskExecute.notifyObservers(this)
+       }
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const HH of this._passes) HH._initialize();
+           for (const HH of this._passesDisabled) HH._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L336-L338` → after: `L653-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L653-L658) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L336-L338)

```diff
-     }, new class {
-       constructor() {
-         this.reshapeOffsets = UV, this.rootIds = new Set(YV.h.map((VV => (0, JV.n)(VV))))
+       _checkSameRenderTarget(HH, BH) {
+         if (null === HH || null === BH) return HH === BH;
+         if (HH.length !== BH.length) return !1;
+         for (let LH = 0; LH < HH.length; LH++)
+           if (HH[LH] !== BH[LH]) return !1;
+         return !0
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L340-L343` → after: `L660-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L660-L663) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L340-L343)

```diff
-       handles(VV) {
-         var eV;
-         const xV = null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta;
-         return void 0 !== xV && this.rootIds.has(xV.rootId)
+     }
+     class VH extends UH {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L345-L346` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L665-L666) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L345-L346)

```diff
-       affects(VV) {
-         return this.handles(VV)
+       set alphaMode(HH) {
+         this.postProcess.alphaMode = HH
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L348-L349` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L668-L669) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L348-L349)

```diff
-       placedBy(VV) {
-         return JV.k[VV].meta.rootName === YV.o ? null : YV.o
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L351-L440` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L671-L672) · [Before (L351-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L351-L440)

```diff
-       shape(VV, eV, xV, UV, yV) {
-         const {
-           rootId: pV,
-           rootName: QV,
-           rot: nV
-         } = JV.k[yV].meta;
-         let wV = 0;
-         return YV.t[nV].forEach(((YV, yV) => {
-           var QV;
-           let [ZV, vV, rV] = YV;
-           const kV = null === (QV = JV.k[VV(eV + ZV, xV + vV, UV + rV)]) || void 0 === QV ? void 0 : QV.meta;
-           (null === kV || void 0 === kV ? void 0 : kV.rootId) === pV && kV.rot === nV && (wV |= 1 << yV)
-         })), (0, JV.n)((0, YV.f)(QV, nV, wV))
-       }
-     }, ...yV.d.map((VV => new pV.c(VV))), new class {
-       constructor() {
- ... (74 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH) {
+         super(HH, BH), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = LH, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L442-L446` → after: `L674-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L674-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L674-L701) · [Before (L442-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L442-L446)

```diff
-       reshapedHalf(VV, eV, xV, JV, YV) {
-         if (null !== YV.half && GV(VV, eV, xV, JV, YV)) return YV.half;
-         for (const UV of ["right", "left"]) {
-           const [yV, pV] = (0, NV.m)(YV.rot, UV), QV = zV(VV, eV + yV, xV, JV + pV);
-           if (null !== QV && QV.rot === YV.rot && QV.half === NV.t[UV]) return UV
+       isReady() {
+         return this.postProcess.isReady()
+       }
+       getClassName() {
+         return "FrameGraphPostProcessTask"
+       }
+       record() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 ? arguments[1] : void 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const AH = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (AH && (AH.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, AH), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+           const HH = this._frameGraph.textureManager.getTextureAbsoluteDimensions(AH);
+           this._sourceWidth = HH.width, this._sourceHeight = HH.height
+         }
+ ... (12 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L448` → after: `L703-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L703-L706) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L448)

```diff
-         return null
+         return SH
+       }
+       dispose() {
+         this.postProcess.dispose(), super.dispose()
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L458-L462` → after: `L709-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L709-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L709-L721) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L458-L462)

```diff
- 
-     function DV(VV) {
-       for (const JV of RV) {
-         var eV, xV;
-         if (JV.handles(VV)) return null !== (eV = null === (xV = JV.placedBy) || void 0 === xV ? void 0 : xV.call(JV, VV)) && void 0 !== eV ? eV : null
+     class OH extends VH {
+       constructor(HH, BH, LH) {
+         super(HH, BH, LH || new EH(HH, BH.engine))
+       }
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 ? arguments[1] : void 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         const AH = super.record(HH, BH, LH);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, AH
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L466-L487` → after: `L724-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L724-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L724-L819) · [Before (L466-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L466-L487)

```diff
-   },
-   39568: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => NV,
-       d: () => tV,
-       e: () => qV
-     });
-     var JV = xV(9820),
-       YV = xV(9843),
-       UV = xV(9906),
-       yV = xV(39575),
-       pV = xV(9902);
-     const QV = (0, yV.O)("pipe"),
-       nV = (0, yV.O)("tank"),
-       wV = (0, yV.O)("port"),
-       ZV = "Reactor Port";
- ... (6 more removed lines; see GitHub link above)
+     var bH = LH(45296);
+     class kH extends VH {
+       constructor(HH, BH, LH) {
+         super(HH, BH, LH || new bH.f(HH, BH.engine))
+       }
+       getClassName() {
+         return "FrameGraphPassTask"
+       }
+     }
+     var mH = LH(41383),
+       oH = LH(41458),
+       IH = LH(41420),
+       fH = LH(41533),
+       lH = LH(38074);
+     class KH {
+       getRenderCamera(HH) {
+ ... (80 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L491-L492` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L824-L825) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L491-L492)

```diff
-         water: vV(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yV.d]),
-         cryo: vV(!1, [yV.d], [])
+       FindMainCamera: function(HH) {
+         return HH.findMainCamera()
```

#### 37. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L494-L501` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L827-L828) · [Before (L494-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L494-L501)

```diff
-       kV = new Set([...rV.water.roots, ...rV.cryo.roots]),
-       bV = {
-         nx: [-1, 0, 0],
-         ny: [0, -1, 0],
-         nz: [0, 0, -1],
-         px: [1, 0, 0],
-         py: [0, 1, 0],
-         pz: [0, 0, 1]
+       FindMainObjectRenderer: function(HH) {
+         return HH.findMainObjectRenderer()
```

#### 38. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L503-L523` → after: `L830-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L830-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L830-L845) · [Before (L503-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L503-L523)

```diff
-       EV = YV.g.map((VV => bV[VV])),
-       BV = EV.map((VV => {
-         let [eV, xV, JV] = VV;
-         return yV.v.findIndex((VV => {
-           let [YV, UV, yV] = VV;
-           return YV === eV && UV === xV && yV === JV
-         }))
-       }));
- 
-     function jV(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-       const xV = JV.k[VV],
-         YV = null === xV || void 0 === xV ? void 0 : xV.meta.rootName,
-         vV = rV[eV];
-       if (!YV || !vV.roots.has(YV)) return null;
-       if ((0, UV.j)(YV)) return (0, yV.K)(xV.name) === eV ? QV : null;
- ... (5 more removed lines; see GitHub link above)
+       CreateUtilityLayerRenderer: function(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const LH = HH.NQ,
+           AH = new KH(LH, BH, !0);
+         AH.utilityLayerScene.activeCamera = LH.activeCamera;
+         let rH = cH.FindMainCamera(LH.frameGraph);
+         !rH && LH.cameras.length > 0 && (rH = LH.cameras[0]), rH && (AH.setRenderCamera(rH), AH.utilityLayerScene.activeCamera = rH);
+         const SH = LH.onAfterRenderObservable.add((() => {
+           AH.render()
+         }));
+         return AH.utilityLayerScene.uR.addOnce((() => {
+           LH.onAfterRenderObservable.remove(SH)
+         })), AH
+       }
+     };
+     let eH = null;
```

#### 39. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L526` → after: `L848-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L848-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L848-L852) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L526)

```diff
-       let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         hH = arguments.length > 6 ? arguments[6] : void 0,
+         tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
```

#### 40. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L528-L535` → after: `L854-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L854-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L854-L885) · [Before (L528-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L528-L535)

```diff
-         makers: pV
-       } = rV[UV];
-       return EV.some(((nV, wV) => {
-         var ZV, vV;
-         let [rV, kV, bV] = nV;
-         const EV = VV(eV + rV, xV + kV, YV + bV),
-           qV = jV(EV, UV);
-         return null !== qV && pV.has(null !== (ZV = null === (vV = JV.k[EV]) || void 0 === vV ? void 0 : vV.meta.rootName) && void 0 !== ZV ? ZV : "") && !(0, yV.P)(QV, qV, BV[wV])
+         height: CH,
+         width: EH
+       } = FH(HH, BH, LH);
+       if (!CH || !EH) return void GH.e.Error("Invalid 'size' parameter !");
+       const XH = BH.yN();
+       let uH = XH.activeCamera !== BH;
+       if (XH.frameGraph) {
+         const HH = cH.FindMainObjectRenderer(XH.frameGraph);
+         HH && (uH = HH.camera !== BH)
+       }
+       uH ? RH(HH, BH, LH, (HH => {
+         if (SH) {
+           const BH = new Blob([HH]);
+           YH.i.DownloadBlob(BH), AH && AH("")
+         } else AH && AH(HH)
+       }), rH, 1, HH.getCreationOptions().antialias, void 0, void 0, void 0, void 0, hH) : HH.onEndFrameObservable.addOnce((() => {
+ ... (16 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L538-L541` → after: `L888-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L888-L898) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L538-L541)

```diff
- 
-     function tV(VV) {
-       const eV = JV.k[VV];
-       return eV ? (0, yV.K)(eV.name) : null
+     async function gH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         rH = arguments.length > 4 ? arguments[4] : void 0,
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       return await new Promise(((zH, CH) => {
+         qH(HH, BH, LH, (HH => {
+           "undefined" !== typeof HH ? zH(HH) : CH(new Error("Data is undefined"))
+         }), AH, tH, rH, SH, hH)
+       }))
```

#### 42. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L543-L556` → after: `L900-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L900-L911) · [Before (L543-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L543-L556)

```diff
-     let FV = null;
- 
-     function TV(VV) {
-       if (!FV) {
-         FV = new Map;
-         for (const VV of ["water", "cryo"])
-           for (let eV = 0; eV < 64; eV++)
-             for (const xV of [!1, !0]) FV.set((0, UV.n)(VV, eV, xV), {
-               Cr: VV,
-               mask: eV,
-               full: xV
-             })
-       }
-       return FV.get(VV)
+     async function NH(HH, BH, LH, AH) {
+       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         SH = arguments.length > 5 ? arguments[5] : void 0,
+         hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return await new Promise((tH => {
+         qH(HH, BH, {
+           width: LH,
+           height: AH
+         }, (() => {
+           tH()
+         }), rH, !0, SH, hH)
+       }))
```

#### 43. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L562-L572` → after: `L914-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L914-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L914-L1002) · [Before (L562-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L562-L572)

```diff
-     function AV(VV, eV, xV, YV, UV, yV) {
-       return EV.some(((pV, QV) => {
-         var nV, wV, ZV;
-         let [vV, rV, kV] = pV;
-         if (0 === (yV >> QV & 1)) return !1;
-         const bV = null !== (nV = null === (wV = JV.k[VV(eV + vV, xV + rV, YV + kV)]) || void 0 === wV ? void 0 : wV.name) && void 0 !== nV ? nV : "",
-           EV = TV(bV);
-         return EV ? EV.Cr === UV && EV.full : (null !== (ZV = function(VV) {
-           var eV;
-           return null !== (eV = PV.get(VV)) && void 0 !== eV ? eV : null
-         }(bV)) && void 0 !== ZV ? ZV : 0) > 0
+     function RH(HH, BH, SH, hH) {
+       let tH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         zH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+         CH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         EH = arguments.length > 7 ? arguments[7] : void 0,
+         YH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         MH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         xH = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
+         vH = arguments.length > 11 ? arguments[11] : void 0,
+         PH = arguments.length > 12 ? arguments[12] : void 0,
+         TH = arguments.length > 13 ? arguments[13] : void 0,
+         UH = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
+         VH = arguments.length > 15 ? arguments[15] : void 0;
+       const OH = BH.yN();
+       if (OH.frameGraph) return void nH(OH.frameGraph, BH, SH, tH, zH, CH, EH, vH, TH, !hH).then((HH => {
+         hH && hH(HH)
+ ... (73 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L575-L580` → after: `L1005-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1005-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L1005-L1059) · [Before (L575-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L575-L580)

```diff
-     class NV {
-       constructor() {
-         this.reshapeOffsets = EV
-       }
-       handles(VV) {
-         return null !== tV(VV)
+     async function nH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         hH = arguments.length > 6 ? arguments[6] : void 0,
+         tH = arguments.length > 7 ? arguments[7] : void 0,
+         zH = arguments.length > 8 ? arguments[8] : void 0,
+         CH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         EH = arguments.length > 10 ? arguments[10] : void 0;
+       const XH = HH.engine,
+         GH = HH.textureManager,
+         {
+           height: YH,
+           width: QH,
+           finalWidth: WH,
+           finalHeight: xH
+ ... (39 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L582-L584` → after: `L1061-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1061-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L1061-L1077) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L582-L584)

```diff
-       affects(VV) {
-         var eV, xV;
-         return kV.has(null !== (eV = null === (xV = JV.k[VV]) || void 0 === xV ? void 0 : xV.meta.rootName) && void 0 !== eV ? eV : "")
+       if (WH !== QH || xH !== YH) {
+         const BH = new kH("pass", HH);
+         BH.sourceTexture = mH, BH.targetTexture = HH.textureManager.createRenderTargetTexture("pass_output", {
+           size: {
+             width: WH,
+             height: xH
+           },
+           options: {
+             createMipMaps: !1,
+             types: [0],
+             formats: [5],
+             samples: 1,
+             labels: ["screenshot_final_texture"],
+             useSRGBBuffers: [!1]
+           },
+           sizeIsPercentage: !1
+ ... (1 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L586-L613` → after: `L1079-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1079-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L1079-L1108) · [Before (L586-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L586-L613)

```diff
-       placedBy(VV) {
-         var eV;
-         return (null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta.rootName) === UV.e ? UV.f : null
-       }
-       shape(VV, eV, xV, YV, pV, nV) {
-         var wV, ZV, vV;
-         const rV = null !== (wV = null === (ZV = JV.k[pV]) || void 0 === ZV ? void 0 : ZV.name) && void 0 !== wV ? wV : "",
-           kV = nV || rV !== UV.f ? null !== (vV = (0, yV.K)(rV)) && void 0 !== vV ? vV : "water" : function(VV, eV, xV, JV) {
-             return EV.some(((YV, UV) => {
-               let [pV, nV, wV] = YV;
-               const ZV = jV(VV(eV + pV, xV + nV, JV + wV), "cryo");
-               return null !== ZV && "port" !== ZV.kind && (0, yV.P)(QV, ZV, BV[UV])
-             })) ? "cryo" : "water"
-           }(VV, eV, xV, YV),
-           bV = function(VV, eV, xV, JV) {
-             let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
- ... (12 more removed lines; see GitHub link above)
+       const oH = cH.FindMainObjectRenderer(HH);
+       let IH = null;
+       oH && (IH = oH.camera, oH.camera = BH), XH.getCaps().parallelShaderCompile = void 0, await HH.buildAsync();
+       const fH = EH ?? (GH.hasHistoryTextures ? 32 : 1);
+       for (let uH = 0; uH < fH; ++uH) HH.execute();
+       HH.pausedExecution = !0, XH.getCaps().parallelShaderCompile = bH;
+       for (let uH = UH; uH < TH.length; ++uH) HH.tasks[uH].dispose();
+       HH.tasks.length = UH, oH && IH && (oH.camera = IH);
+       const lH = HH.textureManager.getTextureFromHandle(mH);
+       return lH.incrementReferences(), GH.resetBackBufferTextures(), await HH.buildAsync(), HH.pausedExecution = VH, new Promise((HH => {
+         XH._readTexturePixels(lH, WH, xH, -1, 0, null, !0, !1, 0, 0).then((async BH => {
+           lH.dispose(), PH(WH, xH, BH, CH ? void 0 : BH => HH(BH), AH, hH, !0, void 0, tH), CH && HH(null)
+         }))
+       }))
+     }
+ 
+ ... (14 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L616-L641` → after: `L1111-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1111-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L1111-L1119) · [Before (L616-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L616-L641)

```diff
-   },
-   39313: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => JV,
-       d: () => UV
-     });
-     const JV = ["Chest", "Loot Chest", "Moonstone Chest"],
-       YV = [{
-         name: "Workbench",
-         exactMatch: !0
-       }, {
-         name: "Furnace",
-         exactMatch: !0
-       }, {
-         name: "Artisan Bench",
-         exactMatch: !0
- ... (10 more removed lines; see GitHub link above)
+     const DH = {
+       CreateScreenshot: qH,
+       CreateScreenshotAsync: gH,
+       CreateScreenshotWithResizeAsync: NH,
+       CreateScreenshotUsingRenderTarget: RH,
+       CreateScreenshotUsingRenderTargetAsync: jH,
+       CreateScreenshotForFrameGraphAsync: nH
+     };
+     let wH = !1;
```

#### 48. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L643-L644` → after: `L1121-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/265.js#L1121-L1124) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/265.js#L643-L644)

```diff
-     function UV(VV) {
-       return YV.find((eV => eV.exactMatch ? VV === eV.name : VV.includes(eV.name)))
+     function ZH() {
+       if (wH) return;
+       wH = !0;
+       YH.i.CreateScreenshot = qH, YH.i.CreateScreenshotAsync = gH, YH.i.CreateScreenshotUsingRenderTarget = RH, YH.i.CreateScreenshotUsingRenderTargetAsync = jH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L12` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L4) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L4-L12)

```diff
-   40310: (VV, eV, xV) => {
-     function JV(VV) {
-       return !(!VV.lobbyLeaderboardInfo && !VV.lobbyManage)
-     }
-     xV.d(eV, {
-       c: () => JV
-     })
-   },
-   40217: (VV, eV, xV) => {
+   38610: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L16-L223` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L8) · [Before (L16-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L16-L223)

```diff
-     var JV = xV(32),
-       YV = xV(2080);
- 
-     function UV(VV) {
-       let {
-         taskId: eV,
-         progress: xV
-       } = VV;
-       const JV = YV.c.get("_tasks");
-       null !== JV && void 0 !== JV && JV[eV] && YV.c.apply({
-         _tasks: {
-           ...JV,
-           [eV]: {
-             ...JV[eV],
-             progress: xV
-           }
- ... (192 more removed lines; see GitHub link above)
+     var AH = LH(38619);
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L225-L1343` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L10-L13) · [Before (L225-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L225-L1343)

```diff
-       constructor(VV) {
-         this.iv = VV
-       }
-       register(VV) {
-         const eV = this.iv,
-           xV = (0, QV.b)();
-         VV.jF(nV.U, (VV => {
-           eV.cZ.aJV.add(VV), eV.cZ.hJV.delete(VV)
-         })), VV.jF(nV.bb, (VV => {
-           eV.cZ.hJV.add(VV), eV.cZ.aJV.delete(VV)
-         })), VV.jF(nV.$d, (VV => {
-           eV.cZ.hJV.delete(VV), eV.cZ.aJV.delete(VV)
-         })), VV.jF(nV.$, (VV => {
-           eV.cZ.oJV.add(VV), eV.cZ.lJV.delete(VV)
-         })), VV.jF(nV.ib, (VV => {
-           eV.cZ.lJV.add(VV), eV.cZ.oJV.delete(VV)
- ... (1103 more removed lines; see GitHub link above)
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1345-L1448` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L15-L17) · [Before (L1345-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1345-L1448)

```diff
-       async connectToServer(VV, eV, xV) {
-         jV.c.reset(), VV.YL = {
-           [VV.bD]: {}
-         }, VV.vxV = void 0, (0, KV.p)(), (0, QV.b)().removeAllEntityNames(), (0, QV.b)().setEntityName(VV.bD, this.userContext.getPlayerName()), (0, ie.q)({
-           lobbyName: this.lobbyName
-         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, ue.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
-         const yV = performance.now();
-         xV.aborted || (0, Ce.s)("wasm_core_ready", yV);
-         const pV = (0, fe.d)(this.userContext, (() => {
-           const {
-             roomName: JV,
-             joinOptions: YV
-           } = (0, tV.c)(this.userContext, this.gameNameWithVariation, this.lobbyName, eV, (VV => oe.b.isUsingCustomGameTexturePack(VV)));
-           return YV.joinAdHold = this.joinAdHold, YV.renderBackend = (0, se.c)(VV.gZ), (0, le.h)((() => this.colyClient.joinOrCreateUntil(xV, JV, YV)), xV)
-         }));
-         return BV.h.QZ("loadingScreenState", "loadingPage:joiningLobby"), await pV.then((eV => {
- ... (88 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1450-L1453` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L19-L21) · [Before (L1450-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1450-L1453)

```diff
-       setupServerListeners(VV, eV, xV) {
-         BV.h.QZ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Xe(this.gameNameWithVariation, eV.sJV, VV, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
-         const YV = eV.QZV();
-         this.incomingMsgInitialisor.setupOnMessageListeners(YV, xV), (0, JV.onConnectionToServerReady)(YV, eV), this.joinAdHold && be.b.markAdmissionAwaited(), YV.finishRegistration()
+       static GetFarPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1455-L1456` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L23-L25) · [Before (L1455-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1455-L1456)

```diff
-       dispose() {
-         this.connectionResume.dispose()
+       static GetLeftPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1458-L1470` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L27-L29) · [Before (L1458-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1458-L1470)

```diff
-       onResumeGaveUp(VV, eV) {
-         (0, ce.lb)(new Error("Reconnect failed"), {
-           ...(0, ge.l)(eV),
-           game: this.gameNameWithVariation
-         }), (0, We.reportClientError)("disconnect", "Reconnect failed", eV.reason), (0, QV.b)().client.leaveGameUnwanted({
-           reason: {
-             translationKey: "general:lostConnection"
-           },
-           canReconnect: !VV,
-           canPlayAgain: VV,
-           requiresRefresh: !1,
-           automaticallyReconnect: !1
-         }), (0, re.navigatePreserveSearch)("/")
+       static GetRightPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1472-L1473` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L31-L33) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1472-L1473)

```diff
-       sinceJoined() {
-         return null === this.joinedAt ? "" : (0, De.c)(performance.now() - this.joinedAt)
+       static GetTopPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1475-L1492` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L35-L37) · [Before (L1475-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1475-L1492)

```diff
-       onRoomLeft(VV, eV) {
-         var xV;
-         if (VV === UV.b.gameOrPluginKick.code) return;
-         if (console.log(`Left room with code ${VV}`), VV === UV.b.serverUpdating.code) return (0, We.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, QV.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
-         this.iv.hb(`Kicked from server with code ${VV}`, new Error);
-         const JV = Object.keys(UV.b).find((eV => UV.b[eV].code === VV));
-         (0, We.reportClientError)("disconnect", "Left room", null !== JV && void 0 !== JV ? JV : String(VV));
-         const YV = this.onConnectionToServerLost(VV, void 0, {
-           site: "leave",
-           closeReason: null !== eV && void 0 !== eV ? eV : "",
-           sinceJoined: this.sinceJoined()
-         });
-         (0, QV.b)().client.leaveGameUnwanted({
-           reason: `You have disconnected from the server.\n${YV.reason}`,
-           canReconnect: YV.canReconnect,
-           requiresRefresh: YV.requiresRefresh,
- ... (2 more removed lines; see GitHub link above)
+       static GetBottomPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1494-L1495` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L39-L40) · [Before (L1494-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1494-L1495)

```diff
-       getUpdateWaitingUrl() {
-         return (0, ae.F)(this.gameNameWithVariation, this.lobbyName)
+       static GetPlanesToRef(HH, BH) {
+         rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1497-L1543` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L42-L45) · [Before (L1497-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1497-L1543)

```diff
-       goToUpdateWaiting() {
-         (0, re.navigatePreserveSearch)(this.getUpdateWaitingUrl())
-       }
-       onConnectionToServerLost(VV, eV, xV) {
-         var JV;
-         let YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (null !== (JV = eV) && void 0 !== JV && JV.endsWith(UV.l) && (this.userContext.invalidateTrafficCode(), eV = eV.replace(UV.l, "")), VV === UV.b.outdatedVersion.code) return console.error("Outdated client with version ", yV.e, ", refreshing page"), (0, qV.reloadBloxd)() … [truncated]
-           reason: "Outdated client",
-           requiresRefresh: !0,
-           canReconnect: !1
-         };
-         if (VV === UV.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, qV.reloadBloxd)(), {
-           reason: "Failed to load recaptcha",
-           requiresRefresh: !0,
-           canReconnect: !1
-         };
- ... (31 more removed lines; see GitHub link above)
+       static IsPointInFrustum(HH, BH) {
+         for (let LH = 0; LH < 6; LH++)
+           if (BH[LH].dotCoordinate(HH) < 0) return !1;
+         return !0
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1547` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L49) · [Before (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1547)

```diff
-   40162: (VV, eV, xV) => {
+   38619: (HH, BH, LH) => {
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1549-L1857` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L51) · [Before (L1549-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1549-L1857)

```diff
-       c: () => Hx,
-       g: () => Ox
-     });
-     var JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV, HV, uV, sV, SV, IV, dV, OV, Ve, ee, xe, Je, Ye, Ue, ye, pe, Qe, ne, we, Ze, ve, re, ke, be, Ee, Be, je,  … [truncated]
-       Oe = xV(38332),
-       Vx = xV(40173),
-       ex = xV(40182),
-       xx = xV(9734),
-       Jx = xV(654),
-       Yx = xV(648),
-       Ux = xV(37977);
-     let yx = (JV = (0, xx.type)("number"), YV = (0, xx.type)("number"), UV = (0, xx.type)("number"), yV = (0, xx.type)("number"), pV = (0, xx.type)("number"), QV = (0, xx.type)("number"), nV = (0, xx.type)("string"), wV = class extends xx.Schema {
-         constructor() {
-           super(...arguments), (0, Vx.e)(this, "id", ZV, this), (0, Vx.e)(this, "amount", vV, this), (0, Vx.e)(this, "x", rV, this), (0, Vx.e)(this, "y", kV, this), (0, Vx.e)(this, "z", bV, this), (0, Vx.e)(this, "size", EV, this), (0, Vx.e)(this, "attributes", BV, this)
-         }
-       }, ZV = (0, ex.d)(wV.prototype, "id", [JV], {
- ... (293 more removed lines; see GitHub link above)
+       d: () => rH
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1859-L1925` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L53) · [Before (L1859-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1859-L1925)

```diff
- 
-     function Zx(VV) {
-       return Object.keys(xx.Metadata.getFields(VV))
-     }
-     const vx = Zx(wx);
-     for (const VJ of Jx.p)
-       if (!vx.includes(VJ)) throw new Error(`Mob Schema is missing a networked property: "${VJ}"`);
-     const rx = Zx((he = (0, xx.type)("string"), le = (0, xx.type)("float32"), Le = (0, xx.type)("float32"), fe = (0, xx.type)("float32"), me = (0, xx.type)("float32"), Ke = class extends Qx {
-       constructor() {
-         super(...arguments), (0, Vx.e)(this, "soundName", He, this), (0, Vx.e)(this, "volume", ue, this), (0, Vx.e)(this, "refDistance", se, this), (0, Vx.e)(this, "maxHearDist", Se, this), (0, Vx.e)(this, "rate", Ie, this)
-       }
-     }, He = (0, ex.d)(Ke.prototype, "soundName", [he], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
-       initializer: function() {
- ... (51 more removed lines; see GitHub link above)
+     var AH = LH(37963);
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1927-L2343` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L55-L56) · [Before (L1927-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L1927-L2343)

```diff
-       constructor(VV, eV) {
-         this.bloxd = VV, this.eId = eV, this.iv = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
-       }
-       initClient(VV) {
-         var eV, xV, JV;
-         this.colyseusEntity = VV, this.meshKind = VV.meshKind, this.meshOpts = VV.meshOpts, this.leaderboardTop = VV.leaderboardTop, this.iv.sF.add([VV.x, VV.y, VV.z], 1, 1, null, null, !1, !1, this.eId), this.iv.sF.WC(this.eId, "smoothToServerPos");
-         const YV = "Person" === this.meshKind;
-         this.iv.sF.WC(this.eId, "meshRotation", {
-           isServerControlled: !0,
-           ...YV ? {
-             defaultRotationsPerSecond: .5
-           } : {},
-           childrenNodeParams: YV ? [{
-             nodeName: "HeadMesh",
-             softTolerance: Ax.l,
-             hardTolerance: null
- ... (401 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2345-L2380` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L58-L59) · [Before (L2345-L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2345-L2380)

```diff
-       onEntityFieldChange(VV, eV, xV, JV) {
-         switch (xV) {
-           case "ridingVehicleEId": {
-             this.promoteIfQueued(JV);
-             const eV = this.iv.sF.HxV((0, ax.c)(VV));
-             eV && (eV.ridingVehicleEId = JV);
-             break
-           }
-           case "armour":
-             this.handleArmourChange(VV, JV);
-             break;
-           case "followingEId":
-             this.promoteIfQueued(JV), this.handleFollowingEIdChange(VV, eV, JV);
-             break;
-           case "xRotation":
-           case "yRotation":
- ... (20 more removed lines; see GitHub link above)
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2382-L2388` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L61-L62) · [Before (L2382-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2382-L2388)

```diff
-       handleArmourChange(VV, eV) {
-         var xV, JV;
-         const {
-           key: YV,
-           value: UV
-         } = eV;
-         (0, Fx.v)(VV, YV, null !== (xV = null === UV || void 0 === UV ? void 0 : UV.itemName) && void 0 !== xV ? xV : null, null !== (JV = null === UV || void 0 === UV ? void 0 : UV.enchantmentTier) && void 0 !== JV ? JV : null)
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2390-L2419` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L64-L65) · [Before (L2390-L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2390-L2419)

```diff
-       handleFollowingEIdChange(VV, eV, xV) {
-         const JV = (0, ax.c)(VV),
-           YV = JV === this.iv.bD;
-         if (this.iv.sF.gC(JV, this.iv.sF.names.HA), xV) this.iv.sF.gC(JV, "smoothToServerPos"), this.iv.sF.WC(JV, this.iv.sF.names.HA, {
-           zk: (0, ax.c)(xV),
-           offset: Array.from(eV.followingOffset),
-           GJV: eV.shouldMatchFollowingEntityRotation,
-           DJV: !0,
-           iJV: (VV, JV) => {
-             if (Mx().copy(VV, eV.followingOffset), eV.ridingVehicleEId === xV) {
-               const eV = (0, ax.c)(xV),
-                 YV = (0, hx.b)().getEntityHeading(eV, JV);
-               Mx().pk(VV, VV, Mx().ZERO, YV)
-             }
-           }
-         });
- ... (14 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Plane"
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2421-L2439` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L67-L69) · [Before (L2421-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2421-L2439)

```diff
-       handleScaleChange(VV, eV) {
-         const xV = (0, ax.c)(VV);
-         if (de.h.QZ(`entityScale|${xV}`, eV), xV === this.iv.bD) {
-           var JV;
-           (0, hx.b)().removeFromEyeHeightCache(xV);
-           const VV = this.iv.sF.XxV(this.iv.bD),
-             eV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.physicsState) && void 0 !== JV ? JV : {
-               type: ox.q.DEFAULT,
-               tier: null
-             };
-           return void(0, hx.b)().updatePositionAndPhysics(this.iv.bD, eV, !1)
-         }
-         const YV = (0, hx.b)().getLifeformType(xV);
-         if (null === YV) return;
-         const {
-           physicsBodyWidth: UV,
- ... (3 more removed lines; see GitHub link above)
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+         return HH = 397 * HH ^ this.d, HH
```
