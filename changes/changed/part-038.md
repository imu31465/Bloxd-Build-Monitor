# Changed — Bundle Modifications Report (Part 038 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `38 / 47` (**420** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 037](part-037.md) · [Part 039 →](part-039.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (895 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 341. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3298-L3299` → after: `L3285-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3285-L3286) · [Before (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3298-L3299)

```diff
-                 for (let uQ = xQ.rb.recipes(QQ, 0); uQ > 0; uQ--) {
-                   const wQ = xQ.ib.flags(QQ, LQ),
+                 for (let Mk = Uk.Z.recipes(kk, 0); Mk > 0; Mk--) {
+                   const ik = Uk.U.flags(kk, Dk),
```

#### 342. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3301-L3302` → after: `L3288-L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3288-L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3288-L3289) · [Before (L3301-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3301-L3302)

```diff
-                       name: FQ.nameOfId(xQ.ib.item(QQ, LQ)),
-                       Cm: xQ.ib.recipe(QQ, LQ),
+                       name: ek.nameOfId(Uk.U.item(kk, Dk)),
+                       vM: Uk.U.recipe(kk, Dk),
```

#### 343. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3304-L3306` → after: `L3291-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3291-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3291-L3293) · [Before (L3304-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3304-L3306)

```diff
-                       produces: xQ.ib.produces(QQ, LQ),
-                       haveIngredients: 0 !== (wQ & xQ.gb.HaveIngredients),
-                       listed: 0 !== (wQ & xQ.gb.Listed)
+                       produces: Uk.U.produces(kk, Dk),
+                       haveIngredients: 0 !== (ik & Uk.Q.HaveIngredients),
+                       listed: 0 !== (ik & Uk.Q.Listed)
```

#### 344. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3308-L3310` → after: `L3295-L3297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3295-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3295-L3297) · [Before (L3308-L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3308-L3310)

```diff
-                   let DQ = xQ.ib.requires(QQ, LQ);
-                   for (LQ += xQ.ib.BYTES; DQ > 0; DQ--) {
-                     const wQ = xQ.mb.items(QQ, LQ);
+                   let bk = Uk.U.requires(kk, Dk);
+                   for (Dk += Uk.U.BYTES; bk > 0; bk--) {
+                     const ik = Uk.X.items(kk, Dk);
```

#### 345. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3312-L3314` → after: `L3299-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3299-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3299-L3301) · [Before (L3312-L3314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3312-L3314)

```diff
-                       items: tL(QQ, LQ + xQ.mb.BYTES, wQ, FQ),
-                       amt: xQ.mb.amount(QQ, LQ)
-                     }), LQ += xQ.mb.BYTES + 2 * wQ
+                       items: pD(kk, Dk + Uk.X.BYTES, ik, ek),
+                       amt: Uk.X.amount(kk, Dk)
+                     }), Dk += Uk.X.BYTES + 2 * ik
```

#### 346. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3318-L3319` → after: `L3305-L3306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3305-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3305-L3306) · [Before (L3318-L3319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3318-L3319)

```diff
-                 const oQ = xQ.rb.flags(QQ, 0);
-                 if (null === wQ.recipe || 0 === (oQ & xQ.nb.Detail)) return {
+                 const Sk = Uk.Z.flags(kk, 0);
+                 if (null === ik.recipe || 0 === (Sk & Uk.Y.Detail)) return {
```

#### 347. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3326-L3331` → after: `L3313-L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3313-L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3313-L3318) · [Before (L3326-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3326-L3331)

```diff
-                 for (let uQ = xQ.rb.ingredients(QQ, 0); uQ > 0; uQ--) {
-                   const wQ = xQ.fb.item(QQ, LQ),
-                     qQ = xQ.fb.from(QQ, LQ),
-                     oQ = xQ.fb.amount(QQ, LQ);
-                   LQ += xQ.fb.BYTES;
-                   const vQ = qQ === xQ.I ? null : tL(QQ, LQ, qQ, FQ);
+                 for (let Mk = Uk.Z.ingredients(kk, 0); Mk > 0; Mk--) {
+                   const ik = Uk.O.item(kk, Dk),
+                     fk = Uk.O.from(kk, Dk),
+                     Sk = Uk.O.amount(kk, Dk);
+                   Dk += Uk.O.BYTES;
+                   const Pk = fk === Uk.B ? null : pD(kk, Dk, fk, ek);
```

#### 348. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3338` → after: `L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3325) · [Before (L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3338)

```diff
-                   Cm: mQ
+                   vM: mk
```

#### 349. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3345-L3347` → after: `L3332-L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3332-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3332-L3334) · [Before (L3345-L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3345-L3347)

```diff
-                     Cm: mQ,
-                     craftAllTimes: xQ.rb.craftAllTimes(QQ, 0),
-                     roomForOne: 0 !== (oQ & xQ.nb.RoomForOne),
+                     vM: mk,
+                     craftAllTimes: Uk.Z.craftAllTimes(kk, 0),
+                     roomForOne: 0 !== (Sk & Uk.Y.RoomForOne),
```

#### 350. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3370` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3357) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3370)

```diff
-             for (let FQ = 0; FQ < xQ.td; FQ++) LQ.push(uL(QQ.slot(FQ)));
+             for (let ek = 0; ek < Uk.id; ek++) Dk.push(xD(kk.slot(ek)));
```

#### 351. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3380-L3381` → after: `L3367-L3368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3367-L3368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3367-L3368) · [Before (L3380-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3380-L3381)

```diff
-             if (wQ > xQ.td) {
-               for (let FQ = xQ.td; FQ < wQ; FQ++) kQ.push(uL(QQ.slot(FQ)));
+             if (ik > Uk.id) {
+               for (let ek = Uk.id; ek < ik; ek++) rk.push(xD(kk.slot(ek)));
```

#### 352. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3384-L3385` → after: `L3371-L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3371-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3371-L3372) · [Before (L3384-L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3384-L3385)

```diff
-                 pos: [...QQ.VQ],
-                 numSlots: wQ - xQ.td,
+                 pos: [...kk.le],
+                 numSlots: ik - Uk.id,
```

#### 353. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3397` → after: `L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3384) · [Before (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3397)

```diff
-           }), (0, FL.k)("creative")),
+           }), (0, DD.o)("creative")),
```

#### 354. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3407` → after: `L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3394) · [Before (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3407)

```diff
-           }), (0, FL.g)("DisplayName", "GunStats")),
+           }), (0, DD.k)("DisplayName", "GunStats")),
```

#### 355. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3412` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3399) · [Before (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3412)

```diff
-             const LQ = null === (FQ = QQ.ym()) || void 0 === FQ ? void 0 : FQ.typeObj,
+             const Dk = null === (ek = kk.XM()) || void 0 === ek ? void 0 : ek.typeObj,
```

#### 356. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3428-L3435` → after: `L3415-L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3415-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3415-L3422) · [Before (L3428-L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3428-L3435)

```diff
-           hotbarSlotRequested: (0, FL.b)("setSelectedInventorySlotI"),
-           hotbarScrolled: (0, FL.b)("ScrollInventorySlot"),
-           numberKeyPressed: (0, FL.b)("numkeyPressed"),
-           inventoryDropRequested: (0, FL.b)("DropInvenItem"),
-           chestToggled: (0, FL.b)("chestToggleFromServer"),
-           chestRefreshed: (0, FL.b)("chestRefreshedFromServer", AL),
-           inventorySynced: (0, FL.b)("syncedInvenFromServer", AL),
-           enchantingTableOpened: (0, FL.b)("enchantingTable", (QQ => {
+           hotbarSlotRequested: (0, DD.d)("setSelectedInventorySlotI"),
+           hotbarScrolled: (0, DD.d)("ScrollInventorySlot"),
+           numberKeyPressed: (0, DD.d)("numkeyPressed"),
+           inventoryDropRequested: (0, DD.d)("DropInvenItem"),
+           chestToggled: (0, DD.d)("chestToggleFromServer"),
+           chestRefreshed: (0, DD.d)("chestRefreshedFromServer", lD),
+           inventorySynced: (0, DD.d)("syncedInvenFromServer", lD),
+           enchantingTableOpened: (0, DD.d)("enchantingTable", (kk => {
```

#### 357. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3438` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3425) · [Before (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3438)

```diff
-               um: LQ
+               wP: Dk
```

#### 358. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3483` → after: `L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3470) · [Before (L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3483)

```diff
-             QQ.closeChest(), QQ.flush(LQ), DQ.l.GA("chestClosedByPlayer")
+             kk.closeChest(), kk.flush(Dk), bk.j.tm("chestClosedByPlayer")
```

#### 359. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3491` → after: `L3478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3478) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3491)

```diff
-               Cm: LQ,
+               vM: Dk,
```

#### 360. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3525` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3512) · [Before (L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3525)

```diff
-               for (let kQ = 0; kQ < wL.d; kQ++) {
+               for (let rk = 0; rk < fD.e; rk++) {
```

#### 361. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3533` → after: `L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3520) · [Before (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3533)

```diff
-                 } = (0, QL.d)(LQ, kQ);
+                 } = (0, iD.f)(Dk, rk);
```

#### 362. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3568` → after: `L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3555) · [Before (L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3568)

```diff
-           u9: 0,
+           PJ: 0,
```

#### 363. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3571` → after: `L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3558) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3571)

```diff
-           nY: [0, 0, 0]
+           gr: [0, 0, 0]
```

#### 364. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3578` → after: `L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3565) · [Before (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3578)

```diff
-       XQQ() {
+       bkk() {
```

#### 365. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3587-L3588` → after: `L3574-L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3574-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3574-L3575) · [Before (L3587-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3587-L3588)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (xQ.v.playerFlags(QQ, 0) & xQ.Gd.Breaking) && xQ.v.breakingProgress(QQ, 0) >= 0, this.isBreaking)
-           for (let FQ = 0; FQ < 3; FQ++) this.breaking[FQ] = xQ.v.breakingPos(QQ, 0, FQ)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (Uk.t.playerFlags(kk, 0) & Uk.yd.Breaking) && Uk.t.breakingProgress(kk, 0) >= 0, this.isBreaking)
+           for (let ek = 0; ek < 3; ek++) this.breaking[ek] = Uk.t.breakingPos(kk, 0, ek)
```

#### 366. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3592-L3593` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3579-L3580) · [Before (L3592-L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3592-L3593)

```diff
-           FQ = xQ.v.targetBlockId(QQ, 0);
-         if (this.hasTarget = FQ !== xQ.ed, this.hasTarget) {
+           ek = Uk.t.targetBlockId(kk, 0);
+         if (this.hasTarget = ek !== Uk.Vc, this.hasTarget) {
```

#### 367. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3595-L3596` → after: `L3582-L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3582-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3582-L3583) · [Before (L3595-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3595-L3596)

```diff
-           wQ.u9 = FQ;
-           for (let FQ = 0; FQ < 3; FQ++) wQ.position[FQ] = xQ.v.targetBlock(QQ, 0, FQ), wQ.normal[FQ] = xQ.v.targetNormal(QQ, 0, FQ), wQ.nY[FQ] = xQ.v.targetAdjacent(QQ, 0, FQ)
+           ik.PJ = ek;
+           for (let ek = 0; ek < 3; ek++) ik.position[ek] = Uk.t.targetBlock(kk, 0, ek), ik.normal[ek] = Uk.t.targetNormal(kk, 0, ek), ik.gr[ek] = Uk.t.targetAdjacent(kk, 0, ek)
```

#### 368. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3604-L3606` → after: `L3591-L3593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3591-L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3591-L3593) · [Before (L3604-L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3604-L3606)

```diff
-     var ML = wQ(40054),
-       GL = wQ(40031),
-       pL = wQ(36422);
+     var YD = ik(40210),
+       LD = ik(40191),
+       CD = ik(36376);
```

#### 369. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3611` → after: `L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3598) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3611)

```diff
-         this.game = new pL.f, this.client = new pL.f, this.ym = 0, this.movesFly = null
+         this.game = new CD.g, this.client = new CD.g, this.XM = 0, this.movesFly = null
```

#### 370. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3625` → after: `L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3612) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3625)

```diff
-         this.game = new pL.f, this.movesFly = null
+         this.game = new CD.g, this.movesFly = null
```

#### 371. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3631` → after: `L3618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3618) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3631)

```diff
-         return (this.game._getTotalBooleanVal() ? cL : 0) | (this.client._getTotalBooleanVal() ? CL : 0)
+         return (this.game._getTotalBooleanVal() ? AD : 0) | (this.client._getTotalBooleanVal() ? jD : 0)
```

#### 372. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3638-L3640` → after: `L3625-L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3625-L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3625-L3627) · [Before (L3638-L3640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3638-L3640)

```diff
-         if (FQ === this.ym && null === wQ) return !0;
-         let LQ = xQ.bc.Keep;
-         return null !== wQ && (LQ = wQ ? xQ.bc.On : xQ.bc.Off), !(!QQ || !(0, xQ.ve)(QQ, 0, LQ, FQ, wQ ? 1 : 0)) && (this.ym = FQ, this.movesFly = null, !0)
+         if (ek === this.XM && null === ik) return !0;
+         let Dk = Uk.Jb.Keep;
+         return null !== ik && (Dk = ik ? Uk.Jb.On : Uk.Jb.Off), !(!kk || !(0, Uk.oe)(kk, 0, Dk, ek, ik ? 1 : 0)) && (this.XM = ek, this.movesFly = null, !0)
```

#### 373. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3647` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3634) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3647)

```diff
-           x: kQ.d,
+           x: rk.c,
```

#### 374. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3655` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3642) · [Before (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3655)

```diff
-           FQ = xQ.v.viewProj;
+           ek = Uk.t.viewProj;
```

#### 375. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3663` → after: `L3650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3650) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3663)

```diff
-         for (let wQ = 0; wQ < 3; wQ++) FQ[wQ] = xQ.v.eye(QQ, 0, wQ);
+         for (let ik = 0; ik < 3; ik++) ek[ik] = Uk.t.eye(kk, 0, ik);
```

#### 376. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3668` → after: `L3655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3655) · [Before (L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3668)

```diff
-           FQ = xQ.v.viewProj,
+           ek = Uk.t.viewProj,
```

#### 377. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3679` → after: `L3666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3666) · [Before (L3679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3679)

```diff
-         return xQ.v.heading(this.api.apiView, 0)
+         return Uk.t.heading(this.api.apiView, 0)
```

#### 378. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3682` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3669) · [Before (L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3682)

```diff
-         return xQ.v.pitch(this.api.apiView, 0)
+         return Uk.t.pitch(this.api.apiView, 0)
```

#### 379. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3685` → after: `L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3672) · [Before (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3685)

```diff
-         return xQ.v.tanHalfFovX(this.api.apiView, 0)
+         return Uk.t.tanHalfFovX(this.api.apiView, 0)
```

#### 380. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3688` → after: `L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3675) · [Before (L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3688)

```diff
-         return xQ.v.tanHalfFovY(this.api.apiView, 0)
+         return Uk.t.tanHalfFovY(this.api.apiView, 0)
```

#### 381. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3708-L3710` → after: `L3695-L3697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3695-L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3695-L3697) · [Before (L3708-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3708-L3710)

```diff
-           kQ = xQ.v.viewProj,
-           vQ = oQ > 0 ? FQ / oQ : 0,
-           mQ = oQ > 0 ? -wQ / oQ : 0,
+           rk = Uk.t.viewProj,
+           Pk = Sk > 0 ? ek / Sk : 0,
+           mk = Sk > 0 ? -ik / Sk : 0,
```

#### 382. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3738-L3741` → after: `L3725-L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3725-L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3725-L3728) · [Before (L3738-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3738-L3741)

```diff
-           wQ = QQ[0] - xQ.v.origin(FQ, 0, 0),
-           LQ = QQ[1] - xQ.v.origin(FQ, 0, 1),
-           qQ = QQ[2] - xQ.v.origin(FQ, 0, 2),
-           oQ = xQ.v.viewProj;
+           ik = kk[0] - Uk.t.origin(ek, 0, 0),
+           Dk = kk[1] - Uk.t.origin(ek, 0, 1),
+           fk = kk[2] - Uk.t.origin(ek, 0, 2),
+           Sk = Uk.t.viewProj;
```

#### 383. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3745` → after: `L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3732) · [Before (L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3745)

```diff
-         return (0, kQ.f)(QQ, FQ, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, rk.g)(kk, ek, this.screenBandPct.x, this.screenBandPct.y)
```

#### 384. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3748` → after: `L3735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3735) · [Before (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3748)

```diff
-     var WL = wQ(4651);
+     var VD = ik(4750);
```

#### 385. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3750` → after: `L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3737) · [Before (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3750)

```diff
-       OL = new Uint8Array(xQ.Q * xQ.O);
+       uD = new Uint8Array(Uk.H * Uk.E);
```

#### 386. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3753` → after: `L3740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3740) · [Before (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3753)

```diff
-         this.buttons = [], this.ym = !0
+         this.buttons = [], this.XM = !0
```

#### 387. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3756` → after: `L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3743) · [Before (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3756)

```diff
-         this.buttons = QQ, this.ym = !1
+         this.buttons = kk, this.XM = !1
```

#### 388. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3759` → after: `L3746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3746) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3759)

```diff
-         this.ym = 0 === this.buttons.length
+         this.XM = 0 === this.buttons.length
```

#### 389. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3762-L3764` → after: `L3749-L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3749-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3749-L3751) · [Before (L3762-L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3762-L3764)

```diff
-         if (this.ym) return;
-         const FQ = new Uint8Array(xQ.Q),
-           wQ = new Uint8Array(xQ.Q);
+         if (this.XM) return;
+         const ek = new Uint8Array(Uk.H),
+           ik = new Uint8Array(Uk.H);
```

#### 390. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3772` → after: `L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3759) · [Before (L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3772)

```diff
-           if (LQ === xQ.Q) break;
+           if (Dk === Uk.H) break;
```

#### 391. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3776` → after: `L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3763) · [Before (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3776)

```diff
-           } = RL.encodeInto(oQ, OL.subarray(qQ, qQ + xQ.O));
+           } = FD.encodeInto(Sk, uD.subarray(fk, fk + Uk.E));
```

#### 392. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3778-L3779` → after: `L3765-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3765-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3765-L3766) · [Before (L3778-L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3778-L3779)

```diff
-           const vQ = WL.f[DQ];
-           FQ[LQ] = "number" === typeof vQ ? vQ : 0, wQ[LQ] = kQ, LQ++, qQ += kQ
+           const Pk = VD.n[bk];
+           ek[Dk] = "number" === typeof Pk ? Pk : 0, ik[Dk] = rk, Dk++, fk += rk
```

#### 393. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3781` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3768) · [Before (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3781)

```diff
-         this.ym = (0, xQ.je)(QQ, 0, LQ, FQ, wQ, OL.subarray(0, qQ))
+         this.XM = (0, Uk.de)(kk, 0, Dk, ek, ik, uD.subarray(0, fk))
```

#### 394. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3787-L3788` → after: `L3774-L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3774-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3774-L3775) · [Before (L3787-L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3787-L3788)

```diff
-       return LQ.length <= xQ.O && function(QQ, FQ, wQ, LQ) {
-         return (0, JF.d)(), (0, xQ.jf)(QQ, FQ, wQ, LQ)
+       return Dk.length <= Uk.E && function(kk, ek, ik, Dk) {
+         return (0, oe.b)(), (0, Uk.cf)(kk, ek, ik, Dk)
```

#### 395. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3796-L3798` → after: `L3783-L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3783-L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3783-L3785) · [Before (L3796-L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3796-L3798)

```diff
-         off: xQ.Hd.Off,
-         key: xQ.Hd.Key,
-         touch: xQ.Hd.Touch
+         off: Uk.zd.Off,
+         key: Uk.zd.Key,
+         touch: Uk.zd.Touch
```

#### 396. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3803-L3804` → after: `L3790-L3791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3790-L3791) · [Before (L3803-L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3803-L3804)

```diff
-         this.options = QQ, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
-           if ((0, YQ.f)(QQ)) throw QQ;
+         this.options = kk, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+           if ((0, nk.h)(kk)) throw kk;
```

#### 397. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3806` → after: `L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3793) · [Before (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3806)

```diff
-         }, this.api = QQ.api, this.tables = QQ.tables, this.onError = null !== (FQ = QQ.onError) && void 0 !== FQ ? FQ : QQ => {
+         }, this.api = kk.api, this.tables = kk.tables, this.onError = null !== (ek = kk.onError) && void 0 !== ek ? ek : kk => {
```

#### 398. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3862` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3849) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3862)

```diff
-         return this.itemSources ??= YL(this.items, this.tables, (() => this.localPlayerAlive()), this.hY), this.itemSources
+         return this.itemSources ??= HD(this.items, this.tables, (() => this.localPlayerAlive()), this.CU), this.itemSources
```

#### 399. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3878` → after: `L3865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3865) · [Before (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3878)

```diff
-         return null !== FQ && (wQ = FQ, LQ = 0, qQ = QQ[0], oQ = QQ[1], DQ = QQ[2], (0, JF.d)(), (0, xQ.re)(wQ, LQ, qQ, oQ, DQ));
+         return null !== ek && (ik = ek, Dk = 0, fk = kk[0], Sk = kk[1], bk = kk[2], (0, oe.b)(), (0, Uk.ke)(ik, Dk, fk, Sk, bk));
```

#### 400. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3886` → after: `L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3873) · [Before (L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3886)

```diff
-         return null === FQ ? (this.pendingZoom = QQ, !1) : (this.pendingZoom = null, (0, xQ.Yf)(FQ, 0, QQ, 1))
+         return null === ek ? (this.pendingZoom = kk, !1) : (this.pendingZoom = null, (0, Uk.Nf)(ek, 0, kk, 1))
```

#### 401. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3890` → after: `L3877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3877) · [Before (L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3890)

```diff
-         return null !== FQ && (0, xQ.Qf)(FQ, 0, QQ ? 1 : 0)
+         return null !== ek && (0, Uk.Jf)(ek, 0, kk ? 1 : 0)
```

#### 402. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3894` → after: `L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3881) · [Before (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3894)

```diff
-         return null !== QQ && (FQ = QQ, wQ = 0, (0, JF.d)(), (0, xQ.wf)(FQ, wQ));
+         return null !== kk && (ek = kk, ik = 0, (0, oe.b)(), (0, Uk.if)(ek, ik));
```

#### 403. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3906` → after: `L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3893) · [Before (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3906)

```diff
-         return null !== DQ && (0, xQ.Ye)(DQ, 0, QQ, FQ, wQ, LQ, qQ, oQ)
+         return null !== bk && (0, Uk.Ne)(bk, 0, kk, ek, ik, Dk, fk, Sk)
```

#### 404. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3910` → after: `L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3897) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3910)

```diff
-         return null !== FQ && (0, xQ.bg)(FQ, 0, null !== QQ && void 0 !== QQ ? QQ : 1 / 0)
+         return null !== ek && (0, Uk.Rf)(ek, 0, null !== kk && void 0 !== kk ? kk : 1 / 0)
```

#### 405. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3915` → after: `L3902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3902) · [Before (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3915)

```diff
-         return null !== LQ && EF(LQ, wQ ? bQ.Xc : 0, QQ, (0, zQ.f)(FQ))
+         return null !== Dk && Ze(Dk, ik ? xk.Ad : 0, kk, (0, Ek.c)(ek))
```

#### 406. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3936` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3923) · [Before (L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3936)

```diff
-         this.overflowGen = xQ.v.eventOverflowGen(wQ, 0), this.resyncOwed = 0 !== xQ.v.eventOverflowMask(wQ, 0), QQ.setGameHost(this), QQ.setEventWalker((QQ => {
+         this.overflowGen = Uk.t.eventOverflowGen(ik, 0), this.resyncOwed = 0 !== Uk.t.eventOverflowMask(ik, 0), kk.setGameHost(this), kk.setEventWalker((kk => {
```

#### 407. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3944` → after: `L3931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3931) · [Before (L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3944)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : lL(xQ.v.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : WD(Uk.t.promptEntity(this.api.apiView, 0))
```

#### 408. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3947` → after: `L3934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3934) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3947)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? xQ.Dc.None : xQ.v.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? Uk.ic.None : Uk.t.interactLabel(this.api.apiView, 0)
```

#### 409. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3950` → after: `L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3937) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3950)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : xQ.v.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : Uk.t.interactIcon(this.api.apiView, 0)
```

#### 410. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3960` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3947) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3960)

