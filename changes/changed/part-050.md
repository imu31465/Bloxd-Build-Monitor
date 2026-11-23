# Changed — Bundle Modifications Report (Part 050 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `50 / 137` (**423** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 049](part-049.md) · [Part 051 →](part-051.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (490 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 128. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2474)

```diff
-         return 1 === this.fS ? (ZC = this._getInternalFormat(CC, zC), QC = ZC) : (ZC = this._getInternalFormat(CC, !1), QC = this._getRGBABufferInternalSizedFormat(0, CC, zC)), {
+         return 1 === this.tw ? (Ik = this._getInternalFormat(kk, Fk), Xk = Ik) : (Ik = this._getInternalFormat(kk, !1), Xk = this._getRGBABufferInternalSizedFormat(0, kk, Fk)), {
```

#### 129. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2623-L2624)

```diff
-           WC = Math.min(FC, this.needPOTTextures ? (0, MC.e)(QC.width, FC) : QC.width),
-           NC = Math.min(FC, this.needPOTTextures ? (0, MC.e)(QC.height, FC) : QC.height),
+           tk = Math.min(Lk, this.needPOTTextures ? (0, jk.g)(Xk.width, Lk) : Xk.width),
+           Zk = Math.min(Lk, this.needPOTTextures ? (0, jk.g)(Xk.height, Lk) : Xk.height),
```

#### 130. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2634)

```diff
-         return this.fS > 1 ? 15 === CC ? wC = QC.DEPTH_COMPONENT16 : 16 === CC ? wC = QC.DEPTH_COMPONENT24 : 17 === CC || 13 === CC ? wC = ZC ? QC.DEPTH24_STENCIL8 : QC.DEPTH_COMPONENT24 : 14 === CC ? wC = QC.DEPTH_COMPONENT32F : 18 === CC && (wC = ZC ? QC.DEPTH32F_STENCIL8 : QC. … [truncated]
+         return this.tw > 1 ? 15 === kk ? Tk = Xk.DEPTH_COMPONENT16 : 16 === kk ? Tk = Xk.DEPTH_COMPONENT24 : 17 === kk || 13 === kk ? Tk = Ik ? Xk.DEPTH24_STENCIL8 : Xk.DEPTH_COMPONENT24 : 14 === kk ? Tk = Xk.DEPTH_COMPONENT32F : 18 === kk && (Tk = Ik ? Xk.DEPTH32F_STENCIL8 : Xk. … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2668)

```diff
-         this._currentProgram !== CC && ((0, wC.s)(CC, this._gl), this._currentProgram = CC)
+         this._currentProgram !== kk && ((0, Tk.i)(kk, this._gl), this._currentProgram = kk)
```

#### 132. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2690)

```diff
-           if (this._activateCurrentTexture(), zC && zC.isMultiview) throw fC.c.Error(["_bindTextureDirectly called with a multiview texture!", CC, zC]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), Fk && Fk.isMultiview) throw lk.e.Error(["_bindTextureDirectly called with a multiview texture!", kk, Fk]), "_bindTextureDirectly called with a multiview texture!";
```

#### 133. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2702)

```diff
-         for (let CC = 0; CC < this._maxSimultaneousTextures; CC++) this._activeChannel = CC, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.fS > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let kk = 0; kk < this._maxSimultaneousTextures; kk++) this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2725)

```diff
-         if (!zC) return null != this._boundTexturesCache[CC] && (this._activeChannel = CC, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.fS > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!Fk) return null != this._boundTexturesCache[kk] && (this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 135. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L2777)

```diff
-         (0, oC.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, ak.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3088)

```diff
-           if (nC.length < FC) return fC.c.Error(`Data buffer is too small to store the read pixels (${nC.length} should be more than ${FC})`), Promise.resolve(nC)
+           if (yk.length < Lk) return lk.e.Error(`Data buffer is too small to store the read pixels (${yk.length} should be more than ${Lk})`), Promise.resolve(yk)
```

#### 137. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3101)

```diff
-           const CC = bC.b._CreateCanvas(1, 1),
+           const kk = ik.c._CreateCanvas(1, 1),
```

#### 138. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3111)

```diff
-           const CC = bC.b._CreateCanvas(1, 1),
+           const kk = ik.c._CreateCanvas(1, 1),
```

#### 139. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3184)

```diff
-     }], xC._ConcatenateShader = pC.h, xC._IsSupported = null, xC._HasMajorPerformanceCaveat = null
+     }], Qk._ConcatenateShader = Hk.f, Qk._IsSupported = null, Qk._HasMajorPerformanceCaveat = null
```

#### 140. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3186)

```diff
-   40010: (CC, zC, ZC) => {
+   40182: (kk, Fk, Ik) => {
```

#### 141. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3189)

```diff
-         d: () => wC
+         c: () => Tk
```

#### 142. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3197)

```diff
-   40001: (CC, zC, ZC) => {
+   40176: (kk, Fk, Ik) => {
```

#### 143. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3199-L3201` → after: `L3199-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3199-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3199-L3201) · [Before (L3199-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3199-L3201)

```diff
-       c: () => QC,
-       g: () => bC,
-       h: () => wC
+       d: () => Xk,
+       f: () => ik,
+       i: () => Tk
```

#### 144. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3222)

```diff
-   39993: (CC, zC, ZC) => {
+   40169: (kk, Fk, Ik) => {
```

#### 145. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3224-L3226` → after: `L3224-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3224-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3224-L3226) · [Before (L3224-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3224-L3226)

```diff
-       b: () => wC,
-       f: () => nC,
-       h: () => fC
+       d: () => Tk,
+       h: () => yk,
+       j: () => lk
```

#### 146. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3228)

```diff
-     var QC = ZC(36963);
+     var Xk = Ik(37153);
```

#### 147. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3238)

```diff
-         super(CC, zC), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new QC.n(ZC, wC)
+         super(kk, Fk), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Xk.p(Ik, Tk)
```

#### 148. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3254)

```diff
-   40022: (CC, zC, ZC) => {
+   40195: (kk, Fk, Ik) => {
```

#### 149. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3256` → after: `L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3256) · [Before (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3256)

```diff
-       c: () => QC
+       b: () => Xk
```

#### 150. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3265)

```diff
-   39650: (CC, zC, ZC) => {
+   39818: (kk, Fk, Ik) => {
```

#### 151. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3267` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3267) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3267)

```diff
-       c: () => nC
+       b: () => yk
```

#### 152. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3269-L3270)

```diff
-     var QC, wC = ZC(36987),
-       bC = ZC(39657);
+     var Xk, Tk = Ik(37187),
+       ik = Ik(39821);
```

#### 153. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3295)

