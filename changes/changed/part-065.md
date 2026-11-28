# Changed — Bundle Modifications Report (Part 065 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `65 / 154` (**406** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 064](part-064.md) · [Part 066 →](part-066.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (878 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 653. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6057-L6058)

```diff
-           hd = Kd ? this.getVerticesData(Bd.j.MatricesIndicesExtraKind) : null,
-           vd = Kd ? this.getVerticesData(Bd.j.MatricesWeightsExtraKind) : null,
+           lb = gb ? this.getVerticesData(Rb.i.MatricesIndicesExtraKind) : null,
+           Lb = gb ? this.getVerticesData(Rb.i.MatricesWeightsExtraKind) : null,
```

#### 654. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6060-L6062` → after: `L6060-L6062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6060-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6060-L6062) · [Before (L6060-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6060-L6062)

```diff
-           td = Jd.j.Zero(),
-           od = new Jd.d,
-           Nd = new Jd.d;
+           Ob = jb.o.Zero(),
+           Ub = new jb.b,
+           tb = new jb.b;
```

#### 655. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6066` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6066) · [Before (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6066)

```diff
-           for (qd = 0; qd < 4; qd++) dd = Xd[Hd + qd], dd > 0 && (Jd.d.FromFloat32ArrayToRefScaled(Qd, Math.floor(16 * Rd[Hd + qd]), dd, Nd), od.addToSelf(Nd));
+           for (Cb = 0; Cb < 4; Cb++) bb = Vb[Eb + Cb], bb > 0 && (jb.b.FromFloat32ArrayToRefScaled(Ib, Math.floor(16 * pb[Eb + Cb]), bb, tb), Ub.addToSelf(tb));
```

#### 656. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6068-L6069)

```diff
-             for (qd = 0; qd < 4; qd++) dd = vd[Hd + qd], dd > 0 && (Jd.d.FromFloat32ArrayToRefScaled(Qd, Math.floor(16 * hd[Hd + qd]), dd, Nd), od.addToSelf(Nd));
-           Jd.j.TransformCoordinatesFromFloatsToRef(md._sourcePositions[yd], md._sourcePositions[yd + 1], md._sourcePositions[yd + 2], od, td), td.toArray(Wd, yd), Od && (Jd.j.TransformNormalFromFloatsToRef(md._sourceNormals[yd], md._sourceNormals[yd + 1], md._sourceNormals[yd + 2 … [truncated]
+             for (Cb = 0; Cb < 4; Cb++) bb = Lb[Eb + Cb], bb > 0 && (jb.b.FromFloat32ArrayToRefScaled(Ib, Math.floor(16 * lb[Eb + Cb]), bb, tb), Ub.addToSelf(tb));
+           jb.o.TransformCoordinatesFromFloatsToRef(Mb._sourcePositions[Fb], Mb._sourcePositions[Fb + 1], Mb._sourcePositions[Fb + 2], Ub, Ob), Ob.toArray(eb, Fb), wb && (jb.o.TransformNormalFromFloatsToRef(Mb._sourceNormals[Fb], Mb._sourceNormals[Fb + 1], Mb._sourceNormals[Fb + 2 … [truncated]
```

#### 657. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6071` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6071) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6071)

```diff
-         return this.updateVerticesData(Bd.j.PositionKind, Wd), Od && this.updateVerticesData(Bd.j.NormalKind, Fd), this
+         return this.updateVerticesData(Rb.i.PositionKind, eb), wb && this.updateVerticesData(Rb.i.NormalKind, Hb), this
```

#### 658. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6077` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6077) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6077)

```diff
-           const dd = Wd.iG().boundingBox;
+           const bb = eb.XN().boundingBox;
```

#### 659. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6084-L6085` → after: `L6084-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6084-L6085) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6084-L6085)

```diff
-           min: Jd.j.Zero(),
-           max: Jd.j.Zero()
+           min: jb.o.Zero(),
+           max: jb.o.Zero()
```

#### 660. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6090)

```diff
-         return Jd.j.Center(Od.min, Od.max)
+         return jb.o.Center(wb.min, wb.max)
```

#### 661. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6098)

```diff
-         return (0, wd.l)(Md._MergeMeshesCoroutine(dd, Od, md, Wd, Fd, Rd, !1))
+         return (0, Xb.j)(ob._MergeMeshesCoroutine(bb, wb, Mb, eb, Hb, pb, !1))
```

#### 662. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6106` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6106) · [Before (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6106)

```diff
-         return await (0, wd.h)(Md._MergeMeshesCoroutine(dd, Od, md, Wd, Fd, Rd, !0), (0, wd.b)())
+         return await (0, Xb.g)(ob._MergeMeshesCoroutine(bb, wb, Mb, eb, Hb, pb, !0), (0, Xb.c)())
```

#### 663. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6119` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6119) · [Before (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6119)

```diff
-             if (md += dd[Od].getTotalVertices(), md >= 65536) return Pd.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
+             if (Mb += bb[wb].getTotalVertices(), Mb >= 65536) return Nb.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
```

#### 664. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6129-L6130` → after: `L6129-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6129-L6130) · [Before (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6129-L6130)

```diff
-           if (md.lV) return Pd.c.Warn("Cannot merge instance meshes."), null;
-           if (od !== md.sideOrientation) return Pd.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
+           if (Mb.QJ) return Nb.b.Warn("Cannot merge instance meshes."), null;
+           if (Ub !== Mb.sideOrientation) return Nb.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
```

#### 665. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6137-L6140` → after: `L6137-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6137-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6137-L6140) · [Before (L6137-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6137-L6140)

```diff
-                   for (let dd = 0; dd < Od.WOd.length; dd++) vd.indexOf(Od.WOd[dd]) < 0 && vd.push(Od.WOd[dd]);
-                   for (let Wd = 0; Wd < md.ZE.length; Wd++) Qd.push(vd.indexOf(Od.WOd[md.ZE[Wd].materialIndex])), td.push({
-                     start: dd + md.ZE[Wd].indexStart,
-                     count: md.ZE[Wd].indexCount
+                   for (let bb = 0; bb < wb.Lwb.length; bb++) Lb.indexOf(wb.Lwb[bb]) < 0 && Lb.push(wb.Lwb[bb]);
+                   for (let eb = 0; eb < Mb.oR.length; eb++) Ib.push(Lb.indexOf(wb.Lwb[Mb.oR[eb].materialIndex])), Ob.push({
+                     start: bb + Mb.oR[eb].indexStart,
+                     count: Mb.oR[eb].indexCount
```

#### 666. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6144-L6146)

```diff
-                   for (let Wd = 0; Wd < md.ZE.length; Wd++) Qd.push(vd.indexOf(Od)), td.push({
-                     start: dd + md.ZE[Wd].indexStart,
-                     count: md.ZE[Wd].indexCount
+                   for (let eb = 0; eb < Mb.oR.length; eb++) Ib.push(Lb.indexOf(wb)), Ob.push({
+                     start: bb + Mb.oR[eb].indexStart,
+                     count: Mb.oR[eb].indexCount
```

#### 667. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6150-L6152` → after: `L6150-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6150-L6152) · [Before (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6150-L6152)

```diff
-                 for (let Od = 0; Od < md.ZE.length; Od++) Qd.push(0), td.push({
-                   start: dd + md.ZE[Od].indexStart,
-                   count: md.ZE[Od].indexCount
+                 for (let wb = 0; wb < Mb.oR.length; wb++) Ib.push(0), Ob.push({
+                   start: bb + Mb.oR[wb].indexStart,
+                   count: Mb.oR[wb].indexCount
```

#### 668. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6172` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6172) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6172)

```diff
-               vertexData: Sd.c.ExtractFromMesh(dd, !1, !1),
+               vertexData: Db.d.ExtractFromMesh(bb, !1, !1),
```

#### 669. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6187` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6187) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6187)

```diff
-         Fd || (Fd = new Md(hd.name + "_merged", hd.zV()));
+         Hb || (Hb = new ob(lb.name + "_merged", lb.RJ()));
```

#### 670. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6195` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6195) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6195)

```diff
-           for (const dd of Fd.ZE) dd.refreshBoundingInfo();
+           for (const bb of Hb.oR) bb.refreshBoundingInfo();
```

#### 671. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6199-L6201` → after: `L6199-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6199-L6201) · [Before (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6199-L6201)

```diff
-           const dd = new Gd.d(hd.name + "_merged", hd.zV());
-           dd.WOd = vd;
-           for (let Od = 0; Od < Fd.ZE.length; Od++) Fd.ZE[Od].materialIndex = Qd[Od];
+           const bb = new Wb.d(lb.name + "_merged", lb.RJ());
+           bb.Lwb = Lb;
+           for (let wb = 0; wb < Hb.oR.length; wb++) Hb.oR[wb].materialIndex = Ib[wb];
```

#### 672. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6206` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6206) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6206)

```diff
-       jdd(dd) {
+       ybb(bb) {
```

#### 673. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6209` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6209) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6209)

```diff
-       edd(dd) {
+       Tbb(bb) {
```

#### 674. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6223` → after: `L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6223) · [Before (L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6223)

```diff
-         const Od = this.zV();
+         const wb = this.RJ();
```

#### 675. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6305-L6306)

```diff
-     Md.FRONTSIDE = Sd.c.FRONTSIDE, Md.BACKSIDE = Sd.c.BACKSIDE, Md.DOUBLESIDE = Sd.c.DOUBLESIDE, Md.DEFAULTSIDE = Sd.c.DEFAULTSIDE, Md.NO_CAP = 0, Md.CAP_START = 1, Md.CAP_END = 2, Md.CAP_ALL = 3, Md.NO_FLIP = 0, Md.FLIP_TILE = 1, Md.ROTATE_TILE = 2, Md.FLIP_ROW = 3, Md.ROTATE_RO … [truncated]
-       throw (0, cd.m)("GroundMesh")
+     ob.FRONTSIDE = Db.d.FRONTSIDE, ob.BACKSIDE = Db.d.BACKSIDE, ob.DOUBLESIDE = Db.d.DOUBLESIDE, ob.DEFAULTSIDE = Db.d.DEFAULTSIDE, ob.NO_CAP = 0, ob.CAP_START = 1, ob.CAP_END = 2, ob.CAP_ALL = 3, ob.NO_FLIP = 0, ob.FLIP_TILE = 1, ob.ROTATE_TILE = 2, ob.FLIP_ROW = 3, ob.ROTATE_RO … [truncated]
+       throw (0, Qb.k)("GroundMesh")
```

#### 676. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6308)

```diff
-       throw (0, cd.m)("GoldbergMesh")
+       throw (0, Qb.k)("GoldbergMesh")
```

#### 677. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6310)

```diff
-       throw (0, cd.m)("LinesMesh")
+       throw (0, Qb.k)("LinesMesh")
```

#### 678. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6312` → after: `L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6312) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6312)

```diff
-       throw (0, cd.m)("GreasedLineMesh")
+       throw (0, Qb.k)("GreasedLineMesh")
```

#### 679. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6314)

```diff
-       throw (0, cd.m)("GreasedLineRibbonMesh")
+       throw (0, Qb.k)("GreasedLineRibbonMesh")
```

#### 680. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6316)

```diff
-       throw (0, cd.m)("TrailMesh")
+       throw (0, Qb.k)("TrailMesh")
```

#### 681. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6318)

```diff
-       throw (0, cd.m)("GaussianSplattingMesh")
+       throw (0, Qb.k)("GaussianSplattingMesh")
```

#### 682. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6320)

```diff
-       throw (0, cd.m)("GaussianSplattingPartProxyMesh")
+       throw (0, Qb.k)("GaussianSplattingPartProxyMesh")
```

#### 683. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6322` → after: `L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6322) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6322)

```diff
-       throw (0, cd.m)("GaussianSplattingCompoundMesh")
+       throw (0, Qb.k)("GaussianSplattingCompoundMesh")
```

#### 684. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6328` → after: `L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6328) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6328)

```diff
-     }(Wd = Md.prototype).JG ?? (Wd.JG = (0, cd.i)("Mesh", "JG")), (Fd = Md.prototype).simplify ?? (Fd.simplify = (0, cd.i)("Mesh", "simplify")), (Rd = Md.prototype).thinInstanceAdd ?? (Rd.thinInstanceAdd = (0, cd.i)("Mesh", "thinInstanceAdd")), (Xd = Md.prototype).thinInstanceAdd … [truncated]
+     }(eb = ob.prototype).mN ?? (eb.mN = (0, Qb.h)("Mesh", "mN")), (Hb = ob.prototype).simplify ?? (Hb.simplify = (0, Qb.h)("Mesh", "simplify")), (pb = ob.prototype).thinInstanceAdd ?? (pb.thinInstanceAdd = (0, Qb.h)("Mesh", "thinInstanceAdd")), (Vb = ob.prototype).thinInstanceAdd … [truncated]
```

#### 685. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6330` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6330) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6330)

```diff
-   42339: (dd, Od, md) => {
+   42091: (bb, wb, Mb) => {
```

#### 686. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6332` → after: `L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6332) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6332)

```diff
-       c: () => qd
+       d: () => Cb
```

#### 687. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6334-L6343` → after: `L6334-L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6334-L6343) · [Before (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6334-L6343)

```diff
-     var Wd = md(41922),
-       Fd = md(38636),
-       Rd = md(42075),
-       Xd = md(41817),
-       Kd = md(38741),
-       hd = md(40262),
-       vd = md(41931),
-       Qd = md(42335),
-       td = md(41975),
-       od = md(42217);
+     var eb = Mb(41675),
+       Hb = Mb(38285),
+       pb = Mb(41816),
+       Vb = Mb(41554),
+       gb = Mb(38406),
+       lb = Mb(39971),
+       Lb = Mb(41679),
+       Ib = Mb(42085),
+       Ob = Mb(41730),
+       Ub = Mb(41972);
```

#### 688. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6350)

```diff
-           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Qd.d)(this._applyToCoroutine.bind(this)), this.uniqueId = dd._UniqueIdGenerator, dd._UniqueIdGenerator++
+           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Ib.e)(this._applyToCoroutine.bind(this)), this.uniqueId = bb._UniqueIdGenerator, bb._UniqueIdGenerator++
```

#### 689. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6353-L6354` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6353-L6354) · [Before (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6353-L6354)

```diff
-           switch (dd.length || hd.c.Warn(`Setting vertex data kind '${Od}' with an empty array`), Od) {
-             case Rd.j.PositionKind:
+           switch (bb.length || lb.b.Warn(`Setting vertex data kind '${wb}' with an empty array`), wb) {
+             case pb.i.PositionKind:
```

#### 690. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6357` → after: `L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6357) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6357)

```diff
-             case Rd.j.NormalKind:
+             case pb.i.NormalKind:
```

#### 691. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6360)

```diff
-             case Rd.j.TangentKind:
+             case pb.i.TangentKind:
```

#### 692. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6363)

```diff
-             case Rd.j.UVKind:
+             case pb.i.UVKind:
```

#### 693. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6366` → after: `L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6366) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6366)

```diff
-             case Rd.j.UV2Kind:
+             case pb.i.UV2Kind:
```

#### 694. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6369)

```diff
-             case Rd.j.UV3Kind:
+             case pb.i.UV3Kind:
```

#### 695. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6372` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6372) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6372)

```diff
-             case Rd.j.UV4Kind:
+             case pb.i.UV4Kind:
```

#### 696. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6375` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6375) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6375)

```diff
-             case Rd.j.UV5Kind:
+             case pb.i.UV5Kind:
```

#### 697. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6378` → after: `L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6378) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6378)

```diff
-             case Rd.j.UV6Kind:
+             case pb.i.UV6Kind:
```

#### 698. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6381)

```diff
-             case Rd.j.ColorKind:
+             case pb.i.ColorKind:
```

#### 699. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6384)

```diff
-             case Rd.j.MatricesIndicesKind:
+             case pb.i.MatricesIndicesKind:
```

#### 700. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6387` → after: `L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6387) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6387)

```diff
-             case Rd.j.MatricesWeightsKind:
+             case pb.i.MatricesWeightsKind:
```

#### 701. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6390)

```diff
-             case Rd.j.MatricesIndicesExtraKind:
+             case pb.i.MatricesIndicesExtraKind:
```

#### 702. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6393` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6393) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6393)

```diff
-             case Rd.j.MatricesWeightsExtraKind:
+             case pb.i.MatricesWeightsExtraKind:
```

#### 703. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6411` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6411) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6411)

```diff
-           if (this.positions && (dd.setVerticesData(Rd.j.PositionKind, this.positions, Od), md && (yield)), this.normals && (dd.setVerticesData(Rd.j.NormalKind, this.normals, Od), md && (yield)), this.tangents && (dd.setVerticesData(Rd.j.TangentKind, this.tangents, Od), md && (yi … [truncated]
+           if (this.positions && (bb.setVerticesData(pb.i.PositionKind, this.positions, wb), Mb && (yield)), this.normals && (bb.setVerticesData(pb.i.NormalKind, this.normals, wb), Mb && (yield)), this.tangents && (bb.setVerticesData(pb.i.TangentKind, this.tangents, wb), Mb && (yi … [truncated]
```

