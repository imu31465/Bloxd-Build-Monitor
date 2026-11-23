# Changed — Bundle Modifications Report (Part 049 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `49 / 137` (**398** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 048](part-048.md) · [Part 050 →](part-050.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (835 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 565. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5588-L5590` → after: `L5588-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5588-L5590) · [Before (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5588-L5590)

```diff
-         if (this.isVerticesDataPresent(hC.k.TangentKind)) {
-           for (ZC = this.getVerticesData(hC.k.TangentKind), wC = 0; wC < ZC.length; wC += 4) iC.r.TransformNormalFromFloatsToRef(ZC[wC], ZC[wC + 1], ZC[wC + 2], CC, QC).normalize().toArray(ZC, wC);
-           this.setVerticesData(hC.k.TangentKind, ZC, this.getVertexBuffer(hC.k.TangentKind).isUpdatable())
+         if (this.isVerticesDataPresent(Ek.l.TangentKind)) {
+           for (Ik = this.getVerticesData(Ek.l.TangentKind), Tk = 0; Tk < Ik.length; Tk += 4) zk.t.TransformNormalFromFloatsToRef(Ik[Tk], Ik[Tk + 1], Ik[Tk + 2], kk, Xk).normalize().toArray(Ik, Tk);
+           this.setVerticesData(Ek.l.TangentKind, Ik, this.getVertexBuffer(Ek.l.TangentKind).isUpdatable())
```

#### 566. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5592` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5592) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5592)

```diff
-         return CC.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Zx = zC, this
+         return kk.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.lK = Fk, this
```

#### 567. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5614` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5614) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5614)

```diff
-           return BC.source = this, BC.doNotCloneChildren = ZC.doNotCloneChildren, BC.clonePhysicsImpostor = ZC.clonePhysicsImpostor, BC.cloneThinInstances = ZC.cloneThinInstances, new OC(CC, this.Km(), BC)
+           return rk.source = this, rk.doNotCloneChildren = Ik.doNotCloneChildren, rk.clonePhysicsImpostor = Ik.clonePhysicsImpostor, rk.cloneThinInstances = Ik.cloneThinInstances, new Dk(kk, this.mG(), rk)
```

#### 568. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5616` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5616) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5616)

```diff
-         return new OC(CC, this.Km(), zC, this, ZC, QC)
+         return new Dk(kk, this.mG(), Fk, this, Ik, Xk)
```

#### 569. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5630` → after: `L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5630) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5630)

```diff
-           const CC = this.Km().meshes;
+           const kk = this.mG().meshes;
```

#### 570. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5644-L5645` → after: `L5644-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5644-L5645) · [Before (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5644-L5645)

```diff
-         const oC = this.Km();
-         return (0, RC.m)(CC, (CC => {
+         const ak = this.mG();
+         return (0, Pk.t)(kk, (kk => {
```

#### 571. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5648` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5648) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5648)

```diff
-             qC = this.mg().createCanvas(fC, oC).getContext("2d");
+             qk = this.Oe().createCanvas(lk, ak).getContext("2d");
```

#### 572. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5656-L5663` → after: `L5656-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5656-L5663) · [Before (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5656-L5663)

```diff
-         if (!this.isVerticesDataPresent(hC.k.PositionKind) || !this.isVerticesDataPresent(hC.k.NormalKind) || !this.isVerticesDataPresent(hC.k.UVKind)) return uC.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
-         const oC = this.getVerticesData(hC.k.PositionKind, !0, !0),
-           qC = this.getVerticesData(hC.k.NormalKind),
-           FC = this.getVerticesData(hC.k.UVKind);
-         let WC = iC.r.Zero();
-         const NC = iC.r.Zero(),
-           MC = iC.n.Zero();
-         bC = bC || iC.n.Zero(), nC = nC || new iC.n(1, 1);
+         if (!this.isVerticesDataPresent(Ek.l.PositionKind) || !this.isVerticesDataPresent(Ek.l.NormalKind) || !this.isVerticesDataPresent(Ek.l.UVKind)) return Nk.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const ak = this.getVerticesData(Ek.l.PositionKind, !0, !0),
+           qk = this.getVerticesData(Ek.l.NormalKind),
+           Lk = this.getVerticesData(Ek.l.UVKind);
+         let tk = zk.t.Zero();
+         const Zk = zk.t.Zero(),
+           jk = zk.p.Zero();
+         ik = ik || zk.p.Zero(), yk = yk || new zk.p(1, 1);
```

#### 573. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5665)

```diff
-           iC.r.FromArrayToRef(oC, gC, WC), iC.r.FromArrayToRef(qC, gC, NC), iC.n.FromArrayToRef(FC, gC / 3 * 2, MC);
+           zk.t.FromArrayToRef(ak, ek, tk), zk.t.FromArrayToRef(qk, ek, Zk), zk.p.FromArrayToRef(Lk, ek / 3 * 2, jk);
```

#### 574. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5670` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5670) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5670)

```diff
-         return KC.e.ComputeNormals(oC, this.CQC(), qC), fC ? (this.setVerticesData(hC.k.PositionKind, oC), this.setVerticesData(hC.k.NormalKind, qC), this.setVerticesData(hC.k.UVKind, FC)) : (this.updateVerticesData(hC.k.PositionKind, oC), this.updateVerticesData(hC.k.NormalKind, … [truncated]
+         return Ok.c.ComputeNormals(ak, this.yXk(), qk), lk ? (this.setVerticesData(Ek.l.PositionKind, ak), this.setVerticesData(Ek.l.NormalKind, qk), this.setVerticesData(Ek.l.UVKind, Lk)) : (this.updateVerticesData(Ek.l.PositionKind, ak), this.updateVerticesData(Ek.l.NormalKind, … [truncated]
```

#### 575. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5677-L5679` → after: `L5677-L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5677-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5677-L5679) · [Before (L5677-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5677-L5679)

```diff
-           const nC = iC.r.FromArray(zC, 3 * CC[bC]),
-             fC = iC.r.FromArray(zC, 3 * CC[bC + 1]),
-             oC = iC.r.FromArray(zC, 3 * CC[bC + 2]),
+           const yk = zk.t.FromArray(Fk, 3 * kk[ik]),
+             lk = zk.t.FromArray(Fk, 3 * kk[ik + 1]),
+             ak = zk.t.FromArray(Fk, 3 * kk[ik + 2]),
```

#### 576. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5682` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5682) · [Before (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5682)

```diff
-             WC = iC.r.Normalize(iC.r.Cross(qC, FC));
+             tk = zk.t.Normalize(zk.t.Cross(qk, Lk));
```

#### 577. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5691` → after: `L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5691) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5691)

```diff
-           ZC = this.CQC(!1, !0),
+           Ik = this.yXk(!1, !0),
```

#### 578. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5700-L5701` → after: `L5700-L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5700-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5700-L5701) · [Before (L5700-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5700-L5701)

```diff
-           bC = this.WE(),
-           nC = this.geometry ? this.Zx.slice(0) : [];
+           ik = this.vR(),
+           yk = this.geometry ? this.lK.slice(0) : [];
```

#### 579. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5706-L5708` → after: `L5706-L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5706-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5706-L5708) · [Before (L5706-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5706-L5708)

```diff
-           if (CC && fC === hC.k.NormalKind) {
-             const CC = this._getFlattenedNormals(ZC, QC[hC.k.PositionKind]);
-             this.setVerticesData(hC.k.NormalKind, CC, zC.isUpdatable(), bC)
+           if (kk && lk === Ek.l.NormalKind) {
+             const kk = this._getFlattenedNormals(Ik, Xk[Ek.l.PositionKind]);
+             this.setVerticesData(Ek.l.NormalKind, kk, Fk.isUpdatable(), ik)
```

#### 580. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5715` → after: `L5715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5715) · [Before (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5715)

```diff
-             QC.YnC(wC(bC, 3));
+             Xk.byk(Tk(ik, 3));
```

#### 581. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5730-L5731` → after: `L5730-L5731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5730-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5730-L5731) · [Before (L5730-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5730-L5731)

```diff
-           const CC = fC.WE();
-           mC.d.AddToMesh(fC.materialIndex, fC.indexStart, fC.indexCount, fC.indexStart, fC.indexCount, this).setBoundingInfo(CC)
+           const kk = lk.vR();
+           pk.b.AddToMesh(lk.materialIndex, lk.indexStart, lk.indexCount, lk.indexStart, lk.indexCount, this).setBoundingInfo(kk)
```

#### 582. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5743` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5743) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5743)

```diff
-         const zC = KC.e.ExtractFromMesh(this);
+         const Fk = Ok.c.ExtractFromMesh(this);
```

#### 583. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5745` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5745) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5745)

```diff
-         if (CC && this.isVerticesDataPresent(hC.k.NormalKind) && zC.normals) {
+         if (kk && this.isVerticesDataPresent(Ek.l.NormalKind) && Fk.normals) {
```

#### 584. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5747` → after: `L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5747) · [Before (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5747)

```diff
-           this.setVerticesData(hC.k.NormalKind, zC.normals, this.isVertexBufferUpdatable(hC.k.NormalKind))
+           this.setVerticesData(Ek.l.NormalKind, Fk.normals, this.isVertexBufferUpdatable(Ek.l.NormalKind))
```

#### 585. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5752)

```diff
-           this.setIndices(zC.indices, null, this.isVertexBufferUpdatable(hC.k.PositionKind), !0)
+           this.setIndices(Fk.indices, null, this.isVertexBufferUpdatable(Ek.l.PositionKind), !0)
```

#### 586. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5758` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5758) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5758)

```diff
-         const zC = KC.e.ExtractFromMesh(this),
+         const Fk = Ok.c.ExtractFromMesh(this),
```

#### 587. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5769-L5771` → after: `L5769-L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5769-L5771) · [Before (L5769-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5769-L5771)

```diff
-           const FC = new iC.r(0, 0, 0),
-             WC = new iC.r(0, 0, 0),
-             NC = new iC.n(0, 0),
+           const Lk = new zk.t(0, 0, 0),
+             tk = new zk.t(0, 0, 0),
+             Zk = new zk.p(0, 0),
```

#### 588. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5797-L5798` → after: `L5797-L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5797-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5797-L5798) · [Before (L5797-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5797-L5798)

```diff
-           zC.indices = MC, zC.applyToMesh(this, this.isVertexBufferUpdatable(hC.k.PositionKind))
-         } else uC.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
+           Fk.indices = jk, Fk.applyToMesh(this, this.isVertexBufferUpdatable(Ek.l.PositionKind))
+         } else Nk.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
```

#### 589. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5801` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5801) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5801)

```diff
-         const CC = KC.e.ExtractFromMesh(this),
+         const kk = Ok.c.ExtractFromMesh(this),
```

#### 590. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5810` → after: `L5810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5810) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5810)

```diff
-         if (void 0 === ZC || void 0 === QC || null === ZC || null === QC) uC.c.Warn("VertexData contains empty entries");
+         if (void 0 === Ik || void 0 === Xk || null === Ik || null === Xk) Nk.e.Warn("VertexData contains empty entries");
```

#### 591. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5851)

```diff
-           KC.e.ComputeNormals(qC, FC, JC), CC.positions = qC, CC.indices = FC, CC.normals = JC, null !== zC && void 0 !== zC && (CC.uvs = WC), null !== wC && void 0 !== wC && (CC.colors = NC), null !== bC && void 0 !== bC && (CC.matricesIndices = MC), null !== nC && void 0 !== nC … [truncated]
+           Ok.c.ComputeNormals(qk, Lk, sk), kk.positions = qk, kk.indices = Lk, kk.normals = sk, null !== Fk && void 0 !== Fk && (kk.uvs = tk), null !== Tk && void 0 !== Tk && (kk.colors = Zk), null !== ik && void 0 !== ik && (kk.matricesIndices = jk), null !== yk && void 0 !== yk … [truncated]
```

#### 592. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5855` → after: `L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5855) · [Before (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5855)

```diff
-         throw (0, sC.i)("InstancedMesh")
+         throw (0, Wk.j)("InstancedMesh")
```

#### 593. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5858` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5858) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5858)

```diff
-         throw (0, sC.i)("PhysicsImpostor")
+         throw (0, Wk.j)("PhysicsImpostor")
```

#### 594. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5871-L5872` → after: `L5871-L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5871-L5872) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5871-L5872)

```diff
-         const zC = this.CQC(),
-           ZC = this.getVerticesData(hC.k.PositionKind);
+         const Fk = this.yXk(),
+           Ik = this.getVerticesData(Ek.l.PositionKind);
```

#### 595. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5875` → after: `L5875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5875) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5875)

```diff
-         for (let bC = 0; bC < ZC.length; bC += 3) QC.push(iC.r.FromArray(ZC, bC));
+         for (let ik = 0; ik < Ik.length; ik += 3) Xk.push(zk.t.FromArray(Ik, ik));
```

#### 596. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5877` → after: `L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5877) · [Before (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5877)

```diff
-         return GC.d.SyncAsyncForLoop(QC.length, 40, (CC => {
+         return xk.b.SyncAsyncForLoop(Xk.length, 40, (kk => {
```

#### 597. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5889-L5890` → after: `L5889-L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5889-L5890) · [Before (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5889-L5890)

```diff
-           const ZC = this.Zx.slice(0);
-           this.setIndices(zC), this.Zx = ZC, CC && CC(this)
+           const Ik = this.lK.slice(0);
+           this.setIndices(Fk), this.lK = Ik, kk && kk(this)
```

#### 598. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5895` → after: `L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5895) · [Before (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5895)

```diff
-         CC.name = this.name, CC.id = this.id, CC.uniqueId = this.uniqueId, CC.type = this.getClassName(), xC.e && xC.e.HasTags(this) && (CC.tags = xC.e.GetTags(this)), CC.position = this.position.VZC(), this.rotationQuaternion ? CC.rotationQuaternion = this.rotationQuaternion.VZC … [truncated]
+         kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), Qk.d && Qk.d.HasTags(this) && (kk.tags = Qk.d.GetTags(this)), kk.position = this.position.iXk(), this.rotationQuaternion ? kk.rotationQuaternion = this.rotationQuaternion.iXk … [truncated]
```

#### 599. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5897-L5901` → after: `L5897-L5901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5897-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5897-L5901) · [Before (L5897-L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5897-L5901)

```diff
-         if (zC && this.Zx) {
-           CC.geometryUniqueId = zC.uniqueId, CC.geometryId = zC.id, CC.Zx = [];
-           for (let zC = 0; zC < this.Zx.length; zC++) {
-             const ZC = this.Zx[zC];
-             CC.Zx.push({
+         if (Fk && this.lK) {
+           kk.geometryUniqueId = Fk.uniqueId, kk.geometryId = Fk.id, kk.lK = [];
+           for (let Fk = 0; Fk < this.lK.length; Fk++) {
+             const Ik = this.lK[Fk];
+             kk.lK.push({
```

#### 600. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5910)

```diff
-         if (this.material ? this.material.doNotSerialize || (CC.materialUniqueId = this.material.uniqueId, CC.materialId = this.material.id) : (this.material = null, CC.materialUniqueId = this._scene.defaultMaterial.uniqueId, CC.materialId = this._scene.defaultMaterial.id), this. … [truncated]
+         if (this.material ? this.material.doNotSerialize || (kk.materialUniqueId = this.material.uniqueId, kk.materialId = this.material.id) : (this.material = null, kk.materialUniqueId = this._scene.defaultMaterial.uniqueId, kk.materialId = this._scene.defaultMaterial.id), this. … [truncated]
```

#### 601. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5912` → after: `L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5912) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5912)

```diff
-           zC && (CC.physicsMass = zC.getParam("Mq"), CC.physicsFriction = zC.getParam("friction"), CC.physicsRestitution = zC.getParam("Mq"), CC.physicsImpostor = zC.type)
+           Fk && (kk.physicsMass = Fk.getParam("Xq"), kk.physicsFriction = Fk.getParam("friction"), kk.physicsRestitution = Fk.getParam("Xq"), kk.physicsImpostor = Fk.type)
```

#### 602. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5923` → after: `L5923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5923) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5923)

```diff
-             tS: zC.tS,
+             gw: Fk.gw,
```

#### 603. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5925-L5926` → after: `L5925-L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5925-L5926) · [Before (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5925-L5926)

```diff
-             position: zC.position.VZC(),
-             sq: zC.sq.VZC()
+             position: Fk.position.iXk(),
+             ci: Fk.ci.iXk()
```

#### 604. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5928` → after: `L5928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5928) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5928)

```diff
-           if (zC.parent && zC.parent._serializeAsParent(QC), zC.rotationQuaternion ? QC.rotationQuaternion = zC.rotationQuaternion.VZC() : zC.rotation && (QC.rotation = zC.rotation.VZC()), this.Km()._getComponent(TC.b.NAME_PHYSICSENGINE)) {
+           if (Fk.parent && Fk.parent._serializeAsParent(Xk), Fk.rotationQuaternion ? Xk.rotationQuaternion = Fk.rotationQuaternion.iXk() : Fk.rotation && (Xk.rotation = Fk.rotation.iXk()), this.mG()._getComponent(fk.b.NAME_PHYSICSENGINE)) {
```

#### 605. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5930` → after: `L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5930) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5930)

```diff
-             CC && (QC.physicsMass = CC.getParam("Mq"), QC.physicsFriction = CC.getParam("friction"), QC.physicsRestitution = CC.getParam("Mq"), QC.physicsImpostor = CC.type)
+             kk && (Xk.physicsMass = kk.getParam("Xq"), Xk.physicsFriction = kk.getParam("friction"), Xk.physicsRestitution = kk.getParam("Xq"), Xk.physicsImpostor = kk.type)
```

#### 606. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5932` → after: `L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5932) · [Before (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5932)

