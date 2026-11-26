# Changed — Bundle Modifications Report (Part 058 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `58 / 154` (**404** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 057](part-057.md) · [Part 059 →](part-059.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (876 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 327. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3245-L3246` → after: `L3245-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3245-L3246) · [Before (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3245-L3246)

```diff
-             if (this.jU)
-               for (let LH = 0; LH < this.jU.length; LH++) this.jU[LH].refreshBoundingInfo(HH);
+             if (this.iW)
+               for (let GB = 0; GB < this.iW.length; GB++) this.iW[GB].refreshBoundingInfo(BB);
```

#### 328. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3250-L3251` → after: `L3250-L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3250-L3251) · [Before (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3250-L3251)

```diff
-             if (this._boundingInfo ? this._boundingInfo.reConstruct(HH.minimum, HH.maximum) : this._boundingInfo = new EH.d(HH.minimum, HH.maximum), this.jU)
-               for (let BH = 0; BH < this.jU.length; BH++) this.jU[BH].refreshBoundingInfo(null);
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new MB.e(BB.minimum, BB.maximum), this.iW)
+               for (let OB = 0; OB < this.iW.length; OB++) this.iW[OB].refreshBoundingInfo(null);
```

#### 329. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3256-L3259` → after: `L3256-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3256-L3259) · [Before (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3256-L3259)

```diff
-               const CH = SH.l.lu[0],
-                 EH = SH.l.Matrix[0],
-                 XH = SH.l.Matrix[1],
-                 GH = BH === hH.i.NormalKind ? SH.o.TransformNormalFromFloatsToRef : SH.o.TransformCoordinatesFromFloatsToRef;
+               const JB = QB.k.Xp[0],
+                 MB = QB.k.Matrix[0],
+                 PB = QB.k.Matrix[1],
+                 zB = OB === oB.h.NormalKind ? QB.r.TransformNormalFromFloatsToRef : QB.r.TransformCoordinatesFromFloatsToRef;
```

#### 330. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3262` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3262) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3262)

```diff
-                 for (EH.reset(), BH = 0; BH < 4; BH++) uH = rH[YH + BH], uH > 0 && (SH.e.FromFloat32ArrayToRefScaled(LH, Math.floor(16 * AH[YH + BH]), uH, XH), EH.addToSelf(XH));
+                 for (MB.reset(), OB = 0; OB < 4; OB++) pB = DB[lB + OB], pB > 0 && (QB.d.FromFloat32ArrayToRefScaled(GB, Math.floor(16 * YB[lB + OB]), pB, PB), MB.addToSelf(PB));
```

#### 331. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3264` → after: `L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3264) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3264)

```diff
-                   for (BH = 0; BH < 4; BH++) uH = zH[YH + BH], uH > 0 && (SH.e.FromFloat32ArrayToRefScaled(LH, Math.floor(16 * tH[YH + BH]), uH, XH), EH.addToSelf(XH));
+                   for (OB = 0; OB < 4; OB++) pB = yB[lB + OB], pB > 0 && (QB.d.FromFloat32ArrayToRefScaled(GB, Math.floor(16 * jB[lB + OB]), pB, PB), MB.addToSelf(PB));
```

#### 332. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3270)

```diff
-             let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hH.i.PositionKind;
+             let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oB.h.PositionKind;
```

#### 333. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3283` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3283) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3283)

```diff
-                 case hH.i.PositionKind:
+                 case oB.h.PositionKind:
```

#### 334. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3286` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3286) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3286)

```diff
-                 case hH.i.NormalKind:
+                 case oB.h.NormalKind:
```

#### 335. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3289)

```diff
-                 case hH.i.TangentKind:
+                 case oB.h.TangentKind:
```

#### 336. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3292)

```diff
-                 case hH.i.UVKind:
+                 case oB.h.UVKind:
```

#### 337. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3295)

```diff
-                 case hH.i.UV2Kind:
+                 case oB.h.UV2Kind:
```

#### 338. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3298)

```diff
-                 case hH.i.ColorKind:
+                 case oB.h.ColorKind:
```

#### 339. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3320-L3321` → after: `L3320-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3320-L3321) · [Before (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3320-L3321)

```diff
-               const HH = tH(hH.i.MatricesIndicesKind),
-                 rH = tH(hH.i.MatricesWeightsKind);
+               const BB = jB(oB.h.MatricesIndicesKind),
+                 DB = jB(oB.h.MatricesWeightsKind);
```

#### 340. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3324-L3325` → after: `L3324-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3324-L3325) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3324-L3325)

```diff
-                   EH = SH ? tH(hH.i.MatricesIndicesExtraKind) : null,
-                   XH = SH ? tH(hH.i.MatricesWeightsExtraKind) : null;
+                   MB = QB ? jB(oB.h.MatricesIndicesExtraKind) : null,
+                   PB = QB ? jB(oB.h.MatricesWeightsExtraKind) : null;
```

#### 341. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3330-L3331` → after: `L3330-L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3330-L3331) · [Before (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3330-L3331)

```diff
-               const BH = tH(hH.i.MatricesIndicesKind),
-                 rH = tH(hH.i.MatricesWeightsKind);
+               const OB = jB(oB.h.MatricesIndicesKind),
+                 DB = jB(oB.h.MatricesWeightsKind);
```

#### 342. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3334-L3335)

```diff
-                   zH = SH ? tH(hH.i.MatricesIndicesExtraKind) : null,
-                   CH = SH ? tH(hH.i.MatricesWeightsExtraKind) : null,
+                   yB = QB ? jB(oB.h.MatricesIndicesExtraKind) : null,
+                   JB = QB ? jB(oB.h.MatricesWeightsExtraKind) : null,
```

#### 343. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3340)

```diff
-             if (!1 !== BH.updatePositionsArray && AH === hH.i.PositionKind) {
+             if (!1 !== OB.updatePositionsArray && YB === oB.h.PositionKind) {
```

#### 344. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3344-L3345` → after: `L3344-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3344-L3345) · [Before (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3344-L3345)

```diff
-                 for (let LH = BH; LH < HH.length; LH++) HH[LH] = new SH.o;
-               for (let AH = 0, rH = 0; AH < HH.length; AH++, rH += 3) HH[AH].SBH(LH[rH], LH[rH + 1], LH[rH + 2]);
+                 for (let GB = OB; GB < BB.length; GB++) BB[GB] = new QB.r;
+               for (let YB = 0, DB = 0; YB < BB.length; YB++, DB += 3) BB[YB].zOB(GB[DB], GB[DB + 1], GB[DB + 2]);
```

#### 345. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3357` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3357) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3357)

```diff
-             }, null, hH.i.NormalKind)
+             }, null, oB.h.NormalKind)
```

#### 346. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3367)

```diff
-             }, LH, hH.i.PositionKind)
+             }, GB, oB.h.PositionKind)
```

#### 347. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3370` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3370) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3370)

```diff
-             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new EH.d(SH.o.Zero(), SH.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new MB.e(QB.r.Zero(), QB.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 348. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3373-L3374` → after: `L3373-L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3373-L3374) · [Before (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3373-L3374)

```diff
-             if (!this.jU) return this;
-             const BH = this.jU.length;
+             if (!this.iW) return this;
+             const OB = this.iW.length;
```

#### 349. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3376` → after: `L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3376) · [Before (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3376)

```diff
-               const AH = this.jU[LH];
+               const YB = this.iW[GB];
```

#### 350. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3382` → after: `L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3382) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3382)

```diff
-             this.cu || (this._boundingInfoIsDirty = !0)
+             this.Ep || (this._boundingInfoIsDirty = !0)
```

#### 351. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3385` → after: `L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3385) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3385)

```diff
-             return this.jF().isInFrustum(HH, this.cullingStrategy)
+             return this.Gw().isInFrustum(BB, this.cullingStrategy)
```

#### 352. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3388` → after: `L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3388) · [Before (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3388)

```diff
-             return this.jF().isCompletelyInFrustum(HH)
+             return this.Gw().isCompletelyInFrustum(BB)
```

#### 353. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3390` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3390) · [Before (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3390)

```diff
-           rSH(HH) {
+           lQB(BB) {
```

#### 354. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3393-L3394` → after: `L3393-L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3393-L3394) · [Before (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3393-L3394)

```diff
-             const AH = this.jF(),
-               rH = HH.jF();
+             const YB = this.Gw(),
+               DB = BB.Gw();
```

#### 355. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3398` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3398) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3398)

```diff
-                 if (SH.rSH(HH, BH, !0)) return !0;
+                 if (QB.lQB(BB, OB, !0)) return !0;
```

#### 356. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3402` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3402) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3402)

```diff
-             return this.jF().intersectsPoint(HH)
+             return this.Gw().intersectsPoint(BB)
```

#### 357. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3416)

```diff
-             const LH = this.yN().collisionCoordinator;
+             const GB = this.JF().collisionCoordinator;
```

#### 358. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3425)

```diff
-               for (let rH = LH; rH < AH; rH++) HH._lastColliderWorldVertices.push(SH.o.TransformCoordinates(this._positions[rH], BH))
+               for (let DB = GB; DB < YB; DB++) BB._lastColliderWorldVertices.push(QB.r.TransformCoordinates(this._positions[DB], OB))
```

#### 359. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3427)

```diff
-             return LH._collide(HH._trianglePlanes, HH._lastColliderWorldVertices, this.vrH(), HH.indexStart, HH.indexStart + HH.indexCount, HH.verticesStart, !!HH.eu(), this, this._shouldConvertRHS(), 7 === HH.eu()?.fillMode), this
+             return GB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.KDB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.cp(), this, this._shouldConvertRHS(), 7 === BB.cp()?.fillMode), this
```

#### 360. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3442-L3445` → after: `L3442-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3442-L3445) · [Before (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3442-L3445)

```diff
-             if (!this.jF()._checkCollision(HH)) return this;
-             const BH = SH.l.Matrix[0],
-               LH = SH.l.Matrix[1];
-             return SH.e.ScalingToRef(1 / HH._radius.x, 1 / HH._radius.y, 1 / HH._radius.z, BH), this.worldMatrixFromCache.multiplyToRef(BH, LH), this._processCollisionsForSubMeshes(HH, LH), this
+             if (!this.Gw()._checkCollision(BB)) return this;
+             const OB = QB.k.Matrix[0],
+               GB = QB.k.Matrix[1];
+             return QB.d.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, OB), this.worldMatrixFromCache.multiplyToRef(OB, GB), this._processCollisionsForSubMeshes(BB, GB), this
```

#### 361. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3454` → after: `L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3454) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3454)

```diff
-             const tH = new CH.b,
+             const jB = new JB.e,
```

#### 362. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3457-L3460` → after: `L3457-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3457-L3460) · [Before (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3457-L3460)

```diff
-               XH = this.jF();
-             if (!this.jU) return tH;
-             if (!hH && (!HH.intersectsSphere(XH.nrH, EH) || !HH.intersectsBox(XH.boundingBox, EH))) return tH;
-             if (AH) return tH.hit = !hH, tH.pickedMesh = hH ? null : this, tH.distance = hH ? 0 : SH.o.Distance(HH.origin, XH.nrH.center), tH.subMeshId = 0, tH;
+               PB = this.Gw();
+             if (!this.iW) return jB;
+             if (!oB && (!BB.intersectsSphere(PB.xDB, MB) || !BB.intersectsBox(PB.boundingBox, MB))) return jB;
+             if (YB) return jB.hit = !oB, jB.pickedMesh = oB ? null : this, jB.distance = oB ? 0 : QB.r.Distance(BB.origin, PB.xDB.center), jB.subMeshId = 0, jB;
```

#### 363. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3467` → after: `L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3467) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3467)

```diff
-               const HH = YH.data[SH].eu();
+               const BB = lB.data[QB].cp();
```

#### 364. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3473)

```diff
-             if (!QH) return tH.hit = !0, tH.pickedMesh = this, tH.distance = SH.o.Distance(HH.origin, XH.nrH.center), tH.subMeshId = -1, tH;
+             if (!qB) return jB.hit = !0, jB.pickedMesh = this, jB.distance = QB.r.Distance(BB.origin, PB.xDB.center), jB.subMeshId = -1, jB;
```

#### 365. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3477)

```diff
-               const rH = AH.intersects(HH, this._positions, this.vrH(), BH, LH);
+               const DB = YB.intersects(BB, this._positions, this.KDB(), OB, GB);
```

#### 366. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3482-L3486` → after: `L3482-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3482-L3486) · [Before (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3482-L3486)

```diff
-                 LH = SH.l.lu[0],
-                 AH = SH.l.lu[1];
-               SH.o.TransformCoordinatesToRef(HH.origin, BH, LH), HH.direction.scaleToRef(GH.distance, AH);
-               const hH = SH.o.TransformNormal(AH, BH).addInPlace(LH);
-               return tH.hit = !0, tH.distance = SH.o.Distance(LH, hH), tH.pickedPoint = hH, tH.pickedMesh = this, tH.bu = GH.bu || 0, tH.bv = GH.bv || 0, tH.subMeshFaceId = GH.faceId, tH.faceId = GH.faceId + YH.data[GH._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
+                 GB = QB.k.Xp[0],
+                 YB = QB.k.Xp[1];
+               QB.r.TransformCoordinatesToRef(BB.origin, OB, GB), BB.direction.scaleToRef(zB.distance, YB);
+               const oB = QB.r.TransformNormal(YB, OB).addInPlace(GB);
+               return jB.hit = !0, jB.distance = QB.r.Distance(GB, oB), jB.pickedPoint = oB, jB.pickedMesh = this, jB.bu = zB.bu || 0, jB.bv = zB.bv || 0, jB.subMeshFaceId = zB.faceId, jB.faceId = zB.faceId + lB.data[zB._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
```

#### 367. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3495-L3497` → after: `L3495-L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3495-L3497) · [Before (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3495-L3497)

```diff
-             if (this.jU)
-               for (; this.jU.length;) this.jU[0].dispose(HH);
-             else this.jU = [];
+             if (this.iW)
+               for (; this.iW.length;) this.iW[0].dispose(BB);
+             else this.iW = [];
```

#### 368. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3502)

```diff
-             const AH = this.yN();
+             const YB = this.JF();
```

#### 369. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3522-L3523` → after: `L3522-L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3522-L3523) · [Before (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3522-L3523)

```diff
-             const SH = AH.Iu();
-             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, SH.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), SH.wipeCaches(), AH.gR(this), this._parentContainer) {
+             const QB = YB.Lp();
+             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, QB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), QB.wipeCaches(), YB.sF(this), this._parentContainer) {
```

#### 370. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3528` → after: `L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3528) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3528)

```diff
-               for (BH = 0; BH < AH.dU.length; BH++) AH.dU[BH].emitter === this && (AH.dU[BH].dispose(), BH--);
+               for (OB = 0; OB < YB.rW.length; OB++) YB.rW[OB].emitter === this && (YB.rW[OB].dispose(), OB--);
```

#### 371. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3533-L3534` → after: `L3533-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3533-L3534) · [Before (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3533-L3534)

```diff
-             HH.facetNormals || (HH.facetNormals = []), HH.facetPositions || (HH.facetPositions = []), HH.facetPartitioning || (HH.facetPartitioning = new Array), HH.facetNb = this.vrH().length / 3 | 0, HH.partitioningSubdivisions = HH.partitioningSubdivisions ? HH.partitioningSub … [truncated]
-             for (let BH = 0; BH < HH.facetNb; BH++) HH.facetNormals[BH] = SH.o.Zero(), HH.facetPositions[BH] = SH.o.Zero();
+             BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.KDB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSub … [truncated]
+             for (let OB = 0; OB < BB.facetNb; OB++) BB.facetNormals[OB] = QB.r.Zero(), BB.facetPositions[OB] = QB.r.Zero();
```

#### 372. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3540-L3543` → after: `L3540-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3540-L3543) · [Before (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3540-L3543)

```diff
-             const BH = this.getVerticesData(hH.i.PositionKind),
-               LH = this.vrH(),
-               AH = this.getVerticesData(hH.i.NormalKind)?.slice(),
-               rH = this.jF();
+             const OB = this.getVerticesData(oB.h.PositionKind),
+               GB = this.KDB(),
+               YB = this.getVerticesData(oB.h.NormalKind)?.slice(),
+               DB = this.Gw();
```

#### 373. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3558-L3559` → after: `L3558-L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3558-L3559) · [Before (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3558-L3559)

```diff
-                 const BH = this.yN().activeCamera;
-                 HH.facetDepthSortFrom = BH ? BH.position : SH.o.Zero()
+                 const OB = this.JF().activeCamera;
+                 BB.facetDepthSortFrom = OB ? OB.position : QB.r.Zero()
```

#### 374. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3569)

```diff
-               HH.invertedMatrix = SH.e.Identity(), HH.facetDepthSortOrigin = SH.o.Zero()
+               BB.invertedMatrix = QB.d.Identity(), BB.facetDepthSortOrigin = QB.r.Zero()
```

#### 375. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3571)

```diff
-             HH.bbSize.x = rH.maximum.x - rH.minimum.x > PH.d ? rH.maximum.x - rH.minimum.x : PH.d, HH.bbSize.y = rH.maximum.y - rH.minimum.y > PH.d ? rH.maximum.y - rH.minimum.y : PH.d, HH.bbSize.z = rH.maximum.z - rH.minimum.z > PH.d ? rH.maximum.z - rH.minimum.z : PH.d;
+             BB.bbSize.x = DB.maximum.x - DB.minimum.x > AB.b ? DB.maximum.x - DB.minimum.x : AB.b, BB.bbSize.y = DB.maximum.y - DB.minimum.y > AB.b ? DB.maximum.y - DB.minimum.y : AB.b, BB.bbSize.z = DB.maximum.z - DB.minimum.z > AB.b ? DB.maximum.z - DB.minimum.z : AB.b;
```

#### 376. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3573)

```diff
-             if (zH = zH > HH.bbSize.z ? zH : HH.bbSize.z, HH.subDiv.max = HH.partitioningSubdivisions, HH.subDiv.X = Math.floor(HH.subDiv.max * HH.bbSize.x / zH), HH.subDiv.Y = Math.floor(HH.subDiv.max * HH.bbSize.y / zH), HH.subDiv.Z = Math.floor(HH.subDiv.max * HH.bbSize.z / zH … [truncated]
+             if (yB = yB > BB.bbSize.z ? yB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / yB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / yB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / yB … [truncated]
```

#### 377. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3597)

```diff
-             const BH = SH.o.Zero();
+             const OB = QB.r.Zero();
```

#### 378. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3603)

```diff
-             return SH.o.TransformCoordinatesToRef(LH, AH, BH), this
+             return QB.r.TransformCoordinatesToRef(GB, YB, OB), this
```

#### 379. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3606)

```diff
-             const BH = SH.o.Zero();
+             const OB = QB.r.Zero();
```

#### 380. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3611)

```diff
-             return SH.o.TransformNormalToRef(LH, this.getWorldMatrix(), BH), this
+             return QB.r.TransformNormalToRef(GB, this.getWorldMatrix(), OB), this
```

#### 381. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3614` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3614) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3614)

```diff
-             const AH = this.jF(),
+             const YB = this.Gw(),
```

#### 382. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3625` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3625) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3625)

```diff
-               zH = SH.l.Matrix[5];
+               yB = QB.k.Matrix[5];
```

#### 383. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3627-L3628` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3627-L3628) · [Before (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3627-L3628)

```diff
-             const CH = SH.l.lu[8];
-             SH.o.TransformCoordinatesFromFloatsToRef(HH, BH, LH, zH, CH);
+             const JB = QB.k.Xp[8];
+             QB.r.TransformCoordinatesFromFloatsToRef(BB, OB, GB, yB, JB);
```

#### 384. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3630` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3630) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3630)

```diff
-             return AH && SH.o.TransformCoordinatesFromFloatsToRef(AH.x, AH.y, AH.z, tH, AH), EH
+             return YB && QB.r.TransformCoordinatesFromFloatsToRef(YB.x, YB.y, YB.z, jB, YB), MB
```

#### 385. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3655-L3656` → after: `L3655-L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3655-L3656) · [Before (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3655-L3656)

```diff
-             const BH = this.getVerticesData(hH.i.PositionKind),
-               LH = this.vrH();
+             const OB = this.getVerticesData(oB.h.PositionKind),
+               GB = this.KDB();
```

#### 386. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3658-L3660` → after: `L3658-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3658-L3660) · [Before (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3658-L3660)

```diff
-             return AH = this.isVerticesDataPresent(hH.i.NormalKind) ? this.getVerticesData(hH.i.NormalKind) : [], tH.b.ComputeNormals(BH, LH, AH, {
-               useRightHandedSystem: this.yN().useRightHandedSystem
-             }), this.setVerticesData(hH.i.NormalKind, AH, HH), this
+             return YB = this.isVerticesDataPresent(oB.h.NormalKind) ? this.getVerticesData(oB.h.NormalKind) : [], jB.e.ComputeNormals(OB, GB, YB, {
+               useRightHandedSystem: this.JF().useRightHandedSystem
+             }), this.setVerticesData(oB.h.NormalKind, YB, BB), this
```

#### 387. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3663` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3663) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3663)

```diff
-             const HH = this.vrH();
+             const BB = this.KDB();
```

#### 388. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3667)

```diff
-             } = await LH.e(660).then((() => LH(45992)));
+             } = await GB.e(660).then((() => GB(45700)));
```

#### 389. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3671-L3674` → after: `L3671-L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3671-L3674) · [Before (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3671-L3674)

```diff
-             BH || (BH = TH.d.Y);
-             const LH = SH.l.lu[0],
-               AH = SH.l.lu[1];
-             return SH.o.CrossToRef(BH, HH, AH), SH.o.CrossToRef(HH, AH, LH), this.rotationQuaternion ? SH.f.RotationQuaternionFromAxisToRef(LH, HH, AH, this.rotationQuaternion) : SH.o.RotationFromAxisToRef(LH, HH, AH, this.rotation), this
+             OB || (OB = VB.c.Y);
+             const GB = QB.k.Xp[0],
+               YB = QB.k.Xp[1];
+             return QB.r.CrossToRef(OB, BB, YB), QB.r.CrossToRef(BB, YB, GB), this.rotationQuaternion ? QB.f.RotationQuaternionFromAxisToRef(GB, BB, YB, this.rotationQuaternion) : QB.r.RotationFromAxisToRef(GB, BB, YB, this.rotation), this
```

#### 390. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3680` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3680) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3680)

```diff
-             throw (0, WH.i)("EdgesRenderer")
+             throw (0, ZB.j)("EdgesRenderer")
```

#### 391. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3683` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3683) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3683)

```diff
-             throw (0, WH.i)("EdgesRenderer")
+             throw (0, ZB.j)("EdgesRenderer")
```

#### 392. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3686` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3686) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3686)

```diff
-             return this._scene.dU.filter((HH => HH.emitter === this))
+             return this._scene.rW.filter((BB => BB.emitter === this))
```

#### 393. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3690` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3690) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3690)

```diff
-           BH = [VH.g.filter((function() {
+           OB = [nB.j.filter((function() {
```

#### 394. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3692` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3692) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3692)

```diff
-           }))], (0, AH.g)(HH, null, BH, {
+           }))], (0, YB.h)(BB, null, OB, {
```

#### 395. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3708` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3708) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3708)

```diff
-         })(), HH.OCCLUSION_TYPE_NONE = ((0, AH.k)(HH, YH), 0), HH.OCCLUSION_TYPE_OPTIMISTIC = 1, HH.OCCLUSION_TYPE_STRICT = 2, HH.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, HH.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, HH.CULLINGSTRATEGY_STANDARD = 0, HH.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
+         })(), BB.OCCLUSION_TYPE_NONE = ((0, YB.j)(BB, lB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
```

#### 396. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3714` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3714) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3714)

```diff
-     }(YH = lH.prototype).createOrUpdateSubmeshesOctree ?? (YH.createOrUpdateSubmeshesOctree = (0, WH.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (uH = lH.prototype).getPhysicsImpostor ?? (uH.getPhysicsImpostor = (0, WH.f)("AbstractMesh", "getPhysicsImpostor")), (QH = lH … [truncated]
+     }(lB = IB.prototype).createOrUpdateSubmeshesOctree ?? (lB.createOrUpdateSubmeshesOctree = (0, ZB.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (pB = IB.prototype).getPhysicsImpostor ?? (pB.getPhysicsImpostor = (0, ZB.g)("AbstractMesh", "getPhysicsImpostor")), (qB = IB … [truncated]
```

#### 397. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3716` → after: `L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3716) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3716)

```diff
-   41706: (HH, BH, LH) => {
+   41426: (BB, OB, GB) => {
```

#### 398. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3720-L3733` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3720-L3733) · [Before (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3720-L3733)

```diff
-     var AH = LH(37963),
-       rH = LH(38074),
-       SH = LH(41703),
-       hH = LH(41427),
-       tH = LH(41578),
-       zH = LH(41713),
-       CH = LH(41588),
-       EH = LH(41387),
-       XH = LH(39595),
-       GH = LH(41326),
-       YH = LH(41602),
-       uH = LH(37989),
-       QH = LH(41721),
-       WH = LH(41356);
+     var YB = GB(37778),
+       DB = GB(37894),
+       QB = GB(41423),
+       oB = GB(41150),
+       jB = GB(41287),
+       yB = GB(41434),
+       JB = GB(41300),
+       MB = GB(41097),
+       PB = GB(39366),
+       zB = GB(41024),
+       lB = GB(41315),
+       pB = GB(37796),
+       qB = GB(41436),
+       ZB = GB(41067);
```

#### 399. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3739)

```diff
-         this._boundingBias ? this._boundingBias.Tm(HH) : this._boundingBias = HH.clone(), this._updateBoundingInfo(!0, null)
+         this._boundingBias ? this._boundingBias.IU(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
```

#### 400. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3742)

```diff
-         const BH = new MH(MH.RandomId(), HH.yN());
+         const OB = new NB(NB.RandomId(), BB.JF());
```

#### 401. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3753-L3755)

```diff
-           minimum: new AH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-           maximum: new AH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
-         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = BH || uH.d.LastCreatedScene, this._scene && (this.id = HH, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
+           minimum: new YB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+           maximum: new YB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
+         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = OB || pB.b.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
```

#### 402. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3789` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3789) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3789)

```diff
-         const rH = new hH.i(this._engine, BH, HH, {
+         const DB = new oB.h(this._engine, OB, BB, {
```

#### 403. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3807` → after: `L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3807) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3807)

```diff
-         if (rH === hH.i.PositionKind) {
+         if (DB === oB.h.PositionKind) {
```

#### 404. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3809-L3810` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3809-L3810) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3809-L3810)

```diff
-           const LH = this._extend && this._extend.minimum || new AH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-             rH = this._extend && this._extend.maximum || new AH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
+           const GB = this._extend && this._extend.minimum || new YB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+             DB = this._extend && this._extend.maximum || new YB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
```

#### 405. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3826)

```diff
-         AH && (AH.update(BH), HH === hH.i.PositionKind && this._updateBoundingInfo(LH, BH), this._notifyUpdate(HH))
+         YB && (YB.update(OB), BB === oB.h.PositionKind && this._updateBoundingInfo(GB, OB), this._notifyUpdate(BB))
```

#### 406. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3832-L3833` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3832-L3833) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3832-L3833)

```diff
-             BH.hasBoundingInfo ? BH.jF().reConstruct(this._extend.minimum, this._extend.maximum) : BH.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
-             const HH = BH.jU;
+             OB.hasBoundingInfo ? OB.Gw().reConstruct(this._extend.minimum, this._extend.maximum) : OB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
+             const BB = OB.iW;
```

#### 407. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3860` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3860) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3860)

```diff
-         AH && (0, WH.f)(AH, LH.getSize(), LH.type, LH.byteOffset, LH.byteStride, LH.normalized, this._totalVertices, BH[HH])
+         YB && (0, ZB.h)(YB, GB.getSize(), GB.type, GB.byteOffset, GB.byteStride, GB.normalized, this._totalVertices, OB[BB])
```

#### 408. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3910` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3910) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3910)

```diff
-       vrH(HH, BH) {
+       KDB(BB, OB) {
```

#### 409. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3940-L3941` → after: `L3940-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3940-L3941) · [Before (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3940-L3941)

```diff
-           if (!HH && (HH = this.getVerticesData(hH.i.PositionKind), !HH)) return;
-           this._extend = (0, YH.f)(HH, 0, this._totalVertices, this.boundingBias, 3)
+           if (!BB && (BB = this.getVerticesData(oB.h.PositionKind), !BB)) return;
+           this._extend = (0, lB.g)(BB, 0, this._totalVertices, this.boundingBias, 3)
```

#### 410. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3947)

```diff
-           LH._buffer.getBuffer() || LH.create(), BH === hH.i.PositionKind && (this._extend || this._updateExtend(), HH.buildBoundingInfo(this._extend.minimum, this._extend.maximum), HH._createGlobalSubMesh(HH.isUnIndexed), HH._updateBoundingInfo())
+           GB._buffer.getBuffer() || GB.create(), OB === oB.h.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
```

#### 411. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3968)

```diff
-             HH.removePendingData(this), HH.mV || XH.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${LH}`)
+             BB.removePendingData(this), BB.lV || PB.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${GB}`)
```

