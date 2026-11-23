# Changed — Bundle Modifications Report (Part 022 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `22 / 137` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4665 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 3832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28715` → after: `L28572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28572) · [Before (L28715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28715)

```diff
-         this.HW = CC, this.kinds = ZC, this.rowStride = nC, this.matrices = new Float32Array(16 * CC), this.attributes = nC > 0 ? new Float32Array(CC * nC) : null, this.attributeRow = new Float32Array(nC), this.rg = new QC(CC), this.stale = new wC(CC), bC++
+         this.St = kk, this.kinds = Ik, this.rowStride = yk, this.matrices = new Float32Array(16 * kk), this.attributes = yk > 0 ? new Float32Array(kk * yk) : null, this.attributeRow = new Float32Array(yk), this.Ne = new Xk(kk), this.stale = new Tk(kk), ik++
```

#### 3833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28718` → after: `L28575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28575) · [Before (L28718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28718)

```diff
-         this.rg.grow(this.HW, CC), this.stale.grow(CC);
+         this.Ne.grow(this.St, kk), this.stale.grow(kk);
```

#### 3834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28722` → after: `L28579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28579) · [Before (L28722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28722)

```diff
-         ZC && (this.attributes = new Float32Array(CC * this.rowStride), this.attributes.set(ZC)), this.HW = CC
+         Ik && (this.attributes = new Float32Array(kk * this.rowStride), this.attributes.set(Ik)), this.St = kk
```

#### 3835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28751` → after: `L28608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28608) · [Before (L28751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28751)

```diff
-   37648: (CC, zC, ZC) => {
+   37815: (kk, Fk, Ik) => {
```

#### 3836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28753-L28755` → after: `L28610-L28612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28610-L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28610-L28612) · [Before (L28753-L28755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28753-L28755)

```diff
-       d: () => NC,
-       h: () => WC,
-       j: () => FC
+       b: () => Zk,
+       c: () => tk,
+       f: () => Lk
```

#### 3837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28757-L28761` → after: `L28614-L28618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28614-L28618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28614-L28618) · [Before (L28757-L28761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28757-L28761)

```diff
-     var QC = ZC(37653),
-       wC = ZC(37044),
-       bC = ZC(37301),
-       nC = ZC(37050),
-       fC = ZC(37061);
+     var Xk = Ik(37818),
+       Tk = Ik(37243),
+       ik = Ik(37475),
+       yk = Ik(37249),
+       lk = Ik(37255);
```

#### 3838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28777` → after: `L28634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28634) · [Before (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28777)

```diff
-         ticksPerAnimState: Math.max(1, zC / QC.c)
+         ticksPerAnimState: Math.max(1, Fk / Xk.e)
```

#### 3839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28782` → after: `L28639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28639) · [Before (L28782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28782)

```diff
-       return `floor(${(0,nC.L)(CC,"animTick","uAnimTick")} / ${(0,nC.ob)(CC,"uTicksPerAnimState")})`
+       return `floor(${(0,yk.$)(kk,"animTick","uAnimTick")} / ${(0,yk.Mb)(kk,"uTicksPerAnimState")})`
```

#### 3840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28789` → after: `L28646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28646) · [Before (L28789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28789)

```diff
-       getUniforms: CC => (0, bC.d)((0, nC.S)(CC) ? qC : oC, "vertex", CC),
+       getUniforms: kk => (0, ik.e)((0, yk.eb)(kk) ? qk : ak, "vertex", kk),
```

#### 3841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28791` → after: `L28648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28648) · [Before (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28791)

```diff
-         CC.updateFloat("uAnimTick", (0, QC.j)(zC)), CC.updateFloat("uAnimStatesNum", this.numAnimStates), CC.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
+         kk.updateFloat("uAnimTick", (0, Xk.m)(Fk)), kk.updateFloat("uAnimStatesNum", this.numAnimStates), kk.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
```

#### 3842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28795-L28796` → after: `L28652-L28653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28652-L28653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28652-L28653) · [Before (L28795-L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28795-L28796)

```diff
-         const ZC = (0, nC.ob)(zC, "uAnimStatesNum"),
-           QC = (0, nC.Ab)(zC, "vMainUV1");
+         const Ik = (0, yk.Mb)(Fk, "uAnimStatesNum"),
+           Xk = (0, yk.Zb)(Fk, "vMainUV1");
```

#### 3843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28798` → after: `L28655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28655) · [Before (L28798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28798)

```diff
-           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,nC.w)(zC,"float","frameTick",WC(zC))}\n                ${(0,nC.w)(zC,"float","animTexIndex",(0,nC.Y)(zC,"frameTick",ZC))}\n                ${QC}.y = (${QC}.y + animTexIndex) / ${ZC};\n            `
+           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,yk.G)(Fk,"float","frameTick",tk(Fk))}\n                ${(0,yk.G)(Fk,"float","animTexIndex",(0,yk.lb)(Fk,"frameTick",Ik))}\n                ${Xk}.y = (${Xk}.y + animTexIndex) / ${Ik};\n            `
```

#### 3844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28800` → after: `L28657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28657) · [Before (L28800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28800)

```diff
-           [(0, nC.x)(zC)]: `baseColor = ${(0,nC.ab)(zC,"diffuseSampler",(0,nC.J)(zC,"vMainUV1"))};`
+           [(0, yk.H)(Fk)]: `baseColor = ${(0,yk.qb)(Fk,"diffuseSampler",(0,yk.X)(Fk,"vMainUV1"))};`
```

#### 3845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28804` → after: `L28661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28661) · [Before (L28804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28804)

```diff
-     (0, fC.o)(NC)
+     (0, lk.p)(Zk)
```

#### 3846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28806` → after: `L28663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28663) · [Before (L28806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28806)

```diff
-   37849: (CC, zC, ZC) => {
+   38010: (kk, Fk, Ik) => {
```

#### 3847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28808` → after: `L28665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28665) · [Before (L28808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28808)

```diff
-       e: () => qC
+       d: () => qk
```

#### 3848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28810-L28814` → after: `L28667-L28671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28667-L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28667-L28671) · [Before (L28810-L28814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28810-L28814)

```diff
-     var QC = ZC(37059),
-       wC = ZC(37044),
-       bC = ZC(37301),
-       nC = ZC(37050),
-       fC = ZC(37061);
+     var Xk = Ik(37253),
+       Tk = Ik(37243),
+       ik = Ik(37475),
+       yk = Ik(37249),
+       lk = Ik(37255);
```

#### 3849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28824` → after: `L28681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28681) · [Before (L28824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28824)

```diff
-         getUniforms: CC => (0, bC.d)(oC, "vertex", CC),
+         getUniforms: kk => (0, ik.e)(ak, "vertex", kk),
```

#### 3850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28834` → after: `L28691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28691) · [Before (L28834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28834)

```diff
-             const CC = (0, nC.Ab)(zC, "vMainUV1");
+             const kk = (0, yk.Zb)(Fk, "vMainUV1");
```