```diff
-           zC.metadata && (QC.metadata = zC.metadata), zC.actionManager && (QC.actions = zC.actionManager.serialize(zC.name)), CC.instances.push(QC), cC.d.AppendSerializedAnimations(zC, QC), QC.np = zC.serializeAnimationRanges()
+           Fk.metadata && (Xk.metadata = Fk.metadata), Fk.actionManager && (Xk.actions = Fk.actionManager.serialize(Fk.name)), kk.instances.push(Xk), Ck.b.AppendSerializedAnimations(Fk, Xk), Xk.nZ = Fk.serializeAnimationRanges()
```

#### 607. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5938)

```diff
-             enablePicking: this.AzC
+             enablePicking: this.vFk
```

#### 608. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5948` → after: `L5948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5948) · [Before (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5948)

```diff
-         return cC.d.AppendSerializedAnimations(this, CC), CC.np = this.serializeAnimationRanges(), CC.layerMask = this.layerMask, CC.alphaIndex = this.alphaIndex, CC.hasVertexAlpha = this.hasVertexAlpha, CC.overlayAlpha = this.overlayAlpha, CC.overlayColor = this.overlayColor.VZC … [truncated]
+         return Ck.b.AppendSerializedAnimations(this, kk), kk.nZ = this.serializeAnimationRanges(), kk.layerMask = this.layerMask, kk.alphaIndex = this.alphaIndex, kk.hasVertexAlpha = this.hasVertexAlpha, kk.overlayAlpha = this.overlayAlpha, kk.overlayColor = this.overlayColor.iXk … [truncated]
```

#### 609. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5955` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5955) · [Before (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5955)

```diff
-           if (CC.vertexCount !== this.getTotalVertices()) return uC.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
+           if (kk.vertexCount !== this.getTotalVertices()) return Nk.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
```

#### 610. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5960-L5961` → after: `L5960-L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5960-L5961) · [Before (L5960-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5960-L5961)

```diff
-             if (!QC) return void uC.c.Error("Invalid morph target. Target must have positions.");
-             this.geometry.setVerticesData(hC.k.PositionKind + zC, QC, !1, 3);
+             if (!Xk) return void Nk.e.Error("Invalid morph target. Target must have positions.");
+             this.geometry.setVerticesData(Ek.l.PositionKind + Fk, Xk, !1, 3);
```

#### 611. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5963` → after: `L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5963) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5963)

```diff
-             wC && this.geometry.setVerticesData(hC.k.NormalKind + zC, wC, !1, 3);
+             Tk && this.geometry.setVerticesData(Ek.l.NormalKind + Fk, Tk, !1, 3);
```

#### 612. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5965` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5965) · [Before (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5965)

```diff
-             bC && this.geometry.setVerticesData(hC.k.TangentKind + zC, bC, !1, 3);
+             ik && this.geometry.setVerticesData(Ek.l.TangentKind + Fk, ik, !1, 3);
```

#### 613. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5967` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5967) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5967)

```diff
-             nC && this.geometry.setVerticesData(hC.k.UVKind + "_" + zC, nC, !1, 2);
+             yk && this.geometry.setVerticesData(Ek.l.UVKind + "_" + Fk, yk, !1, 2);
```

#### 614. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5969` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5969) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5969)

```diff
-             fC && this.geometry.setVerticesData(hC.k.UV2Kind + "_" + zC, fC, !1, 2);
+             lk && this.geometry.setVerticesData(Ek.l.UV2Kind + "_" + Fk, lk, !1, 2);
```

#### 615. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5971` → after: `L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5971) · [Before (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5971)

```diff
-             oC && this.geometry.setVerticesData(hC.k.ColorKind + zC, oC, !1, 4)
+             ak && this.geometry.setVerticesData(Ek.l.ColorKind + Fk, ak, !1, 4)
```

#### 616. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5975` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5975) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5975)

```diff
-           for (; this.geometry.isVerticesDataPresent(hC.k.PositionKind + CC);) this.geometry.removeVerticesData(hC.k.PositionKind + CC), this.geometry.isVerticesDataPresent(hC.k.NormalKind + CC) && this.geometry.removeVerticesData(hC.k.NormalKind + CC), this.geometry.isVerticesDa … [truncated]
+           for (; this.geometry.isVerticesDataPresent(Ek.l.PositionKind + kk);) this.geometry.removeVerticesData(Ek.l.PositionKind + kk), this.geometry.isVerticesDataPresent(Ek.l.NormalKind + kk) && this.geometry.removeVerticesData(Ek.l.NormalKind + kk), this.geometry.isVerticesDa … [truncated]
```

#### 617. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5980` → after: `L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5980) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5980)

```diff
-         if (CC.type && "LinesMesh" === CC.type ? QC = OC._LinesMeshParser(CC, zC) : CC.type && "GroundMesh" === CC.type ? QC = OC._GroundMeshParser(CC, zC) : CC.type && "GoldbergMesh" === CC.type ? QC = OC._GoldbergMeshParser(CC, zC) : CC.type && "GreasedLineMesh" === CC.type ? Q … [truncated]
+         if (kk.type && "LinesMesh" === kk.type ? Xk = Dk._LinesMeshParser(kk, Fk) : kk.type && "GroundMesh" === kk.type ? Xk = Dk._GroundMeshParser(kk, Fk) : kk.type && "GoldbergMesh" === kk.type ? Xk = Dk._GoldbergMeshParser(kk, Fk) : kk.type && "GreasedLineMesh" === kk.type ? X … [truncated]
```

#### 618. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5983)

```diff
-               wC = (0, rC.c)("BABYLON.Animation");
+               Tk = (0, ck.b)("BABYLON.Animation");
```

#### 619. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5986` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5986) · [Before (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5986)

```diff
-           eC.d.ParseAnimationRanges(QC, CC, zC)
+           vk.b.ParseAnimationRanges(Xk, kk, Fk)
```

#### 620. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5996)

```diff
-             if (ZC.id && (wC.id = ZC.id), xC.e && (ZC.tags ? xC.e.AddTagsTo(wC, ZC.tags) : xC.e.AddTagsTo(wC, CC.tags)), wC.position = iC.r.FromArray(ZC.position), void 0 !== ZC.metadata && (wC.metadata = ZC.metadata), void 0 !== ZC.parentId && (wC._waitingParentId = ZC.parentId) … [truncated]
+             if (Ik.id && (Tk.id = Ik.id), Qk.d && (Ik.tags ? Qk.d.AddTagsTo(Tk, Ik.tags) : Qk.d.AddTagsTo(Tk, kk.tags)), Tk.position = zk.t.FromArray(Ik.position), void 0 !== Ik.metadata && (Tk.metadata = Ik.metadata), void 0 !== Ik.parentId && (Tk._waitingParentId = Ik.parentId) … [truncated]
```

#### 621. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L5999)

```diff
-                   QC = (0, rC.c)("BABYLON.Animation");
+                   Xk = (0, ck.b)("BABYLON.Animation");
```

#### 622. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6002` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6002) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6002)

```diff
-               eC.d.ParseAnimationRanges(wC, ZC, zC), ZC.autoAnimate && zC.beginAnimation(wC, ZC.autoAnimateFrom, ZC.autoAnimateTo, ZC.autoAnimateLoop, ZC.autoAnimateSpeed || 1)
+               vk.b.ParseAnimationRanges(Tk, Ik, Fk), Ik.autoAnimate && Fk.beginAnimation(Tk, Ik.autoAnimateFrom, Ik.autoAnimateTo, Ik.autoAnimateLoop, Ik.autoAnimateSpeed || 1)
```

#### 623. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6007` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6007) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6007)

```diff
-           if (QC.AzC = !!zC.enablePicking, zC.matrixData ? (QC.E_("matrix", new Float32Array(zC.matrixData), 16, !1), QC._thinInstanceDataStorage.matrixBufferSize = zC.matrixBufferSize, QC._thinInstanceDataStorage.instancesCount = zC.instancesCount) : QC._thinInstanceDataStorage. … [truncated]
+           if (Xk.vFk = !!Fk.enablePicking, Fk.matrixData ? (Xk.K8("matrix", new Float32Array(Fk.matrixData), 16, !1), Xk._thinInstanceDataStorage.matrixBufferSize = Fk.matrixBufferSize, Xk._thinInstanceDataStorage.instancesCount = Fk.instancesCount) : Xk._thinInstanceDataStorage. … [truncated]
```

#### 624. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6009` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6009) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6009)

```diff
-             for (const CC in zC.data) QC.E_(CC, new Float32Array(zC.data[CC]), zC.strides[CC], !1), QC._userThinInstanceBuffersStorage.sizes[CC] = zC.sizes[CC]
+             for (const kk in Fk.data) Xk.K8(kk, new Float32Array(Fk.data[kk]), Fk.strides[kk], !1), Xk._userThinInstanceBuffersStorage.sizes[kk] = Fk.sizes[kk]
```

#### 625. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6017)

```diff
-           const zC = this.getVerticesData(hC.k.PositionKind);
+           const Fk = this.getVerticesData(Ek.l.PositionKind);
```

#### 626. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6019` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6019) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6019)

```diff
-           CC._sourcePositions = new Float32Array(zC), this.isVertexBufferUpdatable(hC.k.PositionKind) || this.setVerticesData(hC.k.PositionKind, zC, !0)
+           kk._sourcePositions = new Float32Array(Fk), this.isVertexBufferUpdatable(Ek.l.PositionKind) || this.setVerticesData(Ek.l.PositionKind, Fk, !0)
```

#### 627. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6026` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6026) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6026)

```diff
-           const zC = this.getVerticesData(hC.k.NormalKind);
+           const Fk = this.getVerticesData(Ek.l.NormalKind);
```

#### 628. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6028` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6028) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6028)

```diff
-           CC._sourceNormals = new Float32Array(zC), this.isVertexBufferUpdatable(hC.k.NormalKind) || this.setVerticesData(hC.k.NormalKind, zC, !0)
+           kk._sourceNormals = new Float32Array(Fk), this.isVertexBufferUpdatable(Ek.l.NormalKind) || this.setVerticesData(Ek.l.NormalKind, Fk, !0)
```

#### 629. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6034-L6038` → after: `L6034-L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6034-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6034-L6038) · [Before (L6034-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6034-L6038)

```diff
-         if (this.geometry._softwareSkinningFrameId == this.Km().getFrameId()) return this;
-         if (this.geometry._softwareSkinningFrameId = this.Km().getFrameId(), !this.isVerticesDataPresent(hC.k.PositionKind)) return this;
-         if (!this.isVerticesDataPresent(hC.k.MatricesIndicesKind)) return this;
-         if (!this.isVerticesDataPresent(hC.k.MatricesWeightsKind)) return this;
-         const zC = this.isVerticesDataPresent(hC.k.NormalKind),
+         if (this.geometry._softwareSkinningFrameId == this.mG().getFrameId()) return this;
+         if (this.geometry._softwareSkinningFrameId = this.mG().getFrameId(), !this.isVerticesDataPresent(Ek.l.PositionKind)) return this;
+         if (!this.isVerticesDataPresent(Ek.l.MatricesIndicesKind)) return this;
+         if (!this.isVerticesDataPresent(Ek.l.MatricesWeightsKind)) return this;
+         const Fk = this.isVerticesDataPresent(Ek.l.NormalKind),
```

#### 630. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6041-L6042` → after: `L6041-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6041-L6042) · [Before (L6041-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6041-L6042)

```diff
-           const CC = this.Zx.slice();
-           this.setPositionsForCPUSkinning(), this.Zx = CC
+           const kk = this.lK.slice();
+           this.setPositionsForCPUSkinning(), this.lK = kk
```

#### 631. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6045` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6045) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6045)

```diff
-         let QC = this.getVerticesData(hC.k.PositionKind);
+         let Xk = this.getVerticesData(Ek.l.PositionKind);
```

#### 632. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6048)

```diff
-         let wC = this.getVerticesData(hC.k.NormalKind);
+         let Tk = this.getVerticesData(Ek.l.NormalKind);
```

#### 633. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6053-L6054` → after: `L6053-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6053-L6054) · [Before (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6053-L6054)

```diff
-         const bC = this.getVerticesData(hC.k.MatricesIndicesKind),
-           nC = this.getVerticesData(hC.k.MatricesWeightsKind);
+         const ik = this.getVerticesData(Ek.l.MatricesIndicesKind),
+           yk = this.getVerticesData(Ek.l.MatricesWeightsKind);
```

#### 634. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6057-L6058)

```diff
-           oC = fC ? this.getVerticesData(hC.k.MatricesIndicesExtraKind) : null,
-           qC = fC ? this.getVerticesData(hC.k.MatricesWeightsExtraKind) : null,
+           ak = lk ? this.getVerticesData(Ek.l.MatricesIndicesExtraKind) : null,
+           qk = lk ? this.getVerticesData(Ek.l.MatricesWeightsExtraKind) : null,
```

#### 635. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6060-L6062` → after: `L6060-L6062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6060-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6060-L6062) · [Before (L6060-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6060-L6062)

```diff
-           WC = iC.r.Zero(),
-           NC = new iC.b,
-           MC = new iC.b;
+           tk = zk.t.Zero(),
+           Zk = new zk.c,
+           jk = new zk.c;
```

#### 636. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6066` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6066) · [Before (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6066)

```diff
-           for (gC = 0; gC < 4; gC++) CC = nC[SC + gC], CC > 0 && (iC.b.FromFloat32ArrayToRefScaled(FC, Math.floor(16 * bC[SC + gC]), CC, MC), NC.addToSelf(MC));
+           for (ek = 0; ek < 4; ek++) kk = yk[wk + ek], kk > 0 && (zk.c.FromFloat32ArrayToRefScaled(Lk, Math.floor(16 * ik[wk + ek]), kk, jk), Zk.addToSelf(jk));
```

#### 637. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6068-L6069)

```diff
-             for (gC = 0; gC < 4; gC++) CC = qC[SC + gC], CC > 0 && (iC.b.FromFloat32ArrayToRefScaled(FC, Math.floor(16 * oC[SC + gC]), CC, MC), NC.addToSelf(MC));
-           iC.r.TransformCoordinatesFromFloatsToRef(ZC._sourcePositions[pC], ZC._sourcePositions[pC + 1], ZC._sourcePositions[pC + 2], NC, WC), WC.toArray(QC, pC), zC && (iC.r.TransformNormalFromFloatsToRef(ZC._sourceNormals[pC], ZC._sourceNormals[pC + 1], ZC._sourceNormals[pC + 2 … [truncated]
+             for (ek = 0; ek < 4; ek++) kk = qk[wk + ek], kk > 0 && (zk.c.FromFloat32ArrayToRefScaled(Lk, Math.floor(16 * ak[wk + ek]), kk, jk), Zk.addToSelf(jk));
+           zk.t.TransformCoordinatesFromFloatsToRef(Ik._sourcePositions[Hk], Ik._sourcePositions[Hk + 1], Ik._sourcePositions[Hk + 2], Zk, tk), tk.toArray(Xk, Hk), Fk && (zk.t.TransformNormalFromFloatsToRef(Ik._sourceNormals[Hk], Ik._sourceNormals[Hk + 1], Ik._sourceNormals[Hk + 2 … [truncated]
```

#### 638. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6071` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6071) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6071)

```diff
-         return this.updateVerticesData(hC.k.PositionKind, QC), zC && this.updateVerticesData(hC.k.NormalKind, wC), this
+         return this.updateVerticesData(Ek.l.PositionKind, Xk), Fk && this.updateVerticesData(Ek.l.NormalKind, Tk), this
```

#### 639. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6077` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6077) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6077)

```diff
-           const CC = QC.WE().boundingBox;
+           const kk = Xk.vR().boundingBox;
```

#### 640. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6084-L6085` → after: `L6084-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6084-L6085) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6084-L6085)

```diff
-           min: iC.r.Zero(),
-           max: iC.r.Zero()
+           min: zk.t.Zero(),
+           max: zk.t.Zero()
```

#### 641. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6090)

```diff
-         return iC.r.Center(zC.min, zC.max)
+         return zk.t.Center(Fk.min, Fk.max)
```

#### 642. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6098)

```diff
-         return (0, JC.l)(OC._MergeMeshesCoroutine(CC, zC, ZC, QC, wC, bC, !1))
+         return (0, sk.n)(Dk._MergeMeshesCoroutine(kk, Fk, Ik, Xk, Tk, ik, !1))
```

#### 643. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6106` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6106) · [Before (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6106)

```diff
-         return await (0, JC.h)(OC._MergeMeshesCoroutine(CC, zC, ZC, QC, wC, bC, !0), (0, JC.d)())
+         return await (0, sk.j)(Dk._MergeMeshesCoroutine(kk, Fk, Ik, Xk, Tk, ik, !0), (0, sk.e)())
```

#### 644. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6119` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6119) · [Before (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6119)

```diff
-             if (ZC += CC[zC].getTotalVertices(), ZC >= 65536) return uC.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
+             if (Ik += kk[Fk].getTotalVertices(), Ik >= 65536) return Nk.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
```

#### 645. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6129-L6130` → after: `L6129-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6129-L6130) · [Before (L6129-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6129-L6130)

```diff
-           if (ZC.ZH) return uC.c.Warn("Cannot merge instance meshes."), null;
-           if (NC !== ZC.sideOrientation) return uC.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
+           if (Ik.rG) return Nk.e.Warn("Cannot merge instance meshes."), null;
+           if (Zk !== Ik.sideOrientation) return Nk.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
```

#### 646. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6137-L6140` → after: `L6137-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6137-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6137-L6140) · [Before (L6137-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6137-L6140)