```diff
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3372)

```diff
-   39758: (CC, zC, ZC) => {
+   39939: (kk, Fk, Ik) => {
```

#### 155. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3391-L3392` → after: `L3391-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3391-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3391-L3392) · [Before (L3391-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3391-L3392)

```diff
-       l: () => wC,
-       n: () => bC
+       k: () => Tk,
+       l: () => ik
```

#### 156. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3395)

```diff
-   39657: (CC, zC, ZC) => {
+   39821: (kk, Fk, Ik) => {
```

#### 157. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3453)

```diff
-   39938: (CC, zC, ZC) => {
+   40121: (kk, Fk, Ik) => {
```

#### 158. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3458` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3458) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3458)

```diff
-       b: () => QC
+       c: () => Xk
```

#### 159. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3461)

```diff
-   39738: (CC, zC, ZC) => {
+   39902: (kk, Fk, Ik) => {
```

#### 160. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3466)

```diff
-       c: () => QC
+       e: () => Xk
```

#### 161. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3469)

```diff
-   40148: (CC, zC, ZC) => {
+   40324: (kk, Fk, Ik) => {
```

#### 162. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3471` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3471) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3471)

```diff
-       d: () => wC
+       e: () => Tk
```

#### 163. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3473)

```diff
-     var QC = ZC(39712);
+     var Xk = Ik(39878);
```

#### 164. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3491)

```diff
-             zC.mg().onEndFrameObservable.addOnce((() => {
+             Fk.Oe().onEndFrameObservable.addOnce((() => {
```

#### 165. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3500)

```diff
-   39676: (CC, zC, ZC) => {
+   39841: (kk, Fk, Ik) => {
```

#### 166. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3503-L3505` → after: `L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3505) · [Before (L3503-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3503-L3505)

```diff
-       h: () => MC,
-       l: () => qC,
-       p: () => FC
+       g: () => Lk
```

#### 167. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3507-L3512)

```diff
-     var QC = ZC(39680),
-       wC = ZC(39684),
-       bC = ZC(39674),
-       nC = ZC(38507),
-       fC = ZC(39703),
-       oC = ZC(39692);
+     var Xk = Ik(39850),
+       Tk = Ik(39852),
+       ik = Ik(39837),
+       yk = Ik(38674),
+       lk = Ik(39872),
+       ak = Ik(39860);
```

#### 168. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3515)

```diff
-       return (0, wC.z)(zC).cachedPipelines[CC]
+       return (0, Tk.u)(Fk).cachedPipelines[kk]
```

#### 169. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3522)

```diff
-         const CC = (0, wC.z)(ZC),
+         const kk = (0, Tk.u)(Ik),
```

#### 170. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3530-L3531` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3530-L3531) · [Before (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3530-L3531)

```diff
-       const WC = (0, QC.k)() ? nC?.getHostDocument() : null;
-       qC = "string" === typeof zC ? zC : "string" === typeof zC.vertexSource ? "source:" + zC.vertexSource : "string" === typeof zC.vertexElement ? WC?.getElementById(zC.vertexElement) || zC.vertexElement : zC.vertex || zC, FC = "string" === typeof zC ? zC : "string" === typeof z … [truncated]
+       const tk = (0, Xk.j)() ? yk?.getHostDocument() : null;
+       qk = "string" === typeof Fk ? Fk : "string" === typeof Fk.vertexSource ? "source:" + Fk.vertexSource : "string" === typeof Fk.vertexElement ? tk?.getElementById(Fk.vertexElement) || Fk.vertexElement : Fk.vertex || Fk, Lk = "string" === typeof Fk ? Fk : "string" === typeof F … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3536-L3537` → after: `L3536-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3536-L3537) · [Before (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3536-L3537)

```diff
-             (0, fC.f)(CC), (0, fC.n)(QC, CC, ((QC, FC) => {
-               oC && (oC._vertexSourceCodeBeforeMigration = FC), ZC && (QC = ZC("vertex", QC)), CC.isFragment = !0, (0, fC.n)(qC, CC, ((nC, qC) => {
+             (0, lk.e)(kk), (0, lk.k)(Xk, kk, ((Xk, Lk) => {
+               ak && (ak._vertexSourceCodeBeforeMigration = Lk), Ik && (Xk = Ik("vertex", Xk)), kk.isFragment = !0, (0, lk.k)(qk, kk, ((yk, qk) => {
```

#### 172. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3539)

```diff
-                 const FC = (0, fC.e)(QC, nC, CC);
+                 const Lk = (0, lk.d)(Xk, yk, kk);
```

#### 173. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3567)

```diff
-         return void wC((0, QC.e)(CC))
+         return void Tk((0, Xk.c)(kk))
```

#### 174. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3577)

```diff
-       if (FC = "." === CC[0] || "/" === CC[0] || CC.indexOf("http") > -1 ? CC : bC.b.GetShadersRepository(nC) + CC, !(fC = fC || oC.n)) throw new Error("loadFileInjection is not defined");
+       if (Lk = "." === kk[0] || "/" === kk[0] || kk.indexOf("http") > -1 ? kk : ik.b.GetShadersRepository(yk) + kk, !(lk = lk || ak.k)) throw new Error("loadFileInjection is not defined");
```

#### 175. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3582)

```diff
-         const bC = CC.context ? (0, wC.z)(CC.context) : null;
+         const ik = kk.context ? (0, Tk.u)(kk.context) : null;
```

#### 176. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3591)

```diff
-         throw nC.c.Error("Error compiling effect"), bC
+         throw yk.e.Error("Error compiling effect"), ik
```

#### 177. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3595)

```diff
-   39666: (CC, zC, ZC) => {
+   39830: (kk, Fk, Ik) => {
```

#### 178. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3597)

```diff
-       b: () => oC
+       d: () => ak
```

#### 179. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3599-L3603)

```diff
-     var QC = ZC(36987),
-       wC = ZC(38507),
-       bC = ZC(39674),
-       nC = ZC(39676),
-       fC = ZC(39712);
+     var Xk = Ik(37187),
+       Tk = Ik(38674),
+       ik = Ik(39837),
+       yk = Ik(39841),
+       lk = Ik(39878);
```

#### 180. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3615` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3615) · [Before (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3615)

```diff
-         return this._onBindObservable || (this._onBindObservable = new QC.d), this._onBindObservable
+         return this._onBindObservable || (this._onBindObservable = new Xk.e), this._onBindObservable
```

#### 181. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3631` → after: `L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3631) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3631)

```diff
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new QC.d, this.onErrorObservable = new QC.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
+         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Xk.e, this.onErrorObservable = new Xk.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
```

#### 182. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3642)

```diff
-         "WEBGL2" === this._engine.shaderPlatformName && (PC = (0, nC.l)(pC, this._engine._gl) ?? PC), this._attributeLocationByName = {}, this.uniqueId = oC._UniqueIdSeed++, PC ? (this._pipelineContext = PC, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
+         "WEBGL2" === this._engine.shaderPlatformName && (Jk = (0, yk.e)(Hk, this._engine._gl) ?? Jk), this._attributeLocationByName = {}, this.uniqueId = ak._UniqueIdSeed++, Jk ? (this._pipelineContext = Jk, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3644-L3645)

```diff
-             ZC = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${zC}`);
-           CC && "string" === typeof CC.stack && (ZC.stack = `${ZC.message}\nCaused by: ${CC.stack}`), this._processCompilationErrors(ZC)
+             Ik = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Fk}`);
+           kk && "string" === typeof kk.stack && (Ik.stack = `${Ik.message}\nCaused by: ${kk.stack}`), this._processCompilationErrors(Ik)
```

#### 184. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.GJ || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.Hs || this.dispose(!0)
```

#### 185. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3669)

```diff
-           BZC: this._engine.BZC,
+           IXk: this._engine.IXk,
```

#### 186. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3672` → after: `L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3672) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3672)

```diff
-         (0, nC.e)(wC, this.name, this._processFinalCode, ((CC, ZC) => {
+         (0, yk.b)(Tk, this.name, this._processFinalCode, ((kk, Ik) => {
```

#### 187. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3687)

```diff
-         return !!this._engine.GJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
+         return !!this._engine.Hs || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
```

#### 188. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3742)

```diff
-         (0, fC.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (zC => {
+         (0, lk.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Fk => {
```

#### 189. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3775)

```diff
-             BZC: this._engine.BZC,
+             IXk: this._engine.IXk,
```

#### 190. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3788` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3788) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3788)

```diff
-           const CC = this.mg().scenes;
+           const kk = this.Oe().scenes;
```

#### 191. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3812-L3813` → after: `L3812-L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3812-L3813) · [Before (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3812-L3813)

```diff
-           this._pipelineContext = (0, nC.h)({
-             existingPipelineContext: CC ? zC : null,
+           this._pipelineContext = (0, yk.d)({
+             existingPipelineContext: kk ? Fk : null,
```

#### 192. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3840)

```diff
-             QC.length >= zC && (wC = `Offending line [${zC}] in ${ZC?"fragment":"vertex"} code: ${QC[zC-1]}`)
+             Xk.length >= Fk && (Tk = `Offending line [${Fk}] in ${Ik?"fragment":"vertex"} code: ${Xk[Fk-1]}`)
```

#### 193. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3850)

```diff
-         if (wC.c.Error("Unable to compile effect:"), wC.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), wC.c.Error(`Attributes: ${ZC.join(" ")}`), wC.c.Error("Defines:\n" + this.defines), oC.LogShaderCodeOnCompilationError) {
+         if (Tk.e.Error("Unable to compile effect:"), Tk.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Tk.e.Error(`Attributes: ${Ik.join(" ")}`), Tk.e.Error("Defines:\n" + this.defines), ak.LogShaderCodeOnCompilationError) {
```

#### 194. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3853` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3853) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3853)

```diff
-           this._pipelineContext?._getVertexShaderCode() && ([CC, zC] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), CC && (wC.c.Error("Vertex code:"), wC.c.Error(CC))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
+           this._pipelineContext?._getVertexShaderCode() && ([kk, Fk] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), kk && (Tk.e.Error("Vertex code:"), Tk.e.Error(kk))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3855)

```diff
-         wC.c.Error("Error: " + this._compilationError);
+         Tk.e.Error("Error: " + this._compilationError);
```

#### 196. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3862` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3862) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L3862)

```diff
-         zC && (this._pipelineContext = zC, this._isReady = !0, bC()), QC ? (this._pipelineContext = null, QC.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, wC.c.Error("Trying next fallback."), this.defines = QC.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
+         Fk && (this._pipelineContext = Fk, this._isReady = !0, ik()), Xk ? (this._pipelineContext = null, Xk.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Tk.e.Error("Trying next fallback."), this.defines = Xk.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4022)

```diff
-         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, nC.p)(this._pipelineContext), this._engine._r … [truncated]
+         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, yk.g)(this._pipelineContext), this._engine._r … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4026)

```diff
-         zC && (bC.b.GetShadersStore(QC)[`${CC}PixelShader`] = zC), ZC && (bC.b.GetShadersStore(QC)[`${CC}VertexShader`] = ZC)
+         Fk && (ik.b.GetShadersStore(Xk)[`${kk}PixelShader`] = Fk), Ik && (ik.b.GetShadersStore(Xk)[`${kk}VertexShader`] = Ik)
```

#### 199. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4034)

```diff
-   39969: (CC, zC, ZC) => {
+   40152: (kk, Fk, Ik) => {
```

#### 200. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4036-L4038` → after: `L4036-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4036-L4038) · [Before (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4036-L4038)

```diff
-       b: () => FC,
-       c: () => IC,
-       g: () => JC
+       d: () => Lk,
+       f: () => Vk,
+       h: () => sk
```

#### 201. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4040-L4046` → after: `L4040-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4040-L4046) · [Before (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4040-L4046)

```diff
-     var QC = ZC(39666),
-       wC = ZC(36963),
-       bC = ZC(36996),
-       nC = ZC(39950);
-     const fC = new wC.b,
-       oC = new wC.b,
-       qC = new wC.b,
+     var Xk = Ik(39830),
+       Tk = Ik(37153),
+       ik = Ik(37192),
+       yk = Ik(40134);
+     const lk = new Tk.c,
+       ak = new Tk.c,
+       qk = new Tk.c,
```

#### 202. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4048)

```diff
-         Km: () => {},
+         mG: () => {},
```

#### 203. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4053-L4054` → after: `L4053-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4053-L4054) · [Before (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4053-L4054)

```diff
-       const QC = ZC.VZC(),
-         wC = zC.VZC();
+       const Xk = Ik.iXk(),
+         Tk = Fk.iXk();
```

#### 204. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4060` → after: `L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4060) · [Before (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4060)

```diff
-       return (0, bC.l)(zC, oC), WC(CC, oC, qC), (0, bC.l)(qC, ZC), ZC
+       return (0, ik.h)(Fk, ak), tk(kk, ak, qk), (0, ik.h)(qk, Ik), Ik
```

#### 205. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4065-L4066` → after: `L4065-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4065-L4066) · [Before (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4065-L4066)

```diff
-       const QC = ZC.VZC(),
-         wC = zC.VZC();
+       const Xk = Ik.iXk(),
+         Tk = Fk.iXk();
```

#### 206. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4072` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4072) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4072)

```diff
-       return (0, bC.q)(MC(CC, zC, QC), ZC, QC), QC
+       return (0, ik.k)(jk(kk, Fk, Xk), Ik, Xk), Xk
```

#### 207. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4076` → after: `L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4076) · [Before (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4076)

```diff
-       return (0, bC.l)(ZC, oC), (0, bC.q)(zC, oC, qC), WC(CC, qC, oC), MC(CC, ZC, qC), (0, bC.q)(oC, qC, QC), QC
+       return (0, ik.h)(Ik, ak), (0, ik.k)(Fk, ak, qk), tk(kk, qk, ak), jk(kk, Ik, qk), (0, ik.k)(ak, qk, Xk), Xk
```

#### 208. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4080)

```diff
-       return (0, bC.l)(ZC, oC), (0, bC.q)(zC, oC, qC), WC(CC, qC, oC), gC(CC, QC, wC, qC), (0, bC.q)(oC, qC, nC), nC
+       return (0, ik.h)(Ik, ak), (0, ik.k)(Fk, ak, qk), tk(kk, qk, ak), ek(kk, Xk, Tk, qk), (0, ik.k)(ak, qk, yk), yk
```

#### 209. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4084` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4084) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4084)

```diff
-       const ZC = FC.Km();
+       const Ik = Lk.mG();
```

#### 210. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4112` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4112) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4112)

```diff
-       RC = QC.b,
+       Pk = Xk.d,
```

#### 211. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4114)

```diff
-       xC = QC.b.prototype.setMatrix;
+       Qk = Xk.d.prototype.setMatrix;
```

#### 212. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4117` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4117) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4117)

```diff
-       QC.b.prototype.setMatrix = xC, RC._setMatrixOverride = void 0, GC.prototype._updateMatrixForUniform = AC, GC.prototype._updateMatrixForUniformOverride = void 0
+       Xk.d.prototype.setMatrix = Qk, Pk._setMatrixOverride = void 0, xk.prototype._updateMatrixForUniform = Kk, xk.prototype._updateMatrixForUniformOverride = void 0
```

#### 213. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4128` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4128) · [Before (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4128)

```diff
-   39944: (CC, zC, ZC) => {
+   40126: (kk, Fk, Ik) => {
```

#### 214. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4130-L4131` → after: `L4130-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4130-L4131) · [Before (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4130-L4131)

```diff
-       b: () => bC,
-       d: () => wC
+       c: () => ik,
+       f: () => Tk
```

#### 215. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4133` → after: `L4133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4133) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4133)

```diff
-     var QC = ZC(39938);
+     var Xk = Ik(40121);
```

#### 216. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4136)

```diff
-       zC.WHITEBALANCE && CC.push("whiteBalanceMatrix"), zC.EXPOSURE && CC.push("exposureLinear"), zC.CONTRAST && CC.push("contrast"), zC.COLORGRADING && CC.push("colorTransformSettings"), (zC.VIGNETTE || zC.DITHER) && CC.push("vInverseScreenSize"), zC.VIGNETTE && (CC.push("vignet … [truncated]
+       Fk.WHITEBALANCE && kk.push("whiteBalanceMatrix"), Fk.EXPOSURE && kk.push("exposureLinear"), Fk.CONTRAST && kk.push("contrast"), Fk.COLORGRADING && kk.push("colorTransformSettings"), (Fk.VIGNETTE || Fk.DITHER) && kk.push("vInverseScreenSize"), Fk.VIGNETTE && (kk.push("vignet … [truncated]
```

#### 217. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4143` → after: `L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4143) · [Before (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4143)

```diff
-   39932: (CC, zC, ZC) => {
+   40113: (kk, Fk, Ik) => {
```

#### 218. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4145-L4146` → after: `L4145-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4145-L4146) · [Before (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4145-L4146)

```diff
-       e: () => KC,
-       f: () => mC
+       d: () => Ok,
+       e: () => pk
```

#### 219. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4148-L4153` → after: `L4148-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4148-L4153) · [Before (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4148-L4153)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36987),
-       nC = ZC(37142),
-       fC = ZC(36991),
-       oC = ZC(36963);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(37187),
+       yk = Ik(37331),
+       lk = Ik(37189),
+       ak = Ik(37153);
```

#### 220. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4191)

```diff
-       const ZC = Number.isNaN(CC) ? FC : Math.max(CC, FC),
+       const Ik = Number.isNaN(kk) ? Lk : Math.max(kk, Lk),
```

#### 221. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4197` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4197) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4197)

```diff
-         qC[CC][0] <= QC ? wC = CC : bC = CC
+         qk[kk][0] <= Xk ? Tk = kk : ik = kk
```

#### 222. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4203-L4206` → after: `L4203-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4203-L4206) · [Before (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4203-L4206)

```diff
-         xC = oC.n.Lerp(new oC.n(MC, gC), new oC.n(PC, GC), AC),
-         JC = oC.n.Normalize(new oC.n(1, SC)),
-         IC = oC.n.Normalize(new oC.n(1, RC)),
-         iC = oC.n.Normalize(oC.n.Lerp(JC, IC, AC)),
+         Qk = ak.p.Lerp(new ak.p(jk, ek), new ak.p(Jk, xk), Kk),
+         sk = ak.p.Normalize(new ak.p(1, wk)),
+         Vk = ak.p.Normalize(new ak.p(1, Pk)),
+         zk = ak.p.Normalize(ak.p.Lerp(sk, Vk, Kk)),
```

#### 223. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4208` → after: `L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4208) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4208)

```diff
-       xC.RQC(iC.scale(vC / 3e3));
+       Qk.zXk(zk.scale(Sk / 3e3));
```

#### 224. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4212)

```diff
-       return new oC.r(hC / KC, 1, (1 - hC - KC) / KC)
+       return new ak.t(Ek / Ok, 1, (1 - Ek - Ok) / Ok)
```

#### 225. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4214-L4215` → after: `L4214-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4214-L4215) · [Before (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4214-L4215)

```diff
-     const MC = oC.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
-       gC = oC.b.Invert(MC);
+     const jk = ak.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
+       ek = ak.c.Invert(jk);
```

#### 226. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4218)

```diff
-       const ZC = zC > 0 ? CC / zC : 10;
+       const Ik = Fk > 0 ? kk / Fk : 10;
```

#### 227. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4223-L4225` → after: `L4223-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4223-L4225) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4223-L4225)

```diff
-       const ZC = oC.r.TransformNormal(CC, MC),
-         QC = oC.r.TransformNormal(zC, MC),
-         wC = oC.b.FromArray([SC(QC.x, ZC.x), 0, 0, 0, 0, SC(QC.y, ZC.y), 0, 0, 0, 0, SC(QC.z, ZC.z), 0, 0, 0, 0, 1]);
+       const Ik = ak.t.TransformNormal(kk, jk),
+         Xk = ak.t.TransformNormal(Fk, jk),
+         Tk = ak.c.FromArray([wk(Xk.x, Ik.x), 0, 0, 0, 0, wk(Xk.y, Ik.y), 0, 0, 0, 0, wk(Xk.z, Ik.z), 0, 0, 0, 0, 1]);
```

#### 228. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4228-L4233` → after: `L4228-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4228-L4233) · [Before (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4228-L4233)

```diff
-     const PC = new oC.r(.95047, 1, 1.08883),
-       GC = oC.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(pC(PC, NC(6500, 0))),
-       RC = oC.b.Invert(GC),
-       AC = oC.r.TransformNormal(new oC.r(1, 1, 1), GC);
-     var xC = ZC(39842),
-       JC = ZC(39938);
+     const Jk = new ak.t(.95047, 1, 1.08883),
+       xk = ak.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Hk(Jk, Zk(6500, 0))),
+       Pk = ak.c.Invert(xk),
+       Kk = ak.t.TransformNormal(new ak.t(1, 1, 1), xk);
+     var Qk = Ik(40021),
+       sk = Ik(40121);
```

#### 229. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4262)

```diff
-           this._dirty = !0, this._tempColor = new nC.g(0, 0, 0, 0), this._globalCurve = new nC.g(0, 0, 0, 0), this._highlightsCurve = new nC.g(0, 0, 0, 0), this._midtonesCurve = new nC.g(0, 0, 0, 0), this._shadowsCurve = new nC.g(0, 0, 0, 0), this._positiveCurve = new nC.g(0, 0,  … [truncated]
+           this._dirty = !0, this._tempColor = new yk.h(0, 0, 0, 0), this._globalCurve = new yk.h(0, 0, 0, 0), this._highlightsCurve = new yk.h(0, 0, 0, 0), this._midtonesCurve = new yk.h(0, 0, 0, 0), this._shadowsCurve = new yk.h(0, 0, 0, 0), this._positiveCurve = new yk.h(0, 0,  … [truncated]
```

#### 230. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4409` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4409) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4409)

```diff
-           return xC.d.Clone((() => new CC), this)
+           return Qk.b.Clone((() => new kk), this)
```

#### 231. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4412` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4412) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4412)

```diff
-           return xC.d.Serialize(this)
+           return Qk.b.Serialize(this)
```

#### 232. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4422)

```diff
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 233. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4584` → after: `L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4584) · [Before (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4584)

```diff
-       })(), CC.PrepareUniforms = JC.b, CC
+       })(), kk.PrepareUniforms = sk.c, kk
```

#### 234. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4593-L4595` → after: `L4593-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4593-L4595) · [Before (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4593-L4595)

```diff
-     var vC = ZC(39747),
-       eC = ZC(39944),
-       hC = ZC(37002);
+     var Sk = Ik(39923),
+       vk = Ik(40126),
+       Ek = Ik(37201);
```

#### 235. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4656)

```diff
-             this.colorCurves = (0, QC.n)(this, UC, new IC), this._colorCurvesEnabled = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, !1)), this._colorGradingTexture = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, void 0)), this._colorGradingEnabled = ((0, QC.n)(this, Cz), (0, QC.n)(this, … [truncated]
+             this.colorCurves = (0, Xk.n)(this, hk, new Vk), this._colorCurvesEnabled = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, !1)), this._colorGradingTexture = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, void 0)), this._colorGradingEnabled = ((0, Xk.n)(this, FF), (0, Xk.n)(this, … [truncated]
```

#### 236. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4722)

```diff
-             CC = Number.isNaN(CC) ? FC : Math.max(CC, FC), this._temperature !== CC && (this._temperature = CC, this._updateParameters())
+             kk = Number.isNaN(kk) ? Lk : Math.max(kk, Lk), this._temperature !== kk && (this._temperature = kk, this._updateParameters())
```

#### 237. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4734)

```diff
-               return oC.b.GetAsMatrix3x3(QC)
+               return ak.c.GetAsMatrix3x3(Xk)
```

#### 238. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4816-L4817` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4816-L4817) · [Before (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4816-L4817)

```diff
-               const ZC = 1 / (this.outputTextureWidth || CC.mg().getRenderWidth()),
-                 QC = 1 / (this.outputTextureHeight || CC.mg().getRenderHeight());
+               const Ik = 1 / (this.outputTextureWidth || kk.Oe().getRenderWidth()),
+                 Xk = 1 / (this.outputTextureHeight || kk.Oe().getRenderHeight());
```

#### 239. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4819` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4819) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4819)

```diff
-                 const wC = null != zC ? zC : QC / ZC;
+                 const Tk = null != Fk ? Fk : Xk / Ik;
```

#### 240. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4823)

```diff
-                 nC = (0, vC.i)(nC, fC, this.vignetteStretch), bC = (0, vC.i)(bC, fC, this.vignetteStretch), CC.setFloat4("vignetteSettings1", nC, bC, -nC * this.vignetteCenterX, -bC * this.vignetteCenterY);
+                 yk = (0, Sk.l)(yk, lk, this.vignetteStretch), ik = (0, Sk.l)(ik, lk, this.vignetteStretch), kk.setFloat4("vignetteSettings1", yk, ik, -yk * this.vignetteCenterX, -ik * this.vignetteCenterY);
```

#### 241. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4835)

```diff
-             return xC.d.Clone((() => new CC), this)
+             return Qk.b.Clone((() => new kk), this)
```

#### 242. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4838)

```diff
-             return xC.d.Serialize(this)
+             return Qk.b.Serialize(this)
```

#### 243. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4848` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4848) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L4848)

```diff
-           zC = [(0, wC.l)()], ZC = [(0, wC.M)()], qC = [(0, wC.B)("colorGradingTexture")], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], PC = [(0, wC.M)()], JC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], dC = [(0, wC.M)()], mC = [(0, … [truncated]
+           Fk = [(0, Tk.k)()], Ik = [(0, Tk.J)()], qk = [(0, Tk.B)("colorGradingTexture")], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], Jk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], pk = [(0, … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5218)

```diff
-         })(), CC.TONEMAPPING_STANDARD = 0, CC.TONEMAPPING_ACES = 1, CC.TONEMAPPING_KHR_PBR_NEUTRAL = 2, CC.PrepareUniforms = eC.d, CC.PrepareSamplers = eC.b, CC._VIGNETTEMODE_MULTIPLY = 0, CC._VIGNETTEMODE_OPAQUE = 1, CC
+         })(), kk.TONEMAPPING_STANDARD = 0, kk.TONEMAPPING_ACES = 1, kk.TONEMAPPING_KHR_PBR_NEUTRAL = 2, kk.PrepareUniforms = vk.f, kk.PrepareSamplers = vk.c, kk._VIGNETTEMODE_MULTIPLY = 0, kk._VIGNETTEMODE_OPAQUE = 1, kk
```

#### 245. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5223)

```diff
-       const zC = xC.d.Parse((() => new KC), CC, null, null);
+       const Fk = Qk.b.Parse((() => new Ok), kk, null, null);
```

#### 246. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5228)

```diff
-       YC || (YC = !0, KC.Parse = dC, xC.d._ImageProcessingConfigurationParser = dC, (0, hC.d)("BABYLON.ImageProcessingConfiguration", KC))
+       nk || (nk = !0, Ok.Parse = Gk, Qk.b._ImageProcessingConfigurationParser = Gk, (0, Ek.f)("BABYLON.ImageProcessingConfiguration", Ok))
```

#### 247. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5231)

```diff
-   39950: (CC, zC, ZC) => {
+   40134: (kk, Fk, Ik) => {
```

#### 248. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5235-L5236` → after: `L5235-L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5235-L5236) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5235-L5236)

```diff
-     var QC = ZC(38507),
-       wC = ZC(39913);
+     var Xk = Ik(38674),
+       Tk = Ik(40097);
```

#### 249. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5243)

```diff
-         this._uniformNames = [], this._valueCache = {}, this._engine = CC, this._noUBO = !CC.supportsUniformBuffers || wC, this._dynamic = ZC, this._name = QC ?? "no-name", this._data = zC || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
+         this._uniformNames = [], this._valueCache = {}, this._engine = kk, this._noUBO = !kk.supportsUniformBuffers || Tk, this._dynamic = Ik, this._name = Xk ?? "no-name", this._data = Fk || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
```

#### 250. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5265)

```diff
-         if (zC = CC <= 2 ? CC : 4, this._uniformLocationPointer % zC !== 0) {
+         if (Fk = kk <= 2 ? kk : 4, this._uniformLocationPointer % Fk !== 0) {
```

#### 251. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5300)

```diff
-         this.addUniform(CC, Array.prototype.slice.call(zC.VZC()))
+         this.addUniform(kk, Array.prototype.slice.call(Fk.iXk()))
```

#### 252. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5423` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5423) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5423)

```diff
-           if (this._buffer) return void QC.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + CC);
+           if (this._buffer) return void Xk.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + kk);
```

#### 253. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5438)

```diff
-         if (void 0 === bC) return void QC.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
+         if (void 0 === ik) return void Xk.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
```

#### 254. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5449` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5449) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5449)

```diff
-             if (this._bufferData[bC + 4 * fC + QC] !== wC.g.FloatRound(zC[oC]) && (CC = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[bC + 4 * fC + QC] = zC[oC]), QC++, QC === nC.strideSize) {
+             if (this._bufferData[ik + 4 * lk + Xk] !== Tk.h.FloatRound(Fk[ak]) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ik + 4 * lk + Xk] = Fk[ak]), Xk++, Xk === yk.strideSize) {
```

#### 255. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5544` → after: `L5544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5544) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5544)

```diff
-         this._cacheMatrix(CC, zC) && this.updateUniform(CC, zC.VZC(), 16)
+         this._cacheMatrix(kk, Fk) && this.updateUniform(kk, Fk.iXk(), 16)
```

#### 256. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5688)

```diff
-   39740: (CC, zC, ZC) => {
+   39906: (kk, Fk, Ik) => {
```

#### 257. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5690)

```diff
-       c: () => wC
+       e: () => Tk
```

#### 258. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5692` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5692) · [Before (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5692)

```diff
-     var QC = ZC(39742);
+     var Xk = Ik(39914);
```

#### 259. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5702)

```diff
-   39826: (CC, zC, ZC) => {
+   40013: (kk, Fk, Ik) => {
```

#### 260. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5704-L5705` → after: `L5704-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5704-L5705) · [Before (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5704-L5705)

```diff
-       e: () => oC,
-       f: () => qC
+       c: () => ak,
+       e: () => qk
```

#### 261. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5723` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5723) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5723)

```diff
-       return "function" === typeof CC ? CC : CC?.constructor
+       return "function" === typeof kk ? kk : kk?.constructor
```

#### 262. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5727` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5727) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5727)

```diff
-       if (!CC) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(nC)}) polyfill must run before decorated classes are evaluated.`);
+       if (!kk) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(yk)}) polyfill must run before decorated classes are evaluated.`);
```

