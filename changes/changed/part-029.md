# Changed — Bundle Modifications Report (Part 029 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `29 / 104` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 7. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L78` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L353-L355) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L78)

```diff
-       return Number.isInteger(kk) && kk >= 0 && kk < (null !== ek && void 0 !== ek ? ek : 0)
+       var ZC;
+       const QC = null !== (ZC = YC.get(CC)) && void 0 !== ZC ? ZC : zC(CC);
+       return YC.set(CC, QC), QC
```

#### 8. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L82` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L359-L363) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L82)

```diff
-       return Number.isInteger(kk) && kk >= 0
+       const zC = CC.bufferView,
+         ZC = 5125 === CC.componentType ? Uint32Array : Uint16Array,
+         QC = zC.bytes.buffer,
+         wC = zC.bytes.byteOffset + (CC.byteOffset || 0);
+       return wC % ZC.BYTES_PER_ELEMENT !== 0 ? new ZC(QC.slice(wC, wC + CC.count * ZC.BYTES_PER_ELEMENT), 0) : new ZC(QC, wC, CC.count)
```

#### 9. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L86` → after: `L367-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L367-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L367-L414) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L86)

```diff
-       return void 0 !== kk && (!Array.isArray(kk) || kk.length > ek)
+       if (CC.min && CC.max) return [new Float64Array(CC.min), new Float64Array(CC.max)];
+       const ZC = zC.find((CC => {
+           let {
+             kind: zC
+           } = CC;
+           return "position" === zC
+         })),
+         QC = ZC ? (0, IC.g)(ZC, CC.count) : new Float32Array(0);
+       return (0, IC.t)(QC.length / 3, ((CC, zC) => QC[3 * CC + zC]))
+     }
+ 
+     function EC(CC) {
+       const zC = CC.attributes.map((CC => {
+           var zC, ZC;
+           let {
+             kind: QC,
+ ... (32 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L90` → after: `L419-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L419-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L419-L438) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L90)

```diff
-       return "object" === typeof kk && null !== kk && Object.keys(kk).length > ek
+       const ZC = zC.attributes.map((CC => {
+         let {
+           kind: zC,
+           data: ZC,
+           size: QC,
+           byteOffset: wC,
+           byteStride: bC,
+           normalized: nC
+         } = CC;
+         return {
+           kind: zC,
+           data: ZC,
+           offset: wC,
+           stride: bC,
+           components: QC,
+           glType: 5120 + lC.indexOf(ZC.constructor),
+ ... (4 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L94-L95` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L442-L443) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L94-L95)

```diff
-       var ek;
-       return `${kk.normalized?"normalized ":""}${null!==(ek=Dk.f[kk.componentType])&&void 0!==ek?ek:kk.componentType} ${kk.type}`
+       const zC = CC.lastIndexOf("/");
+       return zC < 0 ? CC : CC.substring(zC + 1)
```

#### 12. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L99-L103` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L447-L448) · [Before (L99-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L99-L103)

```diff
-       const ek = ek => {
-         var ik;
-         return null !== (ik = kk[ek]) && void 0 !== ik ? ik : -1
-       };
-       return 255 === ek(0) && 216 === ek(1) ? "JPEG" : 82 === ek(0) && 73 === ek(1) && 87 === ek(8) && 69 === ek(9) ? "WebP" : 171 === ek(0) && 75 === ek(1) && 84 === ek(2) && 88 === ek(3) ? "KTX2" : "non-PNG"
+       const zC = CC.lastIndexOf("/");
+       return zC < 0 ? "" : CC.substring(0, zC + 1)
```

#### 13. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L107` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L452) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L107)

```diff
-       return kk.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ek, ik) => kk[ik] === ek)) && 73 === kk[12] && 72 === kk[13] && 68 === kk[14] && 82 === kk[15]
+       return CC.name || `node${CC.index}`
```

#### 14. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L111` → after: `L475-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L475-L477) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L111)

```diff
-       return /^[aeiou]/i.test(kk) ? `an ${kk}` : `a ${kk}`
+       var zC, ZC, QC, wC;
+       const bC = null !== (zC = CC.minFilter) && void 0 !== zC ? zC : 9987;
+       return 9729 === (null !== (ZC = CC.magFilter) && void 0 !== ZC ? ZC : 9729) ? null !== (QC = TC[bC]) && void 0 !== QC ? QC : 3 : null !== (wC = aC[bC]) && void 0 !== wC ? wC : 4
```

#### 15. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L115-L116` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L485-L486) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L115-L116)

```diff
-       const ek = kk.byteStride;
-       return void 0 === ek || Number.isInteger(ek) && ek >= 4 && ek <= 252 && ek % 4 === 0
+       var zC;
+       return null !== (zC = DC[null !== CC && void 0 !== CC ? CC : 10497]) && void 0 !== zC ? zC : 1
```

#### 16. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L119-L124` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L489-L490) · [Before (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L119-L124)

```diff
-     function Vk(kk, ek, ik) {
-       var Dk, fk;
-       const Sk = null === (Dk = kk.bufferViews) || void 0 === Dk ? void 0 : Dk[ik];
-       if (!Sk || !ek || 0 !== Sk.buffer) return null;
-       const bk = null !== (fk = Sk.byteOffset) && void 0 !== fk ? fk : 0;
-       return !yk(bk) || !yk(Sk.byteLength) || bk + Sk.byteLength > ek.byteLength ? null : ek.subarray(bk, bk + Sk.byteLength)
+     function yC(CC) {
+       return 9728 === CC.minFilter || 9729 === CC.minFilter
```

#### 17. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L127` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L493) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L127)

```diff
-     function Fk(kk, ek) {
+     function LC(CC) {
```

#### 18. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L129-L139` → after: `L495-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L495-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L495-L500) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L129-L139)

```diff
-       const bk = Dk.m[ek.type],
-         rk = Dk.b[ek.componentType];
-       if (!bk || !rk || !Number.isInteger(ek.count) || ek.count < 0) return !1;
-       if (void 0 === ek.bufferView) return !0;
-       const Pk = null === (ik = kk.bufferViews) || void 0 === ik ? void 0 : ik[ek.bufferView],
-         mk = null !== (fk = ek.byteOffset) && void 0 !== fk ? fk : 0;
-       if (!Pk || !yk(mk) || mk % rk !== 0) return !1;
-       const Mk = bk * rk,
-         Kk = null !== (Sk = Pk.byteStride) && void 0 !== Sk ? Sk : Mk;
-       if (Kk < Mk) return !1;
-       return (0 === ek.count ? 0 : mk + Kk * (ek.count - 1) + Mk) <= Pk.byteLength
+       const wC = Float64Array.from(null !== (zC = CC.scale) && void 0 !== zC ? zC : [1, 1, 1]);
+       return CC.hasCamera && (wC[0] = -1), {
+         translation: Float64Array.from(null !== (ZC = CC.translation) && void 0 !== ZC ? ZC : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (QC = CC.rotation) && void 0 !== QC ? QC : [0, 0, 0, 1]),
+         scale: wC
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L143` → after: `L689-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L689-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L689-L694) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L143)

```diff
-       return kk > fk.fileBytes ? `is ${(kk/bk).toFixed(1)} MiB (the limit is ${fk.fileBytes/bk} MiB)` : null
+       if (null === CC || void 0 === CC || !CC.min || !CC.max) return null;
+       const [zC, ZC, QC] = CC.min, [wC, bC, nC] = CC.max, {
+         BoundingInfo: fC,
+         Eg: oC
+       } = (0, kC.b)();
+       return new fC(new oC(zC, ZC, QC), new oC(wC, bC, nC))
```

#### 20. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L146-L212` → after: `L697-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L697-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L697-L777) · [Before (L146-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L146-L212)

```diff
-     function qk(kk, ek) {
-       try {
-         return function(kk, ek) {
-           var ik, bk, Kk, wk, yk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak, Wk, tk, Xk;
-           const Bk = Array.isArray(kk.extensionsUsed) && kk.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(kk, ek) {
-               var ik, Dk;
-               const {
-                 items: fk,
-                 perFile: bk,
-                 surfaces: rk,
-                 few: Pk,
-                 bounds: mk,
-                 attributeMembers: Mk
-               } = Sk;
-               if (Yk(kk.extensionsRequired, Pk) || Yk(kk.animations, 1 / 0) || Yk(kk.skins, 1 / 0)) return !0;
- ... (51 more removed lines; see GitHub link above)
+     function Zz(CC) {
+       (0, VC.d)(CC) || (CC.geometry && CC.geometry.useBoundingInfoFromGeometry ? CC._updateBoundingInfo() : CC.refreshBoundingInfo(!0, !0))
+     }
+     class Qz {
+       constructor(CC, zC) {
+         this.sS = CC, this.decode = zC, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
+       }
+       viewBytes(CC) {
+         let zC = this.viewData.get(CC.index);
+         return zC || (zC = this.bufferData.then((() => CC.bytes)), this.viewData.set(CC.index, zC)), zC
+       }
+       viewBuffer(CC) {
+         let zC = this.viewBuffers.get(CC.index);
+         return zC || (zC = this.viewBytes(CC).then((CC => new((0, kC.b)().gg)(this.sS.mg(), CC, !1))), this.viewBuffers.set(CC.index, zC)), zC
+       }
+       vertexBuffer(CC, zC) {
+ ... (65 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L214-L219` → after: `L779-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L779-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L779-L820) · [Before (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L214-L219)

```diff
-           if (null !== (Kk = kk.animations) && void 0 !== Kk && Kk.length) return "has animations";
-           if (null !== (wk = kk.skins) && void 0 !== wk && wk.length) return "uses skins";
-           const Ok = null !== (yk = kk.buffers) && void 0 !== yk ? yk : [];
-           for (const [Dk, fk] of Ok.entries()) {
-             if (void 0 !== fk.uri) return Pk;
-             if (Dk > 0 || !ek) return rk
+           oC.setVerticesBuffer(CC, fC.vertexCount)
+         })));
+         return (0, Cz.f)(zC) && (ZC.hasVertexAlpha = !0), Promise.all(nC).then((() => (oC.link(fC), oC)))
+       }
+     }
+     var wz, bz = ZC(37193),
+       nz = ZC(36961),
+       fz = ZC(37729),
+       oz = ZC(37129),
+       qz = ZC(37175),
+       Fz = ZC(2753),
+       Wz = ZC(37167);
+ 
+     function Nz(CC, zC) {
+       CC.metadata = CC.metadata || {};
+       const ZC = CC._internalMetadata = CC._internalMetadata || {},
+ ... (26 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L221` → after: `L822-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L822-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L822-L885) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L221)

```diff
-           for (const [Dk, fk] of(null !== (gk = kk.bufferViews) && void 0 !== gk ? gk : []).entries()) {
+         }
+       }
+       getNodes() {
+         return [...this.meshes, ...this.transformNodes]
+       }
+       addAllToScene() {
+         if (this.release) {
+           this.release(), this.release = null;
+           for (const CC of this.meshes) this.sS.zQC(CC);
+           for (const CC of this.materials) this.sS.addMaterial(CC);
+           for (const CC of this.geometries) this.sS.addGeometry(CC);
+           for (const CC of this.transformNodes) this.sS.addTransformNode(CC);
+           for (const CC of this.textures) this.sS.addTexture(CC)
+         }
+       }
+       dispose() {
+ ... (48 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L223-L230` → after: `L887-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L887-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L887-L889) · [Before (L223-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L223-L230)

```diff
-             if (!Vk(kk, ek, Dk) || !dk(fk)) return rk
-           }
-           const Gk = null !== (uk = kk.accessors) && void 0 !== uk ? uk : [];
-           for (const Dk of Gk) {
-             if (void 0 !== Dk.sparse) return "uses sparse accessors";
-             const ek = Number.isInteger(Dk.count) ? lk(Dk.count, fk.accessorElements, "elements in an accessor") : null;
-             if (ek) return ek;
-             if (!Fk(kk, Dk)) return rk
+             bC.meshes.push(zC);
+             const CC = zC.geometry;
+             CC && !bC.geometries.includes(CC) && bC.geometries.push(CC)
```

#### 24. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L232-L248` → after: `L891-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L891-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L891-L912) · [Before (L232-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L232-L248)

```diff
-           const Nk = null !== (qk = kk.scenes) && void 0 !== qk ? qk : [];
-           if (1 !== Nk.length) return `has ${Nk.length} scenes`;
-           const Rk = (0, Dk.w)(kk);
-           if (void 0 !== Rk && 0 !== Rk) return rk;
-           const Jk = null !== (Ik = kk.nodes) && void 0 !== Ik ? Ik : [],
-             ke = null !== (zk = kk.meshes) && void 0 !== zk ? zk : [],
-             ee = null !== (Qk = kk.materials) && void 0 !== Qk ? Qk : [],
-             ie = null !== (vk = kk.textures) && void 0 !== vk ? vk : [],
-             De = null !== (Ek = kk.images) && void 0 !== Ek ? Ek : [],
-             fe = null !== (hk = null !== (ak = null !== (Wk = lk(Jk.length, fk.nodes, "nodes")) && void 0 !== Wk ? Wk : lk(ke.length, fk.meshes, "meshes")) && void 0 !== ak ? ak : lk(ee.length, fk.materials, "materials")) && void 0 !== hk ? hk : lk(De.length, fk.images, "images") … [truncated]
-           if (fe) return fe;
-           const Se = new Set;
-           for (const Dk of Jk)
-             for (const kk of null !== (be = Dk.children) && void 0 !== be ? be : []) {
-               var be;
-               if (!pk(kk, Jk.length) || Se.has(kk)) return rk;
- ... (1 more removed lines; see GitHub link above)
+         }
+       }
+       createRoot() {
+         const CC = this.node("__root__", !0);
+         this.root = CC, CC.IK(!1), this.sS.useRightHandedSystem || gz(sC, CC)
+       }
+       loadScene() {
+         const CC = [];
+         for (const zC of this.asset.model.rootNodes) CC.push(this.loadNode(this.asset.model.nodes[zC], (CC => {
+           CC.parent = this.root
+         })));
+         return CC.push(Promise.resolve()), Promise.all(CC).then((() => {}))
+       }
+       loadNode(CC, zC) {
+         const ZC = `/nodes/${CC.index}`,
+           QC = [],
+ ... (6 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L250-L255` → after: `L914-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L914-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L914-L929) · [Before (L250-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L250-L255)

```diff
-           const re = new Set,
-             Pe = kk => {
-               var ek;
-               return !re.has(kk) && (re.add(kk), (null !== (ek = Jk[kk].children) && void 0 !== ek ? ek : []).every(Pe))
-             };
-           for (const Dk of null !== (me = Nk[0].nodes) && void 0 !== me ? me : []) {
+             for (const zC of CC.children) QC.push(this.loadNode(this.asset.model.nodes[zC], (CC => {
+               CC.parent = wC
+             })));
+             (ZC => {
+               Mz(ZC, CC.extras), zC(ZC)
+             })(wC)
+           };
+         if (null === CC.mesh) {
+           const zC = this.node(rC(CC), !1);
+           this.nodeObjects.set(CC.index, zC), wC(zC)
+         } else {
+           const zC = this.asset.model.meshes[CC.mesh];
+           QC.push(this.loadMesh(`/meshes/${zC.index}`, CC, zC, wC))
+         }
+         return Promise.all(QC).then((() => {
+           for (const ZC of null !== (zC = this.nodePrimitives.get(CC.index)) && void 0 !== zC ? zC : []) {
```

#### 26. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L257` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L931) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L257)

```diff
-             if (!pk(Dk, Jk.length) || Se.has(Dk) || !Pe(Dk)) return rk
+             Zz(ZC)
```

#### 27. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L259-L279` → after: `L933-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L933-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L933-L960) · [Before (L259-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L259-L279)

```diff
-           for (const Dk of Jk) {
-             if (void 0 !== Dk.matrix) return "uses node matrices";
-             if (void 0 !== Dk.skin) return "uses skins";
-             if (void 0 !== Dk.weights) return "uses morph targets";
-             if (void 0 !== Dk.mesh && !pk(Dk.mesh, ke.length)) return rk;
-             const kk = [
-               [Dk.translation, 3],
-               [Dk.rotation, 4],
-               [Dk.scale, 3]
-             ];
-             for (const [ek, ik] of kk)
-               if (void 0 !== ek && (!Array.isArray(ek) || ek.length !== ik || !ek.every((kk => Number.isFinite(kk))))) return rk
-           }
-           let Me = -1,
-             Ke = 0,
-             xe = 0,
- ... (5 more removed lines; see GitHub link above)
+           return this.nodeObjects.get(CC.index)
+         }))
+       }
+       loadMesh(CC, zC, ZC, QC) {
+         const wC = [],
+           bC = rC(zC);
+         if (1 === ZC.primitives.length) {
+           const QC = ZC.primitives[0];
+           wC.push(this.loadPrimitive(`${CC}/primitives/${QC.index}`, bC, QC, (CC => {
+             this.nodeObjects.set(zC.index, CC), this.nodePrimitives.set(zC.index, [CC])
+           })))
+         } else {
+           const QC = this.node(bC, !1);
+           this.nodeObjects.set(zC.index, QC);
+           const nC = [];
+           this.nodePrimitives.set(zC.index, nC);
+ ... (12 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L281-L374` → after: `L962-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L962-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L962-L1006) · [Before (L281-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L281-L374)

```diff
-               const fk = null !== (Ue = ik.mode) && void 0 !== Ue ? Ue : 4;
-               var we;
-               if (4 !== fk && 0 !== fk) return `uses ${null!==(we=Uk[fk])&&void 0!==we?we:`mode ${fk}`} primitives`;
-               if (void 0 !== ik.targets) return "uses morph targets";
-               if (void 0 !== ik.material && !pk(ik.material, ee.length)) return rk;
-               const Sk = Bk ? null === (He = ik.extensions) || void 0 === He ? void 0 : He.KHR_draco_mesh_compression : void 0;
-               if (Sk) {
-                 if (4 !== fk) return "uses Draco-compressed points";
-                 if (!Vk(kk, ek, Sk.bufferView) || "object" !== typeof Sk.attributes) return rk
-               }
-               const bk = ik.attributes;
-               if ("object" !== typeof bk || null === bk) return rk;
-               if (void 0 === bk.POSITION) return "has a primitive with no positions";
-               if (!pk(bk.POSITION, Gk.length)) return rk;
-               const Pk = Gk[bk.POSITION].count;
-               for (const [kk, ek] of Object.entries(bk)) {
- ... (78 more removed lines; see GitHub link above)
+               const QC = CC;
+               bC.replaceModel(QC, Int32Array.of(0, null !== (zC = null === (ZC = QC.indexData) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : QC.vertexCount, 0, QC.vertexCount))
+             } else this.create((() => (CC.applyToMesh(bC), CC)))
+           }))), this.materials) {
+           const CC = 0 === ZC.mode ? oz.e.PointListDrawMode : oz.e.TriangleFillMode,
+             zC = null === ZC.material ? null : this.asset.model.materials[ZC.material];
+           wC.push(this.loadMaterial(zC, CC, (CC => {
+             bC.material = CC
+           })))
+         }
+         return Nz(bC, CC), QC(bC), Promise.all(wC).then((() => bC))
+       }
+       loadMaterial(CC, zC, ZC) {
+         var QC;
+         const wC = `${null!==(QC=null===CC||void 0===CC?void 0:CC.index)&&void 0!==QC?QC:"default"}:${zC}`;
+         let bC = this.materialData.get(wC);
+ ... (29 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L376-L379` → after: `L1008-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1008-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1008-L1013) · [Before (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L376-L379)

```diff
-           return null
-         }(kk, ek)
-       } catch {
-         return rk
+           Mz(nC, CC.extras), Nz(nC, zC)
+         }
+         return this.tree.materials.push(nC), {
+           material: nC,
+           promise: fC
+         }
```

#### 30. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L383-L385` → after: `L1017-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1017-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1017-L1020) · [Before (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L383-L385)

```diff
-     function Ik(kk) {
-       const ek = uk(kk.byteLength);
-       if (ek) return ek;
+     function Pz() {
+       bz.i.dracoDecodes = SC.decodes, bz.i.dracoWorkersStarted = SC.workersStarted, bz.i.dracoMostWorkers = SC.mostWorkers
+     }
+     async function Gz(CC, zC, ZC, wC, bC) {
```

#### 31. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L387-L394` → after: `L1022-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1022-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1022-L1038) · [Before (L387-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L387-L394)

```diff
-         const {
-           json: ek,
-           bin: ik
-         } = (0, Dk.z)(kk);
-         return qk(ek, ik)
-       } catch (ik) {
-         if (ik instanceof Dk.k) return ik.reason;
-         throw ik
+         return await async function(CC, zC, ZC, wC, bC, nC) {
+           var fC;
+           let oC;
+           const qC = null === (fC = (0, Fz.e)()) || void 0 === fC ? void 0 : fC.Vg,
+             FC = null !== qC && void 0 !== qC && qC.CS && zC === qC.Km() ? qC : null,
+             WC = bC && !FC;
+           return await OC(CC, zC, ZC, wC, QC.b, (CC => (oC = new Sz(zC, WC), new pz(CC, zC, oC, WC, new Qz(zC, wC), nC, FC).load())), !bC), oC
+         }(CC, zC, ZC, xC, wC, bC)
+       } finally {
+         Pz()
+       }
+     }
+     async function Rz(CC, zC, ZC, wC) {
+       try {
+         return await OC(CC, zC, ZC, xC, QC.b, (CC => wC(CC, new Qz(zC, xC))))
+       } finally {
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L398` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1046) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L398)

```diff
-   33846: (kk, ek, ik) => {
+   41298: (CC, zC, ZC) => {
```

#### 33. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L400-L409` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1048) · [Before (L400-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L400-L409)

```diff
-       b: () => nk,
-       f: () => xk,
-       h: () => Hk,
-       i: () => Sk,
-       k: () => fk,
-       m: () => Uk,
-       q: () => Mk,
-       t: () => Kk,
-       w: () => bk,
-       z: () => mk
+       d: () => nC
```

#### 34. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L411-L427` → after: `L1050-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1050-L1051) · [Before (L411-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L411-L427)

```diff
-     var Dk = ik(33848);
-     class fk extends Error {
-       constructor(kk) {
-         super(`GLB refused: it ${kk}`), this.reason = kk, this.name = "GlbRefused"
-       }
-     }
-     class Sk extends Error {
-       constructor(kk) {
-         super(kk), this.name = "GlbError"
-       }
-     }
- 
-     function bk(kk) {
-       return Reflect.get(kk, "scene")
-     }
-     const rk = 5130562,
- ... (1 more removed lines; see GitHub link above)
+     var QC = ZC(113),
+       wC = ZC(1032);
```

#### 35. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L430-L475` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1054) · [Before (L430-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L430-L475)

```diff
-       var ek;
-       const ik = kk instanceof Uint8Array ? kk : new Uint8Array(kk),
-         Sk = (0, Dk.e)(ik);
-       if (null === Sk) throw new fk(Pk);
-       const bk = Sk.json,
-         {
-           jsonEnd: mk,
-           length: Mk
-         } = Sk,
-         Kk = new DataView(ik.buffer, ik.byteOffset, ik.byteLength);
-       let xk = -1,
-         nk = 0;
-       for (let wk = mk; wk < Mk;) {
-         if (wk + 8 > Mk) throw new fk(Pk);
-         const kk = Kk.getUint32(wk, !0),
-           ek = Kk.getUint32(wk + 4, !0);
- ... (30 more removed lines; see GitHub link above)
+       return (0, QC.e)() ? `https://${wC.c.discordDomain}/${CC.href}` : CC.href
```

#### 36. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L478-L513` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1057-L1059) · [Before (L478-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L478-L513)

```diff
-         5120: "i8",
-         5121: "u8",
-         5122: "i16",
-         5123: "u16",
-         5125: "u32",
-         5126: "f32"
-       },
-       nk = {
-         5120: 1,
-         5121: 1,
-         5122: 2,
-         5123: 2,
-         5125: 4,
-         5126: 4
-       },
-       Uk = {
- ... (20 more removed lines; see GitHub link above)
+       scriptUrl: bC(new ZC.U(ZC(41302))),
+       wasmBinaryUrl: bC(new ZC.U(ZC(41310)))
+     }
```

#### 37. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L515-L530` → after: `L1061-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1061-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1061-L1063) · [Before (L515-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L515-L530)

```diff
-   33848: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => fk,
-       e: () => Sk,
-       i: () => bk
-     });
-     const Dk = 1179937895,
-       fk = 1313821514;
- 
-     function Sk(kk) {
-       const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
-       if (kk.byteLength < 20 || ek.getUint32(0, !0) !== Dk || 2 !== ek.getUint32(4, !0)) return null;
-       const ik = Math.min(ek.getUint32(8, !0), kk.byteLength),
-         Sk = ek.getUint32(12, !0);
-       if (ek.getUint32(16, !0) !== fk || 20 + Sk > ik) return null;
-       let bk;
+   36162: CC => {
+     CC.exports = function(CC, zC, ZC, QC) {
+       var wC = self || window;
```

#### 38. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L532-L534` → after: `L1065-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1065-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L1065-L1081) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L532-L534)

```diff
-         bk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + Sk)))
-       } catch {
-         return null
+         try {
+           var bC;
+           try {
+             bC = new wC.Blob([CC])
+           } catch (qC) {
+             (bC = new(wC.BlobBuilder || wC.WebKitBlobBuilder || wC.MozBlobBuilder || wC.MSBlobBuilder)).append(CC), bC = bC.getBlob()
+           }
+           var nC = wC.URL || wC.webkitURL,
+             fC = nC.createObjectURL(bC),
+             oC = new wC[zC](fC, ZC);
+           return nC.revokeObjectURL(fC), oC
+         } catch (qC) {
+           return new wC[zC]("data:application/javascript,".concat(encodeURIComponent(CC)), ZC)
+         }
+       } catch (qC) {
+         if (!QC) throw Error("Inline worker is not supported");
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 1. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/206.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/206.js#L4)

```diff
-   33856: (kk, ek, ik) => {
+   41314: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L6-L15` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/206.js#L6) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/206.js#L6-L15)

```diff
-       animatedBlockTextures: () => Pk,
-       armourAtlasUrl: () => bk,
-       averageColors: () => mk,
-       blockAtlasUrls: () => Sk,
-       blockAtlasWidth: () => Dk,
-       buildHash: () => Kk,
-       builtTextureIndexFingerprint: () => Mk,
-       imagesPerAtlas: () => fk,
-       outputHash: () => xk,
-       rotatedBlockTextures: () => rk
+       default: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L17-L10900` → after: `L8-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/206.js#L8-L37) · [Before (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/206.js#L17-L10900)

```diff
-     const Dk = 8,
-       fk = [256, 256, 256, 256, 256, 256, 114],
-       Sk = [ik(33858), ik(33867), ik(33871), ik(33876), ik(33880), ik(33883), ik(33891)],
-       bk = ik(33898),
-       rk = {
-         "alloy_kiln_top[rot[1": ik(33901),
-         "alloy_kiln_top[rot[2": ik(33909),
-         "alloy_kiln_top[rot[3": ik(33918),
-         "alloy_kiln_top[rot[4": ik(33920),
-         "auto_bench_top[rot[1": ik(33924),
-         "auto_bench_top[rot[2": ik(33930),
-         "auto_bench_top[rot[3": ik(33938),
-         "auto_bench_top[rot[4": ik(33945),
-         "belt_tunnel_exit_top[rot[1": ik(33952),
-         "belt_tunnel_exit_top[rot[2": ik(33957),
-         "belt_tunnel_exit_top[rot[3": ik(33962),
- ... (10868 more removed lines; see GitHub link above)
+     var QC = ZC(36162),
+       wC = ZC.n(QC);
+ 
+     function bC() {
+       return wC()('/*! For license information please see w4ddu.procGen.worker.0c0703f0.worker.js.LICENSE.txt */\n(()=>{var CC={49:CC=>{const zC="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,ZC=()=>zC.now(),QC=CC=>CC===1/0||(CC=> … [truncated]
+     }
+   },
+   36162: CC => {
+     CC.exports = function(CC, zC, ZC, QC) {
+       var wC = self || window;
+       try {
+         try {
+           var bC;
+           try {
+             bC = new wC.Blob([CC])
+           } catch (qC) {
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/207.js#L4)

```diff
-   35812: (kk, ek, ik) => {
+   41345: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/207.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/207.js#L6)

```diff
-       WasmTextureWorker: () => pk
+       default: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L8-L10` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/207.js#L8) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/207.js#L8-L10)

```diff
-     var Dk = ik(585),
-       fk = ik(3163),
-       Sk = ik(35819),
+     var QC = ZC(36162),
```

#### 4. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L14-L283` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/207.js#L12) · [Before (L14-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/207.js#L14-L283)

```diff
-       return bk()('(()=>{var kk={d:(ek,ik)=>{for(var Dk in ik)kk.o(ik,Dk)&&!kk.o(ek,Dk)&&Object.defineProperty(ek,Dk,{enumerable:!0,get:ik[Dk]})},o:(kk,ek)=>Object.prototype.hasOwnProperty.call(kk,ek),r:kk=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(k … [truncated]
-     }
-     var Pk = ik(35822),
-       mk = ik(3190),
-       Mk = ik(3206),
-       Kk = ik(3198),
-       xk = ik(3171);
- 
-     function nk(kk) {
-       return "" === kk ? [] : kk.split("\0")
-     }
- 
-     function Uk(kk) {
-       if ("" !== kk)
-         for (const ek of kk.split("\n")) console.error(ek)
-     }
- ... (254 more removed lines; see GitHub link above)
+       return wC()('(()=>{var CC={20:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/bloxd_wasm_bg.70f80f804c9e94c93b74.wasm"},22:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/bloxd_wasm_textures_bg.c1374c5ae94b21c284ad.wasm"},13:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L286` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/207.js#L15) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/207.js#L286)

```diff
-   35819: kk => {
+   36162: CC => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L2)

```diff
- export const ids = [208];
+ export const ids = [208, 209];
```

#### 2. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L4)

```diff
-   41059: (kk, ek, ik) => {
+   36167: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L6-L7` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L6-L10) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L6-L7)

```diff
-       loadGlbAsset: () => Ye,
-       loadGlbTree: () => ye
+       CAPPED_COUNTS_VISIT_CAP: () => bC,
+       reportCappedWasmFailure: () => oC,
+       reportUncappedWasmFailure: () => fC,
+       reportWasmCrash: () => wC,
+       reportWasmFailure: () => nC
```

#### 4. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L9-L12` → after: `L12-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L12-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L12-L54) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L9-L12)

```diff
-     var Dk = ik(37497),
-       fk = ik(41065),
-       Sk = ik(35819),
-       bk = ik.n(Sk);
+     var QC = ZC(2927);
+ 
+     function wC(CC) {
+       (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
+     }
+     const bC = QC.d - 4;
+ 
+     function nC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1)
+     }
+ 
+     function fC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
+     }
+ 
+     function oC(CC, zC, ZC) {
+ ... (27 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L15-L32` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L57-L58) · [Before (L15-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L15-L32)

```diff
-       return bk()('(()=>{class kk extends Error{}function ek(ek,ik){const Dk=ek._malloc(ik);if(0===Dk)throw new kk(`Draco: the decoder\'s heap refused ${ik} bytes`);return Dk}function ik(kk){return{[kk.DT_FLOAT32]:[Float32Array,5126],[kk.DT_INT8]:[Int8Array,5120],[kk.DT_INT16]:[I … [truncated]
-     }
-     var Pk = ik(99);
-     const mk = 1e3;
-     let Mk = null,
-       Kk = null;
-     const xk = [],
-       nk = [];
-     let Uk = 0;
-     const Hk = {
-         decodes: 0,
-         workersStarted: 0,
-         mostWorkers: 0
-       },
-       wk = function(kk, ek) {
-         const ik = kk ? Math.max(1, Math.min(Math.floor(.5 * kk), 4)) : 1;
- ... (2 more removed lines; see GitHub link above)
+       return "undefined" === typeof WebAssembly
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L35-L62` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L61) · [Before (L35-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L35-L62)

```diff
-       if (!Mk) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
-       const {
-         scriptUrl: kk,
-         wasmBinaryUrl: ek
-       } = Mk;
-       return Kk ??= fetch(ek).then((kk => {
-         if (!kk.ok) throw new Error(`Draco: fetching ${ek} failed: ${kk.status}`);
-         return kk.arrayBuffer()
-       })), Kk.catch((() => {
-         Kk = null
-       })), Hk.workersStarted++, Kk.then((ek => new Promise(((ik, Dk) => {
-         const fk = new rk;
-         fk.onerror = kk => {
-           fk.onmessage = null, fk.onerror = null, fk.terminate(), Dk(new Error("Draco: the decode worker failed to start" + (kk.message ? `: ${kk.message}` : " (its script did not load)")))
-         }, fk.onmessage = kk => {
-           let {
- ... (12 more removed lines; see GitHub link above)
+       return (0, QC.d)()
```

#### 7. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L65-L68` → after: `L64-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L64-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L64-L70) · [Before (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L65-L68)

```diff
-     function pk(kk) {
-       const ek = xk.indexOf(kk); - 1 !== ek && xk.splice(ek, 1);
-       const ik = nk.shift();
-       ik && Yk(ik)
+     function JC() {
+       if (AC()) return "this browser has no WebAssembly";
+       const CC = (0, wC.q)();
+       return "compile" === CC || "instantiate" === CC ? `the core wasm didn't load here (${(0,wC.j)()})` : null
+     }
+     async function IC(CC) {
+       return await (0, bC.e)(bC.b, void 0, CC)
```

#### 8. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L71-L106` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L73-L75) · [Before (L71-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L71-L106)

```diff
-     function yk(kk, ek) {
-       kk.busy = !0, kk.releaseTimer && (clearTimeout(kk.releaseTimer), kk.releaseTimer = null);
-       kk.worker.then((ik => {
-         const Dk = Uk++;
-         ik.onmessage = fk => {
-           let {
-             data: Sk
-           } = fk;
-           if (("decoded" === Sk.id || "decodeError" === Sk.id) && Sk.seq === Dk) {
-             if (ik.onmessage = null, ik.onerror = null, "decoded" === Sk.id) return Hk.decodes++, ek.resolve({
-               indices: Sk.indices,
-               attributes: Sk.attributes,
-               totalVertices: Sk.totalVertices
-             }), void(() => {
-               const ek = nk.shift();
-               ek ? yk(kk, ek) : (kk.busy = !1, kk.releaseTimer = setTimeout((() => {
- ... (20 more removed lines; see GitHub link above)
+     function iC() {
+       AC() || (0, GC.d)((() => {
+         IC()
```

#### 9. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L110-L122` → after: `L79-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L79-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L79-L108) · [Before (L110-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L110-L122)

```diff
-     function Yk(kk) {
-       const ek = xk.find((kk => !kk.busy));
-       if (ek) yk(ek, kk);
-       else {
-         if (xk.length < wk) {
-           const ek = {
-             worker: lk(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return xk.push(ek), Hk.mostWorkers = Math.max(Hk.mostWorkers, xk.length), void yk(ek, kk)
-         }
-         nk.push(kk)
+     function vC() {
+       if (AC()) return async () => ((0, oC.j)("unsupported", 0), eC("unsupported", "This browser has no WebAssembly"), !1);
+       const CC = {
+         reloadFailedDownload: !0
+       };
+       return IC(CC), async () => {
+         var zC;
+         const ZC = performance.now();
+         await IC(CC);
+         const QC = (performance.now() - ZC) / 1e3;
+         if ((0, wC.P)()) return (0, oC.j)("ready", QC), pC || (pC = !0, (0, wC.U)((() => {
+           if ("call" !== (0, wC.q)()) return;
+           const CC = (0, wC.o)(),
+             zC = (0, WC.n)(CC, wC.D, wC.Z),
+             ZC = (0, wC.t)().buffer.byteLength,
+             QC = (0, WC.i)(zC.kind, zC.refusedBytes),
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L127-L135` → after: `L134-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L134-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L134-L140) · [Before (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L127-L135)

```diff
-       return new Promise(((Dk, fk) => {
-         Yk({
-           data: new Int8Array(kk.buffer, kk.byteOffset, kk.byteLength).slice(),
-           attributeIds: ek,
-           expected: ik,
-           resolve: Dk,
-           reject: fk
-         })
-       }))
+       var wC;
+       const nC = CC instanceof Error ? CC.name : "thrown",
+         fC = (CC instanceof Error && null !== (wC = CC.stack) && void 0 !== wC ? wC : "").split("\n").filter((CC => bC.test(CC))).slice(0, 8).map((CC => CC.trim())),
+         oC = null === zC ? "wasm memory unknown" : `wasm memory ${Math.round(zC/2**20)} MB`,
+         qC = null === ZC.panic ? "" : `, panic: ${(0,QC.m)(ZC.panic)}`,
+         FC = `${nC}: ${CC instanceof Error?CC.message:String(CC)}`;
+       return `${(0,QC.p)(ZC.kind,ZC.refusedBytes)} ${FC} (${oC})${qC}${fC.length>0?` | ${fC.join(" < ")}`:""}`
```

#### 11. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L137-L147` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L142) · [Before (L137-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L137-L147)

```diff
-     var Ck = ik(37064),
-       Ak = ik(37075),
-       jk = ik(33846),
-       sk = ik(33838);
-     const dk = {
-       index: -1,
-       magFilter: void 0,
-       minFilter: void 0,
-       wrapS: void 0,
-       wrapT: void 0
-     };
+     const oC = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
```

#### 12. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L150-L325` → after: `L145-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L145-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L145-L152) · [Before (L150-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L150-L325)

```diff
-       const ek = (0, sk.g)(kk.byteLength);
-       if (ek) throw new jk.k(ek);
-       const {
-         json: ik,
-         bin: Dk
-       } = (0, jk.z)(kk), fk = (0, sk.f)(ik, Dk);
-       if (fk) throw new jk.k(fk);
-       try {
-         return function(kk, ek) {
-           var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk;
-           const lk = new Map,
-             pk = ik => {
-               let Dk = lk.get(ik);
-               if (!Dk) {
-                 var fk;
-                 const Sk = kk.bufferViews[ik],
- ... (160 more removed lines; see GitHub link above)
+       var zC;
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(CC instanceof Error) || !oC.test(CC.message)) return {};
+       if (!("detached" in ZC)) return {
+         arrayBufferDetached: "absent"
+       };
+       return {
+         arrayBufferDetached: (0, wC.O)(null === (zC = (0, wC.K)(ZC, "detached")) || void 0 === zC ? void 0 : zC.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
```

#### 13. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L328-L332` → after: `L155-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L155-L158) · [Before (L328-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L328-L332)

```diff
-     async function Fk(kk, ek) {
-       var ik, Dk;
-       const fk = kk.draco;
-       if (!fk) throw new jk.i("not a Draco primitive");
-       let Sk;
+     const FC = 500;
+ 
+     function WC(CC) {
+       let zC = "[object Object]";
```

#### 14. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L334-L336` → after: `L160-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L160-L167) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L334-L336)

```diff
-         Sk = await ek(fk.bufferView.bytes, fk.attributeIds, fk.expected)
-       } catch (mk) {
-         throw new jk.i(`Draco decoding failed: ${mk instanceof Error?mk.message:String(mk)}`)
+         zC = String(CC)
+       } catch {}
+       if ("[object Object]" !== zC) return zC;
+       try {
+         var ZC, QC;
+         return null !== (ZC = null === (QC = JSON.stringify(CC)) || void 0 === QC ? void 0 : QC.slice(0, FC)) && void 0 !== ZC ? ZC : zC
+       } catch {
+         return zC
```

#### 15. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L338-L350` → after: `L169-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L169-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L169-L891) · [Before (L338-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L338-L350)

```diff
-       const {
-         vertices: bk,
-         indices: rk,
-         components: Pk
-       } = fk.expected;
-       if (Sk.totalVertices !== bk || (null !== (ik = null === (Dk = Sk.indices) || void 0 === Dk ? void 0 : Dk.length) && void 0 !== ik ? ik : 0) !== rk || Sk.attributes.some((kk => kk.size !== Pk[kk.kind] || kk.data.length !== bk * kk.size))) throw new jk.i("Draco decoding gave  … [truncated]
-       for (const Mk of Sk.attributes) {
-         const kk = fk.normalized[Mk.kind];
-         void 0 !== kk && (Mk.normalized = kk)
-       }
-       return Sk
-     }
-     const uk = new WeakMap;
+     }
+   },
+   36210: (CC, zC, ZC) => {
+     CC.exports = ZC.p + "static/media/bloxd_wasm_bg.70f80f804c9e94c93b74.wasm"
+   },
+   36192: (CC, zC, ZC) => {
+     CC.exports = ZC.p + "static/media/bloxd_wasm_textures_bg.c1374c5ae94b21c284ad.wasm"
+   },
+   36199: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       wW: () => QC,
+       EnvelopeKind: () => wC,
+       bW: () => bC,
+       PhysicsEngine: () => nC,
+       nW: () => fC,
+       fW: () => oC,
+ ... (707 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L353-L355` → after: `L894-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L894-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L894-L910) · [Before (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L353-L355)

```diff
-       var ik;
-       const Dk = null !== (ik = uk.get(kk)) && void 0 !== ik ? ik : ek(kk);
-       return uk.set(kk, Dk), Dk
+       let ZC, QC;
+       try {
+         const wC = fz(CC, Rz.OUb0),
+           bC = Az,
+           nC = Wz(zC, Rz.OUb0, Rz.Ay9g),
+           fC = Az,
+           oC = Rz.FR24(wC, bC, nC, fC);
+         return ZC = oC[0], QC = oC[1], OC(oC[0], oC[1])
+       } finally {
+         Rz.B5Ib(ZC, QC, 1)
+       }
+     }
+ 
+     function gC() {
+       const CC = Rz.ph5h();
+       var zC = jC(CC[0], CC[1]).slice();
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L359-L363` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L914) · [Before (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L359-L363)

```diff
-       const ek = kk.bufferView,
-         ik = 5125 === kk.componentType ? Uint32Array : Uint16Array,
-         Dk = ek.bytes.buffer,
-         fk = ek.bytes.byteOffset + (kk.byteOffset || 0);
-       return fk % ik.BYTES_PER_ELEMENT !== 0 ? new ik(Dk.slice(fk, fk + kk.count * ik.BYTES_PER_ELEMENT), 0) : new ik(Dk, fk, kk.count)
+       return 0 !== Rz.LwOD(CC)
```

#### 18. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L367-L375` → after: `L918-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L918-L921) · [Before (L367-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L367-L375)

```diff
-       if (kk.min && kk.max) return [new Float64Array(kk.min), new Float64Array(kk.max)];
-       const ik = ek.find((kk => {
-           let {
-             kind: ek
-           } = kk;
-           return "position" === ek
-         })),
-         Dk = ik ? (0, Ak.e)(ik, kk.count) : new Float32Array(0);
-       return (0, Ak.q)(Dk.length / 3, ((kk, ek) => Dk[3 * kk + ek]))
+       const ZC = Wz(CC, Rz.OUb0, Rz.Ay9g),
+         QC = Az,
+         wC = Rz.hNhe(ZC, QC, zC);
+       if (wC[1]) throw Nz(wC[0])
```

#### 19. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L378-L414` → after: `L924-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L924-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L924-L925) · [Before (L378-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L378-L414)

```diff
-     function Qk(kk) {
-       const ek = kk.attributes.map((kk => {
-           var ek, ik;
-           let {
-             kind: Dk,
-             accessor: fk
-           } = kk;
-           const {
-             bufferView: Sk,
-             numComponents: bk
-           } = fk;
-           if (!Sk) {
-             return {
-               kind: Dk,
-               data: qk(fk, (() => new Float32Array(bk * fk.count))),
-               offset: 0,
- ... (21 more removed lines; see GitHub link above)
+     function PC() {
+       Rz.kDY9()
```

#### 20. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L418-L438` → after: `L928-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L928-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L928-L929) · [Before (L418-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L418-L438)

```diff
-     function Ek(kk, ek) {
-       const ik = ek.attributes.map((kk => {
-         let {
-           kind: ek,
-           data: ik,
-           size: Dk,
-           byteOffset: fk,
-           byteStride: Sk,
-           normalized: bk
-         } = kk;
-         return {
-           kind: ek,
-           data: ik,
-           offset: fk,
-           stride: Sk,
-           components: Dk,
- ... (5 more removed lines; see GitHub link above)
+     function GC() {
+       return Rz.yLhe() >>> 0
```

#### 21. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L442-L443` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L933) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L442-L443)

```diff
-       const ek = kk.lastIndexOf("/");
-       return ek < 0 ? kk : kk.substring(ek + 1)
+       return 0 !== Rz.s0HC(CC)
```

#### 22. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L447-L448` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L937) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L447-L448)

```diff
-       const ek = kk.lastIndexOf("/");
-       return ek < 0 ? "" : kk.substring(0, ek + 1)
+       return 0 !== Rz.t2NX(CC)
```

#### 23. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L452` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L941) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L452)

```diff
-       return kk.name || `node${kk.index}`
+       Rz.YSSz(CC)
```

#### 24. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L474-L477` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L944-L945) · [Before (L474-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L474-L477)

```diff
-     function ck(kk) {
-       var ek, ik, Dk, fk;
-       const Sk = null !== (ek = kk.minFilter) && void 0 !== ek ? ek : 9987;
-       return 9729 === (null !== (ik = kk.magFilter) && void 0 !== ik ? ik : 9729) ? null !== (Dk = Xk[Sk]) && void 0 !== Dk ? Dk : 3 : null !== (fk = Bk[Sk]) && void 0 !== fk ? fk : 4
+     function JC() {
+       return Rz.tScn() >>> 0
```

#### 25. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L484-L486` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L948-L949) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L484-L486)

```diff
-     function Zk(kk) {
-       var ek;
-       return null !== (ek = Tk[null !== kk && void 0 !== kk ? kk : 10497]) && void 0 !== ek ? ek : 1
+     function IC() {
+       return Rz.Yg2v() >>> 0
```

#### 26. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L489-L490` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L952-L953) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L489-L490)

```diff
-     function Ok(kk) {
-       return 9728 === kk.minFilter || 9729 === kk.minFilter
+     function iC() {
+       return 0 !== Rz.smgW()
```

#### 27. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L493-L499` → after: `L956-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L956-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L956-L988) · [Before (L493-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L493-L499)

```diff
-     function gk(kk) {
-       var ek, ik, Dk;
-       const fk = Float64Array.from(null !== (ek = kk.scale) && void 0 !== ek ? ek : [1, 1, 1]);
-       return kk.hasCamera && (fk[0] = -1), {
-         translation: Float64Array.from(null !== (ik = kk.translation) && void 0 !== ik ? ik : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (Dk = kk.rotation) && void 0 !== Dk ? Dk : [0, 0, 0, 1]),
-         scale: fk
+     function vC() {
+       const CC = Rz.d4Ls();
+       var zC = jC(CC[0], CC[1]).slice();
+       return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
+     }
+ 
+     function eC() {
+       const CC = Rz.uNtm();
+       var zC = jC(CC[0], CC[1]).slice();
+       return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
+     }
+ 
+     function hC() {
+       const CC = Rz.IgUo();
+       var zC = jC(CC[0], CC[1]).slice();
+       return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
+ ... (17 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L503-L510` → after: `L992-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L992-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L992-L993) · [Before (L503-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L503-L510)

```diff
-     function Gk(kk, ek) {
-       let {
-         translation: ik,
-         rotation: Dk,
-         scale: fk
-       } = kk;
-       const Sk = new Float32Array(16);
-       return (0, Ck.d)(fk, 0, Dk, 0, ik, 0, Sk), ek && (0, Ck.m)(Sk, ek, 0, Sk), Sk
+     function mC(CC) {
+       Rz.yWAM(aC(CC))
```

#### 29. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L512-L629` → after: `L995-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L995-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L995-L1005) · [Before (L512-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L512-L629)

```diff
-     class Nk {
-       constructor(kk, ek, ik, Dk) {
-         this.model = kk, this.decode = ek, this.fileInfo = ik, this.uniqueRootUrl = Dk, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const fk = new Set,
-           Sk = (ek, ik) => {
-             const Dk = kk.nodes[ek];
-             if (this.parents.has(Dk)) throw new jk.i(`/nodes/${ek}: Invalid recursive node hierarchy`);
-             this.parents.set(Dk, ik);
-             const bk = null === Dk.mesh ? [] : kk.meshes[Dk.mesh].primitives,
-               rk = bk.map((kk => {
-                 const ek = bk.length > 1;
-                 return {
-                   name: ek ? `${Wk(Dk)}_primitive${kk.index}` : Wk(Dk),
-                   node: Dk,
-                   primitive: kk,
-                   part: ek,
- ... (102 more removed lines; see GitHub link above)
+ 
+     function HC() {
+       return {
+         __proto__: null,
+         IWcg: {
+           __proto__: null,
+           nMeg: function(CC, zC) {
+             return aC(Error(OC(CC, zC)))
+           },
+           Jst3: function(CC, zC) {
+             throw new Error(OC(CC, zC))
```

#### 30. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L631-L636` → after: `L1007-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1007-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1007-L1017) · [Before (L631-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L631-L636)

```diff
-           sets: {
-             wrapU: Zk(Sk.wrapS),
-             wrapV: Zk(Sk.wrapT),
-             ...Mk,
-             coordinatesIndex: null !== (ik = null === fk || void 0 === fk ? void 0 : fk.texCoord) && void 0 !== ik ? ik : 0,
-             hasAlpha: ek
+           rjs3: function(CC) {
+             Qz(CC).call()
+           },
+           RNIv: function(CC, zC) {
+             console.error(OC(CC, zC))
+           },
+           BUYp: function() {
+             return performance.now()
+           },
+           EcG7: function(CC) {
+             Nz(CC)
```

#### 31. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L641-L682` → after: `L1022-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1022-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1022-L1102) · [Before (L641-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L641-L682)

```diff
-     async function Rk(kk, ek, ik, Dk, fk, Sk) {
-       let bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const rk = function(kk, ek, ik) {
-           return "string" !== typeof ek ? {
-             url: "",
-             rootUrl: kk,
-             name: ik()
-           } : ek ? ek.startsWith("data:") ? {
-             url: ek,
-             rootUrl: kk,
-             name: ""
-           } : kk ? {
-             url: kk + ek,
-             rootUrl: kk,
-             name: ek
-           } : {
- ... (26 more removed lines; see GitHub link above)
+     Symbol.dispose && (WC.prototype[Symbol.dispose] = WC.prototype.free);
+     const EC = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+       } : new FinalizationRegistry((CC => Rz.kI9T(CC, 1))),
+       lC = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+       } : new FinalizationRegistry((CC => Rz.FpMs(CC, 1))),
+       XC = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+       } : new FinalizationRegistry((CC => Rz.z5MF(CC, 1))),
+       cC = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+ ... (65 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L689-L694` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1106) · [Before (L689-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L689-L694)

```diff
-       if (null === kk || void 0 === kk || !kk.min || !kk.max) return null;
-       const [ek, ik, Dk] = kk.min, [fk, Sk, bk] = kk.max, {
-         BoundingInfo: rk,
-         eH: Pk
-       } = (0, Jk.b)();
-       return new rk(new Pk(ek, ik, Dk), new Pk(fk, Sk, bk))
+       return wz[CC]
```

#### 33. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L698` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1113) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L698)

```diff
-       (0, ke.d)(kk) || (kk.geometry && kk.geometry.useBoundingInfoFromGeometry ? kk._updateBoundingInfo() : kk.refreshBoundingInfo(!0, !0))
+       return void 0 === CC || null === CC
```

#### 34. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L793-L796` → after: `L1117-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1117-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1117-L1118) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L793-L796)

```diff
-       kk.metadata = kk.metadata || {};
-       const ik = kk._internalMetadata = kk._internalMetadata || {},
-         Dk = ik.YF = ik.YF || {};
-       (Dk.pointers = Dk.pointers || []).push(ek)
+       const ZC = zC(2 * CC.length, 2) >>> 0;
+       return (null !== kC && 0 !== kC.byteLength || (kC = new Uint16Array(Rz.memory.buffer)), kC).set(CC, ZC / 2), Az = CC.length, ZC
```

#### 35. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L800-L803` → after: `L1122-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1122-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1122-L1123) · [Before (L800-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L800-L803)

```diff
-       if (ek && Object.keys(ek).length > 0) {
-         const ik = kk.metadata = kk.metadata || {};
-         (ik.YF = ik.YF || {}).extras = ek
-       }
+       const ZC = zC(4 * CC.length, 4) >>> 0;
+       return Cz().set(CC, ZC / 4), Az = CC.length, ZC
```

#### 36. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L807` → after: `L1127-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1127-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1127-L1128) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L807)

```diff
-       ek.position = kk.translation ? re.eH.FromArray(kk.translation) : re.eH.Zero(), ek.rotationQuaternion = kk.rotation ? re.Quaternion.FromArray(kk.rotation) : re.Quaternion.Identity(), ek.wi = kk.scale ? re.eH.FromArray(kk.scale) : re.eH.One()
+       const ZC = zC(1 * CC.length, 1) >>> 0;
+       return Zz().set(CC, ZC / 1), Az = CC.length, ZC
```

#### 37. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L809-L844` → after: `L1130-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1130-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1130-L1133) · [Before (L809-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L809-L844)

```diff
-     class we {
-       constructor(kk, ek) {
-         if (this.bw = kk, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ek) {
-           const ek = kk.JU(),
-             ik = kk.ZF.add((() => {
-               this.dispose()
-             })),
-             Dk = ek.RU.add((() => {
-               for (const kk of [...this.geometries, ...this.meshes, ...this.textures]) kk._rebuild()
-             }));
-           this.release = () => {
-             kk.ZF.remove(ik), ek.RU.remove(Dk)
-           }
-         }
-       }
-       getNodes() {
- ... (20 more removed lines; see GitHub link above)
+ 
+     function Fz(CC, zC) {
+       const ZC = zC(8 * CC.length, 8) >>> 0;
+       return UC().set(CC, ZC / 8), Az = CC.length, ZC
```

#### 38. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L846-L859` → after: `L1135-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1135-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1135-L1140) · [Before (L846-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L846-L859)

```diff
-     class le {
-       constructor(kk, ek, ik, Dk, fk, Sk, bk) {
-         this.asset = kk, this.bw = ek, this.tree = ik, this.geometryData = fk, this.materials = Sk, this.lite = bk, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Dk ? ik : null
-       }
-       create(kk) {
-         if (this.lite) return kk();
-         const ek = this.bw;
-         ek._blockEntityCollection = !!this.container;
-         try {
-           const ek = kk();
-           return this.container && (ek._parentContainer = this.container), ek
-         } finally {
-           ek._blockEntityCollection = !1
-         }
+ 
+     function Wz(CC, zC, ZC) {
+       if (void 0 === ZC) {
+         const ZC = pz.encode(CC),
+           QC = zC(ZC.length, 1) >>> 0;
+         return Zz().subarray(QC, QC + ZC.length).set(ZC), Az = ZC.length, QC
```

#### 39. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L861-L862` → after: `L1142-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1142-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1142-L1149) · [Before (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L861-L862)

```diff
-       node(kk, ek) {
-         return this.create((() => this.lite ? ek ? (0, Pe.e)(this.lite, kk) : (0, Pe.p)(this.lite, kk) : ek ? new((0, Jk.b)().Mesh)(kk, this.bw) : new((0, Jk.b)().TransformNode)(kk, this.bw)))
+       let QC = CC.length,
+         wC = zC(QC, 1) >>> 0;
+       const bC = Zz();
+       let nC = 0;
+       for (; nC < QC; nC++) {
+         const zC = CC.charCodeAt(nC);
+         if (zC > 127) break;
+         bC[wC + nC] = zC
```

#### 40. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L864-L891` → after: `L1151-L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1151-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1151-L1154) · [Before (L864-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L864-L891)

```diff
-       async load() {
-         var kk;
-         this.asset.model.json.nodes && this.createRoot();
-         const ek = this.lite ? null : this.bw,
-           ik = null !== (kk = null === ek || void 0 === ek ? void 0 : ek.blockMaterialDirtyMechanism) && void 0 !== kk && kk;
-         let Dk;
-         ek && (ek.blockMaterialDirtyMechanism = !0);
-         try {
-           Dk = this.loadScene()
-         } finally {
-           null === ek || void 0 === ek || ek._forceBlockMaterialDirtyMechanism(ik)
-         }
-         await Dk;
-         const {
-           root: fk,
-           tree: Sk
- ... (12 more removed lines; see GitHub link above)
+       if (nC !== QC) {
+         0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
+         const zC = Zz().subarray(wC + nC, wC + QC);
+         nC += pz.encodeInto(CC, zC).written, wC = ZC(wC, QC, nC, 1) >>> 0
```

#### 41. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L893-L972` → after: `L1156-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1156-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1156-L1177) · [Before (L893-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L893-L972)

```diff
-       createRoot() {
-         const kk = this.node("__root__", !0);
-         this.root = kk, kk.bV(!1), this.bw.useRightHandedSystem || He(tk, kk)
-       }
-       loadScene() {
-         const kk = [];
-         for (const ek of this.asset.model.rootNodes) kk.push(this.loadNode(this.asset.model.nodes[ek], (kk => {
-           kk.parent = this.root
-         })));
-         return kk.push(Promise.resolve()), Promise.all(kk).then((() => {}))
-       }
-       loadNode(kk, ek) {
-         const ik = `/nodes/${kk.index}`,
-           Dk = [],
-           fk = fk => {
-             if (ne(fk, ik), He(kk, fk), kk.hasCamera && !this.bw.useRightHandedSystem) {
- ... (64 more removed lines; see GitHub link above)
+       return Az = nC, wC
+     }
+ 
+     function Nz(CC) {
+       const zC = Qz(CC);
+       return function(CC) {
+         CC < 1028 || (wz[CC] = bz, bz = CC)
+       }(CC), zC
+     }
+     let Mz = new TextDecoder("utf-8", {
+       ignoreBOM: !0,
+       fatal: !0
+     });
+     Mz.decode();
+     const gz = 2146435072;
+     let Sz = 0;
+ ... (6 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L974-L1006` → after: `L1179-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1179-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1179-L1220) · [Before (L974-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L974-L1006)

```diff
-       loadMaterial(kk, ek, ik) {
-         var Dk;
-         const fk = `${null!==(Dk=null===kk||void 0===kk?void 0:kk.index)&&void 0!==Dk?Dk:"default"}:${ek}`;
-         let Sk = this.materialData.get(fk);
-         return Sk || (Sk = this.createMaterial(kk, ek), this.materialData.set(fk, Sk)), ik(Sk.material), Sk.promise
-       }
-       createMaterial(kk, ek) {
-         const ik = kk ? kk.name || `material${kk.index}` : "__GLTFLoader._default",
-           {
-             style: Dk,
-             unlit: fk
-           } = this.materials;
-         let Sk;
-         const bk = this.create((() => {
-           const bk = (0, xe.d)({
-             name: ik,
- ... (17 more removed lines; see GitHub link above)
+     });
+     let Pz, Gz, Rz, Az = 0;
+ 
+     function xz(CC, zC) {
+       return Gz = CC, Rz = CC.exports, Pz = zC, LC = null, BC = null, kC = null, VC = null, zz = null, Rz.ZUVu(), Rz
+     }
+ 
+     function Jz(CC) {
+       if (void 0 !== Rz) return Rz;
+       void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
+         module: CC
+       } = CC) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const zC = HC();
+       CC instanceof WebAssembly.Module || (CC = new WebAssembly.Module(CC));
+       return xz(new WebAssembly.Instance(CC, zC), CC)
+     }
+ ... (26 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1008-L1012` → after: `L1222-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1222-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1222-L1229) · [Before (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1008-L1012)

```diff
-           Ue(bk, kk.extras), ne(bk, ek)
-         }
-         return this.tree.materials.push(bk), {
-           material: bk,
-           promise: rk
+           const QC = await CC.arrayBuffer();
+           return await WebAssembly.instantiate(QC, zC)
+         } {
+           const ZC = await WebAssembly.instantiate(CC, zC);
+           return ZC instanceof WebAssembly.Instance ? {
+             instance: ZC,
+             module: CC
+           } : ZC
```

#### 44. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1014` → after: `L1231-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1231-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1231-L1232) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1014)

```diff
-       }
+       }(await CC, zC);
+       return xz(ZC, QC)
```

#### 45. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1018` → after: `L1252-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1252-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1252-L1255) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1018)

```diff
-       be.d.dracoDecodes = Hk.decodes, be.d.dracoWorkersStarted = Hk.workersStarted, be.d.dracoMostWorkers = Hk.mostWorkers
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC,
+         zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC,
+         ZC = arguments.length > 2 ? arguments[2] : void 0;
+       return (0, bC.h)(CC, zC, ZC)
```

#### 46. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1020-L1032` → after: `L1257-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1257-L1259) · [Before (L1020-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1020-L1032)

```diff
-     async function ye(kk, ek, ik, fk, Sk) {
-       try {
-         return await async function(kk, ek, ik, fk, Sk, bk) {
-           var rk;
-           let Pk;
-           const mk = null === (rk = (0, Ke.e)()) || void 0 === rk ? void 0 : rk.yH,
-             Mk = null !== mk && void 0 !== mk && mk.YH && ek === mk.XF() ? mk : null,
-             Kk = Sk && !Mk;
-           return await Rk(kk, ek, ik, fk, Dk.b, (kk => (Pk = new we(ek, Kk), new le(kk, ek, Pk, Kk, new fe(ek, fk), bk, Mk).load())), !Sk), Pk
-         }(kk, ek, ik, Lk, fk, Sk)
-       } finally {
-         pe()
-       }
+ 
+     function oC(CC) {
+       return (0, wC.K)((() => CC), QC, nC)
```

#### 47. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1034-L1039` → after: `L1261-L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1261-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1261-L1266) · [Before (L1034-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1034-L1039)

```diff
-     async function Ye(kk, ek, ik, fk) {
-       try {
-         return await Rk(kk, ek, ik, Lk, Dk.b, (kk => fk(kk, new fe(ek, Lk))))
-       } finally {
-         pe()
-       }
+   },
+   36189: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       return new Error(`${CC}: ${zC instanceof Error?`${zC.name}: ${zC.message}`:String(zC)}`, {
+         cause: zC
+       })
```

#### 48. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1041-L1043` → after: `L1268-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1268-L1269) · [Before (L1041-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1041-L1043)

```diff
-     Se = fk.b, Mk || (Mk = {
-       scriptUrl: new URL(Se.scriptUrl, location.href).href,
-       wasmBinaryUrl: new URL(Se.wasmBinaryUrl, location.href).href
+     ZC.d(zC, {
+       e: () => QC
```

#### 49. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1046` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1272) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1046)

```diff
-   41065: (kk, ek, ik) => {
+   36184: (CC, zC, ZC) => {
```

#### 50. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1048` → after: `L1274-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1274-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1274-L1275) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1048)

```diff
-       b: () => bk
+       b: () => nC,
+       d: () => oC
```

#### 51. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1050-L1051` → after: `L1277-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1277-L1279) · [Before (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1050-L1051)

```diff
-     var Dk = ik(131),
-       fk = ik(1181);
+     var QC = ZC(2856),
+       wC = ZC(6616),
+       bC = ZC(36189);
```

#### 52. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1053-L1054` → after: `L1281-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1281-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1281-L1282) · [Before (L1053-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1053-L1054)

```diff
-     function Sk(kk) {
-       return (0, Dk.e)() ? `https://${fk.e.discordDomain}/${kk.href}` : kk.href
+     function nC() {
+       return new URL(new ZC.U(ZC(36192)).href, globalThis.location?.href).href
```

#### 53. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1056-L1058` → after: `L1284-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1284-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1284-L1289) · [Before (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1056-L1058)

```diff
-     const bk = {
-       scriptUrl: Sk(new ik.U(ik(41068))),
-       wasmBinaryUrl: Sk(new ik.U(ik(41070)))
+     let fC = null;
+ 
+     function oC() {
+       return fC ??= (async () => (0, QC.I)(new URL(nC()), (0, wC.e)("bloxd_wasm_textures")))().catch((CC => {
+         throw (0, bC.e)((0, QC.P)(CC), CC)
+       })), fC
```

#### 54. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1061-L1081` → after: `L1292-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1292-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1292-L1324) · [Before (L1061-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1061-L1081)

```diff
-   35819: kk => {
-     kk.exports = function(kk, ek, ik, Dk) {
-       var fk = self || window;
-       try {
-         try {
-           var Sk;
-           try {
-             Sk = new fk.Blob([kk])
-           } catch (mk) {
-             (Sk = new(fk.BlobBuilder || fk.WebKitBlobBuilder || fk.MozBlobBuilder || fk.MSBlobBuilder)).append(kk), Sk = Sk.getBlob()
-           }
-           var bk = fk.URL || fk.webkitURL,
-             rk = bk.createObjectURL(Sk),
-             Pk = new fk[ek](rk, ik);
-           return bk.revokeObjectURL(rk), Pk
-         } catch (mk) {
- ... (5 more removed lines; see GitHub link above)
+   36172: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC,
+       i: () => bC,
+       m: () => oC,
+       n: () => nC,
+       p: () => wC
+     });
+     const QC = /^alloc_failed (\d+) bytes$/;
+ 
+     function wC(CC, zC) {
+       return bC(CC, zC) ? `trap=alloc_failed ${zC} bytes` : `trap=${CC}`
+     }
+ 
+     function bC(CC, zC) {
+       return "unreachable" === CC && zC > 0
+ ... (17 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1084-L1089` → after: `L1327-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1327-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/208.js#L1327-L1331) · [Before (L1084-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/208.js#L1084-L1089)

```diff
-   },
-   41070: (kk, ek, ik) => {
-     kk.exports = ik.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
-   },
-   41068: (kk, ek, ik) => {
-     kk.exports = ik.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
+     const fC = 300;
+ 
+     function oC(CC) {
+       return CC.replace(/\s*\n\s*/g, " / ").slice(0, fC)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/209.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/209.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9)

#### 1. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/209.js#L4)

```diff
-   41073: (kk, ek, ik) => {
+   36167: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/209.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/209.js#L6)

```diff
-       default: () => Sk
+       CAPPED_COUNTS_VISIT_CAP: () => bC,
+       reportCappedWasmFailure: () => oC,
+       reportUncappedWasmFailure: () => fC,
+       reportWasmCrash: () => wC,
+       reportWasmFailure: () => nC
```

#### 3. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L8-L9` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/209.js#L12) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/209.js#L8-L9)

```diff
-     var Dk = ik(35819),
-       fk = ik.n(Dk);
+     var QC = ZC(2927);
```

#### 4. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L11-L12` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/209.js#L14-L15) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/209.js#L11-L12)

```diff
-     function Sk() {
-       return fk()('/*! For license information please see 3lwmg.procGen.worker.5c11f61d.worker.js.LICENSE.txt */\n(()=>{var kk={46:kk=>{const ek="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,ik=()=>ek.now(),Dk=kk=>kk===1/0||(kk=> … [truncated]
+     function wC(CC) {
+       (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
```

#### 5. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L14-L36` → after: `L17-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L17-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/209.js#L17-L28) · [Before (L14-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/209.js#L14-L36)

```diff
-   },
-   35819: kk => {
-     kk.exports = function(kk, ek, ik, Dk) {
-       var fk = self || window;
-       try {
-         try {
-           var Sk;
-           try {
-             Sk = new fk.Blob([kk])
-           } catch (mk) {
-             (Sk = new(fk.BlobBuilder || fk.WebKitBlobBuilder || fk.MozBlobBuilder || fk.MSBlobBuilder)).append(kk), Sk = Sk.getBlob()
-           }
-           var bk = fk.URL || fk.webkitURL,
-             rk = bk.createObjectURL(Sk),
-             Pk = new fk[ek](rk, ik);
-           return bk.revokeObjectURL(rk), Pk
- ... (7 more removed lines; see GitHub link above)
+     const bC = QC.d - 4;
+ 
+     function nC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1)
+     }
+ 
+     function fC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
+     }
+ 
+     function oC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1, bC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/210.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/210.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2)

#### 1. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L6` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L4-L21) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L4-L6)

```diff
-   41098: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       default: () => Sk
+   40652: (CC, zC, ZC) => {
+     function QC(CC, zC, ZC) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(CC, zC).getContext("2d", ZC);
+       const QC = document.createElement("canvas");
+       return QC.width = CC, QC.height = zC, QC.getContext("2d", ZC)
+     }
+ 
+     function wC(CC, zC) {
+       return CC.getContext("2d", zC)
+     }
+     ZC.d(zC, {
+       b: () => wC,
+       f: () => QC
+     })
+   },
+   40606: (CC, zC, ZC) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L8-L9` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L23-L26) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L8-L9)

```diff
-     var Dk = ik(35819),
-       fk = ik.n(Dk);
+     const QC = 1 << 20,
+       wC = 1 << 21,
+       bC = 1024,
+       nC = 2048;
```

#### 3. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L11-L12` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L28-L32) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L11-L12)

```diff
-     function Sk() {
-       return fk()('(()=>{var kk={23:(kk,ek,ik)=>{kk.exports=ik.p+"static/media/bloxd_wasm_bg.48b33a82574c7dba5df8.wasm"},31:(kk,ek,ik)=>{kk.exports=ik.p+"static/media/bloxd_wasm_textures_bg.f53ae115f07fdd6feab3.wasm"},14:(kk,ek,ik)=>{kk.exports=ik.p+"static/media/zstdDecodeWorker … [truncated]
+     function fC(CC, zC, ZC) {
+       const fC = CC + QC,
+         oC = zC + bC,
+         qC = ZC + QC;
+       return fC < 0 || fC >= wC || qC < 0 || qC >= wC || oC < 0 || oC >= nC ? -1 : (fC * wC + qC) * nC + oC
```

#### 4. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L15-L19` → after: `L35-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L35-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L35-L244) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L15-L19)

```diff
-   35819: kk => {
-     kk.exports = function(kk, ek, ik, Dk) {
-       var fk = self || window;
-       try {
-         try {
+   40598: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC,
+       i: () => nC,
+       l: () => wC,
+       n: () => bC,
+       o: () => FC,
+       q: () => qC,
+       u: () => oC,
+       y: () => fC
+     });
+     ZC(3436);
+     ZC(40606);
+ 
+     function QC(CC) {}
+ 
+ ... (194 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L22` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L386) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L22)

```diff
-             Sk = new fk.Blob([kk])
+             this.eventWalker(CC)
```

#### 6. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L24` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L388) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L24)

```diff
-             (Sk = new(fk.BlobBuilder || fk.WebKitBlobBuilder || fk.MozBlobBuilder || fk.MSBlobBuilder)).append(kk), Sk = Sk.getBlob()
+             return this.crashOn(IC, tC), !1
```

#### 7. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L26-L29` → after: `L390-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L390-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L390-L451) · [Before (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L26-L29)

```diff
-           var bk = fk.URL || fk.webkitURL,
-             rk = bk.createObjectURL(Sk),
-             Pk = new fk[ek](rk, ik);
-           return bk.revokeObjectURL(rk), Pk
+           return this.handEnvEvents()
+         }
+         for (const QC of uC) {
+           if (this.stopped) return !1;
+           try {
+             var TC, aC;
+             null === (TC = (aC = this.handlers).onNetEvent) || void 0 === TC || TC.call(aC, QC)
+           } catch (tC) {
+             return this.crashOn(iC, tC), !1
+           }
+         }
+         return this.handEnvEvents()
+       }
+       handEnvEvents() {
+         for (const bC of this.graceEvents) {
+           if (this.stopped) return !1;
+ ... (46 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L31` → after: `L453-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L453-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/210.js#L453-L472) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/210.js#L31)

```diff
-           return new fk[ek]("data:application/javascript,".concat(encodeURIComponent(kk)), ik)
+           return this.crash(PC, zC), !1
+         }
+         return !0
+       }
+       setHoldDraws(CC) {
+         this.drawsHeld = CC
+       }
+       setUiPrefs(CC) {
+         this.unsentUiPrefs = {
+           ...CC
+         }
+       }
+       setEnvPrefs(CC) {
+         this.unsentEnvPrefs = {
+           ...CC
+         }
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/211.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/211.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56)

#### 1. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L2)

```diff
- export const ids = [211, 212];
+ export const ids = [211];
```

#### 2. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L4-L31` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L4) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L4-L31)

```diff
-   35829: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       CAPPED_COUNTS_VISIT_CAP: () => Sk,
-       reportCappedWasmFailure: () => Pk,
-       reportUncappedWasmFailure: () => rk,
-       reportWasmCrash: () => fk,
-       reportWasmFailure: () => bk
-     });
-     var Dk = ik(2866);
- 
-     function fk(kk) {
-       (0, Dk.reportClientError)("wasm_load", kk.message, kk.code)
-     }
-     const Sk = Dk.b - 4;
- 
-     function bk(kk, ek, ik) {
- ... (12 more removed lines; see GitHub link above)
+   36369: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L33` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L6) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L33)

```diff
-       c: () => Lk,
+       b: () => nC,
```

#### 4. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L35-L212` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L8) · [Before (L35-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L35-L212)

```diff
-       h: () => sk,
-       l: () => Ck
-     });
-     var Dk = ik(35851),
-       fk = ik(2821),
-       Sk = ik(35866),
-       bk = ik(2823),
-       rk = ik(35829),
-       Pk = ik(2855),
-       mk = ik(3194),
-       Mk = ik(3190),
-       Kk = ik(35836),
-       xk = ik(2866),
-       nk = ik(35841),
-       Uk = ik(35843),
-       Hk = ik(3661);
- ... (162 more removed lines; see GitHub link above)
+       g: () => bC
```

#### 5. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L214-L590` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L10-L13) · [Before (L214-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L214-L590)

```diff
-     class Sk {
-       __destroy_into_raw() {
-         const kk = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, vk.unregister(this), kk
-       }
-       free() {
-         const kk = this.__destroy_into_raw();
-         Ye.tumD(kk, 0)
-       }
-       XK(kk, ek) {
-         const ik = Ye.ds8B(this.__wbg_ptr, kk, ek);
-         if (ik[2]) throw ne(ik[1]);
-         return ik[0] >>> 0
-       }
-       BK(kk) {
-         const ek = Ye.mtr2(this.__wbg_ptr, kk);
- ... (361 more removed lines; see GitHub link above)
+     var QC = ZC(1724);
+     class wC extends Error {
+       constructor(CC) {
+         super("The game server didn't answer in time"), this.leg = CC, this.name = "SeatRequestTimedOut"
```

#### 6. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L593-L618` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L16) · [Before (L593-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L593-L618)

```diff
-     Symbol.dispose && (Pk.prototype[Symbol.dispose] = Pk.prototype.free);
-     class mk {
-       __destroy_into_raw() {
-         const kk = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, Wk.unregister(this), kk
-       }
-       free() {
-         const kk = this.__destroy_into_raw();
-         Ye.DUce(kk, 0)
-       }
-       gn(kk, ek) {
-         const ik = Me(kk, Ye.VZBX),
-           Dk = Le;
-         return Ye.c5sK(this.__wbg_ptr, ik, Dk, ek) >>> 0
-       }
-       Gn(kk, ek, ik) {
- ... (10 more removed lines; see GitHub link above)
+     const bC = new class {
```

#### 7. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L620-L688` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L18) · [Before (L620-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L620-L688)

```diff
-         const kk = Ye.O8PJ();
-         return this.__wbg_ptr = kk, Wk.register(this, this.__wbg_ptr, this), this
-       }
-       scan(kk, ek) {
-         ck(kk, rk);
-         const ik = Ye.NgEc(this.__wbg_ptr, kk.__wbg_ptr, ek);
-         if (ik[2]) throw ne(ik[1]);
-         return ik[0] >>> 0
-       }
-       Jn(kk) {
-         const ek = Me(kk, Ye.VZBX),
-           ik = Le;
-         Ye.dRIB(this.__wbg_ptr, ek, ik)
-       }
-       Rn() {
-         return Ye.b9fV(this.__wbg_ptr) >>> 0
- ... (53 more removed lines; see GitHub link above)
+         this.count = 0, this.answers = 0, this.waiting = new Set
```

#### 8. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L690-L691` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L20-L21) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L690-L691)

```diff
-       xU() {
-         return Ye.kIdy(this.__wbg_ptr) >>> 0
+       get answered() {
+         return this.answers
```

#### 9. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L693-L699` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L23-L24) · [Before (L693-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L693-L699)

```diff
-       iU(kk, ek, ik) {
-         const Dk = me(kk, Ye.VZBX),
-           fk = Le,
-           Sk = me(ek, Ye.VZBX),
-           bk = Le,
-           rk = Ye.s0SS(this.__wbg_ptr, Dk, fk, Sk, bk, ik);
-         if (rk[1]) throw ne(rk[0])
+       answer() {
+         this.answers++
```

#### 10. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L701-L702` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L26-L28) · [Before (L701-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L701-L702)

```diff
-       UU() {
-         return Ye.byg9(this.__wbg_ptr) >>> 0
+       add() {
+         this.count++;
+         for (const CC of this.waiting) CC()
```

#### 11. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L704-L707` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L30-L31) · [Before (L704-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L704-L707)

```diff
-       mesh(kk, ek, ik, Dk, fk) {
-         const Sk = Ye.XS0Z(this.__wbg_ptr, kk, ek, ik, Dk, fk);
-         if (Sk[2]) throw ne(Sk[1]);
-         return Sk[0] >>> 0
+       remove() {
+         this.count--
```

#### 12. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L709-L742` → after: `L33-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L33-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L33-L41) · [Before (L709-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L709-L742)

```diff
-       constructor(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk) {
-         const Yk = Pe(kk, Ye.VZBX),
-           Lk = Le,
-           Ck = Ke(ek, Ye.VZBX),
-           Ak = Le,
-           jk = me(ik, Ye.VZBX),
-           sk = Le,
-           dk = Me(Dk, Ye.VZBX),
-           Vk = Le,
-           Fk = Me(fk, Ye.VZBX),
-           uk = Le,
-           qk = me(Sk, Ye.VZBX),
-           Ik = Le,
-           zk = me(bk, Ye.VZBX),
-           Qk = Le,
-           vk = Ke(rk, Ye.VZBX),
- ... (18 more removed lines; see GitHub link above)
+       whenSlow(CC) {
+         return this.count > 0 || CC.aborted ? Promise.resolve(!CC.aborted) : new Promise((zC => {
+           const ZC = () => {
+             this.waiting.delete(ZC), zC(!CC.aborted)
+           };
+           this.waiting.add(ZC), CC.addEventListener("abort", ZC, {
+             once: !0
+           })
+         }))
```

#### 13. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L744-L773` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L43) · [Before (L744-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L744-L773)

```diff
-       nU(kk, ek) {
-         const ik = me(kk, Ye.VZBX),
-           Dk = Le,
-           fk = Ye.gbFv(this.__wbg_ptr, ik, Dk, ek);
-         if (fk[3]) throw ne(fk[2]);
-         var Sk = Ok(fk[0], fk[1]).slice();
-         return Ye.YmUR(fk[0], 1 * fk[1], 1), Sk
-       }
-       HU(kk) {
-         Ye.qbgP(this.__wbg_ptr, re(kk) ? 16777215 : kk)
-       }
-       wU(kk) {
-         return Ye.q7GY(this.__wbg_ptr, kk) >>> 0
-       }
-       pU() {
-         return Ye.Cymp(this.__wbg_ptr) >>> 0
- ... (14 more removed lines; see GitHub link above)
+     };
```

#### 14. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L775-L788` → after: `L45-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L45-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L45-L48) · [Before (L775-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L775-L788)

```diff
-       __destroy_into_raw() {
-         const kk = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, Xk.unregister(this), kk
-       }
-       free() {
-         const kk = this.__destroy_into_raw();
-         Ye.VQNk(kk, 0)
-       }
-       compute(kk, ek, ik, Dk) {
-         var fk = re(Dk) ? 0 : xe(Dk, Ye.VZBX, Ye.GGs5),
-           Sk = Le;
-         const bk = Ye.GXVm(this.__wbg_ptr, kk, re(ek) ? Number.MAX_SAFE_INTEGER : ek | 0, ik, fk, Sk);
-         if (bk[2]) throw ne(bk[1]);
-         return bk[0] >>> 0
+       constructor(CC) {
+         this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new QC.d(45e3, CC), this.slow = new QC.d(8e3, (() => {
+           this.countedSlow = !0, bC.add()
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L790-L793` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L50-L51) · [Before (L790-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L790-L793)

```diff
-       DU(kk) {
-         const ek = xe(kk, Ye.VZBX, Ye.GGs5),
-           ik = Le;
-         Ye.A2tv(this.__wbg_ptr, ek, ik)
+       restart() {
+         bC.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
```

#### 16. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L795-L796` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L53-L54) · [Before (L795-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L795-L796)

```diff
-       KU() {
-         return Ye.BoMw(this.__wbg_ptr) >>> 0
+       stop() {
+         this.timeout.stop(), this.slow.stop(), this.uncountSlow()
```

#### 17. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L798-L799` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L56-L57) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L798-L799)

```diff
-       xU() {
-         return Ye.laj4(this.__wbg_ptr) >>> 0
+       answered() {
+         this.stop(), bC.answer()
```

#### 18. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L801-L804` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L59-L60) · [Before (L801-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L801-L804)

```diff
-       LU(kk) {
-         const ek = Ye.n5Ez(this.__wbg_ptr, kk);
-         if (ek[2]) throw ne(ek[1]);
-         return ek[0] >>> 0
+       socketOpened() {
+         this.slow.stop(), this.uncountSlow(), bC.answer()
```

#### 19. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L806-L817` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L62-L63) · [Before (L806-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L806-L817)

```diff
-       constructor(kk, ek, ik, Dk, fk, Sk) {
-         const bk = Pe(kk, Ye.VZBX),
-           rk = Le,
-           Pk = Ke(ek, Ye.VZBX),
-           mk = Le,
-           Mk = me(ik, Ye.VZBX),
-           Kk = Le,
-           xk = Me(Dk, Ye.VZBX),
-           nk = Le,
-           Uk = Ye.x2OI(bk, rk, Pk, mk, Mk, Kk, xk, nk, fk, Sk);
-         if (Uk[2]) throw ne(Uk[1]);
-         return this.__wbg_ptr = Uk[0], Xk.register(this, this.__wbg_ptr, this), this
+       uncountSlow() {
+         this.countedSlow && (this.countedSlow = !1, bC.remove())
```

#### 20. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L859-L874` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L78) · [Before (L859-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L859-L874)

```diff
-       return 0 !== Ye.GvQl(kk)
-     }
- 
-     function wk(kk, ek) {
-       const ik = xe(kk, Ye.VZBX, Ye.GGs5),
-         Dk = Le,
-         fk = Ye.XYsO(ik, Dk, ek);
-       if (fk[1]) throw ne(fk[0])
-     }
- 
-     function lk() {
-       Ye.JCge()
-     }
- 
-     function pk() {
-       return Ye.pK1w() >>> 0
+       return 2 ** Math.floor(Math.log2(Math.max(1, CC / wC)))
```

#### 21. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L878` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L82) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L878)

```diff
-       return 0 !== Ye.byuw(kk)
+       return (CC / wC).toFixed(1)
```

#### 22. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L882` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L108) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L882)

```diff
-       return 0 !== Ye.TYtG(kk)
+       return Math.floor(wC * CC / bC)
```

#### 23. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L886` → after: `L112-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L112-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L112-L120) · [Before (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L886)

```diff
-       Ye.yqNK(kk)
+       const zC = WC(CC);
+       let ZC = QC.f.maxChunkHorizAddDistance,
+         wC = QC.f.maxChunkVertAddDistance;
+       if (NC(ZC + 1, wC + 1) <= zC) return null;
+       for (; NC(ZC + 1, wC + 1) > zC && (ZC > 0 || wC > 0);) ZC > wC ? ZC-- : wC--;
+       return {
+         horizontal: ZC,
+         vertical: wC
+       }
```

#### 24. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L889-L890` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L123-L124) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L889-L890)

```diff
-     function Ck() {
-       return Ye.Zvst() >>> 0
+     function WC(CC) {
+       return CC - Math.floor(CC / 6)
```

#### 25. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L893-L894` → after: `L127-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L127-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L127-L133) · [Before (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L893-L894)

```diff
-     function Ak() {
-       return Ye.yS1r() >>> 0
+     function NC(CC, zC) {
+       const ZC = Math.max(CC, zC);
+       let QC = 0;
+       for (let wC = -ZC; wC <= ZC; wC++)
+         for (let bC = -ZC; bC <= ZC; bC++)
+           for (let nC = -ZC; nC <= ZC; nC++) MC(CC, zC, wC, bC, nC) && QC++;
+       return QC
```

#### 26. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L897-L898` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L136-L138) · [Before (L897-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L897-L898)

```diff
-     function jk() {
-       return 0 !== Ye.AK9i()
+     function MC(CC, zC, ZC, QC, wC) {
+       const bC = ZC * ZC + wC * wC;
+       return CC === zC ? bC + QC * QC <= CC * CC : CC > zC ? Math.abs(QC) <= zC && bC + QC * QC <= CC * CC : bC <= CC * CC && bC + QC * QC <= zC * zC
```

#### 27. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L901-L904` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L163-L164) · [Before (L901-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L901-L904)

```diff
-     function sk() {
-       const kk = Ye.McrE();
-       var ek = Zk(kk[0], kk[1]).slice();
-       return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
+     function PC(CC) {
+       return NC + CC * MC
```

#### 28. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L907-L910` → after: `L167-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L167-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L167-L228) · [Before (L907-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L907-L910)

```diff
-     function dk() {
-       const kk = Ye.GC1R();
-       var ek = Zk(kk[0], kk[1]).slice();
-       return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
+     function GC(CC, zC, ZC) {
+       var wC, nC;
+       let {
+         footprintBytes: fC,
+         basis: qC,
+         namesLimit: FC
+       } = function(CC) {
+         const {
+           os: zC,
+           deviceMemory: ZC
+         } = CC;
+         if ("ios" === zC) switch ((0, bC.e)(CC)) {
+           case "ipad_m":
+             return {
+               footprintBytes: PC(oC.b), basis: "ipad-m", namesLimit: !1
+             };
+ ... (46 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L914-L916` → after: `L235-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L235-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L235-L239) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L914-L916)

```diff
-       const kk = Ye.T7V6();
-       var ek = Zk(kk[0], kk[1]).slice();
-       return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
+       return RC ??= {
+         os: (0, wC.getOperatingSystem)(),
+         deviceMemory: navigator.deviceMemory,
+         ...(0, bC.f)()
+       }, RC
```

#### 30. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L920` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L243) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L920)

```diff
-       return Ye.jVji() >>> 0
+       return GC(JC(), (0, nC.g)(), (0, fC.J)("wasm").length > 0)
```

#### 31. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L924` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L247) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L924)

```diff
-       Ye.BF8F()
+       return xC ??= (0, qC.p)(GC(JC(), null, !1).chunkCap), xC
```

#### 32. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L928-L938` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L251) · [Before (L928-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L928-L938)

```diff
-       let kk, ek;
-       try {
-         const ik = Ye.d9tS();
-         return kk = ik[0], ek = ik[1], Rk(ik[0], ik[1])
-       } finally {
-         Ye.YmUR(kk, ek, 1)
-       }
-     }
- 
-     function Ik(kk) {
-       Ye.OGuX(Bk(kk))
+       return AC ??= IC(), AC
```

#### 33. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L942-L1008` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L255-L256) · [Before (L942-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L942-L1008)

```diff
-       return {
-         __proto__: null,
-         wBUE: {
-           __proto__: null,
-           lQ7u: function(kk, ek) {
-             return Bk(Error(Rk(kk, ek)))
-           },
-           QyEz: function(kk, ek) {
-             throw new Error(Rk(kk, ek))
-           },
-           rwQM: function(kk) {
-             fe(kk).call()
-           },
-           HiLW: function(kk, ek) {
-             console.error(Rk(kk, ek))
-           },
- ... (51 more removed lines; see GitHub link above)
+       var CC;
+       return (null !== (CC = AC) && void 0 !== CC ? CC : IC()).basis
```

#### 34. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1012-L1047` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L260) · [Before (L1012-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1012-L1047)

```diff
-       return kk >>>= 0, Gk().subarray(kk / 8, kk / 8 + ek)
-     }
- 
-     function Zk(kk, ek) {
-       return kk >>>= 0, ee().subarray(kk / 4, kk / 4 + ek)
-     }
- 
-     function Ok(kk, ek) {
-       return kk >>>= 0, De().subarray(kk / 1, kk / 1 + ek)
-     }
-     let gk = null;
- 
-     function Gk() {
-       return null !== gk && 0 !== gk.byteLength || (gk = new Float64Array(Ye.memory.buffer)), gk
-     }
-     let Nk = null;
- ... (20 more removed lines; see GitHub link above)
+       return CC.setChunkCap(zC.chunkCap)
```

#### 35. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1051` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L283) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1051)

```diff
-       return Se[kk]
+       return "footprint" !== CC
```

#### 36. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1053-L1055` → after: `L285-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L285-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L285-L289) · [Before (L1053-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1053-L1055)

```diff
-     let Se = new Array(1024).fill(void 0);
-     Se.push(void 0, null, !0, !1);
-     let be = Se.length;
+     const NC = 2 * QC.d,
+       MC = 4 * QC.d,
+       gC = 35 * QC.d + NC + MC,
+       SC = 6.5 * QC.d,
+       pC = 132.5 * QC.c;
```

#### 37. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1058-L1068` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L292-L293) · [Before (L1058-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1058-L1068)

```diff
-       return void 0 === kk || null === kk
-     }
- 
-     function Pe(kk, ek) {
-       const ik = ek(2 * kk.length, 2) >>> 0;
-       return (null !== Jk && 0 !== Jk.byteLength || (Jk = new Uint16Array(Ye.memory.buffer)), Jk).set(kk, ik / 2), Le = kk.length, ik
-     }
- 
-     function me(kk, ek) {
-       const ik = ek(4 * kk.length, 4) >>> 0;
-       return ee().set(kk, ik / 4), Le = kk.length, ik
+       const zC = SC + (0, wC.j)(CC) + CC * pC;
+       return Math.ceil((2 * gC + zC) / bC) * bC
```

#### 38. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1071-L1073` → after: `L305-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L305-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L305-L309) · [Before (L1071-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1071-L1073)

```diff
-     function Me(kk, ek) {
-       const ik = ek(1 * kk.length, 1) >>> 0;
-       return De().set(kk, ik / 1), Le = kk.length, ik
+     function AC(CC) {
+       return {
+         targetBytes: CC,
+         leastBytes: 0
+       }
```

#### 39. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1076-L1078` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L312-L313) · [Before (L1076-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1076-L1078)

```diff
-     function Ke(kk, ek) {
-       const ik = ek(8 * kk.length, 8) >>> 0;
-       return Gk().set(kk, ik / 8), Le = kk.length, ik
+     function xC(CC) {
+       return CC >= wC.b ? GC : RC
```

#### 40. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1082-L1085` → after: `L318-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L318-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L318-L339) · [Before (L1082-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1082-L1085)

```diff
-       if (void 0 === ik) {
-         const ik = le.encode(kk),
-           Dk = ek(ik.length, 1) >>> 0;
-         return De().subarray(Dk, Dk + ik.length).set(ik), Le = ik.length, Dk
+       return CC + zC + JC > ZC
+     }
+     const iC = {
+       now: () => performance.now(),
+       requestIdle: "function" === typeof requestIdleCallback ? CC => {
+         requestIdleCallback(CC)
+       } : null
+     };
+     class vC {
+       constructor(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iC;
+         this.memory = CC, this.readPeakStoredChunks = zC, this.onError = ZC, this.clock = QC, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.ma … [truncated]
+           reserves: 0,
+           allocations: 0
+         }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
+       }
+ ... (6 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1087-L1094` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L341-L342) · [Before (L1087-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1087-L1094)

```diff
-       let Dk = kk.length,
-         fk = ek(Dk, 1) >>> 0;
-       const Sk = De();
-       let bk = 0;
-       for (; bk < Dk; bk++) {
-         const ek = kk.charCodeAt(bk);
-         if (ek > 127) break;
-         Sk[fk + bk] = ek
+       shedDistanceInUse() {
+         return this.distanceInUse
```

#### 42. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1096-L1099` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L344-L345) · [Before (L1096-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1096-L1099)

```diff
-       if (bk !== Dk) {
-         0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
-         const ek = De().subarray(fk + bk, fk + Dk);
-         bk += le.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
+       setFootprint(CC) {
+         this.footprint = CC
```

#### 43. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1101-L1122` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L347-L350) · [Before (L1101-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1101-L1122)

```diff
-       return Le = bk, fk
-     }
- 
-     function ne(kk) {
-       const ek = fe(kk);
-       return function(kk) {
-         kk < 1028 || (Se[kk] = be, be = kk)
-       }(kk), ek
-     }
-     let Ue = new TextDecoder("utf-8", {
-       ignoreBOM: !0,
-       fatal: !0
-     });
-     Ue.decode();
-     const He = 2146435072;
-     let we = 0;
- ... (6 more removed lines; see GitHub link above)
+       setCeiling(CC) {
+         this.ceilingBytes = CC, this.call((() => {
+           this.memory.setCeiling(CC)
+         }), void 0)
```

#### 44. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1124-L1165` → after: `L352-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L352-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L352-L445) · [Before (L1124-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1124-L1165)

```diff
-     });
-     let pe, ye, Ye, Le = 0;
- 
-     function Ce(kk, ek) {
-       return ye = kk, Ye = kk.exports, pe = ek, gk = null, Nk = null, Jk = null, ke = null, ie = null, Ye.Kum7(), Ye
-     }
- 
-     function Ae(kk) {
-       if (void 0 !== Ye) return Ye;
-       void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
-         module: kk
-       } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const ek = zk();
-       kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
-       return Ce(new WebAssembly.Instance(kk, ek), kk)
-     }
- ... (26 more removed lines; see GitHub link above)
+       ceilingMayRefuse(CC, zC) {
+         var ZC;
+         return IC(this.memory.memoryBytes(), CC, null !== (ZC = this.ceilingBytes) && void 0 !== ZC ? ZC : zC)
+       }
+       reserveAtJoin(CC) {
+         let {
+           targetBytes: zC,
+           leastBytes: ZC
+         } = CC;
+         const QC = this.memory.memoryBytes(),
+           wC = QC + ZC,
+           bC = Math.max(zC + (this.ballastOn() ? FC : 0), wC),
+           nC = this.call((() => this.memory.reserveUpFront(bC) ? "target" : bC > wC && this.memory.reserveUpFront(wC) ? "least" : "none"), "none");
+         if (this.stopped) return !1;
+         if ("target" !== nC) {
+           const CC = "least" === nC ? `took ${wC} bytes instead` : "frames grow it in steps";
+ ... (78 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1167-L1174` → after: `L447-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L447-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L447-L455) · [Before (L1167-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1167-L1174)

```diff
-           const Dk = await kk.arrayBuffer();
-           return await WebAssembly.instantiate(Dk, ek)
-         } {
-           const ik = await WebAssembly.instantiate(kk, ek);
-           return ik instanceof WebAssembly.Instance ? {
-             instance: ik,
-             module: kk
-           } : ik
+           of this.workers.values()) nC += QC.reservesRefused, fC += QC.allocationsRefused;
+         return {
+           wasmMainMiB: Number((0, QC.h)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, QC.h)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: nC,
+           refusedAllocations: fC,
+           sheds: this.sheds,
+           ...null === (bC = this.footprint) || void 0 === bC ? void 0 : bC.snapshot()
```

#### 46. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1176-L1200` → after: `L457-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L457-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L457-L504) · [Before (L1176-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1176-L1200)

```diff
-       }(await kk, ek);
-       return Ce(ik, Dk)
-     }
-   },
-   35866: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => bk,
-       d: () => rk,
-       e: () => Pk
-     });
-     var Dk = ik(35873),
-       fk = ik(2821),
-       Sk = ik(35878);
-     const bk = {
-       name: fk.e,
-       url: () => new ik.U(ik(35887)),
- ... (9 more removed lines; see GitHub link above)
+       }
+       workersMemoryBytes() {
+         let CC = 0;
+         for (const {
+             stats: zC,
+             gone: ZC
+           }
+           of this.workers.values()) CC += ZC ? 0 : zC.memoryBytes;
+         return CC
+       }
+       checkFootprint() {
+         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
+       }
+       step() {
+         this.pendingSince = null, this.call((() => this.memory.reserveAhead(qC)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
+       }
+ ... (32 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L1204-L1234` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/211.js#L508-L509) · [Before (L1204-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/211.js#L1204-L1234)

```diff
-       return (0, fk.N)((() => kk), Dk, bk)
-     }
-   },
-   35853: (kk, ek, ik) => {
-     function Dk(kk, ek) {
-       return new Error(`${kk}: ${ek instanceof Error?`${ek.name}: ${ek.message}`:String(ek)}`, {
-         cause: ek
-       })
-     }
-     ik.d(ek, {
-       d: () => Dk
-     })
-   },
-   35851: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => bk,
- ... (15 more removed lines; see GitHub link above)
+       const zC = (CC, zC) => `${CC}/${(0,QC.h)(zC)}`;
+       return `memory ${(0,QC.h)(CC.memoryBytes)} live ${(0,QC.h)(CC.liveBytes)} peak ${(0,QC.h)(CC.peakLiveBytes)} unused ${(0,QC.h)(CC.unusedBytes)} ceiling ${(0,QC.h)(CC.ceilingBytes)} MiB; grows upFront ${zC(CC.grows.upFront,CC.grownBytes.upFront)} ahead ${zC(CC.grows.ahead,CC … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/212.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/212.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02)

#### 1. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/212.js#L4)

```diff
-   35829: (kk, ek, ik) => {
+   36219: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L6-L10` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/212.js#L6-L10) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/212.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => Sk,
-       reportCappedWasmFailure: () => Pk,
-       reportUncappedWasmFailure: () => rk,
-       reportWasmCrash: () => fk,
-       reportWasmFailure: () => bk
+       ITEM_FILES_WITHOUT_SPRITE: () => fC,
+       ITEM_SPRITES: () => bC,
+       ITEM_SPRITES_WITHOUT_FILE: () => nC,
+       ITEM_SPRITE_RUNS: () => wC,
+       MAX_SPRITE_ITEM_ID: () => QC
```

#### 3. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L12-L29` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/212.js#L12-L16) · [Before (L12-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/212.js#L12-L29)

```diff
-     var Dk = ik(2866);
- 
-     function fk(kk) {
-       (0, Dk.reportClientError)("wasm_load", kk.message, kk.code)
-     }
-     const Sk = Dk.b - 4;
- 
-     function bk(kk, ek, ik) {
-       (0, Dk.reportClientError)(kk, ek, ik, !1)
-     }
- 
-     function rk(kk, ek, ik) {
-       (0, Dk.reportClientError)(kk, ek, ik, !1, 1 / 0)
-     }
- 
-     function Pk(kk, ek, ik) {
- ... (2 more removed lines; see GitHub link above)
+     const QC = 10090,
+       wC = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       bC = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       nC = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       fC = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 1. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/213.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/213.js#L4)

```diff
-   35892: (kk, ek, ik) => {
+   36223: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/213.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/213.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => rk,
-       ITEM_SPRITES: () => Sk,
-       ITEM_SPRITES_WITHOUT_FILE: () => bk,
-       ITEM_SPRITE_RUNS: () => fk,
-       MAX_SPRITE_ITEM_ID: () => Dk
+       CreateCustomLobby: () => YC
```

#### 3. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L12-L17` → after: `L8-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L8-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/213.js#L8-L705) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/213.js#L12-L17)

```diff
-     const Dk = 10090,
-       fk = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       Sk = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       bk = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       rk = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
-   }
+     ZC(36227);
+     var QC = ZC(4562),
+       wC = ZC(48),
+       bC = ZC(1593),
+       nC = ZC(1002),
+       fC = ZC.n(nC),
+       oC = ZC(3113),
+       qC = ZC(1078),
+       FC = ZC(1149),
+       WC = ZC(4525),
+       NC = ZC(1388),
+       MC = ZC(36234),
+       gC = ZC(1143),
+       SC = ZC(1284),
+       pC = ZC(1453),
+       PC = ZC(20),
+ ... (682 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L4-L6)

```diff
-   35902: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       CreateCustomLobby: () => uk
+   36234: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => FC,
+       e: () => NC
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L8-L517` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L9-L15) · [Before (L8-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L8-L517)

```diff
-     ik(35905);
-     var Dk = ik(4563),
-       fk = ik(60),
-       Sk = ik(1648),
-       bk = ik(1021),
-       rk = ik.n(bk),
-       Pk = ik(3098),
-       mk = ik(1104),
-       Mk = ik(1177),
-       Kk = ik(4528),
-       xk = ik(1410),
-       nk = ik(35908),
-       Uk = ik(1172),
-       Hk = ik(1311),
-       wk = ik(1479),
-       lk = ik(22),
- ... (494 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(1307),
+       bC = ZC(1143),
+       nC = ZC(1295),
+       fC = ZC(3448),
+       oC = ZC(4873),
+       qC = ZC(1056);
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L529` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L27) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L529)

```diff
-       } = (0, Sk.D)();
+       } = (0, bC.y)();
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L535` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L33) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L535)

```diff
-         }), !ek && ik.map((kk => (0, mk.jsx)(rk.g, {
+         }), !zC && ZC.map((CC => (0, qC.jsx)(fC.d, {
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L564` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L62) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L564)

```diff
-       } = (0, Sk.D)(), [rk, Kk] = (0, Dk.useState)(null);
+       } = (0, bC.y)(), [fC, WC] = (0, QC.useState)(null);
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L585` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L83) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L585)

```diff
-         }), null !== rk && (0, mk.jsx)(Pk.h, {
+         }), null !== fC && (0, qC.jsx)(oC.k, {
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L616-L619` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L114-L116) · [Before (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L616-L619)

```diff
-   35913: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => mk,
-       d: () => Mk
+   41552: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       runClientGameMessage: () => KC
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L621-L622` → after: `L118-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L118-L123) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L621-L622)

```diff
-     ik(60);
-     var Dk = ik(1021),
+     var QC = ZC(3661),
+       wC = ZC(3677),
+       bC = ZC(1275),
+       nC = ZC(36234),
+       fC = ZC(4895),
+       oC = ZC(1002),
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L624-L634` → after: `L125-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L125-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L125-L135) · [Before (L624-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L624-L634)

```diff
-       Sk = ik(4563),
-       bk = ik(302),
-       rk = ik(1172),
-       Pk = ik(1066);
- 
-     function mk(kk) {
-       let {
-         value: ek,
-         onChange: ik,
-         showAll: Dk,
-         disabled: mk = !1
+       FC = ZC(48),
+       WC = ZC(1307),
+       NC = ZC(1388),
+       MC = ZC(326),
+       gC = ZC(1143),
+       SC = ZC(1013),
+       pC = ZC(1056);
+ 
+     function PC(CC) {
+       let {
+         onFilePicked: zC
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L638` → after: `L139-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L139-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L139-L148) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L638)

```diff
-       } = (0, rk.D)();
+       } = (0, gC.y)(), [QC, wC] = (0, FC.useState)(null), {
+         getRootProps: bC,
+         getInputProps: nC,
+         isDragActive: oC
+       } = (0, fC.d)({
+         onDrop: CC => {
+           CC.length > 0 && wC(CC[0])
+         },
+         useFsAccessApi: !1
+       }), WC = QC && QC.size > 1024 * MC.Mc;
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L640-L661` → after: `L150-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L150-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L150-L192) · [Before (L640-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L640-L661)

```diff
-         className: fk()("BloxdForm GamemodeForm", {
-           BasicOptions: !Dk
-         }),
-         children: [(0, Pk.jsx)("div", {
-           className: "SectionTitle",
-           children: Mk("classic:defaultGamemode")
-         }), (0, Pk.jsx)("div", {
-           className: "SectionBody",
-           children: Sk.G.map((kk => Dk || (0, Sk.z)(kk) ? (0, Pk.jsx)("button", {
-             type: "button",
-             className: fk()("WorldGamemode", {
-               Selected: ek === kk
-             }),
-             disabled: mk,
-             onClick: () => {
-               ik(kk)
- ... (6 more removed lines; see GitHub link above)
+         className: "SchematicUploadContainer",
+         children: [(0, pC.jsxs)("div", {
+           ...bC({
+             className: qC()("SchematicUpload", {
+               ActiveDrag: oC
+             })
+           }),
+           children: [(0, pC.jsx)("input", {
+             ...nC({
+               accept: ".bloxdschem"
+             })
+           }), !oC && QC ? (0, pC.jsxs)(pC.Fragment, {
+             children: [(0, pC.jsx)("div", {
+               className: qC()("SchematicUploadIcon", "Active", {
+                 TooBig: WC
+               }),
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L668-L673` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L199-L202) · [Before (L668-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L668-L673)

```diff
-         mapTypes: ek,
-         value: ik,
-         onChange: Dk,
-         showAll: mk,
-         disabled: Mk = !1,
-         children: Kk
+         ownedSchematics: zC,
+         onClose: ZC,
+         onChosenPreset: QC,
+         onChosenFile: wC
```

#### 13. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L677` → after: `L206-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L206-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L206-L324) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L677)

```diff
-       } = (0, rk.D)();
+       } = (0, gC.y)();
+       return (0, pC.jsxs)(pC.Fragment, {
+         children: [(0, pC.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: bC("worldBuilder:loadSchematic")
+         }), (0, pC.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: bC("worldBuilder:chooseOneOfYourSchematics")
+         }), (0, pC.jsx)("div", {
+           className: "SchematicPopupSchematicListContainer",
+           children: (0, pC.jsx)(nC.d, {
+             schematics: zC,
+             onSchematicPicked: CC => {
+               QC(CC.schematicId), ZC()
+             },
+             loading: !1,
+ ... (103 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L679-L690` → after: `L326-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L326-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L326-L431) · [Before (L679-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L679-L690)

```diff
-         className: fk()("BloxdForm MapTypeForm", {
-           BasicOptions: !mk
-         }),
-         children: [(0, Pk.jsx)("div", {
-           className: "SectionTitle",
-           children: xk("customLobby:mapType")
-         }), (0, Pk.jsx)("div", {
-           className: "SectionBody",
-           children: ek.map((kk => mk || (0, Sk.A)(kk) ? (0, Pk.jsx)("button", {
-             type: "button",
-             className: fk()("MapType", {
-               Selected: ik === kk
+         className: "SaveSchematicWindow",
+         children: [(0, pC.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: nC("general:name")
+         }), (0, pC.jsx)(AC.c, {
+           className: qC()("SaveSchematicName", {
+             Error: SC
+           }),
+           forcedText: ZC,
+           onValueChange: CC => {
+             oC(CC), IC(CC)
+           },
+           placeholderText: nC("worldBuilder:schematicNamePlaceholder"),
+           maxLength: JC.xb
+         }), (0, pC.jsx)("h2", {
+           className: qC()("SaveSchematicError", {
+ ... (90 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L692-L705` → after: `L433-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L433-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/214.js#L433-L544) · [Before (L692-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/214.js#L692-L705)

```diff
-             disabled: Mk,
-             onClick: () => {
-               Dk(kk)
-             },
-             style: {
-               "--background-image": `url(${bk.n[kk]})`
-             },
-             children: bk.l[kk]
-           }, kk) : null))
-         }), Kk]
-       })
-     }
-   },
-   35905: () => {}
+             middleScreenPopupClassName: "SchematicPopup",
+             onClose: bC,
+             unlockPointerKey: "schematicSaverPopup"
+           })
+         }({
+           ownedSchematics: zC,
+           onChosenDownload: (CC, zC) => {
+             oC("download-schematic", {
+               name: CC,
+               includeLobbyCode: zC
+             }).then((zC => {
+               let {
+                 buffer: {
+                   data: ZC
+                 }
+               } = zC;
+ ... (96 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L4-L7)

```diff
-   35908: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Mk,
-       f: () => xk
+   36255: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => iC
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L9-L15` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L8-L31) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L9-L15)

```diff
-     var Dk = ik(60),
-       fk = ik(1333),
-       Sk = ik(1172),
-       bk = ik(1327),
-       rk = ik(3433),
-       Pk = ik(4860),
-       mk = ik(1066);
+     var QC = ZC(1002),
+       wC = ZC.n(QC),
+       bC = ZC(1463),
+       nC = ZC(996),
+       fC = ZC(728),
+       oC = ZC(1143),
+       qC = ZC(1388),
+       FC = ZC(1453),
+       WC = ZC(3509),
+       NC = ZC(1013),
+       MC = ZC(3448),
+       gC = ZC(2563),
+       SC = ZC(1056);
+     const pC = 2;
+ 
+     function PC(CC) {
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L19-L23` → after: `L35-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L35-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L35-L59) · [Before (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L19-L23)

```diff
-         loading: ek,
-         schematics: ik,
-         onSchematicPicked: Dk,
-         selectedSchematicIdList: fk = [],
-         disableAutoExport: Pk
+         game: zC,
+         disabled: ZC,
+         showPlaceholder: QC
+       } = CC;
+       return null !== zC ? (0, SC.jsx)(MC.d, {
+         source: PC(zC),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: ZC,
+         entrySource: "customGamePlace"
+       }) : QC ? (0, SC.jsx)(MC.b, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
+     }
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L26-L27` → after: `L62-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L62-L65) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L26-L27)

```diff
-         t: Mk
-       } = (0, Sk.D)();
+         followsLeader: oC
+       } = (0, gC.g)(), qC = null !== (zC = null === nC || void 0 === nC ? void 0 : nC.slice(0, bC.gameCount)) && void 0 !== zC ? zC : [], WC = {
+         "--custom-game-place-tint": wC
+       };
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L29-L36` → after: `L67-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L67-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L67-L83) · [Before (L29-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L29-L36)

```diff
-         className: "SchematicList",
-         children: [ek && (0, mk.jsx)(bk.d, {}), !ek && 0 === ik.length && (0, mk.jsx)("div", {
-           className: "NoSchematicsText",
-           children: Mk("worldBuilder:noSavedSchematic")
-         }), !ek && ik.map((kk => (0, mk.jsx)(rk.g, {
-           source: {
-             type: "schematic",
-             schematic: kk
+         className: "CustomGamePlacePanel AnimFadeIn",
+         style: WC,
+         children: [(0, SC.jsx)("h2", {
+           className: "CustomGamePlacePanelHeading",
+           children: (0, SC.jsxs)(FC.LinkPreserveSearch, {
+             to: `/custom-games/${encodeURIComponent(ZC)}`,
+             className: "CustomGamePlacePanelTitle SmallTextBold",
+             children: [(0, SC.jsx)("span", {
+               children: QC
+             }), (0, SC.jsx)(NC.c, {
+               name: "arrow-up"
+             })]
+           })
+         }), (0, SC.jsx)("div", {
+           className: "CustomGamePlacePanelGames",
+           style: {
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L38-L50` → after: `L85-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L85-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L85-L95) · [Before (L38-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L38-L50)

```diff
-           gameWidth: "25%",
-           useLongRatio: !0,
-           onClick: () => {
-             Dk(kk)
-           },
-           isSelected: fk.includes(kk.schematicId),
-           hideCcu: !0,
-           hideFavourites: !0,
-           showPublishedChip: !0,
-           hideUnpublishedChip: !0,
-           disabled: kk.isAutoExported && Pk,
-           disabledReason: "worldBuilder:autoExportDisabled"
-         }, kk.schematicId)))]
+           children: Array.from({
+             length: bC.gameCount
+           }, ((CC, zC) => {
+             var ZC;
+             return (0, SC.jsx)(GC, {
+               game: null !== (ZC = qC[zC]) && void 0 !== ZC ? ZC : null,
+               disabled: oC,
+               showPlaceholder: !nC
+             }, zC)
+           }))
+         })]
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L56-L58` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L101) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L56-L58)

```diff
-         ownedSchematics: ek,
-         currentWorldSchematicId: ik,
-         onClose: fk
+         categories: zC
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L62` → after: `L161-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L161-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L161-L184) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L62)

```diff
-       } = (0, Sk.D)(), [rk, Kk] = (0, Dk.useState)(null);
+       } = (0, oC.y)(), ZC = (0, bC.C)(), QC = (0, IC.k)(), NC = (0, WC.d)({
+         refresh: !0
+       }), MC = ZC.customGamePlace;
+       if (!(0, nC.k)(MC)) return (0, SC.jsx)(FC.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const gC = fC.d[MC],
+         pC = nC.d[MC],
+         PC = null !== (CC = null === NC || void 0 === NC ? void 0 : NC[MC]) && void 0 !== CC ? CC : null,
+         GC = [];
+       for (let wC = 0; wC < pC.length; wC++) {
+         var iC;
+         const CC = xC[wC];
+         if (!CC) continue;
+         const ZC = pC[wC];
+         GC.push({
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L64-L90` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/215.js#L186-L190) · [Before (L64-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/215.js#L64-L90)

```diff
-         className: "SchematicListWindow",
-         children: [null === rk && (0, mk.jsxs)(mk.Fragment, {
-           children: [(0, mk.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: bk("worldBuilder:schematicList")
-           }), (0, mk.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: bk("worldBuilder:clickSchematicForOptions")
-           }), (0, mk.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, mk.jsx)(Mk, {
-               loading: !1,
-               schematics: ek,
-               onSchematicPicked: kk => {
-                 Kk(kk)
-               },
- ... (11 more removed lines; see GitHub link above)
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, SC.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${MC}/${gC.largePicture}.png)`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L2)

```diff
- export const ids = [216];
+ export const ids = [216, 291];
```

#### 2. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L4)

```diff
-   35925: (kk, ek, ik) => {
+   41095: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L6)

```diff
-       default: () => jk
+       CharacterCustomisationUI: () => Zz
```

#### 4. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L8` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L8-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L8)

```diff
-     var Dk = ik(1021),
+     var QC = ZC(48),
+       wC = ZC(2997),
+       bC = ZC(1076),
+       nC = ZC(1002),
```

#### 5. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10-L21` → after: `L13-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L13-L23) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L10-L21)

```diff
-       Sk = ik(1496),
-       bk = ik(1017),
-       rk = ik(741),
-       Pk = ik(1172),
-       mk = ik(1410),
-       Mk = ik(1479),
-       Kk = ik(3505),
-       xk = ik(1033),
-       nk = ik(3433),
-       Uk = ik(2529),
-       Hk = ik(1066);
-     const wk = 2;
+       oC = ZC(1183),
+       qC = ZC(583),
+       FC = ZC(1143),
+       WC = ZC(2166),
+       NC = ZC(1501),
+       MC = ZC(2534);
+     const gC = oC.y.filter((CC => !NC.d.includes(CC)));
+ 
+     function SC(CC, zC) {
+       return gC.includes(CC) && "string" === typeof zC && (0, MC.g)(CC, zC)
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L24-L31` → after: `L26-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L26-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L26-L129) · [Before (L24-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L24-L31)

```diff
-       return "firstPartyGame" === kk.type ? {
-         type: "game",
-         gameNameWithVariation: kk.gameNameWithVariation
-       } : {
-         type: "preview",
-         preview: kk.preview
-       }
-     }
+       const zC = {};
+       for (const ZC of gC) {
+         const QC = CC[ZC];
+         void 0 !== QC && SC(ZC, QC) && (zC[ZC] = QC)
+       }
+       return zC
+     }
+ 
+     function PC(CC, zC) {
+       return Object.entries(CC).every((CC => {
+         let [ZC, QC] = CC;
+         return zC[ZC] === QC
+       }))
+     }
+     var GC = ZC(2173),
+       RC = ZC(3088),
+ ... (88 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L35-L59` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L133-L135) · [Before (L35-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L35-L59)

```diff
-         game: ek,
-         disabled: ik,
-         showPlaceholder: Dk
-       } = kk;
-       return null !== ek ? (0, Hk.jsx)(nk.g, {
-         source: lk(ek),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: ik,
-         entrySource: "customGamePlace"
-       }) : Dk ? (0, Hk.jsx)(nk.d, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
- 
- ... (9 more removed lines; see GitHub link above)
+         wornOutfit: zC,
+         onApply: ZC,
+         onOverwrite: wC
```

#### 8. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L62-L78` → after: `L138-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L138-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L138-L153) · [Before (L62-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L62-L78)

```diff
-         followsLeader: Pk
-       } = (0, Uk.d)(), mk = null !== (ek = null === bk || void 0 === bk ? void 0 : bk.slice(0, Sk.gameCount)) && void 0 !== ek ? ek : [], Kk = {
-         "--custom-game-place-tint": fk
-       };
-       return (0, Hk.jsxs)("div", {
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: Kk,
-         children: [(0, Hk.jsx)("h2", {
-           className: "CustomGamePlacePanelHeading",
-           children: (0, Hk.jsxs)(Mk.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(ik)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
-             children: [(0, Hk.jsx)("span", {
-               children: Dk
-             }), (0, Hk.jsx)(xk.d, {
-               name: "arrow-up"
- ... (1 more removed lines; see GitHub link above)
+         t: nC
+       } = (0, FC.y)(), {
+         accountId: oC,
+         data: qC
+       } = (0, iC.j)(dC, !1), {
+         userContext: WC
+       } = (0, bC.e)();
+       return (0, QC.useEffect)((() => {
+         dC.ensureLoaded()
+       }), []), null === qC || oC !== WC.whamm ? null : (0, tC.jsxs)("div", {
+         className: "CosmeticPackGroup SavedOutfits",
+         children: [(0, tC.jsx)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: (0, tC.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: nC("homePage:myOutfits")
```

#### 9. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L81-L92` → after: `L156-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L156-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L156-L190) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L81-L92)

```diff
-           className: "CustomGamePlacePanelGames",
-           style: {
-             gridTemplateColumns: `repeat(${rk?Sk.columnCount:wk}, ${rk?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
-           },
-           children: Array.from({
-             length: Sk.gameCount
-           }, ((kk, ek) => {
-             var ik;
-             return (0, Hk.jsx)(pk, {
-               game: null !== (ik = mk[ek]) && void 0 !== ik ? ik : null,
-               disabled: Pk,
-               showPlaceholder: !bk
+           className: "CharacterPresetsGrid",
+           children: qC.map(((CC, QC) => {
+             const bC = function(CC) {
+               return 0 === Object.keys(CC).length
+             }(CC);
+             return (0, tC.jsxs)("div", {
+               ...(0, xC.U)(),
+               role: bC ? "button" : "link",
+               "data-pad-focusable": !0,
+               className: fC()("CharacterPresetCard SavedOutfitCard", {
+                 SavedOutfitCardEmpty: bC,
+                 CharacterPresetCardActive: !bC && PC(CC, zC)
+               }),
+               onClick: () => {
+                 bC ? dC.save(QC, zC) : ZC(CC)
+               },
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L101` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L206-L207) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L101)

```diff
-         categories: ek
+         locked: zC,
+         children: ZC
```

#### 11. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L105-L110` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L446-L563) · [Before (L105-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L105-L110)

```diff
-         const ik = ek[kk];
-         return (0, Hk.jsx)(yk, {
-           ...ik,
-           landscape: !0
-         }, ik.id)
-       }
+         hC((zC => {
+           const ZC = {
+             ...zC
+           };
+           return delete ZC[CC], ZC
+         }))
+       }
+ 
+       function oz(CC, zC) {
+         let {
+           undoable: ZC
+         } = zC;
+         Object.keys(eC).length > 0 && hC({});
+         const QC = Object.entries(CC).filter((CC => {
+           let [zC, ZC] = CC;
+           return LC.current[zC] !== ZC && !kC(zC, ZC, qz) && !UC(Fz, zC, ZC)
+ ... (102 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L112-L121` → after: `L565-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L565-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L565-L579) · [Before (L112-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L112-L121)

```diff
-         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
-         children: [(0, Hk.jsxs)("div", {
-           className: "CustomGamePlaceUpper",
-           children: [(0, Hk.jsxs)("div", {
-             className: "CustomGamePlaceMain",
-             children: [(0, Hk.jsxs)("div", {
-               className: "CustomGamePlaceRow",
-               children: [ik(0), ik(2)]
-             }), ik(1)]
-           }), ik(4)]
+         className: "CharCustomisationBody",
+         children: [("cape" === ZC || "nameColour" === ZC) && !gC.playerHasRank("super") && (0, tC.jsxs)("div", {
+           className: "CharCustomisationBodyHeader",
+           children: [(0, tC.jsx)(rC.c, {
+             name: "bolt"
+           }), nC("homePage:unlockWithSuperRank"), Wz && (0, tC.jsx)(xC.o, {
+             onClick: () => {
+               (0, JC.n)({
+                 mode: "self",
+                 source: "characterCustomisation",
+                 openItem: "superRank"
+               })
+             },
+             children: nC("general:getItNow")
+           })]
```

#### 13. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L123-L124` → after: `L581-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L581-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L581-L820) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L123-L124)

```diff
-           className: "CustomGamePlaceRow",
-           children: [ik(3), ik(5)]
+           className: "CharCustomisationBodyInner",
+           children: ["characters" === zC && (0, tC.jsxs)("div", {
+             className: "CharCustomisPartSelectorWrapper",
+             children: [!1, (0, tC.jsx)(DC, {
+               wornOutfit: pC(LC.current),
+               onApply: CC => {
+                 oz(CC, {
+                   undoable: !0
+                 })
+               },
+               onOverwrite: (CC, zC) => {
+                 TC({
+                   kind: "slot",
+                   slot: CC,
+                   outfit: zC
+                 })
+ ... (224 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L127-L182` → after: `L823-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L823-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L823-L971) · [Before (L127-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L127-L182)

```diff
-     }
-     const Lk = ["section1", "section2", "section3", "section4", "section5", "section6"],
-       Ck = {
-         section1: {
-           gameCount: 4,
-           columnCount: 2
-         },
-         section2: {
-           gameCount: 6,
-           columnCount: 6
-         },
-         section3: {
-           gameCount: 8,
-           columnCount: 4
-         },
-         section4: {
- ... (40 more removed lines; see GitHub link above)
+     }))
+   },
+   41104: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       CharacterPreview: () => WC
+     });
+     var QC = ZC(48),
+       wC = ZC(2734),
+       bC = ZC(1183),
+       nC = ZC(2534),
+       fC = ZC(34185),
+       oC = ZC(3569),
+       qC = ZC(1056);
+     const FC = .6 * Math.PI,
+       WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
+         let {
+ ... (133 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L184-L190` → after: `L973-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L973-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L973-L1004) · [Before (L184-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L184-L190)

```diff
-       }
-       return (0, Hk.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, Hk.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${nk}/${Uk.largePicture}.png)`
+       })))
+   },
+   36271: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(1840),
+       wC = ZC(1439);
+     const bC = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(CC, zC) {
+         CC !== this.userContext && this.sendHeld(), this.userContext = CC;
+         for (const [QC, wC] of zC) this.pending.set(QC, wC);
+         if (null !== this.timer) return;
+ ... (16 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L192-L213` → after: `L1006-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L1006-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/216.js#L1006-L1020) · [Before (L192-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/216.js#L192-L213)

```diff
-         }), (0, Hk.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: ek(Uk.title)
-         }), (0, Hk.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, Hk.jsx)(mk.e, {
-             onClick: () => (0, Mk.navigatePreserveSearch)("/"),
-             children: ek("homePage:backToGames")
-           })
-         }), !Dk && (0, Hk.jsx)(Yk, {
-           categories: pk
-         }), Dk && (0, Hk.jsx)("div", {
-           className: fk()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
-           children: pk.map((kk => (0, Hk.jsx)(yk, {
-             category: kk.category,
-             title: kk.title,
- ... (6 more removed lines; see GitHub link above)
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), wC.d.updateCosmetics(CC, zC).catch((CC => {
+           console.error("Failed to update cosmetics", CC)
+         }))
+       }
+     };
+ 
+     function nC(CC, zC) {
+       for (const [ZC, QC] of zC) CC.setPlayerCosmetics(ZC, QC);
+       if (null === QC.gameBridge.latest("connectedGame").websocketUrl) bC.save(CC, zC);
+       else
+         for (const [ZC, wC] of zC) QC.gameBridge.send("updateMyCosmetic", {
+           JQ: ZC,
+           IQ: wC
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L5-L74)

```diff
-   39122: (kk, ek, ik) => {
-     kk.exports = fk;
-     var Dk = ik(330);
- 
-     function fk(kk, ek) {
-       if (!(this instanceof fk)) return new fk(kk, ek);
-       var ik = Dk.create();
-       Dk.add(ik, kk, ek), this.base = Dk.min(Dk.create(), kk, ik), this.vec = Dk.clone(ek), this.max = Dk.max(Dk.create(), kk, ik), this.mag = Dk.length(this.vec)
-     }
-     var Sk = fk.prototype;
-     Sk.width = function() {
-       return this.vec[0]
-     }, Sk.height = function() {
-       return this.vec[1]
-     }, Sk.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   36291: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L77` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L8-L14) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L77)

```diff
-       e: () => Sk
+       f: () => RC
+     });
+     var QC = ZC(264),
+       wC = ZC(77);
+     const bC = new(ZC(36294).d)(new URL(ZC.p + ZC.u(3), ZC.b), {
+       name: "blockIconWorker",
+       type: "module"
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L79` → after: `L16-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L16-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L16-L25) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L79)

```diff
-     var Dk = ik(4019);
+     var nC = ZC(1724),
+       fC = ZC(2057);
+     const oC = 1e4,
+       qC = 3e4;
+     let FC = null,
+       WC = null,
+       NC = null,
+       MC = !1,
+       gC = 0;
+     const SC = new Map;
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L83-L155` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L31-L39) · [Before (L83-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L83-L155)

```diff
-       return null !== fk && kk === fk
-     }
- 
-     function bk() {
-       this.oB = !1, this.stopPropagation = !1, this.JB = !1, this.disabled = !1
-     }
-     class rk {
-       constructor(kk, ek) {
-         this.version = "0.7.0";
-         var ik = Object.assign({}, new bk, ek || {});
-         this.element = kk || document, this.oB = !!ik.oB, this.stopPropagation = !!ik.stopPropagation, this.JB = !!ik.JB, this.disabled = !!ik.disabled, this.filterEvents = (kk, ek) => !0, this.ignoreEvent = kk => !1, this.down = new Dk.EventEmitter, this.up = new Dk.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           Wkk: 0,
-           tkk: 0,
-           Xkk: 0
- ... (57 more removed lines; see GitHub link above)
+       const zC = new Promise(((zC, ZC) => {
+         const QC = new Image;
+         QC.crossOrigin = "anonymous", QC.fetchPriority = "high", QC.onload = () => {
+           zC(QC)
+         }, QC.onerror = () => {
+           ZC(new Error(`A block icon's texture did not load: ${CC.slice(0,100)}`))
+         }, QC.src = CC
+       }));
+       return (0, fC.f)(zC)
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L159-L179` → after: `L43-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L43-L46) · [Before (L159-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L159-L179)

```diff
-       let ek = !1;
-       for (let ik = 0; ik < kk.touches.length; ++ik)
-         if (kk.touches[ik].identifier === xk) {
-           ek = !0;
-           break
-         } if (!ek) {
-         const ek = kk.changedTouches[0];
-         Mk = ek.clientX, Kk = ek.clientY, xk = ek.identifier
-       }
-     }
- 
-     function Hk(kk, ek) {
-       for (var ik = ek.changedTouches, Dk = 0; Dk < ik.length; ++Dk) ik[Dk].identifier === xk && (xk = null)
-     }
- 
-     function wk(kk, ek, ik) {
- ... (5 more removed lines; see GitHub link above)
+       var zC, ZC;
+       MC || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${CC}`), MC = !0, null === (zC = FC) || void 0 === zC || zC.terminate(), FC = null, WC = null, PC.clear(), GC.clear();
+       for (const QC of SC.values()) QC(null);
+       SC.clear(), null === (ZC = pC) || void 0 === ZC || ZC()
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L182-L231` → after: `L49-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L49-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L49-L81) · [Before (L182-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L182-L231)

```diff
-     function lk(kk, ek, ik) {
-       if (!kk.ignoreEvent(ik)) try {
-         jk(kk, ik)
-       } finally {
-         ! function(kk, ek, ik) {
-           if ("pointerId" in ik)
-             if (ek) {
-               if (null !== kk._touches.currID) return;
-               kk._touches.currID = ik.pointerId
-             } else {
-               if (kk._touches.currID !== ik.pointerId) return;
-               kk._touches.currID = null
-             } var Dk = "button" in ik ? ik.button + 1 : 1;
-           dk("Mouse" + Dk, ek, kk, ik)
-         }(kk, ek, ik)
-       }
- ... (34 more removed lines; see GitHub link above)
+     function xC() {
+       return NC ??= async function() {
+         if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
+         if ("page" === QC.d.ios_icon_worker_v1 && (0, wC.isWebKit)()) return;
+         try {
+           FC = await async function() {
+             return await bC.ready(), bC.start()
+           }()
+         } catch (fC) {
+           return void AC(`did not start (${String(fC)})`)
+         }
+         let CC = () => {};
+         const zC = new Promise((zC => {
+           CC = zC
+         }));
+         FC.onmessage = zC => {
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L234-L235` → after: `L84-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L84-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L84-L94) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L234-L235)

```diff
-     function Yk(kk, ek) {
-       if (!kk.JB) return ek.preventDefault(), !1
+     function JC() {
+       if (null !== pC || 0 === SC.size) return;
+       const CC = new Promise((CC => {
+           pC = CC
+         })),
+         zC = `did not answer in ${oC/1e3} s`;
+       (0, nC.n)(CC, oC, zC).then((() => {
+         pC = null, JC()
+       }), (() => {
+         pC = null, AC(zC)
+       }))
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L249` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L98-L99) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L249)

```diff
-       return !!kk[Lk[ek]] || ("AltRight" === ek || "ControlLeft" === ek) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       CC.postMessage(zC, ZC)
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L252-L254` → after: `L102-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L102-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L102-L108) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L252-L254)

```diff
-     function Ak(kk, ek) {
-       for (var ik in kk._modifiersHeldThroughBlur = {}, Lk) kk._keyStates[ik] && (kk._modifiersHeldThroughBlur[ik] = !0);
-       ek && ek.isTrusted && function() {
+     function iC(CC, zC, ZC, QC) {
+       let wC = zC.get(ZC);
+       return void 0 === wC && (wC = QC().then((async zC => {
+         let {
+           image: ZC,
+           request: QC
+         } = zC;
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L256` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L110-L111) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L256)

```diff
-           return window.self !== window.top
+           const zC = await createImageBitmap(ZC);
+           IC(CC, QC(zC), [zC])
```

#### 11. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L258` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L113) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L258)

```diff
-           return !0
+           AC(`could not take an image (${String(wC)})`)
```

#### 12. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L260-L269` → after: `L115-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L115-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L115-L127) · [Before (L260-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L260-L269)

```diff
-       }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var ek in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[ek] && !/^Mouse\d/.test(ek) && sk(kk, ek)
-       }), 0))
-     }
- 
-     function jk(kk, ek) {
-       var ik = kk._modifiersHeldThroughBlur;
-       if (ik && ek.isTrusted && document.hasFocus())
-         for (var Dk in ik) delete ik[Dk], kk._keyStates[Dk] && Dk !== ek.code && (Ck(ek, Dk) || sk(kk, Dk))
+       })), wC.catch((() => {
+         zC.get(ZC) === wC && zC.delete(ZC)
+       })), zC.set(ZC, wC)), wC
+     }
+     async function vC(CC, zC) {
+       xC();
+       const ZC = WC;
+       if (null === ZC) return null;
+       if (await CC(ZC), WC !== ZC) return null;
+       const QC = ++gC;
+       return new Promise((CC => {
+         SC.set(QC, CC), IC(ZC, zC(QC)), JC()
+       }))
```

#### 13. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L272-L284` → after: `L130-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L130-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L130-L146) · [Before (L272-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L272-L284)

```diff
-     function sk(kk, ek) {
-       const ik = {
-           code: ek,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         Dk = fk;
-       fk = ik;
-       try {
-         dk(ek, !1, kk, ik)
-       } finally {
-         fk = Dk
-       }
+     function eC(CC, zC, ZC) {
+       return vC((zC => Promise.all([CC.top, CC.left, CC.right].map((CC => function(CC, zC) {
+         return iC(CC, PC, zC, (async () => ({
+           image: await RC(zC),
+           request: CC => ({
+             type: "texture",
+             url: zC,
+             bitmap: CC
+           })
+         })))
+       }(zC, CC))))), (QC => ({
+         type: "draw",
+         id: QC,
+         ...CC,
+         size: zC,
+         outlineWidth: ZC
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L288-L300` → after: `L150-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L150-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L150-L163) · [Before (L288-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L288-L300)

```diff
-       var fk = ik._keyBindmap[kk];
-       fk && (Vk(ik._keyStates[kk], ek) && (ik._keyStates[kk] = ek, fk.forEach((kk => {
-         (!ik.filterEvents || ik.filterEvents(Dk, kk)) && function(kk, ek, ik, Dk) {
-           var fk = ek ? ik.pressCount : ik.releaseCount;
-           fk[kk] = (fk[kk] || 0) + 1;
-           var Sk = ik._bindPressCount[kk] || 0;
-           (Sk += ek ? 1 : -1) < 0 && (Sk = 0);
-           ik._bindPressCount[kk] = Sk;
-           var bk = ik.state[kk];
-           if (Vk(bk, Sk)) {
-             ik.state[kk] = Sk > 0;
-             var rk = ek ? ik.down : ik.up;
-             ik.disabled || rk.emit(kk, Dk)
+       return vC((ZC => function(CC, zC, ZC) {
+         return iC(CC, GC, zC, (async () => {
+           const {
+             texture: CC,
+             ...QC
+           } = await ZC();
+           return {
+             image: await RC(CC),
+             request: CC => ({
+               type: "model",
+               name: zC,
+               bitmap: CC,
+               geometry: QC
+             })
```

#### 15. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L302-L303` → after: `L165-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L165-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L165-L172) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L302-L303)

```diff
-         }(kk, ek, ik, Dk)
-       }))), "button" in Dk || (ik.oB && !Dk.defaultPrevented && Dk.preventDefault(), ik.stopPropagation && Dk.stopPropagation()))
+         }))
+       }(ZC, CC, zC)), (zC => ({
+         type: "drawModel",
+         id: zC,
+         name: CC,
+         size: ZC,
+         outlineWidth: QC
+       })))
```

#### 16. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L407` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L175) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L407)

```diff
-   39112: (kk, ek, ik) => {
+   36288: (CC, zC, ZC) => {
```

#### 17. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L409` → after: `L177-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L177-L181) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L409)

```diff
-       d: () => Dk
+       c: () => QC,
+       g: () => oC,
+       h: () => nC,
+       j: () => NC,
+       k: () => qC
```

#### 18. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L411-L489` → after: `L183-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L183-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L183-L192) · [Before (L411-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L411-L489)

```diff
-     class Dk {
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.ZI = !1, this.JI = !1, this.uF = 30, this.pI = 0, this.Yz = 100, this.Gw = !1, this.fullscreen = !1, this.Iy = function(kk) {}, this.FQ = function(kk, ek, ik) {}, this.Av = function() {}, this.Ay = function() {}, this.EQ = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(kk) {
-             if ("loading" === document.readyState) {
-               var ek = () => {
-                 document.removeEventListener("readystatechange", ek), kk()
-               };
-               document.addEventListener("readystatechange", ek)
-             } else setTimeout(kk, 0)
-           }((() => {
-             ! function(kk) {
-               var ek = kk._data,
-                 ik = ek.nowObject.now();
- ... (63 more removed lines; see GitHub link above)
+     const QC = {
+         across: Math.SQRT1_2,
+         down: Math.SQRT1_2 / 2,
+         up: Math.sqrt(3) / 2
+       },
+       wC = .6,
+       bC = {
+         width: 2 * QC.across,
+         height: 2 * QC.down + QC.up
+       };
```

#### 19. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L491-L632` → after: `L194-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L194-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L194-L203) · [Before (L491-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L491-L632)

```diff
-     function rk(kk) {
-       for (var ek = kk._data, ik = 1e3 / kk.uF, Dk = ek.nowObject.now() + bk, fk = 0; ek.nowObject.now() >= ek.lastTickStarted + ik && ek.nowObject.now() < Dk && ++fk <= Sk;) kk.Iy(ik), ek.lastTickStarted += ik;
-       var rk = 5 * (ik + 5),
-         Pk = ek.nowObject.now();
-       if (Pk - ek.lastTickStarted > rk)
-         for (; Pk >= ek.lastTickStarted + ik;) ek.lastTickStarted += ik
-     }
-   },
-   36263: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk
-     });
-     var Dk = ik(60);
-     const fk = Dk.useLayoutEffect;
-     const Sk = function(kk) {
-       var ek = (0, Dk.useRef)(kk);
- ... (126 more removed lines; see GitHub link above)
+     function nC(CC, zC) {
+       const ZC = zC > 0 ? zC + 1 : 0,
+         nC = CC * wC - zC / QC.across;
+       return Math.max(0, Math.min(nC, (CC - 2 * ZC) / bC.height))
+     }
+     const fC = [15, 15, 15],
+       oC = {
+         top: 1,
+         left: .85,
+         right: .7
```

#### 20. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L634-L653` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L205) · [Before (L634-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L634-L653)

```diff
-     for (ek = 58; ek < 65; ++ek) bk[ek] = String.fromCharCode(ek);
-     for (ek = 48; ek < 58; ++ek) bk[ek] = ek - 48 + "";
-     for (ek = 65; ek < 91; ++ek) bk[ek] = String.fromCharCode(ek);
-     for (ek = 96; ek < 106; ++ek) bk[ek] = "<num-" + (ek - 96) + ">";
-     for (ek = 112; ek < 136; ++ek) bk[ek] = "F" + (ek - 111)
-   },
-   38565: (kk, ek, ik) => {
-     function Dk(kk, ek, ik, Dk, fk) {
-       var Sk = {};
-       return Object.keys(Dk).forEach((function(kk) {
-         Sk[kk] = Dk[kk]
-       })), Sk.enumerable = !!Sk.enumerable, Sk.configurable = !!Sk.configurable, ("value" in Sk || Sk.initializer) && (Sk.writable = !0), Sk = ik.slice().reverse().reduce((function(ik, Dk) {
-         return Dk(kk, ek, ik) || ik
-       }), Sk), fk && void 0 !== Sk.initializer && (Sk.value = Sk.initializer ? Sk.initializer.call(fk) : void 0, Sk.initializer = void 0), void 0 === Sk.initializer && (Object.defineProperty(kk, ek, Sk), Sk = null), Sk
-     }
-     ik.d(ek, {
- ... (4 more removed lines; see GitHub link above)
+ 
```

#### 21. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L655-L704` → after: `L207-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L207-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L207-L220) · [Before (L655-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L655-L704)

```diff
-       ik && Object.defineProperty(kk, ek, {
-         enumerable: ik.enumerable,
-         configurable: ik.configurable,
-         writable: ik.writable,
-         value: ik.initializer ? ik.initializer.call(Dk) : void 0
-       })
-     }
-     ik.d(ek, {
-       e: () => Dk
-     })
-   },
-   38265: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk
-     });
-     var Dk = ik(38272);
- ... (34 more removed lines; see GitHub link above)
+       const {
+         vertices: wC,
+         uvs: fC,
+         indices: oC,
+         shades: qC
+       } = CC, FC = function(CC, zC) {
+         const ZC = nC(CC, zC),
+           QC = bC.width * ZC,
+           wC = bC.height * ZC;
+         return {
+           left: (CC - QC) / 2,
+           top: (CC - wC) / 2,
+           width: QC,
+           height: wC
```

#### 22. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L706-L745` → after: `L222-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L222-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L222-L245) · [Before (L706-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L706-L745)

```diff
-       }
-     }
-   },
-   38294: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => fk,
-       h: () => Sk,
-       l: () => bk,
-       m: () => rk
-     });
-     var Dk = ik(36874);
-     class fk {
-       constructor(kk, ek, ik) {
-         this.gradient = kk, this.color1 = ek, this.color2 = ik
-       }
-       getColorToRef(kk) {
- ... (24 more removed lines; see GitHub link above)
+       }(ZC, QC), WC = new Float32Array(wC.length);
+       for (let bC = 0; bC < wC.length; bC += 3) WC[bC] = FC.left + wC[bC] * FC.width, WC[bC + 1] = FC.top + wC[bC + 1] * FC.height, WC[bC + 2] = wC[bC + 2];
+       const MC = new Float32Array(ZC * ZC).fill(-1 / 0),
+         gC = new Uint8ClampedArray(ZC * ZC * 4),
+         SC = 255 * CC.alphaCutoff;
+       for (let bC = 0; bC < oC.length; bC += 3) {
+         const [CC, QC, wC] = [oC[bC], oC[bC + 1], oC[bC + 2]], [nC, FC, NC] = [3 * CC, 3 * QC, 3 * wC], [pC, PC, GC, RC, AC, xC] = [WC[nC], WC[nC + 1], WC[FC], WC[FC + 1], WC[NC], WC[NC + 1]], JC = (GC - pC) * (xC - PC) - (AC - pC) * (RC - PC);
+         if (Math.abs(JC) < 1e-9) continue;
+         const IC = qC[bC / 3],
+           [iC, vC, eC, hC, KC, YC] = [fC[2 * CC], fC[2 * CC + 1], fC[2 * QC], fC[2 * QC + 1], fC[2 * wC], fC[2 * wC + 1]],
+           dC = Math.max(0, Math.floor(Math.min(pC, GC, AC))),
+           mC = Math.min(ZC - 1, Math.ceil(Math.max(pC, GC, AC))),
+           HC = Math.max(0, Math.floor(Math.min(PC, RC, xC))),
+           EC = Math.min(ZC - 1, Math.ceil(Math.max(PC, RC, xC)));
+         for (let bC = HC; bC <= EC; bC++)
+           for (let CC = dC; CC <= mC; CC++) {
+ ... (8 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L752-L806` → after: `L250-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L250-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L250-L268) · [Before (L752-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L752-L806)

```diff
-   },
-   38272: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Dk
-     });
-     class Dk {
-       static _CheckLimit(kk, ek) {
-         let ik = Dk._LogLimitOutputs[kk];
-         return ik ? ik.current++ : (ik = {
-           limit: ek,
-           current: 1
-         }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
-       }
-       static _GenerateLimitMessage(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ik = Dk._LogLimitOutputs[kk];
- ... (39 more removed lines; see GitHub link above)
+     let FC = NaN,
+       WC = new Int32Array(0);
+ 
+     function NC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zC => 0 !== CC[4 * zC + 3];
+       const wC = new Uint8Array(zC * zC);
+       for (let fC = 0; fC < zC * zC; fC++) wC[fC] = QC(fC) ? 1 : 0;
+       const bC = (CC, ZC) => CC >= 0 && ZC >= 0 && CC < zC && ZC < zC && 0 === wC[ZC * zC + CC],
+         nC = new Float32Array(zC * zC).fill(1 / 0),
+         oC = function(CC) {
+           if (CC !== FC) {
+             const zC = Math.ceil(CC + 1),
+               ZC = [];
+             for (let QC = -zC; QC <= zC; QC++)
+               for (let wC = -zC; wC <= zC; wC++) {
+                 const zC = wC * wC + QC * QC;
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L808` → after: `L270-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L270-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L270-L284) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L808)

```diff
-       }
+           return WC
+         }(ZC);
+       for (let fC = 0; fC < zC; fC++)
+         for (let CC = 0; CC < zC; CC++) {
+           if (1 === wC[fC * zC + CC] && (bC(CC - 1, fC) || bC(CC + 1, fC) || bC(CC, fC - 1) || bC(CC, fC + 1)))
+             for (let ZC = 0; ZC < oC.length; ZC += 3) {
+               const QC = CC + oC[ZC],
+                 wC = fC + oC[ZC + 1];
+               if (QC >= 0 && wC >= 0 && QC < zC && wC < zC) {
+                 const CC = wC * zC + QC;
+                 nC[CC] = Math.min(nC[CC], oC[ZC + 2])
+               }
+             }
+         }
+       for (let qC = 0; qC < zC * zC; qC++) 1 !== wC[qC] && nC[qC] !== 1 / 0 && (CC.set(fC, 4 * qC), CC[4 * qC + 3] = Math.round(255 * Math.min(1, ZC + 1 - Math.sqrt(nC[qC]))))
```

#### 25. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L824` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L287) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L824)

```diff
-   38296: (kk, ek, ik) => {
+   36294: (CC, zC, ZC) => {
```

#### 26. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L828-L881` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L291-L298) · [Before (L828-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L828-L881)

```diff
-     var Dk = ik(36698),
-       fk = ik(36729),
-       Sk = ik(38265);
-     class bk {
-       constructor() {
-         this.direction1 = new Dk.o(0, 1, 0), this.direction2 = new Dk.o(0, 1, 0), this.minEmitBox = new Dk.o(-.5, -.5, -.5), this.maxEmitBox = new Dk.o(.5, .5, .5)
-       }
-       startDirectionFunction(kk, ek, ik, Sk) {
-         const bk = (0, fk.RandomRange)(this.direction1.x, this.direction2.x),
-           rk = (0, fk.RandomRange)(this.direction1.y, this.direction2.y),
-           Pk = (0, fk.RandomRange)(this.direction1.z, this.direction2.z);
-         if (Sk) return ek.x = bk, ek.y = rk, void(ek.z = Pk);
-         Dk.o.TransformNormalFromFloatsToRef(bk, rk, Pk, kk, ek)
-       }
-       startPositionFunction(kk, ek, ik, Sk) {
-         const bk = (0, fk.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
- ... (38 more removed lines; see GitHub link above)
+     const QC = {
+       wait: function(CC) {
+         return new Promise((zC => {
+           setTimeout(zC, CC)
+         }))
+       },
+       stallMs: 2e4
+     };
```

#### 27. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L883-L958` → after: `L300-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L300-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L300-L310) · [Before (L883-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L883-L958)

```diff
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = kk, this.height = ek, this.radiusRange = ik, this.directionRandomizer = fk, this._tempVector = Dk.o.Zero()
-       }
-       startDirectionFunction(kk, ek, ik, Sk, bk) {
-         ik.position.subtractToRef(kk.getTranslation(), this._tempVector), this._tempVector.normalize(), Dk.o.TransformNormalToRef(this._tempVector, bk, this._tempVector);
-         const rk = (0, fk.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
-         let Pk = Math.atan2(this._tempVector.x, this._tempVector.z);
-         Pk += (0, fk.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = rk, this._tempVector.x = Math.sin(Pk), this._tempVector.z = Math.cos(Pk), this._tempVector.normalize(), Sk ? ek.Fs(this._tempVector) : Dk.o.TransformNormalFromFloatsToRef … [truncated]
-       }
-       startPositionFunction(kk, ek, ik, Sk) {
-         const bk = (0, fk.RandomRange)(-this.height / 2, this.height / 2),
-           rk = (0, fk.RandomRange)(0, 2 * Math.PI),
- ... (60 more removed lines; see GitHub link above)
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QC;
+         this.url = CC, this.options = zC, this.timing = ZC, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = CC
+       }
+       ready() {
+         if (null === this.fetched) {
+           const CC = new AbortController;
+           this.fetchAbort = CC, this.fetched = this.fetchWithRetries(CC.signal).then((zC => (this.fetchAbort === CC && (this.fetchAbort = null), zC)))
+         }
+         return this.fetched
```

#### 28. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L960-L962` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L312-L313) · [Before (L960-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L960-L962)

```diff
-       serialize() {
-         const kk = super.serialize();
-         return kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk
+       cancel() {
+         null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
```

#### 29. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L964-L965` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L315-L316) · [Before (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L964-L965)

```diff
-       parse(kk) {
-         super.parse(kk), Dk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Dk.o.FromArrayToRef(kk.direction2, 0, this.direction2)
+       forgetFailedFetch() {
+         this.fetched = null
```

#### 30. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L967-L1019` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L318-L319) · [Before (L967-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L967-L1019)

```diff
-     }
-   },
-   38368: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Kk
-     });
-     const Dk = .5 * (Math.sqrt(3) - 1),
-       fk = (3 - Math.sqrt(3)) / 6,
-       Sk = 1 / 3,
-       bk = 1 / 6,
-       rk = (Math.sqrt(5) - 1) / 4,
-       Pk = (5 - Math.sqrt(5)) / 20,
-       mk = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       Mk = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const Kk = class {
-       constructor() {
- ... (37 more removed lines; see GitHub link above)
+       start() {
+         return new Worker(this.scriptUrl, this.options)
```

#### 31. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L1021-L1054` → after: `L321-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L321-L326) · [Before (L1021-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L1021-L1054)

```diff
-       noise2D(kk, ek) {
-         const ik = this.permMod12,
-           Sk = this.perm;
-         let bk = 0,
-           rk = 0,
-           Pk = 0;
-         const Mk = (kk + ek) * Dk,
-           Kk = Math.floor(kk + Mk),
-           xk = Math.floor(ek + Mk),
-           nk = (Kk + xk) * fk,
-           Uk = kk - (Kk - nk),
-           Hk = ek - (xk - nk);
-         let wk, lk;
-         Uk > Hk ? (wk = 1, lk = 0) : (wk = 0, lk = 1);
-         const pk = Uk - wk + fk,
-           yk = Hk - lk + fk,
- ... (18 more removed lines; see GitHub link above)
+       async fetchWithRetries(CC) {
+         for (let zC = 0;; zC++) {
+           const ZC = new URL(this.url);
+           if (zC > 0 && ZC.searchParams.set("cache-bust", `${Date.now()}-${zC}`), await this.fetchWhole(ZC, CC)) return this.scriptUrl = ZC, !0;
+           if (zC >= 3 || CC.aborted) return !1;
+           if (await this.timing.wait(500 * 2 ** zC), CC.aborted) return !1
```

#### 32. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L1058-L1188` → after: `L329-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L329-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/217.js#L329-L361) · [Before (L1058-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/217.js#L1058-L1188)

```diff
-       noise3D(kk, ek, ik) {
-         const Dk = this.permMod12,
-           fk = this.perm;
-         let rk, Pk, Mk, Kk;
-         const xk = (kk + ek + ik) * Sk,
-           nk = Math.floor(kk + xk),
-           Uk = Math.floor(ek + xk),
-           Hk = Math.floor(ik + xk),
-           wk = (nk + Uk + Hk) * bk,
-           lk = kk - (nk - wk),
-           pk = ek - (Uk - wk),
-           yk = ik - (Hk - wk);
-         let Yk, Lk, Ck, Ak, jk, sk;
-         lk >= pk ? pk >= yk ? (Yk = 1, Lk = 0, Ck = 0, Ak = 1, jk = 1, sk = 0) : lk >= yk ? (Yk = 1, Lk = 0, Ck = 0, Ak = 1, jk = 0, sk = 1) : (Yk = 0, Lk = 0, Ck = 1, Ak = 1, jk = 0, sk = 1) : pk < yk ? (Yk = 0, Lk = 0, Ck = 1, Ak = 0, jk = 1, sk = 1) : lk < yk ? (Yk = 0, Lk = 1 … [truncated]
-         const dk = lk - Yk + bk,
-           Vk = pk - Lk + bk,
- ... (115 more removed lines; see GitHub link above)
+       async fetchWhole(CC, zC) {
+         const ZC = new AbortController;
+         let QC;
+         const wC = () => {
+             clearTimeout(QC), QC = setTimeout((() => {
+               ZC.abort()
+             }), this.timing.stallMs)
+           },
+           bC = () => {
+             ZC.abort()
+           };
+         zC.addEventListener("abort", bC, {
+           once: !0
+         }), wC();
+         try {
+           var nC;
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L1629` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L4) · [Before (L4-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L4-L1629)

```diff
-   40669: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       LobbyManageView: () => Ae
-     });
-     var Dk = ik(60),
-       fk = ik(1432),
-       Sk = ik(36608),
-       bk = ik(2432),
-       rk = ik(2438),
-       Pk = ik(2414),
-       mk = ik(36101);
- 
-     function Mk() {
-       const [kk, ek] = (0, Dk.useState)(new Map);
-       return {
-         get: ek => kk.get(ek),
- ... (1610 more removed lines; see GitHub link above)
+   38923: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1631` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L6) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1631)

```diff
-       c: () => Mk,
+       e: () => bC,
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1634-L1734` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L9-L10) · [Before (L1634-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1634-L1734)

```diff
-     var Dk = ik(1432),
-       fk = ik(1911),
-       Sk = ik(1893);
-     const bk = 1e4;
-     let rk = 0;
- 
-     function Pk(kk) {
-       const ek = ++rk;
-       return new Promise((ik => {
-         const rk = ek => {
-             Pk(), clearTimeout(mk), !1 === (null === ek || void 0 === ek ? void 0 : ek.ok) && (0, Dk.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: kk.type
-             }), ik(ek)
-           },
-           Pk = fk.c.subscribe("lobbyManage", (kk => {
- ... (85 more removed lines; see GitHub link above)
+     var QC = ZC(28);
+     let wC = !1;
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1736-L1758` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L12-L13) · [Before (L1736-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1736-L1758)

```diff
-     function mk(kk, ek) {
-       var ik, bk;
-       const rk = Sk.d.getSocialState().friends.find((kk => kk.name.toLowerCase() === ek.toLowerCase())),
-         Pk = fk.gameBridge.latest("players").byId[kk],
-         mk = void 0 !== Pk && Pk.name === ek,
-         Mk = mk && null !== (ik = Pk.cosmetics) && void 0 !== ik ? ik : void 0,
-         Kk = rk && Mk ? {
-           ...rk,
-           cosmetics: Mk
-         } : rk;
-       return {
-         playerSocialPreview: null !== Kk && void 0 !== Kk ? Kk : {
-           isError: !1,
-           name: ek,
-           ranks: mk ? [...Pk.ranks] : [],
-           cosmetics: null !== Mk && void 0 !== Mk ? Mk : {},
- ... (7 more removed lines; see GitHub link above)
+     function bC() {
+       return wC
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1775-L1832` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L17) · [Before (L1775-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1775-L1832)

```diff
-       let {
-         label: ek,
-         icon: ik,
-         placeholder: fk,
-         onSubmit: Kk
-       } = kk;
-       const xk = (0, Dk.useRef)(null),
-         [nk, Uk] = (0, Dk.useState)(""),
-         [Hk, wk] = (0, Dk.useState)("Enter"),
-         [lk, pk] = (0, Dk.useState)(null);
-       (0, Dk.useEffect)((() => {
-         if ("Success" !== Hk && "Error" !== Hk) return;
-         const kk = setTimeout((() => {
-           "Success" === Hk && xk.current && (xk.current.value = "", Uk("")), wk("Enter")
-         }), "Success" === Hk ? 1e3 : 4e3);
-         return () => {
- ... (42 more removed lines; see GitHub link above)
+       wC !== CC && (wC = CC, QC.o.bp("replayViewer|videoExportChanged"))
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1835` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L20) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1835)

```diff
-   36296: (kk, ek, ik) => {
+   36346: (CC, zC, ZC) => {
```

#### 7. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1837` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L22-L25) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1837)

```diff
-       c: () => Kk
+       d: () => NC,
+       h: () => FC,
+       j: () => MC,
+       k: () => WC
```

#### 8. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1839-L1844` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L27-L30) · [Before (L1839-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1839-L1844)

```diff
-     var Dk = ik(60),
-       fk = ik(1021),
-       Sk = ik.n(fk),
-       bk = ik(1172),
-       rk = ik(1033),
-       Pk = ik(1066);
+     var QC = ZC(326),
+       wC = ZC(622),
+       bC = ZC(630),
+       nC = ZC(38);
```

#### 9. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1846-L1849` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L32-L34) · [Before (L1846-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1846-L1849)

```diff
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
```

#### 10. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1851` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L36-L37) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1851)

```diff
-       Mk = ["unlisted", "public", "whitelist", "private"];
+       oC = "playSessionGameNameWithVariation",
+       qC = "wasMatchmakePlayer";
```

#### 11. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1853-L1904` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L39-L41) · [Before (L1853-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1853-L1904)

```diff
-     function Kk(kk) {
-       let {
-         visibility: ek,
-         onPick: ik
-       } = kk;
-       const {
-         t: fk
-       } = (0, bk.D)(), Kk = (0, Dk.useRef)([]);
-       return (0, Pk.jsx)("div", {
-         className: "WorldSocialTiles",
-         role: "group",
-         "aria-label": fk("worldSocial:whoCanJoin"),
-         children: Mk.map(((kk, Dk) => {
-           const bk = kk === ek;
-           return (0, Pk.jsxs)("button", {
-             ref: kk => {
- ... (36 more removed lines; see GitHub link above)
+     function FC() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
+       (0, bC.g)(CC, fC)
```

#### 12. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1916-L1953` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L44-L45) · [Before (L1916-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1916-L1953)

```diff
-     function rk(kk) {
-       let {
-         Px: ek,
-         children: ik,
-         ...rk
-       } = kk;
-       const {
-         t: Pk
-       } = (0, Dk.D)();
-       return (0, bk.jsx)("div", {
-         className: "WhitelistTickRow",
-         onClick: () => {
-           ek.onChange(!ek.on)
-         },
-         children: (0, bk.jsx)(fk.i, {
-           ...rk,
- ... (22 more removed lines; see GitHub link above)
+     function WC() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).setItem(qC, !0)
```

#### 13. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1972-L2030` → after: `L48-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L48-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L48-L73) · [Before (L1972-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L1972-L2030)

```diff
-     function Uk(kk) {
-       let {
-         worldCode: ek,
-         message: ik
-       } = kk;
-       const {
-         t: Uk
-       } = (0, fk.D)(), {
-         isTouchScreen: Hk
-       } = (0, rk.n)(["isTouchScreen"]), wk = bk.featureFlags.canUseInviteLinks, lk = (0, Mk.h)(wk && null === ik), [pk, yk] = (0, mk.i)(), Yk = (0, Dk.useRef)(null);
-       if (null !== ik) return (0, nk.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, nk.jsx)(xk.d, {
-           name: "lock"
-         }), (0, nk.jsx)("span", {
-           children: ik
- ... (43 more removed lines; see GitHub link above)
+     function NC() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
+       return (0, bC.d)(CC, fC)
+     }
+ 
+     function MC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.k;
+       const ZC = (0, bC.d)(zC, fC),
+         FC = function(CC) {
+           const zC = CC.getItem(oC);
+           return "string" !== typeof zC ? null : zC
+         }(zC),
+         WC = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).getItem(qC)
+         }(zC);
+       let NC;
+ ... (10 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2033` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L76) · [Before (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2033)

```diff
-   36305: (kk, ek, ik) => {
+   40748: (CC, zC, ZC) => {
```

#### 15. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2035-L2037` → after: `L78-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L78-L80) · [Before (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2035-L2037)

```diff
-       b: () => nk,
-       c: () => xk,
-       d: () => Kk
+       e: () => nC,
+       f: () => bC,
+       h: () => fC
```

#### 16. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2039-L2046` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L82-L83) · [Before (L2039-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2039-L2046)

```diff
-     var Dk = ik(581),
-       fk = ik(1172),
-       Sk = ik(1617),
-       bk = ik(2589),
-       rk = ik(2540),
-       Pk = ik(1410),
-       mk = ik(36312),
-       Mk = ik(1066);
+     let QC = null,
+       wC = null;
```

#### 17. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2049-L2058` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L86-L87) · [Before (L2049-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2049-L2058)

```diff
-       var ik;
-       return {
-         isError: !1,
-         name: kk,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== ek && void 0 !== ek ? ek : {},
-         nameColour: null !== (ik = null === ek || void 0 === ek ? void 0 : ek.nameColour) && void 0 !== ik ? ik : Dk.b,
-         location: {
-           status: "offline"
-         }
+       return QC = CC, wC = null, fC(zC), () => {
+         QC === CC && (QC = null, wC = null)
```

#### 18. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2062-L2105` → after: `L91-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L91-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L91-L94) · [Before (L2062-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2062-L2105)

```diff
-     function xk(kk) {
-       let {
-         player: ek,
-         isFriend: ik = !1,
-         status: Dk,
-         showLocation: Pk = void 0 === Dk,
-         Px: Kk,
-         onSendFriendRequest: xk,
-         actions: nk,
-         zIndex: Uk
-       } = kk;
-       const {
-         t: Hk
-       } = (0, fk.D)();
-       let wk = Dk;
-       null !== Kk && void 0 !== Kk && Kk.on && (wk = (0, Mk.jsxs)(Mk.Fragment, {
- ... (28 more removed lines; see GitHub link above)
+     function nC() {
+       return null === wC ? null : {
+         ...wC
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2109-L2133` → after: `L98-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L98-L100) · [Before (L2109-L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2109-L2133)

```diff
-       let {
-         row: ek,
-         Px: ik,
-         canInvite: Dk,
-         invited: Sk,
-         onInvite: bk,
-         zIndex: rk
-       } = kk;
-       const {
-         t: mk
-       } = (0, fk.D)(), Kk = "online" === ek.place ? Pk.f : Pk.j;
-       return (0, Mk.jsx)(xk, {
-         player: ek.friend,
-         isFriend: !0,
-         status: "here" === ek.place ? mk("worldSocial:inThisWorld") : void 0,
-         showLocation: !0,
- ... (9 more removed lines; see GitHub link above)
+       var zC;
+       null !== (zC = QC) && void 0 !== zC && zC(CC) && (wC = {
+         ...CC
```

#### 20. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2137` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L104) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2137)

```diff
-   36270: (kk, ek, ik) => {
+   40756: (CC, zC, ZC) => {
```

#### 21. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2139-L2141` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L106-L107) · [Before (L2139-L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2139-L2141)

```diff
-       b: () => Pk,
-       e: () => bk,
-       i: () => mk
+       d: () => wC,
+       h: () => bC
```

#### 22. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2143-L2157` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L109) · [Before (L2143-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2143-L2157)

```diff
-     var Dk = ik(60),
-       fk = ik(4528),
-       Sk = ik(1817);
- 
-     function bk(kk) {
-       const ek = {
-         lobbyName: kk,
-         answer: null,
-         response: fk.d.getSocialSettings(kk)
-       };
-       return ek.response.then((kk => {
-         ek.answer = kk
-       })), ek
-     }
-     const rk = new Map;
+     let QC = null;
```

#### 23. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2159-L2160` → after: `L111-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L111-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L111-L115) · [Before (L2159-L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2159-L2160)

```diff
-     function Pk(kk) {
-       rk.set(kk.lobbyName, kk)
+     function wC(CC, zC) {
+       QC = {
+         conn: CC,
+         reason: zC
+       }
```

#### 24. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2164-L2224` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L119-L121) · [Before (L2164-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2164-L2224)

```diff
-       const [ek] = (0, Dk.useState)((() => function(kk) {
-         var ek;
-         const ik = null !== (ek = rk.get(kk)) && void 0 !== ek ? ek : null;
-         return null !== ik && void 0 !== ik && ik.answer && "error" in ik.answer ? null : ik
-       }(kk))), [ik, bk] = (0, Dk.useState)((() => null !== ek && void 0 !== ek && ek.answer && "settings" in ek.answer ? ek.answer.settings : null)), [Pk, mk] = (0, Dk.useState)(!0), [Mk, Kk] = (0, Dk.useState)(null !== ik), xk = (0, Dk.useRef)(ik);
-       xk.current = ik;
-       const nk = (0, Dk.useRef)(0),
-         Uk = (0, Dk.useRef)(0),
-         Hk = (0, Dk.useRef)(!1),
-         wk = (0, Dk.useRef)(!0),
-         lk = (0, Dk.useCallback)((async ek => {
-           const ik = ++nk.current,
-             Dk = await (null !== ek && void 0 !== ek ? ek : fk.d.getSocialSettings(kk));
-           wk.current && ik === nk.current && (Kk(!0), mk(!1), "error" in Dk || bk(Dk.settings))
-         }), [kk]),
-         pk = (0, Dk.useCallback)((() => {
- ... (45 more removed lines; see GitHub link above)
+       var zC;
+       const ZC = (null === (zC = QC) || void 0 === zC ? void 0 : zC.conn) === CC ? QC.reason : null;
+       return QC = null, ZC
```

#### 25. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2227` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L124) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2227)

```diff
-   36324: (kk, ek, ik) => {
+   40817: (CC, zC, ZC) => {
```

#### 26. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2229-L2230` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L126-L127) · [Before (L2229-L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2229-L2230)

```diff
-       b: () => bk,
-       e: () => Sk
+       d: () => bC,
+       g: () => wC
```

#### 27. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2232-L2283` → after: `L129-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L129-L132) · [Before (L2232-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2232-L2283)

```diff
-     var Dk = ik(165);
-     const fk = new Map;
- 
-     function Sk(kk, ek) {
-       var ik;
-       const Dk = null !== (ik = fk.get(kk)) && void 0 !== ik ? ik : new Map;
-       Dk.set(ek, Date.now()), fk.set(kk, Dk)
-     }
- 
-     function bk(kk) {
-       const ek = fk.get(kk);
-       if (!ek) return [];
-       const ik = Date.now();
-       for (const [fk, Sk] of ek) ik - Sk >= Dk.q && ek.delete(fk);
-       return [...ek.keys()]
-     }
- ... (36 more removed lines; see GitHub link above)
+     let QC = {
+       fire: () => {},
+       close: () => {}
+     };
```

#### 28. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2286-L2304` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L135) · [Before (L2286-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2286-L2304)

```diff
-       if (null === kk) return !0;
-       const {
-         visibility: ek
-       } = kk;
-       return "public" === ek || "unlisted" === ek || "whitelist" === ek && kk.canManage
-     }
- 
-     function Pk(kk, ek, ik) {
-       if (ik) {
-         const ik = ek.filter((ek => !Dk(kk.whitelist, ek)));
-         return {
-           ...kk,
-           whitelist: [...kk.whitelist, ...ik]
-         }
-       }
-       return {
- ... (3 more removed lines; see GitHub link above)
+       QC = CC
```

#### 29. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L2330-L2342` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/218.js#L139) · [Before (L2330-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/218.js#L2330-L2342)

```diff
-       const kk = (0, fk.e)("lobbyLeaderboardInfo");
-       return (0, Dk.useMemo)((() => function(kk) {
-         if (null === kk) return null;
-         const ek = Object.entries(kk),
-           ik = ek.filter((kk => {
-             let [, ek] = kk;
-             return void 0 !== ek
-           }));
-         if (ik.length === ek.length) return kk;
-         const Dk = Object.fromEntries(ik),
-           fk = Object.keys(kk).filter((kk => !Object.hasOwn(Dk, kk)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${fk.join(", ")}`), Dk
-       }(kk)), [kk])
+       return QC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4-L165` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L5-L7) · [Before (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L4-L165)

```diff
-   36182: kk => {
-     kk.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (146 more removed lines; see GitHub link above)
+   39388: (CC, zC, ZC) => {
+     CC.exports = wC;
+     var QC = ZC(338);
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L167-L168` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L9-L12) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L167-L168)

```diff
-     function mk(kk, ek, ik) {
-       return Math.min(Math.max(ek, kk), ik)
+     function wC(CC, zC) {
+       if (!(this instanceof wC)) return new wC(CC, zC);
+       var ZC = QC.create();
+       QC.add(ZC, CC, zC), this.base = QC.min(QC.create(), CC, ZC), this.vec = QC.clone(zC), this.max = QC.max(QC.create(), CC, ZC), this.mag = QC.length(this.vec)
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L170-L173` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L14-L51) · [Before (L170-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L170-L173)

```diff
- 
-     function Mk(kk) {
-       var ek = Math.round(kk).toString(16).toUpperCase();
-       return ek.length < 2 ? "0" + ek : ek
+     var bC = wC.prototype;
+     bC.width = function() {
+       return this.vec[0]
+     }, bC.height = function() {
+       return this.vec[1]
+     }, bC.depth = function() {
+       return this.vec[2]
+     }, bC.x0 = function() {
+       return this.base[0]
+     }, bC.y0 = function() {
+       return this.base[1]
+     }, bC.z0 = function() {
+       return this.base[2]
+     }, bC.x1 = function() {
+       return this.max[0]
+     }, bC.y1 = function() {
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L175-L197` → after: `L53-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L53-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L53-L68) · [Before (L175-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L175-L197)

```diff
-     Pk.get = function(kk) {
-       var ek, ik;
-       switch (kk.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           ek = Pk.get.hsl(kk), ik = "hsl";
-           break;
-         case "hwb":
-           ek = Pk.get.hwb(kk), ik = "hwb";
-           break;
-         default:
-           ek = Pk.get.rgb(kk), ik = "rgb"
-       }
-       return ek ? {
-         model: ik,
-         value: ek
-       } : null
- ... (7 more removed lines; see GitHub link above)
+   },
+   39384: CC => {
+     CC.exports = function(CC, zC, ZC, QC, wC, bC) {
+       var nC = +zC[0],
+         fC = +zC[1],
+         oC = +zC[2],
+         qC = +ZC[0],
+         FC = +ZC[1],
+         WC = +ZC[2],
+         NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
+       if (0 === NC) throw new Error("Can't raycast along a zero vector");
+       return function(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+         for (var FC = 0, WC = Math.floor, NC = 0 | WC(zC), MC = 0 | WC(ZC), gC = 0 | WC(QC), SC = wC > 0 ? 1 : -1, pC = bC > 0 ? 1 : -1, PC = nC > 0 ? 1 : -1, GC = Math.abs(1 / wC), RC = Math.abs(1 / bC), AC = Math.abs(1 / nC), xC = GC < 1 / 0 ? GC * (SC > 0 ? NC + 1 - zC : zC -  … [truncated]
+           var vC = CC(NC, MC, gC);
+           if (vC) return oC && (oC[0] = zC + FC * wC, oC[1] = ZC + FC * bC, oC[2] = QC + FC * nC), qC && (qC[0] = qC[1] = qC[2] = 0, 0 === iC && (qC[0] = -SC), 1 === iC && (qC[1] = -pC), 2 === iC && (qC[2] = -PC)), vC;
+           xC < JC ? xC < IC ? (NC += SC, FC = xC, xC += GC, iC = 0) : (gC += PC, FC = IC, IC += AC, iC = 2) : JC < IC ? (MC += pC, FC = JC, JC += RC, iC = 1) : (gC += PC, FC = IC, IC += AC, iC = 2)
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L199-L249` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L70-L71) · [Before (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L199-L249)

```diff
-         fk && (bk[3] = parseInt(fk, 16) / 255)
-       } else if (ek = kk.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (fk = (ek = ek[1])[3], ik = 0; ik < 3; ik++) bk[ik] = parseInt(ek[ik] + ek[ik], 16);
-         fk && (bk[3] = parseInt(fk + fk, 16) / 255)
-       } else if (ek = kk.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
-         for (ik = 0; ik < 3; ik++) bk[ik] = parseInt(ek[ik + 1], 0);
-         ek[4] && (ek[5] ? bk[3] = .01 * parseFloat(ek[4]) : bk[3] = parseFloat(ek[4]))
-       } else {
-         if (!(ek = kk.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (ek = kk.match(/^(\w+)$/)) ? "transparent" === ek[1] ? [0, 0, 0, 0] : Sk.call(Dk, ek[1]) ? ((bk = Dk[ek[1]])[3] = 1, bk) :  … [truncated]
-         for (ik = 0; ik < 3; ik++) bk[ik] = Math.round(2.55 * parseFloat(ek[ik + 1]));
-         ek[4] && (ek[5] ? bk[3] = .01 * parseFloat(ek[4]) : bk[3] = parseFloat(ek[4]))
-       }
-       for (ik = 0; ik < 3; ik++) bk[ik] = mk(bk[ik], 0, 255);
-       return bk[3] = mk(bk[3], 0, 1), bk
-     }, Pk.get.hsl = function(kk) {
-       if (!kk) return null;
- ... (35 more removed lines; see GitHub link above)
+         return oC && (oC[0] = zC + FC * wC, oC[1] = ZC + FC * bC, oC[2] = QC + FC * nC), qC && (qC[0] = qC[1] = qC[2] = 0), 0
+       }(CC, nC, fC, oC, qC /= NC, FC /= NC, WC /= NC, QC = "undefined" === typeof QC ? 64 : +QC, wC, bC)
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L252-L258` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L74-L80) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L252-L258)

```diff
-   36175: (kk, ek, ik) => {
-     const Dk = ik(36177),
-       fk = ik(36202),
-       Sk = ["keyword", "gray", "hex"],
-       bk = {};
-     for (const nk of Object.keys(fk)) bk[[...fk[nk].labels].sort().join("")] = nk;
-     const rk = {};
+   38946: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => fC,
+       d: () => bC
+     });
+     var QC = ZC(4036);
+     let wC = null;
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L260-L286` → after: `L82-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L82-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L82-L107) · [Before (L260-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L260-L286)

```diff
-     function Pk(kk, ek) {
-       if (!(this instanceof Pk)) return new Pk(kk, ek);
-       if (ek && ek in Sk && (ek = null), ek && !(ek in fk)) throw new Error("Unknown model: " + ek);
-       let ik, mk;
-       if (null == kk) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (kk instanceof Pk) this.model = kk.model, this.color = [...kk.color], this.valpha = kk.valpha;
-       else if ("string" === typeof kk) {
-         const ek = Dk.get(kk);
-         if (null === ek) throw new Error("Unable to parse color from string: " + kk);
-         this.model = ek.model, mk = fk[this.model].channels, this.color = ek.value.slice(0, mk), this.valpha = "number" === typeof ek.value[mk] ? ek.value[mk] : 1
-       } else if (kk.length > 0) {
-         this.model = ek || "rgb", mk = fk[this.model].channels;
-         const ik = Array.prototype.slice.call(kk, 0, mk);
-         this.color = xk(ik, mk), this.valpha = "number" === typeof kk[mk] ? kk[mk] : 1
-       } else if ("number" === typeof kk) this.model = "rgb", this.color = [kk >> 16 & 255, kk >> 8 & 255, 255 & kk], this.valpha = 1;
-       else {
- ... (11 more removed lines; see GitHub link above)
+     function bC(CC) {
+       return null !== wC && CC === wC
+     }
+ 
+     function nC() {
+       this.rD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
+     }
+     class fC {
+       constructor(CC, zC) {
+         this.version = "0.7.0";
+         var ZC = Object.assign({}, new nC, zC || {});
+         this.element = CC || document, this.rD = !!ZC.rD, this.stopPropagation = !!ZC.stopPropagation, this.jD = !!ZC.jD, this.disabled = !!ZC.disabled, this.filterEvents = (CC, zC) => !0, this.ignoreEvent = CC => !1, this.down = new QC.EventEmitter, this.up = new QC.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           OCC: 0,
+           kCC: 0,
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L288-L291` → after: `L109-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L109-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L109-L120) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L288-L291)

```diff
-       if (rk[this.model])
-         for (mk = fk[this.model].channels, ik = 0; ik < mk; ik++) {
-           const kk = rk[this.model][ik];
-           kk && (this.color[ik] = kk(this.color[ik]))
+       bind(CC) {
+         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
+         ZC.forEach((zC => {
+           var ZC = this._keyBindmap[zC] || [];
+           ZC.includes(CC) || (ZC.push(CC), this._keyBindmap[zC] = ZC)
+         })), this.state[CC] = !!this.state[CC], this.pressCount[CC] = this.pressCount[CC] || 0, this.releaseCount[CC] = this.releaseCount[CC] || 0
+       }
+       unbind(CC) {
+         for (var zC in this._keyBindmap) {
+           var ZC = this._keyBindmap[zC],
+             QC = ZC.indexOf(CC);
+           QC > -1 && ZC.splice(QC, 1)
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L293-L384` → after: `L122-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L122-L128) · [Before (L293-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L293-L384)

```diff
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
-     }
-     Pk.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(kk) {
-         let ek = this.model in Dk.to ? this : this.rgb();
-         ek = ek.round("number" === typeof kk ? kk : 1);
-         const ik = 1 === ek.valpha ? ek.color : [...ek.color, this.valpha];
-         return Dk.to[ek.model](ik)
-       },
-       percentString(kk) {
- ... (76 more removed lines; see GitHub link above)
+       }
+       getBindings() {
+         var CC = {};
+         for (var zC in this._keyBindmap) {
+           this._keyBindmap[zC].forEach((ZC => {
+             CC[ZC] = CC[ZC] || [], CC[ZC].push(zC)
+           }))
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L460-L474` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L132-L133) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L460-L474)

```diff
-     };
-     for (const nk of Object.keys(fk)) {
-       if (Sk.includes(nk)) continue;
-       const {
-         channels: kk
-       } = fk[nk];
-       Pk.prototype[nk] = function() {
-         if (this.model === nk) return new Pk(this);
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         return ek.length > 0 ? new Pk(ek, nk) : new Pk([...(Dk = fk[this.model][nk].raw(this.color), Array.isArray(Dk) ? Dk : [Dk]), this.valpha], nk);
-         var Dk
-       }, Pk[nk] = function() {
-         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
-         let fk = ik[0];
-         return "number" === typeof fk && (fk = xk(ik, kk)), new Pk(fk, nk)
+       ZN() {
+         oC(this.Fy), oC(this.pressCount), oC(this.releaseCount)
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L479-L483` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L138) · [Before (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L479-L483)

```diff
-       return function(ek) {
-         return function(kk, ek) {
-           return Number(kk.toFixed(ek))
-         }(ek, kk)
-       }
+       for (var zC in CC) CC[zC] = 0
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L486-L493` → after: `L141-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L141-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L141-L155) · [Before (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L486-L493)

```diff
-     function Mk(kk, ek, ik) {
-       kk = Array.isArray(kk) ? kk : [kk];
-       for (const Dk of kk)(rk[Dk] || (rk[Dk] = []))[ek] = ik;
-       return kk = kk[0],
-         function(Dk) {
-           let fk;
-           return void 0 !== Dk ? (ik && (Dk = ik(Dk)), fk = this[kk](), fk.color[ek] = Dk, fk) : (fk = this[kk]().color[ek], ik && (fk = ik(fk)), fk)
-         }
+     function qC(CC) {
+       window.addEventListener("keydown", pC.bind(null, CC, !0), !1), window.addEventListener("keyup", pC.bind(null, CC, !1), !1);
+       var zC = {
+         passive: !0
+       };
+       CC.element.addEventListener("touchstart", MC.bind(void 0, CC), {
+         passive: !1
+       }), CC.element.addEventListener("touchend", SC.bind(void 0, CC), zC), CC.element.addEventListener("mousedown", PC.bind(null, CC, !0), zC), window.document.addEventListener("mouseup", PC.bind(null, CC, !1), zC), CC.element.addEventListener("touchmove", GC.bind(null, CC), zC) … [truncated]
+     }
+     var FC = 0,
+       WC = 0,
+       NC = null;
+ 
+     function MC(CC, zC) {
+       zC.preventDefault(), gC(zC)
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L497-L498` → after: `L159-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L159-L166) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L497-L498)

```diff
-       return function(ek) {
-         return Math.max(0, Math.min(kk, ek))
+       let zC = !1;
+       for (let ZC = 0; ZC < CC.touches.length; ++ZC)
+         if (CC.touches[ZC].identifier === NC) {
+           zC = !0;
+           break
+         } if (!zC) {
+         const zC = CC.changedTouches[0];
+         FC = zC.clientX, WC = zC.clientY, NC = zC.identifier
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L503-L504` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L171) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L503-L504)

```diff
-       for (let ik = 0; ik < ek; ik++) "number" !== typeof kk[ik] && (kk[ik] = 0);
-       return kk
+       for (var ZC = zC.changedTouches, QC = 0; QC < ZC.length; ++QC) ZC[QC].identifier === NC && (NC = null)
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L506-L571` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L173-L178) · [Before (L506-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L506-L571)

```diff
-     kk.exports = Pk
-   },
-   36211: (kk, ek, ik) => {
-     const Dk = ik(36220),
-       fk = {};
-     for (const bk of Object.keys(Dk)) fk[Dk[bk]] = bk;
-     const Sk = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function pC(CC, zC, ZC) {
+       if (!CC.ignoreEvent(ZC)) try {
+         iC(CC, ZC), zC && ZC.isTrusted && !ZC.repeat && CC._keyStates[ZC.code] && vC(CC, ZC.code)
+       } finally {
+         eC(ZC.code, zC, CC, ZC)
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L589-L631` → after: `L181-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L181-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L181-L196) · [Before (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L589-L631)

```diff
-     Sk.rgb.hsl = function(kk) {
-       const ek = kk[0] / 255,
-         ik = kk[1] / 255,
-         Dk = kk[2] / 255,
-         fk = Math.min(ek, ik, Dk),
-         Sk = Math.max(ek, ik, Dk),
-         bk = Sk - fk;
-       let rk, Pk;
-       Sk === fk ? rk = 0 : ek === Sk ? rk = (ik - Dk) / bk : ik === Sk ? rk = 2 + (Dk - ek) / bk : Dk === Sk && (rk = 4 + (ek - ik) / bk), rk = Math.min(60 * rk, 360), rk < 0 && (rk += 360);
-       const mk = (fk + Sk) / 2;
-       return Pk = Sk === fk ? 0 : mk <= .5 ? bk / (Sk + fk) : bk / (2 - Sk - fk), [rk, 100 * Pk, 100 * mk]
-     }, Sk.rgb.hsv = function(kk) {
-       let ek, ik, Dk, fk, Sk;
-       const bk = kk[0] / 255,
-         rk = kk[1] / 255,
-         Pk = kk[2] / 255,
- ... (27 more removed lines; see GitHub link above)
+ 
+     function PC(CC, zC, ZC) {
+       if (!CC.ignoreEvent(ZC)) try {
+         iC(CC, ZC)
+       } finally {
+         ! function(CC, zC, ZC) {
+           if ("pointerId" in ZC)
+             if (zC) {
+               if (null !== CC._touches.currID) return;
+               CC._touches.currID = ZC.pointerId
+             } else {
+               if (CC._touches.currID !== ZC.pointerId) return;
+               CC._touches.currID = null
+             } var QC = "button" in ZC ? ZC.button + 1 : 1;
+           eC("Mouse" + QC, zC, CC, ZC)
+         }(CC, zC, ZC)
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L633-L690` → after: `L198-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L198-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L198-L213) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L633-L690)

```diff
-       var bk, rk;
-       return ik
-     }, Sk.keyword.rgb = function(kk) {
-       return Dk[kk]
-     }, Sk.rgb.xyz = function(kk) {
-       let ek = kk[0] / 255,
-         ik = kk[1] / 255,
-         Dk = kk[2] / 255;
-       ek = ek > .04045 ? ((ek + .055) / 1.055) ** 2.4 : ek / 12.92, ik = ik > .04045 ? ((ik + .055) / 1.055) ** 2.4 : ik / 12.92, Dk = Dk > .04045 ? ((Dk + .055) / 1.055) ** 2.4 : Dk / 12.92;
-       return [100 * (.4124 * ek + .3576 * ik + .1805 * Dk), 100 * (.2126 * ek + .7152 * ik + .0722 * Dk), 100 * (.0193 * ek + .1192 * ik + .9505 * Dk)]
-     }, Sk.rgb.lab = function(kk) {
-       const ek = Sk.rgb.xyz(kk);
-       let ik = ek[0],
-         Dk = ek[1],
-         fk = ek[2];
-       ik /= 95.047, Dk /= 100, fk /= 108.883, ik = ik > .008856 ? ik ** (1 / 3) : 7.787 * ik + 16 / 116, Dk = Dk > .008856 ? Dk ** (1 / 3) : 7.787 * Dk + 16 / 116, fk = fk > .008856 ? fk ** (1 / 3) : 7.787 * fk + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+     }
+ 
+     function GC(CC, zC) {
+       var ZC = zC.movementX || zC.mozMovementX || 0,
+         QC = zC.movementY || zC.mozMovementY || 0;
+       if (zC.touches && 0 === (ZC | QC)) {
+         var wC = function(CC) {
+           gC(CC);
+           for (let zC = 0; zC < CC.changedTouches.length; ++zC)
+             if (CC.changedTouches[zC].identifier == NC) {
+               const ZC = CC.changedTouches[zC],
+                 QC = [ZC.clientX - FC, ZC.clientY - WC];
+               return FC = ZC.clientX, WC = ZC.clientY, QC
+             } return console.error(`Did not find touch id ${NC}`), [0, 0]
+         }(zC);
+         ZC = wC[0], QC = wC[1]
```

#### 18. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L692-L715` → after: `L215-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L215-L221) · [Before (L692-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L692-L715)

```diff
-     }, Sk.hsv.hsl = function(kk) {
-       const ek = kk[0],
-         ik = kk[1] / 100,
-         Dk = kk[2] / 100,
-         fk = Math.max(Dk, .01);
-       let Sk, bk;
-       bk = (2 - ik) * Dk;
-       const rk = (2 - ik) * fk;
-       return Sk = ik * fk, Sk /= rk <= 1 ? rk : 2 - rk, Sk = Sk || 0, bk /= 2, [ek, 100 * Sk, 100 * bk]
-     }, Sk.hwb.rgb = function(kk) {
-       const ek = kk[0] / 360;
-       let ik = kk[1] / 100,
-         Dk = kk[2] / 100;
-       const fk = ik + Dk;
-       let Sk;
-       fk > 1 && (ik /= fk, Dk /= fk);
- ... (8 more removed lines; see GitHub link above)
+       CC.Fy.dx += ZC, CC.Fy.dy += QC
+     }
+ 
+     function RC(CC, zC) {
+       iC(CC, zC);
+       var ZC = 1;
+       switch (zC.deltaMode) {
```

#### 19. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L717` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L223) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L717)

```diff
-           mk = rk, Mk = Pk, Kk = ik;
+           ZC = 1;
```

#### 20. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L720` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L226) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L720)

```diff
-           mk = Pk, Mk = rk, Kk = ik;
+           ZC = 12;
```

#### 21. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L723-L795` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L229) · [Before (L723-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L723-L795)

```diff
-           mk = ik, Mk = rk, Kk = Pk;
-           break;
-         case 3:
-           mk = ik, Mk = Pk, Kk = rk;
-           break;
-         case 4:
-           mk = Pk, Mk = ik, Kk = rk;
-           break;
-         case 5:
-           mk = rk, Mk = ik, Kk = Pk
-       }
-       return [255 * mk, 255 * Mk, 255 * Kk]
-     }, Sk.cmyk.rgb = function(kk) {
-       const ek = kk[0] / 100,
-         ik = kk[1] / 100,
-         Dk = kk[2] / 100,
- ... (57 more removed lines; see GitHub link above)
+           ZC = CC.element.clientHeight || window.innerHeight
```

#### 22. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L797-L858` → after: `L231-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L231-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L231-L283) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L797-L858)

```diff
-       let ek;
-       kk -= 16;
-       return [Math.floor(kk / 36) / 5 * 255, Math.floor((ek = kk % 36) / 6) / 5 * 255, ek % 6 / 5 * 255]
-     }, Sk.rgb.hex = function(kk) {
-       const ek = (((255 & Math.round(kk[0])) << 16) + ((255 & Math.round(kk[1])) << 8) + (255 & Math.round(kk[2]))).toString(16).toUpperCase();
-       return "000000".substring(ek.length) + ek
-     }, Sk.hex.rgb = function(kk) {
-       const ek = kk.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!ek) return [0, 0, 0];
-       let ik = ek[0];
-       3 === ek[0].length && (ik = ik.split("").map((kk => kk + kk)).join(""));
-       const Dk = parseInt(ik, 16);
-       return [Dk >> 16 & 255, Dk >> 8 & 255, 255 & Dk]
-     }, Sk.rgb.hcg = function(kk) {
-       const ek = kk[0] / 255,
-         ik = kk[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+       CC.Fy.OCC += (zC.deltaX || 0) * ZC, CC.Fy.kCC += (zC.deltaY || 0) * ZC, CC.Fy.VCC += (zC.deltaZ || 0) * ZC
+     }
+ 
+     function AC(CC, zC) {
+       if (!CC.jD) return zC.preventDefault(), !1
+     }
+     var xC = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (37 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L860-L900` → after: `L285-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L285-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L285-L307) · [Before (L860-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L860-L900)

```diff
-       return Pk = (1 - ik) * Dk, [255 * (ik * fk[0] + Pk), 255 * (ik * fk[1] + Pk), 255 * (ik * fk[2] + Pk)]
-     }, Sk.hcg.hsv = function(kk) {
-       const ek = kk[1] / 100,
-         ik = ek + kk[2] / 100 * (1 - ek);
-       let Dk = 0;
-       return ik > 0 && (Dk = ek / ik), [kk[0], 100 * Dk, 100 * ik]
-     }, Sk.hcg.hsl = function(kk) {
-       const ek = kk[1] / 100,
-         ik = kk[2] / 100 * (1 - ek) + .5 * ek;
-       let Dk = 0;
-       return ik > 0 && ik < .5 ? Dk = ek / (2 * ik) : ik >= .5 && ik < 1 && (Dk = ek / (2 * (1 - ik))), [kk[0], 100 * Dk, 100 * ik]
-     }, Sk.hcg.hwb = function(kk) {
-       const ek = kk[1] / 100,
-         ik = ek + kk[2] / 100 * (1 - ek);
-       return [kk[0], 100 * (ik - ek), 100 * (1 - ik)]
-     }, Sk.hwb.hcg = function(kk) {
- ... (25 more removed lines; see GitHub link above)
+     }
+ 
+     function eC(CC, zC, ZC, QC) {
+       var wC = ZC._keyBindmap[CC];
+       wC && (hC(ZC._keyStates[CC], zC) && (ZC._keyStates[CC] = zC, wC.forEach((CC => {
+         (!ZC.filterEvents || ZC.filterEvents(QC, CC)) && function(CC, zC, ZC, QC) {
+           var wC = zC ? ZC.pressCount : ZC.releaseCount;
+           wC[CC] = (wC[CC] || 0) + 1;
+           var bC = ZC._bindPressCount[CC] || 0;
+           (bC += zC ? 1 : -1) < 0 && (bC = 0);
+           ZC._bindPressCount[CC] = bC;
+           var nC = ZC.state[CC];
+           if (hC(nC, bC)) {
+             ZC.state[CC] = bC > 0;
+             var fC = zC ? ZC.down : ZC.up;
+             ZC.disabled || fC.emit(CC, QC)
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L903-L937` → after: `L310-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L310-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L310-L405) · [Before (L903-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L903-L937)

```diff
-   36202: (kk, ek, ik) => {
-     const Dk = ik(36211),
-       fk = ik(36228),
-       Sk = {};
-     Object.keys(Dk).forEach((kk => {
-       Sk[kk] = {}, Object.defineProperty(Sk[kk], "channels", {
-         value: Dk[kk].channels
-       }), Object.defineProperty(Sk[kk], "labels", {
-         value: Dk[kk].labels
-       });
-       const ek = fk(kk);
-       Object.keys(ek).forEach((ik => {
-         const Dk = ek[ik];
-         Sk[kk][ik] = function(kk) {
-           const ek = function() {
-             for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
- ... (19 more removed lines; see GitHub link above)
+   36417: (CC, zC) => {
+     function ZC(CC) {
+       if (CC && "object" === typeof CC) {
+         var zC = CC.which || CC.keyCode || CC.charCode;
+         zC && (CC = zC)
+       }
+       if ("number" === typeof CC) return nC[CC];
+       var ZC, bC = String(CC);
+       return (ZC = QC[bC.toLowerCase()]) ? ZC : (ZC = wC[bC.toLowerCase()]) || (1 === bC.length ? bC.charCodeAt(0) : void 0)
+     }
+     ZC.isEventKey = function(CC, zC) {
+       if (CC && "object" === typeof CC) {
+         var ZC = CC.which || CC.keyCode || CC.charCode;
+         if (null === ZC || void 0 === ZC) return !1;
+         if ("string" === typeof zC) {
+           var bC;
+ ... (80 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L939-L940` → after: `L407-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L407-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L407-L489) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L939-L940)

```diff
-   36228: (kk, ek, ik) => {
-     const Dk = ik(36211);
+   39376: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     class QC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.Gl = !1, this.Rl = !1, this.Jm = 30, this.yE = 0, this.Al = 100, this.rp = !1, this.fullscreen = !1, this.sG = function(CC) {}, this.Kl = function(CC, zC, ZC) {}, this.Bl = function() {}, this.mG = function() {}, this.Tl = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(CC) {
+             if ("loading" === document.readyState) {
+               var zC = () => {
+                 document.removeEventListener("readystatechange", zC), CC()
+               };
+               document.addEventListener("readystatechange", zC)
+             } else setTimeout(CC, 0)
+ ... (67 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L943-L949` → after: `L492-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L492-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L492-L682) · [Before (L943-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L943-L949)

```diff
-       const ek = function() {
-           const kk = {},
-             ek = Object.keys(Dk);
-           for (let ik = ek.length, Dk = 0; Dk < ik; Dk++) kk[ek[Dk]] = {
-             distance: -1,
-             parent: null
-           };
+       for (var zC = CC._data, ZC = 1e3 / CC.Jm, QC = zC.nowObject.now() + nC, wC = 0; zC.nowObject.now() >= zC.lastTickStarted + ZC && zC.nowObject.now() < QC && ++wC <= bC;) CC.sG(ZC), zC.lastTickStarted += ZC;
+       var fC = 5 * (ZC + 5),
+         oC = zC.nowObject.now();
+       if (oC - zC.lastTickStarted > fC)
+         for (; oC >= zC.lastTickStarted + ZC;) zC.lastTickStarted += ZC
+     }
+   },
+   36581: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(48);
+     const wC = QC.useLayoutEffect;
+     const bC = function(CC) {
+       var zC = (0, QC.useRef)(CC);
+       return wC((function() {
+ ... (175 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L951-L956` → after: `L684-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L684-L688) · [Before (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L951-L956)

```diff
-         }(),
-         ik = [kk];
-       for (ek[kk].distance = 0; ik.length;) {
-         const kk = ik.pop(),
-           fk = Object.keys(Dk[kk]);
-         for (let Dk = fk.length, Sk = 0; Sk < Dk; Sk++) {
+         }(CC);
+         for (const qC of fC) {
+           if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
+           if (qC.endsWith("Observable")) continue;
+           if (ZC && -1 !== ZC.indexOf(qC)) continue;
```

#### 28. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L958` → after: `L690-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L690-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L690-L704) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L958)

```diff
-             bk = ek[Dk]; - 1 === bk.distance && (bk.distance = ek[kk].distance + 1, bk.parent = kk, ik.unshift(Dk))
+             FC = typeof fC;
+           if ("function" !== FC) try {
+             if ("object" === FC)
+               if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
+               else if (fC instanceof Array) {
+               if (zC[qC] = [], fC.length > 0)
+                 if ("object" == typeof fC[0])
+                   for (let CC = 0; CC < fC.length; CC++) {
+                     const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
+                   } else zC[qC] = fC.slice(0)
+             } else zC[qC] = wC(fC, zC, nC);
+             else zC[qC] = fC
+           } catch (oC) {
+             QC.c.Warn(oC.message)
+           }
```

#### 29. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L963-L966` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L708-L722) · [Before (L963-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L963-L966)

```diff
- 
-     function Sk(kk, ek) {
-       return function(ik) {
-         return ek(kk(ik))
+   },
+   38538: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC,
+       f: () => bC,
+       g: () => nC,
+       k: () => fC
+     });
+     var QC = ZC(37142);
+     class wC {
+       constructor(CC, zC, ZC) {
+         this.gradient = CC, this.color1 = zC, this.color2 = ZC
+       }
+       getColorToRef(CC) {
+         this.color2 ? QC.g.LerpToRef(this.color1, this.color2, Math.random(), CC) : CC.Av(this.color1)
```

#### 30. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L969-L975` → after: `L725-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L725-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L725-L736) · [Before (L969-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L969-L975)

```diff
- 
-     function bk(kk, ek) {
-       const ik = [ek[kk].parent, kk];
-       let fk = Dk[ek[kk].parent][kk],
-         bk = ek[kk].parent;
-       for (; ek[bk].parent;) ik.unshift(ek[bk].parent), fk = Sk(Dk[ek[bk].parent][bk], fk), bk = ek[bk].parent;
-       return fk.conversion = ik, fk
+     class bC {
+       constructor(CC, zC) {
+         this.gradient = CC, this.color = zC
+       }
+     }
+     class nC {
+       constructor(CC, zC, ZC) {
+         this.gradient = CC, this.factor1 = zC, this.factor2 = ZC
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L977-L983` → after: `L738-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L738-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L738-L749) · [Before (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L977-L983)

```diff
-     kk.exports = function(kk) {
-       const ek = fk(kk),
-         ik = {},
-         Dk = Object.keys(ek);
-       for (let fk = Dk.length, Sk = 0; Sk < fk; Sk++) {
-         const kk = Dk[Sk];
-         null !== ek[kk].parent && (ik[kk] = bk(kk, ek))
+     class fC {
+       static GetCurrentGradient(CC, zC, ZC) {
+         if (zC[0].gradient > CC) return void ZC(zC[0], zC[0], 1);
+         for (let wC = 0; wC < zC.length - 1; wC++) {
+           const QC = zC[wC],
+             bC = zC[wC + 1];
+           if (CC >= QC.gradient && CC <= bC.gradient) {
+             return void ZC(QC, bC, (CC - QC.gradient) / (bC.gradient - QC.gradient))
+           }
+         }
+         const QC = zC.length - 1;
+         ZC(zC[QC], zC[QC], 1)
```

#### 32. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L988-L1137` → after: `L753-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L753-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L753-L808) · [Before (L988-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L988-L1137)

```diff
-   36220: kk => {
-     kk.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (134 more removed lines; see GitHub link above)
+   38507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     class QC {
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
+       }
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+ ... (40 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1140-L1153` → after: `L824-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L824-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L824-L870) · [Before (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L1140-L1153)

```diff
-   36189: (kk, ek, ik) => {
-     var Dk = ik(36195),
-       fk = Array.prototype.concat,
-       Sk = Array.prototype.slice,
-       bk = kk.exports = function(kk) {
-         for (var ek = [], ik = 0, bk = kk.length; ik < bk; ik++) {
-           var rk = kk[ik];
-           Dk(rk) ? ek = fk.call(ek, Sk.call(rk)) : ek.push(rk)
-         }
-         return ek
-       };
-     bk.wrap = function(kk) {
-       return function() {
-         return kk(bk(arguments))
+   38544: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(38501);
+     class nC {
+       constructor() {
+         this.direction1 = new QC.r(0, 1, 0), this.direction2 = new QC.r(0, 1, 0), this.minEmitBox = new QC.r(-.5, -.5, -.5), this.maxEmitBox = new QC.r(.5, .5, .5)
+       }
+       startDirectionFunction(CC, zC, ZC, bC) {
+         const nC = (0, wC.RandomRange)(this.direction1.x, this.direction2.x),
+           fC = (0, wC.RandomRange)(this.direction1.y, this.direction2.y),
+           oC = (0, wC.RandomRange)(this.direction1.z, this.direction2.z);
+         if (bC) return zC.x = nC, zC.y = fC, void(zC.z = oC);
+ ... (31 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1157-L1159` → after: `L874-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L874-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/219.js#L874-L1191) · [Before (L1157-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/219.js#L1157-L1159)

```diff
-   36195: kk => {
-     kk.exports = function(kk) {
-       return !(!kk || "string" === typeof kk) && (kk instanceof Array || Array.isArray(kk) || kk.length >= 0 && (kk.splice instanceof Function || Object.getOwnPropertyDescriptor(kk, kk.length - 1) && "String" !== kk.constructor.name))
+   38497: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => fC,
+       i: () => nC
+     });
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(38501);
+     class nC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = CC, this.height = zC, this.radiusRange = ZC, this.directionRandomizer = wC, this._tempVector = QC.r.Zero()
+       }
+ ... (302 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L4-L1629) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   36341: (kk, ek, ik) => {
+   40915: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       LobbyManageView: () => Jz
+     });
+     var QC = ZC(48),
+       wC = ZC(1418),
+       bC = ZC(36882),
+       nC = ZC(2394),
+       fC = ZC(2402),
+       oC = ZC(2369),
+       qC = ZC(36447);
+ 
+     function FC() {
+       const [CC, zC] = (0, QC.useState)(new Map);
+       return {
+         get: zC => CC.get(zC),
+ ... (1610 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L10` → after: `L1631-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1631-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L1631-L1724) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L6-L10)

```diff
-       e: () => be,
-       g: () => me,
-       j: () => xe,
-       n: () => Me,
-       p: () => Ke
+       b: () => FC,
+       d: () => oC
+     });
+     var QC = ZC(1418),
+       wC = ZC(1865),
+       bC = ZC(1840);
+     const nC = 1e4;
+     let fC = 0;
+ 
+     function oC(CC) {
+       const zC = ++fC;
+       return new Promise((ZC => {
+         const fC = zC => {
+             oC(), clearTimeout(qC), !1 === (null === zC || void 0 === zC ? void 0 : zC.ok) && (0, QC.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: CC.type
+ ... (78 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L12-L64` → after: `L1726-L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1726-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L1726-L1844) · [Before (L12-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L12-L64)

```diff
-     const Dk = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       fk = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       Sk = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       bk = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       rk = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       Pk = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       mk = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       Mk = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
-       Kk = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
-       xk = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
-       nk = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
-       Uk = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
-       Hk = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
-       wk = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
-       lk = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
-       pk = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
- ... (37 more removed lines; see GitHub link above)
+     var QC = ZC(583),
+       wC = ZC(1840),
+       bC = ZC(1559),
+       nC = ZC(77),
+       fC = ZC(1209);
+ 
+     function oC(CC, zC, ZC) {
+       return nC.featureFlags.useSocialFeatures && CC && null === (0, fC.e)(zC, ZC)
+     }
+ 
+     function qC(CC, zC) {
+       var ZC, nC;
+       const fC = bC.d.getSocialState().friends.find((CC => CC.name.toLowerCase() === zC.toLowerCase())),
+         oC = wC.gameBridge.latest("players").byId[CC],
+         qC = void 0 !== oC && oC.name === zC,
+         FC = qC && null !== (ZC = oC.cosmetics) && void 0 !== ZC ? ZC : void 0,
+ ... (103 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L66-L117` → after: `L1846-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1846-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L1846-L1849) · [Before (L66-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L66-L117)

```diff
-         gunSemiAutomatic: Dk,
-         gunSubmachineGun: fk,
-         gunShotgun: Pk,
-         gunRifle: bk,
-         gunPistol: Sk,
-         gunMisc: rk,
-         dig: mk,
-         step: Mk,
-         randomBeep: Kk,
-         randomCannon: xk,
-         randomCash: nk,
-         randomExp: Uk,
-         randomFallsmall: Hk,
-         randomItems: wk,
-         randomFire: lk,
-         randomFirecracker: pk,
- ... (36 more removed lines; see GitHub link above)
+         unlisted: "link",
+         public: "globe",
+         whitelist: "user-check",
+         private: "lock"
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L119-L128` → after: `L1851-L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1851-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L1851-L2058) · [Before (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L119-L128)

```diff
-       be = new Map(["mob", "random"].map((kk => {
-         const ek = Object.keys(Se).filter((ek => ek.startsWith(kk) && /^[A-Z]/.test(ek.slice(kk.length))));
-         return [kk, ek]
-       }))),
-       re = {};
-     for (const Ue in Se) {
-       const kk = Se[Ue];
-       for (const ek in kk.sprite) {
-         if (re[ek]) throw new Error(`duplicate sound name ${ek} in ${re[ek]} and ${Ue}`);
-         re[ek] = Ue
+       FC = ["unlisted", "public", "whitelist", "private"];
+ 
+     function WC(CC) {
+       let {
+         visibility: zC,
+         onPick: ZC
+       } = CC;
+       const {
+         t: wC
+       } = (0, nC.y)(), WC = (0, QC.useRef)([]);
+       return (0, oC.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": wC("worldSocial:whoCanJoin"),
+         children: FC.map(((CC, QC) => {
+           const nC = CC === zC;
+ ... (192 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L131-L133` → after: `L2061-L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2061-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L2061-L2105) · [Before (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L131-L133)

```diff
-     for (const Ue in Se) {
-       const kk = Se[Ue];
-       for (let ek = 0; ek < kk.src.length; ek++) kk.src[ek] = fe.clientSideServerUrls.staticUrl + kk.src[ek]
+ 
+     function NC(CC) {
+       let {
+         player: zC,
+         isFriend: ZC = !1,
+         status: QC,
+         showLocation: oC = void 0 === QC,
+         ZN: WC,
+         onSendFriendRequest: NC,
+         actions: MC,
+         zIndex: gC
+       } = CC;
+       const {
+         t: SC
+       } = (0, wC.y)();
+       let pC = QC;
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L138-L143` → after: `L2109-L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2109-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L2109-L2223) · [Before (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L138-L143)

```diff
-       if (Pe[kk]) return ne(Pe[kk]);
-       {
-         const ek = [];
-         for (const ik in Se)
-           for (const Dk in Se[ik].sprite) Dk.startsWith(kk) && ek.push(Dk);
-         return Pe[kk] = ek, ne(ek)
+       let {
+         row: zC,
+         ZN: ZC,
+         canInvite: QC,
+         invited: bC,
+         onInvite: nC,
+         zIndex: fC
+       } = CC;
+       const {
+         t: qC
+       } = (0, wC.y)(), WC = "online" === zC.place ? oC.g : oC.i;
+       return (0, FC.jsx)(NC, {
+         player: zC.friend,
+         isFriend: !0,
+         status: "here" === zC.place ? qC("worldSocial:inThisWorld") : void 0,
+         showLocation: !0,
+ ... (99 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L148-L149` → after: `L2242-L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2242-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L2242-L2277) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L148-L149)

```diff
-       const ek = re[kk];
-       if (void 0 === ek) throw new Error(`Invalid sound name ${kk} (not in any sprite sheet)`);
+       const zC = wC.get(CC);
+       if (!zC) return [];
+       const ZC = Date.now();
+       for (const [wC, bC] of zC) ZC - bC >= QC.m && zC.delete(wC);
+       return [...zC.keys()]
+     }
+   },
+   36588: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       const ZC = zC.toLowerCase();
+       for (const QC of CC)
+         if (QC.toLowerCase() === ZC) return !0;
+       return !1
+     }
+ 
+     function wC(CC, zC, ZC) {
+ ... (20 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L154-L155` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L2282) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L154-L155)

```diff
-       if (!(kk in Se)) throw new Error("Invalid spriteTrack name");
-       return ek in Se[kk].sprite
+       return null === CC || void 0 === CC || !CC.canManage || QC(CC.whitelist, zC) ? "none" : "whitelist" === CC.visibility ? "required" : "quiet"
```

#### 10. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L159-L160` → after: `L2286-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2286-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L2286-L2290) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L159-L160)

```diff
-       if (!(kk in Se)) throw new Error("Invalid spritesheet name");
-       return Se[kk]
+       if (null === CC) return !0;
+       const {
+         visibility: zC
+       } = CC;
+       return "public" === zC || "unlisted" === zC || "whitelist" === zC && CC.canManage
```

#### 11. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L163-L164` → after: `L2293-L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2293-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/220.js#L2293-L2342) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/220.js#L163-L164)

```diff
-     function ne(kk) {
-       return kk[Math.floor(Math.random() * kk.length)]
+     function oC(CC, zC, ZC) {
+       if (ZC) {
+         const ZC = zC.filter((zC => !QC(CC.whitelist, zC)));
+         return {
+           ...CC,
+           whitelist: [...CC.whitelist, ...ZC]
+         }
+       }
+       return {
+         ...CC,
+         whitelist: CC.whitelist.filter((CC => !QC(zC, CC)))
+       }
+     }
+ 
+     function qC(CC, zC) {
+       const ZC = [];
+ ... (34 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L14` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L4-L153) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L4-L14)

```diff
-   39200: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Dk,
-       d: () => fk
-     });
-     const Dk = "The world isn't loaded, so no blocks can be seen.",
-       fk = "The world isn't loaded, so nothing in it can be seen."
-   },
-   38676: (kk, ek, ik) => {
-     function Dk(kk) {
-       return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
+   36521: CC => {
+     CC.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (134 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L20-L29` → after: `L156-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L156-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L156-L165) · [Before (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L20-L29)

```diff
-   36391: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Sk,
-       d: () => fk
-     });
-     let Dk = () => null;
- 
-     function fk(kk) {
-       Dk = kk
-     }
+   36516: (CC, zC, ZC) => {
+     var QC = ZC(36521),
+       wC = ZC(36525),
+       bC = Object.hasOwnProperty,
+       nC = Object.create(null);
+     for (var fC in QC) bC.call(QC, fC) && (nC[QC[fC]] = fC);
+     var oC = CC.exports = {
+       to: {},
+       get: {}
+     };
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L31-L53` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L167-L168) · [Before (L31-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L31-L53)

```diff
-     function Sk(kk, ek) {
-       return Dk(kk, ek)
-     }
-   },
-   40180: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Hk,
-       f: () => yk,
-       g: () => pk,
-       k: () => wk
-     });
-     var Dk = ik(26),
-       fk = ik(40186),
-       Sk = ik(40165),
-       bk = ik(40191),
-       rk = ik(40172),
- ... (7 more removed lines; see GitHub link above)
+     function qC(CC, zC, ZC) {
+       return Math.min(Math.max(zC, CC), ZC)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L57` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L172-L173) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L57)

```diff
-       return `${kk[0]},${kk[1]},${kk[2]}`
+       var zC = Math.round(CC).toString(16).toUpperCase();
+       return zC.length < 2 ? "0" + zC : zC
```
