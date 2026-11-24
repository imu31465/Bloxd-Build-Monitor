# Changed — Bundle Modifications Report (Part 051 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `51 / 140` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (881 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 586. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5580-L5581` → after: `L5580-L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5580-L5581) · [Before (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5580-L5581)

```diff
-         let fm = this.getVerticesData(km.m.PositionKind);
-         const hm = cm.p.Zero();
+         let wD = this.getVerticesData(CD.k.PositionKind);
+         const pD = XD.s.Zero();
```

#### 587. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5583-L5586` → after: `L5583-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5583-L5586) · [Before (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5583-L5586)

```diff
-         for (Am = 0; Am < fm.length; Am += 3) cm.p.TransformCoordinatesFromFloatsToRef(fm[Am], fm[Am + 1], fm[Am + 2], mm, hm).toArray(fm, Am);
-         if (this.setVerticesData(km.m.PositionKind, fm, this.getVertexBuffer(km.m.PositionKind).isUpdatable()), this.isVerticesDataPresent(km.m.NormalKind)) {
-           for (fm = this.getVerticesData(km.m.NormalKind), Am = 0; Am < fm.length; Am += 3) cm.p.TransformNormalFromFloatsToRef(fm[Am], fm[Am + 1], fm[Am + 2], mm, hm).normalize().toArray(fm, Am);
-           this.setVerticesData(km.m.NormalKind, fm, this.getVertexBuffer(km.m.NormalKind).isUpdatable())
+         for (sD = 0; sD < wD.length; sD += 3) XD.s.TransformCoordinatesFromFloatsToRef(wD[sD], wD[sD + 1], wD[sD + 2], DD, pD).toArray(wD, sD);
+         if (this.setVerticesData(CD.k.PositionKind, wD, this.getVertexBuffer(CD.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(CD.k.NormalKind)) {
+           for (wD = this.getVerticesData(CD.k.NormalKind), sD = 0; sD < wD.length; sD += 3) XD.s.TransformNormalFromFloatsToRef(wD[sD], wD[sD + 1], wD[sD + 2], DD, pD).normalize().toArray(wD, sD);
+           this.setVerticesData(CD.k.NormalKind, wD, this.getVertexBuffer(CD.k.NormalKind).isUpdatable())
```

#### 588. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5588-L5590` → after: `L5588-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5588-L5590) · [Before (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5588-L5590)

```diff
-         if (this.isVerticesDataPresent(km.m.TangentKind)) {
-           for (fm = this.getVerticesData(km.m.TangentKind), Am = 0; Am < fm.length; Am += 4) cm.p.TransformNormalFromFloatsToRef(fm[Am], fm[Am + 1], fm[Am + 2], mm, hm).normalize().toArray(fm, Am);
-           this.setVerticesData(km.m.TangentKind, fm, this.getVertexBuffer(km.m.TangentKind).isUpdatable())
+         if (this.isVerticesDataPresent(CD.k.TangentKind)) {
+           for (wD = this.getVerticesData(CD.k.TangentKind), sD = 0; sD < wD.length; sD += 4) XD.s.TransformNormalFromFloatsToRef(wD[sD], wD[sD + 1], wD[sD + 2], DD, pD).normalize().toArray(wD, sD);
+           this.setVerticesData(CD.k.TangentKind, wD, this.getVertexBuffer(CD.k.TangentKind).isUpdatable())
```

#### 589. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5592` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5592) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5592)

```diff
-         return mm.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.jK = Tm, this
+         return DD.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.QE = zD, this
```

#### 590. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5614` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5614) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5614)

```diff
-           return gm.source = this, gm.doNotCloneChildren = fm.doNotCloneChildren, gm.clonePhysicsImpostor = fm.clonePhysicsImpostor, gm.cloneThinInstances = fm.cloneThinInstances, new Wm(mm, this.wG(), gm)
+           return FD.source = this, FD.doNotCloneChildren = wD.doNotCloneChildren, FD.clonePhysicsImpostor = wD.clonePhysicsImpostor, FD.cloneThinInstances = wD.cloneThinInstances, new YD(DD, this.Ul(), FD)
```

#### 591. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5616` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5616) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5616)

```diff
-         return new Wm(mm, this.wG(), Tm, this, fm, hm)
+         return new YD(DD, this.Ul(), zD, this, wD, pD)
```

#### 592. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5630` → after: `L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5630) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5630)

```diff
-           const mm = this.wG().meshes;
+           const DD = this.Ul().meshes;
```

#### 593. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5644-L5645` → after: `L5644-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5644-L5645) · [Before (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5644-L5645)

```diff
-         const Dm = this.wG();
-         return (0, Im.u)(mm, (mm => {
+         const cD = this.Ul();
+         return (0, MD.r)(DD, (DD => {
```

#### 594. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5648` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5648) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5648)

```diff
-             im = this.dO().createCanvas(wm, Dm).getContext("2d");
+             gD = this.iI().createCanvas(LD, cD).getContext("2d");
```

#### 595. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5656-L5663` → after: `L5656-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5656-L5663) · [Before (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5656-L5663)

```diff
-         if (!this.isVerticesDataPresent(km.m.PositionKind) || !this.isVerticesDataPresent(km.m.NormalKind) || !this.isVerticesDataPresent(km.m.UVKind)) return Cm.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
-         const Dm = this.getVerticesData(km.m.PositionKind, !0, !0),
-           im = this.getVerticesData(km.m.NormalKind),
-           Rm = this.getVerticesData(km.m.UVKind);
-         let pm = cm.p.Zero();
-         const Em = cm.p.Zero(),
-           om = cm.l.Zero();
-         am = am || cm.l.Zero(), xm = xm || new cm.l(1, 1);
+         if (!this.isVerticesDataPresent(CD.k.PositionKind) || !this.isVerticesDataPresent(CD.k.NormalKind) || !this.isVerticesDataPresent(CD.k.UVKind)) return ND.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const cD = this.getVerticesData(CD.k.PositionKind, !0, !0),
+           gD = this.getVerticesData(CD.k.NormalKind),
+           RD = this.getVerticesData(CD.k.UVKind);
+         let AD = XD.s.Zero();
+         const UD = XD.s.Zero(),
+           fD = XD.r.Zero();
+         KD = KD || XD.r.Zero(), rD = rD || new XD.r(1, 1);
```

#### 596. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5665)

```diff
-           cm.p.FromArrayToRef(Dm, Om, pm), cm.p.FromArrayToRef(im, Om, Em), cm.l.FromArrayToRef(Rm, Om / 3 * 2, om);
+           XD.s.FromArrayToRef(cD, ID, AD), XD.s.FromArrayToRef(gD, ID, UD), XD.r.FromArrayToRef(RD, ID / 3 * 2, fD);
```

#### 597. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5670` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5670) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5670)

```diff
-         return bm.c.ComputeNormals(Dm, this.xhm(), im), wm ? (this.setVerticesData(km.m.PositionKind, Dm), this.setVerticesData(km.m.NormalKind, im), this.setVerticesData(km.m.UVKind, Rm)) : (this.updateVerticesData(km.m.PositionKind, Dm), this.updateVerticesData(km.m.NormalKind, … [truncated]
+         return xD.b.ComputeNormals(cD, this.XpD(), gD), LD ? (this.setVerticesData(CD.k.PositionKind, cD), this.setVerticesData(CD.k.NormalKind, gD), this.setVerticesData(CD.k.UVKind, RD)) : (this.updateVerticesData(CD.k.PositionKind, cD), this.updateVerticesData(CD.k.NormalKind, … [truncated]
```

#### 598. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5677-L5679` → after: `L5677-L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5677-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5677-L5679) · [Before (L5677-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5677-L5679)

```diff
-           const xm = cm.p.FromArray(Tm, 3 * mm[am]),
-             wm = cm.p.FromArray(Tm, 3 * mm[am + 1]),
-             Dm = cm.p.FromArray(Tm, 3 * mm[am + 2]),
+           const rD = XD.s.FromArray(zD, 3 * DD[KD]),
+             LD = XD.s.FromArray(zD, 3 * DD[KD + 1]),
+             cD = XD.s.FromArray(zD, 3 * DD[KD + 2]),
```

#### 599. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5682` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5682) · [Before (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5682)

```diff
-             pm = cm.p.Normalize(cm.p.Cross(im, Rm));
+             AD = XD.s.Normalize(XD.s.Cross(gD, RD));
```

#### 600. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5691` → after: `L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5691) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5691)

```diff
-           fm = this.xhm(!1, !0),
+           wD = this.XpD(!1, !0),
```

#### 601. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5700-L5701` → after: `L5700-L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5700-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5700-L5701) · [Before (L5700-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5700-L5701)

```diff
-           am = this.DH(),
-           xm = this.geometry ? this.jK.slice(0) : [];
+           KD = this.FW(),
+           rD = this.geometry ? this.QE.slice(0) : [];
```

#### 602. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5706-L5708` → after: `L5706-L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5706-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5706-L5708) · [Before (L5706-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5706-L5708)

```diff
-           if (mm && wm === km.m.NormalKind) {
-             const mm = this._getFlattenedNormals(fm, hm[km.m.PositionKind]);
-             this.setVerticesData(km.m.NormalKind, mm, Tm.isUpdatable(), am)
+           if (DD && LD === CD.k.NormalKind) {
+             const DD = this._getFlattenedNormals(wD, pD[CD.k.PositionKind]);
+             this.setVerticesData(CD.k.NormalKind, DD, zD.isUpdatable(), KD)
```

#### 603. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5715` → after: `L5715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5715) · [Before (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5715)

```diff
-             hm.lxm(Am(am, 3));
+             pD.pLD(sD(KD, 3));
```

#### 604. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5730-L5731` → after: `L5730-L5731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5730-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5730-L5731) · [Before (L5730-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5730-L5731)

```diff
-           const mm = wm.DH();
-           Nm.e.AddToMesh(wm.materialIndex, wm.indexStart, wm.indexCount, wm.indexStart, wm.indexCount, this).setBoundingInfo(mm)
+           const DD = LD.FW();
+           jD.b.AddToMesh(LD.materialIndex, LD.indexStart, LD.indexCount, LD.indexStart, LD.indexCount, this).setBoundingInfo(DD)
```

#### 605. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5743` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5743) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5743)

```diff
-         const Tm = bm.c.ExtractFromMesh(this);
+         const zD = xD.b.ExtractFromMesh(this);
```

#### 606. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5745` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5745) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5745)

```diff
-         if (mm && this.isVerticesDataPresent(km.m.NormalKind) && Tm.normals) {
+         if (DD && this.isVerticesDataPresent(CD.k.NormalKind) && zD.normals) {
```

#### 607. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5747` → after: `L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5747) · [Before (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5747)

```diff
-           this.setVerticesData(km.m.NormalKind, Tm.normals, this.isVertexBufferUpdatable(km.m.NormalKind))
+           this.setVerticesData(CD.k.NormalKind, zD.normals, this.isVertexBufferUpdatable(CD.k.NormalKind))
```

#### 608. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5752)

```diff
-           this.setIndices(Tm.indices, null, this.isVertexBufferUpdatable(km.m.PositionKind), !0)
+           this.setIndices(zD.indices, null, this.isVertexBufferUpdatable(CD.k.PositionKind), !0)
```

#### 609. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5758` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5758) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5758)

```diff
-         const Tm = bm.c.ExtractFromMesh(this),
+         const zD = xD.b.ExtractFromMesh(this),
```

#### 610. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5769-L5771` → after: `L5769-L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5769-L5771) · [Before (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5769-L5771)

```diff
-           const Rm = new cm.p(0, 0, 0),
-             pm = new cm.p(0, 0, 0),
-             Em = new cm.l(0, 0),
+           const RD = new XD.s(0, 0, 0),
+             AD = new XD.s(0, 0, 0),
+             UD = new XD.r(0, 0),
```

#### 611. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5797-L5798` → after: `L5797-L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5797-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5797-L5798) · [Before (L5797-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5797-L5798)

```diff
-           Tm.indices = om, Tm.applyToMesh(this, this.isVertexBufferUpdatable(km.m.PositionKind))
-         } else Cm.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
+           zD.indices = fD, zD.applyToMesh(this, this.isVertexBufferUpdatable(CD.k.PositionKind))
+         } else ND.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
```

#### 612. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5801` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5801) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5801)

```diff
-         const mm = bm.c.ExtractFromMesh(this),
+         const DD = xD.b.ExtractFromMesh(this),
```

#### 613. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5810` → after: `L5810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5810) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5810)

```diff
-         if (void 0 === fm || void 0 === hm || null === fm || null === hm) Cm.b.Warn("VertexData contains empty entries");
+         if (void 0 === wD || void 0 === pD || null === wD || null === pD) ND.d.Warn("VertexData contains empty entries");
```

#### 614. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5851)

```diff
-           bm.c.ComputeNormals(im, Rm, nm), mm.positions = im, mm.indices = Rm, mm.normals = nm, null !== Tm && void 0 !== Tm && (mm.uvs = pm), null !== Am && void 0 !== Am && (mm.colors = Em), null !== am && void 0 !== am && (mm.matricesIndices = om), null !== xm && void 0 !== xm … [truncated]
+           xD.b.ComputeNormals(gD, RD, ED), DD.positions = gD, DD.indices = RD, DD.normals = ED, null !== zD && void 0 !== zD && (DD.uvs = AD), null !== sD && void 0 !== sD && (DD.colors = UD), null !== KD && void 0 !== KD && (DD.matricesIndices = fD), null !== rD && void 0 !== rD … [truncated]
```

#### 615. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5855` → after: `L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5855) · [Before (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5855)

```diff
-         throw (0, sm.i)("InstancedMesh")
+         throw (0, yD.j)("InstancedMesh")
```

#### 616. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5858` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5858) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5858)

```diff
-         throw (0, sm.i)("PhysicsImpostor")
+         throw (0, yD.j)("PhysicsImpostor")
```

#### 617. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5871-L5872` → after: `L5871-L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5871-L5872) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5871-L5872)

```diff
-         const Tm = this.xhm(),
-           fm = this.getVerticesData(km.m.PositionKind);
+         const zD = this.XpD(),
+           wD = this.getVerticesData(CD.k.PositionKind);
```

#### 618. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5875` → after: `L5875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5875) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5875)

```diff
-         for (let am = 0; am < fm.length; am += 3) hm.push(cm.p.FromArray(fm, am));
+         for (let KD = 0; KD < wD.length; KD += 3) pD.push(XD.s.FromArray(wD, KD));
```

#### 619. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5877` → after: `L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5877) · [Before (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5877)

```diff
-         return Vm.d.SyncAsyncForLoop(hm.length, 40, (mm => {
+         return nD.c.SyncAsyncForLoop(pD.length, 40, (DD => {
```

#### 620. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5889-L5890` → after: `L5889-L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5889-L5890) · [Before (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5889-L5890)

```diff
-           const fm = this.jK.slice(0);
-           this.setIndices(Tm), this.jK = fm, mm && mm(this)
+           const wD = this.QE.slice(0);
+           this.setIndices(zD), this.QE = wD, DD && DD(this)
```

#### 621. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5895` → after: `L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5895) · [Before (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5895)

```diff
-         mm.name = this.name, mm.id = this.id, mm.uniqueId = this.uniqueId, mm.type = this.getClassName(), Qm.e && Qm.e.HasTags(this) && (mm.tags = Qm.e.GetTags(this)), mm.position = this.position.ahm(), this.rotationQuaternion ? mm.rotationQuaternion = this.rotationQuaternion.ahm … [truncated]
+         DD.name = this.name, DD.id = this.id, DD.uniqueId = this.uniqueId, DD.type = this.getClassName(), JD.c && JD.c.HasTags(this) && (DD.tags = JD.c.GetTags(this)), DD.position = this.position.QpD(), this.rotationQuaternion ? DD.rotationQuaternion = this.rotationQuaternion.QpD … [truncated]
```

#### 622. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5897-L5901` → after: `L5897-L5901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5897-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5897-L5901) · [Before (L5897-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5897-L5901)

```diff
-         if (Tm && this.jK) {
-           mm.geometryUniqueId = Tm.uniqueId, mm.geometryId = Tm.id, mm.jK = [];
-           for (let Tm = 0; Tm < this.jK.length; Tm++) {
-             const fm = this.jK[Tm];
-             mm.jK.push({
+         if (zD && this.QE) {
+           DD.geometryUniqueId = zD.uniqueId, DD.geometryId = zD.id, DD.QE = [];
+           for (let zD = 0; zD < this.QE.length; zD++) {
+             const wD = this.QE[zD];
+             DD.QE.push({
```

#### 623. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5910)

```diff
-         if (this.material ? this.material.doNotSerialize || (mm.materialUniqueId = this.material.uniqueId, mm.materialId = this.material.id) : (this.material = null, mm.materialUniqueId = this._scene.defaultMaterial.uniqueId, mm.materialId = this._scene.defaultMaterial.id), this. … [truncated]
+         if (this.material ? this.material.doNotSerialize || (DD.materialUniqueId = this.material.uniqueId, DD.materialId = this.material.id) : (this.material = null, DD.materialUniqueId = this._scene.defaultMaterial.uniqueId, DD.materialId = this._scene.defaultMaterial.id), this. … [truncated]
```

#### 624. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5912` → after: `L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5912) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5912)

```diff
-           Tm && (mm.physicsMass = Tm.getParam("Ri"), mm.physicsFriction = Tm.getParam("friction"), mm.physicsRestitution = Tm.getParam("Ri"), mm.physicsImpostor = Tm.type)
+           zD && (DD.physicsMass = zD.getParam("Ug"), DD.physicsFriction = zD.getParam("friction"), DD.physicsRestitution = zD.getParam("Ug"), DD.physicsImpostor = zD.type)
```

#### 625. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5923` → after: `L5923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5923) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5923)