#### 263. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5748` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5748) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5748)

```diff
-   39818: (CC, zC, ZC) => {
+   40011: (kk, Fk, Ik) => {
```

#### 264. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5757` → after: `L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5757) · [Before (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5757)

```diff
-       l: () => MC,
+       k: () => jk,
```

#### 265. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5759-L5760` → after: `L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5759) · [Before (L5759-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5759-L5760)

```diff
-       q: () => gC,
-       t: () => qC,
+       r: () => ek,
```

#### 266. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5765` → after: `L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5765) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5765)

```diff
-     var QC = ZC(39826);
+     var Xk = Ik(40013);
```

#### 267. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5771)

```diff
-           nC = (0, QC.e)(wC.metadata);
+           yk = (0, Xk.c)(Tk.metadata);
```

#### 268. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5883` → after: `L5883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5883) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5883)

```diff
-   39842: (CC, zC, ZC) => {
+   40021: (kk, Fk, Ik) => {
```

#### 269. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5885` → after: `L5885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5885) · [Before (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5885)

```diff
-       d: () => qC
+       b: () => qk
```

#### 270. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5887-L5891` → after: `L5887-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5887-L5891) · [Before (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5887-L5891)

```diff
-     var QC = ZC(39694),
-       wC = ZC(39851),
-       bC = ZC(37142),
-       nC = ZC(36963),
-       fC = ZC(39826);
+     var Xk = Ik(39863),
+       Tk = Ik(40025),
+       ik = Ik(37331),
+       yk = Ik(37153),
+       lk = Ik(40013);
```

#### 271. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5895-L5896` → after: `L5895-L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5895-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5895-L5896) · [Before (L5895-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5895-L5896)

```diff
-       wC.e && wC.e.HasTags(zC) && wC.e.AddTagsTo(bC, wC.e.GetTags(zC, !0));
-       const nC = (0, fC.f)(bC),
+       Tk.d && Tk.d.HasTags(Fk) && Tk.d.AddTagsTo(ik, Tk.d.GetTags(Fk, !0));
+       const yk = (0, lk.e)(ik),
```

#### 272. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5910)

```diff
-             QC.cloneTexturesOnlyOnce && oC[fC.uniqueId] ? bC[wC] = oC[fC.uniqueId] : (bC[wC] = ZC || fC.isRenderTarget ? fC : fC.clone(), oC[fC.uniqueId] = bC[wC]);
+             Xk.cloneTexturesOnlyOnce && ak[lk.uniqueId] ? ik[Tk] = ak[lk.uniqueId] : (ik[Tk] = Ik || lk.isRenderTarget ? lk : lk.clone(), ak[lk.uniqueId] = ik[Tk]);
```

#### 273. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5921)

```diff
-             bC[wC] = ZC ? fC : fC.clone()
+             ik[Tk] = Ik ? lk : lk.clone()
```

#### 274. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5937-L5938` → after: `L5937-L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5937-L5938) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5937-L5938)

```diff
-         zC || (zC = {}), wC.e && (zC.tags = wC.e.GetTags(CC));
-         const ZC = (0, fC.f)(CC);
+         Fk || (Fk = {}), Tk.d && (Fk.tags = Tk.d.GetTags(kk));
+         const Ik = (0, lk.e)(kk);
```

#### 275. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5961)

```diff
-               zC[bC] = fC.VZC();
+               Fk[ik] = lk.iXk();
```

#### 276. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5972` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5972) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5972)

```diff
-         const wC = (0, fC.f)(zC);
+         const Tk = (0, lk.e)(Fk);
```

#### 277. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5993` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5993) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5993)

```diff
-                 CC[fC] = nC.n.FromArray(FC);
+                 kk[lk] = yk.p.FromArray(Lk);
```

#### 278. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L5996)

```diff
-                 CC[fC] = nC.r.FromArray(FC);
+                 kk[lk] = yk.t.FromArray(Lk);
```

#### 279. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6005` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6005) · [Before (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6005)

```diff
-                 CC[fC] = bC.g.FromArray(FC);
+                 kk[lk] = ik.h.FromArray(Lk);
```

#### 280. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6017)

```diff
-                 CC[fC] = nC.b.FromArray(FC);
+                 kk[lk] = yk.c.FromArray(Lk);
```

#### 281. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6028` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6028) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6028)

```diff
-         return wC.e && wC.e.AddTagsTo(bC, zC.tags), qC.ParseProperties(zC, bC, ZC, QC), bC
+         return Tk.d && Tk.d.AddTagsTo(ik, Fk.tags), qk.ParseProperties(Fk, ik, Ik, Xk), ik
```

#### 282. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6038` → after: `L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6038) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6038)

```diff
-       throw (0, QC.i)("ImageProcessingConfiguration")
+       throw (0, Xk.j)("ImageProcessingConfiguration")
```

#### 283. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6040` → after: `L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6040) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6040)

```diff
-       throw (0, QC.i)("FresnelParameters")
+       throw (0, Xk.j)("FresnelParameters")
```

#### 284. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6042` → after: `L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6042) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6042)

```diff
-       throw (0, QC.i)("ColorCurves")
+       throw (0, Xk.j)("ColorCurves")
```

#### 285. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6044` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6044) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6044)

```diff
-       throw (0, QC.i)("Texture")
+       throw (0, Xk.j)("Texture")
```

#### 286. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6047` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6047) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6047)

```diff
-   39766: (CC, zC, ZC) => {
+   39947: (kk, Fk, Ik) => {
```

#### 287. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6049` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6049) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6049)

```diff
-       b: () => wC
+       e: () => Tk
```

#### 288. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6051` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6051) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6051)

```diff
-     var QC = ZC(39730);
+     var Xk = Ik(39891);
```

#### 289. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6084` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6084) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6084)

```diff
-         wC.Enabled && (this._startMonitoringTime = QC.b.Now)
+         Tk.Enabled && (this._startMonitoringTime = Xk.d.Now)
```

#### 290. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6090)

```diff
-         const zC = QC.b.Now;
+         const Fk = Xk.d.Now;
```

#### 291. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6099` → after: `L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6099) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6099)

```diff
-         const CC = QC.b.Now;
+         const kk = Xk.d.Now;
```

#### 292. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6105)

```diff
-   39925: (CC, zC, ZC) => {
+   40107: (kk, Fk, Ik) => {
```

#### 293. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6107-L6108` → after: `L6107-L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6107-L6108) · [Before (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6107-L6108)

```diff
-       e: () => wC,
-       i: () => QC
+       d: () => Tk,
+       f: () => Xk
```

#### 294. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6168` → after: `L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6168) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6168)

```diff
-   39851: (CC, zC, ZC) => {
+   40025: (kk, Fk, Ik) => {
```

#### 295. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6170` → after: `L6170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6170) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6170)

```diff
-       e: () => wC
+       d: () => Tk
```

#### 296. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6249)

```diff
-   39962: (CC, zC, ZC) => {
+   40149: (kk, Fk, Ik) => {
```

#### 297. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6253-L6254)

```diff
-     var QC = ZC(39959),
-       wC = ZC(36987);
+     var Xk = Ik(40141),
+       Tk = Ik(37187);
```

#### 298. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6257` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6257) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6257)

```diff
-         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new wC.d, this._scene = CC
+         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Tk.e, this._scene = kk
```

#### 299. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6260)

```diff
-         if (this._vertexBuffers[QC.k.PositionKind]) return;
+         if (this._vertexBuffers[Xk.l.PositionKind]) return;
```

#### 300. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6262)

```diff
-         CC.push(1, 1), CC.push(-1, 1), CC.push(-1, -1), CC.push(1, -1), this._vertexBuffers[QC.k.PositionKind] = new QC.k(this._scene.mg(), CC, QC.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+         kk.push(1, 1), kk.push(-1, 1), kk.push(-1, -1), kk.push(1, -1), this._vertexBuffers[Xk.l.PositionKind] = new Xk.l(this._scene.Oe(), kk, Xk.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
```

#### 301. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6266)

```diff
-         CC.push(0), CC.push(1), CC.push(2), CC.push(0), CC.push(2), CC.push(3), this._indexBuffer = this._scene.mg().createIndexBuffer(CC)
+         kk.push(0), kk.push(1), kk.push(2), kk.push(0), kk.push(2), kk.push(3), this._indexBuffer = this._scene.Oe().createIndexBuffer(kk)
```

