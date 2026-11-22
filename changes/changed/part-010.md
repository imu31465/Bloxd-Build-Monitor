# Changed — Bundle Modifications Report (Part 010 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `10 / 47` (**288** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 7. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L86-L144` → after: `L360-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L360-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L360-L389) · [Before (L86-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L86-L144)

```diff
-         return 0 !== QQ && (FQ = 1 / QQ), this.normal.x *= FQ, this.normal.y *= FQ, this.normal.z *= FQ, this.d *= FQ, this
-       }
-       transform(QQ) {
-         const FQ = qQ._TmpMatrix;
-         QQ.invertToRef(FQ);
-         const wQ = FQ.m,
-           LQ = this.normal.x,
-           oQ = this.normal.y,
-           DQ = this.normal.z,
-           kQ = this.d,
-           vQ = LQ * wQ[0] + oQ * wQ[1] + DQ * wQ[2] + kQ * wQ[3],
-           mQ = LQ * wQ[4] + oQ * wQ[5] + DQ * wQ[6] + kQ * wQ[7],
-           uQ = LQ * wQ[8] + oQ * wQ[9] + DQ * wQ[10] + kQ * wQ[11],
-           HQ = LQ * wQ[12] + oQ * wQ[13] + DQ * wQ[14] + kQ * wQ[15];
-         return new qQ(vQ, mQ, uQ, HQ)
-       }
- ... (43 more removed lines; see GitHub link above)
+         for (let Sk = 0; Sk < wk; Sk++) {
+           const kk = Hk[Sk],
+             ek = kk._noaFaceGroups;
+           if (ek && (kk._noaFaceEpoch !== Kk || kk._noaFaceMaterial !== kk.material)) {
+             kk._noaFaceEpoch = Kk, kk._noaFaceMaterial = kk.material;
+             const ik = kk.TY,
+               Sk = ik && 1 === ik.length ? ik[0] : null;
+             let mk = -1;
+             if (bk && Sk && (0, Dk.s)(kk.material)) {
+               const ik = kk.position,
+                 Dk = rk.x - ik.x,
+                 Sk = rk.y - ik.y,
+                 bk = rk.z - ik.z,
+                 Pk = Dk - nk,
+                 Kk = Sk - nk,
+                 xk = bk - nk,
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L146` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L391) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L146)

```diff
-   38200: (QQ, FQ, wQ) => {
+   37135: (kk, ek, ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L148` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L393-L394) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L148)

```diff
-       b: () => oQ
+       c: () => Pk,
+       e: () => rk
```

#### 10. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L150-L162` → after: `L396-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L396-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L396-L420) · [Before (L150-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L150-L162)