```diff
-             xq: Tm.xq,
+             uB: zD.uB,
```

#### 626. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5925-L5926` → after: `L5925-L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5925-L5926) · [Before (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5925-L5926)

```diff
-             position: Tm.position.ahm(),
-             fi: Tm.fi.ahm()
+             position: zD.position.QpD(),
+             rc: zD.rc.QpD()
```

#### 627. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5928` → after: `L5928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5928) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5928)

```diff
-           if (Tm.parent && Tm.parent._serializeAsParent(hm), Tm.rotationQuaternion ? hm.rotationQuaternion = Tm.rotationQuaternion.ahm() : Tm.rotation && (hm.rotation = Tm.rotation.ahm()), this.wG()._getComponent(lm.c.NAME_PHYSICSENGINE)) {
+           if (zD.parent && zD.parent._serializeAsParent(pD), zD.rotationQuaternion ? pD.rotationQuaternion = zD.rotationQuaternion.QpD() : zD.rotation && (pD.rotation = zD.rotation.QpD()), this.Ul()._getComponent(kD.d.NAME_PHYSICSENGINE)) {
```

#### 628. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5930` → after: `L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5930) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5930)

```diff
-             mm && (hm.physicsMass = mm.getParam("Ri"), hm.physicsFriction = mm.getParam("friction"), hm.physicsRestitution = mm.getParam("Ri"), hm.physicsImpostor = mm.type)
+             DD && (pD.physicsMass = DD.getParam("Ug"), pD.physicsFriction = DD.getParam("friction"), pD.physicsRestitution = DD.getParam("Ug"), pD.physicsImpostor = DD.type)
```

#### 629. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5932` → after: `L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5932) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5932)

```diff
-           Tm.metadata && (hm.metadata = Tm.metadata), Tm.actionManager && (hm.actions = Tm.actionManager.serialize(Tm.name)), mm.instances.push(hm), ym.d.AppendSerializedAnimations(Tm, hm), hm.mo = Tm.serializeAnimationRanges()
+           zD.metadata && (pD.metadata = zD.metadata), zD.actionManager && (pD.actions = zD.actionManager.serialize(zD.name)), DD.instances.push(pD), WD.d.AppendSerializedAnimations(zD, pD), pD.rG = zD.serializeAnimationRanges()
```

#### 630. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5938)

```diff
-             enablePicking: this.ZTm
+             enablePicking: this.WzD
```

#### 631. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5948` → after: `L5948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5948) · [Before (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5948)

```diff
-         return ym.d.AppendSerializedAnimations(this, mm), mm.mo = this.serializeAnimationRanges(), mm.layerMask = this.layerMask, mm.alphaIndex = this.alphaIndex, mm.hasVertexAlpha = this.hasVertexAlpha, mm.overlayAlpha = this.overlayAlpha, mm.overlayColor = this.overlayColor.ahm … [truncated]
+         return WD.d.AppendSerializedAnimations(this, DD), DD.rG = this.serializeAnimationRanges(), DD.layerMask = this.layerMask, DD.alphaIndex = this.alphaIndex, DD.hasVertexAlpha = this.hasVertexAlpha, DD.overlayAlpha = this.overlayAlpha, DD.overlayColor = this.overlayColor.QpD … [truncated]
```

#### 632. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5955` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5955) · [Before (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5955)

```diff
-           if (mm.vertexCount !== this.getTotalVertices()) return Cm.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
+           if (DD.vertexCount !== this.getTotalVertices()) return ND.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
```

#### 633. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5960-L5961` → after: `L5960-L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5960-L5961) · [Before (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5960-L5961)

```diff
-             if (!hm) return void Cm.b.Error("Invalid morph target. Target must have positions.");
-             this.geometry.setVerticesData(km.m.PositionKind + Tm, hm, !1, 3);
+             if (!pD) return void ND.d.Error("Invalid morph target. Target must have positions.");
+             this.geometry.setVerticesData(CD.k.PositionKind + zD, pD, !1, 3);
```

#### 634. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5963` → after: `L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5963) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5963)

```diff
-             Am && this.geometry.setVerticesData(km.m.NormalKind + Tm, Am, !1, 3);
+             sD && this.geometry.setVerticesData(CD.k.NormalKind + zD, sD, !1, 3);
```

#### 635. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5965` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5965) · [Before (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5965)

```diff
-             am && this.geometry.setVerticesData(km.m.TangentKind + Tm, am, !1, 3);
+             KD && this.geometry.setVerticesData(CD.k.TangentKind + zD, KD, !1, 3);
```

#### 636. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5967` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5967) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5967)

```diff
-             xm && this.geometry.setVerticesData(km.m.UVKind + "_" + Tm, xm, !1, 2);
+             rD && this.geometry.setVerticesData(CD.k.UVKind + "_" + zD, rD, !1, 2);
```

#### 637. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5969` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5969) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5969)

```diff
-             wm && this.geometry.setVerticesData(km.m.UV2Kind + "_" + Tm, wm, !1, 2);
+             LD && this.geometry.setVerticesData(CD.k.UV2Kind + "_" + zD, LD, !1, 2);
```

#### 638. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5971` → after: `L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5971) · [Before (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5971)

```diff
-             Dm && this.geometry.setVerticesData(km.m.ColorKind + Tm, Dm, !1, 4)
+             cD && this.geometry.setVerticesData(CD.k.ColorKind + zD, cD, !1, 4)
```

#### 639. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5975` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5975) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5975)

```diff
-           for (; this.geometry.isVerticesDataPresent(km.m.PositionKind + mm);) this.geometry.removeVerticesData(km.m.PositionKind + mm), this.geometry.isVerticesDataPresent(km.m.NormalKind + mm) && this.geometry.removeVerticesData(km.m.NormalKind + mm), this.geometry.isVerticesDa … [truncated]
+           for (; this.geometry.isVerticesDataPresent(CD.k.PositionKind + DD);) this.geometry.removeVerticesData(CD.k.PositionKind + DD), this.geometry.isVerticesDataPresent(CD.k.NormalKind + DD) && this.geometry.removeVerticesData(CD.k.NormalKind + DD), this.geometry.isVerticesDa … [truncated]
```

#### 640. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5980` → after: `L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5980) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5980)

```diff
-         if (mm.type && "LinesMesh" === mm.type ? hm = Wm._LinesMeshParser(mm, Tm) : mm.type && "GroundMesh" === mm.type ? hm = Wm._GroundMeshParser(mm, Tm) : mm.type && "GoldbergMesh" === mm.type ? hm = Wm._GoldbergMeshParser(mm, Tm) : mm.type && "GreasedLineMesh" === mm.type ? h … [truncated]
+         if (DD.type && "LinesMesh" === DD.type ? pD = YD._LinesMeshParser(DD, zD) : DD.type && "GroundMesh" === DD.type ? pD = YD._GroundMeshParser(DD, zD) : DD.type && "GoldbergMesh" === DD.type ? pD = YD._GoldbergMeshParser(DD, zD) : DD.type && "GreasedLineMesh" === DD.type ? p … [truncated]
```

#### 641. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5983)

```diff
-               Am = (0, rm.c)("BABYLON.Animation");
+               sD = (0, ZD.e)("BABYLON.Animation");
```

#### 642. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5986` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5986) · [Before (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5986)

```diff
-           Zm.c.ParseAnimationRanges(hm, mm, Tm)
+           PD.b.ParseAnimationRanges(pD, DD, zD)
```

#### 643. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5996)

```diff
-             if (fm.id && (Am.id = fm.id), Qm.e && (fm.tags ? Qm.e.AddTagsTo(Am, fm.tags) : Qm.e.AddTagsTo(Am, mm.tags)), Am.position = cm.p.FromArray(fm.position), void 0 !== fm.metadata && (Am.metadata = fm.metadata), void 0 !== fm.parentId && (Am._waitingParentId = fm.parentId) … [truncated]
+             if (wD.id && (sD.id = wD.id), JD.c && (wD.tags ? JD.c.AddTagsTo(sD, wD.tags) : JD.c.AddTagsTo(sD, DD.tags)), sD.position = XD.s.FromArray(wD.position), void 0 !== wD.metadata && (sD.metadata = wD.metadata), void 0 !== wD.parentId && (sD._waitingParentId = wD.parentId) … [truncated]
```

#### 644. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L5999)

```diff
-                   hm = (0, rm.c)("BABYLON.Animation");
+                   pD = (0, ZD.e)("BABYLON.Animation");
```

#### 645. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6002` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6002) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6002)

```diff
-               Zm.c.ParseAnimationRanges(Am, fm, Tm), fm.autoAnimate && Tm.beginAnimation(Am, fm.autoAnimateFrom, fm.autoAnimateTo, fm.autoAnimateLoop, fm.autoAnimateSpeed || 1)
+               PD.b.ParseAnimationRanges(sD, wD, zD), wD.autoAnimate && zD.beginAnimation(sD, wD.autoAnimateFrom, wD.autoAnimateTo, wD.autoAnimateLoop, wD.autoAnimateSpeed || 1)
```

#### 646. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6007` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6007) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6007)

```diff
-           if (hm.ZTm = !!Tm.enablePicking, Tm.matrixData ? (hm.I3("matrix", new Float32Array(Tm.matrixData), 16, !1), hm._thinInstanceDataStorage.matrixBufferSize = Tm.matrixBufferSize, hm._thinInstanceDataStorage.instancesCount = Tm.instancesCount) : hm._thinInstanceDataStorage. … [truncated]
+           if (pD.WzD = !!zD.enablePicking, zD.matrixData ? (pD.f6("matrix", new Float32Array(zD.matrixData), 16, !1), pD._thinInstanceDataStorage.matrixBufferSize = zD.matrixBufferSize, pD._thinInstanceDataStorage.instancesCount = zD.instancesCount) : pD._thinInstanceDataStorage. … [truncated]
```

#### 647. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6009` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6009) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6009)

```diff
-             for (const mm in Tm.data) hm.I3(mm, new Float32Array(Tm.data[mm]), Tm.strides[mm], !1), hm._userThinInstanceBuffersStorage.sizes[mm] = Tm.sizes[mm]
+             for (const DD in zD.data) pD.f6(DD, new Float32Array(zD.data[DD]), zD.strides[DD], !1), pD._userThinInstanceBuffersStorage.sizes[DD] = zD.sizes[DD]
```

#### 648. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6017)

```diff
-           const Tm = this.getVerticesData(km.m.PositionKind);
+           const zD = this.getVerticesData(CD.k.PositionKind);
```

#### 649. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6019` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6019) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6019)

```diff
-           mm._sourcePositions = new Float32Array(Tm), this.isVertexBufferUpdatable(km.m.PositionKind) || this.setVerticesData(km.m.PositionKind, Tm, !0)
+           DD._sourcePositions = new Float32Array(zD), this.isVertexBufferUpdatable(CD.k.PositionKind) || this.setVerticesData(CD.k.PositionKind, zD, !0)
```

#### 650. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6026` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6026) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6026)

```diff
-           const Tm = this.getVerticesData(km.m.NormalKind);
+           const zD = this.getVerticesData(CD.k.NormalKind);
```

#### 651. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6028` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6028) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6028)

```diff
-           mm._sourceNormals = new Float32Array(Tm), this.isVertexBufferUpdatable(km.m.NormalKind) || this.setVerticesData(km.m.NormalKind, Tm, !0)
+           DD._sourceNormals = new Float32Array(zD), this.isVertexBufferUpdatable(CD.k.NormalKind) || this.setVerticesData(CD.k.NormalKind, zD, !0)
```

#### 652. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6034-L6038` → after: `L6034-L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6034-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6034-L6038) · [Before (L6034-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6034-L6038)

```diff
-         if (this.geometry._softwareSkinningFrameId == this.wG().getFrameId()) return this;
-         if (this.geometry._softwareSkinningFrameId = this.wG().getFrameId(), !this.isVerticesDataPresent(km.m.PositionKind)) return this;
-         if (!this.isVerticesDataPresent(km.m.MatricesIndicesKind)) return this;
-         if (!this.isVerticesDataPresent(km.m.MatricesWeightsKind)) return this;
-         const Tm = this.isVerticesDataPresent(km.m.NormalKind),
+         if (this.geometry._softwareSkinningFrameId == this.Ul().getFrameId()) return this;
+         if (this.geometry._softwareSkinningFrameId = this.Ul().getFrameId(), !this.isVerticesDataPresent(CD.k.PositionKind)) return this;
+         if (!this.isVerticesDataPresent(CD.k.MatricesIndicesKind)) return this;
+         if (!this.isVerticesDataPresent(CD.k.MatricesWeightsKind)) return this;
+         const zD = this.isVerticesDataPresent(CD.k.NormalKind),
```

#### 653. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6041-L6042` → after: `L6041-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6041-L6042) · [Before (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6041-L6042)

```diff
-           const mm = this.jK.slice();
-           this.setPositionsForCPUSkinning(), this.jK = mm
+           const DD = this.QE.slice();
+           this.setPositionsForCPUSkinning(), this.QE = DD
```

#### 654. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6045` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6045) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6045)

```diff
-         let hm = this.getVerticesData(km.m.PositionKind);
+         let pD = this.getVerticesData(CD.k.PositionKind);
```

#### 655. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6048)

```diff
-         let Am = this.getVerticesData(km.m.NormalKind);
+         let sD = this.getVerticesData(CD.k.NormalKind);
```

#### 656. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6053-L6054` → after: `L6053-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6053-L6054) · [Before (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6053-L6054)

```diff
-         const am = this.getVerticesData(km.m.MatricesIndicesKind),
-           xm = this.getVerticesData(km.m.MatricesWeightsKind);
+         const KD = this.getVerticesData(CD.k.MatricesIndicesKind),
+           rD = this.getVerticesData(CD.k.MatricesWeightsKind);
```

#### 657. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6057-L6058)

```diff
-           Dm = wm ? this.getVerticesData(km.m.MatricesIndicesExtraKind) : null,
-           im = wm ? this.getVerticesData(km.m.MatricesWeightsExtraKind) : null,
+           cD = LD ? this.getVerticesData(CD.k.MatricesIndicesExtraKind) : null,
+           gD = LD ? this.getVerticesData(CD.k.MatricesWeightsExtraKind) : null,
```

#### 658. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6060` → after: `L6060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6060) · [Before (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6060)

```diff
-           pm = cm.p.Zero(),
+           AD = XD.s.Zero(),
```

#### 659. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6069` → after: `L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6069) · [Before (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6069)

```diff
-           cm.p.TransformCoordinatesFromFloatsToRef(fm._sourcePositions[qm], fm._sourcePositions[qm + 1], fm._sourcePositions[qm + 2], Em, pm), pm.toArray(hm, qm), Tm && (cm.p.TransformNormalFromFloatsToRef(fm._sourceNormals[qm], fm._sourceNormals[qm + 1], fm._sourceNormals[qm + 2 … [truncated]
+           XD.s.TransformCoordinatesFromFloatsToRef(wD._sourcePositions[GD], wD._sourcePositions[GD + 1], wD._sourcePositions[GD + 2], UD, AD), AD.toArray(pD, GD), zD && (XD.s.TransformNormalFromFloatsToRef(wD._sourceNormals[GD], wD._sourceNormals[GD + 1], wD._sourceNormals[GD + 2 … [truncated]
```

#### 660. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6071` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6071) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6071)

```diff
-         return this.updateVerticesData(km.m.PositionKind, hm), Tm && this.updateVerticesData(km.m.NormalKind, Am), this
+         return this.updateVerticesData(CD.k.PositionKind, pD), zD && this.updateVerticesData(CD.k.NormalKind, sD), this
```

#### 661. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6077` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6077) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6077)

```diff
-           const mm = hm.DH().boundingBox;
+           const DD = pD.FW().boundingBox;
```

#### 662. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6084-L6085` → after: `L6084-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6084-L6085) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6084-L6085)

```diff
-           min: cm.p.Zero(),
-           max: cm.p.Zero()
+           min: XD.s.Zero(),
+           max: XD.s.Zero()
```

#### 663. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6090)

```diff
-         return cm.p.Center(Tm.min, Tm.max)
+         return XD.s.Center(zD.min, zD.max)
```

#### 664. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6098)

```diff
-         return (0, nm.h)(Wm._MergeMeshesCoroutine(mm, Tm, fm, hm, Am, am, !1))
+         return (0, ED.j)(YD._MergeMeshesCoroutine(DD, zD, wD, pD, sD, KD, !1))
```

#### 665. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6119` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6119) · [Before (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6119)

```diff
-             if (fm += mm[Tm].getTotalVertices(), fm >= 65536) return Cm.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
+             if (wD += DD[zD].getTotalVertices(), wD >= 65536) return ND.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
```

#### 666. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6129-L6130` → after: `L6129-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6129-L6130) · [Before (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6129-L6130)

```diff
-           if (fm.pG) return Cm.b.Warn("Cannot merge instance meshes."), null;
-           if (Em !== fm.sideOrientation) return Cm.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
+           if (wD.Gl) return ND.d.Warn("Cannot merge instance meshes."), null;
+           if (UD !== wD.sideOrientation) return ND.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
```

#### 667. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6136-L6140` → after: `L6136-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6136-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6136-L6140) · [Before (L6136-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6136-L6140)

```diff
-                 if (Tm instanceof Pm.e) {
-                   for (let mm = 0; mm < Tm.B3.length; mm++) im.indexOf(Tm.B3[mm]) < 0 && im.push(Tm.B3[mm]);
-                   for (let hm = 0; hm < fm.jK.length; hm++) Rm.push(im.indexOf(Tm.B3[fm.jK[hm].materialIndex])), pm.push({
-                     start: mm + fm.jK[hm].indexStart,
-                     count: fm.jK[hm].indexCount
+                 if (zD instanceof iD.d) {
+                   for (let DD = 0; DD < zD.M6.length; DD++) gD.indexOf(zD.M6[DD]) < 0 && gD.push(zD.M6[DD]);
+                   for (let pD = 0; pD < wD.QE.length; pD++) RD.push(gD.indexOf(zD.M6[wD.QE[pD].materialIndex])), AD.push({
+                     start: DD + wD.QE[pD].indexStart,
+                     count: wD.QE[pD].indexCount
```