#### 704. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6413)

```diff
-             dd.setVerticesData(Rd.j.ColorKind, this.colors, Od, Wd), this.hasVertexAlpha && void 0 !== dd.hasVertexAlpha && (dd.hasVertexAlpha = !0), md && (yield)
+             bb.setVerticesData(pb.i.ColorKind, this.colors, wb, eb), this.hasVertexAlpha && void 0 !== bb.hasVertexAlpha && (bb.hasVertexAlpha = !0), Mb && (yield)
```

#### 705. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6415` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6415) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6415)

```diff
-           if (this.matricesIndices && (dd.setVerticesData(Rd.j.MatricesIndicesKind, this.matricesIndices, Od), md && (yield)), this.matricesWeights && (dd.setVerticesData(Rd.j.MatricesWeightsKind, this.matricesWeights, Od), md && (yield)), this.matricesIndicesExtra && (dd.setVert … [truncated]
+           if (this.matricesIndices && (bb.setVerticesData(pb.i.MatricesIndicesKind, this.matricesIndices, wb), Mb && (yield)), this.matricesWeights && (bb.setVerticesData(pb.i.MatricesWeightsKind, this.matricesWeights, wb), Mb && (yield)), this.matricesIndicesExtra && (bb.setVert … [truncated]
```

#### 706. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6417` → after: `L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6417) · [Before (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6417)

```diff
-             Od.ZE = [];
+             wb.oR = [];
```

#### 707. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6423` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6423) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6423)

```diff
-           return this.positions && dd.updateVerticesData(Rd.j.PositionKind, this.positions, Od, md), this.normals && dd.updateVerticesData(Rd.j.NormalKind, this.normals, Od, md), this.tangents && dd.updateVerticesData(Rd.j.TangentKind, this.tangents, Od, md), this.uvs && dd.updat … [truncated]
+           return this.positions && bb.updateVerticesData(pb.i.PositionKind, this.positions, wb, Mb), this.normals && bb.updateVerticesData(pb.i.NormalKind, this.normals, wb, Mb), this.tangents && bb.updateVerticesData(pb.i.TangentKind, this.tangents, wb, Mb), this.uvs && bb.updat … [truncated]
```

#### 708. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6428-L6430` → after: `L6428-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6428-L6430) · [Before (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6428-L6430)

```diff
-           const Rd = Fd.h.Cq[0],
-             Xd = Fd.h.Cq[1];
-           for (let Kd = md; Kd < md + Wd; Kd += 3) Fd.j.FromArrayToRef(dd, Kd, Rd), Fd.j.TransformCoordinatesToRef(Rd, Od, Xd), dd[Kd] = Xd.x, dd[Kd + 1] = Xd.y, dd[Kd + 2] = Xd.z
+           const pb = Hb.j.YC[0],
+             Vb = Hb.j.YC[1];
+           for (let gb = Mb; gb < Mb + eb; gb += 3) Hb.o.FromArrayToRef(bb, gb, pb), Hb.o.TransformCoordinatesToRef(pb, wb, Vb), bb[gb] = Vb.x, bb[gb + 1] = Vb.y, bb[gb + 2] = Vb.z
```

#### 709. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6435-L6437` → after: `L6435-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6435-L6437) · [Before (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6435-L6437)

```diff
-           const Rd = Fd.h.Cq[0],
-             Xd = Fd.h.Cq[1];
-           for (let Kd = md; Kd < md + Wd; Kd += 3) Fd.j.FromArrayToRef(dd, Kd, Rd), Fd.j.TransformNormalToRef(Rd, Od, Xd), dd[Kd] = Xd.x, dd[Kd + 1] = Xd.y, dd[Kd + 2] = Xd.z
+           const pb = Hb.j.YC[0],
+             Vb = Hb.j.YC[1];
+           for (let gb = Mb; gb < Mb + eb; gb += 3) Hb.o.FromArrayToRef(bb, gb, pb), Hb.o.TransformNormalToRef(pb, wb, Vb), bb[gb] = Vb.x, bb[gb + 1] = Vb.y, bb[gb + 2] = Vb.z
```

#### 710. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6442-L6444` → after: `L6442-L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6442-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6442-L6444) · [Before (L6442-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6442-L6444)

```diff
-           const Rd = Fd.h.Vector4[0],
-             Xd = Fd.h.Vector4[1];
-           for (let Kd = md; Kd < md + Wd; Kd += 4) Fd.k.FromArrayToRef(dd, Kd, Rd), Fd.k.TransformNormalToRef(Rd, Od, Xd), dd[Kd] = Xd.x, dd[Kd + 1] = Xd.y, dd[Kd + 2] = Xd.z, dd[Kd + 3] = Xd.w
+           const pb = Hb.j.Vector4[0],
+             Vb = Hb.j.Vector4[1];
+           for (let gb = Mb; gb < Mb + eb; gb += 4) Hb.q.FromArrayToRef(bb, gb, pb), Hb.q.TransformNormalToRef(pb, wb, Vb), bb[gb] = Vb.x, bb[gb + 1] = Vb.y, bb[gb + 2] = Vb.z, bb[gb + 3] = Vb.w
```

#### 711. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6482)

```diff
-           return (0, Qd.l)(this._mergeCoroutine(void 0, Rd, Od, !1, md, Wd, Fd))
+           return (0, Ib.j)(this._mergeCoroutine(void 0, pb, wb, !1, Mb, eb, Hb))
```

#### 712. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6554` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6554) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6554)

```diff
-           return this.indices = od, this.positions = dd._MergeElement(Rd.j.PositionKind, Qd.positions, Od, md.map((dd => [dd.vertexData.positions, dd.transform]))), Fd && (yield), Qd.normals && (this.normals = dd._MergeElement(Rd.j.NormalKind, Qd.normals, Od, md.map((dd => [dd.ve … [truncated]
+           return this.indices = Ub, this.positions = bb._MergeElement(pb.i.PositionKind, Ib.positions, wb, Mb.map((bb => [bb.vertexData.positions, bb.transform]))), Hb && (yield), Ib.normals && (this.normals = bb._MergeElement(pb.i.NormalKind, Ib.normals, wb, Mb.map((bb => [bb.ve … [truncated]
```

#### 713. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6561` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6561) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6561)

```diff
-             hd = Od === Rd.j.PositionKind ? dd._TransformVector3Coordinates : Od === Rd.j.NormalKind ? dd._TransformVector3Normals : Od === Rd.j.TangentKind ? dd._TransformVector4Normals : () => {};
+             lb = wb === pb.i.PositionKind ? bb._TransformVector3Coordinates : wb === pb.i.NormalKind ? bb._TransformVector3Normals : wb === pb.i.TangentKind ? bb._TransformVector4Normals : () => {};
```

#### 714. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6581` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6581) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6581)

```diff
-           if (!this.positions) throw new td.h("Positions are required", td.e.MeshInvalidPositionsError);
+           if (!this.positions) throw new Ob.j("Positions are required", Ob.g.MeshInvalidPositionsError);
```

#### 715. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6587` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6587) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6587)

```diff
-             Od = dd(Rd.j.PositionKind, this.positions),
+             wb = bb(pb.i.PositionKind, this.positions),
```

#### 716. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6592` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6592) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6592)

```diff
-           this.normals && md(Rd.j.NormalKind, this.normals), this.tangents && md(Rd.j.TangentKind, this.tangents), this.uvs && md(Rd.j.UVKind, this.uvs), this.uvs2 && md(Rd.j.UV2Kind, this.uvs2), this.uvs3 && md(Rd.j.UV3Kind, this.uvs3), this.uvs4 && md(Rd.j.UV4Kind, this.uvs4),  … [truncated]
+           this.normals && Mb(pb.i.NormalKind, this.normals), this.tangents && Mb(pb.i.TangentKind, this.tangents), this.uvs && Mb(pb.i.UVKind, this.uvs), this.uvs2 && Mb(pb.i.UV2Kind, this.uvs2), this.uvs3 && Mb(pb.i.UV3Kind, this.uvs3), this.uvs4 && Mb(pb.i.UV4Kind, this.uvs4),  … [truncated]
```

#### 717. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6623` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6623) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6623)

```diff
-           if (Od.isVerticesDataPresent(Rd.j.PositionKind) && (Fd.positions = Od.getVerticesData(Rd.j.PositionKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.NormalKind) && (Fd.normals = Od.getVerticesData(Rd.j.NormalKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.TangentKind) && (Fd. … [truncated]
+           if (wb.isVerticesDataPresent(pb.i.PositionKind) && (Hb.positions = wb.getVerticesData(pb.i.PositionKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.NormalKind) && (Hb.normals = wb.getVerticesData(pb.i.NormalKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.TangentKind) && (Hb. … [truncated]
```

#### 718. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6625-L6626` → after: `L6625-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6625-L6626) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6625-L6626)

```diff
-               Xd = dd.getVertexBuffer(Rd.j.ColorKind),
-               Kd = dd.getVerticesData(Rd.j.ColorKind, md, Wd);
+               Vb = bb.getVertexBuffer(pb.i.ColorKind),
+               gb = bb.getVerticesData(pb.i.ColorKind, Mb, eb);
```

#### 719. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6632` → after: `L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6632) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6632)

```diff
-               if (4 !== Xd.getSize()) throw new Error(`Unexpected number of color components: ${Xd.getSize()}`);
+               if (4 !== Vb.getSize()) throw new Error(`Unexpected number of color components: ${Vb.getSize()}`);
```

#### 720. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6636` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6636) · [Before (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6636)

```diff
-           return Od.isVerticesDataPresent(Rd.j.MatricesIndicesKind) && (Fd.matricesIndices = Od.getVerticesData(Rd.j.MatricesIndicesKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.MatricesWeightsKind) && (Fd.matricesWeights = Od.getVerticesData(Rd.j.MatricesWeightsKind, md, Wd)), O … [truncated]
+           return wb.isVerticesDataPresent(pb.i.MatricesIndicesKind) && (Hb.matricesIndices = wb.getVerticesData(pb.i.MatricesIndicesKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.MatricesWeightsKind) && (Hb.matricesWeights = wb.getVerticesData(pb.i.MatricesWeightsKind, Mb, eb)), w … [truncated]
```

#### 721. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6639` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6639) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6639)

```diff
-           throw (0, Xd.m)("ribbonBuilder")
+           throw (0, Vb.k)("ribbonBuilder")
```

#### 722. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6642` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6642) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6642)

```diff
-           throw (0, Xd.m)("boxBuilder")
+           throw (0, Vb.k)("boxBuilder")
```

#### 723. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6645` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6645) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6645)

```diff
-           throw (0, Xd.m)("tiledBoxBuilder")
+           throw (0, Vb.k)("tiledBoxBuilder")
```

#### 724. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6648)

```diff
-           throw (0, Xd.m)("tiledPlaneBuilder")
+           throw (0, Vb.k)("tiledPlaneBuilder")
```

#### 725. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6651` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6651) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6651)

```diff
-           throw (0, Xd.m)("sphereBuilder")
+           throw (0, Vb.k)("sphereBuilder")
```

#### 726. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6654` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6654) · [Before (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6654)

```diff
-           throw (0, Xd.m)("cylinderBuilder")
+           throw (0, Vb.k)("cylinderBuilder")
```

#### 727. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6657` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6657) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6657)

```diff
-           throw (0, Xd.m)("torusBuilder")
+           throw (0, Vb.k)("torusBuilder")
```

#### 728. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6660` → after: `L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6660) · [Before (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6660)

```diff
-           throw (0, Xd.m)("linesBuilder")
+           throw (0, Vb.k)("linesBuilder")
```

#### 729. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6663)

```diff
-           throw (0, Xd.m)("linesBuilder")
+           throw (0, Vb.k)("linesBuilder")
```

#### 730. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6666` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6666) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6666)

```diff
-           throw (0, Xd.m)("groundBuilder")
+           throw (0, Vb.k)("groundBuilder")
```

#### 731. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6669` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6669) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6669)

```diff
-           throw (0, Xd.m)("groundBuilder")
+           throw (0, Vb.k)("groundBuilder")
```

#### 732. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6672` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6672) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6672)

```diff
-           throw (0, Xd.m)("groundBuilder")
+           throw (0, Vb.k)("groundBuilder")
```

#### 733. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6675` → after: `L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6675) · [Before (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6675)

```diff
-           throw (0, Xd.m)("planeBuilder")
+           throw (0, Vb.k)("planeBuilder")
```

#### 734. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6678` → after: `L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6678) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6678)

```diff
-           throw (0, Xd.m)("discBuilder")
+           throw (0, Vb.k)("discBuilder")
```

#### 735. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6681` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6681) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6681)

```diff
-           throw (0, Xd.m)("polygonBuilder")
+           throw (0, Vb.k)("polygonBuilder")
```

#### 736. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6684` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6684) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6684)

```diff
-           throw (0, Xd.m)("icoSphereBuilder")
+           throw (0, Vb.k)("icoSphereBuilder")
```

#### 737. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6687` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6687) · [Before (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6687)

```diff
-           throw (0, Xd.m)("polyhedronBuilder")
+           throw (0, Vb.k)("polyhedronBuilder")
```

#### 738. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6690-L6691` → after: `L6690-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6690-L6691) · [Before (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6690-L6691)

```diff
-           arguments.length > 0 && void 0 !== arguments[0] || Fd.j.Up();
-           throw (0, Xd.m)("capsuleBuilder")
+           arguments.length > 0 && void 0 !== arguments[0] || Hb.o.Up();
+           throw (0, Vb.k)("capsuleBuilder")
```

#### 739. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6694` → after: `L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6694) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6694)

```diff
-           throw (0, Xd.m)("torusKnotBuilder")
+           throw (0, Vb.k)("torusKnotBuilder")
```

#### 740. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6704` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6704) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6704)

```diff
-           Wd && (Ud = !!Wd.facetNormals, xd = !!Wd.facetPositions, Bd = !!Wd.facetPartitioning, sd = !0 === Wd.useRightHandedSystem ? -1 : 1, ud = Wd.ratio || 0, Sd = !!Wd.depthSort, Vd = Wd.distanceTo, Sd && void 0 === Vd && (Vd = Fd.j.Zero()));
+           eb && (Kb = !!eb.facetNormals, rb = !!eb.facetPositions, Rb = !!eb.facetPartitioning, cb = !0 === eb.useRightHandedSystem ? -1 : 1, Yb = eb.ratio || 0, Db = !!eb.depthSort, Zb = eb.distanceTo, Db && void 0 === Zb && (Zb = Hb.o.Zero()));
```

#### 741. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6733)

```diff
-               dd.ind = 3 * Rd, dd.sqDistance = Fd.j.DistanceSquared(Wd.facetPositions[Rd], Vd)
+               bb.ind = 3 * pb, bb.sqDistance = Hb.o.DistanceSquared(eb.facetPositions[pb], Zb)
```

#### 742. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6762` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6762) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6762)

```diff
-               for (Kd = Kd || new Fd.k(0, 0, 1, 1), hd = hd || new Fd.k(0, 0, 1, 1), qd = 0, td = 0; td < Nd / 2; td++) Xd[qd] = Kd.x + (Kd.z - Kd.x) * Xd[qd], Xd[qd + 1] = Kd.y + (Kd.w - Kd.y) * Xd[qd + 1], Xd[qd + Nd] = hd.x + (hd.z - hd.x) * Xd[qd + Nd], Xd[qd + Nd + 1] = hd.y … [truncated]
+               for (gb = gb || new Hb.q(0, 0, 1, 1), lb = lb || new Hb.q(0, 0, 1, 1), Cb = 0, Ob = 0; Ob < tb / 2; Ob++) Vb[Cb] = gb.x + (gb.z - gb.x) * Vb[Cb], Vb[Cb + 1] = gb.y + (gb.w - gb.y) * Vb[Cb + 1], Vb[Cb + tb] = lb.x + (lb.z - lb.x) * Vb[Cb + tb], Vb[Cb + tb + 1] = lb.y … [truncated]
```

#### 743. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6770` → after: `L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6770) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6770)

```diff
-           Wd && md.set(Wd, Rd.j.PositionKind);
+           eb && Mb.set(eb, pb.i.PositionKind);
```

#### 744. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6772` → after: `L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6772) · [Before (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6772)

```diff
-           Fd && md.set(Fd, Rd.j.NormalKind);
+           Hb && Mb.set(Hb, pb.i.NormalKind);
```

#### 745. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6774` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6774) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6774)

```diff
-           Xd && md.set(Xd, Rd.j.TangentKind);
+           Vb && Mb.set(Vb, pb.i.TangentKind);
```

#### 746. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6776` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6776) · [Before (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6776)