```diff
-                   for (let CC = 0; CC < zC.r_.length; CC++) qC.indexOf(zC.r_[CC]) < 0 && qC.push(zC.r_[CC]);
-                   for (let QC = 0; QC < ZC.Zx.length; QC++) FC.push(qC.indexOf(zC.r_[ZC.Zx[QC].materialIndex])), WC.push({
-                     start: CC + ZC.Zx[QC].indexStart,
-                     count: ZC.Zx[QC].indexCount
+                   for (let kk = 0; kk < Fk.W8.length; kk++) qk.indexOf(Fk.W8[kk]) < 0 && qk.push(Fk.W8[kk]);
+                   for (let Xk = 0; Xk < Ik.lK.length; Xk++) Lk.push(qk.indexOf(Fk.W8[Ik.lK[Xk].materialIndex])), tk.push({
+                     start: kk + Ik.lK[Xk].indexStart,
+                     count: Ik.lK[Xk].indexCount
```

#### 647. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6144-L6146)

```diff
-                   for (let QC = 0; QC < ZC.Zx.length; QC++) FC.push(qC.indexOf(zC)), WC.push({
-                     start: CC + ZC.Zx[QC].indexStart,
-                     count: ZC.Zx[QC].indexCount
+                   for (let Xk = 0; Xk < Ik.lK.length; Xk++) Lk.push(qk.indexOf(Fk)), tk.push({
+                     start: kk + Ik.lK[Xk].indexStart,
+                     count: Ik.lK[Xk].indexCount
```

#### 648. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6150-L6152` → after: `L6150-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6150-L6152) · [Before (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6150-L6152)

```diff
-                 for (let zC = 0; zC < ZC.Zx.length; zC++) FC.push(0), WC.push({
-                   start: CC + ZC.Zx[zC].indexStart,
-                   count: ZC.Zx[zC].indexCount
+                 for (let Fk = 0; Fk < Ik.lK.length; Fk++) Lk.push(0), tk.push({
+                   start: kk + Ik.lK[Fk].indexStart,
+                   count: Ik.lK[Fk].indexCount
```

#### 649. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6172` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6172) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6172)

```diff
-               vertexData: KC.e.ExtractFromMesh(CC, !1, !1),
+               vertexData: Ok.c.ExtractFromMesh(kk, !1, !1),
```

#### 650. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6187` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6187) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6187)

```diff
-         wC || (wC = new OC(oC.name + "_merged", oC.Km()));
+         Tk || (Tk = new Dk(ak.name + "_merged", ak.mG()));
```

#### 651. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6194-L6195` → after: `L6194-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6194-L6195) · [Before (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6194-L6195)

```diff
-           for (wC.releaseSubMeshes(), zC = 0; zC < WC.length;) mC.d.CreateFromIndices(0, WC[zC].start, WC[zC].count, wC, void 0, !1), zC++;
-           for (const CC of wC.Zx) CC.refreshBoundingInfo();
+           for (Tk.releaseSubMeshes(), Fk = 0; Fk < tk.length;) pk.b.CreateFromIndices(0, tk[Fk].start, tk[Fk].count, Tk, void 0, !1), Fk++;
+           for (const kk of Tk.lK) kk.refreshBoundingInfo();
```

#### 652. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6199-L6201` → after: `L6199-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6199-L6201) · [Before (L6199-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6199-L6201)

```diff
-           const CC = new lC.c(oC.name + "_merged", oC.Km());
-           CC.r_ = qC;
-           for (let zC = 0; zC < wC.Zx.length; zC++) wC.Zx[zC].materialIndex = FC[zC];
+           const kk = new Rk.c(ak.name + "_merged", ak.mG());
+           kk.W8 = qk;
+           for (let Fk = 0; Fk < Tk.lK.length; Fk++) Tk.lK[Fk].materialIndex = Lk[Fk];
```

#### 653. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6220` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6220) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6220)

```diff
-         return this._scene.useRightHandedSystem && this.sideOrientation === HC.d.CounterClockWiseSideOrientation
+         return this._scene.useRightHandedSystem && this.sideOrientation === uk.c.CounterClockWiseSideOrientation
```

#### 654. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6223-L6224` → after: `L6223-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6223-L6224) · [Before (L6223-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6223-L6224)

```diff
-         const zC = this.Km();
-         return zC.forcePointsCloud ? HC.d.PointFillMode : zC.forceWireframe ? HC.d.WireFrameFillMode : this.overrideRenderingFillMode ?? CC
+         const Fk = this.mG();
+         return Fk.forcePointsCloud ? uk.c.PointFillMode : Fk.forceWireframe ? uk.c.WireFrameFillMode : this.overrideRenderingFillMode ?? kk
```

#### 655. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6305-L6306)

```diff
-     OC.FRONTSIDE = KC.e.FRONTSIDE, OC.BACKSIDE = KC.e.BACKSIDE, OC.DOUBLESIDE = KC.e.DOUBLESIDE, OC.DEFAULTSIDE = KC.e.DEFAULTSIDE, OC.NO_CAP = 0, OC.CAP_START = 1, OC.CAP_END = 2, OC.CAP_ALL = 3, OC.NO_FLIP = 0, OC.FLIP_TILE = 1, OC.ROTATE_TILE = 2, OC.FLIP_ROW = 3, OC.ROTATE_RO … [truncated]
-       throw (0, sC.i)("GroundMesh")
+     Dk.FRONTSIDE = Ok.c.FRONTSIDE, Dk.BACKSIDE = Ok.c.BACKSIDE, Dk.DOUBLESIDE = Ok.c.DOUBLESIDE, Dk.DEFAULTSIDE = Ok.c.DEFAULTSIDE, Dk.NO_CAP = 0, Dk.CAP_START = 1, Dk.CAP_END = 2, Dk.CAP_ALL = 3, Dk.NO_FLIP = 0, Dk.FLIP_TILE = 1, Dk.ROTATE_TILE = 2, Dk.FLIP_ROW = 3, Dk.ROTATE_RO … [truncated]
+       throw (0, Wk.j)("GroundMesh")
```

#### 656. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6308)

```diff
-       throw (0, sC.i)("GoldbergMesh")
+       throw (0, Wk.j)("GoldbergMesh")
```

#### 657. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6310)

```diff
-       throw (0, sC.i)("LinesMesh")
+       throw (0, Wk.j)("LinesMesh")
```

#### 658. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6312` → after: `L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6312) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6312)

```diff
-       throw (0, sC.i)("GreasedLineMesh")
+       throw (0, Wk.j)("GreasedLineMesh")
```

#### 659. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6314)

```diff
-       throw (0, sC.i)("GreasedLineRibbonMesh")
+       throw (0, Wk.j)("GreasedLineRibbonMesh")
```

#### 660. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6316)

```diff
-       throw (0, sC.i)("TrailMesh")
+       throw (0, Wk.j)("TrailMesh")
```

#### 661. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6318)

```diff
-       throw (0, sC.i)("GaussianSplattingMesh")
+       throw (0, Wk.j)("GaussianSplattingMesh")
```

#### 662. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6320)

```diff
-       throw (0, sC.i)("GaussianSplattingPartProxyMesh")
+       throw (0, Wk.j)("GaussianSplattingPartProxyMesh")
```

#### 663. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6322` → after: `L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6322) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6322)

```diff
-       throw (0, sC.i)("GaussianSplattingCompoundMesh")
+       throw (0, Wk.j)("GaussianSplattingCompoundMesh")
```

#### 664. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6327-L6328)

```diff
-       kC || (kC = !0, (0, rC.d)("BABYLON.Mesh", OC))
-     }(QC = OC.prototype).UH ?? (QC.UH = (0, sC.f)("Mesh", "UH")), (wC = OC.prototype).simplify ?? (wC.simplify = (0, sC.f)("Mesh", "simplify")), (bC = OC.prototype).thinInstanceAdd ?? (bC.thinInstanceAdd = (0, sC.f)("Mesh", "thinInstanceAdd")), (nC = OC.prototype).thinInstanceAdd … [truncated]
+       Mk || (Mk = !0, (0, ck.f)("BABYLON.Mesh", Dk))
+     }(Xk = Dk.prototype).jR ?? (Xk.jR = (0, Wk.h)("Mesh", "jR")), (Tk = Dk.prototype).simplify ?? (Tk.simplify = (0, Wk.h)("Mesh", "simplify")), (ik = Dk.prototype).thinInstanceAdd ?? (ik.thinInstanceAdd = (0, Wk.h)("Mesh", "thinInstanceAdd")), (yk = Dk.prototype).thinInstanceAdd … [truncated]
```

#### 665. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6330` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6330) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6330)

```diff
-   40235: (CC, zC, ZC) => {
+   40427: (kk, Fk, Ik) => {
```

#### 666. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6332` → after: `L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6332) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6332)

```diff
-       e: () => gC
+       c: () => ek
```

#### 667. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6334-L6343` → after: `L6334-L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6334-L6343) · [Before (L6334-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6334-L6343)

```diff
-     var QC = ZC(39811),
-       wC = ZC(36963),
-       bC = ZC(39959),
-       nC = ZC(39694),
-       fC = ZC(37142),
-       oC = ZC(38507),
-       qC = ZC(39818),
-       FC = ZC(40229),
-       WC = ZC(39872),
-       NC = ZC(40119);
+     var Xk = Ik(40003),
+       Tk = Ik(37153),
+       ik = Ik(40141),
+       yk = Ik(39863),
+       lk = Ik(37331),
+       ak = Ik(38674),
+       qk = Ik(40011),
+       Lk = Ik(40424),
+       tk = Ik(40042),
+       Zk = Ik(40297);
```

#### 668. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6350)

```diff
-           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, FC.g)(this._applyToCoroutine.bind(this)), this.uniqueId = CC._UniqueIdGenerator, CC._UniqueIdGenerator++
+           this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Lk.f)(this._applyToCoroutine.bind(this)), this.uniqueId = kk._UniqueIdGenerator, kk._UniqueIdGenerator++
```

#### 669. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6353-L6354` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6353-L6354) · [Before (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6353-L6354)

```diff
-           switch (CC.length || oC.c.Warn(`Setting vertex data kind '${zC}' with an empty array`), zC) {
-             case bC.k.PositionKind:
+           switch (kk.length || ak.e.Warn(`Setting vertex data kind '${Fk}' with an empty array`), Fk) {
+             case ik.l.PositionKind:
```

#### 670. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6357` → after: `L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6357) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6357)

```diff
-             case bC.k.NormalKind:
+             case ik.l.NormalKind:
```

#### 671. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6360)

```diff
-             case bC.k.TangentKind:
+             case ik.l.TangentKind:
```

#### 672. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6363)

```diff
-             case bC.k.UVKind:
+             case ik.l.UVKind:
```

#### 673. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6366` → after: `L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6366) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6366)

```diff
-             case bC.k.UV2Kind:
+             case ik.l.UV2Kind:
```

#### 674. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6369)

```diff
-             case bC.k.UV3Kind:
+             case ik.l.UV3Kind:
```

#### 675. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6372` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6372) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6372)

```diff
-             case bC.k.UV4Kind:
+             case ik.l.UV4Kind:
```

#### 676. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6375` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6375) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6375)

```diff
-             case bC.k.UV5Kind:
+             case ik.l.UV5Kind:
```

#### 677. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6378` → after: `L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6378) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6378)

```diff
-             case bC.k.UV6Kind:
+             case ik.l.UV6Kind:
```

#### 678. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6381)

```diff
-             case bC.k.ColorKind:
+             case ik.l.ColorKind:
```

#### 679. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6384)

```diff
-             case bC.k.MatricesIndicesKind:
+             case ik.l.MatricesIndicesKind:
```

#### 680. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6387` → after: `L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6387) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6387)

```diff
-             case bC.k.MatricesWeightsKind:
+             case ik.l.MatricesWeightsKind:
```

#### 681. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6390)

```diff
-             case bC.k.MatricesIndicesExtraKind:
+             case ik.l.MatricesIndicesExtraKind:
```

#### 682. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6393` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6393) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6393)

```diff
-             case bC.k.MatricesWeightsExtraKind:
+             case ik.l.MatricesWeightsExtraKind:
```

#### 683. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6411` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6411) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6411)

```diff
-           if (this.positions && (CC.setVerticesData(bC.k.PositionKind, this.positions, zC), ZC && (yield)), this.normals && (CC.setVerticesData(bC.k.NormalKind, this.normals, zC), ZC && (yield)), this.tangents && (CC.setVerticesData(bC.k.TangentKind, this.tangents, zC), ZC && (yi … [truncated]
+           if (this.positions && (kk.setVerticesData(ik.l.PositionKind, this.positions, Fk), Ik && (yield)), this.normals && (kk.setVerticesData(ik.l.NormalKind, this.normals, Fk), Ik && (yield)), this.tangents && (kk.setVerticesData(ik.l.TangentKind, this.tangents, Fk), Ik && (yi … [truncated]
```

#### 684. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6413)

```diff
-             CC.setVerticesData(bC.k.ColorKind, this.colors, zC, QC), this.hasVertexAlpha && void 0 !== CC.hasVertexAlpha && (CC.hasVertexAlpha = !0), ZC && (yield)
+             kk.setVerticesData(ik.l.ColorKind, this.colors, Fk, Xk), this.hasVertexAlpha && void 0 !== kk.hasVertexAlpha && (kk.hasVertexAlpha = !0), Ik && (yield)
```

#### 685. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6415` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6415) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6415)

```diff
-           if (this.matricesIndices && (CC.setVerticesData(bC.k.MatricesIndicesKind, this.matricesIndices, zC), ZC && (yield)), this.matricesWeights && (CC.setVerticesData(bC.k.MatricesWeightsKind, this.matricesWeights, zC), ZC && (yield)), this.matricesIndicesExtra && (CC.setVert … [truncated]
+           if (this.matricesIndices && (kk.setVerticesData(ik.l.MatricesIndicesKind, this.matricesIndices, Fk), Ik && (yield)), this.matricesWeights && (kk.setVerticesData(ik.l.MatricesWeightsKind, this.matricesWeights, Fk), Ik && (yield)), this.matricesIndicesExtra && (kk.setVert … [truncated]
```

#### 686. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6417-L6418` → after: `L6417-L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6417-L6418) · [Before (L6417-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6417-L6418)

```diff
-             zC.Zx = [];
-             for (const CC of this.materialInfos) new NC.d(CC.materialIndex, CC.verticesStart, CC.verticesCount, CC.indexStart, CC.indexCount, zC)
+             Fk.lK = [];
+             for (const kk of this.materialInfos) new Zk.b(kk.materialIndex, kk.verticesStart, kk.verticesCount, kk.indexStart, kk.indexCount, Fk)
```

#### 687. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6423` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6423) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6423)

```diff
-           return this.positions && CC.updateVerticesData(bC.k.PositionKind, this.positions, zC, ZC), this.normals && CC.updateVerticesData(bC.k.NormalKind, this.normals, zC, ZC), this.tangents && CC.updateVerticesData(bC.k.TangentKind, this.tangents, zC, ZC), this.uvs && CC.updat … [truncated]
+           return this.positions && kk.updateVerticesData(ik.l.PositionKind, this.positions, Fk, Ik), this.normals && kk.updateVerticesData(ik.l.NormalKind, this.normals, Fk, Ik), this.tangents && kk.updateVerticesData(ik.l.TangentKind, this.tangents, Fk, Ik), this.uvs && kk.updat … [truncated]
```

#### 688. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6428-L6430` → after: `L6428-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6428-L6430) · [Before (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6428-L6430)

```diff
-           const bC = wC.j.Eg[0],
-             nC = wC.j.Eg[1];
-           for (let fC = ZC; fC < ZC + QC; fC += 3) wC.r.FromArrayToRef(CC, fC, bC), wC.r.TransformCoordinatesToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z
+           const ik = Tk.l.Ge[0],
+             yk = Tk.l.Ge[1];
+           for (let lk = Ik; lk < Ik + Xk; lk += 3) Tk.t.FromArrayToRef(kk, lk, ik), Tk.t.TransformCoordinatesToRef(ik, Fk, yk), kk[lk] = yk.x, kk[lk + 1] = yk.y, kk[lk + 2] = yk.z
```

#### 689. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6435-L6437` → after: `L6435-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6435-L6437) · [Before (L6435-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6435-L6437)

```diff
-           const bC = wC.j.Eg[0],
-             nC = wC.j.Eg[1];
-           for (let fC = ZC; fC < ZC + QC; fC += 3) wC.r.FromArrayToRef(CC, fC, bC), wC.r.TransformNormalToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z
+           const ik = Tk.l.Ge[0],
+             yk = Tk.l.Ge[1];
+           for (let lk = Ik; lk < Ik + Xk; lk += 3) Tk.t.FromArrayToRef(kk, lk, ik), Tk.t.TransformNormalToRef(ik, Fk, yk), kk[lk] = yk.x, kk[lk + 1] = yk.y, kk[lk + 2] = yk.z
```

#### 690. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6442-L6443` → after: `L6442-L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6442-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6442-L6443) · [Before (L6442-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6442-L6443)

```diff
-           const bC = wC.j.Vector4[0],
-             nC = wC.j.Vector4[1];
+           const ik = Tk.l.Vector4[0],
+             yk = Tk.l.Vector4[1];
```

#### 691. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6482)

```diff
-           return (0, FC.l)(this._mergeCoroutine(void 0, bC, zC, !1, ZC, QC, wC))
+           return (0, Lk.n)(this._mergeCoroutine(void 0, ik, Fk, !1, Ik, Xk, Tk))
```

#### 692. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6554` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6554) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6554)

```diff
-           return this.indices = NC, this.positions = CC._MergeElement(bC.k.PositionKind, FC.positions, zC, ZC.map((CC => [CC.vertexData.positions, CC.transform]))), wC && (yield), FC.normals && (this.normals = CC._MergeElement(bC.k.NormalKind, FC.normals, zC, ZC.map((CC => [CC.ve … [truncated]
+           return this.indices = Zk, this.positions = kk._MergeElement(ik.l.PositionKind, Lk.positions, Fk, Ik.map((kk => [kk.vertexData.positions, kk.transform]))), Tk && (yield), Lk.normals && (this.normals = kk._MergeElement(ik.l.NormalKind, Lk.normals, Fk, Ik.map((kk => [kk.ve … [truncated]
```

#### 693. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6561` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6561) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6561)