#### 668. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6144-L6146)

```diff
-                   for (let hm = 0; hm < fm.jK.length; hm++) Rm.push(im.indexOf(Tm)), pm.push({
-                     start: mm + fm.jK[hm].indexStart,
-                     count: fm.jK[hm].indexCount
+                   for (let pD = 0; pD < wD.QE.length; pD++) RD.push(gD.indexOf(zD)), AD.push({
+                     start: DD + wD.QE[pD].indexStart,
+                     count: wD.QE[pD].indexCount
```

#### 669. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6150-L6152` → after: `L6150-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6150-L6152) · [Before (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6150-L6152)

```diff
-                 for (let Tm = 0; Tm < fm.jK.length; Tm++) Rm.push(0), pm.push({
-                   start: mm + fm.jK[Tm].indexStart,
-                   count: fm.jK[Tm].indexCount
+                 for (let zD = 0; zD < wD.QE.length; zD++) RD.push(0), AD.push({
+                   start: DD + wD.QE[zD].indexStart,
+                   count: wD.QE[zD].indexCount
```

#### 670. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6172` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6172) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6172)

```diff
-               vertexData: bm.c.ExtractFromMesh(mm, !1, !1),
+               vertexData: xD.b.ExtractFromMesh(DD, !1, !1),
```

#### 671. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6187` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6187) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6187)

```diff
-         Am || (Am = new Wm(Dm.name + "_merged", Dm.wG()));
+         sD || (sD = new YD(cD.name + "_merged", cD.Ul()));
```

#### 672. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6194-L6195` → after: `L6194-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6194-L6195) · [Before (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6194-L6195)

```diff
-           for (Am.releaseSubMeshes(), Tm = 0; Tm < pm.length;) Nm.e.CreateFromIndices(0, pm[Tm].start, pm[Tm].count, Am, void 0, !1), Tm++;
-           for (const mm of Am.jK) mm.refreshBoundingInfo();
+           for (sD.releaseSubMeshes(), zD = 0; zD < AD.length;) jD.b.CreateFromIndices(0, AD[zD].start, AD[zD].count, sD, void 0, !1), zD++;
+           for (const DD of sD.QE) DD.refreshBoundingInfo();
```

#### 673. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6199-L6201` → after: `L6199-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6199-L6201) · [Before (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6199-L6201)

```diff
-           const mm = new Pm.e(Dm.name + "_merged", Dm.wG());
-           mm.B3 = im;
-           for (let Tm = 0; Tm < Am.jK.length; Tm++) Am.jK[Tm].materialIndex = Rm[Tm];
+           const DD = new iD.d(cD.name + "_merged", cD.Ul());
+           DD.M6 = gD;
+           for (let zD = 0; zD < sD.QE.length; zD++) sD.QE[zD].materialIndex = RD[zD];
```

#### 674. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6220` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6220) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6220)

```diff
-         return this._scene.useRightHandedSystem && this.sideOrientation === Gm.d.CounterClockWiseSideOrientation
+         return this._scene.useRightHandedSystem && this.sideOrientation === dD.b.CounterClockWiseSideOrientation
```

#### 675. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6223-L6224` → after: `L6223-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6223-L6224) · [Before (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6223-L6224)

```diff
-         const Tm = this.wG();
-         return Tm.forcePointsCloud ? Gm.d.PointFillMode : Tm.forceWireframe ? Gm.d.WireFrameFillMode : this.overrideRenderingFillMode ?? mm
+         const zD = this.Ul();
+         return zD.forcePointsCloud ? dD.b.PointFillMode : zD.forceWireframe ? dD.b.WireFrameFillMode : this.overrideRenderingFillMode ?? DD
```

#### 676. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6305-L6306)

```diff
-     Wm.FRONTSIDE = bm.c.FRONTSIDE, Wm.BACKSIDE = bm.c.BACKSIDE, Wm.DOUBLESIDE = bm.c.DOUBLESIDE, Wm.DEFAULTSIDE = bm.c.DEFAULTSIDE, Wm.NO_CAP = 0, Wm.CAP_START = 1, Wm.CAP_END = 2, Wm.CAP_ALL = 3, Wm.NO_FLIP = 0, Wm.FLIP_TILE = 1, Wm.ROTATE_TILE = 2, Wm.FLIP_ROW = 3, Wm.ROTATE_RO … [truncated]
-       throw (0, sm.i)("GroundMesh")
+     YD.FRONTSIDE = xD.b.FRONTSIDE, YD.BACKSIDE = xD.b.BACKSIDE, YD.DOUBLESIDE = xD.b.DOUBLESIDE, YD.DEFAULTSIDE = xD.b.DEFAULTSIDE, YD.NO_CAP = 0, YD.CAP_START = 1, YD.CAP_END = 2, YD.CAP_ALL = 3, YD.NO_FLIP = 0, YD.FLIP_TILE = 1, YD.ROTATE_TILE = 2, YD.FLIP_ROW = 3, YD.ROTATE_RO … [truncated]
+       throw (0, yD.j)("GroundMesh")
```

#### 677. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6308)

```diff
-       throw (0, sm.i)("GoldbergMesh")
+       throw (0, yD.j)("GoldbergMesh")
```

#### 678. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6310)

```diff
-       throw (0, sm.i)("LinesMesh")
+       throw (0, yD.j)("LinesMesh")
```

#### 679. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6312` → after: `L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6312) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6312)

```diff
-       throw (0, sm.i)("GreasedLineMesh")
+       throw (0, yD.j)("GreasedLineMesh")
```

#### 680. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6314)

```diff
-       throw (0, sm.i)("GreasedLineRibbonMesh")
+       throw (0, yD.j)("GreasedLineRibbonMesh")
```

#### 681. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6316)

```diff
-       throw (0, sm.i)("TrailMesh")
+       throw (0, yD.j)("TrailMesh")
```

#### 682. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6318)

```diff
-       throw (0, sm.i)("GaussianSplattingMesh")
+       throw (0, yD.j)("GaussianSplattingMesh")
```

#### 683. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6320)

```diff
-       throw (0, sm.i)("GaussianSplattingPartProxyMesh")
+       throw (0, yD.j)("GaussianSplattingPartProxyMesh")
```

#### 684. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6322` → after: `L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6322) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6322)

```diff
-       throw (0, sm.i)("GaussianSplattingCompoundMesh")
+       throw (0, yD.j)("GaussianSplattingCompoundMesh")
```

#### 685. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6327-L6328)

```diff
-       Fm || (Fm = !0, (0, rm.d)("BABYLON.Mesh", Wm))
-     }(hm = Wm.prototype).FX ?? (hm.FX = (0, sm.f)("Mesh", "FX")), (Am = Wm.prototype).simplify ?? (Am.simplify = (0, sm.f)("Mesh", "simplify")), (am = Wm.prototype).thinInstanceAdd ?? (am.thinInstanceAdd = (0, sm.f)("Mesh", "thinInstanceAdd")), (xm = Wm.prototype).thinInstanceAdd … [truncated]
+       HD || (HD = !0, (0, ZD.i)("BABYLON.Mesh", YD))
+     }(pD = YD.prototype).dW ?? (pD.dW = (0, yD.h)("Mesh", "dW")), (sD = YD.prototype).simplify ?? (sD.simplify = (0, yD.h)("Mesh", "simplify")), (KD = YD.prototype).thinInstanceAdd ?? (KD.thinInstanceAdd = (0, yD.h)("Mesh", "thinInstanceAdd")), (rD = YD.prototype).thinInstanceAdd … [truncated]
```

#### 686. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6330` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6330) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6330)

```diff
-   40527: (mm, Tm, fm) => {
+   40348: (DD, zD, wD) => {
```

#### 687. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6332` → after: `L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6332) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6332)

```diff
-       c: () => Om
+       b: () => ID
```

#### 688. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6334-L6343` → after: `L6334-L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6334-L6343) · [Before (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6334-L6343)

```diff
-     var hm = fm(40113),
-       Am = fm(37185),
-       am = fm(40251),
-       xm = fm(39993),
-       wm = fm(37336),
-       Dm = fm(38766),
-       im = fm(40119),
-       Rm = fm(40518),
-       pm = fm(40166),
-       Em = fm(40391);
+     var pD = wD(39921),
+       sD = wD(37079),
+       KD = wD(40066),
+       rD = wD(39808),
+       LD = wD(37273),
+       cD = wD(38662),
+       gD = wD(39927),
+       RD = wD(40342),
+       AD = wD(39971),
+       UD = wD(40224);
```

#### 689. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6350)

```diff
-           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Rm.d)(this._applyToCoroutine.bind(this)), this.uniqueId = mm._UniqueIdGenerator, mm._UniqueIdGenerator++
+           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, RD.c)(this._applyToCoroutine.bind(this)), this.uniqueId = DD._UniqueIdGenerator, DD._UniqueIdGenerator++
```

#### 690. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6353-L6354` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6353-L6354) · [Before (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6353-L6354)

```diff
-           switch (mm.length || Dm.b.Warn(`Setting vertex data kind '${Tm}' with an empty array`), Tm) {
-             case am.m.PositionKind:
+           switch (DD.length || cD.d.Warn(`Setting vertex data kind '${zD}' with an empty array`), zD) {
+             case KD.k.PositionKind:
```

#### 691. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6357` → after: `L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6357) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6357)

```diff
-             case am.m.NormalKind:
+             case KD.k.NormalKind:
```

#### 692. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6360)

```diff
-             case am.m.TangentKind:
+             case KD.k.TangentKind:
```

#### 693. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6363)

```diff
-             case am.m.UVKind:
+             case KD.k.UVKind:
```

#### 694. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6366` → after: `L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6366) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6366)

```diff
-             case am.m.UV2Kind:
+             case KD.k.UV2Kind:
```

#### 695. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6369)

```diff
-             case am.m.UV3Kind:
+             case KD.k.UV3Kind:
```

#### 696. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6372` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6372) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6372)

```diff
-             case am.m.UV4Kind:
+             case KD.k.UV4Kind:
```

#### 697. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6375` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6375) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6375)

```diff
-             case am.m.UV5Kind:
+             case KD.k.UV5Kind:
```

#### 698. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6378` → after: `L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6378) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6378)

```diff
-             case am.m.UV6Kind:
+             case KD.k.UV6Kind:
```

#### 699. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6381)

```diff
-             case am.m.ColorKind:
+             case KD.k.ColorKind:
```

#### 700. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6384)

```diff
-             case am.m.MatricesIndicesKind:
+             case KD.k.MatricesIndicesKind:
```

#### 701. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6387` → after: `L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6387) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6387)

```diff
-             case am.m.MatricesWeightsKind:
+             case KD.k.MatricesWeightsKind:
```

#### 702. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6390)

```diff
-             case am.m.MatricesIndicesExtraKind:
+             case KD.k.MatricesIndicesExtraKind:
```

#### 703. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6393` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6393) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6393)

```diff
-             case am.m.MatricesWeightsExtraKind:
+             case KD.k.MatricesWeightsExtraKind:
```

#### 704. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6411` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6411) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6411)

```diff
-           if (this.positions && (mm.setVerticesData(am.m.PositionKind, this.positions, Tm), fm && (yield)), this.normals && (mm.setVerticesData(am.m.NormalKind, this.normals, Tm), fm && (yield)), this.tangents && (mm.setVerticesData(am.m.TangentKind, this.tangents, Tm), fm && (yi … [truncated]
+           if (this.positions && (DD.setVerticesData(KD.k.PositionKind, this.positions, zD), wD && (yield)), this.normals && (DD.setVerticesData(KD.k.NormalKind, this.normals, zD), wD && (yield)), this.tangents && (DD.setVerticesData(KD.k.TangentKind, this.tangents, zD), wD && (yi … [truncated]
```

#### 705. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6413)

```diff
-             mm.setVerticesData(am.m.ColorKind, this.colors, Tm, hm), this.hasVertexAlpha && void 0 !== mm.hasVertexAlpha && (mm.hasVertexAlpha = !0), fm && (yield)
+             DD.setVerticesData(KD.k.ColorKind, this.colors, zD, pD), this.hasVertexAlpha && void 0 !== DD.hasVertexAlpha && (DD.hasVertexAlpha = !0), wD && (yield)
```

#### 706. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6415` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6415) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6415)

```diff
-           if (this.matricesIndices && (mm.setVerticesData(am.m.MatricesIndicesKind, this.matricesIndices, Tm), fm && (yield)), this.matricesWeights && (mm.setVerticesData(am.m.MatricesWeightsKind, this.matricesWeights, Tm), fm && (yield)), this.matricesIndicesExtra && (mm.setVert … [truncated]
+           if (this.matricesIndices && (DD.setVerticesData(KD.k.MatricesIndicesKind, this.matricesIndices, zD), wD && (yield)), this.matricesWeights && (DD.setVerticesData(KD.k.MatricesWeightsKind, this.matricesWeights, zD), wD && (yield)), this.matricesIndicesExtra && (DD.setVert … [truncated]
```

#### 707. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6417-L6418` → after: `L6417-L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6417-L6418) · [Before (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6417-L6418)

```diff
-             Tm.jK = [];
-             for (const mm of this.materialInfos) new Em.e(mm.materialIndex, mm.verticesStart, mm.verticesCount, mm.indexStart, mm.indexCount, Tm)
+             zD.QE = [];
+             for (const DD of this.materialInfos) new UD.b(DD.materialIndex, DD.verticesStart, DD.verticesCount, DD.indexStart, DD.indexCount, zD)
```

#### 708. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6423` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6423) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6423)

```diff
-           return this.positions && mm.updateVerticesData(am.m.PositionKind, this.positions, Tm, fm), this.normals && mm.updateVerticesData(am.m.NormalKind, this.normals, Tm, fm), this.tangents && mm.updateVerticesData(am.m.TangentKind, this.tangents, Tm, fm), this.uvs && mm.updat … [truncated]
+           return this.positions && DD.updateVerticesData(KD.k.PositionKind, this.positions, zD, wD), this.normals && DD.updateVerticesData(KD.k.NormalKind, this.normals, zD, wD), this.tangents && DD.updateVerticesData(KD.k.TangentKind, this.tangents, zD, wD), this.uvs && DD.updat … [truncated]
```

#### 709. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6428-L6430` → after: `L6428-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6428-L6430) · [Before (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6428-L6430)

```diff
-           const am = Am.j.WO[0],
-             xm = Am.j.WO[1];
-           for (let wm = fm; wm < fm + hm; wm += 3) Am.p.FromArrayToRef(mm, wm, am), Am.p.TransformCoordinatesToRef(am, Tm, xm), mm[wm] = xm.x, mm[wm + 1] = xm.y, mm[wm + 2] = xm.z
+           const KD = sD.n.WI[0],
+             rD = sD.n.WI[1];
+           for (let LD = wD; LD < wD + pD; LD += 3) sD.s.FromArrayToRef(DD, LD, KD), sD.s.TransformCoordinatesToRef(KD, zD, rD), DD[LD] = rD.x, DD[LD + 1] = rD.y, DD[LD + 2] = rD.z
```

#### 710. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6435-L6437` → after: `L6435-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6435-L6437) · [Before (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6435-L6437)

```diff
-           const am = Am.j.WO[0],
-             xm = Am.j.WO[1];
-           for (let wm = fm; wm < fm + hm; wm += 3) Am.p.FromArrayToRef(mm, wm, am), Am.p.TransformNormalToRef(am, Tm, xm), mm[wm] = xm.x, mm[wm + 1] = xm.y, mm[wm + 2] = xm.z
+           const KD = sD.n.WI[0],
+             rD = sD.n.WI[1];
+           for (let LD = wD; LD < wD + pD; LD += 3) sD.s.FromArrayToRef(DD, LD, KD), sD.s.TransformNormalToRef(KD, zD, rD), DD[LD] = rD.x, DD[LD + 1] = rD.y, DD[LD + 2] = rD.z
```

#### 711. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6442-L6443` → after: `L6442-L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6442-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6442-L6443) · [Before (L6442-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6442-L6443)

```diff
-           const am = Am.j.Vector4[0],
-             xm = Am.j.Vector4[1];
+           const KD = sD.n.Vector4[0],
+             rD = sD.n.Vector4[1];
```

#### 712. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6482)

```diff
-           return (0, Rm.h)(this._mergeCoroutine(void 0, am, Tm, !1, fm, hm, Am))
+           return (0, RD.j)(this._mergeCoroutine(void 0, KD, zD, !1, wD, pD, sD))
```

#### 713. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6554` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6554) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6554)

```diff
-           return this.indices = Em, this.positions = mm._MergeElement(am.m.PositionKind, Rm.positions, Tm, fm.map((mm => [mm.vertexData.positions, mm.transform]))), Am && (yield), Rm.normals && (this.normals = mm._MergeElement(am.m.NormalKind, Rm.normals, Tm, fm.map((mm => [mm.ve … [truncated]
+           return this.indices = UD, this.positions = DD._MergeElement(KD.k.PositionKind, RD.positions, zD, wD.map((DD => [DD.vertexData.positions, DD.transform]))), sD && (yield), RD.normals && (this.normals = DD._MergeElement(KD.k.NormalKind, RD.normals, zD, wD.map((DD => [DD.ve … [truncated]
```

#### 714. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6561` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6561) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6561)

