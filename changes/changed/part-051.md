# Changed — Bundle Modifications Report (Part 051 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `51 / 142` (**436** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (516 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 337. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6311)

```diff
-           if (xp < Lp - 1 ? Yp._outputTexture = Op[xp + 1].activate(Ip, ip?.texture) : (ip ? (Sp.bindFramebuffer(ip, cp, void 0, void 0, op), Yp._outputTexture = ip) : (Sp.restoreDefaultFramebuffer(), Yp._outputTexture = null), Sp._debugInsertMarker?.(`post process ${Op[xp].name} … [truncated]
+           if (nT < HT - 1 ? kT._outputTexture = WT[nT + 1].activate(MT, UT?.texture) : (UT ? (gT.bindFramebuffer(UT, mT, void 0, void 0, zT), kT._outputTexture = UT) : (gT.restoreDefaultFramebuffer(), kT._outputTexture = null), gT._debugInsertMarker?.(`post process ${WT[nT].name} … [truncated]
```

#### 338. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6318-L6319` → after: `L6318-L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6318-L6319) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6318-L6319)

```diff
-         const pp = this._vertexBuffers[Op.j.PositionKind];
-         pp && (pp.dispose(), this._vertexBuffers[Op.j.PositionKind] = null), this._indexBuffer && (this._scene.gy()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         const TT = this._vertexBuffers[WT.i.PositionKind];
+         TT && (TT.dispose(), this._vertexBuffers[WT.i.PositionKind] = null), this._indexBuffer && (this._scene.eB()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
```

#### 339. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6323` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6323) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6323)

```diff
-   40365: (pp, ip, cp) => {
+   40274: (TT, UT, mT) => {
```

#### 340. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6327-L6328)

```diff
-     var Op = cp(40314),
-       op = cp(37320);
+     var WT = mT(40215),
+       zT = mT(37188);
```

#### 341. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6350)

```diff
-         this.index = pp, this._opaqueSubMeshes = new Op.g(256), this._transparentSubMeshes = new Op.g(256), this._alphaTestSubMeshes = new Op.g(256), this._depthOnlySubMeshes = new Op.g(256), this._particleSystems = new Op.g(256), this._spriteManagers = new Op.g(256), this._empty … [truncated]
+         this.index = TT, this._opaqueSubMeshes = new WT.f(256), this._transparentSubMeshes = new WT.f(256), this._alphaTestSubMeshes = new WT.f(256), this._depthOnlySubMeshes = new WT.f(256), this._particleSystems = new WT.f(256), this._spriteManagers = new WT.f(256), this._empty … [truncated]
```

#### 342. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6359)

```diff
-         const Yp = this._scene.gy();
+         const kT = this._scene.eB();
```

#### 343. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6389` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6389) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6389)

```diff
-           for (; Ap < pp.length; Ap++) Dp = pp.data[Ap], Dp._alphaIndex = Dp.getMesh().alphaIndex, Dp._distanceToCamera = op.o.Distance(Dp.bJ().Yop.centerWorld, Pp);
+           for (; lT < TT.length; lT++) jT = TT.data[lT], jT._alphaIndex = jT.getMesh().alphaIndex, jT._distanceToCamera = zT.p.Distance(jT.rV().rWT.centerWorld, LT);
```

#### 344. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6405` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6405) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6405)

```diff
-         const Ip = pp[0].getMesh().Gl();
+         const MT = TT[0].getMesh().KF();
```

#### 345. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6410` → after: `L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6410) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6410)

```diff
-             const pp = op.Ky();
+             const TT = zT.wB();
```

#### 346. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6413)

```diff
-               const cp = pp.Gl().gy();
+               const mT = TT.KF().eB();
```

#### 347. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6430` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6430) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6430)

```diff
-               cp(op, pp[ip]) < 0 ? Sp = ip : Ip = ip + 1
+               mT(zT, TT[UT]) < 0 ? gT = UT : MT = UT + 1
```

#### 348. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6487)

```diff
-         void 0 === ip && (ip = pp.getMesh()), void 0 === cp && (cp = pp.Ky()), null !== cp && void 0 !== cp && (cp.needAlphaBlendingForMesh(ip) ? this._transparentSubMeshes.push(pp) : cp.needAlphaTestingForMesh(ip) ? (cp.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+         void 0 === UT && (UT = TT.getMesh()), void 0 === mT && (mT = TT.wB()), null !== mT && void 0 !== mT && (mT.needAlphaBlendingForMesh(UT) ? this._transparentSubMeshes.push(TT) : mT.needAlphaTestingForMesh(UT) ? (mT.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6518` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6518) · [Before (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6518)

```diff
-     Yp._ZeroVector = op.o.Zero()
+     kT._ZeroVector = zT.p.Zero()
```

#### 350. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6520)

```diff
-   40358: (pp, ip, cp) => {
+   40270: (TT, UT, mT) => {
```

#### 351. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6524)

```diff
-     var Op = cp(40365);
+     var WT = mT(40274);
```

#### 352. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6542-L6543)

```diff
-           if (pp.Am)
-             for (const ip of pp.Am) ip._wasDispatched = !1;
+           if (TT.rY)
+             for (const UT of TT.rY) UT._wasDispatched = !1;
```

#### 353. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6546` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6546) · [Before (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6546)

```diff
-         for (const pp of this._scene.Wm) pp._wasDispatched = !1
+         for (const TT of this._scene.EY) TT._wasDispatched = !1
```

#### 354. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6566` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6566) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6566)

```diff
-         this._depthStencilBufferAlreadyCleaned || (this._scene.gy().clear(null, !1, pp, ip), this._depthStencilBufferAlreadyCleaned = !0)
+         this._depthStencilBufferAlreadyCleaned || (this._scene.eB().clear(null, !1, TT, UT), this._depthStencilBufferAlreadyCleaned = !0)
```

#### 355. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6576` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6576) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6576)

```diff
-         Ap.pw = this._scene, Ap.camera = this._scene.activeCamera, Ap.renderingManager = this;
+         lT.XZ = this._scene, lT.camera = this._scene.activeCamera, lT.renderingManager = this;
```

#### 356. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6661` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6661) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6661)

```diff
-   40124: (pp, ip, cp) => {
+   39994: (TT, UT, mT) => {
```

#### 357. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6663)

```diff
-       c: () => Op
+       b: () => WT
```

#### 358. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6710` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6710) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6710)

```diff
-             const ip = op < this._numTargetEnabled ? op : 0;
+             const UT = zT < this._numTargetEnabled ? zT : 0;
```

#### 359. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6717)

```diff
-             const ip = pp < this._numTargetEnabled ? 4 * pp : 0;
+             const UT = TT < this._numTargetEnabled ? 4 * TT : 0;
```

#### 360. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6724` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6724) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6724)

```diff
-             const ip = pp < this._numTargetEnabled ? 2 * pp : 0;
+             const UT = TT < this._numTargetEnabled ? 2 * TT : 0;
```

#### 361. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6800` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6800) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6800)

```diff
-   40390: (pp, ip, cp) => {
+   40305: (TT, UT, mT) => {
```

#### 362. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6807` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6807) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6807)

```diff
-   40296: (pp, ip, cp) => {
+   40198: (TT, UT, mT) => {
```

#### 363. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6809-L6810` → after: `L6809-L6810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6809-L6810) · [Before (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6809-L6810)

```diff
-       c: () => Dc,
-       f: () => Lc
+       e: () => nm,
+       i: () => Mm
```

#### 364. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6812-L6816` → after: `L6812-L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6812-L6816) · [Before (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6812-L6816)

```diff
-     var Op = cp(40304),
-       op = cp(40107),
-       Ip = cp(40122),
-       Sp = cp(37349),
-       xp = cp(40314);
+     var WT = mT(40201),
+       zT = mT(39975),
+       MT = mT(39986),
+       gT = mT(37219),
+       nT = mT(40215);
```

#### 365. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6834` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6834) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6834)

```diff
-         return void 0 !== cp ? cp : (this.add(pp, ip), ip)
+         return void 0 !== mT ? mT : (this.add(TT, UT), UT)
```

#### 366. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6871-L6875` → after: `L6871-L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6871-L6875) · [Before (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6871-L6875)

```diff
-     var Yp = cp(40236),
-       Dp = cp(37320),
-       Ap = cp(40318),
-       Pp = cp(40332),
-       Wp = cp(40334);
+     var kT = mT(40129),
+       jT = mT(37188),
+       lT = mT(40223),
+       LT = mT(40242),
+       pT = mT(40251);
```

#### 367. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6881)

```diff
-         const Op = pp.Gl();
+         const WT = TT.KF();
```

#### 368. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6894-L6901` → after: `L6894-L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6894-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6894-L6901) · [Before (L6894-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6894-L6901)

```diff
-     var Up = cp(40345),
-       wp = cp(40352),
-       vp = cp(40358),
-       tp = cp(40368),
-       Hp = cp(40071),
-       dp = cp(37345),
-       ep = cp(40096),
-       jp = cp(40372);
+     var ZT = mT(40260),
+       cT = mT(40263),
+       vT = mT(40270),
+       fT = mT(40283),
+       qT = mT(39946),
+       iT = mT(37216),
+       bT = mT(39965),
+       OT = mT(40288);
```

#### 369. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6926` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6926) · [Before (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6926)

```diff
-     var mp, Rp, qp, Mp, Cp, Ep, Xp, lp = cp(40380);
+     var YT, JT, xT, dT, wT, tT, aT, yT = mT(40290);
```

#### 370. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6948)

```diff
-     var Qp = cp(40388);
+     var XT = mT(40297);
```

#### 371. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6959` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L6959) · [Before (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L6959)

```diff
-             throw `Unable to generate event for device ${mp[pp]}`
+             throw `Unable to generate event for device ${YT[TT]}`
```

#### 372. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7034)

```diff
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Op.i.IsSafari(), this._usingMacOs = (0, Hp.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = pp => {}, this._keyboardUpEvent = pp => {}, this._k … [truncated]
+         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = WT.j.IsSafari(), this._usingMacOs = (0, qT.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = TT => {}, this._keyboardUpEvent = TT => {}, this._k … [truncated]
```

#### 373. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7040` → after: `L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7040) · [Before (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7040)

```diff
-         if (!op) throw `Unable to find device ${mp[pp]}`;
+         if (!zT) throw `Unable to find device ${YT[TT]}`;
```

#### 374. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7043-L7044` → after: `L7043-L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7043-L7044) · [Before (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7043-L7044)

```diff
-         if (void 0 === Ip) throw `Unable to find input ${cp} for device ${mp[pp]} in slot ${ip}`;
-         return cp === Rp.Move && Op.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Ip
+         if (void 0 === MT) throw `Unable to find input ${mT} for device ${YT[TT]} in slot ${UT}`;
+         return mT === JT.Move && WT.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), MT
```

#### 375. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7087` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7087) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7087)

```diff
-         if (void 0 === ip) throw `Unable to register device ${mp[pp]} to undefined slot.`;
+         if (void 0 === UT) throw `Unable to register device ${YT[TT]} to undefined slot.`;
```

#### 376. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7133)

```diff
-         this._maxTouchPoints = (0, Hp.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
+         this._maxTouchPoints = (0, qT.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
```

#### 377. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7141` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7141) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7141)

```diff
-             if (!(op >= 0)) return void Op.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (!(zT >= 0)) return void WT.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 378. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7155` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7155) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7155)

```diff
-             if (-1 === ip && (ip = this._activeTouchIds.indexOf(-1)), !(ip >= 0)) return void Op.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (-1 === UT && (UT = this._activeTouchIds.indexOf(-1)), !(UT >= 0)) return void WT.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 379. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7353` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7353) · [Before (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7353)

```diff
-         })), this.onDeviceDisconnectedObservable = new Sp.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = pp.Kl.add((() => {
+         })), this.onDeviceDisconnectedObservable = new gT.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = TT.SF.add((() => {
```

#### 380. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7358` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7358) · [Before (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7358)

```diff
-         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
+         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
```

#### 381. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7394)

```diff
-     var ap = cp(40390);
+     var CT = mT(40305);
```

#### 382. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7426` → after: `L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7426) · [Before (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7426)

```diff
-         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
+         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7435` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7435) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7435)

```diff
-         return new Dp.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
+         return new jT.o(this._unTranslatedPointerX, this._unTranslatedPointerY)
```

#### 384. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7450` → after: `L7450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7450) · [Before (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7450)

```diff
-         const ip = this._scene.gy().getInputElementClientRect();
+         const UT = this._scene.eB().getInputElementClientRect();
```

#### 385. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7455` → after: `L7455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7455) · [Before (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7455)

```diff
-           Op = cp.gy(),
+           WT = mT.eB(),
```

#### 386. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7465` → after: `L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7465) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7465)

```diff
-         cp.onPointerMove && (pp = pp || this._pickMove(ip), cp.onPointerMove(ip, pp, Ip)), pp ? (Sp = new jp.i(Ip, ip, pp), this._setRayOnPointerInfo(pp, ip)) : (Sp = new jp.i(Ip, ip, null, this), this._movePointerInfo = Sp), cp.onPointerObservable.hasObservers() && cp.onPointerO … [truncated]
+         mT.onPointerMove && (TT = TT || this._pickMove(UT), mT.onPointerMove(UT, TT, MT)), TT ? (gT = new OT.h(MT, UT, TT), this._setRayOnPointerInfo(TT, UT)) : (gT = new OT.h(MT, UT, null, this), this._movePointerInfo = gT), mT.onPointerObservable.hasObservers() && mT.onPointerO … [truncated]
```