```diff
-             oC = zC === bC.k.PositionKind ? CC._TransformVector3Coordinates : zC === bC.k.NormalKind ? CC._TransformVector3Normals : zC === bC.k.TangentKind ? CC._TransformVector4Normals : () => {};
+             ak = Fk === ik.l.PositionKind ? kk._TransformVector3Coordinates : Fk === ik.l.NormalKind ? kk._TransformVector3Normals : Fk === ik.l.TangentKind ? kk._TransformVector4Normals : () => {};
```

#### 694. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6581` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6581) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6581)

```diff
-           if (!this.positions) throw new WC.j("Positions are required", WC.f.MeshInvalidPositionsError);
+           if (!this.positions) throw new tk.f("Positions are required", tk.e.MeshInvalidPositionsError);
```

#### 695. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6587` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6587) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6587)

```diff
-             zC = CC(bC.k.PositionKind, this.positions),
+             Fk = kk(ik.l.PositionKind, this.positions),
```

#### 696. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6592` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6592) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6592)

```diff
-           this.normals && ZC(bC.k.NormalKind, this.normals), this.tangents && ZC(bC.k.TangentKind, this.tangents), this.uvs && ZC(bC.k.UVKind, this.uvs), this.uvs2 && ZC(bC.k.UV2Kind, this.uvs2), this.uvs3 && ZC(bC.k.UV3Kind, this.uvs3), this.uvs4 && ZC(bC.k.UV4Kind, this.uvs4),  … [truncated]
+           this.normals && Ik(ik.l.NormalKind, this.normals), this.tangents && Ik(ik.l.TangentKind, this.tangents), this.uvs && Ik(ik.l.UVKind, this.uvs), this.uvs2 && Ik(ik.l.UV2Kind, this.uvs2), this.uvs3 && Ik(ik.l.UV3Kind, this.uvs3), this.uvs4 && Ik(ik.l.UV4Kind, this.uvs4),  … [truncated]
```

#### 697. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6623` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6623) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6623)

```diff
-           if (zC.isVerticesDataPresent(bC.k.PositionKind) && (wC.positions = zC.getVerticesData(bC.k.PositionKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.NormalKind) && (wC.normals = zC.getVerticesData(bC.k.NormalKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.TangentKind) && (wC. … [truncated]
+           if (Fk.isVerticesDataPresent(ik.l.PositionKind) && (Tk.positions = Fk.getVerticesData(ik.l.PositionKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.NormalKind) && (Tk.normals = Fk.getVerticesData(ik.l.NormalKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.TangentKind) && (Tk. … [truncated]
```

#### 698. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6625-L6626` → after: `L6625-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6625-L6626) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6625-L6626)

```diff
-               nC = CC.getVertexBuffer(bC.k.ColorKind),
-               fC = CC.getVerticesData(bC.k.ColorKind, ZC, QC);
+               yk = kk.getVertexBuffer(ik.l.ColorKind),
+               lk = kk.getVerticesData(ik.l.ColorKind, Ik, Xk);
```

#### 699. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6632` → after: `L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6632) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6632)

```diff
-               if (4 !== nC.getSize()) throw new Error(`Unexpected number of color components: ${nC.getSize()}`);
+               if (4 !== yk.getSize()) throw new Error(`Unexpected number of color components: ${yk.getSize()}`);
```

#### 700. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6636` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6636) · [Before (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6636)

```diff
-           return zC.isVerticesDataPresent(bC.k.MatricesIndicesKind) && (wC.matricesIndices = zC.getVerticesData(bC.k.MatricesIndicesKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.MatricesWeightsKind) && (wC.matricesWeights = zC.getVerticesData(bC.k.MatricesWeightsKind, ZC, QC)), z … [truncated]
+           return Fk.isVerticesDataPresent(ik.l.MatricesIndicesKind) && (Tk.matricesIndices = Fk.getVerticesData(ik.l.MatricesIndicesKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.MatricesWeightsKind) && (Tk.matricesWeights = Fk.getVerticesData(ik.l.MatricesWeightsKind, Ik, Xk)), F … [truncated]
```

#### 701. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6639` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6639) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6639)

```diff
-           throw (0, nC.i)("ribbonBuilder")
+           throw (0, yk.j)("ribbonBuilder")
```

#### 702. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6642` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6642) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6642)

```diff
-           throw (0, nC.i)("boxBuilder")
+           throw (0, yk.j)("boxBuilder")
```

#### 703. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6645` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6645) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6645)

```diff
-           throw (0, nC.i)("tiledBoxBuilder")
+           throw (0, yk.j)("tiledBoxBuilder")
```

#### 704. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6648)

```diff
-           throw (0, nC.i)("tiledPlaneBuilder")
+           throw (0, yk.j)("tiledPlaneBuilder")
```

#### 705. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6651` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6651) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6651)

```diff
-           throw (0, nC.i)("sphereBuilder")
+           throw (0, yk.j)("sphereBuilder")
```

#### 706. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6654` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6654) · [Before (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6654)

```diff
-           throw (0, nC.i)("cylinderBuilder")
+           throw (0, yk.j)("cylinderBuilder")
```

#### 707. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6657` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6657) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6657)

```diff
-           throw (0, nC.i)("torusBuilder")
+           throw (0, yk.j)("torusBuilder")
```

#### 708. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6660` → after: `L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6660) · [Before (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6660)

```diff
-           throw (0, nC.i)("linesBuilder")
+           throw (0, yk.j)("linesBuilder")
```

#### 709. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6663)

```diff
-           throw (0, nC.i)("linesBuilder")
+           throw (0, yk.j)("linesBuilder")
```

#### 710. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6666` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6666) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6666)

```diff
-           throw (0, nC.i)("groundBuilder")
+           throw (0, yk.j)("groundBuilder")
```

#### 711. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6669` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6669) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6669)

```diff
-           throw (0, nC.i)("groundBuilder")
+           throw (0, yk.j)("groundBuilder")
```

#### 712. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6672` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6672) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6672)

```diff
-           throw (0, nC.i)("groundBuilder")
+           throw (0, yk.j)("groundBuilder")
```

#### 713. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6675` → after: `L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6675) · [Before (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6675)

```diff
-           throw (0, nC.i)("planeBuilder")
+           throw (0, yk.j)("planeBuilder")
```

#### 714. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6678` → after: `L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6678) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6678)

```diff
-           throw (0, nC.i)("discBuilder")
+           throw (0, yk.j)("discBuilder")
```

#### 715. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6681` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6681) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6681)

```diff
-           throw (0, nC.i)("polygonBuilder")
+           throw (0, yk.j)("polygonBuilder")
```

#### 716. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6684` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6684) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6684)

```diff
-           throw (0, nC.i)("icoSphereBuilder")
+           throw (0, yk.j)("icoSphereBuilder")
```

#### 717. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6687` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6687) · [Before (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6687)

```diff
-           throw (0, nC.i)("polyhedronBuilder")
+           throw (0, yk.j)("polyhedronBuilder")
```

#### 718. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6690-L6691` → after: `L6690-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6690-L6691) · [Before (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6690-L6691)

```diff
-           arguments.length > 0 && void 0 !== arguments[0] || wC.r.Up();
-           throw (0, nC.i)("capsuleBuilder")
+           arguments.length > 0 && void 0 !== arguments[0] || Tk.t.Up();
+           throw (0, yk.j)("capsuleBuilder")
```

#### 719. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6694` → after: `L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6694) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6694)

```diff
-           throw (0, nC.i)("torusKnotBuilder")
+           throw (0, yk.j)("torusKnotBuilder")
```

#### 720. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6704` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6704) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6704)

```diff
-           QC && (vC = !!QC.facetNormals, eC = !!QC.facetPositions, hC = !!QC.facetPartitioning, YC = !0 === QC.useRightHandedSystem ? -1 : 1, dC = QC.ratio || 0, KC = !!QC.depthSort, mC = QC.distanceTo, KC && void 0 === mC && (mC = wC.r.Zero()));
+           Xk && (Sk = !!Xk.facetNormals, vk = !!Xk.facetPositions, Ek = !!Xk.facetPartitioning, nk = !0 === Xk.useRightHandedSystem ? -1 : 1, Gk = Xk.ratio || 0, Ok = !!Xk.depthSort, pk = Xk.distanceTo, Ok && void 0 === pk && (pk = Tk.t.Zero()));
```

#### 721. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6733)

```diff
-               CC.ind = 3 * bC, CC.sqDistance = wC.r.DistanceSquared(QC.facetPositions[bC], mC)
+               kk.ind = 3 * ik, kk.sqDistance = Tk.t.DistanceSquared(Xk.facetPositions[ik], pk)
```

#### 722. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6770` → after: `L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6770) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6770)

```diff
-           QC && ZC.set(QC, bC.k.PositionKind);
+           Xk && Ik.set(Xk, ik.l.PositionKind);
```

#### 723. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6772` → after: `L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6772) · [Before (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6772)

```diff
-           wC && ZC.set(wC, bC.k.NormalKind);
+           Tk && Ik.set(Tk, ik.l.NormalKind);
```

#### 724. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6774` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6774) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6774)

```diff
-           nC && ZC.set(nC, bC.k.TangentKind);
+           yk && Ik.set(yk, ik.l.TangentKind);
```

#### 725. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6776` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6776) · [Before (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6776)

```diff
-           oC && ZC.set(oC, bC.k.UVKind);
+           ak && Ik.set(ak, ik.l.UVKind);
```

#### 726. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6778)

```diff
-           qC && ZC.set(qC, bC.k.UV2Kind);
+           qk && Ik.set(qk, ik.l.UV2Kind);
```

#### 727. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6780` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6780) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6780)

```diff
-           FC && ZC.set(FC, bC.k.UV3Kind);
+           Lk && Ik.set(Lk, ik.l.UV3Kind);
```

#### 728. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6782` → after: `L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6782) · [Before (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6782)

```diff
-           WC && ZC.set(WC, bC.k.UV4Kind);
+           tk && Ik.set(tk, ik.l.UV4Kind);
```

#### 729. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6784` → after: `L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6784) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6784)

```diff
-           NC && ZC.set(NC, bC.k.UV5Kind);
+           Zk && Ik.set(Zk, ik.l.UV5Kind);
```

#### 730. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6786` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6786) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6786)

```diff
-           gC && ZC.set(gC, bC.k.UV6Kind);
+           ek && Ik.set(ek, ik.l.UV6Kind);
```

#### 731. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6788` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6788) · [Before (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6788)

```diff
-           SC && (ZC.set(fC.g.CheckColors4(SC, QC.length / 3), bC.k.ColorKind), void 0 !== zC.hasVertexAlpha && (ZC.hasVertexAlpha = zC.hasVertexAlpha));
+           wk && (Ik.set(lk.h.CheckColors4(wk, Xk.length / 3), ik.l.ColorKind), void 0 !== Fk.hasVertexAlpha && (Ik.hasVertexAlpha = Fk.hasVertexAlpha));
```

#### 732. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6790` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6790) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6790)

```diff
-           pC && ZC.set(pC, bC.k.MatricesIndicesKind);
+           Hk && Ik.set(Hk, ik.l.MatricesIndicesKind);
```

#### 733. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6792` → after: `L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6792) · [Before (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6792)

```diff
-           PC && ZC.set(PC, bC.k.MatricesWeightsKind);
+           Jk && Ik.set(Jk, ik.l.MatricesWeightsKind);
```

#### 734. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6868-L6873` → after: `L6868-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6868-L6873) · [Before (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6868-L6873)

```diff
-   40308: (CC, zC, ZC) => {
-     var QC = ZC(36963),
-       wC = ZC(38507),
-       bC = ZC(40127),
-       nC = ZC(40224),
-       fC = ZC(39959);
+   40498: (kk, Fk, Ik) => {
+     var Xk = Ik(37153),
+       Tk = Ik(38674),
+       ik = Ik(40308),
+       yk = Ik(40417),
+       lk = Ik(40141);
```

#### 735. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6882` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6882) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6882)

```diff
-       ZC.Q_(Number.POSITIVE_INFINITY), QC.Q_(Number.NEGATIVE_INFINITY);
+       Ik.I6(Number.POSITIVE_INFINITY), Xk.I6(Number.NEGATIVE_INFINITY);
```

#### 736. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6896-L6897` → after: `L6896-L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6896-L6897) · [Before (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6896-L6897)

```diff
-       const nC = QC.j.Eg[7],
-         fC = QC.j.Eg[8];
+       const yk = Xk.l.Ge[7],
+         lk = Xk.l.Ge[8];
```

#### 737. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6900` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6900) · [Before (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6900)

```diff
-           for (let FC = 0; FC < 2; ++FC) nC.set(oC ? zC.x : CC.x, qC ? zC.y : CC.y, FC ? zC.z : CC.z), QC.r.TransformCoordinatesToRef(nC, ZC, fC), wC.minimizeInPlace(fC), bC.maximizeInPlace(fC)
+           for (let Lk = 0; Lk < 2; ++Lk) yk.set(ak ? Fk.x : kk.x, qk ? Fk.y : kk.y, Lk ? Fk.z : kk.z), Xk.t.TransformCoordinatesToRef(yk, Ik, lk), Tk.minimizeInPlace(lk), ik.maximizeInPlace(lk)
```

#### 738. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6904-L6905` → after: `L6904-L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6904-L6905) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6904-L6905)

```diff
-       const nC = QC.j.Eg[7];
-       for (let fC = 0; fC < 3 * zC; fC += 3) QC.r.TransformCoordinatesFromFloatsToRef(CC[fC], CC[fC + 1], CC[fC + 2], ZC, nC), wC.minimizeInPlace(nC), bC.maximizeInPlace(nC)
+       const yk = Xk.l.Ge[7];
+       for (let lk = 0; lk < 3 * Fk; lk += 3) Xk.t.TransformCoordinatesFromFloatsToRef(kk[lk], kk[lk + 1], kk[lk + 2], Ik, yk), Tk.minimizeInPlace(yk), ik.maximizeInPlace(yk)
```

#### 739. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6910` → after: `L6910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6910) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6910)

```diff
-       if (!this.Km().mg().getCaps().instancedArrays) return wC.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
+       if (!this.mG().Oe().getCaps().instancedArrays) return Tk.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
```

#### 740. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6919` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6919) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6919)

```diff
-       return this.thinInstanceAdd(QC.b.IdentityReadOnly, CC)
+       return this.thinInstanceAdd(Xk.c.IdentityReadOnly, kk)
```

#### 741. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6921` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6921) · [Before (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6921)

```diff
-       CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), this.removeVerticesData(CC), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[CC] = zC, this._userThinInstanceBuffersStorage.sizes[CC] = zC * Math.max(32, this._thinInstanceDataSt … [truncated]
+       kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), this.removeVerticesData(kk), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[kk] = Fk, this._userThinInstanceBuffersStorage.sizes[kk] = Fk * Math.max(32, this._thinInstanceDataSt … [truncated]
```

#### 742. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6926` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6926) · [Before (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6926)

```diff
-       return zC.copyToArray(QC, 16 * CC), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[CC] = zC), ZC && (this.v_("matrix"), this.Xg || this.thinInstanceRefreshBoundingInfo(!1)), !0
+       return Fk.copyToArray(Xk, 16 * kk), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[kk] = Fk), Ik && (this.o9("matrix"), this.ue || this.thinInstanceRefreshBoundingInfo(!1)), !0
```

#### 743. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6929-L6930` → after: `L6929-L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6929-L6930) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6929-L6930)

```diff
-       return CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[CC] || zC >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(CC, 0), this._userThinInsta … [truncated]
-     }, Object.defineProperty(nC.b.prototype, "N_", {
+       return kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[kk] || Fk >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(kk, 0), this._userThinInsta … [truncated]
+     }, Object.defineProperty(yk.b.prototype, "M6", {
```

#### 744. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6942` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6942) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6942)

```diff
-       const QC = new fC.c(this.mg(), zC, !ZC, 16, !1, !0);
+       const Xk = new lk.e(this.Oe(), Fk, !Ik, 16, !1, !0);
```

#### 745. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6945)

```diff
-     }, nC.b.prototype.E_ = function(CC, zC) {
+     }, yk.b.prototype.K8 = function(kk, Fk) {
```

#### 746. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6948)

```diff
-       if (ZC = ZC || 16, "matrix" === CC) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = zC ? zC.length : 32 * ZC, this._thinInstanceDataStorage.matrixData = zC, this._thin … [truncated]
+       if (Ik = Ik || 16, "matrix" === kk) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Fk ? Fk.length : 32 * Ik, this._thinInstanceDataStorage.matrixData = Fk, this._thin … [truncated]
```

#### 747. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6952` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6952) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6952)

```diff
-         const QC = new fC.c(this.mg(), zC, !0, 16, !1, !0);
+         const Xk = new lk.e(this.Oe(), Fk, !0, 16, !1, !0);
```

#### 748. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6955-L6957` → after: `L6955-L6957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6955-L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6955-L6957) · [Before (L6955-L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6955-L6957)

```diff
-       } else CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), null === zC ? this._userThinInstanceBuffersStorage?.data[CC] && (this.removeVerticesData(CC), delete this._userThinInstanceBuffersStorage.data[CC], delete this._userThinInstanceBuffersStorage.strides[CC], delete … [truncated]
-     }, nC.b.prototype.v_ = function(CC) {
-       "matrix" === CC ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(CC), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
+       } else kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), null === Fk ? this._userThinInstanceBuffersStorage?.data[kk] && (this.removeVerticesData(kk), delete this._userThinInstanceBuffersStorage.data[kk], delete this._userThinInstanceBuffersStorage.strides[kk], delete … [truncated]
+     }, yk.b.prototype.o9 = function(kk) {
+       "matrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
```

#### 749. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6960` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6960) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6960)

```diff
-       else if (CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[CC]) {
+       else if (kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk]) {
```

#### 750. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6972)