```diff
-         "connection" === QQ.type ? QQ.phase === bQ.z.Activated && QQ.conn !== this.activeConn && QQ.conn > this.closedThrough ? (this.endSession(), this.activeConn = QQ.conn, this.endGameGrants(), this.dropGameCamera()) : QQ.phase !== bQ.z.Left && QQ.phase !== bQ.z.Closed || QQ.c … [truncated]
+         "connection" === kk.type ? kk.phase === xk.K.Activated && kk.conn !== this.activeConn && kk.conn > this.closedThrough ? (this.endSession(), this.activeConn = kk.conn, this.endGameGrants(), this.dropGameCamera()) : kk.phase !== xk.K.Left && kk.phase !== xk.K.Closed || kk.c … [truncated]
```

#### 411. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3977-L3978` → after: `L3964-L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3964-L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3964-L3965) · [Before (L3977-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3977-L3978)

```diff
-             if ("message" !== QQ.type || QQ.Om !== gw.rc.GameCodeMessage || QQ.payloadKind !== bQ.Zb.Msgpack) return null;
-             const FQ = (0, zQ.d)(QQ.payload);
+             if ("message" !== kk.type || kk.hM !== Gi.tc.GameCodeMessage || kk.payloadKind !== xk.zc.Msgpack) return null;
+             const ek = (0, Ek.b)(kk.payload);
```

#### 412. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3990-L3991` → after: `L3977-L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3977-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3977-L3978) · [Before (L3990-L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3990-L3991)

```diff
-           if ((0, sQ.g)(QQ)) return void this.guard((() => {
-             (0, sQ.e)(QQ, wQ)
+           if ((0, Fk.f)(kk)) return void this.guard((() => {
+             (0, Fk.c)(kk, ik)
```

#### 413. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4021` → after: `L4008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4008) · [Before (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4021)

```diff
-         this.highlightOwed = null === FQ ? !(0, xQ.Fe)(QQ, 0, TL, TL, 0) : !(0, xQ.Fe)(QQ, 0, FQ.pos, FQ.normal, 1)
+         this.highlightOwed = null === ek ? !(0, Uk.Be)(kk, 0, ED, ED, 0) : !(0, Uk.Be)(kk, 0, ek.pos, ek.normal, 1)
```

#### 414. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4034` → after: `L4021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4021) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4034)

```diff
-           qQ = QQ.gameNameWithVariation, oQ = null !== (vQ = (0, RQ.Pb)(qQ)) && void 0 !== vQ ? vQ : void 0, DQ = (0, OQ.A)(QQ.lobbyName), kQ = (0, OQ.S)(QQ.lobbyName)
+           fk = kk.gameNameWithVariation, Sk = null !== (Pk = (0, dk.yb)(fk)) && void 0 !== Pk ? Pk : void 0, bk = (0, Vk.u)(kk.lobbyName), rk = (0, Vk.I)(kk.lobbyName)
```

#### 415. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4045` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4032) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4045)

```diff
-           uQ = null !== (bQ = null === (YQ = this.options.gameFactory((0, RQ.Wb)(qQ))) || void 0 === YQ ? void 0 : YQ(kQ, DQ, oQ, mQ)) && void 0 !== bQ ? bQ : {}
+           Mk = null !== (xk = null === (nk = this.options.gameFactory((0, dk.Db)(fk))) || void 0 === nk ? void 0 : nk(rk, bk, Sk, mk)) && void 0 !== xk ? xk : {}
```

#### 416. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4047` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4034) · [Before (L4047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4047)

```diff
-           this.hY(MQ)
+           this.CU(pk)
```

#### 417. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4056` → after: `L4043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4043) · [Before (L4056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4056)

```diff
-           this.hY(MQ)
+           this.CU(pk)
```

#### 418. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4059` → after: `L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4046) · [Before (L4059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4059)