#### 387. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7469` → after: `L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7469) · [Before (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7469)

```diff
-         pp && ap.c._IsPickingAvailable && (pp.ray || (pp.ray = cp.createPickingRay(ip.offsetX, ip.offsetY, Dp.b.Identity(), cp.activeCamera)))
+         TT && CT.c._IsPickingAvailable && (TT.ray || (TT.ray = mT.createPickingRay(UT.offsetX, UT.offsetY, jT.e.Identity(), mT.activeCamera)))
```

#### 388. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7482` → after: `L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7482) · [Before (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7482)

```diff
-           op = new jp.h(cp, ip, this._unTranslatedPointerX, this._unTranslatedPointerY);
+           zT = new OT.f(mT, UT, this._unTranslatedPointerX, this._unTranslatedPointerY);
```

#### 389. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7487` → after: `L7487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7487) · [Before (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7487)

```diff
-           cp = ip.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, ip.pointerMovePredicate, ip.pointerMoveFastCheck, ip.cameraToUseForPointers, ip.pointerMoveTrianglePredicate);
+           mT = UT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, UT.pointerMovePredicate, UT.pointerMoveFastCheck, UT.cameraToUseForPointers, UT.pointerMoveTrianglePredicate);
```

#### 390. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7503` → after: `L7503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7503) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7503)

```diff
-         pp.pointerMovePredicate || (pp.pointerMovePredicate = ip => (ip._isPointerMovePickable ?? ip.Ow) && ip.isVisible && ip.isReady() && ip.isEnabled() && (ip.enablePointerMoveEvents || pp.constantlyUpdateMeshUnderPointer || null !== ip._getActionManagerForTrigger()) && (!pp.c … [truncated]
+         TT.pointerMovePredicate || (TT.pointerMovePredicate = UT => (UT._isPointerMovePickable ?? UT.QZ) && UT.isVisible && UT.isReady() && UT.isEnabled() && (UT.enablePointerMoveEvents || TT.constantlyUpdateMeshUnderPointer || null !== UT._getActionManagerForTrigger()) && (!TT.c … [truncated]
```

#### 391. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7506` → after: `L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7506) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7506)

```diff
-         const Op = cp.gy().getInputElement();
+         const WT = mT.eB().getInputElement();
```

#### 392. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7539` → after: `L7539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7539) · [Before (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7539)

```diff
-               const pp = cp.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, (pp => pp.Ow && pp.isVisible && pp.isReady() && pp.actionManager && pp.actionManager.hasSpecificTrigger(8) && pp === this._pickedDownMesh), !1, cp.cameraToUseForPointers);
+               const TT = mT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, (TT => TT.QZ && TT.isVisible && TT.isReady() && TT.actionManager && TT.actionManager.hasSpecificTrigger(8) && TT === this._pickedDownMesh), !1, mT.cameraToUseForPointers);
```

#### 393. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7547` → after: `L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7547) · [Before (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7547)

```diff
-         pp ? (cp.onPointerDown && cp.onPointerDown(ip, pp, op), Op = new jp.i(op, ip, pp), this._setRayOnPointerInfo(pp, ip)) : Op = new jp.i(op, ip, null, this), cp.onPointerObservable.hasObservers() && cp.onPointerObservable.notifyObservers(Op, op)
+         TT ? (mT.onPointerDown && mT.onPointerDown(UT, TT, zT), WT = new OT.h(zT, UT, TT), this._setRayOnPointerInfo(TT, UT)) : WT = new OT.h(zT, UT, null, this), mT.onPointerObservable.hasObservers() && mT.onPointerObservable.notifyObservers(WT, zT)
```

#### 394. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7556` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7556) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7556)

```diff
-         cp ? op.xA = !0 : op.singleClick = !0, this._checkPrePointerObservable(pp, Op, jp.d.POINTERUP) || this._processPointerUp(pp, Op, op)
+         mT ? zT.Cj = !0 : zT.singleClick = !0, this._checkPrePointerObservable(TT, WT, OT.d.POINTERUP) || this._processPointerUp(TT, WT, zT)
```

#### 395. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7563` → after: `L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7563) · [Before (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7563)

```diff
-               op = new jp.i(cp, ip, pp);
+               zT = new OT.h(mT, UT, TT);
```

#### 396. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7570` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7570) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7570)

```diff
-             cp.xA && Op && Op.processTrigger(6, yp.CreateNew(pp.pickedMesh, ip, pp))
+             mT.Cj && WT && WT.processTrigger(6, BT.CreateNew(TT.pickedMesh, UT, TT))
```

#### 397. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7573` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7573) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7573)

```diff
-           for (const op of Op._pointerUpStage) pp = op.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pp, ip, cp.xA);
+           for (const zT of WT._pointerUpStage) TT = zT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, UT, mT.Cj);
```

#### 398. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7579` → after: `L7579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7579) · [Before (L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7579)

```diff
-           const op = new jp.i(jp.d.POINTERUP, ip, pp);
+           const zT = new OT.h(OT.d.POINTERUP, UT, TT);
```

#### 399. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7582-L7583` → after: `L7582-L7583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7582-L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7582-L7583) · [Before (L7582-L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7582-L7583)

```diff
-             if (cp.singleClick ? op = jp.d.POINTERTAP : cp.xA && (op = jp.d.POINTERDOUBLETAP), op) {
-               const cp = new jp.i(op, ip, pp);
+             if (mT.singleClick ? zT = OT.d.POINTERTAP : mT.Cj && (zT = OT.d.POINTERDOUBLETAP), zT) {
+               const mT = new OT.h(zT, UT, TT);
```

#### 400. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7599)

```diff
-           Ip = op.gy();
+           MT = zT.eB();
```

#### 401. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7602` → after: `L7602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7602) · [Before (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7602)

```diff
-             const ip = op.skipPointerUpPicking || 0 === op._registeredActions && !this._checkForPicking() && !op.onPointerUp ? null : op.SW(this._unTranslatedPointerX, this._unTranslatedPointerY, op.pointerUpPredicate, op.pointerUpFastCheck, op.cameraToUseForPointers, op.pointerU … [truncated]
+             const UT = zT.skipPointerUpPicking || 0 === zT._registeredActions && !this._checkForPicking() && !zT.onPointerUp ? null : zT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, zT.pointerUpPredicate, zT.pointerUpFastCheck, zT.cameraToUseForPointers, zT.pointerU … [truncated]
```

#### 402. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7610` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7610) · [Before (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7610)

```diff
-               Op = new jp.i(cp, ip, this._currentPickResult);
+               WT = new OT.h(mT, UT, this._currentPickResult);
```

#### 403. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7634` → after: `L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7634) · [Before (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7634)

```diff
-               !Yp && kp.HasSpecificTrigger(6) && (Ip = this._initActionManager(Ip, op), Ip && (Yp = Ip.hasSpecificTrigger(6))), Yp && (Sp === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Fp.DoubleClickDelay && !this._doubleClickOccured ? (op.has … [truncated]
+               !kT && eT.HasSpecificTrigger(6) && (MT = this._initActionManager(MT, zT), MT && (kT = MT.hasSpecificTrigger(6))), kT && (gT === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < KT.DoubleClickDelay && !this._doubleClickOccured ? (zT.has … [truncated]
```

#### 404. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7647` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7647) · [Before (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7647)

```diff
-           if (op.skipPointerMovePicking) return void this._processPointerMove(new Wp.b, pp);
+           if (zT.skipPointerMovePicking) return void this._processPointerMove(new pT.c, TT);
```

#### 405. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7662` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7662) · [Before (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7662)

```diff
-                     Ip = new jp.i(cp, ip, this._currentPickResult);
+                     MT = new OT.h(mT, UT, this._currentPickResult);
```

#### 406. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7667` → after: `L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7667) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7667)

```diff
-           this._pointerCaptures[pp.pointerId] = !0, op.pointerDownPredicate || (op.pointerDownPredicate = pp => pp.Ow && pp.isVisible && pp.isReady() && pp.isEnabled() && (!op.cameraToUseForPointers || 0 !== (op.cameraToUseForPointers.layerMask & pp.layerMask))), this._pickedDown … [truncated]
+           this._pointerCaptures[TT.pointerId] = !0, zT.pointerDownPredicate || (zT.pointerDownPredicate = TT => TT.QZ && TT.isVisible && TT.isReady() && TT.isEnabled() && (!zT.cameraToUseForPointers || 0 !== (zT.cameraToUseForPointers.layerMask & TT.layerMask))), this._pickedDown … [truncated]
```

#### 407. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7672` → after: `L7672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7672) · [Before (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7672)

```diff
-               ip.hasSwiped || (ip.singleClick && op.onPrePointerObservable.hasSpecificMask(jp.d.POINTERTAP) && this._checkPrePointerObservable(null, pp, jp.d.POINTERTAP) && (this._skipPointerTap = !0), ip.xA && op.onPrePointerObservable.hasSpecificMask(jp.d.POINTERDOUBLETAP) && t … [truncated]
+               UT.hasSwiped || (UT.singleClick && zT.onPrePointerObservable.hasSpecificMask(OT.d.POINTERTAP) && this._checkPrePointerObservable(null, TT, OT.d.POINTERTAP) && (this._skipPointerTap = !0), UT.Cj && zT.onPrePointerObservable.hasSpecificMask(OT.d.POINTERDOUBLETAP) && t … [truncated]
```

#### 408. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7674` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7674) · [Before (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7674)

```diff
-             this._pointerCaptures[pp.pointerId] ? (0 === pp.buttons && (this._pointerCaptures[pp.pointerId] = !1), (op.cameraToUseForPointers || op.activeCamera) && (op.pointerUpPredicate || (op.pointerUpPredicate = pp => pp.Ow && pp.isVisible && pp.isReady() && pp.isEnabled() && … [truncated]
+             this._pointerCaptures[TT.pointerId] ? (0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1), (zT.cameraToUseForPointers || zT.activeCamera) && (zT.pointerUpPredicate || (zT.pointerUpPredicate = TT => TT.QZ && TT.isVisible && TT.isReady() && TT.isEnabled() && … [truncated]
```

#### 409. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7677` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7677) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7677)

```diff
-           const ip = lp.d.KEYDOWN;
+           const UT = yT.e.KEYDOWN;
```

#### 410. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7679)

```diff
-             const cp = new lp.e(ip, pp);
+             const mT = new yT.i(UT, TT);
```

#### 411. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7683` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7683) · [Before (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7683)

```diff
-             const cp = new lp.f(ip, pp);
+             const mT = new yT.k(UT, TT);
```

#### 412. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7688)

```diff
-           const ip = lp.d.KEYUP;
+           const UT = yT.e.KEYUP;
```

#### 413. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7690)

```diff
-             const cp = new lp.e(ip, pp);
+             const mT = new yT.i(UT, TT);
```

#### 414. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7694` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7694) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7694)

```diff
-             const cp = new lp.f(ip, pp);
+             const mT = new yT.k(UT, TT);
```

#### 415. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7737-L7739` → after: `L7737-L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7737-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7737-L7739) · [Before (L7737-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7737-L7739)

```diff
-     var gp = cp(40159),
-       Gp = cp(37487),
-       rp = cp(37985);
+     var ST = mT(40039),
+       GT = mT(37367),
+       NT = mT(37885);
```

#### 416. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7747-L7749` → after: `L7747-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7747-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7747-L7749) · [Before (L7747-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7747-L7749)

```diff
-     var zp = cp(40257),
-       sp = cp(40398),
-       Kp = cp(37329);
+     var hT = mT(40151),
+       DT = mT(40310),
+       oT = mT(37205);
```

#### 417. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7755-L7758` → after: `L7755-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7755-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7755-L7758) · [Before (L7755-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7755-L7758)

```diff
-     var ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di, ei, ui, ji, ki, mi, Ri, qi, Mi, Ci, Ei, Xi, li, Qi, Ji, Bi, Ni, Ti, fi, bi, ai, ni, Fi, gi, Gi, ri, Zi, zi, si, Ki, Vi, pc, ic, cc, Oc = cp(38905),
-       oc = cp(37368);
-     const Ic = new Dp.q,
-       Sc = new Dp.q;
+     var RT, TU, UU, mU, WU, zU, MU, gU, nU, HU, kU, jU, lU, LU, pU, BU, ZU, cU, vU, fU, qU, iU, bU, OU, eU, YU, JU, xU, dU, wU, tU, aU, yU, XU, IU, QU, sU, FU, PU, VU, uU, CU, rU, KU, SU, GU, NU, EU, hU, DU, oU, AU, RU, Tm = mT(38800),
+       Um = mT(37239);
+     const mm = new jT.t,
+       Wm = new jT.t;
```

#### 418. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7765` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7765) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7765)

```diff
-         throw (0, ep.o)("StandardMaterial")
+         throw (0, bT.k)("StandardMaterial")
```

#### 419. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7768` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7768) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7768)