```diff
-             Dm = Tm === am.m.PositionKind ? mm._TransformVector3Coordinates : Tm === am.m.NormalKind ? mm._TransformVector3Normals : Tm === am.m.TangentKind ? mm._TransformVector4Normals : () => {};
+             cD = zD === KD.k.PositionKind ? DD._TransformVector3Coordinates : zD === KD.k.NormalKind ? DD._TransformVector3Normals : zD === KD.k.TangentKind ? DD._TransformVector4Normals : () => {};
```

#### 715. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6581` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6581) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6581)

```diff
-           if (!this.positions) throw new pm.h("Positions are required", pm.e.MeshInvalidPositionsError);
+           if (!this.positions) throw new AD.g("Positions are required", AD.d.MeshInvalidPositionsError);
```

#### 716. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6583` → after: `L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6583) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6583)

```diff
-               const fm = (0, am.i)(mm);
+               const wD = (0, KD.h)(DD);
```

#### 717. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6587` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6587) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6587)

```diff
-             Tm = mm(am.m.PositionKind, this.positions),
+             zD = DD(KD.k.PositionKind, this.positions),
```

#### 718. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6592` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6592) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6592)

```diff
-           this.normals && fm(am.m.NormalKind, this.normals), this.tangents && fm(am.m.TangentKind, this.tangents), this.uvs && fm(am.m.UVKind, this.uvs), this.uvs2 && fm(am.m.UV2Kind, this.uvs2), this.uvs3 && fm(am.m.UV3Kind, this.uvs3), this.uvs4 && fm(am.m.UV4Kind, this.uvs4),  … [truncated]
+           this.normals && wD(KD.k.NormalKind, this.normals), this.tangents && wD(KD.k.TangentKind, this.tangents), this.uvs && wD(KD.k.UVKind, this.uvs), this.uvs2 && wD(KD.k.UV2Kind, this.uvs2), this.uvs3 && wD(KD.k.UV3Kind, this.uvs3), this.uvs4 && wD(KD.k.UV4Kind, this.uvs4),  … [truncated]
```

#### 719. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6623` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6623) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6623)

```diff
-           if (Tm.isVerticesDataPresent(am.m.PositionKind) && (Am.positions = Tm.getVerticesData(am.m.PositionKind, fm, hm)), Tm.isVerticesDataPresent(am.m.NormalKind) && (Am.normals = Tm.getVerticesData(am.m.NormalKind, fm, hm)), Tm.isVerticesDataPresent(am.m.TangentKind) && (Am. … [truncated]
+           if (zD.isVerticesDataPresent(KD.k.PositionKind) && (sD.positions = zD.getVerticesData(KD.k.PositionKind, wD, pD)), zD.isVerticesDataPresent(KD.k.NormalKind) && (sD.normals = zD.getVerticesData(KD.k.NormalKind, wD, pD)), zD.isVerticesDataPresent(KD.k.TangentKind) && (sD. … [truncated]
```

#### 720. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6625-L6626` → after: `L6625-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6625-L6626) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6625-L6626)

```diff
-               xm = mm.getVertexBuffer(am.m.ColorKind),
-               wm = mm.getVerticesData(am.m.ColorKind, fm, hm);
+               rD = DD.getVertexBuffer(KD.k.ColorKind),
+               LD = DD.getVerticesData(KD.k.ColorKind, wD, pD);
```

#### 721. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6632` → after: `L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6632) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6632)

```diff
-               if (4 !== xm.getSize()) throw new Error(`Unexpected number of color components: ${xm.getSize()}`);
+               if (4 !== rD.getSize()) throw new Error(`Unexpected number of color components: ${rD.getSize()}`);
```

#### 722. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6636` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6636) · [Before (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6636)

```diff
-           return Tm.isVerticesDataPresent(am.m.MatricesIndicesKind) && (Am.matricesIndices = Tm.getVerticesData(am.m.MatricesIndicesKind, fm, hm)), Tm.isVerticesDataPresent(am.m.MatricesWeightsKind) && (Am.matricesWeights = Tm.getVerticesData(am.m.MatricesWeightsKind, fm, hm)), T … [truncated]
+           return zD.isVerticesDataPresent(KD.k.MatricesIndicesKind) && (sD.matricesIndices = zD.getVerticesData(KD.k.MatricesIndicesKind, wD, pD)), zD.isVerticesDataPresent(KD.k.MatricesWeightsKind) && (sD.matricesWeights = zD.getVerticesData(KD.k.MatricesWeightsKind, wD, pD)), z … [truncated]
```

#### 723. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6639` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6639) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6639)

```diff
-           throw (0, xm.i)("ribbonBuilder")
+           throw (0, rD.j)("ribbonBuilder")
```

#### 724. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6642` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6642) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6642)

```diff
-           throw (0, xm.i)("boxBuilder")
+           throw (0, rD.j)("boxBuilder")
```

#### 725. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6645` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6645) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6645)

```diff
-           throw (0, xm.i)("tiledBoxBuilder")
+           throw (0, rD.j)("tiledBoxBuilder")
```

#### 726. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6648)

```diff
-           throw (0, xm.i)("tiledPlaneBuilder")
+           throw (0, rD.j)("tiledPlaneBuilder")
```

#### 727. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6651` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6651) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6651)

```diff
-           throw (0, xm.i)("sphereBuilder")
+           throw (0, rD.j)("sphereBuilder")
```

#### 728. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6654` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6654) · [Before (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6654)

```diff
-           throw (0, xm.i)("cylinderBuilder")
+           throw (0, rD.j)("cylinderBuilder")
```

#### 729. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6657` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6657) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6657)

```diff
-           throw (0, xm.i)("torusBuilder")
+           throw (0, rD.j)("torusBuilder")
```

#### 730. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6660` → after: `L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6660) · [Before (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6660)

```diff
-           throw (0, xm.i)("linesBuilder")
+           throw (0, rD.j)("linesBuilder")
```

#### 731. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6663)

```diff
-           throw (0, xm.i)("linesBuilder")
+           throw (0, rD.j)("linesBuilder")
```

#### 732. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6666` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6666) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6666)

```diff
-           throw (0, xm.i)("groundBuilder")
+           throw (0, rD.j)("groundBuilder")
```

#### 733. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6669` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6669) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6669)

```diff
-           throw (0, xm.i)("groundBuilder")
+           throw (0, rD.j)("groundBuilder")
```

#### 734. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6672` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6672) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6672)

```diff
-           throw (0, xm.i)("groundBuilder")
+           throw (0, rD.j)("groundBuilder")
```

#### 735. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6675` → after: `L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6675) · [Before (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6675)

```diff
-           throw (0, xm.i)("planeBuilder")
+           throw (0, rD.j)("planeBuilder")
```

#### 736. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6678` → after: `L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6678) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6678)

```diff
-           throw (0, xm.i)("discBuilder")
+           throw (0, rD.j)("discBuilder")
```

#### 737. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6681` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6681) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6681)

```diff
-           throw (0, xm.i)("polygonBuilder")
+           throw (0, rD.j)("polygonBuilder")
```

#### 738. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6684` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6684) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6684)

```diff
-           throw (0, xm.i)("icoSphereBuilder")
+           throw (0, rD.j)("icoSphereBuilder")
```

#### 739. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6687` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6687) · [Before (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6687)

```diff
-           throw (0, xm.i)("polyhedronBuilder")
+           throw (0, rD.j)("polyhedronBuilder")
```

#### 740. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6690-L6691` → after: `L6690-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6690-L6691) · [Before (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6690-L6691)

```diff
-           arguments.length > 0 && void 0 !== arguments[0] || Am.p.Up();
-           throw (0, xm.i)("capsuleBuilder")
+           arguments.length > 0 && void 0 !== arguments[0] || sD.s.Up();
+           throw (0, rD.j)("capsuleBuilder")
```

#### 741. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6694` → after: `L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6694) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6694)

```diff
-           throw (0, xm.i)("torusKnotBuilder")
+           throw (0, rD.j)("torusKnotBuilder")
```

#### 742. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6704` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6704) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6704)

```diff
-           hm && (zm = !!hm.facetNormals, Zm = !!hm.facetPositions, km = !!hm.facetPartitioning, Sm = !0 === hm.useRightHandedSystem ? -1 : 1, em = hm.ratio || 0, bm = !!hm.depthSort, Nm = hm.distanceTo, bm && void 0 === Nm && (Nm = Am.p.Zero()));
+           pD && (VD = !!pD.facetNormals, PD = !!pD.facetPositions, CD = !!pD.facetPartitioning, TD = !0 === pD.useRightHandedSystem ? -1 : 1, bD = pD.ratio || 0, xD = !!pD.depthSort, jD = pD.distanceTo, xD && void 0 === jD && (jD = sD.s.Zero()));
```

#### 743. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6733)

```diff
-               mm.ind = 3 * am, mm.sqDistance = Am.p.DistanceSquared(hm.facetPositions[am], Nm)
+               DD.ind = 3 * KD, DD.sqDistance = sD.s.DistanceSquared(pD.facetPositions[KD], jD)
```

#### 744. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6770` → after: `L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6770) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6770)

```diff
-           hm && fm.set(hm, am.m.PositionKind);
+           pD && wD.set(pD, KD.k.PositionKind);
```

#### 745. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6772` → after: `L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6772) · [Before (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6772)

```diff
-           Am && fm.set(Am, am.m.NormalKind);
+           sD && wD.set(sD, KD.k.NormalKind);
```

#### 746. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6774` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6774) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6774)

```diff
-           xm && fm.set(xm, am.m.TangentKind);
+           rD && wD.set(rD, KD.k.TangentKind);
```

#### 747. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6776` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6776) · [Before (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6776)

```diff
-           Dm && fm.set(Dm, am.m.UVKind);
+           cD && wD.set(cD, KD.k.UVKind);
```

#### 748. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6778)

```diff
-           im && fm.set(im, am.m.UV2Kind);
+           gD && wD.set(gD, KD.k.UV2Kind);
```

#### 749. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6780` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6780) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6780)

```diff
-           Rm && fm.set(Rm, am.m.UV3Kind);
+           RD && wD.set(RD, KD.k.UV3Kind);
```

#### 750. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6782` → after: `L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6782) · [Before (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6782)

```diff
-           pm && fm.set(pm, am.m.UV4Kind);
+           AD && wD.set(AD, KD.k.UV4Kind);
```

#### 751. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6784` → after: `L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6784) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6784)

```diff
-           Em && fm.set(Em, am.m.UV5Kind);
+           UD && wD.set(UD, KD.k.UV5Kind);
```

#### 752. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6786` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6786) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6786)

```diff
-           Om && fm.set(Om, am.m.UV6Kind);
+           ID && wD.set(ID, KD.k.UV6Kind);
```

#### 753. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6788` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6788) · [Before (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6788)

```diff
-           Ym && (fm.set(wm.c.CheckColors4(Ym, hm.length / 3), am.m.ColorKind), void 0 !== Tm.hasVertexAlpha && (fm.hasVertexAlpha = Tm.hasVertexAlpha));
+           BD && (wD.set(LD.h.CheckColors4(BD, pD.length / 3), KD.k.ColorKind), void 0 !== zD.hasVertexAlpha && (wD.hasVertexAlpha = zD.hasVertexAlpha));
```

#### 754. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6790` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6790) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6790)

```diff
-           qm && fm.set(qm, am.m.MatricesIndicesKind);
+           GD && wD.set(GD, KD.k.MatricesIndicesKind);
```

#### 755. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6792` → after: `L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6792) · [Before (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6792)

```diff
-           jm && fm.set(jm, am.m.MatricesWeightsKind);
+           hD && wD.set(hD, KD.k.MatricesWeightsKind);
```

#### 756. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6811` → after: `L6811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6811) · [Before (L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6811)

```diff
-         Tm = [im.g.filter((function() {
+         zD = [gD.i.filter((function() {
```

#### 757. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6813` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6813) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6813)

```diff
-         }))], fm = [im.g.filter((function() {
+         }))], wD = [gD.i.filter((function() {
```

#### 758. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6815` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6815) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6815)

```diff
-         }))], Om = [im.g.filter((function() {
+         }))], ID = [gD.i.filter((function() {
```

#### 759. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6817` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6817) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6817)

```diff
-         }))], Ym = [im.g.filter((function() {
+         }))], BD = [gD.i.filter((function() {
```

#### 760. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6819` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6819) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6819)

```diff
-         }))], (0, hm.g)(mm, null, Tm, {
+         }))], (0, pD.i)(DD, null, zD, {
```

#### 761. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6829` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6829) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6829)

```diff
-         }, null, qm), (0, hm.g)(mm, null, fm, {
+         }, null, GD), (0, pD.i)(DD, null, wD, {
```

#### 762. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6839` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6839) · [Before (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6839)

```diff
-         }, null, qm), (0, hm.g)(mm, null, Om, {
+         }, null, GD), (0, pD.i)(DD, null, ID, {
```

#### 763. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6849)

```diff
-         }, null, qm), (0, hm.g)(mm, null, Ym, {
+         }, null, GD), (0, pD.i)(DD, null, BD, {
```

#### 764. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6865` → after: `L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6865) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6865)

```diff
-       })(), mm.FRONTSIDE = ((0, hm.i)(mm, qm), 0), mm.BACKSIDE = 1, mm.DOUBLESIDE = 2, mm.DEFAULTSIDE = 0, mm._UniqueIdGenerator = 0, mm
+       })(), DD.FRONTSIDE = ((0, pD.m)(DD, GD), 0), DD.BACKSIDE = 1, DD.DOUBLESIDE = 2, DD.DEFAULTSIDE = 0, DD._UniqueIdGenerator = 0, DD
```

#### 765. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6868-L6873` → after: `L6868-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6868-L6873) · [Before (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6868-L6873)

```diff
-   40590: (mm, Tm, fm) => {
-     var hm = fm(37185),
-       Am = fm(38766),
-       am = fm(40404),
-       xm = fm(40513),
-       wm = fm(40251);
+   40408: (DD, zD, wD) => {
+     var pD = wD(37079),
+       sD = wD(38662),
+       KD = wD(40234),
+       rD = wD(40335),
+       LD = wD(40066);
```

#### 766. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6882` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6882) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6882)

```diff
-       fm.Y5(Number.POSITIVE_INFINITY), hm.Y5(Number.NEGATIVE_INFINITY);
+       wD.I9(Number.POSITIVE_INFINITY), pD.I9(Number.NEGATIVE_INFINITY);
```

#### 767. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6896-L6897` → after: `L6896-L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6896-L6897) · [Before (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6896-L6897)

```diff
-       const xm = hm.j.WO[7],
-         wm = hm.j.WO[8];
+       const rD = pD.n.WI[7],
+         LD = pD.n.WI[8];
```

#### 768. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6900` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6900) · [Before (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6900)

```diff
-           for (let Rm = 0; Rm < 2; ++Rm) xm.set(Dm ? Tm.x : mm.x, im ? Tm.y : mm.y, Rm ? Tm.z : mm.z), hm.p.TransformCoordinatesToRef(xm, fm, wm), Am.minimizeInPlace(wm), am.maximizeInPlace(wm)
+           for (let RD = 0; RD < 2; ++RD) rD.set(cD ? zD.x : DD.x, gD ? zD.y : DD.y, RD ? zD.z : DD.z), pD.s.TransformCoordinatesToRef(rD, wD, LD), sD.minimizeInPlace(LD), KD.maximizeInPlace(LD)
```

#### 769. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6904-L6905` → after: `L6904-L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6904-L6905) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6904-L6905)

```diff
-       const xm = hm.j.WO[7];
-       for (let wm = 0; wm < 3 * Tm; wm += 3) hm.p.TransformCoordinatesFromFloatsToRef(mm[wm], mm[wm + 1], mm[wm + 2], fm, xm), Am.minimizeInPlace(xm), am.maximizeInPlace(xm)
+       const rD = pD.n.WI[7];
+       for (let LD = 0; LD < 3 * zD; LD += 3) pD.s.TransformCoordinatesFromFloatsToRef(DD[LD], DD[LD + 1], DD[LD + 2], wD, rD), sD.minimizeInPlace(rD), KD.maximizeInPlace(rD)
```

#### 770. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6908` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6908) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6908)

```diff
-     Om || (Om = !0, xm.d.prototype.thinInstanceAdd = function(mm) {
+     ID || (ID = !0, rD.e.prototype.thinInstanceAdd = function(DD) {
```

#### 771. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6910` → after: `L6910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6910) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6910)

```diff
-       if (!this.wG().dO().getCaps().instancedArrays) return Am.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
+       if (!this.Ul().iI().getCaps().instancedArrays) return sD.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
```

#### 772. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6917` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6917) · [Before (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6917)

```diff
-     }, xm.d.prototype.thinInstanceAddSelf = function() {
+     }, rD.e.prototype.thinInstanceAddSelf = function() {
```

#### 773. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6920-L6922` → after: `L6920-L6922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6920-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6920-L6922) · [Before (L6920-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6920-L6922)

```diff
-     }, xm.d.prototype.thinInstanceRegisterAttribute = function(mm, Tm) {
-       mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), this.removeVerticesData(mm), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[mm] = Tm, this._userThinInstanceBuffersStorage.sizes[mm] = Tm * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, xm.d.prototype.thinInstanceSetMatrixAt = function(mm, Tm) {
+     }, rD.e.prototype.thinInstanceRegisterAttribute = function(DD, zD) {
+       DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this.removeVerticesData(DD), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[DD] = zD, this._userThinInstanceBuffersStorage.sizes[DD] = zD * Math.max(32, this._thinInstanceDataSt … [truncated]
+     }, rD.e.prototype.thinInstanceSetMatrixAt = function(DD, zD) {
```

#### 774. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6926-L6927` → after: `L6926-L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6926-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6926-L6927) · [Before (L6926-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6926-L6927)