```diff
-           hd && md.set(hd, Rd.j.UVKind);
+           lb && Mb.set(lb, pb.i.UVKind);
```

#### 747. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6778)

```diff
-           vd && md.set(vd, Rd.j.UV2Kind);
+           Lb && Mb.set(Lb, pb.i.UV2Kind);
```

#### 748. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6780` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6780) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6780)

```diff
-           Qd && md.set(Qd, Rd.j.UV3Kind);
+           Ib && Mb.set(Ib, pb.i.UV3Kind);
```

#### 749. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6782` → after: `L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6782) · [Before (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6782)

```diff
-           td && md.set(td, Rd.j.UV4Kind);
+           Ob && Mb.set(Ob, pb.i.UV4Kind);
```

#### 750. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6784` → after: `L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6784) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6784)

```diff
-           od && md.set(od, Rd.j.UV5Kind);
+           Ub && Mb.set(Ub, pb.i.UV5Kind);
```

#### 751. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6786` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6786) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6786)

```diff
-           qd && md.set(qd, Rd.j.UV6Kind);
+           Cb && Mb.set(Cb, pb.i.UV6Kind);
```

#### 752. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6788` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6788) · [Before (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6788)

```diff
-           Hd && (md.set(Kd.f.CheckColors4(Hd, Wd.length / 3), Rd.j.ColorKind), void 0 !== Od.hasVertexAlpha && (md.hasVertexAlpha = Od.hasVertexAlpha));
+           Eb && (Mb.set(gb.f.CheckColors4(Eb, eb.length / 3), pb.i.ColorKind), void 0 !== wb.hasVertexAlpha && (Mb.hasVertexAlpha = wb.hasVertexAlpha));
```

#### 753. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6790` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6790) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6790)

```diff
-           yd && md.set(yd, Rd.j.MatricesIndicesKind);
+           Fb && Mb.set(Fb, pb.i.MatricesIndicesKind);
```

#### 754. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6792` → after: `L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6792) · [Before (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6792)

```diff
-           bd && md.set(bd, Rd.j.MatricesWeightsKind);
+           Bb && Mb.set(Bb, pb.i.MatricesWeightsKind);
```

#### 755. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6811` → after: `L6811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6811) · [Before (L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6811)

```diff
-         Od = [vd.j.filter((function() {
+         wb = [Lb.f.filter((function() {
```

#### 756. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6813` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6813) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6813)

```diff
-         }))], md = [vd.j.filter((function() {
+         }))], Mb = [Lb.f.filter((function() {
```

#### 757. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6815` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6815) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6815)

```diff
-         }))], qd = [vd.j.filter((function() {
+         }))], Cb = [Lb.f.filter((function() {
```

#### 758. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6817` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6817) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6817)

```diff
-         }))], Hd = [vd.j.filter((function() {
+         }))], Eb = [Lb.f.filter((function() {
```

#### 759. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6819` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6819) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6819)

```diff
-         }))], (0, Wd.h)(dd, null, Od, {
+         }))], (0, eb.i)(bb, null, wb, {
```

#### 760. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6829` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6829) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6829)

```diff
-         }, null, yd), (0, Wd.h)(dd, null, md, {
+         }, null, Fb), (0, eb.i)(bb, null, Mb, {
```

#### 761. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6839` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6839) · [Before (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6839)

```diff
-         }, null, yd), (0, Wd.h)(dd, null, qd, {
+         }, null, Fb), (0, eb.i)(bb, null, Cb, {
```

#### 762. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6849)

```diff
-         }, null, yd), (0, Wd.h)(dd, null, Hd, {
+         }, null, Fb), (0, eb.i)(bb, null, Eb, {
```

#### 763. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6865` → after: `L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6865) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6865)

```diff
-       })(), dd.FRONTSIDE = ((0, Wd.k)(dd, yd), 0), dd.BACKSIDE = 1, dd.DOUBLESIDE = 2, dd.DEFAULTSIDE = 0, dd._UniqueIdGenerator = 0, dd
+       })(), bb.FRONTSIDE = ((0, eb.m)(bb, Fb), 0), bb.BACKSIDE = 1, bb.DOUBLESIDE = 2, bb.DEFAULTSIDE = 0, bb._UniqueIdGenerator = 0, bb
```

#### 764. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6868-L6873` → after: `L6868-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6868-L6873) · [Before (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6868-L6873)

```diff
-   42420: (dd, Od, md) => {
-     var Wd = md(38636),
-       Fd = md(40262),
-       Rd = md(42225),
-       Xd = md(42330),
-       Kd = md(42075);
+   42161: (bb, wb, Mb) => {
+     var eb = Mb(38285),
+       Hb = Mb(39971),
+       pb = Mb(41984),
+       Vb = Mb(42078),
+       gb = Mb(41816);
```

#### 765. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6882` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6882) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6882)

```diff
-       md.Bdd(Number.POSITIVE_INFINITY), Wd.Bdd(Number.NEGATIVE_INFINITY);
+       Mb.Jbb(Number.POSITIVE_INFINITY), eb.Jbb(Number.NEGATIVE_INFINITY);
```

#### 766. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6896-L6897` → after: `L6896-L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6896-L6897) · [Before (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6896-L6897)

```diff
-       const Xd = Wd.h.Cq[7],
-         Kd = Wd.h.Cq[8];
+       const Vb = eb.j.YC[7],
+         gb = eb.j.YC[8];
```

#### 767. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6900` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6900) · [Before (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6900)

```diff
-           for (let Qd = 0; Qd < 2; ++Qd) Xd.set(hd ? Od.x : dd.x, vd ? Od.y : dd.y, Qd ? Od.z : dd.z), Wd.j.TransformCoordinatesToRef(Xd, md, Kd), Fd.minimizeInPlace(Kd), Rd.maximizeInPlace(Kd)
+           for (let Ib = 0; Ib < 2; ++Ib) Vb.set(lb ? wb.x : bb.x, Lb ? wb.y : bb.y, Ib ? wb.z : bb.z), eb.o.TransformCoordinatesToRef(Vb, Mb, gb), Hb.minimizeInPlace(gb), pb.maximizeInPlace(gb)
```

#### 768. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6904-L6905` → after: `L6904-L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6904-L6905) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6904-L6905)

```diff
-       const Xd = Wd.h.Cq[7];
-       for (let Kd = 0; Kd < 3 * Od; Kd += 3) Wd.j.TransformCoordinatesFromFloatsToRef(dd[Kd], dd[Kd + 1], dd[Kd + 2], md, Xd), Fd.minimizeInPlace(Xd), Rd.maximizeInPlace(Xd)
+       const Vb = eb.j.YC[7];
+       for (let gb = 0; gb < 3 * wb; gb += 3) eb.o.TransformCoordinatesFromFloatsToRef(bb[gb], bb[gb + 1], bb[gb + 2], Mb, Vb), Hb.minimizeInPlace(Vb), pb.maximizeInPlace(Vb)
```

#### 769. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6908` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6908) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6908)

```diff
-     qd || (qd = !0, Xd.d.prototype.thinInstanceAdd = function(dd) {
+     Cb || (Cb = !0, Vb.e.prototype.thinInstanceAdd = function(bb) {
```

#### 770. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6910` → after: `L6910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6910) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6910)

```diff
-       if (!this.zV().Iq().getCaps().instancedArrays) return Fd.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
+       if (!this.RJ().DC().getCaps().instancedArrays) return Hb.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
```

#### 771. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6917` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6917) · [Before (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6917)

```diff
-     }, Xd.d.prototype.thinInstanceAddSelf = function() {
+     }, Vb.e.prototype.thinInstanceAddSelf = function() {
```

#### 772. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6919-L6922` → after: `L6919-L6922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6919-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6919-L6922) · [Before (L6919-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6919-L6922)

```diff
-       return this.thinInstanceAdd(Wd.d.IdentityReadOnly, dd)
-     }, Xd.d.prototype.thinInstanceRegisterAttribute = function(dd, Od) {
-       dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), this.removeVerticesData(dd), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[dd] = Od, this._userThinInstanceBuffersStorage.sizes[dd] = Od * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, Xd.d.prototype.thinInstanceSetMatrixAt = function(dd, Od) {
+       return this.thinInstanceAdd(eb.b.IdentityReadOnly, bb)
+     }, Vb.e.prototype.thinInstanceRegisterAttribute = function(bb, wb) {
+       bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), this.removeVerticesData(bb), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[bb] = wb, this._userThinInstanceBuffersStorage.sizes[bb] = wb * Math.max(32, this._thinInstanceDataSt … [truncated]
+     }, Vb.e.prototype.thinInstanceSetMatrixAt = function(bb, wb) {
```

#### 773. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6926-L6927` → after: `L6926-L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6926-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6926-L6927) · [Before (L6926-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6926-L6927)

```diff
-       return Od.copyToArray(Wd, 16 * dd), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[dd] = Od), md && (this.Zdd("matrix"), this.kq || this.thinInstanceRefreshBoundingInfo(!1)), !0
-     }, Xd.d.prototype.thinInstanceSetAttributeAt = function(dd, Od, md) {
+       return wb.copyToArray(eb, 16 * bb), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[bb] = wb), Mb && (this.Mwb("matrix"), this.fC || this.thinInstanceRefreshBoundingInfo(!1)), !0
+     }, Vb.e.prototype.thinInstanceSetAttributeAt = function(bb, wb, Mb) {
```

#### 774. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6929-L6930` → after: `L6929-L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6929-L6930) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6929-L6930)

```diff
-       return dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[dd] || Od >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(dd, 0), this._userThinInsta … [truncated]
-     }, Object.defineProperty(Xd.d.prototype, "ndd", {
+       return bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[bb] || wb >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(bb, 0), this._userThinInsta … [truncated]
+     }, Object.defineProperty(Vb.e.prototype, "ibb", {
```

#### 775. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6940)

```diff
-     }), Xd.d.prototype._thinInstanceCreateMatrixBuffer = function(dd, Od) {
+     }), Vb.e.prototype._thinInstanceCreateMatrixBuffer = function(bb, wb) {
```

#### 776. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6942` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6942) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6942)

```diff
-       const Wd = new Kd.b(this.Iq(), Od, !md, 16, !1, !0);
+       const eb = new gb.d(this.DC(), wb, !Mb, 16, !1, !0);
```

#### 777. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6945)

```diff
-     }, Xd.d.prototype.OOd = function(dd, Od) {
+     }, Vb.e.prototype.gwb = function(bb, wb) {
```

#### 778. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6948)

```diff
-       if (md = md || 16, "matrix" === dd) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Od ? Od.length : 32 * md, this._thinInstanceDataStorage.matrixData = Od, this._thin … [truncated]
+       if (Mb = Mb || 16, "matrix" === bb) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = wb ? wb.length : 32 * Mb, this._thinInstanceDataStorage.matrixData = wb, this._thin … [truncated]
```

#### 779. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6952` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6952) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6952)

```diff
-         const Wd = new Kd.b(this.Iq(), Od, !0, 16, !1, !0);
+         const eb = new gb.d(this.DC(), wb, !0, 16, !1, !0);
```

#### 780. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6955-L6958` → after: `L6955-L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6955-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6955-L6958) · [Before (L6955-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6955-L6958)

```diff
-       } else dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), null === Od ? this._userThinInstanceBuffersStorage?.data[dd] && (this.removeVerticesData(dd), delete this._userThinInstanceBuffersStorage.data[dd], delete this._userThinInstanceBuffersStorage.strides[dd], delete … [truncated]
-     }, Xd.d.prototype.Zdd = function(dd) {
-       "matrix" === dd ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
-     }, Xd.d.prototype.thinInstancePartialBufferUpdate = function(dd, Od, md) {
+       } else bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), null === wb ? this._userThinInstanceBuffersStorage?.data[bb] && (this.removeVerticesData(bb), delete this._userThinInstanceBuffersStorage.data[bb], delete this._userThinInstanceBuffersStorage.strides[bb], delete … [truncated]
+     }, Vb.e.prototype.Mwb = function(bb) {
+       "matrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
+     }, Vb.e.prototype.thinInstancePartialBufferUpdate = function(bb, wb, Mb) {
```

#### 781. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6960` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6960) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6960)

```diff
-       else if (dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[dd]) {
+       else if (bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb]) {
```

#### 782. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6967)

```diff
-     }, Xd.d.prototype.thinInstanceGetWorldMatrices = function() {
+     }, Vb.e.prototype.thinInstanceGetWorldMatrices = function() {
```

#### 783. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6972)

```diff
-         for (let Od = 0; Od < this._thinInstanceDataStorage.instancesCount; ++Od) this._thinInstanceDataStorage.worldMatrices[Od] = Wd.d.FromArray(dd, 16 * Od)
+         for (let wb = 0; wb < this._thinInstanceDataStorage.instancesCount; ++wb) this._thinInstanceDataStorage.worldMatrices[wb] = eb.b.FromArray(bb, 16 * wb)
```

#### 784. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6975` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6975) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6975)

```diff
-     }, Xd.d.prototype.thinInstanceRefreshBoundingInfo = function() {
+     }, Vb.e.prototype.thinInstanceRefreshBoundingInfo = function() {
```

#### 785. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6991-L6998` → after: `L6991-L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L6991-L6998) · [Before (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L6991-L6998)

```diff
-               bd = Wd.h.Vector4[0],
-               Td = Wd.h.Cq[1],
-               pd = Wd.h.Cq[2],
-               Yd = Wd.h.Cq[3],
-               gd = Wd.h.Cq[4],
-               wd = Wd.h.Cq[5],
-               Ed = Wd.h.Cq[6],
-               Jd = Wd.h.Matrix[2],
+               Bb = eb.j.Vector4[0],
+               sb = eb.j.YC[1],
+               mb = eb.j.YC[2],
+               hb = eb.j.YC[3],
+               zb = eb.j.YC[4],
+               Xb = eb.j.YC[5],
+               xb = eb.j.YC[6],
+               jb = eb.j.Matrix[2],
```

#### 786. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7001` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7001) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7001)

```diff
-             Td.Bdd(Number.POSITIVE_INFINITY), pd.Bdd(Number.NEGATIVE_INFINITY), Yd.Bdd(Number.POSITIVE_INFINITY), gd.Bdd(Number.NEGATIVE_INFINITY);
+             sb.Jbb(Number.POSITIVE_INFINITY), mb.Jbb(Number.NEGATIVE_INFINITY), hb.Jbb(Number.POSITIVE_INFINITY), zb.Jbb(Number.NEGATIVE_INFINITY);
```

#### 787. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7011)

```diff
-               }, null, Kd.j.PositionKind);
+               }, null, gb.i.PositionKind);
```

#### 788. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7013` → after: `L7013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7013) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7013)

```diff
-               Qd(Fd, xd, wd, Ed), td(wd, Ed, Ud), Td.minimizeInPlace(wd), pd.maximizeInPlace(Ed), Wd.d.FromArrayToRef(Hd, 16 * Rd, Jd), Ud ? od(wd, Ed, Jd, Yd, gd) : Nd(Fd, xd, Jd, Yd, gd)
+               Ib(Hb, rb, Xb, xb), Ob(Xb, xb, Kb), sb.minimizeInPlace(Xb), mb.maximizeInPlace(xb), eb.b.FromArrayToRef(Eb, 16 * pb, jb), Kb ? Ub(Xb, xb, jb, hb, zb) : tb(Hb, rb, jb, hb, zb)
```

#### 789. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7015)

```diff
-             return !(!isFinite(Td.x) || !isFinite(Yd.x)) && (dd.iG().reConstruct(Yd, gd), dd.rawBoundingInfo = new Rd.c(Td, pd), function(dd, Od) {
+             return !(!isFinite(sb.x) || !isFinite(hb.x)) && (bb.XN().reConstruct(hb, zb), bb.rawBoundingInfo = new pb.e(sb, mb), function(bb, wb) {
```

#### 790. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7026-L7027` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7026-L7027) · [Before (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7026-L7027)

```diff
-         const dd = this.iG();
-         this.rawBoundingInfo = new Rd.c(dd.minimum, dd.maximum)
+         const bb = this.XN();
+         this.rawBoundingInfo = new pb.e(bb.minimum, bb.maximum)
```

#### 791. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7029)

```diff
-       const qd = this.iG(),
+       const Cb = this.XN(),
```

#### 792. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7033)

```diff
-       Wd.h.Cq[0].Bdd(Number.POSITIVE_INFINITY), Wd.h.Cq[1].Bdd(Number.NEGATIVE_INFINITY);
+       eb.j.YC[0].Jbb(Number.POSITIVE_INFINITY), eb.j.YC[1].Jbb(Number.NEGATIVE_INFINITY);
```

#### 793. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7035-L7036` → after: `L7035-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7035-L7036) · [Before (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7035-L7036)