```diff
-         throw (0, ep.o)("DefaultCollisionCoordinator")
+         throw (0, bT.k)("DefaultCollisionCoordinator")
```

#### 420. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7834` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7834) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7834)

```diff
-         this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
+         this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
```

#### 421. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7930` → after: `L7930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7930) · [Before (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7930)

```diff
-         return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Dp.o.ZeroReadOnly
+         return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? jT.p.ZeroReadOnly
```

#### 422. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7994` → after: `L7994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L7994) · [Before (L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L7994)

```diff
-         this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), pp && (this._unObserveActiveCameras = (0, Kp.j)(pp, (() => {
+         this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), TT && (this._unObserveActiveCameras = (0, oT.e)(TT, (() => {
```

#### 423. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8047` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8047) · [Before (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8047)

```diff
-       uOp(pp) {
+       WWT(TT) {
```

#### 424. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8061` → after: `L8061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8061) · [Before (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8061)

```diff
-         this._inputManager = new Fp(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Gp.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new Sp.d, … [truncated]
+         this._inputManager = new KT(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new GT.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new gT.d, … [truncated]
```

#### 425. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8077` → after: `L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8077) · [Before (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8077)

```diff
-         this.defaultCameraLayerMask = cp.defaultCameraLayerMask, this.defaultRenderableLayerMask = cp.defaultRenderableLayerMask, pp = this._engine = pp || dp.e.LastCreatedEngine, cp.virtual ? pp._virtualScenes.push(this) : (dp.e._LastCreatedScene = this, pp.scenes.push(this)), ( … [truncated]
+         this.defaultCameraLayerMask = mT.defaultCameraLayerMask, this.defaultRenderableLayerMask = mT.defaultRenderableLayerMask, TT = this._engine = TT || iT.c.LastCreatedEngine, mT.virtual ? TT._virtualScenes.push(this) : (iT.c._LastCreatedScene = this, TT.scenes.push(this)), ( … [truncated]
```

#### 426. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8086` → after: `L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8086) · [Before (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8086)

```diff
-         return this._defaultSubMeshCandidates.data = pp.Am, this._defaultSubMeshCandidates.length = pp.Am.length, this._defaultSubMeshCandidates
+         return this._defaultSubMeshCandidates.data = TT.rY, this._defaultSubMeshCandidates.length = TT.rY.length, this._defaultSubMeshCandidates
```

#### 427. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8189` → after: `L8189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8189) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8189)

```diff
-         const cp = this.gy(),
+         const mT = this.eB(),
```

#### 428. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8195` → after: `L8195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8195) · [Before (L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8195)

```diff
-           if (!Op.Am || 0 === Op.Am.length) continue;
+           if (!WT.rY || 0 === WT.rY.length) continue;
```

#### 429. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8208-L8209` → after: `L8208-L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8208-L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8208-L8209) · [Before (L8208-L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8208-L8209)

```diff
-               for (const pp of Op.Am) {
-                 const ip = pp.Ky();
+               for (const TT of WT.rY) {
+                 const UT = TT.wB();
```

#### 430. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8227` → after: `L8227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8227) · [Before (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8227)

```diff
-         for (const Ip of this.Wm) Ip.isReady() || (op = !1);
+         for (const MT of this.EY) MT.isReady() || (zT = !1);
```

#### 431. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8301-L8302` → after: `L8301-L8302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8301-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8301-L8302) · [Before (L8301-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8301-L8302)

```diff
-         if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Ip.e.Now;
-         else if (this.onReadyTimeoutDuration > 0 && Ip.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
+         if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = MT.c.Now;
+         else if (this.onReadyTimeoutDuration > 0 && MT.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
```

#### 432. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8312` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8312) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8312)

```diff
-         this._animationTimeLast = Ip.e.Now
+         this._animationTimeLast = MT.c.Now
```

#### 433. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8327` → after: `L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8327) · [Before (L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8327)

```diff
-         this._multiviewSceneUboIsActive = !!(cp && Op && this._multiviewSceneUbo), this._viewUpdateFlag === pp.updateFlag && this._projectionUpdateFlag === ip.updateFlag || (this._viewUpdateFlag = pp.updateFlag, this._projectionUpdateFlag = ip.updateFlag, this._viewMatrix = pp, t … [truncated]
+         this._multiviewSceneUboIsActive = !!(mT && WT && this._multiviewSceneUbo), this._viewUpdateFlag === TT.updateFlag && this._projectionUpdateFlag === UT.updateFlag || (this._viewUpdateFlag = TT.updateFlag, this._projectionUpdateFlag = UT.updateFlag, this._viewMatrix = TT, t … [truncated]
```

#### 434. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8333-L8334` → after: `L8333-L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8333-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8333-L8334) · [Before (L8333-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8333-L8334)

```diff
-         const cp = "boolean" === typeof ip ? ip : ip?.trackUBOsInFrame,
-           Op = new Pp.b(this._engine, void 0, !1, pp ?? "pw", void 0, cp);
+         const mT = "boolean" === typeof UT ? UT : UT?.trackUBOsInFrame,
+           WT = new LT.c(this._engine, void 0, !1, TT ?? "XZ", void 0, mT);
```

#### 435. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8344` → after: `L8344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8344) · [Before (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8344)

```diff
-         return this.floatingOriginMode ? this._eyePosition : Dp.o.ZeroReadOnly
+         return this.floatingOriginMode ? this._eyePosition : jT.p.ZeroReadOnly
```

#### 436. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8349` → after: `L8349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8349) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8349)

```diff
-       TOp(pp) {
+       fWT(TT) {
```

#### 437. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8351` → after: `L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8351) · [Before (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8351)

```diff
-         if (!this._blockEntityCollection && (this.meshes.push(pp), pp._resyncLightSources(), pp.parent || pp._addToSceneRootNodes(), op.b.SetImmediate((() => {
+         if (!this._blockEntityCollection && (this.meshes.push(TT), TT._resyncLightSources(), TT.parent || TT._addToSceneRootNodes(), zT.e.SetImmediate((() => {
```

#### 438. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8355)

```diff
-           for (const pp of ip) this.TOp(pp)
+           for (const TT of UT) this.fWT(TT)
```

#### 439. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8363` → after: `L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8363) · [Before (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8363)

```diff
-           for (const pp of ip) this.xJ(pp)
+           for (const TT of UT) this.cV(TT)
```

#### 440. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8368` → after: `L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8368) · [Before (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8368)

```diff
-         this._blockEntityCollection || pp.Gl() === this && -1 !== pp._indexInSceneTransformNodesArray || (pp._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(pp), pp.parent || pp._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
+         this._blockEntityCollection || TT.KF() === this && -1 !== TT._indexInSceneTransformNodesArray || (TT._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(TT), TT.parent || TT._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
```

#### 441. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8405-L8406` → after: `L8405-L8406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8405-L8406) · [Before (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8405-L8406)

```diff
-         const ip = this.Wm.indexOf(pp);
-         return -1 !== ip && (this.Wm.splice(ip, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(pp), ip
+         const UT = this.EY.indexOf(TT);
+         return -1 !== UT && (this.EY.splice(UT, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(TT), UT
```

#### 442. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8460` → after: `L8460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8460) · [Before (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8460)

```diff
-           op.b.SetImmediate((() => {
+           zT.e.SetImmediate((() => {
```

#### 443. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8469` → after: `L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8469) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8469)

```diff
-         this._blockEntityCollection || (this.cameras.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.cameras.push(TT), zT.e.SetImmediate((() => {
```

#### 444. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8474` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8474) · [Before (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8474)

```diff
-         this._blockEntityCollection || (this.skeletons.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.skeletons.push(TT), zT.e.SetImmediate((() => {
```

#### 445. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8479` → after: `L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8479) · [Before (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8479)

```diff
-         this._blockEntityCollection || (this.Wm.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.EY.push(TT), zT.e.SetImmediate((() => {
```

#### 446. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8487` → after: `L8487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8487) · [Before (L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8487)

```diff
-         this._blockEntityCollection || (this.animationGroups.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.animationGroups.push(TT), zT.e.SetImmediate((() => {
```

#### 447. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8492` → after: `L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8492) · [Before (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8492)

```diff
-         this._blockEntityCollection || (this.multiMaterials.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.multiMaterials.push(TT), zT.e.SetImmediate((() => {
```

#### 448. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8497` → after: `L8497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8497) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8497)

```diff
-         this._blockEntityCollection || pp.Gl() === this && -1 !== pp._indexInSceneMaterialArray || (pp._indexInSceneMaterialArray = this.materials.length, this.materials.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || TT.KF() === this && -1 !== TT._indexInSceneMaterialArray || (TT._indexInSceneMaterialArray = this.materials.length, this.materials.push(TT), zT.e.SetImmediate((() => {
```

#### 449. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8514` → after: `L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8514) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8514)

```diff
-         this.frameGraphs.push(pp), op.b.SetImmediate((() => {
+         this.frameGraphs.push(TT), zT.e.SetImmediate((() => {
```

#### 450. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8519` → after: `L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8519) · [Before (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8519)

```diff
-         this.objectRenderers.push(pp), op.b.SetImmediate((() => {
+         this.objectRenderers.push(TT), zT.e.SetImmediate((() => {
```

#### 451. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8524` → after: `L8524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8524) · [Before (L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8524)

```diff
-         this._blockEntityCollection || (this.postProcesses.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.postProcesses.push(TT), zT.e.SetImmediate((() => {
```

#### 452. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8529` → after: `L8529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8529) · [Before (L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8529)

```diff
-         this._blockEntityCollection || (this.effectLayers.push(pp), op.b.SetImmediate((() => {
+         this._blockEntityCollection || (this.effectLayers.push(TT), zT.e.SetImmediate((() => {
```

#### 453. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8644-L8645` → after: `L8644-L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8644-L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8644-L8645) · [Before (L8644-L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8644-L8645)

```diff
-         for (let ip = 0; ip < this.Wm.length; ip++)
-           if (this.Wm[ip].id === pp) return this.Wm[ip];
+         for (let UT = 0; UT < this.EY.length; UT++)
+           if (this.EY[UT].id === TT) return this.EY[UT];
```

#### 454. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8668` → after: `L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8668) · [Before (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8668)

```diff
-         return !(!ip && this._getGeometryByUniqueId(pp.uniqueId)) && (this.addGeometry(pp), op.b.SetImmediate((() => {
+         return !(!UT && this._getGeometryByUniqueId(TT.uniqueId)) && (this.addGeometry(TT), zT.e.SetImmediate((() => {
```

#### 455. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8833` → after: `L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8833) · [Before (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8833)

```diff
-         return this._uid || (this._uid = Op.i.RandomId()), this._uid
+         return this._uid || (this._uid = WT.j.RandomId()), this._uid
```

#### 456. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8852` → after: `L8852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8852) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8852)

```diff
-           const cp = pp.Ky();
+           const mT = TT.wB();
```

#### 457. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8895` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8895) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8895)

```diff
-           return this._freezeActiveMeshesCancel = (0, op.c)((() => {
+           return this._freezeActiveMeshesCancel = (0, zT.i)((() => {
```

#### 458. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8907` → after: `L8907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8907) · [Before (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8907)

```diff
-               cp ? cp(ip) : (Oc.e.Error(ip), pp && Oc.e.Error(pp))
+               mT ? mT(UT) : (Tm.b.Error(UT), TT && Tm.b.Error(TT))
```

#### 459. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8910` → after: `L8910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8910) · [Before (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8910)

```diff
-               cp ? cp(ip) : (Oc.e.Error(ip), pp && (Oc.e.Error(pp), pp.stack && Oc.e.Error(pp.stack)))
+               mT ? mT(UT) : (Tm.b.Error(UT), TT && (Tm.b.Error(TT), TT.stack && Tm.b.Error(TT.stack)))
```

#### 460. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8963` → after: `L8963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8963) · [Before (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8963)

```diff
-             Ip = !Op && !ip.Vl && !ip._internalMeshDataInfo?._LODLevels.length;
+             MT = !WT && !UT.RP && !UT._internalMeshDataInfo?._LODLevels.length;
```

#### 461. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8965` → after: `L8965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8965) · [Before (L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8965)

```diff
-           if ((Ip || (Sp = ip._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Sp ? Sp[1] = -1 : (Sp = [ip, -1], ip._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Sp))), !ip.isBlocked) && (cp && this._totalVertices.addCount(ip.getTotalVertices() … [truncated]
+           if ((MT || (gT = UT._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), gT ? gT[1] = -1 : (gT = [UT, -1], UT._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, gT))), !UT.isBlocked) && (mT && this._totalVertices.addCount(UT.getTotalVertices() … [truncated]
```

#### 462. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8968` → after: `L8968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8968) · [Before (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8968)

```diff
-             if (xp !== ip && 0 !== xp.billboardMode && xp.computeWorldMatrix(), ip._preActivate(), ip.isVisible && ip.visibility > 0 && 0 !== (ip.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || ip.Gy || ip.isInFrustum(this._frustumPlanes))) {
+             if (nT !== UT && 0 !== nT.billboardMode && nT.computeWorldMatrix(), UT._preActivate(), UT.isVisible && UT.visibility > 0 && 0 !== (UT.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || UT.YB || UT.isInFrustum(this._frustumPlanes))) {
```