#### 3851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28836-L28837` → after: `L28693-L28694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28693-L28694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28693-L28694) · [Before (L28836-L28837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28836-L28837)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,nC.f)(zC,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,nC.f)(zC,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,QC.tb)(zC)}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${CC}.x = (${CC}.x + ${(0,nC.wb)(zC,"aAtlasIdx1")}) / ${(0,nC.ob)(zC,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,nC.cb)(zC,(0,nC.Ab)(zC,"vTintAndOpacity"),`${(0,nC.wb)(zC,"aArmourTint")}.xyz`)}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yk.i)(Fk,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,yk.i)(Fk,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,Xk.lb)(Fk)}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${kk}.x = (${kk}.x + ${(0,yk.Wb)(Fk,"aAtlasIdx1")}) / ${(0,yk.Mb)(Fk,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,yk.vb)(Fk,(0,yk.Zb)(Fk,"vTintAndOpacity"),`${(0,yk.Wb)(Fk,"aArmourTint")}.xyz`)}\n\t\t\t\t`
```

#### 3852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28841-L28842` → after: `L28698-L28699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28698-L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28698-L28699) · [Before (L28841-L28842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28841-L28842)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,QC.tb)(zC)}\n\t\t\t\t`,
-             [(0, nC.x)(zC)]: `\n\t\t\t\t\t${(0,nC.w)(zC,"vec4","col1",(0,nC.ab)(zC,"diffuseSampler",(0,nC.J)(zC,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,nC.l)(zC,"vec4",`col1.rgb * ${(0,nC.J)(zC,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Xk.lb)(Fk)}\n\t\t\t\t`,
+             [(0, yk.H)(Fk)]: `\n\t\t\t\t\t${(0,yk.G)(Fk,"vec4","col1",(0,yk.qb)(Fk,"diffuseSampler",(0,yk.X)(Fk,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,yk.m)(Fk,"vec4",`col1.rgb * ${(0,yk.X)(Fk,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
```

#### 3853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28845` → after: `L28702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28702) · [Before (L28845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28845)

```diff
-         zg() {
+         ke() {
```

#### 3854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28847-L28849` → after: `L28704-L28706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28704-L28706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28704-L28706) · [Before (L28847-L28849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28847-L28849)

```diff
-             zC = (0, nC.ob)(CC, "uArmourAtlasTexNum"),
-             ZC = (0, nC.J)(CC, "vMainUV1"),
-             QC = `${ZC}.x * ${zC}`;
+             Fk = (0, yk.Mb)(kk, "uArmourAtlasTexNum"),
+             Ik = (0, yk.X)(kk, "vMainUV1"),
+             Xk = `${Ik}.x * ${Fk}`;
```

#### 3855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28852-L28854` → after: `L28709-L28711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28709-L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28709-L28711) · [Before (L28852-L28854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28852-L28854)

```diff
-               cells: `vec2f(${zC}, 1.0)`,
-               layers: [`floor(${QC})`],
-               uv: `vec2f(fract(${QC}), ${ZC}.y)`,
+               cells: `vec2f(${Fk}, 1.0)`,
+               layers: [`floor(${Xk})`],
+               uv: `vec2f(fract(${Xk}), ${Ik}.y)`,
```

#### 3856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28857` → after: `L28714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28714) · [Before (L28857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28857)

```diff
-             enchantTier: `${(0,nC.wb)(CC,"aArmourTint")}.w`
+             enchantTier: `${(0,yk.Wb)(kk,"aArmourTint")}.w`
```

#### 3857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28861` → after: `L28718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28718) · [Before (L28861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28861)

```diff
-     (0, fC.o)(qC)
+     (0, lk.p)(qk)
```

#### 3858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28863` → after: `L28720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28720) · [Before (L28863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28863)

```diff
-   37660: (CC, zC, ZC) => {
+   37821: (kk, Fk, Ik) => {
```

#### 3859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28865-L28867` → after: `L28722-L28724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28722-L28724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28722-L28724) · [Before (L28865-L28867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28865-L28867)

```diff
-       d: () => NC,
-       h: () => GC,
-       j: () => RC
+       e: () => Zk,
+       i: () => xk,
+       l: () => Pk
```

#### 3860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28869-L28874` → after: `L28726-L28731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28726-L28731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28726-L28731) · [Before (L28869-L28874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28869-L28874)

```diff
-     var QC = ZC(37059),
-       wC = ZC(37044),
-       bC = ZC(37301),
-       nC = ZC(37050),
-       fC = ZC(37653),
-       oC = ZC(37061);
+     var Xk = Ik(37253),
+       Tk = Ik(37243),
+       ik = Ik(37475),
+       yk = Ik(37249),
+       lk = Ik(37818),
+       ak = Ik(37255);
```

#### 3861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28879` → after: `L28736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28736) · [Before (L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28879)

```diff
-       const zC = (0, nC.l)(CC, "vec3", (0, nC.wb)(CC, "texAtlasIndices")),
+       const Fk = (0, yk.m)(kk, "vec3", (0, yk.Wb)(kk, "texAtlasIndices")),
```

#### 3862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28882-L28883` → after: `L28739-L28740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28739-L28740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28739-L28740) · [Before (L28882-L28883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28882-L28883)

```diff
-           const bC = (0, nC.l)(CC, "vec3", ...QC);
-           return (0, nC.l)(CC, "vec3", (0, nC.B)(CC, `equal(${zC}, ${bC})`, `${zC} == ${bC}`))
+           const ik = (0, yk.m)(kk, "vec3", ...Xk);
+           return (0, yk.m)(kk, "vec3", (0, yk.K)(kk, `equal(${Fk}, ${ik})`, `${Fk} == ${ik}`))
```

#### 3863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28885-L28886` → after: `L28742-L28743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28742-L28743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28742-L28743) · [Before (L28885-L28886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28885-L28886)

```diff
-         QC = [`dot(${(0,nC.wb)(CC,"aAtlasIdxFaces012")}, ${ZC("0.0","1.0","2.0")})`, `dot(${(0,nC.wb)(CC,"aAtlasIdxFaces345")}, ${ZC("3.0","4.0","5.0")})`].join(" + ");
-       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,nC.w)(CC,"float","atlasIdxIn",QC,"highp")}\n                    #else\n                        ${(0,nC.w)(CC,"float","atlasIdxIn",(0,nC.wb)(CC,"texAtlasIndices"),"highp")}\n          … [truncated]
+         Xk = [`dot(${(0,yk.Wb)(kk,"aAtlasIdxFaces012")}, ${Ik("0.0","1.0","2.0")})`, `dot(${(0,yk.Wb)(kk,"aAtlasIdxFaces345")}, ${Ik("3.0","4.0","5.0")})`].join(" + ");
+       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,yk.G)(kk,"float","atlasIdxIn",Xk,"highp")}\n                    #else\n                        ${(0,yk.G)(kk,"float","atlasIdxIn",(0,yk.Wb)(kk,"texAtlasIndices"),"highp")}\n          … [truncated]
```

#### 3864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28892-L28893` → after: `L28749-L28750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28749-L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28749-L28750) · [Before (L28892-L28893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28892-L28893)

```diff
-         layers: null !== (zC = CC.imagesPerAtlas[0]) && void 0 !== zC ? zC : FC,
-         width: null !== (ZC = CC.atlasTexelWidth) && void 0 !== ZC ? ZC : qC
+         layers: null !== (Fk = kk.imagesPerAtlas[0]) && void 0 !== Fk ? Fk : Lk,
+         width: null !== (Ik = kk.atlasTexelWidth) && void 0 !== Ik ? Ik : qk
```

#### 3865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28902` → after: `L28759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28759) · [Before (L28902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28902)

```diff
-       return CC.useWebGL2 && zC > 1 && (0, nC.S)(ZC)
+       return kk.useWebGL2 && Fk > 1 && (0, yk.eb)(Ik)
```

#### 3866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28908-L28910` → after: `L28765-L28767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28765-L28767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28765-L28767) · [Before (L28908-L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28908-L28910)

```diff
-       const wC = (0, QC.vb)(null !== (ZC = CC.atlasTexelWidth) && void 0 !== ZC ? ZC : qC),
-         bC = (0, nC.J)(zC, "vDiffuseUV");
-       return `\n                        ${(0,nC.w)(zC,"vec2","atlasTexelUV",`${bC} * ${wC}`)}\n                        ${(0,nC.w)(zC,"vec2","atlasDdx",(0,nC.m)(zC,"atlasTexelUV"))}\n                        ${(0,nC.w)(zC,"vec2","atlasDdy",(0,nC.q)(zC,"atlasTexelUV"))}\n            … [truncated]
+       const Tk = (0, Xk.ob)(null !== (Ik = kk.atlasTexelWidth) && void 0 !== Ik ? Ik : qk),
+         ik = (0, yk.X)(Fk, "vDiffuseUV");
+       return `\n                        ${(0,yk.G)(Fk,"vec2","atlasTexelUV",`${ik} * ${Tk}`)}\n                        ${(0,yk.G)(Fk,"vec2","atlasDdx",(0,yk.p)(Fk,"atlasTexelUV"))}\n                        ${(0,yk.G)(Fk,"vec2","atlasDdy",(0,yk.t)(Fk,"atlasTexelUV"))}\n            … [truncated]
```

#### 3867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28914-L28915` → after: `L28771-L28772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28771-L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28771-L28772) · [Before (L28914-L28915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28914-L28915)

```diff
-       const fC = `textureAtlas${ZC}`,
-         oC = (0, nC.J)(zC, "vDiffuseUV"),
+       const lk = `textureAtlas${Ik}`,
+         ak = (0, yk.X)(Fk, "vDiffuseUV"),
```

#### 3868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28917-L28920` → after: `L28774-L28777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28774-L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28774-L28777) · [Before (L28917-L28920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28917-L28920)

```diff
-         FC = ZC > 0 ? `${bC} - ${QC[0].toFixed(1)} * ${ZC.toFixed(1)}` : bC;
-       if (CC.useWebGL2) return (0, nC._)(zC, fC, oC, FC, qC);
-       const WC = CC.greedyMeshed ? `vec2(${oC}.x, (fract(${oC}.y) + ${FC}) / ${QC[ZC].toFixed(1)})` : wC > 1 ? `${oC} - vec2(0.0, ${ZC.toFixed(1)})` : oC;
-       return (0, nC.ab)(zC, fC, WC)
+         Lk = Ik > 0 ? `${ik} - ${Xk[0].toFixed(1)} * ${Ik.toFixed(1)}` : ik;
+       if (kk.useWebGL2) return (0, yk.pb)(Fk, lk, ak, Lk, qk);
+       const tk = kk.greedyMeshed ? `vec2(${ak}.x, (fract(${ak}.y) + ${Lk}) / ${Xk[Ik].toFixed(1)})` : Tk > 1 ? `${ak} - vec2(0.0, ${Ik.toFixed(1)})` : ak;
+       return (0, yk.qb)(Fk, lk, tk)
```

#### 3869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28925` → after: `L28782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28782) · [Before (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28925)

```diff
-       return 1 === wC ? `baseColor = ${pC(CC,zC,0,QC,1,ZC)};` : QC.map(((bC, nC) => `\n                        if (${ZC} < ${QC[0]*(nC+1)-.5}) {\n                            baseColor = ${pC(CC,zC,nC,QC,wC,ZC)};\n                        }${nC+1<wC?" else ":""}`)).join("")
+       return 1 === Tk ? `baseColor = ${Hk(kk,Fk,0,Xk,1,Ik)};` : Xk.map(((ik, yk) => `\n                        if (${Ik} < ${Xk[0]*(yk+1)-.5}) {\n                            baseColor = ${Hk(kk,Fk,yk,Xk,Tk,Ik)};\n                        }${yk+1<Tk?" else ":""}`)).join("")
```

#### 3870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28929` → after: `L28786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28786) · [Before (L28929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28929)

```diff
-       return `\n                    ${(0,nC.w)(CC,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,nC.w)(CC,"float","animStateMask",zC((0,nC.jb)(CC,"animParamIndex")))}\n                    ${(0,nC.w)(CC,"float","animTexIndexSta … [truncated]
+       return `\n                    ${(0,yk.G)(kk,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,yk.G)(kk,"float","animStateMask",Fk((0,yk.Gb)(kk,"animParamIndex")))}\n                    ${(0,yk.G)(kk,"float","animTexIndexSta … [truncated]
```

#### 3871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28944` → after: `L28801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28801) · [Before (L28944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28944)

```diff
-         for (let zC = 0; zC < this.textureAtlases.length; zC++) CC.push(`textureAtlas${zC}`)
+         for (let Fk = 0; Fk < this.textureAtlases.length; Fk++) kk.push(`textureAtlas${Fk}`)
```

#### 3872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28950` → after: `L28807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28807) · [Before (L28950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28950)

```diff
-         return this.animDataPerTex ? (0, bC.d)([{
+         return this.animDataPerTex ? (0, ik.e)([{
```

#### 3873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28966-L28967` → after: `L28823-L28824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28823-L28824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28823-L28824) · [Before (L28966-L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28966-L28967)

```diff
-           if (this.textureAtlases[QC]) CC.setTexture(`textureAtlas${QC}`, this.textureAtlases[QC]);
-           else null === (ZC = CC.expectTexture) || void 0 === ZC || ZC.call(CC, `textureAtlas${QC}`)
+           if (this.textureAtlases[Xk]) kk.setTexture(`textureAtlas${Xk}`, this.textureAtlases[Xk]);
+           else null === (Ik = kk.expectTexture) || void 0 === Ik || Ik.call(kk, `textureAtlas${Xk}`)
```

#### 3874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28969` → after: `L28826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28826) · [Before (L28969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28969)

```diff
-         this.animDataPerTex && (this.animData.x = (0, fC.j)(zC), CC.updateVector3("uAnimData", this.animData))
+         this.animDataPerTex && (this.animData.x = (0, lk.m)(Fk), kk.updateVector3("uAnimData", this.animData))
```

#### 3875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28978` → after: `L28835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28835) · [Before (L28978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28978)

```diff
-             return null !== (ZC = this.imagesPerAtlas[zC]) && void 0 !== ZC ? ZC : FC
+             return null !== (Ik = this.imagesPerAtlas[Fk]) && void 0 !== Ik ? Ik : Lk
```

#### 3876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28980-L28985` → after: `L28837-L28842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28837-L28842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28837-L28842) · [Before (L28980-L28985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28980-L28985)

```diff
-           wC = ZC.map(((CC, ZC) => (0, nC.gb)(zC, `textureAtlas${ZC}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
-           bC = (0, nC.ob)(zC, "uAnimData"),
-           fC = (0, nC.ob)(zC, "uAnimDataPerTex"),
-           oC = (0, nC.g)(zC),
-           qC = (0, nC.qb)(zC, "texAtlasIndex", "float", "mediump"),
-           NC = (0, nC.J)(zC, "texAtlasIndex");
+           Tk = Ik.map(((kk, Ik) => (0, yk.Cb)(Fk, `textureAtlas${Ik}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
+           ik = (0, yk.Mb)(Fk, "uAnimData"),
+           lk = (0, yk.Mb)(Fk, "uAnimDataPerTex"),
+           ak = (0, yk.k)(Fk),
+           qk = (0, yk.Qb)(Fk, "texAtlasIndex", "float", "mediump"),
+           Zk = (0, yk.X)(Fk, "texAtlasIndex");
```

#### 3877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28988-L28989` → after: `L28845-L28846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28845-L28846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28845-L28846) · [Before (L28988-L28989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28988-L28989)

```diff
-           CUSTOM_VERTEX_MAIN_BEGIN: WC(zC) + (this.animDataPerTex ? `\n                    ${(0,nC.w)(zC,"float","animTick",(0,nC.L)(zC,"animTick",`${bC}.x`))}\n                    ${(0,nC.w)(zC,"float","animTickStride",`${bC}.y`)}\n                    ${(0,nC.w)(zC,"float","numA … [truncated]
-           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,nC.S)(zC)?"":wC}\n                ${(0,nC.f)(zC,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,nC.f)(zC,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
+           CUSTOM_VERTEX_MAIN_BEGIN: tk(Fk) + (this.animDataPerTex ? `\n                    ${(0,yk.G)(Fk,"float","animTick",(0,yk.$)(Fk,"animTick",`${ik}.x`))}\n                    ${(0,yk.G)(Fk,"float","animTickStride",`${ik}.y`)}\n                    ${(0,yk.G)(Fk,"float","numA … [truncated]
+           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,yk.eb)(Fk)?"":Tk}\n                ${(0,yk.i)(Fk,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,yk.i)(Fk,"aAtlasIdxFaces012","vec3","highp")}\n           … [truncated]
```

#### 3878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28992-L28993` → after: `L28849-L28850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28849-L28850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28849-L28850) · [Before (L28992-L28993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28992-L28993)

```diff
-           [(0, nC.x)(zC)]: `${SC(this,zC)}${PC(this,zC,NC,QC)}`,
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${wC}\n                ${qC}\n            `
+           [(0, yk.H)(Fk)]: `${wk(this,Fk)}${Jk(this,Fk,Zk,Xk)}`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${Tk}\n                ${qk}\n            `
```

#### 3879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28997` → after: `L28854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28854) · [Before (L28997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28997)

```diff
-     (0, oC.o)(RC)
+     (0, ak.p)(Pk)
```

#### 3880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28999` → after: `L28856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28856) · [Before (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L28999)

```diff
-   37677: (CC, zC, ZC) => {
+   37835: (kk, Fk, Ik) => {
```

#### 3881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29001-L29002` → after: `L28858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28858) · [Before (L29001-L29002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29001-L29002)

```diff
-       c: () => pC,
-       d: () => PC,
+       b: () => Hk,
```

#### 3882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29004` → after: `L28860-L28861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28860-L28861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28860-L28861) · [Before (L29004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29004)

```diff
-       f: () => WC
+       f: () => wk,
+       g: () => tk
```

#### 3883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29006-L29011` → after: `L28863-L28868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28863-L28868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28863-L28868) · [Before (L29006-L29011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29006-L29011)

```diff
-     var QC = ZC(37059),
-       wC = ZC(37044),
-       bC = ZC(37301),
-       nC = ZC(37050),
-       fC = ZC(37061),
-       oC = ZC(37158);
+     var Xk = Ik(37253),
+       Tk = Ik(37243),
+       ik = Ik(37475),
+       yk = Ik(37249),
+       lk = Ik(37255),
+       ak = Ik(37348);
```

#### 3884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29027` → after: `L28884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28884) · [Before (L29027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29027)

```diff
-       return `${CC}.r > 0.0 || ${CC}.g > 0.0 || ${CC}.b > 0.0`
+       return `${kk}.r > 0.0 || ${kk}.g > 0.0 || ${kk}.b > 0.0`
```

#### 3885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29031-L29033` → after: `L28888-L28890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28888-L28890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28888-L28890) · [Before (L29031-L29033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29031-L29033)

```diff
-       const wC = (zC, ZC) => (0, nC.w)(CC, "float", zC, ZC),
-         bC = (zC, ZC) => (0, nC.w)(CC, "vec3", zC, ZC);
-       return `\n\t\t${bC("localPos",`rotationY(${zC}.w) * ${ZC}.xyz`)}\n\t\t${wC("tickVal",`${ZC}.w / 1000.0`)}\n\t\t${wC("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${wC("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${wC("totalMix","mix1 * 0.7 … [truncated]
+       const Tk = (Fk, Ik) => (0, yk.G)(kk, "float", Fk, Ik),
+         ik = (Fk, Ik) => (0, yk.G)(kk, "vec3", Fk, Ik);
+       return `\n\t\t${ik("localPos",`rotationY(${Fk}.w) * ${Ik}.xyz`)}\n\t\t${Tk("tickVal",`${Ik}.w / 1000.0`)}\n\t\t${Tk("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${Tk("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${Tk("totalMix","mix1 * 0.7 … [truncated]
```

#### 3886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29037-L29039` → after: `L28894-L28896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28894-L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28894-L28896) · [Before (L29037-L29039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29037-L29039)

```diff
-       const zC = (0, nC.J)(CC, "vEnchantRgbAndRotY"),
-         ZC = (0, nC.J)(CC, "vPositionAndAnimTick");
-       return `\n\t\t\n\t\tif (${MC(zC)}) {\n\t\t\t${gC(CC,zC,ZC,"baseColor.xyz")}\n\t\t\t${(0,nC.cb)(CC,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
+       const Fk = (0, yk.X)(kk, "vEnchantRgbAndRotY"),
+         Ik = (0, yk.X)(kk, "vPositionAndAnimTick");
+       return `\n\t\t\n\t\tif (${jk(Fk)}) {\n\t\t\t${ek(kk,Fk,Ik,"baseColor.xyz")}\n\t\t\t${(0,yk.vb)(kk,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
```

#### 3887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29043` → after: `L28900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28900) · [Before (L29043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29043)

```diff
-       return `fn ${CC}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${MC("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${gC(nC.e.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
+       return `fn ${kk}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${jk("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${ek(yk.e.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
```

#### 3888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29061` → after: `L28918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28918) · [Before (L29061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29061)

```diff
-         if (!FC.nS()) {
+         if (!Lk.Lw()) {
```

#### 3889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29068` → after: `L28925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28925) · [Before (L29068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29068)

```diff
-       getUniforms: CC => (0, nC.S)(CC) ? {} : (0, bC.d)(qC, "vertex", CC),
+       getUniforms: kk => (0, yk.eb)(kk) ? {} : (0, ik.e)(qk, "vertex", kk),
```

#### 3890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29071-L29075` → after: `L28928-L28932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28928-L28932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28928-L28932) · [Before (L29071-L29075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29071-L29075)

```diff
-           const CC = (0, nC.L)(zC, "timeMs", "uAnimTick"),
-             ZC = (0, nC.wb)(zC, "aEnchantmentSpeed"),
-             QC = (0, nC.wb)(zC, "aEnchantmentColour"),
-             wC = (0, nC.Ab)(zC, "vEnchantRgbAndRotY"),
-             bC = (0, nC.Ab)(zC, "vPositionAndAnimTick");
+           const kk = (0, yk.$)(Fk, "timeMs", "uAnimTick"),
+             Ik = (0, yk.Wb)(Fk, "aEnchantmentSpeed"),
+             Xk = (0, yk.Wb)(Fk, "aEnchantmentColour"),
+             Tk = (0, yk.Zb)(Fk, "vEnchantRgbAndRotY"),
+             ik = (0, yk.Zb)(Fk, "vPositionAndAnimTick");
```

#### 3891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29077-L29078` → after: `L28934-L28935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28934-L28935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28934-L28935) · [Before (L29077-L29078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29077-L29078)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,nC.f)(zC,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,nC.f)(zC,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,nC.f)(zC,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,nC. … [truncated]
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${wC} = ${(0,nC.l)(zC,"vec4",QC,`${(0,nC.wb)(zC,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,nC.cb)(zC,bC,`worldPos.xyz - ${(0,nC.wb)(zC,"aPosition")} + ${(0,nC.wb)(zC,"aOffset")}`) … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yk.i)(Fk,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,yk.i)(Fk,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,yk.i)(Fk,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,yk. … [truncated]
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${Tk} = ${(0,yk.m)(Fk,"vec4",Xk,`${(0,yk.Wb)(Fk,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,yk.vb)(Fk,ik,`worldPos.xyz - ${(0,yk.Wb)(Fk,"aPosition")} + ${(0,yk.Wb)(Fk,"aOffset")}`) … [truncated]
```

#### 3892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29082-L29084` → after: `L28939-L28941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28939-L28941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28939-L28941) · [Before (L29082-L29084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29082-L29084)

```diff
-           const CC = (CC, ZC) => (0, nC.w)(zC, "float", CC, ZC),
-             ZC = (CC, ZC) => (0, nC.w)(zC, "vec3", CC, ZC),
-             wC = (CC, ZC) => (0, nC.w)(zC, "vec4", CC, ZC);
+           const kk = (kk, Ik) => (0, yk.G)(Fk, "float", kk, Ik),
+             Ik = (kk, Ik) => (0, yk.G)(Fk, "vec3", kk, Ik),
+             Tk = (kk, Ik) => (0, yk.G)(Fk, "vec4", kk, Ik);
```

#### 3893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29086` → after: `L28943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28943) · [Before (L29086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29086)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,nC.qb)(zC,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,nC.qb)(zC,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,nC.r)(zC,"float","GOLDEN_RATIO",(0,QC.vb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,nC.r)(zC," … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,yk.Qb)(Fk,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,yk.Qb)(Fk,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,yk.u)(Fk,"float","GOLDEN_RATIO",(0,Xk.ob)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,yk.u)(Fk," … [truncated]
```

#### 3894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29091` → after: `L28948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28948) · [Before (L29091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29091)

```diff
-               (0, nC.fb)(zC, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
+               (0, yk.yb)(Fk, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
```

#### 3895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29093` → after: `L28950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28950) · [Before (L29093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29093)

```diff
-               ZC("Pi", `floor(P + dot(P, ${(0,nC.l)(zC,"vec3","SKEWFACTOR")}))`)
+               Ik("Pi", `floor(P + dot(P, ${(0,yk.m)(Fk,"vec3","SKEWFACTOR")}))`)
```

#### 3896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29096` → after: `L28953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28953) · [Before (L29096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29096)

```diff
-               ZC("x0", `P - Pi + dot(Pi, ${(0,nC.l)(zC,"vec3","UNSKEWFACTOR")})`)
+               Ik("x0", `P - Pi + dot(Pi, ${(0,yk.m)(Fk,"vec3","UNSKEWFACTOR")})`)
```

#### 3897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29120` → after: `L28977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28977) · [Before (L29120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29120)

```diff
-               wC("v1234_x", (0, nC.l)(zC, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
+               Tk("v1234_x", (0, yk.m)(Fk, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
```

#### 3898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29123` → after: `L28980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28980) · [Before (L29123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29123)

```diff
-               wC("v1234_y", (0, nC.l)(zC, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
+               Tk("v1234_y", (0, yk.m)(Fk, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
```

#### 3899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29126` → after: `L28983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28983) · [Before (L29126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29126)

```diff
-               wC("v1234_z", (0, nC.l)(zC, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
+               Tk("v1234_z", (0, yk.m)(Fk, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
```

#### 3900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29129` → after: `L28986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28986) · [Before (L29129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29129)

```diff
-               ZC("Pi_inc1", `step(Pi, ${(0,nC.l)(zC,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
+               Ik("Pi_inc1", `step(Pi, ${(0,yk.m)(Fk,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
```

#### 3901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29132` → after: `L28989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28989) · [Before (L29132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29132)

```diff
-               wC("Pt", `${(0,nC.l)(zC,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,nC.l)(zC,"vec2","50.0","161.0")}.xyxy`)
+               Tk("Pt", `${(0,yk.m)(Fk,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,yk.m)(Fk,"vec2","50.0","161.0")}.xyxy`)
```

#### 3902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29135` → after: `L28992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28992) · [Before (L29135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29135)

```diff
-               wC("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,nC.l)(zC,"vec4","Pi_1.xy","Pi_2.xy")})`)
+               Tk("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,yk.m)(Fk,"vec4","Pi_1.xy","Pi_2.xy")})`)
```

#### 3903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29138` → after: `L28995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28995) · [Before (L29138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29138)

```diff
-               (0, nC.l)(zC, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
+               (0, yk.m)(Fk, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
```

#### 3904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29140` → after: `L28997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28997) · [Before (L29140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29140)

```diff
-               (0, nC.l)(zC, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
+               (0, yk.m)(Fk, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
```

#### 3905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29142` → after: `L28999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R28999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L28999) · [Before (L29142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29142)

```diff
-               (0, nC.r)(zC, "vec3", "SOMELARGEFLOATS", (0, nC.l)(zC, "vec3", "635.298681", "682.357502", "668.926525"))
+               (0, yk.u)(Fk, "vec3", "SOMELARGEFLOATS", (0, yk.m)(Fk, "vec3", "635.298681", "682.357502", "668.926525"))
```

#### 3906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29145` → after: `L29002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29002) · [Before (L29145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29145)

```diff
-               (0, nC.r)(zC, "vec3", "ZINC", (0, nC.l)(zC, "vec3", "48.500388", "65.294118", "63.934599"))
+               (0, yk.u)(Fk, "vec3", "ZINC", (0, yk.m)(Fk, "vec3", "48.500388", "65.294118", "63.934599"))
```

#### 3907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29154` → after: `L29011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29011) · [Before (L29154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29154)

```diff
-               (0, nC.fb)(zC, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
+               (0, yk.yb)(Fk, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29156` → after: `L29013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29013) · [Before (L29156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29156)

```diff
-               (0, nC.fb)(zC, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
+               (0, yk.yb)(Fk, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29158` → after: `L29015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29015) · [Before (L29158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29158)

```diff
-               wC("hash_0", `fract( Pt * ${(0,nC.l)(zC,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
+               Tk("hash_0", `fract( Pt * ${(0,yk.m)(Fk,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
```

#### 3910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29161` → after: `L29018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29018) · [Before (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29161)

```diff
-               wC("hash_1", `fract( Pt * ${(0,nC.l)(zC,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
+               Tk("hash_1", `fract( Pt * ${(0,yk.m)(Fk,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
```

#### 3911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29164` → after: `L29021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29021) · [Before (L29164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29164)

```diff
-               wC("hash_2", `fract( Pt * ${(0,nC.l)(zC,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
+               Tk("hash_2", `fract( Pt * ${(0,yk.m)(Fk,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
```

#### 3912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29167` → after: `L29024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29024) · [Before (L29167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29167)

```diff
-               wC("grad_results", `${(0,nC.P)(zC,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
+               Tk("grad_results", `${(0,yk.ab)(Fk,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
```

#### 3913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29170` → after: `L29027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29027) · [Before (L29170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29170)

```diff
-               (0, nC.r)(zC, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
+               (0, yk.u)(Fk, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
```

#### 3914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29176-L29177` → after: `L29033-L29034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29033-L29034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29033-L29034) · [Before (L29176-L29177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29176-L29177)

```diff
-               (0, nC.l)(zC, "vec4", "0.0")
-             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,nC.u)(zC,"mat3","rotationY",[{name:"y",type:" … [truncated]
+               (0, yk.m)(Fk, "vec4", "0.0")
+             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,yk.y)(Fk,"mat3","rotationY",[{name:"y",type:" … [truncated]
```

#### 3915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29179-L29180` → after: `L29036-L29037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29036-L29037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29036-L29037) · [Before (L29179-L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29179-L29180)

```diff
-               (0, nC.l)(zC, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
-             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,nC.u)(zC,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
+               (0, yk.m)(Fk, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
+             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,yk.y)(Fk,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
```

#### 3916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29184` → after: `L29041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29041) · [Before (L29184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29184)

```diff
-             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,nC.u)(zC,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
+             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,yk.y)(Fk,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
```

#### 3917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29192` → after: `L29049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29049) · [Before (L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29192)

```diff
-               CC("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,nC.l)(zC,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,nC.l)(zC,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
+               kk("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,yk.m)(Fk,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,yk.m)(Fk,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
```

#### 3918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29195` → after: `L29052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29052) · [Before (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29195)

```diff
-               CC("sawtooth", (0, nC.Y)(zC, "intersection - loopedTickVal", "1.0"))
+               kk("sawtooth", (0, yk.lb)(Fk, "intersection - loopedTickVal", "1.0"))
```

#### 3919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29198` → after: `L29055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29055) · [Before (L29198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29198)

```diff
-               ZC("noisePos", `localPos * 4.0 - ${(0,nC.l)(zC,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
+               Ik("noisePos", `localPos * 4.0 - ${(0,yk.m)(Fk,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
```

#### 3920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29209` → after: `L29066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29066) · [Before (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29209)

```diff
-             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,oC.d)(zC,"enchantment")}\n\t\t\t\t`,
+             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,ak.d)(Fk,"enchantment")}\n\t\t\t\t`,
```

#### 3921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29216` → after: `L29073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29073) · [Before (L29216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29216)

```diff
-     (0, fC.o)(PC)
+     (0, lk.p)(Jk)
```

#### 3922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29218` → after: `L29075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29075) · [Before (L29218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29218)

```diff
-   37285: (CC, zC, ZC) => {
+   37457: (kk, Fk, Ik) => {
```

#### 3923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29220-L29221` → after: `L29077-L29078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29077-L29078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29077-L29078) · [Before (L29220-L29221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29220-L29221)

```diff
-       b: () => WC,
-       d: () => SC,
+       c: () => tk,
+       e: () => wk,
```

#### 3924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29223` → after: `L29080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29080) · [Before (L29223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29223)

```diff
-       g: () => NC
+       h: () => Zk
```

#### 3925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29225-L29232` → after: `L29082-L29089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29082-L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29082-L29089) · [Before (L29225-L29232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29225-L29232)

```diff
-     var QC = ZC(37059),
-       wC = ZC(37290),
-       bC = ZC(37292),
-       nC = ZC(37044),
-       fC = ZC(37301),
-       oC = ZC(37050),
-       qC = ZC(37063),
-       FC = ZC(37061);
+     var Xk = Ik(37253),
+       Tk = Ik(37461),
+       ik = Ik(37463),
+       yk = Ik(37243),
+       lk = Ik(37475),
+       ak = Ik(37249),
+       qk = Ik(37259),
+       Lk = Ik(37255);
```

#### 3926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29235` → after: `L29092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29092) · [Before (L29235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29235)

```diff
-       const QC = (0, qC.u)(CC, SC, function(CC, zC, ZC, QC) {
+       const Xk = (0, qk.v)(kk, wk, function(kk, Fk, Ik, Xk) {
```

#### 3927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29237-L29238` → after: `L29094-L29095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29094-L29095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29094-L29095) · [Before (L29237-L29238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29237-L29238)

```diff
-           Vg: CC,
-           uniformWriter: new bC.j(CC),
+           Xw: kk,
+           uniformWriter: new ik.m(kk),
```

#### 3928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29251` → after: `L29108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29108) · [Before (L29251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29251)

```diff
-       (0, QC._)(ZC.x, ZC.y, ZC.z, ZC.w, zC) && (ZC.x = zC[0], ZC.y = zC[1], ZC.z = zC[2], ZC.w = zC[3], CC.uniformLightVersion++)
+       (0, Xk.U)(Ik.x, Ik.y, Ik.z, Ik.w, Fk) && (Ik.x = Fk[0], Ik.y = Fk[1], Ik.z = Fk[2], Ik.w = Fk[3], kk.uniformLightVersion++)
```

#### 3929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29270` → after: `L29127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29127) · [Before (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29270)

```diff
-         (0, wC.d)(CC, this.Vg.lS);
+         (0, Tk.c)(kk, this.Xw.Nw);
```

#### 3930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29272` → after: `L29129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29129) · [Before (L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29272)

```diff
-         QC ? (0, FC.i)(CC, QC) : MC.disableUnusedSpecularTerm(CC, bC);
+         Xk ? (0, Lk.f)(kk, Xk) : jk.disableUnusedSpecularTerm(kk, ik);
```

#### 3931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29277` → after: `L29134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29134) · [Before (L29277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29277)

```diff
-         return (0, fC.d)(this.uniformLevels ? [...bC.g, {
+         return (0, lk.e)(this.uniformLevels ? [...ik.i, {
```

#### 3932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29280` → after: `L29137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29137) · [Before (L29280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29280)

```diff
-         }] : bC.g, "both", CC)
+         }] : ik.i, "both", kk)
```

#### 3933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29286` → after: `L29143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29143) · [Before (L29286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29286)

```diff
-         return (0, bC.u)(this.Vg) + this.uniformLightVersion
+         return (0, ik.u)(this.Xw) + this.uniformLightVersion
```

#### 3934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29289` → after: `L29146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29146) · [Before (L29289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29289)

```diff
-         this.Vg.lS && !this.uniformLevels && CC.push("aLightLevels")
+         this.Xw.Nw && !this.uniformLevels && kk.push("aLightLevels")
```

#### 3935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29293` → after: `L29150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29150) · [Before (L29293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29293)

```diff
-           const CC = this.uniformLevels ? (0, oC.ob)(zC, "uEntityLightLevels") : (0, oC.wb)(zC, "aLightLevels");
+           const kk = this.uniformLevels ? (0, ak.Mb)(Fk, "uEntityLightLevels") : (0, ak.Wb)(Fk, "aLightLevels");
```

#### 3936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29295-L29296` → after: `L29152-L29153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29152-L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29152-L29153) · [Before (L29295-L29296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29295-L29296)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,oC.f)(zC,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,QC.O)(zC)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,QC.N)(zC,CC)}\n\t\t\t\t\t\t${(0,oC.w)(zC,"vec3","blockLightContrib",(0,QC.n)(zC,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,oC.w)(zC,"vec3","skyContrib",`mix(${(0,oC.ob)(zC,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,ak.i)(Fk,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,Xk.N)(Fk)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,Xk.M)(Fk,kk)}\n\t\t\t\t\t\t${(0,ak.G)(Fk,"vec3","blockLightContrib",(0,Xk.r)(Fk,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,ak.G)(Fk,"vec3","skyContrib",`mix(${(0,ak.Mb)(Fk,"uAmbientL … [truncated]
```

#### 3937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29300-L29301` → after: `L29157-L29158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29157-L29158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29157-L29158) · [Before (L29300-L29301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29300-L29301)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,QC.O)(zC)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, QC.K)(zC)
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,Xk.N)(Fk)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, Xk.L)(Fk)
```

#### 3938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29305` → after: `L29162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29162) · [Before (L29305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29305)

```diff
-     (0, FC.o)(SC)
+     (0, Lk.p)(wk)
```

#### 3939. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29307` → after: `L29164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29164) · [Before (L29307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29307)

```diff
-   37061: (CC, zC, ZC) => {
+   37255: (kk, Fk, Ik) => {
```

#### 3940. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29316-L29317` → after: `L29174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29174) · [Before (L29316-L29317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29316-L29317)

```diff
-       m: () => qC,
-       o: () => oC
+       p: () => ak
```

#### 3941. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29350` → after: `L29207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29207) · [Before (L29350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29350)

```diff
-   37158: (CC, zC, ZC) => {
+   37348: (kk, Fk, Ik) => {
```

#### 3942. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29354` → after: `L29211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29211) · [Before (L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29354)

```diff
-     var QC = ZC(37050);
+     var Xk = Ik(37249);
```

#### 3943. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29357` → after: `L29214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29214) · [Before (L29357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29357)

```diff
-       return `\n\t\t${(0,QC.u)(CC,"vec3",`${zC}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,Xk.y)(kk,"vec3",`${Fk}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 3944. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29359` → after: `L29216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29216) · [Before (L29359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29359)

```diff
-         (0, QC.w)(CC, "vec4", "K", (0, QC.l)(CC, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, Xk.G)(kk, "vec4", "K", (0, Xk.m)(kk, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 3945. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29362` → after: `L29219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29219) · [Before (L29362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29362)

```diff
-         (0, QC.w)(CC, "vec4", "p", `mix(${(0,QC.l)(CC,"vec4","c.bg","K.wz")}, ${(0,QC.l)(CC,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, Xk.G)(kk, "vec4", "p", `mix(${(0,Xk.m)(kk,"vec4","c.bg","K.wz")}, ${(0,Xk.m)(kk,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 3946. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29365` → after: `L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29222) · [Before (L29365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29365)

```diff
-         (0, QC.w)(CC, "vec4", "q", `mix(${(0,QC.l)(CC,"vec4","p.xyw","c.r")}, ${(0,QC.l)(CC,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, Xk.G)(kk, "vec4", "q", `mix(${(0,Xk.m)(kk,"vec4","p.xyw","c.r")}, ${(0,Xk.m)(kk,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 3947. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29368` → after: `L29225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29225) · [Before (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29368)

```diff
-         (0, QC.w)(CC, "float", "d", "q.x - min(q.w, q.y)")
+         (0, Xk.G)(kk, "float", "d", "q.x - min(q.w, q.y)")
```

#### 3948. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29371` → after: `L29228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29228) · [Before (L29371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29371)

```diff
-         (0, QC.w)(CC, "float", "e", "1.0e-10")
+         (0, Xk.G)(kk, "float", "e", "1.0e-10")
```

#### 3949. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29374` → after: `L29231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29231) · [Before (L29374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29374)

```diff
-         (0, QC.l)(CC, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, Xk.m)(kk, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 3950. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29376` → after: `L29233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29233) · [Before (L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29376)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,QC.u)(CC,"vec3",`${zC}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,Xk.y)(kk,"vec3",`${Fk}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 3951. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29378` → after: `L29235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29235) · [Before (L29378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29378)

```diff
-         (0, QC.w)(CC, "vec4", "K", (0, QC.l)(CC, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, Xk.G)(kk, "vec4", "K", (0, Xk.m)(kk, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 3952. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29381` → after: `L29238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29238) · [Before (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29381)

```diff
-         (0, QC.w)(CC, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
+         (0, Xk.G)(kk, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
```

#### 3953. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29384` → after: `L29241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29241) · [Before (L29384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29384)

```diff
-         (0, QC.l)(CC, "vec3", "0.0")
+         (0, Xk.m)(kk, "vec3", "0.0")
```

#### 3954. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29386` → after: `L29243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29243) · [Before (L29386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29386)

```diff
-         (0, QC.l)(CC, "vec3", "1.0")
+         (0, Xk.m)(kk, "vec3", "1.0")
```

#### 3955. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29391` → after: `L29248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29248) · [Before (L29391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29391)

```diff
-   37666: (CC, zC, ZC) => {
+   37823: (kk, Fk, Ik) => {
```

#### 3956. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29394-L29395` → after: `L29252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29252) · [Before (L29394-L29395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29394-L29395)

```diff
-       f: () => FC,
-       g: () => qC
+       h: () => qk
```

#### 3957. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29397-L29401` → after: `L29254-L29258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29254-L29258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29254-L29258) · [Before (L29397-L29401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29397-L29401)

```diff
-     var QC = ZC(37059),
-       wC = ZC(37044),
-       bC = ZC(37050),
-       nC = ZC(37063),
-       fC = ZC(37061);
+     var Xk = Ik(37253),
+       Tk = Ik(37243),
+       ik = Ik(37249),
+       yk = Ik(37259),
+       lk = Ik(37255);
```

#### 3958. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29416` → after: `L29273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29273) · [Before (L29416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29416)

```diff
-           const ZC = (0, bC.U)(zC);
+           const Ik = (0, ik.hb)(Fk);
```

#### 3959. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29418-L29419` → after: `L29275-L29276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29275-L29276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29275-L29276) · [Before (L29418-L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29418-L29419)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,QC.r)(zC)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${oC}\n                if (${ZC} < 255.0 / 256.0 && ${ZC} < bayerDither(${(0,bC.E)(zC)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,Xk.w)(Fk)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${ak}\n                if (${Ik} < 255.0 / 256.0 && ${Ik} < bayerDither(${(0,ik.R)(Fk)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 3960. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29427-L29430` → after: `L29284-L29287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29284-L29287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29284-L29287) · [Before (L29427-L29430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29427-L29430)

```diff
-         const zC = (0, nC.Q)(CC, 1, !1),
-           ZC = (0, nC.R)(CC, 1, !1);
-         (0, nC.gb)(CC, {
-           transparencyMode: zC ? nC.t.alphaBlend : ZC ? nC.t.alphaTest : nC.t.opaque
+         const Fk = (0, yk.R)(kk, 1, !1),
+           Ik = (0, yk.S)(kk, 1, !1);
+         (0, yk.fb)(kk, {
+           transparencyMode: Fk ? yk.r.alphaBlend : Ik ? yk.r.alphaTest : yk.r.opaque
```

#### 3961. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29432` → after: `L29289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29289) · [Before (L29432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29432)

```diff
-       }(0, nC.u)(CC, qC, {
+       }(0, yk.v)(kk, qk, {
```

#### 3962. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29436` → after: `L29293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29293) · [Before (L29436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29436)

```diff
-     }(0, fC.o)(qC)
+     }(0, lk.p)(qk)
```

#### 3963. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29438` → after: `L29295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29295) · [Before (L29438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29438)

```diff
-   37670: (CC, zC, ZC) => {
+   37829: (kk, Fk, Ik) => {
```

#### 3964. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29441-L29442` → after: `L29298-L29299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29298-L29299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29298-L29299) · [Before (L29441-L29442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29441-L29442)

```diff
-       d: () => NC,
-       f: () => SC,
+       c: () => Zk,
+       e: () => wk,
```

#### 3965. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29444` → after: `L29301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29301) · [Before (L29444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29444)

```diff
-       j: () => gC
+       h: () => ek
```

#### 3966. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29446-L29453` → after: `L29303-L29310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29303-L29310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29303-L29310) · [Before (L29446-L29453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29446-L29453)

```diff
-     var QC = ZC(37059),
-       wC = ZC(37290),
-       bC = ZC(37292),
-       nC = ZC(37044),
-       fC = ZC(37301),
-       oC = ZC(37050),
-       qC = ZC(37063),
-       FC = ZC(37061);
+     var Xk = Ik(37253),
+       Tk = Ik(37461),
+       ik = Ik(37463),
+       yk = Ik(37243),
+       lk = Ik(37475),
+       ak = Ik(37249),
+       qk = Ik(37259),
+       Lk = Ik(37255);
```

#### 3967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29479` → after: `L29336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29336) · [Before (L29479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29479)

```diff
-         (0, wC.d)(CC, this.Vg.lS), CC.BLOXD_LIGHT_WORD = MC.has(ZC);
+         (0, Tk.c)(kk, this.Xw.Nw), kk.BLOXD_LIGHT_WORD = jk.has(Ik);
```

#### 3968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29481` → after: `L29338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29338) · [Before (L29481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29481)

```diff
-         bC || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), CC.BLOXD_TERRAIN_DIRECTI … [truncated]
+         ik || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), kk.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 3969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29484` → after: `L29341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29341) · [Before (L29484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29484)

```diff
-         this.Vg.lS && CC.push("aPackedLightLevels")
+         this.Xw.Nw && kk.push("aPackedLightLevels")
```

#### 3970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29487` → after: `L29344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29344) · [Before (L29487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29487)

```diff
-         const zC = (0, fC.d)(bC.g, "both", CC);
+         const Fk = (0, lk.e)(ik.i, "both", kk);
```

#### 3971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29489-L29490` → after: `L29346-L29347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29346-L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29346-L29347) · [Before (L29489-L29490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29489-L29490)

```diff
-         const ZC = (0, fC.d)((0, QC.D)(this.dirLightCount), "vertex", CC);
-         return (0, oC.S)(CC) ? {
+         const Ik = (0, lk.e)((0, Xk.F)(this.dirLightCount), "vertex", kk);
+         return (0, ak.eb)(kk) ? {
```

#### 3972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29494` → after: `L29351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29351) · [Before (L29494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29494)

```diff
-           vertex: `${zC.vertex}\n${ZC.vertex}`,
+           vertex: `${Fk.vertex}\n${Ik.vertex}`,
```

#### 3973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29503` → after: `L29360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29360) · [Before (L29503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29503)

```diff
-         return (0, bC.u)(this.Vg)
+         return (0, ik.u)(this.Xw)
```

#### 3974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29507-L29508` → after: `L29364-L29365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29364-L29365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29364-L29365) · [Before (L29507-L29508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29507-L29508)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,QC.ab)(zC)}\n                    ${(0,QC.E)(zC)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,QC.eb)(zC)}\n                    ${(0,QC.G)(zC,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,Xk.Y)(Fk)}\n                    ${(0,Xk.G)(Fk)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,Xk._)(Fk)}\n                    ${(0,Xk.J)(Fk,this.dirLightCount)}\n                `
```

#### 3975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29510-L29512` → after: `L29367-L29369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29367-L29369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29367-L29369) · [Before (L29510-L29512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29510-L29512)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,QC.W)(zC)}\n                    ${(0,QC.E)(zC)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, QC.S)(zC),
-           [(0, QC.y)(zC)]: `\n                    ${(0,QC.B)(zC)}\n                    ${(0,QC.u)(zC)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,Xk.R)(Fk)}\n                    ${(0,Xk.G)(Fk)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, Xk.Q)(Fk),
+           [(0, Xk.B)(Fk)]: `\n                    ${(0,Xk.E)(Fk)}\n                    ${(0,Xk.A)(Fk)}\n                `
```

#### 3976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29518` → after: `L29375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29375) · [Before (L29518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29518)

```diff
-       const ZC = (0, bC.A)(CC.model.view);
+       const Ik = (0, ik.z)(kk.model.view);
```

#### 3977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29520-L29521` → after: `L29377-L29378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29377-L29378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29377-L29378) · [Before (L29520-L29521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29520-L29521)

```diff
-         Vg: CC,
-         uniformWriter: new bC.j(CC),
+         Xw: kk,
+         uniformWriter: new ik.m(kk),
```

#### 3978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29530-L29532` → after: `L29387-L29389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29387-L29389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29387-L29389) · [Before (L29530-L29532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29530-L29532)

```diff
-       const ZC = (0, qC.Y)(CC);
-       (0, qC.x)(ZC, SC.name) || (0, qC.u)(ZC, SC, pC(zC, CC)), CC.checkReadyOnlyOnce = !0, (0, qC._)(CC, !0)
-     }(0, FC.o)(SC)
+       const Ik = (0, qk.X)(kk);
+       (0, qk.B)(Ik, wk.name) || (0, qk.v)(Ik, wk, Hk(Fk, kk)), kk.checkReadyOnlyOnce = !0, (0, qk.Y)(kk, !0)
+     }(0, Lk.p)(wk)
```

#### 3979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29534` → after: `L29391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29391) · [Before (L29534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29534)

```diff
-   37298: (CC, zC, ZC) => {
+   37468: (kk, Fk, Ik) => {
```

#### 3980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29538-L29539` → after: `L29394-L29396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29394-L29396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29394-L29396) · [Before (L29538-L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29538-L29539)

```diff
-       e: () => wC,
-       g: () => nC
+       f: () => Xk,
+       j: () => Tk,
+       k: () => yk
```

#### 3981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29559` → after: `L29416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29416) · [Before (L29559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29559)

```diff
-   37725: (CC, zC, ZC) => {
+   37887: (kk, Fk, Ik) => {
```

#### 3982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29563` → after: `L29419-L29420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29419-L29420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29419-L29420) · [Before (L29563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29563)

```diff
-       f: () => NC
+       i: () => jk,
+       j: () => Zk
```

#### 3983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29565` → after: `L29422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29422) · [Before (L29565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29565)

```diff
-     var QC = ZC(37329);
+     var Xk = Ik(37503);
```

#### 3984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29570` → after: `L29427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29427) · [Before (L29570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29570)

```diff
-       const oC = "position" === zC ? QC.E : QC.G;
+       const ak = "position" === Fk ? Xk.y : Xk.B;
```

#### 3985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29574` → after: `L29431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29431) · [Before (L29574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29574)

```diff
-           nC = fC && "position" !== zC && 0 !== wC && 1 !== wC ? 1 / wC : 1;
+           yk = lk && "position" !== Fk && 0 !== Tk && 1 !== Tk ? 1 / Tk : 1;
```

#### 3986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29650` → after: `L29507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29507) · [Before (L29650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29650)

```diff
-             return null !== (zC = oC(ZC)[fC]) && void 0 !== zC ? zC : []
+             return null !== (Fk = ak(Ik)[lk]) && void 0 !== Fk ? Fk : []
```

#### 3987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29686` → after: `L29543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29543) · [Before (L29686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29686)

```diff
-   37465: (CC, zC, ZC) => {
+   37652: (kk, Fk, Ik) => {
```

#### 3988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29765` → after: `L29622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29622) · [Before (L29765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29765)

```diff
-         const [zC, ZC, QC, nC] = null !== (NC = null === bC || void 0 === bC ? void 0 : bC[CC / 4]) && void 0 !== NC ? NC : [0, 0, 1, 1];
+         const [Fk, Ik, Xk, yk] = null !== (Zk = null === ik || void 0 === ik ? void 0 : ik[kk / 4]) && void 0 !== Zk ? Zk : [0, 0, 1, 1];
```

#### 3989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29785-L29788` → after: `L29642-L29645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29642-L29645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29642-L29645) · [Before (L29785-L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29785-L29788)

```diff
-       b: () => bC,
-       d: () => QC,
-       g: () => wC,
-       i: () => nC
+       e: () => ik,
+       f: () => Xk,
+       i: () => Tk,
+       k: () => yk
```

#### 3990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29791` → after: `L29648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29648) · [Before (L29791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29791)

```diff
-   37324: (CC, zC, ZC) => {
+   37499: (kk, Fk, Ik) => {
```

#### 3991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29794-L29795` → after: `L29651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29651) · [Before (L29794-L29795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29794-L29795)

```diff
-       f: () => WC,
-       i: () => FC,
+       g: () => tk,
```

#### 3992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29797` → after: `L29653-L29654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29653-L29654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29653-L29654) · [Before (L29797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29797)

```diff
-       l: () => oC,
+       m: () => qk,
+       n: () => ak,
```

#### 3993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29799` → after: `L29656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29656) · [Before (L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29799)

```diff
-       q: () => nC
+       s: () => yk
```

#### 3994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29865` → after: `L29722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29722) · [Before (L29865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29865)

```diff
-       return (ArrayBuffer.isView(ZC) ? (ZC.byteOffset + QC) % 4 === 0 && wC % 4 === 0 : 12 === wC && QC % 4 === 0) ? zC : null
+       return (ArrayBuffer.isView(Ik) ? (Ik.byteOffset + Xk) % 4 === 0 && Tk % 4 === 0 : 12 === Tk && Xk % 4 === 0) ? Fk : null
```

#### 3995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29921` → after: `L29778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29778) · [Before (L29921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29921)

```diff
-   37339: (CC, zC, ZC) => {
+   37519: (kk, Fk, Ik) => {
```

#### 3996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29923-L29928` → after: `L29780-L29784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29780-L29784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29780-L29784) · [Before (L29923-L29928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29923-L29928)

```diff
-       A: () => nC,
-       e: () => fC,
-       f: () => bC,
-       g: () => WC,
-       j: () => MC,
-       n: () => gC,
+       d: () => lk,
+       h: () => ik,
+       i: () => tk,
+       l: () => jk,
+       o: () => ek,
```

#### 3997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29931` → after: `L29787-L29788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29787-L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29787-L29788) · [Before (L29931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29931)

```diff
-       x: () => SC
+       u: () => wk,
+       w: () => yk
```

#### 3998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L29933` → after: `L29790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29790) · [Before (L29933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L29933)

```diff
-     var QC = ZC(37083);
+     var Xk = Ik(37277);
```

#### 3999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30017` → after: `L29874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29874) · [Before (L30017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30017)

```diff
-       CC.live && (CC.live = !1, wC--), CC.released = !0, (0, QC.R)(CC.gpu)
+       kk.live && (kk.live = !1, Tk--), kk.released = !0, (0, Xk.M)(kk.gpu)
```

#### 4000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30024` → after: `L29881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29881) · [Before (L30024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30024)

```diff
-   37069: (CC, zC, ZC) => {
+   37263: (kk, Fk, Ik) => {
```

#### 4001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30026` → after: `L29883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29883) · [Before (L30026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30026)

```diff
-       c: () => QC
+       e: () => Xk
```

#### 4002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30050` → after: `L29907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29907) · [Before (L30050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30050)

```diff
-   37076: (CC, zC, ZC) => {
+   37270: (kk, Fk, Ik) => {
```

#### 4003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30052` → after: `L29909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29909) · [Before (L30052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30052)

```diff
-       c: () => bC,
+       d: () => ik,
```

#### 4004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30064` → after: `L29921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29921) · [Before (L30064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30064)

```diff
-       return null !== (zC = CC && wC.get(CC)) && void 0 !== zC ? zC : QC
+       return null !== (Fk = kk && Tk.get(kk)) && void 0 !== Fk ? Fk : Xk
```

#### 4005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30067` → after: `L29924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29924) · [Before (L30067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30067)

```diff
-   37063: (CC, zC, ZC) => {
+   37259: (kk, Fk, Ik) => {
```

#### 4006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30070-L30071` → after: `L29928-L29930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29928-L29930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29928-L29930) · [Before (L30070-L30071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30070-L30071)

```diff
-       F: () => NC,
-       G: () => HC,
+       D: () => Gk,
+       H: () => Zk,
+       I: () => uk,
```

#### 4007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30073-L30074` → after: `L29932-L29933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29932-L29933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29932-L29933) · [Before (L30073-L30074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30073-L30074)

```diff
-       K: () => SC,
-       M: () => pC,
+       N: () => wk,
+       O: () => Hk,
```

#### 4008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30081-L30087` → after: `L29941-L29945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29941-L29945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29941-L29945) · [Before (L30081-L30087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30081-L30087)

```diff
-       _: () => GC,
-       ab: () => AC,
-       c: () => fC,
-       eb: () => XC,
-       g: () => JC,
-       gb: () => eC,
-       k: () => oC,
+       bb: () => Uk,
+       d: () => lk,
+       f: () => sk,
+       fb: () => vk,
+       h: () => ak,
```

#### 4009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30089-L30091` → after: `L29947-L29948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29947-L29948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29947-L29948) · [Before (L30089-L30091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30089-L30091)

```diff
-       p: () => FC,
-       t: () => nC,
-       u: () => YC,
+       o: () => Lk,
+       r: () => yk,
```

#### 4010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30093` → after: `L29950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29950) · [Before (L30093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30093)

```diff
-       x: () => hC
+       y: () => Sk
```

#### 4011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30095-L30097` → after: `L29952-L29954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29952-L29954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L29952-L29954) · [Before (L30095-L30097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30095-L30097)

```diff
-     var QC = ZC(37069),
-       wC = ZC(37076),
-       bC = ZC(37083);
+     var Xk = Ik(37263),
+       Tk = Ik(37270),
+       ik = Ik(37277);
```

#### 4012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30157` → after: `L30014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30014) · [Before (L30157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30157)

```diff
-       QC !== ZC && (ZC && (0, bC.U)(ZC), CC[zC] = ZC, QC && (0, bC.S)(QC), CC.version++)
+       Xk !== Ik && (Ik && (0, ik.R)(Ik), kk[Fk] = Ik, Xk && (0, ik.Q)(Xk), kk.version++)
```

#### 4013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30173` → after: `L30030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30030) · [Before (L30173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30173)

```diff
-       const fC = null !== (ZC = null === nC || void 0 === nC ? void 0 : nC.create(bC, zC)) && void 0 !== ZC ? ZC : QC.c.defines();
+       const lk = null !== (Ik = null === yk || void 0 === yk ? void 0 : yk.create(ik, Fk)) && void 0 !== Ik ? Ik : Xk.e.defines();
```

#### 4014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30175` → after: `L30032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30032) · [Before (L30175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30175)

```diff
-         feature: QC.c,
+         feature: Xk.e,
```

#### 4015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30187` → after: `L30044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30044) · [Before (L30187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30187)

```diff
-         for (const CC of [zC.diffuseTexture, zC.opacityTexture, zC.emissiveTexture, zC.reflectionTexture]) CC && ((0, bC.U)(CC), wC.push(CC));
+         for (const kk of [Fk.diffuseTexture, Fk.opacityTexture, Fk.emissiveTexture, Fk.reflectionTexture]) kk && ((0, ik.R)(kk), Tk.push(kk));
```

#### 4016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30193` → after: `L30050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30050) · [Before (L30193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30193)

```diff
-           if ("diffuseTexture" === wC || "opacityTexture" === wC || "emissiveTexture" === wC || "reflectionTexture" === wC) AC(CC, wC, null !== (nC = bC) && void 0 !== nC ? nC : null);
+           if ("diffuseTexture" === Tk || "opacityTexture" === Tk || "emissiveTexture" === Tk || "reflectionTexture" === Tk) Kk(kk, Tk, null !== (yk = ik) && void 0 !== yk ? yk : null);
```

#### 4017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30198` → after: `L30055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30055) · [Before (L30198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30198)

```diff
-         for (const CC of wC)(0, bC.S)(CC)
+         for (const kk of Tk)(0, ik.Q)(kk)
```

#### 4018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30241` → after: `L30098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30098) · [Before (L30241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30241)

```diff
-       --CC.refs > 0 || (qC--, (0, bC.R)(CC.gpu), AC(CC, "diffuseTexture", null), AC(CC, "opacityTexture", null), AC(CC, "emissiveTexture", null), AC(CC, "reflectionTexture", null), CC.mirror && (WC.delete(CC.mirror), CC.mirror = null))
+       --kk.refs > 0 || (qk--, (0, ik.M)(kk.gpu), Kk(kk, "diffuseTexture", null), Kk(kk, "opacityTexture", null), Kk(kk, "emissiveTexture", null), Kk(kk, "reflectionTexture", null), kk.mirror && (tk.delete(kk.mirror), kk.mirror = null))
```

#### 4019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30276` → after: `L30133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30133) · [Before (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30276)

```diff
-   37083: (CC, zC, ZC) => {
+   37277: (kk, Fk, Ik) => {
```

#### 4020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30281-L30282` → after: `L30140-L30141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30140-L30141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30140-L30141) · [Before (L30281-L30282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30281-L30282)

```diff
-       L: () => eC,
-       O: () => YC,
+       M: () => Ok,
+       Q: () => zk,
```

#### 4021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30284-L30287` → after: `L30143-L30144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30143-L30144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30143-L30144) · [Before (L30284-L30287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30284-L30287)

```diff
-       S: () => iC,
-       U: () => IC,
-       W: () => xC,
-       X: () => hC,
+       V: () => Qk,
+       Y: () => Ek,
```

#### 4022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30292` → after: `L30148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30148) · [Before (L30292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30292)

```diff
-       k: () => JC,
+       m: () => jk,
```

#### 4023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30294-L30297` → after: `L30150-L30154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30150-L30154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30150-L30154) · [Before (L30294-L30297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30294-L30297)

```diff
-       p: () => pC,
-       r: () => gC,
-       u: () => oC,
-       y: () => fC
+       q: () => wk,
+       t: () => Hk,
+       v: () => ek,
+       x: () => ak,
+       z: () => lk
```

#### 4024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30299` → after: `L30156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30156) · [Before (L30299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30299)

```diff
-     var QC = ZC(37076);
+     var Xk = Ik(37270);
```

#### 4025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30351-L30352` → after: `L30208-L30209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30208-L30209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30208-L30209) · [Before (L30351-L30352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30351-L30352)

```diff
-         wrapU: null !== (ZC = gC.wrapU) && void 0 !== ZC ? ZC : qC,
-         wrapV: null !== (wC = gC.wrapV) && void 0 !== wC ? wC : qC,
+         wrapU: null !== (Ik = ek.wrapU) && void 0 !== Ik ? Ik : qk,
+         wrapV: null !== (Tk = ek.wrapV) && void 0 !== Tk ? Tk : qk,
```

#### 4026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30412` → after: `L30269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30269) · [Before (L30412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30412)

```diff
-       return null !== (zC = null === (ZC = RC) || void 0 === ZC ? void 0 : ZC.loaded(CC)) && void 0 !== zC ? zC : null
+       return null !== (Fk = null === (Ik = Pk) || void 0 === Ik ? void 0 : Ik.loaded(kk)) && void 0 !== Fk ? Fk : null
```

#### 4027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30423` → after: `L30280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30280) · [Before (L30423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30423)

```diff
-       CC.live || (CC.live = !0, NC++, null === (zC = RC) || void 0 === zC || zC.vq(CC));
+       kk.live || (kk.live = !0, Zk++, null === (Fk = Pk) || void 0 === Fk || Fk.eq(kk));
```

#### 4028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30449` → after: `L30306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30306) · [Before (L30449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30449)

```diff
-   37329: (CC, zC, ZC) => {
+   37503: (kk, Fk, Ik) => {
```

#### 4029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30651-L30654` → after: `L30508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30508) · [Before (L30651-L30654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30651-L30654)

```diff
-       A: () => SC,
-       D: () => gC,
-       E: () => qC,
-       G: () => FC,
+       B: () => Lk,
```

#### 4030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30656` → after: `L30510-L30511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30510-L30511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30510-L30511) · [Before (L30656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30656)

```diff
-       d: () => wC,
+       c: () => Tk,
+       e: () => ak,
```

#### 4031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30660` → after: `L30515-L30516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30515-L30516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30515-L30516) · [Before (L30660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30660)

```diff
-       r: () => NC,
+       p: () => Xk,
+       q: () => yk,
```

#### 4032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30662` → after: `L30518-L30519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30518-L30519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30518-L30519) · [Before (L30662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30662)

```diff
-       x: () => nC
+       x: () => ek,
+       y: () => qk
```

#### 4033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30665` → after: `L30522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30522) · [Before (L30665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30665)

```diff
-   37318: (CC, zC, ZC) => {
+   37497: (kk, Fk, Ik) => {
```

#### 4034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30667` → after: `L30524-L30525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30524-L30525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30524-L30525) · [Before (L30667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30667)

```diff
-       e: () => nC,
+       c: () => yk,
+       f: () => lk,
```

#### 4035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30672-L30674` → after: `L30529-L30531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30529-L30531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30529-L30531) · [Before (L30672-L30674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30672-L30674)

```diff
-     var QC = ZC(37324),
-       wC = ZC(37329),
-       bC = ZC(37336);
+     var Xk = Ik(37499),
+       Tk = Ik(37503),
+       ik = Ik(37512);
```

#### 4036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30684` → after: `L30541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30541) · [Before (L30684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30684)

```diff
-         this.owner = CC, this.geometry = zC, this.np = ZC, this.materials = QC, this.gpu = []
+         this.owner = kk, this.geometry = Fk, this.nZ = Ik, this.materials = Xk, this.gpu = []
```

#### 4037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30689` → after: `L30546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30546) · [Before (L30689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30689)

```diff
-         this.model = void 0, this.position = void 0, this.count = 0, this.np = new Int32Array(2), this.boxes = new Float64Array(6)
+         this.model = void 0, this.position = void 0, this.count = 0, this.nZ = new Int32Array(2), this.boxes = new Float64Array(6)
```

#### 4038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30692` → after: `L30549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30549) · [Before (L30692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30692)

```diff
-         this.count = CC, this.np.length < 2 * CC && (this.np = new Int32Array(2 * CC), this.boxes = new Float64Array(6 * CC))
+         this.count = kk, this.nZ.length < 2 * kk && (this.nZ = new Int32Array(2 * kk), this.boxes = new Float64Array(6 * kk))
```

#### 4039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30702-L30703` → after: `L30559-L30560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30559-L30560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30559-L30560) · [Before (L30702-L30703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30702-L30703)

```diff
-         const nC = this.nodes.HW;
-         this.flags.length < nC && (this.layer = (0, bC.o)(this.layer, nC), this.flags = (0, bC.o)(this.flags, nC), this.version = (0, bC.o)(this.version, nC), this.radius = (0, bC.o)(this.radius, nC), this.visibility = (0, bC.o)(this.visibility, nC), this.sphere = (0, bC.o)(this. … [truncated]
+         const yk = this.nodes.St;
+         this.flags.length < yk && (this.layer = (0, ik.l)(this.layer, yk), this.flags = (0, ik.l)(this.flags, yk), this.version = (0, ik.l)(this.version, yk), this.radius = (0, ik.l)(this.radius, yk), this.visibility = (0, ik.l)(this.visibility, yk), this.sphere = (0, ik.l)(this. … [truncated]
```

#### 4040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30724` → after: `L30581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30581) · [Before (L30724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30724)

```diff
-         this.looseIndex.length < this.nodes.HW && (this.loose = (0, bC.o)(this.loose, this.nodes.HW), this.looseIndex = (0, bC.o)(this.looseIndex, this.nodes.HW));
+         this.looseIndex.length < this.nodes.St && (this.loose = (0, ik.l)(this.loose, this.nodes.St), this.looseIndex = (0, ik.l)(this.looseIndex, this.nodes.St));
```

#### 4041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30740` → after: `L30597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30597) · [Before (L30740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30740)

```diff
-           sq: ZC,
+           ci: Ik,
```

#### 4042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30742` → after: `L30599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30599) · [Before (L30742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30742)

```diff
-           fN: wC
+           XZ: Tk
```

#### 4043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30766` → after: `L30623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30623) · [Before (L30766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30766)

```diff
-           sq: fC,
+           ci: lk,
```

#### 4044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30800` → after: `L30657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30657) · [Before (L30800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30800)

```diff
-         if (this.nodes.worldNow(CC, bC, oC), (0, wC.h)(oC, 0, qC), (0, wC.E)(zC, 0, qC, FC, 0), (0, wC.G)(zC, 3, qC, FC, 3), FC[6] = zC[6], (0, QC.q)(FC), !(0, QC.p)(FC, this.sphere, 4 * CC) || !(0, QC.l)(FC, this.box, 6 * CC)) return -1;
+         if (this.nodes.worldNow(kk, ik, ak), (0, Tk.e)(ak, 0, qk), (0, Tk.y)(Fk, 0, qk, Lk, 0), (0, Tk.B)(Fk, 3, qk, Lk, 3), Lk[6] = Fk[6], (0, Xk.s)(Lk), !(0, Xk.p)(Lk, this.sphere, 4 * kk) || !(0, Xk.n)(Lk, this.box, 6 * kk)) return -1;
```

#### 4045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30803-L30804` → after: `L30660-L30661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30660-L30661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30660-L30661) · [Before (L30803-L30804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30803-L30804)

```diff
-           if (nC.count > 1 && !(0, QC.l)(FC, nC.boxes, 6 * wC)) continue;
-           const CC = (0, QC.i)(nC.model, nC.position, FC, ZC, nC.np[2 * wC], nC.np[2 * wC + 1]); - 1 !== CC && (-1 === NC || CC < NC) && (NC = CC)
+           if (yk.count > 1 && !(0, Xk.n)(Lk, yk.boxes, 6 * Tk)) continue;
+           const kk = (0, Xk.j)(yk.model, yk.position, Lk, Ik, yk.nZ[2 * Tk], yk.nZ[2 * Tk + 1]); - 1 !== kk && (-1 === Zk || kk < Zk) && (Zk = kk)
```

#### 4046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30807` → after: `L30664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30664) · [Before (L30807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30807)

```diff
-         (0, wC.E)(FC, 0, oC, WC, 0), WC[3] = FC[3] * NC, WC[4] = FC[4] * NC, WC[5] = FC[5] * NC, (0, wC.G)(WC, 3, oC, fC, 0), fC[0] += WC[0], fC[1] += WC[1], fC[2] += WC[2];
+         (0, Tk.y)(Lk, 0, ak, tk, 0), tk[3] = Lk[3] * Zk, tk[4] = Lk[4] * Zk, tk[5] = Lk[5] * Zk, (0, Tk.B)(tk, 3, ak, lk, 0), lk[0] += tk[0], lk[1] += tk[1], lk[2] += tk[2];
```

#### 4047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30817` → after: `L30674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30674) · [Before (L30817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30817)

```diff
-         const QC = ZC ? this.flags[CC] | zC : this.flags[CC] & ~zC;
+         const Xk = Ik ? this.flags[kk] | Fk : this.flags[kk] & ~Fk;
```

#### 4048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30828` → after: `L30685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30685) · [Before (L30828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30828)

```diff
-   37336: (CC, zC, ZC) => {
+   37512: (kk, Fk, Ik) => {
```

#### 4049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30833` → after: `L30690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30690) · [Before (L30833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30833)

```diff
-       o: () => oC
+       l: () => ak
```

#### 4050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30835` → after: `L30692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30692) · [Before (L30835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30835)

```diff
-     var QC = ZC(37329);
+     var Xk = Ik(37503);
```

#### 4051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30853` → after: `L30710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30710) · [Before (L30853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30853)

```diff
-         this.HW = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.sq = new Float64Array(0), this.fN = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
+         this.St = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.ci = new Float64Array(0), this.XZ = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
```

#### 4052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30857` → after: `L30714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30714) · [Before (L30857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30857)

```diff
-         return this.freeCount > 0 ? CC = this.free[--this.freeCount] : (this.rows === this.HW && this.grow(Math.max(16, 2 * this.HW)), CC = this.rows++), this.parent[CC] = zC, this.position.fill(0, 3 * CC, 3 * CC + 3), this.rotation.set(nC, 4 * CC), this.sq.fill(1, 3 * CC, 3 * CC … [truncated]
+         return this.freeCount > 0 ? kk = this.free[--this.freeCount] : (this.rows === this.St && this.grow(Math.max(16, 2 * this.St)), kk = this.rows++), this.parent[kk] = Fk, this.position.fill(0, 3 * kk, 3 * kk + 3), this.rotation.set(yk, 4 * kk), this.ci.fill(1, 3 * kk, 3 * kk … [truncated]
```

#### 4053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30860` → after: `L30717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30717) · [Before (L30860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30860)

```diff
-         0 !== (this.flags[CC] & bC.live) && (this.flags[CC] = 0, this.sources[CC] = null, this.enabled[CC] = 0, this.Sg[this.disposedCount + this.pendingCount++] = CC, this.orderStale = !0, this.liveCount--)
+         0 !== (this.flags[kk] & ik.live) && (this.flags[kk] = 0, this.sources[kk] = null, this.enabled[kk] = 0, this.ee[this.disposedCount + this.pendingCount++] = kk, this.orderStale = !0, this.liveCount--)
```

#### 4054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30863` → after: `L30720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30720) · [Before (L30863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30863)

```diff
-         this.parent[CC] = zC, this.rg[CC] = 1, this.orderStale = !0
+         this.parent[kk] = Fk, this.Ne[kk] = 1, this.orderStale = !0
```

#### 4055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30867` → after: `L30724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30724) · [Before (L30867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30867)

```diff
-         this.position[wC] = zC, this.position[wC + 1] = ZC, this.position[wC + 2] = QC, this.rg[CC] = 1
+         this.position[Tk] = Fk, this.position[Tk + 1] = Ik, this.position[Tk + 2] = Xk, this.Ne[kk] = 1
```

#### 4056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30871` → after: `L30728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30728) · [Before (L30871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30871)

```diff
-         this.rotation[bC] = zC, this.rotation[bC + 1] = ZC, this.rotation[bC + 2] = QC, this.rotation[bC + 3] = wC, this.rg[CC] = 1
+         this.rotation[ik] = Fk, this.rotation[ik + 1] = Ik, this.rotation[ik + 2] = Xk, this.rotation[ik + 3] = Tk, this.Ne[kk] = 1
```

#### 4057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30875` → after: `L30732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30732) · [Before (L30875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30875)

```diff
-         bC[0] = ZC, bC[1] = zC, bC[2] = wC, (0, QC.u)(bC, 0, this.rotation, 4 * CC), this.rg[CC] = 1
+         ik[0] = Ik, ik[1] = Fk, ik[2] = Tk, (0, Xk.p)(ik, 0, this.rotation, 4 * kk), this.Ne[kk] = 1
```

#### 4058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30879` → after: `L30736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30736) · [Before (L30879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30879)

```diff
-         this.sq[wC] = zC, this.sq[wC + 1] = ZC, this.sq[wC + 2] = QC, this.rg[CC] = 1
+         this.ci[Tk] = Fk, this.ci[Tk + 1] = Ik, this.ci[Tk + 2] = Xk, this.Ne[kk] = 1
```

#### 4059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30885` → after: `L30742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30742) · [Before (L30885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30885)

```diff
-         this.billboard[CC] = zC, this.rg[CC] = 1
+         this.billboard[kk] = Fk, this.Ne[kk] = 1
```

#### 4060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30888` → after: `L30745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30745) · [Before (L30888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30888)

```diff
-         this.setFlag(CC, bC.infiniteDistance, zC), this.rg[CC] = 1
+         this.setFlag(kk, ik.infiniteDistance, Fk), this.Ne[kk] = 1
```

#### 4061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30894` → after: `L30751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30751) · [Before (L30894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30894)

```diff
-         this.sources[CC] = zC, this.setFlag(CC, bC.copied, null !== zC), this.rg[CC] = 1
+         this.sources[kk] = Fk, this.setFlag(kk, ik.copied, null !== Fk), this.Ne[kk] = 1
```

#### 4062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30899-L30900` → after: `L30756-L30757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30756-L30757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30756-L30757) · [Before (L30899-L30900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30899-L30900)

```diff
-         for (let wC = 0; wC < this.disposedCount; wC++) this.free[this.freeCount++] = this.Sg[wC];
-         this.Sg.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(zC);
+         for (let Tk = 0; Tk < this.disposedCount; Tk++) this.free[this.freeCount++] = this.ee[Tk];
+         this.ee.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(Fk);
```

#### 4063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30906` → after: `L30763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30763) · [Before (L30906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30906)

```diff
-           rg: oC,
+           Ne: ak,
```

#### 4064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30919` → after: `L30776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30776) · [Before (L30919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30919)

```diff
-           0 === oC[CC] && !PC && (MC < 0 || FC[CC] === qC[MC]) || (oC[CC] = 0, MC >= 0 && (FC[CC] = qC[MC]), pC ? this.out.set(this.sources[CC]) : this.computeWorld(CC, MC, SC, zC, this.fN, 16 * MC), this.storeWorld(CC) && qC[CC]++)
+           0 === ak[kk] && !Jk && (jk < 0 || Lk[kk] === qk[jk]) || (ak[kk] = 0, jk >= 0 && (Lk[kk] = qk[jk]), Hk ? this.out.set(this.sources[kk]) : this.computeWorld(kk, jk, wk, Fk, this.XZ, 16 * jk), this.storeWorld(kk) && qk[kk]++)
```

#### 4065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30923` → after: `L30780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30780) · [Before (L30923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30923)

```diff
-         this.flags[CC] = ZC ? this.flags[CC] | zC : this.flags[CC] & ~zC
+         this.flags[kk] = Ik ? this.flags[kk] | Fk : this.flags[kk] & ~Fk
```

#### 4066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30926` → after: `L30783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30783) · [Before (L30926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30926)

```diff
-         this.HW = CC, this.parent = oC(this.parent, CC), this.position = oC(this.position, 3 * CC), this.rotation = oC(this.rotation, 4 * CC), this.sq = oC(this.sq, 3 * CC), this.fN = oC(this.fN, 16 * CC), this.worldBits = new Uint32Array(this.fN.buffer), this.flags = oC(this.fla … [truncated]
+         this.St = kk, this.parent = ak(this.parent, kk), this.position = ak(this.position, 3 * kk), this.rotation = ak(this.rotation, 4 * kk), this.ci = ak(this.ci, 3 * kk), this.XZ = ak(this.XZ, 16 * kk), this.worldBits = new Uint32Array(this.XZ.buffer), this.flags = ak(this.fla … [truncated]
```

#### 4067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30932` → after: `L30789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30789) · [Before (L30932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30932)

```diff
-           rg: ZC,
+           Ne: Ik,
```

#### 4068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30957` → after: `L30814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30814) · [Before (L30957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30957)

```diff
-         zC.set(CC.viewMatrix), zC[12] = 0, zC[13] = 0, zC[14] = 0, (0, QC.h)(zC, 0, ZC), (0, QC.A)(ZC, this.scale, this.facing, wC), bC[0] = 0, (0, QC.d)(wC, bC, 1), bC[2] = 0, (0, QC.u)(bC, 0, wC, 0), (0, QC.x)(wC, this.billboardY)
+         Fk.set(kk.viewMatrix), Fk[12] = 0, Fk[13] = 0, Fk[14] = 0, (0, Xk.e)(Fk, 0, Ik), (0, Xk.u)(Ik, this.scale, this.facing, Tk), ik[0] = 0, (0, Xk.c)(Tk, ik, 1), ik[2] = 0, (0, Xk.p)(ik, 0, Tk, 0), (0, Xk.q)(Tk, this.billboardY)
```

#### 4069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30963` → after: `L30820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30820) · [Before (L30963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30963)

```diff
-           rg: nC,
+           Ne: yk,
```

#### 4070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30970` → after: `L30827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30827) · [Before (L30970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30970)

```diff
-           const zC = this.fN,
+           const Fk = this.XZ,
```

#### 4071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30977` → after: `L30834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30834) · [Before (L30977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30977)

```diff
-             0 !== (wC[CC] & bC.copied) ? this.out.set(this.sources[CC]) : this.computeWorld(CC, nC, this.billboard[CC], zC, FC === qC ? this.fN : ZC, FC === qC ? 16 * nC : 0), ZC.set(this.out)
+             0 !== (Tk[kk] & ik.copied) ? this.out.set(this.sources[kk]) : this.computeWorld(kk, yk, this.billboard[kk], Fk, Lk === qk ? this.XZ : Ik, Lk === qk ? 16 * yk : 0), Ik.set(this.out)
```

#### 4072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30990` → after: `L30847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30847) · [Before (L30990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30990)

```diff
-         }(0, QC.b)(this.sq, WC, this.rotation, 4 * CC, NC, MC, zC < 0 ? qC : FC), zC >= 0 && (ZC === wC.none ? (0, QC.o)(FC, fC, oC, qC) : ((0, QC.D)(fC, oC, this.scale, this.inverse, this.parentPart), (0, QC.o)(FC, this.parentPart, 0, qC))), ZC === wC.all ? this.turn(this.billbo … [truncated]
+         }(0, Xk.b)(this.ci, tk, this.rotation, 4 * kk, Zk, jk, Fk < 0 ? qk : Lk), Fk >= 0 && (Ik === Tk.none ? (0, Xk.l)(Lk, lk, ak, qk) : ((0, Xk.x)(lk, ak, this.scale, this.inverse, this.parentPart), (0, Xk.l)(Lk, this.parentPart, 0, qk))), Ik === Tk.all ? this.turn(this.billbo … [truncated]
```

#### 4073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L30997` → after: `L30854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30854) · [Before (L30997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L30997)

```diff
-         zC[12] = 0, zC[13] = 0, zC[14] = 0, (0, QC.o)(zC, CC, 0, zC), zC[12] = ZC, zC[13] = wC, zC[14] = bC
+         Fk[12] = 0, Fk[13] = 0, Fk[14] = 0, (0, Xk.l)(Fk, kk, 0, Fk), Fk[12] = Ik, Fk[13] = Tk, Fk[14] = ik
```

#### 4074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31001` → after: `L30858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30858) · [Before (L31001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31001)

```diff
-         (0, QC.h)(this.out, 0, zC);
+         (0, Xk.e)(this.out, 0, Fk);
```

#### 4075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31015` → after: `L30872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30872) · [Before (L31015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31015)

```diff
-         WC[0] = -Math.atan2(oC, Math.sqrt(fC * fC + qC * qC)), WC[1] = -Math.atan2(qC, fC) + Math.PI / 2, (0, QC.u)(WC, 0, this.quaternion, 0), (0, QC.x)(this.quaternion, this.facing), this.turn(this.facing)
+         tk[0] = -Math.atan2(ak, Math.sqrt(lk * lk + qk * qk)), tk[1] = -Math.atan2(qk, lk) + Math.PI / 2, (0, Xk.p)(tk, 0, this.quaternion, 0), (0, Xk.q)(this.quaternion, this.facing), this.turn(this.facing)
```

#### 4076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31023` → after: `L30880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30880) · [Before (L31023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31023)

```diff
-           if (zC[QC + wC] !== ZC[wC]) return this.fN.set(this.out, QC), !0;
+           if (Fk[Xk + Tk] !== Ik[Tk]) return this.XZ.set(this.out, Xk), !0;
```

#### 4077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31033` → after: `L30890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30890) · [Before (L31033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31033)

```diff
-   37184: (CC, zC, ZC) => {
+   37370: (kk, Fk, Ik) => {
```

#### 4078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31036` → after: `L30893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30893) · [Before (L31036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31036)

```diff
-       e: () => bC
+       d: () => ik
```

#### 4079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31049` → after: `L30906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30906) · [Before (L31049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31049)

```diff
-   38031: (CC, zC, ZC) => {
+   38195: (kk, Fk, Ik) => {
```

#### 4080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31051-L31052` → after: `L30908-L30909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30908-L30909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30908-L30909) · [Before (L31051-L31052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31051-L31052)

```diff
-       e: () => oC,
-       i: () => WC
+       c: () => ak,
+       d: () => tk
```

#### 4081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31054-L31057` → after: `L30911-L30914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30911-L30914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30911-L30914) · [Before (L31054-L31057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31054-L31057)

```diff
-     var QC = ZC(36918),
-       wC = ZC(1183),
-       bC = ZC(597),
-       nC = ZC(326);
+     var Xk = Ik(37099),
+       Tk = Ik(1231),
+       ik = Ik(621),
+       yk = Ik(337);
```

#### 4082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31068` → after: `L30925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30925) · [Before (L31068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31068)

```diff
-           ...Object.fromEntries(nC.sc.map((zC => [`Invisible ${zC} Light`, {
+           ...Object.fromEntries(yk.Mc.map((Fk => [`Invisible ${Fk} Light`, {
```

#### 4083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31070` → after: `L30927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30927) · [Before (L31070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31070)

```diff
-             altNames: [`${zC} Light Block`]
+             altNames: [`${Fk} Light Block`]
```

#### 4084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31078` → after: `L30935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R30935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L30935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L30935) · [Before (L31078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L31078)

```diff
-       oC = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
+       ak = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
```

#### 4085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32385` → after: `L32242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32242) · [Before (L32385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32385)

```diff
-       ...Object.fromEntries(wC.z.map((CC => [CC, {
+       ...Object.fromEntries(Tk.A.map((kk => [kk, {
```

#### 4086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32426` → after: `L32283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32283) · [Before (L32426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32426)

```diff
-       [(0, nC.Gb)("Sheep")]: {
+       [(0, yk.hc)("Sheep")]: {
```

#### 4087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32429` → after: `L32286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32286) · [Before (L32429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32429)

```diff
-       [(0, nC.Gb)("Cow")]: {
+       [(0, yk.hc)("Cow")]: {
```

#### 4088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32432` → after: `L32289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32289) · [Before (L32432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32432)

```diff
-       [(0, nC.Gb)("Pig")]: {
+       [(0, yk.hc)("Pig")]: {
```

#### 4089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32435` → after: `L32292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32292) · [Before (L32435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32435)

```diff
-       [(0, nC.Gb)("Horse")]: {
+       [(0, yk.hc)("Horse")]: {
```

#### 4090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32438` → after: `L32295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32295) · [Before (L32438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32438)

```diff
-       [(0, nC.Gb)("Camel")]: {
+       [(0, yk.hc)("Camel")]: {
```

#### 4091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32441` → after: `L32298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32298) · [Before (L32441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32441)

```diff
-       [(0, nC.Gb)("Wolf")]: {
+       [(0, yk.hc)("Wolf")]: {
```

#### 4092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32444` → after: `L32301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32301) · [Before (L32444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32444)

```diff
-       [(0, nC.Gb)("Deer")]: {
+       [(0, yk.hc)("Deer")]: {
```

#### 4093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32447` → after: `L32304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32304) · [Before (L32447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32447)

```diff
-       [(0, nC.Gb)("Wildcat")]: {
+       [(0, yk.hc)("Wildcat")]: {
```

#### 4094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32484` → after: `L32341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32341) · [Before (L32484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32484)

```diff
-       return Object.fromEntries(bC.B.map((CC => [(0, nC.Jb)(CC), gC(CC, [`Mob ${CC} Spawn Egg`])])))
+       return Object.fromEntries(ik.s.map((kk => [(0, yk.ic)(kk), ek(kk, [`Mob ${kk} Spawn Egg`])])))
```

#### 4095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32488` → after: `L32345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32345) · [Before (L32488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32488)

```diff
-       return Object.fromEntries(bC.B.map((CC => [(0, nC.Mb)(CC), gC(CC, [`${CC} Mob Spawner Block`])])))
+       return Object.fromEntries(ik.s.map((kk => [(0, yk.jc)(kk), ek(kk, [`${kk} Mob Spawner Block`])])))
```

#### 4096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32492` → after: `L32349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32349) · [Before (L32492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32492)

```diff
-       const ZC = bC.j.includes(CC);
+       const Ik = ik.h.includes(kk);
```

#### 4097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32496` → after: `L32353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32353) · [Before (L32496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32496)

```diff
-         isDisabled: ZC ? qC : void 0
+         isDisabled: Ik ? qk : void 0
```

#### 4098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32500` → after: `L32357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32357) · [Before (L32500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32500)

```diff
-   37827: (CC, zC, ZC) => {
+   37995: (kk, Fk, Ik) => {
```

#### 4099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32502-L32504` → after: `L32359-L32361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32359-L32361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32359-L32361) · [Before (L32502-L32504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32502-L32504)

```diff
-       b: () => GC,
-       e: () => pC,
-       h: () => PC,
+       c: () => xk,
+       f: () => Hk,
+       g: () => Jk,
```

#### 4100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32507-L32508` → after: `L32364-L32365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32364-L32365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32364-L32365) · [Before (L32507-L32508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32507-L32508)

```diff
-     var QC = ZC(590),
-       wC = ZC(600);
+     var Xk = Ik(614),
+       Tk = Ik(628);
```

#### 4101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32594` → after: `L32451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32451) · [Before (L32594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32594)

```diff
-         const wC = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.rootName) && void 0 !== QC ? QC : CC.substring(0, ZC);
+         const Tk = null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.rootName) && void 0 !== Xk ? Xk : kk.substring(0, Ik);
```

#### 4102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32596-L32597` → after: `L32453-L32454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32453-L32454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32453-L32454) · [Before (L32596-L32597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32596-L32597)

```diff
-           const QC = zC ? zC.metaStr ? `|${zC.metaStr}` : "" : CC.substring(ZC);
-           return `${nC[wC]}${QC}`
+           const Xk = Fk ? Fk.metaStr ? `|${Fk.metaStr}` : "" : kk.substring(Ik);
+           return `${yk[Tk]}${Xk}`
```

#### 4103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32611-L32615` → after: `L32468-L32472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32468-L32472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32468-L32472) · [Before (L32611-L32615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32611-L32615)

```diff
-     var WC = ZC(36897),
-       NC = ZC(37834),
-       MC = ZC(36708),
-       gC = ZC(184),
-       SC = ZC(37640);
+     var tk = Ik(37079),
+       Zk = Ik(38e3),
+       jk = Ik(36877),
+       ek = Ik(187),
+       wk = Ik(37811);
```

#### 4104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32622` → after: `L32479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32479) · [Before (L32622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32622)

```diff
-       return (0, NC.d)(WC.m[CC], zC)
+       return (0, Zk.b)(tk.j[kk], Fk)
```

#### 4105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32626` → after: `L32483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32483) · [Before (L32626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32626)

```diff
-         this.MN = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.MN = CC, this.state = zC, this.numSlots = ZC, this.items = new Array(this.numSlots) … [truncated]
+         this.qZ = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.qZ = kk, this.state = Fk, this.numSlots = Ik, this.items = new Array(this.numSlots) … [truncated]
```

#### 4106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32641` → after: `L32498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32498) · [Before (L32641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32641)

```diff
-               name: null !== (QC = WC.m[CC]) && void 0 !== QC && QC.keepMetaInChest ? CC : this.MN.bloxd.getMetaInfo(CC).rootName,
+               name: null !== (Xk = tk.j[kk]) && void 0 !== Xk && Xk.keepMetaInChest ? kk : this.qZ.bloxd.getMetaInfo(kk).rootName,
```

#### 4107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32646` → after: `L32503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32503) · [Before (L32646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32646)

```diff
-         return (0, wC.B)(ZC)
+         return (0, Tk.G)(Ik)
```

#### 4108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32652` → after: `L32509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32509) · [Before (L32652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32652)

```diff
-           wC = ZC ? oC : qC,
+           Tk = Ik ? ak : qk,
```

#### 4109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32661-L32662` → after: `L32518-L32519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32518-L32519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32518-L32519) · [Before (L32661-L32662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32661-L32662)

```diff
-           CC.name = wC(CC.name, null === (nC = this.MN.bloxd.qM.metadatas[CC.name]) || void 0 === nC ? void 0 : nC.meta);
-           if (FC(CC, void 0 !== this.MN.bloxd.qM.metadatas[CC.name] && this.MN.bloxd.getItemTypeObj(CC.name).stackable), !this.checkItem(CC)) {
+           kk.name = Tk(kk.name, null === (yk = this.qZ.bloxd.yj.metadatas[kk.name]) || void 0 === yk ? void 0 : yk.meta);
+           if (Lk(kk, void 0 !== this.qZ.bloxd.yj.metadatas[kk.name] && this.qZ.bloxd.getItemTypeObj(kk.name).stackable), !this.checkItem(kk)) {
```

#### 4110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32674` → after: `L32531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32531) · [Before (L32674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32674)

```diff
-             typeObj: this.MN.bloxd.getItemTypeObj(zC)
+             typeObj: this.qZ.bloxd.getItemTypeObj(Fk)
```

#### 4111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32684` → after: `L32541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32541) · [Before (L32684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32684)

```diff
-           inventory: new GC(this.MN, AC(this.state.mH, null), 0),
+           inventory: new xk(this.qZ, Kk(this.state.Xu, null), 0),
```

#### 4112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32687` → after: `L32544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32544) · [Before (L32687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32687)

```diff
-         CC.MN = this.MN, CC.state.mH = this.state.mH, CC.numSlots = this.numSlots, CC._selectedSlotI = this._selectedSlotI, CC.items.length = this.items.length, zC.length > this.items.length && (zC.length = this.items.length);
+         kk.qZ = this.qZ, kk.state.Xu = this.state.Xu, kk.numSlots = this.numSlots, kk._selectedSlotI = this._selectedSlotI, kk.items.length = this.items.length, Fk.length > this.items.length && (Fk.length = this.items.length);
```

#### 4113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32701` → after: `L32558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32558) · [Before (L32701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32701)

```diff
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.b.length;
+         let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.e.length;
```

#### 4114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32708-L32709` → after: `L32565-L32566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32565-L32566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32565-L32566) · [Before (L32708-L32709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32708-L32709)

```diff
-           if (CC.typeObj.stackable && (0 === CC.amount || null === CC.amount)) return console.error(new Error(`Stackable object ${CC.name} is being picked up with amount ${CC.amount}. Nothing will be added to inventory.`).stack), ZC;
-           if (CC.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${CC.name} ${CC.amount}`).stack), ZC
+           if (kk.typeObj.stackable && (0 === kk.amount || null === kk.amount)) return console.error(new Error(`Stackable object ${kk.name} is being picked up with amount ${kk.amount}. Nothing will be added to inventory.`).stack), Ik;
+           if (kk.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${kk.name} ${kk.amount}`).stack), Ik
```

#### 4115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32719` → after: `L32576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32576) · [Before (L32719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32719)

```diff
-               if (zC.amount <= 0 || null === zC.amount) return console.error(new Error(`Found item with different amount type to current item ${CC.name} ${zC.name} ${CC.amount} ${zC.amount}`).stack), ZC;
+               if (Fk.amount <= 0 || null === Fk.amount) return console.error(new Error(`Found item with different amount type to current item ${kk.name} ${Fk.name} ${kk.amount} ${Fk.amount}`).stack), Ik;
```

#### 4116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32758` → after: `L32615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32615) · [Before (L32758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32758)

```diff
-         return null !== this.items[CC] && (null === this.items[CC].amount ? this.items[CC] = null : (this.items[CC].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[CC].name} ${this.items[CC].amount}`)), this.items[CC].amount  … [truncated]
+         return null !== this.items[kk] && (null === this.items[kk].amount ? this.items[kk] = null : (this.items[kk].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[kk].name} ${this.items[kk].amount}`)), this.items[kk].amount  … [truncated]
```

#### 4117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32787` → after: `L32644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32644) · [Before (L32787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32787)

```diff
-           const wC = this.MN.bloxd.getItemTypeObj(zC);
+           const Tk = this.qZ.bloxd.getItemTypeObj(Fk);
```

#### 4118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32799` → after: `L32656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32656) · [Before (L32799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32799)

```diff
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QC.b.length;
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.e.length;
```

#### 4119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32803` → after: `L32660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32660) · [Before (L32803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32803)

```diff
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QC.b.length,
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.e.length,
```

#### 4120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32809` → after: `L32666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32666) · [Before (L32809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32809)

```diff
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length - QC.b.length;
+         let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length - Xk.e.length;
```

#### 4121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32827` → after: `L32684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32684) · [Before (L32827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32827)

```diff
-         this.state.selectedItem = this.items[this._selectedSlotI], QC && (this.updatesHeld ? this.heldUpdate = this.heldUpdate || CC : null === (zC = (ZC = this.state).onInventoryUpdate) || void 0 === zC || zC.call(ZC, CC))
+         this.state.selectedItem = this.items[this._selectedSlotI], Xk && (this.updatesHeld ? this.heldUpdate = this.heldUpdate || kk : null === (Fk = (Ik = this.state).onInventoryUpdate) || void 0 === Fk || Fk.call(Ik, kk))
```

#### 4122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32852` → after: `L32709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32709) · [Before (L32852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32852)

```diff
-               console.error(new Error(`Found item ${ZC.name} with amount ${ZC.amount}`).stack);
+               console.error(new Error(`Found item ${Ik.name} with amount ${Ik.amount}`).stack);
```

#### 4123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32865` → after: `L32722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32722) · [Before (L32865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32865)

```diff
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QC.b.length,
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.e.length,
```

#### 4124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32873-L32875` → after: `L32730-L32732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32730-L32732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32730-L32732) · [Before (L32873-L32875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32873-L32875)

```diff
-         if (!this.MN.bloxd.qM.metadatas[CC.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${CC.name}`).stack), !1;
-         const zC = this.MN.bloxd.getItemTypeObj(CC.name);
-         return zC.stackable && null === CC.amount ? (console.error(new Error(`Checked stackable item ${CC.name} with null amount`).stack), !1) : zC.stackable || null === CC.amount ? zC.stackable && CC.amount <= 0 ? (console.error(new Error(`Checked stackable item ${CC.name} with  … [truncated]
+         if (!this.qZ.bloxd.yj.metadatas[kk.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${kk.name}`).stack), !1;
+         const Fk = this.qZ.bloxd.getItemTypeObj(kk.name);
+         return Fk.stackable && null === kk.amount ? (console.error(new Error(`Checked stackable item ${kk.name} with null amount`).stack), !1) : Fk.stackable || null === kk.amount ? Fk.stackable && kk.amount <= 0 ? (console.error(new Error(`Checked stackable item ${kk.name} with  … [truncated]
```

#### 4125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32882` → after: `L32739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32739) · [Before (L32882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32882)

```diff
-         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wC.n;
+         Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tk.i;
```

#### 4126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32890` → after: `L32747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32747) · [Before (L32890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32890)

```diff
-         mH: CC,
+         Xu: kk,
```

#### 4127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32898` → after: `L32755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32755) · [Before (L32898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32898)

```diff
-   38025: (CC, zC, ZC) => {
+   38188: (kk, Fk, Ik) => {
```

#### 4128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32902-L32908` → after: `L32759-L32765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32759-L32765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32759-L32765) · [Before (L32902-L32908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32902-L32908)

```diff
-     var QC = ZC(590),
-       wC = ZC(184),
-       bC = ZC(38031),
-       nC = ZC(600),
-       fC = ZC(37827),
-       oC = ZC(36708),
-       qC = ZC(326);
+     var Xk = Ik(614),
+       Tk = Ik(187),
+       ik = Ik(38195),
+       yk = Ik(628),
+       lk = Ik(37995),
+       ak = Ik(36877),
+       qk = Ik(337);
```

#### 4129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32911` → after: `L32768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32768) · [Before (L32911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32911)

```diff
-         this.callbacks = ZC, this.MN = void 0, this.playerInventory = void 0, this.bQ = null, this.nQ = null, this.fQ = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.MN = CC, this.playerInventory = zC
+         this.callbacks = Ik, this.qZ = void 0, this.playerInventory = void 0, this.yX = null, this.lX = null, this.aX = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.qZ = kk, this.playerInventory = Fk
```

#### 4130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32914-L32915` → after: `L32771-L32772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32771-L32772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32771-L32772) · [Before (L32914-L32915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32914-L32915)

```diff
-         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nC.n;
-         this.loadOpenChestFromStr(CC, wC), this.chestOpenedWithExistingInventory(this.bQ, zC, ZC, QC)
+         let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yk.i;
+         this.loadOpenChestFromStr(kk, Tk), this.chestOpenedWithExistingInventory(this.yX, Fk, Ik, Xk)
```

#### 4131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32918` → after: `L32775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32775) · [Before (L32918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32918)

```diff
-         this.bQ = CC, this.nQ = zC, this.fQ = ZC, this.holdChestUpdates()
+         this.yX = kk, this.lX = Fk, this.aX = Ik, this.holdChestUpdates()
```

#### 4132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32921` → after: `L32778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32778) · [Before (L32921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32921)

```diff
-         this.bQ = null, this.nQ = null, this.fQ = null
+         this.yX = null, this.lX = null, this.aX = null
```

#### 4133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32924` → after: `L32781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32781) · [Before (L32924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32924)

```diff
-         this.playerInventory.loadFromString(wC), this.bQ ? this.bQ.loadFromString(CC) : this.chestOpened(CC, zC, ZC, null, QC)
+         this.playerInventory.loadFromString(Tk), this.yX ? this.yX.loadFromString(kk) : this.chestOpened(kk, Fk, Ik, null, Xk)
```

#### 4134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32927` → after: `L32784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32784) · [Before (L32927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32927)

```diff
-         return !(CC >= this.playerInventory.numSlots && !this.bQ && !this.inCreative) && (CC < this.playerInventory.numSlots ? this.playerInventory.removeItem(CC, zC) : this.bQ ? this.bQ.removeItem(CC - this.playerInventory.numSlots, zC) : (console.assert(this.inCreative, "Must b … [truncated]
+         return !(kk >= this.playerInventory.numSlots && !this.yX && !this.inCreative) && (kk < this.playerInventory.numSlots ? this.playerInventory.removeItem(kk, Fk) : this.yX ? this.yX.removeItem(kk - this.playerInventory.numSlots, Fk) : (console.assert(this.inCreative, "Must b … [truncated]
```

#### 4135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32930` → after: `L32787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32787) · [Before (L32930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32930)

```diff
-         if (!this.bQ && !this.inCreative && (CC >= this.playerInventory.numSlots || zC >= this.playerInventory.numSlots)) return !1;
+         if (!this.yX && !this.inCreative && (kk >= this.playerInventory.numSlots || Fk >= this.playerInventory.numSlots)) return !1;
```

#### 4136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32935` → after: `L32792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32792) · [Before (L32935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32935)

```diff
-         if (fC && QC && (0, qC.ib)(QC.name) !== fC || nC && bC && (0, qC.ib)(bC.name) !== nC) return !1;
+         if (lk && Xk && (0, qk.Gb)(Xk.name) !== lk || yk && ik && (0, qk.Gb)(ik.name) !== yk) return !1;
```

#### 4137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32937-L32938` → after: `L32794-L32795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32794-L32795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32794-L32795) · [Before (L32937-L32938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32937-L32938)

```diff
-           if ("Name Tag" === QC.name && QC.attributes.customAttributes.text && null === bC.amount && !wC.f.nonRenameableItems.includes(bC.name)) return this.MN.bloxd.renameItem(bC, QC.attributes.customAttributes.text, ZC), this.setItemAtIdx(CC, bC), this.removeItem(zC, 1), this.u … [truncated]
-           if ("Name Tag" === bC.name && bC.attributes.customAttributes.text && null === QC.amount && !wC.f.nonRenameableItems.includes(QC.name)) return this.MN.bloxd.renameItem(QC, bC.attributes.customAttributes.text, ZC), this.setItemAtIdx(zC, QC), this.removeItem(CC, 1), this.u … [truncated]
+           if ("Name Tag" === Xk.name && Xk.attributes.customAttributes.text && null === ik.amount && !Tk.f.nonRenameableItems.includes(ik.name)) return this.qZ.bloxd.renameItem(ik, Xk.attributes.customAttributes.text, Ik), this.setItemAtIdx(kk, ik), this.removeItem(Fk, 1), this.u … [truncated]
+           if ("Name Tag" === ik.name && ik.attributes.customAttributes.text && null === Xk.amount && !Tk.f.nonRenameableItems.includes(Xk.name)) return this.qZ.bloxd.renameItem(Xk, ik.attributes.customAttributes.text, Ik), this.setItemAtIdx(Fk, Xk), this.removeItem(kk, 1), this.u … [truncated]
```

#### 4138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32943` → after: `L32800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32800) · [Before (L32943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32943)

```diff
-         return this.inCreative && !this.bQ && CC >= this.playerInventory.numSlots
+         return this.inCreative && !this.yX && kk >= this.playerInventory.numSlots
```

#### 4139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32946` → after: `L32803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32803) · [Before (L32946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32946)

```diff
-         if (!this.bQ && !this.inCreative && (CC >= this.playerInventory.numSlots || zC >= this.playerInventory.numSlots)) return !1;
+         if (!this.yX && !this.inCreative && (kk >= this.playerInventory.numSlots || Fk >= this.playerInventory.numSlots)) return !1;
```

#### 4140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32953` → after: `L32810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32810) · [Before (L32953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32953)

```diff
-         if (QC.amount <= 0) return console.error(new Error(`movePosWithAmt found item ${QC.name} with amount ${QC.amount}`).stack), !1;
+         if (Xk.amount <= 0) return console.error(new Error(`movePosWithAmt found item ${Xk.name} with amount ${Xk.amount}`).stack), !1;
```

#### 4141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32956-L32957` → after: `L32813-L32814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32813-L32814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32813-L32814) · [Before (L32956-L32957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32956-L32957)

```diff
-         if (nC && (0, qC.ib)(QC.name) !== nC) return !1;
-         const WC = (0, fC.e)(QC.attributes);
+         if (yk && (0, qk.Gb)(Xk.name) !== yk) return !1;
+         const tk = (0, lk.f)(Xk.attributes);
```

#### 4142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32969` → after: `L32826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32826) · [Before (L32969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32969)

```diff
-         if (null !== nC.amount && nC.amount <= 0) return console.error(new Error(`moveItemIntoIdxs found item ${nC.name} with amount ${nC.amount}`).stack), bC;
+         if (null !== yk.amount && yk.amount <= 0) return console.error(new Error(`moveItemIntoIdxs found item ${yk.name} with amount ${yk.amount}`).stack), ik;
```

#### 4143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32979` → after: `L32836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32836) · [Before (L32979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32979)

```diff
-                 console.error(new Error(`moveItemIntoIdxs found item ${CC.name} with amount ${CC.amount}`).stack);
+                 console.error(new Error(`moveItemIntoIdxs found item ${kk.name} with amount ${kk.amount}`).stack);
```

#### 4144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32983` → after: `L32840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32840) · [Before (L32983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L32983)

```diff
-               if (CC.amount + FC <= wC.f.maxItemStackSize) return CC.amount += FC, nC.amount -= FC, nC.amount <= 0 && (this.setItemAtIdx(ZC, null), nC.amount < 0 && !(this.inCreative && !this.bQ && ZC >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
+               if (kk.amount + Lk <= Tk.f.maxItemStackSize) return kk.amount += Lk, yk.amount -= Lk, yk.amount <= 0 && (this.setItemAtIdx(Ik, null), yk.amount < 0 && !(this.inCreative && !this.yX && Ik >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
```

#### 4145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33000-L33001` → after: `L32857-L32858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32857-L32858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32857-L32858) · [Before (L33000-L33001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33000-L33001)

```diff
-             attributes: (0, fC.e)(nC.attributes)
-           }), nC.amount -= FC, nC.amount <= 0 && (this.setItemAtIdx(ZC, null), nC.amount < 0 && !(this.inCreative && !this.bQ && ZC >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${FC} ${nC.name} from slot ${ZC} that had ${CC} ${n … [truncated]
+             attributes: (0, lk.f)(yk.attributes)
+           }), yk.amount -= Lk, yk.amount <= 0 && (this.setItemAtIdx(Ik, null), yk.amount < 0 && !(this.inCreative && !this.yX && Ik >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${Lk} ${yk.name} from slot ${Ik} that had ${kk} ${y … [truncated]
```

#### 4146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33006` → after: `L32863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32863) · [Before (L33006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33006)

```diff
-         return this.update(), null === qC ? bC : {
+         return this.update(), null === qk ? ik : {
```

#### 4147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33012` → after: `L32869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32869) · [Before (L33012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33012)

```diff
-         const ZC = this.playerInventory.numSlots + (this.bQ ? this.bQ.numSlots : 0);
+         const Ik = this.playerInventory.numSlots + (this.yX ? this.yX.numSlots : 0);
```

#### 4148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33019` → after: `L32876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32876) · [Before (L33019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33019)

```diff
-           if (this.bQ) this.bQ.setItemSlot(CC - this.playerInventory.numSlots, zC, ZC, wC);
+           if (this.yX) this.yX.setItemSlot(kk - this.playerInventory.numSlots, Fk, Ik, Tk);
```

#### 4149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33021-L33023` → after: `L32878-L32880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32878-L32880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32878-L32880) · [Before (L33021-L33023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33021-L33023)

```diff
-         } else if (CC >= this.playerInventory.numSlots - QC.b.length) {
-           const bC = CC - this.playerInventory.numSlots + QC.b.length;
-           if ("Air" !== zC && (0, qC.ib)(zC) !== QC.b[bC]) throw new Error(`Attempting to put invalid item ${zC} ${ZC} ${wC} \t\t\t\t\tinto armour inven slot idx ${CC}`);
+         } else if (kk >= this.playerInventory.numSlots - Xk.e.length) {
+           const ik = kk - this.playerInventory.numSlots + Xk.e.length;
+           if ("Air" !== Fk && (0, qk.Gb)(Fk) !== Xk.e[ik]) throw new Error(`Attempting to put invalid item ${Fk} ${Ik} ${Tk} \t\t\t\t\tinto armour inven slot idx ${kk}`);
```

#### 4150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33029-L33030` → after: `L32886-L32887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32886-L32887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32886-L32887) · [Before (L33029-L33030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33029-L33030)

```diff
-         if (zC && null !== zC.amount && (zC.amount < 0 || zC.amount > wC.f.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${CC} with invalid amount ${zC.amount}. Slot will be set to null instead`).stack), zC = null), CC >= this.playerInventory.numSlots) {
-           if (this.bQ) this.bQ.items[CC - this.playerInventory.numSlots] = zC;
+         if (Fk && null !== Fk.amount && (Fk.amount < 0 || Fk.amount > Tk.f.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${kk} with invalid amount ${Fk.amount}. Slot will be set to null instead`).stack), Fk = null), kk >= this.playerInventory.numSlots) {
+           if (this.yX) this.yX.items[kk - this.playerInventory.numSlots] = Fk;
```

#### 4151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33032-L33033` → after: `L32889-L32890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32889-L32890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32889-L32890) · [Before (L33032-L33033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33032-L33033)

```diff
-         } else if (CC >= this.playerInventory.numSlots - QC.b.length) {
-           const wC = CC - this.playerInventory.numSlots + QC.b.length;
+         } else if (kk >= this.playerInventory.numSlots - Xk.e.length) {
+           const Tk = kk - this.playerInventory.numSlots + Xk.e.length;
```

#### 4152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33035` → after: `L32892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32892) · [Before (L33035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33035)

```diff
-           if (zC && (0, qC.ib)(zC.name) !== QC.b[wC]) throw new Error(`Attempting to put invalid item ${null===(ZC=zC)||void 0===ZC?void 0:ZC.name} ${null===(bC=zC)||void 0===bC?void 0:bC.amount} ${JSON.stringify(null!==(nC=null===(fC=zC)||void 0===fC?void 0:fC.attributes)&&void  … [truncated]
+           if (Fk && (0, qk.Gb)(Fk.name) !== Xk.e[Tk]) throw new Error(`Attempting to put invalid item ${null===(Ik=Fk)||void 0===Ik?void 0:Ik.name} ${null===(ik=Fk)||void 0===ik?void 0:ik.amount} ${JSON.stringify(null!==(yk=null===(lk=Fk)||void 0===lk?void 0:lk.attributes)&&void  … [truncated]
```

#### 4153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33041` → after: `L32898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32898) · [Before (L33041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33041)

```diff
-           if (this.bQ) return this.bQ.items[CC - this.playerInventory.numSlots];
+           if (this.yX) return this.yX.items[kk - this.playerInventory.numSlots];
```

#### 4154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33043-L33045` → after: `L32900-L32902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32900-L32902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32900-L32902) · [Before (L33043-L33045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33043-L33045)

```diff
-             const zC = bC.e[CC - this.playerInventory.numSlots],
-               ZC = this.MN.bloxd.getItemTypeObj(zC);
-             if (!ZC) throw new Error(`item ${zC} defined in creativeItems but not elsewhere`);
+             const Fk = ik.c[kk - this.playerInventory.numSlots],
+               Ik = this.qZ.bloxd.getItemTypeObj(Fk);
+             if (!Ik) throw new Error(`item ${Fk} defined in creativeItems but not elsewhere`);
```

#### 4155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33049` → after: `L32906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32906) · [Before (L33049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33049)

```diff
-               attributes: (0, fC.h)(zC),
+               attributes: (0, lk.g)(Fk),
```

#### 4156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33053` → after: `L32910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32910) · [Before (L33053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33053)

```diff
-           return this.MN.xS(`Attempting to get item in high idx ${CC} when not in chest or creative`, new Error(`Attempting to get item in high idx ${CC} when not in chest or creative`)), null
+           return this.qZ.Sw(`Attempting to get item in high idx ${kk} when not in chest or creative`, new Error(`Attempting to get item in high idx ${kk} when not in chest or creative`)), null
```

#### 4157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33058-L33059` → after: `L32915-L32916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32915-L32916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32915-L32916) · [Before (L33058-L33059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33058-L33059)

```diff
-         const zC = CC - nC.s + QC.b.length;
-         return zC < 0 || zC >= QC.b.length ? null : QC.b[zC]
+         const Fk = kk - yk.s + Xk.e.length;
+         return Fk < 0 || Fk >= Xk.e.length ? null : Xk.e[Fk]
```

#### 4158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33063` → after: `L32920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32920) · [Before (L33063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33063)

```diff
-         this.playerInventory.update(!0), null === (CC = this.bQ) || void 0 === CC || CC.update(!0)
+         this.playerInventory.update(!0), null === (kk = this.yX) || void 0 === kk || kk.update(!0)
```

#### 4159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33076` → after: `L32933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32933) · [Before (L33076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33076)

```diff
-         this.bQ && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.bQ) && (this.bQ.holdUpdates(), this.chestsWithUpdatesHeld.add(this.bQ))
+         this.yX && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.yX) && (this.yX.holdUpdates(), this.chestsWithUpdatesHeld.add(this.yX))
```

#### 4160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33080-L33084` → after: `L32937-L32941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32937-L32941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32937-L32941) · [Before (L33080-L33084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33080-L33084)

```diff
-           wQ: this.playerInventory.stringify(),
-           bQ: this.bQ ? this.bQ.stringify() : null,
-           nQ: this.nQ,
-           fQ: JSON.stringify(this.fQ),
-           oQ: this.bQ ? this.bQ.numSlots : null
+           iX: this.playerInventory.stringify(),
+           yX: this.yX ? this.yX.stringify() : null,
+           lX: this.lX,
+           aX: JSON.stringify(this.aX),
+           qX: this.yX ? this.yX.numSlots : null
```

#### 4161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33089-L33093` → after: `L32946-L32950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32946-L32950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32946-L32950) · [Before (L33089-L33093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33089-L33093)

```diff
-           wQ: zC,
-           bQ: ZC,
-           nQ: QC,
-           fQ: wC,
-           oQ: bC
+           iX: Fk,
+           yX: Ik,
+           lX: Xk,
+           aX: Tk,
+           qX: ik
```

#### 4162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33095` → after: `L32952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32952) · [Before (L33095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33095)

```diff
-         this.playerInventory.loadFromString(zC), ZC ? (this.loadOpenChestFromStr(ZC, null !== bC && void 0 !== bC ? bC : nC.n), this.nQ = QC || null, this.fQ = JSON.parse(wC) || null) : (this.bQ = null, this.nQ = null, this.fQ = null)
+         this.playerInventory.loadFromString(Fk), Ik ? (this.loadOpenChestFromStr(Ik, null !== ik && void 0 !== ik ? ik : yk.i), this.lX = Xk || null, this.aX = JSON.parse(Tk) || null) : (this.yX = null, this.lX = null, this.aX = null)
```

#### 4163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33098-L33099` → after: `L32955-L32956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32955-L32956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32955-L32956) · [Before (L33098-L33099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33098-L33099)

```diff
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.n;
-         return this.bQ = (0, fC.j)(this.MN, this.playerInventory.state.mH, (CC => {
+         let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.i;
+         return this.yX = (0, lk.j)(this.qZ, this.playerInventory.state.Xu, (kk => {
```

#### 4164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33102` → after: `L32959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32959) · [Before (L33102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33102)

```diff
-         }), zC), this.holdChestUpdates(), this.bQ.loadFromString(CC), this.bQ
+         }), Fk), this.holdChestUpdates(), this.yX.loadFromString(kk), this.yX
```

#### 4165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33106` → after: `L32963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32963) · [Before (L33106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33106)

```diff
-   38297: (CC, zC, ZC) => {
+   38453: (kk, Fk, Ik) => {
```

#### 4166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33108-L33109` → after: `L32965-L32967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32965-L32967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32965-L32967) · [Before (L33108-L33109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33108-L33109)

```diff
-       e: () => pC,
-       g: () => gC,
+       b: () => Hk,
+       c: () => ek,
+       f: () => jk,
```

#### 4167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33111-L33114` → after: `L32969-L32971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32969-L32971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32969-L32971) · [Before (L33111-L33114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33111-L33114)

```diff
-       j: () => FC,
-       n: () => NC,
-       q: () => WC,
-       r: () => nC
+       l: () => Zk,
+       m: () => tk,
+       p: () => yk
```

#### 4168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33116-L33118` → after: `L32973-L32975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32973-L32975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32973-L32975) · [Before (L33116-L33118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33116-L33118)

```diff
-     var QC = ZC(1806),
-       wC = ZC(3171),
-       bC = ZC(2166);
+     var Xk = Ik(1844),
+       Tk = Ik(3134),
+       ik = Ik(2148);
```

#### 4169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33121` → after: `L32978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32978) · [Before (L33121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33121)

```diff
-       oC = (0, QC.j)(20),
+       ak = (0, Xk.k)(20),
```

#### 4170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33127-L33131` → after: `L32984-L32988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32984-L32988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32984-L32988) · [Before (L33127-L33131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33127-L33131)

```diff
-       FC = (0, QC.j)(40),
-       WC = (0, QC.j)(0),
-       NC = (0, QC.j)(20),
-       MC = (0, QC.j)(35),
-       gC = (0, QC.j)(40),
+       Lk = (0, Xk.k)(40),
+       tk = (0, Xk.k)(0),
+       Zk = (0, Xk.k)(20),
+       jk = (0, Xk.k)(35),
+       ek = (0, Xk.k)(40),
```

#### 4171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33134-L33135` → after: `L32991-L32992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R32991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L32991-L32992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L32991-L32992) · [Before (L33134-L33135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33134-L33135)

```diff
-         numTexturesInAtlas: wC.c,
-         textureOffsets: bC.c,
+         numTexturesInAtlas: Tk.d,
+         textureOffsets: ik.e,
```

#### 4172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33334` → after: `L33191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33191) · [Before (L33334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33334)

```diff
-               softTolerance: (0, QC.j)(60),
+               softTolerance: (0, Xk.k)(60),
```

#### 4173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33350` → after: `L33207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33207) · [Before (L33350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33350)

```diff
-               softTolerance: (0, QC.j)(60),
+               softTolerance: (0, Xk.k)(60),
```

#### 4174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33365` → after: `L33222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33222) · [Before (L33365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33365)

```diff
-               softTolerance: (0, QC.j)(60),
+               softTolerance: (0, Xk.k)(60),
```

#### 4175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33595` → after: `L33452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33452) · [Before (L33595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33595)

```diff
-               softTolerance: (0, QC.j)(60),
+               softTolerance: (0, Xk.k)(60),
```

#### 4176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33670` → after: `L33527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33527) · [Before (L33670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33670)

```diff
-             softTolerance: (0, QC.j)(60),
+             softTolerance: (0, Xk.k)(60),
```

#### 4177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33675` → after: `L33532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33532) · [Before (L33675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33675)

```diff
-             softTolerance: (0, QC.j)(60),
+             softTolerance: (0, Xk.k)(60),
```

#### 4178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33811` → after: `L33668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33668) · [Before (L33811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33811)

```diff
-   37032: (CC, zC, ZC) => {
+   37227: (kk, Fk, Ik) => {
```

#### 4179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33813` → after: `L33670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33670) · [Before (L33813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33813)

```diff
-       b: () => wC
+       e: () => Tk
```

#### 4180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33837` → after: `L33694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33694) · [Before (L33837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33837)

```diff
-       return null !== (zC = nC[CC]) && void 0 !== zC ? zC : null
+       return null !== (Fk = yk[kk]) && void 0 !== Fk ? Fk : null
```

#### 4181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33909` → after: `L33766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33766) · [Before (L33909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33909)

```diff
-   38292: (CC, zC, ZC) => {
+   38445: (kk, Fk, Ik) => {
```

#### 4182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33911` → after: `L33768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R33768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L33768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L33768) · [Before (L33911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L33911)

```diff
-       c: () => wC
+       d: () => Tk
```

#### 4183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34697` → after: `L34554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34554) · [Before (L34697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34697)

```diff
-   37979: (CC, zC, ZC) => {
+   38132: (kk, Fk, Ik) => {
```

#### 4184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34703` → after: `L34560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34560) · [Before (L34703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34703)

```diff
-   37512: (CC, zC, ZC) => {
+   37693: (kk, Fk, Ik) => {
```

#### 4185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34705-L34707` → after: `L34562-L34564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34562-L34564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34562-L34564) · [Before (L34705-L34707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34705-L34707)

```diff
-       e: () => oC,
-       i: () => BC,
-       k: () => sC
+       b: () => ak,
+       f: () => rk,
+       g: () => Wk
```

#### 4186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34709-L34713` → after: `L34566-L34570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34566-L34570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34566-L34570) · [Before (L34709-L34713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34709-L34713)

```diff
-     var QC = ZC(184),
-       wC = ZC(9194),
-       bC = ZC(9217),
-       nC = ZC(37519),
-       fC = ZC(326);
+     var Xk = Ik(187),
+       Tk = Ik(9183),
+       ik = Ik(9210),
+       yk = Ik(37702),
+       lk = Ik(337);
```

#### 4187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34717` → after: `L34574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34574) · [Before (L34717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34717)

```diff
-       return (0, nC.j)((QC => {
+       return (0, yk.g)((Xk => {
```

#### 4188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34720` → after: `L34577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34577) · [Before (L34720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34720)

```diff
-         return QC === bC.JR.eT(bC.qE) ? function(CC, zC) {
+         return Xk === ik.MJ.aN(ik.oR) ? function(kk, Fk) {
```

#### 4189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34724` → after: `L34581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34581) · [Before (L34724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34724)

```diff
-             if (!CC.Gy(zC[0], zC[1], zC[2])) return !0
+             if (!kk.jB(Fk[0], Fk[1], Fk[2])) return !0
```

#### 4190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34727` → after: `L34584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34584) · [Before (L34727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34727)

```diff
-         }(wC, QC) : (ZC[0] = Math.floor((QC.wN.base[0] + QC.wN.max[0]) / 2), ZC[1] = Math.floor(QC.wN.base[1]), ZC[2] = Math.floor((QC.wN.base[2] + QC.wN.max[2]) / 2), wC.lB(ZC, ZC), !wC.Gy(ZC[0], ZC[1], ZC[2]))
+         }(Tk, Xk) : (Ik[0] = Math.floor((Xk.kZ.base[0] + Xk.kZ.max[0]) / 2), Ik[1] = Math.floor(Xk.kZ.base[1]), Ik[2] = Math.floor((Xk.kZ.base[2] + Xk.kZ.max[2]) / 2), Tk.Km(Ik, Ik), !Tk.jB(Ik[0], Ik[1], Ik[2]))
```

#### 4191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34732` → after: `L34589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34589) · [Before (L34732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34732)

```diff
-       WC = [...fC.xc.map((CC => wC.g[CC].id)), wC.g.Vines.id, wC.g["Maple Trapdoor"].id, wC.g["Pine Trapdoor"].id, wC.g["Plum Trapdoor"].id, wC.g["Cedar Trapdoor"].id, wC.g["Aspen Trapdoor"].id, wC.g["Jungle Trapdoor"].id, wC.g["Palm Trapdoor"].id, wC.g["Pear Trapdoor"].id, wC.g[ … [truncated]
+       tk = [...lk.Rc.map((kk => Tk.g[kk].id)), Tk.g.Vines.id, Tk.g["Maple Trapdoor"].id, Tk.g["Pine Trapdoor"].id, Tk.g["Plum Trapdoor"].id, Tk.g["Cedar Trapdoor"].id, Tk.g["Aspen Trapdoor"].id, Tk.g["Jungle Trapdoor"].id, Tk.g["Palm Trapdoor"].id, Tk.g["Pear Trapdoor"].id, Tk.g[ … [truncated]
```

#### 4192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34735` → after: `L34592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34592) · [Before (L34735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34735)

```diff
-       gC = Object.keys(wC.g).filter((CC => wC.g[CC].NM)).map((CC => wC.g[CC].id)),
+       ek = Object.keys(Tk.g).filter((kk => Tk.g[kk].qj)).map((kk => Tk.g[kk].id)),
```

#### 4193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34738` → after: `L34595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34595) · [Before (L34738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34738)

```diff
-     for (const [Zz, Qz] of Object.entries(bC.bc)) {
+     for (const [XF, TF] of Object.entries(ik.cc)) {
```

#### 4194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34740` → after: `L34597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34597) · [Before (L34740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34740)

```diff
-       if (!CC) throw new Error(`Jump pad "${Zz}" not found in blockMetadata`);
+       if (!kk) throw new Error(`Jump pad "${XF}" not found in blockMetadata`);
```

#### 4195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34753-L34754` → after: `L34610-L34611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34610-L34611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34610-L34611) · [Before (L34753-L34754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34753-L34754)

```diff
-       let ZC = CC.qp ? 0 : 1;
-       for (let QC = 4; CC.qp && QC < CC.qp.length; QC += 6) ZC = Math.max(ZC, CC.qp[QC]);
+       let Ik = kk.Re ? 0 : 1;
+       for (let Xk = 4; kk.Re && Xk < kk.Re.length; Xk += 6) Ik = Math.max(Ik, kk.Re[Xk]);
```

#### 4196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34759` → after: `L34616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34616) · [Before (L34759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34759)

```diff
-       return CC[CC.bounceable = 1] = "bounceable", CC[CC.wallClimbable = 2] = "wallClimbable", CC[CC.ceilingClimbable = 4] = "ceilingClimbable", CC[CC.cobweb = 8] = "cobweb", CC[CC.NM = 16] = "NM", CC[CC.jumpPad = 32] = "jumpPad", CC[CC.conveyor = 64] = "conveyor", CC
+       return kk[kk.bounceable = 1] = "bounceable", kk[kk.wallClimbable = 2] = "wallClimbable", kk[kk.ceilingClimbable = 4] = "ceilingClimbable", kk[kk.cobweb = 8] = "cobweb", kk[kk.qj = 16] = "qj", kk[kk.jumpPad = 32] = "jumpPad", kk[kk.conveyor = 64] = "conveyor", kk
```

#### 4197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34761` → after: `L34618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34618) · [Before (L34761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34761)

```diff
-     const iC = (0, fC.T)(wC.g, (CC => {
+     const zk = (0, lk.db)(Tk.g, (kk => {
```

#### 4198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34764` → after: `L34621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34621) · [Before (L34764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34764)

```diff
-       return MC.includes(CC) && (ZC |= IC.bounceable), WC.includes(CC) && (ZC |= IC.wallClimbable), null !== (zC = wC.g[CC]) && void 0 !== zC && zC.climbableInside && (ZC |= IC.ceilingClimbable), NC.includes(CC) && (ZC |= IC.cobweb), gC.includes(CC) && (ZC |= IC.NM), SC.includes( … [truncated]
+       return jk.includes(kk) && (Ik |= Vk.bounceable), tk.includes(kk) && (Ik |= Vk.wallClimbable), null !== (Fk = Tk.g[kk]) && void 0 !== Fk && Fk.climbableInside && (Ik |= Vk.ceilingClimbable), Zk.includes(kk) && (Ik |= Vk.cobweb), ek.includes(kk) && (Ik |= Vk.qj), wk.includes( … [truncated]
```

#### 4199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34771` → after: `L34628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34628) · [Before (L34771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34771)

```diff
-     const dC = (0, fC.T)(wC.g, (CC => {
+     const Gk = (0, lk.db)(Tk.g, (kk => {
```

#### 4200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34778` → after: `L34635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34635) · [Before (L34778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34778)

```diff
-       return 1 === zC || 2 === zC ? 1 === zC : "trapdoor" === wC.g[CC].model
+       return 1 === Fk || 2 === Fk ? 1 === Fk : "trapdoor" === Tk.g[kk].model
```

#### 4201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34782` → after: `L34639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34639) · [Before (L34782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34782)

```diff
-       const zC = CC.qM;
+       const Fk = kk.yj;
```

#### 4202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34790` → after: `L34647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34647) · [Before (L34790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34790)

```diff
-         ZC && Number.isInteger(ZC.rootId) && !(Math.abs(ZC.rootId) > 2147483647) && (null == wC || Number.isInteger(wC) && wC >= 0 && wC <= 127) && (eC[QC] = 1, hC[QC] = ZC.rootId, KC[QC] = null !== wC && void 0 !== wC ? wC : 0, YC[QC] = ZC.open ? 1 : 0)
+         Ik && Number.isInteger(Ik.rootId) && !(Math.abs(Ik.rootId) > 2147483647) && (null == Tk || Number.isInteger(Tk) && Tk >= 0 && Tk <= 127) && (vk[Xk] = 1, Ek[Xk] = Ik.rootId, Ok[Xk] = null !== Tk && void 0 !== Tk ? Tk : 0, nk[Xk] = Ik.open ? 1 : 0)
```

#### 4203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34813-L34814` → after: `L34670-L34671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34670-L34671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34670-L34671) · [Before (L34813-L34814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34813-L34814)

```diff
-       CC.qM !== vC && HC(CC);
-       const wC = CC.MN.JR.lL(zC).DCC,
+       kk.yj !== Sk && uk(kk);
+       const Tk = kk.qZ.MJ.ZY(Fk).Mkk,
```

#### 4204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34817` → after: `L34674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34674) · [Before (L34817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34817)

```diff
-         fC = CC.lB(wC, cC),
+         lk = kk.Km(Tk, Ck),
```

#### 4205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34821-L34822` → after: `L34678-L34679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34678-L34679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34678-L34679) · [Before (L34821-L34822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34821-L34822)

```diff
-         MC = WC + QC.f.Dp,
-         gC = .5 * (ZC.wN.max[0] - ZC.wN.base[0]),
+         jk = tk + Xk.f.NH,
+         ek = .5 * (Ik.kZ.max[0] - Ik.kZ.base[0]),
```

#### 4206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34881` → after: `L34738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34738) · [Before (L34881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34881)

```diff
-             1 === QC || 3 === QC ? (CC = 2, bC = 0, nC = qC + .5, wC = 1 === QC ? RC : RC + 1) : (CC = 0, bC = 2, nC = RC + .5, wC = 2 === QC ? qC : qC + 1), Math.abs(fC[CC] - wC) < sC && Math.abs(fC[bC] - nC) - .499 < gC && (jC = !0, 0 !== ZC.resting[CC] && (XC[CC] = zC))
+             1 === Xk || 3 === Xk ? (kk = 2, ik = 0, yk = qk + .5, Tk = 1 === Xk ? Pk : Pk + 1) : (kk = 0, ik = 2, yk = Pk + .5, Tk = 2 === Xk ? qk : qk + 1), Math.abs(lk[kk] - Tk) < Wk && Math.abs(lk[ik] - yk) - .499 < ek && (Ak = !0, 0 !== Ik.resting[kk] && (Uk[kk] = Fk))
```

#### 4207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34884` → after: `L34741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34741) · [Before (L34884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34884)

```diff
-             !(oC - GC > qC + 1 || oC + GC < qC || NC - GC > RC + 1 || NC + GC < RC) && (UC || (UC = !!(vC & IC.cobweb)), BC || (BC = !!(vC & IC.NM)))
+             !(ak - xk > qk + 1 || ak + xk < qk || Zk - xk > Pk + 1 || Zk + xk < Pk) && (hk || (hk = !!(Sk & Vk.cobweb)), rk || (rk = !!(Sk & Vk.qj)))
```

#### 4208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34895-L34896` → after: `L34752-L34753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34752-L34753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34752-L34753) · [Before (L34895-L34896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34895-L34896)

```diff
-       const wC = zC.wN.base,
-         bC = zC.wN.max,
+       const Tk = Fk.kZ.base,
+         ik = Fk.kZ.max,
```

#### 4209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34898` → after: `L34755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34755) · [Before (L34898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34898)

```diff
-       return nC[0] = wC[0] - ZC, nC[1] = wC[1] - QC, nC[2] = wC[2] - ZC, nC[3] = bC[0] + ZC, nC[4] = bC[1] + QC, nC[5] = bC[2] + ZC, LC(CC.MN, nC)
+       return yk[0] = Tk[0] - Ik, yk[1] = Tk[1] - Xk, yk[2] = Tk[2] - Ik, yk[3] = ik[0] + Ik, yk[4] = ik[1] + Xk, yk[5] = ik[2] + Ik, mk(kk.qZ, yk)
```

#### 4210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34906` → after: `L34763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34763) · [Before (L34906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34906)

```diff
-       const ZC = CC.YN;
+       const Ik = kk.SZ;
```

#### 4211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34935-L34936` → after: `L34792-L34793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34792-L34793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34792-L34793) · [Before (L34935-L34936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34935-L34936)

```diff
-         const bC = CC.JR.lL(zC),
-           nC = CC.JR.eT(zC);
+         const ik = kk.MJ.ZY(Fk),
+           yk = kk.MJ.aN(Fk);
```

#### 4212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34938-L34939` → after: `L34795-L34796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34795-L34796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34795-L34796) · [Before (L34938-L34939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34938-L34939)

```diff
-         const fC = bC.GZC,
-           oC = null !== (wC = bC.YN) && void 0 !== wC ? wC : CC.YN,
+         const lk = ik.SIk,
+           ak = null !== (Tk = ik.SZ) && void 0 !== Tk ? Tk : kk.SZ,
```

#### 4213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34950-L34951` → after: `L34807-L34808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34807-L34808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34807-L34808) · [Before (L34950-L34951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34950-L34951)

```diff
-           const NC = CC.rG(zC);
-           if (CC.qM.Sy(NC)) {
+           const Zk = kk.QJ(Fk);
+           if (kk.yj.lB(Zk)) {
```

#### 4214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34987` → after: `L34844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34844) · [Before (L34987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34987)

```diff
-   37821: (CC, zC, ZC) => {
+   37992: (kk, Fk, Ik) => {
```

#### 4215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34989-L34990` → after: `L34846-L34847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34846-L34847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34846-L34847) · [Before (L34989-L34990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34989-L34990)

```diff
-       c: () => wC,
-       g: () => bC
+       d: () => Tk,
+       h: () => ik
```

#### 4216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34992` → after: `L34849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34849) · [Before (L34992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L34992)

```diff
-     var QC = ZC(9194);
+     var Xk = Ik(9183);
```

#### 4217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35021` → after: `L34878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34878) · [Before (L35021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35021)

```diff
-   37213: (CC, zC, ZC) => {
+   37401: (kk, Fk, Ik) => {
```

#### 4218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35025-L35026` → after: `L34881-L34882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34881-L34882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34881-L34882) · [Before (L35025-L35026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35025-L35026)

```diff
-       g: () => oC,
-       h: () => fC,
+       f: () => Tk,
+       j: () => ak,
```

#### 4219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35028` → after: `L34884-L34885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34884-L34885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34884-L34885) · [Before (L35028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35028)

```diff
-       n: () => bC
+       n: () => yk,
+       r: () => ik
```

#### 4220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35039` → after: `L34896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34896) · [Before (L35039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35039)

```diff
-   37235: (CC, zC, ZC) => {
+   37417: (kk, Fk, Ik) => {
```

#### 4221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35042-L35043` → after: `L34899-L34900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34899-L34900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34899-L34900) · [Before (L35042-L35043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35042-L35043)

```diff
-       d: () => dC,
-       e: () => YC
+       e: () => Gk,
+       i: () => nk
```

#### 4222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35045` → after: `L34902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34902) · [Before (L35045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35045)

```diff
-     var QC = ZC(37222);
+     var Xk = Ik(37409);
```

#### 4223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35095-L35096` → after: `L34952-L34953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34952-L34953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34952-L34953) · [Before (L35095-L35096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35095-L35096)

```diff
-       if (CC.loop === QC.h.Loop || null !== CC.animTimeUpdate) return 1 / 0;
-       if (CC.loop === QC.h.Hold && CC.lengthSeconds > 0) return CC.startDelaySeconds + CC.lengthSeconds;
+       if (kk.loop === Xk.g.Loop || null !== kk.animTimeUpdate) return 1 / 0;
+       if (kk.loop === Xk.g.Hold && kk.lengthSeconds > 0) return kk.startDelaySeconds + kk.lengthSeconds;
```

#### 4224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35098` → after: `L34955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34955) · [Before (L35098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35098)

```diff
-       return ZC ? 1 / 0 : CC.startDelaySeconds + zC + 2 * QC.k
+       return Ik ? 1 / 0 : kk.startDelaySeconds + Fk + 2 * Xk.i
```

#### 4225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35120` → after: `L34977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34977) · [Before (L35120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35120)

```diff
-       return "number" === typeof CC ? CC : CC.constant
+       return "number" === typeof kk ? kk : kk.constant
```

#### 4226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35122-L35124` → after: `L34979-L34981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34979-L34981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34979-L34981) · [Before (L35122-L35124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35122-L35124)

```diff
-     var MC = ZC(37244),
-       gC = ZC(37215),
-       SC = ZC(37227);
+     var jk = Ik(37421),
+       ek = Ik(37406),
+       wk = Ik(37415);
```

#### 4227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35130-L35132` → after: `L34987-L34989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34987-L34989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34987-L34989) · [Before (L35130-L35132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35130-L35132)

```diff
-         ["rotation", QC.d.Rotation],
-         ["position", QC.d.Position],
-         ["scale", QC.d.Scale]
+         ["rotation", Xk.e.Rotation],
+         ["position", Xk.e.Position],
+         ["scale", Xk.e.Scale]
```

#### 4228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35138` → after: `L34995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L34995) · [Before (L35138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35138)

```diff
-       if (CC.length > PC) return iC(zC, `file is ${CC.length} characters, over the 524288 limit`);
+       if (kk.length > Jk) return zk(Fk, `file is ${kk.length} characters, over the 524288 limit`);
```

#### 4229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35143` → after: `L35000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35000) · [Before (L35143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35143)

```diff
-         return iC(zC, `invalid JSON: ${wC.message}`)
+         return zk(Fk, `invalid JSON: ${Tk.message}`)
```

#### 4230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35148` → after: `L35005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35005) · [Before (L35148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35148)

```diff
-         return iC(zC, `could not be loaded: ${wC.message}`)
+         return zk(Fk, `could not be loaded: ${Tk.message}`)
```

#### 4231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35156` → after: `L35013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35013) · [Before (L35156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35156)

```diff
-           severity: QC.b.Error,
+           severity: Xk.d.Error,
```

#### 4232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35169` → after: `L35026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35026) · [Before (L35169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35169)

```diff
-         if ("string" !== typeof zC || !pC.includes(zC)) return iC(this.source, `unsupported format_version ${JSON.stringify(zC)}; expected one of ${pC.join(", ")}`);
+         if ("string" !== typeof Fk || !Hk.includes(Fk)) return zk(this.source, `unsupported format_version ${JSON.stringify(Fk)}; expected one of ${Hk.join(", ")}`);
```

#### 4233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35173` → after: `L35030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35030) · [Before (L35173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35173)

```diff
-         if (wC.length > 128) return iC(this.source, `${wC.length} animations, over the 128 limit`);
+         if (Tk.length > 128) return zk(this.source, `${Tk.length} animations, over the 128 limit`);
```

#### 4234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35178-L35179` → after: `L35035-L35036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35035-L35036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35035-L35036) · [Before (L35178-L35179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35178-L35179)

```diff
-           if (!(nC instanceof gC.c)) throw nC;
-           this.Cg(QC.b.Error, `${fC}: ${nC.message}`)
+           if (!(yk instanceof ek.b)) throw yk;
+           this.Mj(Xk.d.Error, `${lk}: ${yk.message}`)
```

#### 4235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35182` → after: `L35039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35039) · [Before (L35182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35182)

```diff
-           severity: QC.b.Warning,
+           severity: Xk.d.Warning,
```

#### 4236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35192-L35193` → after: `L35049-L35050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35049-L35050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35049-L35050) · [Before (L35192-L35193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35192-L35193)

```diff
-         if (0 === CC.length || CC.length > RC) throw new gC.c("animation names must be 1-128 characters");
-         if (!(0, gC.j)(zC)) throw new gC.c("is not an object");
+         if (0 === kk.length || kk.length > Pk) throw new ek.b("animation names must be 1-128 characters");
+         if (!(0, ek.j)(Fk)) throw new ek.b("is not an object");
```

#### 4237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35197-L35199` → after: `L35054-L35056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35054-L35056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35054-L35056) · [Before (L35197-L35199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35197-L35199)

```diff
-         fC.length > 0 && this.Cg(QC.b.Warning, `${CC}: ${fC.join(", ")} not supported and ignored`), oC.length > 0 && this.Cg(QC.b.Warning, `${CC}: unknown keys ignored: ${oC.slice(0,5).join(", ")}${oC.length>5?", ...":""}`);
-         const qC = null !== (ZC = zC.bones) && void 0 !== ZC ? ZC : {};
-         if (!(0, gC.j)(qC)) throw new gC.c('"bones" is not an object');
+         lk.length > 0 && this.Mj(Xk.d.Warning, `${kk}: ${lk.join(", ")} not supported and ignored`), ak.length > 0 && this.Mj(Xk.d.Warning, `${kk}: unknown keys ignored: ${ak.slice(0,5).join(", ")}${ak.length>5?", ...":""}`);
+         const qk = null !== (Ik = Fk.bones) && void 0 !== Ik ? Ik : {};
+         if (!(0, ek.j)(qk)) throw new ek.b('"bones" is not an object');
```

#### 4238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35201` → after: `L35058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35058) · [Before (L35201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35201)

```diff
-         if (FC.length > 128) throw new gC.c(`${FC.length} bones, over the 128 limit`);
+         if (Lk.length > 128) throw new ek.b(`${Lk.length} bones, over the 128 limit`);
```

#### 4239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35207-L35208` → after: `L35064-L35065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35064-L35065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35064-L35065) · [Before (L35207-L35208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35207-L35208)

```diff
-           if (0 === QC.length || QC.length > RC) throw new gC.c("bone names must be 1-128 characters");
-           if (NC.has(CC)) throw new gC.c(`bone "${QC}" appears twice (bone names are case-insensitive)`);
+           if (0 === Xk.length || Xk.length > Pk) throw new ek.b("bone names must be 1-128 characters");
+           if (Zk.has(kk)) throw new ek.b(`bone "${Xk}" appears twice (bone names are case-insensitive)`);
```

#### 4240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35219` → after: `L35076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35076) · [Before (L35219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35219)

```diff
-           if ("number" !== typeof pC || !Number.isFinite(pC) || pC < 0 || pC > gC.e) throw new gC.c(`animation_length must be a number from 0 to ${gC.e}`);
+           if ("number" !== typeof Hk || !Number.isFinite(Hk) || Hk < 0 || Hk > ek.c) throw new ek.b(`animation_length must be a number from 0 to ${ek.c}`);
```

#### 4241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35223` → after: `L35080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35080) · [Before (L35223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35223)

```diff
-         if ("boolean" !== typeof GC) throw new gC.c("override_previous_animation must be true or false");
+         if ("boolean" !== typeof xk) throw new ek.b("override_previous_animation must be true or false");
```

#### 4242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35239-L35240` → after: `L35096-L35097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35096-L35097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35096-L35097) · [Before (L35239-L35240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35239-L35240)

```diff
-           iC = (0, MC.j)(IC);
-         if (iC > MC.d) throw new gC.c(`costs ${iC} to play each frame, over the ${MC.d} limit: animate fewer bones or simplify its Molang`);
+           zk = (0, jk.l)(Vk);
+         if (zk > jk.f) throw new ek.b(`costs ${zk} to play each frame, over the ${jk.f} limit: animate fewer bones or simplify its Molang`);
```

#### 4243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35244` → after: `L35101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35101) · [Before (L35244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35244)

```diff
-         if (!(0, gC.j)(zC)) throw new gC.c(`bone "${CC}" is not an object`);
+         if (!(0, ek.j)(Fk)) throw new ek.b(`bone "${kk}" is not an object`);
```

#### 4244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35246-L35248` → after: `L35103-L35105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35103-L35105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35103-L35105) · [Before (L35246-L35248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35246-L35248)

```diff
-           [QC.d.Rotation]: null,
-           [QC.d.Position]: null,
-           [QC.d.Scale]: null
+           [Xk.e.Rotation]: null,
+           [Xk.e.Position]: null,
+           [Xk.e.Scale]: null
```

#### 4245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35252-L35253` → after: `L35109-L35110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35109-L35110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35109-L35110) · [Before (L35252-L35253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35252-L35253)

```diff
-           if (void 0 === wC) throw new gC.c(`bone "${CC}": "${QC}" is not supported (only rotation, position and scale)`);
-           ZC[wC] = this.compileChannel(zC[QC], wC, `${CC}.${QC}`)
+           if (void 0 === Tk) throw new ek.b(`bone "${kk}": "${Xk}" is not supported (only rotation, position and scale)`);
+           Ik[Tk] = this.compileChannel(Fk[Xk], Tk, `${kk}.${Xk}`)
```

#### 4246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35257-L35259` → after: `L35114-L35116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35114-L35116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L35114-L35116) · [Before (L35257-L35259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L35257-L35259)

```diff
-           rotation: ZC[QC.d.Rotation],
-           position: ZC[QC.d.Position],
-           scale: ZC[QC.d.Scale]
+           rotation: Ik[Xk.e.Rotation],
+           position: Ik[Xk.e.Position],
+           scale: Ik[Xk.e.Scale]
```