#### 412. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3973` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3973) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3973)

```diff
-         const HH = this.vrH(!1);
+         const BB = this.KDB(!1);
```

#### 413. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3981)

```diff
-         const BH = this.getVerticesData(hH.i.PositionKind, !1);
+         const OB = this.getVerticesData(oB.h.PositionKind, !1);
```

#### 414. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3984` → after: `L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3984) · [Before (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3984)

```diff
-           this.setVerticesData(hH.i.PositionKind, BH, !1)
+           this.setVerticesData(oB.h.PositionKind, OB, !1)
```

#### 415. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3986)

```diff
-         const LH = this.getVerticesData(hH.i.NormalKind, !1);
+         const GB = this.getVerticesData(oB.h.NormalKind, !1);
```

#### 416. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3989)

```diff
-           this.setVerticesData(hH.i.NormalKind, LH, !1)
+           this.setVerticesData(oB.h.NormalKind, GB, !1)
```

#### 417. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3997` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3997) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3997)

```diff
-         const HH = this.getVerticesData(hH.i.PositionKind);
+         const BB = this.getVerticesData(oB.h.PositionKind);
```

#### 418. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3999` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L3999) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L3999)

```diff
-         for (let BH = 3 * this._positionsCache.length, LH = this._positionsCache.length; BH < HH.length; BH += 3, ++LH) this._positionsCache[LH] = AH.o.FromArray(HH, BH);
+         for (let OB = 3 * this._positionsCache.length, GB = this._positionsCache.length; OB < BB.length; OB += 3, ++GB) this._positionsCache[GB] = YB.r.FromArray(BB, OB);
```

#### 419. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4030)

```diff
-           LH = this.vrH(void 0, !0);
+           GB = this.KDB(void 0, !0);
```

#### 420. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4051-L4052` → after: `L4051-L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4051-L4052) · [Before (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4051-L4052)

```diff
-           const YH = (0, WH.r)(LH, tH, zH, CH, EH, GH, !0),
-             uH = new hH.i(this._engine, YH, AH, {
+           const lB = (0, ZB.v)(GB, jB, yB, JB, MB, zB, !0),
+             pB = new oB.h(this._engine, lB, YB, {
```

#### 421. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4066)

```diff
-         return BH._boundingInfo = new CH.d(this._extend.minimum, this._extend.maximum), BH
+         return OB._boundingInfo = new JB.e(this._extend.minimum, this._extend.maximum), OB
```

#### 422. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4070)

```diff
-         return HH.id = this.id, HH.uniqueId = this.uniqueId, HH.updatable = this._updatable, GH.b && GH.b.HasTags(this) && (HH.tags = GH.b.GetTags(this)), HH
+         return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, zB.e && zB.e.HasTags(this) && (BB.tags = zB.e.GetTags(this)), BB
```

#### 423. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4073` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4073) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4073)

```diff
-         return Array.isArray(HH) ? HH : Array.prototype.slice.call(HH)
+         return Array.isArray(BB) ? BB : Array.prototype.slice.call(BB)
```

#### 424. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4081` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4081) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4081)

```diff
-         return this.isVerticesDataPresent(hH.i.PositionKind) && (HH.positions = this._toNumberArray(this.getVerticesData(hH.i.PositionKind)), this.isVertexBufferUpdatable(hH.i.PositionKind) && (HH.positionsUpdatable = !0)), this.isVerticesDataPresent(hH.i.NormalKind) && (HH.norma … [truncated]
+         return this.isVerticesDataPresent(oB.h.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(oB.h.PositionKind)), this.isVertexBufferUpdatable(oB.h.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(oB.h.NormalKind) && (BB.norma … [truncated]
```

#### 425. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4088)

```diff
-         return EH.i.RandomId()
+         return MB.j.RandomId()
```

#### 426. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4096)

```diff
-         const LH = BH.yN(),
+         const GB = OB.JF(),
```

#### 427. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4106` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4106) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4106)

```diff
-             BH.setVerticesData(hH.i.PositionKind, AH, !1)
+             OB.setVerticesData(oB.h.PositionKind, YB, !1)
```

#### 428. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4110` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4110) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4110)

```diff
-             BH.setVerticesData(hH.i.NormalKind, AH, !1)
+             OB.setVerticesData(oB.h.NormalKind, YB, !1)
```

#### 429. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4114)

```diff
-             BH.setVerticesData(hH.i.TangentKind, AH, !1)
+             OB.setVerticesData(oB.h.TangentKind, YB, !1)
```

#### 430. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4118` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4118) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4118)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 431. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4120` → after: `L4120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4120) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4120)

```diff
-             BH.setVerticesData(hH.i.UVKind, AH, !1)
+             OB.setVerticesData(oB.h.UVKind, YB, !1)
```

#### 432. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4124)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 433. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4126` → after: `L4126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4126) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4126)

```diff
-             BH.setVerticesData(hH.i.UV2Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV2Kind, YB, !1)
```

#### 434. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4130` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4130) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4130)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 435. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4132` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4132) · [Before (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4132)

```diff
-             BH.setVerticesData(hH.i.UV3Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV3Kind, YB, !1)
```

#### 436. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4136)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 437. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4138` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4138) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4138)

```diff
-             BH.setVerticesData(hH.i.UV4Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV4Kind, YB, !1)
```

#### 438. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4142` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4142) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4142)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 439. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4144` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4144) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4144)

```diff
-             BH.setVerticesData(hH.i.UV5Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV5Kind, YB, !1)
```

#### 440. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4148` → after: `L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4148) · [Before (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4148)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 441. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4150` → after: `L4150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4150) · [Before (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4150)

```diff
-             BH.setVerticesData(hH.i.UV6Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV6Kind, YB, !1)
```

#### 442. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4154` → after: `L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4154) · [Before (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4154)

```diff
-             BH.setVerticesData(hH.i.ColorKind, AH, !1, LH.colorsAttrDesc.stride)
+             OB.setVerticesData(oB.h.ColorKind, YB, !1, GB.colorsAttrDesc.stride)
```

#### 443. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4163` → after: `L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4163) · [Before (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4163)

```diff
-             BH.setVerticesData(hH.i.MatricesIndicesKind, rH, !1)
+             OB.setVerticesData(oB.h.MatricesIndicesKind, DB, !1)
```

#### 444. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4172` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4172) · [Before (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4172)

```diff
-             BH.setVerticesData(hH.i.MatricesIndicesExtraKind, rH, !1)
+             OB.setVerticesData(oB.h.MatricesIndicesExtraKind, DB, !1)
```

#### 445. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4176` → after: `L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4176) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4176)

```diff
-             BH.setVerticesData(hH.i.MatricesWeightsKind, AH, !1)
+             OB.setVerticesData(oB.h.MatricesWeightsKind, YB, !1)
```

#### 446. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4184` → after: `L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4184) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4184)

```diff
-             BH.jU = [];
+             OB.iW = [];
```

#### 447. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4191)