#### 463. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8973` → after: `L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8973) · [Before (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8973)

```diff
-               ip._activate(this._renderId, !1) && (ip.Vl ? ip._internalAbstractMeshDataInfo._actAsRegularMesh && (xp = ip) : xp._internalAbstractMeshDataInfo._onlyForInstances = !1, xp._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(ip, xp)), ip._postActivate()
+               UT._activate(this._renderId, !1) && (UT.RP ? UT._internalAbstractMeshDataInfo._actAsRegularMesh && (nT = UT) : nT._internalAbstractMeshDataInfo._onlyForInstances = !1, nT._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(UT, nT)), UT._postActivate()
```

#### 464. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8979-L8980` → after: `L8979-L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8979-L8980) · [Before (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8979-L8980)

```diff
-           for (let pp = 0; pp < this.Wm.length; pp++) {
-             const ip = this.Wm[pp];
+           for (let TT = 0; TT < this.EY.length; TT++) {
+             const UT = this.EY[TT];
```

#### 465. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8993-L8994` → after: `L8993-L8994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8993-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L8993-L8994) · [Before (L8993-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L8993-L8994)

```diff
-         let cp = pp.fop || pp.Vl || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ip.Gy;
-         if (ip && ip.Am && ip.Am.length > 0) {
+         let mT = TT.ZzT || TT.RP || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || UT.YB;
+         if (UT && UT.rY && UT.rY.length > 0) {
```

#### 466. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9046)

```diff
-             Op.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
+             WT.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
```

#### 467. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9056` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9056) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9056)

```diff
-             ip && pp && (ip.renderList.data = pp, ip.renderList.length = pp.length), Op.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+             UT && TT && (UT.renderList.data = TT, UT.renderList.length = TT.length), WT.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
```

#### 468. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9106` → after: `L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9106) · [Before (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9106)

```diff
-                   op = Op.Eop(ip, pp.usePreciseIntersection),
+                   zT = WT.HzT(UT, TT.usePreciseIntersection),
```

#### 469. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9126)

```diff
-           for (Ip = Math.min(Ip, op); pp > 0 && Op < Ip;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ip * cp, this._animate(ip), this.onAfterAnimationsObservable.notifyObservers(this), this.hN && this._advancePhysicsEngineStep(ip), this.onAfterStepO … [truncated]
+           for (MT = Math.min(MT, zT); TT > 0 && WT < MT;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = UT * mT, this._animate(UT), this.onAfterAnimationsObservable.notifyObservers(this), this.RC && this._advancePhysicsEngineStep(UT), this.onAfterStepO … [truncated]
```

#### 470. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9130` → after: `L9130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9130) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9130)

```diff
-           this._animationRatio = .06 * pp, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.hN && this._advancePhysicsEngineStep(pp)
+           this._animationRatio = .06 * TT, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.RC && this._advancePhysicsEngineStep(TT)
```

#### 471. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9165)

```diff
-           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Op.i.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
+           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), WT.j.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
```

#### 472. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9171` → after: `L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9171) · [Before (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9171)

```diff
-           Op.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+           WT.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
```

#### 473. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9195` → after: `L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9195) · [Before (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9195)

```diff
-               cp._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, cp.isBlocked || (this._totalVertices.addCount(cp.getTotalVertices(), !1), cp.isReady() && cp.isEnabled() && !cp.ei.hasAZeroComponent && (cp.computeWorldMatrix(pp), cp.actionManager && cp.actionManager.hasSpe … [truncated]
+               mT._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, mT.isBlocked || (this._totalVertices.addCount(mT.getTotalVertices(), !1), mT.isReady() && mT.isEnabled() && !mT.gp.hasAZeroComponent && (mT.computeWorldMatrix(TT), mT.actionManager && mT.actionManager.hasSpe … [truncated]
```

#### 474. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9198-L9199` → after: `L9198-L9199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9198-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9198-L9199) · [Before (L9198-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9198-L9199)

```diff
-               for (let pp = 0; pp < this.Wm.length; pp++) {
-                 const ip = this.Wm[pp];
+               for (let TT = 0; TT < this.EY.length; TT++) {
+                 const UT = this.EY[TT];
```

#### 475. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9220` → after: `L9220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9220) · [Before (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9220)

```diff
-         if (this.uR) return;
+         if (this.bJ) return;
```

#### 476. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9229` → after: `L9229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9229) · [Before (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9229)

```diff
-         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), wp.c.Gl = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
+         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), cT.b.KF = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
```

#### 477. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9248` → after: `L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9248) · [Before (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9248)

```diff
-             Op.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
+             WT.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
```

#### 478. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9254` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9254) · [Before (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9254)

```diff
-             Op.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
+             WT.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 479. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9291-L9292` → after: `L9291-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9291-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9291-L9292) · [Before (L9291-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9291-L9292)

```diff
-         if (this.uR) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+         if (this.bJ) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
```

#### 480. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9301` → after: `L9301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9301) · [Before (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9301)

```diff
-           this.Kl.notifyObservers(this)
+           this.SF.notifyObservers(this)
```

#### 481. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9303)

```diff
-           Oc.e.Error("An error occurred while calling onDisposeObservable!", op)
+           Tm.b.Error("An error occurred while calling onDisposeObservable!", zT)
```

#### 482. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9311` → after: `L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9311) · [Before (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9311)

```diff
-         this._disposeList(cp), this._disposeList(this.Wm), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
+         this._disposeList(mT), this._disposeList(this.EY), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
```

#### 483. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9313-L9315` → after: `L9313-L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9313-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9313-L9315) · [Before (L9313-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9313-L9315)

```diff
-         if (Op > -1 && this._engine.scenes.splice(Op, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, wp.i)(), dp.e._LastCreatedScene === this) {
-           dp.e._LastCreatedScene = null;
-           let pp = dp.e.Instances.length - 1;
+         if (WT > -1 && this._engine.scenes.splice(WT, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, cT.d)(), iT.c._LastCreatedScene === this) {
+           iT.c._LastCreatedScene = null;
+           let TT = iT.c.Instances.length - 1;
```

#### 484. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9317` → after: `L9317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9317) · [Before (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9317)

```diff
-             const ip = dp.e.Instances[pp];
+             const UT = iT.c.Instances[TT];
```

#### 485. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9319` → after: `L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9319) · [Before (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9319)

```diff
-               dp.e._LastCreatedScene = ip.scenes[this._engine.scenes.length - 1];
+               iT.c._LastCreatedScene = UT.scenes[this._engine.scenes.length - 1];
```

#### 486. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9325` → after: `L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9325) · [Before (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9325)

```diff
-         Op = this._engine._virtualScenes.indexOf(this), Op > -1 && this._engine._virtualScenes.splice(Op, 1), this._engine.wipeCaches(!0), this.Kl.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
+         WT = this._engine._virtualScenes.indexOf(this), WT > -1 && this._engine._virtualScenes.splice(WT, 1), this._engine.wipeCaches(!0), this.SF.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9348-L9349` → after: `L9348-L9349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9348-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9348-L9349) · [Before (L9348-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9348-L9349)

```diff
-         const ip = new Dp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           cp = new Dp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const UT = new jT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           mT = new jT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 488. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9353-L9354` → after: `L9353-L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9353-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9353-L9354) · [Before (L9353-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9353-L9354)

```diff
-           if (op.computeWorldMatrix(!0), !op.Am || 0 === op.Am.length || op.infiniteDistance) continue;
-           const pp = op.bJ(),
+           if (zT.computeWorldMatrix(!0), !zT.rY || 0 === zT.rY.length || zT.infiniteDistance) continue;
+           const TT = zT.rV(),
```

#### 489. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9357` → after: `L9357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9357) · [Before (L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9357)

```diff
-           Dp.o.CheckExtends(Op, ip, cp), Dp.o.CheckExtends(Ip, ip, cp)
+           jT.p.CheckExtends(WT, UT, mT), jT.p.CheckExtends(MT, UT, mT)
```

#### 490. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9360-L9361` → after: `L9360-L9361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9360-L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9360-L9361) · [Before (L9360-L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9360-L9361)

```diff
-           min: Dp.o.Zero(),
-           max: Dp.o.Zero()
+           min: jT.p.Zero(),
+           max: jT.p.Zero()
```

#### 491. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9368` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9368) · [Before (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9368)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 492. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9371)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 493. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9374` → after: `L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9374) · [Before (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9374)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 494. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9377` → after: `L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9377) · [Before (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9377)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 495. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9380-L9381` → after: `L9380-L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9380-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9380-L9381) · [Before (L9380-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9380-L9381)

```diff
-         const Sp = (0, ep.o)("Ray", !0);
-         return Sp && Oc.e.Warn(Sp), new Wp.b
+         const gT = (0, bT.k)("Ray", !0);
+         return gT && Tm.b.Warn(gT), new pT.c
```

#### 496. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9384-L9385` → after: `L9384-L9385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9384-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9384-L9385) · [Before (L9384-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9384-L9385)

```diff
-         const Ip = (0, ep.o)("Ray", !0);
-         return Ip && Oc.e.Warn(Ip), new Wp.b
+         const MT = (0, bT.k)("Ray", !0);
+         return MT && Tm.b.Warn(MT), new pT.c
```

#### 497. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9388` → after: `L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9388) · [Before (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9388)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 498. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9391)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 499. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9394` → after: `L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9394) · [Before (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9394)

```diff
-         throw (0, ep.o)("Ray")
+         throw (0, bT.k)("Ray")
```

#### 500. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9407` → after: `L9407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9407) · [Before (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9407)

```diff
-         for (const pp of this.Wm) pp.rebuild();
+         for (const TT of this.EY) TT.rebuild();
```

#### 501. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9464` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9464) · [Before (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9464)

```diff
-           for (const cp of this.materials) ip && !ip(cp) || cp.ocp(pp)
+           for (const mT of this.materials) UT && !UT(mT) || mT.NUT(TT)
```

#### 502. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9467` → after: `L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9467) · [Before (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9467)

```diff
-         const xp = (0, zp.l)(pp, ip, cp, Op ? this.offlineProvider : void 0, op, Ip, Sp);
+         const nT = (0, hT.n)(TT, UT, mT, WT ? this.offlineProvider : void 0, zT, MT, gT);
```

#### 503. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9483)

```diff
-         const Op = `${pp}|${ip?"binary":"string"}`;
+         const WT = `${TT}|${UT?"binary":"string"}`;
```

#### 504. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9498` → after: `L9498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9498) · [Before (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9498)

```diff
-         const xp = (0, zp.v)(pp, ip, cp, Op ? this.offlineProvider : void 0, op, Ip, Sp);
+         const nT = (0, hT.z)(TT, UT, mT, WT ? this.offlineProvider : void 0, zT, MT, gT);
```

#### 505. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9513)

```diff
-         const Ip = (0, zp.r)(pp, ip, cp, Op, op);
+         const MT = (0, hT.u)(TT, UT, mT, WT, zT);
```

#### 506. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9528` → after: `L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9528) · [Before (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9528)

```diff
-         throw (0, ep.o)("performanceViewerSceneExtension")
+         throw (0, bT.k)("performanceViewerSceneExtension")
```

#### 507. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9598-L9599` → after: `L9598-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9598-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9598-L9599) · [Before (L9598-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9598-L9599)

```diff
-       Yc || (Yc = !0, (0, oc.g)("BABYLON.Scene", Lc))
-     }(ii = Lc.prototype).sortActiveAnimatables ?? (ii.sortActiveAnimatables = (0, ep.k)("Scene", "sortActiveAnimatables")), (ci = Lc.prototype).beginWeightedAnimation ?? (ci.beginWeightedAnimation = (0, ep.k)("Scene", "beginWeightedAnimation")), (Oi = Lc.prototype).beginAnimation … [truncated]
+       gm || (gm = !0, (0, Um.h)("BABYLON.Scene", Mm))
+     }(RT = Mm.prototype).sortActiveAnimatables ?? (RT.sortActiveAnimatables = (0, bT.j)("Scene", "sortActiveAnimatables")), (TU = Mm.prototype).beginWeightedAnimation ?? (TU.beginWeightedAnimation = (0, bT.j)("Scene", "beginWeightedAnimation")), (UU = Mm.prototype).beginAnimation … [truncated]
```

#### 508. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9601` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9601) · [Before (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9601)

```diff
-   40368: (pp, ip, cp) => {
+   40283: (TT, UT, mT) => {
```

#### 509. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9603-L9604` → after: `L9603-L9604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9603-L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9603-L9604) · [Before (L9603-L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9603-L9604)

```diff
-       e: () => Op,
-       i: () => op
+       b: () => WT,
+       d: () => zT
```

#### 510. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9607` → after: `L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9607) · [Before (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9607)

```diff
-     Op.NAME_EFFECTLAYER = "EffectLayer", Op.NAME_LAYER = "Layer", Op.NAME_LENSFLARESYSTEM = "LensFlareSystem", Op.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Op.NAME_PARTICLESYSTEM = "ParticleSystem", Op.NAME_GAMEPAD = "Gamepad", Op.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
+     WT.NAME_EFFECTLAYER = "EffectLayer", WT.NAME_LAYER = "Layer", WT.NAME_LENSFLARESYSTEM = "LensFlareSystem", WT.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", WT.NAME_PARTICLESYSTEM = "ParticleSystem", WT.NAME_GAMEPAD = "Gamepad", WT.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
```

#### 511. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9631)

```diff
-   40203: (pp, ip, cp) => {
+   40095: (TT, UT, mT) => {
```

#### 512. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9634-L9636` → after: `L9635-L9636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9635-L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9635-L9636) · [Before (L9634-L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9634-L9636)

```diff
-       f: () => xp,
-       j: () => Op,
-       l: () => op,
+       h: () => WT,
+       k: () => zT,
```

#### 513. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9645` → after: `L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9645) · [Before (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9645)

```diff
-       for (var xp, Lp = Op.kind, Yp = "getter" === Lp ? "get" : "setter" === Lp ? "set" : "value", Dp = !ip && pp ? Op.static ? pp : pp.prototype : null, Ap = ip || (Dp ? Object.getOwnPropertyDescriptor(Dp, Op.name) : {}), Pp = !1, Wp = cp.length - 1; Wp >= 0; Wp--) {
+       for (var nT, HT = WT.kind, kT = "getter" === HT ? "get" : "setter" === HT ? "set" : "value", jT = !UT && TT ? WT.static ? TT : TT.prototype : null, lT = UT || (jT ? Object.getOwnPropertyDescriptor(jT, WT.name) : {}), LT = !1, pT = mT.length - 1; pT >= 0; pT--) {
```

#### 514. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9668)

```diff
-       return Op ? cp : void 0
+       return WT ? mT : void 0
```

#### 515. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9682-L9683` → after: `L9682-L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9682-L9683) · [Before (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9682-L9683)

```diff
-       if ("function" === typeof ip ? pp !== ip || !Op : !ip.has(pp)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === cp ? Op : "a" === cp ? Op.call(pp) : Op ? Op.value : ip.get(pp)
+       if ("function" === typeof UT ? TT !== UT || !WT : !UT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
+       return "m" === mT ? WT : "a" === mT ? WT.call(TT) : WT ? WT.value : UT.get(TT)
```

#### 516. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9689-L9690` → after: `L9689-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/256.js#L9689-L9690) · [Before (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/256.js#L9689-L9690)

```diff
-       if ("function" === typeof ip ? pp !== ip || !op : !ip.has(pp)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === Op ? op.call(pp, cp) : op ? op.value = cp : ip.set(pp, cp), cp
+       if ("function" === typeof UT ? TT !== UT || !zT : !UT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
+       return "a" === WT ? zT.call(TT, mT) : zT ? zT.value = mT : UT.set(TT, mT), mT
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   40062: (pp, ip, cp) => {
+   39934: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/257.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/257.js#L6)

```diff
-       b: () => Op
+       d: () => WT
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/257.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/257.js#L21)

```diff
-   61392: (pp, ip, cp) => {
+   61150: (TT, UT, mT) => {
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/257.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/257.js#L25)

```diff
-     var Op = cp(40062);
+     var WT = mT(39934);
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/257.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/257.js#L28)

```diff
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   40273: (pp, ip, cp) => {
+   40171: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L7-L10` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L7-L9) · [Before (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L7-L10)

```diff
-       e: () => Ap,
-       f: () => Lp,
-       i: () => Wp,
-       m: () => Yp,
+       h: () => lT,
+       l: () => HT,
+       o: () => pT,
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L11-L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L12)

```diff
-       s: () => Dp
+       s: () => nT,
+       v: () => jT
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L14-L15)