```diff
-         Wd.d.FromArrayToRef(Hd, 16 * Rd, Wd.h.Matrix[0]);
-         for (let dd = 0; dd < Xd.length; ++dd) Wd.j.TransformCoordinatesToRef(Xd[dd], Wd.h.Matrix[0], Wd.h.Cq[2]), Wd.h.Cq[0].minimizeInPlace(Wd.h.Cq[2]), Wd.h.Cq[1].maximizeInPlace(Wd.h.Cq[2])
+         eb.b.FromArrayToRef(Eb, 16 * pb, eb.j.Matrix[0]);
+         for (let bb = 0; bb < Vb.length; ++bb) eb.o.TransformCoordinatesToRef(Vb[bb], eb.j.Matrix[0], eb.j.YC[2]), eb.j.YC[0].minimizeInPlace(eb.j.YC[2]), eb.j.YC[1].maximizeInPlace(eb.j.YC[2])
```

#### 794. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7038-L7039` → after: `L7038-L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7038-L7039) · [Before (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7038-L7039)

```diff
-       qd.reConstruct(Wd.h.Cq[0], Wd.h.Cq[1]), this._updateBoundingInfo()
-     }, Xd.d.prototype._thinInstanceRecreateBuffer = function(dd) {
+       Cb.reConstruct(eb.j.YC[0], eb.j.YC[1]), this._updateBoundingInfo()
+     }, Vb.e.prototype._thinInstanceRecreateBuffer = function(bb) {
```

#### 795. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7041-L7042` → after: `L7041-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7041-L7042) · [Before (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7041-L7042)

```diff
-       "matrix" === dd ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Od)) : "previousMatrix" === dd ? this._scene.needsPreviousWorldMatr … [truncated]
-     }, Xd.d.prototype._thinInstanceUpdateBufferSize = function(dd) {
+       "matrix" === bb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, wb)) : "previousMatrix" === bb ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, Vb.e.prototype._thinInstanceUpdateBufferSize = function(bb) {
```

#### 796. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7044` → after: `L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7044) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7044)

```diff
-       dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind);
+       bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind);
```

#### 797. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7058)

```diff
-         md ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Rd, !1), this._thinInstanceDataStorage.matrixData = Rd, this._thinInstanceDataStorage.matrixBufferSize = hd, this._scene … [truncated]
+         Mb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", pb, !1), this._thinInstanceDataStorage.matrixData = pb, this._thinInstanceDataStorage.matrixBufferSize = lb, this._scene … [truncated]
```

#### 798. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7060` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7060) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7060)

```diff
-     }, Xd.d.prototype._thinInstanceInitializeUserStorage = function() {
+     }, Vb.e.prototype._thinInstanceInitializeUserStorage = function() {
```

#### 799. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7067` → after: `L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7067) · [Before (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7067)

```diff
-     }, Xd.d.prototype._disposeThinInstanceSpecificData = function() {
+     }, Vb.e.prototype._disposeThinInstanceSpecificData = function() {
```

#### 800. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7071` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7071) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7071)

```diff
-   42374: (dd, Od, md) => {
+   42116: (bb, wb, Mb) => {
```

#### 801. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7073-L7074` → after: `L7073-L7074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7073-L7074) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7073-L7074)

```diff
-       c: () => Td,
-       f: () => Hd
+       d: () => sb,
+       e: () => Eb
```

#### 802. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7076-L7083` → after: `L7076-L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7076-L7083) · [Before (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7076-L7083)

```diff
-     var Wd, Fd, Rd, Xd, Kd = md(41922),
-       hd = md(41931),
-       vd = md(41948),
-       Qd = md(38660),
-       td = md(38636),
-       od = md(42132),
-       Nd = md(38669),
-       qd = md(41817);
+     var eb, Hb, pb, Vb, gb = Mb(41675),
+       lb = Mb(41679),
+       Lb = Mb(41697),
+       Ib = Mb(38318),
+       Ob = Mb(38285),
+       Ub = Mb(41886),
+       tb = Mb(38333),
+       Cb = Mb(41554);
```

#### 803. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7086)

```diff
-       let Od, md, Wd, Fd, Rd, Xd, Nd, qd, Hd, yd = od.b,
+       let wb, Mb, eb, Hb, pb, Vb, tb, Cb, Eb, Fb = Ub.d,
```

#### 804. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7120` → after: `L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7120) · [Before (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7120)

```diff
-           super(Od, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new td.j(0, 0, 1), this._up = new td.j(0, 1, 0), this._right = new td.j(1, 0, 0), this._position = (0, Kd.k)(this, bd, td.j.Zero()), this._rotation = ((0, Kd.k)(this, T … [truncated]
+           super(wb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Ob.o(0, 0, 1), this._up = new Ob.o(0, 1, 0), this._right = new Ob.o(1, 0, 0), this._position = (0, gb.m)(this, Bb, Ob.o.Zero()), this._rotation = ((0, gb.m)(this, s … [truncated]
```

#### 805. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7153` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7153) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7153)

```diff
-           this._rotationQuaternion = dd, dd && this._rotation.Bdd(0), this._markAsDirtyInternal()
+           this._rotationQuaternion = bb, bb && this._rotation.Jbb(0), this._markAsDirtyInternal()
```

#### 806. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7159` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7159) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7159)

```diff
-           return td.j.TransformNormalFromFloatsToRef(0, 0, this.zV().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
+           return Ob.o.TransformNormalFromFloatsToRef(0, 0, this.RJ().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
```

#### 807. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7162)

```diff
-           return td.j.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
+           return Ob.o.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
```

#### 808. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7165)

```diff
-           return td.j.TransformNormalFromFloatsToRef(this.zV().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
+           return Ob.o.TransformNormalFromFloatsToRef(this.RJ().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
```

#### 809. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7168` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7168) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7168)

```diff
-           return this._poseMatrix ? (this._poseMatrix.Bx(dd), this) : (this._poseMatrix = dd.clone(), this)
+           return this._poseMatrix ? (this._poseMatrix.eZ(bb), this) : (this._poseMatrix = bb.clone(), this)
```

#### 810. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7171` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7171) · [Before (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7171)

```diff
-           return this._poseMatrix || (this._poseMatrix = td.d.Identity()), this._poseMatrix
+           return this._poseMatrix || (this._poseMatrix = Ob.b.Identity()), this._poseMatrix
```

#### 811. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7196)

```diff
-           return this._pivotMatrix.Bx(dd), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Od, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+           return this._pivotMatrix.eZ(bb), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = wb, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 812. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7212)

```diff
-           return dd ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Bdd(0), this._rotationQuaternion = this._rotationQuaternion || td.e.Identity(), dd.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(! … [truncated]
+           return bb ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Jbb(0), this._rotationQuaternion = this._rotationQuaternion || Ob.e.Identity(), bb.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(! … [truncated]
```

#### 813. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7217)

```diff
-         get Nhd() {
+         get hlb() {
```

#### 814. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7231-L7232` → after: `L7231-L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7231-L7232) · [Before (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7231-L7232)

```diff
-             const dd = td.h.Matrix[0];
-             this.parent.getWorldMatrix().invertToRef(dd), td.j.TransformCoordinatesFromFloatsToRef(Od, md, Wd, dd, this.position)
+             const bb = Ob.j.Matrix[0];
+             this.parent.getWorldMatrix().invertToRef(bb), Ob.o.TransformCoordinatesFromFloatsToRef(wb, Mb, eb, bb, this.position)
```

#### 815. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7234` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7234) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7234)

```diff
-           return this._absolutePosition.Bx(dd), this
+           return this._absolutePosition.eZ(bb), this
```

#### 816. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7237)

```diff
-           return this.computeWorldMatrix(), this.position = td.j.TransformNormal(dd, this._localMatrix), this
+           return this.computeWorldMatrix(), this.position = Ob.o.TransformNormal(bb, this._localMatrix), this
```

#### 817. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7241-L7242` → after: `L7241-L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7241-L7242) · [Before (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7241-L7242)

```diff
-           const dd = td.h.Matrix[0];
-           return this._localMatrix.invertToRef(dd), td.j.TransformNormal(this.position, dd)
+           const bb = Ob.j.Matrix[0];
+           return this._localMatrix.invertToRef(bb), Ob.o.TransformNormal(this.position, bb)
```

#### 818. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7245)

```diff
-           return this.computeWorldMatrix(!0), this.position = td.j.TransformCoordinates(dd, this._localMatrix), this
+           return this.computeWorldMatrix(!0), this.position = Ob.o.TransformCoordinates(bb, this._localMatrix), this
```

#### 819. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7256` → after: `L7256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7256) · [Before (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7256)

```diff
-               const dd = td.h.Matrix[0];
+               const bb = Ob.j.Matrix[0];
```

#### 820. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7258` → after: `L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7258) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7258)

```diff
-               const Od = td.h.Matrix[1];
+               const wb = Ob.j.Matrix[1];
```

#### 821. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7261)

```diff
-               const dd = td.h.Quaternion[0];
+               const bb = Ob.j.Quaternion[0];
```

#### 822. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7263` → after: `L7263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7263) · [Before (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7263)

```diff
-               const Od = td.h.Matrix[0];
+               const wb = Ob.j.Matrix[0];
```

#### 823. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7265` → after: `L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7265) · [Before (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7265)

```diff
-               const md = td.h.Matrix[1];
+               const Mb = Ob.j.Matrix[1];
```

#### 824. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7270)

```diff
-           const Od = td.j.Zero();
+           const wb = Ob.o.Zero();
```

#### 825. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7274)

```diff
-           return td.j.TransformNormalToRef(dd, this.getWorldMatrix(), Od), this
+           return Ob.o.TransformNormalToRef(bb, this.getWorldMatrix(), wb), this
```

#### 826. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7287)

```diff
-           0 == this.zV().getRenderId() && this.computeWorldMatrix(!0);
+           0 == this.RJ().getRenderId() && this.computeWorldMatrix(!0);
```

#### 827. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7290-L7291` → after: `L7290-L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7290-L7291) · [Before (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7290-L7291)

```diff
-             const Od = td.h.Matrix[0];
-             md.invertToRef(Od), dd = td.j.TransformCoordinates(dd, Od)
+             const wb = Ob.j.Matrix[0];
+             Mb.invertToRef(wb), bb = Ob.o.TransformCoordinates(bb, wb)
```

#### 828. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7293)

```diff
-           return this.setPivotMatrix(td.d.Translation(-dd.x, -dd.y, -dd.z), !0)
+           return this.setPivotMatrix(Ob.b.Translation(-bb.x, -bb.y, -bb.z), !0)
```

#### 829. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7296)

```diff
-           const dd = td.j.Zero();
+           const bb = Ob.o.Zero();
```

#### 830. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7303` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7303) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7303)

```diff
-           const dd = td.j.Zero();
+           const bb = Ob.o.Zero();
```

#### 831. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7307)

```diff
-           return this.getPivotPointToRef(dd), td.j.TransformCoordinatesToRef(dd, this.getWorldMatrix(), dd), this
+           return this.getPivotPointToRef(bb), Ob.o.TransformCoordinatesToRef(bb, this.getWorldMatrix(), bb), this
```

#### 832. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7309` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7309) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7309)

```diff
-         KWd(dd) {
+         eeb(bb) {
```

#### 833. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7312-L7313)

```diff
-             for (const Od of this._children) Od.KWd(dd);
-           return super.KWd(dd)
+             for (const wb of this._children) wb.eeb(bb);
+           return super.eeb(bb)
```

#### 834. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7319-L7324` → after: `L7319-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7319-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7319-L7324) · [Before (L7319-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7319-L7324)

```diff
-           const Fd = td.h.Quaternion[0],
-             Rd = td.h.Cq[0],
-             Xd = td.h.Cq[1],
-             Kd = td.h.Matrix[1];
-           td.d.IdentityToRef(Kd);
-           const hd = td.h.Matrix[0];
+           const Hb = Ob.j.Quaternion[0],
+             pb = Ob.j.YC[0],
+             Vb = Ob.j.YC[1],
+             gb = Ob.j.Matrix[1];
+           Ob.b.IdentityToRef(gb);
+           const lb = Ob.j.Matrix[0];
```

#### 835. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7327)

```diff
-           return vd || (vd = dd._TmpRotation, td.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, vd)), td.d.ComposeToRef(this.Tt, vd, this.position, hd), this.parent && hd.multiplyToRef(this.parent.computeWorldMatrix(!0), hd), Od && (Od.computeWo … [truncated]
+           return Lb || (Lb = bb._TmpRotation, Ob.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Lb)), Ob.b.ComposeToRef(this.CO, Lb, this.position, lb), this.parent && lb.multiplyToRef(this.parent.computeWorldMatrix(!0), lb), wb && (wb.computeWo … [truncated]
```

#### 836. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7352` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7352) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7352)

```diff
-           if (Od.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Bdd(0)), Wd && 0 !== Wd) {
+           if (wb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Jbb(0)), eb && 0 !== eb) {
```

#### 837. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7355-L7356` → after: `L7355-L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7355-L7356) · [Before (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7355-L7356)

```diff
-                 Wd = td.h.Matrix[0];
-               dd.invertToRef(Wd), Od = td.j.TransformNormal(Od, Wd), dd.determinant() < 0 && (md *= -1)
+                 eb = Ob.j.Matrix[0];
+               bb.invertToRef(eb), wb = Ob.o.TransformNormal(wb, eb), bb.determinant() < 0 && (Mb *= -1)
```

#### 838. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7363-L7372` → after: `L7363-L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7363-L7372) · [Before (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7363-L7372)

```diff
-           Od.normalize(), this.rotationQuaternion || (this.rotationQuaternion = td.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Bdd(0));
-           const Wd = td.h.Cq[0],
-             Fd = td.h.Cq[1],
-             Rd = td.h.Cq[2],
-             Xd = td.h.Quaternion[0],
-             Kd = td.h.Matrix[0],
-             hd = td.h.Matrix[1],
-             vd = td.h.Matrix[2],
-             Qd = td.h.Matrix[3];
-           return dd.subtractToRef(this.position, Wd), td.d.TranslationToRef(Wd.x, Wd.y, Wd.z, Kd), td.d.TranslationToRef(-Wd.x, -Wd.y, -Wd.z, hd), td.d.RotationAxisToRef(Od, md, vd), hd.multiplyToRef(vd, Qd), Qd.multiplyToRef(Kd, Qd), Qd.decompose(Fd, Xd, Rd), this.position.addIn … [truncated]
+           wb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Ob.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Jbb(0));
+           const eb = Ob.j.YC[0],
+             Hb = Ob.j.YC[1],
+             pb = Ob.j.YC[2],
+             Vb = Ob.j.Quaternion[0],
+             gb = Ob.j.Matrix[0],
+             lb = Ob.j.Matrix[1],
+             Lb = Ob.j.Matrix[2],
+             Ib = Ob.j.Matrix[3];
+           return bb.subtractToRef(this.position, eb), Ob.b.TranslationToRef(eb.x, eb.y, eb.z, gb), Ob.b.TranslationToRef(-eb.x, -eb.y, -eb.z, lb), Ob.b.RotationAxisToRef(wb, Mb, Lb), lb.multiplyToRef(Lb, Ib), Ib.multiplyToRef(gb, Ib), Ib.decompose(Hb, Vb, pb), this.position.addIn … [truncated]
```

#### 839. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7385-L7386` → after: `L7385-L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7385-L7386) · [Before (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7385-L7386)

```diff
-           this.rotationQuaternion ? Wd = this.rotationQuaternion : (Wd = td.h.Quaternion[1], td.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Wd));
-           const Fd = td.h.Quaternion[0];
+           this.rotationQuaternion ? eb = this.rotationQuaternion : (eb = Ob.j.Quaternion[1], Ob.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, eb));
+           const Hb = Ob.j.Quaternion[0];
```

#### 840. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7399)

```diff
-           const Wd = this.zV().getRenderId();
+           const eb = this.RJ().getRenderId();
```

#### 841. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7401` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7401) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7401)

```diff
-           md = md || this.zV().activeCamera, this._updateCache();
+           Mb = Mb || this.RJ().activeCamera, this._updateCache();
```

#### 842. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7409` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7409) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7409)

```diff
-             hd = dd._TmpTranslation, hd.KOd(this._position.x + Od[12], this._position.y + Od[13], this._position.z + Od[14])
+             lb = bb._TmpTranslation, lb.twb(this._position.x + wb[12], this._position.y + wb[13], this._position.z + wb[14])
```

#### 843. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7411)

```diff
-           if (Xd.KOd(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
+           if (Vb.twb(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
```

#### 844. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7413)

```diff
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(td.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.KOd(0, 0, 0))
+               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Ob.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.twb(0, 0, 0))
```

#### 845. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7417-L7421` → after: `L7417-L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7417-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7417-L7421) · [Before (L7417-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7417-L7421)

```diff
-             const dd = td.h.Matrix[1];
-             td.d.ScalingToRef(Xd.x, Xd.y, Xd.z, dd);
-             const Od = td.h.Matrix[0];
-             Kd.toRotationMatrix(Od), this._pivotMatrix.multiplyToRef(dd, td.h.Matrix[4]), td.h.Matrix[4].multiplyToRef(Od, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
-           } else td.d.ComposeToRef(Xd, Kd, hd, this._localMatrix);
+             const bb = Ob.j.Matrix[1];
+             Ob.b.ScalingToRef(Vb.x, Vb.y, Vb.z, bb);
+             const wb = Ob.j.Matrix[0];
+             gb.toRotationMatrix(wb), this._pivotMatrix.multiplyToRef(bb, Ob.j.Matrix[4]), Ob.j.Matrix[4].multiplyToRef(wb, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
+           } else Ob.b.ComposeToRef(Vb, gb, lb, this._localMatrix);
```

#### 846. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7426-L7431` → after: `L7426-L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7426-L7431) · [Before (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7426-L7431)

```diff
-                 dd.getSkeleton().prepare(), dd.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), td.h.Matrix[7])
-               } else td.h.Matrix[7].Bx(Rd.getWorldMatrix());
-               const Od = td.h.Cq[5],
-                 md = td.h.Cq[6],
-                 Wd = td.h.Quaternion[0];
-               td.h.Matrix[7].decompose(md, Wd, Od), td.d.ScalingToRef(md.x, md.y, md.z, td.h.Matrix[7]), td.h.Matrix[7].setTranslation(Od), dd.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Wd, Od), this._localMatrix.setTranslation(Od)), this._local … [truncated]
+                 bb.getSkeleton().prepare(), bb.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Ob.j.Matrix[7])
+               } else Ob.j.Matrix[7].eZ(pb.getWorldMatrix());
+               const wb = Ob.j.YC[5],
+                 Mb = Ob.j.YC[6],
+                 eb = Ob.j.Quaternion[0];
+               Ob.j.Matrix[7].decompose(Mb, eb, wb), Ob.b.ScalingToRef(Mb.x, Mb.y, Mb.z, Ob.j.Matrix[7]), Ob.j.Matrix[7].setTranslation(wb), bb.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(eb, wb), this._localMatrix.setTranslation(wb)), this._local … [truncated]
```

#### 847. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7434` → after: `L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7434) · [Before (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7434)

```diff
-               dd.getSkeleton().prepare(), this._localMatrix.multiplyToRef(dd.getFinalMatrix(), td.h.Matrix[6]), td.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
+               bb.getSkeleton().prepare(), this._localMatrix.multiplyToRef(bb.getFinalMatrix(), Ob.j.Matrix[6]), Ob.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
```

#### 848. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7437)

```diff
-           } else this._worldMatrix.Bx(this._localMatrix);
+           } else this._worldMatrix.eZ(this._localMatrix);
```

#### 849. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7440)

```diff
-               const Od = td.h.Cq[0];
+               const wb = Ob.j.YC[0];
```

#### 850. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7443-L7445` → after: `L7443-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7443-L7445) · [Before (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7443-L7445)

```diff
-               this._worldMatrix.invertToRef(td.h.Matrix[1]);
-               const Fd = td.h.Cq[1];
-               td.j.TransformCoordinatesToRef(Wd, td.h.Matrix[1], Fd), Fd.normalize();
+               this._worldMatrix.invertToRef(Ob.j.Matrix[1]);
+               const Hb = Ob.j.YC[1];
+               Ob.o.TransformCoordinatesToRef(eb, Ob.j.Matrix[1], Hb), Hb.normalize();
```

#### 851. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7449-L7453)

```diff
-               if (td.e.RotationYawPitchRollToRef(Rd, Kd, 0, td.h.Quaternion[0]), (this.billboardMode & dd.BILLBOARDMODE_ALL) !== dd.BILLBOARDMODE_ALL) {
-                 const Od = td.h.Cq[1];
-                 td.h.Quaternion[0].toEulerAnglesToRef(Od), (this.billboardMode & dd.BILLBOARDMODE_X) !== dd.BILLBOARDMODE_X && (Od.x = 0), (this.billboardMode & dd.BILLBOARDMODE_Y) !== dd.BILLBOARDMODE_Y && (Od.y = 0), (this.billboardMode & dd.BILLBOARDMODE_Z) !== dd.BILLBOARDMOD … [truncated]
-               } else td.d.FromQuaternionToRef(td.h.Quaternion[0], td.h.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(td.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(td.h.Cq[0])
+               if (Ob.e.RotationYawPitchRollToRef(pb, gb, 0, Ob.j.Quaternion[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
+                 const wb = Ob.j.YC[1];
+                 Ob.j.Quaternion[0].toEulerAnglesToRef(wb), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (wb.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (wb.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMOD … [truncated]
+               } else Ob.b.FromQuaternionToRef(Ob.j.Quaternion[0], Ob.j.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ob.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ob.j.YC[0])
```

#### 852. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7455-L7461` → after: `L7455-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7455-L7461) · [Before (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7455-L7461)

```diff
-               const Od = td.h.Cq[0];
-               this._worldMatrix.getTranslationToRef(Od), td.h.Matrix[1].Bx(md.getViewMatrix());
-               const Wd = this.zV().useRightHandedSystem;
-               if (Wd && td.h.Matrix[1].multiplyToRef(dd._TmpRHRestore, td.h.Matrix[1]), td.h.Matrix[1].setTranslationFromFloats(0, 0, 0), td.h.Matrix[1].invertToRef(td.h.Matrix[0]), (this.billboardMode & dd.BILLBOARDMODE_ALL) !== dd.BILLBOARDMODE_ALL) {
-                 td.h.Matrix[0].decompose(void 0, td.h.Quaternion[0], void 0);
-                 const Od = td.h.Cq[1];
-                 td.h.Quaternion[0].toEulerAnglesToRef(Od), (this.billboardMode & dd.BILLBOARDMODE_X) !== dd.BILLBOARDMODE_X && (Od.x = 0), (this.billboardMode & dd.BILLBOARDMODE_Y) !== dd.BILLBOARDMODE_Y && (Od.y = 0), (this.billboardMode & dd.BILLBOARDMODE_Z) !== dd.BILLBOARDMOD … [truncated]
+               const wb = Ob.j.YC[0];
+               this._worldMatrix.getTranslationToRef(wb), Ob.j.Matrix[1].eZ(Mb.getViewMatrix());
+               const eb = this.RJ().useRightHandedSystem;
+               if (eb && Ob.j.Matrix[1].multiplyToRef(bb._TmpRHRestore, Ob.j.Matrix[1]), Ob.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Ob.j.Matrix[1].invertToRef(Ob.j.Matrix[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
+                 Ob.j.Matrix[0].decompose(void 0, Ob.j.Quaternion[0], void 0);
+                 const wb = Ob.j.YC[1];
+                 Ob.j.Quaternion[0].toEulerAnglesToRef(wb), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (wb.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (wb.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMOD … [truncated]
```

#### 853. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(td.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(td.h.Cq[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Rd && Rd._nonUniformScaling ? this._updateNonUniformScalingState(Rd._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ob.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ob.j.YC[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : pb && pb._nonUniformScaling ? this._updateNonUniformScalingState(pb._nonUniformScaling) : this._up … [truncated]
```

#### 854. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7474` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7474) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7474)