```diff
-         for (let zC = 0; zC < this._thinInstanceDataStorage.instancesCount; ++zC) this._thinInstanceDataStorage.worldMatrices[zC] = QC.b.FromArray(CC, 16 * zC)
+         for (let Fk = 0; Fk < this._thinInstanceDataStorage.instancesCount; ++Fk) this._thinInstanceDataStorage.worldMatrices[Fk] = Xk.c.FromArray(kk, 16 * Fk)
```

#### 751. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6991-L6998` → after: `L6991-L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L6991-L6998) · [Before (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L6991-L6998)

```diff
-               PC = QC.j.Vector4[0],
-               GC = QC.j.Eg[1],
-               RC = QC.j.Eg[2],
-               AC = QC.j.Eg[3],
-               xC = QC.j.Eg[4],
-               JC = QC.j.Eg[5],
-               IC = QC.j.Eg[6],
-               iC = QC.j.Matrix[2],
+               Jk = Xk.l.Vector4[0],
+               xk = Xk.l.Ge[1],
+               Pk = Xk.l.Ge[2],
+               Kk = Xk.l.Ge[3],
+               Qk = Xk.l.Ge[4],
+               sk = Xk.l.Ge[5],
+               Vk = Xk.l.Ge[6],
+               zk = Xk.l.Matrix[2],
```

#### 752. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7001` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7001) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7001)

```diff
-             GC.Q_(Number.POSITIVE_INFINITY), RC.Q_(Number.NEGATIVE_INFINITY), AC.Q_(Number.POSITIVE_INFINITY), xC.Q_(Number.NEGATIVE_INFINITY);
+             xk.I6(Number.POSITIVE_INFINITY), Pk.I6(Number.NEGATIVE_INFINITY), Kk.I6(Number.POSITIVE_INFINITY), Qk.I6(Number.NEGATIVE_INFINITY);
```

#### 753. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7011)

```diff
-               }, null, fC.k.PositionKind);
+               }, null, lk.l.PositionKind);
```

#### 754. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7013` → after: `L7013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7013) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7013)

```diff
-               FC(wC, eC, JC, IC), WC(JC, IC, vC), GC.minimizeInPlace(JC), RC.maximizeInPlace(IC), QC.b.FromArrayToRef(SC, 16 * bC, iC), vC ? NC(JC, IC, iC, AC, xC) : MC(wC, eC, iC, AC, xC)
+               Lk(Tk, vk, sk, Vk), tk(sk, Vk, Sk), xk.minimizeInPlace(sk), Pk.maximizeInPlace(Vk), Xk.c.FromArrayToRef(wk, 16 * ik, zk), Sk ? Zk(sk, Vk, zk, Kk, Qk) : jk(Tk, vk, zk, Kk, Qk)
```

#### 755. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7015)

```diff
-             return !(!isFinite(GC.x) || !isFinite(AC.x)) && (CC.WE().reConstruct(AC, xC), CC.rawBoundingInfo = new bC.d(GC, RC), function(CC, zC) {
+             return !(!isFinite(xk.x) || !isFinite(Kk.x)) && (kk.vR().reConstruct(Kk, Qk), kk.rawBoundingInfo = new ik.d(xk, Pk), function(kk, Fk) {
```

#### 756. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7026)

```diff
-         const CC = this.WE();
+         const kk = this.vR();
```

#### 757. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7029)

```diff
-       const gC = this.WE(),
+       const ek = this.vR(),
```

#### 758. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7033)

```diff
-       QC.j.Eg[0].Q_(Number.POSITIVE_INFINITY), QC.j.Eg[1].Q_(Number.NEGATIVE_INFINITY);
+       Xk.l.Ge[0].I6(Number.POSITIVE_INFINITY), Xk.l.Ge[1].I6(Number.NEGATIVE_INFINITY);
```

#### 759. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7035-L7036` → after: `L7035-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7035-L7036) · [Before (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7035-L7036)

```diff
-         QC.b.FromArrayToRef(SC, 16 * bC, QC.j.Matrix[0]);
-         for (let CC = 0; CC < nC.length; ++CC) QC.r.TransformCoordinatesToRef(nC[CC], QC.j.Matrix[0], QC.j.Eg[2]), QC.j.Eg[0].minimizeInPlace(QC.j.Eg[2]), QC.j.Eg[1].maximizeInPlace(QC.j.Eg[2])
+         Xk.c.FromArrayToRef(wk, 16 * ik, Xk.l.Matrix[0]);
+         for (let kk = 0; kk < yk.length; ++kk) Xk.t.TransformCoordinatesToRef(yk[kk], Xk.l.Matrix[0], Xk.l.Ge[2]), Xk.l.Ge[0].minimizeInPlace(Xk.l.Ge[2]), Xk.l.Ge[1].maximizeInPlace(Xk.l.Ge[2])
```

#### 760. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7038` → after: `L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7038) · [Before (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7038)

```diff
-       gC.reConstruct(QC.j.Eg[0], QC.j.Eg[1]), this._updateBoundingInfo()
+       ek.reConstruct(Xk.l.Ge[0], Xk.l.Ge[1]), this._updateBoundingInfo()
```

#### 761. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7041` → after: `L7041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7041) · [Before (L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7041)

```diff
-       "matrix" === CC ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, zC)) : "previousMatrix" === CC ? this._scene.needsPreviousWorldMatr … [truncated]
+       "matrix" === kk ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Fk)) : "previousMatrix" === kk ? this._scene.needsPreviousWorldMatr … [truncated]
```

#### 762. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7044` → after: `L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7044) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7044)

```diff
-       CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind);
+       kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind);
```

#### 763. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7058)

```diff
-         ZC ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", bC, !1), this._thinInstanceDataStorage.matrixData = bC, this._thinInstanceDataStorage.matrixBufferSize = oC, this._scene … [truncated]
+         Ik ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ik, !1), this._thinInstanceDataStorage.matrixData = ik, this._thinInstanceDataStorage.matrixBufferSize = ak, this._scene … [truncated]
```

#### 764. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7071` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7071) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7071)

```diff
-   40272: (CC, zC, ZC) => {
+   40449: (kk, Fk, Ik) => {
```

#### 765. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7073-L7074` → after: `L7073-L7074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7073-L7074) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7073-L7074)

```diff
-       c: () => GC,
-       e: () => SC
+       d: () => xk,
+       h: () => wk
```

#### 766. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7076-L7083` → after: `L7076-L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7076-L7083) · [Before (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7076-L7083)

```diff
-     var QC, wC, bC, nC, fC = ZC(39811),
-       oC = ZC(39818),
-       qC = ZC(39842),
-       FC = ZC(36987),
-       WC = ZC(36963),
-       NC = ZC(40046),
-       MC = ZC(37002),
-       gC = ZC(39694);
+     var Xk, Tk, ik, yk, lk = Ik(40003),
+       ak = Ik(40011),
+       qk = Ik(40021),
+       Lk = Ik(37187),
+       tk = Ik(37153),
+       Zk = Ik(40218),
+       jk = Ik(37201),
+       ek = Ik(39863);
```

#### 767. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7086)

```diff
-       let zC, ZC, QC, wC, bC, nC, MC, gC, SC, pC = NC.d,
+       let Fk, Ik, Xk, Tk, ik, yk, jk, ek, wk, Hk = Zk.b,
```

#### 768. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7120` → after: `L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7120) · [Before (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7120)

```diff
-           super(zC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new WC.r(0, 0, 1), this._up = new WC.r(0, 1, 0), this._right = new WC.r(1, 0, 0), this._position = (0, fC.n)(this, PC, WC.r.Zero()), this._rotation = ((0, fC.n)(this, G … [truncated]
+           super(Fk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new tk.t(0, 0, 1), this._up = new tk.t(0, 1, 0), this._right = new tk.t(1, 0, 0), this._position = (0, lk.n)(this, Jk, tk.t.Zero()), this._rotation = ((0, lk.n)(this, x … [truncated]
```

#### 769. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7153` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7153) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7153)

```diff
-           this._rotationQuaternion = CC, CC && this._rotation.Q_(0), this._markAsDirtyInternal()
+           this._rotationQuaternion = kk, kk && this._rotation.I6(0), this._markAsDirtyInternal()
```

#### 770. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7159` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7159) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7159)

```diff
-           return WC.r.TransformNormalFromFloatsToRef(0, 0, this.Km().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
+           return tk.t.TransformNormalFromFloatsToRef(0, 0, this.mG().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
```

#### 771. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7162)

```diff
-           return WC.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
+           return tk.t.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
```

#### 772. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7165)

```diff
-           return WC.r.TransformNormalFromFloatsToRef(this.Km().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
+           return tk.t.TransformNormalFromFloatsToRef(this.mG().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
```

#### 773. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7168` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7168) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7168)

```diff
-           return this._poseMatrix ? (this._poseMatrix.Av(CC), this) : (this._poseMatrix = CC.clone(), this)
+           return this._poseMatrix ? (this._poseMatrix.kS(kk), this) : (this._poseMatrix = kk.clone(), this)
```

#### 774. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7171` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7171) · [Before (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7171)

```diff
-           return this._poseMatrix || (this._poseMatrix = WC.b.Identity()), this._poseMatrix
+           return this._poseMatrix || (this._poseMatrix = tk.c.Identity()), this._poseMatrix
```

#### 775. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7196)

```diff
-           return this._pivotMatrix.Av(CC), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = zC, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+           return this._pivotMatrix.kS(kk), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Fk, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 776. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7212)

```diff
-           return CC ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Q_(0), this._rotationQuaternion = this._rotationQuaternion || WC.f.Identity(), CC.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
+           return kk ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.I6(0), this._rotationQuaternion = this._rotationQuaternion || tk.f.Identity(), kk.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
```

#### 777. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7217)

```diff
-         get EnC() {
+         get Nyk() {
```

#### 778. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7231-L7232` → after: `L7231-L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7231-L7232) · [Before (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7231-L7232)

```diff
-             const CC = WC.j.Matrix[0];
-             this.parent.getWorldMatrix().invertToRef(CC), WC.r.TransformCoordinatesFromFloatsToRef(zC, ZC, QC, CC, this.position)
+             const kk = tk.l.Matrix[0];
+             this.parent.getWorldMatrix().invertToRef(kk), tk.t.TransformCoordinatesFromFloatsToRef(Fk, Ik, Xk, kk, this.position)
```

#### 779. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7234` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7234) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7234)

```diff
-           return this._absolutePosition.Av(CC), this
+           return this._absolutePosition.kS(kk), this
```

#### 780. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7237)

```diff
-           return this.computeWorldMatrix(), this.position = WC.r.TransformNormal(CC, this._localMatrix), this
+           return this.computeWorldMatrix(), this.position = tk.t.TransformNormal(kk, this._localMatrix), this
```

#### 781. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7241-L7242` → after: `L7241-L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7241-L7242) · [Before (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7241-L7242)

```diff
-           const CC = WC.j.Matrix[0];
-           return this._localMatrix.invertToRef(CC), WC.r.TransformNormal(this.position, CC)
+           const kk = tk.l.Matrix[0];
+           return this._localMatrix.invertToRef(kk), tk.t.TransformNormal(this.position, kk)
```

#### 782. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7245)

```diff
-           return this.computeWorldMatrix(!0), this.position = WC.r.TransformCoordinates(CC, this._localMatrix), this
+           return this.computeWorldMatrix(!0), this.position = tk.t.TransformCoordinates(kk, this._localMatrix), this
```

#### 783. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7256` → after: `L7256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7256) · [Before (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7256)

```diff
-               const CC = WC.j.Matrix[0];
+               const kk = tk.l.Matrix[0];
```

#### 784. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7258` → after: `L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7258) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7258)

```diff
-               const zC = WC.j.Matrix[1];
+               const Fk = tk.l.Matrix[1];
```

#### 785. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7261)

```diff
-               const CC = WC.j.Quaternion[0];
+               const kk = tk.l.Quaternion[0];
```

#### 786. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7263` → after: `L7263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7263) · [Before (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7263)

```diff
-               const zC = WC.j.Matrix[0];
+               const Fk = tk.l.Matrix[0];
```

#### 787. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7265` → after: `L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7265) · [Before (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7265)

```diff
-               const ZC = WC.j.Matrix[1];
+               const Ik = tk.l.Matrix[1];
```

#### 788. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7270)

```diff
-           const zC = WC.r.Zero();
+           const Fk = tk.t.Zero();
```

#### 789. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7274)

```diff
-           return WC.r.TransformNormalToRef(CC, this.getWorldMatrix(), zC), this
+           return tk.t.TransformNormalToRef(kk, this.getWorldMatrix(), Fk), this
```

#### 790. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7287)

```diff
-           0 == this.Km().getRenderId() && this.computeWorldMatrix(!0);
+           0 == this.mG().getRenderId() && this.computeWorldMatrix(!0);
```

#### 791. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7290-L7291` → after: `L7290-L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7290-L7291) · [Before (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7290-L7291)

```diff
-             const zC = WC.j.Matrix[0];
-             ZC.invertToRef(zC), CC = WC.r.TransformCoordinates(CC, zC)
+             const Fk = tk.l.Matrix[0];
+             Ik.invertToRef(Fk), kk = tk.t.TransformCoordinates(kk, Fk)
```

#### 792. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7293)

```diff
-           return this.setPivotMatrix(WC.b.Translation(-CC.x, -CC.y, -CC.z), !0)
+           return this.setPivotMatrix(tk.c.Translation(-kk.x, -kk.y, -kk.z), !0)
```

#### 793. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7296)

```diff
-           const CC = WC.r.Zero();
+           const kk = tk.t.Zero();
```

#### 794. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7303` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7303) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7303)

```diff
-           const CC = WC.r.Zero();
+           const kk = tk.t.Zero();
```

#### 795. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7307)

```diff
-           return this.getPivotPointToRef(CC), WC.r.TransformCoordinatesToRef(CC, this.getWorldMatrix(), CC), this
+           return this.getPivotPointToRef(kk), tk.t.TransformCoordinatesToRef(kk, this.getWorldMatrix(), kk), this
```

#### 796. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7309` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7309) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7309)

```diff
-         YzC(CC) {
+         UFk(kk) {
```

#### 797. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7312-L7313)

```diff
-             for (const zC of this._children) zC.YzC(CC);
-           return super.YzC(CC)
+             for (const Fk of this._children) Fk.UFk(kk);
+           return super.UFk(kk)
```

#### 798. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7319-L7324` → after: `L7319-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7319-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7319-L7324) · [Before (L7319-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7319-L7324)

```diff
-           const wC = WC.j.Quaternion[0],
-             bC = WC.j.Eg[0],
-             nC = WC.j.Eg[1],
-             fC = WC.j.Matrix[1];
-           WC.b.IdentityToRef(fC);
-           const oC = WC.j.Matrix[0];
+           const Tk = tk.l.Quaternion[0],
+             ik = tk.l.Ge[0],
+             yk = tk.l.Ge[1],
+             lk = tk.l.Matrix[1];
+           tk.c.IdentityToRef(lk);
+           const ak = tk.l.Matrix[0];
```

#### 799. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7327)

```diff
-           return qC || (qC = CC._TmpRotation, WC.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qC)), WC.b.ComposeToRef(this.sq, qC, this.position, oC), this.parent && oC.multiplyToRef(this.parent.computeWorldMatrix(!0), oC), zC && (zC.computeWo … [truncated]
+           return qk || (qk = kk._TmpRotation, tk.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qk)), tk.c.ComposeToRef(this.ci, qk, this.position, ak), this.parent && ak.multiplyToRef(this.parent.computeWorldMatrix(!0), ak), Fk && (Fk.computeWo … [truncated]
```

#### 800. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7352` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7352) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7352)

```diff
-           if (zC.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Q_(0)), QC && 0 !== QC) {
+           if (Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.I6(0)), Xk && 0 !== Xk) {
```

#### 801. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7355-L7356` → after: `L7355-L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7355-L7356) · [Before (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7355-L7356)

```diff
-                 QC = WC.j.Matrix[0];
-               CC.invertToRef(QC), zC = WC.r.TransformNormal(zC, QC), CC.determinant() < 0 && (ZC *= -1)
+                 Xk = tk.l.Matrix[0];
+               kk.invertToRef(Xk), Fk = tk.t.TransformNormal(Fk, Xk), kk.determinant() < 0 && (Ik *= -1)
```

#### 802. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7363-L7372` → after: `L7363-L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7363-L7372) · [Before (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7363-L7372)

```diff
-           zC.normalize(), this.rotationQuaternion || (this.rotationQuaternion = WC.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Q_(0));
-           const QC = WC.j.Eg[0],
-             wC = WC.j.Eg[1],
-             bC = WC.j.Eg[2],
-             nC = WC.j.Quaternion[0],
-             fC = WC.j.Matrix[0],
-             oC = WC.j.Matrix[1],
-             qC = WC.j.Matrix[2],
-             FC = WC.j.Matrix[3];
-           return CC.subtractToRef(this.position, QC), WC.b.TranslationToRef(QC.x, QC.y, QC.z, fC), WC.b.TranslationToRef(-QC.x, -QC.y, -QC.z, oC), WC.b.RotationAxisToRef(zC, ZC, qC), oC.multiplyToRef(qC, FC), FC.multiplyToRef(fC, FC), FC.decompose(wC, nC, bC), this.position.addIn … [truncated]
+           Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = tk.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.I6(0));
+           const Xk = tk.l.Ge[0],
+             Tk = tk.l.Ge[1],
+             ik = tk.l.Ge[2],
+             yk = tk.l.Quaternion[0],
+             lk = tk.l.Matrix[0],
+             ak = tk.l.Matrix[1],
+             qk = tk.l.Matrix[2],
+             Lk = tk.l.Matrix[3];
+           return kk.subtractToRef(this.position, Xk), tk.c.TranslationToRef(Xk.x, Xk.y, Xk.z, lk), tk.c.TranslationToRef(-Xk.x, -Xk.y, -Xk.z, ak), tk.c.RotationAxisToRef(Fk, Ik, qk), ak.multiplyToRef(qk, Lk), Lk.multiplyToRef(lk, Lk), Lk.decompose(Tk, yk, ik), this.position.addIn … [truncated]
```