```diff
-     var Op = cp(38905),
-       op = cp(40276);
+     var WT = mT(38800),
+       zT = mT(40178);
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L21)

```diff
-           return Op && (ip = Math.max(ip / 127, -1)), ip
+           return WT && (UT = Math.max(UT / 127, -1)), UT
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L25)

```diff
-           return Op && (ip /= 255), ip
+           return WT && (UT /= 255), UT
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L29)

```diff
-           return Op && (ip = Math.max(ip / 32767, -1)), ip
+           return WT && (UT = Math.max(UT / 32767, -1)), UT
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L33)

```diff
-           return Op && (ip /= 65535), ip
+           return WT && (UT /= 65535), UT
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L44)

```diff
-           throw new Error(`Invalid component type ${ip}`)
+           throw new Error(`Invalid component type ${UT}`)
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L63)

```diff
-           pp.setUint16(cp, (0, op.h)(Ip), !0);
+           TT.setUint16(mT, (0, zT.j)(MT), !0);
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L75)

```diff
-           throw new Error(`Invalid component type ${ip}`)
+           throw new Error(`Invalid component type ${UT}`)
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L93)

```diff
-           throw new Error(`Invalid type '${pp}'`)
+           throw new Error(`Invalid type '${TT}'`)
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L137)

```diff
-           return 0 !== (3 & ip) && (Op.e.Warn("Float array must be aligned to 4-bytes border"), Dp = !0), Dp ? new Float32Array(pp.buffer.slice(ip, ip + Pp * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(pp.buffer, ip, Pp)
+           return 0 !== (3 & UT) && (WT.b.Warn("Float array must be aligned to 4-bytes border"), jT = !0), jT ? new Float32Array(TT.buffer.slice(UT, UT + LT * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(TT.buffer, UT, LT)
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L164)

```diff
-               throw new Error(`Invalid component type '${pp}'`)
+               throw new Error(`Invalid component type '${TT}'`)
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L195)

```diff
-       return 1 !== Dp && 0 !== (yp & Dp - 1) && (Op.e.Warn("Array must be aligned to border of element size. Data will be copied."), Yp = !0), Yp ? new Ap(Wp.slice(yp, yp + Pp * Dp)) : new Ap(Wp, yp, Pp)
+       return 1 !== jT && 0 !== (BT & jT - 1) && (WT.b.Warn("Array must be aligned to border of element size. Data will be copied."), kT = !0), kT ? new lT(pT.slice(BT, BT + LT * jT)) : new lT(pT, BT, LT)
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L208)

```diff
-         if (0 !== (3 & ip)) return Op.e.Warn("Float array must be aligned to 4-bytes border"), void Dp.set(new Float32Array(pp.buffer.slice(ip, ip + Pp * Float32Array.BYTES_PER_ELEMENT)));
+         if (0 !== (3 & UT)) return WT.b.Warn("Float array must be aligned to 4-bytes border"), void jT.set(new Float32Array(TT.buffer.slice(UT, UT + LT * Float32Array.BYTES_PER_ELEMENT)));
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L237)

```diff
-   40103: (pp, ip, cp) => {
+   39972: (TT, UT, mT) => {
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L240-L241)

```diff
-       c: () => jp,
-       j: () => kp,
+       d: () => OT,
+       h: () => eT,
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L243)

```diff
-       k: () => Qp
+       l: () => XT
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L339)

```diff
-             ip.length -= 2, ip.push(`(${Op}${cp}${pp})`)
+             UT.length -= 2, UT.push(`(${WT}${mT}${TT})`)
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L442-L443` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L442-L443) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L442-L443)

```diff
-     var Pp = cp(40096),
-       Wp = cp(40088);
+     var LT = mT(39965),
+       pT = mT(39957);
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L463)

```diff
-             const cp = ip.shouldUseHighPrecisionShader; - 1 === pp.indexOf("precision highp float") ? pp = cp ? "precision highp float;\n" + pp : "precision mediump float;\n" + pp : cp || (pp = pp.replace("precision highp float", "precision mediump float"));
+             const mT = UT.shouldUseHighPrecisionShader; - 1 === TT.indexOf("precision highp float") ? TT = mT ? "precision highp float;\n" + TT : "precision mediump float;\n" + TT : mT || (TT = TT.replace("precision highp float", "precision mediump float"));
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L517)

```diff
-           const Op = "&&" == op ? new Dp : new Yp;
+           const WT = "&&" == zT ? new jT : new kT;
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L553)

```diff
-                 Op.children.push(Sp), Mp(pp, Op, Sp, cp);
+                 WT.children.push(gT), dT(TT, WT, gT, mT);
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L565)

```diff
-                 Op.children.push(Sp), Mp(pp, Op, Sp, cp);
+                 WT.children.push(gT), dT(TT, WT, gT, mT);
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L571)

```diff
-                 ip.children.push(Op), Op.children.push(Sp), Mp(pp, Op, Sp, cp);
+                 UT.children.push(WT), WT.children.push(gT), dT(TT, WT, gT, mT);
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L600)

```diff
-       return 0 === pp.processor?.shaderLanguage && (Op.GL_ES = "true"), Op.__VERSION__ = pp.version, Op[pp.platformName] = "true", (0, Wp.j)(Op, ip?.isNDCHalfZRange, ip?.lOp, ip?.useExactSrgbConversions), Op
+       return 0 === TT.processor?.shaderLanguage && (WT.GL_ES = "true"), WT.__VERSION__ = TT.version, WT[TT.platformName] = "true", (0, pT.j)(WT, UT?.isNDCHalfZRange, UT?.pWT, UT?.useExactSrgbConversions), WT
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L651)

```diff
-         throw (0, Pp.o)("FileTools")
+         throw (0, LT.k)("FileTools")
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L655)

```diff
-   40088: (pp, ip, cp) => {
+   39957: (TT, UT, mT) => {
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L657)

```diff
-       c: () => op,
+       d: () => zT,
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L660-L661` → after: `L660-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L660-L661) · [Before (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L660-L661)

```diff
-       n: () => Sp,
-       r: () => Lp
+       m: () => gT,
+       p: () => HT
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L663)

```diff
-     var Op = cp(40096);
+     var WT = mT(39965);
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L672)

```diff
-       if (!Yp) throw (0, Op.o)("FileTools");
+       if (!kT) throw (0, WT.k)("FileTools");
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L690)

```diff
-           return Op && pp.set(new Int8Array(Op)), pp
+           return WT && TT.set(new Int8Array(WT)), TT
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L694)

```diff
-           return Op && pp.set(new Uint8Array(Op)), pp
+           return WT && TT.set(new Uint8Array(WT)), TT
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L698)

```diff
-           return Op && pp.set(new Int16Array(Op)), pp
+           return WT && TT.set(new Int16Array(WT)), TT
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L706)

```diff
-           return Op && pp.set(new Uint16Array(Op)), pp
+           return WT && TT.set(new Uint16Array(WT)), TT
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L710)

```diff
-           return Op && pp.set(new Int32Array(Op)), pp
+           return WT && TT.set(new Int32Array(WT)), TT
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L719)

```diff
-           return Op && pp.set(new Uint32Array(Op)), pp
+           return WT && TT.set(new Uint32Array(WT)), TT
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L723)

```diff
-           return Op && pp.set(new Float32Array(Op)), pp
+           return WT && TT.set(new Float32Array(WT)), TT
```

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L730)

```diff
-   40096: (pp, ip, cp) => {
+   39965: (TT, UT, mT) => {
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L732)

```diff
-       d: () => Yp,
+       e: () => kT,
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L734-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L734-L735) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L734-L735)

```diff
-       k: () => Lp,
-       o: () => op
+       j: () => HT,
+       k: () => zT
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Op[pp]) return Op[pp] = !0, `${pp} needs to be imported before as it contains a side-effect required by your code.`
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !WT[TT]) return WT[TT] = !0, `${TT} needs to be imported before as it contains a side-effect required by your code.`
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L750-L751)

```diff
-           const cp = `${pp}.${ip}`;
-           Ip[cp] || (Ip[cp] = !0, console.warn(`[Babylon.js] ${cp}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+           const mT = `${TT}.${UT}`;
+           MT[mT] || (MT[mT] = !0, console.warn(`[Babylon.js] ${mT}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
```

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L777)

```diff
-   40071: (pp, ip, cp) => {
+   39946: (TT, UT, mT) => {
```

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L803)

```diff
-   40266: (pp, ip, cp) => {
+   40160: (TT, UT, mT) => {
```

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L805-L807` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L805-L807) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L805-L807)

```diff
-       d: () => Op,
-       h: () => op,
-       i: () => Ip
+       c: () => WT,
+       f: () => zT,
+       j: () => MT
```

#### 49. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L826)

```diff
-   40257: (pp, ip, cp) => {
+   40151: (TT, UT, mT) => {
```

#### 50. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L828-L830` → after: `L828-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L828-L829) · [Before (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L828-L830)

```diff
-       b: () => Xp,
-       c: () => Hp,
-       g: () => qp,
+       e: () => aT,
+       h: () => qT,
```

#### 51. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L832-L834` → after: `L831-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L831-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L831-L833) · [Before (L832-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L832-L834)

```diff
-       l: () => mp,
-       p: () => jp,
-       r: () => kp,
+       m: () => wT,
+       n: () => YT,
+       q: () => OT,
```

#### 52. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L836-L837` → after: `L835-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L835-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L835-L837) · [Before (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L836-L837)

```diff
-       v: () => Rp,
-       y: () => dp
+       y: () => sT,
+       z: () => JT,
+       B: () => iT
```

#### 53. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L839-L841` → after: `L839-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L839-L841) · [Before (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L839-L841)

```diff
-     var Op = cp(40261),
-       op = cp(40071),
-       Ip = cp(37349);
+     var WT = mT(40155),
+       zT = mT(39946),
+       MT = mT(37219);
```

#### 54. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L844-L851` → after: `L844-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L844-L851) · [Before (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L844-L851)

```diff
-     var xp = cp(40266),
-       Lp = cp(40269),
-       Yp = cp(37345),
-       Dp = cp(40088),
-       Ap = cp(40103),
-       Pp = cp(38905),
-       Wp = cp(40107),
-       yp = cp(40273);
+     var nT = mT(40160),
+       HT = mT(40165),
+       kT = mT(37216),
+       jT = mT(39957),
+       lT = mT(39972),
+       LT = mT(38800),
+       pT = mT(39975),
+       BT = mT(40171);
```

#### 55. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L853` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L853) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L853)