```diff
-       return Tm.copyToArray(hm, 16 * mm), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[mm] = Tm), fm && (this.u9("matrix"), this.mY || this.thinInstanceRefreshBoundingInfo(!1)), !0
-     }, xm.d.prototype.thinInstanceSetAttributeAt = function(mm, Tm, fm) {
+       return zD.copyToArray(pD, 16 * DD), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[DD] = zD), wD && (this.o5("matrix"), this.ZI || this.thinInstanceRefreshBoundingInfo(!1)), !0
+     }, rD.e.prototype.thinInstanceSetAttributeAt = function(DD, zD, wD) {
```

#### 775. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6929-L6930` → after: `L6929-L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6929-L6930) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6929-L6930)

```diff
-       return mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[mm] || Tm >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(mm, 0), this._userThinInsta … [truncated]
-     }, Object.defineProperty(xm.d.prototype, "o4", {
+       return DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[DD] || zD >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(DD, 0), this._userThinInsta … [truncated]
+     }, Object.defineProperty(rD.e.prototype, "A4", {
```

#### 776. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6940)

```diff
-     }), xm.d.prototype._thinInstanceCreateMatrixBuffer = function(mm, Tm) {
+     }), rD.e.prototype._thinInstanceCreateMatrixBuffer = function(DD, zD) {
```

#### 777. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6942` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6942) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6942)

```diff
-       const hm = new wm.c(this.dO(), Tm, !fm, 16, !1, !0);
+       const pD = new LD.b(this.iI(), zD, !wD, 16, !1, !0);
```

#### 778. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6945)

```diff
-     }, xm.d.prototype.I3 = function(mm, Tm) {
+     }, rD.e.prototype.f6 = function(DD, zD) {
```

#### 779. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6948)

```diff
-       if (fm = fm || 16, "matrix" === mm) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Tm ? Tm.length : 32 * fm, this._thinInstanceDataStorage.matrixData = Tm, this._thin … [truncated]
+       if (wD = wD || 16, "matrix" === DD) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = zD ? zD.length : 32 * wD, this._thinInstanceDataStorage.matrixData = zD, this._thin … [truncated]
```

#### 780. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6952` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6952) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6952)

```diff
-         const hm = new wm.c(this.dO(), Tm, !0, 16, !1, !0);
+         const pD = new LD.b(this.iI(), zD, !0, 16, !1, !0);
```

#### 781. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6955-L6958` → after: `L6955-L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6955-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6955-L6958) · [Before (L6955-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6955-L6958)

```diff
-       } else mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), null === Tm ? this._userThinInstanceBuffersStorage?.data[mm] && (this.removeVerticesData(mm), delete this._userThinInstanceBuffersStorage.data[mm], delete this._userThinInstanceBuffersStorage.strides[mm], delete … [truncated]
-     }, xm.d.prototype.u9 = function(mm) {
-       "matrix" === mm ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(mm), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
-     }, xm.d.prototype.thinInstancePartialBufferUpdate = function(mm, Tm, fm) {
+       } else DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), null === zD ? this._userThinInstanceBuffersStorage?.data[DD] && (this.removeVerticesData(DD), delete this._userThinInstanceBuffersStorage.data[DD], delete this._userThinInstanceBuffersStorage.strides[DD], delete … [truncated]
+     }, rD.e.prototype.o5 = function(DD) {
+       "matrix" === DD ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
+     }, rD.e.prototype.thinInstancePartialBufferUpdate = function(DD, zD, wD) {
```

#### 782. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6960` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6960) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6960)

```diff
-       else if (mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[mm]) {
+       else if (DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[DD]) {
```

#### 783. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6967)

```diff
-     }, xm.d.prototype.thinInstanceGetWorldMatrices = function() {
+     }, rD.e.prototype.thinInstanceGetWorldMatrices = function() {
```

#### 784. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6975` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6975) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6975)

```diff
-     }, xm.d.prototype.thinInstanceRefreshBoundingInfo = function() {
+     }, rD.e.prototype.thinInstanceRefreshBoundingInfo = function() {
```

#### 785. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6991-L6998` → after: `L6991-L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L6991-L6998) · [Before (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L6991-L6998)

```diff
-               jm = hm.j.Vector4[0],
-               Vm = hm.j.WO[1],
-               Im = hm.j.WO[2],
-               Km = hm.j.WO[3],
-               Qm = hm.j.WO[4],
-               nm = hm.j.WO[5],
-               Jm = hm.j.WO[6],
-               cm = hm.j.Matrix[2],
+               hD = pD.n.Vector4[0],
+               nD = pD.n.WI[1],
+               MD = pD.n.WI[2],
+               OD = pD.n.WI[3],
+               JD = pD.n.WI[4],
+               ED = pD.n.WI[5],
+               QD = pD.n.WI[6],
+               XD = pD.n.Matrix[2],
```

#### 786. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7001` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7001) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7001)

```diff
-             Vm.Y5(Number.POSITIVE_INFINITY), Im.Y5(Number.NEGATIVE_INFINITY), Km.Y5(Number.POSITIVE_INFINITY), Qm.Y5(Number.NEGATIVE_INFINITY);
+             nD.I9(Number.POSITIVE_INFINITY), MD.I9(Number.NEGATIVE_INFINITY), OD.I9(Number.POSITIVE_INFINITY), JD.I9(Number.NEGATIVE_INFINITY);
```

#### 787. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7011)

```diff
-               }, null, wm.m.PositionKind);
+               }, null, LD.k.PositionKind);
```

#### 788. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7015)

```diff
-             return !(!isFinite(Vm.x) || !isFinite(Km.x)) && (mm.DH().reConstruct(Km, Qm), mm.rawBoundingInfo = new am.b(Vm, Im), function(mm, Tm) {
+             return !(!isFinite(nD.x) || !isFinite(OD.x)) && (DD.FW().reConstruct(OD, JD), DD.rawBoundingInfo = new KD.b(nD, MD), function(DD, zD) {
```

#### 789. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7026)

```diff
-         const mm = this.DH();
+         const DD = this.FW();
```

#### 790. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7029)

```diff
-       const Om = this.DH(),
+       const ID = this.FW(),
```

#### 791. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7033)

```diff
-       hm.j.WO[0].Y5(Number.POSITIVE_INFINITY), hm.j.WO[1].Y5(Number.NEGATIVE_INFINITY);
+       pD.n.WI[0].I9(Number.POSITIVE_INFINITY), pD.n.WI[1].I9(Number.NEGATIVE_INFINITY);
```

#### 792. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7035-L7036` → after: `L7035-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7035-L7036) · [Before (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7035-L7036)

```diff
-         hm.e.FromArrayToRef(Ym, 16 * am, hm.j.Matrix[0]);
-         for (let mm = 0; mm < xm.length; ++mm) hm.p.TransformCoordinatesToRef(xm[mm], hm.j.Matrix[0], hm.j.WO[2]), hm.j.WO[0].minimizeInPlace(hm.j.WO[2]), hm.j.WO[1].maximizeInPlace(hm.j.WO[2])
+         pD.e.FromArrayToRef(BD, 16 * KD, pD.n.Matrix[0]);
+         for (let DD = 0; DD < rD.length; ++DD) pD.s.TransformCoordinatesToRef(rD[DD], pD.n.Matrix[0], pD.n.WI[2]), pD.n.WI[0].minimizeInPlace(pD.n.WI[2]), pD.n.WI[1].maximizeInPlace(pD.n.WI[2])
```

#### 793. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7038-L7039` → after: `L7038-L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7038-L7039) · [Before (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7038-L7039)

```diff
-       Om.reConstruct(hm.j.WO[0], hm.j.WO[1]), this._updateBoundingInfo()
-     }, xm.d.prototype._thinInstanceRecreateBuffer = function(mm) {
+       ID.reConstruct(pD.n.WI[0], pD.n.WI[1]), this._updateBoundingInfo()
+     }, rD.e.prototype._thinInstanceRecreateBuffer = function(DD) {
```

#### 794. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7041-L7042` → after: `L7041-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7041-L7042) · [Before (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7041-L7042)

```diff
-       "matrix" === mm ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Tm)) : "previousMatrix" === mm ? this._scene.needsPreviousWorldMatr … [truncated]
-     }, xm.d.prototype._thinInstanceUpdateBufferSize = function(mm) {
+       "matrix" === DD ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, zD)) : "previousMatrix" === DD ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, rD.e.prototype._thinInstanceUpdateBufferSize = function(DD) {
```

#### 795. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7044` → after: `L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7044) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7044)

```diff
-       mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind);
+       DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind);
```

#### 796. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7058)

```diff
-         fm ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", am, !1), this._thinInstanceDataStorage.matrixData = am, this._thinInstanceDataStorage.matrixBufferSize = Dm, this._scene … [truncated]
+         wD ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", KD, !1), this._thinInstanceDataStorage.matrixData = KD, this._thinInstanceDataStorage.matrixBufferSize = cD, this._scene … [truncated]
```

#### 797. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7060` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7060) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7060)

```diff
-     }, xm.d.prototype._thinInstanceInitializeUserStorage = function() {
+     }, rD.e.prototype._thinInstanceInitializeUserStorage = function() {
```

#### 798. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7067` → after: `L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7067) · [Before (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7067)

```diff
-     }, xm.d.prototype._disposeThinInstanceSpecificData = function() {
+     }, rD.e.prototype._disposeThinInstanceSpecificData = function() {
```

#### 799. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7071` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7071) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7071)

```diff
-   40546: (mm, Tm, fm) => {
+   40372: (DD, zD, wD) => {
```

#### 800. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7073-L7074` → after: `L7073-L7074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7073-L7074) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7073-L7074)

```diff
-       b: () => Vm,
-       e: () => Ym
+       c: () => nD,
+       f: () => BD
```

#### 801. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7076-L7083` → after: `L7076-L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7076-L7083) · [Before (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7076-L7083)

```diff
-     var hm, Am, am, xm, wm = fm(40113),
-       Dm = fm(40119),
-       im = fm(40129),
-       Rm = fm(37203),
-       pm = fm(37185),
-       Em = fm(40326),
-       om = fm(37224),
-       Om = fm(39993);
+     var pD, sD, KD, rD, LD = wD(39921),
+       cD = wD(39927),
+       gD = wD(39939),
+       RD = wD(37119),
+       AD = wD(37079),
+       UD = wD(40155),
+       fD = wD(37134),
+       ID = wD(39808);
```

#### 802. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7086)

```diff
-       let Tm, fm, hm, Am, am, xm, om, Om, Ym, qm = Em.c,
+       let zD, wD, pD, sD, KD, rD, fD, ID, BD, GD = UD.b,
```

#### 803. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7120` → after: `L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7120) · [Before (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7120)

```diff
-           super(Tm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new pm.p(0, 0, 1), this._up = new pm.p(0, 1, 0), this._right = new pm.p(1, 0, 0), this._position = (0, wm.i)(this, jm, pm.p.Zero()), this._rotation = ((0, wm.i)(this, V … [truncated]
+           super(zD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new AD.s(0, 0, 1), this._up = new AD.s(0, 1, 0), this._right = new AD.s(1, 0, 0), this._position = (0, LD.m)(this, hD, AD.s.Zero()), this._rotation = ((0, LD.m)(this, n … [truncated]
```

#### 804. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7153` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7153) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7153)

```diff
-           this._rotationQuaternion = mm, mm && this._rotation.Y5(0), this._markAsDirtyInternal()
+           this._rotationQuaternion = DD, DD && this._rotation.I9(0), this._markAsDirtyInternal()
```

#### 805. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7159` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7159) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7159)

```diff
-           return pm.p.TransformNormalFromFloatsToRef(0, 0, this.wG().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
+           return AD.s.TransformNormalFromFloatsToRef(0, 0, this.Ul().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
```

#### 806. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7162)

```diff
-           return pm.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
+           return AD.s.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
```

#### 807. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7165)

```diff
-           return pm.p.TransformNormalFromFloatsToRef(this.wG().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
+           return AD.s.TransformNormalFromFloatsToRef(this.Ul().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
```

#### 808. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7168` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7168) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7168)

```diff
-           return this._poseMatrix ? (this._poseMatrix.ZZ(mm), this) : (this._poseMatrix = mm.clone(), this)
+           return this._poseMatrix ? (this._poseMatrix.pC(DD), this) : (this._poseMatrix = DD.clone(), this)
```

#### 809. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7196)

```diff
-           return this._pivotMatrix.ZZ(mm), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Tm, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+           return this._pivotMatrix.pC(DD), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = zD, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 810. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7212)

```diff
-           return mm ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Y5(0), this._rotationQuaternion = this._rotationQuaternion || pm.h.Identity(), mm.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
+           return DD ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.I9(0), this._rotationQuaternion = this._rotationQuaternion || AD.i.Identity(), DD.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
```

#### 811. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7217)

```diff
-         get Lxm() {
+         get LLD() {
```

#### 812. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7231-L7232` → after: `L7231-L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7231-L7232) · [Before (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7231-L7232)

```diff
-             const mm = pm.j.Matrix[0];
-             this.parent.getWorldMatrix().invertToRef(mm), pm.p.TransformCoordinatesFromFloatsToRef(Tm, fm, hm, mm, this.position)
+             const DD = AD.n.Matrix[0];
+             this.parent.getWorldMatrix().invertToRef(DD), AD.s.TransformCoordinatesFromFloatsToRef(zD, wD, pD, DD, this.position)
```

#### 813. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7234` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7234) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7234)

```diff
-           return this._absolutePosition.ZZ(mm), this
+           return this._absolutePosition.pC(DD), this
```

#### 814. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7237)

```diff
-           return this.computeWorldMatrix(), this.position = pm.p.TransformNormal(mm, this._localMatrix), this
+           return this.computeWorldMatrix(), this.position = AD.s.TransformNormal(DD, this._localMatrix), this
```

#### 815. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7241-L7242` → after: `L7241-L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7241-L7242) · [Before (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7241-L7242)

```diff
-           const mm = pm.j.Matrix[0];
-           return this._localMatrix.invertToRef(mm), pm.p.TransformNormal(this.position, mm)
+           const DD = AD.n.Matrix[0];
+           return this._localMatrix.invertToRef(DD), AD.s.TransformNormal(this.position, DD)
```

#### 816. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7245)

```diff
-           return this.computeWorldMatrix(!0), this.position = pm.p.TransformCoordinates(mm, this._localMatrix), this
+           return this.computeWorldMatrix(!0), this.position = AD.s.TransformCoordinates(DD, this._localMatrix), this
```

#### 817. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7256` → after: `L7256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7256) · [Before (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7256)

```diff
-               const mm = pm.j.Matrix[0];
+               const DD = AD.n.Matrix[0];
```

#### 818. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7258` → after: `L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7258) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7258)

```diff
-               const Tm = pm.j.Matrix[1];
+               const zD = AD.n.Matrix[1];
```

#### 819. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7261-L7263` → after: `L7261-L7263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7261-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7261-L7263) · [Before (L7261-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7261-L7263)

```diff
-               const mm = pm.j.Quaternion[0];
-               pm.h.FromEulerVectorToRef(this.rotation, mm);
-               const Tm = pm.j.Matrix[0];
+               const DD = AD.n.Quaternion[0];
+               AD.i.FromEulerVectorToRef(this.rotation, DD);
+               const zD = AD.n.Matrix[0];
```

#### 820. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7265` → after: `L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7265) · [Before (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7265)

```diff
-               const fm = pm.j.Matrix[1];
+               const wD = AD.n.Matrix[1];
```

#### 821. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7270)

```diff
-           const Tm = pm.p.Zero();
+           const zD = AD.s.Zero();
```

#### 822. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7274)

```diff
-           return pm.p.TransformNormalToRef(mm, this.getWorldMatrix(), Tm), this
+           return AD.s.TransformNormalToRef(DD, this.getWorldMatrix(), zD), this
```

#### 823. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7283` → after: `L7283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7283) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7283)

```diff
-           return this.rotationQuaternion ? pm.h.RotationYawPitchRollToRef(Am + Tm, xm + fm, hm, this.rotationQuaternion) : (this.rotation.x = xm + fm, this.rotation.y = Am + Tm, this.rotation.z = hm), this
+           return this.rotationQuaternion ? AD.i.RotationYawPitchRollToRef(sD + zD, rD + wD, pD, this.rotationQuaternion) : (this.rotation.x = rD + wD, this.rotation.y = sD + zD, this.rotation.z = pD), this
```

#### 824. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7287)

```diff
-           0 == this.wG().getRenderId() && this.computeWorldMatrix(!0);
+           0 == this.Ul().getRenderId() && this.computeWorldMatrix(!0);
```

#### 825. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7290-L7291` → after: `L7290-L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7290-L7291) · [Before (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7290-L7291)

```diff
-             const Tm = pm.j.Matrix[0];
-             fm.invertToRef(Tm), mm = pm.p.TransformCoordinates(mm, Tm)
+             const zD = AD.n.Matrix[0];
+             wD.invertToRef(zD), DD = AD.s.TransformCoordinates(DD, zD)
```

#### 826. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7296)

```diff
-           const mm = pm.p.Zero();
+           const DD = AD.s.Zero();
```

#### 827. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7303` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7303) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7303)

```diff
-           const mm = pm.p.Zero();
+           const DD = AD.s.Zero();
```

#### 828. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7307)

```diff
-           return this.getPivotPointToRef(mm), pm.p.TransformCoordinatesToRef(mm, this.getWorldMatrix(), mm), this
+           return this.getPivotPointToRef(DD), AD.s.TransformCoordinatesToRef(DD, this.getWorldMatrix(), DD), this
```

#### 829. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7309` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7309) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7309)

```diff
-         HTm(mm) {
+         vzD(DD) {
```

#### 830. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7312-L7313)

```diff
-             for (const Tm of this._children) Tm.HTm(mm);
-           return super.HTm(mm)
+             for (const zD of this._children) zD.vzD(DD);
+           return super.vzD(DD)
```