#### 803. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7385-L7386` → after: `L7385-L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7385-L7386) · [Before (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7385-L7386)

```diff
-           this.rotationQuaternion ? QC = this.rotationQuaternion : (QC = WC.j.Quaternion[1], WC.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, QC));
-           const wC = WC.j.Quaternion[0];
+           this.rotationQuaternion ? Xk = this.rotationQuaternion : (Xk = tk.l.Quaternion[1], tk.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Xk));
+           const Tk = tk.l.Quaternion[0];
```

#### 804. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7399)

```diff
-           const QC = this.Km().getRenderId();
+           const Xk = this.mG().getRenderId();
```

#### 805. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7401` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7401) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7401)

```diff
-           ZC = ZC || this.Km().activeCamera, this._updateCache();
+           Ik = Ik || this.mG().activeCamera, this._updateCache();
```

#### 806. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7409` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7409) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7409)

```diff
-             oC = CC._TmpTranslation, oC.L_(this._position.x + zC[12], this._position.y + zC[13], this._position.z + zC[14])
+             ak = kk._TmpTranslation, ak.t5(this._position.x + Fk[12], this._position.y + Fk[13], this._position.z + Fk[14])
```

#### 807. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7411)

```diff
-           if (nC.L_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
+           if (yk.t5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
```

#### 808. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7413)

```diff
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(WC.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.L_(0, 0, 0))
+               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(tk.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.t5(0, 0, 0))
```

#### 809. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7417-L7421` → after: `L7417-L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7417-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7417-L7421) · [Before (L7417-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7417-L7421)

```diff
-             const CC = WC.j.Matrix[1];
-             WC.b.ScalingToRef(nC.x, nC.y, nC.z, CC);
-             const zC = WC.j.Matrix[0];
-             fC.toRotationMatrix(zC), this._pivotMatrix.multiplyToRef(CC, WC.j.Matrix[4]), WC.j.Matrix[4].multiplyToRef(zC, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
-           } else WC.b.ComposeToRef(nC, fC, oC, this._localMatrix);
+             const kk = tk.l.Matrix[1];
+             tk.c.ScalingToRef(yk.x, yk.y, yk.z, kk);
+             const Fk = tk.l.Matrix[0];
+             lk.toRotationMatrix(Fk), this._pivotMatrix.multiplyToRef(kk, tk.l.Matrix[4]), tk.l.Matrix[4].multiplyToRef(Fk, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
+           } else tk.c.ComposeToRef(yk, lk, ak, this._localMatrix);
```

#### 810. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7426-L7431` → after: `L7426-L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7426-L7431) · [Before (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7426-L7431)

```diff
-                 CC.getSkeleton().prepare(), CC.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), WC.j.Matrix[7])
-               } else WC.j.Matrix[7].Av(bC.getWorldMatrix());
-               const zC = WC.j.Eg[5],
-                 ZC = WC.j.Eg[6],
-                 QC = WC.j.Quaternion[0];
-               WC.j.Matrix[7].decompose(ZC, QC, zC), WC.b.ScalingToRef(ZC.x, ZC.y, ZC.z, WC.j.Matrix[7]), WC.j.Matrix[7].setTranslation(zC), CC.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(QC, zC), this._localMatrix.setTranslation(zC)), this._local … [truncated]
+                 kk.getSkeleton().prepare(), kk.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), tk.l.Matrix[7])
+               } else tk.l.Matrix[7].kS(ik.getWorldMatrix());
+               const Fk = tk.l.Ge[5],
+                 Ik = tk.l.Ge[6],
+                 Xk = tk.l.Quaternion[0];
+               tk.l.Matrix[7].decompose(Ik, Xk, Fk), tk.c.ScalingToRef(Ik.x, Ik.y, Ik.z, tk.l.Matrix[7]), tk.l.Matrix[7].setTranslation(Fk), kk.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Xk, Fk), this._localMatrix.setTranslation(Fk)), this._local … [truncated]
```

#### 811. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7434` → after: `L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7434) · [Before (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7434)

```diff
-               CC.getSkeleton().prepare(), this._localMatrix.multiplyToRef(CC.getFinalMatrix(), WC.j.Matrix[6]), WC.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
+               kk.getSkeleton().prepare(), this._localMatrix.multiplyToRef(kk.getFinalMatrix(), tk.l.Matrix[6]), tk.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
```

#### 812. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7437)

```diff
-           } else this._worldMatrix.Av(this._localMatrix);
+           } else this._worldMatrix.kS(this._localMatrix);
```

#### 813. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7440)

```diff
-               const zC = WC.j.Eg[0];
+               const Fk = tk.l.Ge[0];
```

#### 814. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7443-L7445` → after: `L7443-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7443-L7445) · [Before (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7443-L7445)

```diff
-               this._worldMatrix.invertToRef(WC.j.Matrix[1]);
-               const wC = WC.j.Eg[1];
-               WC.r.TransformCoordinatesToRef(QC, WC.j.Matrix[1], wC), wC.normalize();
+               this._worldMatrix.invertToRef(tk.l.Matrix[1]);
+               const Tk = tk.l.Ge[1];
+               tk.t.TransformCoordinatesToRef(Xk, tk.l.Matrix[1], Tk), Tk.normalize();
```

#### 815. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7449-L7453)

```diff
-               if (WC.f.RotationYawPitchRollToRef(bC, fC, 0, WC.j.Quaternion[0]), (this.billboardMode & CC.BILLBOARDMODE_ALL) !== CC.BILLBOARDMODE_ALL) {
-                 const zC = WC.j.Eg[1];
-                 WC.j.Quaternion[0].toEulerAnglesToRef(zC), (this.billboardMode & CC.BILLBOARDMODE_X) !== CC.BILLBOARDMODE_X && (zC.x = 0), (this.billboardMode & CC.BILLBOARDMODE_Y) !== CC.BILLBOARDMODE_Y && (zC.y = 0), (this.billboardMode & CC.BILLBOARDMODE_Z) !== CC.BILLBOARDMOD … [truncated]
-               } else WC.b.FromQuaternionToRef(WC.j.Quaternion[0], WC.j.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(WC.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(WC.j.Eg[0])
+               if (tk.f.RotationYawPitchRollToRef(ik, lk, 0, tk.l.Quaternion[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
+                 const Fk = tk.l.Ge[1];
+                 tk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMOD … [truncated]
+               } else tk.c.FromQuaternionToRef(tk.l.Quaternion[0], tk.l.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(tk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(tk.l.Ge[0])
```

#### 816. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7455-L7461` → after: `L7455-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7455-L7461) · [Before (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7455-L7461)

```diff
-               const zC = WC.j.Eg[0];
-               this._worldMatrix.getTranslationToRef(zC), WC.j.Matrix[1].Av(ZC.getViewMatrix());
-               const QC = this.Km().useRightHandedSystem;
-               if (QC && WC.j.Matrix[1].multiplyToRef(CC._TmpRHRestore, WC.j.Matrix[1]), WC.j.Matrix[1].setTranslationFromFloats(0, 0, 0), WC.j.Matrix[1].invertToRef(WC.j.Matrix[0]), (this.billboardMode & CC.BILLBOARDMODE_ALL) !== CC.BILLBOARDMODE_ALL) {
-                 WC.j.Matrix[0].decompose(void 0, WC.j.Quaternion[0], void 0);
-                 const zC = WC.j.Eg[1];
-                 WC.j.Quaternion[0].toEulerAnglesToRef(zC), (this.billboardMode & CC.BILLBOARDMODE_X) !== CC.BILLBOARDMODE_X && (zC.x = 0), (this.billboardMode & CC.BILLBOARDMODE_Y) !== CC.BILLBOARDMODE_Y && (zC.y = 0), (this.billboardMode & CC.BILLBOARDMODE_Z) !== CC.BILLBOARDMOD … [truncated]
+               const Fk = tk.l.Ge[0];
+               this._worldMatrix.getTranslationToRef(Fk), tk.l.Matrix[1].kS(Ik.getViewMatrix());
+               const Xk = this.mG().useRightHandedSystem;
+               if (Xk && tk.l.Matrix[1].multiplyToRef(kk._TmpRHRestore, tk.l.Matrix[1]), tk.l.Matrix[1].setTranslationFromFloats(0, 0, 0), tk.l.Matrix[1].invertToRef(tk.l.Matrix[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
+                 tk.l.Matrix[0].decompose(void 0, tk.l.Quaternion[0], void 0);
+                 const Fk = tk.l.Ge[1];
+                 tk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMOD … [truncated]
```

#### 817. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(WC.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(WC.j.Eg[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : bC && bC._nonUniformScaling ? this._updateNonUniformScalingState(bC._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(tk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(tk.l.Ge[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ik && ik._nonUniformScaling ? this._updateNonUniformScalingState(ik._nonUniformScaling) : this._up … [truncated]
```

#### 818. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7474` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7474) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7474)

```diff
-                 const CC = WC.j.Matrix[0];
+                 const kk = tk.l.Matrix[0];
```

#### 819. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7476-L7477)

```diff
-                 const zC = WC.j.Quaternion[0];
-                 CC.decompose(ZC.sq, zC, ZC.position), ZC.rotationQuaternion ? ZC.rotationQuaternion.Av(zC) : zC.toEulerAnglesToRef(ZC.rotation)
+                 const Fk = tk.l.Quaternion[0];
+                 kk.decompose(Ik.ci, Fk, Ik.position), Ik.rotationQuaternion ? Ik.rotationQuaternion.kS(Fk) : Fk.toEulerAnglesToRef(Ik.rotation)
```

#### 820. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7481)

```diff
-           this.sq.L_(1, 1, 1), this.position.L_(0, 0, 0), this.rotation.L_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = WC.f.Identity()), this._worldMatrix = WC.b.Identity()
+           this.ci.t5(1, 1, 1), this.position.t5(0, 0, 0), this.rotation.t5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = tk.f.Identity()), this._worldMatrix = tk.c.Identity()
```

#### 821. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7492)

```diff
-           return CC || (CC = this.Km().activeCamera), WC.r.TransformCoordinates(this.getAbsolutePosition(), CC.getViewMatrix())
+           return kk || (kk = this.mG().activeCamera), tk.t.TransformCoordinates(this.getAbsolutePosition(), kk.getViewMatrix())
```

#### 822. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7496)

```diff
-           return CC || (CC = this.Km().activeCamera), this.getAbsolutePosition().subtract(CC.globalPosition).length()
+           return kk || (kk = this.mG().activeCamera), this.getAbsolutePosition().subtract(kk.globalPosition).length()
```

#### 823. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7499)

```diff
-           const wC = qC.d.Clone((() => new CC(zC, this.Km())), this);
+           const Tk = qk.b.Clone((() => new kk(Fk, this.mG())), this);
```

#### 824. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7510-L7511)

```diff
-           const zC = qC.d.Serialize(this, CC);
-           return zC.type = this.getClassName(), zC.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(zC), zC.localMatrix = this.getPivotMatrix().VZC(), zC.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (zC.gH = !0), qC.d.AppendSerializedAnimation … [truncated]
+           const Fk = qk.b.Serialize(this, kk);
+           return Fk.type = this.getClassName(), Fk.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Fk), Fk.localMatrix = this.getPivotMatrix().iXk(), Fk.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Fk.Xp = !0), qk.b.AppendSerializedAnimation … [truncated]
```

#### 825. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7519)

```diff
-           if (this.Km().stopAnimation(this), this.Km().removeTransformNode(this), this._parentContainer) {
+           if (this.mG().stopAnimation(this), this.mG().removeTransformNode(this), this._parentContainer) {
```

#### 826. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7535)

```diff
-           zC && (this.rotationQuaternion ? (wC = this.rotationQuaternion.clone(), this.rotationQuaternion.L_(0, 0, 0, 1)) : this.rotation && (QC = this.rotation.clone(), this.rotation.L_(0, 0, 0)));
+           Fk && (this.rotationQuaternion ? (Tk = this.rotationQuaternion.clone(), this.rotationQuaternion.t5(0, 0, 0, 1)) : this.rotation && (Xk = this.rotation.clone(), this.rotation.t5(0, 0, 0)));
```

#### 827. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7541)

```diff
-           return this.sq.scaleInPlace(oC), zC && (this.rotationQuaternion && wC ? this.rotationQuaternion.Av(wC) : this.rotation && QC && this.rotation.Av(QC)), this
+           return this.ci.scaleInPlace(ak), Fk && (this.rotationQuaternion && Tk ? this.rotationQuaternion.kS(Tk) : this.rotation && Xk && this.rotation.kS(Xk)), this
```

#### 828. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7548)

```diff
-         zC = [(0, oC.J)("position")], ZC = [(0, oC.J)("rotation")], QC = [(0, oC.z)("rotationQuaternion")], wC = [(0, oC.J)("sq")], bC = [(0, oC.M)("billboardMode")], nC = [(0, oC.M)()], MC = [(0, oC.M)("infiniteDistance")], gC = [(0, oC.M)()], SC = [(0, oC.M)()], (0, fC.j)(null, … [truncated]
+         Fk = [(0, ak.H)("position")], Ik = [(0, ak.H)("rotation")], Xk = [(0, ak.z)("rotationQuaternion")], Tk = [(0, ak.H)("ci")], ik = [(0, ak.J)("billboardMode")], yk = [(0, ak.J)()], jk = [(0, ak.J)("infiniteDistance")], ek = [(0, ak.J)()], wk = [(0, ak.J)()], (0, lk.j)(null, … [truncated]
```

#### 829. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7671)

```diff
-       })(), CC.BILLBOARDMODE_NONE = 0, CC.BILLBOARDMODE_X = 1, CC.BILLBOARDMODE_Y = 2, CC.BILLBOARDMODE_Z = 4, CC.BILLBOARDMODE_ALL = 7, CC.BILLBOARDMODE_USE_POSITION = 128, CC.BillboardUseParentOrientation = !1, CC._TmpRotation = WC.f.Zero(), CC._TmpScaling = WC.r.Zero(), CC._Tm … [truncated]
+       })(), kk.BILLBOARDMODE_NONE = 0, kk.BILLBOARDMODE_X = 1, kk.BILLBOARDMODE_Y = 2, kk.BILLBOARDMODE_Z = 4, kk.BILLBOARDMODE_ALL = 7, kk.BILLBOARDMODE_USE_POSITION = 128, kk.BillboardUseParentOrientation = !1, kk._TmpRotation = tk.f.Zero(), kk._TmpScaling = tk.t.Zero(), kk._Tm … [truncated]
```

#### 830. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7675-L7676` → after: `L7675-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7675-L7676) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7675-L7676)

```diff
-       const QC = qC.d.Parse((() => new SC(CC.name, zC)), CC, zC, ZC);
-       if (CC.localMatrix ? QC.setPreTransformMatrix(WC.b.FromArray(CC.localMatrix)) : CC.pivotMatrix && QC.setPivotMatrix(WC.b.FromArray(CC.pivotMatrix)), QC.IK(CC.isEnabled), QC._waitingParsedUniqueId = CC.uniqueId, void 0 !== CC.parentId && (QC._waitingParentId = CC.parentId),  … [truncated]
+       const Xk = qk.b.Parse((() => new wk(kk.name, Fk)), kk, Fk, Ik);
+       if (kk.localMatrix ? Xk.setPreTransformMatrix(tk.c.FromArray(kk.localMatrix)) : kk.pivotMatrix && Xk.setPivotMatrix(tk.c.FromArray(kk.pivotMatrix)), Xk.Av(kk.isEnabled), Xk._waitingParsedUniqueId = kk.uniqueId, void 0 !== kk.parentId && (Xk._waitingParentId = kk.parentId),  … [truncated]
```

#### 831. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7679)

```diff
-             wC = (0, MC.c)("BABYLON.Animation");
+             Tk = (0, jk.b)("BABYLON.Animation");
```

#### 832. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7682)

```diff
-         NC.d.ParseAnimationRanges(QC, CC, zC)
+         Zk.b.ParseAnimationRanges(Xk, kk, Fk)
```

#### 833. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7690)

```diff
-     }(QC = SC.prototype).eT ?? (QC.eT = (0, gC.f)("TransformNode", "eT")), (wC = SC.prototype).applyImpulse ?? (wC.applyImpulse = (0, gC.f)("TransformNode", "applyImpulse")), (bC = SC.prototype).applyAngularImpulse ?? (bC.applyAngularImpulse = (0, gC.f)("TransformNode", "applyAng … [truncated]
+     }(Xk = wk.prototype).aN ?? (Xk.aN = (0, ek.h)("TransformNode", "aN")), (Tk = wk.prototype).applyImpulse ?? (Tk.applyImpulse = (0, ek.h)("TransformNode", "applyImpulse")), (ik = wk.prototype).applyAngularImpulse ?? (ik.applyAngularImpulse = (0, ek.h)("TransformNode", "applyAng … [truncated]
```

#### 834. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7692)

```diff
-   40229: (CC, zC, ZC) => {
+   40424: (kk, Fk, Ik) => {
```

#### 835. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7745-L7748` → after: `L7745-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7745-L7748) · [Before (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/251.js#L7745-L7748)

```diff
-       d: () => wC,
-       g: () => oC,
-       h: () => fC,
-       l: () => nC
+       e: () => Tk,
+       f: () => ak,
+       j: () => lk,
+       n: () => yk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (490 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   39959: (CC, zC, ZC) => {
+   40141: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9)

```diff
-       k: () => oC
+       l: () => ak
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L11-L14)