```diff
-     class wp extends xp.i {
+     class cT extends nT.j {
```

#### 56. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L855)

```diff
-         super(pp, xp.h.LoadFileError), this.name = "LoadFileError", xp.d._setPrototypeOf(this, wp.prototype), ip instanceof Op.e ? this.request = ip : this.file = ip
+         super(TT, nT.f.LoadFileError), this.name = "LoadFileError", nT.c._setPrototypeOf(this, cT.prototype), UT instanceof WT.b ? this.request = UT : this.file = UT
```

#### 57. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L858)

```diff
-     class vp extends xp.i {
+     class vT extends nT.j {
```

#### 58. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L860)

```diff
-         super(pp, xp.h.RequestFileError), this.request = ip, this.name = "RequestFileError", xp.d._setPrototypeOf(this, vp.prototype)
+         super(TT, nT.f.RequestFileError), this.request = UT, this.name = "RequestFileError", nT.c._setPrototypeOf(this, vT.prototype)
```

#### 59. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L863)

```diff
-     class tp extends xp.i {
+     class fT extends nT.j {
```

#### 60. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L865)

```diff
-         super(pp, xp.h.ReadFileError), this.file = ip, this.name = "ReadFileError", xp.d._setPrototypeOf(this, tp.prototype)
+         super(TT, nT.f.ReadFileError), this.file = UT, this.name = "ReadFileError", nT.c._setPrototypeOf(this, fT.prototype)
```

#### 61. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L897)

```diff
-           Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Yp.e.LastCreatedEngine;
+           lT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kT.c.LastCreatedEngine;
```

#### 62. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L903)

```diff
-             const ip = pp instanceof ArrayBuffer ? pp : (0, yp.i)(pp);
+             const UT = TT instanceof ArrayBuffer ? TT : (0, BT.o)(TT);
```

#### 63. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L920)

```diff
-             ip = pp instanceof ArrayBuffer ? pp : (0, yp.i)(pp), Ip = URL.createObjectURL(new Blob([ip], {
+             UT = TT instanceof ArrayBuffer ? TT : (0, BT.o)(TT), MT = URL.createObjectURL(new Blob([UT], {
```

#### 64. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L923)

```diff
-           } else Ip = `data:${xp};base64,` + (0, Lp.i)(pp);
+           } else MT = `data:${nT};base64,` + (0, HT.j)(TT);
```

#### 65. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L928)

```diff
-             cp(`Error while trying to load image: ${0===Op.indexOf("http")||Op.length<=128?Op:Op.slice(0,128)+"..."}`, ip)
+             mT(`Error while trying to load image: ${0===WT.indexOf("http")||WT.length<=128?WT:WT.slice(0,128)+"..."}`, UT)
```

#### 66. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L973)

```diff
-             if (pp.blockedURI !== Up.src || "Yy" === pp.disposition) return;
+             if (TT.blockedURI !== ZT.src || "Gp" === TT.disposition) return;
```

#### 67. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L975-L976` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L975-L976) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L975-L976)

```diff
-             const ip = new Error(`CSP violation of policy ${pp.effectiveDirective} ${pp.blockedURI}. Current policy is ${pp.originalPolicy}`);
-             Yp.e.UseFallbackTexture = !1, Wp(ip), Pp && Up.src && URL.revokeObjectURL(Up.src), Up.src = ""
+             const UT = new Error(`CSP violation of policy ${TT.effectiveDirective} ${TT.blockedURI}. Current policy is ${TT.originalPolicy}`);
+             kT.c.UseFallbackTexture = !1, pT(UT), LT && ZT.src && URL.revokeObjectURL(ZT.src), ZT.src = ""
```

#### 68. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L984)

```diff
-             tp || jp || !Op.e.IsCustomRequestAvailable ? Up.src = Ip : mp(Ip, ((pp, ip, cp) => {
+             fT || OT || !WT.b.IsCustomRequestAvailable ? ZT.src = MT : YT(MT, ((TT, UT, mT) => {
```

#### 69. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L986)

```diff
-                   type: !xp && cp ? cp : xp
+                   type: !nT && mT ? mT : nT
```

#### 70. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1027)

```diff
-           op(new tp(`Unable to read ${pp.name}`, pp))
+           zT(new fT(`Unable to read ${TT.name}`, TT))
```

#### 71. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1056` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1056) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1056)

```diff
-             Lp ? Lp(void 0, xp) : Pp.e.Error(xp.message || "Failed to parse the Data URL")
+             HT ? HT(void 0, nT) : LT.b.Error(nT.message || "Failed to parse the Data URL")
```

#### 72. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1058)

```diff
-           return Wp.b.SetImmediate((() => {
+           return pT.e.SetImmediate((() => {
```

#### 73. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1069)

```diff
-         null !== Sp && (Sp ?? (Sp = Yp.e.LastCreatedScene?.offlineProvider)), pp = Hp.CleanUrl(pp), pp = Hp.PreprocessUrl(pp);
+         null !== gT && (gT ?? (gT = kT.c.LastCreatedScene?.offlineProvider)), TT = qT.CleanUrl(TT), TT = qT.PreprocessUrl(TT);
```

#### 74. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1077` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1077) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1077)

```diff
-             let pp, Ip = new Op.e,
+             let TT, MT = new WT.b,
```

#### 75. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1090` → after: `L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1090) · [Before (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1090)

```diff
-                 Lp && Ip ? Lp(new vp(ip, Ip)) : Pp.e.Error(ip)
+                 HT && MT ? HT(new vT(UT, MT)) : LT.b.Error(UT)
```

#### 76. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1115)

```diff
-                         if (-1 !== pp) return Yp(), Ip = new Op.e, void(Sp = setTimeout((() => tp(Pp + 1)), pp))
+                         if (-1 !== TT) return kT(), MT = new WT.b, void(gT = setTimeout((() => fT(LT + 1)), TT))
```

#### 77. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1152)

```diff
-           case "sE":
+           case "mF":
```

#### 78. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1186` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1186) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1186)

```diff
-       return (0, Lp.c)(pp.split(",")[1])
+       return (0, HT.e)(TT.split(",")[1])
```

#### 79. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1188)

```diff
-     const lp = pp => (0, Lp.e)(pp.split(",")[1]);
+     const yT = TT => (0, HT.h)(TT.split(",")[1]);
```

#### 80. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1238)

```diff
-       Bp || (Bp = !0, Jp(Xp, lp, Hp, Cp, Mp, mp, jp, kp, Rp, dp), Dp.c.loadFile = mp, Dp.c.loadImage = jp, Ap.k.loadFile = mp)
+       QT || (QT = !0, IT(aT, yT, qT, wT, dT, YT, OT, eT, JT, iT), jT.d.loadFile = YT, jT.d.loadImage = OT, lT.l.loadFile = YT)
```

#### 81. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1241` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1241) · [Before (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1241)

```diff
-   40276: (pp, ip, cp) => {
+   40178: (TT, UT, mT) => {
```

#### 82. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1245)

```diff
-       h: () => Sp
+       j: () => gT
```

#### 83. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1300)

```diff
-   40269: (pp, ip, cp) => {
+   40165: (TT, UT, mT) => {
```

#### 84. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1304` → after: `L1303-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1303-L1304) · [Before (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1304)

```diff
-       i: () => Op
+       h: () => zT,
+       j: () => WT
```

#### 85. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1325)

```diff
-   40107: (pp, ip, cp) => {
+   39975: (TT, UT, mT) => {
```

#### 86. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1327-L1328` → after: `L1327-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1327-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1327-L1328) · [Before (L1327-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1327-L1328)

```diff
-       b: () => op,
-       c: () => Sp
+       e: () => zT,
+       i: () => gT
```

#### 87. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1360` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1360) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1360)

```diff
-   40261: (pp, ip, cp) => {
+   40155: (TT, UT, mT) => {
```

#### 88. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1362)

```diff
-       e: () => Op
+       b: () => WT
```

#### 89. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1438` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/258.js#L1438) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/258.js#L1438)

```diff
-               } else Ip(new Error(`HTTP ${Sp.status} loading '${Sp.requestURL}': ${Sp.statusText}`))
+               } else MT(new Error(`HTTP ${gT.status} loading '${gT.requestURL}': ${gT.statusText}`))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   40306: (pp, ip, cp) => {
+   40208: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L6)

```diff
-       d: () => Ip
+       c: () => MT
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L8-L9)

```diff
-     var Op = cp(38905),
-       op = cp(37368);
+     var WT = mT(38800),
+       zT = mT(37239);
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L15)

```diff
-         Op.e.Warn(pp + " not found, you may have missed an import.");
+         WT.b.Warn(TT + " not found, you may have missed an import.");
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L24)

```diff
-   40122: (pp, ip, cp) => {
+   39986: (TT, UT, mT) => {
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L26)

```diff
-       e: () => op
+       c: () => zT
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L28)

```diff
-     var Op = cp(40071);
+     var WT = mT(39946);
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L35)

```diff
-   40143: (pp, ip, cp) => {
+   40022: (TT, UT, mT) => {
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L51)

```diff
-       return ip - pp > pp - cp ? cp : ip
+       return UT - TT > TT - mT ? mT : UT
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L77-L79` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L77-L78) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L77-L79)

```diff
-       b: () => xp,
-       e: () => Lp,
-       h: () => Op,
+       d: () => nT,
+       f: () => HT,
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L81` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L80-L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L81)

```diff
-       l: () => Ip
+       m: () => zT,
+       o: () => MT
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L84)

```diff
-   40304: (pp, ip, cp) => {
+   40201: (TT, UT, mT) => {
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L87-L89` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L87-L89) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L87-L89)

```diff
-       g: () => ep,
-       i: () => vp,
-       l: () => tp
+       f: () => bT,
+       j: () => vT,
+       m: () => fT
```

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L91-L103` → after: `L91-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L91-L103) · [Before (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L91-L103)

```diff
-     var Op, op = cp(37349),
-       Ip = cp(40071),
-       Sp = cp(38905),
-       xp = cp(38900),
-       Lp = cp(40122),
-       Yp = cp(40096),
-       Dp = cp(40261),
-       Ap = cp(37345),
-       Pp = cp(40257),
-       Wp = cp(40107),
-       yp = cp(40306),
-       Up = cp(38124),
-       wp = cp(40143);
+     var WT, zT = mT(37219),
+       MT = mT(39946),
+       gT = mT(38800),
+       nT = mT(38793),
+       HT = mT(39986),
+       kT = mT(39965),
+       jT = mT(40155),
+       lT = mT(37216),
+       LT = mT(40151),
+       pT = mT(39975),
+       BT = mT(40208),
+       ZT = mT(38045),
+       cT = mT(40022);
```

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L106)

```diff
-         return Pp.c.BaseUrl
+         return LT.h.BaseUrl
```

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L109)

```diff
-         Pp.c.BaseUrl = pp
+         LT.h.BaseUrl = TT
```

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L112)

```diff
-         return Pp.c.CleanUrl
+         return LT.h.CleanUrl
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L115)

```diff
-         Pp.c.CleanUrl = pp
+         LT.h.CleanUrl = TT
```

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L121)

```diff
-         Pp.c.ScriptBaseUrl = pp
+         LT.h.ScriptBaseUrl = TT
```

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L124)

```diff
-         return Pp.c.ScriptBaseUrl
+         return LT.h.ScriptBaseUrl
```

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L130)

```diff
-         Pp.c.ScriptPreprocessUrl = pp
+         LT.h.ScriptPreprocessUrl = TT
```

#### 22. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L133)

```diff
-         return Pp.c.ScriptPreprocessUrl
+         return LT.h.ScriptPreprocessUrl
```

#### 23. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L136)

```diff
-         return Pp.c.DefaultRetryStrategy
+         return LT.h.DefaultRetryStrategy
```

#### 24. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L139)

```diff
-         Pp.c.DefaultRetryStrategy = pp
+         LT.h.DefaultRetryStrategy = TT
```

#### 25. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L142)

```diff
-         return Pp.c.CorsBehavior
+         return LT.h.CorsBehavior
```

#### 26. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L145)

```diff
-         Pp.c.CorsBehavior = pp
+         LT.h.CorsBehavior = TT
```

#### 27. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L148)

```diff
-         return Ap.e.UseFallbackTexture
+         return lT.c.UseFallbackTexture
```

#### 28. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L151)

```diff
-         Ap.e.UseFallbackTexture = pp
+         lT.c.UseFallbackTexture = TT
```

#### 29. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L154)

```diff
-         return yp.d.RegisteredExternalClasses
+         return BT.c.RegisteredExternalClasses
```