```diff
-               tH.d.AddToMesh(LH, rH, SH, hH, zH, BH)
+               jB.c.AddToMesh(GB, DB, QB, oB, yB, OB)
```

#### 448. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4195-L4196` → after: `L4195-L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4195-L4196) · [Before (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4195-L4196)

```diff
-           if (BH.setVerticesData(hH.i.PositionKind, HH.positions, HH.positions._updatable || HH.positionsUpdatable), BH.setVerticesData(hH.i.NormalKind, HH.normals, HH.normals._updatable || HH.normalsUpdatable), HH.tangents && BH.setVerticesData(hH.i.TangentKind, HH.tangents, HH. … [truncated]
-             if (HH.matricesIndices._isExpanded || HH.matricesIndicesExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExpanded, BH.setVerticesData(hH.i.MatricesIndicesKind, HH.matricesIndices, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable);
+           if (OB.setVerticesData(oB.h.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), OB.setVerticesData(oB.h.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && OB.setVerticesData(oB.h.TangentKind, BB.tangents, BB. … [truncated]
+             if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, OB.setVerticesData(oB.h.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
```

#### 449. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4203` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4203) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4203)

```diff
-               BH.setVerticesData(hH.i.MatricesIndicesKind, LH, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable)
+               OB.setVerticesData(oB.h.MatricesIndicesKind, GB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
```

#### 450. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4205` → after: `L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4205) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4205)