```diff
-     var QC = ZC(39742),
-       wC = ZC(38507),
-       bC = ZC(39882),
-       nC = ZC(39783);
+     var Xk = Ik(39914),
+       Tk = Ik(38674),
+       ik = Ik(40056),
+       yk = Ik(39972);
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, nC.e)(), CC && CC.Km ? this._engine = CC.Km().mg() : this._engine = CC, this._updatable = ZC, this._instanced = fC, this._divisor = qC || 1, this._label = FC, zC instanceof QC.d ? (this._data = null, this._buffer = zC) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, yk.e)(), kk && kk.mG ? this._engine = kk.mG().Oe() : this._engine = kk, this._updatable = Ik, this._instanced = lk, this._divisor = qk || 1, this._label = Lk, Fk instanceof Xk.d ? (this._data = null, this._buffer = Fk) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L31-L32)

```diff
-         const fC = bC ? zC : zC * Float32Array.BYTES_PER_ELEMENT,
-           qC = QC ? bC ? QC : QC * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const lk = ik ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT,
+           qk = Xk ? ik ? Xk : Xk * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L55-L56)

```diff
-           if (this._buffer.HW > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.HW, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.HW, void 0, this._label));
-           wC.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.St > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.St, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.St, void 0, this._label));
+           Tk.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, CC, QC ? zC : zC * Float32Array.BYTES_PER_ELEMENT, ZC ? ZC * this.byteStride : void 0), this._data = 0 === zC && void 0 === ZC ? CC : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk, Xk ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT, Ik ? Ik * this.byteStride : void 0), this._data = 0 === Fk && void 0 === Ik ? kk : null)
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L97-L98)

```diff
-         const AC = (0, bC.m)(this.type);
-         PC ? (this._size = MC || (nC ? nC / AC : qC(ZC)), this.byteStride = nC || this._buffer.byteStride || this._size * AC, this.byteOffset = NC || 0) : (this._size = MC || nC || qC(ZC), this.byteStride = nC ? nC * AC : this._buffer.byteStride || this._size * AC, this.byteOffse … [truncated]
+         const Kk = (0, ik.k)(this.type);
+         Jk ? (this._size = jk || (yk ? yk / Kk : qk(Ik)), this.byteStride = yk || this._buffer.byteStride || this._size * Kk, this.byteOffset = Zk || 0) : (this._size = jk || yk || qk(Ik), this.byteStride = yk ? yk * Kk : this._buffer.byteStride || this._size * Kk, this.byteOffse … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${CC}'`)
+             throw new Error(`Invalid vertex buffer type '${kk}'`)
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L139)

```diff
-         return ZC ? (0, bC.k)(ZC, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, CC, zC) : null
+         return Ik ? (0, ik.i)(Ik, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, kk, Fk) : null
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L148)

```diff
-         return this.byteStride / (0, bC.m)(this.type)
+         return this.byteStride / (0, ik.k)(this.type)
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L150-L151)

```diff
-       ZZC() {
-         return this.byteOffset / (0, bC.m)(this.type)
+       qIk() {
+         return this.byteOffset / (0, ik.k)(this.type)
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, bC.m)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ik.k)(this.type) : this._size
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L176)

```diff
-         (0, bC.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, CC, this.normalized, ((CC, ZC) => {
+         (0, ik.d)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, kk, this.normalized, ((kk, Ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L213)

```diff
-       return (0, bC.m)(CC)
+       return (0, ik.k)(kk)
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L217)

```diff
-       (0, bC.h)(CC, zC, ZC, QC, wC, nC, fC, ((CC, zC) => {
+       (0, ik.d)(kk, Fk, Ik, Xk, Tk, yk, lk, ((kk, Fk) => {
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L223)

```diff
-       return (0, bC.k)(CC, zC, ZC, QC, wC, nC, fC, oC)
+       return (0, ik.i)(kk, Fk, Ik, Xk, Tk, yk, lk, ak)
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L232)

```diff
-   39742: (CC, zC, ZC) => {
+   39914: (kk, Fk, Ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L241)

```diff
-         this.references = 0, this.HW = 0, this.is32Bits = !1, this.uniqueId = QC._Counter++
+         this.references = 0, this.St = 0, this.is32Bits = !1, this.uniqueId = Xk._Counter++
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L246)

```diff
-   39953: (CC, zC, ZC) => {
+   40139: (kk, Fk, Ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L248)

```diff
-       c: () => bC
+       b: () => ik
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L250-L251)

```diff
-     var QC = ZC(36963),
-       wC = ZC(39959);
+     var Xk = Ik(37153),
+       Tk = Ik(40141);
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L259-L260)

```diff
-         if (!this.pickedMesh || zC && !this.pickedMesh.isVerticesDataPresent(wC.k.NormalKind)) return null;
-         let ZC, bC = this.pickedMesh.CQC();
+         if (!this.pickedMesh || Fk && !this.pickedMesh.isVerticesDataPresent(Tk.l.NormalKind)) return null;
+         let Ik, ik = this.pickedMesh.yXk();
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L262-L264)

```diff
-         const nC = QC.j.Eg[0],
-           fC = QC.j.Eg[1],
-           oC = QC.j.Eg[2];
+         const yk = Xk.l.Ge[0],
+           lk = Xk.l.Ge[1],
+           ak = Xk.l.Ge[2];
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L266-L270)

```diff
-           const CC = this.pickedMesh.getVerticesData(wC.k.NormalKind);
-           let zC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId], nC) : nC.L_(CC[3 * this.faceId * 3], CC[3 * this.faceId * 3 + 1], CC[3 * this.faceId * 3 + 2]),
-             qC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 1], fC) : fC.L_(CC[3 * (3 * this.faceId + 1)], CC[3 * (3 * this.faceId + 1) + 1], CC[3 * (3 * this.faceId + 1) + 2]),
-             FC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 2], oC) : oC.L_(CC[3 * (3 * this.faceId + 2)], CC[3 * (3 * this.faceId + 2) + 1], CC[3 * (3 * this.faceId + 2) + 2]);
-           zC = zC.scale(this.bu), qC = qC.scale(this.bv), FC = FC.scale(1 - this.bu - this.bv), ZC = new QC.r(zC.x + qC.x + FC.x, zC.y + qC.y + FC.y, zC.z + qC.z + FC.z)
+           const kk = this.pickedMesh.getVerticesData(Tk.l.NormalKind);
+           let Fk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId], yk) : yk.t5(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
+             qk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 1], lk) : lk.t5(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
+             Lk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 2], ak) : ak.t5(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]);
+           Fk = Fk.scale(this.bu), qk = qk.scale(this.bv), Lk = Lk.scale(1 - this.bu - this.bv), Ik = new Xk.t(Fk.x + qk.x + Lk.x, Fk.y + qk.y + Lk.y, Fk.z + qk.z + Lk.z)
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L272-L275)

```diff
-           const CC = this.pickedMesh.getVerticesData(wC.k.PositionKind),
-             zC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId], nC) : nC.L_(CC[3 * this.faceId * 3], CC[3 * this.faceId * 3 + 1], CC[3 * this.faceId * 3 + 2]),
-             qC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 1], fC) : fC.L_(CC[3 * (3 * this.faceId + 1)], CC[3 * (3 * this.faceId + 1) + 1], CC[3 * (3 * this.faceId + 1) + 2]),
-             FC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 2], oC) : oC.L_(CC[3 * (3 * this.faceId + 2)], CC[3 * (3 * this.faceId + 2) + 1], CC[3 * (3 * this.faceId + 2) + 2]),
+           const kk = this.pickedMesh.getVerticesData(Tk.l.PositionKind),
+             Fk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId], yk) : yk.t5(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
+             qk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 1], lk) : lk.t5(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
+             Lk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 2], ak) : ak.t5(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]),
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L278)

```diff
-           ZC = QC.r.Cross(WC, NC)
+           Ik = Xk.t.Cross(tk, Zk)
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L285-L286)

```diff
-               const CC = QC.j.Matrix[0];
-               QC.b.FromArrayToRef(ZC, wC, CC), QC.r.TransformNormalToRef(zC, CC, zC)
+               const kk = Xk.l.Matrix[0];
+               Xk.c.FromArrayToRef(Ik, Tk, kk), Xk.t.TransformNormalToRef(Fk, kk, Fk)
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L290)

```diff
-           CC.nonUniformScaling && (QC.j.Matrix[0].Av(ZC), ZC = QC.j.Matrix[0], ZC.setTranslationFromFloats(0, 0, 0), ZC.invert(), ZC.transposeToRef(QC.j.Matrix[1]), ZC = QC.j.Matrix[1]), QC.r.TransformNormalToRef(zC, ZC, zC)
+           kk.nonUniformScaling && (Xk.l.Matrix[0].kS(Ik), Ik = Xk.l.Matrix[0], Ik.setTranslationFromFloats(0, 0, 0), Ik.invert(), Ik.transposeToRef(Xk.l.Matrix[1]), Ik = Xk.l.Matrix[1]), Xk.t.TransformNormalToRef(Fk, Ik, Fk)
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L293-L294)

```diff
-           const zC = QC.j.Eg[0].Av(ZC);
-           CC || qC(this.pickedMesh, zC), QC.r.Dot(zC, this.ray.direction) > 0 && ZC.negateInPlace()
+           const Fk = Xk.l.Ge[0].kS(Ik);
+           kk || qk(this.pickedMesh, Fk), Xk.t.Dot(Fk, this.ray.direction) > 0 && Ik.negateInPlace()
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L299)

```diff
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wC.k.UVKind;
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tk.l.UVKind;
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L301)

```diff
-         const zC = this.pickedMesh.CQC();
+         const Fk = this.pickedMesh.yXk();
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L305-L308)

```diff
-         let bC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId]),
-           nC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId + 1]),
-           fC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId + 2]);
-         return bC = bC.scale(this.bu), nC = nC.scale(this.bv), fC = fC.scale(1 - this.bu - this.bv), new QC.n(bC.x + nC.x + fC.x, bC.y + nC.y + fC.y)
+         let ik = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId]),
+           yk = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId + 1]),
+           lk = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId + 2]);
+         return ik = ik.scale(this.bu), yk = yk.scale(this.bv), lk = lk.scale(1 - this.bu - this.bv), new Xk.p(ik.x + yk.x + lk.x, ik.y + yk.y + lk.y)
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L312)

```diff
-   39783: (CC, zC, ZC) => {
+   39972: (kk, Fk, Ik) => {
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L316)

```diff
-     var QC = ZC(39663);
+     var Xk = Ik(39825);
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(CC), ZC = CC.is32Bits ? zC instanceof Uint32Array ? zC : new Uint32Array(zC) : zC instanceof Uint16Array ? zC : new Uint16Array(zC), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZC, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(kk), Ik = kk.is32Bits ? Fk instanceof Uint32Array ? Fk : new Uint32Array(Fk) : Fk instanceof Uint16Array ? Fk : new Uint16Array(Fk), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Ik, … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L330)

```diff
-   39756: (CC, zC, ZC) => {
+   39931: (kk, Fk, Ik) => {
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L332)

```diff
-       d: () => QC
+       b: () => Xk
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L369)

```diff
-   39721: (CC, zC, ZC) => {
+   39885: (kk, Fk, Ik) => {
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L371)

```diff
-       b: () => GC
+       c: () => xk
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L373-L378)

```diff
-     var QC = ZC(36987),
-       wC = ZC(39666),
-       bC = ZC(36985),
-       nC = ZC(38507),
-       fC = ZC(36977),
-       oC = ZC(39730);
+     var Xk = Ik(37187),
+       Tk = Ik(39830),
+       ik = Ik(37178),
+       yk = Ik(38674),
+       lk = Ik(37173),
+       ak = Ik(39891);
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L612-L616)

```diff
-     var NC = ZC(39735),
-       MC = ZC(39694),
-       gC = ZC(39650),
-       SC = ZC(39680),
-       pC = ZC(39692);
+     var Zk = Ik(39894),
+       jk = Ik(39863),
+       ek = Ik(39818),
+       wk = Ik(39850),
+       Hk = Ik(39860);
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L625)

```diff
-       if ((0, SC.k)()) {
+       if ((0, wk.j)()) {
```

#### 44. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L652)

```diff
-       get BZC() {
+       get IXk() {
```

#### 45. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L655)

```diff
-       set BZC(CC) {
+       set IXk(kk) {
```

#### 46. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L677)

```diff
-         if (CC) return this.isNDCHalfZRange ? CC.IS_NDC_HALF_ZRANGE = "" : delete CC.IS_NDC_HALF_ZRANGE, this.BZC ? CC.USE_REVERSE_DEPTHBUFFER = "" : delete CC.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? CC.USE_EXACT_SRGB_CONVERSIONS = "" : delete CC.USE_EXACT_SR … [truncated]
+         if (kk) return this.isNDCHalfZRange ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, this.IXk ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SR … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L680)

```diff
-           return this.isNDCHalfZRange && (CC += "#define IS_NDC_HALF_ZRANGE"), this.BZC && (CC && (CC += "\n"), CC += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (CC && (CC += "\n"), CC += "#define USE_EXACT_SRGB_CONVERSIONS"), CC
+           return this.isNDCHalfZRange && (kk += "#define IS_NDC_HALF_ZRANGE"), this.IXk && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
```

#### 48. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L696)

```diff
-         wC.b.ResetCache()
+         Tk.d.ResetCache()
```

#### 49. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L702)

```diff
-         nC.c.Warn(this.name + " context successfully restored."), this.Yg.notifyObservers(this), this._contextWasLost = !1
+         yk.e.Warn(this.name + " context successfully restored."), this.Ee.notifyObservers(this), this._contextWasLost = !1
```

#### 50. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L763)

```diff
-             CC && CC(this.customAnimationFrameRequester.lg), delete this.customAnimationFrameRequester.lg
+             kk && kk(this.customAnimationFrameRequester.pe), delete this.customAnimationFrameRequester.pe
```

#### 51. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L767)

```diff
-           if (this._frameHandler = 0, (0, SC.k)()) {
+           if (this._frameHandler = 0, (0, wk.j)()) {
```

#### 52. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L796)

```diff
-           (this.GJ || !this.renderEvenInBackground && this._windowIsBackground) && (CC = !1), CC && (this.jR(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.yR())
+           (this.Hs || !this.renderEvenInBackground && this._windowIsBackground) && (kk = !1), kk && (this.Zx(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Hx())
```

#### 53. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.lg = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.l … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.pe = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.p … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L826)

```diff
-         this._depthCullingState.zOffset = this.BZC ? -CC : CC
+         this._depthCullingState.zOffset = this.IXk ? -kk : kk
```

#### 55. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L830)

```diff
-         return this.BZC ? -CC : CC
+         return this.IXk ? -kk : kk
```

#### 56. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.BZC ? -CC : CC
+         this._depthCullingState.zOffsetUnits = this.IXk ? -kk : kk
```

#### 57. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L837)

```diff
-         return this.BZC ? -CC : CC
+         return this.IXk ? -kk : kk
```

#### 58. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L840)

```diff
-         return (0, SC.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, wk.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 59. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L891)

```diff
-           IC = NC || new gC.c(this, 1);
+           Vk = Zk || new ek.b(this, 1);
```

#### 60. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L903)

```diff
-           QC && QC.removePendingData(IC), CC === iC ? (KC && IC.onLoadedObservable.remove(KC), bC.c.UseFallbackTexture && CC !== bC.c.FallbackTexture && this._createTextureBase(bC.c.FallbackTexture, zC, IC.invertY, QC, wC, null, oC, qC, FC, WC, IC), ZC = (ZC || "Unknown error") + … [truncated]
+           Xk && Xk.removePendingData(Vk), kk === zk ? (Ok && Vk.onLoadedObservable.remove(Ok), ik.e.UseFallbackTexture && kk !== ik.e.FallbackTexture && this._createTextureBase(ik.e.FallbackTexture, Fk, Vk.invertY, Xk, Tk, null, ak, qk, Lk, tk, Vk), Ik = (Ik || "Unknown error") + … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L906)

```diff
-           }), oC && oC(ZC, NC)) : (nC.c.Warn(`Failed to load ${CC}, falling back to ${iC}`), this._createTextureBase(iC, zC, IC.invertY, QC, wC, fC, oC, qC, FC, WC, IC, MC, SC, pC, PC, RC))
+           }), ak && ak(Ik, Zk)) : (yk.e.Warn(`Failed to load ${kk}, falling back to ${zk}`), this._createTextureBase(zk, Fk, Vk.invertY, Xk, Tk, lk, ak, qk, Lk, tk, Vk, jk, wk, Hk, Jk, Pk))
```

#### 62. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, SC.f)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, wk.d)() ? document : null
```

#### 63. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new qC, this._stencilStateComposer = new FC, this._stencilState = new WC, this._alphaState = new NC.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new qk, this._stencilStateComposer = new Lk, this._stencilState = new tk, this._alphaState = new Zk.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new QC.d, this.onCanvasFocusObservable = new QC.d, this.onNewSceneAddedObservable = new QC.d, this.onResizeObservable = new QC.d, this.onCanvasPointerOutObservable = new QC.d, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Xk.e, this.onCanvasFocusObservable = new Xk.e, this.onNewSceneAddedObservable = new Xk.e, this.onResizeObservable = new Xk.e, this.onCanvasPointerOutObservable = new Xk.e, this.onE … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const wC = (0, SC.k)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const Tk = (0, wk.j)() && window.devicePixelRatio || 1,
```

#### 66. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1024)

```diff
-           const CC = (0, SC.k)() && window.devicePixelRatio || 1,
+           const kk = (0, wk.j)() && window.devicePixelRatio || 1,
```

#### 67. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1028)

```diff
-         if ((0, SC.k)() && (0, SC.f)())
+         if ((0, wk.j)() && (0, wk.d)())
```

#### 68. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1052)

```diff
-         throw (0, MC.i)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 69. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1055)

```diff
-         throw (0, MC.i)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 70. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1058)

```diff
-         throw (0, MC.i)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 71. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1061)