#### 30. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L157)

```diff
-         yp.d.RegisteredExternalClasses = pp
+         BT.c.RegisteredExternalClasses = TT
```

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L160)

```diff
-         return Ap.e.FallbackTexture
+         return lT.c.FallbackTexture
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L163)

```diff
-         Ap.e.FallbackTexture = pp
+         lT.c.FallbackTexture = TT
```

#### 33. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L173)

```diff
-         return yp.d.Instantiate(pp)
+         return BT.c.Instantiate(TT)
```

#### 34. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L176)

```diff
-         Wp.b.SetImmediate(pp)
+         pT.e.SetImmediate(TT)
```

#### 35. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L186)

```diff
-         return ip < 0 ? pp : pp.substring(ip + 1)
+         return UT < 0 ? TT : TT.substring(UT + 1)
```

#### 36. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L191)

```diff
-         return cp < 0 ? ip ? pp : "" : pp.substring(0, cp + 1)
+         return mT < 0 ? UT ? TT : "" : TT.substring(0, mT + 1)
```

#### 37. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L206)

```diff
-         return !0 === ip || void 0 !== pp && null != pp ? Array.isArray(pp) ? pp : [pp] : null
+         return !0 === UT || void 0 !== TT && null != TT ? Array.isArray(TT) ? TT : [TT] : null
```

#### 38. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L212)

```diff
-         (0, Pp.y)(pp, ip)
+         (0, LT.B)(TT, UT)
```

#### 39. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L218)

```diff
-         return Pp.c.PreprocessUrl
+         return LT.h.PreprocessUrl
```

#### 40. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L221)

```diff
-         Pp.c.PreprocessUrl = pp
+         LT.h.PreprocessUrl = TT
```

#### 41. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L224)

```diff
-         return (0, Pp.p)(pp, ip, cp, Op, op, Ip)
+         return (0, LT.q)(TT, UT, mT, WT, zT, MT)
```

#### 42. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L227)

```diff
-         return (0, Pp.l)(pp, ip, cp, Op, op, Ip)
+         return (0, LT.n)(TT, UT, mT, WT, zT, MT)
```

#### 43. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L232)

```diff
-           (0, Pp.l)(pp, (pp => {
+           (0, LT.n)(TT, (TT => {
```

#### 44. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L254)

```diff
-           const ip = `${Op._DefaultCdnUrl}/v${Op._CdnVersion}`;
+           const UT = `${WT._DefaultCdnUrl}/v${WT._CdnVersion}`;
```

#### 45. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L288)

```diff
-             cp?.(`Unable to load script '${pp}' in worker`, Lp)
+             mT?.(`Unable to load script '${TT}' in worker`, HT)
```

#### 46. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L292)

```diff
-         if (!(0, Ip.j)()) return void cp?.(`Cannot load script '${pp}' outside of a window or a worker`);
+         if (!(0, MT.j)()) return void mT?.(`Cannot load script '${TT}' outside of a window or a worker`);
```

#### 47. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L298)

```diff
-           cp && cp(`Unable to load script '${pp}'`, ip)
+           mT && mT(`Unable to load script '${TT}'`, UT)
```

#### 48. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L323)

```diff
-         return (0, Pp.r)(pp, ip, cp, Op, op)
+         return (0, LT.u)(TT, UT, mT, WT, zT)
```

#### 49. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L334)

```diff
-         xp.e.DeepCopy(pp, ip, cp, Op)
+         nT.c.DeepCopy(TT, UT, mT, WT)
```

#### 50. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L360)

```diff
-         throw (0, Yp.o)("DumpTools")
+         throw (0, kT.k)("DumpTools")
```

#### 51. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L363)

```diff
-         throw (0, Yp.o)("DumpTools")
+         throw (0, kT.k)("DumpTools")
```

#### 52. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L366)

```diff
-         throw (0, Yp.o)("DumpTools")
+         throw (0, kT.k)("DumpTools")
```

#### 53. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L441)

```diff
-         throw (0, Yp.o)("ScreenshotTools")
+         throw (0, kT.k)("ScreenshotTools")
```

#### 54. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L444)

```diff
-         throw (0, Yp.o)("ScreenshotTools")
+         throw (0, kT.k)("ScreenshotTools")
```

#### 55. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L447)

```diff
-         throw (0, Yp.o)("ScreenshotTools")
+         throw (0, kT.k)("ScreenshotTools")
```

#### 56. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L450)

```diff
-         throw (0, Yp.o)("ScreenshotTools")
+         throw (0, kT.k)("ScreenshotTools")
```

#### 57. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L453)

```diff
-         return (0, Up.e)()
+         return (0, ZT.c)()
```

#### 58. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L456)

```diff
-         return (0, Pp.k)(pp)
+         return (0, LT.m)(TT)
```

#### 59. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L459)

```diff
-         return (0, Pp.b)(pp)
+         return (0, LT.e)(TT)
```

#### 60. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L462)

```diff
-         return Sp.e.errorsCount
+         return gT.b.errorsCount
```

#### 61. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L465)

```diff
-         Sp.e.Log(pp)
+         gT.b.Log(TT)
```

#### 62. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L468)

```diff
-         Sp.e.Warn(pp)
+         gT.b.Warn(TT)
```

#### 63. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L471)

```diff
-         Sp.e.Error(pp)
+         gT.b.Error(TT)
```

#### 64. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L474)

```diff
-         return Sp.e.LogCache
+         return gT.b.LogCache
```

#### 65. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L477)

```diff
-         Sp.e.ClearLogCache()
+         gT.b.ClearLogCache()
```

#### 66. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L480)

```diff
-         Sp.e.LogLevels = pp
+         gT.b.LogLevels = TT
```

#### 67. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L508)

```diff
-           if (Op._NativePerformanceCounterHandles.has(pp)) Op.Warn(`Performance counter with name ${pp} is already started.`);
+           if (WT._NativePerformanceCounterHandles.has(TT)) WT.Warn(`Performance counter with name ${TT} is already started.`);
```

#### 68. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L517)

```diff
-           ip ? (_native.endPerformanceCounter(ip), Op._NativePerformanceCounterHandles.delete(pp)) : Op.Warn(`Performance counter with name ${pp} was not started.`)
+           UT ? (_native.endPerformanceCounter(UT), WT._NativePerformanceCounterHandles.delete(TT)) : WT.Warn(`Performance counter with name ${TT} was not started.`)
```

#### 69. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L521)

```diff
-         return Lp.e.Now
+         return HT.c.Now
```

#### 70. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L529)

```diff
-             cp = (ip ? pp : Object.getPrototypeOf(pp)).constructor.__bjsclassName__
+             mT = (UT ? TT : Object.getPrototypeOf(TT)).constructor.__bjsclassName__
```

#### 71. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L547)

```diff
-             const op = ip ? pp : Object.getPrototypeOf(pp);
+             const zT = UT ? TT : Object.getPrototypeOf(TT);
```

#### 72. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L552)

```diff
-         return cp ? (null != Op ? Op + "." : "") + cp : null
+         return mT ? (null != WT ? WT + "." : "") + mT : null
```

#### 73. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L562)

```diff
-         return !!(0, Ip.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
+         return !!(0, MT.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
```

#### 74. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L568)

```diff
-         cp.__bjsclassName__ = pp, cp.__bjsmoduleName__ = null != ip ? ip : null
+         mT.__bjsclassName__ = TT, mT.__bjsmoduleName__ = null != UT ? UT : null
```

#### 75. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L571)

```diff
-     Op = vp, vp.AssetBaseUrl = "", vp.UseCustomRequestHeaders = !1, vp.CustomRequestHeaders = Dp.e.CustomRequestHeaders, vp.GetDOMTextContent = Ip.d, vp._DefaultCdnUrl = "https://cdn.babylonjs.com", vp._CdnVersion = "9.28.0", vp._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
+     WT = vT, vT.AssetBaseUrl = "", vT.UseCustomRequestHeaders = !1, vT.CustomRequestHeaders = jT.b.CustomRequestHeaders, vT.GetDOMTextContent = MT.c, vT._DefaultCdnUrl = "https://cdn.babylonjs.com", vT._CdnVersion = "9.28.0", vT._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L576)

```diff
-     }, vp.NoneLogLevel = Sp.e.NoneLogLevel, vp.MessageLogLevel = Sp.e.MessageLogLevel, vp.WarningLogLevel = Sp.e.WarningLogLevel, vp.ErrorLogLevel = Sp.e.ErrorLogLevel, vp.AllLogLevel = Sp.e.AllLogLevel, vp.IsWindowObjectExist = Ip.j, vp.PerformanceNoneLogLevel = 0, vp.Performanc … [truncated]
+     }, vT.NoneLogLevel = gT.b.NoneLogLevel, vT.MessageLogLevel = gT.b.MessageLogLevel, vT.WarningLogLevel = gT.b.WarningLogLevel, vT.ErrorLogLevel = gT.b.ErrorLogLevel, vT.AllLogLevel = gT.b.AllLogLevel, vT.IsWindowObjectExist = MT.j, vT.PerformanceNoneLogLevel = 0, vT.Performanc … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/259.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/259.js#L612)

```diff
-       dp || (dp = !0, vp.Mix = wp.i, vp.IsExponentOfTwo = wp.h, Ap.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       iT || (iT = !0, vT.Mix = cT.m, vT.IsExponentOfTwo = cT.i, lT.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   40605: (pp, ip, cp) => {
+   40564: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L10)

```diff
-   40195: (pp, ip, cp) => {
+   40088: (TT, UT, mT) => {
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L12)

```diff
-       d: () => yp
+       c: () => BT
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L14-L20` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L14-L20) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L14-L20)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37349),
-       Sp = cp(37320),
-       xp = cp(37345),
-       Lp = cp(38124),
-       Yp = cp(40225);
+     var WT = mT(40095),
+       zT = mT(40102),
+       MT = mT(37219),
+       gT = mT(37188),
+       nT = mT(37216),
+       HT = mT(38045),
+       kT = mT(40114);
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L62)

```diff
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Yp.c.Zero(), this._cachedBaseSize = Yp.c.Zero(), this._initialSamplingMode = 2, this._texture = Dp. … [truncated]
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = kT.d.Zero(), this._cachedBaseSize = kT.d.Zero(), this._initialSamplingMode = 2, this._texture = jT. … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L95-L96)

```diff
-     var Ap, Pp = cp(40233),
-       Wp = cp(40096);
+     var lT, LT = mT(40122),
+       pT = mT(39965);
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L172)

```diff
-           this._texture ? this._texture.isCube = pp : this._isCube = pp
+           this._texture ? this._texture.isCube = TT : this._isCube = TT
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L197)

```diff
-           this.Gl()?.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))
+           this.KF()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L203)

```diff
-           pp !== this.isRGBD && (this._texture && (this._texture._isRGBD = pp), this.Gl()?.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+           TT !== this.isRGBD && (this._texture && (this._texture._isRGBD = TT), this.KF()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L233)

```diff
-           return this._uid || (this._uid = (0, Lp.e)()), this._uid
+           return this._uid || (this._uid = (0, HT.c)()), this._uid
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L242)

```diff
-           this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
+           this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L255)

```diff
-           super(null), this.uniqueId = ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, void 0)), this.name = ((0, Op.l)(this, fp), (0, Op.l)(this, bp, void 0)), this.displayName = ((0, Op.l)(this, hp), (0, Op.l)(this, ap, void 0)), this.metadata = ((0, Op.l)(this, np), (0, Op.l)(this,  … [truncated]
+           super(null), this.uniqueId = ((0, WT.k)(this, sT), (0, WT.k)(this, FT, void 0)), this.name = ((0, WT.k)(this, PT), (0, WT.k)(this, VT, void 0)), this.displayName = ((0, WT.k)(this, uT), (0, WT.k)(this, CT, void 0)), this.metadata = ((0, WT.k)(this, rT), (0, WT.k)(this,  … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L264)

```diff
-           return Sp.b.IdentityReadOnly
+           return gT.e.IdentityReadOnly
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L267)

```diff
-           return Sp.b.IdentityReadOnly
+           return gT.e.IdentityReadOnly
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L301)

```diff
-           const pp = this.Gl();
+           const TT = this.KF();
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L364)

```diff
-           this.Kl.notifyObservers(this), this.Kl.clear(), this.metadata = null, super.dispose()
+           this.SF.notifyObservers(this), this.SF.clear(), this.metadata = null, super.dispose()
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L369-L370)

```diff
-           const ip = Pp.c.Serialize(this);
-           return Pp.c.AppendSerializedAnimations(this, ip), ip
+           const UT = LT.e.Serialize(this);
+           return LT.e.AppendSerializedAnimations(this, UT), UT
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L391)

```diff
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Yp = [(0, op.K)()], Ap = [(0, op.K)()], Wp = [(0, op.K)("hasAlpha")], yp = [(0, op.K)("getAlphaFromRGB")], Up = [(0, op.K)()], wp = [(0, op.K)("coordinatesIndex")], vp = [(0, op.K)()], tp = [(0, op.K)("coordinatesMode")], Hp = [(0,  … [truncated]
+         UT = [(0, zT.L)()], mT = [(0, zT.L)()], kT = [(0, zT.L)()], lT = [(0, zT.L)()], pT = [(0, zT.L)("hasAlpha")], BT = [(0, zT.L)("getAlphaFromRGB")], ZT = [(0, zT.L)()], cT = [(0, zT.L)("coordinatesIndex")], vT = [(0, zT.L)()], fT = [(0, zT.L)("coordinatesMode")], qT = [(0,  … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L401)

```diff
-         }, null, Np), (0, Op.j)(pp, null, dp, {
+         }, null, sT), (0, WT.h)(TT, null, iT, {
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L411)

```diff
-         }, null, Np), (0, Op.j)(pp, null, kp, {
+         }, null, sT), (0, WT.h)(TT, null, eT, {
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L421)

```diff
-         }, null, Np), (0, Op.j)(pp, null, mp, {
+         }, null, sT), (0, WT.h)(TT, null, YT, {
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L431)

```diff
-         }, null, Np), (0, Op.j)(pp, null, Rp, {
+         }, null, sT), (0, WT.h)(TT, null, JT, {
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L441)

```diff
-         }, null, Np), (0, Op.j)(pp, null, qp, {
+         }, null, sT), (0, WT.h)(TT, null, xT, {
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L451)

```diff
-         }, null, Np), (0, Op.j)(pp, null, Ep, {
+         }, null, sT), (0, WT.h)(TT, null, tT, {
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L461)

```diff
-         }, null, Np), (0, Op.j)(pp, null, Xp, {
+         }, null, sT), (0, WT.h)(TT, null, aT, {
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L471)

```diff
-         }, null, Np), (0, Op.j)(pp, null, lp, {
+         }, null, sT), (0, WT.h)(TT, null, yT, {
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L481)

```diff
-         }, null, Np), (0, Op.j)(pp, null, Qp, {
+         }, null, sT), (0, WT.h)(TT, null, XT, {
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L491)

```diff
-         }, null, Np), (0, Op.j)(null, null, ip, {
+         }, null, sT), (0, WT.h)(null, null, UT, {
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L504)

```diff
-         }, Tp, fp), (0, Op.j)(null, null, cp, {
+         }, FT, PT), (0, WT.h)(null, null, mT, {
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L517)

```diff
-         }, bp, hp), (0, Op.j)(null, null, Yp, {
+         }, VT, uT), (0, WT.h)(null, null, kT, {
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L530)

```diff
-         }, ap, np), (0, Op.j)(null, null, Ap, {
+         }, CT, rT), (0, WT.h)(null, null, lT, {
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L543)

```diff
-         }, Fp, gp), (0, Op.j)(null, null, Wp, {
+         }, KT, ST), (0, WT.h)(null, null, pT, {
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L556)

```diff
-         }, Gp, rp), (0, Op.j)(null, null, yp, {
+         }, GT, NT), (0, WT.h)(null, null, BT, {
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L569)

```diff
-         }, Zp, zp), (0, Op.j)(null, null, Up, {
+         }, ET, hT), (0, WT.h)(null, null, ZT, {
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L582)

```diff
-         }, sp, Kp), (0, Op.j)(null, null, wp, {
+         }, DT, oT), (0, WT.h)(null, null, cT, {
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L595)

```diff
-         }, Vp, ii), (0, Op.j)(null, null, vp, {
+         }, AT, RT), (0, WT.h)(null, null, vT, {
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L608)

```diff
-         }, ci, Oi), (0, Op.j)(null, null, tp, {
+         }, TU, UU), (0, WT.h)(null, null, fT, {
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L621)

```diff
-         }, oi, Ii), (0, Op.j)(null, null, ep, {
+         }, mU, WU), (0, WT.h)(null, null, bT, {
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L634)

```diff
-         }, Si, xi), (0, Op.j)(null, null, jp, {
+         }, zU, MU), (0, WT.h)(null, null, OT, {
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L647)

```diff
-         }, Li, Yi), (0, Op.j)(null, null, Mp, {
+         }, gU, nU), (0, WT.h)(null, null, dT, {
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L660)

```diff
-         }, Di, Ai), (0, Op.j)(null, null, Cp, {
+         }, HU, kU), (0, WT.h)(null, null, wT, {
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L673)

```diff
-         }, Pi, Wi), (0, Op.j)(null, null, Jp, {
+         }, jU, lU), (0, WT.h)(null, null, IT, {
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L694)

```diff
-     (Ap = yp.prototype).forceSphericalPolynomialsRecompute ?? (Ap.forceSphericalPolynomialsRecompute = (0, Wp.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(yp.prototype, "sphericalPolynomial") || Object.defineProperty(yp.prototype, "sph … [truncated]
+     (lT = BT.prototype).forceSphericalPolynomialsRecompute ?? (lT.forceSphericalPolynomialsRecompute = (0, pT.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(BT.prototype, "sphericalPolynomial") || Object.defineProperty(BT.prototype, "sph … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L696)

```diff
-   40654: (pp, ip, cp) => {
+   40602: (TT, UT, mT) => {
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L699)

```diff
-       d: () => Hp
+       g: () => qT
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L701-L711` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L701-L711) · [Before (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L701-L711)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37349),
-       Sp = cp(37320),
-       xp = cp(40195),
-       Lp = cp(37368),
-       Yp = cp(40096),
-       Dp = cp(40107),
-       Ap = cp(40306),
-       Pp = cp(37989),
-       Wp = cp(40269);
+     var WT = mT(40095),
+       zT = mT(40102),
+       MT = mT(37219),
+       gT = mT(37188),
+       nT = mT(40088),
+       HT = mT(37239),
+       kT = mT(39965),
+       jT = mT(39975),
+       lT = mT(40208),
+       LT = mT(37889),
+       pT = mT(40165);
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L756-L757)

```diff
-     var vp = cp(40605),
-       tp = cp(40233);
+     var vT = mT(40564),
+       fT = mT(40122);
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L760)

```diff
-         let ip, cp, yp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep = xp.d,
+         let UT, mT, BT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT = nT.c,
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L789` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L789) · [Before (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L789)

```diff
-             throw (0, Yp.o)("VideoTexture")
+             throw (0, kT.k)("VideoTexture")
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L817)

```diff
-             super(cp), this.url = ((0, Op.l)(this, Xp), (0, Op.l)(this, lp, null)), this.uOffset = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, 0)), this.vOffset = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, 0)), this.uScale = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, 1)), this.vScale … [truncated]
+             super(mT), this.url = ((0, WT.k)(this, aT), (0, WT.k)(this, yT, null)), this.uOffset = ((0, WT.k)(this, XT), (0, WT.k)(this, IT, 0)), this.vOffset = ((0, WT.k)(this, QT), (0, WT.k)(this, sT, 0)), this.uScale = ((0, WT.k)(this, FT), (0, WT.k)(this, PT, 1)), this.vScale … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L822)