```diff
-             if (HH.matricesIndicesExtraExpanded || HH.matricesIndicesExtra._isExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExtraExpanded, BH.setVerticesData(hH.i.MatricesIndicesExtraKind, HH.matricesIndicesExtra, HH.matricesIndicesExtra._updatable ||  … [truncated]
+             if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, OB.setVerticesData(oB.h.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable ||  … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4212-L4213` → after: `L4212-L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4212-L4213) · [Before (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4212-L4213)

```diff
-               BH.setVerticesData(hH.i.MatricesIndicesExtraKind, LH, HH.matricesIndicesExtra._updatable || HH.matricesIndicesExtraUpdatable)
-             } HH.matricesWeights && (MH._CleanMatricesWeights(HH, BH), BH.setVerticesData(hH.i.MatricesWeightsKind, HH.matricesWeights, HH.matricesWeights._updatable)), HH.matricesWeightsExtra && BH.setVerticesData(hH.i.MatricesWeightsExtraKind, HH.matricesWeightsExtra, HH.matric … [truncated]
+               OB.setVerticesData(oB.h.MatricesIndicesExtraKind, GB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
+             } BB.matricesWeights && (NB._CleanMatricesWeights(BB, OB), OB.setVerticesData(oB.h.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && OB.setVerticesData(oB.h.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matric … [truncated]
```

#### 452. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4215-L4219` → after: `L4215-L4219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4215-L4219) · [Before (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4215-L4219)

```diff
-         if (HH.jU) {
-           BH.jU = [];
-           for (let LH = 0; LH < HH.jU.length; LH++) {
-             const AH = HH.jU[LH];
-             tH.d.AddToMesh(AH.materialIndex, AH.verticesStart, AH.verticesCount, AH.indexStart, AH.indexCount, BH)
+         if (BB.iW) {
+           OB.iW = [];
+           for (let GB = 0; GB < BB.iW.length; GB++) {
+             const YB = BB.iW[GB];
+             jB.c.AddToMesh(YB.materialIndex, YB.verticesStart, YB.verticesCount, YB.indexStart, YB.indexCount, OB)
```

#### 453. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4226` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4226) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4226)

```diff
-         if (!zH.d.CleanBoneMatrixWeights) return;
+         if (!yB.c.CleanBoneMatrixWeights) return;
```

#### 454. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4230` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4230) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4230)

```diff
-           const LH = BH.yN().getLastSkeletonById(HH.skeletonId);
+           const GB = OB.JF().getLastSkeletonById(BB.skeletonId);
```

#### 455. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4234-L4235` → after: `L4234-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4234-L4235) · [Before (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4234-L4235)

```diff
-         const rH = BH.getVerticesData(hH.i.MatricesIndicesKind),
-           SH = BH.getVerticesData(hH.i.MatricesIndicesExtraKind),
+         const DB = OB.getVerticesData(oB.h.MatricesIndicesKind),
+           QB = OB.getVerticesData(oB.h.MatricesIndicesExtraKind),
```

#### 456. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4259` → after: `L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4259) · [Before (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4259)

```diff
-         BH.setVerticesData(hH.i.MatricesIndicesKind, rH), HH.matricesWeightsExtra && BH.setVerticesData(hH.i.MatricesIndicesExtraKind, SH)
+         OB.setVerticesData(oB.h.MatricesIndicesKind, DB), BB.matricesWeightsExtra && OB.setVerticesData(oB.h.MatricesIndicesExtraKind, QB)
```

#### 457. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4263` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4263) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4263)

```diff
-         return rH._loadedUniqueId = HH.uniqueId, GH.b && GH.b.AddTagsTo(rH, HH.tags), HH.delayLoadingFile ? (rH.delayLoadState = 4, rH.delayLoadingFile = LH + HH.delayLoadingFile, rH._boundingInfo = new CH.d(AH.o.FromArray(HH.boundingBoxMinimum), AH.o.FromArray(HH.boundingBoxMaxi … [truncated]
+         return DB._loadedUniqueId = BB.uniqueId, zB.e && zB.e.AddTagsTo(DB, BB.tags), BB.delayLoadingFile ? (DB.delayLoadState = 4, DB.delayLoadingFile = GB + BB.delayLoadingFile, DB._boundingInfo = new JB.e(YB.r.FromArray(BB.boundingBoxMinimum), YB.r.FromArray(BB.boundingBoxMaxi … [truncated]
```

#### 458. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4267` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4267) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4267)

```diff
-   41762: (HH, BH, LH) => {
+   41462: (BB, OB, GB) => {
```

#### 459. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4269-L4270` → after: `L4269-L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4269-L4270) · [Before (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4269-L4270)

```diff
-       c: () => XH,
-       e: () => uH
+       b: () => PB,
+       f: () => pB
```

#### 460. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4272-L4279` → after: `L4272-L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4272-L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4272-L4279) · [Before (L4272-L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4272-L4279)

```diff
-     var AH = LH(37963),
-       rH = LH(39595),
-       SH = LH(41730),
-       hH = LH(41693),
-       tH = LH(39588),
-       zH = LH(41738),
-       CH = LH(41427),
-       EH = LH(38012);
+     var YB = GB(37778),
+       DB = GB(39366),
+       QB = GB(41442),
+       oB = GB(41411),
+       jB = GB(39358),
+       yB = GB(41444),
+       JB = GB(41150),
+       MB = GB(37823);
```

#### 461. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4282` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4282) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4282)

```diff
-         super(HH, BH.yN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, BH.nHH(this), this._sourceMesh = BH, this._unIndexed = BH._unIndexed, this.position.Tm(BH.position), this.rotation.Tm(BH.rotation), this.bX.Tm(BH.bX), BH.rotationQuaternion && (this … [truncated]
+         super(BB, OB.JF()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, OB.hBB(this), this._sourceMesh = OB, this._unIndexed = OB._unIndexed, this.position.IU(OB.position), this.rotation.IU(OB.rotation), this.SP.IU(OB.SP), OB.rotationQuaternion && (this … [truncated]
```

#### 462. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4286` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4286) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4286)

```diff
-           const HH = BH.jF();
+           const BB = OB.Gw();
```

#### 463. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4304` → after: `L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4304) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4304)

```diff
-         this._sourceMesh?.receiveShadows !== HH && rH.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
+         this._sourceMesh?.receiveShadows !== BB && DB.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
```

#### 464. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4310` → after: `L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4310) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4310)

```diff
-         this._sourceMesh?.material !== HH && rH.e.Warn("Setting material on an instanced mesh has no effect")
+         this._sourceMesh?.material !== BB && DB.b.Warn("Setting material on an instanced mesh has no effect")
```

#### 465. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4316` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4316) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4316)

```diff
-         this._sourceMesh?.visibility !== HH && rH.e.Warn("Setting visibility on an instanced mesh has no effect")
+         this._sourceMesh?.visibility !== BB && DB.b.Warn("Setting visibility on an instanced mesh has no effect")
```

#### 466. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4322` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4322) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4322)

```diff
-         this._sourceMesh?.skeleton !== HH && rH.e.Warn("Setting skeleton on an instanced mesh has no effect")
+         this._sourceMesh?.skeleton !== BB && DB.b.Warn("Setting skeleton on an instanced mesh has no effect")
```

#### 467. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4328` → after: `L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4328) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4328)

```diff
-         this._sourceMesh && HH !== this._sourceMesh.renderingGroupId && rH.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
+         this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && DB.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
```

#### 468. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4334` → after: `L4334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4334) · [Before (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4334)

```diff
-         this._sourceMesh && HH !== this._sourceMesh.meshBlendingTag && rH.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
+         this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && DB.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
```

#### 469. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4342` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4342) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4342)

```diff
-       get XSH() {
+       get AQB() {
```

#### 470. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4365` → after: `L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4365) · [Before (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4365)

```diff
-         return this.XSH && this.XSH.setVerticesData(HH, BH, LH, AH), this.XSH
+         return this.AQB && this.AQB.setVerticesData(BB, OB, GB, YB), this.AQB
```

#### 471. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4368` → after: `L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4368) · [Before (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4368)

```diff
-         return this.XSH && this.XSH.updateVerticesData(HH, BH, LH, AH), this.XSH
+         return this.AQB && this.AQB.updateVerticesData(BB, OB, GB, YB), this.AQB
```

#### 472. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4372` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4372) · [Before (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4372)

```diff
-         return this.XSH && this.XSH.setIndices(HH, BH), this.XSH
+         return this.AQB && this.AQB.setIndices(BB, OB), this.AQB
```

#### 473. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4377-L4378` → after: `L4377-L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4377-L4378) · [Before (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4377-L4378)

```diff
-       vrH() {
-         return this._sourceMesh.vrH()
+       KDB() {
+         return this._sourceMesh.KDB()
```

#### 474. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4386-L4387` → after: `L4386-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4386-L4387) · [Before (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4386-L4387)

```diff
-         if (this.hasBoundingInfo && this.jF().isLocked) return this;
-         HH = "object" === typeof BH ? BH : {
+         if (this.hasBoundingInfo && this.Gw().isLocked) return this;
+         BB = "object" === typeof OB ? OB : {
```

#### 475. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4392` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4392) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4392)

```diff
-         return this._refreshBoundingInfo(this._sourceMesh._getData(HH, null, CH.i.PositionKind), AH), this
+         return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, JB.h.PositionKind), YB), this
```

#### 476. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4398)

```diff
-         if (super._activate(HH, BH), this._sourceMesh.jU || rH.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
+         if (super._activate(BB, OB), this._sourceMesh.iW || DB.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
```

#### 477. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4410-L4411` → after: `L4410-L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4410-L4411) · [Before (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4410-L4411)

```diff
-         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== zH.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
-           this._billboardWorldMatrix || (this._billboardWorldMatrix = new AH.e);
+         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== yB.h.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
+           this._billboardWorldMatrix || (this._billboardWorldMatrix = new YB.d);
```

#### 478. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4413` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4413) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4413)

```diff
-           return this._currentLOD._masterMesh = this, AH.l.lu[7].Tm(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Tm(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Tm(AH.l.lu[7]), this._currentLOD._masterMesh = … [truncated]
+           return this._currentLOD._masterMesh = this, YB.k.Xp[7].IU(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.IU(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.IU(YB.k.Xp[7]), this._currentLOD._masterMesh = … [truncated]
```

#### 479. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4422)

```diff
-         const BH = this.XSH.getLODLevels();
+         const OB = this.AQB.getLODLevels();
```

#### 480. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4424-L4426` → after: `L4424-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4424-L4426) · [Before (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4424-L4426)

```diff
-           const BH = this.jF();
-           this._currentLOD = this.XSH.getLOD(HH, BH.nrH)
-         } else this._currentLOD = this.XSH;
+           const OB = this.Gw();
+           this._currentLOD = this.AQB.getLOD(BB, OB.xDB)
+         } else this._currentLOD = this.AQB;
```

#### 481. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4430` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4430) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4430)

```diff
-         return this.XSH._preActivateForIntermediateRendering(HH)
+         return this.AQB._preActivateForIntermediateRendering(BB)
```

#### 482. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4433-L4434` → after: `L4433-L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4433-L4434) · [Before (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4433-L4434)

```diff
-         if (this.releaseSubMeshes(), this._sourceMesh.jU)
-           for (let HH = 0; HH < this._sourceMesh.jU.length; HH++) this._sourceMesh.jU[HH].clone(this, this._sourceMesh);
+         if (this.releaseSubMeshes(), this._sourceMesh.iW)
+           for (let BB = 0; BB < this._sourceMesh.iW.length; BB++) this._sourceMesh.iW[BB].clone(this, this._sourceMesh);
```

#### 483. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4441)

```diff
-         return this.hasBoundingInfo ? this.jF().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+         return this.hasBoundingInfo ? this.Gw().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 484. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4447-L4449` → after: `L4447-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4447-L4449) · [Before (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4447-L4449)

```diff
-         if (tH.d.DeepCopy(this, AH, ["name", "jU", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "XSH", "xR", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "ESH", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
-           for (let rH = 0; rH < this.yN().meshes.length; rH++) {
-             const HH = this.yN().meshes[rH];
+         if (jB.b.DeepCopy(this, YB, ["name", "iW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "AQB", "SF", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "WQB", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
+           for (let DB = 0; DB < this.JF().meshes.length; DB++) {
+             const BB = this.JF().meshes[DB];
```

#### 485. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4456` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4456) · [Before (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4456)

```diff
-         this._sourceMesh.DHH(this), super.dispose(HH, BH)
+         this._sourceMesh.eBB(this), super.dispose(BB, OB)
```

#### 486. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4484-L4486` → after: `L4484-L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4484-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4484-L4486) · [Before (L4484-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4484-L4486)

```diff
-         if (BH.kF) {
-           LH.kF = {};
-           for (const HH in BH.kF) LH.kF[HH] = BH.kF[HH]
+         if (OB.yX) {
+           GB.yX = {};
+           for (const BB in OB.yX) GB.yX[BB] = OB.yX[BB]
```

#### 487. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4489-L4492` → after: `L4489-L4492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4489-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4489-L4492) · [Before (L4489-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4489-L4492)

```diff
-       }, hH.c.prototype.uF = function(HH, BH) {
-         if (!this.kF) {
-           this.kF = {};
-           for (const HH of this.instances) HH.kF = {}
+       }, oB.c.prototype.BX = function(BB, OB) {
+         if (!this.yX) {
+           this.yX = {};
+           for (const BB of this.instances) BB.yX = {}
```

#### 488. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4499-L4500` → after: `L4499-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4499-L4500) · [Before (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4499-L4500)

```diff
-           vertexArrayObjects: this.Iu().getCaps().vertexArrayObject ? {} : void 0
-         }), this.kF[HH] = null, this._userInstancedBuffersStorage.strides[HH] = BH;
+           vertexArrayObjects: this.Lp().getCaps().vertexArrayObject ? {} : void 0
+         }), this.yX[BB] = null, this._userInstancedBuffersStorage.strides[BB] = OB;
```

#### 489. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4507` → after: `L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4507) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4507)

```diff
-         for (const AH of this.instances) AH.kF[HH] = null;
+         for (const YB of this.instances) YB.yX[BB] = null;
```

#### 490. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4524-L4525` → after: `L4524-L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4524-L4525) · [Before (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4524-L4525)

```diff
-         BH && (YH(this.kF, tH, zH, hH, EH), EH += AH);
-         for (let CH = 0; CH < rH; CH++) YH(HH[CH].kF, tH, zH, hH, EH), EH += AH;
+         OB && (lB(this.yX, jB, yB, oB, MB), MB += YB);
+         for (let JB = 0; JB < DB; JB++) lB(BB[JB].yX, jB, yB, oB, MB), MB += YB;
```

#### 491. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4534` → after: `L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4534) · [Before (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4534)

```diff
-         const WH = new CH.b(this.Iu(), hH, !0, AH, !1, !0);
+         const ZB = new JB.c(this.Lp(), oB, !0, YB, !1, !0);
```

#### 492. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4546` → after: `L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4546) · [Before (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4546)

```diff
-           for (const HH in this._userInstancedBuffersStorage.vertexArrayObjects) this.Iu().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[HH]);
+           for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.Lp().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
```

#### 493. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4552)

```diff
-         for (const BH in this.kF) this._userInstancedBuffersStorage.vertexBuffers[BH] && this._userInstancedBuffersStorage.vertexBuffers[BH].dispose();
+         for (const OB in this.yX) this._userInstancedBuffersStorage.vertexBuffers[OB] && this._userInstancedBuffersStorage.vertexBuffers[OB].dispose();
```

#### 494. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4558` → after: `L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4558) · [Before (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4558)

```diff
-         this._invalidateInstanceVertexArrayObject(), this.kF = {}
+         this._invalidateInstanceVertexArrayObject(), this.yX = {}
```

#### 495. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4562)

```diff
-   41693: (HH, BH, LH) => {
+   41411: (BB, OB, GB) => {
```

#### 496. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4565-L4566` → after: `L4565-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4565-L4566) · [Before (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4565-L4566)

```diff
-       g: () => yH,
-       i: () => DH
+       f: () => tB,
+       j: () => aB
```

#### 497. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4568-L4591` → after: `L4568-L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4568-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4568-L4591) · [Before (L4568-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4568-L4591)

```diff
-     var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH = LH(37997),
-       xH = LH(41387),
-       vH = LH(41336),
-       PH = LH(39588),
-       TH = LH(41326),
-       UH = LH(41697),
-       VH = LH(41489),
-       OH = LH(37963),
-       bH = LH(38074),
-       kH = LH(41498),
-       mH = LH(41427),
-       oH = LH(41703),
-       IH = LH(41706),
-       fH = LH(41730),
-       lH = LH(41578),
-       KH = LH(41573),
- ... (8 more removed lines; see GitHub link above)
+     var YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB = GB(37802),
+       RB = GB(41097),
+       WB = GB(41035),
+       AB = GB(39358),
+       VB = GB(41024),
+       SB = GB(41420),
+       nB = GB(41217),
+       UB = GB(37778),
+       fB = GB(37894),
+       kB = GB(41220),
+       dB = GB(41150),
+       KB = GB(41423),
+       uB = GB(41426),
+       mB = GB(41442),
+       IB = GB(41287),
+       FB = GB(41283),
+ ... (8 more added lines; see GitHub link above)
```

#### 498. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4644` → after: `L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4644) · [Before (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4644)

```diff
-         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== HH && (HH && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(mH.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
+         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(dB.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
```

#### 499. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4647` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4647) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4647)

```diff
-         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new MH.d), this._internalMeshDataInfo._onBeforeRenderObservable
+         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new NB.b), this._internalMeshDataInfo._onBeforeRenderObservable
```

#### 500. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4650` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4650) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4650)

```diff
-         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new MH.d), this._internalMeshDataInfo._onBeforeBindObservable
+         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new NB.b), this._internalMeshDataInfo._onBeforeBindObservable
```

#### 501. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4653` → after: `L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4653) · [Before (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4653)

```diff
-         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new MH.d), this._internalMeshDataInfo._onAfterRenderObservable
+         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new NB.b), this._internalMeshDataInfo._onAfterRenderObservable
```

#### 502. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4656)

```diff
-         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new MH.d), this._internalMeshDataInfo._onBetweenPassObservable
+         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new NB.b), this._internalMeshDataInfo._onBetweenPassObservable
```

#### 503. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4659` → after: `L4659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4659) · [Before (L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4659)

```diff
-         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new MH.d), this._internalMeshDataInfo._onBeforeDrawObservable
+         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new NB.b), this._internalMeshDataInfo._onBeforeDrawObservable
```

#### 504. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4664` → after: `L4664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4664) · [Before (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4664)

```diff
-       get ESH() {
+       get WQB() {
```

#### 505. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4744-L4745` → after: `L4744-L4745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4744-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4744-L4745) · [Before (L4744-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4744-L4745)

```diff
-         const rH = this.yN();
-         if (HH._geometry && HH._geometry.applyToMesh(this), PH.d.DeepCopy(HH, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "ESH", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+         const DB = this.JF();
+         if (BB._geometry && BB._geometry.applyToMesh(this), AB.b.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "WQB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
```

#### 506. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4749` → after: `L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4749) · [Before (L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4749)

```diff
-         if (HH.metadata && HH.metadata.clone ? this.metadata = HH.metadata.clone() : this.metadata = HH.metadata, this._internalMetadata = HH._internalMetadata, this.meshBlendingTag = HH.meshBlendingTag, TH.b && TH.b.HasTags(HH) && TH.b.AddTagsTo(this, TH.b.GetTags(HH, !0)), this … [truncated]
+         if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, VB.e && VB.e.HasTags(BB) && VB.e.AddTagsTo(this, VB.e.GetTags(BB, !0)), this … [truncated]
```

#### 507. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4756` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4756) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4756)

```diff
-         if (HH.morphTargetManager && (this.morphTargetManager = HH.morphTargetManager), (0, jH.c)(rH.getPhysicsEngine)) {
+         if (BB.morphTargetManager && (this.morphTargetManager = BB.morphTargetManager), (0, EB.b)(DB.getPhysicsEngine)) {
```

#### 508. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4764-L4765` → after: `L4764-L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4764-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4764-L4765) · [Before (L4764-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4764-L4765)

```diff
-         for (let SH = 0; SH < rH.dU.length; SH++) {
-           const BH = rH.dU[SH];
+         for (let QB = 0; QB < DB.rW.length; QB++) {
+           const OB = DB.rW[QB];
```

#### 509. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4768` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4768) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4768)

```diff
-         if (this.skeleton = HH.skeleton, AH && (HH._thinInstanceDataStorage.matrixData ? (this.yHH("matrix", new Float32Array(HH._thinInstanceDataStorage.matrixData), 16, !HH._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = HH … [truncated]
+         if (this.skeleton = BB.skeleton, YB && (BB._thinInstanceDataStorage.matrixData ? (this.DOB("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB … [truncated]
```

#### 510. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4770` → after: `L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4770) · [Before (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4770)

```diff
-           for (const HH in BH.data) this.yHH(HH, new Float32Array(BH.data[HH]), BH.strides[HH], !BH.vertexBuffers?.[HH]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[HH] = BH.sizes[HH]
+           for (const BB in OB.data) this.DOB(BB, new Float32Array(OB.data[BB]), OB.strides[BB], !OB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = OB.sizes[BB]
```

#### 511. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4780` → after: `L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4780) · [Before (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4780)

```diff
-         super(HH, LH), this._internalMeshDataInfo = new sH, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new aH, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation =  … [truncated]
+         super(BB, GB), this._internalMeshDataInfo = new HB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new CB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation =  … [truncated]
```

#### 512. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4788)

```diff
-         rH && this._copySource(rH, SH, hH, tH), null !== BH && (this.parent = BH), this._instanceDataStorage.hardwareInstancedRendering = this.Iu().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = HH => {
+         DB && this._copySource(DB, QB, oB, jB), null !== OB && (this.parent = OB), this._instanceDataStorage.hardwareInstancedRendering = this.Lp().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
```

#### 513. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4792` → after: `L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4792) · [Before (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4792)

```diff
-         }, this.onMeshReadyObservable = new MH.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), rH && rH.onClonedObservable.notifyObservers(this)
+         }, this.onMeshReadyObservable = new NB.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), DB && DB.onClonedObservable.notifyObservers(this)
```

#### 514. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4799-L4800` → after: `L4799-L4800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4799-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4799-L4800) · [Before (L4799-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4799-L4800)

```diff
-         AH.parent = HH || this.parent, AH.position = this.position.clone(), AH.bX = this.bX.clone(), this.rotationQuaternion ? AH.rotationQuaternion = this.rotationQuaternion.clone() : AH.rotation = this.rotation.clone(), LH && LH(this, AH);
-         for (const rH of this.getChildTransformNodes(!0)) "InstancedMesh" === rH.getClassName() && "Mesh" === AH.getClassName() && rH.XSH === this ? rH.instantiateHierarchy(AH, {
+         YB.parent = BB || this.parent, YB.position = this.position.clone(), YB.SP = this.SP.clone(), this.rotationQuaternion ? YB.rotationQuaternion = this.rotationQuaternion.clone() : YB.rotation = this.rotation.clone(), GB && GB(this, YB);
+         for (const DB of this.getChildTransformNodes(!0)) "InstancedMesh" === DB.getClassName() && "Mesh" === YB.getClassName() && DB.AQB === this ? DB.instantiateHierarchy(YB, {
```

#### 515. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4818-L4819` → after: `L4818-L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4818-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4818-L4819) · [Before (L4818-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4818-L4819)

```diff
-             const HH = this.vrH(),
-               LH = this.getVerticesData(mH.i.PositionKind);
+             const BB = this.KDB(),
+               GB = this.getVerticesData(dB.h.PositionKind);
```

#### 516. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4836` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4836) · [Before (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4836)

```diff
-         this._internalMeshDataInfo._LODLevels.sort(((BH, LH) => BH.distanceOrScreenCoverage < LH.distanceOrScreenCoverage ? HH : BH.distanceOrScreenCoverage > LH.distanceOrScreenCoverage ? -HH : 0))
+         this._internalMeshDataInfo._LODLevels.sort(((OB, GB) => OB.distanceOrScreenCoverage < GB.distanceOrScreenCoverage ? BB : OB.distanceOrScreenCoverage > GB.distanceOrScreenCoverage ? -BB : 0))
```

#### 517. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4839` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4839) · [Before (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4839)

```diff
-         if (BH && BH._masterMesh) return NH.e.Warn("You cannot use a mesh as LOD level twice"), this;
+         if (OB && OB._masterMesh) return XB.b.Warn("You cannot use a mesh as LOD level twice"), this;
```

#### 518. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4859-L4860` → after: `L4859-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4859-L4860) · [Before (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4859-L4860)

```diff
-         const AH = BH || this.jF().nrH,
-           rH = HH.mode === VH.d.ORTHOGRAPHIC_CAMERA ? HH.minZ : AH.centerWorld.subtract(HH.globalPosition).length();
+         const YB = OB || this.Gw().xDB,
+           DB = BB.mode === nB.e.ORTHOGRAPHIC_CAMERA ? BB.minZ : YB.centerWorld.subtract(BB.globalPosition).length();
```

#### 519. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4925-L4926` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4925-L4926) · [Before (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4925-L4926)

```diff
-       vrH(HH, BH) {
-         return this._geometry ? this._geometry.vrH(HH, BH) : []
+       KDB(BB, OB) {
+         return this._geometry ? this._geometry.KDB(BB, OB) : []
```

#### 520. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4936` → after: `L4936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4936) · [Before (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4936)

```diff
-         if (!this.jU || 0 === this.jU.length) return !0;
+         if (!this.iW || 0 === this.iW.length) return !0;
```

#### 521. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4938-L4939` → after: `L4938-L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4938-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4938-L4939) · [Before (L4938-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4938-L4939)

```diff
-         const LH = this.Iu(),
-           AH = this.yN(),
+         const GB = this.Lp(),
+           YB = this.JF(),
```

#### 522. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4945-L4946` → after: `L4945-L4946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4945-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4945-L4946) · [Before (L4945-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4945-L4946)

```diff
-             for (const tH of this.jU) {
-               const HH = tH.eu();
+             for (const jB of this.iW) {
+               const BB = jB.cp();
```

#### 523. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4963-L4964` → after: `L4963-L4964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4963-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4963-L4964) · [Before (L4963-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4963-L4964)

```diff
-                 for (const BH of this.jU)
-                   if (!HH.isReady(BH, rH, BH.eu()?.needAlphaBlendingForMesh(this) ?? !1)) return LH.currentRenderPassId = hH, !1
+                 for (const OB of this.iW)
+                   if (!BB.isReady(OB, DB, OB.cp()?.needAlphaBlendingForMesh(this) ?? !1)) return GB.currentRenderPassId = oB, !1
```

#### 524. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4994` → after: `L4994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L4994) · [Before (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L4994)

```diff
-           BH = this.yN().getRenderId();
+           OB = this.JF().getRenderId();
```

#### 525. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5010` → after: `L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5010) · [Before (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5010)

```diff
-         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.cu || this.thinInstanceRefreshBoundingInfo(!1))
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Ep || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 526. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5018-L5019` → after: `L5018-L5019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5018-L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5018-L5019) · [Before (L5018-L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5018-L5019)

```diff
-         if (this.hasBoundingInfo && this.jF().isLocked) return this;
-         HH = "object" === typeof BH ? BH : {
+         if (this.hasBoundingInfo && this.Gw().isLocked) return this;
+         BB = "object" === typeof OB ? OB : {
```

#### 527. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5024` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5024) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5024)

```diff
-         return this._refreshBoundingInfo(this._getData(HH, null, mH.i.PositionKind), AH), this
+         return this._refreshBoundingInfo(this._getData(BB, null, dB.h.PositionKind), YB), this
```

#### 528. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5028-L5030` → after: `L5028-L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5028-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5028-L5030) · [Before (L5028-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5028-L5030)

```diff
-         if (!BH || !this.vrH()) return null;
-         if (this.jU && this.jU.length > 0) {
-           const LH = this.vrH();
+         if (!OB || !this.KDB()) return null;
+         if (this.iW && this.iW.length > 0) {
+           const GB = this.KDB();
```

#### 529. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5036` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5036) · [Before (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5036)

```diff
-             for (const HH of this.jU) {
+             for (const BB of this.iW) {
```

#### 530. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5046` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5046) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5046)

```diff
-           if (!rH) return this.jU[0]
+           if (!DB) return this.iW[0]
```

#### 531. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5048` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5048) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5048)

```diff
-         return this.releaseSubMeshes(), new lH.d(0, 0, BH, 0, this.getTotalIndices() || (this.isUnIndexed ? BH : 0), this)
+         return this.releaseSubMeshes(), new IB.c(0, 0, OB, 0, this.getTotalIndices() || (this.isUnIndexed ? OB : 0), this)
```

#### 532. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5057` → after: `L5057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5057) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5057)

```diff
-         for (let rH = 0; rH < HH && !(AH >= BH); rH++) lH.d.CreateFromIndices(0, AH, AH + LH >= BH ? BH - AH : LH, this, void 0, !1), AH += LH;
+         for (let DB = 0; DB < BB && !(YB >= OB); DB++) IB.c.CreateFromIndices(0, YB, YB + GB >= OB ? OB - YB : GB, this, void 0, !1), YB += GB;
```

#### 533. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5065` → after: `L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5065) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5065)

```diff
-           const AH = new oH.b;
+           const YB = new KB.e;
```

#### 534. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5067` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5067) · [Before (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5067)

```diff
-           const rH = this.yN();
+           const DB = this.JF();
```

#### 535. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5090` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5090) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5090)

```diff
-         const LH = this.getVerticesData(mH.i.PositionKind);
+         const GB = this.getVerticesData(dB.h.PositionKind);
```

#### 536. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5092-L5094` → after: `L5092-L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5092-L5094) · [Before (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5092-L5094)

```diff
-         if (HH(LH), this.updateVerticesData(mH.i.PositionKind, LH, !1, !1), BH) {
-           const HH = this.vrH(),
-             BH = this.getVerticesData(mH.i.NormalKind);
+         if (BB(GB), this.updateVerticesData(dB.h.PositionKind, GB, !1, !1), OB) {
+           const BB = this.KDB(),
+             OB = this.getVerticesData(dB.h.NormalKind);
```

#### 537. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5096)

```diff
-           oH.b.ComputeNormals(LH, HH, BH), this.updateVerticesData(mH.i.NormalKind, BH, !1, !1)
+           KB.e.ComputeNormals(GB, BB, OB), this.updateVerticesData(dB.h.NormalKind, OB, !1, !1)
```

#### 538. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5110` → after: `L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5110) · [Before (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5110)

```diff
-         rH || (rH = new IH.d(IH.d.RandomId(), this.yN(), void 0, void 0, this)), rH.setIndexBuffer(HH, BH, LH, AH)
+         DB || (DB = new uB.d(uB.d.RandomId(), this.JF(), void 0, void 0, this)), DB.setIndexBuffer(BB, OB, GB, YB)
```

#### 539. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5118` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5118) · [Before (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5118)

```diff
-           const AH = new oH.b;
+           const YB = new KB.e;
```

#### 540. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5120` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5120) · [Before (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5120)

```diff
-           const rH = this.yN();
+           const DB = this.JF();
```

#### 541. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5135` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5135) · [Before (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5135)

```diff
-         const rH = this.yN().Iu();
+         const DB = this.JF().Lp();
```

#### 542. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5138` → after: `L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5138) · [Before (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5138)

```diff
-           if (this._getRenderingFillMode(LH) === KH.c.WireFrameFillMode) SH = HH._getLinesIndexBuffer(this.vrH(), rH);
+           if (this._getRenderingFillMode(GB) === FB.b.WireFrameFillMode) QB = BB._getLinesIndexBuffer(this.KDB(), DB);
```

#### 543. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5141` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5141) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5141)

```diff
-           case KH.c.PointFillMode:
+           case FB.b.PointFillMode:
```

#### 544. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5144-L5145` → after: `L5144-L5145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5144-L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5144-L5145) · [Before (L5144-L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5144-L5145)

```diff
-           case KH.c.WireFrameFillMode:
-             SH = HH._getLinesIndexBuffer(this.vrH(), rH);
+           case FB.b.WireFrameFillMode:
+             QB = BB._getLinesIndexBuffer(this.KDB(), DB);
```

#### 545. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5148` → after: `L5148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5148) · [Before (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5148)

```diff
-           case KH.c.TriangleFillMode:
+           case FB.b.TriangleFillMode:
```

#### 546. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5168)

```diff
-         const AH = this.yN().Iu(),
+         const YB = this.JF().Lp(),
```

#### 547. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5171)

```diff
-         return this._unIndexed && BH !== KH.c.WireFrameFillMode || BH == KH.c.PointFillMode ? AH.drawArraysType(BH, HH.verticesStart, HH.verticesCount, this.forcedInstanceCount || LH) : BH == KH.c.WireFrameFillMode ? AH.drawElementsType(BH, 0, HH._linesIndexCount, this.forcedInst … [truncated]
+         return this._unIndexed && OB !== FB.b.WireFrameFillMode || OB == FB.b.PointFillMode ? YB.drawArraysType(OB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || GB) : OB == FB.b.WireFrameFillMode ? YB.drawElementsType(OB, 0, BB._linesIndexCount, this.forcedInst … [truncated]
```

#### 548. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5192` → after: `L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5192) · [Before (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5192)

```diff
-         const AH = this.yN(),
+         const YB = this.JF(),
```

#### 549. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5220-L5221` → after: `L5220-L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5220-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5220-L5221) · [Before (L5220-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5220-L5221)

```diff
-             this._scene.needsPreviousWorldMatrices && (CH.masterMeshPreviousWorldMatrix ? (CH.masterMeshPreviousWorldMatrix.copyToArray(zH.instancesPreviousData, GH), CH.masterMeshPreviousWorldMatrix.Tm(BH)) : (CH.masterMeshPreviousWorldMatrix = BH.clone(), CH.masterMeshPreviousW … [truncated]
-             const HH = BH.xrH();
+             this._scene.needsPreviousWorldMatrices && (JB.masterMeshPreviousWorldMatrix ? (JB.masterMeshPreviousWorldMatrix.copyToArray(yB.instancesPreviousData, zB), JB.masterMeshPreviousWorldMatrix.IU(OB)) : (JB.masterMeshPreviousWorldMatrix = OB.clone(), JB.masterMeshPreviousW … [truncated]
+             const BB = OB.dDB();
```

#### 550. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5225)

```diff
-             if (iH.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && HH.eu()?.needAlphaBlendingForMesh(HH.getRenderingMesh())) {
+             if (sB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.cp()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
```

#### 551. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5229` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5229) · [Before (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5229)

```diff
-                 LH._distanceToCamera = OH.o.Distance(LH.jF().nrH.centerWorld, HH)
+                 GB._distanceToCamera = UB.r.Distance(GB.Gw().xDB.centerWorld, BB)
```

#### 552. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5236-L5237` → after: `L5236-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5236-L5237) · [Before (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5236-L5237)

```diff
-               LH.copyToArray(zH.instancesData, GH), this._scene.needsPreviousWorldMatrices && (BH._previousWorldMatrix ? (BH._previousWorldMatrix.copyToArray(zH.instancesPreviousData, GH), BH._previousWorldMatrix.Tm(LH)) : (BH._previousWorldMatrix = LH.clone(), BH._previousWorldM … [truncated]
-               const AH = LH.xrH();
+               GB.copyToArray(yB.instancesData, zB), this._scene.needsPreviousWorldMatrices && (OB._previousWorldMatrix ? (OB._previousWorldMatrix.copyToArray(yB.instancesPreviousData, zB), OB._previousWorldMatrix.IU(GB)) : (OB._previousWorldMatrix = GB.clone(), OB._previousWorldM … [truncated]
+               const YB = GB.dDB();
```

#### 553. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5244` → after: `L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5244) · [Before (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5244)

```diff
-           if (EH && EH.dispose(), XH && XH.dispose(), EH = new mH.b(AH, zH.instancesData, !0, 16, !1, !0), zH.instancesBuffer = EH, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
+           if (MB && MB.dispose(), PB && PB.dispose(), MB = new dB.c(YB, yB.instancesData, !0, 16, !1, !0), yB.instancesBuffer = MB, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
```

#### 554. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5249)

```diff
-               vertexArrayObjects: this.Iu().getCaps().vertexArrayObject ? {} : void 0
+               vertexArrayObjects: this.Lp().getCaps().vertexArrayObject ? {} : void 0
```

#### 555. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5256` → after: `L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5256) · [Before (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5256)

```diff
-           HH.world0 = EH.createVertexBuffer("world0", 0, 4), HH.world1 = EH.createVertexBuffer("world1", 4, 4), HH.world2 = EH.createVertexBuffer("world2", 8, 4), HH.world3 = EH.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (XH = new mH.b(AH, zH.i … [truncated]
+           BB.world0 = MB.createVertexBuffer("world0", 0, 4), BB.world1 = MB.createVertexBuffer("world1", 4, 4), BB.world2 = MB.createVertexBuffer("world2", 8, 4), BB.world3 = MB.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (PB = new dB.c(YB, yB.i … [truncated]
```

#### 556. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5258` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5258) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5258)

```diff
-         this._processInstancedBuffers(hH, uH), SH && void 0 !== rH && (this.yN()._activeIndices.addCount(HH.indexCount * YH, !1), AH._currentDrawContext && (AH._currentDrawContext.useInstancing = !0), this._bind(HH, SH, rH), this._draw(HH, rH, YH)), !this._scene.needsPreviousWorl … [truncated]
+         this._processInstancedBuffers(oB, pB), QB && void 0 !== DB && (this.JF()._activeIndices.addCount(BB.indexCount * lB, !1), YB._currentDrawContext && (YB._currentDrawContext.useInstancing = !0), this._bind(BB, QB, DB), this._draw(BB, DB, lB)), !this._scene.needsPreviousWorl … [truncated]
```

#### 557. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5271` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5271) · [Before (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5271)

```diff
-         this.yN()._activeIndices.addCount(HH.indexCount * rH, !1), AH._currentDrawContext && (AH._currentDrawContext.useInstancing = !0), this._bind(HH, LH, BH), this._draw(HH, BH, rH), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && … [truncated]
+         this.JF()._activeIndices.addCount(BB.indexCount * DB, !1), YB._currentDrawContext && (YB._currentDrawContext.useInstancing = !0), this._bind(BB, GB, OB), this._draw(BB, OB, DB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && … [truncated]
```

#### 558. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5275-L5276` → after: `L5275-L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5275-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5275-L5276) · [Before (L5275-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5275-L5276)

```diff
-         const zH = this.yN(),
-           CH = zH.Iu();
+         const yB = this.JF(),
+           JB = yB.Lp();
```

#### 559. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5327-L5328` → after: `L5327-L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5327-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5327-L5328) · [Before (L5327-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5327-L5328)

```diff
-         if (this.jU) {
-           for (let HH = 0; HH < this.jU.length; HH++) this._getInstancesRenderList(HH);
+         if (this.iW) {
+           for (let BB = 0; BB < this.iW.length; BB++) this._getInstancesRenderList(BB);
```

#### 560. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5341` → after: `L5341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5341) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5341)

```diff
-         const SH = this._scene.Iu(),
+         const QB = this._scene.Lp(),
```

#### 561. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5345-L5346` → after: `L5345-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5345-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5345-L5346) · [Before (L5345-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5345-L5346)

```diff
-           for (let tH = 0; tH < this.jU.length; tH++) {
-             const HH = this.jU[tH];
+           for (let jB = 0; jB < this.iW.length; jB++) {
+             const BB = this.iW[jB];
```

#### 562. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5352-L5353` → after: `L5352-L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5352-L5353) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5352-L5353)

```diff
-         if (!this.jU) return this;
-         for (const HH of this.jU) this.render(HH, !1);
+         if (!this.iW) return this;
+         for (const BB of this.iW) this.render(BB, !1);
```

#### 563. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5357-L5358` → after: `L5357-L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5357-L5358) · [Before (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5357-L5358)

```diff
-         const AH = this.yN(),
-           rH = AH.Iu();
+         const YB = this.JF(),
+           DB = YB.Lp();
```

#### 564. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5373` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5373) · [Before (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5373)

```diff
-           uH = HH.eu();
+           pB = BB.cp();
```

#### 565. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5389` → after: `L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5389) · [Before (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5389)

```diff
-               rH.setAlphaMode(void 0 !== LH ? LH : 2, !1, BH)
+               DB.setAlphaMode(void 0 !== GB ? GB : 2, !1, OB)
```

#### 566. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5403` → after: `L5403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5403) · [Before (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5403)

```diff
-           xH = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), HH < 0 && (xH = xH === KH.c.ClockWiseSideOrientation ? KH.c.CounterClockWiseSideOrientation : KH.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = xH
+           RB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (RB = RB === FB.b.ClockWiseSideOrientation ? FB.b.CounterClockWiseSideOrientation : FB.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = RB
```

#### 567. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5413` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5413) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5413)

```diff
-           cH.e._BindAttachmentsForEffect(rH, WH) && (!PH.backFaceCulling && PH.separateCullingPass && (rH.setState(!0, PH.zOffset, !1, !vH, PH.cullBackFaces, PH.stencil, PH.zOffsetUnits), this._processRendering(this, HH, WH, TH, zH, GH, this._onBeforeDraw, this._internalMeshDataI … [truncated]
+           iB.d._BindAttachmentsForEffect(DB, ZB) && (!AB.backFaceCulling && AB.separateCullingPass && (DB.setState(!0, AB.zOffset, !1, !WB, AB.cullBackFaces, AB.stencil, AB.zOffsetUnits), this._processRendering(this, BB, ZB, VB, yB, zB, this._onBeforeDraw, this._internalMeshDataI … [truncated]
```

#### 568. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5415` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5415) · [Before (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5415)

```diff
-           cH.e._RestoreAttachments(rH)
+           iB.d._RestoreAttachments(DB)
```

#### 569. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5427` → after: `L5427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5427) · [Before (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5427)

```diff
-         const rH = HH.eu();
+         const DB = BB.cp();
```

#### 570. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5453` → after: `L5453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5453) · [Before (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5453)

```diff
-               AH.setAlphaMode(void 0 !== HH ? HH : 2, !1, QH)
+               YB.setAlphaMode(void 0 !== BB ? BB : 2, !1, qB)
```

#### 571. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5458` → after: `L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5458) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5458)

```diff
-           HH < 0 && (BH = BH === KH.c.ClockWiseSideOrientation ? KH.c.CounterClockWiseSideOrientation : KH.c.ClockWiseSideOrientation), zH._effectiveSideOrientation = BH
+           BB < 0 && (OB = OB === FB.b.ClockWiseSideOrientation ? FB.b.CounterClockWiseSideOrientation : FB.b.ClockWiseSideOrientation), yB._effectiveSideOrientation = OB
```

#### 572. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5465` → after: `L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5465) · [Before (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5465)

```diff
-         this.isVerticesDataPresent(mH.i.MatricesWeightsKind) && (this.isVerticesDataPresent(mH.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
+         this.isVerticesDataPresent(dB.h.MatricesWeightsKind) && (this.isVerticesDataPresent(dB.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
```

#### 573. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5468` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5468) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5468)

```diff
-         const HH = this.getVerticesData(mH.i.MatricesWeightsKind),
+         const BB = this.getVerticesData(dB.h.MatricesWeightsKind),
```

#### 574. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5478` → after: `L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5478) · [Before (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5478)

```diff
-         this.setVerticesData(mH.i.MatricesWeightsKind, HH)
+         this.setVerticesData(dB.h.MatricesWeightsKind, BB)
```

#### 575. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5481-L5482` → after: `L5481-L5482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5481-L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5481-L5482) · [Before (L5481-L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5481-L5482)

```diff
-         const HH = this.getVerticesData(mH.i.MatricesWeightsExtraKind),
-           BH = this.getVerticesData(mH.i.MatricesWeightsKind),
+         const BB = this.getVerticesData(dB.h.MatricesWeightsExtraKind),
+           OB = this.getVerticesData(dB.h.MatricesWeightsKind),
```

#### 576. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5492` → after: `L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5492) · [Before (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5492)

```diff
-         this.setVerticesData(mH.i.MatricesWeightsKind, BH), this.setVerticesData(mH.i.MatricesWeightsKind, HH)
+         this.setVerticesData(dB.h.MatricesWeightsKind, OB), this.setVerticesData(dB.h.MatricesWeightsKind, BB)
```

#### 577. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5495-L5496` → after: `L5495-L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5495-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5495-L5496) · [Before (L5495-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5495-L5496)

```diff
-         const HH = this.getVerticesData(mH.i.MatricesWeightsExtraKind),
-           BH = this.getVerticesData(mH.i.MatricesWeightsKind);
+         const BB = this.getVerticesData(dB.h.MatricesWeightsExtraKind),
+           OB = this.getVerticesData(dB.h.MatricesWeightsKind);
```

#### 578. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5500` → after: `L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5500) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5500)

```diff
-           XX: "not skinned"
+           jP: "not skinned"
```

#### 579. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5527-L5528` → after: `L5527-L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5527-L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5527-L5528) · [Before (L5527-L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5527-L5528)

```diff
-           EH = this.getVerticesData(mH.i.MatricesIndicesKind),
-           XH = this.getVerticesData(mH.i.MatricesIndicesExtraKind);
+           MB = this.getVerticesData(dB.h.MatricesIndicesKind),
+           PB = this.getVerticesData(dB.h.MatricesIndicesExtraKind);
```

#### 580. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5538` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5538) · [Before (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5538)

```diff
-           XX: "Number of Weights = " + LH / 4 + "\nMaximum influences = " + SH + "\nMissing Weights = " + rH + "\nNot Sorted = " + AH + "\nNot Normalized = " + hH + "\nWeightCounts = [" + zH + "]\nNumber of bones = " + CH + "\nBad Bone Indices = " + GH
+           jP: "Number of Weights = " + GB / 4 + "\nMaximum influences = " + QB + "\nMissing Weights = " + DB + "\nNot Sorted = " + YB + "\nNot Normalized = " + oB + "\nWeightCounts = [" + yB + "]\nNumber of bones = " + JB + "\nBad Bone Indices = " + zB
```

#### 581. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5542` → after: `L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5542) · [Before (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5542)

```diff
-         const HH = this.yN();
+         const BB = this.JF();
```

#### 582. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5555` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5555) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5555)

```diff
-             HH.removePendingData(this), HH.mV || NH.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${LH}`)
+             BB.removePendingData(this), BB.lV || XB.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${GB}`)
```

#### 583. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5563` → after: `L5563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5563) · [Before (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5563)

```diff
-         const BH = this.yN().materials;
+         const OB = this.JF().materials;
```

#### 584. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5567` → after: `L5567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5567) · [Before (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5567)

```diff
-         const AH = this.yN().multiMaterials;
+         const YB = this.JF().multiMaterials;
```

#### 585. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5577-L5578` → after: `L5577-L5578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5577-L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5577-L5578) · [Before (L5577-L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5577-L5578)

```diff
-         if (!this.isVerticesDataPresent(mH.i.PositionKind)) return this;
-         const BH = this.jU.splice(0);
+         if (!this.isVerticesDataPresent(dB.h.PositionKind)) return this;
+         const OB = this.iW.splice(0);
```

#### 586. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5580-L5581` → after: `L5580-L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5580-L5581) · [Before (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5580-L5581)

```diff
-         let LH = this.getVerticesData(mH.i.PositionKind);
-         const AH = OH.o.Zero();
+         let GB = this.getVerticesData(dB.h.PositionKind);
+         const YB = UB.r.Zero();
```

#### 587. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5583-L5586` → after: `L5583-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5583-L5586) · [Before (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5583-L5586)

```diff
-         for (rH = 0; rH < LH.length; rH += 3) OH.o.TransformCoordinatesFromFloatsToRef(LH[rH], LH[rH + 1], LH[rH + 2], HH, AH).toArray(LH, rH);
-         if (this.setVerticesData(mH.i.PositionKind, LH, this.getVertexBuffer(mH.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(mH.i.NormalKind)) {
-           for (LH = this.getVerticesData(mH.i.NormalKind), rH = 0; rH < LH.length; rH += 3) OH.o.TransformNormalFromFloatsToRef(LH[rH], LH[rH + 1], LH[rH + 2], HH, AH).normalize().toArray(LH, rH);
-           this.setVerticesData(mH.i.NormalKind, LH, this.getVertexBuffer(mH.i.NormalKind).isUpdatable())
+         for (DB = 0; DB < GB.length; DB += 3) UB.r.TransformCoordinatesFromFloatsToRef(GB[DB], GB[DB + 1], GB[DB + 2], BB, YB).toArray(GB, DB);
+         if (this.setVerticesData(dB.h.PositionKind, GB, this.getVertexBuffer(dB.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(dB.h.NormalKind)) {
+           for (GB = this.getVerticesData(dB.h.NormalKind), DB = 0; DB < GB.length; DB += 3) UB.r.TransformNormalFromFloatsToRef(GB[DB], GB[DB + 1], GB[DB + 2], BB, YB).normalize().toArray(GB, DB);
+           this.setVerticesData(dB.h.NormalKind, GB, this.getVertexBuffer(dB.h.NormalKind).isUpdatable())
```

#### 588. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5588-L5590` → after: `L5588-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5588-L5590) · [Before (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5588-L5590)

```diff
-         if (this.isVerticesDataPresent(mH.i.TangentKind)) {
-           for (LH = this.getVerticesData(mH.i.TangentKind), rH = 0; rH < LH.length; rH += 4) OH.o.TransformNormalFromFloatsToRef(LH[rH], LH[rH + 1], LH[rH + 2], HH, AH).normalize().toArray(LH, rH);
-           this.setVerticesData(mH.i.TangentKind, LH, this.getVertexBuffer(mH.i.TangentKind).isUpdatable())
+         if (this.isVerticesDataPresent(dB.h.TangentKind)) {
+           for (GB = this.getVerticesData(dB.h.TangentKind), DB = 0; DB < GB.length; DB += 4) UB.r.TransformNormalFromFloatsToRef(GB[DB], GB[DB + 1], GB[DB + 2], BB, YB).normalize().toArray(GB, DB);
+           this.setVerticesData(dB.h.TangentKind, GB, this.getVertexBuffer(dB.h.TangentKind).isUpdatable())
```

#### 589. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5592` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5592) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5592)

```diff
-         return HH.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.jU = BH, this
+         return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.iW = OB, this
```

#### 590. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5614` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5614) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5614)

```diff
-           return JH.source = this, JH.doNotCloneChildren = LH.doNotCloneChildren, JH.clonePhysicsImpostor = LH.clonePhysicsImpostor, JH.cloneThinInstances = LH.cloneThinInstances, new iH(HH, this.yN(), JH)
+           return vB.source = this, vB.doNotCloneChildren = GB.doNotCloneChildren, vB.clonePhysicsImpostor = GB.clonePhysicsImpostor, vB.cloneThinInstances = GB.cloneThinInstances, new sB(BB, this.JF(), vB)
```

#### 591. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5616` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5616) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5616)

```diff
-         return new iH(HH, this.yN(), BH, this, LH, AH)
+         return new sB(BB, this.JF(), OB, this, GB, YB)
```

#### 592. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5630` → after: `L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5630) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5630)

```diff
-           const HH = this.yN().meshes;
+           const BB = this.JF().meshes;
```

#### 593. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5644-L5645` → after: `L5644-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5644-L5645) · [Before (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5644-L5645)

```diff
-         const zH = this.yN();
-         return (0, vH.m)(HH, (HH => {
+         const yB = this.JF();
+         return (0, WB.n)(BB, (BB => {
```

#### 594. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5648` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5648) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5648)

```diff
-             CH = this.Iu().createCanvas(tH, zH).getContext("2d");
+             JB = this.Lp().createCanvas(jB, yB).getContext("2d");
```

#### 595. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5656-L5663` → after: `L5656-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5656-L5663) · [Before (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5656-L5663)

```diff
-         if (!this.isVerticesDataPresent(mH.i.PositionKind) || !this.isVerticesDataPresent(mH.i.NormalKind) || !this.isVerticesDataPresent(mH.i.UVKind)) return NH.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
-         const zH = this.getVerticesData(mH.i.PositionKind, !0, !0),
-           CH = this.getVerticesData(mH.i.NormalKind),
-           EH = this.getVerticesData(mH.i.UVKind);
-         let XH = OH.o.Zero();
-         const GH = OH.o.Zero(),
-           YH = OH.n.Zero();
-         SH = SH || OH.n.Zero(), hH = hH || new OH.n(1, 1);
+         if (!this.isVerticesDataPresent(dB.h.PositionKind) || !this.isVerticesDataPresent(dB.h.NormalKind) || !this.isVerticesDataPresent(dB.h.UVKind)) return XB.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const yB = this.getVerticesData(dB.h.PositionKind, !0, !0),
+           JB = this.getVerticesData(dB.h.NormalKind),
+           MB = this.getVerticesData(dB.h.UVKind);
+         let PB = UB.r.Zero();
+         const zB = UB.r.Zero(),
+           lB = UB.o.Zero();
+         QB = QB || UB.o.Zero(), oB = oB || new UB.o(1, 1);
```

#### 596. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5665)

```diff
-           OH.o.FromArrayToRef(zH, uH, XH), OH.o.FromArrayToRef(CH, uH, GH), OH.n.FromArrayToRef(EH, uH / 3 * 2, YH);
+           UB.r.FromArrayToRef(yB, pB, PB), UB.r.FromArrayToRef(JB, pB, zB), UB.o.FromArrayToRef(MB, pB / 3 * 2, lB);
```

#### 597. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5670` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5670) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5670)

```diff
-         return oH.b.ComputeNormals(zH, this.vrH(), CH), tH ? (this.setVerticesData(mH.i.PositionKind, zH), this.setVerticesData(mH.i.NormalKind, CH), this.setVerticesData(mH.i.UVKind, EH)) : (this.updateVerticesData(mH.i.PositionKind, zH), this.updateVerticesData(mH.i.NormalKind, … [truncated]
+         return KB.e.ComputeNormals(yB, this.KDB(), JB), jB ? (this.setVerticesData(dB.h.PositionKind, yB), this.setVerticesData(dB.h.NormalKind, JB), this.setVerticesData(dB.h.UVKind, MB)) : (this.updateVerticesData(dB.h.PositionKind, yB), this.updateVerticesData(dB.h.NormalKind, … [truncated]
```

#### 598. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5677-L5679` → after: `L5677-L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5677-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5677-L5679) · [Before (L5677-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5677-L5679)

```diff
-           const hH = OH.o.FromArray(BH, 3 * HH[SH]),
-             tH = OH.o.FromArray(BH, 3 * HH[SH + 1]),
-             zH = OH.o.FromArray(BH, 3 * HH[SH + 2]),
+           const oB = UB.r.FromArray(OB, 3 * BB[QB]),
+             jB = UB.r.FromArray(OB, 3 * BB[QB + 1]),
+             yB = UB.r.FromArray(OB, 3 * BB[QB + 2]),
```

#### 599. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5682` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5682) · [Before (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5682)

```diff
-             XH = OH.o.Normalize(OH.o.Cross(CH, EH));
+             PB = UB.r.Normalize(UB.r.Cross(JB, MB));
```

#### 600. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5691` → after: `L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5691) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5691)

```diff
-           LH = this.vrH(!1, !0),
+           GB = this.KDB(!1, !0),
```

#### 601. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5700-L5701` → after: `L5700-L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5700-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5700-L5701) · [Before (L5700-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5700-L5701)

```diff
-           SH = this.jF(),
-           hH = this.geometry ? this.jU.slice(0) : [];
+           QB = this.Gw(),
+           oB = this.geometry ? this.iW.slice(0) : [];
```

#### 602. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5706-L5708` → after: `L5706-L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5706-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5706-L5708) · [Before (L5706-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5706-L5708)

```diff
-           if (HH && tH === mH.i.NormalKind) {
-             const HH = this._getFlattenedNormals(LH, AH[mH.i.PositionKind]);
-             this.setVerticesData(mH.i.NormalKind, HH, BH.isUpdatable(), SH)
+           if (BB && jB === dB.h.NormalKind) {
+             const BB = this._getFlattenedNormals(GB, YB[dB.h.PositionKind]);
+             this.setVerticesData(dB.h.NormalKind, BB, OB.isUpdatable(), QB)
```

#### 603. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5715` → after: `L5715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5715) · [Before (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5715)

```diff
-             AH.ZtH(rH(SH, 3));
+             YB.DyB(DB(QB, 3));
```

#### 604. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5730-L5731` → after: `L5730-L5731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5730-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5730-L5731) · [Before (L5730-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5730-L5731)

```diff
-           const HH = tH.jF();
-           lH.d.AddToMesh(tH.materialIndex, tH.indexStart, tH.indexCount, tH.indexStart, tH.indexCount, this).setBoundingInfo(HH)
+           const BB = jB.Gw();
+           IB.c.AddToMesh(jB.materialIndex, jB.indexStart, jB.indexCount, jB.indexStart, jB.indexCount, this).setBoundingInfo(BB)
```

#### 605. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5743` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5743) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5743)

```diff
-         const BH = oH.b.ExtractFromMesh(this);
+         const OB = KB.e.ExtractFromMesh(this);
```

#### 606. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5745` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5745) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5745)

```diff
-         if (HH && this.isVerticesDataPresent(mH.i.NormalKind) && BH.normals) {
+         if (BB && this.isVerticesDataPresent(dB.h.NormalKind) && OB.normals) {
```

#### 607. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5747` → after: `L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5747) · [Before (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5747)

```diff
-           this.setVerticesData(mH.i.NormalKind, BH.normals, this.isVertexBufferUpdatable(mH.i.NormalKind))
+           this.setVerticesData(dB.h.NormalKind, OB.normals, this.isVertexBufferUpdatable(dB.h.NormalKind))
```

#### 608. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5752)

```diff
-           this.setIndices(BH.indices, null, this.isVertexBufferUpdatable(mH.i.PositionKind), !0)
+           this.setIndices(OB.indices, null, this.isVertexBufferUpdatable(dB.h.PositionKind), !0)
```

#### 609. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5758` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5758) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5758)

```diff
-         const BH = oH.b.ExtractFromMesh(this),
+         const OB = KB.e.ExtractFromMesh(this),
```

#### 610. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5769-L5771` → after: `L5769-L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5769-L5771) · [Before (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5769-L5771)

```diff
-           const EH = new OH.o(0, 0, 0),
-             XH = new OH.o(0, 0, 0),
-             GH = new OH.n(0, 0),
+           const MB = new UB.r(0, 0, 0),
+             PB = new UB.r(0, 0, 0),
+             zB = new UB.o(0, 0),
```

#### 611. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5797-L5798` → after: `L5797-L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5797-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5797-L5798) · [Before (L5797-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5797-L5798)

```diff
-           BH.indices = YH, BH.applyToMesh(this, this.isVertexBufferUpdatable(mH.i.PositionKind))
-         } else NH.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
+           OB.indices = lB, OB.applyToMesh(this, this.isVertexBufferUpdatable(dB.h.PositionKind))
+         } else XB.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
```

#### 612. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5801` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5801) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5801)

```diff
-         const HH = oH.b.ExtractFromMesh(this),
+         const BB = KB.e.ExtractFromMesh(this),
```

#### 613. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5810` → after: `L5810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5810) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5810)

```diff
-         if (void 0 === LH || void 0 === AH || null === LH || null === AH) NH.e.Warn("VertexData contains empty entries");
+         if (void 0 === GB || void 0 === YB || null === GB || null === YB) XB.b.Warn("VertexData contains empty entries");
```

#### 614. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5851)

```diff
-           oH.b.ComputeNormals(CH, EH, UH), HH.positions = CH, HH.indices = EH, HH.normals = UH, null !== BH && void 0 !== BH && (HH.uvs = XH), null !== rH && void 0 !== rH && (HH.colors = GH), null !== SH && void 0 !== SH && (HH.matricesIndices = YH), null !== hH && void 0 !== hH … [truncated]
+           KB.e.ComputeNormals(JB, MB, SB), BB.positions = JB, BB.indices = MB, BB.normals = SB, null !== OB && void 0 !== OB && (BB.uvs = PB), null !== DB && void 0 !== DB && (BB.colors = zB), null !== QB && void 0 !== QB && (BB.matricesIndices = lB), null !== oB && void 0 !== oB … [truncated]
```

#### 615. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5855` → after: `L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5855) · [Before (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5855)

```diff
-         throw (0, jH.i)("InstancedMesh")
+         throw (0, EB.j)("InstancedMesh")
```

#### 616. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5858` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5858) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5858)

```diff
-         throw (0, jH.i)("PhysicsImpostor")
+         throw (0, EB.j)("PhysicsImpostor")
```

#### 617. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5871-L5872` → after: `L5871-L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5871-L5872) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5871-L5872)

```diff
-         const BH = this.vrH(),
-           LH = this.getVerticesData(mH.i.PositionKind);
+         const OB = this.KDB(),
+           GB = this.getVerticesData(dB.h.PositionKind);
```

#### 618. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5875` → after: `L5875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5875) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5875)

```diff
-         for (let SH = 0; SH < LH.length; SH += 3) AH.push(OH.o.FromArray(LH, SH));
+         for (let QB = 0; QB < GB.length; QB += 3) YB.push(UB.r.FromArray(GB, QB));
```

#### 619. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5877` → after: `L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5877) · [Before (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5877)

```diff
-         return xH.e.SyncAsyncForLoop(AH.length, 40, (HH => {
+         return RB.b.SyncAsyncForLoop(YB.length, 40, (BB => {
```

#### 620. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5889-L5890` → after: `L5889-L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5889-L5890) · [Before (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5889-L5890)

```diff
-           const LH = this.jU.slice(0);
-           this.setIndices(BH), this.jU = LH, HH && HH(this)
+           const GB = this.iW.slice(0);
+           this.setIndices(OB), this.iW = GB, BB && BB(this)
```

#### 621. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5895` → after: `L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5895) · [Before (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5895)

```diff
-         HH.name = this.name, HH.id = this.id, HH.uniqueId = this.uniqueId, HH.type = this.getClassName(), TH.b && TH.b.HasTags(this) && (HH.tags = TH.b.GetTags(this)), HH.position = this.position.xrH(), this.rotationQuaternion ? HH.rotationQuaternion = this.rotationQuaternion.xrH … [truncated]
+         BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), VB.e && VB.e.HasTags(this) && (BB.tags = VB.e.GetTags(this)), BB.position = this.position.dDB(), this.rotationQuaternion ? BB.rotationQuaternion = this.rotationQuaternion.dDB … [truncated]
```

#### 622. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5897-L5901` → after: `L5897-L5901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5897-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5897-L5901) · [Before (L5897-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5897-L5901)

```diff
-         if (BH && this.jU) {
-           HH.geometryUniqueId = BH.uniqueId, HH.geometryId = BH.id, HH.jU = [];
-           for (let BH = 0; BH < this.jU.length; BH++) {
-             const LH = this.jU[BH];
-             HH.jU.push({
+         if (OB && this.iW) {
+           BB.geometryUniqueId = OB.uniqueId, BB.geometryId = OB.id, BB.iW = [];
+           for (let OB = 0; OB < this.iW.length; OB++) {
+             const GB = this.iW[OB];
+             BB.iW.push({
```

#### 623. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5910)

```diff
-         if (this.material ? this.material.doNotSerialize || (HH.materialUniqueId = this.material.uniqueId, HH.materialId = this.material.id) : (this.material = null, HH.materialUniqueId = this._scene.defaultMaterial.uniqueId, HH.materialId = this._scene.defaultMaterial.id), this. … [truncated]
+         if (this.material ? this.material.doNotSerialize || (BB.materialUniqueId = this.material.uniqueId, BB.materialId = this.material.id) : (this.material = null, BB.materialUniqueId = this._scene.defaultMaterial.uniqueId, BB.materialId = this._scene.defaultMaterial.id), this. … [truncated]
```

#### 624. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5912` → after: `L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5912) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5912)

```diff
-           BH && (HH.physicsMass = BH.getParam("rE"), HH.physicsFriction = BH.getParam("friction"), HH.physicsRestitution = BH.getParam("rE"), HH.physicsImpostor = BH.type)
+           OB && (BB.physicsMass = OB.getParam("Wy"), BB.physicsFriction = OB.getParam("friction"), BB.physicsRestitution = OB.getParam("Wy"), BB.physicsImpostor = OB.type)
```

#### 625. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5923` → after: `L5923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5923) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5923)

```diff
-             jQ: BH.jQ,
+             bq: OB.bq,
```

#### 626. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5925-L5926` → after: `L5925-L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5925-L5926) · [Before (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5925-L5926)

```diff
-             position: BH.position.xrH(),
-             bX: BH.bX.xrH()
+             position: OB.position.dDB(),
+             SP: OB.SP.dDB()
```

#### 627. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5928` → after: `L5928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5928) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5928)

```diff
-           if (BH.parent && BH.parent._serializeAsParent(AH), BH.rotationQuaternion ? AH.rotationQuaternion = BH.rotationQuaternion.xrH() : BH.rotation && (AH.rotation = BH.rotation.xrH()), this.yN()._getComponent(nH.b.NAME_PHYSICSENGINE)) {
+           if (OB.parent && OB.parent._serializeAsParent(YB), OB.rotationQuaternion ? YB.rotationQuaternion = OB.rotationQuaternion.dDB() : OB.rotation && (YB.rotation = OB.rotation.dDB()), this.JF()._getComponent(cB.b.NAME_PHYSICSENGINE)) {
```

#### 628. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5930` → after: `L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5930) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5930)

```diff
-             HH && (AH.physicsMass = HH.getParam("rE"), AH.physicsFriction = HH.getParam("friction"), AH.physicsRestitution = HH.getParam("rE"), AH.physicsImpostor = HH.type)
+             BB && (YB.physicsMass = BB.getParam("Wy"), YB.physicsFriction = BB.getParam("friction"), YB.physicsRestitution = BB.getParam("Wy"), YB.physicsImpostor = BB.type)
```

#### 629. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5932` → after: `L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5932) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5932)

```diff
-           BH.metadata && (AH.metadata = BH.metadata), BH.actionManager && (AH.actions = BH.actionManager.serialize(BH.name)), HH.instances.push(AH), gH.c.AppendSerializedAnimations(BH, AH), AH.rW = BH.serializeAnimationRanges()
+           OB.metadata && (YB.metadata = OB.metadata), OB.actionManager && (YB.actions = OB.actionManager.serialize(OB.name)), BB.instances.push(YB), rB.d.AppendSerializedAnimations(OB, YB), YB.JZ = OB.serializeAnimationRanges()
```

#### 630. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5938)

```diff
-             enablePicking: this.gLH
+             enablePicking: this.HGB
```

#### 631. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5948` → after: `L5948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5948) · [Before (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5948)

```diff
-         return gH.c.AppendSerializedAnimations(this, HH), HH.rW = this.serializeAnimationRanges(), HH.layerMask = this.layerMask, HH.alphaIndex = this.alphaIndex, HH.hasVertexAlpha = this.hasVertexAlpha, HH.overlayAlpha = this.overlayAlpha, HH.overlayColor = this.overlayColor.xrH … [truncated]
+         return rB.d.AppendSerializedAnimations(this, BB), BB.JZ = this.serializeAnimationRanges(), BB.layerMask = this.layerMask, BB.alphaIndex = this.alphaIndex, BB.hasVertexAlpha = this.hasVertexAlpha, BB.overlayAlpha = this.overlayAlpha, BB.overlayColor = this.overlayColor.dDB … [truncated]
```

#### 632. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5955` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5955) · [Before (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5955)

```diff
-           if (HH.vertexCount !== this.getTotalVertices()) return NH.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
+           if (BB.vertexCount !== this.getTotalVertices()) return XB.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
```

#### 633. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5960-L5961` → after: `L5960-L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5960-L5961) · [Before (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5960-L5961)

```diff
-             if (!AH) return void NH.e.Error("Invalid morph target. Target must have positions.");
-             this.geometry.setVerticesData(mH.i.PositionKind + BH, AH, !1, 3);
+             if (!YB) return void XB.b.Error("Invalid morph target. Target must have positions.");
+             this.geometry.setVerticesData(dB.h.PositionKind + OB, YB, !1, 3);
```

#### 634. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5963` → after: `L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5963) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5963)

```diff
-             rH && this.geometry.setVerticesData(mH.i.NormalKind + BH, rH, !1, 3);
+             DB && this.geometry.setVerticesData(dB.h.NormalKind + OB, DB, !1, 3);
```

#### 635. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5965` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5965) · [Before (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5965)

```diff
-             SH && this.geometry.setVerticesData(mH.i.TangentKind + BH, SH, !1, 3);
+             QB && this.geometry.setVerticesData(dB.h.TangentKind + OB, QB, !1, 3);
```

#### 636. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5967` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5967) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5967)

```diff
-             hH && this.geometry.setVerticesData(mH.i.UVKind + "_" + BH, hH, !1, 2);
+             oB && this.geometry.setVerticesData(dB.h.UVKind + "_" + OB, oB, !1, 2);
```

#### 637. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5969` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5969) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5969)

```diff
-             tH && this.geometry.setVerticesData(mH.i.UV2Kind + "_" + BH, tH, !1, 2);
+             jB && this.geometry.setVerticesData(dB.h.UV2Kind + "_" + OB, jB, !1, 2);
```

#### 638. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5971` → after: `L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5971) · [Before (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5971)

```diff
-             zH && this.geometry.setVerticesData(mH.i.ColorKind + BH, zH, !1, 4)
+             yB && this.geometry.setVerticesData(dB.h.ColorKind + OB, yB, !1, 4)
```

#### 639. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5975` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5975) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5975)

```diff
-           for (; this.geometry.isVerticesDataPresent(mH.i.PositionKind + HH);) this.geometry.removeVerticesData(mH.i.PositionKind + HH), this.geometry.isVerticesDataPresent(mH.i.NormalKind + HH) && this.geometry.removeVerticesData(mH.i.NormalKind + HH), this.geometry.isVerticesDa … [truncated]
+           for (; this.geometry.isVerticesDataPresent(dB.h.PositionKind + BB);) this.geometry.removeVerticesData(dB.h.PositionKind + BB), this.geometry.isVerticesDataPresent(dB.h.NormalKind + BB) && this.geometry.removeVerticesData(dB.h.NormalKind + BB), this.geometry.isVerticesDa … [truncated]
```

#### 640. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5980` → after: `L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5980) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5980)

```diff
-         if (HH.type && "LinesMesh" === HH.type ? AH = iH._LinesMeshParser(HH, BH) : HH.type && "GroundMesh" === HH.type ? AH = iH._GroundMeshParser(HH, BH) : HH.type && "GoldbergMesh" === HH.type ? AH = iH._GoldbergMeshParser(HH, BH) : HH.type && "GreasedLineMesh" === HH.type ? A … [truncated]
+         if (BB.type && "LinesMesh" === BB.type ? YB = sB._LinesMeshParser(BB, OB) : BB.type && "GroundMesh" === BB.type ? YB = sB._GroundMeshParser(BB, OB) : BB.type && "GoldbergMesh" === BB.type ? YB = sB._GoldbergMeshParser(BB, OB) : BB.type && "GreasedLineMesh" === BB.type ? Y … [truncated]
```

#### 641. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5983)

```diff
-               rH = (0, RH.b)("BABYLON.Animation");
+               DB = (0, wB.c)("BABYLON.Animation");
```

#### 642. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5996)

```diff
-             if (LH.id && (rH.id = LH.id), TH.b && (LH.tags ? TH.b.AddTagsTo(rH, LH.tags) : TH.b.AddTagsTo(rH, HH.tags)), rH.position = OH.o.FromArray(LH.position), void 0 !== LH.metadata && (rH.metadata = LH.metadata), void 0 !== LH.parentId && (rH._waitingParentId = LH.parentId) … [truncated]
+             if (GB.id && (DB.id = GB.id), VB.e && (GB.tags ? VB.e.AddTagsTo(DB, GB.tags) : VB.e.AddTagsTo(DB, BB.tags)), DB.position = UB.r.FromArray(GB.position), void 0 !== GB.metadata && (DB.metadata = GB.metadata), void 0 !== GB.parentId && (DB._waitingParentId = GB.parentId) … [truncated]
```

#### 643. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L5999)

```diff
-                   AH = (0, RH.b)("BABYLON.Animation");
+                   YB = (0, wB.c)("BABYLON.Animation");
```

#### 644. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6007` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6007) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6007)

```diff
-           if (AH.gLH = !!BH.enablePicking, BH.matrixData ? (AH.yHH("matrix", new Float32Array(BH.matrixData), 16, !1), AH._thinInstanceDataStorage.matrixBufferSize = BH.matrixBufferSize, AH._thinInstanceDataStorage.instancesCount = BH.instancesCount) : AH._thinInstanceDataStorage … [truncated]
+           if (YB.HGB = !!OB.enablePicking, OB.matrixData ? (YB.DOB("matrix", new Float32Array(OB.matrixData), 16, !1), YB._thinInstanceDataStorage.matrixBufferSize = OB.matrixBufferSize, YB._thinInstanceDataStorage.instancesCount = OB.instancesCount) : YB._thinInstanceDataStorage … [truncated]
```

#### 645. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6009` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6009) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6009)

```diff
-             for (const HH in BH.data) AH.yHH(HH, new Float32Array(BH.data[HH]), BH.strides[HH], !1), AH._userThinInstanceBuffersStorage.sizes[HH] = BH.sizes[HH]
+             for (const BB in OB.data) YB.DOB(BB, new Float32Array(OB.data[BB]), OB.strides[BB], !1), YB._userThinInstanceBuffersStorage.sizes[BB] = OB.sizes[BB]
```

#### 646. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6017)

```diff
-           const BH = this.getVerticesData(mH.i.PositionKind);
+           const OB = this.getVerticesData(dB.h.PositionKind);
```

#### 647. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6019` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6019) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6019)

```diff
-           HH._sourcePositions = new Float32Array(BH), this.isVertexBufferUpdatable(mH.i.PositionKind) || this.setVerticesData(mH.i.PositionKind, BH, !0)
+           BB._sourcePositions = new Float32Array(OB), this.isVertexBufferUpdatable(dB.h.PositionKind) || this.setVerticesData(dB.h.PositionKind, OB, !0)
```

#### 648. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6026` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6026) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6026)

```diff
-           const BH = this.getVerticesData(mH.i.NormalKind);
+           const OB = this.getVerticesData(dB.h.NormalKind);
```

#### 649. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6028` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6028) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6028)

```diff
-           HH._sourceNormals = new Float32Array(BH), this.isVertexBufferUpdatable(mH.i.NormalKind) || this.setVerticesData(mH.i.NormalKind, BH, !0)
+           BB._sourceNormals = new Float32Array(OB), this.isVertexBufferUpdatable(dB.h.NormalKind) || this.setVerticesData(dB.h.NormalKind, OB, !0)
```

#### 650. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6034-L6038` → after: `L6034-L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6034-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6034-L6038) · [Before (L6034-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6034-L6038)

```diff
-         if (this.geometry._softwareSkinningFrameId == this.yN().getFrameId()) return this;
-         if (this.geometry._softwareSkinningFrameId = this.yN().getFrameId(), !this.isVerticesDataPresent(mH.i.PositionKind)) return this;
-         if (!this.isVerticesDataPresent(mH.i.MatricesIndicesKind)) return this;
-         if (!this.isVerticesDataPresent(mH.i.MatricesWeightsKind)) return this;
-         const BH = this.isVerticesDataPresent(mH.i.NormalKind),
+         if (this.geometry._softwareSkinningFrameId == this.JF().getFrameId()) return this;
+         if (this.geometry._softwareSkinningFrameId = this.JF().getFrameId(), !this.isVerticesDataPresent(dB.h.PositionKind)) return this;
+         if (!this.isVerticesDataPresent(dB.h.MatricesIndicesKind)) return this;
+         if (!this.isVerticesDataPresent(dB.h.MatricesWeightsKind)) return this;
+         const OB = this.isVerticesDataPresent(dB.h.NormalKind),
```

#### 651. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6041-L6042` → after: `L6041-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6041-L6042) · [Before (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6041-L6042)

```diff
-           const HH = this.jU.slice();
-           this.setPositionsForCPUSkinning(), this.jU = HH
+           const BB = this.iW.slice();
+           this.setPositionsForCPUSkinning(), this.iW = BB
```

#### 652. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6045` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6045) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6045)

```diff
-         let AH = this.getVerticesData(mH.i.PositionKind);
+         let YB = this.getVerticesData(dB.h.PositionKind);
```

#### 653. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6048)

```diff
-         let rH = this.getVerticesData(mH.i.NormalKind);
+         let DB = this.getVerticesData(dB.h.NormalKind);
```

#### 654. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6053-L6054` → after: `L6053-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6053-L6054) · [Before (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6053-L6054)

```diff
-         const SH = this.getVerticesData(mH.i.MatricesIndicesKind),
-           hH = this.getVerticesData(mH.i.MatricesWeightsKind);
+         const QB = this.getVerticesData(dB.h.MatricesIndicesKind),
+           oB = this.getVerticesData(dB.h.MatricesWeightsKind);
```

#### 655. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6057-L6058)

```diff
-           zH = tH ? this.getVerticesData(mH.i.MatricesIndicesExtraKind) : null,
-           CH = tH ? this.getVerticesData(mH.i.MatricesWeightsExtraKind) : null,
+           yB = jB ? this.getVerticesData(dB.h.MatricesIndicesExtraKind) : null,
+           JB = jB ? this.getVerticesData(dB.h.MatricesWeightsExtraKind) : null,
```

#### 656. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6060-L6062` → after: `L6060-L6062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6060-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6060-L6062) · [Before (L6060-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6060-L6062)

```diff
-           XH = OH.o.Zero(),
-           GH = new OH.e,
-           YH = new OH.e;
+           PB = UB.r.Zero(),
+           zB = new UB.d,
+           lB = new UB.d;
```

#### 657. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6066` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6066) · [Before (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6066)

```diff
-           for (uH = 0; uH < 4; uH++) HH = hH[QH + uH], HH > 0 && (OH.e.FromFloat32ArrayToRefScaled(EH, Math.floor(16 * SH[QH + uH]), HH, YH), GH.addToSelf(YH));
+           for (pB = 0; pB < 4; pB++) BB = oB[qB + pB], BB > 0 && (UB.d.FromFloat32ArrayToRefScaled(MB, Math.floor(16 * QB[qB + pB]), BB, lB), zB.addToSelf(lB));
```

#### 658. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6068-L6069)

```diff
-             for (uH = 0; uH < 4; uH++) HH = CH[QH + uH], HH > 0 && (OH.e.FromFloat32ArrayToRefScaled(EH, Math.floor(16 * zH[QH + uH]), HH, YH), GH.addToSelf(YH));
-           OH.o.TransformCoordinatesFromFloatsToRef(LH._sourcePositions[WH], LH._sourcePositions[WH + 1], LH._sourcePositions[WH + 2], GH, XH), XH.toArray(AH, WH), BH && (OH.o.TransformNormalFromFloatsToRef(LH._sourceNormals[WH], LH._sourceNormals[WH + 1], LH._sourceNormals[WH + 2 … [truncated]
+             for (pB = 0; pB < 4; pB++) BB = JB[qB + pB], BB > 0 && (UB.d.FromFloat32ArrayToRefScaled(MB, Math.floor(16 * yB[qB + pB]), BB, lB), zB.addToSelf(lB));
+           UB.r.TransformCoordinatesFromFloatsToRef(GB._sourcePositions[ZB], GB._sourcePositions[ZB + 1], GB._sourcePositions[ZB + 2], zB, PB), PB.toArray(YB, ZB), OB && (UB.r.TransformNormalFromFloatsToRef(GB._sourceNormals[ZB], GB._sourceNormals[ZB + 1], GB._sourceNormals[ZB + 2 … [truncated]
```

#### 659. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6071` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6071) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6071)

```diff
-         return this.updateVerticesData(mH.i.PositionKind, AH), BH && this.updateVerticesData(mH.i.NormalKind, rH), this
+         return this.updateVerticesData(dB.h.PositionKind, YB), OB && this.updateVerticesData(dB.h.NormalKind, DB), this
```

#### 660. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6077` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6077) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6077)

```diff
-           const HH = AH.jF().boundingBox;
+           const BB = YB.Gw().boundingBox;
```

#### 661. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6084-L6085` → after: `L6084-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6084-L6085) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6084-L6085)

```diff
-           min: OH.o.Zero(),
-           max: OH.o.Zero()
+           min: UB.r.Zero(),
+           max: UB.r.Zero()
```

#### 662. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6090)

```diff
-         return OH.o.Center(BH.min, BH.max)
+         return UB.r.Center(OB.min, OB.max)
```

#### 663. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6098)

```diff
-         return (0, UH.k)(iH._MergeMeshesCoroutine(HH, BH, LH, AH, rH, SH, !1))
+         return (0, SB.l)(sB._MergeMeshesCoroutine(BB, OB, GB, YB, DB, QB, !1))
```

#### 664. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6106` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6106) · [Before (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6106)

```diff
-         return await (0, UH.h)(iH._MergeMeshesCoroutine(HH, BH, LH, AH, rH, SH, !0), (0, UH.c)())
+         return await (0, SB.i)(sB._MergeMeshesCoroutine(BB, OB, GB, YB, DB, QB, !0), (0, SB.e)())
```

#### 665. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6119` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6119) · [Before (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6119)

```diff
-             if (LH += HH[BH].getTotalVertices(), LH >= 65536) return NH.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
+             if (GB += BB[OB].getTotalVertices(), GB >= 65536) return XB.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
```

#### 666. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6129-L6130` → after: `L6129-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6129-L6130) · [Before (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6129-L6130)

```diff
-           if (LH.xR) return NH.e.Warn("Cannot merge instance meshes."), null;
-           if (GH !== LH.sideOrientation) return NH.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
+           if (GB.SF) return XB.b.Warn("Cannot merge instance meshes."), null;
+           if (zB !== GB.sideOrientation) return XB.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
```

#### 667. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6136-L6140` → after: `L6136-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6136-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6136-L6140) · [Before (L6136-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6136-L6140)

```diff
-                 if (BH instanceof eH.c) {
-                   for (let HH = 0; HH < BH.BBH.length; HH++) CH.indexOf(BH.BBH[HH]) < 0 && CH.push(BH.BBH[HH]);
-                   for (let AH = 0; AH < LH.jU.length; AH++) EH.push(CH.indexOf(BH.BBH[LH.jU[AH].materialIndex])), XH.push({
-                     start: HH + LH.jU[AH].indexStart,
-                     count: LH.jU[AH].indexCount
+                 if (OB instanceof LB.d) {
+                   for (let BB = 0; BB < OB.jOB.length; BB++) JB.indexOf(OB.jOB[BB]) < 0 && JB.push(OB.jOB[BB]);
+                   for (let YB = 0; YB < GB.iW.length; YB++) MB.push(JB.indexOf(OB.jOB[GB.iW[YB].materialIndex])), PB.push({
+                     start: BB + GB.iW[YB].indexStart,
+                     count: GB.iW[YB].indexCount
```

#### 668. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6144-L6146)

```diff
-                   for (let AH = 0; AH < LH.jU.length; AH++) EH.push(CH.indexOf(BH)), XH.push({
-                     start: HH + LH.jU[AH].indexStart,
-                     count: LH.jU[AH].indexCount
+                   for (let YB = 0; YB < GB.iW.length; YB++) MB.push(JB.indexOf(OB)), PB.push({
+                     start: BB + GB.iW[YB].indexStart,
+                     count: GB.iW[YB].indexCount
```

#### 669. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6150-L6152` → after: `L6150-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6150-L6152) · [Before (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6150-L6152)

```diff
-                 for (let BH = 0; BH < LH.jU.length; BH++) EH.push(0), XH.push({
-                   start: HH + LH.jU[BH].indexStart,
-                   count: LH.jU[BH].indexCount
+                 for (let OB = 0; OB < GB.iW.length; OB++) MB.push(0), PB.push({
+                   start: BB + GB.iW[OB].indexStart,
+                   count: GB.iW[OB].indexCount
```

#### 670. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6172` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6172) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6172)

```diff
-               vertexData: oH.b.ExtractFromMesh(HH, !1, !1),
+               vertexData: KB.e.ExtractFromMesh(BB, !1, !1),
```

#### 671. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6187` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6187) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6187)

```diff
-         rH || (rH = new iH(zH.name + "_merged", zH.yN()));
+         DB || (DB = new sB(yB.name + "_merged", yB.JF()));
```

#### 672. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6194-L6195` → after: `L6194-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6194-L6195) · [Before (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6194-L6195)

```diff
-           for (rH.releaseSubMeshes(), BH = 0; BH < XH.length;) lH.d.CreateFromIndices(0, XH[BH].start, XH[BH].count, rH, void 0, !1), BH++;
-           for (const HH of rH.jU) HH.refreshBoundingInfo();
+           for (DB.releaseSubMeshes(), OB = 0; OB < PB.length;) IB.c.CreateFromIndices(0, PB[OB].start, PB[OB].count, DB, void 0, !1), OB++;
+           for (const BB of DB.iW) BB.refreshBoundingInfo();
```

#### 673. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6199-L6201` → after: `L6199-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6199-L6201) · [Before (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6199-L6201)

```diff
-           const HH = new eH.c(zH.name + "_merged", zH.yN());
-           HH.BBH = CH;
-           for (let BH = 0; BH < rH.jU.length; BH++) rH.jU[BH].materialIndex = EH[BH];
+           const BB = new LB.d(yB.name + "_merged", yB.JF());
+           BB.jOB = JB;
+           for (let OB = 0; OB < DB.iW.length; OB++) DB.iW[OB].materialIndex = MB[OB];
```

#### 674. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6206` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6206) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6206)

```diff
-       nHH(HH) {
+       hBB(BB) {
```

#### 675. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6209` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6209) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6209)

```diff
-       DHH(HH) {
+       eBB(BB) {
```

#### 676. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6220` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6220) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6220)

```diff
-         return this._scene.useRightHandedSystem && this.sideOrientation === KH.c.CounterClockWiseSideOrientation
+         return this._scene.useRightHandedSystem && this.sideOrientation === FB.b.CounterClockWiseSideOrientation
```

#### 677. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6223-L6224` → after: `L6223-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6223-L6224) · [Before (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6223-L6224)

```diff
-         const BH = this.yN();
-         return BH.forcePointsCloud ? KH.c.PointFillMode : BH.forceWireframe ? KH.c.WireFrameFillMode : this.overrideRenderingFillMode ?? HH
+         const OB = this.JF();
+         return OB.forcePointsCloud ? FB.b.PointFillMode : OB.forceWireframe ? FB.b.WireFrameFillMode : this.overrideRenderingFillMode ?? BB
```

#### 678. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6305-L6306)

```diff
-     iH.FRONTSIDE = oH.b.FRONTSIDE, iH.BACKSIDE = oH.b.BACKSIDE, iH.DOUBLESIDE = oH.b.DOUBLESIDE, iH.DEFAULTSIDE = oH.b.DEFAULTSIDE, iH.NO_CAP = 0, iH.CAP_START = 1, iH.CAP_END = 2, iH.CAP_ALL = 3, iH.NO_FLIP = 0, iH.FLIP_TILE = 1, iH.ROTATE_TILE = 2, iH.FLIP_ROW = 3, iH.ROTATE_RO … [truncated]
-       throw (0, jH.i)("GroundMesh")
+     sB.FRONTSIDE = KB.e.FRONTSIDE, sB.BACKSIDE = KB.e.BACKSIDE, sB.DOUBLESIDE = KB.e.DOUBLESIDE, sB.DEFAULTSIDE = KB.e.DEFAULTSIDE, sB.NO_CAP = 0, sB.CAP_START = 1, sB.CAP_END = 2, sB.CAP_ALL = 3, sB.NO_FLIP = 0, sB.FLIP_TILE = 1, sB.ROTATE_TILE = 2, sB.FLIP_ROW = 3, sB.ROTATE_RO … [truncated]
+       throw (0, EB.j)("GroundMesh")
```

#### 679. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6308)

```diff
-       throw (0, jH.i)("GoldbergMesh")
+       throw (0, EB.j)("GoldbergMesh")
```

#### 680. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6310)

```diff
-       throw (0, jH.i)("LinesMesh")
+       throw (0, EB.j)("LinesMesh")
```

#### 681. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6312` → after: `L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6312) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6312)

```diff
-       throw (0, jH.i)("GreasedLineMesh")
+       throw (0, EB.j)("GreasedLineMesh")
```

#### 682. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6314)

```diff
-       throw (0, jH.i)("GreasedLineRibbonMesh")
+       throw (0, EB.j)("GreasedLineRibbonMesh")
```

#### 683. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6316)

```diff
-       throw (0, jH.i)("TrailMesh")
+       throw (0, EB.j)("TrailMesh")
```

#### 684. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6318)

```diff
-       throw (0, jH.i)("GaussianSplattingMesh")
+       throw (0, EB.j)("GaussianSplattingMesh")
```

#### 685. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6320)

```diff
-       throw (0, jH.i)("GaussianSplattingPartProxyMesh")
+       throw (0, EB.j)("GaussianSplattingPartProxyMesh")
```

#### 686. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6322` → after: `L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6322) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6322)

```diff
-       throw (0, jH.i)("GaussianSplattingCompoundMesh")
+       throw (0, EB.j)("GaussianSplattingCompoundMesh")
```

#### 687. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6328` → after: `L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6328) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6328)

```diff
-     }(AH = iH.prototype).uF ?? (AH.uF = (0, jH.f)("Mesh", "uF")), (rH = iH.prototype).simplify ?? (rH.simplify = (0, jH.f)("Mesh", "simplify")), (SH = iH.prototype).thinInstanceAdd ?? (SH.thinInstanceAdd = (0, jH.f)("Mesh", "thinInstanceAdd")), (hH = iH.prototype).thinInstanceAdd … [truncated]
+     }(YB = sB.prototype).BX ?? (YB.BX = (0, EB.g)("Mesh", "BX")), (DB = sB.prototype).simplify ?? (DB.simplify = (0, EB.g)("Mesh", "simplify")), (QB = sB.prototype).thinInstanceAdd ?? (QB.thinInstanceAdd = (0, EB.g)("Mesh", "thinInstanceAdd")), (oB = sB.prototype).thinInstanceAdd … [truncated]
```

#### 688. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6330` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6330) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6330)

```diff
-   41703: (HH, BH, LH) => {
+   41423: (BB, OB, GB) => {
```

#### 689. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6332` → after: `L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6332) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6332)

```diff
-       b: () => uH
+       e: () => pB
```

#### 690. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6334-L6343` → after: `L6334-L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6334-L6343) · [Before (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6334-L6343)

```diff
-     var AH = LH(41290),
-       rH = LH(37963),
-       SH = LH(41427),
-       hH = LH(41169),
-       tH = LH(38074),
-       zH = LH(39595),
-       CH = LH(41297),
-       EH = LH(41697),
-       XH = LH(41346),
-       GH = LH(41578);
+     var YB = GB(40998),
+       DB = GB(37778),
+       QB = GB(41150),
+       oB = GB(40890),
+       jB = GB(37894),
+       yB = GB(39366),
+       JB = GB(41004),
+       MB = GB(41420),
+       PB = GB(41049),
+       zB = GB(41287);
```

#### 691. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6350)

```diff
-           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, EH.g)(this._applyToCoroutine.bind(this)), this.uniqueId = HH._UniqueIdGenerator, HH._UniqueIdGenerator++
+           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, MB.h)(this._applyToCoroutine.bind(this)), this.uniqueId = BB._UniqueIdGenerator, BB._UniqueIdGenerator++
```

#### 692. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6353-L6354` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6353-L6354) · [Before (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6353-L6354)

```diff
-           switch (HH.length || zH.e.Warn(`Setting vertex data kind '${BH}' with an empty array`), BH) {
-             case SH.i.PositionKind:
+           switch (BB.length || yB.b.Warn(`Setting vertex data kind '${OB}' with an empty array`), OB) {
+             case QB.h.PositionKind:
```

#### 693. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6357` → after: `L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6357) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6357)

```diff
-             case SH.i.NormalKind:
+             case QB.h.NormalKind:
```

#### 694. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6360)

```diff
-             case SH.i.TangentKind:
+             case QB.h.TangentKind:
```

#### 695. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6363)

```diff
-             case SH.i.UVKind:
+             case QB.h.UVKind:
```

#### 696. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6366` → after: `L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6366) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6366)

```diff
-             case SH.i.UV2Kind:
+             case QB.h.UV2Kind:
```

#### 697. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6369)

```diff
-             case SH.i.UV3Kind:
+             case QB.h.UV3Kind:
```

#### 698. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6372` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6372) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6372)

```diff
-             case SH.i.UV4Kind:
+             case QB.h.UV4Kind:
```

#### 699. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6375` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6375) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6375)

```diff
-             case SH.i.UV5Kind:
+             case QB.h.UV5Kind:
```

#### 700. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6378` → after: `L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6378) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6378)

```diff
-             case SH.i.UV6Kind:
+             case QB.h.UV6Kind:
```

#### 701. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6381)

```diff
-             case SH.i.ColorKind:
+             case QB.h.ColorKind:
```

#### 702. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6384)

```diff
-             case SH.i.MatricesIndicesKind:
+             case QB.h.MatricesIndicesKind:
```

#### 703. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6387` → after: `L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6387) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6387)

```diff
-             case SH.i.MatricesWeightsKind:
+             case QB.h.MatricesWeightsKind:
```

#### 704. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6390)

```diff
-             case SH.i.MatricesIndicesExtraKind:
+             case QB.h.MatricesIndicesExtraKind:
```

#### 705. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6393` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6393) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6393)

```diff
-             case SH.i.MatricesWeightsExtraKind:
+             case QB.h.MatricesWeightsExtraKind:
```

#### 706. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6411` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6411) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6411)

```diff
-           if (this.positions && (HH.setVerticesData(SH.i.PositionKind, this.positions, BH), LH && (yield)), this.normals && (HH.setVerticesData(SH.i.NormalKind, this.normals, BH), LH && (yield)), this.tangents && (HH.setVerticesData(SH.i.TangentKind, this.tangents, BH), LH && (yi … [truncated]
+           if (this.positions && (BB.setVerticesData(QB.h.PositionKind, this.positions, OB), GB && (yield)), this.normals && (BB.setVerticesData(QB.h.NormalKind, this.normals, OB), GB && (yield)), this.tangents && (BB.setVerticesData(QB.h.TangentKind, this.tangents, OB), GB && (yi … [truncated]
```

#### 707. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6413)

```diff
-             HH.setVerticesData(SH.i.ColorKind, this.colors, BH, AH), this.hasVertexAlpha && void 0 !== HH.hasVertexAlpha && (HH.hasVertexAlpha = !0), LH && (yield)
+             BB.setVerticesData(QB.h.ColorKind, this.colors, OB, YB), this.hasVertexAlpha && void 0 !== BB.hasVertexAlpha && (BB.hasVertexAlpha = !0), GB && (yield)
```

#### 708. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6415` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6415) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6415)

```diff
-           if (this.matricesIndices && (HH.setVerticesData(SH.i.MatricesIndicesKind, this.matricesIndices, BH), LH && (yield)), this.matricesWeights && (HH.setVerticesData(SH.i.MatricesWeightsKind, this.matricesWeights, BH), LH && (yield)), this.matricesIndicesExtra && (HH.setVert … [truncated]
+           if (this.matricesIndices && (BB.setVerticesData(QB.h.MatricesIndicesKind, this.matricesIndices, OB), GB && (yield)), this.matricesWeights && (BB.setVerticesData(QB.h.MatricesWeightsKind, this.matricesWeights, OB), GB && (yield)), this.matricesIndicesExtra && (BB.setVert … [truncated]
```

#### 709. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6417-L6418` → after: `L6417-L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6417-L6418) · [Before (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6417-L6418)

```diff
-             BH.jU = [];
-             for (const HH of this.materialInfos) new GH.d(HH.materialIndex, HH.verticesStart, HH.verticesCount, HH.indexStart, HH.indexCount, BH)
+             OB.iW = [];
+             for (const BB of this.materialInfos) new zB.c(BB.materialIndex, BB.verticesStart, BB.verticesCount, BB.indexStart, BB.indexCount, OB)
```

#### 710. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6423` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6423) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6423)

```diff
-           return this.positions && HH.updateVerticesData(SH.i.PositionKind, this.positions, BH, LH), this.normals && HH.updateVerticesData(SH.i.NormalKind, this.normals, BH, LH), this.tangents && HH.updateVerticesData(SH.i.TangentKind, this.tangents, BH, LH), this.uvs && HH.updat … [truncated]
+           return this.positions && BB.updateVerticesData(QB.h.PositionKind, this.positions, OB, GB), this.normals && BB.updateVerticesData(QB.h.NormalKind, this.normals, OB, GB), this.tangents && BB.updateVerticesData(QB.h.TangentKind, this.tangents, OB, GB), this.uvs && BB.updat … [truncated]
```

#### 711. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6428-L6430` → after: `L6428-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6428-L6430) · [Before (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6428-L6430)

```diff
-           const SH = rH.l.lu[0],
-             hH = rH.l.lu[1];
-           for (let tH = LH; tH < LH + AH; tH += 3) rH.o.FromArrayToRef(HH, tH, SH), rH.o.TransformCoordinatesToRef(SH, BH, hH), HH[tH] = hH.x, HH[tH + 1] = hH.y, HH[tH + 2] = hH.z
+           const QB = DB.k.Xp[0],
+             oB = DB.k.Xp[1];
+           for (let jB = GB; jB < GB + YB; jB += 3) DB.r.FromArrayToRef(BB, jB, QB), DB.r.TransformCoordinatesToRef(QB, OB, oB), BB[jB] = oB.x, BB[jB + 1] = oB.y, BB[jB + 2] = oB.z
```

#### 712. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6435-L6437` → after: `L6435-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6435-L6437) · [Before (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6435-L6437)

```diff
-           const SH = rH.l.lu[0],
-             hH = rH.l.lu[1];
-           for (let tH = LH; tH < LH + AH; tH += 3) rH.o.FromArrayToRef(HH, tH, SH), rH.o.TransformNormalToRef(SH, BH, hH), HH[tH] = hH.x, HH[tH + 1] = hH.y, HH[tH + 2] = hH.z
+           const QB = DB.k.Xp[0],
+             oB = DB.k.Xp[1];
+           for (let jB = GB; jB < GB + YB; jB += 3) DB.r.FromArrayToRef(BB, jB, QB), DB.r.TransformNormalToRef(QB, OB, oB), BB[jB] = oB.x, BB[jB + 1] = oB.y, BB[jB + 2] = oB.z
```

#### 713. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6442-L6444` → after: `L6442-L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6442-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6442-L6444) · [Before (L6442-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6442-L6444)

```diff
-           const SH = rH.l.Vector4[0],
-             hH = rH.l.Vector4[1];
-           for (let tH = LH; tH < LH + AH; tH += 4) rH.q.FromArrayToRef(HH, tH, SH), rH.q.TransformNormalToRef(SH, BH, hH), HH[tH] = hH.x, HH[tH + 1] = hH.y, HH[tH + 2] = hH.z, HH[tH + 3] = hH.w
+           const QB = DB.k.Vector4[0],
+             oB = DB.k.Vector4[1];
+           for (let jB = GB; jB < GB + YB; jB += 4) DB.t.FromArrayToRef(BB, jB, QB), DB.t.TransformNormalToRef(QB, OB, oB), BB[jB] = oB.x, BB[jB + 1] = oB.y, BB[jB + 2] = oB.z, BB[jB + 3] = oB.w
```

#### 714. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6482)

```diff
-           return (0, EH.k)(this._mergeCoroutine(void 0, SH, BH, !1, LH, AH, rH))
+           return (0, MB.l)(this._mergeCoroutine(void 0, QB, OB, !1, GB, YB, DB))
```

#### 715. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6554` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6554) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6554)

```diff
-           return this.indices = GH, this.positions = HH._MergeElement(SH.i.PositionKind, EH.positions, BH, LH.map((HH => [HH.vertexData.positions, HH.transform]))), rH && (yield), EH.normals && (this.normals = HH._MergeElement(SH.i.NormalKind, EH.normals, BH, LH.map((HH => [HH.ve … [truncated]
+           return this.indices = zB, this.positions = BB._MergeElement(QB.h.PositionKind, MB.positions, OB, GB.map((BB => [BB.vertexData.positions, BB.transform]))), DB && (yield), MB.normals && (this.normals = BB._MergeElement(QB.h.NormalKind, MB.normals, OB, GB.map((BB => [BB.ve … [truncated]
```

#### 716. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6561` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6561) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6561)

```diff
-             zH = BH === SH.i.PositionKind ? HH._TransformVector3Coordinates : BH === SH.i.NormalKind ? HH._TransformVector3Normals : BH === SH.i.TangentKind ? HH._TransformVector4Normals : () => {};
+             yB = OB === QB.h.PositionKind ? BB._TransformVector3Coordinates : OB === QB.h.NormalKind ? BB._TransformVector3Normals : OB === QB.h.TangentKind ? BB._TransformVector4Normals : () => {};
```

#### 717. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6581` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6581) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6581)

```diff
-           if (!this.positions) throw new XH.j("Positions are required", XH.g.MeshInvalidPositionsError);
+           if (!this.positions) throw new PB.i("Positions are required", PB.g.MeshInvalidPositionsError);
```

#### 718. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6583` → after: `L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6583) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6583)

```diff
-               const LH = (0, SH.f)(HH);
+               const GB = (0, QB.e)(BB);
```

#### 719. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6587` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6587) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6587)

```diff
-             BH = HH(SH.i.PositionKind, this.positions),
+             OB = BB(QB.h.PositionKind, this.positions),
```

#### 720. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6592` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6592) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6592)

```diff
-           this.normals && LH(SH.i.NormalKind, this.normals), this.tangents && LH(SH.i.TangentKind, this.tangents), this.uvs && LH(SH.i.UVKind, this.uvs), this.uvs2 && LH(SH.i.UV2Kind, this.uvs2), this.uvs3 && LH(SH.i.UV3Kind, this.uvs3), this.uvs4 && LH(SH.i.UV4Kind, this.uvs4),  … [truncated]
+           this.normals && GB(QB.h.NormalKind, this.normals), this.tangents && GB(QB.h.TangentKind, this.tangents), this.uvs && GB(QB.h.UVKind, this.uvs), this.uvs2 && GB(QB.h.UV2Kind, this.uvs2), this.uvs3 && GB(QB.h.UV3Kind, this.uvs3), this.uvs4 && GB(QB.h.UV4Kind, this.uvs4),  … [truncated]
```

#### 721. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6623` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6623) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6623)

```diff
-           if (BH.isVerticesDataPresent(SH.i.PositionKind) && (rH.positions = BH.getVerticesData(SH.i.PositionKind, LH, AH)), BH.isVerticesDataPresent(SH.i.NormalKind) && (rH.normals = BH.getVerticesData(SH.i.NormalKind, LH, AH)), BH.isVerticesDataPresent(SH.i.TangentKind) && (rH. … [truncated]
+           if (OB.isVerticesDataPresent(QB.h.PositionKind) && (DB.positions = OB.getVerticesData(QB.h.PositionKind, GB, YB)), OB.isVerticesDataPresent(QB.h.NormalKind) && (DB.normals = OB.getVerticesData(QB.h.NormalKind, GB, YB)), OB.isVerticesDataPresent(QB.h.TangentKind) && (DB. … [truncated]
```

#### 722. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6625-L6626` → after: `L6625-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6625-L6626) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6625-L6626)

```diff
-               hH = HH.getVertexBuffer(SH.i.ColorKind),
-               tH = HH.getVerticesData(SH.i.ColorKind, LH, AH);
+               oB = BB.getVertexBuffer(QB.h.ColorKind),
+               jB = BB.getVerticesData(QB.h.ColorKind, GB, YB);
```

#### 723. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6632` → after: `L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6632) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6632)

```diff
-               if (4 !== hH.getSize()) throw new Error(`Unexpected number of color components: ${hH.getSize()}`);
+               if (4 !== oB.getSize()) throw new Error(`Unexpected number of color components: ${oB.getSize()}`);
```

#### 724. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6636` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6636) · [Before (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6636)

```diff
-           return BH.isVerticesDataPresent(SH.i.MatricesIndicesKind) && (rH.matricesIndices = BH.getVerticesData(SH.i.MatricesIndicesKind, LH, AH)), BH.isVerticesDataPresent(SH.i.MatricesWeightsKind) && (rH.matricesWeights = BH.getVerticesData(SH.i.MatricesWeightsKind, LH, AH)), B … [truncated]
+           return OB.isVerticesDataPresent(QB.h.MatricesIndicesKind) && (DB.matricesIndices = OB.getVerticesData(QB.h.MatricesIndicesKind, GB, YB)), OB.isVerticesDataPresent(QB.h.MatricesWeightsKind) && (DB.matricesWeights = OB.getVerticesData(QB.h.MatricesWeightsKind, GB, YB)), O … [truncated]
```

#### 725. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6639` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6639) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6639)

```diff
-           throw (0, hH.i)("ribbonBuilder")
+           throw (0, oB.j)("ribbonBuilder")
```

#### 726. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6642` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6642) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6642)

```diff
-           throw (0, hH.i)("boxBuilder")
+           throw (0, oB.j)("boxBuilder")
```

#### 727. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6645` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6645) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6645)

```diff
-           throw (0, hH.i)("tiledBoxBuilder")
+           throw (0, oB.j)("tiledBoxBuilder")
```

#### 728. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6648)

```diff
-           throw (0, hH.i)("tiledPlaneBuilder")
+           throw (0, oB.j)("tiledPlaneBuilder")
```

#### 729. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6651` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6651) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6651)

```diff
-           throw (0, hH.i)("sphereBuilder")
+           throw (0, oB.j)("sphereBuilder")
```

#### 730. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6654` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/280.js#L6654) · [Before (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/280.js#L6654)

```diff
-           throw (0, hH.i)("cylinderBuilder")
+           throw (0, oB.j)("cylinderBuilder")
```