```diff
-         throw (0, MC.i)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 72. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== CC.indexOf("Mobile") || -1 !== CC.indexOf("Mac") && (0, SC.f)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, SC.k)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== kk.indexOf("Mobile") || -1 !== kk.indexOf("Mac") && (0, wk.d)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, wk.j)() && window.addEventListener("resize", this._checkForMobile))
```

#### 73. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1115)

```diff
-         if (!pC.e.loadImage) throw (0, MC.i)("FileTools");
+         if (!Hk.e.loadImage) throw (0, jk.j)("FileTools");
```

#### 74. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1119)

```diff
-         const nC = (0, pC.n)(CC, zC, ZC, QC, wC, bC);
+         const yk = (0, Hk.k)(kk, Fk, Ik, Xk, Tk, ik);
```

#### 75. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1126)

```diff
-         throw (0, MC.i)("FileTools")
+         throw (0, jk.j)("FileTools")
```

#### 76. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1132)

```diff
-         this.releaseComputeEffects?.(), wC.b.ResetCache();
+         this.releaseComputeEffects?.(), Tk.d.ResetCache();
```

#### 77. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1134-L1136` → after: `L1134-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1134-L1136) · [Before (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1134-L1136)

```diff
-         this._boundRenderFunction = null, this.Tm.notifyObservers(this), this.Tm.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
-         const CC = bC.c.Instances.indexOf(this);
-         CC >= 0 && bC.c.Instances.splice(CC, 1), bC.c.Instances.length || (bC.c.OnEnginesDisposedObservable.notifyObservers(this), bC.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
+         this._boundRenderFunction = null, this.hG.notifyObservers(this), this.hG.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         const kk = ik.e.Instances.indexOf(this);
+         kk >= 0 && ik.e.Instances.splice(kk, 1), ik.e.Instances.length || (ik.e.OnEnginesDisposedObservable.notifyObservers(this), ik.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1139)

```diff
-         throw (0, MC.i)("LoadingScreen")
+         throw (0, jk.j)("LoadingScreen")
```

#### 79. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1142-L1143` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1142-L1143) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1142-L1143)

```diff
-         for (let ZC = 0; ZC < bC.c.Instances.length; ZC++) {
-           const QC = bC.c.Instances[ZC];
+         for (let Ik = 0; Ik < ik.e.Instances.length; Ik++) {
+           const Xk = ik.e.Instances[Ik];
```

#### 80. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1153)

```diff
-   39674: (CC, zC, ZC) => {
+   39837: (kk, Fk, Ik) => {
```

#### 81. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1170)

```diff
-   39684: (CC, zC, ZC) => {
+   39852: (kk, Fk, Ik) => {
```

#### 82. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1175-L1182` → after: `L1179-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1179-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1179-L1182) · [Before (L1175-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1175-L1182)

```diff
-       l: () => MC,
-       o: () => SC,
-       s: () => GC,
-       t: () => WC,
-       v: () => qC,
-       w: () => FC,
-       y: () => oC,
-       z: () => fC
+       k: () => qk,
+       n: () => Lk,
+       q: () => ak,
+       u: () => lk
```

#### 83. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1222)

```diff
-         const wC = zC.VZC();
+         const Tk = Fk.iXk();
```

#### 84. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1318)

```diff
-         this._cacheMatrix(CC, zC) && (this.engine.setMatrices(this._uniforms[CC], zC.VZC()) || (this._valueCache[CC] = null))
+         this._cacheMatrix(kk, Fk) && (this.engine.setMatrices(this._uniforms[kk], Fk.iXk()) || (this._valueCache[kk] = null))
```

#### 85. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1367)

```diff
-     var wC = ZC(39692);
+     var Tk = Ik(39860);
```

#### 86. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1465)

```diff
-       return PC((0, wC.h)(CC, ZC, QC), zC, bC, nC)
+       return Jk((0, Tk.f)(kk, Ik, Xk), Fk, ik, yk)
```

#### 87. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${zC} shader object. gl error=${wC}, gl isContextLost=${ZC.isContextLost()}, _contextWasLost=${QC}`)
+         throw new Error(`Something went wrong while creating a gl ${Fk} shader object. gl error=${Tk}, gl isContextLost=${Ik.isContextLost()}, _contextWasLost=${Xk}`)
```

#### 88. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1492)

```diff
-   39663: (CC, zC, ZC) => {
+   39825: (kk, Fk, Ik) => {
```

#### 89. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1496-L1501)

```diff
-     var QC = ZC(39666),
-       wC = ZC(39684),
-       bC = ZC(39721),
-       nC = ZC(39738),
-       fC = ZC(38507),
-       oC = ZC(39680);
+     var Xk = Ik(39830),
+       Tk = Ik(39852),
+       ik = Ik(39885),
+       yk = Ik(39902),
+       lk = Ik(38674),
+       ak = Ik(39850);
```

#### 90. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1542-L1549)

```diff
-     var NC = ZC(39740),
-       MC = ZC(39747),
-       gC = ZC(39756),
-       SC = ZC(39650),
-       pC = ZC(39692),
-       PC = ZC(39676),
-       GC = ZC(39758),
-       RC = ZC(39735);
+     var Zk = Ik(39906),
+       jk = Ik(39923),
+       ek = Ik(39931),
+       wk = Ik(39818),
+       Hk = Ik(39860),
+       Jk = Ik(39841),
+       xk = Ik(39939),
+       Pk = Ik(39894);
```

#### 91. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1551)

```diff
-     class xC extends bC.b {
+     class Qk extends ik.c {
```

#### 92. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1562)

```diff
-         return QC.b.ShadersRepository
+         return Xk.d.ShadersRepository
```

#### 93. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1565)

```diff
-         QC.b.ShadersRepository = CC
+         Xk.d.ShadersRepository = kk
```

#### 94. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1568)

```diff
-         return this.fS > 1 && !this.disableUniformBuffers
+         return this.tw > 1 && !this.disableUniformBuffers
```

#### 95. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1615)

```diff
-               (0, wC.y)(this._gl)
+               (0, Tk.q)(this._gl)
```

#### 96. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1617)

```diff
-               CC.preventDefault(), this._contextWasLost = !0, (0, wC.y)(this._gl), fC.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               kk.preventDefault(), this._contextWasLost = !0, (0, Tk.q)(this._gl), lk.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 97. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.fS > 1 ? new WC : new qC;
-         const nC = `Babylon.js v${xC.Version}`;
-         fC.c.Log(nC + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", nC);
-         const oC = (0, wC.z)(this._gl);
+         this._shaderProcessor = this.tw > 1 ? new tk : new qk;
+         const yk = `Babylon.js v${Qk.Version}`;
+         lk.e.Log(yk + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", yk);
+         const ak = (0, Tk.u)(this._gl);
```

#### 98. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!zC, this._alphaState = new RC.d(this._caps.blendParametersPerTarget), zC && (this._gl.blendEquationSeparateIndexed = zC.blendEquationSeparateiOES.bind(zC), this._gl.blendEquationIndexed = zC.blendEquationiOES.bind(zC), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!Fk, this._alphaState = new Pk.b(this._caps.blendParametersPerTarget), Fk && (this._gl.blendEquationSeparateIndexed = Fk.blendEquationSeparateiOES.bind(Fk), this._gl.blendEquationIndexed = Fk.blendEquationiOES.bind(Fk), this._gl. … [truncated]
```

#### 99. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1861)

```diff
-             if (void 0 !== ZC && (0, GC.l)(ZC)) {
+             if (void 0 !== Ik && (0, xk.k)(Ik)) {
```

#### 100. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1863)

```diff
-               void 0 !== ZC && (0, GC.n)(ZC) ? (xC._TempClearColorUint32[0] = 255 * CC.r, xC._TempClearColorUint32[1] = 255 * CC.g, xC._TempClearColorUint32[2] = 255 * CC.b, xC._TempClearColorUint32[3] = 255 * CC.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, xC._TempClearColorUin … [truncated]
+               void 0 !== Ik && (0, xk.l)(Ik) ? (Qk._TempClearColorUint32[0] = 255 * kk.r, Qk._TempClearColorUint32[1] = 255 * kk.g, Qk._TempClearColorUint32[2] = 255 * kk.b, Qk._TempClearColorUint32[3] = 255 * kk.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qk._TempClearColorUin … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1868)

```diff
-         ZC && (this.BZC ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), nC |= this._gl.DEPTH_BUFFER_BIT), QC && (this._gl.clearStencil(wC), nC |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(nC)
+         Ik && (this.IXk ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), yk |= this._gl.DEPTH_BUFFER_BIT), Xk && (this._gl.clearStencil(Tk), yk |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(yk)
```

#### 102. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1871-L1872)

```diff
-         if ((0, GC.l)(ZC)) {
-           const ZC = (0, GC.n)(QC),
+         if ((0, xk.k)(Ik)) {
+           const Ik = (0, xk.l)(Xk),
```

#### 103. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1882)

```diff
-         super.yR(), this._badOS && this.flushFramebuffer()
+         super.Hx(), this._badOS && this.flushFramebuffer()
```

#### 104. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = CC, this._integerMRTAttachmentsMask = !CC.isMulti && CC.texture && (0, GC.l)(CC.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(oC._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._integerMRTAttachmentsMask = !kk.isMulti && kk.texture && (0, xk.k)(kk.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(ak._frameb … [truncated]
```

#### 105. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1900)

```diff
-           CC.is3D && (CC.texture.width === FC.width && CC.texture.height === FC.height && CC.texture.depth === FC.depth || fC.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           kk.is3D && (kk.texture.width === Lk.width && kk.texture.height === Lk.height && kk.texture.depth === Lk.depth || lk.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 106. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1964-L1965)

```diff
-         const QC = new NC.c(ZC);
-         return this.bindArrayBuffer(QC), "number" !== typeof CC ? CC instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(CC), zC), QC.HW = 4 * CC.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, CC, zC), QC.HW = CC.byteLength) : (this._gl.bufferDa … [truncated]
+         const Xk = new Zk.e(Ik);
+         return this.bindArrayBuffer(Xk), "number" !== typeof kk ? kk instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(kk), Fk), Xk.St = 4 * kk.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, Fk), Xk.St = kk.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L1975)

```diff
-           wC = new NC.c(QC);
+           Tk = new Zk.e(Xk);
```

#### 108. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2162)

```diff
-         zC && zC.program && (zC.program.__SPECTOR_rebuildProgram = null, (0, PC.p)(zC), this._gl && (this._currentProgram === zC.program && this._setProgram(null), this._gl.deleteProgram(zC.program)))
+         Fk && Fk.program && (Fk.program.__SPECTOR_rebuildProgram = null, (0, Jk.g)(Fk), this._gl && (this._currentProgram === Fk.program && this._setProgram(null), this._gl.deleteProgram(Fk.program)))
```

#### 109. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2165)

```diff
-         return (0, pC.l)(CC, this.isNDCHalfZRange, this.BZC, this.useExactSrgbConversions)
+         return (0, Hk.i)(kk, this.isNDCHalfZRange, this.IXk, this.useExactSrgbConversions)
```

#### 110. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2170-L2171)

```diff
-         const MC = "string" === typeof CC ? CC : CC.vertexToken || CC.vertexSource || CC.vertexElement || CC.vertex,
-           gC = "string" === typeof CC ? CC : CC.fragmentToken || CC.fragmentSource || CC.fragmentElement || CC.fragment,
+         const jk = "string" === typeof kk ? kk : kk.vertexToken || kk.vertexSource || kk.vertexElement || kk.vertex,
+           ek = "string" === typeof kk ? kk : kk.fragmentToken || kk.fragmentSource || kk.fragmentElement || kk.fragment,
```

#### 111. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2181-L2182` → after: `L2181-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2181-L2182) · [Before (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2181-L2182)

```diff
-         this._gl && (0, wC.z)(this._gl);
-         const RC = new QC.b(CC, zC, pC ? this : ZC, bC, this, nC, fC, oC, qC, FC, GC, zC.shaderLanguage ?? WC, zC.extraInitializationsAsync ?? NC);
+         this._gl && (0, Tk.u)(this._gl);
+         const Pk = new Xk.d(kk, Fk, Hk ? this : Ik, ik, this, yk, lk, ak, qk, Lk, xk, Fk.shaderLanguage ?? tk, Fk.extraInitializationsAsync ?? Zk);
```

#### 112. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2190-L2191` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2190-L2191) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2190-L2191)

```diff
-         const nC = (0, wC.z)(this._gl);
-         return nC._contextWasLost = this._contextWasLost, nC.validateShaderPrograms = this.validateShaderPrograms, (0, wC.v)(CC, zC, ZC, QC || this._gl, bC)
+         const yk = (0, Tk.u)(this._gl);
+         return yk._contextWasLost = this._contextWasLost, yk.validateShaderPrograms = this.validateShaderPrograms, (0, Tk.k)(kk, Fk, Ik, Xk || this._gl, ik)
```

#### 113. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2195-L2196` → after: `L2195-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2195-L2196) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2195-L2196)

```diff
-         const fC = (0, wC.z)(this._gl);
-         return fC._contextWasLost = this._contextWasLost, fC.validateShaderPrograms = this.validateShaderPrograms, (0, wC.w)(CC, zC, ZC, QC, bC || this._gl, nC)
+         const lk = (0, Tk.u)(this._gl);
+         return lk._contextWasLost = this._contextWasLost, lk.validateShaderPrograms = this.validateShaderPrograms, (0, Tk.n)(kk, Fk, Ik, Xk, ik || this._gl, yk)
```

#### 114. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2203)

```diff
-           (0, wC.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, Tk.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 115. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2205)

```diff
-         const zC = (0, wC.t)(this._gl, CC);
+         const Fk = (0, Tk.j)(this._gl, kk);
```

#### 116. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2211)

```diff
-         return (0, wC.j)(CC, this._gl, this.validateShaderPrograms)
+         return (0, Tk.d)(kk, this._gl, this.validateShaderPrograms)
```

#### 117. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2214-L2215)

```diff
-         const NC = (0, wC.z)(this._gl);
-         return NC._contextWasLost = this._contextWasLost, NC.validateShaderPrograms = this.validateShaderPrograms, NC._createShaderProgramInjection = this._createShaderProgram.bind(this), NC.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), NC.createShader … [truncated]
+         const Zk = (0, Tk.u)(this._gl);
+         return Zk._contextWasLost = this._contextWasLost, Zk.validateShaderPrograms = this.validateShaderPrograms, Zk._createShaderProgramInjection = this._createShaderProgram.bind(this), Zk.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Zk.createShader … [truncated]
```

#### 118. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2219)

```diff
-         return (0, wC.d)(CC, zC, ZC, QC, bC)
+         return (0, Tk.b)(kk, Fk, Ik, Xk, ik)
```

#### 119. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2222)

```diff
-         return !this._isDisposed && (0, wC.l)(CC, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, Tk.g)(kk, this._gl, this.validateShaderPrograms)
```

#### 120. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2225)

```diff
-         (0, wC.h)(CC, zC)
+         (0, Tk.c)(kk, Fk)
```

#### 121. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2244)

```diff
-         (CC = null !== CC && (0, nC.c)(CC) ? CC.effect : CC) && CC !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(CC), this._currentEffect = CC, CC.onBind && CC.onBind(CC), CC._onBindObservable && CC._onBindObservable.notifyObse … [truncated]
+         (kk = null !== kk && (0, yk.e)(kk) ? kk.effect : kk) && kk !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(kk), this._currentEffect = kk, kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObse … [truncated]
```

#### 122. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2394)

```diff
-         return new gC.d(this._createTexture(), this._gl)
+         return new ek.b(this._createTexture(), this._gl)
```

#### 123. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2407)

```diff
-         void 0 !== zC && "object" === typeof zC ? (ZC = !!zC.generateMipMaps, bC = !!zC.createMipMaps, nC = void 0 === zC.type ? 0 : zC.type, oC = void 0 === zC.samplingMode ? 3 : zC.samplingMode, qC = void 0 === zC.format ? 5 : zC.format, FC = void 0 !== zC.useSRGBBuffer && zC.u … [truncated]
+         void 0 !== Fk && "object" === typeof Fk ? (Ik = !!Fk.generateMipMaps, ik = !!Fk.createMipMaps, yk = void 0 === Fk.type ? 0 : Fk.type, ak = void 0 === Fk.samplingMode ? 3 : Fk.samplingMode, qk = void 0 === Fk.format ? 5 : Fk.format, Lk = void 0 !== Fk.useSRGBBuffer && Fk.u … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2411)

```diff
-           AC = new SC.c(this, wC),
+           Kk = new wk.b(this, Tk),
```

#### 125. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2427)

```diff
-         if (RC.texParameteri(eC, RC.TEXTURE_MAG_FILTER, vC.mag), RC.texParameteri(eC, RC.TEXTURE_MIN_FILTER, vC.min), RC.texParameteri(eC, RC.TEXTURE_WRAP_S, RC.CLAMP_TO_EDGE), RC.texParameteri(eC, RC.TEXTURE_WRAP_T, RC.CLAMP_TO_EDGE), pC && this.fS > 1 && (0 === MC ? (RC.texPara … [truncated]
+         if (Pk.texParameteri(vk, Pk.TEXTURE_MAG_FILTER, Sk.mag), Pk.texParameteri(vk, Pk.TEXTURE_MIN_FILTER, Sk.min), Pk.texParameteri(vk, Pk.TEXTURE_WRAP_S, Pk.CLAMP_TO_EDGE), Pk.texParameteri(vk, Pk.TEXTURE_WRAP_T, Pk.CLAMP_TO_EDGE), Hk && this.tw > 1 && (0 === jk ? (Pk.texPara … [truncated]
```

#### 126. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2437)

```diff
-         return CC && this._caps.supportSRGBBuffers && (this.fS > 1 || zC)
+         return kk && this._caps.supportSRGBBuffers && (this.tw > 1 || Fk)
```

#### 127. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2464)

```diff
-             const CC = new SC.c(this, 2);
+             const kk = new wk.b(this, 2);
```