```diff
-             const kp = this.Gl(),
+             const eT = this.KF(),
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L837)

```diff
-               if (this._texture.isReady) Dp.b.SetImmediate((() => Rp()));
+               if (this._texture.isReady) jT.e.SetImmediate((() => JT()));
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L858)

```diff
-             this.url && (this.releaseInternalTexture(), this.Gl().markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = pp), this.url = pp, this._buffer = ip, this._forcedExtension = Op, this.delayLoadState = 4;
+             this.url && (this.releaseInternalTexture(), this.KF().markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, this._buffer = UT, this._forcedExtension = WT, this.delayLoadState = 4;
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L866` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L866) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L866)

```diff
-             const pp = this.Gl();
+             const TT = this.KF();
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L869)

```diff
-             !ip && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ip = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ip, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+             !UT && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (UT = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(UT, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L872)

```diff
-             pp *= this._cachedUScale, ip *= this._cachedVScale, pp -= this.uRotationCenter * this._cachedUScale, ip -= this.vRotationCenter * this._cachedVScale, cp -= this.wRotationCenter, Sp.o.TransformCoordinatesFromFloatsToRef(pp, ip, cp, this._rowGenerationMatrix, Op), Op.x  … [truncated]
+             TT *= this._cachedUScale, UT *= this._cachedVScale, TT -= this.uRotationCenter * this._cachedUScale, UT -= this.vRotationCenter * this._cachedVScale, mT -= this.wRotationCenter, gT.p.TransformCoordinatesFromFloatsToRef(TT, UT, mT, this._rowGenerationMatrix, WT), WT.x  … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L877-L878` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L877-L878) · [Before (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L877-L878)

```diff
-             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * pp, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
-             const ip = this.Gl();
+             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * TT, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
+             const UT = this.KF();
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L884)

```diff
-             const ip = this.Gl();
+             const UT = this.KF();
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L890)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Sp.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Sp.b.Zero());
+             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = gT.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = gT.e.Zero());
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L894)

```diff
-                 Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
+                 gT.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L897)

```diff
-                 Sp.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
+                 gT.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L903)

```diff
-                 Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix)
+                 gT.e.IdentityToRef(this._cachedReflectionTextureMatrix)
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L922` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L922) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L922)

```diff
-             return tp.c.Clone((() => new pp(this._texture ? this._texture.url : null, this.Gl(), ip)), this)
+             return fT.e.Clone((() => new TT(this._texture ? this._texture.url : null, this.KF(), UT)), this)
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L933)

```diff
-               cp.base64String = `data:${pp};base64,${(0,Wp.i)(this._buffer)}`
+               mT.base64String = `data:${TT};base64,${(0,pT.j)(this._buffer)}`
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L945` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L945) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L945)

```diff
-               const pp = Ap.d.Instantiate(ip.customType).Parse(ip, cp, Op);
+               const TT = lT.c.Instantiate(UT.customType).Parse(UT, mT, WT);
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L953` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L953) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L953)

```diff
-               const pp = cp.gy().getLoadedTexturesCache();
+               const TT = mT.eB().getLoadedTexturesCache();
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L973)

```diff
-             return tp.c.Parse((() => {
+             return fT.e.Parse((() => {
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1048` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1048) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1048)

```diff
-           ip = [(0, op.K)()], cp = [(0, op.K)()], yp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], (0, Op.j)( … [truncated]
+           UT = [(0, zT.L)()], mT = [(0, zT.L)()], BT = [(0, zT.L)()], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)()], eT = [(0, zT.L)()], YT = [(0, zT.L)()], JT = [(0, zT.L)()], xT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], (0, WT.h)( … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1058)

```diff
-           }, null, Xp), (0, Op.j)(null, null, ip, {
+           }, null, aT), (0, WT.h)(null, null, UT, {
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1071)

```diff
-           }, lp, Qp), (0, Op.j)(null, null, cp, {
+           }, yT, XT), (0, WT.h)(null, null, mT, {
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1084)

```diff
-           }, Jp, Bp), (0, Op.j)(null, null, yp, {
+           }, IT, QT), (0, WT.h)(null, null, BT, {
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1097)

```diff
-           }, Np, Tp), (0, Op.j)(null, null, Hp, {
+           }, sT, FT), (0, WT.h)(null, null, qT, {
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1110)

```diff
-           }, fp, bp), (0, Op.j)(null, null, dp, {
+           }, PT, VT), (0, WT.h)(null, null, iT, {
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1123` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1123) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1123)

```diff
-           }, hp, ap), (0, Op.j)(null, null, ep, {
+           }, uT, CT), (0, WT.h)(null, null, bT, {
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1136)

```diff
-           }, np, Fp), (0, Op.j)(null, null, jp, {
+           }, rT, KT), (0, WT.h)(null, null, OT, {
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1149` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1149) · [Before (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1149)

```diff
-           }, gp, Gp), (0, Op.j)(null, null, kp, {
+           }, ST, GT), (0, WT.h)(null, null, eT, {
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1162` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1162) · [Before (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1162)

```diff
-           }, rp, Zp), (0, Op.j)(null, null, mp, {
+           }, NT, ET), (0, WT.h)(null, null, YT, {
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1175` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1175) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1175)

```diff
-           }, zp, sp), (0, Op.j)(null, null, Rp, {
+           }, hT, DT), (0, WT.h)(null, null, JT, {
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1188)

```diff
-           }, Kp, Vp), (0, Op.j)(null, null, qp, {
+           }, oT, AT), (0, WT.h)(null, null, xT, {
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1201)

```diff
-           }, ii, ci), (0, Op.j)(null, null, Mp, {
+           }, RT, TU), (0, WT.h)(null, null, dT, {
```

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1221)

```diff
-           throw (0, Yp.o)("CubeTexture")
+           throw (0, kT.k)("CubeTexture")
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1223` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1223) · [Before (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1223)

```diff
-           throw (0, Yp.o)("MirrorTexture")
+           throw (0, kT.k)("MirrorTexture")
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1225)

```diff
-           throw (0, Yp.o)("RenderTargetTexture")
+           throw (0, kT.k)("RenderTargetTexture")
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1231)

```diff
-       dp || (dp = !0, (0, Lp.g)("BABYLON.Texture", Hp), tp.c._TextureParser = Hp.Parse)
+       iT || (iT = !0, (0, HT.h)("BABYLON.Texture", qT), fT.e._TextureParser = qT.Parse)
```

#### 85. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/260.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/260.js#L1234)

```diff
-   40225: (pp, ip, cp) => {
+   40114: (TT, UT, mT) => {
```