#### 831. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7319-L7322` → after: `L7319-L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7319-L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7319-L7322) · [Before (L7319-L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7319-L7322)

```diff
-           const Am = pm.j.Quaternion[0],
-             am = pm.j.WO[0],
-             xm = pm.j.WO[1],
-             wm = pm.j.Matrix[1];
+           const sD = AD.n.Quaternion[0],
+             KD = AD.n.WI[0],
+             rD = AD.n.WI[1],
+             LD = AD.n.Matrix[1];
```

#### 832. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7324` → after: `L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7324) · [Before (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7324)

```diff
-           const Dm = pm.j.Matrix[0];
+           const cD = AD.n.Matrix[0];
```

#### 833. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7327)

```diff
-           return im || (im = mm._TmpRotation, pm.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, im)), pm.e.ComposeToRef(this.fi, im, this.position, Dm), this.parent && Dm.multiplyToRef(this.parent.computeWorldMatrix(!0), Dm), Tm && (Tm.computeWo … [truncated]
+           return gD || (gD = DD._TmpRotation, AD.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, gD)), AD.e.ComposeToRef(this.rc, gD, this.position, cD), this.parent && cD.multiplyToRef(this.parent.computeWorldMatrix(!0), cD), zD && (zD.computeWo … [truncated]
```

#### 834. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7352` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7352) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7352)

```diff
-           if (Tm.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Y5(0)), hm && 0 !== hm) {
+           if (zD.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.I9(0)), pD && 0 !== pD) {
```

#### 835. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7355-L7356` → after: `L7355-L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7355-L7356) · [Before (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7355-L7356)

```diff
-                 hm = pm.j.Matrix[0];
-               mm.invertToRef(hm), Tm = pm.p.TransformNormal(Tm, hm), mm.determinant() < 0 && (fm *= -1)
+                 pD = AD.n.Matrix[0];
+               DD.invertToRef(pD), zD = AD.s.TransformNormal(zD, pD), DD.determinant() < 0 && (wD *= -1)
```

#### 836. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7358-L7359` → after: `L7358-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7358-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7358-L7359) · [Before (L7358-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7358-L7359)

```diff
-             Am = pm.h.RotationAxisToRef(Tm, fm, mm._RotationAxisCache), Am.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
-           } else Am = pm.h.RotationAxisToRef(Tm, fm, mm._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Am, this.rotationQuaternion);
+             sD = AD.i.RotationAxisToRef(zD, wD, DD._RotationAxisCache), sD.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
+           } else sD = AD.i.RotationAxisToRef(zD, wD, DD._RotationAxisCache), this.rotationQuaternion.multiplyToRef(sD, this.rotationQuaternion);
```

#### 837. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7363-L7371` → after: `L7363-L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7363-L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7363-L7371) · [Before (L7363-L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7363-L7371)

```diff
-           Tm.normalize(), this.rotationQuaternion || (this.rotationQuaternion = pm.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Y5(0));
-           const hm = pm.j.WO[0],
-             Am = pm.j.WO[1],
-             am = pm.j.WO[2],
-             xm = pm.j.Quaternion[0],
-             wm = pm.j.Matrix[0],
-             Dm = pm.j.Matrix[1],
-             im = pm.j.Matrix[2],
-             Rm = pm.j.Matrix[3];
+           zD.normalize(), this.rotationQuaternion || (this.rotationQuaternion = AD.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.I9(0));
+           const pD = AD.n.WI[0],
+             sD = AD.n.WI[1],
+             KD = AD.n.WI[2],
+             rD = AD.n.Quaternion[0],
+             LD = AD.n.Matrix[0],
+             cD = AD.n.Matrix[1],
+             gD = AD.n.Matrix[2],
+             RD = AD.n.Matrix[3];
```

#### 838. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7385-L7387` → after: `L7385-L7387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7385-L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7385-L7387) · [Before (L7385-L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7385-L7387)

```diff
-           this.rotationQuaternion ? hm = this.rotationQuaternion : (hm = pm.j.Quaternion[1], pm.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, hm));
-           const Am = pm.j.Quaternion[0];
-           return pm.h.RotationYawPitchRollToRef(Tm, mm, fm, Am), hm.multiplyInPlace(Am), this.rotationQuaternion || hm.toEulerAnglesToRef(this.rotation), this
+           this.rotationQuaternion ? pD = this.rotationQuaternion : (pD = AD.n.Quaternion[1], AD.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, pD));
+           const sD = AD.n.Quaternion[0];
+           return AD.i.RotationYawPitchRollToRef(zD, DD, wD, sD), pD.multiplyInPlace(sD), this.rotationQuaternion || pD.toEulerAnglesToRef(this.rotation), this
```

#### 839. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7399)

```diff
-           const hm = this.wG().getRenderId();
+           const pD = this.Ul().getRenderId();
```

#### 840. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7401` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7401) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7401)

```diff
-           fm = fm || this.wG().activeCamera, this._updateCache();
+           wD = wD || this.Ul().activeCamera, this._updateCache();
```

#### 841. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7409` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7409) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7409)

```diff
-             Dm = mm._TmpTranslation, Dm.Z8(this._position.x + Tm[12], this._position.y + Tm[13], this._position.z + Tm[14])
+             cD = DD._TmpTranslation, cD.Z2(this._position.x + zD[12], this._position.y + zD[13], this._position.z + zD[14])
```

#### 842. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7411)

```diff
-           if (xm.Z8(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
+           if (rD.Z2(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
```

#### 843. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7413)

```diff
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(pm.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Z8(0, 0, 0))
+               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(AD.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Z2(0, 0, 0))
```

#### 844. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7415)

```diff
-           } else wm = mm._TmpRotation, pm.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, wm);
+           } else LD = DD._TmpRotation, AD.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, LD);
```

#### 845. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7417` → after: `L7417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7417) · [Before (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7417)

```diff
-             const mm = pm.j.Matrix[1];
+             const DD = AD.n.Matrix[1];
```

#### 846. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7419-L7420` → after: `L7419-L7420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7419-L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7419-L7420) · [Before (L7419-L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7419-L7420)

```diff
-             const Tm = pm.j.Matrix[0];
-             wm.toRotationMatrix(Tm), this._pivotMatrix.multiplyToRef(mm, pm.j.Matrix[4]), pm.j.Matrix[4].multiplyToRef(Tm, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
+             const zD = AD.n.Matrix[0];
+             LD.toRotationMatrix(zD), this._pivotMatrix.multiplyToRef(DD, AD.n.Matrix[4]), AD.n.Matrix[4].multiplyToRef(zD, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
```

#### 847. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7426-L7431` → after: `L7426-L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7426-L7431) · [Before (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7426-L7431)

```diff
-                 mm.getSkeleton().prepare(), mm.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), pm.j.Matrix[7])
-               } else pm.j.Matrix[7].ZZ(am.getWorldMatrix());
-               const Tm = pm.j.WO[5],
-                 fm = pm.j.WO[6],
-                 hm = pm.j.Quaternion[0];
-               pm.j.Matrix[7].decompose(fm, hm, Tm), pm.e.ScalingToRef(fm.x, fm.y, fm.z, pm.j.Matrix[7]), pm.j.Matrix[7].setTranslation(Tm), mm.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(hm, Tm), this._localMatrix.setTranslation(Tm)), this._local … [truncated]
+                 DD.getSkeleton().prepare(), DD.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), AD.n.Matrix[7])
+               } else AD.n.Matrix[7].pC(KD.getWorldMatrix());
+               const zD = AD.n.WI[5],
+                 wD = AD.n.WI[6],
+                 pD = AD.n.Quaternion[0];
+               AD.n.Matrix[7].decompose(wD, pD, zD), AD.e.ScalingToRef(wD.x, wD.y, wD.z, AD.n.Matrix[7]), AD.n.Matrix[7].setTranslation(zD), DD.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(pD, zD), this._localMatrix.setTranslation(zD)), this._local … [truncated]
```

#### 848. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7434` → after: `L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7434) · [Before (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7434)

```diff
-               mm.getSkeleton().prepare(), this._localMatrix.multiplyToRef(mm.getFinalMatrix(), pm.j.Matrix[6]), pm.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
+               DD.getSkeleton().prepare(), this._localMatrix.multiplyToRef(DD.getFinalMatrix(), AD.n.Matrix[6]), AD.n.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
```

#### 849. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7437)

```diff
-           } else this._worldMatrix.ZZ(this._localMatrix);
+           } else this._worldMatrix.pC(this._localMatrix);
```

#### 850. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7440)

```diff
-               const Tm = pm.j.WO[0];
+               const zD = AD.n.WI[0];
```

#### 851. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7443-L7445` → after: `L7443-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7443-L7445) · [Before (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7443-L7445)

```diff
-               this._worldMatrix.invertToRef(pm.j.Matrix[1]);
-               const Am = pm.j.WO[1];
-               pm.p.TransformCoordinatesToRef(hm, pm.j.Matrix[1], Am), Am.normalize();
+               this._worldMatrix.invertToRef(AD.n.Matrix[1]);
+               const sD = AD.n.WI[1];
+               AD.s.TransformCoordinatesToRef(pD, AD.n.Matrix[1], sD), sD.normalize();
```

#### 852. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7449-L7453)

```diff
-               if (pm.h.RotationYawPitchRollToRef(am, wm, 0, pm.j.Quaternion[0]), (this.billboardMode & mm.BILLBOARDMODE_ALL) !== mm.BILLBOARDMODE_ALL) {
-                 const Tm = pm.j.WO[1];
-                 pm.j.Quaternion[0].toEulerAnglesToRef(Tm), (this.billboardMode & mm.BILLBOARDMODE_X) !== mm.BILLBOARDMODE_X && (Tm.x = 0), (this.billboardMode & mm.BILLBOARDMODE_Y) !== mm.BILLBOARDMODE_Y && (Tm.y = 0), (this.billboardMode & mm.BILLBOARDMODE_Z) !== mm.BILLBOARDMOD … [truncated]
-               } else pm.e.FromQuaternionToRef(pm.j.Quaternion[0], pm.j.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pm.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pm.j.WO[0])
+               if (AD.i.RotationYawPitchRollToRef(KD, LD, 0, AD.n.Quaternion[0]), (this.billboardMode & DD.BILLBOARDMODE_ALL) !== DD.BILLBOARDMODE_ALL) {
+                 const zD = AD.n.WI[1];
+                 AD.n.Quaternion[0].toEulerAnglesToRef(zD), (this.billboardMode & DD.BILLBOARDMODE_X) !== DD.BILLBOARDMODE_X && (zD.x = 0), (this.billboardMode & DD.BILLBOARDMODE_Y) !== DD.BILLBOARDMODE_Y && (zD.y = 0), (this.billboardMode & DD.BILLBOARDMODE_Z) !== DD.BILLBOARDMOD … [truncated]
+               } else AD.e.FromQuaternionToRef(AD.n.Quaternion[0], AD.n.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AD.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AD.n.WI[0])
```

#### 853. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7455-L7461` → after: `L7455-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7455-L7461) · [Before (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7455-L7461)

```diff
-               const Tm = pm.j.WO[0];
-               this._worldMatrix.getTranslationToRef(Tm), pm.j.Matrix[1].ZZ(fm.getViewMatrix());
-               const hm = this.wG().useRightHandedSystem;
-               if (hm && pm.j.Matrix[1].multiplyToRef(mm._TmpRHRestore, pm.j.Matrix[1]), pm.j.Matrix[1].setTranslationFromFloats(0, 0, 0), pm.j.Matrix[1].invertToRef(pm.j.Matrix[0]), (this.billboardMode & mm.BILLBOARDMODE_ALL) !== mm.BILLBOARDMODE_ALL) {
-                 pm.j.Matrix[0].decompose(void 0, pm.j.Quaternion[0], void 0);
-                 const Tm = pm.j.WO[1];
-                 pm.j.Quaternion[0].toEulerAnglesToRef(Tm), (this.billboardMode & mm.BILLBOARDMODE_X) !== mm.BILLBOARDMODE_X && (Tm.x = 0), (this.billboardMode & mm.BILLBOARDMODE_Y) !== mm.BILLBOARDMODE_Y && (Tm.y = 0), (this.billboardMode & mm.BILLBOARDMODE_Z) !== mm.BILLBOARDMOD … [truncated]
+               const zD = AD.n.WI[0];
+               this._worldMatrix.getTranslationToRef(zD), AD.n.Matrix[1].pC(wD.getViewMatrix());
+               const pD = this.Ul().useRightHandedSystem;
+               if (pD && AD.n.Matrix[1].multiplyToRef(DD._TmpRHRestore, AD.n.Matrix[1]), AD.n.Matrix[1].setTranslationFromFloats(0, 0, 0), AD.n.Matrix[1].invertToRef(AD.n.Matrix[0]), (this.billboardMode & DD.BILLBOARDMODE_ALL) !== DD.BILLBOARDMODE_ALL) {
+                 AD.n.Matrix[0].decompose(void 0, AD.n.Quaternion[0], void 0);
+                 const zD = AD.n.WI[1];
+                 AD.n.Quaternion[0].toEulerAnglesToRef(zD), (this.billboardMode & DD.BILLBOARDMODE_X) !== DD.BILLBOARDMODE_X && (zD.x = 0), (this.billboardMode & DD.BILLBOARDMODE_Y) !== DD.BILLBOARDMODE_Y && (zD.y = 0), (this.billboardMode & DD.BILLBOARDMODE_Z) !== DD.BILLBOARDMOD … [truncated]
```

#### 854. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pm.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pm.j.WO[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : am && am._nonUniformScaling ? this._updateNonUniformScalingState(am._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AD.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AD.n.WI[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : KD && KD._nonUniformScaling ? this._updateNonUniformScalingState(KD._nonUniformScaling) : this._up … [truncated]
```

#### 855. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7474` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7474) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7474)

```diff
-                 const mm = pm.j.Matrix[0];
+                 const DD = AD.n.Matrix[0];
```

#### 856. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7476-L7477)

```diff
-                 const Tm = pm.j.Quaternion[0];
-                 mm.decompose(fm.fi, Tm, fm.position), fm.rotationQuaternion ? fm.rotationQuaternion.ZZ(Tm) : Tm.toEulerAnglesToRef(fm.rotation)
+                 const zD = AD.n.Quaternion[0];
+                 DD.decompose(wD.rc, zD, wD.position), wD.rotationQuaternion ? wD.rotationQuaternion.pC(zD) : zD.toEulerAnglesToRef(wD.rotation)
```

#### 857. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7481)

```diff
-           this.fi.Z8(1, 1, 1), this.position.Z8(0, 0, 0), this.rotation.Z8(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = pm.h.Identity()), this._worldMatrix = pm.e.Identity()
+           this.rc.Z2(1, 1, 1), this.position.Z2(0, 0, 0), this.rotation.Z2(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = AD.i.Identity()), this._worldMatrix = AD.e.Identity()
```

#### 858. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7492)

```diff
-           return mm || (mm = this.wG().activeCamera), pm.p.TransformCoordinates(this.getAbsolutePosition(), mm.getViewMatrix())
+           return DD || (DD = this.Ul().activeCamera), AD.s.TransformCoordinates(this.getAbsolutePosition(), DD.getViewMatrix())
```

#### 859. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7496)

```diff
-           return mm || (mm = this.wG().activeCamera), this.getAbsolutePosition().subtract(mm.globalPosition).length()
+           return DD || (DD = this.Ul().activeCamera), this.getAbsolutePosition().subtract(DD.globalPosition).length()
```

#### 860. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7499)

```diff
-           const Am = im.d.Clone((() => new mm(Tm, this.wG())), this);
+           const sD = gD.d.Clone((() => new DD(zD, this.Ul())), this);
```

#### 861. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7511` → after: `L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7511) · [Before (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7511)

```diff
-           return Tm.type = this.getClassName(), Tm.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Tm), Tm.localMatrix = this.getPivotMatrix().ahm(), Tm.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Tm.nG = !0), im.d.AppendSerializedAnimation … [truncated]
+           return zD.type = this.getClassName(), zD.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(zD), zD.localMatrix = this.getPivotMatrix().QpD(), zD.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (zD.Tl = !0), gD.d.AppendSerializedAnimation … [truncated]
```

#### 862. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7519)

```diff
-           if (this.wG().stopAnimation(this), this.wG().removeTransformNode(this), this._parentContainer) {
+           if (this.Ul().stopAnimation(this), this.Ul().removeTransformNode(this), this._parentContainer) {
```

#### 863. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7535)

```diff
-           Tm && (this.rotationQuaternion ? (Am = this.rotationQuaternion.clone(), this.rotationQuaternion.Z8(0, 0, 0, 1)) : this.rotation && (hm = this.rotation.clone(), this.rotation.Z8(0, 0, 0)));
+           zD && (this.rotationQuaternion ? (sD = this.rotationQuaternion.clone(), this.rotationQuaternion.Z2(0, 0, 0, 1)) : this.rotation && (pD = this.rotation.clone(), this.rotation.Z2(0, 0, 0)));
```

#### 864. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7541)

```diff
-           return this.fi.scaleInPlace(Dm), Tm && (this.rotationQuaternion && Am ? this.rotationQuaternion.ZZ(Am) : this.rotation && hm && this.rotation.ZZ(hm)), this
+           return this.rc.scaleInPlace(cD), zD && (this.rotationQuaternion && sD ? this.rotationQuaternion.pC(sD) : this.rotation && pD && this.rotation.pC(pD)), this
```

#### 865. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7548)