```diff
-                 const dd = td.h.Matrix[0];
+                 const bb = Ob.j.Matrix[0];
```

#### 855. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7476-L7477)

```diff
-                 const Od = td.h.Quaternion[0];
-                 dd.decompose(md.Tt, Od, md.position), md.rotationQuaternion ? md.rotationQuaternion.Bx(Od) : Od.toEulerAnglesToRef(md.rotation)
+                 const wb = Ob.j.Quaternion[0];
+                 bb.decompose(Mb.CO, wb, Mb.position), Mb.rotationQuaternion ? Mb.rotationQuaternion.eZ(wb) : wb.toEulerAnglesToRef(Mb.rotation)
```

#### 856. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7481)

```diff
-           this.Tt.KOd(1, 1, 1), this.position.KOd(0, 0, 0), this.rotation.KOd(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = td.e.Identity()), this._worldMatrix = td.d.Identity()
+           this.CO.twb(1, 1, 1), this.position.twb(0, 0, 0), this.rotation.twb(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Ob.e.Identity()), this._worldMatrix = Ob.b.Identity()
```

#### 857. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7492)

```diff
-           return dd || (dd = this.zV().activeCamera), td.j.TransformCoordinates(this.getAbsolutePosition(), dd.getViewMatrix())
+           return bb || (bb = this.RJ().activeCamera), Ob.o.TransformCoordinates(this.getAbsolutePosition(), bb.getViewMatrix())
```

#### 858. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7496)

```diff
-           return dd || (dd = this.zV().activeCamera), this.getAbsolutePosition().subtract(dd.globalPosition).length()
+           return bb || (bb = this.RJ().activeCamera), this.getAbsolutePosition().subtract(bb.globalPosition).length()
```

#### 859. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7499)

```diff
-           const Fd = vd.b.Clone((() => new dd(Od, this.zV())), this);
+           const Hb = Lb.d.Clone((() => new bb(wb, this.RJ())), this);
```

#### 860. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7510-L7511)

```diff
-           const Od = vd.b.Serialize(this, dd);
-           return Od.type = this.getClassName(), Od.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Od), Od.localMatrix = this.getPivotMatrix().RRd(), Od.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Od.sA = !0), vd.b.AppendSerializedAnimation … [truncated]
+           const wb = Lb.d.Serialize(this, bb);
+           return wb.type = this.getClassName(), wb.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(wb), wb.localMatrix = this.getPivotMatrix().ppb(), wb.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (wb.aJ = !0), Lb.d.AppendSerializedAnimation … [truncated]
```

#### 861. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7519)

```diff
-           if (this.zV().stopAnimation(this), this.zV().removeTransformNode(this), this._parentContainer) {
+           if (this.RJ().stopAnimation(this), this.RJ().removeTransformNode(this), this._parentContainer) {
```

#### 862. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7535)

```diff
-           Od && (this.rotationQuaternion ? (Fd = this.rotationQuaternion.clone(), this.rotationQuaternion.KOd(0, 0, 0, 1)) : this.rotation && (Wd = this.rotation.clone(), this.rotation.KOd(0, 0, 0)));
+           wb && (this.rotationQuaternion ? (Hb = this.rotationQuaternion.clone(), this.rotationQuaternion.twb(0, 0, 0, 1)) : this.rotation && (eb = this.rotation.clone(), this.rotation.twb(0, 0, 0)));
```

#### 863. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7541)

```diff
-           return this.Tt.scaleInPlace(hd), Od && (this.rotationQuaternion && Fd ? this.rotationQuaternion.Bx(Fd) : this.rotation && Wd && this.rotation.Bx(Wd)), this
+           return this.CO.scaleInPlace(lb), wb && (this.rotationQuaternion && Hb ? this.rotationQuaternion.eZ(Hb) : this.rotation && eb && this.rotation.eZ(eb)), this
```

#### 864. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7548)

```diff
-         Od = [(0, hd.B)("position")], md = [(0, hd.B)("rotation")], Wd = [(0, hd.v)("rotationQuaternion")], Fd = [(0, hd.B)("Tt")], Rd = [(0, hd.E)("billboardMode")], Xd = [(0, hd.E)()], Nd = [(0, hd.E)("infiniteDistance")], qd = [(0, hd.E)()], Hd = [(0, hd.E)()], (0, Kd.h)(null, … [truncated]
+         wb = [(0, lb.B)("position")], Mb = [(0, lb.B)("rotation")], eb = [(0, lb.t)("rotationQuaternion")], Hb = [(0, lb.B)("CO")], pb = [(0, lb.E)("billboardMode")], Vb = [(0, lb.E)()], tb = [(0, lb.E)("infiniteDistance")], Cb = [(0, lb.E)()], Eb = [(0, lb.E)()], (0, gb.i)(null, … [truncated]
```

#### 865. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7561` → after: `L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7561) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7561)

```diff
-         }, bd, Td), (0, Kd.h)(null, null, md, {
+         }, Bb, sb), (0, gb.i)(null, null, Mb, {
```

#### 866. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7574)

```diff
-         }, pd, Yd), (0, Kd.h)(null, null, Wd, {
+         }, mb, hb), (0, gb.i)(null, null, eb, {
```

#### 867. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7587)

```diff
-         }, gd, wd), (0, Kd.h)(null, null, Fd, {
+         }, zb, Xb), (0, gb.i)(null, null, Hb, {
```

#### 868. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7600)

```diff
-         }, Ed, Jd), (0, Kd.h)(null, null, Rd, {
+         }, xb, jb), (0, gb.i)(null, null, pb, {
```

#### 869. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7613)

```diff
-         }, Ud, xd), (0, Kd.h)(null, null, Xd, {
+         }, Kb, rb), (0, gb.i)(null, null, Vb, {
```

#### 870. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7626)

```diff
-         }, Bd, Sd), (0, Kd.h)(null, null, Nd, {
+         }, Rb, Db), (0, gb.i)(null, null, tb, {
```

#### 871. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7639)

```diff
-         }, sd, ud), (0, Kd.h)(null, null, qd, {
+         }, cb, Yb), (0, gb.i)(null, null, Cb, {
```

#### 872. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7652` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7652) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7652)

```diff
-         }, Vd, Ad), (0, Kd.h)(null, null, Hd, {
+         }, Zb, fb), (0, gb.i)(null, null, Eb, {
```

#### 873. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7671)

```diff
-       })(), dd.BILLBOARDMODE_NONE = 0, dd.BILLBOARDMODE_X = 1, dd.BILLBOARDMODE_Y = 2, dd.BILLBOARDMODE_Z = 4, dd.BILLBOARDMODE_ALL = 7, dd.BILLBOARDMODE_USE_POSITION = 128, dd.BillboardUseParentOrientation = !1, dd._TmpRotation = td.e.Zero(), dd._TmpScaling = td.j.Zero(), dd._Tm … [truncated]
+       })(), bb.BILLBOARDMODE_NONE = 0, bb.BILLBOARDMODE_X = 1, bb.BILLBOARDMODE_Y = 2, bb.BILLBOARDMODE_Z = 4, bb.BILLBOARDMODE_ALL = 7, bb.BILLBOARDMODE_USE_POSITION = 128, bb.BillboardUseParentOrientation = !1, bb._TmpRotation = Ob.e.Zero(), bb._TmpScaling = Ob.o.Zero(), bb._Tm … [truncated]
```

#### 874. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7675-L7676` → after: `L7675-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7675-L7676) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7675-L7676)

```diff
-       const Wd = vd.b.Parse((() => new Hd(dd.name, Od)), dd, Od, md);
-       if (dd.localMatrix ? Wd.setPreTransformMatrix(td.d.FromArray(dd.localMatrix)) : dd.pivotMatrix && Wd.setPivotMatrix(td.d.FromArray(dd.pivotMatrix)), Wd.rY(dd.isEnabled), Wd._waitingParsedUniqueId = dd.uniqueId, void 0 !== dd.parentId && (Wd._waitingParentId = dd.parentId),  … [truncated]
+       const eb = Lb.d.Parse((() => new Eb(bb.name, wb)), bb, wb, Mb);
+       if (bb.localMatrix ? eb.setPreTransformMatrix(Ob.b.FromArray(bb.localMatrix)) : bb.pivotMatrix && eb.setPivotMatrix(Ob.b.FromArray(bb.pivotMatrix)), eb.Bx(bb.isEnabled), eb._waitingParsedUniqueId = bb.uniqueId, void 0 !== bb.parentId && (eb._waitingParentId = bb.parentId),  … [truncated]
```

#### 875. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7682)

```diff
-         od.b.ParseAnimationRanges(Wd, dd, Od)
+         Ub.d.ParseAnimationRanges(eb, bb, wb)
```

#### 876. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7690)

```diff
-     }(Wd = Hd.prototype).pC ?? (Wd.pC = (0, qd.i)("TransformNode", "pC")), (Fd = Hd.prototype).applyImpulse ?? (Fd.applyImpulse = (0, qd.i)("TransformNode", "applyImpulse")), (Rd = Hd.prototype).applyAngularImpulse ?? (Rd.applyAngularImpulse = (0, qd.i)("TransformNode", "applyAng … [truncated]
+     }(eb = Eb.prototype).fn ?? (eb.fn = (0, Cb.h)("TransformNode", "fn")), (Hb = Eb.prototype).applyImpulse ?? (Hb.applyImpulse = (0, Cb.h)("TransformNode", "applyImpulse")), (pb = Eb.prototype).applyAngularImpulse ?? (pb.applyAngularImpulse = (0, Cb.h)("TransformNode", "applyAng … [truncated]
```

#### 877. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7692)

```diff
-   42335: (dd, Od, md) => {
+   42085: (bb, wb, Mb) => {
```

#### 878. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7745-L7748` → after: `L7745-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/287.js#L7745-L7748) · [Before (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/287.js#L7745-L7748)