#### 302. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6278` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6278) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6278)

```diff
-         const CC = this._vertexBuffers[QC.k.PositionKind];
+         const kk = this._vertexBuffers[Xk.l.PositionKind];
```

#### 303. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6294` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6294) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6294)

```diff
-         const fC = this._scene.mg();
+         const lk = this._scene.Oe();
```

#### 304. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6296` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6296) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6296)

```diff
-           oC < CC.length - 1 ? CC[oC + 1].activate(this._scene.activeCamera || this._scene, zC?.texture) : (zC ? fC.bindFramebuffer(zC, QC, void 0, void 0, ZC, wC) : bC || fC.restoreDefaultFramebuffer(), fC._debugInsertMarker?.(`post process ${CC[oC].name} output`));
+           ak < kk.length - 1 ? kk[ak + 1].activate(this._scene.activeCamera || this._scene, Fk?.texture) : (Fk ? lk.bindFramebuffer(Fk, Xk, void 0, void 0, Ik, Tk) : ik || lk.restoreDefaultFramebuffer(), lk._debugInsertMarker?.(`post process ${kk[ak].name} output`));
```

#### 305. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6308)

```diff
-         const nC = this._scene.mg();
+         const yk = this._scene.Oe();
```

#### 306. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6311)

```diff
-           if (fC < oC - 1 ? qC._outputTexture = QC[fC + 1].activate(bC, zC?.texture) : (zC ? (nC.bindFramebuffer(zC, ZC, void 0, void 0, wC), qC._outputTexture = zC) : (nC.restoreDefaultFramebuffer(), qC._outputTexture = null), nC._debugInsertMarker?.(`post process ${QC[fC].name} … [truncated]
+           if (lk < ak - 1 ? qk._outputTexture = Xk[lk + 1].activate(ik, Fk?.texture) : (Fk ? (yk.bindFramebuffer(Fk, Ik, void 0, void 0, Tk), qk._outputTexture = Fk) : (yk.restoreDefaultFramebuffer(), qk._outputTexture = null), yk._debugInsertMarker?.(`post process ${Xk[lk].name} … [truncated]
```

#### 307. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6318-L6319` → after: `L6318-L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6318-L6319) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6318-L6319)

```diff
-         const CC = this._vertexBuffers[QC.k.PositionKind];
-         CC && (CC.dispose(), this._vertexBuffers[QC.k.PositionKind] = null), this._indexBuffer && (this._scene.mg()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         const kk = this._vertexBuffers[Xk.l.PositionKind];
+         kk && (kk.dispose(), this._vertexBuffers[Xk.l.PositionKind] = null), this._indexBuffer && (this._scene.Oe()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
```

#### 308. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6323` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6323) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6323)

```diff
-   39984: (CC, zC, ZC) => {
+   40161: (kk, Fk, Ik) => {
```

#### 309. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6325` → after: `L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6325) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6325)

```diff
-       b: () => qC
+       d: () => qk
```

#### 310. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6327-L6328)

```diff
-     var QC = ZC(39925),
-       wC = ZC(36963);
+     var Xk = Ik(40107),
+       Tk = Ik(37153);
```

#### 311. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6350)

```diff
-         this.index = CC, this._opaqueSubMeshes = new QC.i(256), this._transparentSubMeshes = new QC.i(256), this._alphaTestSubMeshes = new QC.i(256), this._depthOnlySubMeshes = new QC.i(256), this._particleSystems = new QC.i(256), this._spriteManagers = new QC.i(256), this._empty … [truncated]
+         this.index = kk, this._opaqueSubMeshes = new Xk.f(256), this._transparentSubMeshes = new Xk.f(256), this._alphaTestSubMeshes = new Xk.f(256), this._depthOnlySubMeshes = new Xk.f(256), this._particleSystems = new Xk.f(256), this._spriteManagers = new Xk.f(256), this._empty … [truncated]
```

#### 312. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6359)

```diff
-         const qC = this._scene.mg();
+         const qk = this._scene.Oe();
```

#### 313. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6389` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6389) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6389)

```diff
-           for (; WC < CC.length; WC++) FC = CC.data[WC], FC._alphaIndex = FC.getMesh().alphaIndex, FC._distanceToCamera = wC.r.Distance(FC.WE().IQC.centerWorld, NC);
+           for (; tk < kk.length; tk++) Lk = kk.data[tk], Lk._alphaIndex = Lk.getMesh().alphaIndex, Lk._distanceToCamera = Tk.t.Distance(Lk.vR().EXk.centerWorld, Zk);
```

#### 314. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6405` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6405) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6405)

```diff
-         const bC = CC[0].getMesh().Km();
+         const ik = kk[0].getMesh().mG();
```

#### 315. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6410` → after: `L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6410) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6410)

```diff
-             const CC = wC.cg();
+             const kk = Tk.Ue();
```

#### 316. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6413)

```diff
-               const ZC = CC.Km().mg();
+               const Ik = kk.mG().Oe();
```

#### 317. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6430` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6430) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6430)

```diff
-               ZC(wC, CC[zC]) < 0 ? nC = zC : bC = zC + 1
+               Ik(Tk, kk[Fk]) < 0 ? yk = Fk : ik = Fk + 1
```

#### 318. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6487)

```diff
-         void 0 === zC && (zC = CC.getMesh()), void 0 === ZC && (ZC = CC.cg()), null !== ZC && void 0 !== ZC && (ZC.needAlphaBlendingForMesh(zC) ? this._transparentSubMeshes.push(CC) : ZC.needAlphaTestingForMesh(zC) ? (ZC.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+         void 0 === Fk && (Fk = kk.getMesh()), void 0 === Ik && (Ik = kk.Ue()), null !== Ik && void 0 !== Ik && (Ik.needAlphaBlendingForMesh(Fk) ? this._transparentSubMeshes.push(kk) : Ik.needAlphaTestingForMesh(Fk) ? (Ik.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
```

#### 319. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6518` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6518) · [Before (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6518)

```diff
-     qC._ZeroVector = wC.r.Zero()
+     qk._ZeroVector = Tk.t.Zero()
```

#### 320. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6520)

```diff
-   39978: (CC, zC, ZC) => {
+   40157: (kk, Fk, Ik) => {
```

#### 321. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6522` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6522) · [Before (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6522)

```diff
-       b: () => bC
+       e: () => ik
```

#### 322. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6524)

```diff
-     var QC = ZC(39984);
+     var Xk = Ik(40161);
```

#### 323. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6542-L6543)

```diff
-           if (CC.Zx)
-             for (const zC of CC.Zx) zC._wasDispatched = !1;
+           if (kk.lK)
+             for (const Fk of kk.lK) Fk._wasDispatched = !1;
```

#### 324. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6546` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6546) · [Before (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6546)

```diff
-         for (const CC of this._scene.Ix) CC._wasDispatched = !1
+         for (const kk of this._scene.jK) kk._wasDispatched = !1
```

#### 325. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6566` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6566) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6566)

```diff
-         this._depthStencilBufferAlreadyCleaned || (this._scene.mg().clear(null, !1, CC, zC), this._depthStencilBufferAlreadyCleaned = !0)
+         this._depthStencilBufferAlreadyCleaned || (this._scene.Oe().clear(null, !1, kk, Fk), this._depthStencilBufferAlreadyCleaned = !0)
```

#### 326. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6576` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6576) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6576)

```diff
-         WC.sS = this._scene, WC.camera = this._scene.activeCamera, WC.renderingManager = this;
+         tk.Yw = this._scene, tk.camera = this._scene.activeCamera, tk.renderingManager = this;
```

#### 327. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6626` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6626) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6626)

```diff
-         void 0 === this._renderingGroups[CC] && (this._renderingGroups[CC] = new QC.b(CC, this._scene, this._customOpaqueSortCompareFn[CC], this._customAlphaTestSortCompareFn[CC], this._customTransparentSortCompareFn[CC]), this._renderingGroups[CC].disableDepthPrePass = this._dis … [truncated]
+         void 0 === this._renderingGroups[kk] && (this._renderingGroups[kk] = new Xk.d(kk, this._scene, this._customOpaqueSortCompareFn[kk], this._customAlphaTestSortCompareFn[kk], this._customTransparentSortCompareFn[kk]), this._renderingGroups[kk].disableDepthPrePass = this._dis … [truncated]
```

#### 328. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6661` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6661) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6661)

```diff
-   39735: (CC, zC, ZC) => {
+   39894: (kk, Fk, Ik) => {
```

#### 329. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6663)

```diff
-       d: () => QC
+       b: () => Xk
```

#### 330. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6710` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6710) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6710)

```diff
-             const zC = wC < this._numTargetEnabled ? wC : 0;
+             const Fk = Tk < this._numTargetEnabled ? Tk : 0;
```

#### 331. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6717)

```diff
-             const zC = CC < this._numTargetEnabled ? 4 * CC : 0;
+             const Fk = kk < this._numTargetEnabled ? 4 * kk : 0;
```

#### 332. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6724` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6724) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6724)

```diff
-             const zC = CC < this._numTargetEnabled ? 2 * CC : 0;
+             const Fk = kk < this._numTargetEnabled ? 2 * kk : 0;
```

#### 333. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6800` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6800) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6800)

```diff
-   40013: (CC, zC, ZC) => {
+   40189: (kk, Fk, Ik) => {
```

#### 334. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6802)

```diff
-       c: () => QC
+       e: () => Xk
```

#### 335. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6807` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6807) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6807)

```diff
-   39910: (CC, zC, ZC) => {
+   40090: (kk, Fk, Ik) => {
```

#### 336. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6809-L6810` → after: `L6809-L6810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6809-L6810) · [Before (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6809-L6810)

```diff
-       e: () => fZ,
-       g: () => bZ
+       c: () => aI,
+       f: () => yI
```

#### 337. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6812-L6816` → after: `L6812-L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6812-L6816) · [Before (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6812-L6816)

```diff
-     var QC = ZC(39913),
-       wC = ZC(39712),
-       bC = ZC(39730),
-       nC = ZC(36987),
-       fC = ZC(39925);
+     var Xk = Ik(40097),
+       Tk = Ik(39878),
+       ik = Ik(39891),
+       yk = Ik(37187),
+       lk = Ik(40107);
```

#### 338. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6834` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6834) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6834)

```diff
-         return void 0 !== ZC ? ZC : (this.add(CC, zC), zC)
+         return void 0 !== Ik ? Ik : (this.add(kk, Fk), Fk)
```

#### 339. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6871-L6875` → after: `L6871-L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6871-L6875) · [Before (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6871-L6875)

```diff
-     var qC = ZC(39851),
-       FC = ZC(36963),
-       WC = ZC(39932),
-       NC = ZC(39950),
-       MC = ZC(39953);
+     var qk = Ik(40025),
+       Lk = Ik(37153),
+       tk = Ik(40113),
+       Zk = Ik(40134),
+       jk = Ik(40139);
```

#### 340. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6881)

```diff
-         const QC = CC.Km();
+         const Xk = kk.mG();
```

#### 341. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6894-L6901` → after: `L6894-L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6894-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6894-L6901) · [Before (L6894-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6894-L6901)

```diff
-     var SC = ZC(39962),
-       pC = ZC(39969),
-       PC = ZC(39978),
-       GC = ZC(39990),
-       RC = ZC(39680),
-       AC = ZC(36985),
-       xC = ZC(39694),
-       JC = ZC(39993);
+     var wk = Ik(40149),
+       Hk = Ik(40152),
+       Jk = Ik(40157),
+       xk = Ik(40166),
+       Pk = Ik(39850),
+       Kk = Ik(37178),
+       Qk = Ik(39863),
+       sk = Ik(40169);
```

#### 342. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6926` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6926) · [Before (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6926)

```diff
-     var iC, vC, eC, hC, KC, YC, dC, mC = ZC(40001);
+     var zk, Sk, vk, Ek, Ok, nk, Gk, pk = Ik(40176);
```

#### 343. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6948)

```diff
-     var HC = ZC(40010);
+     var uk = Ik(40182);
```

#### 344. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6959` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6959) · [Before (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6959)

```diff
-             throw `Unable to generate event for device ${iC[CC]}`
+             throw `Unable to generate event for device ${zk[kk]}`
```

#### 345. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L6970)

```diff
-         switch (nC.pointerId = 1, nC.type = "wheel", nC.deltaMode = HC.d.DOM_DELTA_PIXEL, nC.deltaX = 0, nC.deltaY = 0, nC.deltaZ = 0, ZC) {
+         switch (yk.pointerId = 1, yk.type = "wheel", yk.deltaMode = uk.c.DOM_DELTA_PIXEL, yk.deltaX = 0, yk.deltaY = 0, yk.deltaZ = 0, Ik) {
```

#### 346. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7034)

```diff
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = QC.g.IsSafari(), this._usingMacOs = (0, RC.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = CC => {}, this._keyboardUpEvent = CC => {}, this._k … [truncated]
+         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Xk.h.IsSafari(), this._usingMacOs = (0, Pk.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = kk => {}, this._keyboardUpEvent = kk => {}, this._k … [truncated]
```

#### 347. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7040` → after: `L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7040) · [Before (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7040)

```diff
-         if (!wC) throw `Unable to find device ${iC[CC]}`;
+         if (!Tk) throw `Unable to find device ${zk[kk]}`;
```

#### 348. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7043-L7044` → after: `L7043-L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7043-L7044) · [Before (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7043-L7044)

```diff
-         if (void 0 === bC) throw `Unable to find input ${ZC} for device ${iC[CC]} in slot ${zC}`;
-         return ZC === vC.Move && QC.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), bC
+         if (void 0 === ik) throw `Unable to find input ${Ik} for device ${zk[kk]} in slot ${Fk}`;
+         return Ik === Sk.Move && Xk.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ik
```

#### 349. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7087` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7087) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7087)

```diff
-         if (void 0 === zC) throw `Unable to register device ${iC[CC]} to undefined slot.`;
+         if (void 0 === Fk) throw `Unable to register device ${zk[kk]} to undefined slot.`;
```

#### 350. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7141` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7141) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7141)

```diff
-             if (!(wC >= 0)) return void QC.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (!(Tk >= 0)) return void Xk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 351. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7155` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7155) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7155)

```diff
-             if (-1 === zC && (zC = this._activeTouchIds.indexOf(-1)), !(zC >= 0)) return void QC.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (-1 === Fk && (Fk = this._activeTouchIds.indexOf(-1)), !(Fk >= 0)) return void Xk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 352. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7292)

```diff
-         this.deviceType = zC, this.deviceSlot = ZC, this.onInputChangedObservable = new nC.d, this._deviceInputSystem = CC
+         this.deviceType = Fk, this.deviceSlot = Ik, this.onInputChangedObservable = new yk.e, this._deviceInputSystem = kk
```

#### 353. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7349` → after: `L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7349) · [Before (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7349)

```diff
-         this._devices = new Array(zC), this._firstDevice = new Array(zC), this._engine = CC, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new rC(CC)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new nC.d((CC => {
+         this._devices = new Array(Fk), this._firstDevice = new Array(Fk), this._engine = kk, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new ck(kk)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new yk.e((kk => {
```

#### 354. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7353` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7353) · [Before (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7353)

```diff
-         })), this.onDeviceDisconnectedObservable = new nC.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = CC.Tm.add((() => {
+         })), this.onDeviceDisconnectedObservable = new yk.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = kk.hG.add((() => {
```

#### 355. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7358` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7358) · [Before (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7358)

```diff
-         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
+         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
```

#### 356. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7394)

```diff
-     var TC = ZC(40013);
+     var fk = Ik(40189);
```

#### 357. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7426` → after: `L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7426) · [Before (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7426)

```diff
-         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
+         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
```

#### 358. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7435` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7435) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7435)

```diff
-         return new FC.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
+         return new Lk.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
```

#### 359. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7450` → after: `L7450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7450) · [Before (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7450)

```diff
-         const zC = this._scene.mg().getInputElementClientRect();
+         const Fk = this._scene.Oe().getInputElementClientRect();
```

#### 360. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7455` → after: `L7455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7455) · [Before (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7455)

```diff
-           QC = ZC.mg(),
+           Xk = Ik.Oe(),
```

#### 361. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7463` → after: `L7463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7463) · [Before (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7463)

```diff
-         const bC = zC.inputIndex >= vC.MouseWheelX && zC.inputIndex <= vC.MouseWheelZ ? JC.b.POINTERWHEEL : JC.b.POINTERMOVE;
+         const ik = Fk.inputIndex >= Sk.MouseWheelX && Fk.inputIndex <= Sk.MouseWheelZ ? sk.d.POINTERWHEEL : sk.d.POINTERMOVE;
```

#### 362. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7465` → after: `L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7465) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7465)

```diff
-         ZC.onPointerMove && (CC = CC || this._pickMove(zC), ZC.onPointerMove(zC, CC, bC)), CC ? (nC = new JC.h(bC, zC, CC), this._setRayOnPointerInfo(CC, zC)) : (nC = new JC.h(bC, zC, null, this), this._movePointerInfo = nC), ZC.onPointerObservable.hasObservers() && ZC.onPointerO … [truncated]
+         Ik.onPointerMove && (kk = kk || this._pickMove(Fk), Ik.onPointerMove(Fk, kk, ik)), kk ? (yk = new sk.j(ik, Fk, kk), this._setRayOnPointerInfo(kk, Fk)) : (yk = new sk.j(ik, Fk, null, this), this._movePointerInfo = yk), Ik.onPointerObservable.hasObservers() && Ik.onPointerO … [truncated]
```

#### 363. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7469` → after: `L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7469) · [Before (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7469)

```diff
-         CC && TC.c._IsPickingAvailable && (CC.ray || (CC.ray = ZC.createPickingRay(zC.offsetX, zC.offsetY, FC.b.Identity(), ZC.activeCamera)))
+         kk && fk.e._IsPickingAvailable && (kk.ray || (kk.ray = Ik.createPickingRay(Fk.offsetX, Fk.offsetY, Lk.c.Identity(), Ik.activeCamera)))
```

#### 364. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7482` → after: `L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7482) · [Before (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7482)

```diff
-           wC = new JC.f(ZC, zC, this._unTranslatedPointerX, this._unTranslatedPointerY);
+           Tk = new sk.h(Ik, Fk, this._unTranslatedPointerX, this._unTranslatedPointerY);
```

#### 365. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7487` → after: `L7487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7487) · [Before (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7487)

```diff
-           ZC = zC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, zC.pointerMovePredicate, zC.pointerMoveFastCheck, zC.cameraToUseForPointers, zC.pointerMoveTrianglePredicate);
+           Ik = Fk.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, Fk.pointerMovePredicate, Fk.pointerMoveFastCheck, Fk.cameraToUseForPointers, Fk.pointerMoveTrianglePredicate);
```

#### 366. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7503` → after: `L7503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7503) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7503)

```diff
-         CC.pointerMovePredicate || (CC.pointerMovePredicate = zC => (zC._isPointerMovePickable ?? zC.tS) && zC.isVisible && zC.isReady() && zC.isEnabled() && (zC.enablePointerMoveEvents || CC.constantlyUpdateMeshUnderPointer || null !== zC._getActionManagerForTrigger()) && (!CC.c … [truncated]
+         kk.pointerMovePredicate || (kk.pointerMovePredicate = Fk => (Fk._isPointerMovePickable ?? Fk.gw) && Fk.isVisible && Fk.isReady() && Fk.isEnabled() && (Fk.enablePointerMoveEvents || kk.constantlyUpdateMeshUnderPointer || null !== Fk._getActionManagerForTrigger()) && (!kk.c … [truncated]
```

#### 367. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7506` → after: `L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7506) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7506)

```diff
-         const QC = ZC.mg().getInputElement();
+         const Xk = Ik.Oe().getInputElement();
```

#### 368. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7516` → after: `L7516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7516) · [Before (L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7516)

```diff
-         ZC.inputIndex = vC.Move, this._checkPrePointerObservable(CC, ZC, JC.b.POINTERMOVE) || this._processPointerMove(CC, ZC)
+         Ik.inputIndex = Sk.Move, this._checkPrePointerObservable(kk, Ik, sk.d.POINTERMOVE) || this._processPointerMove(kk, Ik)
```

#### 369. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7520` → after: `L7520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7520) · [Before (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7520)

```diff
-         ZC.inputIndex = ZC.button + 2, this._checkPrePointerObservable(CC, ZC, JC.b.POINTERDOWN) || this._processPointerDown(CC, ZC)
+         Ik.inputIndex = Ik.button + 2, this._checkPrePointerObservable(kk, Ik, sk.d.POINTERDOWN) || this._processPointerDown(kk, Ik)
```

#### 370. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7539` → after: `L7539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7539) · [Before (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7539)

```diff
-               const CC = ZC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, (CC => CC.tS && CC.isVisible && CC.isReady() && CC.actionManager && CC.actionManager.hasSpecificTrigger(8) && CC === this._pickedDownMesh), !1, ZC.cameraToUseForPointers);
+               const kk = Ik.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, (kk => kk.gw && kk.isVisible && kk.isReady() && kk.actionManager && kk.actionManager.hasSpecificTrigger(8) && kk === this._pickedDownMesh), !1, Ik.cameraToUseForPointers);
```

#### 371. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7546-L7547` → after: `L7546-L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7546-L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7546-L7547) · [Before (L7546-L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7546-L7547)

```diff
-         const wC = JC.b.POINTERDOWN;
-         CC ? (ZC.onPointerDown && ZC.onPointerDown(zC, CC, wC), QC = new JC.h(wC, zC, CC), this._setRayOnPointerInfo(CC, zC)) : QC = new JC.h(wC, zC, null, this), ZC.onPointerObservable.hasObservers() && ZC.onPointerObservable.notifyObservers(QC, wC)
+         const Tk = sk.d.POINTERDOWN;
+         kk ? (Ik.onPointerDown && Ik.onPointerDown(Fk, kk, Tk), Xk = new sk.j(Tk, Fk, kk), this._setRayOnPointerInfo(kk, Fk)) : Xk = new sk.j(Tk, Fk, null, this), Ik.onPointerObservable.hasObservers() && Ik.onPointerObservable.notifyObservers(Xk, Tk)
```

#### 372. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7556` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7556) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7556)

```diff
-         ZC ? wC.PF = !0 : wC.singleClick = !0, this._checkPrePointerObservable(CC, QC, JC.b.POINTERUP) || this._processPointerUp(CC, QC, wC)
+         Ik ? Tk.lL = !0 : Tk.singleClick = !0, this._checkPrePointerObservable(kk, Xk, sk.d.POINTERUP) || this._processPointerUp(kk, Xk, Tk)
```

#### 373. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7562-L7563` → after: `L7562-L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7562-L7563) · [Before (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7562-L7563)

```diff
-             const ZC = JC.b.POINTERPICK,
-               wC = new JC.h(ZC, zC, CC);
+             const Ik = sk.d.POINTERPICK,
+               Tk = new sk.j(Ik, Fk, kk);
```

#### 374. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7570` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7570) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7570)

```diff
-             ZC.PF && QC && QC.processTrigger(6, gC.CreateNew(CC.pickedMesh, zC, CC))
+             Ik.lL && Xk && Xk.processTrigger(6, ek.CreateNew(kk.pickedMesh, Fk, kk))
```

#### 375. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7573` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7573) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7573)

```diff
-           for (const wC of QC._pointerUpStage) CC = wC.action(this._unTranslatedPointerX, this._unTranslatedPointerY, CC, zC, ZC.PF);
+           for (const Tk of Xk._pointerUpStage) kk = Tk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Fk, Ik.lL);
```

#### 376. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7579-L7580` → after: `L7579-L7580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7579-L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7579-L7580) · [Before (L7579-L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7579-L7580)

```diff
-           const wC = new JC.h(JC.b.POINTERUP, zC, CC);
-           if (this._setRayOnPointerInfo(CC, zC), QC.onPointerObservable.notifyObservers(wC, JC.b.POINTERUP), QC.onPointerUp && QC.onPointerUp(zC, CC, JC.b.POINTERUP), !ZC.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
+           const Tk = new sk.j(sk.d.POINTERUP, Fk, kk);
+           if (this._setRayOnPointerInfo(kk, Fk), Xk.onPointerObservable.notifyObservers(Tk, sk.d.POINTERUP), Xk.onPointerUp && Xk.onPointerUp(Fk, kk, sk.d.POINTERUP), !Ik.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
```

#### 377. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7582-L7583` → after: `L7582-L7583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7582-L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7582-L7583) · [Before (L7582-L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7582-L7583)

```diff
-             if (ZC.singleClick ? wC = JC.b.POINTERTAP : ZC.PF && (wC = JC.b.POINTERDOUBLETAP), wC) {
-               const ZC = new JC.h(wC, zC, CC);
+             if (Ik.singleClick ? Tk = sk.d.POINTERTAP : Ik.lL && (Tk = sk.d.POINTERDOUBLETAP), Tk) {
+               const Ik = new sk.j(Tk, Fk, kk);
```

#### 378. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7599)

```diff
-           bC = wC.mg();
+           ik = Tk.Oe();
```

#### 379. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7602` → after: `L7602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7602) · [Before (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7602)

```diff
-             const zC = wC.skipPointerUpPicking || 0 === wC._registeredActions && !this._checkForPicking() && !wC.onPointerUp ? null : wC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, wC.pointerUpPredicate, wC.pointerUpFastCheck, wC.cameraToUseForPointers, wC.pointerU … [truncated]
+             const Fk = Tk.skipPointerUpPicking || 0 === Tk._registeredActions && !this._checkForPicking() && !Tk.onPointerUp ? null : Tk.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, Tk.pointerUpPredicate, Tk.pointerUpFastCheck, Tk.cameraToUseForPointers, Tk.pointerU … [truncated]
```

#### 380. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7609-L7610` → after: `L7609-L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7609-L7610) · [Before (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7609-L7610)

```diff
-               ZC = JC.b.POINTERTAP,
-               QC = new JC.h(ZC, zC, this._currentPickResult);
+               Ik = sk.d.POINTERTAP,
+               Xk = new sk.j(Ik, Fk, this._currentPickResult);
```

#### 381. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7617` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7617) · [Before (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7617)

```diff
-             nC = CC.hasSpecificMask(JC.b.POINTERPICK) || zC.hasSpecificMask(JC.b.POINTERPICK) || CC.hasSpecificMask(JC.b.POINTERTAP) || zC.hasSpecificMask(JC.b.POINTERTAP) || CC.hasSpecificMask(JC.b.POINTERDOUBLETAP) || zC.hasSpecificMask(JC.b.POINTERDOUBLETAP);
+             yk = kk.hasSpecificMask(sk.d.POINTERPICK) || Fk.hasSpecificMask(sk.d.POINTERPICK) || kk.hasSpecificMask(sk.d.POINTERTAP) || Fk.hasSpecificMask(sk.d.POINTERTAP) || kk.hasSpecificMask(sk.d.POINTERDOUBLETAP) || Fk.hasSpecificMask(sk.d.POINTERDOUBLETAP);
```

#### 382. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7624)

```diff
-               if (oC || (oC = !CC.hasSpecificMask(JC.b.POINTERDOUBLETAP) && !zC.hasSpecificMask(JC.b.POINTERDOUBLETAP), oC && !IC.HasSpecificTrigger(6) && (bC = this._initActionManager(bC, wC), bC && (oC = !bC.hasSpecificTrigger(6)))), oC)(Date.now() - this._previousStartingPoint … [truncated]
+               if (ak || (ak = !kk.hasSpecificMask(sk.d.POINTERDOUBLETAP) && !Fk.hasSpecificMask(sk.d.POINTERDOUBLETAP), ak && !Vk.HasSpecificTrigger(6) && (ik = this._initActionManager(ik, Tk), ik && (ak = !ik.hasSpecificTrigger(6)))), ak)(Date.now() - this._previousStartingPoint … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7633-L7634` → after: `L7633-L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7633-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7633-L7634) · [Before (L7633-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7633-L7634)

```diff
-               let qC = CC.hasSpecificMask(JC.b.POINTERDOUBLETAP) || zC.hasSpecificMask(JC.b.POINTERDOUBLETAP);
-               !qC && IC.HasSpecificTrigger(6) && (bC = this._initActionManager(bC, wC), bC && (qC = bC.hasSpecificTrigger(6))), qC && (nC === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < tC.DoubleClickDelay && !this._doubleClickOccured ? (wC.has … [truncated]
+               let qk = kk.hasSpecificMask(sk.d.POINTERDOUBLETAP) || Fk.hasSpecificMask(sk.d.POINTERDOUBLETAP);
+               !qk && Vk.HasSpecificTrigger(6) && (ik = this._initActionManager(ik, Tk), ik && (qk = ik.hasSpecificTrigger(6))), qk && (yk === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < dk.DoubleClickDelay && !this._doubleClickOccured ? (Tk.has … [truncated]
```

#### 384. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7645` → after: `L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7645) · [Before (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7645)

```diff
-             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > tC.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > tC.DragMovementThreshold), bC.isPointerLo … [truncated]
+             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > dk.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > dk.DragMovementThreshold), ik.isPointerLo … [truncated]
```

#### 385. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7647` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7647) · [Before (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7647)

```diff
-           if (wC.skipPointerMovePicking) return void this._processPointerMove(new MC.c, CC);
+           if (Tk.skipPointerMovePicking) return void this._processPointerMove(new jk.b, kk);
```

#### 386. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7661-L7662` → after: `L7661-L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7661-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7661-L7662) · [Before (L7661-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7661-L7662)

```diff
-                     ZC = JC.b.POINTERTAP,
-                     bC = new JC.h(ZC, zC, this._currentPickResult);
+                     Ik = sk.d.POINTERTAP,
+                     ik = new sk.j(Ik, Fk, this._currentPickResult);
```

#### 387. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7664` → after: `L7664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7664) · [Before (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7664)

```diff
-                 } if (this._updatePointerPosition(CC), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = CC.button), wC.preventDefaultOnPointerDown && QC && (CC.preventDefault(), QC.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosi … [truncated]
+                 } if (this._updatePointerPosition(kk), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = kk.button), Tk.preventDefaultOnPointerDown && Xk && (kk.preventDefault(), Xk.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosi … [truncated]
```

#### 388. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7667` → after: `L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7667) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7667)

```diff
-           this._pointerCaptures[CC.pointerId] = !0, wC.pointerDownPredicate || (wC.pointerDownPredicate = CC => CC.tS && CC.isVisible && CC.isReady() && CC.isEnabled() && (!wC.cameraToUseForPointers || 0 !== (wC.cameraToUseForPointers.layerMask & CC.layerMask))), this._pickedDown … [truncated]
+           this._pointerCaptures[kk.pointerId] = !0, Tk.pointerDownPredicate || (Tk.pointerDownPredicate = kk => kk.gw && kk.isVisible && kk.isReady() && kk.isEnabled() && (!Tk.cameraToUseForPointers || 0 !== (Tk.cameraToUseForPointers.layerMask & kk.layerMask))), this._pickedDown … [truncated]
```

#### 389. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7671-L7672` → after: `L7671-L7672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7671-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7671-L7672) · [Before (L7671-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7671-L7672)

```diff
-               if (this._checkPrePointerObservable(null, CC, JC.b.POINTERUP)) return this._swipeButtonPressed === CC.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === CC.buttons && (this._pointerCaptures[CC.pointerId] = !1));
-               zC.hasSwiped || (zC.singleClick && wC.onPrePointerObservable.hasSpecificMask(JC.b.POINTERTAP) && this._checkPrePointerObservable(null, CC, JC.b.POINTERTAP) && (this._skipPointerTap = !0), zC.PF && wC.onPrePointerObservable.hasSpecificMask(JC.b.POINTERDOUBLETAP) && t … [truncated]
+               if (this._checkPrePointerObservable(null, kk, sk.d.POINTERUP)) return this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1));
+               Fk.hasSwiped || (Fk.singleClick && Tk.onPrePointerObservable.hasSpecificMask(sk.d.POINTERTAP) && this._checkPrePointerObservable(null, kk, sk.d.POINTERTAP) && (this._skipPointerTap = !0), Fk.lL && Tk.onPrePointerObservable.hasSpecificMask(sk.d.POINTERDOUBLETAP) && t … [truncated]
```

#### 390. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7674` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7674) · [Before (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7674)

```diff
-             this._pointerCaptures[CC.pointerId] ? (0 === CC.buttons && (this._pointerCaptures[CC.pointerId] = !1), (wC.cameraToUseForPointers || wC.activeCamera) && (wC.pointerUpPredicate || (wC.pointerUpPredicate = CC => CC.tS && CC.isVisible && CC.isReady() && CC.isEnabled() && … [truncated]
+             this._pointerCaptures[kk.pointerId] ? (0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1), (Tk.cameraToUseForPointers || Tk.activeCamera) && (Tk.pointerUpPredicate || (Tk.pointerUpPredicate = kk => kk.gw && kk.isVisible && kk.isReady() && kk.isEnabled() && … [truncated]
```

#### 391. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7677` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7677) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7677)

```diff
-           const zC = mC.c.KEYDOWN;
+           const Fk = pk.d.KEYDOWN;
```

#### 392. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7679)

```diff
-             const ZC = new mC.g(zC, CC);
+             const Ik = new pk.f(Fk, kk);
```

#### 393. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7683` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7683) · [Before (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7683)

```diff
-             const ZC = new mC.h(zC, CC);
+             const Ik = new pk.i(Fk, kk);
```

#### 394. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7688)

```diff
-           const zC = mC.c.KEYUP;
+           const Fk = pk.d.KEYUP;
```

#### 395. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7690)

```diff
-             const ZC = new mC.g(zC, CC);
+             const Ik = new pk.f(Fk, kk);
```

#### 396. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7694` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7694) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7694)

```diff
-             const ZC = new mC.h(zC, CC);
+             const Ik = new pk.i(Fk, kk);
```

#### 397. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7737-L7739` → after: `L7737-L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7737-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7737-L7739) · [Before (L7737-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7737-L7739)

```diff
-     var DC = ZC(39766),
-       jC = ZC(37142),
-       yC = ZC(37590);
+     var Yk = Ik(39947),
+       Ak = Ik(37331),
+       gk = Ik(37780);
```

#### 398. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7747-L7749` → after: `L7747-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7747-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7747-L7749) · [Before (L7747-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7747-L7749)

```diff
-     var UC = ZC(39865),
-       BC = ZC(40022),
-       OC = ZC(36971);
+     var hk = Ik(40038),
+       rk = Ik(40195),
+       Dk = Ik(37166);
```

#### 399. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7755-L7756` → after: `L7755-L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7755-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7755-L7756) · [Before (L7755-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7755-L7756)

```diff
-     var VC, Cz, zz, Zz, Qz, wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz, Rz, Az, xz, Jz, Iz, iz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, sz, Tz, az, tz, Dz, jz, yz, Lz, Uz, Bz, Oz, kz, Vz, CZ = ZC(38507),
-       zZ = ZC(37002);
+     var kF, FF, IF, XF, TF, iF, yF, lF, aF, qF, LF, tF, ZF, jF, eF, wF, HF, JF, xF, PF, KF, QF, sF, VF, zF, SF, oF, vF, EF, OF, nF, GF, pF, uF, bF, RF, UF, CF, NF, cF, WF, fF, BF, dF, YF, AF, gF, mF, hF, rF, DF, MF, kI, FI = Ik(38674),
+       II = Ik(37201);
```

#### 400. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7765` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7765) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7765)

```diff
-         throw (0, xC.i)("StandardMaterial")
+         throw (0, Qk.j)("StandardMaterial")
```

#### 401. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7768` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7768) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7768)

```diff
-         throw (0, xC.i)("DefaultCollisionCoordinator")
+         throw (0, Qk.j)("DefaultCollisionCoordinator")
```

#### 402. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7834` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7834) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7834)

```diff
-         this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
+         this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
```

#### 403. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7930` → after: `L7930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7930) · [Before (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7930)

```diff
-         return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? FC.r.ZeroReadOnly
+         return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Lk.t.ZeroReadOnly
```

#### 404. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7994` → after: `L7994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7994) · [Before (L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L7994)

```diff
-         this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), CC && (this._unObserveActiveCameras = (0, OC.i)(CC, (() => {
+         this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), kk && (this._unObserveActiveCameras = (0, Dk.f)(kk, (() => {
```

#### 405. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8047` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8047) · [Before (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8047)

```diff
-       sZC(CC) {
+       AIk(kk) {
```

#### 406. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8061` → after: `L8061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8061) · [Before (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8061)

```diff
-         this._inputManager = new tC(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new jC.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new nC.d, … [truncated]
+         this._inputManager = new dk(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Ak.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new yk.e, … [truncated]
```

#### 407. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8067` → after: `L8067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8067) · [Before (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8067)

```diff
-         }, this.onReadyTimeoutObservable = new nC.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipp … [truncated]
+         }, this.onReadyTimeoutObservable = new yk.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipp … [truncated]
```

#### 408. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8077` → after: `L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8077) · [Before (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8077)

```diff
-         this.defaultCameraLayerMask = ZC.defaultCameraLayerMask, this.defaultRenderableLayerMask = ZC.defaultRenderableLayerMask, CC = this._engine = CC || AC.c.LastCreatedEngine, ZC.virtual ? CC._virtualScenes.push(this) : (AC.c._LastCreatedScene = this, CC.scenes.push(this)), ( … [truncated]
+         this.defaultCameraLayerMask = Ik.defaultCameraLayerMask, this.defaultRenderableLayerMask = Ik.defaultRenderableLayerMask, kk = this._engine = kk || Kk.e.LastCreatedEngine, Ik.virtual ? kk._virtualScenes.push(this) : (Kk.e._LastCreatedScene = this, kk.scenes.push(this)), ( … [truncated]
```

#### 409. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8086` → after: `L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8086) · [Before (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8086)

```diff
-         return this._defaultSubMeshCandidates.data = CC.Zx, this._defaultSubMeshCandidates.length = CC.Zx.length, this._defaultSubMeshCandidates
+         return this._defaultSubMeshCandidates.data = kk.lK, this._defaultSubMeshCandidates.length = kk.lK.length, this._defaultSubMeshCandidates
```

#### 410. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8189` → after: `L8189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8189) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8189)

```diff
-         const ZC = this.mg(),
+         const Ik = this.Oe(),
```

#### 411. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8195` → after: `L8195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8195) · [Before (L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8195)

```diff
-           if (!QC.Zx || 0 === QC.Zx.length) continue;
+           if (!Xk.lK || 0 === Xk.lK.length) continue;
```

#### 412. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8208-L8209` → after: `L8208-L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8208-L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8208-L8209) · [Before (L8208-L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8208-L8209)

```diff
-               for (const CC of QC.Zx) {
-                 const zC = CC.cg();
+               for (const kk of Xk.lK) {
+                 const Fk = kk.Ue();
```

#### 413. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8227` → after: `L8227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8227) · [Before (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8227)

```diff
-         for (const bC of this.Ix) bC.isReady() || (wC = !1);
+         for (const ik of this.jK) ik.isReady() || (Tk = !1);
```

#### 414. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8301-L8302` → after: `L8301-L8302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8301-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8301-L8302) · [Before (L8301-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8301-L8302)

```diff
-         if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = bC.b.Now;
-         else if (this.onReadyTimeoutDuration > 0 && bC.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
+         if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = ik.d.Now;
+         else if (this.onReadyTimeoutDuration > 0 && ik.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
```

#### 415. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8312` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8312) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8312)

```diff
-         this._animationTimeLast = bC.b.Now
+         this._animationTimeLast = ik.d.Now
```

#### 416. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8327` → after: `L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8327) · [Before (L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8327)

```diff
-         this._multiviewSceneUboIsActive = !!(ZC && QC && this._multiviewSceneUbo), this._viewUpdateFlag === CC.updateFlag && this._projectionUpdateFlag === zC.updateFlag || (this._viewUpdateFlag = CC.updateFlag, this._projectionUpdateFlag = zC.updateFlag, this._viewMatrix = CC, t … [truncated]
+         this._multiviewSceneUboIsActive = !!(Ik && Xk && this._multiviewSceneUbo), this._viewUpdateFlag === kk.updateFlag && this._projectionUpdateFlag === Fk.updateFlag || (this._viewUpdateFlag = kk.updateFlag, this._projectionUpdateFlag = Fk.updateFlag, this._viewMatrix = kk, t … [truncated]
```

#### 417. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8333-L8334` → after: `L8333-L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8333-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8333-L8334) · [Before (L8333-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8333-L8334)

```diff
-         const ZC = "boolean" === typeof zC ? zC : zC?.trackUBOsInFrame,
-           QC = new NC.c(this._engine, void 0, !1, CC ?? "sS", void 0, ZC);
+         const Ik = "boolean" === typeof Fk ? Fk : Fk?.trackUBOsInFrame,
+           Xk = new Zk.c(this._engine, void 0, !1, kk ?? "Yw", void 0, Ik);
```

#### 418. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8344` → after: `L8344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8344) · [Before (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8344)

```diff
-         return this.floatingOriginMode ? this._eyePosition : FC.r.ZeroReadOnly
+         return this.floatingOriginMode ? this._eyePosition : Lk.t.ZeroReadOnly
```

#### 419. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8349` → after: `L8349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8349) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8349)

```diff
-       zQC(CC) {
+       lXk(kk) {
```

#### 420. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8355)

```diff
-           for (const CC of zC) this.zQC(CC)
+           for (const kk of Fk) this.lXk(kk)
```

#### 421. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8363` → after: `L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8363) · [Before (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8363)

```diff
-           for (const CC of zC) this.IH(CC)
+           for (const kk of Fk) this.zp(kk)
```

#### 422. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8368` → after: `L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8368) · [Before (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8368)

```diff
-         this._blockEntityCollection || CC.Km() === this && -1 !== CC._indexInSceneTransformNodesArray || (CC._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(CC), CC.parent || CC._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
+         this._blockEntityCollection || kk.mG() === this && -1 !== kk._indexInSceneTransformNodesArray || (kk._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(kk), kk.parent || kk._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
```

#### 423. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8405-L8406` → after: `L8405-L8406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8405-L8406) · [Before (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8405-L8406)

```diff
-         const zC = this.Ix.indexOf(CC);
-         return -1 !== zC && (this.Ix.splice(zC, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(CC), zC
+         const Fk = this.jK.indexOf(kk);
+         return -1 !== Fk && (this.jK.splice(Fk, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(kk), Fk
```

#### 424. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8466` → after: `L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8466) · [Before (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8466)

```diff
-         this.requireLightSorting && this.lights.sort(BC.c.CompareLightsPriority)
+         this.requireLightSorting && this.lights.sort(rk.b.CompareLightsPriority)
```

#### 425. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8479` → after: `L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8479) · [Before (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8479)

```diff
-         this._blockEntityCollection || (this.Ix.push(CC), wC.d.SetImmediate((() => {
+         this._blockEntityCollection || (this.jK.push(kk), Tk.d.SetImmediate((() => {
```

#### 426. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8497` → after: `L8497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8497) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8497)

```diff
-         this._blockEntityCollection || CC.Km() === this && -1 !== CC._indexInSceneMaterialArray || (CC._indexInSceneMaterialArray = this.materials.length, this.materials.push(CC), wC.d.SetImmediate((() => {
+         this._blockEntityCollection || kk.mG() === this && -1 !== kk._indexInSceneMaterialArray || (kk._indexInSceneMaterialArray = this.materials.length, this.materials.push(kk), Tk.d.SetImmediate((() => {
```

#### 427. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8644-L8645` → after: `L8644-L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8644-L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8644-L8645) · [Before (L8644-L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8644-L8645)

```diff
-         for (let zC = 0; zC < this.Ix.length; zC++)
-           if (this.Ix[zC].id === CC) return this.Ix[zC];
+         for (let Fk = 0; Fk < this.jK.length; Fk++)
+           if (this.jK[Fk].id === kk) return this.jK[Fk];
```

#### 428. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8833` → after: `L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8833) · [Before (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8833)

```diff
-         return this._uid || (this._uid = QC.g.RandomId()), this._uid
+         return this._uid || (this._uid = Xk.h.RandomId()), this._uid
```

#### 429. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8852` → after: `L8852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8852) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8852)

```diff
-           const ZC = CC.cg();
+           const Ik = kk.Ue();
```

#### 430. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8895` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8895) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8895)

```diff
-           return this._freezeActiveMeshesCancel = (0, wC.g)((() => {
+           return this._freezeActiveMeshesCancel = (0, Tk.h)((() => {
```

#### 431. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8907` → after: `L8907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8907) · [Before (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8907)

```diff
-               ZC ? ZC(zC) : (CZ.c.Error(zC), CC && CZ.c.Error(CC))
+               Ik ? Ik(Fk) : (FI.e.Error(Fk), kk && FI.e.Error(kk))
```

#### 432. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8910` → after: `L8910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8910) · [Before (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8910)

```diff
-               ZC ? ZC(zC) : (CZ.c.Error(zC), CC && (CZ.c.Error(CC), CC.stack && CZ.c.Error(CC.stack)))
+               Ik ? Ik(Fk) : (FI.e.Error(Fk), kk && (FI.e.Error(kk), kk.stack && FI.e.Error(kk.stack)))
```

#### 433. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8959` → after: `L8959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8959) · [Before (L8959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8959)

```diff
-           ZC = DC.b.Enabled,
+           Ik = Yk.e.Enabled,
```

#### 434. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8963` → after: `L8963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8963) · [Before (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8963)

```diff
-             bC = !QC && !zC.ZH && !zC._internalMeshDataInfo?._LODLevels.length;
+             ik = !Xk && !Fk.rG && !Fk._internalMeshDataInfo?._LODLevels.length;
```

#### 435. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8965` → after: `L8965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8965) · [Before (L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8965)

```diff
-           if ((bC || (nC = zC._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), nC ? nC[1] = -1 : (nC = [zC, -1], zC._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, nC))), !zC.isBlocked) && (ZC && this._totalVertices.addCount(zC.getTotalVertices() … [truncated]
+           if ((ik || (yk = Fk._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), yk ? yk[1] = -1 : (yk = [Fk, -1], Fk._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, yk))), !Fk.isBlocked) && (Ik && this._totalVertices.addCount(Fk.getTotalVertices() … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8968` → after: `L8968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8968) · [Before (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8968)

```diff
-             if (fC !== zC && 0 !== fC.billboardMode && fC.computeWorldMatrix(), zC._preActivate(), zC.isVisible && zC.visibility > 0 && 0 !== (zC.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || zC.Hg || zC.isInFrustum(this._frustumPlanes))) {
+             if (lk !== Fk && 0 !== lk.billboardMode && lk.computeWorldMatrix(), Fk._preActivate(), Fk.isVisible && Fk.visibility > 0 && 0 !== (Fk.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Fk.ne || Fk.isInFrustum(this._frustumPlanes))) {
```

#### 437. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8973` → after: `L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8973) · [Before (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8973)

```diff
-               zC._activate(this._renderId, !1) && (zC.ZH ? zC._internalAbstractMeshDataInfo._actAsRegularMesh && (fC = zC) : fC._internalAbstractMeshDataInfo._onlyForInstances = !1, fC._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(zC, fC)), zC._postActivate()
+               Fk._activate(this._renderId, !1) && (Fk.rG ? Fk._internalAbstractMeshDataInfo._actAsRegularMesh && (lk = Fk) : lk._internalAbstractMeshDataInfo._onlyForInstances = !1, lk._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Fk, lk)), Fk._postActivate()
```

#### 438. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8979-L8980` → after: `L8979-L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8979-L8980) · [Before (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8979-L8980)

```diff
-           for (let CC = 0; CC < this.Ix.length; CC++) {
-             const zC = this.Ix[CC];
+           for (let kk = 0; kk < this.jK.length; kk++) {
+             const Fk = this.jK[kk];
```

#### 439. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8993-L8994` → after: `L8993-L8994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8993-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L8993-L8994) · [Before (L8993-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L8993-L8994)

```diff
-         let ZC = CC.yQC || CC.ZH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || zC.Hg;
-         if (zC && zC.Zx && zC.Zx.length > 0) {
+         let Ik = kk.rXk || kk.rG || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Fk.ne;
+         if (Fk && Fk.lK && Fk.lK.length > 0) {
```

#### 440. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9046)

```diff
-             QC.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
+             Xk.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
```

#### 441. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9056` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9056) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9056)

```diff
-             zC && CC && (zC.renderList.data = CC, zC.renderList.length = CC.length), QC.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+             Fk && kk && (Fk.renderList.data = kk, Fk.renderList.length = kk.length), Xk.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
```

#### 442. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9106` → after: `L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9106) · [Before (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9106)

```diff
-                   wC = QC.sQC(zC, CC.usePreciseIntersection),
+                   Tk = Xk.dXk(Fk, kk.usePreciseIntersection),
```

#### 443. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9126)

```diff
-           for (bC = Math.min(bC, wC); CC > 0 && QC < bC;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = zC * ZC, this._animate(zC), this.onAfterAnimationsObservable.notifyObservers(this), this.ku && this._advancePhysicsEngineStep(zC), this.onAfterStepO … [truncated]
+           for (ik = Math.min(ik, Tk); kk > 0 && Xk < ik;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Fk * Ik, this._animate(Fk), this.onAfterAnimationsObservable.notifyObservers(this), this.bC && this._advancePhysicsEngineStep(Fk), this.onAfterStepO … [truncated]
```

#### 444. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9130` → after: `L9130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9130) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9130)

```diff
-           this._animationRatio = .06 * CC, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.ku && this._advancePhysicsEngineStep(CC)
+           this._animationRatio = .06 * kk, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.bC && this._advancePhysicsEngineStep(kk)
```

#### 445. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9165)

```diff
-           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), QC.g.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
+           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Xk.h.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
```

#### 446. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9171` → after: `L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9171) · [Before (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9171)

```diff
-           QC.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+           Xk.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
```

#### 447. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9195` → after: `L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9195) · [Before (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9195)

```diff
-               ZC._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZC.isBlocked || (this._totalVertices.addCount(ZC.getTotalVertices(), !1), ZC.isReady() && ZC.isEnabled() && !ZC.sq.hasAZeroComponent && (ZC.computeWorldMatrix(CC), ZC.actionManager && ZC.actionManager.hasSpe … [truncated]
+               Ik._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Ik.isBlocked || (this._totalVertices.addCount(Ik.getTotalVertices(), !1), Ik.isReady() && Ik.isEnabled() && !Ik.ci.hasAZeroComponent && (Ik.computeWorldMatrix(kk), Ik.actionManager && Ik.actionManager.hasSpe … [truncated]
```

#### 448. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9198-L9199` → after: `L9198-L9199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9198-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9198-L9199) · [Before (L9198-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9198-L9199)

```diff
-               for (let CC = 0; CC < this.Ix.length; CC++) {
-                 const zC = this.Ix[CC];
+               for (let kk = 0; kk < this.jK.length; kk++) {
+                 const Fk = this.jK[kk];
```

#### 449. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9220` → after: `L9220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9220) · [Before (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9220)

```diff
-         if (this.GJ) return;
+         if (this.Hs) return;
```

#### 450. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9229` → after: `L9229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9229) · [Before (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9229)

```diff
-         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), pC.b.Km = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
+         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Hk.d.mG = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9248` → after: `L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9248) · [Before (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9248)

```diff
-             QC.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
+             Xk.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
```

#### 452. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9254` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9254) · [Before (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9254)

```diff
-             QC.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
+             Xk.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 453. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9291-L9292` → after: `L9291-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9291-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9291-L9292) · [Before (L9291-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9291-L9292)

```diff
-         if (this.GJ) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+         if (this.Hs) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9301` → after: `L9301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9301) · [Before (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9301)

```diff
-           this.Tm.notifyObservers(this)
+           this.hG.notifyObservers(this)
```

#### 455. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9303)

```diff
-           CZ.c.Error("An error occurred while calling onDisposeObservable!", wC)
+           FI.e.Error("An error occurred while calling onDisposeObservable!", Tk)
```

#### 456. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9311` → after: `L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9311) · [Before (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9311)

```diff
-         this._disposeList(ZC), this._disposeList(this.Ix), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
+         this._disposeList(Ik), this._disposeList(this.jK), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
```

#### 457. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9313-L9315` → after: `L9313-L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9313-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9313-L9315) · [Before (L9313-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9313-L9315)

```diff
-         if (QC > -1 && this._engine.scenes.splice(QC, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, pC.g)(), AC.c._LastCreatedScene === this) {
-           AC.c._LastCreatedScene = null;
-           let CC = AC.c.Instances.length - 1;
+         if (Xk > -1 && this._engine.scenes.splice(Xk, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Hk.h)(), Kk.e._LastCreatedScene === this) {
+           Kk.e._LastCreatedScene = null;
+           let kk = Kk.e.Instances.length - 1;
```

#### 458. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9317` → after: `L9317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9317) · [Before (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9317)

```diff
-             const zC = AC.c.Instances[CC];
+             const Fk = Kk.e.Instances[kk];
```

#### 459. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9319` → after: `L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9319) · [Before (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9319)

```diff
-               AC.c._LastCreatedScene = zC.scenes[this._engine.scenes.length - 1];
+               Kk.e._LastCreatedScene = Fk.scenes[this._engine.scenes.length - 1];
```

#### 460. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9325` → after: `L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9325) · [Before (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9325)

```diff
-         QC = this._engine._virtualScenes.indexOf(this), QC > -1 && this._engine._virtualScenes.splice(QC, 1), this._engine.wipeCaches(!0), this.Tm.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
+         Xk = this._engine._virtualScenes.indexOf(this), Xk > -1 && this._engine._virtualScenes.splice(Xk, 1), this._engine.wipeCaches(!0), this.hG.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 461. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9348-L9349` → after: `L9348-L9349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9348-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9348-L9349) · [Before (L9348-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9348-L9349)

```diff
-         const zC = new FC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           ZC = new FC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const Fk = new Lk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           Ik = new Lk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 462. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9353-L9354` → after: `L9353-L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9353-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9353-L9354) · [Before (L9353-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9353-L9354)

```diff
-           if (wC.computeWorldMatrix(!0), !wC.Zx || 0 === wC.Zx.length || wC.infiniteDistance) continue;
-           const CC = wC.WE(),
+           if (Tk.computeWorldMatrix(!0), !Tk.lK || 0 === Tk.lK.length || Tk.infiniteDistance) continue;
+           const kk = Tk.vR(),
```

#### 463. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9357` → after: `L9357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9357) · [Before (L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9357)

```diff
-           FC.r.CheckExtends(QC, zC, ZC), FC.r.CheckExtends(bC, zC, ZC)
+           Lk.t.CheckExtends(Xk, Fk, Ik), Lk.t.CheckExtends(ik, Fk, Ik)
```

#### 464. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9360-L9361` → after: `L9360-L9361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9360-L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9360-L9361) · [Before (L9360-L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9360-L9361)

```diff
-           min: FC.r.Zero(),
-           max: FC.r.Zero()
+           min: Lk.t.Zero(),
+           max: Lk.t.Zero()
```

#### 465. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9368` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9368) · [Before (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9368)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 466. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9371)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 467. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9374` → after: `L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9374) · [Before (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9374)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 468. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9377` → after: `L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9377) · [Before (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9377)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 469. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9380-L9381` → after: `L9380-L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9380-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9380-L9381) · [Before (L9380-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9380-L9381)

```diff
-         const nC = (0, xC.i)("Ray", !0);
-         return nC && CZ.c.Warn(nC), new MC.c
+         const yk = (0, Qk.j)("Ray", !0);
+         return yk && FI.e.Warn(yk), new jk.b
```

#### 470. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9384-L9385` → after: `L9384-L9385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9384-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9384-L9385) · [Before (L9384-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9384-L9385)

```diff
-         const bC = (0, xC.i)("Ray", !0);
-         return bC && CZ.c.Warn(bC), new MC.c
+         const ik = (0, Qk.j)("Ray", !0);
+         return ik && FI.e.Warn(ik), new jk.b
```

#### 471. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9388` → after: `L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9388) · [Before (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9388)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 472. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9391)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 473. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9394` → after: `L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9394) · [Before (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9394)

```diff
-         throw (0, xC.i)("Ray")
+         throw (0, Qk.j)("Ray")
```

#### 474. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9407` → after: `L9407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9407) · [Before (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9407)

```diff
-         for (const CC of this.Ix) CC.rebuild();
+         for (const kk of this.jK) kk.rebuild();
```

#### 475. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9420` → after: `L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9420) · [Before (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9420)

```diff
-           qC.e && qC.e.MatchesQuery(bC, zC) && (!ZC || ZC(bC)) && QC.push(bC)
+           qk.d && qk.d.MatchesQuery(ik, Fk) && (!Ik || Ik(ik)) && Xk.push(ik)
```

#### 476. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9464` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9464) · [Before (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9464)

```diff
-           for (const ZC of this.materials) zC && !zC(ZC) || ZC.YzC(CC)
+           for (const Ik of this.materials) Fk && !Fk(Ik) || Ik.UFk(kk)
```

#### 477. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9467` → after: `L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9467) · [Before (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9467)

```diff
-         const fC = (0, UC.i)(CC, zC, ZC, QC ? this.offlineProvider : void 0, wC, bC, nC);
+         const lk = (0, hk.p)(kk, Fk, Ik, Xk ? this.offlineProvider : void 0, Tk, ik, yk);
```

#### 478. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9483)

```diff
-         const QC = `${CC}|${zC?"binary":"string"}`;
+         const Xk = `${kk}|${Fk?"binary":"string"}`;
```

#### 479. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9498` → after: `L9498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9498) · [Before (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9498)

```diff
-         const fC = (0, UC.r)(CC, zC, ZC, QC ? this.offlineProvider : void 0, wC, bC, nC);
+         const lk = (0, hk.z)(kk, Fk, Ik, Xk ? this.offlineProvider : void 0, Tk, ik, yk);
```

#### 480. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9513)

```diff
-         const bC = (0, UC.o)(CC, zC, ZC, QC, wC);
+         const ik = (0, hk.w)(kk, Fk, Ik, Xk, Tk);
```

#### 481. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9528` → after: `L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9528) · [Before (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9528)

```diff
-         throw (0, xC.i)("performanceViewerSceneExtension")
+         throw (0, Qk.j)("performanceViewerSceneExtension")
```

#### 482. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9598-L9599` → after: `L9598-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9598-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9598-L9599) · [Before (L9598-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9598-L9599)

```diff
-       nZ || (nZ = !0, (0, zZ.d)("BABYLON.Scene", bZ))
-     }(VC = bZ.prototype).sortActiveAnimatables ?? (VC.sortActiveAnimatables = (0, xC.f)("Scene", "sortActiveAnimatables")), (Cz = bZ.prototype).beginWeightedAnimation ?? (Cz.beginWeightedAnimation = (0, xC.f)("Scene", "beginWeightedAnimation")), (zz = bZ.prototype).beginAnimation … [truncated]
+       lI || (lI = !0, (0, II.f)("BABYLON.Scene", yI))
+     }(kF = yI.prototype).sortActiveAnimatables ?? (kF.sortActiveAnimatables = (0, Qk.h)("Scene", "sortActiveAnimatables")), (FF = yI.prototype).beginWeightedAnimation ?? (FF.beginWeightedAnimation = (0, Qk.h)("Scene", "beginWeightedAnimation")), (IF = yI.prototype).beginAnimation … [truncated]
```

#### 483. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9601` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9601) · [Before (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9601)

```diff
-   39990: (CC, zC, ZC) => {
+   40166: (kk, Fk, Ik) => {
```

#### 484. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9607` → after: `L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9607) · [Before (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9607)

```diff
-     QC.NAME_EFFECTLAYER = "EffectLayer", QC.NAME_LAYER = "Layer", QC.NAME_LENSFLARESYSTEM = "LensFlareSystem", QC.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", QC.NAME_PARTICLESYSTEM = "ParticleSystem", QC.NAME_GAMEPAD = "Gamepad", QC.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
+     Xk.NAME_EFFECTLAYER = "EffectLayer", Xk.NAME_LAYER = "Layer", Xk.NAME_LENSFLARESYSTEM = "LensFlareSystem", Xk.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Xk.NAME_PARTICLESYSTEM = "ParticleSystem", Xk.NAME_GAMEPAD = "Gamepad", Xk.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9631)

```diff
-   39811: (CC, zC, ZC) => {
+   40003: (kk, Fk, Ik) => {
```

#### 486. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9637` → after: `L9637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9637) · [Before (L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9637)

```diff
-       o: () => bC
+       q: () => ik
```

#### 487. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9645` → after: `L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9645) · [Before (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9645)

```diff
-       for (var fC, oC = QC.kind, qC = "getter" === oC ? "get" : "setter" === oC ? "set" : "value", FC = !zC && CC ? QC.static ? CC : CC.prototype : null, WC = zC || (FC ? Object.getOwnPropertyDescriptor(FC, QC.name) : {}), NC = !1, MC = ZC.length - 1; MC >= 0; MC--) {
+       for (var lk, ak = Xk.kind, qk = "getter" === ak ? "get" : "setter" === ak ? "set" : "value", Lk = !Fk && kk ? Xk.static ? kk : kk.prototype : null, tk = Fk || (Lk ? Object.getOwnPropertyDescriptor(Lk, Xk.name) : {}), Zk = !1, jk = Ik.length - 1; jk >= 0; jk--) {
```

#### 488. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9668)

```diff
-       return QC ? ZC : void 0
+       return Xk ? Ik : void 0
```

#### 489. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9682-L9683` → after: `L9682-L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9682-L9683) · [Before (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9682-L9683)

```diff
-       if ("function" === typeof zC ? CC !== zC || !QC : !zC.has(CC)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === ZC ? QC : "a" === ZC ? QC.call(CC) : QC ? QC.value : zC.get(CC)
+       if ("function" === typeof Fk ? kk !== Fk || !Xk : !Fk.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
+       return "m" === Ik ? Xk : "a" === Ik ? Xk.call(kk) : Xk ? Xk.value : Fk.get(kk)
```

#### 490. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9689-L9690` → after: `L9689-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L9689-L9690) · [Before (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/252.js#L9689-L9690)

```diff
-       if ("function" === typeof zC ? CC !== zC || !wC : !zC.has(CC)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === QC ? wC.call(CC, ZC) : wC ? wC.value = ZC : zC.set(CC, ZC), ZC
+       if ("function" === typeof Fk ? kk !== Fk || !Tk : !Fk.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
+       return "a" === Xk ? Tk.call(kk, Ik) : Tk ? Tk.value = Ik : Fk.set(kk, Ik), Ik
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/253.js#L4)

```diff
-   39674: (CC, zC, ZC) => {
+   39837: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/253.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/253.js#L21)

```diff
-   60938: (CC, zC, ZC) => {
+   61285: (kk, Fk, Ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/253.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/253.js#L25)

```diff
-     var QC = ZC(39674);
+     var Xk = Ik(39837);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (91 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L4)

```diff
-   39882: (CC, zC, ZC) => {
+   40056: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L7-L8` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L8-L9) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L7-L8)

```diff
-       g: () => WC,
-       h: () => oC,
+       d: () => ak,
+       f: () => jk,
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L11-L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L11-L12)

```diff
-       m: () => fC,
-       o: () => FC
+       l: () => Lk
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L14-L15)

```diff
-     var QC = ZC(38507),
-       wC = ZC(39889);
+     var Xk = Ik(38674),
+       Tk = Ik(40064);
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L21)

```diff
-           return QC && (zC = Math.max(zC / 127, -1)), zC
+           return Xk && (Fk = Math.max(Fk / 127, -1)), Fk
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L25)

```diff
-           return QC && (zC /= 255), zC
+           return Xk && (Fk /= 255), Fk
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L29)

```diff
-           return QC && (zC = Math.max(zC / 32767, -1)), zC
+           return Xk && (Fk = Math.max(Fk / 32767, -1)), Fk
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L33)

```diff
-           return QC && (zC /= 65535), zC
+           return Xk && (Fk /= 65535), Fk
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L36)

```diff
-           return (0, wC.e)(CC.getUint16(ZC, !0));
+           return (0, Tk.c)(kk.getUint16(Ik, !0));
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L44)

```diff
-           throw new Error(`Invalid component type ${zC}`)
+           throw new Error(`Invalid component type ${Fk}`)
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L63)

```diff
-           CC.setUint16(ZC, (0, wC.k)(bC), !0);
+           kk.setUint16(Ik, (0, Tk.i)(ik), !0);
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L75)

```diff
-           throw new Error(`Invalid component type ${zC}`)
+           throw new Error(`Invalid component type ${Fk}`)
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L93)

```diff
-           throw new Error(`Invalid type '${CC}'`)
+           throw new Error(`Invalid type '${kk}'`)
```

#### 14. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L137)

```diff
-           return 0 !== (3 & zC) && (QC.c.Warn("Float array must be aligned to 4-bytes border"), FC = !0), FC ? new Float32Array(CC.buffer.slice(zC, zC + NC * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(CC.buffer, zC, NC)
+           return 0 !== (3 & Fk) && (Xk.e.Warn("Float array must be aligned to 4-bytes border"), Lk = !0), Lk ? new Float32Array(kk.buffer.slice(Fk, Fk + Zk * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(kk.buffer, Fk, Zk)
```

#### 15. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L164)

```diff
-               throw new Error(`Invalid component type '${CC}'`)
+               throw new Error(`Invalid component type '${kk}'`)
```

#### 16. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L195)

```diff
-       return 1 !== FC && 0 !== (gC & FC - 1) && (QC.c.Warn("Array must be aligned to border of element size. Data will be copied."), qC = !0), qC ? new WC(MC.slice(gC, gC + NC * FC)) : new WC(MC, gC, NC)
+       return 1 !== Lk && 0 !== (ek & Lk - 1) && (Xk.e.Warn("Array must be aligned to border of element size. Data will be copied."), qk = !0), qk ? new tk(jk.slice(ek, ek + Zk * Lk)) : new tk(jk, ek, Zk)
```

#### 17. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L208)

```diff
-         if (0 !== (3 & zC)) return QC.c.Warn("Float array must be aligned to 4-bytes border"), void FC.set(new Float32Array(CC.buffer.slice(zC, zC + NC * Float32Array.BYTES_PER_ELEMENT)));
+         if (0 !== (3 & Fk)) return Xk.e.Warn("Float array must be aligned to 4-bytes border"), void Lk.set(new Float32Array(kk.buffer.slice(Fk, Fk + Zk * Float32Array.BYTES_PER_ELEMENT)));
```

#### 18. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L237)

```diff
-   39703: (CC, zC, ZC) => {
+   39872: (kk, Fk, Ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L240-L243` → after: `L241-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L241-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L241-L243) · [Before (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L240-L243)

```diff
-       f: () => JC,
-       n: () => IC,
-       j: () => mC,
-       o: () => HC
+       k: () => Vk,
+       g: () => pk,
+       n: () => uk
```

#### 20. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L339)

```diff
-             zC.length -= 2, zC.push(`(${QC}${ZC}${CC})`)
+             Fk.length -= 2, Fk.push(`(${Xk}${Ik}${kk})`)
```

#### 21. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L442-L443` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L442-L443) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L442-L443)

```diff
-     var NC = ZC(39694),
-       MC = ZC(39692);
+     var Zk = Ik(39863),
+       jk = Ik(39860);
```

#### 22. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L463)

```diff
-             const ZC = zC.shouldUseHighPrecisionShader; - 1 === CC.indexOf("precision highp float") ? CC = ZC ? "precision highp float;\n" + CC : "precision mediump float;\n" + CC : ZC || (CC = CC.replace("precision highp float", "precision mediump float"));
+             const Ik = Fk.shouldUseHighPrecisionShader; - 1 === kk.indexOf("precision highp float") ? kk = Ik ? "precision highp float;\n" + kk : "precision mediump float;\n" + kk : Ik || (kk = kk.replace("precision highp float", "precision mediump float"));
```

#### 23. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L517)

```diff
-           const QC = "&&" == wC ? new FC : new qC;
+           const Xk = "&&" == Tk ? new Lk : new qk;
```

#### 24. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L553)

```diff
-                 QC.children.push(nC), hC(CC, QC, nC, ZC);
+                 Xk.children.push(yk), Ek(kk, Xk, yk, Ik);
```

#### 25. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L565)

```diff
-                 QC.children.push(nC), hC(CC, QC, nC, ZC);
+                 Xk.children.push(yk), Ek(kk, Xk, yk, Ik);
```

#### 26. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L571)

```diff
-                 zC.children.push(QC), QC.children.push(nC), hC(CC, QC, nC, ZC);
+                 Fk.children.push(Xk), Xk.children.push(yk), Ek(kk, Xk, yk, Ik);
```

#### 27. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L600)

```diff
-       return 0 === CC.processor?.shaderLanguage && (QC.GL_ES = "true"), QC.__VERSION__ = CC.version, QC[CC.platformName] = "true", (0, MC.l)(QC, zC?.isNDCHalfZRange, zC?.BZC, zC?.useExactSrgbConversions), QC
+       return 0 === kk.processor?.shaderLanguage && (Xk.GL_ES = "true"), Xk.__VERSION__ = kk.version, Xk[kk.platformName] = "true", (0, jk.i)(Xk, Fk?.isNDCHalfZRange, Fk?.IXk, Fk?.useExactSrgbConversions), Xk
```

#### 28. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L651)

```diff
-         throw (0, NC.i)("FileTools")
+         throw (0, Zk.j)("FileTools")
```

#### 29. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L655)

```diff
-   39692: (CC, zC, ZC) => {
+   39860: (kk, Fk, Ik) => {
```

#### 30. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L658-L660` → after: `L658-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L658-L660) · [Before (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L658-L660)

```diff
-       h: () => bC,
-       l: () => fC,
-       n: () => nC,
+       f: () => ik,
+       i: () => lk,
+       k: () => yk,
```

#### 31. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L663)

```diff
-     var QC = ZC(39694);
+     var Xk = Ik(39863);
```

#### 32. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L672)

```diff
-       if (!qC) throw (0, QC.i)("FileTools");
+       if (!qk) throw (0, Xk.j)("FileTools");
```

#### 33. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L690)

```diff
-           return QC && CC.set(new Int8Array(QC)), CC
+           return Xk && kk.set(new Int8Array(Xk)), kk
```

#### 34. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L694)

```diff
-           return QC && CC.set(new Uint8Array(QC)), CC
+           return Xk && kk.set(new Uint8Array(Xk)), kk
```

#### 35. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L698)

```diff
-           return QC && CC.set(new Int16Array(QC)), CC
+           return Xk && kk.set(new Int16Array(Xk)), kk
```

#### 36. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L706)

```diff
-           return QC && CC.set(new Uint16Array(QC)), CC
+           return Xk && kk.set(new Uint16Array(Xk)), kk
```

#### 37. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L710)

```diff
-           return QC && CC.set(new Int32Array(QC)), CC
+           return Xk && kk.set(new Int32Array(Xk)), kk
```

#### 38. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L719)

```diff
-           return QC && CC.set(new Uint32Array(QC)), CC
+           return Xk && kk.set(new Uint32Array(Xk)), kk
```

#### 39. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L723)

```diff
-           return QC && CC.set(new Float32Array(QC)), CC
+           return Xk && kk.set(new Float32Array(Xk)), kk
```

#### 40. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L730)

```diff
-   39694: (CC, zC, ZC) => {
+   39863: (kk, Fk, Ik) => {
```

#### 41. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L732-L735` → after: `L732-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L732-L735) · [Before (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L732-L735)

```diff
-       b: () => qC,
-       d: () => FC,
-       f: () => oC,
-       i: () => wC
+       e: () => qk,
+       g: () => Lk,
+       h: () => ak,
+       j: () => Tk
```

#### 42. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !QC[CC]) return QC[CC] = !0, `${CC} needs to be imported before as it contains a side-effect required by your code.`
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Xk[kk]) return Xk[kk] = !0, `${kk} needs to be imported before as it contains a side-effect required by your code.`
```

#### 43. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L750-L751)

```diff
-           const ZC = `${CC}.${zC}`;
-           bC[ZC] || (bC[ZC] = !0, console.warn(`[Babylon.js] ${ZC}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+           const Ik = `${kk}.${Fk}`;
+           ik[Ik] || (ik[Ik] = !0, console.warn(`[Babylon.js] ${Ik}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
```

#### 44. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L777)

```diff
-   39680: (CC, zC, ZC) => {
+   39850: (kk, Fk, Ik) => {
```

#### 45. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L797-L798` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L797-L798) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L797-L798)

```diff
-       e: () => nC,
-       f: () => bC,
+       c: () => yk,
+       d: () => ik,
```

#### 46. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L800)

```diff
-       k: () => QC
+       j: () => Xk
```

#### 47. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L803)

```diff
-   39872: (CC, zC, ZC) => {
+   40042: (kk, Fk, Ik) => {
```

#### 48. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L806-L807` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L806-L807) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L806-L807)

```diff
-       f: () => wC,
-       j: () => bC
+       e: () => Tk,
+       f: () => ik
```

#### 49. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L826)

```diff
-   39865: (CC, zC, ZC) => {
+   40038: (kk, Fk, Ik) => {
```

#### 50. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L832-L833` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L830) · [Before (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L832-L833)

```diff
-       i: () => iC,
-       m: () => JC,
+       l: () => vk,
```

#### 51. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L836-L837` → after: `L833-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L833-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L833-L837) · [Before (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L836-L837)

```diff
-       r: () => vC,
-       v: () => AC
+       t: () => sk,
+       w: () => Vk,
+       x: () => Uk,
+       z: () => Sk,
+       B: () => Kk
```

#### 52. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L839-L841` → after: `L839-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L839-L841) · [Before (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L839-L841)

```diff
-     var QC = ZC(39867),
-       wC = ZC(39680),
-       bC = ZC(36987);
+     var Xk = Ik(40040),
+       Tk = Ik(39850),
+       ik = Ik(37187);
```

#### 53. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L844` → after: `L844-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L844-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L844-L849) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L844)

```diff
-     var fC = ZC(39872),
+     var lk = Ik(40042),
+       ak = Ik(40048),
+       qk = Ik(37178),
+       Lk = Ik(39860),
+       tk = Ik(39872),
+       Zk = Ik(38674),
```

#### 54. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L846-L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L851) · [Before (L846-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L846-L851)

```diff
-       qC = ZC(36985),
-       FC = ZC(39692),
-       WC = ZC(39703),
-       NC = ZC(38507),
-       MC = ZC(39712),
-       gC = ZC(39882);
+       ek = Ik(40056);
```

#### 55. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L853` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L853) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L853)

```diff
-     class pC extends fC.j {
+     class Hk extends lk.f {
```

#### 56. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L855)

```diff
-         super(CC, fC.f.LoadFileError), this.name = "LoadFileError", fC.d._setPrototypeOf(this, pC.prototype), zC instanceof QC.d ? this.request = zC : this.file = zC
+         super(kk, lk.e.LoadFileError), this.name = "LoadFileError", lk.d._setPrototypeOf(this, Hk.prototype), Fk instanceof Xk.b ? this.request = Fk : this.file = Fk
```

#### 57. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/254.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/254.js#L858)

```diff
-     class PC extends fC.j {
+     class Jk extends lk.f {
```