```diff
-         Tm = [(0, Dm.F)("position")], fm = [(0, Dm.F)("rotation")], hm = [(0, Dm.y)("rotationQuaternion")], Am = [(0, Dm.F)("fi")], am = [(0, Dm.J)("billboardMode")], xm = [(0, Dm.J)()], om = [(0, Dm.J)("infiniteDistance")], Om = [(0, Dm.J)()], Ym = [(0, Dm.J)()], (0, wm.g)(null, … [truncated]
+         zD = [(0, cD.B)("position")], wD = [(0, cD.B)("rotation")], pD = [(0, cD.t)("rotationQuaternion")], sD = [(0, cD.B)("rc")], KD = [(0, cD.C)("billboardMode")], rD = [(0, cD.C)()], fD = [(0, cD.C)("infiniteDistance")], ID = [(0, cD.C)()], BD = [(0, cD.C)()], (0, LD.i)(null, … [truncated]
```

#### 866. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7561` → after: `L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7561) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7561)

```diff
-         }, jm, Vm), (0, wm.g)(null, null, fm, {
+         }, hD, nD), (0, LD.i)(null, null, wD, {
```

#### 867. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7574)

```diff
-         }, Im, Km), (0, wm.g)(null, null, hm, {
+         }, MD, OD), (0, LD.i)(null, null, pD, {
```

#### 868. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7587)

```diff
-         }, Qm, nm), (0, wm.g)(null, null, Am, {
+         }, JD, ED), (0, LD.i)(null, null, sD, {
```

#### 869. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7600)

```diff
-         }, Jm, cm), (0, wm.g)(null, null, am, {
+         }, QD, XD), (0, LD.i)(null, null, KD, {
```

#### 870. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7613)

```diff
-         }, zm, Zm), (0, wm.g)(null, null, xm, {
+         }, VD, PD), (0, LD.i)(null, null, rD, {
```

#### 871. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7626)

```diff
-         }, km, bm), (0, wm.g)(null, null, om, {
+         }, CD, xD), (0, LD.i)(null, null, fD, {
```

#### 872. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7639)

```diff
-         }, Sm, em), (0, wm.g)(null, null, Om, {
+         }, TD, bD), (0, LD.i)(null, null, ID, {
```

#### 873. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7652` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7652) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7652)

```diff
-         }, Nm, Gm), (0, wm.g)(null, null, Ym, {
+         }, jD, dD), (0, LD.i)(null, null, BD, {
```

#### 874. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7671)

```diff
-       })(), mm.BILLBOARDMODE_NONE = 0, mm.BILLBOARDMODE_X = 1, mm.BILLBOARDMODE_Y = 2, mm.BILLBOARDMODE_Z = 4, mm.BILLBOARDMODE_ALL = 7, mm.BILLBOARDMODE_USE_POSITION = 128, mm.BillboardUseParentOrientation = !1, mm._TmpRotation = pm.h.Zero(), mm._TmpScaling = pm.p.Zero(), mm._Tm … [truncated]
+       })(), DD.BILLBOARDMODE_NONE = 0, DD.BILLBOARDMODE_X = 1, DD.BILLBOARDMODE_Y = 2, DD.BILLBOARDMODE_Z = 4, DD.BILLBOARDMODE_ALL = 7, DD.BILLBOARDMODE_USE_POSITION = 128, DD.BillboardUseParentOrientation = !1, DD._TmpRotation = AD.i.Zero(), DD._TmpScaling = AD.s.Zero(), DD._Tm … [truncated]
```

#### 875. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7676)

```diff
-       if (mm.localMatrix ? hm.setPreTransformMatrix(pm.e.FromArray(mm.localMatrix)) : mm.pivotMatrix && hm.setPivotMatrix(pm.e.FromArray(mm.pivotMatrix)), hm.Dk(mm.isEnabled), hm._waitingParsedUniqueId = mm.uniqueId, void 0 !== mm.parentId && (hm._waitingParentId = mm.parentId),  … [truncated]
+       if (DD.localMatrix ? pD.setPreTransformMatrix(AD.e.FromArray(DD.localMatrix)) : DD.pivotMatrix && pD.setPivotMatrix(AD.e.FromArray(DD.pivotMatrix)), pD.nC(DD.isEnabled), pD._waitingParsedUniqueId = DD.uniqueId, void 0 !== DD.parentId && (pD._waitingParentId = DD.parentId),  … [truncated]
```

#### 876. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7679)

```diff
-             Am = (0, om.c)("BABYLON.Animation");
+             sD = (0, fD.e)("BABYLON.Animation");
```

#### 877. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7682)

```diff
-         Em.c.ParseAnimationRanges(hm, mm, Tm)
+         UD.b.ParseAnimationRanges(pD, DD, zD)
```

#### 878. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7690)

```diff
-     }(hm = Ym.prototype).WC ?? (hm.WC = (0, Om.f)("TransformNode", "WC")), (Am = Ym.prototype).applyImpulse ?? (Am.applyImpulse = (0, Om.f)("TransformNode", "applyImpulse")), (am = Ym.prototype).applyAngularImpulse ?? (am.applyAngularImpulse = (0, Om.f)("TransformNode", "applyAng … [truncated]
+     }(pD = BD.prototype).Vk ?? (pD.Vk = (0, ID.h)("TransformNode", "Vk")), (sD = BD.prototype).applyImpulse ?? (sD.applyImpulse = (0, ID.h)("TransformNode", "applyImpulse")), (KD = BD.prototype).applyAngularImpulse ?? (KD.applyAngularImpulse = (0, ID.h)("TransformNode", "applyAng … [truncated]
```

#### 879. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7692)

```diff
-   40518: (mm, Tm, fm) => {
+   40342: (DD, zD, wD) => {
```

#### 880. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7746` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7746) · [Before (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7746)

```diff
-       d: () => Dm,
+       c: () => cD,
```

#### 881. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7748` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/251.js#L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/251.js#L7748)

```diff
-       h: () => xm
+       j: () => rD
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (503 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   40251: (mm, Tm, fm) => {
+   40066: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L6-L9)

```diff
-       c: () => wm,
-       g: () => Ym,
-       i: () => im,
-       m: () => Dm
+       b: () => LD,
+       e: () => BD,
+       h: () => gD,
+       k: () => cD
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L11-L14)

```diff
-     var hm = fm(40045),
-       Am = fm(38766),
-       am = fm(40180),
-       xm = fm(40091);
+     var pD = wD(39849),
+       sD = wD(38662),
+       KD = wD(39984),
+       rD = wD(39898);
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, xm.b)(), mm && mm.wG ? this._engine = mm.wG().dO() : this._engine = mm, this._updatable = fm, this._instanced = wm, this._divisor = im || 1, this._label = Rm, Tm instanceof hm.e ? (this._data = null, this._buffer = Tm) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, rD.b)(), DD && DD.Ul ? this._engine = DD.Ul().iI() : this._engine = DD, this._updatable = wD, this._instanced = LD, this._divisor = gD || 1, this._label = RD, zD instanceof pD.d ? (this._data = null, this._buffer = zD) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L31-L32)

```diff
-         const wm = am ? Tm : Tm * Float32Array.BYTES_PER_ELEMENT,
-           im = hm ? am ? hm : hm * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const LD = KD ? zD : zD * Float32Array.BYTES_PER_ELEMENT,
+           gD = pD ? KD ? pD : pD * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L55-L56)

```diff
-           if (this._buffer.yp > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.yp, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.yp, void 0, this._label));
-           Am.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.bA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.bA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.bA, void 0, this._label));
+           sD.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, mm, hm ? Tm : Tm * Float32Array.BYTES_PER_ELEMENT, fm ? fm * this.byteStride : void 0), this._data = 0 === Tm && void 0 === fm ? mm : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, DD, pD ? zD : zD * Float32Array.BYTES_PER_ELEMENT, wD ? wD * this.byteStride : void 0), this._data = 0 === zD && void 0 === wD ? DD : null)
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L97-L98)

```diff
-         const Km = (0, am.s)(this.type);
-         jm ? (this._size = om || (xm ? xm / Km : im(fm)), this.byteStride = xm || this._buffer.byteStride || this._size * Km, this.byteOffset = Em || 0) : (this._size = om || xm || im(fm), this.byteStride = xm ? xm * Km : this._buffer.byteStride || this._size * Km, this.byteOffse … [truncated]
+         const OD = (0, KD.n)(this.type);
+         hD ? (this._size = fD || (rD ? rD / OD : gD(wD)), this.byteStride = rD || this._buffer.byteStride || this._size * OD, this.byteOffset = UD || 0) : (this._size = fD || rD || gD(wD), this.byteStride = rD ? rD * OD : this._buffer.byteStride || this._size * OD, this.byteOffse … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${mm}'`)
+             throw new Error(`Invalid vertex buffer type '${DD}'`)
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L139)

```diff
-         return fm ? (0, am.o)(fm, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, mm, Tm) : null
+         return wD ? (0, KD.m)(wD, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, DD, zD) : null
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L148)

```diff
-         return this.byteStride / (0, am.s)(this.type)
+         return this.byteStride / (0, KD.n)(this.type)
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L150-L151)

```diff
-       ifm() {
-         return this.byteOffset / (0, am.s)(this.type)
+       VwD() {
+         return this.byteOffset / (0, KD.n)(this.type)
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, am.s)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, KD.n)(this.type) : this._size
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L213)

```diff
-       return (0, am.s)(mm)
+       return (0, KD.n)(DD)
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L223)

```diff
-       return (0, am.o)(mm, Tm, fm, hm, Am, xm, wm, Dm)
+       return (0, KD.m)(DD, zD, wD, pD, sD, rD, LD, cD)
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L232)

```diff
-   40045: (mm, Tm, fm) => {
+   39849: (DD, zD, wD) => {
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L234)

```diff
-       e: () => hm
+       d: () => pD
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L241)

```diff
-         this.references = 0, this.yp = 0, this.is32Bits = !1, this.uniqueId = hm._Counter++
+         this.references = 0, this.bA = 0, this.is32Bits = !1, this.uniqueId = pD._Counter++
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L246)

```diff
-   40242: (mm, Tm, fm) => {
+   40063: (DD, zD, wD) => {
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L248)

```diff
-       e: () => am
+       c: () => KD
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L250-L251)

```diff
-     var hm = fm(37185),
-       Am = fm(40251);
+     var pD = wD(37079),
+       sD = wD(40066);
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L259-L260)

```diff
-         if (!this.pickedMesh || Tm && !this.pickedMesh.isVerticesDataPresent(Am.m.NormalKind)) return null;
-         let fm, am = this.pickedMesh.xhm();
+         if (!this.pickedMesh || zD && !this.pickedMesh.isVerticesDataPresent(sD.k.NormalKind)) return null;
+         let wD, KD = this.pickedMesh.XpD();
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L262-L264)

```diff
-         const xm = hm.j.WO[0],
-           wm = hm.j.WO[1],
-           Dm = hm.j.WO[2];
+         const rD = pD.n.WI[0],
+           LD = pD.n.WI[1],
+           cD = pD.n.WI[2];
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L266-L270)

```diff
-           const mm = this.pickedMesh.getVerticesData(Am.m.NormalKind);
-           let Tm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId], xm) : xm.Z8(mm[3 * this.faceId * 3], mm[3 * this.faceId * 3 + 1], mm[3 * this.faceId * 3 + 2]),
-             im = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 1], wm) : wm.Z8(mm[3 * (3 * this.faceId + 1)], mm[3 * (3 * this.faceId + 1) + 1], mm[3 * (3 * this.faceId + 1) + 2]),
-             Rm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 2], Dm) : Dm.Z8(mm[3 * (3 * this.faceId + 2)], mm[3 * (3 * this.faceId + 2) + 1], mm[3 * (3 * this.faceId + 2) + 2]);
-           Tm = Tm.scale(this.bu), im = im.scale(this.bv), Rm = Rm.scale(1 - this.bu - this.bv), fm = new hm.p(Tm.x + im.x + Rm.x, Tm.y + im.y + Rm.y, Tm.z + im.z + Rm.z)
+           const DD = this.pickedMesh.getVerticesData(sD.k.NormalKind);
+           let zD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId], rD) : rD.Z2(DD[3 * this.faceId * 3], DD[3 * this.faceId * 3 + 1], DD[3 * this.faceId * 3 + 2]),
+             gD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 1], LD) : LD.Z2(DD[3 * (3 * this.faceId + 1)], DD[3 * (3 * this.faceId + 1) + 1], DD[3 * (3 * this.faceId + 1) + 2]),
+             RD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 2], cD) : cD.Z2(DD[3 * (3 * this.faceId + 2)], DD[3 * (3 * this.faceId + 2) + 1], DD[3 * (3 * this.faceId + 2) + 2]);
+           zD = zD.scale(this.bu), gD = gD.scale(this.bv), RD = RD.scale(1 - this.bu - this.bv), wD = new pD.s(zD.x + gD.x + RD.x, zD.y + gD.y + RD.y, zD.z + gD.z + RD.z)
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L272-L275)

```diff
-           const mm = this.pickedMesh.getVerticesData(Am.m.PositionKind),
-             Tm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId], xm) : xm.Z8(mm[3 * this.faceId * 3], mm[3 * this.faceId * 3 + 1], mm[3 * this.faceId * 3 + 2]),
-             im = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 1], wm) : wm.Z8(mm[3 * (3 * this.faceId + 1)], mm[3 * (3 * this.faceId + 1) + 1], mm[3 * (3 * this.faceId + 1) + 2]),
-             Rm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 2], Dm) : Dm.Z8(mm[3 * (3 * this.faceId + 2)], mm[3 * (3 * this.faceId + 2) + 1], mm[3 * (3 * this.faceId + 2) + 2]),
+           const DD = this.pickedMesh.getVerticesData(sD.k.PositionKind),
+             zD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId], rD) : rD.Z2(DD[3 * this.faceId * 3], DD[3 * this.faceId * 3 + 1], DD[3 * this.faceId * 3 + 2]),
+             gD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 1], LD) : LD.Z2(DD[3 * (3 * this.faceId + 1)], DD[3 * (3 * this.faceId + 1) + 1], DD[3 * (3 * this.faceId + 1) + 2]),
+             RD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 2], cD) : cD.Z2(DD[3 * (3 * this.faceId + 2)], DD[3 * (3 * this.faceId + 2) + 1], DD[3 * (3 * this.faceId + 2) + 2]),
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L278)

```diff
-           fm = hm.p.Cross(pm, Em)
+           wD = pD.s.Cross(AD, UD)
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L285-L286)

```diff
-               const mm = hm.j.Matrix[0];
-               hm.e.FromArrayToRef(fm, Am, mm), hm.p.TransformNormalToRef(Tm, mm, Tm)
+               const DD = pD.n.Matrix[0];
+               pD.e.FromArrayToRef(wD, sD, DD), pD.s.TransformNormalToRef(zD, DD, zD)
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L290)

```diff
-           mm.nonUniformScaling && (hm.j.Matrix[0].ZZ(fm), fm = hm.j.Matrix[0], fm.setTranslationFromFloats(0, 0, 0), fm.invert(), fm.transposeToRef(hm.j.Matrix[1]), fm = hm.j.Matrix[1]), hm.p.TransformNormalToRef(Tm, fm, Tm)
+           DD.nonUniformScaling && (pD.n.Matrix[0].pC(wD), wD = pD.n.Matrix[0], wD.setTranslationFromFloats(0, 0, 0), wD.invert(), wD.transposeToRef(pD.n.Matrix[1]), wD = pD.n.Matrix[1]), pD.s.TransformNormalToRef(zD, wD, zD)
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L293-L294)

```diff
-           const Tm = hm.j.WO[0].ZZ(fm);
-           mm || im(this.pickedMesh, Tm), hm.p.Dot(Tm, this.ray.direction) > 0 && fm.negateInPlace()
+           const zD = pD.n.WI[0].pC(wD);
+           DD || gD(this.pickedMesh, zD), pD.s.Dot(zD, this.ray.direction) > 0 && wD.negateInPlace()
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L299)

```diff
-         let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am.m.UVKind;
+         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sD.k.UVKind;
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L301)

```diff
-         const Tm = this.pickedMesh.xhm();
+         const zD = this.pickedMesh.XpD();
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L305-L308)

```diff
-         let am = hm.l.FromArray(fm, 2 * Tm[3 * this.faceId]),
-           xm = hm.l.FromArray(fm, 2 * Tm[3 * this.faceId + 1]),
-           wm = hm.l.FromArray(fm, 2 * Tm[3 * this.faceId + 2]);
-         return am = am.scale(this.bu), xm = xm.scale(this.bv), wm = wm.scale(1 - this.bu - this.bv), new hm.l(am.x + xm.x + wm.x, am.y + xm.y + wm.y)
+         let KD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId]),
+           rD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId + 1]),
+           LD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId + 2]);
+         return KD = KD.scale(this.bu), rD = rD.scale(this.bv), LD = LD.scale(1 - this.bu - this.bv), new pD.r(KD.x + rD.x + LD.x, KD.y + rD.y + LD.y)
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L312)

```diff
-   40091: (mm, Tm, fm) => {
+   39898: (DD, zD, wD) => {
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L316)

```diff
-     var hm = fm(39956);
+     var pD = wD(39766);
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(mm), fm = mm.is32Bits ? Tm instanceof Uint32Array ? Tm : new Uint32Array(Tm) : Tm instanceof Uint16Array ? Tm : new Uint16Array(Tm), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, fm, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(DD), wD = DD.is32Bits ? zD instanceof Uint32Array ? zD : new Uint32Array(zD) : zD instanceof Uint16Array ? zD : new Uint16Array(zD), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, wD, … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L330)

```diff
-   40055: (mm, Tm, fm) => {
+   39858: (DD, zD, wD) => {
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L369)

```diff
-   40014: (mm, Tm, fm) => {
+   39826: (DD, zD, wD) => {
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L371)

```diff
-       b: () => Vm
+       c: () => nD
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L373-L378)

```diff
-     var hm = fm(37203),
-       Am = fm(39958),
-       am = fm(37201),
-       xm = fm(38766),
-       wm = fm(37199),
-       Dm = fm(40020);
+     var pD = wD(37119),
+       sD = wD(39771),
+       KD = wD(37110),
+       rD = wD(38662),
+       LD = wD(37103),
+       cD = wD(39832);
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L612-L616)