```diff
-         this.owners = tQ, this.tickers = tQ.filter((QQ => void 0 !== QQ.fH)), this.renderers = tQ.filter((QQ => void 0 !== QQ.onAfterRender)), this.receivers = tQ.filter((QQ => void 0 !== QQ.onReceivedMessageFromServer)), this.writeAltVeto(tQ), this.writeHooks(tQ), this.writePubl … [truncated]
+         this.owners = wk, this.tickers = wk.filter((kk => void 0 !== kk.Px)), this.renderers = wk.filter((kk => void 0 !== kk.onAfterRender)), this.receivers = wk.filter((kk => void 0 !== kk.onReceivedMessageFromServer)), this.writeAltVeto(wk), this.writeHooks(wk), this.writePubl … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4085` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4072) · [Before (L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4085)

```diff
-           this.round(this.tickers, jL), (0, qL.d)(performance.now() - QQ)
+           this.round(this.tickers, tD), (0, bD.c)(performance.now() - kk)
```

#### 420. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4094` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4081) · [Before (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4094)

```diff
-         const wQ = (0, qL.g)(QQ, xQ.v.frameMs(this.api.apiView, 0));
+         const ik = (0, bD.l)(kk, Uk.t.frameMs(this.api.apiView, 0));
```

#### 421. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4098` → after: `L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4085) · [Before (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4098)

```diff
-             (0, yw.e)().turnDamageIndicators(QQ.cameraHeading)
+             (0, Ji.d)().turnDamageIndicators(kk.cameraHeading)
```

#### 422. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4109` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4096) · [Before (L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4109)

```diff
-           this.hY(qQ)
+           this.CU(fk)
```

#### 423. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4111` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4098) · [Before (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4111)

```diff
-         this.showZoom(), this.items.flush(this.hY), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.CU), this.writePromptWatch(), this.writeCustomButtons();
```

#### 424. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4113` → after: `L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4100) · [Before (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4113)

```diff
-         this.ticks = 0, (0, qL.f)(LQ, QQ, wQ, this.hY)
+         this.ticks = 0, (0, bD.j)(Dk, kk, ik, this.CU)
```

#### 425. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4120` → after: `L4107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4107) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4120)

```diff
-           FQ = xQ.v.eventOverflowGen(QQ, 0),
+           ek = Uk.t.eventOverflowGen(kk, 0),
```

#### 426. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4124` → after: `L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4111) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4124)

```diff
-         const LQ = xQ.v.eventOverflowMask(QQ, 0),
+         const Dk = Uk.t.eventOverflowMask(kk, 0),
```

#### 427. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4126` → after: `L4113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4113) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4126)

```diff
-         0 === LQ || null === qQ || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, xQ.ue)(qQ, 0, LQ);
+         0 === Dk || null === fk || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Uk.ne)(fk, 0, Dk);
```

#### 428. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4133` → after: `L4120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4120) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4133)

```diff
-         if (QQ === xQ.pc.Director) try {
+         if (kk === Uk.Xb.Director) try {
```

#### 429. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4136` → after: `L4123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4123) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4136)

```diff
-           return this.hY(mQ), xQ.tb.None
+           return this.CU(mk), Uk.$.None
```

#### 430. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4138` → after: `L4125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4125) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4138)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return QQ === xQ.pc.AltVeto ? xQ.k.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return kk === Uk.Xb.AltVeto ? Uk.j.Allow : 0;
```

#### 431. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4142` → after: `L4129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4129) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4142)

```diff
-           throw (0, YQ.f)(mQ) && (this.fault = mQ), mQ
+           throw (0, nk.h)(mk) && (this.fault = mk), mk
```

#### 432. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4155-L4156` → after: `L4142-L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4142-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4142-L4143) · [Before (L4155-L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4155-L4156)

```diff
-           case xQ.pc.AltVeto:
-           case xQ.pc.AltAction: {
+           case Uk.Xb.AltVeto:
+           case Uk.Xb.AltAction: {
```

#### 433. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4161` → after: `L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4148) · [Before (L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4161)

```diff
-             if (QQ === xQ.pc.AltAction) return this.first((QQ => {
+             if (kk === Uk.Xb.AltAction) return this.first((kk => {
```

#### 434. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4169` → after: `L4156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4156) · [Before (L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4169)

```diff
-             return "preventAction" === tQ ? xQ.k.Prevent : "preventPlacement" === tQ ? xQ.k.PreventPlacement : xQ.k.Allow
+             return "preventAction" === wk ? Uk.j.Prevent : "preventPlacement" === wk ? Uk.j.PreventPlacement : Uk.j.Allow
```

#### 435. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4171` → after: `L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4158) · [Before (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4171)

```diff
-           case xQ.pc.Click: {
+           case Uk.Xb.Click: {
```

#### 436. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4173-L4174` → after: `L4160-L4161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4160-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4160-L4161) · [Before (L4173-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4173-L4174)

```diff
-               uQ = 0 !== (QQ & xQ._.Alt),
-               HQ = 0 !== (QQ & xQ._.HasPos),
+               Mk = 0 !== (kk & Uk.M.Alt),
+               Kk = 0 !== (kk & Uk.M.HasPos),
```

#### 437. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4178` → after: `L4165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4165) · [Before (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4178)

```diff
-               MQ = 0 !== (QQ & xQ._.Up),
+               pk = 0 !== (kk & Uk.M.Up),
```

#### 438. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4180` → after: `L4167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4167) · [Before (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4180)

```diff
-             if (0 === (QQ & xQ._.AttackOnly) && this.first((QQ => {
+             if (0 === (kk & Uk.M.AttackOnly) && this.first((kk => {
```

#### 439. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4193` → after: `L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4180) · [Before (L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4193)

```diff
-           case xQ.pc.ChangeBlock: {
+           case Uk.Xb.ChangeBlock: {
```

#### 440. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4201` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4188) · [Before (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4201)

```diff
-           case xQ.pc.DropItem: {
+           case Uk.Xb.DropItem: {
```

#### 441. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4209` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4196) · [Before (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4209)

```diff
-             return this.onError(new Error(`Unknown game call kind ${QQ}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${kk}`)), 0
```

#### 442. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4213` → after: `L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4200) · [Before (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4213)

```diff
-         const kQ = qQ === xQ.Yc ? null : IL.decode(this.api.eventBytes(oQ, Math.min(qQ, DQ)));
+         const rk = fk === Uk.Kc ? null : zD.decode(this.api.eventBytes(Sk, Math.min(fk, bk)));
```

#### 443. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4215-L4217` → after: `L4202-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4202-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4202-L4204) · [Before (L4215-L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4215-L4217)

```diff
-           Vo: [QQ, FQ, wQ],
-           ho: LQ,
-           Jo: kQ
+           CD: [kk, ek, ik],
+           AD: Dk,
+           jD: rk
```

#### 444. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4225` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4212) · [Before (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4225)

```diff
-         })), this.GA("EditBoard", {
+         })), this.tm("EditBoard", {
```

#### 445. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4227` → after: `L4214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4214) · [Before (L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4227)

```diff
-         }), this.GA("EditCodeBlock", {
+         }), this.tm("EditCodeBlock", {
```

#### 446. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4233` → after: `L4220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4220) · [Before (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4233)

```diff
-         QQ === xQ.Jc.ChestOpened ? this.items.chestOpened(wQ, LQ, qQ) : QQ !== xQ.Jc.Synced && QQ !== xQ.Jc.ChestClosed && QQ !== xQ.Jc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         kk === Uk.mc.ChestOpened ? this.items.chestOpened(ik, Dk, fk) : kk !== Uk.mc.Synced && kk !== Uk.mc.ChestClosed && kk !== Uk.mc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 447. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4236-L4237` → after: `L4223-L4224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4223-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4223-L4224) · [Before (L4236-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4236-L4237)

```diff
-               case xQ.Jc.Synced:
-                 DQ.l.GA("syncedInvenFromServer");
+               case Uk.mc.Synced:
+                 bk.j.tm("syncedInvenFromServer");
```

#### 448. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4239-L4241` → after: `L4226-L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4226-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4226-L4228) · [Before (L4239-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4239-L4241)

```diff
-               case xQ.Jc.ChestOpened:
-               case xQ.Jc.ChestClosed:
-                 DQ.l.GA("chestToggleFromServer", QQ === xQ.Jc.ChestOpened, !0);
+               case Uk.mc.ChestOpened:
+               case Uk.mc.ChestClosed:
+                 bk.j.tm("chestToggleFromServer", kk === Uk.mc.ChestOpened, !0);
```

#### 449. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4243-L4244` → after: `L4230-L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4230-L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4230-L4231) · [Before (L4243-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4243-L4244)

```diff
-               case xQ.Jc.ChestRefreshed:
-                 DQ.l.GA("chestRefreshedFromServer");
+               case Uk.mc.ChestRefreshed:
+                 bk.j.tm("chestRefreshedFromServer");
```

#### 450. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4246-L4248` → after: `L4233-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4233-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4233-L4235) · [Before (L4246-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4246-L4248)

```diff
-               case xQ.Jc.EnchantingTable:
-                 DQ.l.GA("enchantingTable", {
-                   um: LQ,
+               case Uk.mc.EnchantingTable:
+                 bk.j.tm("enchantingTable", {
+                   wP: Dk,
```

#### 451. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4252-L4253` → after: `L4239-L4240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4239-L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4239-L4240) · [Before (L4252-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4252-L4253)

```diff
-               case xQ.Jc.HotbarRequest:
-                 DQ.l.GA("setSelectedInventorySlotI", FQ, !0);
+               case Uk.mc.HotbarRequest:
+                 bk.j.tm("setSelectedInventorySlotI", ek, !0);
```

#### 452. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4255-L4256` → after: `L4242-L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4242-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4242-L4243) · [Before (L4255-L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4255-L4256)

```diff
-               case xQ.Jc.Scrolled:
-                 DQ.l.GA("ScrollInventorySlot", FQ);
+               case Uk.mc.Scrolled:
+                 bk.j.tm("ScrollInventorySlot", ek);
```

#### 453. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4258-L4259` → after: `L4245-L4246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4245-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4245-L4246) · [Before (L4258-L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4258-L4259)

```diff
-               case xQ.Jc.NumberKey:
-                 DQ.l.GA("numkeyPressed", FQ + 1);
+               case Uk.mc.NumberKey:
+                 bk.j.tm("numkeyPressed", ek + 1);
```

#### 454. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4261-L4262` → after: `L4248-L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4248-L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4248-L4249) · [Before (L4261-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4261-L4262)

```diff
-               case xQ.Jc.DropRequested:
-                 DQ.l.GA("DropInvenItem", 0 !== FQ);
+               case Uk.mc.DropRequested:
+                 bk.j.tm("DropInvenItem", 0 !== ek);
```

#### 455. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4265` → after: `L4252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4252) · [Before (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4265)

```diff
-                 throw new YQ.b(`InventoryEvent of no kind: what ${QQ}`)
+                 throw new nk.c(`InventoryEvent of no kind: what ${kk}`)
```

#### 456. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4274` → after: `L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4261) · [Before (L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4274)

```diff
-         this.GA("shotPlayer", {
+         this.tm("shotPlayer", {
```

#### 457. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4282-L4284` → after: `L4269-L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4269-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4269-L4271) · [Before (L4282-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4282-L4284)

```diff
-         this.GA("closeShopOnDamaged", null), this.guard((() => {
-           DQ.l.GA("damagedByOtherPlayer", {
-             tL: null,
+         this.tm("closeShopOnDamaged", null), this.guard((() => {
+           bk.j.tm("damagedByOtherPlayer", {
+             MS: null,
```

#### 458. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4286` → after: `L4273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4273) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4286)

```diff
-             UQ: QQ
+             Ub: kk
```

#### 459. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4292-L4293` → after: `L4279-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4279-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4279-L4280) · [Before (L4292-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4292-L4293)

```diff
-           DQ.l.GA("yourAttackHit", {
-             iQ: LQ,
+           bk.j.tm("yourAttackHit", {
+             tS: Dk,
```

#### 460. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4300` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4287) · [Before (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4300)

```diff
-         this.GA("PlayerPhysicsTypeUpdate", QQ)
+         this.tm("PlayerPhysicsTypeUpdate", kk)
```

#### 461. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4304` → after: `L4291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4291) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4304)

```diff
-           QQ === bQ.gd.UPDATE ? (0, IQ.l)(FQ, {
+           kk === xk.Rd.UPDATE ? (0, qk.i)(ek, {
```

#### 462. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4309` → after: `L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4296) · [Before (L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4309)

```diff
-           }) : rQ.d.remove(FQ)
+           }) : uk.e.remove(ek)
```

#### 463. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4316` → after: `L4303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4303) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4316)

```diff
-         this.GA("showBottomMessage", {
+         this.tm("showBottomMessage", {
```

#### 464. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4324` → after: `L4311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4311) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4324)

```diff
-         !this.zoomUnshown || QQ && this.zoomHeld || (this.zoomUnshown = !1, this.GA("cameraZoomSet", this.zoom)), this.zoomHeld = QQ
+         !this.zoomUnshown || kk && this.zoomHeld || (this.zoomUnshown = !1, this.tm("cameraZoomSet", this.zoom)), this.zoomHeld = kk
```

#### 465. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4329-L4333` → after: `L4316-L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4316-L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4316-L4320) · [Before (L4329-L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4329-L4333)

```diff
-             tL: FQ,
-             eL: wQ
-           } = (0, ML.e)(GL.r, QQ);
-           DQ.l.GA("damagedByOtherPlayer", {
-             tL: FQ,
+             MS: ek,
+             KS: ik
+           } = (0, YD.d)(LD.w, kk);
+           bk.j.tm("damagedByOtherPlayer", {
+             MS: ek,
```

#### 466. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4354` → after: `L4341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4341) · [Before (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4354)

```diff
-                   mode: xQ.$d.All,
+                   mode: Uk.Ud.All,
```

#### 467. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4358-L4359` → after: `L4345-L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4345-L4346) · [Before (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4358-L4359)

```diff
-               } return LQ ? wQ.size > xQ.Pc ? {
-               mode: xQ.$d.All,
+               } return Dk ? ik.size > Uk.zc ? {
+               mode: Uk.Ud.All,
```

#### 468. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4362` → after: `L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4349) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4362)

```diff
-               mode: xQ.$d.Filter,
+               mode: Uk.Ud.Filter,
```

#### 469. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4365` → after: `L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4352) · [Before (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4365)

```diff
-               mode: xQ.$d.Off,
+               mode: Uk.Ud.Off,
```

#### 470. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4371` → after: `L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4358) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4371)

```diff
-             mode: xQ.$d.All,
+             mode: Uk.Ud.All,
```

#### 471. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4375` → after: `L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4362) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4375)

```diff
-         if (wQ.mode === xQ.$d.Off && !this.vetoSet) return;
+         if (ik.mode === Uk.Ud.Off && !this.vetoSet) return;
```

#### 472. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4377` → after: `L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4364) · [Before (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4377)

```diff
-         (0, xQ.Ff)(FQ, 0, wQ.mode, wQ.roots.length, LQ) ? this.vetoSet = wQ.mode !== xQ.$d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, Uk.of)(ek, 0, ik.mode, ik.roots.length, Dk) ? this.vetoSet = ik.mode !== Uk.Ud.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 473. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4390` → after: `L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4377) · [Before (L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4390)

```diff
-           for (const wQ of QQ) wQ.onPlayerAltAction && (FQ |= 1 << xQ.pc.AltAction), (wQ.onPlayerClick || wQ.onPlayerClickUp || wQ.onPlayerAttackEntity) && (FQ |= 1 << xQ.pc.Click), wQ.onPlayerChangeBlock && (FQ |= 1 << xQ.pc.ChangeBlock), wQ.onPlayerDropItem && (FQ |= 1 << xQ.pc … [truncated]
+           for (const ik of kk) ik.onPlayerAltAction && (ek |= 1 << Uk.Xb.AltAction), (ik.onPlayerClick || ik.onPlayerClickUp || ik.onPlayerAttackEntity) && (ek |= 1 << Uk.Xb.Click), ik.onPlayerChangeBlock && (ek |= 1 << Uk.Xb.ChangeBlock), ik.onPlayerDropItem && (ek |= 1 << Uk.Xb … [truncated]
```

#### 474. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4393` → after: `L4380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4380) · [Before (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4393)

```diff
-         (0 !== wQ || this.hooksSet) && ((0, xQ.Nf)(FQ, 0, wQ) ? this.hooksSet = 0 !== wQ : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== ik || this.hooksSet) && ((0, Uk.zf)(ek, 0, ik) ? this.hooksSet = 0 !== ik : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 475. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4402` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4389) · [Before (L4402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4402)

```diff
-         FQ !== this.promptWatchSent && QQ && !this.stopped() && (0, xQ.eg)(QQ, 0, KL[FQ]) && (this.promptWatchSent = FQ)
+         ek !== this.promptWatchSent && kk && !this.stopped() && (0, Uk.Wf)(kk, 0, hD[ek]) && (this.promptWatchSent = ek)
```

#### 476. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4406` → after: `L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4393) · [Before (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4406)

```diff
-         FQ && QQ !== this.writtenPublicLobby && ((0, xQ.Uf)(FQ, 0, QQ ? 1 : 0) ? this.writtenPublicLobby = QQ : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         ek && kk !== this.writtenPublicLobby && ((0, Uk.Kf)(ek, 0, kk ? 1 : 0) ? this.writtenPublicLobby = kk : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 477. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4410` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4397) · [Before (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4410)

```diff
-         FQ && ((0, xQ.Of)(FQ, 0, null === QQ ? 0 : 1, null === QQ ? NL : UL.encode(QQ)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         ek && ((0, Uk.Df)(ek, 0, null === kk ? 0 : 1, null === kk ? vD : QD.encode(kk)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 478. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4420` → after: `L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4407) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4420)

```diff
-             this.hY(wQ)
+             this.CU(ik)
```

#### 479. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4426` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4413) · [Before (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4426)

```diff
-           DQ.l.GA(QQ, FQ)
+           bk.j.tm(kk, ek)
```

#### 480. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4433` → after: `L4420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4420) · [Before (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4433)

```diff
-           this.hY(QQ)
+           this.CU(kk)
```

#### 481. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4440` → after: `L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4427) · [Before (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4440)

```diff
-           this.hY(QQ)
+           this.CU(kk)
```

#### 482. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4475` → after: `L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4462) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4475)

```diff
-         void 0 !== FQ && this.hY(FQ)
+         void 0 !== ek && this.CU(ek)
```

#### 483. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4485` → after: `L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4472) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4485)

```diff
-             wQ ? this.onError(qQ) : this.hY(qQ)
+             ik ? this.onError(fk) : this.CU(fk)
```

#### 484. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4493` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4480) · [Before (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4493)

```diff
-           this.hY(FQ)
+           this.CU(ek)
```

#### 485. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4499` → after: `L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4486) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4499)

```diff
-       return QQ === xQ.$c ? null : String(QQ)
+       return kk === Uk.Oc ? null : String(kk)
```

#### 486. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4503` → after: `L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4490) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4503)

```diff
-       QQ.fH(bQ.bd)
+       kk.Px(xk.Hd)
```

#### 487. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4527-L4530` → after: `L4514-L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4514-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4514-L4517) · [Before (L4527-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4527-L4530)

```diff
-     var fL = wQ(36082),
-       VL = wQ(4694),
-       hL = wQ(36388),
-       JL = wQ(36415);
+     var cD = ik(35966),
+       TD = ik(4799),
+       oD = ik(36341),
+       ZD = ik(36361);
```

#### 488. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4534` → after: `L4521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4521) · [Before (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4534)

```diff
-           ...(0, hL.e)(QQ),
+           ...(0, oD.j)(kk),
```

#### 489. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4567-L4568` → after: `L4554-L4555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4554-L4555) · [Before (L4567-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4567-L4568)

```diff
-     var ZL = wQ(36198),
-       yL = wQ(38736);
+     var RD = ik(36104),
+       JD = ik(38781);
```

#### 490. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4577` → after: `L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4577)

```diff
-       return dL ??= new yL.e(new ZL.e(Qq)), dL
+       return ef ??= new JD.e(new RD.b(Df)), ef
```

#### 491. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4586` → after: `L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4573) · [Before (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4586)

```diff
-       LQ.c.get("scriptedCameraFacing") !== QQ && LQ.c.set({
+       Dk.b.get("scriptedCameraFacing") !== kk && Dk.b.set({
```

#### 492. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4590-L4595` → after: `L4577-L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4577-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4577-L4582) · [Before (L4590-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4590-L4595)

```diff
-     var qq = wQ(9289),
-       oq = wQ(9252),
-       Dq = wQ(38764),
-       kq = wQ(40172),
-       vq = wQ(3149);
-     const mq = Object.entries(xQ.mc).reduce(((QQ, FQ) => {
+     var rf = ik(9105),
+       Pf = ik(9063),
+       mf = ik(38805),
+       Mf = ik(40617),
+       Kf = ik(3261);
+     const xf = Object.entries(Uk.Ub).reduce(((kk, ek) => {
```

#### 493. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4602` → after: `L4589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4589) · [Before (L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4602)

```diff
-       return 0 !== ((null !== (wQ = QQ.itemFlags[FQ]) && void 0 !== wQ ? wQ : 0) & xQ.Lc.Stackable)
+       return 0 !== ((null !== (ik = kk.itemFlags[ek]) && void 0 !== ik ? ik : 0) & Uk.nc.Stackable)
```

#### 494. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4616` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4603) · [Before (L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4616)

```diff
-           return wQ === xQ.Nc ? void 0 : wQ
+           return ik === Uk.vc ? void 0 : ik
```

#### 495. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4620` → after: `L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4607) · [Before (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4620)

```diff
-           const LQ = null !== (wQ = QQ.itemHarvests[FQ]) && void 0 !== wQ ? wQ : 0;
+           const Dk = null !== (ik = kk.itemHarvests[ek]) && void 0 !== ik ? ik : 0;
```

#### 496. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4625-L4626` → after: `L4612-L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4612-L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4612-L4613) · [Before (L4625-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4625-L4626)

```diff
-           const qQ = null !== (wQ = QQ.itemLevels[FQ]) && void 0 !== wQ ? wQ : xQ.Nc;
-           return qQ !== xQ.Nc ? qQ : null !== (LQ = (0, LL.harvestsNullLevelOf)(FQ)) && void 0 !== LQ ? LQ : void 0
+           const fk = null !== (ik = kk.itemLevels[ek]) && void 0 !== ik ? ik : Uk.vc;
+           return fk !== Uk.vc ? fk : null !== (Dk = (0, SD.harvestsNullLevelOf)(ek)) && void 0 !== Dk ? Dk : void 0
```

#### 497. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4647` → after: `L4634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4634) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4647)

```diff
-           if (void 0 === FQ) throw new Error(`No item is named ${QQ}, an item's root`);
+           if (void 0 === ek) throw new Error(`No item is named ${kk}, an item's root`);
```

#### 498. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4658-L4665` → after: `L4645-L4652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4645-L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4645-L4652) · [Before (L4658-L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4658-L4665)

```diff
-           blockFlags: Yq(qQ, xQ.G.BYTES, xQ.G.flags),
-           blockHarvestTypes: Yq(qQ, xQ.G.BYTES, xQ.G.harvestType),
-           blockHarvestLevels: Yq(qQ, xQ.G.BYTES, xQ.G.harvestLevel),
-           blockAttachedTops: xq(qQ, xQ.G.BYTES, xQ.G.attachedTop),
-           itemFlags: Yq(oQ, xQ.Mc.BYTES, xQ.Mc.flags),
-           itemHarvests: Yq(oQ, xQ.Mc.BYTES, xQ.Mc.harvests),
-           itemLevels: Yq(oQ, xQ.Mc.BYTES, xQ.Mc.level)
-         }, (0, vq.g)(Object.freeze(LQ)), (0, kq.f)()
+           blockFlags: wf(fk, Uk.x.BYTES, Uk.x.flags),
+           blockHarvestTypes: wf(fk, Uk.x.BYTES, Uk.x.harvestType),
+           blockHarvestLevels: wf(fk, Uk.x.BYTES, Uk.x.harvestLevel),
+           blockAttachedTops: lf(fk, Uk.x.BYTES, Uk.x.attachedTop),
+           itemFlags: wf(Sk, Uk.rc.BYTES, Uk.rc.flags),
+           itemHarvests: wf(Sk, Uk.rc.BYTES, Uk.rc.harvests),
+           itemLevels: wf(Sk, Uk.rc.BYTES, Uk.rc.level)
+         }, (0, Kf.m)(Object.freeze(Dk)), (0, Mf.f)()
```

#### 499. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4668-L4670` → after: `L4655-L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4655-L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4655-L4657) · [Before (L4668-L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4668-L4670)

```diff
-         if ("number" === typeof QQ) return void 0 === (0, vq.e)(QQ) ? void 0 : QQ;
-         const FQ = (0, vq.c)(QQ);
-         return void 0 === FQ && Hq.test(QQ) ? void 0 === (0, vq.e)(+QQ) ? void 0 : +QQ : FQ
+         if ("number" === typeof kk) return void 0 === (0, Kf.h)(kk) ? void 0 : kk;
+         const ek = (0, Kf.e)(kk);
+         return void 0 === ek && Uf.test(kk) ? void 0 === (0, Kf.h)(+kk) ? void 0 : +kk : ek
```

#### 500. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4673` → after: `L4660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4660) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4673)

```diff
-         if (!QQ || QQ === qq.e) return qq.i;
+         if (!kk || kk === rf.c) return rf.e;
```

#### 501. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4675` → after: `L4662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4662) · [Before (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4675)

```diff
-         if (void 0 === FQ) throw new Error(`Item ${QQ} not found in registry`);
+         if (void 0 === ek) throw new Error(`Item ${kk} not found in registry`);
```

#### 502. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4679` → after: `L4666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4666) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4679)

```diff
-         return 0 !== QQ && void 0 !== (0, vq.e)(QQ) ? this.metaOf(QQ).rootId : QQ
+         return 0 !== kk && void 0 !== (0, Kf.h)(kk) ? this.metaOf(kk).rootId : kk
```

#### 503. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4682` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4669) · [Before (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4682)

```diff
-         return this.metas[QQ] ??= (0, oq.j)((0, vq.e)(QQ), QQ, this.rootIdOf, (0, LL.rootMetaDescOf)(QQ))
+         return this.metas[kk] ??= (0, Pf.l)((0, Kf.h)(kk), kk, this.rootIdOf, (0, SD.rootMetaDescOf)(kk))
```

#### 504. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4685` → after: `L4672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4672) · [Before (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4685)

```diff
-         if (!QQ || QQ === qq.e) return 0;
+         if (!kk || kk === rf.c) return 0;
```

#### 505. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4687` → after: `L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4674) · [Before (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4687)

```diff
-         if (void 0 === FQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === ek) throw new Error(`Invalid block name. You sent ${kk}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 506. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4691` → after: `L4678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4678) · [Before (L4691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4691)

```diff
-         if (!QQ || QQ === qq.e) return qq.e;
+         if (!kk || kk === rf.c) return rf.c;
```

#### 507. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4693-L4694` → after: `L4680-L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4680-L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4680-L4681) · [Before (L4693-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4693-L4694)

```diff
-         if (void 0 === FQ) throw new Error(`Item ${QQ} not found in registry`);
-         return (0, vq.e)(FQ)
+         if (void 0 === ek) throw new Error(`Item ${kk} not found in registry`);
+         return (0, Kf.h)(ek)
```

#### 508. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4698` → after: `L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4685) · [Before (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4698)

```diff
-         if (QQ === qq.e) return 0;
+         if (kk === rf.c) return 0;
```

#### 509. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4702-L4703` → after: `L4689-L4690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4689-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4689-L4690) · [Before (L4702-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4702-L4703)

```diff
-             LQ = FQ > 0 ? (0, vq.c)(QQ.slice(0, FQ)) : void 0;
-           wQ = void 0 !== LQ && this.isBlockId(LQ) && (0, LL.rootMetaDescOf)(LQ) === QQ ? LQ : void 0
+             Dk = ek > 0 ? (0, Kf.e)(kk.slice(0, ek)) : void 0;
+           ik = void 0 !== Dk && this.isBlockId(Dk) && (0, SD.rootMetaDescOf)(Dk) === kk ? Dk : void 0
```

#### 510. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4706` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4693) · [Before (L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4706)

```diff
-         if (!FQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!ek) throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 511. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4713` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4700) · [Before (L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4713)

```diff
-         return 0 !== QQ && (0, vq.e)(QQ) || qq.e
+         return 0 !== kk && (0, Kf.h)(kk) || rf.c
```

#### 512. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4721` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4708) · [Before (L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4721)

```diff
-           name: (0, vq.e)(FQ),
+           name: (0, Kf.h)(ek),
```

#### 513. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4731` → after: `L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4718) · [Before (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4731)

```diff
-         if (Dq.e.has(FQ)) {
+         if (mf.d.has(ek)) {
```

#### 514. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4733` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4720) · [Before (L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4733)

```diff
-             LQ = this.options.get((0, Dq.i)(wQ, FQ));
+             Dk = this.options.get((0, mf.e)(ik, ek));
```

#### 515. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4747-L4748` → after: `L4734-L4735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4734-L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4734-L4735) · [Before (L4747-L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4747-L4748)

```diff
-           throw new Error(`ClientApi.${QQ} is not available yet in the wasm client (${FQ})`)
-         }(`getItemStat("${QQ}")`, `a table of the stat: the wasm client answers ${Object.keys(bq).join(", ")}`), FQ
+           throw new Error(`ClientApi.${kk} is not available yet in the wasm client (${ek})`)
+         }(`getItemStat("${kk}")`, `a table of the stat: the wasm client answers ${Object.keys(Hf).join(", ")}`), ek
```

#### 516. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4753` → after: `L4740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4740) · [Before (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4753)

```diff
-         return null !== qQ && void 0 !== qQ || "displayName" !== FQ ? qQ : this.getItemName(QQ)
+         return null !== fk && void 0 !== fk || "displayName" !== ek ? fk : this.getItemName(kk)
```

#### 517. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4759` → after: `L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4746) · [Before (L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4759)

```diff
-         return this.getClientOption(`${QQ}GunStats`)
+         return this.getClientOption(`${kk}GunStats`)
```

#### 518. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4766` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4753) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4766)

```diff
-         return 0 !== ((null !== (FQ = this.props.blockFlags[QQ]) && void 0 !== FQ ? FQ : 0) & xQ.C.Solid)
+         return 0 !== ((null !== (ek = this.props.blockFlags[kk]) && void 0 !== ek ? ek : 0) & Uk.w.Solid)
```

#### 519. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4773` → after: `L4760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4760) · [Before (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4773)

```diff
-         return 0 !== ((null !== (FQ = this.props.blockFlags[QQ]) && void 0 !== FQ ? FQ : 0) & xQ.C.Fluid)
+         return 0 !== ((null !== (ek = this.props.blockFlags[kk]) && void 0 !== ek ? ek : 0) & Uk.w.Fluid)
```

#### 520. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4777` → after: `L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4764) · [Before (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4777)

```diff
-         return 0 !== ((null !== (FQ = this.props.blockFlags[QQ]) && void 0 !== FQ ? FQ : 0) & xQ.C.PlaceOver)
+         return 0 !== ((null !== (ek = this.props.blockFlags[kk]) && void 0 !== ek ? ek : 0) & Uk.w.PlaceOver)
```

#### 521. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4781` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4768) · [Before (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4781)

```diff
-         return null !== (FQ = this.props.blockAttachedTops[QQ]) && void 0 !== FQ ? FQ : 0
+         return null !== (ek = this.props.blockAttachedTops[kk]) && void 0 !== ek ? ek : 0
```

#### 522. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4798-L4800` → after: `L4785-L4787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4785-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4785-L4787) · [Before (L4798-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4798-L4800)

```diff
-               for (let QQ = 0; QQ + xQ.Rd.BYTES <= oQ; QQ += xQ.Rd.BYTES) kQ.push(Object.freeze({
-                 item: FQ.nameOfId(xQ.Rd.item(DQ, QQ)),
-                 amt: xQ.Rd.amount(DQ, QQ)
+               for (let kk = 0; kk + Uk.Hd.BYTES <= Sk; kk += Uk.Hd.BYTES) rk.push(Object.freeze({
+                 item: ek.nameOfId(Uk.Hd.item(bk, kk)),
+                 amt: Uk.Hd.amount(bk, kk)
```

#### 523. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4820-L4826` → after: `L4807-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4807-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4807-L4813) · [Before (L4820-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4820-L4826)

```diff
-     var Mq = wQ(40338),
-       Gq = wQ(36577),
-       pq = wQ(36568),
-       cq = wQ(36605),
-       Cq = wQ(36128),
-       Sq = wQ(40108),
-       iq = wQ(41962);
+     var Lf = ik(40350),
+       Cf = ik(36546),
+       Af = ik(36535),
+       jf = ik(36539),
+       sf = ik(36018),
+       df = ik(40262),
+       Vf = ik(42183);
```

#### 524. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4834` → after: `L4821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4821) · [Before (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4834)

```diff
-       return FQ.byteLength < bQ.sc ? FQ : FQ.subarray(0, bQ.sc - 1)
+       return ek.byteLength < xk.Vc ? ek : ek.subarray(0, xk.Vc - 1)
```

#### 525. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4842` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4829) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4842)

```diff
-         this.keyframesVersion = Wq, this.reloadFrom = null !== (QQ = null === (FQ = this.view()) || void 0 === FQ ? void 0 : FQ.version) && void 0 !== QQ ? QQ : Wq
+         this.keyframesVersion = Ff, this.reloadFrom = null !== (kk = null === (ek = this.view()) || void 0 === ek ? void 0 : ek.version) && void 0 !== kk ? kk : Ff
```

#### 526. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4845` → after: `L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4832) · [Before (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4845)

```diff
-         const FQ = 1 === this.deps.core.PqQ(QQ);
+         const ek = 1 === this.deps.core.Mfk(kk);
```

#### 527. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4848-L4849` → after: `L4835-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4835-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4835-L4836) · [Before (L4848-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4848-L4849)

```diff
-       async open(QQ) {
-         const FQ = await this.deps.replay.open(QQ);
+       async open(kk, ek) {
+         const ik = await this.deps.replay.open(kk, ek);
```

#### 528. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4866` → after: `L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4853) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4866)

```diff
-         this.deps.replay.setCameraMode(iq.c.indexOf(QQ))
+         this.deps.replay.setCameraMode(Vf.d.indexOf(kk))
```

#### 529. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4870` → after: `L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4857) · [Before (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4870)

```diff
-         const FQ = xQ.v.replayViewPtr(this.deps.apiView(), 0);
+         const ek = Uk.t.replayViewPtr(this.deps.apiView(), 0);
```

#### 530. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4872-L4873` → after: `L4859-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4859-L4860) · [Before (L4872-L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4872-L4873)

```diff
-         const wQ = new DataView(this.deps.buffer(), FQ, xQ.Ld.BYTES),
-           LQ = xQ.Ld.version(wQ, 0),
+         const ik = new DataView(this.deps.buffer(), ek, Uk.Bd.BYTES),
+           Dk = Uk.Bd.version(ik, 0),
```

#### 531. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4876` → after: `L4863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4863) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4876)

```diff
-         const oQ = xQ.Ld.markIn(wQ, 0),
+         const Sk = Uk.Bd.markIn(ik, 0),
```

#### 532. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4879-L4884` → after: `L4866-L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4866-L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4866-L4871) · [Before (L4879-L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4879-L4884)

```diff
-             state: xQ.Ld.state(wQ, 0),
-             cameraMode: null !== (QQ = iq.c[xQ.Ld.cameraMode(wQ, 0)]) && void 0 !== QQ ? QQ : "recording",
-             fH: xQ.Ld.fH(wQ, 0),
-             totalTicks: xQ.Ld.totalTicks(wQ, 0),
-             speed: xQ.Ld.speed(wQ, 0),
-             mark: oQ === xQ.Id ? null : {
+             state: Uk.Bd.state(ik, 0),
+             cameraMode: null !== (kk = Vf.d[Uk.Bd.cameraMode(ik, 0)]) && void 0 !== kk ? kk : "recording",
+             Px: Uk.Bd.Px(ik, 0),
+             totalTicks: Uk.Bd.totalTicks(ik, 0),
+             speed: Uk.Bd.speed(ik, 0),
+             mark: Sk === Uk.Ad ? null : {
```

#### 533. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4886` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4873) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4886)

```diff
-               outTick: xQ.Ld.markOut(wQ, 0)
+               outTick: Uk.Bd.markOut(ik, 0)
```

#### 534. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4888` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4875) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4888)

```diff
-             editVersion: xQ.Ld.editVersion(wQ, 0)
+             editVersion: Uk.Bd.editVersion(ik, 0)
```

#### 535. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4896` → after: `L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4883) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4896)

```diff
-         const FQ = this.reloadFrom === Wq && QQ.state !== bQ.Uc.Cropping && QQ.state !== bQ.Uc.None,
+         const ek = this.reloadFrom === Ff && kk.state !== xk.xd.Cropping && kk.state !== xk.xd.None,
```

#### 536. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4901` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4888) · [Before (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4901)

```diff
-         } = this.deps, qQ = LQ.ZqQ(), oQ = LQ.Nt(), DQ = [];
+         } = this.deps, fk = Dk.Kfk(), Sk = Dk.Ow(), bk = [];
```

#### 537. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4903` → after: `L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4890) · [Before (L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4903)

```diff
-           const QQ = new DataView(this.deps.buffer(), oQ, qQ * bQ.fc);
+           const kk = new DataView(this.deps.buffer(), Sk, fk * xk.Ic);
```

#### 538. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4905` → after: `L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4892) · [Before (L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4905)

```diff
-             const wQ = FQ * bQ.fc,
+             const ik = ek * xk.Ic,
```

#### 539. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4908-L4911` → after: `L4895-L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4895-L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4895-L4898) · [Before (L4908-L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4908-L4911)

```diff
-               fH: QQ.getUint32(wQ + bQ.oc, !0),
-               position: [LQ(bQ.mc), LQ(bQ.mc + 8), LQ(bQ.mc + 16)],
-               direction: [LQ(bQ.hc), LQ(bQ.hc + 8), LQ(bQ.hc + 16)],
-               easing: [LQ(bQ.jc), LQ(bQ.jc + 8), LQ(bQ.jc + 16), LQ(bQ.jc + 24)]
+               Px: kk.getUint32(ik + xk.Tc, !0),
+               position: [Dk(xk.Qc), Dk(xk.Qc + 8), Dk(xk.Qc + 16)],
+               direction: [Dk(xk.Jc), Dk(xk.Jc + 8), Dk(xk.Jc + 16)],
+               easing: [Dk(xk.Mc), Dk(xk.Mc + 8), Dk(xk.Mc + 16), Dk(xk.Mc + 24)]
```

#### 540. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4919` → after: `L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4906) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4919)

```diff
-           FQ = [xQ.v.eye(QQ, 0, 0), xQ.v.eye(QQ, 0, 1), xQ.v.eye(QQ, 0, 2)];
+           ek = [Uk.t.eye(kk, 0, 0), Uk.t.eye(kk, 0, 1), Uk.t.eye(kk, 0, 2)];
```

#### 541. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4923` → after: `L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4910) · [Before (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4923)

```diff
-         }(xQ.v.heading(QQ, 0), xQ.v.pitch(QQ, 0)))
+         }(Uk.t.heading(kk, 0), Uk.t.pitch(kk, 0)))
```

#### 542. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4926` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4913) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4926)

```diff
-         return this.deps.replay.setKeyframe(QQ.fH, Float64Array.from([...QQ.position, ...QQ.direction, ...QQ.easing]))
+         return this.deps.replay.setKeyframe(kk.Px, Float64Array.from([...kk.position, ...kk.direction, ...kk.easing]))
```

#### 543. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4936` → after: `L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4923) · [Before (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4936)

```diff
-         return this.deps.replay.setMark(null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.inTick) && void 0 !== FQ ? FQ : -1, null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.outTick) && void 0 !== wQ ? wQ : -1)
+         return this.deps.replay.setMark(null !== (ek = null === kk || void 0 === kk ? void 0 : kk.inTick) && void 0 !== ek ? ek : -1, null !== (ik = null === kk || void 0 === kk ? void 0 : kk.outTick) && void 0 !== ik ? ik : -1)
```

#### 544. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4953` → after: `L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4940) · [Before (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4953)

```diff
-         return null !== wQ && (0, xQ.rf)(wQ, 0, QQ, null === FQ ? Rq : Oq.encode(FQ))
+         return null !== ik && (0, Uk.gf)(ik, 0, kk, null === ek ? uf : qf.encode(ek))
```

#### 545. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4958` → after: `L4945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4945) · [Before (L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4958)

```diff
-         return null !== qQ && (0, xQ.lf)(qQ, 0, FQ, wQ, oQ, Oq.encode(QQ))
+         return null !== fk && (0, Uk.df)(fk, 0, ek, ik, Sk, qf.encode(kk))
```

#### 546. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4962` → after: `L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4949) · [Before (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4962)

```diff
-         return null !== qQ && (0, xQ.uf)(qQ, 0, QQ, FQ, Math.max(0, wQ), Oq.encode(LQ))
+         return null !== fk && (0, Uk.hf)(fk, 0, kk, ek, Math.max(0, ik), qf.encode(Dk))
```

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4970` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4957) · [Before (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4970)

```diff
-                 return QQ + gw.wb + (null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.byteLength) && void 0 !== wQ ? wQ : 0)
+                 return kk + Gi.Bb + (null !== (ik = null === ek || void 0 === ek ? void 0 : ek.byteLength) && void 0 !== ik ? ik : 0)
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4977` → after: `L4964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4964) · [Before (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4977)

```diff
-               LQ.setUint16(qQ, null !== (oQ = null === DQ || void 0 === DQ ? void 0 : DQ.byteLength) && void 0 !== oQ ? oQ : bQ.sc, !0), qQ += gw.wb, null !== DQ && (wQ.set(DQ, qQ), qQ += DQ.byteLength)
+               Dk.setUint16(fk, null !== (Sk = null === bk || void 0 === bk ? void 0 : bk.byteLength) && void 0 !== Sk ? Sk : xk.Vc, !0), fk += Gi.Bb, null !== bk && (ik.set(bk, fk), fk += bk.byteLength)
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4981` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4968) · [Before (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4981)

```diff
-         return null !== oQ && (0, xQ.of)(oQ, 0, null !== (LQ = QQ.id) && void 0 !== LQ ? LQ : xQ.ad, null !== (qQ = FQ.id) && void 0 !== qQ ? qQ : xQ.ad, DQ)
+         return null !== Sk && (0, Uk.ef)(Sk, 0, null !== (Dk = kk.id) && void 0 !== Dk ? Dk : Uk.Sc, null !== (fk = ek.id) && void 0 !== fk ? fk : Uk.Sc, bk)
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4992` → after: `L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4979) · [Before (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4992)

```diff
-         this.deps.core.yqQ()
+         this.deps.core.xfk()
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5010` → after: `L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4997) · [Before (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5010)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (FQ = QQ.now) && void 0 !== FQ ? FQ : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ek = kk.now) && void 0 !== ek ? ek : () => performance.now()
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5021` → after: `L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5008) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5021)

```diff
-         this.live && (this.viewerShown(!0 === (null === (FQ = (wQ = this.deps).viewerOpen) || void 0 === FQ ? void 0 : FQ.call(wQ))), this.deps.client.recorderSession(QQ, (0, iq.d)()))
+         this.live && (this.viewerShown(!0 === (null === (ek = (ik = this.deps).viewerOpen) || void 0 === ek ? void 0 : ek.call(ik))), this.deps.client.recorderSession(kk, (0, Vf.f)()))
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5028` → after: `L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5015) · [Before (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5028)

```diff
-         this.live && (this.state.recording || !0 !== (null === (QQ = (FQ = this.deps).viewerOpen) || void 0 === QQ ? void 0 : QQ.call(FQ))) ? this.deps.client.recorderControl(bQ.Gc.ToggleRecording) : this.deps.notify(cq.c.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (kk = (ek = this.deps).viewerOpen) || void 0 === kk ? void 0 : kk.call(ek))) ? this.deps.client.recorderControl(xk.hd.ToggleRecording) : this.deps.notify(jf.e.closeViewerFirst)
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5031` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5018) · [Before (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5031)

```diff
-         this.live ? this.deps.client.recorderControl(bQ.Gc.SaveClip) : this.deps.notify(cq.c.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(xk.hd.SaveClip) : this.deps.notify(jf.e.clippingNotOn)
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5034` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5021) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5034)

```diff
-         this.live && this.deps.client.recorderControl(QQ ? bQ.Gc.ViewerOpened : bQ.Gc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(kk ? xk.hd.ViewerOpened : xk.hd.ViewerClosed)
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5069` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5056) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5069)

```diff
-         } = this.deps, qQ = cq.c;
+         } = this.deps, fk = jf.e;
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5071` → after: `L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5058) · [Before (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5071)

```diff
-           case bQ.Cc.RecordingStarted:
+           case xk.dd.RecordingStarted:
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5078-L5079` → after: `L5065-L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5065-L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5065-L5066) · [Before (L5078-L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5078-L5079)

```diff
-           case bQ.Cc.RecordingStopped:
-             this.stopRecording(), LQ(qQ.recordingStopped), this.saveState(bQ.Pc.Recording, "saving");
+           case xk.dd.RecordingStopped:
+             this.stopRecording(), Dk(fk.recordingStopped), this.saveState(xk.qd.Recording, "saving");
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5081` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5068) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5081)

```diff
-           case bQ.Cc.RecordingDiscarded:
+           case xk.dd.RecordingDiscarded:
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5084` → after: `L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5071) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5084)

```diff
-           case bQ.Cc.RecordingTurnedOff:
+           case xk.dd.RecordingTurnedOff:
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5087` → after: `L5074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5074) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5087)

```diff
-           case bQ.Cc.LimitReached:
+           case xk.dd.LimitReached:
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090-L5091` → after: `L5077-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5077-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5077-L5078) · [Before (L5090-L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090-L5091)

```diff
-           case bQ.Cc.ClipSaved:
-             this.saveState(bQ.Pc.Clip, "saving");
+           case xk.dd.ClipSaved:
+             this.saveState(xk.qd.Clip, "saving");
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5093` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5080) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5093)

```diff
-           case bQ.Cc.ClipEmpty:
+           case xk.dd.ClipEmpty:
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5096` → after: `L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5083) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5096)

```diff
-           case bQ.Cc.ClippingNotOn:
+           case xk.dd.ClippingNotOn:
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5099` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5086) · [Before (L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5099)

```diff
-           case bQ.Cc.Disallowed:
+           case xk.dd.Disallowed:
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5102` → after: `L5089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5089) · [Before (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5102)

```diff
-           case bQ.Cc.ClippingOn:
+           case xk.dd.ClippingOn:
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5109` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5096) · [Before (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5109)

```diff
-           case bQ.Cc.ClippingOff:
+           case xk.dd.ClippingOff:
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5116` → after: `L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5103) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5116)

```diff
-           case bQ.Cc.ClipSettingsChanged:
+           case xk.dd.ClipSettingsChanged:
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5122` → after: `L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5109) · [Before (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5122)

```diff
-           case bQ.Cc.SaveBusy:
+           case xk.dd.SaveBusy:
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5125` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5112) · [Before (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5125)

```diff
-           case bQ.Cc.CloseViewerFirst:
+           case xk.dd.CloseViewerFirst:
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5130` → after: `L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5117) · [Before (L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5130)

```diff
-         this.deps.download(FQ), this.saveState(QQ, "done"), this.deps.notify(QQ === bQ.Pc.Clip ? cq.c.clipSaved : cq.c.recordingSaved)
+         this.deps.download(ek), this.saveState(kk, "done"), this.deps.notify(kk === xk.qd.Clip ? jf.e.clipSaved : jf.e.recordingSaved)
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5133` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5120) · [Before (L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5133)

```diff
-         this.saveState(QQ, "failed"), this.deps.notify(QQ === bQ.Pc.Clip ? cq.c.clipFailed : cq.c.recordingFailed)
+         this.saveState(kk, "failed"), this.deps.notify(kk === xk.qd.Clip ? jf.e.clipFailed : jf.e.recordingFailed)
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5155` → after: `L5142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5142) · [Before (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5155)

```diff
-         if (FQ + gw.wb > wQ) return null;
+         if (ek + Gi.Bb > ik) return null;
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5157` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5144) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5157)

```diff
-         if (FQ += gw.wb, LQ !== bQ.sc) {
+         if (ek += Gi.Bb, Dk !== xk.Vc) {
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5162` → after: `L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5149) · [Before (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5162)

```diff
-       return FQ === wQ ? qQ : null
+       return ek === ik ? fk : null
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5169` → after: `L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5156) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5169)

```diff
-         replayFailed: (FQ, wQ) => {
+         replayFailed: (ek, ik, Dk) => {
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5172` → after: `L5159-L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5159-L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5159-L5160) · [Before (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5172)

```diff
-             code: wQ
+             code: ik,
+             version: Dk
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5178` → after: `L5166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5166) · [Before (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5178)

```diff
-               case bQ.Qc.Cleared:
+               case xk.ud.Cleared:
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5180` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5168) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5180)

```diff
-               case bQ.Qc.Text:
+               case xk.ud.Text:
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5182` → after: `L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5170) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5182)

```diff
-               case bQ.Qc.Int:
+               case xk.ud.Int:
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5184` → after: `L5172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5172) · [Before (L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5184)

```diff
-               case bQ.Qc.Double:
+               case xk.ud.Double:
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5199` → after: `L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5187) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5199)

```diff
-               case bQ.Sc.FlyingText: {
+               case xk.vd.FlyingText: {
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5203-L5204` → after: `L5191-L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5191-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5191-L5192) · [Before (L5203-L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5203-L5204)

```diff
-                   Ow: wQ,
-                   Rw: LQ,
+                   xe: ik,
+                   Ke: Dk,
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5209` → after: `L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5197) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5209)

```diff
-               case bQ.Sc.PlayerKilled: {
+               case xk.vd.PlayerKilled: {
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5219` → after: `L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5207) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5219)

```diff
-               case bQ.Sc.Killfeed: {
+               case xk.vd.Killfeed: {
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5261` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5249) · [Before (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5261)

```diff
-       return (QQ, FQ, oQ, DQ) => !(QQ < bQ.O.ReplayFailed || QQ > bQ.O.RecorderEvent) && (wQ = FQ, LQ = !0, (0, xQ.ge)(QQ, FQ, oQ, DQ, qQ) && LQ)
+       return (kk, ek, Sk, bk) => !(kk < xk.ib.ReplayFailed || kk > xk.ib.RecorderEvent) && (ik = ek, Dk = !0, (0, Uk.ae)(kk, ek, Sk, bk, fk) && Dk)
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5277` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5265) · [Before (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5277)

```diff
-               if (qQ + bQ.L > wQ.byteLength) throw new Error(`the recorder module's events end mid-head at ${qQ}`);
+               if (fk + xk.eb > ik.byteLength) throw new Error(`the recorder module's events end mid-head at ${fk}`);
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5281-L5283` → after: `L5269-L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5269-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5269-L5271) · [Before (L5281-L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5281-L5283)

```diff
-                 kQ = qQ + bQ.L;
-               if (kQ + DQ > wQ.byteLength || !FQ(oQ, LQ, kQ, DQ)) throw new Error(`the recorder module wrote a malformed event ${oQ} (${DQ} bytes) at ${qQ}`);
-               qQ = kQ + (0, bQ.Yd)(DQ)
+                 rk = fk + xk.eb;
+               if (rk + bk > ik.byteLength || !ek(Sk, Dk, rk, bk)) throw new Error(`the recorder module wrote a malformed event ${Sk} (${bk} bytes) at ${fk}`);
+               fk = rk + (0, xk.Ie)(bk)
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5301` → after: `L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5289) · [Before (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5301)

```diff
-         const wQ = null !== (FQ = this.parts.get(QQ.save)) && void 0 !== FQ ? FQ : [];
+         const ik = null !== (ek = this.parts.get(kk.save)) && void 0 !== ek ? ek : [];
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5325` → after: `L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5313) · [Before (L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5325)

```diff
-       return wQ.e(58).then((() => wQ(41999)))
+       return ik.e(60).then((() => ik(59994)))
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5350` → after: `L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5338) · [Before (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5350)

```diff
-             FQ === bQ.Pc.Edited ? null === (LQ = this.viewer) || void 0 === LQ || LQ.saveDone(wQ) : this.recorder.fileReady(FQ, wQ)
+             ek === xk.qd.Edited ? null === (Dk = this.viewer) || void 0 === Dk || Dk.saveDone(ik) : this.recorder.fileReady(ek, ik)
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5382` → after: `L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5370) · [Before (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5382)

```diff
-               case bQ.Cc.FileDiscarded:
+               case xk.dd.FileDiscarded:
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5385` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5373) · [Before (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5385)

```diff
-               case bQ.Cc.SaveFailed:
+               case xk.dd.SaveFailed:
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5388` → after: `L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5376) · [Before (L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5388)

```diff
-               case bQ.Cc.SaveBusy:
+               case xk.dd.SaveBusy:
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5411` → after: `L5399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5399) · [Before (L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5411)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (QQ = this.deps.loadViewer) && void 0 !== QQ ? QQ : jq)().catch((QQ => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (kk = this.deps.loadViewer) && void 0 !== kk ? kk : Xf)().catch((kk => {
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5429` → after: `L5417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5417) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5429)

```diff
-           QQ > 0 && this.recorder.fH()
+           kk > 0 && this.recorder.Px()
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5441` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5429) · [Before (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5441)

```diff
-         QQ === bQ.Pc.Edited ? null === (FQ = this.viewer) || void 0 === FQ || FQ.saveFailed(!1) : this.recorder.failed(QQ)
+         kk === xk.qd.Edited ? null === (ek = this.viewer) || void 0 === ek || ek.saveFailed(!1) : this.recorder.failed(kk)
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5444-L5447` → after: `L5432-L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5432-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5432-L5435) · [Before (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5444-L5447)

```diff
-     var Xq = wQ(40040),
-       fq = wQ(40056),
-       Vq = wQ(4642),
-       hq = wQ(40418);
+     var Tf = ik(40196),
+       of = ik(40218),
+       Zf = ik(4745),
+       Of = ik(40505);
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5454` → after: `L5442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5442) · [Before (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5454)

```diff
-         const wQ = (0, lQ.t)(0, performance.now()),
+         const ik = (0, hk.o)(0, performance.now()),
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5456-L5457` → after: `L5444-L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5444-L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5444-L5445) · [Before (L5456-L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5456-L5457)

```diff
-         (0, hq.i)((() => {
-           (0, lQ.w)(bQ.fb.MouseDown, 0, 0, 0, wQ), (0, lQ.w)(bQ.fb.MouseMove, 0, QQ * LQ, FQ * LQ, 0), (0, lQ.w)(bQ.fb.MouseUp, 0, 0, 0, wQ)
+         (0, Of.h)((() => {
+           (0, hk.s)(xk.Hb.MouseDown, 0, 0, 0, ik), (0, hk.s)(xk.Hb.MouseMove, 0, kk * Dk, ek * Dk, 0), (0, hk.s)(xk.Hb.MouseUp, 0, 0, 0, ik)
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5462` → after: `L5450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5450) · [Before (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5462)

```diff
-         this.analogue[0] = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.x) && void 0 !== FQ ? FQ : 0, this.analogue[1] = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.y) && void 0 !== wQ ? wQ : 0, this.send()
+         this.analogue[0] = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.x) && void 0 !== ek ? ek : 0, this.analogue[1] = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.y) && void 0 !== ik ? ik : 0, this.send()
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5465-L5466` → after: `L5453-L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5453-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5453-L5454) · [Before (L5465-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5465-L5466)

```diff
-         const wQ = "freeCamUp" === QQ ? xQ.cc.Up : xQ.cc.Down;
-         this.keys = FQ ? this.keys | wQ : this.keys & ~wQ, this.send()
+         const ik = "freeCamUp" === kk ? Uk.Lb.Up : Uk.Lb.Down;
+         this.keys = ek ? this.keys | ik : this.keys & ~ik, this.send()
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5473` → after: `L5461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5461) · [Before (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5473)

```diff
-         this.unsent = null !== QQ && !(0, xQ.we)(QQ, 0, this.analogue, this.keys)
+         this.unsent = null !== kk && !(0, Uk.re)(kk, 0, this.analogue, this.keys)
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5476-L5479` → after: `L5464-L5467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5464-L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5464-L5467) · [Before (L5476-L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5476-L5479)

```diff
-     var Eq = wQ(714),
-       nq = wQ(291),
-       gq = wQ(96),
-       Pq = wQ(9004);
+     var Gf = ik(711),
+       Nf = ik(284),
+       Rf = ik(99),
+       Jf = ik(33701);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5482-L5483` → after: `L5470-L5471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5470-L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5470-L5471) · [Before (L5482-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5482-L5483)

```diff
-       const QQ = LQ.c.get("clientEscMenuOptions"),
-         FQ = (0, Eq.p)(QQ);
+       const kk = Dk.b.get("clientEscMenuOptions"),
+         ek = (0, Gf.i)(kk);
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5485` → after: `L5473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5473) · [Before (L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5485)

```diff
-         mouse: (0, gq.isMobile)() ? FQ : QQ.mouseSensitivity,
+         mouse: (0, Rf.isMobile)() ? ek : kk.mouseSensitivity,
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5492-L5493` → after: `L5480-L5481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5480-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5480-L5481) · [Before (L5492-L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5492-L5493)

```diff
-       const QQ = LQ.c.get("clientEscMenuOptions"),
-         FQ = LQ.c.get("isTouchScreen") ? (0, Eq.p)(QQ) : QQ.mouseSensitivity,
+       const kk = Dk.b.get("clientEscMenuOptions"),
+         ek = Dk.b.get("isTouchScreen") ? (0, Gf.i)(kk) : kk.mouseSensitivity,
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5495` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5483) · [Before (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5495)

```diff
-       return wQ > 0 ? FQ / wQ : 1
+       return ik > 0 ? ek / ik : 1
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5500` → after: `L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5488) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5500)

```diff
-         QQ.setSoundPrefs(LQ.c.get("soundVolume"), LQ.c.get("soundOnFromAd"))
+         kk.setSoundPrefs(Dk.b.get("soundVolume"), Dk.b.get("soundOnFromAd"))
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5509` → after: `L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5497) · [Before (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5509)

```diff
-         } = LQ.c.get("clientEscMenuOptions"), kQ = {
+         } = Dk.b.get("clientEscMenuOptions"), rk = {
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5515` → after: `L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5503) · [Before (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5515)

```diff
-         wQ && (0, bQ.Hd)(wQ) === (0, bQ.Hd)(kQ) && wQ.fogChunks === oQ || (wQ = kQ, QQ.setEnvPrefs(wQ))
+         ik && (0, xk.ne)(ik) === (0, xk.ne)(rk) && ik.fogChunks === Sk || (ik = rk, kk.setEnvPrefs(ik))
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5520` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5508) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5520)

```diff
-           const QQ = LQ.c.get("clientEscMenuOptions");
+           const kk = Dk.b.get("clientEscMenuOptions");
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5522` → after: `L5510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5510) · [Before (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5522)

```diff
-             nametagsHidden: LQ.c.get("areNametagsHidden"),
+             nametagsHidden: Dk.b.get("areNametagsHidden"),
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5529` → after: `L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5517) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5529)

```diff
-             nametagCutDistance: (0, Pq.g)()
+             nametagCutDistance: (0, Jf.h)()
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5532` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5520) · [Before (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5532)

```diff
-         (0, RQ.oe)(oQ, FQ) || (oQ = FQ, QQ.setUiPrefs(FQ))
+         (0, dk.Sd)(Sk, ek) || (Sk = ek, kk.setUiPrefs(ek))
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5537` → after: `L5525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5525) · [Before (L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5537)

```diff
-         (0, RQ.oe)(vQ, FQ) || (vQ = FQ, QQ.setLookPrefs(FQ))
+         (0, dk.Sd)(Pk, ek) || (Pk = ek, kk.setLookPrefs(ek))
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5540` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5528) · [Before (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5540)

```diff
-       const uQ = [(0, DQ.o)("appManagerUpdated|soundVolume", FQ), (0, DQ.o)("appManagerUpdated|soundOnFromAd", FQ), (0, DQ.o)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const Mk = [(0, bk.k)("appManagerUpdated|soundVolume", ek), (0, bk.k)("appManagerUpdated|soundOnFromAd", ek), (0, bk.k)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5542` → after: `L5530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5530) · [Before (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5542)

```diff
-       })), (0, DQ.o)("appManagerUpdated|areNametagsHidden", kQ), (0, DQ.o)("appManagerUpdated|showDistantNametags", kQ)];
+       })), (0, bk.k)("appManagerUpdated|areNametagsHidden", rk), (0, bk.k)("appManagerUpdated|showDistantNametags", rk)];
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5547-L5552` → after: `L5535-L5540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5535-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5535-L5540) · [Before (L5547-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5547-L5552)

```diff
-     var dq = wQ(40351),
-       Qo = wQ(40360);
-     var Fo = (0, Qo.c)("lend"),
-       wo = (0, Qo.c)("starting"),
-       Lo = (0, Qo.c)("generation"),
-       qo = (0, Qo.c)("end");
+     var DS = ik(40489),
+       fS = ik(40492);
+     var SS = (0, fS.d)("lend"),
+       bS = (0, fS.d)("starting"),
+       rS = (0, fS.d)("generation"),
+       PS = (0, fS.d)("end");
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5589` → after: `L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5577) · [Before (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5589)

```diff
-           0 !== kQ ? (new Uint8Array(FQ.buffer, kQ, DQ.length).set(DQ), QQ.BqQ(wQ.headLen, LQ, qQ) && (oQ = "sealing")) : oQ = "tooLarge"
+           0 !== rk ? (new Uint8Array(ek.buffer, rk, bk.length).set(bk), kk.nfk(ik.headLen, Dk, fk) && (Sk = "sealing")) : Sk = "tooLarge"
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5598` → after: `L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5586) · [Before (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5598)

```diff
-             FQ = QQ.dqQ(), FQ > 0 && (wQ = QQ.QoQ())
+             ek = kk.Ufk(), ek > 0 && (ik = kk.Hfk())
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5610` → after: `L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5598) · [Before (L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5610)

```diff
-           QQ.FoQ()
+           kk.wfk()
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5619` → after: `L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5607) · [Before (L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5619)

```diff
-           QQ.FoQ()
+           kk.wfk()
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5646` → after: `L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5634) · [Before (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5646)

```diff
-         if (QQ.busy() || !vo(QQ.memoryBytes(), QQ.clipSeconds())) return "iY";
+         if (kk.busy() || !xS(kk.memoryBytes(), kk.clipSeconds())) return "fU";
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5654` → after: `L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5642) · [Before (L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5654)

```diff
-         if (!wQ) return QQ.trapped() ? "trapped" : QQ.kx() ? "kx" : "failed";
+         if (!ik) return kk.trapped() ? "trapped" : kk.aU() ? "aU" : "failed";
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5661-L5701` → after: `L5649-L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5649-L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5649-L5689) · [Before (L5661-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5661-L5701)

```diff
-       bo = new Set([bQ.Gc.ToggleRecording, bQ.Gc.SaveClip]);
-     var Yo = (0, Qo.c)("bindings"),
-       xo = (0, Qo.c)("module"),
-       Ao = (0, Qo.c)("memory"),
-       to = (0, Qo.c)("trapped"),
-       eo = (0, Qo.c)("kx"),
-       Mo = (0, Qo.c)("recycleDue"),
-       Go = (0, Qo.c)("loading"),
-       po = (0, Qo.c)("generation"),
-       co = (0, Qo.c)("viewDrawn"),
-       Co = (0, Qo.c)("clip"),
-       So = (0, Qo.c)("session"),
-       io = (0, Qo.c)("control"),
-       Wo = (0, Qo.c)("deferred"),
-       Ro = (0, Qo.c)("coreU8"),
-       Oo = (0, Qo.c)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       wS = new Set([xk.hd.ToggleRecording, xk.hd.SaveClip]);
+     var lS = (0, fS.d)("bindings"),
+       pS = (0, fS.d)("module"),
+       yS = (0, fS.d)("memory"),
+       YS = (0, fS.d)("trapped"),
+       LS = (0, fS.d)("aU"),
+       CS = (0, fS.d)("recycleDue"),
+       AS = (0, fS.d)("loading"),
+       jS = (0, fS.d)("generation"),
+       sS = (0, fS.d)("viewDrawn"),
+       dS = (0, fS.d)("clip"),
+       VS = (0, fS.d)("session"),
+       FS = (0, fS.d)("control"),
+       uS = (0, fS.d)("deferred"),
+       qS = (0, fS.d)("coreU8"),
+       IS = (0, fS.d)("coreU32"),
+ ... (25 more added lines; see GitHub link above)
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5831` → after: `L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5819) · [Before (L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5831)

```diff
-         }, (0, dq.e)(this, Eo)[Eo](bQ.Ac.Prefs, ko(QQ, FQ)), QQ && (0, dq.e)(this, co)[co] && (0, dq.e)(this, Ko)[Ko]()
+         }, (0, DS.e)(this, gS)[gS](xk.ad.Prefs, KS(kk, ek)), kk && (0, DS.e)(this, sS)[sS] && (0, DS.e)(this, WS)[WS]()
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5837-L5838` → after: `L5825-L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5825-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5825-L5826) · [Before (L5837-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5837-L5838)

```diff
-         if (bo.has(QQ)) return (0, dq.e)(this, xo)[xo] ? void(0, dq.e)(this, Eo)[Eo](bQ.Ac.Control, FQ) : ((0, dq.e)(this, io)[io] = FQ, void(0, dq.e)(this, Ko)[Ko]());
-         (0, dq.e)(this, eo)[eo] || this.deps.coreCommand(bQ.Ac.Control, FQ)
+         if (wS.has(kk)) return (0, DS.e)(this, pS)[pS] ? void(0, DS.e)(this, gS)[gS](xk.ad.Control, ek) : ((0, DS.e)(this, FS)[FS] = ek, void(0, DS.e)(this, WS)[WS]());
+         (0, DS.e)(this, LS)[LS] || this.deps.coreCommand(xk.ad.Control, ek)
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5844` → after: `L5832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5832) · [Before (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5844)

```diff
-         (0, dq.e)(this, Eo)[Eo](bQ.Ac.FilePartDone, function(QQ, FQ) {
+         (0, DS.e)(this, gS)[gS](xk.ad.FilePartDone, function(kk, ek) {
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5851` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5839) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5851)

```diff
-         return (0, dq.e)(this, Eo)[Eo](bQ.Ac.FileDone, function(QQ) {
+         return (0, DS.e)(this, gS)[gS](xk.ad.FileDone, function(kk) {
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5866` → after: `L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5854) · [Before (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5866)

```diff
-         if (!FQ || !wQ) return void(null === QQ || void 0 === QQ || QQ.resolve((0, dq.e)(this, to)[to] ? "trapped" : "iY"));
+         if (!ek || !ik) return void(null === kk || void 0 === kk || kk.resolve((0, DS.e)(this, YS)[YS] ? "trapped" : "fU"));
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5869` → after: `L5857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5857) · [Before (L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5869)

```diff
-         } = this.deps, qQ = LQ.qoQ(2);
+         } = this.deps, fk = Dk.yfk(2);
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5875` → after: `L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5863) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5875)

```diff
-           mQ = null !== (HQ = QQ[qQ >>> 2]) && void 0 !== HQ ? HQ : 0, uQ = null !== (bQ = QQ[1 + (qQ >>> 2)]) && void 0 !== bQ ? bQ : 0
+           mk = null !== (Kk = kk[fk >>> 2]) && void 0 !== Kk ? Kk : 0, Mk = null !== (xk = kk[1 + (fk >>> 2)]) && void 0 !== xk ? xk : 0
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5882` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5870) · [Before (L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5882)

```diff
-           oQ = FQ.step(), DQ = FQ.ooQ(), kQ = FQ.koQ(), vQ = FQ.voQ()
+           Sk = ek.step(), bk = ek.Yfk(), rk = ek.Lfk(), Pk = ek.Cfk()
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5884` → after: `L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5872) · [Before (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5884)

```diff
-           if (!(0, dq.e)(this, wD)[wD](YQ)) throw null === QQ || void 0 === QQ || QQ.resolve("iY"), YQ;
+           if (!(0, DS.e)(this, fb)[fb](nk)) throw null === kk || void 0 === kk || kk.resolve("fU"), nk;
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5888` → after: `L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5876) · [Before (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5888)

```diff
-           const QQ = LQ.moQ(2, oQ);
+           const kk = Dk.Afk(2, Sk);
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5896` → after: `L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5884) · [Before (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5896)

```diff
-             throw null === QQ || void 0 === QQ || QQ.resolve("iY"), YQ
+             throw null === kk || void 0 === kk || kk.resolve("fU"), nk
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5903` → after: `L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5891) · [Before (L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5903)

```diff
-         if (!(0, dq.e)(this, No)[No]() && !(0, dq.e)(this, To)[To]()) return (0, dq.e)(this, no)[no](), void(null === QQ || void 0 === QQ || QQ.resolve("iY"));
+         if (!(0, DS.e)(this, hS)[hS]() && !(0, DS.e)(this, aS)[aS]()) return (0, DS.e)(this, GS)[GS](), void(null === kk || void 0 === kk || kk.resolve("fU"));
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5912` → after: `L5900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5900) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5912)

```diff
-       (0, dq.e)(this, Eo)[Eo](bQ.Ac.Session, function(QQ) {
+       (0, DS.e)(this, gS)[gS](xk.ad.Session, function(kk) {
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5964` → after: `L5952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5952) · [Before (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5964)

```diff
-       if (!(0, dq.e)(this, xo)[xo]) return Promise.resolve((0, dq.e)(this, to)[to] ? "trapped" : "iY");
+       if (!(0, DS.e)(this, pS)[pS]) return Promise.resolve((0, DS.e)(this, YS)[YS] ? "trapped" : "fU");
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5993` → after: `L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5981) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5993)

```diff
-           qQ = (0, dq.e)(this, FD)[FD]((() => LQ.uoQ()));
+           fk = (0, DS.e)(this, Db)[Db]((() => Dk.jfk()));
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5995-L5996` → after: `L5983-L5984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5983-L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5983-L5984) · [Before (L5995-L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5995-L5996)

```diff
-         const oQ = this.deps.core.HoQ();
-         if (qQ !== oQ) return await (0, dq.e)(this, Bo)[Bo](new Error(`recorder port version ${qQ}, the core's ${oQ}`)), !1;
+         const Sk = this.deps.core.sfk();
+         if (fk !== Sk) return await (0, DS.e)(this, eb)[eb](new Error(`recorder port version ${fk}, the core's ${Sk}`)), !1;
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6001` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5989) · [Before (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6001)

```diff
-         if (!(0, dq.e)(this, FD)[FD]((() => ((0, dq.e)(this, xo)[xo] = new FQ.boQ, (0, dq.e)(this, Ao)[Ao] = FQ.woQ(), !0)))) return !1;
+         if (!(0, DS.e)(this, Db)[Db]((() => ((0, DS.e)(this, pS)[pS] = new ek.dfk, (0, DS.e)(this, yS)[yS] = ek.lfk(), !0)))) return !1;
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6004` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5992) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6004)

```diff
-         return (0, dq.e)(this, io)[io] = null, QQ && (0, dq.e)(this, Eo)[Eo](bQ.Ac.Control, QQ), (0, dq.e)(this, Vo)[Vo]()
+         return (0, DS.e)(this, FS)[FS] = null, kk && (0, DS.e)(this, gS)[gS](xk.ad.Control, kk), (0, DS.e)(this, oS)[oS]()
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6011` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5999) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6011)

```diff
-       return this.deps.core.YoQ(0), 1 === this.deps.core.YoQ(1) || ((0, dq.e)(this, no)[no](), this.deps.failed(Ho), !1)
+       return this.deps.core.Vfk(0), 1 === this.deps.core.Vfk(1) || ((0, DS.e)(this, GS)[GS](), this.deps.failed(HS), !1)
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6015` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6003) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6015)

```diff
-       (0, dq.e)(this, Co)[Co] && (0, dq.e)(this, Eo)[Eo](bQ.Ac.Prefs, ko((0, dq.e)(this, Co)[Co].on, (0, dq.e)(this, Co)[Co].seconds)), (0, dq.e)(this, So)[So] && (0, dq.e)(this, Io)[Io]((0, dq.e)(this, So)[So])
+       (0, DS.e)(this, dS)[dS] && (0, DS.e)(this, gS)[gS](xk.ad.Prefs, KS((0, DS.e)(this, dS)[dS].on, (0, DS.e)(this, dS)[dS].seconds)), (0, DS.e)(this, VS)[VS] && (0, DS.e)(this, vS)[vS]((0, DS.e)(this, VS)[VS])
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6023` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6011) · [Before (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6023)

```diff
-           return null !== (QQ = null === (FQ = (0, dq.e)(this, Co)[Co]) || void 0 === FQ ? void 0 : FQ.seconds) && void 0 !== QQ ? QQ : 0
+           return null !== (kk = null === (ek = (0, DS.e)(this, dS)[dS]) || void 0 === ek ? void 0 : ek.seconds) && void 0 !== kk ? kk : 0
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6028` → after: `L6016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6016) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6028)

```diff
-         kx: () => (0, dq.e)(this, eo)[eo],
+         aU: () => (0, DS.e)(this, LS)[LS],
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6038` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6026) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6038)

```diff
-         const qQ = wQ.LoQ(FQ.length);
+         const fk = ik.pfk(ek.length);
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6044` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6032) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6044)

```diff
-       (0, dq.e)(this, po)[po]++, (0, dq.e)(this, Xo)[Xo]("iY"), (0, dq.e)(this, ro)[ro].stop(), this.deps.core.YoQ(0), (0, dq.e)(this, go)[go](), (0, dq.e)(this, to)[to] || ((0, dq.e)(this, Yo)[Yo] = null, this.deps.unload())
+       (0, DS.e)(this, jS)[jS]++, (0, DS.e)(this, cS)[cS]("fU"), (0, DS.e)(this, QS)[QS].stop(), this.deps.core.Vfk(0), (0, DS.e)(this, NS)[NS](), (0, DS.e)(this, YS)[YS] || ((0, DS.e)(this, lS)[lS] = null, this.deps.unload())
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6092` → after: `L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6080) · [Before (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6092)

```diff
-       return QQ instanceof WebAssembly.RuntimeError && ((0, dq.e)(this, to)[to] = !0, (0, dq.e)(this, xo)[xo] = null, (0, dq.e)(this, Ao)[Ao] = null, (0, dq.e)(this, so)[so] = null, (0, dq.e)(this, Yo)[Yo] = null, (0, dq.e)(this, io)[io] = null, (0, dq.e)(this, Xo)[Xo]("trapped") … [truncated]
+       return kk instanceof WebAssembly.RuntimeError && ((0, DS.e)(this, YS)[YS] = !0, (0, DS.e)(this, pS)[pS] = null, (0, DS.e)(this, yS)[yS] = null, (0, DS.e)(this, zS)[zS] = null, (0, DS.e)(this, lS)[lS] = null, (0, DS.e)(this, FS)[FS] = null, (0, DS.e)(this, cS)[cS]("trapped") … [truncated]
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6094` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6082) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6094)

```diff
-     var OD = wQ(38174);
+     var ub = ik(38231);
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6096` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6084) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6096)

```diff
-       ["skyblock", () => wQ.e(50).then((() => wQ(38166)))]
+       ["skyblock", () => ik.e(51).then((() => ik(38228)))]
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6102-L6103` → after: `L6090-L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6090-L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6090-L6091) · [Before (L6102-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6102-L6103)

```diff
-         const FQ = (0, OD.e)(QQ);
-         if (!FQ) throw new Error(`${QQ}'s replay hook module registered no hook`);
+         const ek = (0, ub.d)(kk);
+         if (!ek) throw new Error(`${kk}'s replay hook module registered no hook`);
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6183-L6201` → after: `L6171-L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6171-L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6171-L6189) · [Before (L6183-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6183-L6201)

```diff
-     var UD = (0, Qo.c)("bindings"),
-       ND = (0, Qo.c)("module"),
-       TD = (0, Qo.c)("memory"),
-       KD = (0, Qo.c)("trapped"),
-       zD = (0, Qo.c)("generation"),
-       lD = (0, Qo.c)("loading"),
-       jD = (0, Qo.c)("lend"),
-       aD = (0, Qo.c)("givenUp"),
-       XD = (0, Qo.c)("afterSave"),
-       fD = (0, Qo.c)("opens"),
-       VD = (0, Qo.c)("saveAskedAt"),
-       hD = (0, Qo.c)("unload"),
-       JD = (0, Qo.c)("dropModule"),
-       ED = (0, Qo.c)("loadFailed"),
-       nD = (0, Qo.c)("saveReadsBody"),
-       gD = (0, Qo.c)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var Qb = (0, fS.d)("bindings"),
+       vb = (0, fS.d)("module"),
+       Eb = (0, fS.d)("memory"),
+       hb = (0, fS.d)("trapped"),
+       ab = (0, fS.d)("generation"),
+       Wb = (0, fS.d)("loading"),
+       tb = (0, fS.d)("lend"),
+       Xb = (0, fS.d)("givenUp"),
+       Bb = (0, fS.d)("afterSave"),
+       cb = (0, fS.d)("opens"),
+       Tb = (0, fS.d)("saveAskedAt"),
+       ob = (0, fS.d)("unload"),
+       Zb = (0, fS.d)("dropModule"),
+       Ob = (0, fS.d)("loadFailed"),
+       gb = (0, fS.d)("saveReadsBody"),
+       Gb = (0, fS.d)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6259-L6260` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6247-L6248) · [Before (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6259-L6260)

```diff
-       async open(QQ) {
-         if ((0, dq.e)(this, KD)[KD]) return bQ.Oc.ModuleTrap;
+       async open(kk, ek) {
+         if ((0, DS.e)(this, hb)[hb]) return xk.nd.ModuleTrap;
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6268` → after: `L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6256) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6268)

```diff
-             return (0, dq.e)(this, lD)[lD]--, QQ !== (0, dq.e)(this, zD)[zD] ? "stopped" : (0, dq.e)(this, ED)[ED](LQ)
+             return (0, DS.e)(this, Wb)[Wb]--, kk !== (0, DS.e)(this, ab)[ab] ? "stopped" : (0, DS.e)(this, Ob)[Ob](fk, ek)
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6271-L6274` → after: `L6259-L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6259-L6262) · [Before (L6271-L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6271-L6274)

```diff
-           if ((0, dq.e)(this, KD)[KD]) return bQ.Oc.ModuleTrap;
-           const wQ = FQ.uoQ(),
-             qQ = this.deps.core.HoQ();
-           if (wQ !== qQ) return (0, dq.e)(this, ED)[ED](new Error(`replay port version ${wQ}, the core's ${qQ}`));
+           if ((0, DS.e)(this, hb)[hb]) return xk.nd.ModuleTrap;
+           const Dk = ik.jfk(),
+             Sk = this.deps.core.sfk();
+           if (Dk !== Sk) return (0, DS.e)(this, Ob)[Ob](new Error(`replay port version ${Dk}, the core's ${Sk}`), ek);
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6280-L6281` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6268-L6269) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6280-L6281)

```diff
-               (0, dq.e)(this, ND)[ND] = new QQ.xoQ, (0, dq.e)(this, TD)[TD] = QQ.AoQ()
-             }))) return bQ.Oc.ModuleTrap
+               (0, DS.e)(this, vb)[vb] = new kk.Ffk, (0, DS.e)(this, Eb)[Eb] = kk.ufk()
+             }))) return xk.nd.ModuleTrap
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6288` → after: `L6276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6276) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6288)

```diff
-         })) ? wQ ? "opening" : bQ.Oc.TooLarge : bQ.Oc.ModuleTrap
+         })) ? Dk ? "opening" : xk.nd.TooLarge : xk.nd.ModuleTrap
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6296` → after: `L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6284) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6296)

```diff
-         } = this.deps, qQ = LQ.toQ(QQ);
+         } = this.deps, fk = Dk.qfk(kk);
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6301` → after: `L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6289) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6301)

```diff
-           DQ = FQ.step(oQ, qQ - oQ), kQ = FQ.ooQ()
+           bk = ek.step(Sk, fk - Sk), rk = ek.Yfk()
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6305` → after: `L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6293) · [Before (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6305)

```diff
-         const vQ = LQ.moQ(1, DQ);
+         const Pk = Dk.Afk(1, bk);
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6311` → after: `L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6299) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6311)

```diff
-           return (0, dq.e)(this, nD)[nD] ? (0, dq.e)(this, XD)[XD] = "drop" : (0, dq.e)(this, JD)[JD](), void LQ.eoQ(bQ.Oc.Port)
+           return (0, DS.e)(this, gb)[gb] ? (0, DS.e)(this, Bb)[Bb] = "drop" : (0, DS.e)(this, Zb)[Zb](), void Dk.Ifk(xk.nd.Port)
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6333` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6321) · [Before (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6333)

```diff
-           wQ.MoQ(QQ, FQ)
+           ik.zfk(kk, ek)
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6338` → after: `L6326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6326) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6338)

```diff
-           wQ.GoQ(QQ[0], QQ[1], QQ[2], FQ[0], FQ[1], FQ[2])
+           ik.Qfk(kk[0], kk[1], kk[2], ek[0], ek[1], ek[2])
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6343` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6331) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6343)

```diff
-           wQ.poQ(QQ, FQ)
+           ik.vfk(kk, ek)
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6348` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6336) · [Before (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6348)

```diff
-           wQ.coQ(QQ, FQ)
+           ik.Efk(kk, ek)
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6353` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6341) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6353)

```diff
-           wQ.CoQ(QQ, FQ)
+           ik.hfk(kk, ek)
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6367` → after: `L6355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6355) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6367)

```diff
-             FQ = QQ.save(), 0 !== FQ && (wQ = new Uint8Array(LQ.buffer, QQ.SoQ(), QQ.ioQ()).slice())
+             ek = kk.save(), 0 !== ek && (ik = new Uint8Array(Dk.buffer, kk.Wfk(), kk.tfk()).slice())
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6377-L6378` → after: `L6365-L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6365-L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6365-L6366) · [Before (L6377-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6377-L6378)

```diff
-               const oQ = LQ.WoQ();
-               0 !== oQ && QQ >= 0 && FQ >= 0 && QQ + FQ <= oQ && (wQ = new Uint8Array(qQ.buffer, LQ.RoQ() + QQ, FQ))
+               const Sk = Dk.Xfk();
+               0 !== Sk && kk >= 0 && ek >= 0 && kk + ek <= Sk && (ik = new Uint8Array(fk.buffer, Dk.Bfk() + kk, ek))
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6384` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6372) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6384)

```diff
-               QQ.OoQ()
+               kk.cfk()
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6397` → after: `L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6385) · [Before (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6397)

```diff
-           FQ.soQ(QQ)
+           ek.Tfk(kk)
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6402` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6390) · [Before (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6402)

```diff
-           FQ.roQ(QQ)
+           ek.ofk(kk)
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6426-L6427` → after: `L6414-L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6414-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6414-L6417) · [Before (L6426-L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6426-L6427)

```diff
-     async function Fk(QQ) {
-       return await this.deps.staleOr(QQ, (() => {})) ? "reloading" : bQ.Oc.ModuleLoad
+     async function Dr(kk, ek) {
+       return await this.deps.staleOr(kk, (() => {}), {
+         beforeReload: ek
+       }) ? "reloading" : xk.nd.ModuleLoad
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6457` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6447) · [Before (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6457)

```diff
-       (0, dq.e)(this, KD)[KD] = !0, (0, dq.e)(this, ND)[ND] = null, (0, dq.e)(this, TD)[TD] = null, (0, dq.e)(this, UD)[UD] = null, this.deps.crash(this.deps.markTrapped(QQ)), this.deps.core.eoQ(bQ.Oc.ModuleTrap)
+       (0, DS.e)(this, hb)[hb] = !0, (0, DS.e)(this, vb)[vb] = null, (0, DS.e)(this, Eb)[Eb] = null, (0, DS.e)(this, Qb)[Qb] = null, this.deps.crash(this.deps.markTrapped(kk)), this.deps.core.Ifk(xk.nd.ModuleTrap)
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6459-L6460` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6449-L6450) · [Before (L6459-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6459-L6460)

```diff
-     var vk = wQ(6320),
-       mk = wQ(40154);
+     var mr = ik(6333),
+       Mr = ik(40606);
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6471` → after: `L6461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6461) · [Before (L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6471)

```diff
-         case bQ.Sc.FlyingText: {
+         case xk.vd.FlyingText: {
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6476` → after: `L6466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6466) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6476)

```diff
-             return void console.warn(`${uk} a replay's flying text isn't JSON`, mQ)
+             return void console.warn(`${Kr} a replay's flying text isn't JSON`, mk)
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6478` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6468) · [Before (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6478)

```diff
-           DQ.l.GA("forceFlyingMiddleMessage", {
+           bk.j.tm("forceFlyingMiddleMessage", {
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6480` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6470) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6480)

```diff
-             Rw: QQ.Rw,
+             Ke: kk.Ke,
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6482` → after: `L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6472) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6482)

```diff
-             Ow: QQ.Ow
+             xe: kk.xe
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6486-L6487` → after: `L6476-L6477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6476-L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6476-L6477) · [Before (L6486-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6486-L6487)

```diff
-         case bQ.Sc.PlayerKilled:
-           (0, mk.g)({
+         case xk.vd.PlayerKilled:
+           (0, Mr.f)({
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6490` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6480) · [Before (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6490)

```diff
-               deadEId: null !== (FQ = bk(QQ.dead)) && void 0 !== FQ ? FQ : "",
+               deadEId: null !== (ek = nr(kk.dead)) && void 0 !== ek ? ek : "",
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6492` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6482) · [Before (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6492)

```diff
-               withItem: null !== (wQ = QQ.withItem) && void 0 !== wQ ? wQ : "",
+               withItem: null !== (ik = kk.withItem) && void 0 !== ik ? ik : "",
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6497-L6498` → after: `L6487-L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6487-L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6487-L6488) · [Before (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6497-L6498)

```diff
-         case bQ.Sc.Killfeed:
-           (0, mk.g)({
+         case xk.vd.Killfeed:
+           (0, Mr.f)({
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6503-L6504` → after: `L6493-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6493-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6493-L6494) · [Before (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6503-L6504)

```diff
-                 name: null !== (LQ = QQ.killerName) && void 0 !== LQ ? LQ : void 0,
-                 colour: null !== (qQ = QQ.killerColour) && void 0 !== qQ ? qQ : void 0
+                 name: null !== (Dk = kk.killerName) && void 0 !== Dk ? Dk : void 0,
+                 colour: null !== (fk = kk.killerColour) && void 0 !== fk ? fk : void 0
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6508-L6509` → after: `L6498-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6498-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6498-L6499) · [Before (L6508-L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6508-L6509)

```diff
-                 name: null !== (oQ = QQ.victimName) && void 0 !== oQ ? oQ : void 0,
-                 colour: null !== (kQ = QQ.victimColour) && void 0 !== kQ ? kQ : void 0
+                 name: null !== (Sk = kk.victimName) && void 0 !== Sk ? Sk : void 0,
+                 colour: null !== (rk = kk.victimColour) && void 0 !== rk ? rk : void 0
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6511` → after: `L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6501) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511)

```diff
-               withItem: null !== (vQ = QQ.withItem) && void 0 !== vQ ? vQ : ""
+               withItem: null !== (Pk = kk.withItem) && void 0 !== Pk ? Pk : ""
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6521` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511) · [Before (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6521)

```diff
-       return Number.isInteger(FQ) && FQ > Iq && FQ <= 2147483647 ? FQ : null
+       return Number.isInteger(ek) && ek > Qf && ek <= 2147483647 ? ek : null
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6533` → after: `L6523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6523) · [Before (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6533)

```diff
-       const FQ = (0, fq.h)(gw.rc.PlayerKilled, (FQ => {
+       const ek = (0, of.m)(Gi.tc.PlayerKilled, (ek => {
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6535` → after: `L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6525) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6535)

```diff
-           const qQ = (0, Xq.j)(FQ);
+           const fk = (0, Tf.k)(ek);
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6543` → after: `L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6533) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6543)

```diff
-           QQ.recordPlayerKilled(null !== (wQ = Ak(oQ)) && void 0 !== wQ ? wQ : Iq, null !== (LQ = Ak(DQ)) && void 0 !== LQ ? LQ : Iq, "number" === typeof vQ ? vQ : 0, "string" === typeof kQ ? kQ : "")
+           kk.recordPlayerKilled(null !== (ik = wr(Sk)) && void 0 !== ik ? ik : Qf, null !== (Dk = wr(bk)) && void 0 !== Dk ? Dk : Qf, "number" === typeof Pk ? Pk : 0, "string" === typeof rk ? rk : "")
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6545-L6546` → after: `L6535-L6536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6535-L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6535-L6536) · [Before (L6545-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6545-L6546)

```diff
-         wQ = (0, fq.h)(gw.rc.CustomKillfeed, (FQ => {
-           const wQ = (0, Xq.j)(FQ);
+         ik = (0, of.m)(Gi.tc.CustomKillfeed, (ek => {
+           const ik = (0, Tf.k)(ek);
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6553` → after: `L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6543) · [Before (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6553)

```diff
-           QQ.recordKillfeed(tk(LQ), tk(qQ), "string" === typeof oQ ? oQ : null)
+           kk.recordKillfeed(lr(Dk), lr(fk), "string" === typeof Sk ? Sk : null)
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6562` → after: `L6552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6552) · [Before (L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6562)

```diff
-       return void 0 === QQ || null === QQ ? null : null !== (FQ = JSON.stringify(QQ)) && void 0 !== FQ ? FQ : null
+       return void 0 === kk || null === kk ? null : null !== (ek = JSON.stringify(kk)) && void 0 !== ek ? ek : null
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6571` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6561) · [Before (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6571)

```diff
-         } = LQ.c.get("clientEscMenuOptions"), oQ = `${wQ}:${qQ}`;
+         } = Dk.b.get("clientEscMenuOptions"), Sk = `${ik}:${fk}`;
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6574` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6564) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6574)

```diff
-       return wQ(), (0, DQ.o)("appManagerUpdated|clientEscMenuOptions", wQ)
+       return ik(), (0, bk.k)("appManagerUpdated|clientEscMenuOptions", ik)
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6581` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6571) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6581)

```diff
-         return QQ.isStopped ? wQ : FQ(...arguments)
+         return kk.isStopped ? ik : ek(...arguments)
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6585` → after: `L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6575) · [Before (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6585)

```diff
-       open: () => Promise.reject(new Error(cq.c.coreStopped.text)),
+       open: () => Promise.reject(new Error(jf.e.coreStopped.text)),
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6593` → after: `L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6583) · [Before (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6593)

```diff
-       return wQ.e(62).then((() => wQ(60972)))
+       return ik.e(64).then((() => ik(60865)))
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6597` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6587) · [Before (L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6597)

```diff
-       (0, cq.f)({
+       (0, jf.i)({
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6609` → after: `L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6599) · [Before (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6609)

```diff
-         } = QQ, oQ = () => QQ.memory().buffer, DQ = () => FQ.isStopped ? null : FQ.rings.cmd, kQ = Ck(FQ, ((QQ, FQ) => qQ.moQ(QQ, FQ)), 0), vQ = () => qQ.HoQ();
+         } = kk, Sk = () => kk.memory().buffer, bk = () => ek.isStopped ? null : ek.rings.cmd, rk = Ar(ek, ((kk, ek) => fk.Afk(kk, ek)), 0), Pk = () => fk.sfk();
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6613-L6617` → after: `L6603-L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6603-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6603-L6607) · [Before (L6613-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6613-L6617)

```diff
-             toQ: Ck(FQ, (QQ => qQ.toQ(QQ)), -1),
-             moQ: kQ,
-             HoQ: vQ,
-             eoQ: Ck(FQ, (QQ => {
-               qQ.eoQ(QQ)
+             qfk: Ar(ek, (kk => fk.qfk(kk)), -1),
+             Afk: rk,
+             sfk: Pk,
+             Ifk: Ar(ek, (kk => {
+               fk.Ifk(kk)
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6621` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6611) · [Before (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6621)

```diff
-           load: async () => (mQ = await wQ.e(63).then((() => wQ(60983))), mQ.loadReplayModule()),
+           load: async () => (mk = await ik.e(65).then((() => ik(60873))), mk.loadReplayModule()),
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6627` → after: `L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6617) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6627)

```diff
-           staleOr: (FQ, wQ) => QQ.staleOr(pk, FQ, wQ),
+           staleOr: (ek, ik, Dk) => kk.staleOr(Lr, ek, ik, Dk),
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6635-L6638` → after: `L6625-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6625-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6625-L6628) · [Before (L6635-L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6635-L6638)

```diff
-             YoQ: Ck(FQ, (QQ => qQ.YoQ(QQ)), 0),
-             qoQ: Ck(FQ, (QQ => qQ.qoQ(QQ)), 0),
-             moQ: kQ,
-             HoQ: vQ
+             Vfk: Ar(ek, (kk => fk.Vfk(kk)), 0),
+             yfk: Ar(ek, (kk => fk.yfk(kk)), 0),
+             Afk: rk,
+             sfk: Pk
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6648` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6638) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6648)

```diff
-               console.warn(`${xk} the recorder module didn't prefetch, so a save loads it:`, QQ)
+               console.warn(`${Hr} the recorder module didn't prefetch, so a save loads it:`, kk)
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6658` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6648) · [Before (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6658)

```diff
-             return null !== (QQ = null === (FQ = uQ) || void 0 === FQ ? void 0 : FQ.recorderMemoryBytes()) && void 0 !== QQ ? QQ : 0
+             return null !== (kk = null === (ek = Mk) || void 0 === ek ? void 0 : ek.recorderMemoryBytes()) && void 0 !== kk ? kk : 0
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6675-L6677` → after: `L6665-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6665-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6665-L6667) · [Before (L6675-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6675-L6677)

```diff
-             PqQ: Ck(FQ, (QQ => qQ.PqQ(QQ)), 0),
-             yqQ: Ck(FQ, (() => {
-               qQ.yqQ()
+             Mfk: Ar(ek, (kk => fk.Mfk(kk)), 0),
+             xfk: Ar(ek, (() => {
+               fk.xfk()
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6679-L6680` → after: `L6669-L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6669-L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6669-L6670) · [Before (L6679-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6679-L6680)

```diff
-             Nt: Ck(FQ, (() => qQ.Nt()), 0),
-             ZqQ: Ck(FQ, (() => qQ.ZqQ()), 0)
+             Ow: Ar(ek, (() => fk.Ow()), 0),
+             Kfk: Ar(ek, (() => fk.Kfk()), 0)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6693` → after: `L6683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6683) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6693)

```diff
-             console.warn(`${xk} the recorded game's replay hooks:`, QQ)
+             console.warn(`${Hr} the recorded game's replay hooks:`, kk)
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6702` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6692) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6702)

```diff
-           notify: cq.f,
+           notify: jf.i,
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6705` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6695) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6705)

```diff
-             null === (QQ = (0, Sq.f)()) || void 0 === QQ || QQ.recorderChanged()
+             null === (kk = (0, df.h)()) || void 0 === kk || kk.recorderChanged()
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6709` → after: `L6699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6699) · [Before (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6709)

```diff
-             null === (QQ = (0, Sq.f)()) || void 0 === QQ || QQ.viewerChanged()
+             null === (kk = (0, df.h)()) || void 0 === kk || kk.viewerChanged()
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6714` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6704) · [Before (L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6714)

```diff
-               const qQ = gw.ub[FQ.key];
+               const fk = Gi.Ab[ek.key];
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6716-L6717` → after: `L6706-L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6706-L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6706-L6707) · [Before (L6716-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6716-L6717)

```diff
-               let oQ = null !== (wQ = FQ.value) && void 0 !== wQ ? wQ : JSON.parse(JSON.stringify(null !== (LQ = vk.b[qQ]) && void 0 !== LQ ? LQ : null));
-               if (null !== FQ.value && FQ.key < gw.Zb.Environment && "string" === typeof oQ) try {
+               let Sk = null !== (ik = ek.value) && void 0 !== ik ? ik : JSON.parse(JSON.stringify(null !== (Dk = mr.b[fk]) && void 0 !== Dk ? Dk : null));
+               if (null !== ek.value && ek.key < Gi._b.Environment && "string" === typeof Sk) try {
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6720` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6710) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6720)

```diff
-                 return void console.warn(`${uk} a replay's ${qQ} isn't JSON`, DQ)
+                 return void console.warn(`${Kr} a replay's ${fk} isn't JSON`, bk)
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6729` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6719) · [Before (L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6729)

```diff
-             this.entityHooks.opened((0, RQ.Wb)(FQ)), QQ.replayShaderPack(FQ)
+             this.entityHooks.opened((0, dk.Db)(ek)), kk.replayShaderPack(ek)
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6733` → after: `L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6723) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6733)

```diff
-             return null !== (QQ = null === (wQ = FQ.lastHeader) || void 0 === wQ ? void 0 : wQ.renderPending) && void 0 !== QQ ? QQ : 0
+             return null !== (kk = null === (ik = ek.lastHeader) || void 0 === ik ? void 0 : ik.renderPending) && void 0 !== kk ? kk : 0
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6735` → after: `L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6725) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6735)

```diff
-           viewerOpen: Cq.b,
+           viewerOpen: sf.c,
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6737` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6727) · [Before (L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6737)

```diff
-             (0, Gq.f)(QQ)
+             (0, Cf.l)(kk)
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6740` → after: `L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6730) · [Before (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6740)

```diff
-         this.runtime = bQ, LQ.replay = bQ.sink, (0, Sq.q)(bQ);
+         this.runtime = xk, Dk.replay = xk.sink, (0, df.t)(xk);
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6749-L6750` → after: `L6739-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6739-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6739-L6740) · [Before (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6749-L6750)

```diff
-         this.freecam = YQ, (0, Sq.m)(YQ), this.recordedOptions = function(QQ, FQ) {
-           const wQ = gw.ub,
+         this.freecam = nk, (0, df.s)(nk), this.recordedOptions = function(kk, ek) {
+           const ik = Gi.Ab,
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6764` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6754) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6764)

```diff
-         }(bQ.recorder, QQ.options), this.stops = [(0, qL.k)((QQ => {
+         }(xk.recorder, kk.options), this.stops = [(0, bD.n)((kk => {
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6790` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6780) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6790)

```diff
-           wQ && (null === (LQ = (0, Sq.f)()) || void 0 === LQ || LQ.keyDown(FQ))
+           ik && (null === (Dk = (0, df.h)()) || void 0 === Dk || Dk.keyDown(ek))
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6794` → after: `L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6784) · [Before (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6794)

```diff
-           return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isOpen) ? QQ : null
+           return !0 === (null === kk || void 0 === kk ? void 0 : kk.isOpen) ? kk : null
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6796` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6786) · [Before (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6796)

```diff
-         (0, pq.e)({
+         (0, Af.f)({
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6800` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6790) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6800)

```diff
-             return null !== (QQ = null === (FQ = xQ()) || void 0 === FQ ? void 0 : FQ.id) && void 0 !== QQ ? QQ : null
+             return null !== (kk = null === (ek = Uk()) || void 0 === ek ? void 0 : ek.id) && void 0 !== kk ? kk : null
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6804` → after: `L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6794) · [Before (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6804)

```diff
-             return null !== (QQ = null === (FQ = xQ()) || void 0 === FQ ? void 0 : FQ.saveRefusal) && void 0 !== QQ ? QQ : null
+             return null !== (kk = null === (ek = Uk()) || void 0 === ek ? void 0 : ek.saveRefusal) && void 0 !== kk ? kk : null
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6808` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6798) · [Before (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6808)

```diff
-             return null !== (QQ = null === (FQ = xQ()) || void 0 === FQ ? void 0 : FQ.save()) && void 0 !== QQ ? QQ : Promise.resolve(null)
+             return null !== (kk = null === (ek = Uk()) || void 0 === ek ? void 0 : ek.save()) && void 0 !== kk ? kk : Promise.resolve(null)
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6812` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6802) · [Before (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6812)

```diff
-             return null !== (QQ = null === (FQ = bQ.currentViewer) || void 0 === FQ ? void 0 : FQ.fileHandle) && void 0 !== QQ ? QQ : null
+             return null !== (kk = null === (ek = xk.currentViewer) || void 0 === ek ? void 0 : ek.fileHandle) && void 0 !== kk ? kk : null
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6822` → after: `L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6812) · [Before (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6822)

```diff
-           if (QQ.phase === bQ.z.Activated) {
+           if (kk.phase === xk.K.Activated) {
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6826` → after: `L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6816) · [Before (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6826)

```diff
-               lobbyType: (0, OQ.A)(FQ.lobbyName),
+               lobbyType: (0, Vk.u)(ek.lobbyName),
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6830` → after: `L6820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6820) · [Before (L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6830)

```diff
-           } else QQ.phase !== bQ.z.Left && QQ.phase !== bQ.z.Closed || QQ.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else kk.phase !== xk.K.Left && kk.phase !== xk.K.Closed || kk.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6836` → after: `L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6826) · [Before (L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6836)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Sq.k)() === this.runtime && (0, Sq.q)(null), (0, Sq.h)() === this.freecam && (0, Sq.m)(null), (0, pq.e)(Sk), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, df.n)() === this.runtime && (0, df.t)(null), (0, df.j)() === this.freecam && (0, df.s)(null), (0, Af.f)(jr), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6843-L6844` → after: `L6833-L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6833-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6833-L6834) · [Before (L6843-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6843-L6844)

```diff
-         if (wQ.isStopped) throw new Error(cq.c.coreStopped.text);
-         if (QQ.byteLength > 67108864) throw new Error(cq.c.cantOpen.text);
+         if (ik.isStopped) throw new Error(jf.e.coreStopped.text);
+         if (kk.byteLength > 67108864) throw new Error(jf.e.cantOpen.text);
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6849` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6839) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6849)

```diff
-             return FQ.inPlayback || (0, qL.H)().leaveGame(null), FQ
+             return ek.inPlayback || (0, bD.J)().leaveGame(null), ek
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6852` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6842) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6852)

```diff
-           throw console.warn(`${xk} the replay viewer didn't load`, qQ), new Error(cq.c.viewerLoadFailed.text)
+           throw console.warn(`${Hr} the replay viewer didn't load`, fk), new Error(jf.e.viewerLoadFailed.text)
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6854` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6844) · [Before (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6854)

```diff
-         if (wQ.isStopped) throw new Error(cq.c.coreStopped.text);
+         if (ik.isStopped) throw new Error(jf.e.coreStopped.text);
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6866` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6856) · [Before (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6866)

```diff
-           aux: QQ.reset ? bQ.Ob.ResetFirst : 0,
+           aux: kk.reset ? xk.sc.ResetFirst : 0,
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6870` → after: `L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6860) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6870)

```diff
-       QQ.queueOptions(wQ, LQ) && (FQ.reset && Ok.b.reset(), Ok.b.apply(FQ.changes))
+       kk.queueOptions(ik, Dk) && (ek.reset && Fr.c.reset(), Fr.c.apply(ek.changes))
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6943-L6947` → after: `L6933-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6933-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6933-L6937) · [Before (L6943-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6943-L6947)

```diff
-     var zk = wQ(41970),
-       lk = wQ(41972),
-       jk = wQ(40430),
-       ak = wQ(40461),
-       Xk = wQ(2811);
+     var hr = ik(42192),
+       ar = ik(42199),
+       Wr = ik(40541),
+       tr = ik(40581),
+       Xr = ik(2823);
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6951` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6941) · [Before (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6951)

```diff
-         this.host = QQ, this.sets = new Map, this.table = [], this.generation = 0, this.kx = !1
+         this.host = kk, this.sets = new Map, this.table = [], this.generation = 0, this.aU = !1
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6955` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6945) · [Before (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6955)

```diff
-           if (QQ.byteLength !== bQ.$c) return null;
+           if (kk.byteLength !== xk.Cd) return null;
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6962` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6952) · [Before (L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6962)

```diff
-         FQ && !this.kx && (FQ.release !== bQ.ad && this.release(FQ.release), FQ.want !== bQ.ad && this.want(FQ.want))
+         ek && !this.aU && (ek.release !== xk.Ed && this.release(ek.release), ek.want !== xk.Ed && this.want(ek.want))
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6965` → after: `L6955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6955) · [Before (L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6965)

```diff
-         if (!this.kx) {
+         if (!this.aU) {
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6971-L6972` → after: `L6961-L6962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6961-L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6961-L6962) · [Before (L6971-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971-L6972)

```diff
-         if (this.kx) return;
-         this.kx = !0, this.generation++, this.table = [];
+         if (this.aU) return;
+         this.aU = !0, this.generation++, this.table = [];
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6978` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6968) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6978)

```diff
-             this.host.YLQ(QQ)
+             this.host.zik(kk)
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6995` → after: `L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6985) · [Before (L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6995)

```diff
-         if (!wQ || 1 !== wQ.urls.length && wQ.urls.length !== gw.mc.CubeFaces) return this.host.sendReady(Ek(QQ)), void this.host.onLoadFailed(QQ, "", new Error(`no image set ${QQ}`));
+         if (!ik || 1 !== ik.urls.length && ik.urls.length !== Gi.oc.CubeFaces) return this.host.sendReady(Zr(kk)), void this.host.onLoadFailed(kk, "", new Error(`no image set ${kk}`));
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7013` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7003) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7013)

```diff
-           if (!vQ || !wQ.wanted) return this.kx ? void this.releaseAfterDispose(kQ.map(hk)) : (this.releaseAll(kQ.map(hk)), void(vQ && this.sets.delete(QQ)));
+           if (!Pk || !ik.wanted) return this.aU ? void this.releaseAfterDispose(rk.map(Tr)) : (this.releaseAll(rk.map(Tr)), void(Pk && this.sets.delete(kk)));
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7020` → after: `L7010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7010) · [Before (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7020)

```diff
-         const [qQ] = LQ, oQ = [qQ.width, qQ.height], DQ = LQ.every((QQ => QQ.width === oQ[0] && QQ.height === oQ[1])), kQ = FQ.urls.length === gw.mc.CubeFaces;
+         const [fk] = Dk, Sk = [fk.width, fk.height], bk = Dk.every((kk => kk.width === Sk[0] && kk.height === Sk[1])), rk = ek.urls.length === Gi.oc.CubeFaces;
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7023-L7024` → after: `L7013-L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7013-L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7013-L7014) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7023-L7024)

```diff
-           const wQ = LQ.map((QQ => `${QQ.width}x${QQ.height}`));
-           return void this.host.onLoadFailed(QQ, FQ.urls[0], new Error(`set ${QQ}'s images can't make its texture: ${wQ.join(", ")}`))
+           const ik = Dk.map((kk => `${kk.width}x${kk.height}`));
+           return void this.host.onLoadFailed(kk, ek.urls[0], new Error(`set ${kk}'s images can't make its texture: ${ik.join(", ")}`))
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7040` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7030) · [Before (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7040)

```diff
-         for (const FQ of QQ) this.host.YLQ(FQ)
+         for (const ek of kk) this.host.zik(ek)
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7044` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7034) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7044)

```diff
-           this.host.YLQ(FQ)
+           this.host.zik(ek)
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7054` → after: `L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7044) · [Before (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7054)

```diff
-       const LQ = new Uint8Array(gw.mc.SkyImagesReadyBytes),
+       const Dk = new Uint8Array(Gi.oc.SkyImagesReadyBytes),
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7056` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7046) · [Before (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7056)

```diff
-       return qQ.setUint16(0, QQ, !0), qQ.setUint16(2, FQ.length, !0), qQ.setUint16(4, wQ[0], !0), qQ.setUint16(6, wQ[1], !0), FQ.slice(0, gw.mc.CubeFaces).forEach(((QQ, FQ) => {
+       return fk.setUint16(0, kk, !0), fk.setUint16(2, ek.length, !0), fk.setUint16(4, ik[0], !0), fk.setUint16(6, ik[1], !0), ek.slice(0, Gi.oc.CubeFaces).forEach(((kk, ek) => {
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7062` → after: `L7052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7052) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7062)

```diff
-       const FQ = new Uint8Array(gw.mc.SkyImagesReadyBytes),
+       const ek = new Uint8Array(Gi.oc.SkyImagesReadyBytes),
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7064` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7054) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7064)

```diff
-       return wQ.setUint16(0, QQ, !0), wQ.setUint16(2, gw.mc.Failed, !0), FQ
+       return ik.setUint16(0, kk, !0), ik.setUint16(2, Gi.oc.Failed, !0), ek
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7070` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7060) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7070)

```diff
-         wQ = await (0, Xk.T)(QQ)
+         ik = await (0, Xr.M)(kk)
```