```diff
-     var LQ = wQ(38203);
-     const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(FQ) : null;
-     class oQ {
-       static DeepCopy(QQ, FQ, wQ, oQ) {
-         let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kQ = function(QQ) {
-           const FQ = [];
-           do {
-             const wQ = Object.getOwnPropertyNames(QQ);
-             for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
-           } while (QQ = Object.getPrototypeOf(QQ));
+     const Dk = new WeakSet;
+     let fk = 0;
+     const Sk = new Set;
+ 
+     function bk(kk, ek) {
+       kk._data = ek
+     }
+ 
+     function rk(kk) {
+       var ek, ik;
+       (null !== (ek = null === (ik = kk.getBuffer()) || void 0 === ik ? void 0 : ik.vK) && void 0 !== ek ? ek : 0) > 0 && (Dk.add(kk), 0 === fk ? bk(kk, null) : Sk.add(kk))
+     }
+ 
+     function Pk(kk) {
+       fk++;
+       for (const ik of function(kk) {
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L164-L183` → after: `L422-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L422-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L422-L508) · [Before (L164-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L164-L183)

```diff
-         }(QQ);
-         for (const mQ of kQ) {
-           if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
-           if (mQ.endsWith("Observable")) continue;
-           if (wQ && -1 !== wQ.indexOf(mQ)) continue;
-           const kQ = QQ[mQ],
-             uQ = typeof kQ;
-           if ("function" !== uQ) try {
-             if ("object" === uQ)
-               if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
-               else if (kQ instanceof Array) {
-               if (FQ[mQ] = [], kQ.length > 0)
-                 if ("object" == typeof kQ[0])
-                   for (let QQ = 0; QQ < kQ.length; QQ++) {
-                     const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
-                   } else FQ[mQ] = kQ.slice(0)
- ... (4 more removed lines; see GitHub link above)
+         }(kk)) ik.getData() || mk(ik), Sk.add(ik);
+       let ek = !0;
+       return () => {
+         if (ek && (ek = !1, fk--, 0 === fk)) {
+           for (const kk of Sk) bk(kk, null);
+           Sk.clear()
+         }
+       }
+     }
+ 
+     function mk(kk) {
+       const ek = kk.getBuffer();
+       if (!ek || !(ek.vK > 0)) return;
+       const ik = kk._engine,
+         Dk = new Uint8Array(ek.vK);
+       ik.bindArrayBuffer(ek), ik._gl.getBufferSubData(ik._gl.ARRAY_BUFFER, 0, Dk), ik._resetVertexBufferBinding(), bk(kk, Dk)
+ ... (71 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L186-L269` → after: `L511-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L511-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/234.js#L511-L555) · [Before (L186-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/234.js#L186-L269)

```diff
-       }
-     }
-   },
-   37452: (QQ, FQ, wQ) => {
-     function LQ() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const FQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
-       }))
-     }
-     wQ.d(FQ, {
-       d: () => LQ
-     })
-   },
-   38203: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
- ... (68 more removed lines; see GitHub link above)
+         return kk
+       })(),
+       xk = [];
+ 
+     function nk(kk, ek) {
+       const ik = Dk.i[ek];
+       return kk[ik + 1] - kk[ik]
+     }
+ 
+     function Uk(kk, ek, ik) {
+       let fk = 0;
+       for (let bk = 0; bk < Dk.l; bk++) nk(kk, bk) > 0 && (fk |= 1 << bk);
+       if (0 === (ek &= fk)) return 0;
+       if (ek === fk) return ik[0] = 0, ik[1] = kk[Dk.f], 1;
+       let Sk = null,
+         rk = 1 / 0;
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 1. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235];
+ export const ids = [235, 236];
```

#### 2. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L4)

```diff
-   37359: (QQ, FQ, wQ) => {
+   39818: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L6-L7)

```diff
-       d: () => HQ,
-       h: () => DQ
+       b: () => Mk,
+       c: () => xk
```

#### 4. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L9-L3222` → after: `L9-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L9-L25) · [Before (L9-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L9-L3222)

```diff
-     var LQ = wQ(9222),
-       qQ = wQ(9195),
-       oQ = wQ(317);
-     const DQ = {
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
- ... (3198 more removed lines; see GitHub link above)
+     var Dk = ik(39566),
+       fk = ik(39570),
+       Sk = ik(36698),
+       bk = ik(36874),
+       rk = ik(39822),
+       Pk = ik(39787),
+       mk = ik(36734);
+     let Mk = (() => {
+         var kk;
+         let ek, ik, Pk = rk.d,
+           mk = [],
+           Mk = [],
+           Kk = [],
+           xk = [];
+         return kk = class extends Pk {
+           constructor(kk, ek, ik, fk) {
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3224-L3260` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L27-L28) · [Before (L3224-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3224-L3260)

```diff
-         }
-       }(),
-       ... function() {
-         const QQ = {
-             1: QQ => ({
-               x: 0,
-               z: QQ
-             }),
-             2: QQ => ({
-               x: QQ,
-               z: 0
-             }),
-             3: QQ => ({
-               x: 0,
-               z: -QQ
-             }),
- ... (21 more removed lines; see GitHub link above)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3262-L3291` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L30-L31) · [Before (L3262-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3262-L3291)

```diff
-         }
-         return FQ
-       }(),
-       ... function() {
-         const QQ = {};
-         for (let FQ = 1; FQ <= LQ.m; FQ++) {
-           const wQ = (0, LQ.Zb)(FQ),
-             qQ = LQ.p[FQ - 1],
-             oQ = [{
-               block: wQ,
-               x: 0,
-               y: 0,
-               z: 0
-             }];
-           for (const QQ of LQ.i)
-             for (let FQ = 1; FQ <= qQ; FQ++) {
- ... (14 more removed lines; see GitHub link above)
+           getClassName() {
+             return "HemisphericLight"
```

#### 7. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3293-L3406` → after: `L33-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L33-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L33-L92) · [Before (L3293-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3293-L3406)

```diff
-         }
-         return QQ
-       }(),
-       "Solar Panel": {
-         positions: [{
-           block: "Solar Panel",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Solar Panel SE",
-           x: 1,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Solar Panel NW",
- ... (98 more removed lines; see GitHub link above)
+           setDirectionToTarget(kk) {
+             return this.direction = Sk.o.Normalize(kk.subtract(Sk.o.Zero())), this.direction
+           }
+           getShadowGenerator() {
+             return null
+           }
+           transferToEffect(kk, ek) {
+             const ik = Sk.o.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", ik.x, ik.y, ik.z, 0, ek), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ek), this
+           }
+           transferToNodeMaterialEffect(kk, ek) {
+             const ik = Sk.o.Normalize(this.direction);
+             return kk.setFloat3(ek, ik.x, ik.y, ik.z), this
+           }
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = Sk.b.Identity()), this._worldMatrix
+ ... (44 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3408-L3566` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L94-L95) · [Before (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3408-L3566)

```diff
-     function kQ(QQ) {
-       return {
-         [`${QQ} Banner`]: {
-           positions: [{
-             block: `${QQ} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${QQ} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${QQ} Banner|meta|rot2|bot`]: {
- ... (143 more removed lines; see GitHub link above)
+     function xk() {
+       Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_3", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.HemisphericLight", Mk))
```

#### 9. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3568-L3663` → after: `L97-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L97-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L97-L107) · [Before (L3568-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3568-L3663)

```diff
- 
-     function vQ(QQ) {
-       const FQ = (0, oQ.Xb)(QQ);
-       return {
-         [FQ]: {
-           positions: [{
-             block: FQ,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${FQ} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
- ... (80 more removed lines; see GitHub link above)
+   },
+   37365: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => fk
+     });
+     var Dk = ik(37372);
+     class fk {
+       static GetPlanes(kk) {
+         const ek = [];
+         for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
+         return fk.GetPlanesToRef(kk, ek), ek
```

#### 10. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3665-L3742` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L109-L111) · [Before (L3665-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3665-L3742)

```diff
-     }
- 
-     function mQ(QQ) {
-       const FQ = `_${QQ} Back`,
-         wQ = `_${QQ} Dish`;
-       return {
-         [QQ]: {
-           positions: [{
-             block: QQ,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: FQ,
-             x: 0,
-             y: 0,
- ... (62 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
```

#### 11. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3744-L3766` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L113-L115) · [Before (L3744-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3744-L3766)

```diff
-     }
- 
-     function uQ(QQ) {
-       const FQ = `Small ${QQ} Pod`;
-       return {
-         [FQ]: {
-           positions: [{
-             block: FQ,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${QQ} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
- ... (7 more removed lines; see GitHub link above)
+       static GetFarPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
```

#### 12. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3768-L3789` → after: `L117-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L117-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L117-L131) · [Before (L3768-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3768-L3789)

```diff
-     }
-     for (const bQ in DQ) {
-       for (const QQ of DQ[bQ].positions)
-         if (QQ.id = qQ.h[QQ.block].id, bQ === QQ.block && (0 !== QQ.x || 0 !== QQ.y || 0 !== QQ.z)) throw new Error(`Multiblock "${bQ}" has main block "${QQ.block}" at non-origin position (${QQ.x}, ${QQ.y}, ${QQ.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       DQ[qQ.h[bQ].id] = DQ[bQ]
-     }
-     const HQ = {};
-     for (const bQ in DQ)
-       for (const {
-           block: QQ,
-           x: FQ,
-           y: wQ,
-           z: LQ
-         }
-         of DQ[bQ].positions) {
-         const oQ = {
- ... (6 more removed lines; see GitHub link above)
+       static GetLeftPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
+       }
+       static GetRightPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
+       }
+       static GetTopPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
+       }
+       static GetBottomPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
```

#### 13. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3792` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L143) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3792)

```diff
-   37768: (QQ, FQ, wQ) => {
+   37372: (kk, ek, ik) => {
```

#### 14. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3794-L3795` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L145) · [Before (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3794-L3795)

```diff
-       e: () => vQ,
-       h: () => kQ
+       c: () => fk
```

#### 15. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3797-L3810` → after: `L147-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L147-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L147-L224) · [Before (L3797-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3797-L3810)

```diff
-     var LQ = wQ(9195),
-       qQ = wQ(9258),
-       oQ = wQ(9264);
-     const DQ = qQ.s.map((QQ => {
-       let {
-         dx: FQ,
-         dz: wQ
-       } = QQ;
-       return [FQ, 0, wQ]
-     }));
- 
-     function kQ(QQ) {
-       const FQ = LQ.h[QQ];
-       return !!FQ && QQ !== LQ.c && !FQ.model && !FQ.wY && !1 !== FQ.solid && !FQ.yA
+     var Dk = ik(36698);
+     class fk {
+       constructor(kk, ek, ik, fk) {
+         this.normal = new Dk.o(kk, ek, ik), this.d = fk
+       }
+       Tik() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let kk = this.normal.getHashCode();
+ ... (62 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3813-L3835` → after: `L233-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L233-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L233-L243) · [Before (L3813-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3813-L3835)

```diff
-       constructor(QQ) {
-         this.model = QQ, this.reshapeOffsets = [...DQ, [0, -1, 0]]
-       }
-       handles(QQ) {
-         const FQ = LQ.h[QQ];
-         return (null === FQ || void 0 === FQ ? void 0 : FQ.model) === this.model && void 0 !== FQ.attachedTop
-       }
-       affects(QQ) {
-         return this.handles(QQ) || kQ(QQ) || (0, oQ.x)(LQ.h[QQ])
-       }
-       shape(QQ, FQ, wQ, DQ, vQ) {
-         let mQ = this.handles(QQ(FQ, wQ + 1, DQ)) ? qQ.k : 0;
-         return qQ.s.forEach(((vQ, uQ) => {
-           let {
-             dx: HQ,
-             dz: bQ
- ... (7 more removed lines; see GitHub link above)
+       constructor(kk, ek, ik, Dk) {
+         this.x = kk, this.y = ek, this.width = ik, this.height = Dk
+       }
+       toGlobal(kk, ek) {
+         return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
+       }
+       toGlobalToRef(kk, ek, ik) {
+         return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
+       }
+       clone() {
+         return new Dk(this.x, this.y, this.width, this.height)
```

#### 17. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3839-L3860` → after: `L247-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L247-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L247-L284) · [Before (L3839-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3839-L3860)

```diff
-   37548: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ) {
-       var wQ;
-       FQ || (FQ = {});
-       const LQ = null !== (wQ = FQ.customAttributes) && void 0 !== wQ ? wQ : {};
-       var qQ, oQ, DQ;
-       "Gun" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && (LQ.shotsLeft = null !== (qQ = null !== (oQ = LQ.shotsLeft) && void 0 !== oQ ? oQ : null === (DQ = LQ.gunStats) || void 0 === DQ ? void 0 : DQ.clipSize) && void 0 !== qQ ? qQ : QQ.clipSize);
-       if (LQ.enchantmentTier && (LQ.enchantmentTier = LQ.enchantmentTier.toString()), LQ.enchantments)
-         for (const HQ in LQ.enchantments) {
-           const QQ = LQ.enchantments[HQ];
-           if ("number" !== typeof QQ) {
-             const FQ = parseInt(QQ);
-             isNaN(FQ) || FQ < 0 ? LQ.enchantments[HQ] = void 0 : LQ.enchantments[HQ] = FQ > 1e9 ? 1e9 : FQ
-           }
-         }
-       if (LQ.enchantmentData)
- ... (6 more removed lines; see GitHub link above)
+   38265: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk
+     });
+     var Dk = ik(38272);
+     const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
+       ...kk
+     } : null : kk.clone(ek) : null;
+     class Sk {
+       static DeepCopy(kk, ek, ik, Sk) {
+         let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const rk = function(kk) {
+           const ek = [];
+           do {
+             const ik = Object.getOwnPropertyNames(kk);
+             for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
+ ... (22 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3868` → after: `L287-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L287-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L287-L295) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3868)

```diff
-       return FQ.customAttributes = LQ, FQ
+       }
+     }
+   },
+   37497: (kk, ek, ik) => {
+     function Dk() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
+         const ek = 16 * Math.random() | 0;
+         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
+       }))
```

#### 19. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3871` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L298) · [Before (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3871)

```diff
-       e: () => LQ
+       b: () => Dk
```

#### 20. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3874` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L301) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3874)

```diff
-   37761: (QQ, FQ, wQ) => {
+   38272: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3876-L3880` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L303) · [Before (L3876-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3876-L3880)

```diff
-       d: () => SQ,
-       f: () => eQ,
-       j: () => vQ,
-       m: () => HQ,
-       n: () => iQ
+       b: () => Dk
```

#### 22. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3882-L3889` → after: `L305-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L305-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L305-L356) · [Before (L3882-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3882-L3889)

```diff
-     var LQ = wQ(9195),
-       qQ = wQ(9238),
-       oQ = wQ(37768);
-     const DQ = (0, LQ.j)("Noticeboard"),
-       kQ = (0, LQ.j)("Standing Noticeboard|meta|rot4|lrud");
- 
-     function vQ(QQ) {
-       return DQ <= QQ && QQ <= kQ
+     class Dk {
+       static _CheckLimit(kk, ek) {
+         let ik = Dk._LogLimitOutputs[kk];
+         return ik ? ik.current++ : (ik = {
+           limit: ek,
+           current: 1
+         }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
+       }
+       static _GenerateLimitMessage(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ik = Dk._LogLimitOutputs[kk];
+         if (!ik || !Dk.MessageLimitReached) return;
+         const fk = this._Levels[ek];
+         ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
+       }
+       static _AddLogEntry(kk) {
+ ... (36 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3891-L3899` → after: `L358-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L358-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L358-L417) · [Before (L3891-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3891-L3899)

```diff
-     const mQ = new Uint8Array(kQ - DQ + 1);
-     for (let WQ = DQ; WQ <= kQ; WQ++) mQ[WQ - DQ] = (0, qQ.t)(LQ.h[WQ].meta.metaStr);
-     const uQ = 64,
-       HQ = uQ * uQ,
-       [bQ, YQ, xQ, AQ] = [0, 1, 2, 3];
- 
-     function tQ(QQ) {
-       var FQ, wQ;
-       return "string" === typeof(null === QQ || void 0 === QQ || null === (FQ = QQ.persisted) || void 0 === FQ || null === (wQ = FQ.shared) || void 0 === wQ ? void 0 : wQ.text)
+     Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels =  … [truncated]
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
+     }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
+   },
+   60658: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+ ... (44 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3901-L3903` → after: `L419-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L419-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L419-L449) · [Before (L3901-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3901-L3903)

```diff
- 
-     function eQ(QQ) {
-       return tQ(QQ) && "" !== QQ.persisted.shared.text.trim()
+     Mk.VertexUrl = "fxaa", Mk.FragmentUrl = "fxaa", Mk.Uniforms = ["texelSize"];
+     class Kk extends Sk.c {
+       getClassName() {
+         return "FxaaPostProcess"
+       }
+       constructor(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           fk = arguments.length > 3 ? arguments[3] : void 0,
+           Sk = arguments.length > 4 ? arguments[4] : void 0,
+           bk = arguments.length > 5 ? arguments[5] : void 0,
+           rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const Pk = {
+           uniforms: Mk.Uniforms,
+           size: "number" === typeof ek ? ek : void 0,
+           camera: ik,
+           samplingMode: fk || Dk.f.BILINEAR_SAMPLINGMODE,
+ ... (15 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3905-L3909` → after: `L451-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L451-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L451-L476) · [Before (L3905-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3905-L3909)

```diff
- 
-     function MQ(QQ, FQ) {
-       let [wQ, , LQ] = FQ;
-       const [oQ, , DQ] = qQ.z[QQ][YQ];
-       return wQ * oQ + LQ * DQ
+     var xk = ik(38272),
+       nk = ik(39662),
+       Uk = ik(41413),
+       Hk = ik(41397),
+       wk = ik(39458);
+     const lk = 0;
+     class pk {
+       constructor(kk, ek, ik) {
+         this.name = kk, this._parentTask = ek, this._context = ik, this.disabled = !1
+       }
+       setInitializeFunc(kk) {
+         this._initFunc = kk
+       }
+       setExecuteFunc(kk) {
+         this._executeFunc = kk
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3911-L3913` → after: `L478-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L478-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L478-L494) · [Before (L3911-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3911-L3913)

```diff
- 
-     function GQ(QQ, FQ, wQ) {
-       return wQ[1] - FQ[1] || MQ(QQ, FQ) - MQ(QQ, wQ)
+     class yk extends pk {
+       static IsObjectListPass(kk) {
+         return void 0 !== kk.setObjectList
+       }
+       get objectList() {
+         return this._objectList
+       }
+       setObjectList(kk) {
+         this._objectList = kk
+       }
+       constructor(kk, ek, ik, Dk) {
+         super(kk, ek, ik), this._engine = Dk
+       }
+       _isValid() {
+         const kk = super._isValid();
+         return kk || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+ ... (1 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3915-L3921` → after: `L496-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L496-L550) · [Before (L3915-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3915-L3921)

```diff
- 
-     function pQ(QQ, FQ, wQ, oQ, kQ) {
-       var vQ;
-       let uQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ(FQ[0], FQ[1], FQ[2]);
-       if (!(mQ[uQ - DQ] & 1 << wQ)) return null;
-       const [HQ, bQ, YQ] = qQ.z[kQ][wQ], xQ = [FQ[0] + HQ, FQ[1] + bQ, FQ[2] + YQ], AQ = QQ(xQ[0], xQ[1], xQ[2]), tQ = null === (vQ = LQ.h[AQ]) || void 0 === vQ ? void 0 : vQ.meta;
-       return (null === tQ || void 0 === tQ ? void 0 : tQ.rootId) === oQ && tQ.rot === kQ && mQ[AQ - DQ] & 1 << (1 ^ wQ) ? xQ : null
+     class Yk extends pk {
+       static IsRenderPass(kk) {
+         return void 0 !== kk.setRenderTarget
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
+       constructor(kk, ek, ik, Dk) {
+         super(kk, ek, ik), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Dk
+       }
+ ... (39 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3923-L3936` → after: `L552-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L552-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L552-L606) · [Before (L3923-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3923-L3936)

```diff
- 
-     function cQ(QQ, FQ, wQ, oQ) {
-       const DQ = QQ(FQ, wQ, oQ);
-       if (!vQ(DQ)) return null;
-       const {
-         rootId: kQ,
-         rot: mQ
-       } = LQ.h[DQ].meta, HQ = (FQ, wQ) => {
-         let LQ = FQ,
-           qQ = 1;
-         for (let oQ = pQ(QQ, LQ, wQ, kQ, mQ); oQ && qQ < uQ; oQ = pQ(QQ, LQ, wQ, kQ, mQ)) LQ = oQ, qQ++;
-         return {
-           end: LQ,
-           cells: qQ
+     var Lk = ik(36726);
+     class Ck {
+       get name() {
+         return this._name
+       }
+       set name(kk) {
+         this._name = kk
+       }
+       get disabled() {
+         return this._disabled
+       }
+       set disabled(kk) {
+         this._disabled = kk
+       }
+       get passes() {
+         return this._passes
+ ... (39 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3938-L3948` → after: `L608-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L608-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L608-L658) · [Before (L3938-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3938-L3948)

```diff
-       }, tQ = HQ(HQ([FQ, wQ, oQ], bQ).end, xQ).end, eQ = HQ(tQ, YQ).cells, [MQ, , GQ] = qQ.z[mQ][YQ];
-       let cQ = 1;
-       QQ: for (; cQ < uQ; cQ++)
-         for (let FQ = 0; FQ < eQ; FQ++)
-           if (!pQ(QQ, [tQ[0] + MQ * FQ, tQ[1] - cQ + 1, tQ[2] + GQ * FQ], AQ, kQ, mQ)) break QQ;
-       return {
-         anchor: tQ,
-         rootId: kQ,
-         rot: mQ,
-         width: eQ,
-         height: cQ
+         let Dk, fk = null,
+           Sk = [],
+           bk = null;
+         for (const rk of this._passesDisabled) {
+           const kk = rk._isValid();
+           if (kk) throw new Error(`Pass "${rk.name}" is not valid. ${kk}`);
+           if (Yk.IsRenderPass(rk)) {
+             const kk = Array.isArray(rk.renderTarget) ? rk.renderTarget : [rk.renderTarget];
+             fk = [];
+             for (const ek of kk) void 0 !== ek && fk.push(this._frameGraph.textureManager.getTextureFromHandle(ek));
+             Sk = kk, bk = void 0 !== rk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(rk.renderTargetDepth) : null
+           } else yk.IsObjectListPass(rk) && (Dk = rk.objectList)
+         }
+         if (this._passesDisabled.length > 0) {
+           if (!this._checkSameRenderTarget(ek, fk)) {
+             let kk = !0;
+ ... (35 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3951-L3966` → after: `L661-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L661-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L661-L707) · [Before (L3951-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3951-L3966)

```diff
- 
-     function CQ(QQ, FQ) {
-       for (const wQ of function(QQ) {
-           let {
-             anchor: FQ,
-             rot: wQ,
-             width: LQ,
-             height: oQ
-           } = QQ;
-           const [DQ, , kQ] = qQ.z[wQ][YQ], vQ = [];
-           for (let qQ = 0; qQ < oQ; qQ++)
-             for (let QQ = 0; QQ < LQ; QQ++) vQ.push([FQ[0] + DQ * QQ, FQ[1] - qQ, FQ[2] + kQ * QQ]);
-           return vQ
-         }(QQ))
-         if (tQ(FQ(wQ[0], wQ[1], wQ[2]))) return wQ;
-       return null
+     class Ak extends Ck {
+       get alphaMode() {
+         return this.postProcess.alphaMode
+       }
+       set alphaMode(kk) {
+         this.postProcess.alphaMode = kk
+       }
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
+       }
+       constructor(kk, ek, ik) {
+         super(kk, ek), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ik, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       }
+       isReady() {
+         return this.postProcess.isReady()
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3968-L3984` → after: `L709-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L709-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L709-L743) · [Before (L3968-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3968-L3984)

```diff
- 
-     function SQ(QQ, FQ, wQ, qQ, oQ) {
-       const DQ = QQ(wQ, qQ, oQ);
-       if (!vQ(DQ)) return null;
-       const {
-         rootId: kQ,
-         rot: mQ
-       } = LQ.h[DQ].meta, uQ = [
-         [wQ, qQ, oQ]
-       ], bQ = new Set([uQ[0].join()]);
-       let YQ = uQ[0],
-         xQ = null;
-       for (let LQ = 0; LQ < uQ.length; LQ++) {
-         const wQ = uQ[LQ];
-         if (GQ(mQ, wQ, YQ) < 0 && (YQ = wQ), tQ(FQ(wQ[0], wQ[1], wQ[2]))) {
-           const FQ = cQ(QQ, wQ[0], wQ[1], wQ[2]);
- ... (1 more removed lines; see GitHub link above)
+     class jk extends Ak {
+       constructor(kk, ek, ik) {
+         super(kk, ek, ik || new Mk(kk, ek.engine))
+       }
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ek = arguments.length > 1 ? arguments[1] : void 0,
+           ik = arguments.length > 2 ? arguments[2] : void 0;
+         const Dk = super.record(kk, ek, ik);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Dk
+       }
+     }
+     var sk = ik(41407);
+ ... (19 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3986-L3988` → after: `L745-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L745-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L745-L812) · [Before (L3986-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3986-L3988)

```diff
-         for (let FQ = 0; FQ < 4 && uQ.length < HQ; FQ++) {
-           const LQ = pQ(QQ, wQ, FQ, kQ, mQ);
-           LQ && !bQ.has(LQ.join()) && (bQ.add(LQ.join()), uQ.push(LQ))
+       }
+       setRenderCamera(kk) {
+         this._renderCamera = kk
+       }
+       _getSharedGizmoLight() {
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new qk.b("shared gizmo light", new mk.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Ik.e.Gray()), this._sharedGizmoLight
+       }
+       static get DefaultUtilityLayer() {
+         return null == zk._DefaultUtilityLayer ? zk._CreateDefaultUtilityLayerFromScene(Pk.e.LastCreatedScene) : zk._DefaultUtilityLayer
+       }
+       static _CreateDefaultUtilityLayerFromScene(kk) {
+         return zk._DefaultUtilityLayer = new zk(kk), zk._DefaultUtilityLayer.originalScene.ZF.addOnce((() => {
+           zk._DefaultUtilityLayer = null
+         })), zk._DefaultUtilityLayer
+       }
+       static get DefaultKeepDepthUtilityLayer() {
+ ... (52 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3991-L3995` → after: `L815-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L815-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L815-L819) · [Before (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3991-L3995)

```diff
-       return xQ ??= cQ(QQ, YQ[0], YQ[1], YQ[2]), {
-         cells: uQ,
-         topLeft: YQ,
-         rect: xQ,
-         textCell: CQ(xQ, FQ)
+       dispose() {
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.ZF.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       }
+       _updateCamera() {
+         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
```

#### 34. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L3999-L4011` → after: `L847-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L847-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L847-L862) · [Before (L3999-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L3999-L4011)

```diff
-     function iQ(QQ, FQ, wQ, DQ, kQ) {
-       if (null !== wQ && vQ(wQ)) {
-         const {
-           rootName: QQ,
-           rot: FQ
-         } = LQ.h[wQ].meta;
-         if (qQ.z[FQ].some((QQ => {
-             let [FQ, wQ, LQ] = QQ;
-             return FQ === DQ[0] && wQ === DQ[1] && LQ === DQ[2]
-           }))) return {
-           root: QQ,
-           rot: FQ
-         }
+     function Ek(kk, ek, ik, Dk) {
+       let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         bk = arguments.length > 6 ? arguments[6] : void 0,
+         rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: mk,
+         width: Mk
+       } = Bk(kk, ek, ik);
+       if (!mk || !Mk) return void xk.b.Error("Invalid 'size' parameter !");
+       const Kk = ek.XF();
+       let Uk = Kk.activeCamera !== ek;
+       if (Kk.frameGraph) {
+         const kk = Qk.FindMainObjectRenderer(Kk.frameGraph);
+         kk && (Uk = kk.camera !== ek)
```

#### 35. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4013-L4016` → after: `L864-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L864-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L864-L1077) · [Before (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L4013-L4016)

```diff
-       const [mQ, uQ] = qQ.o[kQ], HQ = QQ(FQ[0] - mQ, FQ[1], FQ[2] - uQ);
-       return {
-         root: (0, oQ.h)(HQ) ? qQ.E : qQ.A,
-         rot: kQ
+       Uk ? Wk(kk, ek, ik, (kk => {
+         if (Sk) {
+           const ek = new Blob([kk]);
+           nk.i.DownloadBlob(ek), Dk && Dk("")
+         } else Dk && Dk(kk)
+       }), fk, 1, kk.getCreationOptions().antialias, void 0, void 0, void 0, void 0, bk) : kk.onEndFrameObservable.addOnce((() => {
+         vk || (vk = document.createElement("canvas")), vk.width = Mk, vk.height = mk;
+         const ek = vk.getContext("2d"),
+           ik = kk.getRenderingCanvas();
+         if (!ek || !ik) return void xk.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
+         const Uk = ik.width,
+           Hk = ik.height,
+           wk = vk.width,
+           lk = vk.height,
+           pk = wk / Uk,
+           yk = lk / Hk,
+ ... (198 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4031-L4038` → after: `L1095-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L1095-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L1095-L1108) · [Before (L4031-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L4031-L4038)

```diff
-     function DQ(QQ) {
-       const FQ = QQ.indexOf("|");
-       return -1 === FQ ? {
-         item: QQ,
-         clientPredictedThrower: null
-       } : {
-         item: QQ.slice(0, FQ),
-         clientPredictedThrower: QQ.slice(FQ + 1)
+     function Bk(kk, ek, ik) {
+       let Dk = 0,
+         fk = 0,
+         Sk = 0,
+         bk = 0;
+       if ("object" === typeof ik) {
+         const rk = ik.precision ? Math.abs(ik.precision) : 1;
+         ik.width && ik.height ? (Dk = ik.height * rk, fk = ik.width * rk) : ik.width && !ik.height ? (fk = ik.width * rk, Dk = Math.round(fk / kk.getAspectRatio(ek))) : ik.height && !ik.width ? (Dk = ik.height * rk, fk = Math.round(Dk * kk.getAspectRatio(ek))) : (fk = Math.round( … [truncated]
+       } else isNaN(ik) || (Dk = ik, fk = ik, Sk = ik, bk = ik);
+       return fk && (fk = Math.floor(fk)), Dk && (Dk = Math.floor(Dk)), Sk && (Sk = Math.floor(Sk)), bk && (bk = Math.floor(bk)), {
+         height: 0 | Dk,
+         width: 0 | fk,
+         finalWidth: 0 | Sk,
+         finalHeight: 0 | bk
```

#### 37. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4041` → after: `L1111-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L1111-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/235.js#L1111-L1126) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/235.js#L4041)

```diff
-     const kQ = [...qQ, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+     const ck = {
+       CreateScreenshot: Ek,
+       CreateScreenshotAsync: hk,
+       CreateScreenshotWithResizeAsync: ak,
+       CreateScreenshotUsingRenderTarget: Wk,
+       CreateScreenshotUsingRenderTargetAsync: tk,
+       CreateScreenshotForFrameGraphAsync: Xk
+     };
+     let Tk = !1;
+ 
+     function Zk() {
+       if (Tk) return;
+       Tk = !0;
+       nk.i.CreateScreenshot = Ek, nk.i.CreateScreenshotAsync = hk, nk.i.CreateScreenshotUsingRenderTarget = Wk, nk.i.CreateScreenshotUsingRenderTargetAsync = tk
+     }
+     Zk()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L4-L19` → after: `L4-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L4-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/236.js#L4-L177) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/236.js#L4-L19)

```diff
-   37593: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => mQ,
-       f: () => LQ,
-       i: () => kQ,
-       m: () => qQ,
-       p: () => DQ,
-       t: () => oQ
-     });
-     const LQ = 1.001,
-       qQ = .501,
-       oQ = .025,
-       DQ = .75,
-       kQ = .08,
-       vQ = 4;
- 
+   37365: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => fk
+     });
+     var Dk = ik(37372);
+     class fk {
+       static GetPlanes(kk) {
+         const ek = [];
+         for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
+         return fk.GetPlanesToRef(kk, ek), ek
+       }
+       static GetNearPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
+       }
+       static GetFarPlaneToRef(kk, ek) {
+ ... (158 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L21-L30` → after: `L179-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L179-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/236.js#L179-L241) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/236.js#L21-L30)

```diff
-       const QQ = qQ,
-         FQ = oQ,
-         wQ = QQ - FQ / 2,
-         LQ = (2 * QQ - 2 * FQ) / (2 * vQ - 1),
-         DQ = [];
-       for (const qQ of [-wQ, wQ])
-         for (const oQ of [-wQ, wQ])
-           for (let wQ = 0; wQ < vQ; wQ++) {
-             const kQ = -QQ + FQ + LQ * (2 * wQ + .5);
-             DQ.push([LQ, FQ, FQ, kQ, qQ, oQ]), DQ.push([FQ, LQ, FQ, qQ, kQ, oQ]), DQ.push([FQ, FQ, LQ, qQ, oQ, kQ])
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
+         const ek = 16 * Math.random() | 0;
+         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
+       }))
+     }
+     ik.d(ek, {
+       b: () => Dk
+     })
+   },
+   38272: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Dk
+     });
+     class Dk {
+       static _CheckLimit(kk, ek) {
+         let ik = Dk._LogLimitOutputs[kk];
+ ... (47 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L32-L646` → after: `L243-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L243-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/236.js#L243-L257) · [Before (L32-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/236.js#L32-L646)

```diff
-       for (const qQ of [-wQ, wQ])
-         for (const QQ of [-wQ, wQ])
-           for (const LQ of [-wQ, wQ]) DQ.push([FQ, FQ, FQ, qQ, QQ, LQ]);
-       return DQ
-     }
-   },
-   37955: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       B: () => CQ,
-       E: () => iQ,
-       G: () => cQ,
-       K: () => pQ,
-       M: () => bQ,
-       O: () => AQ,
-       S: () => eQ,
-       U: () => qQ,
- ... (599 more removed lines; see GitHub link above)
+       }
+     }
+     Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels =  … [truncated]
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
+     }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [237];
+ export const ids = [236, 237];
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4-L16539` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L4-L20) · [Before (L4-L16539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L4-L16539)

```diff
-   38032: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(38039);
-     const qQ = [0, 0, 0];
-     class oQ {
-       constructor(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
-         this.pool = QQ, this.origin = FQ, this.count = 0, this.free = []
-       }
-       take() {
-         var QQ;
-         const FQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.count++;
-         return FQ >= this.pool.MH && this.pool.grow(Math.max(2 * this.pool.MH, FQ + 1)), this.hide(FQ), FQ
-       }
- ... (16520 more removed lines; see GitHub link above)
+   60665: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       RegisterShaderMaterial: () => Dk.b,
+       ShaderMaterial: () => Dk.o,
+       ShaderMaterialCreateFromSnippetAsync: () => Dk.d,
+       ShaderMaterialParse: () => Dk.l,
+       ShaderMaterialParseFromFileAsync: () => Dk.h,
+       ShaderMaterialParseFromSnippetAsync: () => Dk.j
+     });
+     var Dk = ik(40049);
+     (0, Dk.b)()
+   },
+   37365: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => fk
+     });
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16541-L16567` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L22) · [Before (L16541-L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16541-L16567)

```diff
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne;
-         this.style = QQ, this.particles = null, this.points = new Float32Array(800), this.budget = Ue, this.lastMs = 0
-       }
-       static blade() {
-         return new ze(Te)
-       }
-       mp(QQ, FQ) {
-         const wQ = Math.min(FQ.arcStruck, FQ.arcPoints.length);
-         this.draw(QQ, [FQ.arcFrom, ...FQ.arcPoints], FQ.arcPoints.slice(0, wQ))
-       }
-       onBlade(QQ, FQ) {
-         const [wQ, LQ, qQ] = FQ.bladeCentre, [oQ, DQ] = FQ.bladeFacing, kQ = wQ - 1.5 * oQ, vQ = qQ - 1.5 * DQ, mQ = Math.atan2(DQ, oQ), uQ = [];
-         for (let HQ = 0; HQ <= 8; HQ++) {
-           const QQ = mQ - Ke / 2 + Ke * HQ / 8;
-           uQ.push([kQ + 2.5 * Math.cos(QQ), LQ, vQ + 2.5 * Math.sin(QQ)])
- ... (11 more removed lines; see GitHub link above)
+       static GetPlanes(kk) {
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16569-L16709` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L24-L25) · [Before (L16569-L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16569-L16709)

```diff
-         let oQ = 0,
-           DQ = FQ[0];
-         for (const eQ of FQ.slice(1)) {
-           const QQ = Math.min(48, Math.round(Math.hypot(eQ[0] - DQ[0], eQ[1] - DQ[1], eQ[2] - DQ[2]) * this.style.perBlock));
-           qQ.push([DQ, eQ, QQ]), oQ += QQ, DQ = eQ
-         }
-         const kQ = wQ.length;
-         oQ += 10 * kQ;
-         const vQ = oQ > this.budget ? this.budget / oQ : 1;
-         if (0 === oQ || vQ * oQ < 1) return;
-         const mQ = FQ[0],
-           [uQ, HQ, bQ] = mQ,
-           YQ = this.points;
-         let xQ = 0;
-         const AQ = (QQ, FQ, wQ, LQ) => {
-           const qQ = 4 * xQ;
- ... (125 more removed lines; see GitHub link above)
+         for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
+         return fk.GetPlanesToRef(kk, ek), ek
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16711-L16713` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L27-L29) · [Before (L16711-L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16711-L16713)

```diff
-       dispose() {
-         for (const QQ of this.flames.values()) QQ.particles.dispose();
-         this.flames.clear(), this.lit.clear()
+       static GetNearPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16715-L16724` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L31-L33) · [Before (L16715-L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16715-L16724)

```diff
-       selfThrusting(QQ, FQ) {
-         var wQ;
-         const LQ = QQ.getLocalPlayerMovement();
-         return !!LQ && (null !== (qQ = {
-           option: null !== (wQ = QQ.getClientOption(FQ, "jumpHoldThrust")) && void 0 !== wQ ? wQ : null,
-           jumping: LQ.jumpHeld,
-           onGround: LQ.onGround,
-           alive: QQ.isAlive(FQ)
-         }).option && qQ.option.maxUpSpeed >= 0 && qQ.jumping && !qQ.onGround && qQ.alive);
-         var qQ
+       static GetFarPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16726-L16738` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L35-L37) · [Before (L16726-L16738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16726-L16738)

```diff
-       draw(QQ, FQ, wQ) {
-         var LQ, qQ;
-         const oQ = this.pos;
-         if (!QQ.readDrawnPosition(wQ, oQ)) return;
-         const DQ = QQ.readDrawnPosition(FQ, this.camera) ? this.camera : oQ;
-         if (!((oQ[0] - DQ[0]) ** 2 + (oQ[1] - DQ[1]) ** 2 + (oQ[2] - DQ[2]) ** 2 < 1600) || !QQ.particlesEnabled()) {
-           const QQ = this.flames.get(wQ);
-           return void(QQ && this.setEmitting(QQ, !1))
-         }
-         const kQ = null !== (LQ = this.flames.get(wQ)) && void 0 !== LQ ? LQ : this.create(QQ, wQ, oQ),
-           vQ = null !== (qQ = QQ.getDrawnHeading(wQ)) && void 0 !== qQ ? qQ : 0,
-           mQ = this.at;
-         mQ[0] = oQ[0] - .35 * Math.sin(vQ), mQ[1] = oQ[1] + 1.05, mQ[2] = oQ[2] - .35 * Math.cos(vQ), kQ.particles.moveTo(mQ), this.setEmitting(kQ, !0)
+       static GetLeftPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16740-L16741` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L39-L41) · [Before (L16740-L16741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16740-L16741)

```diff
-       setEmitting(QQ, FQ) {
-         QQ.emitting !== FQ && (QQ.emitting = FQ, FQ || (QQ.offAt = performance.now()), QQ.particles.setEmitRate(FQ ? 60 : 0))
+       static GetRightPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16743-L16752` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L43-L45) · [Before (L16743-L16752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16743-L16752)

```diff
-       create(QQ, FQ, wQ) {
-         const LQ = {
-           particles: QQ.createParticles(he, {
-             pos: wQ,
-             half: Ve
-           }),
-           emitting: !1,
-           offAt: performance.now()
-         };
-         return this.flames.set(FQ, LQ), LQ
+       static GetTopPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16754-L16777` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L47-L49) · [Before (L16754-L16777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16754-L16777)

```diff
-     }
- 
-     function Ee(QQ) {
-       return "Reactor Frame" === qL("reactor", QQ)
-     }
- 
-     function ne(QQ) {
-       return aw("reactor", QQ) && !Ee(QQ) && (QQ.startsWith("Reactor Glass") || QQ.startsWith("Reactor Port"))
-     }
-     const ge = "baf2Goal";
-     class Pe {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Tq.l.subscribe("setDirectionArrow", (QQ => {
-           let {
-             id: FQ,
-             position: wQ
- ... (8 more removed lines; see GitHub link above)
+       static GetBottomPlaneToRef(kk, ek) {
+         const ik = kk.m;
+         ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16779-L16780` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L51-L52) · [Before (L16779-L16780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16779-L16780)

```diff
-       dispose() {
-         for (const QQ of this.subs) Tq.l.unsubscribe(QQ)
+       static GetPlanesToRef(kk, ek) {
+         fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16782-L16804` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L54-L57) · [Before (L16782-L16804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16782-L16804)

```diff
-       sideOf(QQ, FQ, wQ, LQ) {
-         const qQ = this.goal;
-         if (!qQ) return 0;
-         wQ - this.checkedAt > 1e3 && (this.checkedAt = wQ, this.open = function(QQ, FQ) {
-           const [wQ, LQ, qQ] = QQ.map(Math.floor);
-           if (!ne(FQ(wQ, LQ, qQ))) return null;
-           for (const [oQ, DQ] of [
-               [1, 0],
-               [0, 1]
-             ]) {
-             const QQ = FQ(wQ + oQ, LQ, qQ + DQ),
-               kQ = FQ(wQ - oQ, LQ, qQ - DQ);
-             if (Ee(kQ) && ne(QQ)) return [oQ, 0, DQ];
-             if (Ee(QQ) && ne(kQ)) return [0 - oQ, 0, 0 - DQ]
-           }
-           return null
- ... (7 more removed lines; see GitHub link above)
+       static IsPointInFrustum(kk, ek) {
+         for (let ik = 0; ik < 6; ik++)
+           if (ek[ik].dotCoordinate(kk) < 0) return !1;
+         return !0
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16808-L16932` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L67-L68) · [Before (L16808-L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16808-L16932)

```diff
-       constructor() {
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
-           this.boxStale = !0
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.aG = () => {
-           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
-         }, this.sizes = new ResizeObserver((QQ => {
-           for (const FQ of QQ) FQ.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(FQ.target, FQ.borderBoxSize[0].inlineSize / 2)
-         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
-           this.queued = !1, this.kx || this.clear()
-         }, window.addEventListener("resize", this.aG)
-       }
-       onAfterRender(QQ, FQ) {
-         var wQ;
-         this.api = QQ, this.project = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.projectWorldPosToScreenPos) && void 0 !== wQ ? wQ : null, this.queued || this.kx || (this.queued = !0, queueMicrotask(this.run))
-       }
-       dispose() {
- ... (109 more removed lines; see GitHub link above)
+       constructor(kk, ek, ik, fk) {
+         this.normal = new Dk.o(kk, ek, ik), this.d = fk
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16934-L16941` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L70-L71) · [Before (L16934-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16934-L16941)

```diff
-       shiftOnScreen(QQ) {
-         var FQ;
-         const wQ = this.anchorOf(QQ);
-         if (!wQ) return 0;
-         const {
-           halfWidth: LQ
-         } = this.extentOf(QQ), qQ = wQ.x + (null !== (FQ = this.labelOffsets.get(QQ)) && void 0 !== FQ ? FQ : 0), oQ = qQ + LQ - (this.innerWidth - 6);
-         return oQ > 0 ? -oQ : Math.max(0, 6 - (qQ - LQ))
+       Tik() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16943-L16953` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L73-L74) · [Before (L16943-L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16943-L16953)

```diff
-       runLabelAside(QQ, FQ) {
-         var wQ;
-         let LQ = null;
-         for (let DQ = 0; DQ < QQ.children.length; DQ++) QQ.children[DQ].classList.contains("DirectionArrowLabel") && (LQ = QQ.children[DQ]);
-         if (!LQ) return 0;
-         const qQ = QQ.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(QQ) : null,
-           oQ = (qQ && this.api ? this.side.sideOf(this.api, {
-             x: qQ.x / this.innerWidth * 100,
-             y: qQ.y / this.innerHeight * 100
-           }, FQ, this.project) : 0) * this.halfWidthOf(LQ);
-         return oQ !== (null !== (wQ = this.sideLabels.get(LQ)) && void 0 !== wQ ? wQ : 0) && (LQ.style.transform = 0 === oQ ? "" : `translateX(-50%) translateX(${oQ}px)`, 0 === oQ ? this.sideLabels.delete(LQ) : this.sideLabels.set(LQ, oQ)), oQ
+       clone() {
+         return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16955-L16999` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L76-L77) · [Before (L16955-L16999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L16955-L16999)

```diff
-       extentOf(QQ) {
-         let FQ = this.em,
-           wQ = !1;
-         for (let LQ = 0; LQ < QQ.children.length; LQ++) {
-           const qQ = QQ.children[LQ],
-             oQ = qQ.classList.contains("DirectionArrowLabel");
-           wQ ||= oQ, (oQ || qQ.classList.contains("DirectionArrowDistance")) && (FQ = Math.max(FQ, this.halfWidthOf(qQ)))
-         }
-         return {
-           halfWidth: FQ,
-           labelled: wQ
-         }
-       }
-       halfWidthOf(QQ) {
-         let FQ = this.halfWidths.get(QQ);
-         return void 0 === FQ && (FQ = QQ.offsetWidth / 2, this.halfWidths.set(QQ, FQ), this.sizes.observe(QQ), this.labels.add(QQ)), FQ
- ... (29 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Plane"
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17001-L17003` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L79-L81) · [Before (L17001-L17003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17001-L17003)

```diff
-       open(QQ, FQ, wQ) {
-         const LQ = Be(FQ, QQ);
-         null !== LQ && this.Vb(QQ, LQ, wQ)
+       getHashCode() {
+         let kk = this.normal.getHashCode();
+         return kk = 397 * kk ^ this.d, kk
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17005-L17027` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L83-L84) · [Before (L17005-L17027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17005-L17027)

```diff
-       follow(QQ, FQ) {
-         if (kQ())
-           for (const [wQ, {
-               item: LQ,
-               had: qQ
-             }] of this.picks) {
-             const oQ = Be(QQ, wQ);
-             oQ !== LQ && (null !== oQ && FQ(LQ) > qQ ? this.Vb(wQ, oQ, FQ) : this.picks.delete(wQ))
-           } else this.picks.clear()
-       }
-       clear() {
-         this.picks.clear()
-       }
-       Vb(QQ, FQ, wQ) {
-         this.picks.set(QQ, {
-           item: FQ,
- ... (7 more removed lines; see GitHub link above)
+       normalize() {
+         const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17029-L17162` → after: `L86-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L86-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L86-L153) · [Before (L17029-L17162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17029-L17162)

```diff
-         for (const LQ of QQ.getInventoryItems())(null === LQ || void 0 === LQ ? void 0 : LQ.name) === FQ && (wQ += null === LQ.amount ? 1 : Math.max(LQ.amount, 0));
-         return wQ
-       }
-     }
- 
-     function FM(QQ, FQ, wQ, LQ) {
-       QQ.getClientOption(FQ, "canCraft") && "inventory" !== pq.c.get("openInGameMenuName") && (de.open(wQ, LQ.get(), QM(QQ)), Tq.l.GA("toggleMenu", `inventory|${wQ}`))
-     }
-     let wM = null,
-       LM = !1;
- 
-     function qM(QQ) {
-       const FQ = So();
-       QQ === wM && FQ === LM || (wM = QQ, LM = FQ, (0, Kq.u)(function(QQ, FQ) {
-         const wQ = new Map;
-         for (let LQ = QQ + 1; LQ <= qQ.length; LQ++) {
- ... (118 more removed lines; see GitHub link above)
+         return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
+       }
+       transform(kk) {
+         const ek = fk._TmpMatrix;
+         kk.invertToRef(ek);
+         const ik = ek.m,
+           Dk = this.normal.x,
+           Sk = this.normal.y,
+           bk = this.normal.z,
+           rk = this.d,
+           Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
+           mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
+           Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
+           Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
+         return new fk(Pk, mk, Mk, Kk)
+       }
+ ... (52 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17164-L17269` → after: `L155-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L155-L162) · [Before (L17164-L17269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17164-L17269)

```diff
-       constructor(QQ) {
-         this.show = QQ, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
-       }
-       onMining(QQ, FQ, wQ) {
-         var LQ;
-         if (!FQ) return this.started = null, void this.gatedThisHold.clear();
-         if (!QQ) return void(this.started = null);
-         const qQ = `${QQ.x},${QQ.y},${QQ.z},${QQ.ym}`;
-         if (qQ === this.started) return;
-         this.started = qQ;
-         const oQ = jL(QQ.y) ? oe(QQ.block, QQ.ym, QQ.level) : null;
-         if (null === oQ || this.gatedThisHold.has(qQ)) return;
-         this.gatedThisHold.add(qQ);
-         const DQ = QQ.block.split("|")[0];
-         wQ - (null !== (LQ = this.hintedAt.get(DQ)) && void 0 !== LQ ? LQ : -1 / 0) < 5e3 || (this.hintedAt.set(DQ, wQ), this.show({
-           baf2ToastText: De(oQ, QQ.block),
- ... (90 more removed lines; see GitHub link above)
+       static DeepCopy(kk, ek, ik, Sk) {
+         let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const rk = function(kk) {
+           const ek = [];
+           do {
+             const ik = Object.getOwnPropertyNames(kk);
+             for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
+           } while (kk = Object.getPrototypeOf(kk));
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17271-L17487` → after: `L164-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L164-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L164-L181) · [Before (L17271-L17487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17271-L17487)

```diff
-         }(tQ, QQ)), wA(eQ)),
-         aQ = new bA(NQ, wA(eQ)),
-         XQ = new mA,
-         fQ = (QQ, FQ) => {
-           let [wQ, LQ, qQ] = QQ;
-           XQ.answered(FQ) || cQ.show({
-             baf2ToastText: [(0, TQ.ge)({
-               translationKey: "buildAFactory2Game:rxSizeNotTaken",
-               params: {
-                 w: wQ,
-                 h: LQ,
-                 d: qQ
-               }
-             }, TQ.K.whiteUiText)],
-             baf2ToastMs: 4e3,
-             baf2ToastStyle: "baf2ToastWarn"
- ... (201 more removed lines; see GitHub link above)
+         }(kk);
+         for (const mk of rk) {
+           if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
+           if (mk.endsWith("Observable")) continue;
+           if (ik && -1 !== ik.indexOf(mk)) continue;
+           const rk = kk[mk],
+             Mk = typeof rk;
+           if ("function" !== Mk) try {
+             if ("object" === Mk)
+               if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
+               else if (rk instanceof Array) {
+               if (ek[mk] = [], rk.length > 0)
+                 if ("object" == typeof rk[0])
+                   for (let kk = 0; kk < rk.length; kk++) {
+                     const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
+                   } else ek[mk] = rk.slice(0)
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17489` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L183) · [Before (L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17489)

```diff
-             console.error("Error drawing BAF2 jet flames", mQ)
+             Dk.b.Warn(Pk.message)
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17738-L17739` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L186) · [Before (L17738-L17739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17738-L17739)

```diff
-       };
-       return SF
+       }
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17742-L17775` → after: `L189-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L189-L194) · [Before (L17742-L17775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17742-L17775)

```diff
-   38044: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ, wQ) {
-       const LQ = new Set,
-         qQ = new ResizeObserver(wQ),
-         oQ = () => {
-           const FQ = new Set(document.querySelectorAll(QQ));
-           let oQ = !1;
-           for (const QQ of LQ) FQ.has(QQ) || (qQ.unobserve(QQ), LQ.delete(QQ), oQ = !0);
-           for (const QQ of FQ) LQ.has(QQ) || (qQ.observe(QQ), DQ.observe(QQ, {
-             attributes: !0,
-             attributeFilter: ["class", "style"]
-           }), LQ.add(QQ));
-           oQ && wQ()
-         },
-         DQ = new MutationObserver((FQ => {
-           FQ.some((QQ => "attributes" === QQ.type)) && wQ(), FQ.some((FQ => function(QQ, FQ, wQ) {
- ... (18 more removed lines; see GitHub link above)
+   37497: (kk, ek, ik) => {
+     function Dk() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
+         const ek = 16 * Math.random() | 0;
+         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
+       }))
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17778` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L197) · [Before (L17778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17778)

```diff
-       e: () => LQ
+       b: () => Dk
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17781` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L200) · [Before (L17781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17781)

```diff
-   38026: (QQ, FQ, wQ) => {
+   38272: (kk, ek, ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17783-L17784` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L202) · [Before (L17783-L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17783-L17784)

```diff
-       e: () => DQ,
-       g: () => oQ
+       b: () => Dk
```

#### 28. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L17786-L17804` → after: `L204-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L204-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/237.js#L204-L255) · [Before (L17786-L17804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/237.js#L17786-L17804)

```diff
-     const LQ = new WeakMap;
- 
-     function qQ(QQ) {
-       let FQ = LQ.get(QQ);
-       return FQ || (FQ = {
-         hidden: QQ.hidden,
-         x: NaN,
-         y: NaN
-       }, LQ.set(QQ, FQ)), FQ
-     }
- 
-     function oQ(QQ, FQ) {
-       const wQ = qQ(QQ);
-       wQ.hidden !== FQ && (wQ.hidden = FQ, QQ.hidden = FQ)
-     }
- 
- ... (3 more removed lines; see GitHub link above)
+     class Dk {
+       static _CheckLimit(kk, ek) {
+         let ik = Dk._LogLimitOutputs[kk];
+         return ik ? ik.current++ : (ik = {
+           limit: ek,
+           current: 1
+         }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
+       }
+       static _GenerateLimitMessage(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ik = Dk._LogLimitOutputs[kk];
+         if (!ik || !Dk.MessageLimitReached) return;
+         const fk = this._Levels[ek];
+         ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
+       }
+       static _AddLogEntry(kk) {
+ ... (36 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L4)

```diff
-   40502: (QQ, FQ, wQ) => {
+   37402: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L6-L8)

```diff
-       b: () => DQ,
-       f: () => uQ,
-       j: () => mQ
+       e: () => Kk,
+       h: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L10-L110` → after: `L9-L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L9-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L9-L3223) · [Before (L10-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L10-L110)

```diff
-     var LQ, qQ = wQ(36729),
-       oQ = wQ(36696);
-     ! function(QQ) {
-       QQ[QQ.CW = 0] = "CW", QQ[QQ.CCW = 1] = "CCW"
-     }(LQ || (LQ = {}));
-     class DQ {
-       static Interpolate(QQ, FQ, wQ, LQ, qQ) {
-         if (0 === QQ) return 0;
-         const oQ = 1 - 3 * LQ + 3 * FQ,
-           DQ = 3 * LQ - 6 * FQ,
-           kQ = 3 * FQ;
-         let vQ = QQ;
-         for (let mQ = 0; mQ < 5; mQ++) {
-           const FQ = vQ * vQ;
-           vQ -= (oQ * (FQ * vQ) + DQ * FQ + kQ * vQ - QQ) * (1 / (3 * oQ * FQ + 2 * DQ * vQ + kQ)), vQ = Math.min(1, Math.max(0, vQ))
-         }
- ... (85 more removed lines; see GitHub link above)
+     var Dk = ik(9044),
+       fk = ik(9020),
+       Sk = ik(314);
+     const bk = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+ ... (3199 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L112-L123` → after: `L3225-L3261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3225-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3225-L3261) · [Before (L112-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L112-L123)

```diff
-         return this
-       }
-       addBezierCurveTo(QQ, FQ, wQ, LQ, qQ, oQ) {
-         let DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
-         if (this.closed) return this;
-         const kQ = (QQ, FQ, wQ, LQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * FQ + 3 * QQ * (1 - QQ) * (1 - QQ) * wQ + 3 * QQ * QQ * (1 - QQ) * LQ + QQ * QQ * QQ * qQ,
-           vQ = this._points[this._points.length - 1];
-         for (let mQ = 0; mQ <= DQ; mQ++) {
-           const uQ = mQ / DQ,
-             HQ = kQ(uQ, vQ.x, QQ, wQ, qQ),
-             bQ = kQ(uQ, vQ.y, FQ, LQ, oQ);
-           this.addLineTo(HQ, bQ)
+       }(),
+       ... function() {
+         const kk = {
+             1: kk => ({
+               x: 0,
+               z: kk
+             }),
+             2: kk => ({
+               x: kk,
+               z: 0
+             }),
+             3: kk => ({
+               x: 0,
+               z: -kk
+             }),
+             4: kk => ({
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L125-L142` → after: `L3263-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3263-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3263-L3288) · [Before (L125-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L125-L142)

```diff
-         return this
-       }
-       isPointInside(QQ) {
-         let FQ = !1;
-         const wQ = this._points.length;
-         for (let LQ = wQ - 1, qQ = 0; qQ < wQ; LQ = qQ++) {
-           let wQ = this._points[LQ],
-             oQ = this._points[qQ],
-             DQ = oQ.x - wQ.x,
-             kQ = oQ.y - wQ.y;
-           if (Math.abs(kQ) > Number.EPSILON) {
-             if (kQ < 0 && (wQ = this._points[qQ], DQ = -DQ, oQ = this._points[LQ], kQ = -kQ), QQ.y < wQ.y || QQ.y > oQ.y) continue;
-             if (QQ.y === wQ.y && QQ.x === wQ.x) return !0;
-             {
-               const LQ = kQ * (QQ.x - wQ.x) - DQ * (QQ.y - wQ.y);
-               if (0 === LQ) return !0;
- ... (2 more removed lines; see GitHub link above)
+         return ek
+       }(),
+       ... function() {
+         const kk = {};
+         for (let ek = 1; ek <= Dk.j; ek++) {
+           const ik = (0, Dk.Ub)(ek),
+             fk = Dk.l[ek - 1],
+             Sk = [{
+               block: ik,
+               x: 0,
+               y: 0,
+               z: 0
+             }];
+           for (const kk of Dk.g)
+             for (let ek = 1; ek <= fk; ek++) {
+               if ("southwest" === kk && 1 === ek) continue;
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L144-L146` → after: `L3290-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3290-L3291) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L144-L146)

```diff
-           } else {
-             if (QQ.y !== wQ.y) continue;
-             if (oQ.x <= QQ.x && QQ.x <= wQ.x || wQ.x <= QQ.x && QQ.x <= oQ.x) return !0
+           kk[ik] = {
+             positions: Sk
```

#### 7. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L151-L158` → after: `L3406-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3406-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3406-L3564) · [Before (L151-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L151-L158)

```diff
-       close() {
-         return this.closed = !0, this
-       }
-       length() {
-         let QQ = this._length;
-         if (this.closed) {
-           const FQ = this._points[this._points.length - 1];
-           QQ += this._points[0].subtract(FQ).length()
+     };
+ 
+     function rk(kk) {
+       return {
+         [`${kk} Banner`]: {
+           positions: [{
+             block: `${kk} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${kk} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+ ... (143 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L171-L185` → after: `L3567-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3567-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3567-L3662) · [Before (L171-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L171-L185)

```diff
-       getPointAtLengthPosition(QQ) {
-         if (QQ < 0 || QQ > 1) return oQ.n.Zero();
-         const FQ = QQ * this.length();
-         let wQ = 0;
-         for (let LQ = 0; LQ < this._points.length; LQ++) {
-           const QQ = (LQ + 1) % this._points.length,
-             qQ = this._points[LQ],
-             DQ = this._points[QQ].subtract(qQ),
-             kQ = DQ.length() + wQ;
-           if (FQ >= wQ && FQ <= kQ) {
-             const QQ = DQ.normalize(),
-               LQ = FQ - wQ;
-             return new oQ.n(qQ.x + QQ.x * LQ, qQ.y + QQ.y * LQ)
-           }
-           wQ = kQ
+     }
+ 
+     function Pk(kk) {
+       const ek = (0, Sk.Eb)(kk);
+       return {
+         [ek]: {
+           positions: [{
+             block: ek,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${ek} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (80 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L193-L212` → after: `L3666-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3666-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3666-L3742) · [Before (L193-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L193-L212)

```diff
-     class uQ {
-       static CreateQuadraticBezier(QQ, FQ, wQ, LQ) {
-         LQ = LQ > 2 ? LQ : 3;
-         const qQ = [],
-           DQ = (QQ, FQ, wQ, LQ) => (1 - QQ) * (1 - QQ) * FQ + 2 * QQ * (1 - QQ) * wQ + QQ * QQ * LQ;
-         for (let kQ = 0; kQ <= LQ; kQ++) qQ.push(new oQ.p(DQ(kQ / LQ, QQ.x, FQ.x, wQ.x), DQ(kQ / LQ, QQ.y, FQ.y, wQ.y), DQ(kQ / LQ, QQ.z, FQ.z, wQ.z)));
-         return new uQ(qQ)
-       }
-       static CreateCubicBezier(QQ, FQ, wQ, LQ, qQ) {
-         qQ = qQ > 3 ? qQ : 4;
-         const DQ = [],
-           kQ = (QQ, FQ, wQ, LQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * FQ + 3 * QQ * (1 - QQ) * (1 - QQ) * wQ + 3 * QQ * QQ * (1 - QQ) * LQ + QQ * QQ * QQ * qQ;
-         for (let vQ = 0; vQ <= qQ; vQ++) DQ.push(new oQ.p(kQ(vQ / qQ, QQ.x, FQ.x, wQ.x, LQ.x), kQ(vQ / qQ, QQ.y, FQ.y, wQ.y, LQ.y), kQ(vQ / qQ, QQ.z, FQ.z, wQ.z, LQ.z)));
-         return new uQ(DQ)
-       }
-       static CreateHermiteSpline(QQ, FQ, wQ, LQ, qQ) {
- ... (4 more removed lines; see GitHub link above)
+ 
+     function mk(kk) {
+       const ek = `_${kk} Back`,
+         ik = `_${kk} Dish`;
+       return {
+         [kk]: {
+           positions: [{
+             block: kk,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: ek,
+             x: 0,
+             y: 0,
+             z: -1
+ ... (61 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L214-L233` → after: `L3744-L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3744-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3744-L3765) · [Before (L214-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L214-L233)

```diff
-       static CreateCatmullRomSpline(QQ, FQ, wQ) {
-         const LQ = [],
-           qQ = 1 / FQ;
-         let DQ = 0;
-         if (wQ) {
-           const wQ = QQ.length;
-           for (let kQ = 0; kQ < wQ; kQ++) {
-             DQ = 0;
-             for (let vQ = 0; vQ < FQ; vQ++) LQ.push(oQ.p.CatmullRom(QQ[kQ % wQ], QQ[(kQ + 1) % wQ], QQ[(kQ + 2) % wQ], QQ[(kQ + 3) % wQ], DQ)), DQ += qQ
-           }
-           LQ.push(LQ[0])
-         } else {
-           const wQ = [];
-           wQ.push(QQ[0].clone()), wQ.push(...QQ), wQ.push(QQ[QQ.length - 1].clone());
-           let kQ = 0;
-           for (; kQ < wQ.length - 3; kQ++) {
- ... (4 more removed lines; see GitHub link above)
+     }
+ 
+     function Mk(kk) {
+       const ek = `Small ${kk} Pod`;
+       return {
+         [ek]: {
+           positions: [{
+             block: ek,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${kk} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L237-L269` → after: `L3768-L3780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3768-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3768-L3780) · [Before (L237-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L237-L269)

```diff
-       static ArcThru3Points(QQ, FQ, wQ) {
-         let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
-           qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         const kQ = [],
-           vQ = FQ.subtract(QQ),
-           mQ = wQ.subtract(FQ),
-           HQ = QQ.subtract(wQ),
-           bQ = oQ.p.Cross(vQ, mQ),
-           YQ = bQ.length();
-         if (YQ < Math.pow(10, -8)) return new uQ(kQ);
-         const xQ = vQ.lengthSquared(),
-           AQ = mQ.lengthSquared(),
-           tQ = HQ.lengthSquared(),
-           eQ = bQ.lengthSquared(),
-           MQ = .5 * vQ.length() * mQ.length() * HQ.length() / YQ,
- ... (17 more removed lines; see GitHub link above)
+     }
+     for (const xk in bk) {
+       for (const kk of bk[xk].positions)
+         if (kk.id = fk.g[kk.block].id, xk === kk.block && (0 !== kk.x || 0 !== kk.y || 0 !== kk.z)) throw new Error(`Multiblock "${xk}" has main block "${kk.block}" at non-origin position (${kk.x}, ${kk.y}, ${kk.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       bk[fk.g[xk].id] = bk[xk]
+     }
+     const Kk = {};
+     for (const xk in bk)
+       for (const {
+           block: kk,
+           x: ek,
+           y: ik,
+           z: Dk
```

#### 12. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L271` → after: `L3782-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3782-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3782-L3789) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L271)

```diff
-         return new uQ(kQ)
+         of bk[xk].positions) {
+         const Sk = {
+           mainMultiblock: xk,
+           compX: ek,
+           compY: ik,
+           compZ: Dk
+         };
+         Kk[kk] = Sk, Kk[fk.g[kk].id] = Sk
```

#### 13. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L274-L277` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3814) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L274-L277)

```diff
-         this._length = 0, this._points = QQ, this._length = this._computeLength(QQ)
-       }
-       getPoints() {
-         return this._points
+         this.model = kk, this.reshapeOffsets = [...bk, [0, -1, 0]]
```

#### 14. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L279-L280` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3816-L3818) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L279-L280)

```diff
-       length() {
-         return this._length
+       handles(kk) {
+         const ek = Dk.g[kk];
+         return (null === ek || void 0 === ek ? void 0 : ek.model) === this.model && void 0 !== ek.attachedTop
```

#### 15. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L282-L287` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3820-L3821) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L282-L287)

```diff
-       continue (QQ) {
-         const FQ = this._points[this._points.length - 1],
-           wQ = this._points.slice(),
-           LQ = QQ.getPoints();
-         for (let qQ = 1; qQ < LQ.length; qQ++) wQ.push(LQ[qQ].subtract(LQ[0]).add(FQ));
-         return new uQ(wQ)
+       affects(kk) {
+         return this.handles(kk) || rk(kk) || (0, Sk.z)(Dk.g[kk])
```

#### 16. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L289-L292` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3823-L3835) · [Before (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L289-L292)

```diff
-       _computeLength(QQ) {
-         let FQ = 0;
-         for (let wQ = 1; wQ < QQ.length; wQ++) FQ += QQ[wQ].subtract(QQ[wQ - 1]).length();
-         return FQ
+       shape(kk, ek, ik, bk, Pk) {
+         let mk = this.handles(kk(ek, ik + 1, bk)) ? fk.h : 0;
+         return fk.n.forEach(((Pk, Mk) => {
+           let {
+             dx: Kk,
+             dz: xk
+           } = Pk;
+           const nk = kk(ek + Kk, ik, bk + xk);
+           (this.handles(nk) || rk(nk) || function(kk, ek) {
+             const ik = Dk.g[kk];
+             return (0, Sk.z)(ik) && (0, Sk.u)(ik.meta.rot) === (0 !== fk.n[ek].dx)
+           }(nk, Mk)) && (mk |= 1 << Mk)
+         })), (0, Dk.h)((0, fk.i)(Dk.g[Pk].meta.rootName, mk))
```

#### 17. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L296-L333` → after: `L3839-L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3839-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3839-L3851) · [Before (L296-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L296-L333)

```diff
-   38200: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ
-     });
-     var LQ = wQ(38203);
-     const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(FQ) : null;
-     class oQ {
-       static DeepCopy(QQ, FQ, wQ, oQ) {
-         let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kQ = function(QQ) {
-           const FQ = [];
-           do {
-             const wQ = Object.getOwnPropertyNames(QQ);
-             for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
- ... (22 more removed lines; see GitHub link above)
+   37586: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       var ik;
+       ek || (ek = {});
+       const Dk = null !== (ik = ek.customAttributes) && void 0 !== ik ? ik : {};
+       var fk, Sk, bk;
+       "Gun" === (null === kk || void 0 === kk ? void 0 : kk.type) && (Dk.shotsLeft = null !== (fk = null !== (Sk = Dk.shotsLeft) && void 0 !== Sk ? Sk : null === (bk = Dk.gunStats) || void 0 === bk ? void 0 : bk.clipSize) && void 0 !== fk ? fk : kk.clipSize);
+       if (Dk.enchantmentTier && (Dk.enchantmentTier = Dk.enchantmentTier.toString()), Dk.enchantments)
+         for (const Kk in Dk.enchantments) {
+           const kk = Dk.enchantments[Kk];
+           if ("number" !== typeof kk) {
+             const ek = parseInt(kk);
+             isNaN(ek) || ek < 0 ? Dk.enchantments[Kk] = void 0 : Dk.enchantments[Kk] = ek > 1e9 ? 1e9 : ek
```

#### 18. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L336` → after: `L3854-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3854-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3854-L3868) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L336)

```diff
-       }
+       if (Dk.enchantmentData)
+         for (const Kk in Dk.enchantmentData) {
+           const kk = Dk.enchantmentData[Kk];
+           if (!kk) continue;
+           if ("object" !== typeof kk) {
+             Dk.enchantmentData[Kk] = void 0;
+             continue
+           }
+           const ek = kk.icon,
+             ik = kk.description;
+           var rk, Pk, mk, Mk;
+           if ("string" !== typeof ek) Dk.enchantmentData[Kk].icon = null !== (rk = null === ek || void 0 === ek || null === (Pk = ek.toString) || void 0 === Pk ? void 0 : Pk.call(ek)) && void 0 !== rk ? rk : void 0;
+           if ("string" !== typeof ik) Dk.enchantmentData[Kk].description = null !== (mk = null === ik || void 0 === ik || null === (Mk = ik.toString) || void 0 === Mk ? void 0 : Mk.call(ik)) && void 0 !== mk ? mk : void 0
+         }
+       return ek.customAttributes = Dk, ek
```

#### 19. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L343-L359` → after: `L3882-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3882-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3882-L3948) · [Before (L343-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L343-L359)

```diff
-     class LQ {
-       static _CheckLimit(QQ, FQ) {
-         let wQ = LQ._LogLimitOutputs[QQ];
-         return wQ ? wQ.current++ : (wQ = {
-           limit: FQ,
-           current: 1
-         }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
-       }
-       static _GenerateLimitMessage(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const wQ = LQ._LogLimitOutputs[QQ];
-         if (!wQ || !LQ.MessageLimitReached) return;
-         const qQ = this._Levels[FQ];
-         wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
-       }
-       static _AddLogEntry(QQ) {
- ... (1 more removed lines; see GitHub link above)
+     var Dk = ik(9020),
+       fk = ik(9057),
+       Sk = ik(37809);
+     const bk = (0, Dk.h)("Noticeboard"),
+       rk = (0, Dk.h)("Standing Noticeboard|meta|rot4|lrud");
+ 
+     function Pk(kk) {
+       return bk <= kk && kk <= rk
+     }
+     const mk = new Uint8Array(rk - bk + 1);
+     for (let sk = bk; sk <= rk; sk++) mk[sk - bk] = (0, fk.l)(Dk.g[sk].meta.metaStr);
+     const Mk = 64,
+       Kk = Mk * Mk,
+       [xk, nk, Uk, Hk] = [0, 1, 2, 3];
+ 
+     function wk(kk) {
+ ... (51 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L361-L364` → after: `L3950-L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3950-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3950-L3989) · [Before (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L361-L364)

```diff
-       static _FormatMessage(QQ) {
-         const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
-           wQ = new Date;
-         return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
+     }
+ 
+     function Ck(kk, ek) {
+       for (const ik of function(kk) {
+           let {
+             anchor: ek,
+             rot: ik,
+             width: Dk,
+             height: Sk
+           } = kk;
+           const [bk, , rk] = fk.q[ik][nk], Pk = [];
+           for (let fk = 0; fk < Sk; fk++)
+             for (let kk = 0; kk < Dk; kk++) Pk.push([ek[0] + bk * kk, ek[1] - fk, ek[2] + rk * kk]);
+           return Pk
+         }(kk))
+         if (wk(ek(ik[0], ik[1], ik[2]))) return ik;
+ ... (24 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L366-L378` → after: `L3991-L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3991-L3995) · [Before (L366-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L366-L378)

```diff
-       static _LogDisabled(QQ, FQ) {}
-       static _LogEnabled() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           FQ = arguments.length > 1 ? arguments[1] : void 0,
-           wQ = arguments.length > 2 ? arguments[2] : void 0;
-         const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
-         if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
-         const oQ = LQ._FormatMessage(qQ),
-           DQ = this._Levels[QQ],
-           kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
-         DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
-         const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
-         LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
+       return Uk ??= Lk(kk, nk[0], nk[1], nk[2]), {
+         cells: Mk,
+         topLeft: nk,
+         rect: Uk,
+         textCell: Ck(Uk, ek)
```

#### 22. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L380-L381` → after: `L3997-L4011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L3997-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L3997-L4011) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L380-L381)

```diff
-       static get LogCache() {
-         return LQ._LogCache
+     }
+ 
+     function jk(kk, ek, ik, bk, rk) {
+       if (null !== ik && Pk(ik)) {
+         const {
+           rootName: kk,
+           rot: ek
+         } = Dk.g[ik].meta;
+         if (fk.q[ek].some((kk => {
+             let [ek, ik, Dk] = kk;
+             return ek === bk[0] && ik === bk[1] && Dk === bk[2]
+           }))) return {
+           root: kk,
+           rot: ek
+         }
```

#### 23. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L383-L384` → after: `L4013-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L4013-L4016) · [Before (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L383-L384)

```diff
-       static ClearLogCache() {
-         LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
+       const [mk, Mk] = fk.j[rk], Kk = kk(ek[0] - mk, ek[1], ek[2] - Mk);
+       return {
+         root: (0, Sk.e)(Kk) ? fk.v : fk.r,
+         rot: rk
```

#### 24. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L386-L393` → after: `L4018-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4018-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L4018-L4038) · [Before (L386-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L386-L393)

```diff
-       static set LogLevels(QQ) {
-         LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
-         const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
-         for (const wQ of FQ)
-           if ((QQ & wQ) === wQ) {
-             const QQ = this._Levels[wQ];
-             LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
-           }
+     }
+   },
+   37818: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Sk,
+       h: () => bk,
+       i: () => fk,
+       m: () => rk
+     });
+     var Dk = ik(323);
+     const fk = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...ik(591).u.map((kk => `${kk} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       Sk = ["Obby RPG"];
+ 
+     function bk(kk) {
+       const ek = kk.indexOf("|");
+       return -1 === ek ? {
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L396-L408` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/238.js#L4041) · [Before (L396-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/238.js#L396-L408)

```diff
-     LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
+     const rk = [...fk, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4` → after: `L4-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/239.js#L4-L618) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/239.js#L4)

```diff
-   40172: (QQ, FQ, wQ) => {
+   37649: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => mk,
+       e: () => Dk,
+       h: () => rk,
+       k: () => fk,
+       o: () => bk,
+       r: () => Sk
+     });
+     const Dk = 1.001,
+       fk = .501,
+       Sk = .025,
+       bk = .75,
+       rk = .08,
+       Pk = 4;
+ 
+ ... (599 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L9-L501` → after: `L623-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L623-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/239.js#L623-L645) · [Before (L9-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/239.js#L9-L501)

```diff
-     var LQ = wQ(1904);
-     let qQ = !1;
- 
-     function oQ() {
-       qQ = !0
-     }
- 
-     function DQ() {
-       qQ && (qQ = !1, (0, LQ.b)())
-     }
-   },
-   40169: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ,
-       f: () => oQ,
-       j: () => kQ
- ... (477 more removed lines; see GitHub link above)
+     const Dk = ["Chest", "Loot Chest", "Moonstone Chest"],
+       fk = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (116 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L97` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L4) · [Before (L4-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L4-L97)

```diff
-   38973: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => QL
-     });
-     const LQ = [0, 90, 180, 270],
-       qQ = "plotsblueprint";
-     var oQ = wQ(53),
-       DQ = wQ(36235),
-       kQ = wQ(17),
-       vQ = wQ(1641),
-       mQ = wQ(1725),
-       uQ = wQ(22);
-     const HQ = [
-         ["farm_hut", "farm_house", "farm_barn"],
-         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
-         ["market_stand", "market_stall", "market_shop"],
- ... (78 more removed lines; see GitHub link above)
+   38676: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L99` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L6) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L99)

```diff
-       return bQ[QQ]
+       return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
```

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L101` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L8-L17) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L101)

```diff
-     const AQ = new Map(HQ.flatMap((QQ => QQ.slice(1).map(((FQ, wQ) => [FQ, QQ[wQ]])))));
+     ik.d(ek, {
+       c: () => Dk
+     })
+   },
+   38601: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk
+     });
+     var Dk = ik(26),
+       fk = ik(1911);
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L104-L140` → after: `L20-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L20-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L20-L31) · [Before (L104-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L104-L140)

```diff
-       var FQ;
-       return null !== (FQ = AQ.get(QQ)) && void 0 !== FQ ? FQ : null
-     }
-     const eQ = {
-       farm_hut: "plotsGame:journalNoteFarmHut",
-       rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
-       castle_tower: "plotsGame:journalNoteCastleTower",
-       farm_house: "plotsGame:journalNoteFarmHouse",
-       farm_barn: "plotsGame:journalNoteFarmBarn"
-     };
- 
-     function MQ(QQ, FQ) {
-       const wQ = new Set(QQ),
-         LQ = function(QQ) {
-           const FQ = new Set(QQ);
-           return new Set(YQ.filter((QQ => {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         taskId: ek,
+         progress: ik
+       } = kk;
+       const Dk = fk.c.get("_tasks");
+       null !== Dk && void 0 !== Dk && Dk[ek] && fk.c.apply({
+         _tasks: {
+           ...Dk,
+           [ek]: {
+             ...Dk[ek],
+             progress: ik
+           }
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L142` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L33) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L142)

```diff
-       }))
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L144` → after: `L35-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L35-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L35-L54) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L144)

```diff
-     const GQ = "plotsJournalChanged";
+     Dk.j.subscribe("clientTaskProgress", (kk => {
+       Sk(kk)
+     }))
+   },
+   38542: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => ki,
+       e: () => Re,
+       f: () => Je
+     });
+     var Dk = ik(3642),
+       fk = ik(165),
+       Sk = ik(189),
+       bk = ik(600),
+       rk = ik(38),
+       Pk = ik(2704),
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L147-L152` → after: `L57-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L57-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L57-L93) · [Before (L147-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L147-L152)

```diff
-         this.api = QQ, this.placement = FQ, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
-           this.placement.stop(), this.hY("journal_opened")
-         }, this.build = QQ => {
-           this.hY("placement_started"), this.placement.start(QQ), (0, DQ.f)()
-         }, this.putAway = () => {
-           this.api.sendCommand(`${qQ} cancel`)
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
+           GPk: !0
+         };
+         this.callbacks = ek, this.options = ik, this.rik = void 0, this.sessionId = void 0, this.mV = [], this.NPk = !1, this.aU = !1, this.RPk = void 0, this.rV = 0, this.Dfk = 0, this.JPk = (kk, ek) => {
+           if (this.aU) return;
+           const ik = Number(kk);
+           this.NPk ? this.kmk(ik, ek) : this.mV.push({
+             id: ik,
+             payload: ek
+           })
+         }, this.dispose = () => {
+           this.aU || (this.aU = !0, xk.delete(this), this.mV.length = 0, this.RPk())
+         }, this.rik = kk, this.sessionId = kk.sessionId, xk.set(this, []), this.RPk = this.emk()
+       }
+       imk(kk) {
+         this.RPk(), this.rik = kk, this.sessionId = kk.sessionId, this.rV = 0, this.Dfk = 0, this.RPk = this.emk()
+ ... (21 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L155-L156` → after: `L96-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L96-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L96-L105) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L155-L156)

```diff
-       getPages() {
-         return this.pages
+       Smk() {
+         for (const {
+             id: kk,
+             payload: ek
+           }
+           of this.mV) {
+           if (this.aU) break;
+           this.kmk(kk, ek)
+         }
+         this.mV.length = 0
```

#### 9. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L158-L160` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L107-L108) · [Before (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L158-L160)

```diff
-       bx(QQ) {
-         let [, FQ, wQ] = QQ;
-         this.pages = MQ(FQ, wQ), uQ.l.GA(GQ, this.pages, !0)
+       RL() {
+         return this.aU
```

#### 10. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L162-L163` → after: `L110-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L110-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L110-L121) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L162-L163)

```diff
-       openFromServer() {
-         this.openRequested = !0, this.fH()
+       bmk() {
+         if (this.NPk || this.aU) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+         return {
+           Gy: (kk, ek) => {
+             if (this.NPk || this.aU) throw new Error("Trying to call onMessage after registration finished");
+             this.Gy(kk, ek)
+           },
+           finishRegistration: () => {
+             if (this.aU) throw new Error("Cannot finish message registration after disposal");
+             this.NPk = !0, this.Smk()
+           }
+         }
```

#### 11. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L165-L166` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L123-L128) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L165-L166)

```diff
-       fH() {
-         this.openRequested && !kQ.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, vQ.m)() || (0, mQ.isTypingInInput)() || null !== this.placement.getView() || (0, DQ.o)())
+       Gy(kk, ek) {
+         var ik, Dk;
+         null === (ik = (Dk = this.callbacks).rmk) || void 0 === ik || ik.call(Dk);
+         const fk = xk.get(this);
+         for (; kk > fk.length;) fk[fk.length] = null;
+         fk[kk] = ek
```

#### 12. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L168-L169` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L130-L131) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L168-L169)

```diff
-       hY(QQ) {
-         this.reported.has(QQ) || (this.reported.add(QQ), this.api.sendCommand(`${qQ} report ${QQ}`))
+       send(kk, ek) {
+         this.Pmk(), (0, Kk.C)(ek) ? this.rik.lV(kk, ek) : this.rik.send(kk, ek)
```

#### 13. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L171-L197` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L133-L135) · [Before (L171-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L171-L197)

```diff
-     }
-     var cQ = wQ(1070),
-       CQ = wQ.n(cQ),
-       SQ = wQ(1079),
-       iQ = wQ(1451),
-       WQ = wQ(4376),
-       RQ = wQ(3276),
-       OQ = wQ(1447),
-       sQ = wQ(1132),
-       rQ = wQ(1207),
-       IQ = wQ(9195);
-     const UQ = [0, 90, 180, 270],
-       NQ = /^(meta\|rot\d)\|([lrud]+)$/,
-       TQ = "nesw",
-       KQ = /^meta\|([nesw]*)\|?(Stacked)?$/,
-       zQ = function(QQ) {
- ... (11 more removed lines; see GitHub link above)
+       Pmk() {
+         var kk, ek;
+         (this.Dfk++, 5 === Uk++) && (null === (kk = (ek = this.callbacks).rmk) || void 0 === kk || kk.call(ek), Uk = 0)
```

#### 14. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L199-L201` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L137-L138) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L199-L201)

```diff
-       static
-       for (QQ) {
-         return zQ(QQ)
+       Gl() {
+         this.dispose(), this.rik.Gl()
```

#### 15. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L203-L206` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L140-L141) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L203-L206)

```diff
-       getBlockIdMapping(QQ, FQ) {
-         const wQ = this.getBlockIdMappingKey(QQ, FQ);
-         let LQ = this.blockIdMappings.get(wQ);
-         return void 0 === LQ && UQ.includes(QQ) && (LQ = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, QQ, FQ), this.blockIdMappings.set(wQ, LQ)), LQ
+       leave() {
+         this.dispose(), this.rik.leave()
```

#### 16. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L208-L209` → after: `L143-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L143-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L143-L158) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L208-L209)

```diff
-       turnBlockId(QQ, FQ, wQ) {
-         return this.mapBlockId(this.blockMetadata[QQ], FQ, this.getRotationMapping(FQ, wQ), wQ)
+     }
+     let Uk = 0;
+     var Hk = ik(3658);
+     class wk extends nk {
+       constructor(kk) {
+         super(kk, {
+           rmk: () => {
+             (0, rk.h)(!0) && (0, Dk.Gs)()
+           },
+           fmk: (kk, ek) => {
+             var ik;
+             null === (ik = (0, Pk.e)()) || void 0 === ik || ik.BH(kk, ek)
+           }
+         }, {
+           GPk: !1
+         }), (0, Hk.c)(kk)
```

#### 17. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L211-L212` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L160-L161) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L211-L212)

```diff
-       getBlockIdMappingKey(QQ, FQ) {
-         return `r${QQ}|m${Number(FQ)}`
+       KV(kk, ek) {
+         return !!(0, Hk.k)((0, Hk.b)(), this.rik, kk, ek) && (this.Pmk(), !0)
```

#### 18. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L214-L221` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L163-L164) · [Before (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L214-L221)

```diff
-       createBlockIdMapping(QQ, FQ, wQ, LQ) {
-         const qQ = new Uint16Array(FQ + 1),
-           oQ = this.getRotationMapping(wQ, LQ);
-         for (const DQ in QQ) {
-           const FQ = QQ[DQ];
-           qQ[FQ.id] = this.mapBlockId(FQ, wQ, oQ, LQ)
-         }
-         return qQ
+       imk(kk) {
+         this.Mmk(), super.imk(kk), (0, Hk.c)(kk)
```

#### 19. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L223-L231` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L166-L167) · [Before (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L223-L231)

```diff
-       getRotationMapping(QQ, FQ) {
-         const wQ = Math.round(QQ / 90),
-           LQ = new Uint8Array(4);
-         for (let qQ = 0; qQ < 4; qQ++) LQ[qQ] = (4 + qQ - wQ) % 4;
-         if (FQ) {
-           let QQ = LQ[0];
-           LQ[0] = LQ[1], LQ[1] = QQ, QQ = LQ[2], LQ[2] = LQ[3], LQ[3] = QQ
-         }
-         return LQ
+       Gl() {
+         super.Gl(), this.Mmk()
```

#### 20. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L233-L267` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L169-L170) · [Before (L233-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L233-L267)

```diff
-       mapBlockId(QQ, FQ, wQ, LQ) {
-         var qQ;
-         const {
-           blockMetadata: oQ
-         } = this, DQ = Math.round(FQ / 90), {
-           id: kQ,
-           meta: vQ
-         } = QQ, {
-           rot: mQ,
-           rootName: uQ,
-           metaStr: HQ
-         } = vQ;
-         let bQ;
-         const [, YQ, xQ] = null !== (qQ = KQ.exec(HQ)) && void 0 !== qQ ? qQ : [];
-         if (void 0 !== YQ) {
-           var AQ, tQ;
- ... (19 more removed lines; see GitHub link above)
+       Mmk() {
+         this.rik.Rl.dU.lF = void 0
```

#### 21. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L272-L277` → after: `L184-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L184-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L184-L218) · [Before (L272-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L272-L277)

```diff
-       let {
-         xRotationMappedOrigin: LQ,
-         shouldSwapXZ: qQ
-       } = wQ;
-       const oQ = qQ ? FQ : QQ;
-       return null === LQ ? oQ : LQ - oQ
+       const Dk = function(kk) {
+           const ek = new Int32Array(kk.length * sk.f);
+           return kk.forEach(((kk, ik) => {
+             const Dk = ik * sk.f;
+             if (4 === kk.length) {
+               const [ik, fk, Sk, bk] = kk;
+               ek.set([ik, fk, Sk, ik, fk, Sk, bk], Dk)
+             } else {
+               const [ik, fk, Sk, bk, rk, Pk, mk] = kk;
+               ek.set([ik, Sk, rk, fk, bk, Pk, mk], Dk)
+             }
+           })), ek
+         }(ik),
+         fk = (ek, ik, Dk, fk) => {
+           kk.setBlockNoMulti(ek, ik, Dk, fk, !0)
+         };
+ ... (19 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L280-L286` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L221-L222) · [Before (L280-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L280-L286)

```diff
-     function aQ(QQ, FQ, wQ) {
-       let {
-         zRotationMappedOrigin: LQ,
-         shouldSwapXZ: qQ
-       } = wQ;
-       const oQ = qQ ? QQ : FQ;
-       return null === LQ ? oQ : LQ - oQ
+     function Vk(kk) {
+       kk.gek = new Set, kk.Rek = new Set, kk.Gek = new Set, kk.Jek = new Set, kk.Nek = [], kk.kik = [], kk.rW = new Set, kk.Qk = [], kk.UW = []
```

#### 23. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L288-L393` → after: `L224-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L224-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L224-L282) · [Before (L288-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L288-L393)

```diff
-     const XQ = {
-         farm_hut: {
-           size: [7, 7, 7],
-           palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
-           layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb.  … [truncated]
-         },
-         rusticHome_tent: {
-           size: [7, 6, 7],
-           palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
-           layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b..  … [truncated]
-         },
-         market_stand: {
-           size: [7, 4, 4],
-           palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
-           layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
-         },
- ... (90 more removed lines; see GitHub link above)
+     class Fk {
+       constructor(kk) {
+         this.Lx = kk
+       }
+       register(kk) {
+         const ek = this.Lx,
+           ik = (0, Pk.d)();
+         kk.Gy(mk.V, (kk => {
+           ek.Ux.gek.add(kk), ek.Ux.Rek.delete(kk)
+         })), kk.Gy(mk._, (kk => {
+           ek.Ux.Rek.add(kk), ek.Ux.gek.delete(kk)
+         })), kk.Gy(mk.me, (kk => {
+           ek.Ux.Rek.delete(kk), ek.Ux.gek.delete(kk)
+         })), kk.Gy(mk.Z, (kk => {
+           ek.Ux.Gek.add(kk), ek.Ux.Jek.delete(kk)
+         })), kk.Gy(mk.gb, (kk => {
+ ... (43 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L396-L399` → after: `L301-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L301-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L301-L316) · [Before (L396-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L396-L399)

```diff
-         })), LQ = {
-           size: [vQ, qQ[1], mQ],
-           cells: YQ
-         }, fQ.set(wQ, LQ)
+         })), kk.Gy(mk.Gf, (kk => {
+           let {
+             DD: ek,
+             fD: Dk
+           } = kk;
+           if (ik.qT(ek[0], ek[1], ek[2])) {
+             const kk = (0, Pk.d)().Fy(ek[0], ek[1], ek[2]);
+             (0, Pk.d)().updateMailboxContents(ek[0], ek[1], ek[2], kk, Dk)
+           }
+         })), kk.Gy(mk.Pe, (kk => {
+           let {
+             pos: ek,
+             data: Dk
+           } = kk;
+           ik.blockDataOwner.setBlockData(ek[0], ek[1], ek[2], Dk), ik.blockAdded(ek[0], ek[1], ek[2], ik.Fy(ek[0], ek[1], ek[2]))
+         }))
```

#### 25. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L403-L475` → after: `L319-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L319-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L319-L390) · [Before (L403-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L403-L475)

```diff
-     const hQ = {
-       farm_hut: wQ.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
-       farm_house: wQ.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
-       farm_barn: wQ.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
-       rusticHome_tent: wQ.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
-       rusticHome_cabin: wQ.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
-       rusticHome_house: wQ.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
-       market_stand: wQ.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
-       market_stall: wQ.p + "static/media/market_stall.9a562807f9dff591618a.webp",
-       market_shop: wQ.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
-       castle_wall: wQ.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
-       castle_gate: wQ.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
-       castle_tower: wQ.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
-     };
-     var JQ = wQ(1107);
-     const EQ = {
- ... (57 more removed lines; see GitHub link above)
+     var uk = ik(36752),
+       qk = ik(36348),
+       Ik = ik(37660),
+       zk = ik(37510),
+       Qk = ik(37670);
+     class vk {
+       constructor(kk, ek) {
+         this.Lx = kk, this.setUpQueuedEntity = ek
+       }
+       register(kk) {
+         const ek = this.Lx,
+           ik = (0, Pk.d)();
+         kk.Gy(mk.S, (kk => {
+           let {
+             zf: ek,
+             Qf: ik
+ ... (56 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L477-L492` → after: `L392-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L392-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L392-L526) · [Before (L477-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L477-L492)

```diff
-           }), FQ.active && (0, JQ.jsxs)(JQ.Fragment, {
-             children: [(0, JQ.jsx)("p", {
-               className: "PlotsJournalHint Building",
-               children: oQ("plotsGame:journalBuilding")
-             }), (0, JQ.jsx)(iQ.i, {
-               onClick: qQ,
-               children: oQ("plotsGame:journalPutAway")
-             })]
-           }), !uQ && !FQ.active && (0, JQ.jsx)(HQ, {
-             onClick: () => {
-               LQ(FQ.id)
-             },
-             children: oQ("plotsGame:placementBuild")
-           })]
-         })]
-       })
+           }
+           Dk === ek.Qq && (ik.shakePlayerCamera(Dk, rk / 40, 200), lk.j.tm("closeShopOnDamaged", null), lk.j.tm("damagedByOtherPlayer", {
+             MS: null,
+             direction: Pk,
+             Ub: rk
+           }, !0));
+           const Kk = ek.mY.vy(Dk);
+           if (Kk && (Sk || bk)) {
+             const kk = [Kk[0], Kk[1] + 1, Kk[2]];
+             Sk && (0, zk.k)(ek, zk.z, kk, 15), bk && (0, zk.k)(ek, zk.m, kk, 10)
+           }
+         })), kk.Gy(mk.Nc, (kk => {
+           let {
+             Yi: ik,
+             Li: Dk,
+             Ci: fk
+ ... (119 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L495-L516` → after: `L538-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L538-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L538-L652) · [Before (L495-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L495-L516)

```diff
-     function gQ(QQ) {
-       let {
-         className: FQ,
-         page: wQ,
-         hidden: LQ,
-         building: qQ,
-         journal: oQ
-       } = QQ;
-       return (0, JQ.jsxs)("div", {
-         ref: QQ => {
-           null !== QQ && (QQ.inert = LQ)
-         },
-         className: CQ()("PlotsJournalSide", FQ),
-         children: [void 0 !== wQ && (0, JQ.jsx)(nQ, {
-           page: wQ,
-           building: qQ,
- ... (6 more removed lines; see GitHub link above)
+         function Dk() {
+           return ek.mY.Dek(ek.Qq)
+         }
+         kk.Gy(mk.Ac, (kk => {
+           let {
+             Cf: ik,
+             Af: Dk,
+             jf: fk,
+             sf: Sk,
+             df: bk,
+             Vf: rk,
+             Ff: Pk,
+             uf: mk,
+             qf: Mk
+           } = kk;
+           if (!ek.mY.lkk(ik, "itemState")) return void(0, gk.l)(ek, ik, [bk, rk, Pk], Dk, {
+ ... (99 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L518-L522` → after: `L654-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L654-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L654-L784) · [Before (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L518-L522)

```diff
-     var PQ = wQ(317),
-       ZQ = wQ(1870);
- 
-     function yQ(QQ) {
-       return Math.cos((0, ZQ.n)(QQ))
+     var Rk = ik(6328),
+       Jk = ik(37015),
+       ke = ik(330),
+       ee = ik.n(ke),
+       ie = ik(4458),
+       De = ik(37289),
+       fe = ik(37845),
+       Se = ik(37009);
+     class be {
+       constructor(kk, ek) {
+         this.Lx = kk, this.setUpQueuedEntity = ek
+       }
+       register(kk) {
+         const ek = this.Lx,
+           ik = (0, Pk.d)();
+         kk.Gy(mk.vf, (kk => {
+ ... (115 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L526` → after: `L798-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L798-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L798-L839) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L526)

```diff
-       return (0, ZQ.B)(Math.acos(PQ.e.clamp(QQ, -1, 1)))
+       const ek = kk.Ux;
+       let ik = 0,
+         fk = -1,
+         bk = -1 / 0,
+         rk = null,
+         Pk = !0;
+       const Mk = () => {
+         if (++ik % 10 !== 0) return;
+         const Mk = (0, Dk.getLastReceivedPacketId)();
+         if (Mk <= fk) return;
+         const [Kk, xk, nk] = kk.mY.vy(kk.Qq), Uk = ! function(kk) {
+           var ek;
+           let ik = null === (ek = kk.mY.tek(kk.Qq)) || void 0 === ek ? void 0 : ek.qU;
+           if (void 0 === ik) return !1;
+           const Dk = new Set;
+           for (; void 0 !== ik && !Dk.has(ik);) {
+ ... (26 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L528-L534` → after: `L841-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L841-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L841-L1176) · [Before (L528-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L528-L534)

```diff
- 
-     function dQ(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = Math.abs(FQ - QQ),
-         DQ = (0, ZQ.B)(qQ / (wQ * Math.abs(Math.sin((0, ZQ.n)(QQ))))),
-         kQ = 450 * Math.min(1, oQ / LQ),
-         vQ = DQ > 0 ? 3 * oQ / DQ : 1 / 0;
-       return Math.round(Math.max(120, Math.min(kQ, vQ)))
+     var ne = ik(38595),
+       Ue = ik(1479),
+       He = ik(2700),
+       we = ik(2849),
+       le = ik(4716);
+     class pe {
+       constructor(kk, ek, ik) {
+         this.Lx = kk, this.gameNameWithVariation = ek, this.connectionResume = ik, this.stopChunkReports = () => {}, this.replayResume = null
+       }
+       clearUiRequestsAndQTEs() {
+         le.d.reset(), (0, Pe.d)()
+       }
+       startChunkReports() {
+         const kk = function(kk) {
+             let ek = null,
+               ik = -1 / 0,
+ ... (320 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L537-L538` → after: `L1179-L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1179-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1179-L1180) · [Before (L537-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L537-L538)

```diff
-       constructor() {
-         this.samples = []
+       constructor(kk, ek, ik, Dk) {
+         this.gameNameWithVariation = kk, this.Lx = ik, this.connectionResume = Dk, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Lk.c(ek, this.Lx)
```

#### 32. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L540-L544` → after: `L1182-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1182-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1182-L1185) · [Before (L540-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L540-L544)

```diff
-       add(QQ, FQ) {
-         for (this.samples.push({
-             x: QQ,
-             at: FQ
-           }); FQ - this.samples[0].at > 100;) this.samples.shift()
+       setupStateReplicationHandlers() {
+         this.stateReplicationHandler.setup(), (0, Dk.onGameResetOnce)((() => {
+           this.stateReplicationHandler.dispose()
+         }))
```

#### 33. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L546-L549` → after: `L1187-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1187-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1187-L1195) · [Before (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L546-L549)

```diff
-       get() {
-         const QQ = this.samples[0],
-           FQ = this.samples[this.samples.length - 1];
-         return FQ.at > QQ.at ? (FQ.x - QQ.x) / (FQ.at - QQ.at) : 0
+       imk(kk) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Lk.c(kk, this.Lx), this.stateReplicationHandler.setup()
+       }
+       setupOnMessageListeners(kk, ek) {
+         const ik = this.Lx,
+           Dk = kk => {
+             this.stateReplicationHandler.setUpIfQueued(kk)
+           };
+         new pe(ik, this.gameNameWithVariation, this.connectionResume).register(kk), new Fk(ik).register(kk), new Nk(ik).register(kk), new vk(ik, Dk).register(kk), new Ok(ik, Dk).register(kk), new se(ik, ek).register(kk), new be(ik, Dk).register(kk)
```

#### 34. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L553-L554` → after: `L1306-L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1306-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1306-L1317) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L553-L554)

```diff
-     function FF(QQ, FQ) {
-       return QQ > FQ && QQ >= 600
+     function Ge(kk) {
+       var ek, ik;
+       if ("object" !== typeof kk || null === kk) return {
+         errType: typeof kk
+       };
+       const Dk = kk;
+       return {
+         errType: null !== (ek = null === (ik = kk.constructor) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : "",
+         errName: "string" === typeof Dk.name ? Dk.name : "",
+         eventType: "string" === typeof Dk.type ? Dk.type : "",
+         errStack: "string" === typeof Dk.stack ? Dk.stack.split("\n").slice(1).join(" | ") : ""
+       }
```

#### 35. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L558-L559` → after: `L1321-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1321-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1321-L1328) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L558-L559)

```diff
-       return BQ(new DOMMatrixReadOnly(getComputedStyle(QQ).transform).m11)
-     }
+       if ("undefined" !== typeof ProgressEvent && kk instanceof ProgressEvent) return !0;
+       if (!(kk instanceof Error)) return !1;
+       const ek = kk.code;
+       return "ServerError" === kk.name && void 0 === ek || "AbortError" === kk.name || "seat reservation expired." === kk.message || "early_leave" === kk.message
+     }(0, Hk.n)((kk => {
+       (0, qe.reportClientError)("wasm_net", kk)
+     }));
+     let Re = !0;
```

#### 36. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L561-L562` → after: `L1330-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1330-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1330-L1331) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L561-L562)

```diff
-     function LF(QQ, FQ) {
-       QQ.style.transform = `rotateY(${-FQ}deg)`, QQ.classList.add("Turning")
+     function Je() {
+       Re = !1
```

#### 37. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L564-L592` → after: `L1333-L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1333-L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1333-L1478) · [Before (L564-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L564-L592)

```diff
- 
-     function qF(QQ) {
-       let {
-         journal: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, rQ.y)(), LQ = (0, OQ.i)(GQ, FQ.getPages()), qQ = (0, sQ.i)(FF), [kQ, vQ] = (0, oQ.useState)((() => function(QQ) {
-         const FQ = QQ.findIndex((QQ => QQ.active));
-         return -1 !== FQ ? FQ : Math.max(0, QQ.findIndex((QQ => "open" === QQ.state)))
-       }(LQ))), uQ = (0, oQ.useRef)(null), HQ = (0, oQ.useRef)(null), bQ = (0, oQ.useRef)({
-         Forward: null,
-         Back: null
-       }), YQ = qQ ? 2 : 1, xQ = qQ ? 180 : 90, AQ = kQ - kQ % YQ, tQ = AQ > 0, eQ = AQ + YQ < LQ.length, MQ = (0, oQ.useCallback)((() => {
-         const QQ = HQ.current;
-         return null === QQ ? AQ : (HQ.current = null, QQ.animation.cancel(), (FQ = bQ.current[QQ.direction]).style.transform = "", FQ.classList.remove("Turning"), null === QQ.next ? AQ : (vQ(QQ.next), QQ.next));
- ... (13 more removed lines; see GitHub link above)
+     class ki {
+       constructor(kk) {
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.Lx = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWit … [truncated]
+       }
+       async connectToServer(kk, ek, ik) {
+         pk.c.reset(), kk.zq = {
+           [kk.Qq]: {}
+         }, kk.ykk = void 0, (0, Zk.q)(), (0, Pk.d)().removeAllEntityNames(), (0, Pk.d)().setEntityName(kk.Qq, this.userContext.getPlayerName()), (0, ve.n)({
+           lobbyName: this.lobbyName
+         }), console.log("Waiting for clientConnection passed promise to resolve");
+         const bk = (0, Oe.c)();
+         console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
+         const rk = performance.now(),
+           mk = (0, ce.g)(this.userContext, (() => {
+             const {
+               roomName: Dk,
+ ... (130 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L594-L609` → after: `L1480-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1480-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1480-L1493) · [Before (L594-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L594-L609)

```diff
-         HQ.current = {
-           direction: QQ,
-           animation: kQ,
-           next: FQ ? LQ + ("Forward" === QQ ? YQ : -YQ) : null
-         }, kQ.onfinish = () => {
-           var QQ;
-           (null === (QQ = HQ.current) || void 0 === QQ ? void 0 : QQ.animation) === kQ && MQ()
-         }
-       }), [YQ, xQ, MQ]), cQ = (0, oQ.useCallback)((QQ => {
-         if (null !== uQ.current) return;
-         const FQ = MQ();
-         ("Forward" === QQ ? FQ + YQ < LQ.length : FQ > 0) && pQ(QQ, !0, 0, FQ)
-       }), [MQ, pQ, YQ, LQ.length]);
-       (0, oQ.useEffect)((() => {
-         FQ.onOpened()
-       }), [FQ]), (0, oQ.useEffect)((() => () => {
+         (0, Pk.d)().client.leaveGameUnwanted({
+           reason: `You have disconnected from the server.\n${fk.reason}`,
+           canReconnect: fk.canReconnect,
+           requiresRefresh: fk.requiresRefresh,
+           automaticallyReconnect: null !== (ik = fk.automaticallyReconnect) && void 0 !== ik && ik
+         }), (0, Ue.navigatePreserveSearch)("/")
+       }
+       getUpdateWaitingUrl() {
+         return (0, he.E)(this.gameNameWithVariation, this.lobbyName)
+       }
+       goToUpdateWaiting() {
+         (0, Ue.navigatePreserveSearch)(this.getUpdateWaitingUrl())
+       }
+       onConnectionToServerLost(kk, ek, ik) {
```

#### 39. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L611-L615` → after: `L1495-L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1495-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1495-L1504) · [Before (L611-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L611-L615)

```diff
-         null === (QQ = HQ.current) || void 0 === QQ || QQ.animation.cancel()
-       }), []), (0, oQ.useEffect)((() => {
-         const QQ = QQ => {
-           var FQ;
-           QQ.pointerId !== (null === (FQ = uQ.current) || void 0 === FQ ? void 0 : FQ.pointerId) || uQ.current.following || (uQ.current = null)
+         let fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (null !== (Dk = ek) && void 0 !== Dk && Dk.endsWith(Sk.k) && (this.userContext.invalidateTrafficCode(), ek = ek.replace(Sk.k, "")), kk === Sk.c.outdatedVersion.code) return console.error("Outdated client with version ", bk.c, ", refreshing page"), (0, yk.reloadBloxd)() … [truncated]
+           reason: "Outdated client",
+           requiresRefresh: !0,
+           canReconnect: !1
+         };
+         if (kk === Sk.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, yk.reloadBloxd)(), {
+           reason: "Failed to load recaptcha",
+           requiresRefresh: !0,
+           canReconnect: !1
```

#### 40. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L617-L618` → after: `L1506-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1506-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1506-L1520) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L617-L618)

```diff
-         return window.addEventListener("pointerup", QQ), () => {
-           window.removeEventListener("pointerup", QQ)
+         for (const bk in Sk.c) {
+           const {
+             code: ik,
+             text: Dk,
+             canReconnect: fk
+           } = Sk.c[bk];
+           if (ik === kk) {
+             console.log("matched known error", kk, "leaving game");
+             return {
+               reason: "" !== Dk ? Dk : ek || `Code: ${kk}`,
+               requiresRefresh: !1,
+               canReconnect: fk,
+               automaticallyReconnect: ik === Sk.c.customGameUpdated.code || ik === Sk.c.duplicateLobbyNameError.code
+             }
+           }
```

#### 41. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L620-L738` → after: `L1522-L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1522-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1522-L1535) · [Before (L620-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L620-L738)

```diff
-       }), []), (0, RQ.d)((QQ => ("ArrowLeft" === QQ.code || "ArrowRight" === QQ.code) && !(0, mQ.isTypingInInput)()), (QQ => {
-         QQ.stopPropagation(), cQ("ArrowLeft" === QQ.code ? "Back" : "Forward")
-       }));
-       const SQ = (QQ, FQ, wQ) => {
-           const LQ = function(QQ, FQ, wQ, LQ) {
-             return (QQ < 0 ? wQ : LQ) ? PQ.e.clampAbs(QQ, FQ) : Math.sign(QQ) * FQ * (1 - 1 / (.55 * Math.abs(QQ) / FQ + 1))
-           }(QQ.base + wQ, YQ * QQ.width, eQ, tQ);
-           return "Forward" === FQ ? Math.min(LQ, 0) : Math.max(LQ, 0)
-         },
-         IQ = (QQ, FQ) => {
-           const wQ = uQ.current;
-           if (uQ.current = null, null === wQ.direction) return;
-           wQ.speed.add(QQ, FQ);
-           const LQ = wQ.speed.get(),
-             qQ = SQ(wQ, wQ.direction, QQ - wQ.x);
-           pQ(wQ.direction, null !== function(QQ, FQ, wQ, LQ, qQ) {
- ... (103 more removed lines; see GitHub link above)
+         return console.log("Didn't match known error, leaving game"), (0, Qe.g)(kk) || fk ? console.warn("Connection lost", kk, ek) : this.logUnrecognisedConnectionLoss(kk, ek, ik), {
+           reason: `Either your internet isn't working or this is a bug.\nCode: ${kk}`,
+           requiresRefresh: !1,
+           canReconnect: !1,
+           gameServerUnreachable: fk ? "failed" : void 0
+         }
+       }
+       logUnrecognisedConnectionLoss(kk, ek, ik) {
+         (0, We.cH)(new Error("Unrecognised connection loss"), {
+           code: String(kk),
+           cause: null !== ek && void 0 !== ek ? ek : "",
+           ...ik,
+           game: this.gameNameWithVariation,
+           ...(0, Qe.j)()
```

#### 42. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L740` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1537) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L740)

```diff
-       })
+       }
```

#### 43. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L744-L758` → after: `L1854-L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1854-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L1854-L2099) · [Before (L744-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L744-L758)

```diff
-       let {
-         direction: FQ,
-         disabled: wQ,
-         onTurn: LQ
-       } = QQ;
-       const {
-         t: qQ
-       } = (0, rQ.y)();
-       return (0, JQ.jsx)("div", {
-         className: CQ()("PlotsJournalArrow", FQ),
-         children: (0, JQ.jsx)(iQ.f, {
-           disabled: wQ,
-           ariaLabel: qQ("Forward" === FQ ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
-           onClick: () => {
-             LQ(FQ)
+       return Object.keys(Di.Metadata.getFields(kk))
+     }
+     const ni = xi(Ki);
+     for (const DD of fi.t)
+       if (!ni.includes(DD)) throw new Error(`Mob Schema is missing a networked property: "${DD}"`);
+     const Ui = xi((Xe = (0, Di.type)("string"), Be = (0, Di.type)("float32"), ce = (0, Di.type)("float32"), Te = (0, Di.type)("float32"), oe = (0, Di.type)("float32"), Ze = class extends mi {
+       constructor() {
+         super(...arguments), (0, ei.e)(this, "soundName", Oe, this), (0, ei.e)(this, "volume", ge, this), (0, ei.e)(this, "refDistance", Ge, this), (0, ei.e)(this, "maxHearDist", Ne, this), (0, ei.e)(this, "rate", Re, this)
+       }
+     }, Oe = (0, ii.b)(Ze.prototype, "soundName", [Xe], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: function() {
+         return ""
+       }
+ ... (230 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L760-L762` → after: `L2101-L2108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2101-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2101-L2108) · [Before (L760-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L760-L762)

```diff
-           children: (0, JQ.jsx)(SQ.c, {
-             name: "angle-up"
-           })
+           removeMeshComponent: () => {
+             "Person" !== rk && "BloxdBlock" !== rk || fk.lq(this.eId, "rigAnimation"), fk.lq(this.eId, fk.names.mesh), fk.lkk(this.eId, fk.names.meshAttachments) && fk.lq(this.eId, fk.names.meshAttachments), fk.lq(this.eId, "entityName"), fk.lq(this.eId, "autoRotate"), fk.lq(this … [truncated]
+           },
+           hideDist: null !== (ek = Pk.hideDist) && void 0 !== ek ? ek : 80,
+           movingHideDist: null !== (ik = Pk.hideDist) && void 0 !== ik ? ik : 120,
+           displayOutsideLoadedChunk: Pk.hideDist > 100,
+           immediatelyUpdate: !0,
+           Qr: "BloxdBlock" === rk ? Pk.blockName : rk
```

#### 45. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L764` → after: `L2110-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2110-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2110-L2142) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L764)

```diff
-       })
+       }
+       queueMeshRebuild() {
+         this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
+           this.meshRebuildQueued = !1, this.aU || this.updateHidingMeshMgr()
+         })))
+       }
+       getSpec() {
+         return (0, Yi.l)({
+           meshKind: this.meshKind,
+           meshOpts: this.meshOpts
+         })
+       }
+       updateOverlayColour(kk) {
+         var ek, ik;
+         if ("Person" !== this.meshKind) return;
+         let Dk = new Ci.e(0, 0, 0, 0);
+ ... (17 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L766-L770` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2144) · [Before (L766-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L766-L770)

```diff
-     var DF = wQ(36228),
-       kF = wQ(1887),
-       vF = wQ(1933);
-     const mF = "plotsStepChanged",
-       uF = "plotsPlotChanged";
+     var Ei = ik(38550);
```

#### 47. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L772-L773` → after: `L2146-L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2146-L2147) · [Before (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L772-L773)

```diff
-       constructor() {
-         this.step = ["none"], this.plot = ["none"]
+       constructor(kk, ek) {
+         this.eId = ek, this.Lx = void 0, this.schema = void 0, this.Lx = kk.Lx
```

#### 48. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L775-L776` → after: `L2149-L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2149-L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2149-L2150) · [Before (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L775-L776)

```diff
-       getStep() {
-         return this.step
+       initClient(kk) {
+         this.schema = kk, this.Lx.mY.add([kk.x, kk.y, kk.z], .1, .1, null, null, !1, !1, this.eId), this.Lx.mY.wq(this.eId, "smoothToServerPos"), Ei.d.add(this.eId, this.copyOpts())
```

#### 49. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L778-L779` → after: `L2152-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2152-L2153) · [Before (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L778-L779)

```diff
-       receiveStep(QQ) {
-         this.step = QQ, uQ.l.GA(mF, QQ, !0)
+       onChangeClient(kk) {
+         Si.j.includes(kk) && Ei.d.update(this.eId, this.copyOpts())
```

#### 50. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L781-L782` → after: `L2155-L2156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2155-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2155-L2156) · [Before (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L781-L782)

```diff
-       getPlot() {
-         return this.plot
+       disposeClient() {
+         Ei.d.remove(this.eId), this.Lx.mY.deleteEntity(this.eId)
```

#### 51. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L784-L785` → after: `L2158-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2158-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2158-L2172) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L784-L785)

```diff
-       receivePlot(QQ) {
-         this.plot = QQ, uQ.l.GA(uF, QQ, !0)
+       copyOpts() {
+         const {
+           soundName: kk,
+           volume: ek,
+           refDistance: ik,
+           maxHearDist: Dk,
+           rate: fk
+         } = this.schema;
+         return {
+           soundName: kk,
+           volume: ek,
+           refDistance: ik,
+           maxHearDist: Dk,
+           rate: fk
+         }
```

#### 52. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L788-L825` → after: `L2175-L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2175-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2175-L2310) · [Before (L788-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L788-L825)

```diff
-     const bF = "KeyJ";
- 
-     function YF(QQ) {
-       let {
-         hud: FQ,
-         journal: wQ
-       } = QQ;
-       const LQ = (0, OQ.i)(GQ, wQ.getPages()),
-         qQ = (0, OQ.i)(mF, FQ.getStep()),
-         {
-           isTouchScreen: oQ
-         } = (0, kQ.l)(["isTouchScreen"]),
-         {
-           t: uQ
-         } = (0, rQ.y)(),
-         HQ = null !== LQ && "none" === qQ[0];
- ... (22 more removed lines; see GitHub link above)
+     var Wi = ik(3642),
+       ti = ik(36348),
+       Xi = ik(6328),
+       Bi = ik(37380),
+       ci = ik(2704),
+       Ti = ik(37738),
+       oi = ik(8892),
+       Zi = ik(38064),
+       Oi = ik(37360),
+       gi = ik(2866);
+     class Gi {
+       constructor(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+           Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
+         this.rik = kk, this.Lx = ek, this.setupBudgetMs = ik, this.now = Dk, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new S … [truncated]
+           this.setUpQueuedEntities(!0)
+ ... (120 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L827-L881` → after: `L2312-L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2312-L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2312-L2329) · [Before (L827-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L827-L881)

```diff
-         })
-       }) : null
-     }
-     var xF = wQ(37944),
-       AF = wQ(37723),
-       tF = wQ(36554),
-       eF = wQ(9238),
-       MF = wQ(9258),
-       GF = wQ(37359);
-     const pF = new Map([
-         ["Aspen Wood Planks", [.78, .706, .502]],
-         ["Barkless Aspen Log", [.792, .718, .518]],
-         ["Barkless Pine Log", [.49, .353, .275]],
-         ["Blue Planks", [.247, .267, .588]],
-         ["Blue Wool", [.227, .267, .651]],
-         ["Glass", [.702, .902, .882]],
- ... (39 more removed lines; see GitHub link above)
+         })), this.addDetacher(kk, (() => {
+           for (const kk of Sk.values()) kk();
+           Sk.clear()
+         }))
+       }
+       setupScalarField(kk, ek, ik, Dk) {
+         this.onEntityFieldChange(kk, ek, Dk, ek[Dk]);
+         const fk = this.listenForFutureChanges(ik, Dk, (ik => {
+           this.onEntityFieldChange(kk, ek, Dk, ik)
+         }));
+         this.addDetacher(kk, fk)
+       }
+       addDetacher(kk, ek) {
+         let ik = this.detachers.get(kk);
+         ik || (ik = [], this.detachers.set(kk, ik)), ik.push(ek)
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L883-L894` → after: `L2331-L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2331-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2331-L2481) · [Before (L883-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L883-L894)

```diff
-           const {
-             id: QQ,
-             meta: FQ,
-             altActionable: vQ,
-             canBePlacedOver: YQ
-           } = IQ.h[bQ];
-           wQ[QQ] = mQ(RF(bQ));
-           const xQ = FQ.stairsCorner;
-           if (null === xQ) LQ[QQ] = wQ[QQ];
-           else {
-             const wQ = xQ.endsWith("Right");
-             LQ[QQ] = mQ(`${FQ.rootName}|rot${wQ?FQ.rot%4+1:FQ.rot}|${FQ.halfblockPlacement}|${xQ.replace("Right","Left")}`)
+           ik()
+         }
+         this.detachers.delete(kk)
+       }
+       listenForFutureChanges(kk, ek, ik) {
+         return kk.listen(ek, ik, !1)
+       }
+       onEntityFieldChange(kk, ek, ik, Dk) {
+         switch (ik) {
+           case "ridingVehicleEId": {
+             this.promoteIfQueued(Dk);
+             const ek = this.Lx.mY.eek((0, ti.b)(kk));
+             ek && (ek.ridingVehicleEId = Dk);
+             break
+           }
+           case "armour":
+ ... (135 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L896-L900` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2483) · [Before (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L896-L900)

```diff
-           qQ[QQ] = YQ ? 1 : 0, oQ[QQ] = vQ || null !== FQ.open || bQ in GF.d || uQ.has(FQ.rootName) || void 0 !== (0, AF.e)(FQ.rootName) ? 1 : 0;
-           const {
-             rootName: AQ
-           } = FQ;
-           DQ[QQ] = null !== FQ.open || AF.b.includes(AQ) || AQ.includes("Bookshelf") || AQ.includes("Mailbox") ? 1 : 0, kQ[QQ] = null !== (HQ = (0, xF.g)(QQ)) && void 0 !== HQ ? HQ : AQ
+           return
```

#### 56. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L902-L908` → after: `L2485-L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2485-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2485-L2497) · [Before (L902-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L902-L908)

```diff
-         return {
-           kinds: wQ,
-           shapes: LQ,
-           empty: qQ,
-           inUse: oQ,
-           ownAltActionMessage: DQ,
-           placingItems: kQ
+         if (!this.Lx.mY.lkk(kk, "itemState")) return;
+         const Dk = this.Lx.mY.getState(kk, "itemState");
+         "amount" === ek && ik !== Dk.amount && (Dk.creationTime = Date.now()), Dk[ek] = "attributes" === ek ? JSON.parse(ik) : ik
+       }
+       dispose() {
+         if (!this.aU) {
+           this.aU = !0, this.Lx.off("beforeInputs", this.onFrame), this.Lx.off("Px", this.Iy), this.queuedSetups.clear(), this.promotedSetups.clear();
+           for (const kk of this.deferredSetups.values()) Je.j.unsubscribe(kk);
+           this.deferredSetups.clear(), this.Lx.mY.lq(this.Lx.Qq, this.Lx.mY.names.fL);
+           for (const kk in this.allItems) this.Lx.mY.deleteEntity(kk), delete this.allItems[kk];
+           for (const kk of [...this.detachers.keys()]) this.detach(kk);
+           (0, ki.c)(this.Lx).clear();
+           for (const kk of (0, ci.d)().client.iterateEntityIds())(0, ci.d)().client.disposeEntity(kk)
```

#### 57. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L910-L934` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2499) · [Before (L910-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L910-L934)

```diff
-       }(), SF
-     }
- 
-     function WF() {
-       return Object.keys(IQ.h).filter((QQ => IQ.h[QQ].name === QQ))
-     }
- 
-     function RF(QQ) {
-       var FQ;
-       const wQ = IQ.h[QQ],
-         {
-           rootName: LQ,
-           rot: qQ
-         } = wQ.meta,
-         [, ...oQ] = (null !== (FQ = wQ.rootMetaDesc) && void 0 !== FQ ? FQ : QQ).split("|"),
-         DQ = oQ.filter((QQ => !("meta" === QQ || CF.test(QQ) || (0, MF.C)(wQ) && /^[nesw]+$/.test(QQ) || eF.i.includes(LQ) && /^[lrud]+$/.test(QQ) || PQ.G.includes(LQ) && /^(left|right)$/.test(QQ))));
- ... (9 more removed lines; see GitHub link above)
+       }
```

#### 58. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L938` → after: `L2504-L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2504-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2504-L2508) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L938)

```diff
-       return 1 === iF().empty[QQ]
+       if ("string" !== typeof kk) return;
+       const ek = kk.indexOf("|"),
+         ik = -1 === ek ? kk : kk.slice(0, ek),
+         Dk = iD();
+       return Object.hasOwn(Dk, ik) ? Dk[ik] : void 0
```

#### 59. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L941-L942` → after: `L2518-L2692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2518-L2692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2518-L2692) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L941-L942)

```diff
-     function rF(QQ) {
-       return iF().placingItems[QQ]
+     function iD() {
+       return null !== eD || (eD = {
+         ...Object.fromEntries(Si.n.map((kk => {
+           const {
+             Qr: ek
+           } = (0, Ti.b)(kk);
+           return [kk, ek]
+         }))),
+         Pebble: Hi.d,
+         Snowball: Hi.d,
+         "Snowball Launcher": Hi.d,
+         "Reinforced Pebble": Hi.d,
+         Bullet: Hi.d,
+         "Reinforced Ball": Hi.d,
+         Ball: Hi.d,
+         Mango: Hi.d,
+ ... (159 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L944-L978` → after: `L2694-L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2694-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2694-L2725) · [Before (L944-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L944-L978)

```diff
- 
-     function IF(QQ) {
-       return pF.get(IQ.h[QQ].meta.rootName)
-     }
-     var UF = wQ(9231),
-       NF = wQ(9252);
-     const TF = [0, 0, 0, 1, 1, 1],
-       KF = (0, UF.b)([
-         [2, 0, 2, 6, 6, 6]
-       ]),
-       zF = (0, UF.b)([
-         [3, 0, 3, 5, 5, 5]
-       ]),
-       lF = (0, UF.b)([
-         [3, 3, 3, 5, 8, 5]
-       ]),
- ... (19 more removed lines; see GitHub link above)
+   },
+   38595: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk,
+       e: () => bk
+     });
+     var Dk = ik(594),
+       fk = ik(37318);
+     const Sk = 4e4;
+     class bk {
+       constructor() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
+         this.now = kk, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
+       }
+       noteEdit(kk, ek, ik) {
+         const Sk = (0, Dk.K)(kk),
+ ... (16 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L982-L1007` → after: `L2751-L2753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2751-L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2751-L2753) · [Before (L982-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L982-L1007)

```diff
-       const oQ = Math.hypot(...FQ.dir);
-       if (!Number.isFinite(oQ) || 0 === oQ) return -1;
-       const {
-         from: DQ,
-         reach: kQ,
-         solid: vQ
-       } = FQ, mQ = [FQ.dir[0] / oQ, FQ.dir[1] / oQ, FQ.dir[2] / oQ], uQ = null === vQ ? kQ : Math.min(kQ, function(QQ, FQ, wQ) {
-         const LQ = JF(QQ, FQ, wQ);
-         if (LQ !== 1 / 0) return LQ;
-         return (wQ[0] + .5 - QQ[0]) * FQ[0] + (wQ[1] + .5 - QQ[1]) * FQ[1] + (wQ[2] + .5 - QQ[2]) * FQ[2]
-       }(DQ, mQ, vQ) + .75);
-       let HQ = -1,
-         bQ = 1 / 0,
-         YQ = 1 / 0;
-       for (let xQ = 0; xQ < QQ.length; xQ += 4) {
-         const FQ = [QQ[xQ], QQ[xQ + 1], QQ[xQ + 2]],
- ... (10 more removed lines; see GitHub link above)
+       const Sk = "string" === typeof kk && nk.includes(kk) ? kk : "other";
+       let bk = "n";
+       return "string" === typeof ek ? bk = Hk.test(ek) ? `k${ek}` : "n" : "number" === typeof ik && Number.isInteger(ik) && ik >= 0 && ik <= 15 && (bk = `b${ik}`), `${xk}${Sk}:${bk}:${Dk?1:0}${fk?1:0}`
```

#### 62. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1010-L1049` → after: `L2759-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2759-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2759-L2767) · [Before (L1010-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1010-L1049)

```diff
-     function JF(QQ, FQ, wQ) {
-       let LQ = 0,
-         qQ = 1 / 0;
-       for (let oQ = 0; oQ < 3; oQ++) {
-         const DQ = wQ[oQ] - QQ[oQ];
-         if (0 === FQ[oQ]) {
-           if (DQ > 0 || DQ + 1 < 0) return 1 / 0;
-           continue
-         }
-         const kQ = DQ / FQ[oQ],
-           vQ = (DQ + 1) / FQ[oQ];
-         LQ = Math.max(LQ, Math.min(kQ, vQ)), qQ = Math.min(qQ, Math.max(kQ, vQ))
-       }
-       return LQ <= qQ ? LQ : 1 / 0
-     }
-     var EF = wQ(37593),
- ... (24 more removed lines; see GitHub link above)
+     function Yk(kk) {
+       return yk ??= function(kk) {
+         try {
+           const ek = kk.target,
+             ik = ek instanceof Element && ek !== document.body && ek !== document.documentElement && !(0, lk.r)(ek) && !ek.closest("#root"),
+             Dk = kk;
+           return wk(kk.type, Dk.code, Dk.button, (0, pk.e)(ek), ik)
+         } catch {
+           return wk(null, null, null, !1, !1)
```

#### 63. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1051-L1066` → after: `L2769-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2769-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2769-L2779) · [Before (L1051-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1051-L1066)

```diff
-         this.meshes = null, this.shown = null
-       }
-       build(QQ, FQ, wQ) {
-         const LQ = [],
-           qQ = [];
-         for (const [oQ, DQ, kQ, vQ, mQ, uQ] of QQ)(0, nF.e)(LQ, qQ, [vQ + .5, mQ + .5, uQ + .5], [oQ, DQ, kQ]);
-         return this.api.createGameMesh({
-           positions: LQ,
-           indices: qQ
-         }, {
-           rgb: gF,
-           alpha: FQ,
-           onTop: !0
-         }, wQ)
-       }
-     }
+       }(kk), yk
+     }
+     var Lk = ik(1218),
+       Ck = ik(302),
+       Ak = ik(26),
+       jk = ik(1911),
+       sk = ik(99),
+       dk = ik(38),
+       Vk = ik(1931),
+       Fk = ik(1850),
+       uk = ik(2907);
```

#### 64. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1069-L1091` → after: `L2782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2782) · [Before (L1069-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1069-L1091)

```diff
-         this.api = QQ, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
-       }
-       watch(QQ) {
-         const FQ = fF.e.tx;
-         this.chunks = [];
-         for (let wQ = 0; wQ < QQ.length; wQ += 3) {
-           const LQ = Math.floor(QQ[wQ] / FQ),
-             qQ = Math.floor(QQ[wQ + 1] / FQ),
-             oQ = Math.floor(QQ[wQ + 2] / FQ);
-           this.watches(LQ, qQ, oQ) || this.chunks.push(LQ, qQ, oQ)
-         }
-         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
-       }
-       changed() {
-         const QQ = performance.now();
-         if (QQ - this.lastCheckMs < 100) return !1;
- ... (7 more removed lines; see GitHub link above)
+         this.storeForMs = kk, this.clicks = new uk.b
```

#### 65. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1093-L1096` → after: `L2784-L2787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2784-L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2784-L2787) · [Before (L1093-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1093-L1096)

```diff
-       watches(QQ, FQ, wQ) {
-         for (let LQ = 0; LQ < this.chunks.length; LQ += 3)
-           if (this.chunks[LQ] === QQ && this.chunks[LQ + 1] === FQ && this.chunks[LQ + 2] === wQ) return !0;
-         return !1
+       click() {
+         this.clicks.enqueue(Date.now());
+         const kk = Date.now() - this.storeForMs;
+         for (; this.clicks.size > 0 && this.clicks.peek() < kk;) this.clicks.dequeue()
```

#### 66. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1098-L1124` → after: `L2789-L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2789-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2789-L2793) · [Before (L1098-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1098-L1124)

```diff
-     }
-     const yF = .35,
-       BF = {
-         size: .9,
-         alpha: .35,
-         crossed: !1
-       },
-       dF = {
-         size: 1.04,
-         alpha: .45,
-         crossed: !0
-       },
-       Qw = [.95, .2, .15];
-     class Fw {
-       constructor() {
-         this.groups = []
- ... (11 more removed lines; see GitHub link above)
+       getNumClicksInMs(kk) {
+         let ek = 0;
+         return this.clicks.forEach((ik => {
+           ik > Date.now() - kk && ek++
+         })), ek
```

#### 67. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1126-L1127` → after: `L2795-L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2795-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2795-L2803) · [Before (L1126-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1126-L1127)

```diff
-       toArray() {
-         return this.groups
+       getMaxClickSeparationInMs(kk) {
+         if (0 === this.clicks.size) return this.storeForMs;
+         let ek = 0,
+           ik = Date.now() - kk;
+         this.clicks.forEach((Dk => {
+           Dk < Date.now() - kk || (ek = Math.max(ek, Math.abs(Dk - ik)), ik = Dk)
+         }));
+         const Dk = Math.abs(Date.now() - ik);
+         return Math.max(ek, Dk)
```

#### 68. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1132` → after: `L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2808) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1132)

```diff
-         this.api = QQ, this.shown = []
+         this.storeForMs = kk, this.clickDownDurations = new uk.b
```

#### 69. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1134-L1182` → after: `L2810-L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2810-L2816) · [Before (L1134-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1134-L1182)

```diff
-       show(QQ) {
-         const FQ = [];
-         for (const wQ of QQ) {
-           const QQ = this.shown.findIndex((QQ => {
-             let {
-               group: FQ
-             } = QQ;
-             return qw(FQ, wQ.rgb, wQ.look) && ow(FQ, wQ)
-           })); - 1 === QQ ? FQ.push(this.build(wQ)) : (FQ.push(this.shown[QQ]), this.shown.splice(QQ, 1))
-         }
-         this.dispose(), this.shown = FQ
-       }
-       dispose() {
-         for (const {
-             meshes: QQ
-           }
- ... (33 more removed lines; see GitHub link above)
+       registerClickDownDuration(kk) {
+         this.clickDownDurations.enqueue({
+           dur: kk,
+           atTime: Date.now()
+         });
+         const ek = Date.now() - this.storeForMs;
+         for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ek;) this.clickDownDurations.dequeue()
```

#### 70. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1184` → after: `L2818-L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2818-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2818-L2862) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1184)

```diff
-     }
+       clickDownDurationsCheck(kk) {
+         if (kk > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
+         let ek = 0,
+           ik = 0;
+         return this.clickDownDurations.forEach((Dk => {
+           Dk.atTime > Date.now() - kk && (ek++, ik = Math.max(ik, Dk.dur))
+         })), `${ek}:${ik}`
+       }
+     }
+     var zk = ik(36018),
+       Qk = ik(38662),
+       vk = ik(22),
+       Ek = ik(2704),
+       hk = ik(1302),
+       ak = ik(38610),
+       Wk = ik(4391),
+ ... (29 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1186-L1192` → after: `L2864-L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2864-L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2864-L2866) · [Before (L1186-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1186-L1192)

```diff
-     function Lw(QQ, FQ, wQ, LQ, qQ, oQ) {
-       for (let DQ = 0; DQ < LQ.length; DQ += 6) {
-         const kQ = [0, 0, 0],
-           vQ = [0, 0, 0];
-         for (let QQ = 0; QQ < 3; QQ++) kQ[QQ] = wQ[QQ] + ((LQ[DQ + QQ] + LQ[DQ + QQ + 3]) / 2 - .5) * qQ, vQ[QQ] = (LQ[DQ + QQ + 3] - LQ[DQ + QQ]) * qQ;
-         (0, nF.b)(QQ, FQ, kQ, vQ, oQ)
-       }
+     function Me() {
+       var kk, ek;
+       return !(null === (kk = (0, Ek.d)().client) || void 0 === kk || null === (ek = kk.freeCameraController) || void 0 === ek || !ek.movesFly())
```

#### 72. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1195-L1197` → after: `L2869-L2895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2869-L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2869-L2895) · [Before (L1195-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1195-L1197)

```diff
-     function qw(QQ, FQ, wQ) {
-       return QQ.rgb[0] === FQ[0] && QQ.rgb[1] === FQ[1] && QQ.rgb[2] === FQ[2] && QQ.look === wQ
-     }
+     function Ke(kk) {
+       const ek = kk.on.bind(kk);
+       kk.on = (kk, ik) => {
+         Vk.D.has(kk) ? ek(kk, ik) : ek(kk, (ek => {
+           var Dk;
+           return null !== (Dk = (0, Ek.d)().client) && void 0 !== Dk && Dk.isReplayMode() ? function(kk) {
+             return kk in me
+           }(kk) && Me() ? ik(ek) : void 0 : ik(ek)
+         }))
+       }
+     }
+     const xe = 5e3,
+       ne = 1;
+     let Ue, He = ne,
+       we = 0;
+     const le = !0;
+ ... (11 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1199-L1203` → after: `L2897-L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2897-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2897-L2898) · [Before (L1199-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1199-L1203)

```diff
-     function ow(QQ, FQ) {
-       if (QQ.cells.length !== FQ.cells.length) return !1;
-       for (let wQ = 0; wQ < QQ.cells.length; wQ++)
-         if (QQ.cells[wQ] !== FQ.cells[wQ]) return !1;
-       return QQ.boxes.every(((QQ, wQ) => QQ === FQ.boxes[wQ]))
+     function ve(...kk) {
+       return kk[Qe[13]] = Qe[2], typeof Ve !== Qe[18] && Ve ? (new Ve).decode(new Fe(kk[Qe[1]])) : typeof ue !== Qe[18] && ue ? ue.from(kk[Qe[1]]).toString("utf-8") : ze(kk[Qe[1]])
```

#### 74. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1206-L1207` → after: `L2901-L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2901-L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2901-L2904) · [Before (L1206-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1206-L1207)

```diff
-     function Dw(QQ, FQ) {
-       return QQ.getClientOption(FQ, "blockReach") + 1
+     function Ee() {}
+ 
+     function he() {
+       he = function() {}
```

#### 75. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1209-L1211` → after: `L2906-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2906-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2906-L2909) · [Before (L1209-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1209-L1211)

```diff
-     class kw {
-       constructor(QQ, FQ, wQ) {
-         this.api = QQ, this.localPlayerId = FQ, this.pickNext = wQ, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
+ 
+     function ae(kk) {
+       function ek() {
+         return kk.mY.jek(kk.Qq)
```

#### 76. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1213-L1215` → after: `L2911-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2911-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2911-L2925) · [Before (L1213-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1213-L1215)

```diff
-       look(QQ) {
-         const [FQ, , wQ] = QQ.cameraDirection, LQ = Math.hypot(FQ, wQ);
-         LQ > .001 && (this.heading = [FQ / LQ, wQ / LQ])
+       Ke(kk.inputs.down), Ke(kk.inputs.up);
+       for (const Dk of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
+         const ek = (ek, ik) => {
+           var fk, Sk;
+           if (Me()) {
+             var bk;
+             const fk = me[Dk];
+             var rk, Pk;
+             if (fk) null === (rk = (0, Ek.d)().client) || void 0 === rk || null === (Pk = rk.freeCameraController) || void 0 === Pk || Pk.handlefreeCamKeyPress(fk, ek, ik);
+             return void(ik || null !== (bk = (0, Ek.d)().client) && void 0 !== bk && bk.isReplayMode() || (kk.mY.Iek()[Dk] = !1))
+           }
+           if (null !== (fk = (0, Ek.d)().client) && void 0 !== fk && null !== (Sk = fk.freeCameraController) && void 0 !== Sk && Sk.isKeyPressOverriden(ek)) return;
+           kk.mY.Iek()[Dk] = ik
+         };
+         kk.inputs.down.on(Dk, (kk => ek(kk, !0))), kk.inputs.up.on(Dk, (kk => ek(kk, !1)))
```

#### 77. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1217-L1230` → after: `L2927-L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2927-L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L2927-L3088) · [Before (L1217-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1217-L1230)

```diff
-       tapped(QQ, FQ, wQ) {
-         const LQ = Dw(this.api, this.localPlayerId),
-           {
-             origin: qQ,
-             direction: oQ
-           } = this.api.getActionRay(),
-           DQ = [...qQ],
-           kQ = [
-             [DQ, [DQ[0] + oQ[0] * LQ, DQ[1] + oQ[1] * LQ, DQ[2] + oQ[2] * LQ]]
-           ];
-         null !== QQ && kQ.push([DQ, (0, XF.d)(QQ)]), this.tap = {
-           lines: kQ,
-           next: FQ,
-           ms: wQ
+       kk.inputs.down.on("crouch", (() => {
+         if (Me()) return;
+         if (!kk.bY.canCrouch) return;
+         const ek = kk.mY.Iek();
+         vk.b.get("clientEscMenuOptions").crouchIsToggle && (ek.crouchToggled = !ek.crouchToggled && !ek.padSneakToggled), ek.padSneakToggled = !1
+       }));
+       const ik = () => {
+         const kk = ek();
+         kk.isGun() && kk.inaccuracyCalculator.jump()
+       };
+       kk.inputs.down.on("jump", (kk => {
+         Me() || (ik(), Le(kk))
+       }));
+       for (const Dk of Vk.l) kk.inputs.down.on(Dk, (kk => {
+         var ek, ik;
+         null !== (ek = (0, Ek.d)().client) && void 0 !== ek && null !== (ik = ek.freeCameraController) && void 0 !== ik && ik.handlefreeCamKeyPress(Dk, kk, !0) && (kk.preventDefault(), kk.stopPropagation())
+ ... (146 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1233-L1278` → after: `L3100-L3151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3100-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3100-L3151) · [Before (L1233-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1233-L1278)

```diff
-       filled(QQ, FQ) {
-         this.tap = null, this.turnFrom(QQ, FQ), this.retry(FQ)
-       }
-       arrived(QQ, FQ) {
-         const {
-           tap: wQ
-         } = this;
-         if (null === wQ || FQ - wQ.ms > 1500) return null;
-         const LQ = (0, XF.d)(QQ);
-         return (0, XF.g)(wQ.next, QQ) || wQ.lines.some((QQ => {
-           let [FQ, wQ] = QQ;
-           return function(QQ, FQ, wQ) {
-             const LQ = [wQ[0] - FQ[0], wQ[1] - FQ[1], wQ[2] - FQ[2]],
-               qQ = [QQ[0] - FQ[0], QQ[1] - FQ[1], QQ[2] - FQ[2]],
-               oQ = LQ[0] ** 2 + LQ[1] ** 2 + LQ[2] ** 2,
-               DQ = 0 === oQ ? 0 : Math.min(1, Math.max(0, (qQ[0] * LQ[0] + qQ[1] * LQ[1] + qQ[2] * LQ[2]) / oQ));
- ... (30 more removed lines; see GitHub link above)
+       ye = {
+         primaryFireDown: Zk((() => {
+           const kk = Hk.press();
+           return Hk.owns(kk) && (xk = Date.now(), Uk(!1, !1)), kk
+         })),
+         primaryFireUp: Zk((kk => {
+           Hk.release(kk)
+         })),
+         altFireDown: Zk((() => {
+           const kk = pk.press();
+           return pk.owns(kk) && lk(), kk
+         })),
+         altFireUp: Zk((kk => {
+           pk.release(kk)
+         })),
+         jumpDown: Zk(ik),
+ ... (36 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1280-L1282` → after: `L3153-L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3153-L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3153-L3172) · [Before (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1280-L1282)

```diff
-         this.api.turnCamera(oQ, FQ.turnMs), this.turning = {
-           to: wQ,
-           endMs: QQ + FQ.turnMs
+         kk.inputs.wT.dx = 0, kk.inputs.wT.dy = 0
+       }));
+       let Ye = 0;
+       const Ae = [0, 0, 0],
+         je = [0, 0, 0],
+         se = {
+           base: Ae,
+           max: je
+         },
+         de = kk => {
+           const ek = Gk.g.droppedBlockSize / 2;
+           return [0, 1, 2].every((ik => kk[ik] >= Ae[ik] - ek && kk[ik] <= je[ik] + ek))
+         };
+       kk.on("Px", (function(ek) {
+         Ak.j.tm("noaTick", ek);
+         const ik = (0, Ek.d)().client;
+ ... (4 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1284-L1295` → after: `L3174-L3242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3174-L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3174-L3242) · [Before (L1284-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1284-L1295)

```diff
-       }
-     }
-     class vw {
-       constructor(QQ, FQ, wQ) {
-         this.api = QQ, this.localPlayerId = FQ, this.juice = wQ, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
-       }
-       bx(QQ) {
-         const FQ = "active" === QQ[0] ? `${QQ[1]}|${QQ[3]}|${QQ[4]}|${QQ[5]}|${QQ[6]}` : "";
-         if ("active" !== QQ[0]) "built" === QQ[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
-         else {
-           const [, , , , , , , wQ, LQ, qQ, oQ] = QQ;
-           FQ !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = wQ) : wQ === this.layerY ? this.burstUnlisted(LQ) : wQ > this.layerY && this.finishLayer(wQ), this.layerY = wQ, this.layerCells.has(wQ) || this.layerCells.set(wQ, LQ.filter(uw)), this.ghostCells = LQ, th … [truncated]
+         if (!kk.mY.Cek(kk.Qq).isAlive) return;
+         Date.now() - Ye > 9e3 && (! function() {
+           const kk = (0, Ek.e)();
+           "number" === typeof kk.bY.speedMultiplier && "number" === typeof kk.bY.jumpAmount && (0, Dk.sendColyMessage)(Mk.mi, {
+             Er: (0, gk.c)(kk.bY.speedMultiplier),
+             hr: (0, gk.b)(kk.bY.jumpAmount),
+             ar: (0, gk.c)(kk.bY.crouchingSpeed),
+             Wr: (0, gk.c)(kk.bY.walkingSpeed),
+             tr: (0, gk.c)(kk.bY.runningSpeed),
+             Xr: (0, gk.b)(kk.o9),
+             Br: kk.mY.vkk(kk.Qq).jumpForce,
+             Tr: kk.mY.ZZ(1).width,
+             Zr: kk.mY.ZZ(1).height,
+             Or: kk.mY.jW(1).Or
+           }, !0)
+         }(), Ye = Date.now());
+ ... (53 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1297-L1308` → after: `L3244-L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3244-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3244-L3248) · [Before (L1297-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1297-L1308)

```diff
-         FQ !== this.blueprint && (this.blueprint = FQ, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((QQ => this.api.blockNameToBlockId(QQ))), this.chunkWatch.watch([...this.ghostCells.filter(uw), . … [truncated]
-       }
-       finishLayer(QQ) {
-         this.burstUnlisted([]), QQ > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = QQ)
-       }
-       fH() {
-         if (this.chunkWatch.changed()) return void this.refresh();
-         const QQ = performance.now();
-         let FQ = !1;
-         for (const [qQ, oQ] of this.foreseen) {
-           var wQ;
-           if (QQ - oQ > 1e3) this.foreseen.delete(qQ), FQ = !0, (null === (wQ = this.lastFilled) || void 0 === wQ ? void 0 : wQ.join()) === qQ && (this.lastFilled = this.lastSeenFilled)
+         if (!kk.mY.gkk(kk.Qq)) return;
+         const Sk = kk.inputs.wT.tkk;
+         if (0 !== Sk) {
+           const ek = Sk > 0 ? 1 : -1;
+           kk.inputs.state["mid-fire"] || kk.inputs.state.Alt || !kk.bY.useInventory ? (kk.inputs.state["mid-fire"] && Ak.j.tm("requestEmoteWheelClose"), (0, Ek.d)().client.cameraController.handleScrollZoom(ek)) : Ak.j.tm("ScrollInventorySlot", ek)
```

#### 82. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1310-L1351` → after: `L3250-L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3250-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3250-L3260) · [Before (L1310-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1310-L1351)

```diff
-         const LQ = mw(this.api.getPositionView(this.localPlayerId));
-         (FQ || LQ.some(((QQ, FQ) => QQ !== this.playerCells[FQ]))) && this.showNext()
-       }
-       dispose() {
-         this.meshes.dispose(), this.outline.dispose()
-       }
-       burstUnlisted(QQ) {
-         const FQ = new Set;
-         for (let qQ = 0; qQ < QQ.length; qQ += 4) FQ.add(`${QQ[qQ]},${QQ[qQ+1]},${QQ[qQ+2]}`);
-         const wQ = [],
-           {
-             ghostCells: LQ
-           } = this;
-         for (let qQ = 0; qQ < LQ.length; qQ += 4) {
-           const QQ = `${LQ[qQ]},${LQ[qQ+1]},${LQ[qQ+2]}`;
-           !FQ.has(QQ) && this.open.delete(QQ) && wQ.push(this.filledCell(qQ))
- ... (26 more removed lines; see GitHub link above)
+       })), jk.c.subscribe("droppedItemScale", (kk => {
+         He = "number" === typeof kk && isFinite(kk) ? kk : ne
+       }))
+     }
+ 
+     function We() {
+       const kk = (0, Ek.e)();
+       if (kk)
+         for (const ek in Vk.u) {
+           kk.inputs.unbind(ek);
+           for (const ik of Vk.u[ek]) kk.inputs.bind(ek, ik)
```

#### 83. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1353-L1362` → after: `L3262-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3262-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3262-L3286) · [Before (L1353-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1353-L1362)

```diff
-         const LQ = this.isHolding(FQ);
-         for (const qQ of wQ) {
-           if (this.lastFilled = qQ, LQ && this.pressFilled) {
-             this.turn.filled(qQ, FQ);
-             continue
-           }
-           const QQ = this.turn.arrived(qQ, FQ);
-           if (null !== QQ) {
-             this.pressFilled = LQ;
-             for (const [FQ, wQ] of this.foreseen) wQ <= QQ && this.foreseen.delete(FQ)
+     }
+     he(je = {}, se = ["_|$p6~%{]W", "bc[5I#q0<n`(n/(|8(&(|ZJgWN(Il`k|?BS(HX94.Lv:N6C=z^*", "DgH^oc2mGZO5QNL,F+m]o~+1e$8!lcFjv0", "kxTXhx[1[W*X?!j=", "{!6vL<fnBopj5&#sBVCs~Eu", 'TI>L<M|"~DZi>hzv!t^JOMPnjZD625', 'rxm(XNtfzH<+G&4fwNF#e~Y{!IEJ=w"jIN}="_v;to', "W9zGD#zv#n$!Cch7qBy^j$= … [truncated]
+         he(kk[Qe[13]] = Qe[1], kk[Qe[5]] = [function() {
+           return globalThis
+         }, function() {
+           return global
+         }, function() {
+           return window
+         }, function() {
+           return new Function("return this")()
+         }], kk[-Qe[14]] = Qe[19], kk[Qe[15]] = []);
+         try {
+           he(kk[-Qe[14]] = Object, kk[Qe[15]][Qe[25]]("".__proto__.constructor.name))
+         } catch (se) {}
+         kk: for (kk[Qe[16]] = Qe[1]; kk[Qe[16]] < kk[Qe[5]][Qe[13]]; kk[Qe[16]]++) try {
+           for (kk[-Qe[14]] = kk[Qe[5]][kk[Qe[16]]](), kk[Qe[17]] = Qe[1]; kk[Qe[17]] < kk[Qe[15]][Qe[13]]; kk[Qe[17]]++)
+ ... (9 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1365-L1446` → after: `L3329-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3329-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3329-L3460) · [Before (L1365-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1365-L1446)

```diff
-         this.juice.filled(QQ)
-       }
-       showNext() {
-         var QQ;
-         const FQ = this.api.getPositionView(this.localPlayerId);
-         this.playerCells.splice(0, 1 / 0, ...mw(FQ));
-         const wQ = this.lastFilled;
-         this.nextCell = this.pickNext(null === wQ ? [FQ[0], FQ[1] + 1, FQ[2]] : (0, XF.d)(wQ), (() => !1)), this.outline.show(null !== (QQ = this.aimed) && void 0 !== QQ ? QQ : this.nextCell)
-       }
-       pickNext(QQ, FQ) {
-         const wQ = this.api.getPositionView(this.localPlayerId),
-           LQ = [wQ[0], wQ[1] + fF.e.iG * fF.e.playerEyeToHeightRatio, wQ[2]],
-           qQ = Dw(this.api, this.localPlayerId),
-           {
-             nextCells: oQ
-           } = this,
- ... (66 more removed lines; see GitHub link above)
+         if (ek(Qe[34]), Qe[31], (arguments[ek(92)] > Qe[2] && arguments[Qe[2]] !== Qe[19] ? arguments[Qe[2]] : Qe[41]) && (Qe[1], ke[Qe[31]])(kk)) return;
+         const ik = window[ek(93)];
+         if (typeof ik !== ek(94) + "on" || kk instanceof ik || (Qe[1], Zk.B)(kk)) {
+           function Dk(...kk) {
+             for (he(kk[Qe[13]] = Qe[2], kk[Qe[2]] = '#AP:rYdf0QBDV`/Nv%jGx|hEZs!W{mlk<[gcI^1$L@"2FJ=5~8K*U(eH&OX,wpTu+a>6Cyo;z49R73)}SqiMt.]b?n_', kk[Qe[42]] = "" + (kk[Qe[1]] || ""), kk[Qe[16]] = kk[Qe[42]].length, kk[Qe[44]] = [], kk[Qe[31]] = Qe[1], kk[-Qe[32]] = Qe[1], kk[-Qe … [truncated]
+               if (kk[Qe[6]] = kk[Qe[2]].indexOf(kk[Qe[42]][kk[Qe[11]]]), kk[Qe[6]] !== -Qe[2])
+                 if (kk[-Qe[43]] < Qe[1]) kk[-Qe[43]] = kk[Qe[6]];
+                 else {
+                   he(kk[-Qe[43]] += kk[Qe[6]] * Qe[34], kk[Qe[31]] |= kk[-Qe[43]] << kk[-Qe[32]], kk[-Qe[32]] += (kk[-Qe[43]] & Qe[36]) > Qe[37] ? Qe[38] : Qe[39]);
+                   do {
+                     he(kk[Qe[44]].push(kk[Qe[31]] & Qe[12]), kk[Qe[31]] >>= Qe[11], kk[-Qe[32]] -= Qe[11])
+                   } while (kk[-Qe[32]] > Qe[23]);
+                   kk[-Qe[43]] = -Qe[2]
+                 } return kk[-Qe[43]] > -Qe[2] && kk[Qe[44]].push((kk[Qe[31]] | kk[-Qe[43]] << kk[-Qe[32]]) & Qe[12]), ve(kk[Qe[44]])
+           }
+ 
+ ... (116 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1450-L1452` → after: `L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3464) · [Before (L1450-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1450-L1452)

```diff
-       let [FQ, wQ, LQ] = QQ;
-       const qQ = fF.e.pG / 2;
-       return [Math.floor(FQ), Math.floor(wQ), Math.floor(LQ), Math.floor(FQ - qQ), Math.floor(FQ + qQ), Math.floor(wQ + fF.e.iG), Math.floor(LQ - qQ), Math.floor(LQ + qQ)]
+       fk = kk, kk ? Dk.h.setMultiplierType("emoteWheel", 0) : Dk.h.removeMultiplier("emoteWheel")
```

#### 86. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1456` → after: `L3483-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3483-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3483-L3486) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1456)

```diff
-       return FQ % 4 !== 3
+       return {
+         replayedClipName: kk,
+         replayedClipAgeSeconds: ek
+       }
```

#### 87. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1460-L1464` → after: `L3490-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3490-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3490-L3537) · [Before (L1460-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1460-L1464)

```diff
-       if (!QQ.isBlockInLoadedChunk(FQ, LQ - 6, wQ) || !QQ.isBlockInLoadedChunk(FQ, LQ + 6 + qQ, wQ) || !QQ.canModifyBlockAt(FQ, LQ, wQ)) return NaN;
-       let oQ = LQ - 1;
-       if (0 !== QQ.getBlockId(FQ, oQ, wQ)) {
-         for (; oQ < LQ + 6 && 0 !== QQ.getBlockId(FQ, oQ + 1, wQ);) oQ++;
-         return oQ
+       const bk = function(kk) {
+           if ("object" !== typeof kk || null === kk) return null;
+           const {
+             replayedClipName: ek,
+             replayedClipAgeSeconds: ik
+           } = kk;
+           return "string" === typeof ek && "number" === typeof ik ? {
+             Fi: ek,
+             ui: ik
+           } : null
+         }(ik),
+         rk = null === bk ? ik : null,
+         {
+           Fi: Pk = null,
+           ui: mk = 0
+         } = null !== bk && void 0 !== bk ? bk : {};
+ ... (32 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1466-L1468` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3539) · [Before (L1466-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1466-L1468)

```diff
-       for (; oQ > LQ - 6;)
-         if (oQ--, 0 !== QQ.getBlockId(FQ, oQ, wQ)) return oQ;
-       return NaN
+       Kk(), rk.j.tm("playerRosterChanged", mk.ids())
```

#### 89. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1471-L1474` → after: `L3542-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3542-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3542-L3546) · [Before (L1471-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1471-L1474)

```diff
-     function bw(QQ, FQ, wQ, LQ, qQ) {
-       let oQ = 0;
-       for (let DQ = LQ + 1; DQ <= LQ + qQ; DQ++) 0 !== QQ.getBlockId(FQ, DQ, wQ) && oQ++;
-       return oQ
+     function nk(kk, ek) {
+       var ik, Dk;
+       if (mk.has(kk)) return mk.getSetting(kk, ek);
+       const fk = (0, Pk.e)();
+       return null === (ik = fk.zq[fk.Qq]) || void 0 === ik || null === (Dk = ik[kk]) || void 0 === Dk ? void 0 : Dk[ek]
```

#### 90. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1478-L1489` → after: `L3550-L3568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3550-L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3550-L3568) · [Before (L1478-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1478-L1489)

```diff
-       const FQ = new Map;
-       for (const DQ of QQ) {
-         var wQ;
-         if (Number.isNaN(DQ)) return null;
-         FQ.set(DQ, (null !== (wQ = FQ.get(DQ)) && void 0 !== wQ ? wQ : 0) + 1)
-       }
-       let LQ = NaN,
-         qQ = 0;
-       for (const [DQ, kQ] of FQ)(kQ > qQ || kQ === qQ && DQ < LQ) && (LQ = DQ, qQ = kQ);
-       let oQ = 0;
-       for (const DQ of QQ) oQ += Math.abs(DQ - LQ);
-       return oQ
+       const {
+         added: ek,
+         removed: ik,
+         settingChanges: Dk
+       } = mk.apply(kk);
+       for (const {
+           playerId: fk,
+           name: Sk
+         }
+         of ik) void 0 === Sk || wk(fk) || bk.c.delete(Sk);
+       for (const {
+           playerId: Sk,
+           settings: bk
+         }
+         of Dk)
+         if (wk(Sk)) Hk(Sk, bk);
+ ... (3 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1492-L1738` → after: `L3571-L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3571-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3571-L3575) · [Before (L1492-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1492-L1738)

```diff
-     function xw(QQ, FQ, wQ, LQ) {
-       const {
-         eye: qQ,
-         forward: oQ,
-         tanHalfFovX: DQ,
-         tanHalfFovY: kQ
-       } = QQ, [vQ, mQ] = function(QQ) {
-         let [FQ, wQ, LQ] = QQ;
-         const qQ = Math.hypot(FQ, LQ),
-           [oQ, DQ] = [LQ / qQ, -FQ / qQ];
-         return [
-           [oQ, 0, DQ],
-           [wQ * DQ, LQ * oQ - FQ * DQ, -wQ * oQ]
-         ]
-       }(oQ), [uQ, HQ] = [FQ * DQ, wQ * kQ], bQ = oQ[0] + uQ * vQ[0] + HQ * mQ[0], YQ = oQ[1] + HQ * mQ[1], xQ = oQ[2] + uQ * vQ[2] + HQ * mQ[2], AQ = (LQ - qQ[1]) / YQ;
-       return AQ > 0 && AQ < 1 / 0 ? [qQ[0] + AQ * bQ, qQ[2] + AQ * xQ] : null
- ... (231 more removed lines; see GitHub link above)
+     function Hk(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mk.getSettings(kk);
+       if (ek) {
+         (0, fk.d)(kk);
+         for (const ik in ek)(0, fk.b)(kk, ik, ek[ik])
```

#### 92. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1743-L1746` → after: `L3580-L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3580-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3580-L3637) · [Before (L1743-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1743-L1746)

```diff
-       let {
-         sent: FQ
-       } = QQ;
-       return null !== FQ && !FQ.timedOut
+       return kk === (0, Pk.e)().ykk || (0, Pk.d)().client.hasEntity(kk)
+     }(0, Sk.onGameReset)(Kk)
+   },
+   37670: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => dk,
+       f: () => Ck,
+       j: () => jk,
+       k: () => sk,
+       n: () => Vk
+     });
+     var Dk = ik(36690),
+       fk = ik(37679),
+       Sk = ik(330),
+       bk = ik.n(Sk),
+       rk = ik(3365);
+ ... (42 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1751-L1775` → after: `L3640-L3650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3640-L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3640-L3650) · [Before (L1751-L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1751-L1775)

```diff
-     function Cw(QQ, FQ, wQ) {
-       const LQ = [255 * QQ, 255 * FQ, 255 * wQ],
-         [qQ, oQ, DQ] = LQ.map((QQ => QQ + .4 * (255 - QQ)));
-       return {
-         texture: "square_particle",
-         MH: 48,
-         minLifeTime: .3 / pw.d,
-         maxLifeTime: .55 / pw.d,
-         minSize: .07,
-         maxSize: .14,
-         minEmitPower: 1,
-         maxEmitPower: 1,
-         emitRate: 0,
-         gravity: [0, -14 * pw.d * pw.d, 0],
-         colorGradients: [{
-           timeFraction: 0,
- ... (9 more removed lines; see GitHub link above)
+     function Ak(kk, ek) {
+       const ik = kk.yH.XF(),
+         fk = ik.JU(),
+         Sk = fk.getRenderWidth(),
+         bk = fk.getRenderHeight();
+       Lk.width = Sk, Lk.height = bk;
+       const rk = kk.yH.wik(),
+         Mk = rk ? Yk.Z6(rk.eye[0], rk.eye[1], rk.eye[2]) : kk.yH.camera.globalPosition;
+       Pk.Z6(Mk.x + 10 * ek[0], Mk.y + 10 * ek[1], Mk.z + 10 * ek[2]);
+       const Kk = rk ? Dk.Matrix.FromArrayToRef(rk.viewProjectionMatrix, 0, pk) : ik.getTransformMatrix();
+       return Dk.eH.ProjectToRef(Pk, lk, Kk, Lk, mk), mk.z < 0 || mk.z > 1 ? null : (Uk.x = mk.x / Sk * 100, Uk.y = mk.y / bk * 100, Uk)
```

#### 94. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1777-L1837` → after: `L3652-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3652-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3652-L3661) · [Before (L1777-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1777-L1837)

```diff
-     const Sw = {
-       texture: "glint",
-       mipmaps: !1,
-       MH: 96,
-       minLifeTime: .5 / pw.d,
-       maxLifeTime: .9 / pw.d,
-       minSize: .15,
-       maxSize: .3,
-       minEmitPower: 1,
-       maxEmitPower: 1,
-       emitRate: 0,
-       gravity: [0, 2 * pw.d * pw.d, 0],
-       colorGradients: [{
-         timeFraction: 0,
-         minColor: [255, 224, 97, 1],
-         maxColor: [255, 166, 38, 1]
- ... (45 more removed lines; see GitHub link above)
+ 
+     function jk(kk, ek) {
+       return Ck(kk, Fk(kk, ek))
+     }
+ 
+     function sk(kk, ek) {
+       const ik = Ak(kk, Fk(kk, ek));
+       return ik && {
+         x: ik.x,
+         y: ik.y
```

#### 95. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1846-L1900` → after: `L3666-L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3666-L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3666-L3667) · [Before (L1846-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1846-L1900)

```diff
-       let {
-         placement: FQ
-       } = QQ;
-       const wQ = (0, OQ.i)(Aw, FQ.getView()),
-         {
-           t: LQ
-         } = (0, rQ.y)(),
-         {
-           isTouchScreen: qQ
-         } = (0, kQ.l)(["isTouchScreen"]),
-         oQ = null !== wQ,
-         DQ = oQ && !wQ.blocked && !wQ.waiting;
-       if ((0, RQ.d)((QQ => oQ && !QQ.repeat && !(0, mQ.isTypingInInput)() && !(0, vQ.m)() && !qQ), (QQ => {
-           const wQ = function(QQ, FQ, wQ) {
-             if (QQ === sw) return FQ.stop;
-             if (QQ === Ow) return wQ ? FQ.build : Uw;
- ... (39 more removed lines; see GitHub link above)
+       var ek, ik;
+       return 1 / (null !== (ek = null === (ik = kk.yH.wik()) || void 0 === ik ? void 0 : ik.projectionMatrix[0]) && void 0 !== ek ? ek : kk.yH.XF().activeCamera.getProjectionMatrix().m[0])
```

#### 96. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1903-L1907` → after: `L3670-L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3670-L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3670-L3675) · [Before (L1903-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1903-L1907)

```diff
-     function Iw(QQ) {
-       return (0, JQ.jsx)(vF.e, {
-         className: "PlotsPlacementKey",
-         ...QQ
-       })
+     function Vk(kk, ek, ik) {
+       const Dk = kk.yH.wik(),
+         fk = Dk ? Dk.worldMatrix : kk.yH.XF().activeCamera.getWorldMatrix().m,
+         Sk = kk.Xx;
+       for (let bk = 0; bk < 3; bk++) ek[bk] = fk[12 + bk] + Sk[bk], ik[bk] = fk[8 + bk];
+       bk().normalize(ik, ik)
```

#### 97. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1910-L1955` → after: `L3678-L3682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3678-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3678-L3682) · [Before (L1910-L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1910-L1955)

```diff
-     function Uw() {}
-     var Nw = wQ(4388);
-     class Tw {
-       constructor(QQ) {
-         this.placement = QQ, this.press = null
-       }
-       down(QQ) {
-         if (null !== this.press) return !1;
-         const {
-           id: FQ,
-           mouse: wQ,
-           x: LQ,
-           y: qQ,
-           atMs: oQ
-         } = QQ;
-         return this.press = {
- ... (30 more removed lines; see GitHub link above)
+     function Fk(kk, ek) {
+       const ik = kk.Xx,
+         Dk = kk.yH.wik(),
+         fk = Dk ? Yk.Z6(Dk.eye[0], Dk.eye[1], Dk.eye[2]) : kk.yH.camera.globalPosition;
+       return nk[0] = ek[0] - ik[0] - fk.x, nk[1] = ek[1] - ik[1] - fk.y, nk[2] = ek[2] - ik[2] - fk.z, bk().normalize(nk, nk), nk
```

#### 98. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1958-L1964` → after: `L3685-L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3685-L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3685-L3686) · [Before (L1958-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1958-L1964)

```diff
-     function Kw(QQ) {
-       let {
-         placement: FQ
-       } = QQ;
-       return null === (0, OQ.i)(Aw, FQ.getView()) ? null : (0, JQ.jsx)(zw, {
-         placement: FQ
-       })
+     function uk(kk, ek) {
+       return (0, rk.g)(kk, ek, rk.c, (0, rk.k)())
```

#### 99. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1968-L1994` → after: `L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3762) · [Before (L1968-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1968-L1994)

```diff
-       let {
-         placement: FQ
-       } = QQ;
-       (0, Nw.d)(!0, !0, "PlotsPlacementLayer");
-       const wQ = (0, oQ.useMemo)((() => new Tw(FQ)), [FQ]);
-       return (0, JQ.jsx)("div", {
-         className: "PlotsPlacementLayer",
-         onPointerDown: QQ => {
-           "mouse" === QQ.pointerType && 0 !== QQ.button || !wQ.down(lw(QQ)) || QQ.currentTarget.setPointerCapture(QQ.pointerId)
-         },
-         onPointerMove: QQ => {
-           wQ.move(lw(QQ))
-         },
-         onPointerUp: QQ => {
-           wQ.up(lw(QQ))
-         },
- ... (11 more removed lines; see GitHub link above)
+       return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
```

#### 100. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1997-L2022` → after: `L3765-L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3765-L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3765-L3786) · [Before (L1997-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L1997-L2022)

```diff
-     function lw(QQ) {
-       const {
-         left: FQ,
-         top: wQ,
-         width: LQ,
-         height: qQ
-       } = QQ.currentTarget.getBoundingClientRect();
-       return {
-         id: QQ.pointerId,
-         mouse: "mouse" === QQ.pointerType,
-         x: QQ.clientX,
-         y: QQ.clientY,
-         ndcX: (QQ.clientX - FQ) / LQ * 2 - 1,
-         ndcY: 1 - (QQ.clientY - wQ) / qQ * 2,
-         atMs: QQ.timeStamp
-       }
- ... (10 more removed lines; see GitHub link above)
+     function Sk(kk, ek) {
+       "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([ik.e(107), ik.e(108), ik.e(103), ik.e(105), ik.e(215)]).then((() => ik(41313))).then((ik => {
+         let {
+           runClientGameMessage: Dk
+         } = ik;
+         Dk(kk, ek)
+       })).catch((ek => {
+         console.error(`Game message ${kk} failed`, ek)
+       })) : Dk.j.tm("showPetUi", ek) : Dk.j.tm("refetchCode")
+     }
+   },
+   38593: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Mk
+     });
+     var Dk = ik(1207),
+ ... (6 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2026` → after: `L3790-L3791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3790-L3791) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2026)

```diff
-         hud: FQ
+         Ne: ek,
+         Je: ik
```

#### 102. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2028-L2045` → after: `L3793-L3796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3793-L3796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3793-L3796) · [Before (L2028-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2028-L2045)

```diff
-       const wQ = (0, OQ.i)(uF, FQ.getPlot()),
-         [LQ, qQ] = (0, oQ.useState)(null),
-         DQ = (0, aw.h)(LQ);
-       if ("none" === wQ[0]) return null;
-       const [, kQ, vQ, mQ, uQ, HQ] = wQ;
-       return (0, JQ.jsx)("div", {
-         className: CQ()("PlotsPlotBannerContainer", {
-           Below: DQ
-         }),
-         children: (0, JQ.jsx)(Jw, {
-           plotX: kQ,
-           plotZ: vQ,
-           ownerName: mQ,
-           ownerId: uQ,
-           relation: HQ,
-           plaqueRef: qQ
- ... (2 more removed lines; see GitHub link above)
+       const Mk = null !== ek && void 0 !== ek ? ek : (0, rk.c)().gameNameWithVariation;
+       (0, Dk.G)(Mk) && ((0, mk.k)(), (0, bk.$)((() => {
+         console.log("Received matchmaking order from game server to game", ek), (0, Sk.j)("inGameReplay"), (0, Pk.navigatePreserveSearch)((0, fk.d)(Mk, null !== ik && void 0 !== ik ? ik : void 0))
+       }), "video_start"))
```

#### 103. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2048-L2095` → after: `L3810-L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3810-L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3810-L3814) · [Before (L2048-L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2048-L2095)

```diff
-     function Jw(QQ) {
-       var FQ, wQ;
-       let {
-         plotX: LQ,
-         plotZ: qQ,
-         ownerName: oQ,
-         ownerId: DQ,
-         relation: kQ,
-         plaqueRef: vQ
-       } = QQ;
-       const {
-         t: mQ
-       } = (0, rQ.y)(), uQ = (0, Xw.k)("hiddenPlayerNames"), HQ = (0, Xw.k)("players"), bQ = null === DQ ? null : null !== (FQ = null === (wQ = HQ.byId[DQ]) || void 0 === wQ ? void 0 : wQ.cosmetics) && void 0 !== FQ ? FQ : null, YQ = mQ("plotsGame:plotBannerCoords", {
-         x: LQ,
-         z: qQ
-       }), xQ = "own" === kQ || null !== oQ;
- ... (32 more removed lines; see GitHub link above)
+     function bk(kk, ek) {
+       Dk.j.tm("newUiRequest", {
+         id: kk,
+         clientParameters: ek
+       }, !0)
```

#### 104. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2099-L2122` → after: `L3818-L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3818-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3818-L3820) · [Before (L2099-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2099-L2122)

```diff
-       let {
-         progress: FQ,
-         goal: wQ
-       } = QQ;
-       const LQ = Math.min(FQ, wQ);
-       return (0, JQ.jsxs)("div", {
-         className: "PlotsProgress",
-         children: [(0, JQ.jsx)("div", {
-           className: "PlotsProgressBar",
-           role: "progressbar",
-           "aria-valuemin": 0,
-           "aria-valuemax": wQ,
-           "aria-valuenow": LQ,
-           children: (0, JQ.jsx)("div", {
-             className: "PlotsProgressBarFill",
-             style: {
- ... (8 more removed lines; see GitHub link above)
+       Dk.j.tm("removeUiRequest", kk, !0);
+       const ek = Sk.get(kk);
+       ek && (ek.tearDownNotification(), Sk.delete(kk))
```

#### 105. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2125-L2129` → after: `L3823-L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3823-L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3823-L3826) · [Before (L2125-L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2125-L2129)

```diff
-     function nw(QQ) {
-       return {
-         translationKey: `plotsGame:${QQ}`,
-         actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
-       }
+     function Pk() {
+       Dk.j.tm("clearUiRequests");
+       for (const kk of Sk.values()) kk.tearDownNotification();
+       Sk.clear()
```

#### 106. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2177-L2191` → after: `L3830-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3830-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3830-L3838) · [Before (L2177-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2177-L2191)

```diff
-       const {
-         translationKey: LQ,
-         actions: qQ
-       } = wQ ? FQ.touch : FQ.desktop;
-       if (0 === qQ.length) return QQ(LQ);
-       const oQ = [];
-       for (const DQ of qQ) {
-         const LQ = (0, Ww.q)(DQ, wQ),
-           qQ = Ww.u[DQ][0];
-         if (null === LQ && void 0 === qQ) return QQ(FQ.plainKey);
-         oQ.push(null === LQ ? (0, Ww.l)(qQ) : QQ(LQ.translationKey))
-       }
-       return QQ(LQ, {
-         key: oQ.join("")
-       })
+       const Dk = fk.NotificationProvider.showPromptPopup({
+         title: ek,
+         confirmText: "general:yes",
+         cancelText: "general:no",
+         unlockPointerKey: "uiRequestPopup"
+       });
+       Sk.set(kk, Dk), Dk.getResult().then((ek => {
+         Sk.delete(kk), "notificationTornDown" !== ek && ik(ek)
+       }))
```

#### 107. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2196` → after: `L3854-L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3854-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3854-L3855) · [Before (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2196)

```diff
-         hud: FQ
+         lobbyName: ek,
+         gameNameWithVariation: ik
```

#### 108. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2198-L2215` → after: `L3857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3857) · [Before (L2198-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2198-L2215)

```diff
-       const wQ = (0, OQ.i)(mF, FQ.getStep()),
-         {
-           t: LQ
-         } = (0, rQ.y)();
-       return (0, JQ.jsxs)(DF.d, {
-         placement: "bottom",
-         children: ["step" === wQ[0] && (0, JQ.jsx)(yw, {
-           step: wQ[1],
-           progress: wQ[2],
-           goal: wQ[3]
-         }, wQ[1]), "celebrate" === wQ[0] && (0, JQ.jsx)(Bw, {
-           className: CQ()("Celebrate", {
-             Gold: "house" === wQ[1]
-           }),
-           icon: "star",
-           title: LQ("house" === wQ[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
- ... (2 more removed lines; see GitHub link above)
+       return !(0, Dk.I)(ek) || null !== ik && (ik.startsWith("testGym") || (0, fk.j)(ik))
```

#### 109. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2219-L2239` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3861) · [Before (L2219-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2219-L2239)

```diff
-       let {
-         step: FQ,
-         progress: wQ,
-         goal: LQ
-       } = QQ;
-       const {
-         isTouchScreen: qQ
-       } = (0, kQ.l)(["isTouchScreen"]), {
-         t: oQ
-       } = (0, rQ.y)(), DQ = gw[FQ];
-       return (0, JQ.jsxs)(Bw, {
-         icon: DQ.icon,
-         title: oQ(DQ.titleKey),
-         children: [(0, JQ.jsx)("div", {
-           className: "PlotsStepCardHint SmallTextLight",
-           children: Pw(oQ, DQ, qQ)
- ... (5 more removed lines; see GitHub link above)
+       return kk.vf === Sk.e.Leave || kk.vf === Sk.e.Cursor
```

#### 110. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2243-L2263` → after: `L3865-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3865-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3865-L3879) · [Before (L2243-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2243-L2263)

```diff
-       let {
-         className: FQ,
-         icon: wQ,
-         title: LQ,
-         children: qQ
-       } = QQ;
-       return (0, JQ.jsxs)("div", {
-         className: CQ()("PlotsStepCard", FQ),
-         role: "status",
-         children: [(0, JQ.jsx)("span", {
-           className: "PlotsStepCardIcon",
-           children: (0, JQ.jsx)(SQ.c, {
-             name: wQ
-           })
-         }), (0, JQ.jsxs)("div", {
-           className: "PlotsStepCardBody",
- ... (5 more removed lines; see GitHub link above)
+       bk.j.tm("codeCollab", {
+         type: kk.vf,
+         docKey: kk.Ef,
+         version: kk.hf,
+         editorCount: kk.af,
+         peers: kk.Wf,
+         updates: kk.tf,
+         playerId: kk.Xf,
+         playerName: kk.Bf,
+         colour: kk.Tf,
+         anchor: kk.Zf,
+         head: kk.gf,
+         existingCursors: kk.Gf,
+         files: kk.Nf,
+         engineSettings: kk.Rf
```

#### 111. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2266-L2302` → after: `L3882-L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3882-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3882-L3908) · [Before (L2266-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2266-L2302)

```diff
- 
-     function dw() {
-       return (0, oQ.useEffect)((() => (kQ.c.set({
-         backpackPointerRequested: !0
-       }), () => {
-         kQ.c.set({
-           backpackPointerRequested: !1
-         })
-       })), []), null
-     }
-     const QL = function(QQ, FQ, wQ, LQ) {
-       let {
-         localPlayerId: qQ
-       } = LQ;
-       const kQ = new HF;
-       let vQ = null,
- ... (21 more removed lines; see GitHub link above)
+   },
+   38583: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Dk
+     });
+     class Dk {
+       constructor() {
+         this.members = new Map
+       }
+       apply(kk) {
+         const ek = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const Dk of kk.ri) {
+ ... (11 more added lines; see GitHub link above)
```

#### 112. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2304-L2309` → after: `L3910-L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3910-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3910-L3913) · [Before (L2304-L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2304-L2309)

```diff
-           }))
-         },
-         fH: () => {
-           mQ.fH(), uQ.fH(), HQ.fH(), bQ.fH()
-         },
-         onPlayerAttemptAltAction: (QQ, FQ, wQ, LQ, qQ, oQ) => {
+           }
+         }
+         for (const Dk of kk.xi) {
+           const kk = this.members.get(Dk);
```

#### 113. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2311-L2332` → after: `L3915-L3918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3915-L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3915-L3918) · [Before (L2311-L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2311-L2332)

```diff
-           if (null !== oQ) return;
-           const kQ = void 0 === FQ ? null : [FQ, wQ, LQ];
-           return null !== (DQ = mQ.attemptAltAction(kQ)) && void 0 !== DQ ? DQ : uQ.attemptAltAction(kQ)
-         },
-         onPlayerClickUp: () => {
-           mQ.endPress(), uQ.endPress()
-         },
-         onAfterRender: (QQ, FQ) => {
-           HQ.afterRender(FQ), mQ.afterRender(FQ), uQ.afterRender(FQ)
-         },
-         onClose: () => {
-           for (const QQ of YQ) QQ();
-           vQ.dispose(), mQ.dispose(), uQ.dispose(), HQ.dispose(), vQ = null, mQ = null, uQ = null, HQ = null, bQ = null
-         },
-         onReceivedMessageFromServer: (QQ, FQ) => {
-           if ("plotsStarterLot" === QQ) kQ.receiveStep(FQ);
- ... (6 more removed lines; see GitHub link above)
+           if (kk) this.members.delete(Dk), ek.removed.push({
+             playerId: Dk,
+             name: null !== (ik = kk.name) && void 0 !== ik ? ik : void 0
+           })
```

#### 114. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2337` → after: `L3945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3945) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2337)

```diff
-   38678: (QQ, FQ, wQ) => {
+   38612: (kk, ek, ik) => {
```

#### 115. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2340` → after: `L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3948) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2340)

```diff
-       g: () => oQ
+       h: () => fk
```

#### 116. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2342-L2388` → after: `L3950-L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3950-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/240.js#L3950-L3956) · [Before (L2342-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/240.js#L2342-L2388)

```diff
-     const LQ = 1 / .6,
-       qQ = {
-         kind: "smokePuff"
-       };
-     class oQ {
-       constructor(QQ, FQ, wQ) {
-         this.style = QQ, this.MH = FQ, this.half = wQ, this.particles = null, this.lastFrame = -1
-       }
-       emit(QQ, FQ, wQ) {
-         let oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
-         return wQ !== this.lastFrame && (this.lastFrame = wQ, this.particles || (this.particles = QQ.createParticles(function(QQ, FQ) {
-           const [
-             [wQ, oQ, DQ],
-             [kQ, vQ, mQ]
-           ] = QQ.colours;
-           return {
- ... (31 more removed lines; see GitHub link above)
+     const Dk = ["description", "label"];
+ 
+     function fk(kk) {
+       const ek = kk.type;
+       return {
+         type: ek,
+         params: kk[ek]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L4-L118) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L4)

```diff
-   39195: (QQ, FQ, wQ) => {
+   38086: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+     });
+     var Dk = ik(38088);
+     const fk = [0, 0, 0];
+     class Sk {
+       constructor(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk;
+         this.pool = kk, this.origin = ek, this.count = 0, this.free = []
+       }
+       take() {
+         var kk;
+         const ek = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
+         return ek >= this.pool.vK && this.pool.grow(Math.max(2 * this.pool.vK, ek + 1)), this.hide(ek), ek
+       }
+ ... (99 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L6` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L120) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L6)

```diff
-       playDocsSound: () => kQ
+       default: () => sp
```

#### 3. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L8-L10` → after: `L122-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L122-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L122-L745) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L8-L10)

```diff
-     var LQ = wQ(4694),
-       qQ = wQ(36388),
-       oQ = wQ(1213);
+     var Dk = ik(60);
+     const fk = [{
+         nameKey: "tierBurner",
+         cost: [],
+         islandRadius: 11.5,
+         machineAllowance: 16,
+         beltAllowance: 64,
+         newDeposits: [],
+         unlocks: [],
+         reward: null
+       }, {
+         nameKey: "tierCurrent",
+         cost: [{
+           item: "Iron Bar",
+           amount: 40
+         }, {
+ ... (608 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L13-L31` → after: `L750-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L750-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L750-L800) · [Before (L13-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L13-L31)

```diff
-     function kQ(QQ, FQ, wQ, kQ, vQ) {
-       let mQ, uQ = null,
-         HQ = 0,
-         bQ = 0;
-       if (FQ) mQ = new LQ.Howl({
-         src: [`${oQ.clientSideServerUrls.staticUrl}/sounds/music/${QQ}.mp3`],
-         html5: !0,
-         volume: wQ
-       });
-       else {
-         var YQ;
-         uQ = (0, qQ.h)(QQ);
-         const FQ = (0, qQ.e)(uQ),
-           wQ = null !== (YQ = FQ.sprite[QQ]) && void 0 !== YQ ? YQ : null;
-         if (!wQ) throw new Error(`Docs sound ${QQ} is not in sprite sheet ${uQ}`);
-         HQ = wQ[0] / 1e3, bQ = wQ[1] / 1e3, mQ = DQ.get(uQ), mQ || (mQ = new LQ.Howl({
- ... (3 more removed lines; see GitHub link above)
+     function Nk(kk) {
+       const ek = fk.findIndex((ek => ek.unlocks.includes(kk)));
+       return ek < 0 ? 1 : ek + 1
+     }
+ 
+     function Rk(kk) {
+       return Math.floor(kk).toLocaleString("en-US")
+     }
+     var Jk = ik(38017);
+     const ke = "baf2terminaltake",
+       ee = "baf2terminalput",
+       ie = ["one", "stack", "fill"];
+ 
+     function De(kk, ek, ik) {
+       return `${ke} ${kk} ${ek} ${ik}`
+     }
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L33-L38` → after: `L802-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L802-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L802-L911) · [Before (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L33-L38)

```diff
-       const xQ = FQ ? mQ.play() : mQ.play(QQ);
-       mQ.volume(wQ, xQ), kQ > 0 && mQ.seek(HQ + kQ, xQ);
-       const AQ = () => FQ ? mQ.duration() : bQ;
-       let tQ = !1;
-       const eQ = QQ => {
-           tQ || (tQ = !0, mQ.off("play", MQ, xQ), mQ.off("end", GQ, xQ), mQ.off("loaderror", cQ), mQ.off("playerror", pQ, xQ), FQ && mQ.unload(), vQ.onEnd(QQ))
+     }
+ 
+     function Pe(kk, ek) {
+       const ik = "number" === typeof kk ? kk : "one" === kk ? 1 : "stack" === kk ? 99 : ek;
+       return Math.min(ek, ik)
+     }
+ 
+     function me(kk, ek) {
+       const ik = kk => "number" === typeof kk ? kk : "one" === kk ? 1 : 99;
+       return "fill" === kk || "fill" === ek ? "fill" : ik(kk) + ik(ek)
+     }
+ 
+     function Me(kk, ek) {
+       const ik = re(kk),
+         Dk = re(ek),
+         fk = ik && Dk ? function(kk, ek) {
+ ... (94 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L40-L41` → after: `L913-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L913-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L913-L926) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L40-L41)

```diff
-         MQ = () => {
-           vQ.onPlay(AQ())
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+           outputSlots: [2, 3, 4],
+           recipes: [Ie("Raw Iron", "Iron Grit", 2, 1, {
+             item: "Gold Grit",
+             chance: .05
+           }), Ie("Raw Copper", "Copper Grit", 2, 1, {
+             item: "Iron Grit",
+             chance: .1
+           }), Ie("Raw Gold", "Gold Grit", 2), Ie("Messy Stone", "Sand"), Ie("Gravel", "Sand"), Ie("Raw Voltite", "Voltite Dust", 2), Ie("Moonstone", "Moonstone Dust", 4), Ie("Wheat Seeds", "Fertiliser"), Ie("Raw Uranium", "Uranium Grit", 2), ze("Mossy Messy Stone", "Sand"), ...Qe … [truncated]
+           couplable: !0
```

#### 7. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L43-L44` → after: `L928-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L928-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L928-L935) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L43-L44)

```diff
-         GQ = () => {
-           eQ(!1)
+         Smelter: {
+           kind: "Smelter",
+           opMs: 2e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+           outputSlots: [2, 3, 4],
+           recipes: [Ie("Iron Grit", "Iron Bar"), Ie("Copper Grit", "Copper Bar"), Ie("Gold Grit", "Gold Bar"), Ie("Raw Iron", "Iron Bar"), Ie("Raw Copper", "Copper Bar"), Ie("Raw Gold", "Gold Bar"), Ie("Sand", "Glass"), Ie("Messy Stone", "Stone"), ...Qk.Nc.map((kk => Ie(kk, "Char … [truncated]
+           couplable: !0
```

#### 8. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L46-L47` → after: `L937-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L937-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L937-L945) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L46-L47)

```diff
-         pQ = (FQ, wQ) => {
-           console.error(`Could not play docs sound ${QQ}`, wQ), eQ(!0)
+         Generator: {
+           kind: "Generator",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [],
+           recipes: [],
+           fuels: ["Coal", "Charcoal"],
+           powerMade: 80
```

#### 9. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L49-L54` → after: `L947-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L947-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L947-L1046) · [Before (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L49-L54)

```diff
-         cQ = (QQ, FQ) => {
-           null !== uQ && DQ.get(uQ) === mQ && (DQ.delete(uQ), mQ.unload()), pQ(QQ, FQ)
-         };
-       return mQ.on("play", MQ, xQ), mQ.once("end", GQ, xQ), mQ.once("loaderror", cQ), mQ.once("playerror", pQ, xQ), {
-         pause: () => {
-           mQ.pause(xQ)
+         Press: {
+           kind: "Press",
+           opMs: 3e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3],
+           recipes: [Ie("Iron Bar", "Iron Plate"), Ie("Gold Bar", "Gold Plate")],
+           powerPerOp: 24
+         },
+         "Wire Mill": {
+           kind: "Wire Mill",
+           opMs: 3e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3],
+           recipes: [Ie("Copper Bar", "Copper Wire", 3)],
+ ... (84 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L56-L57` → after: `L1048-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L1048-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L1048-L1055) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L56-L57)

```diff
-         resume: () => {
-           mQ.play(xQ)
+         "Crystal Vat": {
+           kind: "Crystal Vat",
+           opMs: 12e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3],
+           recipes: [Ie("Coal", "Diamond", 1, 24), Ie("Voltite Dust", "Moonstone", 1, 12)],
+           powerPerOp: 1200
```

#### 11. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L59-L62` → after: `L1057-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L1057-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L1057-L1065) · [Before (L59-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L59-L62)

```diff
-         seek: QQ => {
-           const FQ = AQ(),
-             wQ = Math.max(QQ, 0);
-           mQ.seek(HQ + (FQ > 0 ? Math.min(wQ, FQ) : wQ), xQ)
+         Recycler: {
+           kind: "Recycler",
+           opMs: 6e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3],
+           recipes: [],
+           powerPerOp: 48,
+           recycles: !0
```

#### 12. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L64-L66` → after: `L1067-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L1067-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L1067-L1075) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L64-L66)

```diff
-         Qp: () => {
-           const QQ = mQ.seek(xQ);
-           return "number" === typeof QQ ? Math.max(0, QQ - HQ) : 0
+         "Crop Harvester": {
+           kind: "Crop Harvester",
+           opMs: 2e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3],
+           recipes: [],
+           powerPerOp: 16,
+           field: !0
```

#### 13. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L68-L70` → after: `L1077-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L1077-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L1077-L1085) · [Before (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L68-L70)

```diff
-         getDuration: AQ,
-         setVolume: QQ => {
-           mQ.volume(QQ, xQ)
+         "Mob Farm": {
+           kind: "Mob Farm",
+           opMs: 12e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3, 4, 5, 6],
+           recipes: [],
+           powerPerOp: 240,
+           mobFarm: !0
```

#### 14. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L72-L73` → after: `L1087-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L1087-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/241.js#L1087-L1749) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/241.js#L72-L73)

```diff
-         stop: () => {
-           tQ || (mQ.stop(xQ), eQ(!1))
+         ...Jk.h
+       },
+       Ee = {
+         Crusher: [Ie("Spent Pellet", "Glow Dust"), Ie("Wheat Seeds", "Biomass"), Ie("Wheat", "Biomass"), Ie("Dead Bush", "Biomass"), Ie("Dusk Moss", "Biomass"), Ie("Rotten Flesh", "Biomass"), Ie("Bone", "Biomass", 2)],
+         "Shatter Mill": [Ie("Spent Pellet", "Glow Dust"), Ie("Wheat Seeds", "Biomass"), Ie("Wheat", "Biomass"), Ie("Dead Bush", "Biomass"), Ie("Dusk Moss", "Biomass"), Ie("Rotten Flesh", "Biomass"), Ie("Bone", "Biomass", 2), ...Qk.Nc.map((kk => Ie(kk, "Biomass")))],
+         Smelter: [Ie("Biomass", "Fertiliser", 2)],
+         Press: [Ie("Coal", "Graphite", 1, 4)]
+       },
+       he = "Power Coupler",
+       ae = "Advanced Coupler",
+       We = "Nova Coupler",
+       te = [{
+         item: he,
+         level: 1,
+         divisor: 2,
+         powerPerS: 8
+ ... (647 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L4-L6)

```diff
-   39203: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => gQ
+   40679: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk,
+       e: () => Mk,
+       g: () => mk
```

#### 2. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L8-L249` → after: `L10-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L10-L24) · [Before (L8-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L8-L249)

```diff
-     wQ(6300);
-     var LQ = wQ(53),
-       qQ = wQ(39211),
-       oQ = wQ(39491),
-       DQ = wQ(39625),
-       kQ = wQ(39678),
-       vQ = wQ(39692),
-       mQ = wQ(36870),
-       uQ = wQ(36688),
-       HQ = wQ(39822),
-       bQ = wQ(39872),
-       YQ = (wQ(39906), wQ(1237)),
-       xQ = wQ(201),
-       AQ = wQ(1207),
-       tQ = wQ(17),
-       eQ = wQ(2657),
- ... (226 more removed lines; see GitHub link above)
+     var Dk, fk = ik(36729),
+       Sk = ik(36698);
+     ! function(kk) {
+       kk[kk.CW = 0] = "CW", kk[kk.CCW = 1] = "CCW"
+     }(Dk || (Dk = {}));
+     class bk {
+       static Interpolate(kk, ek, ik, Dk, fk) {
+         if (0 === kk) return 0;
+         const Sk = 1 - 3 * Dk + 3 * ek,
+           bk = 3 * Dk - 6 * ek,
+           rk = 3 * ek;
+         let Pk = kk;
+         for (let mk = 0; mk < 5; mk++) {
+           const ek = Pk * Pk;
+           Pk -= (Sk * (ek * Pk) + bk * ek + rk * Pk - kk) * (1 / (3 * Sk * ek + 2 * bk * Pk + rk)), Pk = Math.min(1, Math.max(0, Pk))
```

#### 3. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L251-L255` → after: `L26-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L26-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L26-L97) · [Before (L251-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L251-L255)

```diff
-         return uF.current = FQ, FQ.engine.runRenderLoop((() => {
-           const QQ = FQ.camera;
-           QQ.fov !== FQ.targetFieldOfView && (QQ.fov += (FQ.targetFieldOfView - QQ.fov) * (QQ.fov > FQ.targetFieldOfView ? .3 : .2), Math.abs(FQ.targetFieldOfView - QQ.fov) < 5e-4 && (QQ.fov = FQ.targetFieldOfView), FQ.needsRender = !0), FQ.needsRender && (FQ.lA.render(), FQ.need … [truncated]
-         })), () => {
-           uF.current = null, FQ.engine.dispose()
+         return 3 * Math.pow(1 - Pk, 2) * Pk * ik + 3 * (1 - Pk) * Math.pow(Pk, 2) * fk + Math.pow(Pk, 3)
+       }
+     }
+     class rk {
+       constructor(kk) {
+         this._radians = kk, this._radians < 0 && (this._radians += 2 * Math.PI)
+       }
+       degrees() {
+         return 180 * this._radians / Math.PI
+       }
+       radians() {
+         return this._radians
+       }
+       static BetweenTwoPoints(kk, ek) {
+         const ik = ek.subtract(kk),
+           Dk = Math.atan2(ik.y, ik.x);
+ ... (56 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L257-L280` → after: `L99-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L99-L110) · [Before (L257-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L257-L280)

```diff
-       }), []), (0, LQ.useEffect)((() => {
-         const QQ = mF.current;
-         if (!QQ) return;
-         const FQ = () => {
-             MF.current = !1, AF(document.pointerLockElement === QQ)
-           },
-           wQ = () => {
-             MF.current && (MF.current = !1, eF(!1))
-           },
-           LQ = FQ => {
-             const wQ = !aF.current.canLock && document.activeElement === QQ && 0 !== (1 & FQ.buttons);
-             if (document.pointerLockElement !== QQ && !wQ) return;
-             const LQ = aF.current.mouseSensitivity * RQ;
-             OF((QQ => function(QQ, FQ, wQ) {
-               const LQ = 2 * Math.PI;
-               return {
- ... (8 more removed lines; see GitHub link above)
+         return this
+       }
+       addQuadraticCurveTo(kk, ek, ik, Dk) {
+         let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
+         if (this.closed) return this;
+         const Sk = (kk, ek, ik, Dk) => (1 - kk) * (1 - kk) * ek + 2 * kk * (1 - kk) * ik + kk * kk * Dk,
+           bk = this._points[this._points.length - 1];
+         for (let rk = 0; rk <= fk; rk++) {
+           const Pk = rk / fk,
+             mk = Sk(Pk, bk.x, kk, ik),
+             Mk = Sk(Pk, bk.y, ek, Dk);
+           this.addLineTo(mk, Mk)
```

#### 5. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L282-L326` → after: `L112-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L112-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L112-L142) · [Before (L282-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L282-L326)

```diff
-       }), []), (0, LQ.useEffect)((() => {
-         const QQ = uF.current;
-         null !== QQ && 0 !== HF.width && 0 !== HF.height && (QQ.engine.resize(), QQ.needsRender = !0)
-       }), [HF.width, HF.height]), (0, LQ.useEffect)((() => {
-         const QQ = uF.current;
-         null !== QQ && (QQ.targetFieldOfView = TF * (CF ? WQ : 1))
-       }), [TF, CF]), (0, LQ.useEffect)((() => {
-         const QQ = uF.current;
-         null !== QQ && function(QQ, FQ, wQ, LQ) {
-           const qQ = [],
-             oQ = [],
-             DQ = [],
-             kQ = [];
-           for (let vQ = 0; vQ < FQ.count; vQ++) {
-             const QQ = FQ.values[vQ],
-               mQ = (0, pQ.x)(QQ, wQ, LQ);
- ... (29 more removed lines; see GitHub link above)
+         return this
+       }
+       addBezierCurveTo(kk, ek, ik, Dk, fk, Sk) {
+         let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
+         if (this.closed) return this;
+         const rk = (kk, ek, ik, Dk, fk) => (1 - kk) * (1 - kk) * (1 - kk) * ek + 3 * kk * (1 - kk) * (1 - kk) * ik + 3 * kk * kk * (1 - kk) * Dk + kk * kk * kk * fk,
+           Pk = this._points[this._points.length - 1];
+         for (let mk = 0; mk <= bk; mk++) {
+           const Mk = mk / bk,
+             Kk = rk(Mk, Pk.x, kk, ik, fk),
+             xk = rk(Mk, Pk.y, ek, Dk, Sk);
+           this.addLineTo(Kk, xk)
+         }
+         return this
+       }
+       isPointInside(kk) {
+ ... (15 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L576-L590` → after: `L150-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L150-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L150-L158) · [Before (L576-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L576-L590)

```diff
-       })), tQ = -qQ[1], eQ = [];
-       for (const mQ of AQ) eQ.push([new uQ.Ox(YQ[0], tQ, mQ), new uQ.Ox(YQ[YQ.length - 1], tQ, mQ)]);
-       for (const mQ of YQ) eQ.push([new uQ.Ox(mQ, tQ, AQ[0]), new uQ.Ox(mQ, tQ, AQ[AQ.length - 1])]);
-       const MQ = (0, bQ.e)("Heatmap3DChunkGrid", {
-         lines: eQ
-       }, QQ.lA);
-       MQ.color = new mQ.Color3(.45, .6, .78), MQ.aA = !1, MQ.isVisible = HQ, QQ.chunkGrid = MQ, QQ.chunkGridCentre = kQ, QQ.needsRender = !0
-     }
- 
-     function yQ(QQ, FQ, wQ, LQ) {
-       QQ.FQQ("matrix", function(QQ, FQ) {
-         const wQ = new Float32Array(16 * FQ);
-         for (let LQ = 0; LQ < FQ; LQ++) {
-           const FQ = 16 * LQ;
-           wQ[FQ] = 1, wQ[FQ + 5] = 1, wQ[FQ + 10] = 1, wQ[FQ + 12] = QQ[3 * LQ], wQ[FQ + 13] = QQ[3 * LQ + 1], wQ[FQ + 14] = QQ[3 * LQ + 2], wQ[FQ + 15] = 1
+       }
+       close() {
+         return this.closed = !0, this
+       }
+       length() {
+         let kk = this._length;
+         if (this.closed) {
+           const ek = this._points[this._points.length - 1];
+           kk += this._points[0].subtract(ek).length()
```

#### 7. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L593-L652` → after: `L161-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L161-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L161-L183) · [Before (L593-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L593-L652)

```diff
-       }(FQ, LQ), 16, !0), QQ.FQQ("color", wQ, 4, !0), QQ.isVisible = LQ > 0
-     }
- 
-     function BQ(QQ) {
-       const {
-         camera: FQ,
-         translucent: wQ
-       } = QQ, LQ = [FQ.position.x, FQ.position.y, FQ.position.z], qQ = QQ.translucentSortedFrom;
-       if (null !== qQ && Math.hypot(LQ[0] - qQ[0], LQ[1] - qQ[1], LQ[2] - qQ[2]) < NQ) return;
-       QQ.translucentSortedFrom = LQ;
-       const oQ = new Float64Array(wQ.count),
-         DQ = new Uint32Array(wQ.count);
-       for (let mQ = 0; mQ < wQ.count; mQ++) {
-         const QQ = wQ.dv[3 * mQ] - LQ[0],
-           FQ = wQ.dv[3 * mQ + 1] - LQ[1],
-           qQ = wQ.dv[3 * mQ + 2] - LQ[2];
- ... (44 more removed lines; see GitHub link above)
+       }
+       area() {
+         const kk = this._points.length;
+         let ek = 0;
+         for (let ik = kk - 1, Dk = 0; Dk < kk; ik = Dk++) ek += this._points[ik].x * this._points[Dk].y - this._points[Dk].x * this._points[ik].y;
+         return .5 * ek
+       }
+       getPoints() {
+         return this._points
+       }
+       getPointAtLengthPosition(kk) {
+         if (kk < 0 || kk > 1) return Sk.l.Zero();
+         const ek = kk * this.length();
+         let ik = 0;
+         for (let Dk = 0; Dk < this._points.length; Dk++) {
+           const kk = (Dk + 1) % this._points.length,
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L654-L657` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L185-L187) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L654-L657)

```diff
-       return {
-         position: DF([QQ.min[0] + qQ[0] / 2, QQ.min[1] + qQ[1] / 2, QQ.min[2] + qQ[2] / 2], kF(oQ, -uQ * XQ)),
-         heading: LQ.heading,
-         pitch: LQ.pitch
+           ik = rk
+         }
+         return Sk.l.Zero()
```

#### 9. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L659-L669` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L189-L190) · [Before (L659-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L659-L669)

```diff
-     }
- 
-     function LF(QQ, FQ, wQ) {
-       const LQ = oF(QQ),
-         qQ = oF(wQ),
-         oQ = DF(QQ.position, kF(FQ, -1)),
-         DQ = [0, 1, 2].reduce(((QQ, FQ) => DF(QQ, kF(qQ[FQ], vF(oQ, LQ[FQ])))), [0, 0, 0]);
-       return {
-         position: DF(FQ, DQ),
-         heading: wQ.heading,
-         pitch: wQ.pitch
+       static StartingAt(kk, ek) {
+         return new mk(kk, ek)
```

#### 10. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L672-L688` → after: `L193-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L193-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L193-L293) · [Before (L672-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L672-L688)

```diff
- 
-     function qF(QQ) {
-       return kF(DF(QQ.min, QQ.max), .5)
-     }
- 
-     function oF(QQ) {
-       const FQ = QF(QQ),
-         wQ = FF(QQ.heading);
-       return [FQ, wQ, mF(FQ, wQ)]
-     }
- 
-     function DF(QQ, FQ) {
-       return [QQ[0] + FQ[0], QQ[1] + FQ[1], QQ[2] + FQ[2]]
-     }
- 
-     function kF(QQ, FQ) {
- ... (1 more removed lines; see GitHub link above)
+     class Mk {
+       static CreateQuadraticBezier(kk, ek, ik, Dk) {
+         Dk = Dk > 2 ? Dk : 3;
+         const fk = [],
+           bk = (kk, ek, ik, Dk) => (1 - kk) * (1 - kk) * ek + 2 * kk * (1 - kk) * ik + kk * kk * Dk;
+         for (let rk = 0; rk <= Dk; rk++) fk.push(new Sk.o(bk(rk / Dk, kk.x, ek.x, ik.x), bk(rk / Dk, kk.y, ek.y, ik.y), bk(rk / Dk, kk.z, ek.z, ik.z)));
+         return new Mk(fk)
+       }
+       static CreateCubicBezier(kk, ek, ik, Dk, fk) {
+         fk = fk > 3 ? fk : 4;
+         const bk = [],
+           rk = (kk, ek, ik, Dk, fk) => (1 - kk) * (1 - kk) * (1 - kk) * ek + 3 * kk * (1 - kk) * (1 - kk) * ik + 3 * kk * kk * (1 - kk) * Dk + kk * kk * kk * fk;
+         for (let Pk = 0; Pk <= fk; Pk++) bk.push(new Sk.o(rk(Pk / fk, kk.x, ek.x, ik.x, Dk.x), rk(Pk / fk, kk.y, ek.y, ik.y, Dk.y), rk(Pk / fk, kk.z, ek.z, ik.z, Dk.z)));
+         return new Mk(bk)
+       }
+       static CreateHermiteSpline(kk, ek, ik, Dk, fk) {
+ ... (85 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L690-L692` → after: `L295-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L295-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L295-L336) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L690-L692)

```diff
- 
-     function vF(QQ, FQ) {
-       return QQ[0] * FQ[0] + QQ[1] * FQ[1] + QQ[2] * FQ[2]
+   },
+   38265: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk
+     });
+     var Dk = ik(38272);
+     const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
+       ...kk
+     } : null : kk.clone(ek) : null;
+     class Sk {
+       static DeepCopy(kk, ek, ik, Sk) {
+         let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const rk = function(kk) {
+           const ek = [];
+           do {
+             const ik = Object.getOwnPropertyNames(kk);
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L694-L696` → after: `L338-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L338-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/242.js#L338-L394) · [Before (L694-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/242.js#L694-L696)

```diff
- 
-     function mF(QQ, FQ) {
-       return [QQ[1] * FQ[2] - QQ[2] * FQ[1], QQ[2] * FQ[0] - QQ[0] * FQ[2], QQ[0] * FQ[1] - QQ[1] * FQ[0]]
+   },
+   38272: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Dk
+     });
+     class Dk {
+       static _CheckLimit(kk, ek) {
+         let ik = Dk._LogLimitOutputs[kk];
+         return ik ? ik.current++ : (ik = {
+           limit: ek,
+           current: 1
+         }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
+       }
+       static _GenerateLimitMessage(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ik = Dk._LogLimitOutputs[kk];
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   39642: (QQ, FQ, wQ) => {
+   40617: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L6866` → after: `L6-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L6-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L6-L18) · [Before (L6-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6-L6866)

```diff
-       e: () => tQ,
-       g: () => GQ
-     });
-     var LQ = wQ(39402),
-       qQ = wQ(39409),
-       oQ = wQ(39518),
-       DQ = wQ(36722),
-       kQ = wQ(36696),
-       vQ = wQ(39650),
-       mQ = wQ(38203),
-       uQ = wQ(36741),
-       HQ = wQ(39277),
-       bQ = wQ(37631),
-       YQ = wQ(37320),
-       xQ = wQ(39360),
-       AQ = wQ(39426);
- ... (6845 more removed lines; see GitHub link above)
+       c: () => Sk,
+       f: () => bk
+     });
+     var Dk = ik(1903);
+     let fk = !1;
+ 
+     function Sk() {
+       fk = !0
+     }
+ 
+     function bk() {
+       fk && (fk = !1, (0, Dk.c)())
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6868-L6874` → after: `L20-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L20-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L20-L27) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6868-L6874)

```diff
-   39906: (QQ, FQ, wQ) => {
-     var LQ = wQ(36696),
-       qQ = wQ(38203),
-       oQ = wQ(39731),
-       DQ = wQ(39829),
-       kQ = wQ(39561);
-     const vQ = "bakedVertexAnimationSettingsInstanced";
+   40608: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk,
+       f: () => Sk,
+       i: () => rk
+     });
+     var Dk = ik(40157),
+       fk = ik(40165);
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6877-L6878` → after: `L30-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L30-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L30-L47) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6877-L6878)

```diff
-       const FQ = QQ.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return FQ instanceof Float32Array || FQ instanceof Uint16Array
+       if (kk.queries.drawCensus() < Dk.qb.BYTES) return null;
+       const ek = kk.memoryData(kk.scratch(), Dk.qb.BYTES, 4, "the draw census");
+       return null === ek ? null : {
+         terrainOpaque: Dk.qb.terrainOpaque(ek, 0),
+         terrainTransparent: Dk.qb.terrainTransparent(ek, 0),
+         terrainPack: Dk.qb.terrainPack(ek, 0),
+         earthSky: Dk.qb.earthSky(ek, 0),
+         skyMeshes: Dk.qb.skyMeshes(ek, 0),
+         regular: Dk.qb.regular(ek, 0),
+         thin: Dk.qb.thin(ek, 0),
+         line: Dk.qb.line(ek, 0),
+         text: Dk.qb.text(ek, 0),
+         particles: Dk.qb.particles(ek, 0),
+         terrainParts: Dk.qb.terrainParts(ek, 0),
+         terrainCompiling: Dk.qb.terrainCompiling(ek, 0),
+         ringCopiesMax: Dk.qb.ringCopiesMax(ek, 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6881-L6888` → after: `L50-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L50-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L50-L62) · [Before (L6881-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6881-L6888)

```diff
-     function uQ(QQ, FQ, wQ, LQ) {
-       wQ.K3(Number.POSITIVE_INFINITY), LQ.K3(Number.NEGATIVE_INFINITY);
-       for (let qQ = 0; qQ < 3 * FQ; qQ += 3) {
-         const FQ = QQ[qQ],
-           oQ = QQ[qQ + 1],
-           DQ = QQ[qQ + 2];
-         FQ < wQ.x && (wQ.x = FQ), oQ < wQ.y && (wQ.y = oQ), DQ < wQ.z && (wQ.z = DQ), FQ > LQ.x && (LQ.x = FQ), oQ > LQ.y && (LQ.y = oQ), DQ > LQ.z && (LQ.z = DQ)
-       }
+     function bk(kk) {
+       const {
+         terrainOpaque: ek,
+         terrainTransparent: ik,
+         earthSky: Dk,
+         skyMeshes: fk,
+         regular: Sk,
+         thin: bk,
+         line: rk,
+         text: Pk,
+         particles: mk
+       } = kk;
+       return ek + ik + Dk + fk + Sk + bk + rk + Pk + mk
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6891-L6892` → after: `L65-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L65-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L65-L98) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6891-L6892)

```diff
-     function HQ(QQ, FQ, wQ) {
-       wQ && (QQ.x -= QQ.x * wQ.x + wQ.y, QQ.y -= QQ.y * wQ.x + wQ.y, QQ.z -= QQ.z * wQ.x + wQ.y, FQ.x += FQ.x * wQ.x + wQ.y, FQ.y += FQ.y * wQ.x + wQ.y, FQ.z += FQ.z * wQ.x + wQ.y)
+     function rk() {
+       const kk = (0, fk.g)();
+       return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
+         const ek = Sk(kk);
+         if (null === ek) return [];
+         const {
+           terrainOpaque: ik,
+           terrainTransparent: Dk,
+           terrainPack: fk,
+           earthSky: rk,
+           skyMeshes: Pk,
+           regular: mk,
+           thin: Mk,
+           line: Kk,
+           text: xk,
+           particles: nk
+ ... (18 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6895-L6900` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L116-L118) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6895-L6900)

```diff
-     function bQ(QQ, FQ, wQ, qQ, oQ) {
-       const DQ = LQ.k.Ox[7],
-         kQ = LQ.k.Ox[8];
-       for (let vQ = 0; vQ < 2; ++vQ)
-         for (let mQ = 0; mQ < 2; ++mQ)
-           for (let uQ = 0; uQ < 2; ++uQ) DQ.set(vQ ? FQ.x : QQ.x, mQ ? FQ.y : QQ.y, uQ ? FQ.z : QQ.z), LQ.p.TransformCoordinatesToRef(DQ, wQ, kQ), qQ.minimizeInPlace(kQ), oQ.maximizeInPlace(kQ)
+     function Kk(kk) {
+       const ek = (0, Sk.g)();
+       return null !== ek && +kk === ek.api.localId
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6903-L6905` → after: `L121-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L121-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L121-L140) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6903-L6905)

```diff
-     function YQ(QQ, FQ, wQ, qQ, oQ) {
-       const DQ = LQ.k.Ox[7];
-       for (let kQ = 0; kQ < 3 * FQ; kQ += 3) LQ.p.TransformCoordinatesFromFloatsToRef(QQ[kQ], QQ[kQ + 1], QQ[kQ + 2], wQ, DQ), qQ.minimizeInPlace(DQ), oQ.maximizeInPlace(DQ)
+     function xk() {
+       Mk || (Mk = !0, (0, Pk.m)(bk.o, (kk => {
+         var ek, ik;
+         const Dk = (0, rk.i)(bk.o, kk);
+         if (!(0, rk.e)(Dk)) return;
+         const fk = Dk;
+         Kk(fk.ee) && nk(fk.ie, {
+           icon: fk.fe,
+           level: fk.Pe,
+           displayName: null !== (ek = fk.De) && void 0 !== ek ? ek : null,
+           durationMs: null !== (ik = fk.Se) && void 0 !== ik ? ik : null
+         })
+       })), (0, Pk.m)(bk.R, (kk => {
+         const ek = (0, rk.i)(bk.R, kk);
+         if (!(0, rk.e)(ek)) return;
+         const ik = ek;
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6907-L7058` → after: `L142-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L142-L150) · [Before (L6907-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L6907-L7058)

```diff
-     let xQ = !1;
-     xQ || (xQ = !0, DQ.c.prototype.thinInstanceAdd = function(QQ) {
-       let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.iN().Wx().getCaps().instancedArrays) return qQ.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(QQ) ? QQ.length : 1);
-       const wQ = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(QQ))
-         for (let LQ = 0; LQ < QQ.length; ++LQ) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, QQ[LQ], LQ === QQ.length - 1 && FQ);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, QQ, FQ);
-       return wQ
-     }, DQ.c.prototype.thinInstanceAddSelf = function() {
-       let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(LQ.c.IdentityReadOnly, QQ)
-     }, DQ.c.prototype.thinInstanceRegisterAttribute = function(QQ, FQ) {
-       QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), this.removeVerticesData(QQ), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[QQ] = FQ, this._userThinInstanceBuffersStorage.sizes[QQ] = FQ * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, DQ.c.prototype.thinInstanceSetMatrixAt = function(QQ, FQ) {
- ... (136 more removed lines; see GitHub link above)
+ 
+     function nk(kk, ek) {
+       Dk.e.update(kk, ek), mk.forEach((ek => {
+         ek(kk)
+       }))
+     }
+     const Uk = {
+       localEffectUpdated: {
+         watch: kk => mk.add(kk)
```

#### 10. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7060-L7069` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L152) · [Before (L7060-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7060-L7069)

```diff
-     }, DQ.c.prototype._thinInstanceInitializeUserStorage = function() {
-       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
-         data: {},
-         sizes: {},
-         vertexBuffers: {},
-         strides: {}
-       })
-     }, DQ.c.prototype._disposeThinInstanceSpecificData = function() {
-       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
-     })
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7071` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L154) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7071)

```diff
-   39862: (QQ, FQ, wQ) => {
+   40601: (kk, ek, ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7073-L7074` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L156) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7073-L7074)

```diff
-       c: () => MQ,
-       e: () => AQ
+       b: () => Mk
```

#### 13. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7076-L7084` → after: `L158-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L158-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L158-L166) · [Before (L7076-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7076-L7084)

```diff
-     var LQ, qQ, oQ, DQ, kQ = wQ(39402),
-       vQ = wQ(39409),
-       mQ = wQ(39426),
-       uQ = wQ(36722),
-       HQ = wQ(36696),
-       bQ = wQ(39650),
-       YQ = wQ(36741),
-       xQ = wQ(39277);
-     let AQ = (() => {
+     var Dk = ik(4741),
+       fk = ik(4735),
+       Sk = ik(40201),
+       bk = ik(40218);
+     const rk = new Set(Dk.P),
+       Pk = Dk.P.map((kk => (new TextEncoder).encode(kk))),
+       mk = new Map;
+ 
+     function Mk(kk, ek) {
```

#### 14. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7086-L7541` → after: `L168-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L168-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L168-L175) · [Before (L7086-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7086-L7541)

```diff
-       let FQ, wQ, LQ, qQ, oQ, DQ, YQ, xQ, AQ, tQ = bQ.c,
-         eQ = [],
-         MQ = [],
-         GQ = [],
-         pQ = [],
-         cQ = [],
-         CQ = [],
-         SQ = [],
-         iQ = [],
-         WQ = [],
-         RQ = [],
-         OQ = [],
-         sQ = [],
-         rQ = [],
-         IQ = [],
-         UQ = [],
- ... (440 more removed lines; see GitHub link above)
+       return null === (ik = mk.get(kk)) || void 0 === ik ? void 0 : ik[ek]
+     }(0, bk.m)(Dk.tc.NewOtherEntitySettings, (kk => {
+       kk.payloadKind === fk.zc.Msgpack && Pk.some((ek => function(kk, ek) {
+         const ik = ek[0];
+         for (let Dk = kk.indexOf(ik); - 1 !== Dk && Dk + ek.length <= kk.length; Dk = kk.indexOf(ik, Dk + 1)) {
+           let ik = 1;
+           for (; ik < ek.length && kk[Dk + ik] === ek[ik];) ik++;
+           if (ik === ek.length) return !0
```

#### 15. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7543-L7544` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L177-L186) · [Before (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7543-L7544)

```diff
-         _syncAbsoluteScalingAndRotation() {
-           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
+         return !1
+       }(kk.payload, ek))) && function(kk) {
+         if (null === kk || "object" !== typeof kk || null === kk.settings || "object" !== typeof kk.settings) return;
+         const ek = String(kk.eId),
+           ik = kk.settings;
+         let Dk = mk.get(ek);
+         for (const fk in ik) {
+           if (!rk.has(fk)) continue;
+           const kk = ik[fk];
+           null === kk || void 0 === kk ? Dk && delete Dk[fk] : (Dk ??= {}, Dk[fk] = kk)
```

#### 16. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7546-L7672` → after: `L188-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L188-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L188-L207) · [Before (L7546-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7546-L7672)

```diff
-       }, (() => {
-         const mQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(tQ[Symbol.metadata] ?? null) : void 0;
-         FQ = [(0, vQ.F)("position")], wQ = [(0, vQ.F)("rotation")], LQ = [(0, vQ.y)("rotationQuaternion")], qQ = [(0, vQ.F)("ck")], oQ = [(0, vQ.I)("billboardMode")], DQ = [(0, vQ.I)()], YQ = [(0, vQ.I)("infiniteDistance")], xQ = [(0, vQ.I)()], AQ = [(0, vQ.I)()], (0, kQ.i)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "_position" in QQ,
-             get: QQ => QQ._position,
-             set: (QQ, FQ) => {
-               QQ._position = FQ
-             }
-           },
-           metadata: mQ
-         }, eQ, MQ), (0, kQ.i)(null, null, wQ, {
- ... (111 more removed lines; see GitHub link above)
+         Dk && mk.set(ek, Dk)
+       }((0, Sk.b)(kk.payload))
+     })), (0, bk.g)((() => {
+       mk.clear()
+     }))
+   },
+   40594: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => nk,
+       h: () => mk,
+       j: () => Kk
+     });
+     var Dk = ik(38583),
+       fk = ik(1895),
+       Sk = ik(1276),
+       bk = ik(40191),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7674-L7684` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L209-L210) · [Before (L7674-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7674-L7684)

```diff
-     function tQ(QQ, FQ, wQ) {
-       const LQ = mQ.c.Parse((() => new AQ(QQ.name, FQ)), QQ, FQ, wQ);
-       if (QQ.localMatrix ? LQ.setPreTransformMatrix(HQ.c.FromArray(QQ.localMatrix)) : QQ.pivotMatrix && LQ.setPivotMatrix(HQ.c.FromArray(QQ.pivotMatrix)), LQ.Qr(QQ.isEnabled), LQ._waitingParsedUniqueId = QQ.uniqueId, void 0 !== QQ.parentId && (LQ._waitingParentId = QQ.parentId),  … [truncated]
-         for (let FQ = 0; FQ < QQ.animations.length; FQ++) {
-           const wQ = QQ.animations[FQ],
-             qQ = (0, YQ.b)("BABYLON.Animation");
-           qQ && LQ.animations.push(qQ.Parse(wQ))
-         }
-         bQ.c.ParseAnimationRanges(LQ, QQ, FQ)
-       }
-       return QQ.autoAnimate && FQ.beginAnimation(LQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), LQ
+     function Kk(kk) {
+       return Mk[kk]
```

#### 18. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7686` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L212) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7686)

```diff
-     let eQ = !1;
+     const xk = new Sk.d;
```

#### 19. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7688-L7690` → after: `L214-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L214-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L214-L277) · [Before (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7688-L7690)

```diff
-     function MQ() {
-       eQ || (eQ = !0, AQ.Parse = tQ)
-     }(LQ = AQ.prototype).lV ?? (LQ.lV = (0, xQ.g)("TransformNode", "lV")), (qQ = AQ.prototype).applyImpulse ?? (qQ.applyImpulse = (0, xQ.g)("TransformNode", "applyImpulse")), (oQ = AQ.prototype).applyAngularImpulse ?? (oQ.applyAngularImpulse = (0, xQ.g)("TransformNode", "applyAng … [truncated]
+     function nk(kk) {
+       return xk.add(kk)
+     }
+ 
+     function Uk(kk) {
+       xk.callEach(kk, "a roster listener")
+     }(0, Pk.m)(bk.$, (kk => {
+       const ek = (0, rk.i)(bk.$, kk);
+       if (void 0 === ek) return;
+       const ik = ek.ri.some((kk => {
+           let {
+             Pi: ek,
+             mi: ik
+           } = kk;
+           return null !== ik && mk.has(ek) && mk.getName(ek) !== ik
+         })),
+ ... (48 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7692-L7700` → after: `L279-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L279-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L279-L315) · [Before (L7692-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7692-L7700)

```diff
-   39833: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ, wQ) {
-       try {
-         const LQ = QQ.next();
-         LQ.done ? FQ(LQ) : LQ.value ? LQ.value.then((() => {
-           LQ.value = void 0, FQ(LQ)
-         }), wQ) : FQ(LQ)
-       } catch (LQ) {
-         wQ(LQ)
+   40606: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Vk,
+       f: () => wk,
+       j: () => Ik,
+       l: () => zk
+     });
+     var Dk = ik(1248),
+       fk = ik(585),
+       Sk = ik(99),
+       bk = ik(4741),
+       rk = ik(40157),
+       Pk = ik(40186),
+       mk = ik(40165),
+       Mk = ik(40601),
+       Kk = ik(40594),
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7704-L7710` → after: `L319-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L319-L329) · [Before (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7704-L7710)

```diff
-     function qQ() {
-       let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (wQ, qQ, oQ) => {
-         const DQ = performance.now();
-         void 0 === QQ || DQ - QQ > FQ ? (QQ = DQ, setTimeout((() => {
-           LQ(wQ, qQ, oQ)
-         }), 0)) : LQ(wQ, qQ, oQ)
+     function Hk(kk) {
+       let {
+         killer: ek,
+         victim: ik,
+         withItem: Dk
+       } = kk;
+       return {
+         killer: Yk(ek),
+         victim: Yk(ik),
+         withItem: Dk,
+         killstreak: 0
```

#### 22. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7714-L7724` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L333-L334) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7714-L7724)

```diff
-     function oQ(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = () => {
-         let DQ;
-         const kQ = QQ => {
-           QQ.done ? wQ(QQ.value) : void 0 === DQ ? DQ = !0 : oQ()
-         };
-         do {
-           DQ = void 0, qQ && qQ.aborted ? LQ(new Error("Aborted")) : FQ(QQ, kQ, LQ), void 0 === DQ && (DQ = !1)
-         } while (DQ)
-       };
-       oQ()
+     function wk(kk) {
+       jk && dk((() => "killed" === kk.kind ? Uk(kk.body) : Hk(kk.body)))
```

#### 23. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7728-L7731` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L340-L341) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7728-L7731)

```diff
-       let wQ;
-       return oQ(QQ, LQ, (QQ => wQ = QQ), (QQ => {
-         throw QQ
-       }), FQ), wQ
+       var ik;
+       return Kk.h.has(kk) ? null === (ik = Kk.h.getSettings(kk)) || void 0 === ik ? void 0 : ik[ek] : (0, Mk.b)(kk, ek)
```

#### 24. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7733-L7736` → after: `L343-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L343-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L343-L390) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7733-L7736)

```diff
-     async function kQ(QQ, FQ, wQ) {
-       return await new Promise(((LQ, qQ) => {
-         oQ(QQ, FQ, LQ, qQ, wQ)
-       }))
+ 
+     function Yk(kk) {
+       var ek, ik, bk, rk, Mk;
+       let {
+         eId: xk,
+         name: nk,
+         colour: Uk,
+         lifeformType: Hk
+       } = kk;
+       if (void 0 === xk || null === xk || "" === xk) {
+         const kk = nk || null;
+         return {
+           id: null,
+           shownName: kk,
+           lifeformType: null === kk && null !== Hk && void 0 !== Hk ? Hk : null,
+           colour: Uk || null,
+ ... (32 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7739-L7741` → after: `L393-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L393-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L393-L441) · [Before (L7739-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7739-L7741)

```diff
-     function vQ(QQ, FQ) {
-       return function() {
-         return DQ(QQ(...arguments), FQ)
+     function Vk() {
+       sk || (sk = !0, (0, nk.m)(bk.tc.PlayerKilled, (kk => {
+         const ek = (0, xk.k)(kk);
+         (0, xk.e)(ek) && dk((() => Uk(ek)))
+       })), (0, nk.m)(bk.tc.CustomKillfeed, (kk => {
+         const ek = (0, xk.k)(kk);
+         (0, xk.e)(ek) && (0, xk.e)(ek.killer) && (0, xk.e)(ek.victim) && dk((() => Hk(ek)))
+       })), (0, nk.g)((() => {
+         Ck = []
+       })))
+     }
+     const Fk = Object.freeze([0, 0, 0]),
+       uk = [0, 0, 0],
+       qk = [0, 0, 0],
+       Ik = {
+         kill: {
+ ... (33 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7743` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L443-L444) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7743)

```diff
-     }
+   },
+   38583: (kk, ek, ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7745-L7749` → after: `L446-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L446-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/243.js#L446-L504) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/243.js#L7745-L7749)

```diff
-       b: () => qQ,
-       c: () => vQ,
-       f: () => kQ,
-       h: () => DQ
-     })
+       d: () => Dk
+     });
+     class Dk {
+       constructor() {
+         this.members = new Map
+       }
+       apply(kk) {
+         const ek = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const Dk of kk.ri) {
+           let kk = this.members.get(Dk.Pi);
+           if (kk || (kk = {
+               name: null,
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L4-L9)

```diff
-   39561: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => kQ,
-       d: () => AQ,
-       e: () => mQ,
-       h: () => vQ
+   39021: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => iD
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L11-L56` → after: `L8-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L8-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L8-L93) · [Before (L11-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L11-L56)

```diff
-     var LQ = wQ(39330),
-       qQ = wQ(38203),
-       oQ = wQ(39470),
-       DQ = wQ(39376);
-     class kQ {
-       get vW() {
-         return this._isDisposed
-       }
-       constructor(QQ, FQ, wQ) {
-         let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           kQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           vQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           mQ = arguments.length > 7 ? arguments[7] : void 0,
-           uQ = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, DQ.b)(), QQ && QQ.iN ? this._engine = QQ.iN().Wx() : this._engine = QQ, this._updatable = wQ, this._instanced = kQ, this._divisor = mQ || 1, this._label = uQ, FQ instanceof LQ.c ? (this._data = null, this._buffer = FQ) … [truncated]
- ... (30 more removed lines; see GitHub link above)
+     const Dk = [0, 90, 180, 270],
+       fk = "plotsblueprint";
+     var Sk = ik(60),
+       bk = ik(36143),
+       rk = ik(22),
+       Pk = ik(1614),
+       mk = ik(1688),
+       Mk = ik(26);
+     const Kk = [
+         ["farm_hut", "farm_house", "farm_barn"],
+         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
+         ["market_stand", "market_stall", "market_shop"],
+         ["castle_wall", "castle_gate", "castle_tower"]
+       ],
+       xk = {
+         farm_hut: {
+ ... (70 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L58-L71` → after: `L95-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L95-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L95-L142) · [Before (L58-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L58-L71)

```diff
-       }
-       update(QQ) {
-         this.create(QQ)
-       }
-       updateDirectly(QQ, FQ, wQ) {
-         let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, QQ, LQ ? FQ : FQ * Float32Array.BYTES_PER_ELEMENT, wQ ? wQ * this.byteStride : void 0), this._data = 0 === FQ && void 0 === wQ ? QQ : null)
-       }
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
-       }
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
-       }
+       },
+       nk = ["small", "medium", "large"].flatMap((kk => Kk.flat().filter((ek => xk[ek].tier === kk))));
+ 
+     function Uk(kk) {
+       return xk[kk]
+     }
+     const Hk = new Map(Kk.flatMap((kk => kk.slice(1).map(((ek, ik) => [ek, kk[ik]])))));
+ 
+     function wk(kk) {
+       var ek;
+       return null !== (ek = Hk.get(kk)) && void 0 !== ek ? ek : null
+     }
+     const lk = {
+       farm_hut: "plotsGame:journalNoteFarmHut",
+       rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
+       castle_tower: "plotsGame:journalNoteCastleTower",
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L74-L119` → after: `L146-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L146-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L146-L152) · [Before (L74-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L74-L119)

```diff
-       get vW() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(QQ) {
-         const FQ = 0 != QQ;
-         this._instanceDivisor = QQ, FQ !== this._instanced && (this._instanced = FQ, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const QQ = this.getData();
-         return QQ ? Array.isArray(QQ) ? QQ.length / (this.byteStride / 4) - this.byteOffset / 4 : (QQ.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(QQ, FQ, wQ, LQ, qQ, DQ, HQ, bQ, YQ, xQ) {
-         let AQ, tQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
- ... (30 more removed lines; see GitHub link above)
+       constructor(kk, ek) {
+         this.api = kk, this.placement = ek, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
+           this.placement.stop(), this.CU("journal_opened")
+         }, this.build = kk => {
+           this.CU("placement_started"), this.placement.start(kk), (0, bk.d)()
+         }, this.putAway = () => {
+           this.api.sendCommand(`${fk} cancel`)
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L122-L132` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L155-L156) · [Before (L122-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L122-L132)

```diff
-       _computeHashCode() {
-         this.hashCode = (vQ._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
+       getPages() {
+         return this.pages
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L134-L145` → after: `L158-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L158-L160) · [Before (L134-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L134-L145)

```diff
-       getData() {
-         return this._buffer.getData()
-       }
-       getFloatData(QQ, FQ) {
-         const wQ = this.getData();
-         return wQ ? (0, oQ.n)(wQ, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, QQ, FQ) : null
-       }
-       getBuffer() {
-         return this._buffer.getBuffer()
-       }
-       getWrapperBuffer() {
-         return this._buffer
+       BU(kk) {
+         let [, ek, ik] = kk;
+         this.pages = pk(ek, ik), Mk.j.tm(yk, this.pages, !0)
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L147-L148` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L162-L163) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L147-L148)

```diff
-       getStrideSize() {
-         return this.byteStride / (0, oQ.q)(this.type)
+       openFromServer() {
+         this.openRequested = !0, this.Px()
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L150-L151` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L165-L166) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L150-L151)

```diff
-       RwQ() {
-         return this.byteOffset / (0, oQ.q)(this.type)
+       Px() {
+         this.openRequested && !rk.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Pk.s)() || (0, mk.isTypingInInput)() || null !== this.placement.getView() || (0, bk.r)())
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L153-L154` → after: `L168-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L168-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L168-L197) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L153-L154)

```diff
-       getSize() {
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, oQ.q)(this.type) : this._size
+       CU(kk) {
+         this.reported.has(kk) || (this.reported.add(kk), this.api.sendCommand(`${fk} report ${kk}`))
+       }
+     }
+     var Lk = ik(1021),
+       Ck = ik.n(Lk),
+       Ak = ik(1033),
+       jk = ik(1410),
+       sk = ik(4471),
+       dk = ik(3383),
+       Vk = ik(1406),
+       Fk = ik(1087),
+       uk = ik(1172),
+       qk = ik(9020);
+     const Ik = [0, 90, 180, 270],
+       zk = /^(meta\|rot\d)\|([lrud]+)$/,
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L156-L157` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L199-L201) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L156-L157)

```diff
-       getIsInstanced() {
-         return this._instanced
+       static
+       for (kk) {
+         return Ek(kk)
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L159-L160` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L203-L206) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L159-L160)

```diff
-       getInstanceDivisor() {
-         return this._instanceDivisor
+       getBlockIdMapping(kk, ek) {
+         const ik = this.getBlockIdMappingKey(kk, ek);
+         let Dk = this.blockIdMappings.get(ik);
+         return void 0 === Dk && Ik.includes(kk) && (Dk = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, kk, ek), this.blockIdMappings.set(ik, Dk)), Dk
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L162-L163` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L208-L209) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L162-L163)

```diff
-       create(QQ) {
-         this._buffer.create(QQ), this._alignBuffer()
+       turnBlockId(kk, ek, ik) {
+         return this.mapBlockId(this.blockMetadata[kk], ek, this.getRotationMapping(ek, ik), ik)
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L165-L166` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L211-L212) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L165-L166)

```diff
-       update(QQ) {
-         this._buffer.update(QQ), this._alignBuffer()
+       getBlockIdMappingKey(kk, ek) {
+         return `r${kk}|m${Number(ek)}`
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L168-L170` → after: `L214-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L214-L221) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L168-L170)

```diff
-       updateDirectly(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._buffer.updateDirectly(QQ, FQ, void 0, wQ), this._alignBuffer()
+       createBlockIdMapping(kk, ek, ik, Dk) {
+         const fk = new Uint16Array(ek + 1),
+           Sk = this.getRotationMapping(ik, Dk);
+         for (const bk in kk) {
+           const ek = kk[bk];
+           fk[ek.id] = this.mapBlockId(ek, ik, Sk, Dk)
+         }
+         return fk
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L172-L173` → after: `L223-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L223-L231) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L172-L173)

```diff
-       dispose() {
-         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       getRotationMapping(kk, ek) {
+         const ik = Math.round(kk / 90),
+           Dk = new Uint8Array(4);
+         for (let fk = 0; fk < 4; fk++) Dk[fk] = (4 + fk - ik) % 4;
+         if (ek) {
+           let kk = Dk[0];
+           Dk[0] = Dk[1], Dk[1] = kk, kk = Dk[2], Dk[2] = Dk[3], Dk[3] = kk
+         }
+         return Dk
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L175-L178` → after: `L233-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L233-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L233-L267) · [Before (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L175-L178)

```diff
-       forEach(QQ, FQ) {
-         (0, oQ.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, QQ, this.normalized, ((QQ, wQ) => {
-           for (let LQ = 0; LQ < this._size; LQ++) FQ(QQ[LQ], wQ + LQ)
-         }))
+       mapBlockId(kk, ek, ik, Dk) {
+         var fk;
+         const {
+           blockMetadata: Sk
+         } = this, bk = Math.round(ek / 90), {
+           id: rk,
+           meta: Pk
+         } = kk, {
+           rot: mk,
+           rootName: Mk,
+           metaStr: Kk
+         } = Pk;
+         let xk;
+         const [, nk, Uk] = null !== (fk = vk.exec(Kk)) && void 0 !== fk ? fk : [];
+         if (void 0 !== nk) {
+           var Hk, wk;
+ ... (19 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L183-L204` → after: `L271-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L271-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L271-L399) · [Before (L183-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L183-L204)

```diff
-     function mQ(QQ) {
-       switch (QQ) {
-         case vQ.UVKind:
-         case vQ.UV2Kind:
-         case vQ.UV3Kind:
-         case vQ.UV4Kind:
-         case vQ.UV5Kind:
-         case vQ.UV6Kind:
-           return 2;
-         case vQ.NormalKind:
-         case vQ.PositionKind:
-           return 3;
-         case vQ.ColorKind:
-         case vQ.ColorInstanceKind:
-         case vQ.MatricesIndicesKind:
-         case vQ.MatricesIndicesExtraKind:
- ... (6 more removed lines; see GitHub link above)
+     function ak(kk, ek, ik) {
+       let {
+         xRotationMappedOrigin: Dk,
+         shouldSwapXZ: fk
+       } = ik;
+       const Sk = fk ? ek : kk;
+       return null === Dk ? Sk : Dk - Sk
+     }
+ 
+     function Wk(kk, ek, ik) {
+       let {
+         zRotationMappedOrigin: Dk,
+         shouldSwapXZ: fk
+       } = ik;
+       const Sk = fk ? kk : ek;
+       return null === Dk ? Sk : Dk - Sk
+ ... (113 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L209` → after: `L425-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L425-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/244.js#L425-L492) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/244.js#L209)

```diff
-       return QQ instanceof Int8Array ? vQ.BYTE : QQ instanceof Uint8Array ? vQ.UNSIGNED_BYTE : QQ instanceof Int16Array ? vQ.SHORT : QQ instanceof Uint16Array ? vQ.UNSIGNED_SHORT : QQ instanceof Int32Array ? vQ.INT : QQ instanceof Uint32Array ? vQ.UNSIGNED_INT : vQ.FLOAT
+       let {
+         page: ek,
+         building: ik,
+         onBuild: Dk,
+         onPutAway: fk
+       } = kk;
+       const {
+         t: Sk
+       } = (0, uk.D)(), {
+         displayName: bk,
+         tier: rk
+       } = Uk(ek.id), Pk = Bk(ek.id, 0).cells.length, mk = lk[ek.id], Mk = "locked" === ek.state, Kk = ik ? jk.f : jk.r;
+       return (0, Tk.jsxs)("article", {
+         className: Ck()("PlotsJournalPage", {
+           Locked: Mk
+         }),
+ ... (52 more added lines; see GitHub link above)
```