```diff
-     var Em = fm(40024),
-       om = fm(39993),
-       Om = fm(39942),
-       Ym = fm(39973),
-       qm = fm(39986);
+     var UD = wD(39837),
+       fD = wD(39808),
+       ID = wD(39761),
+       BD = wD(39785),
+       GD = wD(39800);
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L625)

```diff
-       if ((0, Ym.p)()) {
+       if ((0, BD.h)()) {
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L652)

```diff
-       get fhm() {
+       get OpD() {
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L655)

```diff
-       set fhm(mm) {
+       set OpD(DD) {
```

#### 44. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L677)

```diff
-         if (mm) return this.isNDCHalfZRange ? mm.IS_NDC_HALF_ZRANGE = "" : delete mm.IS_NDC_HALF_ZRANGE, this.fhm ? mm.USE_REVERSE_DEPTHBUFFER = "" : delete mm.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? mm.USE_EXACT_SRGB_CONVERSIONS = "" : delete mm.USE_EXACT_SR … [truncated]
+         if (DD) return this.isNDCHalfZRange ? DD.IS_NDC_HALF_ZRANGE = "" : delete DD.IS_NDC_HALF_ZRANGE, this.OpD ? DD.USE_REVERSE_DEPTHBUFFER = "" : delete DD.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? DD.USE_EXACT_SRGB_CONVERSIONS = "" : delete DD.USE_EXACT_SR … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L680)

```diff
-           return this.isNDCHalfZRange && (mm += "#define IS_NDC_HALF_ZRANGE"), this.fhm && (mm && (mm += "\n"), mm += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (mm && (mm += "\n"), mm += "#define USE_EXACT_SRGB_CONVERSIONS"), mm
+           return this.isNDCHalfZRange && (DD += "#define IS_NDC_HALF_ZRANGE"), this.OpD && (DD && (DD += "\n"), DD += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (DD && (DD += "\n"), DD += "#define USE_EXACT_SRGB_CONVERSIONS"), DD
```

#### 46. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L696)

```diff
-         Am.e.ResetCache()
+         sD.c.ResetCache()
```

#### 47. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L702)

```diff
-         xm.b.Warn(this.name + " context successfully restored."), this.UO.notifyObservers(this), this._contextWasLost = !1
+         rD.d.Warn(this.name + " context successfully restored."), this.SI.notifyObservers(this), this._contextWasLost = !1
```

#### 48. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L763)

```diff
-             mm && mm(this.customAnimationFrameRequester.FO), delete this.customAnimationFrameRequester.FO
+             DD && DD(this.customAnimationFrameRequester.NI), delete this.customAnimationFrameRequester.NI
```

#### 49. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L767)

```diff
-           if (this._frameHandler = 0, (0, Ym.p)()) {
+           if (this._frameHandler = 0, (0, BD.h)()) {
```

#### 50. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L796)

```diff
-           (this.aJ || !this.renderEvenInBackground && this._windowIsBackground) && (mm = !1), mm && (this.bI(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.HI())
+           (this.EX || !this.renderEvenInBackground && this._windowIsBackground) && (DD = !1), DD && (this.aJ(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.vJ())
```

#### 51. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.FO = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.F … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.NI = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.N … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L826)

```diff
-         this._depthCullingState.zOffset = this.fhm ? -mm : mm
+         this._depthCullingState.zOffset = this.OpD ? -DD : DD
```

#### 53. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L830)

```diff
-         return this.fhm ? -mm : mm
+         return this.OpD ? -DD : DD
```

#### 54. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.fhm ? -mm : mm
+         this._depthCullingState.zOffsetUnits = this.OpD ? -DD : DD
```

#### 55. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L837)

```diff
-         return this.fhm ? -mm : mm
+         return this.OpD ? -DD : DD
```

#### 56. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L840)

```diff
-         return (0, Ym.p)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, BD.h)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 57. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L891)

```diff
-           Jm = Em || new Om.d(this, 1);
+           QD = UD || new ID.e(this, 1);
```

#### 58. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L903)

```diff
-           hm && hm.removePendingData(Jm), mm === cm ? (bm && Jm.onLoadedObservable.remove(bm), am.c.UseFallbackTexture && mm !== am.c.FallbackTexture && this._createTextureBase(am.c.FallbackTexture, Tm, Jm.invertY, hm, Am, null, Dm, im, Rm, pm, Jm), fm = (fm || "Unknown error") + … [truncated]
+           pD && pD.removePendingData(QD), DD === XD ? (xD && QD.onLoadedObservable.remove(xD), KD.d.UseFallbackTexture && DD !== KD.d.FallbackTexture && this._createTextureBase(KD.d.FallbackTexture, zD, QD.invertY, pD, sD, null, cD, gD, RD, AD, QD), wD = (wD || "Unknown error") + … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L906)

```diff
-           }), Dm && Dm(fm, Em)) : (xm.b.Warn(`Failed to load ${mm}, falling back to ${cm}`), this._createTextureBase(cm, Tm, Jm.invertY, hm, Am, wm, Dm, im, Rm, pm, Jm, om, Ym, qm, jm, Im))
+           }), cD && cD(wD, UD)) : (rD.d.Warn(`Failed to load ${DD}, falling back to ${XD}`), this._createTextureBase(XD, zD, QD.invertY, pD, sD, LD, cD, gD, RD, AD, QD, fD, BD, GD, hD, MD))
```

#### 60. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Ym.h)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, BD.c)() ? document : null
```

#### 61. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new im, this._stencilStateComposer = new Rm, this._stencilState = new pm, this._alphaState = new Em.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new gD, this._stencilStateComposer = new RD, this._stencilState = new AD, this._alphaState = new UD.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new hm.c, this.onCanvasFocusObservable = new hm.c, this.onNewSceneAddedObservable = new hm.c, this.onResizeObservable = new hm.c, this.onCanvasPointerOutObservable = new hm.c, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new pD.b, this.onCanvasFocusObservable = new pD.b, this.onNewSceneAddedObservable = new pD.b, this.onResizeObservable = new pD.b, this.onCanvasPointerOutObservable = new pD.b, this.onE … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const Am = (0, Ym.p)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const sD = (0, BD.h)() && window.devicePixelRatio || 1,
```

#### 64. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1024)

```diff
-           const mm = (0, Ym.p)() && window.devicePixelRatio || 1,
+           const DD = (0, BD.h)() && window.devicePixelRatio || 1,
```

#### 65. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1028)

```diff
-         if ((0, Ym.p)() && (0, Ym.h)())
+         if ((0, BD.h)() && (0, BD.c)())
```

#### 66. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1052)

```diff
-         throw (0, om.i)("engine.rawTexture")
+         throw (0, fD.j)("engine.rawTexture")
```

#### 67. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1055)

```diff
-         throw (0, om.i)("engine.rawTexture")
+         throw (0, fD.j)("engine.rawTexture")
```

#### 68. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1058)

```diff
-         throw (0, om.i)("engine.rawTexture")
+         throw (0, fD.j)("engine.rawTexture")
```

#### 69. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1061)

```diff
-         throw (0, om.i)("engine.rawTexture")
+         throw (0, fD.j)("engine.rawTexture")
```

#### 70. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== mm.indexOf("Mobile") || -1 !== mm.indexOf("Mac") && (0, Ym.h)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, Ym.p)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== DD.indexOf("Mobile") || -1 !== DD.indexOf("Mac") && (0, BD.c)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, BD.h)() && window.addEventListener("resize", this._checkForMobile))
```

#### 71. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1115-L1116` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1115-L1116) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1115-L1116)

```diff
-         if (!qm.c.loadImage) throw (0, om.i)("FileTools");
-         return qm.c.loadImage(mm, Tm, fm, hm, Am, am, xm)
+         if (!GD.e.loadImage) throw (0, fD.j)("FileTools");
+         return GD.e.loadImage(DD, zD, wD, pD, sD, KD, rD)
```

#### 72. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1119)

```diff
-         const xm = (0, qm.j)(mm, Tm, fm, hm, Am, am);
+         const rD = (0, GD.k)(DD, zD, wD, pD, sD, KD);
```

#### 73. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1125-L1126` → after: `L1125-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1125-L1126) · [Before (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1125-L1126)

```diff
-         if (qm.c.loadFile) return qm.c.loadFile(mm, Tm, fm, hm, Am, am);
-         throw (0, om.i)("FileTools")
+         if (GD.e.loadFile) return GD.e.loadFile(DD, zD, wD, pD, sD, KD);
+         throw (0, fD.j)("FileTools")
```

#### 74. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1132)

```diff
-         this.releaseComputeEffects?.(), Am.e.ResetCache();
+         this.releaseComputeEffects?.(), sD.c.ResetCache();
```

#### 75. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1134-L1136` → after: `L1134-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1134-L1136) · [Before (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1134-L1136)

```diff
-         this._boundRenderFunction = null, this.iG.notifyObservers(this), this.iG.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
-         const mm = am.c.Instances.indexOf(this);
-         mm >= 0 && am.c.Instances.splice(mm, 1), am.c.Instances.length || (am.c.OnEnginesDisposedObservable.notifyObservers(this), am.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
+         this._boundRenderFunction = null, this.Bl.notifyObservers(this), this.Bl.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         const DD = KD.d.Instances.indexOf(this);
+         DD >= 0 && KD.d.Instances.splice(DD, 1), KD.d.Instances.length || (KD.d.OnEnginesDisposedObservable.notifyObservers(this), KD.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1139)

```diff
-         throw (0, om.i)("LoadingScreen")
+         throw (0, fD.j)("LoadingScreen")
```

#### 77. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1142-L1143` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1142-L1143) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1142-L1143)

```diff
-         for (let fm = 0; fm < am.c.Instances.length; fm++) {
-           const hm = am.c.Instances[fm];
+         for (let wD = 0; wD < KD.d.Instances.length; wD++) {
+           const pD = KD.d.Instances[wD];
```

#### 78. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1153)

```diff
-   39960: (mm, Tm, fm) => {
+   39776: (DD, zD, wD) => {
```

#### 79. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1170)

```diff
-   39978: (mm, Tm, fm) => {
+   39793: (DD, zD, wD) => {
```

#### 80. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1173-L1179` → after: `L1174-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1174-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1174-L1178) · [Before (L1173-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1173-L1179)

```diff
-       h: () => Im,
-       i: () => Om,
-       k: () => om,
-       m: () => Ym,
-       o: () => Vm,
-       q: () => pm,
-       s: () => im,
+       g: () => ID,
+       j: () => fD,
+       l: () => BD,
+       p: () => nD,
+       t: () => AD,
```

#### 81. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1182` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1181-L1182) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1182)

```diff
-       B: () => wm
+       C: () => cD,
+       F: () => LD
```

#### 82. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1222)

```diff
-         const Am = Tm.ahm();
+         const sD = zD.QpD();
```

#### 83. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1318)

```diff
-         this._cacheMatrix(mm, Tm) && (this.engine.setMatrices(this._uniforms[mm], Tm.ahm()) || (this._valueCache[mm] = null))
+         this._cacheMatrix(DD, zD) && (this.engine.setMatrices(this._uniforms[DD], zD.QpD()) || (this._valueCache[DD] = null))
```

#### 84. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1367)

```diff
-     var Am = fm(39986);
+     var sD = wD(39800);
```

#### 85. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1465)

```diff
-       return jm((0, Am.g)(mm, fm, hm), Tm, am, xm)
+       return hD((0, sD.i)(DD, wD, pD), zD, KD, rD)
```

#### 86. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${Tm} shader object. gl error=${Am}, gl isContextLost=${fm.isContextLost()}, _contextWasLost=${hm}`)
+         throw new Error(`Something went wrong while creating a gl ${zD} shader object. gl error=${sD}, gl isContextLost=${wD.isContextLost()}, _contextWasLost=${pD}`)
```

#### 87. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1492)

```diff
-   39956: (mm, Tm, fm) => {
+   39766: (DD, zD, wD) => {
```

#### 88. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1496-L1501)

```diff
-     var hm = fm(39958),
-       Am = fm(39978),
-       am = fm(40014),
-       xm = fm(40030),
-       wm = fm(38766),
-       Dm = fm(39973);
+     var pD = wD(39771),
+       sD = wD(39793),
+       KD = wD(39826),
+       rD = wD(39843),
+       LD = wD(38662),
+       cD = wD(39785);
```

#### 89. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1542-L1549)

```diff
-     var Em = fm(40036),
-       om = fm(40052),
-       Om = fm(40055),
-       Ym = fm(39942),
-       qm = fm(39986),
-       jm = fm(39968),
-       Vm = fm(40064),
-       Im = fm(40024);
+     var UD = wD(39847),
+       fD = wD(39852),
+       ID = wD(39858),
+       BD = wD(39761),
+       GD = wD(39800),
+       hD = wD(39779),
+       nD = wD(39867),
+       MD = wD(39837);
```

#### 90. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1551)

```diff
-     class Qm extends am.b {
+     class JD extends KD.c {
```

#### 91. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1562)

```diff
-         return hm.e.ShadersRepository
+         return pD.c.ShadersRepository
```

#### 92. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1565)

```diff
-         hm.e.ShadersRepository = mm
+         pD.c.ShadersRepository = DD
```

#### 93. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1568)

```diff
-         return this.zY > 1 && !this.disableUniformBuffers
+         return this.AB > 1 && !this.disableUniformBuffers
```

#### 94. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1615)

```diff
-               (0, Am.y)(this._gl)
+               (0, sD.C)(this._gl)
```

#### 95. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1617)

```diff
-               mm.preventDefault(), this._contextWasLost = !0, (0, Am.y)(this._gl), wm.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               DD.preventDefault(), this._contextWasLost = !0, (0, sD.C)(this._gl), LD.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 96. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.zY > 1 ? new pm : new im;
-         const xm = `Babylon.js v${Qm.Version}`;
-         wm.b.Log(xm + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", xm);
-         const Dm = (0, Am.B)(this._gl);
+         this._shaderProcessor = this.AB > 1 ? new AD : new gD;
+         const rD = `Babylon.js v${JD.Version}`;
+         LD.d.Log(rD + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", rD);
+         const cD = (0, sD.F)(this._gl);
```

#### 97. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!Tm, this._alphaState = new Im.d(this._caps.blendParametersPerTarget), Tm && (this._gl.blendEquationSeparateIndexed = Tm.blendEquationSeparateiOES.bind(Tm), this._gl.blendEquationIndexed = Tm.blendEquationiOES.bind(Tm), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!zD, this._alphaState = new MD.c(this._caps.blendParametersPerTarget), zD && (this._gl.blendEquationSeparateIndexed = zD.blendEquationSeparateiOES.bind(zD), this._gl.blendEquationIndexed = zD.blendEquationiOES.bind(zD), this._gl. … [truncated]
```

#### 98. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1861)

```diff
-             if (void 0 !== fm && (0, Vm.i)(fm)) {
+             if (void 0 !== wD && (0, nD.k)(wD)) {
```

#### 99. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1863)

```diff
-               void 0 !== fm && (0, Vm.j)(fm) ? (Qm._TempClearColorUint32[0] = 255 * mm.r, Qm._TempClearColorUint32[1] = 255 * mm.g, Qm._TempClearColorUint32[2] = 255 * mm.b, Qm._TempClearColorUint32[3] = 255 * mm.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qm._TempClearColorUin … [truncated]
+               void 0 !== wD && (0, nD.m)(wD) ? (JD._TempClearColorUint32[0] = 255 * DD.r, JD._TempClearColorUint32[1] = 255 * DD.g, JD._TempClearColorUint32[2] = 255 * DD.b, JD._TempClearColorUint32[3] = 255 * DD.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, JD._TempClearColorUin … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1868)

```diff
-         fm && (this.fhm ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), xm |= this._gl.DEPTH_BUFFER_BIT), hm && (this._gl.clearStencil(Am), xm |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(xm)
+         wD && (this.OpD ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), rD |= this._gl.DEPTH_BUFFER_BIT), pD && (this._gl.clearStencil(sD), rD |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(rD)
```

#### 101. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1871-L1872)

```diff
-         if ((0, Vm.i)(fm)) {
-           const fm = (0, Vm.j)(hm),
+         if ((0, nD.k)(wD)) {
+           const wD = (0, nD.m)(pD),
```

#### 102. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1882)

```diff
-         super.HI(), this._badOS && this.flushFramebuffer()
+         super.vJ(), this._badOS && this.flushFramebuffer()
```

#### 103. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = mm, this._integerMRTAttachmentsMask = !mm.isMulti && mm.texture && (0, Vm.i)(mm.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Dm._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = DD, this._integerMRTAttachmentsMask = !DD.isMulti && DD.texture && (0, nD.k)(DD.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(cD._frameb … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1900)

```diff
-           mm.is3D && (mm.texture.width === Rm.width && mm.texture.height === Rm.height && mm.texture.depth === Rm.depth || wm.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           DD.is3D && (DD.texture.width === RD.width && DD.texture.height === RD.height && DD.texture.depth === RD.depth || LD.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 105. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/252.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/252.js#L1964-L1965)

```diff
-         const hm = new Em.e(fm);
-         return this.bindArrayBuffer(hm), "number" !== typeof mm ? mm instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(mm), Tm), hm.yp = 4 * mm.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, mm, Tm), hm.yp = mm.byteLength) : (this._gl.bufferDa … [truncated]
+         const pD = new UD.b(wD);
+         return this.bindArrayBuffer(pD), "number" !== typeof DD ? DD instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(DD), zD), pD.bA = 4 * DD.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, DD, zD), pD.bA = DD.byteLength) : (this._gl.bufferDa … [truncated]
```