```diff
-       b: () => Fd,
-       d: () => hd,
-       h: () => Kd,
-       l: () => Xd
+       c: () => Hb,
+       e: () => lb,
+       g: () => gb,
+       j: () => Vb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (522 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L4)

```diff
-   42075: (dd, Od, md) => {
+   41816: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L9)

```diff
-       j: () => hd
+       i: () => lb
```

#### 3. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L11-L14)

```diff
-     var Wd = md(41856),
-       Fd = md(40262),
-       Rd = md(41991),
-       Xd = md(41897);
+     var eb = Mb(41603),
+       Hb = Mb(39971),
+       pb = Mb(41740),
+       Vb = Mb(41649);
```

#### 4. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Xd.c)(), dd && dd.zV ? this._engine = dd.zV().Iq() : this._engine = dd, this._updatable = md, this._instanced = Kd, this._divisor = vd || 1, this._label = Qd, Od instanceof Wd.c ? (this._data = null, this._buffer = Od) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Vb.c)(), bb && bb.RJ ? this._engine = bb.RJ().DC() : this._engine = bb, this._updatable = Mb, this._instanced = gb, this._divisor = Lb || 1, this._label = Ib, wb instanceof eb.c ? (this._data = null, this._buffer = wb) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L31-L32)

```diff
-         const Kd = Rd ? Od : Od * Float32Array.BYTES_PER_ELEMENT,
-           vd = Wd ? Rd ? Wd : Wd * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const gb = pb ? wb : wb * Float32Array.BYTES_PER_ELEMENT,
+           Lb = eb ? pb ? eb : eb * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 6. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L55-L56)

```diff
-           if (this._buffer.Mt > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Mt, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Mt, void 0, this._label));
-           Fd.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.qO > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.qO, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.qO, void 0, this._label));
+           Hb.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 7. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, dd, Wd ? Od : Od * Float32Array.BYTES_PER_ELEMENT, md ? md * this.byteStride : void 0), this._data = 0 === Od && void 0 === md ? dd : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb, eb ? wb : wb * Float32Array.BYTES_PER_ELEMENT, Mb ? Mb * this.byteStride : void 0), this._data = 0 === wb && void 0 === Mb ? bb : null)
```

#### 8. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L97-L98)

```diff
-         const Yd = (0, Rd.p)(this.type);
-         bd ? (this._size = Nd || (Xd ? Xd / Yd : vd(md)), this.byteStride = Xd || this._buffer.byteStride || this._size * Yd, this.byteOffset = od || 0) : (this._size = Nd || Xd || vd(md), this.byteStride = Xd ? Xd * Yd : this._buffer.byteStride || this._size * Yd, this.byteOffse … [truncated]
+         const hb = (0, pb.r)(this.type);
+         Bb ? (this._size = tb || (Vb ? Vb / hb : Lb(Mb)), this.byteStride = Vb || this._buffer.byteStride || this._size * hb, this.byteOffset = Ub || 0) : (this._size = tb || Vb || Lb(Mb), this.byteStride = Vb ? Vb * hb : this._buffer.byteStride || this._size * hb, this.byteOffse … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${dd}'`)
+             throw new Error(`Invalid vertex buffer type '${bb}'`)
```

#### 10. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L139)

```diff
-         return md ? (0, Rd.o)(md, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, dd, Od) : null
+         return Mb ? (0, pb.q)(Mb, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, bb, wb) : null
```

#### 11. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L148)

```diff
-         return this.byteStride / (0, Rd.p)(this.type)
+         return this.byteStride / (0, pb.r)(this.type)
```

#### 12. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L150-L151)

```diff
-       uWd() {
-         return this.byteOffset / (0, Rd.p)(this.type)
+       Yeb() {
+         return this.byteOffset / (0, pb.r)(this.type)
```

#### 13. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Rd.p)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, pb.r)(this.type) : this._size
```

#### 14. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L213)

```diff
-       return (0, Rd.p)(dd)
+       return (0, pb.r)(bb)
```

#### 15. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L223)

```diff
-       return (0, Rd.o)(dd, Od, md, Wd, Fd, Xd, Kd, hd)
+       return (0, pb.q)(bb, wb, Mb, eb, Hb, Vb, gb, lb)
```

#### 16. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L232)

```diff
-   41856: (dd, Od, md) => {
+   41603: (bb, wb, Mb) => {
```

#### 17. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L241)

```diff
-         this.references = 0, this.Mt = 0, this.is32Bits = !1, this.uniqueId = Wd._Counter++
+         this.references = 0, this.qO = 0, this.is32Bits = !1, this.uniqueId = eb._Counter++
```

#### 18. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L246)

```diff
-   42072: (dd, Od, md) => {
+   41808: (bb, wb, Mb) => {
```

#### 19. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L248)

```diff
-       b: () => Rd
+       c: () => pb
```

#### 20. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L250-L251)

```diff
-     var Wd = md(38636),
-       Fd = md(42075);
+     var eb = Mb(38285),
+       Hb = Mb(41816);
```

#### 21. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L259-L260)

```diff
-         if (!this.pickedMesh || Od && !this.pickedMesh.isVerticesDataPresent(Fd.j.NormalKind)) return null;
-         let md, Rd = this.pickedMesh.jRd();
+         if (!this.pickedMesh || wb && !this.pickedMesh.isVerticesDataPresent(Hb.i.NormalKind)) return null;
+         let Mb, pb = this.pickedMesh.ipb();
```

#### 22. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L262-L264)

```diff
-         const Xd = Wd.h.Cq[0],
-           Kd = Wd.h.Cq[1],
-           hd = Wd.h.Cq[2];
+         const Vb = eb.j.YC[0],
+           gb = eb.j.YC[1],
+           lb = eb.j.YC[2];
```

#### 23. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L266-L270)

```diff
-           const dd = this.pickedMesh.getVerticesData(Fd.j.NormalKind);
-           let Od = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId], Xd) : Xd.KOd(dd[3 * this.faceId * 3], dd[3 * this.faceId * 3 + 1], dd[3 * this.faceId * 3 + 2]),
-             vd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 1], Kd) : Kd.KOd(dd[3 * (3 * this.faceId + 1)], dd[3 * (3 * this.faceId + 1) + 1], dd[3 * (3 * this.faceId + 1) + 2]),
-             Qd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 2], hd) : hd.KOd(dd[3 * (3 * this.faceId + 2)], dd[3 * (3 * this.faceId + 2) + 1], dd[3 * (3 * this.faceId + 2) + 2]);
-           Od = Od.scale(this.bu), vd = vd.scale(this.bv), Qd = Qd.scale(1 - this.bu - this.bv), md = new Wd.j(Od.x + vd.x + Qd.x, Od.y + vd.y + Qd.y, Od.z + vd.z + Qd.z)
+           const bb = this.pickedMesh.getVerticesData(Hb.i.NormalKind);
+           let wb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId], Vb) : Vb.twb(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
+             Lb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 1], gb) : gb.twb(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
+             Ib = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 2], lb) : lb.twb(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]);
+           wb = wb.scale(this.bu), Lb = Lb.scale(this.bv), Ib = Ib.scale(1 - this.bu - this.bv), Mb = new eb.o(wb.x + Lb.x + Ib.x, wb.y + Lb.y + Ib.y, wb.z + Lb.z + Ib.z)
```

#### 24. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L272-L275)

```diff
-           const dd = this.pickedMesh.getVerticesData(Fd.j.PositionKind),
-             Od = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId], Xd) : Xd.KOd(dd[3 * this.faceId * 3], dd[3 * this.faceId * 3 + 1], dd[3 * this.faceId * 3 + 2]),
-             vd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 1], Kd) : Kd.KOd(dd[3 * (3 * this.faceId + 1)], dd[3 * (3 * this.faceId + 1) + 1], dd[3 * (3 * this.faceId + 1) + 2]),
-             Qd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 2], hd) : hd.KOd(dd[3 * (3 * this.faceId + 2)], dd[3 * (3 * this.faceId + 2) + 1], dd[3 * (3 * this.faceId + 2) + 2]),
+           const bb = this.pickedMesh.getVerticesData(Hb.i.PositionKind),
+             wb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId], Vb) : Vb.twb(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
+             Lb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 1], gb) : gb.twb(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
+             Ib = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 2], lb) : lb.twb(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]),
```

#### 25. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L278)

```diff
-           md = Wd.j.Cross(td, od)
+           Mb = eb.o.Cross(Ob, Ub)
```

#### 26. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L285-L286)

```diff
-               const dd = Wd.h.Matrix[0];
-               Wd.d.FromArrayToRef(md, Fd, dd), Wd.j.TransformNormalToRef(Od, dd, Od)
+               const bb = eb.j.Matrix[0];
+               eb.b.FromArrayToRef(Mb, Hb, bb), eb.o.TransformNormalToRef(wb, bb, wb)
```

#### 27. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L290)

```diff
-           dd.nonUniformScaling && (Wd.h.Matrix[0].Bx(md), md = Wd.h.Matrix[0], md.setTranslationFromFloats(0, 0, 0), md.invert(), md.transposeToRef(Wd.h.Matrix[1]), md = Wd.h.Matrix[1]), Wd.j.TransformNormalToRef(Od, md, Od)
+           bb.nonUniformScaling && (eb.j.Matrix[0].eZ(Mb), Mb = eb.j.Matrix[0], Mb.setTranslationFromFloats(0, 0, 0), Mb.invert(), Mb.transposeToRef(eb.j.Matrix[1]), Mb = eb.j.Matrix[1]), eb.o.TransformNormalToRef(wb, Mb, wb)
```

#### 28. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L293-L294)

```diff
-           const Od = Wd.h.Cq[0].Bx(md);
-           dd || vd(this.pickedMesh, Od), Wd.j.Dot(Od, this.ray.direction) > 0 && md.negateInPlace()
+           const wb = eb.j.YC[0].eZ(Mb);
+           bb || Lb(this.pickedMesh, wb), eb.o.Dot(wb, this.ray.direction) > 0 && Mb.negateInPlace()
```

#### 29. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L299)

```diff
-         let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd.j.UVKind;
+         let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb.i.UVKind;
```

#### 30. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L301)

```diff
-         const Od = this.pickedMesh.jRd();
+         const wb = this.pickedMesh.ipb();
```

#### 31. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L305-L308)

```diff
-         let Rd = Wd.i.FromArray(md, 2 * Od[3 * this.faceId]),
-           Xd = Wd.i.FromArray(md, 2 * Od[3 * this.faceId + 1]),
-           Kd = Wd.i.FromArray(md, 2 * Od[3 * this.faceId + 2]);
-         return Rd = Rd.scale(this.bu), Xd = Xd.scale(this.bv), Kd = Kd.scale(1 - this.bu - this.bv), new Wd.i(Rd.x + Xd.x + Kd.x, Rd.y + Xd.y + Kd.y)
+         let pb = eb.m.FromArray(Mb, 2 * wb[3 * this.faceId]),
+           Vb = eb.m.FromArray(Mb, 2 * wb[3 * this.faceId + 1]),
+           gb = eb.m.FromArray(Mb, 2 * wb[3 * this.faceId + 2]);
+         return pb = pb.scale(this.bu), Vb = Vb.scale(this.bv), gb = gb.scale(1 - this.bu - this.bv), new eb.m(pb.x + Vb.x + gb.x, pb.y + Vb.y + gb.y)
```

#### 32. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L312)

```diff
-   41897: (dd, Od, md) => {
+   41649: (bb, wb, Mb) => {
```

#### 33. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L316)

```diff
-     var Wd = md(41777);
+     var eb = Mb(41511);
```

#### 34. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(dd), md = dd.is32Bits ? Od instanceof Uint32Array ? Od : new Uint32Array(Od) : Od instanceof Uint16Array ? Od : new Uint16Array(Od), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, md, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(bb), Mb = bb.is32Bits ? wb instanceof Uint32Array ? wb : new Uint32Array(wb) : wb instanceof Uint16Array ? wb : new Uint16Array(wb), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Mb, … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L330)

```diff
-   41864: (dd, Od, md) => {
+   41618: (bb, wb, Mb) => {
```

#### 36. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L332)

```diff
-       d: () => Wd
+       e: () => eb
```

#### 37. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L369)

```diff
-   41838: (dd, Od, md) => {
+   41572: (bb, wb, Mb) => {
```

#### 38. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L371)

```diff
-       b: () => Td
+       d: () => sb
```

#### 39. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L373-L378)

```diff
-     var Wd = md(38660),
-       Fd = md(41782),
-       Rd = md(38651),
-       Xd = md(40262),
-       Kd = md(38649),
-       hd = md(41841);
+     var eb = Mb(38318),
+       Hb = Mb(41514),
+       pb = Mb(38313),
+       Vb = Mb(39971),
+       gb = Mb(38308),
+       lb = Mb(41581);
```

#### 40. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L612-L616)

```diff
-     var od = md(41844),
-       Nd = md(41817),
-       qd = md(41763),
-       Hd = md(41799),
-       yd = md(41810);
+     var Ub = Mb(41590),
+       tb = Mb(41554),
+       Cb = Mb(41506),
+       Eb = Mb(41535),
+       Fb = Mb(41548);
```

#### 41. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L625)

```diff
-       if ((0, Hd.h)()) {
+       if ((0, Eb.j)()) {
```

#### 42. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L652)

```diff
-       get JFd() {
+       get rHb() {
```

#### 43. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L655)

```diff
-       set JFd(dd) {
+       set rHb(bb) {
```

#### 44. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L677)

```diff
-         if (dd) return this.isNDCHalfZRange ? dd.IS_NDC_HALF_ZRANGE = "" : delete dd.IS_NDC_HALF_ZRANGE, this.JFd ? dd.USE_REVERSE_DEPTHBUFFER = "" : delete dd.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? dd.USE_EXACT_SRGB_CONVERSIONS = "" : delete dd.USE_EXACT_SR … [truncated]
+         if (bb) return this.isNDCHalfZRange ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, this.rHb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SR … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L680)

```diff
-           return this.isNDCHalfZRange && (dd += "#define IS_NDC_HALF_ZRANGE"), this.JFd && (dd && (dd += "\n"), dd += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (dd && (dd += "\n"), dd += "#define USE_EXACT_SRGB_CONVERSIONS"), dd
+           return this.isNDCHalfZRange && (bb += "#define IS_NDC_HALF_ZRANGE"), this.rHb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
```

#### 46. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L696)

```diff
-         Fd.e.ResetCache()
+         Hb.b.ResetCache()
```

#### 47. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L702)

```diff
-         Xd.c.Warn(this.name + " context successfully restored."), this.eq.notifyObservers(this), this._contextWasLost = !1
+         Vb.b.Warn(this.name + " context successfully restored."), this.RC.notifyObservers(this), this._contextWasLost = !1
```

#### 48. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L763)

```diff
-             dd && dd(this.customAnimationFrameRequester.Zq), delete this.customAnimationFrameRequester.Zq
+             bb && bb(this.customAnimationFrameRequester.ZC), delete this.customAnimationFrameRequester.ZC
```

#### 49. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L767)

```diff
-           if (this._frameHandler = 0, (0, Hd.h)()) {
+           if (this._frameHandler = 0, (0, Eb.j)()) {
```

#### 50. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L796)

```diff
-           (this.yJ || !this.renderEvenInBackground && this._windowIsBackground) && (dd = !1), dd && (this.pE(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.bt())
+           (this.RD || !this.renderEvenInBackground && this._windowIsBackground) && (bb = !1), bb && (this.jR(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.tO())
```

#### 51. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Zq = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Z … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.ZC = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Z … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L826)

```diff
-         this._depthCullingState.zOffset = this.JFd ? -dd : dd
+         this._depthCullingState.zOffset = this.rHb ? -bb : bb
```

#### 53. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L830)

```diff
-         return this.JFd ? -dd : dd
+         return this.rHb ? -bb : bb
```

#### 54. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.JFd ? -dd : dd
+         this._depthCullingState.zOffsetUnits = this.rHb ? -bb : bb
```

#### 55. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L837)

```diff
-         return this.JFd ? -dd : dd
+         return this.rHb ? -bb : bb
```

#### 56. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L840)

```diff
-         return (0, Hd.h)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, Eb.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 57. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L891)

```diff
-           Ed = od || new qd.c(this, 1);
+           xb = Ub || new Cb.e(this, 1);
```

#### 58. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L906)

```diff
-           }), hd && hd(md, od)) : (Xd.c.Warn(`Failed to load ${dd}, falling back to ${Jd}`), this._createTextureBase(Jd, Od, Ed.invertY, Wd, Fd, Kd, hd, vd, Qd, td, Ed, Nd, Hd, yd, bd, pd))
+           }), lb && lb(Mb, Ub)) : (Vb.b.Warn(`Failed to load ${bb}, falling back to ${jb}`), this._createTextureBase(jb, wb, xb.invertY, eb, Hb, gb, lb, Lb, Ib, Ob, xb, tb, Eb, Fb, Bb, mb))
```

#### 59. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Hd.d)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Eb.f)() ? document : null
```

#### 60. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new vd, this._stencilStateComposer = new Qd, this._stencilState = new td, this._alphaState = new od.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Lb, this._stencilStateComposer = new Ib, this._stencilState = new Ob, this._alphaState = new Ub.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Wd.c, this.onCanvasFocusObservable = new Wd.c, this.onNewSceneAddedObservable = new Wd.c, this.onResizeObservable = new Wd.c, this.onCanvasPointerOutObservable = new Wd.c, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new eb.b, this.onCanvasFocusObservable = new eb.b, this.onNewSceneAddedObservable = new eb.b, this.onResizeObservable = new eb.b, this.onCanvasPointerOutObservable = new eb.b, this.onE … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const Fd = (0, Hd.h)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const Hb = (0, Eb.j)() && window.devicePixelRatio || 1,
```

#### 63. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1024)

```diff
-           const dd = (0, Hd.h)() && window.devicePixelRatio || 1,
+           const bb = (0, Eb.j)() && window.devicePixelRatio || 1,
```

#### 64. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1028)

```diff
-         if ((0, Hd.h)() && (0, Hd.d)())
+         if ((0, Eb.j)() && (0, Eb.f)())
```

#### 65. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1052)

```diff
-         throw (0, Nd.m)("engine.rawTexture")
+         throw (0, tb.k)("engine.rawTexture")
```

#### 66. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1055)

```diff
-         throw (0, Nd.m)("engine.rawTexture")
+         throw (0, tb.k)("engine.rawTexture")
```

#### 67. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1058)

```diff
-         throw (0, Nd.m)("engine.rawTexture")
+         throw (0, tb.k)("engine.rawTexture")
```

#### 68. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1061)

```diff
-         throw (0, Nd.m)("engine.rawTexture")
+         throw (0, tb.k)("engine.rawTexture")
```

#### 69. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== dd.indexOf("Mobile") || -1 !== dd.indexOf("Mac") && (0, Hd.d)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, Hd.h)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== bb.indexOf("Mobile") || -1 !== bb.indexOf("Mac") && (0, Eb.f)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, Eb.j)() && window.addEventListener("resize", this._checkForMobile))
```

#### 70. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1115-L1116` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1115-L1116) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1115-L1116)

```diff
-         if (!yd.c.loadImage) throw (0, Nd.m)("FileTools");
-         return yd.c.loadImage(dd, Od, md, Wd, Fd, Rd, Xd)
+         if (!Fb.d.loadImage) throw (0, tb.k)("FileTools");
+         return Fb.d.loadImage(bb, wb, Mb, eb, Hb, pb, Vb)
```

#### 71. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1119)

```diff
-         const Xd = (0, yd.i)(dd, Od, md, Wd, Fd, Rd);
+         const Vb = (0, Fb.l)(bb, wb, Mb, eb, Hb, pb);
```

#### 72. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1125-L1126` → after: `L1125-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1125-L1126) · [Before (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1125-L1126)

```diff
-         if (yd.c.loadFile) return yd.c.loadFile(dd, Od, md, Wd, Fd, Rd);
-         throw (0, Nd.m)("FileTools")
+         if (Fb.d.loadFile) return Fb.d.loadFile(bb, wb, Mb, eb, Hb, pb);
+         throw (0, tb.k)("FileTools")
```

#### 73. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1132)

```diff
-         this.releaseComputeEffects?.(), Fd.e.ResetCache();
+         this.releaseComputeEffects?.(), Hb.b.ResetCache();
```

#### 74. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1134)

```diff
-         this._boundRenderFunction = null, this.cV.notifyObservers(this), this.cV.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         this._boundRenderFunction = null, this.vJ.notifyObservers(this), this.vJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1139)

```diff
-         throw (0, Nd.m)("LoadingScreen")
+         throw (0, tb.k)("LoadingScreen")
```

#### 76. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1153)

```diff
-   41785: (dd, Od, md) => {
+   41518: (bb, wb, Mb) => {
```

#### 77. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1170)

```diff
-   41802: (dd, Od, md) => {
+   41539: (bb, wb, Mb) => {
```

#### 78. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1180-L1182` → after: `L1180-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1180-L1182) · [Before (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1180-L1182)

```diff
-       w: () => Qd,
-       z: () => hd,
-       A: () => Kd
+       v: () => Ib,
+       y: () => lb,
+       C: () => gb
```

#### 79. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1222)

```diff
-         const Fd = Od.RRd();
+         const Hb = wb.ppb();
```

#### 80. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1318)

```diff
-         this._cacheMatrix(dd, Od) && (this.engine.setMatrices(this._uniforms[dd], Od.RRd()) || (this._valueCache[dd] = null))
+         this._cacheMatrix(bb, wb) && (this.engine.setMatrices(this._uniforms[bb], wb.ppb()) || (this._valueCache[bb] = null))
```

#### 81. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1367)

```diff
-     var Fd = md(41810);
+     var Hb = Mb(41548);
```

#### 82. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1465)

```diff
-       return bd((0, Fd.e)(dd, md, Wd), Od, Rd, Xd)
+       return Bb((0, Hb.h)(bb, Mb, eb), wb, pb, Vb)
```

#### 83. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${Od} shader object. gl error=${Fd}, gl isContextLost=${md.isContextLost()}, _contextWasLost=${Wd}`)
+         throw new Error(`Something went wrong while creating a gl ${wb} shader object. gl error=${Hb}, gl isContextLost=${Mb.isContextLost()}, _contextWasLost=${eb}`)
```

#### 84. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1492)

```diff
-   41777: (dd, Od, md) => {
+   41511: (bb, wb, Mb) => {
```

#### 85. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1496-L1501)

```diff
-     var Wd = md(41782),
-       Fd = md(41802),
-       Rd = md(41838),
-       Xd = md(41852),
-       Kd = md(40262),
-       hd = md(41799);
+     var eb = Mb(41514),
+       Hb = Mb(41539),
+       pb = Mb(41572),
+       Vb = Mb(41592),
+       gb = Mb(39971),
+       lb = Mb(41535);
```

#### 86. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1542-L1549)

```diff
-     var od = md(41854),
-       Nd = md(41859),
-       qd = md(41864),
-       Hd = md(41763),
-       yd = md(41810),
-       bd = md(41791),
-       Td = md(41869),
-       pd = md(41844);
+     var Ub = Mb(41594),
+       tb = Mb(41611),
+       Cb = Mb(41618),
+       Eb = Mb(41506),
+       Fb = Mb(41548),
+       Bb = Mb(41527),
+       sb = Mb(41623),
+       mb = Mb(41590);
```

#### 87. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1551)

```diff
-     class gd extends Rd.b {
+     class zb extends pb.d {
```

#### 88. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1562)

```diff
-         return Wd.e.ShadersRepository
+         return eb.b.ShadersRepository
```

#### 89. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1565)

```diff
-         Wd.e.ShadersRepository = dd
+         eb.b.ShadersRepository = bb
```

#### 90. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1568)

```diff
-         return this.YH > 1 && !this.disableUniformBuffers
+         return this.HE > 1 && !this.disableUniformBuffers
```

#### 91. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1615)

```diff
-               (0, Fd.z)(this._gl)
+               (0, Hb.y)(this._gl)
```

#### 92. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1617)

```diff
-               dd.preventDefault(), this._contextWasLost = !0, (0, Fd.z)(this._gl), Kd.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               bb.preventDefault(), this._contextWasLost = !0, (0, Hb.y)(this._gl), gb.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 93. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.YH > 1 ? new td : new vd;
-         const Xd = `Babylon.js v${gd.Version}`;
-         Kd.c.Log(Xd + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Xd);
-         const hd = (0, Fd.A)(this._gl);
+         this._shaderProcessor = this.HE > 1 ? new Ob : new Lb;
+         const Vb = `Babylon.js v${zb.Version}`;
+         gb.b.Log(Vb + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Vb);
+         const lb = (0, Hb.C)(this._gl);
```

#### 94. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!Od, this._alphaState = new pd.d(this._caps.blendParametersPerTarget), Od && (this._gl.blendEquationSeparateIndexed = Od.blendEquationSeparateiOES.bind(Od), this._gl.blendEquationIndexed = Od.blendEquationiOES.bind(Od), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!wb, this._alphaState = new mb.b(this._caps.blendParametersPerTarget), wb && (this._gl.blendEquationSeparateIndexed = wb.blendEquationSeparateiOES.bind(wb), this._gl.blendEquationIndexed = wb.blendEquationiOES.bind(wb), this._gl. … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1861)

```diff
-             if (void 0 !== md && (0, Td.i)(md)) {
+             if (void 0 !== Mb && (0, sb.g)(Mb)) {
```

#### 96. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1863)

```diff
-               void 0 !== md && (0, Td.j)(md) ? (gd._TempClearColorUint32[0] = 255 * dd.r, gd._TempClearColorUint32[1] = 255 * dd.g, gd._TempClearColorUint32[2] = 255 * dd.b, gd._TempClearColorUint32[3] = 255 * dd.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, gd._TempClearColorUin … [truncated]
+               void 0 !== Mb && (0, sb.k)(Mb) ? (zb._TempClearColorUint32[0] = 255 * bb.r, zb._TempClearColorUint32[1] = 255 * bb.g, zb._TempClearColorUint32[2] = 255 * bb.b, zb._TempClearColorUint32[3] = 255 * bb.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, zb._TempClearColorUin … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1868)

```diff
-         md && (this.JFd ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Xd |= this._gl.DEPTH_BUFFER_BIT), Wd && (this._gl.clearStencil(Fd), Xd |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Xd)
+         Mb && (this.rHb ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Vb |= this._gl.DEPTH_BUFFER_BIT), eb && (this._gl.clearStencil(Hb), Vb |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Vb)
```

#### 98. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1871-L1872)

```diff
-         if ((0, Td.i)(md)) {
-           const md = (0, Td.j)(Wd),
+         if ((0, sb.g)(Mb)) {
+           const Mb = (0, sb.k)(eb),
```

#### 99. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1882)

```diff
-         super.bt(), this._badOS && this.flushFramebuffer()
+         super.tO(), this._badOS && this.flushFramebuffer()
```

#### 100. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = dd, this._integerMRTAttachmentsMask = !dd.isMulti && dd.texture && (0, Td.i)(dd.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(hd._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._integerMRTAttachmentsMask = !bb.isMulti && bb.texture && (0, sb.g)(bb.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(lb._frameb … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1900)

```diff
-           dd.is3D && (dd.texture.width === Qd.width && dd.texture.height === Qd.height && dd.texture.depth === Qd.depth || Kd.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           bb.is3D && (bb.texture.width === Ib.width && bb.texture.height === Ib.height && bb.texture.depth === Ib.depth || gb.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 102. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1964-L1965)

```diff
-         const Wd = new od.d(md);
-         return this.bindArrayBuffer(Wd), "number" !== typeof dd ? dd instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(dd), Od), Wd.Mt = 4 * dd.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, dd, Od), Wd.Mt = dd.byteLength) : (this._gl.bufferDa … [truncated]
+         const eb = new Ub.e(Mb);
+         return this.bindArrayBuffer(eb), "number" !== typeof bb ? bb instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(bb), wb), eb.qO = 4 * bb.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, wb), eb.qO = bb.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L1975)

```diff
-           Fd = new od.d(Wd);
+           Hb = new Ub.e(eb);
```

#### 104. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2162)

```diff
-         Od && Od.program && (Od.program.__SPECTOR_rebuildProgram = null, (0, bd.l)(Od), this._gl && (this._currentProgram === Od.program && this._setProgram(null), this._gl.deleteProgram(Od.program)))
+         wb && wb.program && (wb.program.__SPECTOR_rebuildProgram = null, (0, Bb.f)(wb), this._gl && (this._currentProgram === wb.program && this._setProgram(null), this._gl.deleteProgram(wb.program)))
```

#### 105. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2165)

```diff
-         return (0, yd.h)(dd, this.isNDCHalfZRange, this.JFd, this.useExactSrgbConversions)
+         return (0, Fb.j)(bb, this.isNDCHalfZRange, this.rHb, this.useExactSrgbConversions)
```

#### 106. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2170-L2171)

```diff
-         const Nd = "string" === typeof dd ? dd : dd.vertexToken || dd.vertexSource || dd.vertexElement || dd.vertex,
-           qd = "string" === typeof dd ? dd : dd.fragmentToken || dd.fragmentSource || dd.fragmentElement || dd.fragment,
+         const tb = "string" === typeof bb ? bb : bb.vertexToken || bb.vertexSource || bb.vertexElement || bb.vertex,
+           Cb = "string" === typeof bb ? bb : bb.fragmentToken || bb.fragmentSource || bb.fragmentElement || bb.fragment,
```

#### 107. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2181-L2182` → after: `L2181-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2181-L2182) · [Before (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2181-L2182)

```diff
-         this._gl && (0, Fd.A)(this._gl);
-         const pd = new Wd.e(dd, Od, yd ? this : md, Rd, this, Xd, Kd, hd, vd, Qd, Td, Od.shaderLanguage ?? td, Od.extraInitializationsAsync ?? od);
+         this._gl && (0, Hb.C)(this._gl);
+         const mb = new eb.b(bb, wb, Fb ? this : Mb, pb, this, Vb, gb, lb, Lb, Ib, sb, wb.shaderLanguage ?? Ob, wb.extraInitializationsAsync ?? Ub);
```

#### 108. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2190` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2190) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2190)

```diff
-         const Xd = (0, Fd.A)(this._gl);
+         const Vb = (0, Hb.C)(this._gl);
```

#### 109. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2195-L2196` → after: `L2195-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2195-L2196) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2195-L2196)

```diff
-         const Kd = (0, Fd.A)(this._gl);
-         return Kd._contextWasLost = this._contextWasLost, Kd.validateShaderPrograms = this.validateShaderPrograms, (0, Fd.w)(dd, Od, md, Wd, Rd || this._gl, Xd)
+         const gb = (0, Hb.C)(this._gl);
+         return gb._contextWasLost = this._contextWasLost, gb.validateShaderPrograms = this.validateShaderPrograms, (0, Hb.v)(bb, wb, Mb, eb, pb || this._gl, Vb)
```

#### 110. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2203)

```diff
-           (0, Fd.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, Hb.C)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 111. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2205)

```diff
-         const Od = (0, Fd.q)(this._gl, dd);
+         const wb = (0, Hb.p)(this._gl, bb);
```

#### 112. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2211)

```diff
-         return (0, Fd.j)(dd, this._gl, this.validateShaderPrograms)
+         return (0, Hb.f)(bb, this._gl, this.validateShaderPrograms)
```

#### 113. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2214-L2215)

```diff
-         const od = (0, Fd.A)(this._gl);
-         return od._contextWasLost = this._contextWasLost, od.validateShaderPrograms = this.validateShaderPrograms, od._createShaderProgramInjection = this._createShaderProgram.bind(this), od.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), od.createShader … [truncated]
+         const Ub = (0, Hb.C)(this._gl);
+         return Ub._contextWasLost = this._contextWasLost, Ub.validateShaderPrograms = this.validateShaderPrograms, Ub._createShaderProgramInjection = this._createShaderProgram.bind(this), Ub.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Ub.createShader … [truncated]
```

#### 114. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2219)

```diff
-         return (0, Fd.e)(dd, Od, md, Wd, Rd)
+         return (0, Hb.c)(bb, wb, Mb, eb, pb)
```

#### 115. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2222)

```diff
-         return !this._isDisposed && (0, Fd.l)(dd, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, Hb.h)(bb, this._gl, this.validateShaderPrograms)
```

#### 116. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2225)

```diff
-         (0, Fd.f)(dd, Od)
+         (0, Hb.e)(bb, wb)
```

#### 117. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2244)

```diff
-         (dd = null !== dd && (0, Xd.c)(dd) ? dd.effect : dd) && dd !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(dd), this._currentEffect = dd, dd.onBind && dd.onBind(dd), dd._onBindObservable && dd._onBindObservable.notifyObse … [truncated]
+         (bb = null !== bb && (0, Vb.d)(bb) ? bb.effect : bb) && bb !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(bb), this._currentEffect = bb, bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObse … [truncated]
```

#### 118. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2394)

```diff
-         return new qd.d(this._createTexture(), this._gl)
+         return new Cb.e(this._createTexture(), this._gl)
```

#### 119. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2407-L2408` → after: `L2407-L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2407-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2407-L2408) · [Before (L2407-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2407-L2408)

```diff
-         void 0 !== Od && "object" === typeof Od ? (md = !!Od.generateMipMaps, Rd = !!Od.createMipMaps, Xd = void 0 === Od.type ? 0 : Od.type, hd = void 0 === Od.samplingMode ? 3 : Od.samplingMode, vd = void 0 === Od.format ? 5 : Od.format, Qd = void 0 !== Od.useSRGBBuffer && Od.u … [truncated]
-         const yd = (0, Td.g)(vd),
+         void 0 !== wb && "object" === typeof wb ? (Mb = !!wb.generateMipMaps, pb = !!wb.createMipMaps, Vb = void 0 === wb.type ? 0 : wb.type, lb = void 0 === wb.samplingMode ? 3 : wb.samplingMode, Lb = void 0 === wb.format ? 5 : wb.format, Ib = void 0 !== wb.useSRGBBuffer && wb.u … [truncated]
+         const Fb = (0, sb.e)(Lb),
```

#### 120. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2411)

```diff
-           Yd = new Hd.c(this, Fd),
+           hb = new Eb.e(this, Hb),
```

#### 121. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2427)

```diff
-         if (pd.texParameteri(xd, pd.TEXTURE_MAG_FILTER, Ud.mag), pd.texParameteri(xd, pd.TEXTURE_MIN_FILTER, Ud.min), pd.texParameteri(xd, pd.TEXTURE_WRAP_S, pd.CLAMP_TO_EDGE), pd.texParameteri(xd, pd.TEXTURE_WRAP_T, pd.CLAMP_TO_EDGE), yd && this.YH > 1 && (0 === Nd ? (pd.texPara … [truncated]
+         if (mb.texParameteri(rb, mb.TEXTURE_MAG_FILTER, Kb.mag), mb.texParameteri(rb, mb.TEXTURE_MIN_FILTER, Kb.min), mb.texParameteri(rb, mb.TEXTURE_WRAP_S, mb.CLAMP_TO_EDGE), mb.texParameteri(rb, mb.TEXTURE_WRAP_T, mb.CLAMP_TO_EDGE), Fb && this.HE > 1 && (0 === tb ? (mb.texPara … [truncated]
```

#### 122. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2429` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2429) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2429)

```diff
-           if (dd = (0, Td.g)(Yd.format) ? this._setupFramebufferDepthAttachments((0, Td.d)(Yd.format), 19 !== Yd.format, Yd.width, Yd.height, td, Yd.format, !0) : this._createRenderBuffer(Yd.width, Yd.height, td, -1, this._getRGBABufferInternalSizedFormat(Yd.type, Yd.format, Yd._ … [truncated]
+           if (bb = (0, sb.e)(hb.format) ? this._setupFramebufferDepthAttachments((0, sb.d)(hb.format), 19 !== hb.format, hb.width, hb.height, Ob, hb.format, !0) : this._createRenderBuffer(hb.width, hb.height, Ob, -1, this._getRGBABufferInternalSizedFormat(hb.type, hb.format, hb._ … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2437)

```diff
-         return dd && this._caps.supportSRGBBuffers && (this.YH > 1 || Od)
+         return bb && this._caps.supportSRGBBuffers && (this.HE > 1 || wb)
```

#### 124. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2464)

```diff
-             const dd = new Hd.c(this, 2);
+             const bb = new Eb.e(this, 2);
```

#### 125. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2474)

```diff
-         return 1 === this.YH ? (md = this._getInternalFormat(dd, Od), Wd = md) : (md = this._getInternalFormat(dd, !1), Wd = this._getRGBABufferInternalSizedFormat(0, dd, Od)), {
+         return 1 === this.HE ? (Mb = this._getInternalFormat(bb, wb), eb = Mb) : (Mb = this._getInternalFormat(bb, !1), eb = this._getRGBABufferInternalSizedFormat(0, bb, wb)), {
```

#### 126. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2623-L2624)

```diff
-           td = Math.min(Qd, this.needPOTTextures ? (0, Nd.f)(Wd.width, Qd) : Wd.width),
-           od = Math.min(Qd, this.needPOTTextures ? (0, Nd.f)(Wd.height, Qd) : Wd.height),
+           Ob = Math.min(Ib, this.needPOTTextures ? (0, tb.e)(eb.width, Ib) : eb.width),
+           Ub = Math.min(Ib, this.needPOTTextures ? (0, tb.e)(eb.height, Ib) : eb.height),
```

#### 127. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2634)

```diff
-         return this.YH > 1 ? 15 === dd ? Fd = Wd.DEPTH_COMPONENT16 : 16 === dd ? Fd = Wd.DEPTH_COMPONENT24 : 17 === dd || 13 === dd ? Fd = md ? Wd.DEPTH24_STENCIL8 : Wd.DEPTH_COMPONENT24 : 14 === dd ? Fd = Wd.DEPTH_COMPONENT32F : 18 === dd && (Fd = md ? Wd.DEPTH32F_STENCIL8 : Wd. … [truncated]
+         return this.HE > 1 ? 15 === bb ? Hb = eb.DEPTH_COMPONENT16 : 16 === bb ? Hb = eb.DEPTH_COMPONENT24 : 17 === bb || 13 === bb ? Hb = Mb ? eb.DEPTH24_STENCIL8 : eb.DEPTH_COMPONENT24 : 14 === bb ? Hb = eb.DEPTH_COMPONENT32F : 18 === bb && (Hb = Mb ? eb.DEPTH32F_STENCIL8 : eb. … [truncated]
```

#### 128. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2668)

```diff
-         this._currentProgram !== dd && ((0, Fd.p)(dd, this._gl), this._currentProgram = dd)
+         this._currentProgram !== bb && ((0, Hb.m)(bb, this._gl), this._currentProgram = bb)
```

#### 129. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2690)

```diff
-           if (this._activateCurrentTexture(), Od && Od.isMultiview) throw Kd.c.Error(["_bindTextureDirectly called with a multiview texture!", dd, Od]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), wb && wb.isMultiview) throw gb.b.Error(["_bindTextureDirectly called with a multiview texture!", bb, wb]), "_bindTextureDirectly called with a multiview texture!";
```

#### 130. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2702)

```diff
-         for (let dd = 0; dd < this._maxSimultaneousTextures; dd++) this._activeChannel = dd, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.YH > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let bb = 0; bb < this._maxSimultaneousTextures; bb++) this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.HE > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2725)

```diff
-         if (!Od) return null != this._boundTexturesCache[dd] && (this._activeChannel = dd, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.YH > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!wb) return null != this._boundTexturesCache[bb] && (this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.HE > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L2777)

```diff
-         (0, hd.h)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, lb.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3088)

```diff
-           if (Xd.length < Qd) return Kd.c.Error(`Data buffer is too small to store the read pixels (${Xd.length} should be more than ${Qd})`), Promise.resolve(Xd)
+           if (Vb.length < Ib) return gb.b.Error(`Data buffer is too small to store the read pixels (${Vb.length} should be more than ${Ib})`), Promise.resolve(Vb)
```

#### 134. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3101)

```diff
-           const dd = Rd.b._CreateCanvas(1, 1),
+           const bb = pb.d._CreateCanvas(1, 1),
```

#### 135. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3111)

```diff
-           const dd = Rd.b._CreateCanvas(1, 1),
+           const bb = pb.d._CreateCanvas(1, 1),
```

#### 136. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3184)

```diff
-     }], gd._ConcatenateShader = yd.e, gd._IsSupported = null, gd._HasMajorPerformanceCaveat = null
+     }], zb._ConcatenateShader = Fb.h, zb._IsSupported = null, zb._HasMajorPerformanceCaveat = null
```

#### 137. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3186)

```diff
-   42111: (dd, Od, md) => {
+   41852: (bb, wb, Mb) => {
```

#### 138. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3197)

```diff
-   42105: (dd, Od, md) => {
+   41845: (bb, wb, Mb) => {
```

#### 139. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3200-L3201` → after: `L3200-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3200-L3201) · [Before (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3200-L3201)

```diff
-       f: () => Rd,
-       h: () => Fd
+       h: () => pb,
+       j: () => Hb
```

#### 140. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3222)

```diff
-   42099: (dd, Od, md) => {
+   41843: (bb, wb, Mb) => {
```

#### 141. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3225-L3226` → after: `L3225-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3225-L3226) · [Before (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3225-L3226)

```diff
-       f: () => Xd,
-       i: () => Kd
+       c: () => Vb,
+       f: () => gb
```

#### 142. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3228)

```diff
-     var Wd = md(38636);
+     var eb = Mb(38285);
```

#### 143. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3238)

```diff
-         super(dd, Od), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Wd.i(md, Fd)
+         super(bb, wb), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new eb.m(Mb, Hb)
```

#### 144. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3254)

```diff
-   42118: (dd, Od, md) => {
+   41858: (bb, wb, Mb) => {
```

#### 145. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3265)

```diff
-   41763: (dd, Od, md) => {
+   41506: (bb, wb, Mb) => {
```

#### 146. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3267` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3267) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3267)

```diff
-       c: () => Xd
+       e: () => Vb
```

#### 147. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3269-L3270)

```diff
-     var Wd, Fd = md(38660),
-       Rd = md(41772);
+     var eb, Hb = Mb(38318),
+       pb = Mb(41509);
```

#### 148. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3295)

```diff
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
```

#### 149. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3372)

```diff
-   41869: (dd, Od, md) => {
+   41623: (bb, wb, Mb) => {
```

#### 150. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3391-L3392` → after: `L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3392) · [Before (L3391-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3391-L3392)

```diff
-       i: () => Fd,
-       j: () => Rd
+       k: () => pb
```

#### 151. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3395)

```diff
-   41772: (dd, Od, md) => {
+   41509: (bb, wb, Mb) => {
```

#### 152. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3453)

```diff
-   42052: (dd, Od, md) => {
+   41788: (bb, wb, Mb) => {
```

#### 153. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3458` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3458) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3458)

```diff
-       e: () => Wd
+       b: () => eb
```

#### 154. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3461)

```diff
-   41852: (dd, Od, md) => {
+   41592: (bb, wb, Mb) => {
```

#### 155. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3466)

```diff
-       c: () => Wd
+       d: () => eb
```

#### 156. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3469)

```diff
-   42240: (dd, Od, md) => {
+   41997: (bb, wb, Mb) => {
```

#### 157. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3471` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3471) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3471)

```diff
-       b: () => Fd
+       c: () => Hb
```

#### 158. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3473)

```diff
-     var Wd = md(41831);
+     var eb = Mb(41565);
```

#### 159. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3490-L3491` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3490-L3491) · [Before (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3490-L3491)

```diff
-           dd ? Od.dispose() : Wd.c.SetImmediate((() => {
-             Od.Iq().onEndFrameObservable.addOnce((() => {
+           bb ? wb.dispose() : eb.d.SetImmediate((() => {
+             wb.DC().onEndFrameObservable.addOnce((() => {
```

#### 160. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3500)

```diff
-   41791: (dd, Od, md) => {
+   41527: (bb, wb, Mb) => {
```

#### 161. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3503-L3505` → after: `L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3505) · [Before (L3503-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3503-L3505)

```diff
-       h: () => Nd,
-       k: () => vd,
-       l: () => Qd
+       f: () => Ib
```

#### 162. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3507-L3512)

```diff
-     var Wd = md(41799),
-       Fd = md(41802),
-       Rd = md(41785),
-       Xd = md(40262),
-       Kd = md(41822),
-       hd = md(41810);
+     var eb = Mb(41535),
+       Hb = Mb(41539),
+       pb = Mb(41518),
+       Vb = Mb(39971),
+       gb = Mb(41562),
+       lb = Mb(41548);
```

#### 163. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3515)

```diff
-       return (0, Fd.A)(Od).cachedPipelines[dd]
+       return (0, Hb.C)(wb).cachedPipelines[bb]
```

#### 164. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3522)

```diff
-         const dd = (0, Fd.A)(md),
+         const bb = (0, Hb.C)(Mb),
```

#### 165. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3530-L3531` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3530-L3531) · [Before (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3530-L3531)

```diff
-       const td = (0, Wd.h)() ? Xd?.getHostDocument() : null;
-       vd = "string" === typeof Od ? Od : "string" === typeof Od.vertexSource ? "source:" + Od.vertexSource : "string" === typeof Od.vertexElement ? td?.getElementById(Od.vertexElement) || Od.vertexElement : Od.vertex || Od, Qd = "string" === typeof Od ? Od : "string" === typeof O … [truncated]
+       const Ob = (0, eb.j)() ? Vb?.getHostDocument() : null;
+       Lb = "string" === typeof wb ? wb : "string" === typeof wb.vertexSource ? "source:" + wb.vertexSource : "string" === typeof wb.vertexElement ? Ob?.getElementById(wb.vertexElement) || wb.vertexElement : wb.vertex || wb, Ib = "string" === typeof wb ? wb : "string" === typeof w … [truncated]
```

#### 166. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3536-L3537` → after: `L3536-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3536-L3537) · [Before (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3536-L3537)

```diff
-             (0, Kd.h)(dd), (0, Kd.n)(Wd, dd, ((Wd, Qd) => {
-               hd && (hd._vertexSourceCodeBeforeMigration = Qd), md && (Wd = md("vertex", Wd)), dd.isFragment = !0, (0, Kd.n)(vd, dd, ((Xd, vd) => {
+             (0, gb.g)(bb), (0, gb.l)(eb, bb, ((eb, Ib) => {
+               lb && (lb._vertexSourceCodeBeforeMigration = Ib), Mb && (eb = Mb("vertex", eb)), bb.isFragment = !0, (0, gb.l)(Lb, bb, ((Vb, Lb) => {
```

#### 167. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3539)

```diff
-                 const Qd = (0, Kd.d)(Wd, Xd, dd);
+                 const Ib = (0, gb.c)(eb, Vb, bb);
```

#### 168. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3567)

```diff
-         return void Fd((0, Wd.b)(dd))
+         return void Hb((0, eb.e)(bb))
```

#### 169. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3577)

```diff
-       if (Qd = "." === dd[0] || "/" === dd[0] || dd.indexOf("http") > -1 ? dd : Rd.e.GetShadersRepository(Xd) + dd, !(Kd = Kd || hd.i)) throw new Error("loadFileInjection is not defined");
+       if (Ib = "." === bb[0] || "/" === bb[0] || bb.indexOf("http") > -1 ? bb : pb.e.GetShadersRepository(Vb) + bb, !(gb = gb || lb.l)) throw new Error("loadFileInjection is not defined");
```

#### 170. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3582)

```diff
-         const Rd = dd.context ? (0, Fd.A)(dd.context) : null;
+         const pb = bb.context ? (0, Hb.C)(bb.context) : null;
```

#### 171. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3591)

```diff
-         throw Xd.c.Error("Error compiling effect"), Rd
+         throw Vb.b.Error("Error compiling effect"), pb
```

#### 172. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3595)

```diff
-   41782: (dd, Od, md) => {
+   41514: (bb, wb, Mb) => {
```

#### 173. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3597)

```diff
-       e: () => hd
+       b: () => lb
```

#### 174. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3599-L3603)

```diff
-     var Wd = md(38660),
-       Fd = md(40262),
-       Rd = md(41785),
-       Xd = md(41791),
-       Kd = md(41831);
+     var eb = Mb(38318),
+       Hb = Mb(39971),
+       pb = Mb(41518),
+       Vb = Mb(41527),
+       gb = Mb(41565);
```

#### 175. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3615` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3615) · [Before (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3615)

```diff
-         return this._onBindObservable || (this._onBindObservable = new Wd.c), this._onBindObservable
+         return this._onBindObservable || (this._onBindObservable = new eb.b), this._onBindObservable
```

#### 176. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3631` → after: `L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3631) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3631)

```diff
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Wd.c, this.onErrorObservable = new Wd.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
+         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new eb.b, this.onErrorObservable = new eb.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
```

#### 177. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3642)

```diff
-         "WEBGL2" === this._engine.shaderPlatformName && (bd = (0, Xd.k)(yd, this._engine._gl) ?? bd), this._attributeLocationByName = {}, this.uniqueId = hd._UniqueIdSeed++, bd ? (this._pipelineContext = bd, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
+         "WEBGL2" === this._engine.shaderPlatformName && (Bb = (0, Vb.e)(Fb, this._engine._gl) ?? Bb), this._attributeLocationByName = {}, this.uniqueId = lb._UniqueIdSeed++, Bb ? (this._pipelineContext = Bb, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
```

#### 178. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3644-L3645)

```diff
-             md = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Od}`);
-           dd && "string" === typeof dd.stack && (md.stack = `${md.message}\nCaused by: ${dd.stack}`), this._processCompilationErrors(md)
+             Mb = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${wb}`);
+           bb && "string" === typeof bb.stack && (Mb.stack = `${Mb.message}\nCaused by: ${bb.stack}`), this._processCompilationErrors(Mb)
```

#### 179. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.yJ || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.RD || this.dispose(!0)
```

#### 180. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/288.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/288.js#L3669)

```diff
-           JFd: this._engine.JFd,
+           rHb: this._engine.rHb,
```
