# Changed — Bundle Modifications Report (Part 047 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `47 / 137` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 046](part-046.md) · [Part 048 →](part-048.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (837 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 138. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1545)

```diff
-       return NB ? dB || (dB = (0, aB.o)(BB.type, 4 * jB * zB)) : rB === pB.UNSIGNED_BYTE ? (dB || (dB = new Uint8Array(4 * jB * zB)), rB = pB.UNSIGNED_BYTE) : (dB || (dB = new Float32Array(4 * jB * zB)), rB = pB.FLOAT), IB && this.flushFramebuffer(), pB.readPixels(uB, UB, jB, zB, … [truncated]
+       return vB ? oB || (oB = (0, nB.n)(BB.type, 4 * IB * ZB)) : zB === hB.UNSIGNED_BYTE ? (oB || (oB = new Uint8Array(4 * IB * ZB)), zB = hB.UNSIGNED_BYTE) : (oB || (oB = new Float32Array(4 * IB * ZB)), zB = hB.FLOAT), GB && this.flushFramebuffer(), hB.readPixels(kB, cB, IB, ZB, … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1555)

```diff
-     }), (0, zB(40049).e)();
+     }), (0, ZB(40025).c)();
```

#### 140. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1558-L1559` → after: `L1558-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1558-L1559) · [Before (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1558-L1559)

```diff
-       const zB = new IB.d(this, 12);
-       if (zB.isCube = !0, 1 === this.gm) return NB.c.Error("Depth cube texture is not supported by WebGL 1."), zB;
+       const ZB = new GB.b(this, 12);
+       if (ZB.isCube = !0, 1 === this.cg) return vB.d.Error("Depth cube texture is not supported by WebGL 1."), ZB;
```

#### 141. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1586)

```diff
-         const zB = this.needPOTTextures ? (0, uB.c)(jB[0].width, this._caps.maxCubemapTextureSize) : jB[0].width,
+         const ZB = this.needPOTTextures ? (0, kB.f)(IB[0].width, this._caps.maxCubemapTextureSize) : IB[0].width,
```

#### 142. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1592)

```diff
-         BB._useSRGBBuffer && 1 === this.gm && (pB = aB);
+         BB._useSRGBBuffer && 1 === this.cg && (hB = nB);
```

#### 143. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1595` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1595) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1595)

```diff
-             if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void NB.c.Warn("Cannot create canvas to resize texture.");
+             if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void vB.d.Warn("Cannot create canvas to resize texture.");
```

#### 144. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1607)

```diff
-     zB(40051);
+     ZB(40034);
```

#### 145. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1626)

```diff
-         dB = new IB.d(this, 5);
+         oB = new GB.b(this, 5);
```

#### 146. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1629)

```diff
-       1 !== QB.type || this._caps.textureFloat || (QB.type = 0, NB.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), nB.texParameteri(nB.TEXTURE_CUBE_MAP, nB.TEXTURE_MAG_FILTER, uB.mag), nB.texParameteri(nB.TEXTURE_CUBE_MAP … [truncated]
+       1 !== TB.type || this._caps.textureFloat || (TB.type = 0, vB.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_MAG_FILTER, kB.mag), JB.texParameteri(JB.TEXTURE_CUBE_MAP … [truncated]
```

#### 147. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1634-L1635` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1634-L1635) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1634-L1635)

```diff
-     var mB = zB(40056),
-       yB = zB(40062);
+     var gB = ZB(40044),
+       qB = ZB(40052);
```

#### 148. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1647)

```diff
-         if (pB ? BB.info.sphericalPolynomial && (uB._sphericalPolynomial = BB.info.sphericalPolynomial) : uB._sphericalPolynomial = uB._sphericalPolynomial ?? new mB.h, uB._source = 9, this.getCaps().textureLOD) return void(dB && dB(uB));
+         if (hB ? BB.info.sphericalPolynomial && (kB._sphericalPolynomial = BB.info.sphericalPolynomial) : kB._sphericalPolynomial = kB._sphericalPolynomial ?? new gB.f, kB._source = 9, this.getCaps().textureLOD) return void(oB && oB(kB));
```

#### 149. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1653)

```diff
-         } = await zB.e(311).then((() => zB(41853))), sB = [];
+         } = await ZB.e(311).then((() => ZB(41790))), FB = [];
```

#### 150. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1660)

```diff
-             GB = new IB.d(this, 2);
+             UB = new GB.b(this, 2);
```

#### 151. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1665)

```diff
-           } else NB.c.Warn("DDS is the only prefiltered cube map supported so far.");
+           } else vB.d.Warn("DDS is the only prefiltered cube map supported so far.");
```

#### 152. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1667)

```diff
-           const LB = new yB.c(jB);
+           const WB = new qB.e(IB);
```

#### 153. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1673)

```diff
-     var GB = zB(40001);
+     var UB = ZB(39976);
```

#### 154. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1696-L1697)

```diff
-     var gB = zB(39943),
-       tB = zB(39980);
+     var dB = ZB(39912),
+       CB = ZB(39951);
```

#### 155. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1700)

```diff
-       if (!(0, gB.o)()) return;
+       if (!(0, dB.l)()) return;
```

#### 156. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1704` → after: `L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1704) · [Before (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1704)

```diff
-       if (!(0, gB.o)()) return;
+       if (!(0, dB.l)()) return;
```

#### 157. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1728)

```diff
-     })), (0, zB(40039).b)();
+     })), (0, ZB(40015).d)();
```

#### 158. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1811)

```diff
-     zB(40092);
+     ZB(40094);
```

#### 159. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1820)

```diff
-     zB(40101), zB(40137);
+     ZB(40103), ZB(40137);
```

#### 160. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1830)

```diff
-   39904: (BB, jB, zB) => {
+   39876: (BB, IB, ZB) => {
```

#### 161. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1832)

```diff
-       b: () => tB
+       e: () => CB
```

#### 162. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1834-L1837` → after: `L1834-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1834-L1837) · [Before (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1834-L1837)

```diff
-     var QB = zB(39913),
-       nB = zB(37197),
-       dB = zB(39922),
-       IB = zB(39986);
+     var TB = ZB(39885),
+       JB = ZB(37147),
+       oB = ZB(39895),
+       GB = ZB(39959);
```

#### 163. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1844` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1844) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1844)

```diff
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.e.Now;
+         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.c.Now;
```

#### 164. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1913-L1917` → after: `L1913-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1913-L1917) · [Before (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1913-L1917)

```diff
-     var UB = zB(40001),
-       aB = zB(38783),
-       pB = zB(40017),
-       rB = zB(39980),
-       sB = zB(39943);
+     var cB = ZB(39976),
+       nB = ZB(38718),
+       hB = ZB(39995),
+       zB = ZB(39951),
+       FB = ZB(39912);
```

#### 165. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1921)

```diff
-         if (!(0, sB.h)() || !document.body) return null;
+         if (!(0, FB.g)() || !document.body) return null;
```

#### 166. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1939)

```diff
-         return mB(IB) ? IB : null
+         return gB(GB) ? GB : null
```

#### 167. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1945)

```diff
-           "undefined" !== typeof OffscreenCanvas ? jB = new OffscreenCanvas(64, 64) : (0, sB.h)() && "function" === typeof document.createElement && (jB = document.createElement("canvas"), jB.width = 64, jB.height = 64);
+           "undefined" !== typeof OffscreenCanvas ? IB = new OffscreenCanvas(64, 64) : (0, FB.g)() && "function" === typeof document.createElement && (IB = document.createElement("canvas"), IB.width = 64, IB.height = 64);
```

#### 168. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1957)

```diff
-           return mB(IB) ? IB : null
+           return gB(GB) ? GB : null
```

#### 169. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1992-L1995` → after: `L1992-L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1992-L1995) · [Before (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L1992-L1995)

```diff
-     var kB = zB(40034),
-       GB = zB(39976),
-       LB = zB(40039),
-       gB = zB(40042);
+     var yB = ZB(40010),
+       UB = ZB(39943),
+       WB = ZB(40015),
+       dB = ZB(40021);
```

#### 170. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2004)

```diff
-         return nB.c.Instances
+         return JB.e.Instances
```

#### 171. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2007)

```diff
-         return nB.c.LastCreatedEngine
+         return JB.e.LastCreatedEngine
```

#### 172. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2010)

```diff
-         return nB.c.LastCreatedScene
+         return JB.e.LastCreatedScene
```

#### 173. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2026)

```diff
-         (0, LB.b)(), (0, gB.d)(), super(BB, jB, zB, QB), this._performanceMonitor = new NB, this._drawCalls = new kB.d, BB && (this._features.supportRenderPasses = !0)
+         (0, WB.d)(), (0, dB.b)(), super(BB, IB, ZB, TB), this._performanceMonitor = new vB, this._drawCalls = new yB.c, BB && (this._features.supportRenderPasses = !0)
```

#### 174. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2050)

```diff
-             }(jB), !rB.c.audioEngine && zB.audioEngine && rB.c.AudioEngineFactory && (rB.c.audioEngine = rB.c.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, sB.h)() && (BB._onFullscreenChange = () => {
+             }(IB), !zB.c.audioEngine && ZB.audioEngine && zB.c.AudioEngineFactory && (zB.c.audioEngine = zB.c.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, FB.g)() && (BB._onFullscreenChange = () => {
```

#### 175. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2075` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2075) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2075)

```diff
-               nB(`Error loading image ${dB.src}`)
+               JB(`Error loading image ${oB.src}`)
```

#### 176. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2134)

```diff
-         this._measureFps(), super.gL()
+         this._measureFps(), super.dW()
```

#### 177. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2150)

```diff
-         if (QB.attachShader(dB, jB), QB.attachShader(dB, zB), this.gm > 1 && nB) {
+         if (TB.attachShader(oB, IB), TB.attachShader(oB, ZB), this.cg > 1 && JB) {
```

#### 178. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2154)

```diff
-         return QB.linkProgram(dB), this.gm > 1 && nB && this.bindTransformFeedback(null), BB.context = QB, BB.vertexShader = jB, BB.fragmentShader = zB, BB.isParallelCompiled || this._finalizePipelineContext(BB), dB
+         return TB.linkProgram(oB), this.cg > 1 && JB && this.bindTransformFeedback(null), BB.context = TB, BB.vertexShader = IB, BB.fragmentShader = ZB, BB.isParallelCompiled || this._finalizePipelineContext(BB), oB
```

#### 179. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2199-L2200` → after: `L2199-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2199-L2200) · [Before (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2199-L2200)

```diff
-         const IB = new pB.d(BB, this._gl),
-           NB = new QB.d(this, 15, !0);
+         const GB = new hB.c(BB, this._gl),
+           vB = new TB.b(this, 15, !0);
```

#### 180. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2209)

```diff
-           } BB._hardwareTexture = new pB.d(jB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
+           } BB._hardwareTexture = new hB.c(IB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
```

#### 181. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2237)

```diff
-         if (1 === this.gm) return void aB.c.Error("WebGL 1 does not support texture comparison.");
+         if (1 === this.cg) return void nB.d.Error("WebGL 1 does not support texture comparison.");
```

#### 182. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2245)

```diff
-         return zB.Ep = BB, this.bindArrayBuffer(zB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), zB.references = 1, zB
+         return ZB.ah = BB, this.bindArrayBuffer(ZB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), ZB.references = 1, ZB
```

#### 183. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2255)

```diff
-           (0, GB.e)((() => {
+           (0, UB.f)((() => {
```

#### 184. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2273)

```diff
-             1 === nB.c.Instances.length && rB.c.audioEngine && (rB.c.audioEngine.dispose(), rB.c.audioEngine = null);
+             1 === JB.e.Instances.length && zB.c.audioEngine && (zB.c.audioEngine.dispose(), zB.c.audioEngine = null);
```

#### 185. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2275)

```diff
-             zB && "function" === typeof zB.removeEventListener && (zB.removeEventListener("blur", BB._onBlur), zB.removeEventListener("focus", BB._onFocus)), jB && (jB.removeEventListener("focus", BB._onCanvasFocus), jB.removeEventListener("blur", BB._onCanvasBlur), jB.removeEven … [truncated]
+             ZB && "function" === typeof ZB.removeEventListener && (ZB.removeEventListener("blur", BB._onBlur), ZB.removeEventListener("focus", BB._onFocus)), IB && (IB.removeEventListener("focus", BB._onCanvasFocus), IB.removeEventListener("blur", BB._onCanvasBlur), IB.removeEven … [truncated]
```

#### 186. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2281)

```diff
-   40053: (BB, jB, zB) => {
+   40042: (BB, IB, ZB) => {
```

#### 187. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2283)

```diff
-       d: () => nB
+       c: () => JB
```

#### 188. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2285)

```diff
-     var QB = zB(40025);
+     var TB = ZB(40003);
```

#### 189. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2291)

```diff
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, B … [truncated]
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, B … [truncated]
```

#### 190. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2340)

```diff
-         return jB.isCube ? 6 * zB + QB : jB.is3D ? 0 : zB
+         return IB.isCube ? 6 * ZB + TB : IB.is3D ? 0 : ZB
```

#### 191. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2436` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2436) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2436)

```diff
-                 DIB: QB,
+                 GvB: TB,
```

#### 192. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2497)

```diff
-   40529: (BB, jB, zB) => {
+   40473: (BB, IB, ZB) => {
```

#### 193. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2499` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2499) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2499)

```diff
-       c: () => QB
+       b: () => TB
```

#### 194. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2529)

```diff
-   40145: (BB, jB, zB) => {
+   40141: (BB, IB, ZB) => {
```

#### 195. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2531` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2531) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2531)

```diff
-       d: () => IB
+       b: () => GB
```

#### 196. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2533)

```diff
-     var QB = zB(38783);
+     var TB = ZB(38718);
```

#### 197. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2539)

```diff
-       })(BB) && QB.c.Warn(`Extension with the name '${BB}' already exists`), nB.set(BB, jB)
+       })(BB) && TB.d.Warn(`Extension with the name '${BB}' already exists`), JB.set(BB, IB)
```

#### 198. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2543)

```diff
-       "image/ktx" !== jB && "image/ktx2" !== jB || (BB = ".ktx"), nB.has(BB) || (BB.endsWith(".ies") && dB(".ies", (async () => await zB.e(314).then((() => zB(41866))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && dB(".dds", (async () => await zB.e(312).then((( … [truncated]
+       "image/ktx" !== IB && "image/ktx2" !== IB || (BB = ".ktx"), JB.has(BB) || (BB.endsWith(".ies") && oB(".ies", (async () => await ZB.e(314).then((() => ZB(41798))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && oB(".dds", (async () => await ZB.e(312).then((( … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2548)

```diff
-   40555: (BB, jB, zB) => {
+   40498: (BB, IB, ZB) => {
```

#### 200. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2550-L2551` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2550-L2551) · [Before (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2550-L2551)

```diff
-       b: () => IB,
-       f: () => UB
+       c: () => GB,
+       d: () => cB
```

#### 201. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2553-L2557` → after: `L2553-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2553-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2553-L2557) · [Before (L2553-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2553-L2557)

```diff
-     var QB = zB(40380),
-       nB = zB(40089),
-       dB = zB(37222);
-     class IB extends QB.b {
-       get Y5() {
+     var TB = ZB(40339),
+       JB = ZB(40092),
+       oB = ZB(37170);
+     class GB extends TB.e {
+       get JBB() {
```

#### 202. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2560)

```diff
-       set Y5(BB) {
+       set JBB(BB) {
```

#### 203. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2564)

```diff
-         return this.Y5
+         return this.JBB
```

#### 204. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2567` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2567) · [Before (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2567)

```diff
-         super(BB, jB, !0), this._waitingSubMaterialsUniqueIds = [], this.aY().addMultiMaterial(this), this.Y5 = [], this._storeEffectOnSubMeshes = !0
+         super(BB, IB, !0), this._waitingSubMaterialsUniqueIds = [], this.JR().addMultiMaterial(this), this.JBB = [], this._storeEffectOnSubMeshes = !0
```

#### 205. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2584)

```diff
-         return BB < 0 || BB >= this.Y5.length ? this.aY().defaultMaterial : this.Y5[BB]
+         return BB < 0 || BB >= this.JBB.length ? this.JR().defaultMaterial : this.JBB[BB]
```

#### 206. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2587)

```diff
-         return super.getActiveTextures().concat(...this.Y5.map((BB => BB ? BB.getActiveTextures() : [])))
+         return super.getActiveTextures().concat(...this.JBB.map((BB => BB ? BB.getActiveTextures() : [])))
```

#### 207. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2591-L2592` → after: `L2591-L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2591-L2592) · [Before (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2591-L2592)

```diff
-         for (let jB = 0; jB < this.Y5.length; jB++)
-           if (this.Y5[jB]?.hasTexture(BB)) return !0;
+         for (let IB = 0; IB < this.JBB.length; IB++)
+           if (this.JBB[IB]?.hasTexture(BB)) return !0;
```

#### 208. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2599-L2600` → after: `L2599-L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2599-L2600) · [Before (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2599-L2600)

```diff
-         for (let QB = 0; QB < this.Y5.length; QB++) {
-           const nB = this.Y5[QB];
+         for (let TB = 0; TB < this.JBB.length; TB++) {
+           const JB = this.JBB[TB];
```

#### 209. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2612-L2613` → after: `L2612-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2612-L2613) · [Before (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2612-L2613)

```diff
-         const zB = new IB(BB, this.aY());
-         for (let QB = 0; QB < this.Y5.length; QB++) {
+         const ZB = new GB(BB, this.JR());
+         for (let TB = 0; TB < this.JBB.length; TB++) {
```

#### 210. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2615-L2616` → after: `L2615-L2616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2615-L2616) · [Before (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2615-L2616)

```diff
-           const dB = this.Y5[QB];
-           nB = jB && dB ? dB.clone(BB + "-" + dB.name) : this.Y5[QB], zB.Y5.push(nB)
+           const oB = this.JBB[TB];
+           JB = IB && oB ? oB.clone(BB + "-" + oB.name) : this.JBB[TB], ZB.JBB.push(JB)
```

#### 211. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2622-L2624` → after: `L2622-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2622-L2624) · [Before (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2622-L2624)

```diff
-         BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, nB.d && (BB.tags = nB.d.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
-         for (let jB = 0; jB < this.Y5.length; jB++) {
-           const zB = this.Y5[jB];
+         BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, JB.b && (BB.tags = JB.b.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
+         for (let IB = 0; IB < this.JBB.length; IB++) {
+           const ZB = this.JBB[IB];
```

#### 212. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2630` → after: `L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2630) · [Before (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2630)

```diff
-         const QB = this.aY();
+         const TB = this.JR();
```

#### 213. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2633-L2634` → after: `L2633-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2633-L2634) · [Before (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2633-L2634)

```diff
-           for (let dB = 0; dB < this.Y5.length; dB++) {
-             const zB = this.Y5[dB];
+           for (let oB = 0; oB < this.JBB.length; oB++) {
+             const ZB = this.JBB[oB];
```

#### 214. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2645` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2645) · [Before (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2645)

```diff
-       if (zB.id = BB.id, zB._loadedUniqueId = BB.uniqueId, nB.d && nB.d.AddTagsTo(zB, BB.tags), BB.materialsUniqueIds) zB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
+       if (ZB.id = BB.id, ZB._loadedUniqueId = BB.uniqueId, JB.b && JB.b.AddTagsTo(ZB, BB.tags), BB.materialsUniqueIds) ZB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
```

#### 215. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2647)

```diff
-         for (const QB of BB.materials) zB.Y5.push(jB.getLastMaterialById(QB));
+         for (const TB of BB.materials) ZB.JBB.push(IB.getLastMaterialById(TB));
```

#### 216. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2652` → after: `L2652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2652) · [Before (L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2652)

```diff
-       NB || (NB = !0, IB.ParseMultiMaterial = uB, (0, dB.d)("BABYLON.MultiMaterial", IB))
+       vB || (vB = !0, GB.ParseMultiMaterial = kB, (0, oB.i)("BABYLON.MultiMaterial", GB))
```

#### 217. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2655)

```diff
-   40312: (BB, jB, zB) => {
+   40277: (BB, IB, ZB) => {
```

#### 218. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2659` → after: `L2659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2659) · [Before (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2659)

```diff
-     var QB, nB, dB = zB(37171);
+     var TB, JB, oB = ZB(37120);
```

#### 219. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2664` → after: `L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2664) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2664)

```diff
-     IB.X = new dB.m(1, 0, 0), IB.Y = new dB.m(0, 1, 0), IB.Z = new dB.m(0, 0, 1),
+     GB.X = new oB.s(1, 0, 0), GB.Y = new oB.s(0, 1, 0), GB.Z = new oB.s(0, 0, 1),
```

#### 220. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2669)

```diff
-   40056: (BB, jB, zB) => {
+   40044: (BB, IB, ZB) => {
```

#### 221. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2671-L2672` → after: `L2671-L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2671-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2671-L2672) · [Before (L2671-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2671-L2672)

```diff
-       d: () => uB,
-       h: () => UB
+       c: () => kB,
+       f: () => cB
```

#### 222. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2674)

```diff
-     var QB = zB(37171);
+     var TB = ZB(37120);
```

#### 223. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2681)

```diff
-         this.preScaled = !1, this.l00 = QB.m.Zero(), this.l1_1 = QB.m.Zero(), this.l10 = QB.m.Zero(), this.l11 = QB.m.Zero(), this.l2_2 = QB.m.Zero(), this.l2_1 = QB.m.Zero(), this.l20 = QB.m.Zero(), this.l21 = QB.m.Zero(), this.l22 = QB.m.Zero()
+         this.preScaled = !1, this.l00 = TB.s.Zero(), this.l1_1 = TB.s.Zero(), this.l10 = TB.s.Zero(), this.l11 = TB.s.Zero(), this.l2_2 = TB.s.Zero(), this.l2_1 = TB.s.Zero(), this.l20 = TB.s.Zero(), this.l21 = TB.s.Zero(), this.l22 = TB.s.Zero()
```

#### 224. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2684-L2687` → after: `L2684-L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2684-L2687) · [Before (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2684-L2687)

```diff
-         QB.h.KJ[0].set(jB.r, jB.g, jB.b);
-         const nB = QB.h.KJ[0],
-           dB = QB.h.KJ[1];
-         nB.scaleToRef(zB, dB), dB.scaleToRef(IB(0, BB), QB.h.KJ[2]), this.l00.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(1, BB), QB.h.KJ[2]), this.l1_1.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(2, BB), QB.h.KJ[2]), this.l10.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(3, BB), QB.h.KJ[2] … [truncated]
+         TB.m.rN[0].set(IB.r, IB.g, IB.b);
+         const JB = TB.m.rN[0],
+           oB = TB.m.rN[1];
+         JB.scaleToRef(ZB, oB), oB.scaleToRef(GB(0, BB), TB.m.rN[2]), this.l00.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(1, BB), TB.m.rN[2]), this.l1_1.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(2, BB), TB.m.rN[2]), this.l10.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(3, BB), TB.m.rN[2] … [truncated]
```

#### 225. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2702)

```diff
-         return QB.m.FromArrayToRef(BB[0], 0, this.l00), QB.m.FromArrayToRef(BB[1], 0, this.l1_1), QB.m.FromArrayToRef(BB[2], 0, this.l10), QB.m.FromArrayToRef(BB[3], 0, this.l11), QB.m.FromArrayToRef(BB[4], 0, this.l2_2), QB.m.FromArrayToRef(BB[5], 0, this.l2_1), QB.m.FromArrayTo … [truncated]
+         return TB.s.FromArrayToRef(BB[0], 0, this.l00), TB.s.FromArrayToRef(BB[1], 0, this.l1_1), TB.s.FromArrayToRef(BB[2], 0, this.l10), TB.s.FromArrayToRef(BB[3], 0, this.l11), TB.s.FromArrayToRef(BB[4], 0, this.l2_2), TB.s.FromArrayToRef(BB[5], 0, this.l2_1), TB.s.FromArrayTo … [truncated]
```

#### 226. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2705` → after: `L2705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2705) · [Before (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2705)

```diff
-         return QB.m.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), QB.m.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), QB.m.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), QB.m.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), QB.m.FromFloatsToRef(BB[12], BB[13], BB[14], this. … [truncated]
+         return TB.s.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), TB.s.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), TB.s.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), TB.s.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), TB.s.FromFloatsToRef(BB[12], BB[13], BB[14], this. … [truncated]
```

#### 227. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2717)

```diff
-         this.x = QB.m.Zero(), this.y = QB.m.Zero(), this.z = QB.m.Zero(), this.xx = QB.m.Zero(), this.yy = QB.m.Zero(), this.zz = QB.m.Zero(), this.xy = QB.m.Zero(), this.yz = QB.m.Zero(), this.zx = QB.m.Zero()
+         this.x = TB.s.Zero(), this.y = TB.s.Zero(), this.z = TB.s.Zero(), this.xx = TB.s.Zero(), this.yy = TB.s.Zero(), this.zz = TB.s.Zero(), this.xy = TB.s.Zero(), this.yz = TB.s.Zero(), this.zx = TB.s.Zero()
```

#### 228. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2723-L2724` → after: `L2723-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2723-L2724) · [Before (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2723-L2724)

```diff
-         QB.h.KJ[0].U3(BB.r, BB.g, BB.b);
-         const jB = QB.h.KJ[0];
+         TB.m.rN[0].cBB(BB.r, BB.g, BB.b);
+         const IB = TB.m.rN[0];
```

#### 229. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2731)

```diff
-         return this._harmonics = BB, this.x.jH(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.jH(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.jH(BB.l10), this.z.scaleInPlace(1.02333), this.xx.jH(BB.l00), QB.h.KJ[0].jH(BB.l20).scaleInPlace(.24770 … [truncated]
+         return this._harmonics = BB, this.x.TY(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.TY(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.TY(BB.l10), this.z.scaleInPlace(1.02333), this.xx.TY(BB.l00), TB.m.rN[0].TY(BB.l20).scaleInPlace(.24770 … [truncated]
```

#### 230. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2738` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2738) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2738)

```diff
-         return QB.m.FromArrayToRef(BB[0], 0, jB.x), QB.m.FromArrayToRef(BB[1], 0, jB.y), QB.m.FromArrayToRef(BB[2], 0, jB.z), QB.m.FromArrayToRef(BB[3], 0, jB.xx), QB.m.FromArrayToRef(BB[4], 0, jB.yy), QB.m.FromArrayToRef(BB[5], 0, jB.zz), QB.m.FromArrayToRef(BB[6], 0, jB.yz), QB … [truncated]
+         return TB.s.FromArrayToRef(BB[0], 0, IB.x), TB.s.FromArrayToRef(BB[1], 0, IB.y), TB.s.FromArrayToRef(BB[2], 0, IB.z), TB.s.FromArrayToRef(BB[3], 0, IB.xx), TB.s.FromArrayToRef(BB[4], 0, IB.yy), TB.s.FromArrayToRef(BB[5], 0, IB.zz), TB.s.FromArrayToRef(BB[6], 0, IB.yz), TB … [truncated]
```

#### 231. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2742)

```diff
-   40539: (BB, jB, zB) => {
+   40488: (BB, IB, ZB) => {
```

#### 232. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2744-L2745` → after: `L2744-L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2744-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2744-L2745) · [Before (L2744-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2744-L2745)

```diff
-       e: () => FB,
-       g: () => VB
+       b: () => MB,
+       d: () => PB
```

#### 233. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2747-L2755` → after: `L2747-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2747-L2755) · [Before (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2747-L2755)

```diff
-     var QB = zB(40066),
-       nB = zB(37202),
-       dB = zB(37171),
-       IB = zB(40211),
-       NB = zB(40519),
-       uB = zB(40546),
-       UB = zB(40202),
-       aB = zB(40404),
-       pB = zB(40195);
+     var TB = ZB(40061),
+       JB = ZB(37153),
+       oB = ZB(37120),
+       GB = ZB(40188),
+       vB = ZB(40463),
+       kB = ZB(40492),
+       cB = ZB(40185),
+       nB = ZB(40351),
+       hB = ZB(40177);
```

#### 234. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2758)

```diff
-         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new dB.m(0, 0, 0), this._diffPositionForCollisions = new dB.m(0, 0, 0), this._collisionResponse = !0
+         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new oB.s(0, 0, 0), this._diffPositionForCollisions = new oB.s(0, 0, 0), this._collisionResponse = !0
```

#### 235. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2761-L2770` → after: `L2761-L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2761-L2770) · [Before (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2761-L2770)

```diff
-     var sB, JB, mB, yB = zB(39965),
-       kB = zB(40130),
-       GB = zB(40418),
-       LB = zB(37379),
-       gB = zB(37178),
-       tB = zB(40312),
-       SB = zB(38783),
-       MB = zB(40068),
-       EB = zB(39980),
-       iB = zB(37222);
+     var FB, NB, gB, qB = ZB(39931),
+       yB = ZB(40134),
+       UB = ZB(40361),
+       WB = ZB(37311),
+       dB = ZB(37129),
+       CB = ZB(40277),
+       QB = ZB(38718),
+       sB = ZB(40065),
+       wB = ZB(39951),
+       OB = ZB(37170);
```

#### 236. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2777)

```diff
-       BB instanceof Float32Array ? dB.c.FromArrayToRef(BB, jB, zB) : zB.U3((0, kB.c)(BB[jB]), (0, kB.c)(BB[jB + 1]), (0, kB.c)(BB[jB + 2]), (0, kB.c)(BB[jB + 3]), (0, kB.c)(BB[jB + 4]), (0, kB.c)(BB[jB + 5]), (0, kB.c)(BB[jB + 6]), (0, kB.c)(BB[jB + 7]), (0, kB.c)(BB[jB + 8]), (0 … [truncated]
+       BB instanceof Float32Array ? oB.b.FromArrayToRef(BB, IB, ZB) : ZB.cBB((0, yB.c)(BB[IB]), (0, yB.c)(BB[IB + 1]), (0, yB.c)(BB[IB + 2]), (0, yB.c)(BB[IB + 3]), (0, yB.c)(BB[IB + 4]), (0, yB.c)(BB[IB + 5]), (0, yB.c)(BB[IB + 6]), (0, yB.c)(BB[IB + 7]), (0, yB.c)(BB[IB + 8]), ( … [truncated]
```

#### 237. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2784` → after: `L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2784) · [Before (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2784)

```diff
-       if (!(sB instanceof Float32Array) && !(sB instanceof Uint16Array)) return SB.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
+       if (!(FB instanceof Float32Array) && !(FB instanceof Uint16Array)) return QB.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
```

#### 238. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2794-L2797` → after: `L2794-L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2794-L2797) · [Before (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2794-L2797)

```diff
-       if (!isFinite(mB) || mB < 0 || mB >= JB.height) return SB.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
-       const yB = dB.h.KJ[0],
-         kB = dB.h.Matrix[0],
-         GB = dB.h.Matrix[1],
+       if (!isFinite(gB) || gB < 0 || gB >= NB.height) return QB.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
+       const qB = oB.m.rN[0],
+         yB = oB.m.Matrix[0],
+         UB = oB.m.Matrix[1],
```

#### 239. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2799` → after: `L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2799) · [Before (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2799)

```diff
-         gB = jB === IB.l.NormalKind ? dB.m.TransformNormalFromFloatsToRef : dB.m.TransformCoordinatesFromFloatsToRef;
+         dB = IB === GB.i.NormalKind ? oB.s.TransformNormalFromFloatsToRef : oB.s.TransformCoordinatesFromFloatsToRef;
```

#### 240. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2811` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2811) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2811)

```diff
-         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = dB.m.Zero(), this.subDiv = {
+         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = oB.s.Zero(), this.subDiv = {
```

#### 241. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2826` → after: `L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2826) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2826)

```diff
-         let jB, rB = uB.f,
+         let IB, zB = kB.g,
```

#### 242. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2830)

```diff
-             return uB.f.BILLBOARDMODE_NONE
+             return kB.g.BILLBOARDMODE_NONE
```

#### 243. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2833` → after: `L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2833) · [Before (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2833)

```diff
-             return uB.f.BILLBOARDMODE_X
+             return kB.g.BILLBOARDMODE_X
```

#### 244. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2836` → after: `L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2836) · [Before (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2836)

```diff
-             return uB.f.BILLBOARDMODE_Y
+             return kB.g.BILLBOARDMODE_Y
```

#### 245. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2839)

```diff
-             return uB.f.BILLBOARDMODE_Z
+             return kB.g.BILLBOARDMODE_Z
```

#### 246. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2842` → after: `L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2842) · [Before (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2842)

```diff
-             return uB.f.BILLBOARDMODE_ALL
+             return kB.g.BILLBOARDMODE_ALL
```

#### 247. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2845` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2845) · [Before (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2845)

```diff
-             return uB.f.BILLBOARDMODE_USE_POSITION
+             return kB.g.BILLBOARDMODE_USE_POSITION
```

#### 248. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2947` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2947) · [Before (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L2947)

```diff
-             this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
+             this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
```

#### 249. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3042)

```diff
-             switch (super(jB, QB, !1), zB = this, this._internalAbstractMeshDataInfo = new DB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY … [truncated]
+             switch (super(IB, TB, !1), ZB = this, this._internalAbstractMeshDataInfo = new HB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY … [truncated]
```

#### 250. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3045-L3046` → after: `L3045-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3045-L3046) · [Before (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3045-L3046)

```diff
-                 kY: null
-               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new nB.c, this._onCollisionPositionChange = function(BB, jB) {
+                 yR: null
+               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new JB.b, this._onCollisionPositionChange = function(BB, IB) {
```

#### 251. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3049` → after: `L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3049) · [Before (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3049)

```diff
-               }, QB = this.aY(), this.layerMask = QB.defaultRenderableLayerMask, QB.IQB(this), this._resyncLightSources(), this._uniformBuffer = new pB.d(this.aY().wJ(), void 0, void 0, jB, !this.aY().wJ().isWebGPU), this._buildUniformLayout(), QB.performancePriority) {
+               }, TB = this.JR(), this.layerMask = TB.defaultRenderableLayerMask, TB.jTB(this), this._resyncLightSources(), this._uniformBuffer = new hB.d(this.JR().PN(), void 0, void 0, IB, !this.JR().PN().isWebGPU), this._buildUniformLayout(), TB.performancePriority) {
```

#### 252. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3051` → after: `L3051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3051) · [Before (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3051)

```diff
-                 this.cJ = !0;
+                 this.XN = !0;
```

#### 253. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3053` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3053) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3053)

```diff
-                 this.xJ = !0, this.Ny = !1
+                 this.RN = !0, this.tg = !1
```

#### 254. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3061` → after: `L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3061) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3061)

```diff
-             jB.l_("world", BB), jB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), jB.update()
+             IB.T6("world", BB), IB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), IB.update()
```

#### 255. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3074` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3074) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3074)

```diff
-             jB += ", # of submeshes: " + (this.cL ? this.cL.length : 0);
+             IB += ", # of submeshes: " + (this.EW ? this.EW.length : 0);
```

#### 256. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3076` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3076) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3076)

```diff
-             return zB && (jB += ", skeleton: " + zB.name), BB && (jB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], jB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.kY ? "YES" : "NO")), jB
+             return ZB && (IB += ", skeleton: " + ZB.name), BB && (IB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], IB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.yR ? "YES" : "NO")), IB
```

#### 257. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3079` → after: `L3079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3079) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3079)

```diff
-             return this._masterMesh && this.billboardMode !== uB.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
+             return this._masterMesh && this.billboardMode !== kB.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
```

#### 258. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3091-L3092` → after: `L3091-L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3091-L3092) · [Before (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3091-L3092)

```diff
-             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.cL) {
-               for (const BB of this.cL) BB._rebuild();
+             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.EW) {
+               for (const BB of this.EW) BB._rebuild();
```

#### 259. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3098` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3098) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3098)

```diff
-             for (const BB of this.aY().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
+             for (const BB of this.JR().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
```

#### 260. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3115` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3115) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3115)

```diff
-             for (const BB of this.cL) BB.setEffect(null)
+             for (const BB of this.EW) BB.setEffect(null)
```

#### 261. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3121-L3122` → after: `L3121-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3121-L3122) · [Before (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3121-L3122)

```diff
-             if (this.cL)
-               for (const jB of this.cL)
+             if (this.EW)
+               for (const IB of this.EW)
```

#### 262. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3138-L3139` → after: `L3138-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3138-L3139) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3138-L3139)

```diff
-           DjB(BB) {
-             return this._currentRenderId = Number.MAX_VALUE, super.DjB(BB), this._isDirty = !0, this
+           GZB(BB) {
+             return this._currentRenderId = Number.MAX_VALUE, super.GZB(BB), this._isDirty = !0, this
```

#### 263. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3143-L3144` → after: `L3143-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3143-L3144) · [Before (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3143-L3144)

```diff
-             if (this.cL)
-               for (const zB of this.cL) zB.resetDrawCache(BB, jB)
+             if (this.EW)
+               for (const ZB of this.EW) ZB.resetDrawCache(BB, IB)
```

#### 264. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3158` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3158) · [Before (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3158)

```diff
-           dQB() {
+           MTB() {
```

#### 265. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3177` → after: `L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3177) · [Before (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3177)

```diff
-             return this._masterMesh ? this._masterMesh.rV() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
+             return this._masterMesh ? this._masterMesh.qm() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
```

#### 266. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3180` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3180) · [Before (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3180)

```diff
-             return this.rawBoundingInfo ?? this.rV()
+             return this.rawBoundingInfo ?? this.qm()
```

#### 267. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3189)

```diff
-             return this._boundingInfo = new aB.c(BB, jB, zB), this._boundingInfo
+             return this._boundingInfo = new nB.d(BB, IB, ZB), this._boundingInfo
```

#### 268. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3198` → after: `L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3198) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3198)

```diff
-             return this.skeleton && this.aY().skeletonsEnabled && this.isVerticesDataPresent(IB.l.MatricesIndicesKind) && this.isVerticesDataPresent(IB.l.MatricesWeightsKind)
+             return this.skeleton && this.JR().skeletonsEnabled && this.isVerticesDataPresent(GB.i.MatricesIndicesKind) && this.isVerticesDataPresent(GB.i.MatricesWeightsKind)
```

#### 269. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3209` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3209) · [Before (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3209)

```diff
-             return this._masterMesh && this.billboardMode === uB.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
+             return this._masterMesh && this.billboardMode === kB.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
```

#### 270. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3217)

```diff
-           get bQB() {
+           get sJB() {
```

#### 271. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3227-L3229` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3227-L3229) · [Before (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3227-L3229)

```diff
-             const QB = new dB.c;
-             (this.rotationQuaternion ? this.rotationQuaternion : dB.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(QB);
-             const nB = dB.m.Zero(),
+             const TB = new oB.b;
+             (this.rotationQuaternion ? this.rotationQuaternion : oB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(TB);
+             const JB = oB.s.Zero(),
```

#### 272. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3231` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3231) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3231)

```diff
-             return dB.m.TransformCoordinatesFromFloatsToRef(BB * IB, jB, zB * IB, QB, nB), nB
+             return oB.s.TransformCoordinatesFromFloatsToRef(BB * GB, IB, ZB * GB, TB, JB), JB
```

#### 273. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3238)

```diff
-             return new dB.m(BB * QB, jB, zB * QB)
+             return new oB.s(BB * TB, IB, ZB * TB)
```

#### 274. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3243` → after: `L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3243) · [Before (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3243)

```diff
-               this._boundingInfo ? this._boundingInfo.reConstruct(zB.minimum, zB.maximum) : this._boundingInfo = new aB.c(zB.minimum, zB.maximum)
+               this._boundingInfo ? this._boundingInfo.reConstruct(ZB.minimum, ZB.maximum) : this._boundingInfo = new nB.d(ZB.minimum, ZB.maximum)
```

#### 275. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3245-L3246` → after: `L3245-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3245-L3246) · [Before (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3245-L3246)

```diff
-             if (this.cL)
-               for (let zB = 0; zB < this.cL.length; zB++) this.cL[zB].refreshBoundingInfo(BB);
+             if (this.EW)
+               for (let ZB = 0; ZB < this.EW.length; ZB++) this.EW[ZB].refreshBoundingInfo(BB);
```

#### 276. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3250-L3251` → after: `L3250-L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3250-L3251) · [Before (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3250-L3251)

```diff
-             if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new aB.c(BB.minimum, BB.maximum), this.cL)
-               for (let jB = 0; jB < this.cL.length; jB++) this.cL[jB].refreshBoundingInfo(null);
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new nB.d(BB.minimum, BB.maximum), this.EW)
+               for (let IB = 0; IB < this.EW.length; IB++) this.EW[IB].refreshBoundingInfo(null);
```

#### 277. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3256-L3259` → after: `L3256-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3256-L3259) · [Before (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3256-L3259)

```diff
-               const UB = dB.h.KJ[0],
-                 aB = dB.h.Matrix[0],
-                 pB = dB.h.Matrix[1],
-                 rB = jB === IB.l.NormalKind ? dB.m.TransformNormalFromFloatsToRef : dB.m.TransformCoordinatesFromFloatsToRef;
+               const cB = oB.m.rN[0],
+                 nB = oB.m.Matrix[0],
+                 hB = oB.m.Matrix[1],
+                 zB = IB === GB.i.NormalKind ? oB.s.TransformNormalFromFloatsToRef : oB.s.TransformCoordinatesFromFloatsToRef;
```

#### 278. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3262` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3262) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3262)

```diff
-                 for (aB.reset(), jB = 0; jB < 4; jB++) JB = nB[sB + jB], JB > 0 && (dB.c.FromFloat32ArrayToRefScaled(zB, Math.floor(16 * QB[sB + jB]), JB, pB), aB.addToSelf(pB));
+                 for (nB.reset(), IB = 0; IB < 4; IB++) NB = JB[FB + IB], NB > 0 && (oB.b.FromFloat32ArrayToRefScaled(ZB, Math.floor(16 * TB[FB + IB]), NB, hB), nB.addToSelf(hB));
```

#### 279. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3264` → after: `L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3264) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3264)

```diff
-                   for (jB = 0; jB < 4; jB++) JB = uB[sB + jB], JB > 0 && (dB.c.FromFloat32ArrayToRefScaled(zB, Math.floor(16 * NB[sB + jB]), JB, pB), aB.addToSelf(pB));
+                   for (IB = 0; IB < 4; IB++) NB = kB[FB + IB], NB > 0 && (oB.b.FromFloat32ArrayToRefScaled(ZB, Math.floor(16 * vB[FB + IB]), NB, hB), nB.addToSelf(hB));
```

#### 280. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3270)

```diff
-             let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.l.PositionKind;
+             let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GB.i.PositionKind;
```

#### 281. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3283` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3283) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3283)

```diff
-                 case IB.l.PositionKind:
+                 case GB.i.PositionKind:
```

#### 282. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3286` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3286) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3286)

```diff
-                 case IB.l.NormalKind:
+                 case GB.i.NormalKind:
```

#### 283. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3289)

```diff
-                 case IB.l.TangentKind:
+                 case GB.i.TangentKind:
```

#### 284. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3292)

```diff
-                 case IB.l.UVKind:
+                 case GB.i.UVKind:
```

#### 285. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3295)

```diff
-                 case IB.l.UV2Kind:
+                 case GB.i.UV2Kind:
```

#### 286. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3298)

```diff
-                 case IB.l.ColorKind:
+                 case GB.i.ColorKind:
```

#### 287. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3320-L3321` → after: `L3320-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3320-L3321) · [Before (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3320-L3321)

```diff
-               const BB = NB(IB.l.MatricesIndicesKind),
-                 nB = NB(IB.l.MatricesWeightsKind);
+               const BB = vB(GB.i.MatricesIndicesKind),
+                 JB = vB(GB.i.MatricesWeightsKind);
```

#### 288. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3324-L3325` → after: `L3324-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3324-L3325) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3324-L3325)

```diff
-                   aB = dB ? NB(IB.l.MatricesIndicesExtraKind) : null,
-                   pB = dB ? NB(IB.l.MatricesWeightsExtraKind) : null;
+                   nB = oB ? vB(GB.i.MatricesIndicesExtraKind) : null,
+                   hB = oB ? vB(GB.i.MatricesWeightsExtraKind) : null;
```

#### 289. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3330-L3331` → after: `L3330-L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3330-L3331) · [Before (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3330-L3331)

```diff
-               const jB = NB(IB.l.MatricesIndicesKind),
-                 nB = NB(IB.l.MatricesWeightsKind);
+               const IB = vB(GB.i.MatricesIndicesKind),
+                 JB = vB(GB.i.MatricesWeightsKind);
```

#### 290. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3334-L3335)

```diff
-                   uB = dB ? NB(IB.l.MatricesIndicesExtraKind) : null,
-                   UB = dB ? NB(IB.l.MatricesWeightsExtraKind) : null,
+                   kB = oB ? vB(GB.i.MatricesIndicesExtraKind) : null,
+                   cB = oB ? vB(GB.i.MatricesWeightsExtraKind) : null,
```

#### 291. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3340)

```diff
-             if (!1 !== jB.updatePositionsArray && QB === IB.l.PositionKind) {
+             if (!1 !== IB.updatePositionsArray && TB === GB.i.PositionKind) {
```

#### 292. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3344-L3345` → after: `L3344-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3344-L3345) · [Before (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3344-L3345)

```diff
-                 for (let zB = jB; zB < BB.length; zB++) BB[zB] = new dB.m;
-               for (let QB = 0, nB = 0; QB < BB.length; QB++, nB += 3) BB[QB].U3(zB[nB], zB[nB + 1], zB[nB + 2]);
+                 for (let ZB = IB; ZB < BB.length; ZB++) BB[ZB] = new oB.s;
+               for (let TB = 0, JB = 0; TB < BB.length; TB++, JB += 3) BB[TB].cBB(ZB[JB], ZB[JB + 1], ZB[JB + 2]);
```

#### 293. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3357` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3357) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3357)

```diff
-             }, null, IB.l.NormalKind)
+             }, null, GB.i.NormalKind)
```

#### 294. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3367)

```diff
-             }, zB, IB.l.PositionKind)
+             }, ZB, GB.i.PositionKind)
```

#### 295. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3370` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3370) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3370)

```diff
-             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new aB.c(dB.m.Zero(), dB.m.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new nB.d(oB.s.Zero(), oB.s.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 296. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3373-L3374` → after: `L3373-L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3373-L3374) · [Before (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3373-L3374)

```diff
-             if (!this.cL) return this;
-             const jB = this.cL.length;
+             if (!this.EW) return this;
+             const IB = this.EW.length;
```

#### 297. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3376` → after: `L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3376) · [Before (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3376)

```diff
-               const QB = this.cL[zB];
+               const TB = this.EW[ZB];
```

#### 298. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3382` → after: `L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3382) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3382)

```diff
-             this.cJ || (this._boundingInfoIsDirty = !0)
+             this.XN || (this._boundingInfoIsDirty = !0)
```

#### 299. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3385` → after: `L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3385) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3385)

```diff
-             return this.rV().isInFrustum(BB, this.cullingStrategy)
+             return this.qm().isInFrustum(BB, this.cullingStrategy)
```

#### 300. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3388` → after: `L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3388) · [Before (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3388)

```diff
-             return this.rV().isCompletelyInFrustum(BB)
+             return this.qm().isCompletelyInFrustum(BB)
```

#### 301. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3390` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3390) · [Before (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3390)

```diff
-           lQB(BB) {
+           yJB(BB) {
```

#### 302. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3393-L3394` → after: `L3393-L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3393-L3394) · [Before (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3393-L3394)

```diff
-             const QB = this.rV(),
-               nB = BB.rV();
+             const TB = this.qm(),
+               JB = BB.qm();
```

#### 303. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3398` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3398) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3398)

```diff
-                 if (dB.lQB(BB, jB, !0)) return !0;
+                 if (oB.yJB(BB, IB, !0)) return !0;
```

#### 304. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3402` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3402) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3402)

```diff
-             return this.rV().intersectsPoint(BB)
+             return this.qm().intersectsPoint(BB)
```

#### 305. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3416)

```diff
-             const zB = this.aY().collisionCoordinator;
+             const ZB = this.JR().collisionCoordinator;
```

#### 306. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3425)

```diff
-               for (let nB = zB; nB < QB; nB++) BB._lastColliderWorldVertices.push(dB.m.TransformCoordinates(this._positions[nB], jB))
+               for (let JB = ZB; JB < TB; JB++) BB._lastColliderWorldVertices.push(oB.s.TransformCoordinates(this._positions[JB], IB))
```

#### 307. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3427)

```diff
-             return zB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.dQB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.bJ(), this, this._shouldConvertRHS(), 7 === BB.bJ()?.fillMode), this
+             return ZB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.MTB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.LN(), this, this._shouldConvertRHS(), 7 === BB.LN()?.fillMode), this
```

#### 308. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3442-L3445` → after: `L3442-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3442-L3445) · [Before (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3442-L3445)

```diff
-             if (!this.rV()._checkCollision(BB)) return this;
-             const jB = dB.h.Matrix[0],
-               zB = dB.h.Matrix[1];
-             return dB.c.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, jB), this.worldMatrixFromCache.multiplyToRef(jB, zB), this._processCollisionsForSubMeshes(BB, zB), this
+             if (!this.qm()._checkCollision(BB)) return this;
+             const IB = oB.m.Matrix[0],
+               ZB = oB.m.Matrix[1];
+             return oB.b.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, IB), this.worldMatrixFromCache.multiplyToRef(IB, ZB), this._processCollisionsForSubMeshes(BB, ZB), this
```

#### 309. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3454` → after: `L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3454) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3454)

```diff
-             const NB = new UB.d,
+             const vB = new cB.e,
```

#### 310. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3457-L3460` → after: `L3457-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3457-L3460) · [Before (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3457-L3460)

```diff
-               pB = this.rV();
-             if (!this.cL) return NB;
-             if (!IB && (!BB.intersectsSphere(pB.fQB, aB) || !BB.intersectsBox(pB.boundingBox, aB))) return NB;
-             if (QB) return NB.hit = !IB, NB.pickedMesh = IB ? null : this, NB.distance = IB ? 0 : dB.m.Distance(BB.origin, pB.fQB.center), NB.subMeshId = 0, NB;
+               hB = this.qm();
+             if (!this.EW) return vB;
+             if (!GB && (!BB.intersectsSphere(hB.ZJB, nB) || !BB.intersectsBox(hB.boundingBox, nB))) return vB;
+             if (TB) return vB.hit = !GB, vB.pickedMesh = GB ? null : this, vB.distance = GB ? 0 : oB.s.Distance(BB.origin, hB.ZJB.center), vB.subMeshId = 0, vB;
```

#### 311. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3467` → after: `L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3467) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3467)

```diff
-               const BB = sB.data[dB].bJ();
+               const BB = FB.data[oB].LN();
```

#### 312. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3473)

```diff
-             if (!mB) return NB.hit = !0, NB.pickedMesh = this, NB.distance = dB.m.Distance(BB.origin, pB.fQB.center), NB.subMeshId = -1, NB;
+             if (!gB) return vB.hit = !0, vB.pickedMesh = this, vB.distance = oB.s.Distance(BB.origin, hB.ZJB.center), vB.subMeshId = -1, vB;
```

#### 313. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3477)

```diff
-               const nB = QB.intersects(BB, this._positions, this.dQB(), jB, zB);
+               const JB = TB.intersects(BB, this._positions, this.MTB(), IB, ZB);
```

#### 314. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3482-L3486` → after: `L3482-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3482-L3486) · [Before (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3482-L3486)

```diff
-                 zB = dB.h.KJ[0],
-                 QB = dB.h.KJ[1];
-               dB.m.TransformCoordinatesToRef(BB.origin, jB, zB), BB.direction.scaleToRef(rB.distance, QB);
-               const IB = dB.m.TransformNormal(QB, jB).addInPlace(zB);
-               return NB.hit = !0, NB.distance = dB.m.Distance(zB, IB), NB.pickedPoint = IB, NB.pickedMesh = this, NB.bu = rB.bu || 0, NB.bv = rB.bv || 0, NB.subMeshFaceId = rB.faceId, NB.faceId = rB.faceId + sB.data[rB._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
+                 ZB = oB.m.rN[0],
+                 TB = oB.m.rN[1];
+               oB.s.TransformCoordinatesToRef(BB.origin, IB, ZB), BB.direction.scaleToRef(zB.distance, TB);
+               const GB = oB.s.TransformNormal(TB, IB).addInPlace(ZB);
+               return vB.hit = !0, vB.distance = oB.s.Distance(ZB, GB), vB.pickedPoint = GB, vB.pickedMesh = this, vB.bu = zB.bu || 0, vB.bv = zB.bv || 0, vB.subMeshFaceId = zB.faceId, vB.faceId = zB.faceId + FB.data[zB._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
```

#### 315. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3495-L3497` → after: `L3495-L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3495-L3497) · [Before (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3495-L3497)

```diff
-             if (this.cL)
-               for (; this.cL.length;) this.cL[0].dispose(BB);
-             else this.cL = [];
+             if (this.EW)
+               for (; this.EW.length;) this.EW[0].dispose(BB);
+             else this.EW = [];
```

#### 316. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3502)

```diff
-             const QB = this.aY();
+             const TB = this.JR();
```

#### 317. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3522-L3523` → after: `L3522-L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3522-L3523) · [Before (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3522-L3523)

```diff
-             const dB = QB.wJ();
-             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, dB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), dB.wipeCaches(), QB.qY(this), this._parentContainer) {
+             const oB = TB.PN();
+             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, oB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), oB.wipeCaches(), TB.jR(this), this._parentContainer) {
```

#### 318. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3528` → after: `L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3528) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3528)

```diff
-               for (jB = 0; jB < QB.RL.length; jB++) QB.RL[jB].emitter === this && (QB.RL[jB].dispose(), jB--);
+               for (IB = 0; IB < TB.DW.length; IB++) TB.DW[IB].emitter === this && (TB.DW[IB].dispose(), IB--);
```

#### 319. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3533-L3534` → after: `L3533-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3533-L3534) · [Before (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3533-L3534)

```diff
-             BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.dQB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSub … [truncated]
-             for (let jB = 0; jB < BB.facetNb; jB++) BB.facetNormals[jB] = dB.m.Zero(), BB.facetPositions[jB] = dB.m.Zero();
+             BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.MTB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSub … [truncated]
+             for (let IB = 0; IB < BB.facetNb; IB++) BB.facetNormals[IB] = oB.s.Zero(), BB.facetPositions[IB] = oB.s.Zero();
```

#### 320. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3540-L3543` → after: `L3540-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3540-L3543) · [Before (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3540-L3543)

```diff
-             const jB = this.getVerticesData(IB.l.PositionKind),
-               zB = this.dQB(),
-               QB = this.getVerticesData(IB.l.NormalKind)?.slice(),
-               nB = this.rV();
+             const IB = this.getVerticesData(GB.i.PositionKind),
+               ZB = this.MTB(),
+               TB = this.getVerticesData(GB.i.NormalKind)?.slice(),
+               JB = this.qm();
```

#### 321. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3558-L3559` → after: `L3558-L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3558-L3559) · [Before (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3558-L3559)

```diff
-                 const jB = this.aY().activeCamera;
-                 BB.facetDepthSortFrom = jB ? jB.position : dB.m.Zero()
+                 const IB = this.JR().activeCamera;
+                 BB.facetDepthSortFrom = IB ? IB.position : oB.s.Zero()
```

#### 322. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3569)

```diff
-               BB.invertedMatrix = dB.c.Identity(), BB.facetDepthSortOrigin = dB.m.Zero()
+               BB.invertedMatrix = oB.b.Identity(), BB.facetDepthSortOrigin = oB.s.Zero()
```

#### 323. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3571)

```diff
-             BB.bbSize.x = nB.maximum.x - nB.minimum.x > gB.c ? nB.maximum.x - nB.minimum.x : gB.c, BB.bbSize.y = nB.maximum.y - nB.minimum.y > gB.c ? nB.maximum.y - nB.minimum.y : gB.c, BB.bbSize.z = nB.maximum.z - nB.minimum.z > gB.c ? nB.maximum.z - nB.minimum.z : gB.c;
+             BB.bbSize.x = JB.maximum.x - JB.minimum.x > dB.d ? JB.maximum.x - JB.minimum.x : dB.d, BB.bbSize.y = JB.maximum.y - JB.minimum.y > dB.d ? JB.maximum.y - JB.minimum.y : dB.d, BB.bbSize.z = JB.maximum.z - JB.minimum.z > dB.d ? JB.maximum.z - JB.minimum.z : dB.d;
```

#### 324. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3573)

```diff
-             if (uB = uB > BB.bbSize.z ? uB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / uB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / uB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / uB … [truncated]
+             if (kB = kB > BB.bbSize.z ? kB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / kB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / kB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / kB … [truncated]
```

#### 325. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3597)

```diff
-             const jB = dB.m.Zero();
+             const IB = oB.s.Zero();
```

#### 326. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3603)

```diff
-             return dB.m.TransformCoordinatesToRef(zB, QB, jB), this
+             return oB.s.TransformCoordinatesToRef(ZB, TB, IB), this
```

#### 327. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3606)

```diff
-             const jB = dB.m.Zero();
+             const IB = oB.s.Zero();
```

#### 328. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3611)

```diff
-             return dB.m.TransformNormalToRef(zB, this.getWorldMatrix(), jB), this
+             return oB.s.TransformNormalToRef(ZB, this.getWorldMatrix(), IB), this
```

#### 329. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3614` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3614) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3614)

```diff
-             const QB = this.rV(),
+             const TB = this.qm(),
```

#### 330. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3625` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3625) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3625)

```diff
-               uB = dB.h.Matrix[5];
+               kB = oB.m.Matrix[5];
```

#### 331. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3627-L3628` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3627-L3628) · [Before (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3627-L3628)

```diff
-             const UB = dB.h.KJ[8];
-             dB.m.TransformCoordinatesFromFloatsToRef(BB, jB, zB, uB, UB);
+             const cB = oB.m.rN[8];
+             oB.s.TransformCoordinatesFromFloatsToRef(BB, IB, ZB, kB, cB);
```

#### 332. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3630` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3630) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3630)

```diff
-             return QB && dB.m.TransformCoordinatesFromFloatsToRef(QB.x, QB.y, QB.z, NB, QB), aB
+             return TB && oB.s.TransformCoordinatesFromFloatsToRef(TB.x, TB.y, TB.z, vB, TB), nB
```

#### 333. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3655-L3656` → after: `L3655-L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3655-L3656) · [Before (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3655-L3656)

```diff
-             const jB = this.getVerticesData(IB.l.PositionKind),
-               zB = this.dQB();
+             const IB = this.getVerticesData(GB.i.PositionKind),
+               ZB = this.MTB();
```

#### 334. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3658-L3660` → after: `L3658-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3658-L3660) · [Before (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3658-L3660)

```diff
-             return QB = this.isVerticesDataPresent(IB.l.NormalKind) ? this.getVerticesData(IB.l.NormalKind) : [], NB.e.ComputeNormals(jB, zB, QB, {
-               useRightHandedSystem: this.aY().useRightHandedSystem
-             }), this.setVerticesData(IB.l.NormalKind, QB, BB), this
+             return TB = this.isVerticesDataPresent(GB.i.NormalKind) ? this.getVerticesData(GB.i.NormalKind) : [], vB.c.ComputeNormals(IB, ZB, TB, {
+               useRightHandedSystem: this.JR().useRightHandedSystem
+             }), this.setVerticesData(GB.i.NormalKind, TB, BB), this
```

#### 335. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3663` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3663) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3663)

```diff
-             const BB = this.dQB();
+             const BB = this.MTB();
```

#### 336. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3667)

```diff
-             } = await zB.e(356).then((() => zB(42687)));
+             } = await ZB.e(356).then((() => ZB(42552)));
```

#### 337. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3672-L3674` → after: `L3672-L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3672-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3672-L3674) · [Before (L3672-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3672-L3674)

```diff
-             const zB = dB.h.KJ[0],
-               QB = dB.h.KJ[1];
-             return dB.m.CrossToRef(jB, BB, QB), dB.m.CrossToRef(BB, QB, zB), this.rotationQuaternion ? dB.d.RotationQuaternionFromAxisToRef(zB, BB, QB, this.rotationQuaternion) : dB.m.RotationFromAxisToRef(zB, BB, QB, this.rotation), this
+             const ZB = oB.m.rN[0],
+               TB = oB.m.rN[1];
+             return oB.s.CrossToRef(IB, BB, TB), oB.s.CrossToRef(BB, TB, ZB), this.rotationQuaternion ? oB.f.RotationQuaternionFromAxisToRef(ZB, BB, TB, this.rotationQuaternion) : oB.s.RotationFromAxisToRef(ZB, BB, TB, this.rotation), this
```

#### 338. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3680` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3680) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3680)

```diff
-             throw (0, yB.k)("EdgesRenderer")
+             throw (0, qB.m)("EdgesRenderer")
```

#### 339. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3683` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3683) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3683)

```diff
-             throw (0, yB.k)("EdgesRenderer")
+             throw (0, qB.m)("EdgesRenderer")
```

#### 340. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3686` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3686) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3686)

```diff
-             return this._scene.RL.filter((BB => BB.emitter === this))
+             return this._scene.DW.filter((BB => BB.emitter === this))
```

#### 341. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3690` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3690) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3690)

```diff
-           jB = [MB.f.filter((function() {
+           IB = [sB.h.filter((function() {
```

#### 342. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3692` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3692) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3692)

```diff
-           }))], (0, QB.e)(BB, null, jB, {
+           }))], (0, TB.j)(BB, null, IB, {
```

#### 343. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3708` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3708) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3708)

```diff
-         })(), BB.OCCLUSION_TYPE_NONE = ((0, QB.g)(BB, sB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
+         })(), BB.OCCLUSION_TYPE_NONE = ((0, TB.l)(BB, FB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
```

#### 344. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3713-L3714` → after: `L3713-L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3713-L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3713-L3714) · [Before (L3713-L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3713-L3714)

```diff
-       YB || (YB = !0, (0, iB.d)("BABYLON.AbstractMesh", FB))
-     }(sB = FB.prototype).createOrUpdateSubmeshesOctree ?? (sB.createOrUpdateSubmeshesOctree = (0, yB.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (JB = FB.prototype).getPhysicsImpostor ?? (JB.getPhysicsImpostor = (0, yB.i)("AbstractMesh", "getPhysicsImpostor")), (mB = FB … [truncated]
+       jB || (jB = !0, (0, OB.i)("BABYLON.AbstractMesh", MB))
+     }(FB = MB.prototype).createOrUpdateSubmeshesOctree ?? (FB.createOrUpdateSubmeshesOctree = (0, qB.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (NB = MB.prototype).getPhysicsImpostor ?? (NB.getPhysicsImpostor = (0, qB.j)("AbstractMesh", "getPhysicsImpostor")), (gB = MB … [truncated]
```

#### 345. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3716` → after: `L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3716) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3716)

```diff
-   40525: (BB, jB, zB) => {
+   40469: (BB, IB, ZB) => {
```

#### 346. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3718` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3718) · [Before (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3718)

```diff
-       c: () => kB
+       e: () => yB
```

#### 347. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3720-L3733` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3720-L3733) · [Before (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3720-L3733)

```diff
-     var QB = zB(37171),
-       nB = zB(37379),
-       dB = zB(40519),
-       IB = zB(40211),
-       NB = zB(40388),
-       uB = zB(40529),
-       UB = zB(40404),
-       aB = zB(40164),
-       pB = zB(38783),
-       rB = zB(40089),
-       sB = zB(40418),
-       JB = zB(37197),
-       mB = zB(40535),
-       yB = zB(40125);
+     var TB = ZB(37120),
+       JB = ZB(37311),
+       oB = ZB(40463),
+       GB = ZB(40188),
+       vB = ZB(40341),
+       kB = ZB(40473),
+       cB = ZB(40351),
+       nB = ZB(40152),
+       hB = ZB(38718),
+       zB = ZB(40092),
+       FB = ZB(40361),
+       NB = ZB(37147),
+       gB = ZB(40480),
+       qB = ZB(40129);
```

#### 348. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3739)

```diff
-         this._boundingBias ? this._boundingBias.jH(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
+         this._boundingBias ? this._boundingBias.TY(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
```

#### 349. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3742)

```diff
-         const jB = new kB(kB.RandomId(), BB.aY());
+         const IB = new yB(yB.RandomId(), BB.JR());
```

#### 350. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3753-L3755)

```diff
-           minimum: new QB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-           maximum: new QB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
-         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = jB || JB.c.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
+           minimum: new TB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+           maximum: new TB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
+         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = IB || NB.e.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
```

#### 351. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3789` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3789) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3789)

```diff
-         const nB = new IB.l(this._engine, jB, BB, {
+         const JB = new GB.i(this._engine, IB, BB, {
```

#### 352. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3807` → after: `L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3807) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3807)

```diff
-         if (nB === IB.l.PositionKind) {
+         if (JB === GB.i.PositionKind) {
```

#### 353. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3809-L3810` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3809-L3810) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3809-L3810)

```diff
-           const zB = this._extend && this._extend.minimum || new QB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-             nB = this._extend && this._extend.maximum || new QB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
+           const ZB = this._extend && this._extend.minimum || new TB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+             JB = this._extend && this._extend.maximum || new TB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
```

#### 354. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3826)

```diff
-         QB && (QB.update(jB), BB === IB.l.PositionKind && this._updateBoundingInfo(zB, jB), this._notifyUpdate(BB))
+         TB && (TB.update(IB), BB === GB.i.PositionKind && this._updateBoundingInfo(ZB, IB), this._notifyUpdate(BB))
```

#### 355. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3832-L3833` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3832-L3833) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3832-L3833)

```diff
-             jB.hasBoundingInfo ? jB.rV().reConstruct(this._extend.minimum, this._extend.maximum) : jB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
-             const BB = jB.cL;
+             IB.hasBoundingInfo ? IB.qm().reConstruct(this._extend.minimum, this._extend.maximum) : IB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
+             const BB = IB.EW;
```

#### 356. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3860` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3860) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3860)

```diff
-         QB && (0, yB.c)(QB, zB.getSize(), zB.type, zB.byteOffset, zB.byteStride, zB.normalized, this._totalVertices, jB[BB])
+         TB && (0, qB.i)(TB, ZB.getSize(), ZB.type, ZB.byteOffset, ZB.byteStride, ZB.normalized, this._totalVertices, IB[BB])
```

#### 357. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3910` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3910) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3910)

```diff
-       dQB(BB, jB) {
+       MTB(BB, IB) {
```

#### 358. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3940` → after: `L3940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3940) · [Before (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3940)

```diff
-           if (!BB && (BB = this.getVerticesData(IB.l.PositionKind), !BB)) return;
+           if (!BB && (BB = this.getVerticesData(GB.i.PositionKind), !BB)) return;
```

#### 359. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3947)

```diff
-           zB._buffer.getBuffer() || zB.create(), jB === IB.l.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
+           ZB._buffer.getBuffer() || ZB.create(), IB === GB.i.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
```

#### 360. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3968)

```diff
-             BB.removePendingData(this), BB.aE || pB.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${zB}`)
+             BB.removePendingData(this), BB.mC || hB.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ZB}`)
```

#### 361. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3973` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3973) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3973)

```diff
-         const BB = this.dQB(!1);
+         const BB = this.MTB(!1);
```

#### 362. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3981)

```diff
-         const jB = this.getVerticesData(IB.l.PositionKind, !1);
+         const IB = this.getVerticesData(GB.i.PositionKind, !1);
```

#### 363. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3984` → after: `L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3984) · [Before (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3984)

```diff
-           this.setVerticesData(IB.l.PositionKind, jB, !1)
+           this.setVerticesData(GB.i.PositionKind, IB, !1)
```

#### 364. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3986)

```diff
-         const zB = this.getVerticesData(IB.l.NormalKind, !1);
+         const ZB = this.getVerticesData(GB.i.NormalKind, !1);
```

#### 365. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3989)

```diff
-           this.setVerticesData(IB.l.NormalKind, zB, !1)
+           this.setVerticesData(GB.i.NormalKind, ZB, !1)
```

#### 366. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3997` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3997) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3997)

```diff
-         const BB = this.getVerticesData(IB.l.PositionKind);
+         const BB = this.getVerticesData(GB.i.PositionKind);
```

#### 367. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3999` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3999) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L3999)

```diff
-         for (let jB = 3 * this._positionsCache.length, zB = this._positionsCache.length; jB < BB.length; jB += 3, ++zB) this._positionsCache[zB] = QB.m.FromArray(BB, jB);
+         for (let IB = 3 * this._positionsCache.length, ZB = this._positionsCache.length; IB < BB.length; IB += 3, ++ZB) this._positionsCache[ZB] = TB.s.FromArray(BB, IB);
```

#### 368. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4030)

```diff
-           zB = this.dQB(void 0, !0);
+           ZB = this.MTB(void 0, !0);
```

#### 369. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4051-L4052` → after: `L4051-L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4051-L4052) · [Before (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4051-L4052)

```diff
-           const sB = (0, yB.t)(zB, NB, uB, UB, aB, rB, !0),
-             JB = new IB.l(this._engine, sB, QB, {
+           const FB = (0, qB.s)(ZB, vB, kB, cB, nB, zB, !0),
+             NB = new GB.i(this._engine, FB, TB, {
```

#### 370. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4066)

```diff
-         return jB._boundingInfo = new UB.c(this._extend.minimum, this._extend.maximum), jB
+         return IB._boundingInfo = new cB.d(this._extend.minimum, this._extend.maximum), IB
```

#### 371. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4070)

```diff
-         return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, rB.d && rB.d.HasTags(this) && (BB.tags = rB.d.GetTags(this)), BB
+         return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, zB.b && zB.b.HasTags(this) && (BB.tags = zB.b.GetTags(this)), BB
```

#### 372. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4081` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4081) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4081)

```diff
-         return this.isVerticesDataPresent(IB.l.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(IB.l.PositionKind)), this.isVertexBufferUpdatable(IB.l.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(IB.l.NormalKind) && (BB.norma … [truncated]
+         return this.isVerticesDataPresent(GB.i.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(GB.i.PositionKind)), this.isVertexBufferUpdatable(GB.i.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(GB.i.NormalKind) && (BB.norma … [truncated]
```

#### 373. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4088)

```diff
-         return aB.i.RandomId()
+         return nB.j.RandomId()
```

#### 374. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4096)

```diff
-         const zB = jB.aY(),
+         const ZB = IB.JR(),
```

#### 375. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4106` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4106) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4106)

```diff
-             jB.setVerticesData(IB.l.PositionKind, QB, !1)
+             IB.setVerticesData(GB.i.PositionKind, TB, !1)
```

#### 376. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4110` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4110) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4110)

```diff
-             jB.setVerticesData(IB.l.NormalKind, QB, !1)
+             IB.setVerticesData(GB.i.NormalKind, TB, !1)
```

#### 377. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4114)

```diff
-             jB.setVerticesData(IB.l.TangentKind, QB, !1)
+             IB.setVerticesData(GB.i.TangentKind, TB, !1)
```

#### 378. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4118` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4118) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4118)

```diff
-             if (mB.d)
+             if (gB.e)
```

#### 379. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4120` → after: `L4120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4120) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4120)

```diff
-             jB.setVerticesData(IB.l.UVKind, QB, !1)
+             IB.setVerticesData(GB.i.UVKind, TB, !1)
```

#### 380. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4124)

```diff
-             if (mB.d)
+             if (gB.e)
```

#### 381. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4126` → after: `L4126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4126) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4126)

```diff
-             jB.setVerticesData(IB.l.UV2Kind, QB, !1)
+             IB.setVerticesData(GB.i.UV2Kind, TB, !1)
```

#### 382. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4130` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4130) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4130)

```diff
-             if (mB.d)
+             if (gB.e)
```

#### 383. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4132` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4132) · [Before (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4132)

```diff
-             jB.setVerticesData(IB.l.UV3Kind, QB, !1)
+             IB.setVerticesData(GB.i.UV3Kind, TB, !1)
```

#### 384. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4136)

```diff
-             if (mB.d)
+             if (gB.e)
```

#### 385. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4138` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4138) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4138)

```diff
-             jB.setVerticesData(IB.l.UV4Kind, QB, !1)
+             IB.setVerticesData(GB.i.UV4Kind, TB, !1)
```

#### 386. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4142` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4142) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4142)

```diff
-             if (mB.d)
+             if (gB.e)
```

#### 387. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4144` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4144) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4144)

```diff
-             jB.setVerticesData(IB.l.UV5Kind, QB, !1)
+             IB.setVerticesData(GB.i.UV5Kind, TB, !1)
```

#### 388. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4148` → after: `L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4148) · [Before (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4148)

```diff
-             if (mB.d)
+             if (gB.e)
```

#### 389. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4150` → after: `L4150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4150) · [Before (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4150)

```diff
-             jB.setVerticesData(IB.l.UV6Kind, QB, !1)
+             IB.setVerticesData(GB.i.UV6Kind, TB, !1)
```

#### 390. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4154` → after: `L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4154) · [Before (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4154)

```diff
-             jB.setVerticesData(IB.l.ColorKind, QB, !1, zB.colorsAttrDesc.stride)
+             IB.setVerticesData(GB.i.ColorKind, TB, !1, ZB.colorsAttrDesc.stride)
```

#### 391. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4163` → after: `L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4163) · [Before (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4163)

```diff
-             jB.setVerticesData(IB.l.MatricesIndicesKind, nB, !1)
+             IB.setVerticesData(GB.i.MatricesIndicesKind, JB, !1)
```

#### 392. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4172` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4172) · [Before (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4172)

```diff
-             jB.setVerticesData(IB.l.MatricesIndicesExtraKind, nB, !1)
+             IB.setVerticesData(GB.i.MatricesIndicesExtraKind, JB, !1)
```

#### 393. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4176` → after: `L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4176) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4176)

```diff
-             jB.setVerticesData(IB.l.MatricesWeightsKind, QB, !1)
+             IB.setVerticesData(GB.i.MatricesWeightsKind, TB, !1)
```

#### 394. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4184` → after: `L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4184) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4184)

```diff
-             jB.cL = [];
+             IB.EW = [];
```

#### 395. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4191)

```diff
-               NB.d.AddToMesh(zB, nB, dB, IB, uB, jB)
+               vB.e.AddToMesh(ZB, JB, oB, GB, kB, IB)
```

#### 396. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4195-L4196` → after: `L4195-L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4195-L4196) · [Before (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4195-L4196)

```diff
-           if (jB.setVerticesData(IB.l.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), jB.setVerticesData(IB.l.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && jB.setVerticesData(IB.l.TangentKind, BB.tangents, BB. … [truncated]
-             if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, jB.setVerticesData(IB.l.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
+           if (IB.setVerticesData(GB.i.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), IB.setVerticesData(GB.i.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && IB.setVerticesData(GB.i.TangentKind, BB.tangents, BB. … [truncated]
+             if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, IB.setVerticesData(GB.i.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
```

#### 397. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4203` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4203) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4203)

```diff
-               jB.setVerticesData(IB.l.MatricesIndicesKind, zB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
+               IB.setVerticesData(GB.i.MatricesIndicesKind, ZB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
```

#### 398. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4205` → after: `L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4205) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4205)

```diff
-             if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, jB.setVerticesData(IB.l.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable ||  … [truncated]
+             if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, IB.setVerticesData(GB.i.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable ||  … [truncated]
```

#### 399. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4212-L4213` → after: `L4212-L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4212-L4213) · [Before (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4212-L4213)

```diff
-               jB.setVerticesData(IB.l.MatricesIndicesExtraKind, zB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
-             } BB.matricesWeights && (kB._CleanMatricesWeights(BB, jB), jB.setVerticesData(IB.l.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && jB.setVerticesData(IB.l.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matric … [truncated]
+               IB.setVerticesData(GB.i.MatricesIndicesExtraKind, ZB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
+             } BB.matricesWeights && (yB._CleanMatricesWeights(BB, IB), IB.setVerticesData(GB.i.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && IB.setVerticesData(GB.i.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matric … [truncated]
```

#### 400. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4215-L4219` → after: `L4215-L4219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4215-L4219) · [Before (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4215-L4219)

```diff
-         if (BB.cL) {
-           jB.cL = [];
-           for (let zB = 0; zB < BB.cL.length; zB++) {
-             const QB = BB.cL[zB];
-             NB.d.AddToMesh(QB.materialIndex, QB.verticesStart, QB.verticesCount, QB.indexStart, QB.indexCount, jB)
+         if (BB.EW) {
+           IB.EW = [];
+           for (let ZB = 0; ZB < BB.EW.length; ZB++) {
+             const TB = BB.EW[ZB];
+             vB.e.AddToMesh(TB.materialIndex, TB.verticesStart, TB.verticesCount, TB.indexStart, TB.indexCount, IB)
```

#### 401. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4226` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4226) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4226)

```diff
-         if (!uB.c.CleanBoneMatrixWeights) return;
+         if (!kB.b.CleanBoneMatrixWeights) return;
```

#### 402. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4230` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4230) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4230)

```diff
-           const zB = jB.aY().getLastSkeletonById(BB.skeletonId);
+           const ZB = IB.JR().getLastSkeletonById(BB.skeletonId);
```

#### 403. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4234-L4235` → after: `L4234-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4234-L4235) · [Before (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4234-L4235)

```diff
-         const nB = jB.getVerticesData(IB.l.MatricesIndicesKind),
-           dB = jB.getVerticesData(IB.l.MatricesIndicesExtraKind),
+         const JB = IB.getVerticesData(GB.i.MatricesIndicesKind),
+           oB = IB.getVerticesData(GB.i.MatricesIndicesExtraKind),
```

#### 404. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4259` → after: `L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4259) · [Before (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4259)

```diff
-         jB.setVerticesData(IB.l.MatricesIndicesKind, nB), BB.matricesWeightsExtra && jB.setVerticesData(IB.l.MatricesIndicesExtraKind, dB)
+         IB.setVerticesData(GB.i.MatricesIndicesKind, JB), BB.matricesWeightsExtra && IB.setVerticesData(GB.i.MatricesIndicesExtraKind, oB)
```

#### 405. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4263` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4263) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4263)

```diff
-         return nB._loadedUniqueId = BB.uniqueId, rB.d && rB.d.AddTagsTo(nB, BB.tags), BB.delayLoadingFile ? (nB.delayLoadState = 4, nB.delayLoadingFile = zB + BB.delayLoadingFile, nB._boundingInfo = new UB.c(QB.m.FromArray(BB.boundingBoxMinimum), QB.m.FromArray(BB.boundingBoxMaxi … [truncated]
+         return JB._loadedUniqueId = BB.uniqueId, zB.b && zB.b.AddTagsTo(JB, BB.tags), BB.delayLoadingFile ? (JB.delayLoadState = 4, JB.delayLoadingFile = ZB + BB.delayLoadingFile, JB._boundingInfo = new cB.d(TB.s.FromArray(BB.boundingBoxMinimum), TB.s.FromArray(BB.boundingBoxMaxi … [truncated]
```

#### 406. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4267` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4267) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4267)

```diff
-   40570: (BB, jB, zB) => {
+   40510: (BB, IB, ZB) => {
```

#### 407. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4269-L4270` → after: `L4269-L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4269-L4270) · [Before (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4269-L4270)

```diff
-       d: () => pB,
-       h: () => JB
+       b: () => hB,
+       f: () => NB
```

#### 408. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4272-L4280` → after: `L4272-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4272-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4272-L4280) · [Before (L4272-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4272-L4280)

```diff
-     var QB = zB(37171),
-       nB = zB(38783),
-       dB = zB(40539),
-       IB = zB(40504),
-       NB = zB(38780),
-       uB = zB(40546),
-       UB = zB(40211),
-       aB = zB(37222);
-     class pB extends dB.e {
+     var TB = ZB(37120),
+       JB = ZB(38718),
+       oB = ZB(40488),
+       GB = ZB(40448),
+       vB = ZB(38714),
+       kB = ZB(40492),
+       cB = ZB(40188),
+       nB = ZB(37170);
+     class hB extends oB.b {
```

#### 409. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4282` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4282) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4282)

```diff
-         super(BB, jB.aY()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, jB.T_(this), this._sourceMesh = jB, this._unIndexed = jB._unIndexed, this.position.jH(jB.position), this.rotation.jH(jB.rotation), this.pp.jH(jB.pp), jB.rotationQuaternion && (this. … [truncated]
+         super(BB, IB.JR()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, IB.K3(this), this._sourceMesh = IB, this._unIndexed = IB._unIndexed, this.position.TY(IB.position), this.rotation.TY(IB.rotation), this.ek.TY(IB.ek), IB.rotationQuaternion && (this. … [truncated]
```

#### 410. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4286` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4286) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4286)

```diff
-           const BB = jB.rV();
+           const BB = IB.qm();
```

#### 411. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4304` → after: `L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4304) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4304)

```diff
-         this._sourceMesh?.receiveShadows !== BB && nB.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
+         this._sourceMesh?.receiveShadows !== BB && JB.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
```

#### 412. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4310` → after: `L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4310) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4310)

```diff
-         this._sourceMesh?.material !== BB && nB.c.Warn("Setting material on an instanced mesh has no effect")
+         this._sourceMesh?.material !== BB && JB.d.Warn("Setting material on an instanced mesh has no effect")
```

#### 413. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4316` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4316) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4316)

```diff
-         this._sourceMesh?.visibility !== BB && nB.c.Warn("Setting visibility on an instanced mesh has no effect")
+         this._sourceMesh?.visibility !== BB && JB.d.Warn("Setting visibility on an instanced mesh has no effect")
```

#### 414. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4322` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4322) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4322)

```diff
-         this._sourceMesh?.skeleton !== BB && nB.c.Warn("Setting skeleton on an instanced mesh has no effect")
+         this._sourceMesh?.skeleton !== BB && JB.d.Warn("Setting skeleton on an instanced mesh has no effect")
```

#### 415. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4328` → after: `L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4328) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4328)

```diff
-         this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && nB.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
+         this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && JB.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
```

#### 416. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4334` → after: `L4334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4334) · [Before (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4334)

```diff
-         this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && nB.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
+         this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && JB.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
```

#### 417. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4342` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4342) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4342)

```diff
-       get vQB() {
+       get wJB() {
```

#### 418. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4365` → after: `L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4365) · [Before (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4365)

```diff
-         return this.vQB && this.vQB.setVerticesData(BB, jB, zB, QB), this.vQB
+         return this.wJB && this.wJB.setVerticesData(BB, IB, ZB, TB), this.wJB
```

#### 419. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4368` → after: `L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4368) · [Before (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4368)

```diff
-         return this.vQB && this.vQB.updateVerticesData(BB, jB, zB, QB), this.vQB
+         return this.wJB && this.wJB.updateVerticesData(BB, IB, ZB, TB), this.wJB
```

#### 420. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4372` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4372) · [Before (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4372)

```diff
-         return this.vQB && this.vQB.setIndices(BB, jB), this.vQB
+         return this.wJB && this.wJB.setIndices(BB, IB), this.wJB
```

#### 421. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4377-L4378` → after: `L4377-L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4377-L4378) · [Before (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4377-L4378)

```diff
-       dQB() {
-         return this._sourceMesh.dQB()
+       MTB() {
+         return this._sourceMesh.MTB()
```

#### 422. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4386-L4387` → after: `L4386-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4386-L4387) · [Before (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4386-L4387)

```diff
-         if (this.hasBoundingInfo && this.rV().isLocked) return this;
-         BB = "object" === typeof jB ? jB : {
+         if (this.hasBoundingInfo && this.qm().isLocked) return this;
+         BB = "object" === typeof IB ? IB : {
```

#### 423. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4392` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4392) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4392)

```diff
-         return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, UB.l.PositionKind), QB), this
+         return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, cB.i.PositionKind), TB), this
```

#### 424. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4398)

```diff
-         if (super._activate(BB, jB), this._sourceMesh.cL || nB.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
+         if (super._activate(BB, IB), this._sourceMesh.EW || JB.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
```

#### 425. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4410-L4411` → after: `L4410-L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4410-L4411) · [Before (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4410-L4411)

```diff
-         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== uB.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
-           this._billboardWorldMatrix || (this._billboardWorldMatrix = new QB.c);
+         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== kB.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
+           this._billboardWorldMatrix || (this._billboardWorldMatrix = new TB.b);
```

#### 426. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4413` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4413) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4413)

```diff
-           return this._currentLOD._masterMesh = this, QB.h.KJ[7].jH(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.jH(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.jH(QB.h.KJ[7]), this._currentLOD._masterMesh = … [truncated]
+           return this._currentLOD._masterMesh = this, TB.m.rN[7].TY(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.TY(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.TY(TB.m.rN[7]), this._currentLOD._masterMesh = … [truncated]
```

#### 427. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4422)

```diff
-         const jB = this.vQB.getLODLevels();
+         const IB = this.wJB.getLODLevels();
```

#### 428. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4424-L4426` → after: `L4424-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4424-L4426) · [Before (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4424-L4426)

```diff
-           const jB = this.rV();
-           this._currentLOD = this.vQB.getLOD(BB, jB.fQB)
-         } else this._currentLOD = this.vQB;
+           const IB = this.qm();
+           this._currentLOD = this.wJB.getLOD(BB, IB.ZJB)
+         } else this._currentLOD = this.wJB;
```

#### 429. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4430` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4430) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4430)

```diff
-         return this.vQB._preActivateForIntermediateRendering(BB)
+         return this.wJB._preActivateForIntermediateRendering(BB)
```

#### 430. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4433-L4434` → after: `L4433-L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4433-L4434) · [Before (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4433-L4434)

```diff
-         if (this.releaseSubMeshes(), this._sourceMesh.cL)
-           for (let BB = 0; BB < this._sourceMesh.cL.length; BB++) this._sourceMesh.cL[BB].clone(this, this._sourceMesh);
+         if (this.releaseSubMeshes(), this._sourceMesh.EW)
+           for (let BB = 0; BB < this._sourceMesh.EW.length; BB++) this._sourceMesh.EW[BB].clone(this, this._sourceMesh);
```

#### 431. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4441)

```diff
-         return this.hasBoundingInfo ? this.rV().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+         return this.hasBoundingInfo ? this.qm().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 432. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4447-L4449` → after: `L4447-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4447-L4449) · [Before (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4447-L4449)

```diff
-         if (NB.e.DeepCopy(this, QB, ["name", "cL", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "vQB", "rY", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "bQB", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
-           for (let nB = 0; nB < this.aY().meshes.length; nB++) {
-             const BB = this.aY().meshes[nB];
+         if (vB.b.DeepCopy(this, TB, ["name", "EW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "wJB", "vR", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "sJB", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
+           for (let JB = 0; JB < this.JR().meshes.length; JB++) {
+             const BB = this.JR().meshes[JB];
```

#### 433. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4456` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4456) · [Before (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4456)

```diff
-         this._sourceMesh.e_(this), super.dispose(BB, jB)
+         this._sourceMesh.Z6(this), super.dispose(BB, IB)
```

#### 434. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4482` → after: `L4482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4482) · [Before (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4482)

```diff
-       rB || (rB = !0, IB.b._instancedMeshFactory = (BB, jB) => {
+       zB || (zB = !0, GB.c._instancedMeshFactory = (BB, IB) => {
```

#### 435. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4484-L4486` → after: `L4484-L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4484-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4484-L4486) · [Before (L4484-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4484-L4486)

```diff
-         if (jB.vY) {
-           zB.vY = {};
-           for (const BB in jB.vY) zB.vY[BB] = jB.vY[BB]
+         if (IB.Zm) {
+           ZB.Zm = {};
+           for (const BB in IB.Zm) ZB.Zm[BB] = IB.Zm[BB]
```

#### 436. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4489-L4492` → after: `L4489-L4492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4489-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4489-L4492) · [Before (L4489-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4489-L4492)

```diff
-       }, IB.b.prototype.bY = function(BB, jB) {
-         if (!this.vY) {
-           this.vY = {};
-           for (const BB of this.instances) BB.vY = {}
+       }, GB.c.prototype.Im = function(BB, IB) {
+         if (!this.Zm) {
+           this.Zm = {};
+           for (const BB of this.instances) BB.Zm = {}
```

#### 437. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4499-L4500` → after: `L4499-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4499-L4500) · [Before (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4499-L4500)

```diff
-           vertexArrayObjects: this.wJ().getCaps().vertexArrayObject ? {} : void 0
-         }), this.vY[BB] = null, this._userInstancedBuffersStorage.strides[BB] = jB;
+           vertexArrayObjects: this.PN().getCaps().vertexArrayObject ? {} : void 0
+         }), this.Zm[BB] = null, this._userInstancedBuffersStorage.strides[BB] = IB;
```

#### 438. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4507` → after: `L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4507) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4507)

```diff
-         for (const QB of this.instances) QB.vY[BB] = null;
+         for (const TB of this.instances) TB.Zm[BB] = null;
```

#### 439. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4509` → after: `L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4509) · [Before (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4509)

```diff
-       }, IB.b.prototype._processInstancedBuffers = function(BB, jB) {
+       }, GB.c.prototype._processInstancedBuffers = function(BB, IB) {
```

#### 440. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4524-L4525` → after: `L4524-L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4524-L4525) · [Before (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4524-L4525)

```diff
-         jB && (sB(this.vY, NB, uB, IB, aB), aB += QB);
-         for (let UB = 0; UB < nB; UB++) sB(BB[UB].vY, NB, uB, IB, aB), aB += QB;
+         IB && (FB(this.Zm, vB, kB, GB, nB), nB += TB);
+         for (let cB = 0; cB < JB; cB++) FB(BB[cB].Zm, vB, kB, GB, nB), nB += TB;
```

#### 441. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4534` → after: `L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4534) · [Before (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4534)

```diff
-         const yB = new UB.e(this.wJ(), IB, !0, QB, !1, !0);
+         const qB = new cB.e(this.PN(), GB, !0, TB, !1, !0);
```

#### 442. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4544` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4544) · [Before (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4544)

```diff
-       }, IB.b.prototype._invalidateInstanceVertexArrayObject = function() {
+       }, GB.c.prototype._invalidateInstanceVertexArrayObject = function() {
```

#### 443. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4546` → after: `L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4546) · [Before (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4546)

```diff
-           for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.wJ().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
+           for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.PN().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
```

#### 444. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4549` → after: `L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4549) · [Before (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4549)

```diff
-       }, IB.b.prototype._disposeInstanceSpecificData = function() {
+       }, GB.c.prototype._disposeInstanceSpecificData = function() {
```

#### 445. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4552)

```diff
-         for (const jB in this.vY) this._userInstancedBuffersStorage.vertexBuffers[jB] && this._userInstancedBuffersStorage.vertexBuffers[jB].dispose();
+         for (const IB in this.Zm) this._userInstancedBuffersStorage.vertexBuffers[IB] && this._userInstancedBuffersStorage.vertexBuffers[IB].dispose();
```

#### 446. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4558-L4559` → after: `L4558-L4559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4558-L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4558-L4559) · [Before (L4558-L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4558-L4559)

```diff
-         this._invalidateInstanceVertexArrayObject(), this.vY = {}
-       }, (0, aB.d)("BABYLON.InstancedMesh", pB))
+         this._invalidateInstanceVertexArrayObject(), this.Zm = {}
+       }, (0, nB.i)("BABYLON.InstancedMesh", hB))
```

#### 447. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4562)

```diff
-   40504: (BB, jB, zB) => {
+   40448: (BB, IB, ZB) => {
```

#### 448. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4564-L4566` → after: `L4564-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4564-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4564-L4566) · [Before (L4564-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4564-L4566)

```diff
-       b: () => vB,
-       f: () => OB,
-       g: () => lB
+       c: () => KB,
+       e: () => SB,
+       f: () => lB
```

#### 449. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4568-L4591` → after: `L4568-L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4568-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4568-L4591) · [Before (L4568-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4568-L4591)

```diff
-     var QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB = zB(37202),
-       GB = zB(40164),
-       LB = zB(40108),
-       gB = zB(38780),
-       tB = zB(40089),
-       SB = zB(40512),
-       MB = zB(40301),
-       EB = zB(37171),
-       iB = zB(37379),
-       qB = zB(40306),
-       fB = zB(40211),
-       oB = zB(40519),
-       HB = zB(40525),
-       DB = zB(40539),
-       FB = zB(40388),
-       YB = zB(40380),
- ... (8 more removed lines; see GitHub link above)
+     var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB = ZB(37153),
+       UB = ZB(40152),
+       WB = ZB(40110),
+       dB = ZB(38714),
+       CB = ZB(40092),
+       QB = ZB(40454),
+       sB = ZB(40269),
+       wB = ZB(37120),
+       OB = ZB(37311),
+       YB = ZB(40272),
+       iB = ZB(40188),
+       pB = ZB(40463),
+       aB = ZB(40469),
+       HB = ZB(40488),
+       MB = ZB(40341),
+       jB = ZB(40339),
+ ... (8 more added lines; see GitHub link above)
```

#### 450. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4630` → after: `L4630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4630) · [Before (L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4630)

```diff
-     class vB extends DB.e {
+     class KB extends HB.b {
```

#### 451. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4644` → after: `L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4644) · [Before (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4644)

```diff
-         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(fB.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
+         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(iB.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
```

#### 452. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4647` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4647) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4647)

```diff
-         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new kB.c), this._internalMeshDataInfo._onBeforeRenderObservable
+         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new yB.b), this._internalMeshDataInfo._onBeforeRenderObservable
```

#### 453. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4650` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4650) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4650)

```diff
-         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new kB.c), this._internalMeshDataInfo._onBeforeBindObservable
+         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new yB.b), this._internalMeshDataInfo._onBeforeBindObservable
```

#### 454. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4653` → after: `L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4653) · [Before (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4653)

```diff
-         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new kB.c), this._internalMeshDataInfo._onAfterRenderObservable
+         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new yB.b), this._internalMeshDataInfo._onAfterRenderObservable
```

#### 455. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4656)

```diff
-         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new kB.c), this._internalMeshDataInfo._onBetweenPassObservable
+         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new yB.b), this._internalMeshDataInfo._onBetweenPassObservable
```

#### 456. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4659` → after: `L4659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4659) · [Before (L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4659)

```diff
-         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new kB.c), this._internalMeshDataInfo._onBeforeDrawObservable
+         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new yB.b), this._internalMeshDataInfo._onBeforeDrawObservable
```

#### 457. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4664` → after: `L4664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4664) · [Before (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4664)

```diff
-       get bQB() {
+       get sJB() {
```

#### 458. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4744-L4745` → after: `L4744-L4745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4744-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4744-L4745) · [Before (L4744-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4744-L4745)

```diff
-         const nB = this.aY();
-         if (BB._geometry && BB._geometry.applyToMesh(this), gB.e.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "bQB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+         const JB = this.JR();
+         if (BB._geometry && BB._geometry.applyToMesh(this), dB.b.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "sJB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
```

#### 459. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4749` → after: `L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4749) · [Before (L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4749)

```diff
-         if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, tB.d && tB.d.HasTags(BB) && tB.d.AddTagsTo(this, tB.d.GetTags(BB, !0)), this … [truncated]
+         if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, CB.b && CB.b.HasTags(BB) && CB.b.AddTagsTo(this, CB.b.GetTags(BB, !0)), this … [truncated]
```

#### 460. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4764-L4765` → after: `L4764-L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4764-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4764-L4765) · [Before (L4764-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4764-L4765)

```diff
-         for (let dB = 0; dB < nB.RL.length; dB++) {
-           const jB = nB.RL[dB];
+         for (let oB = 0; oB < JB.DW.length; oB++) {
+           const IB = JB.DW[oB];
```

#### 461. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4768` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4768) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4768)

```diff
-         if (this.skeleton = BB.skeleton, QB && (BB._thinInstanceDataStorage.matrixData ? (this.i5("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB. … [truncated]
+         if (this.skeleton = BB.skeleton, TB && (BB._thinInstanceDataStorage.matrixData ? (this.ZBB("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB … [truncated]
```

#### 462. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4770` → after: `L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4770) · [Before (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4770)

```diff
-           for (const BB in jB.data) this.i5(BB, new Float32Array(jB.data[BB]), jB.strides[BB], !jB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = jB.sizes[BB]
+           for (const BB in IB.data) this.ZBB(BB, new Float32Array(IB.data[BB]), IB.strides[BB], !IB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = IB.sizes[BB]
```

#### 463. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4780` → after: `L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4780) · [Before (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4780)

```diff
-         super(BB, zB), this._internalMeshDataInfo = new cB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new CB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation =  … [truncated]
+         super(BB, ZB), this._internalMeshDataInfo = new EB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new xB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation =  … [truncated]
```

#### 464. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4788)

```diff
-         nB && this._copySource(nB, dB, IB, NB), null !== jB && (this.parent = jB), this._instanceDataStorage.hardwareInstancedRendering = this.wJ().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
+         JB && this._copySource(JB, oB, GB, vB), null !== IB && (this.parent = IB), this._instanceDataStorage.hardwareInstancedRendering = this.PN().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
```

#### 465. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4792` → after: `L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4792) · [Before (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4792)

```diff
-         }, this.onMeshReadyObservable = new kB.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), nB && nB.onClonedObservable.notifyObservers(this)
+         }, this.onMeshReadyObservable = new yB.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), JB && JB.onClonedObservable.notifyObservers(this)
```

#### 466. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4799-L4800` → after: `L4799-L4800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4799-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4799-L4800) · [Before (L4799-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4799-L4800)

```diff
-         QB.parent = BB || this.parent, QB.position = this.position.clone(), QB.pp = this.pp.clone(), this.rotationQuaternion ? QB.rotationQuaternion = this.rotationQuaternion.clone() : QB.rotation = this.rotation.clone(), zB && zB(this, QB);
-         for (const nB of this.getChildTransformNodes(!0)) "InstancedMesh" === nB.getClassName() && "Mesh" === QB.getClassName() && nB.vQB === this ? nB.instantiateHierarchy(QB, {
+         TB.parent = BB || this.parent, TB.position = this.position.clone(), TB.ek = this.ek.clone(), this.rotationQuaternion ? TB.rotationQuaternion = this.rotationQuaternion.clone() : TB.rotation = this.rotation.clone(), ZB && ZB(this, TB);
+         for (const JB of this.getChildTransformNodes(!0)) "InstancedMesh" === JB.getClassName() && "Mesh" === TB.getClassName() && JB.wJB === this ? JB.instantiateHierarchy(TB, {
```

#### 467. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4818-L4819` → after: `L4818-L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4818-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4818-L4819) · [Before (L4818-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4818-L4819)

```diff
-             const BB = this.dQB(),
-               zB = this.getVerticesData(fB.l.PositionKind);
+             const BB = this.MTB(),
+               ZB = this.getVerticesData(iB.i.PositionKind);
```

#### 468. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4839` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4839) · [Before (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4839)

```diff
-         if (jB && jB._masterMesh) return AB.c.Warn("You cannot use a mesh as LOD level twice"), this;
+         if (IB && IB._masterMesh) return XB.d.Warn("You cannot use a mesh as LOD level twice"), this;
```

#### 469. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4859-L4860` → after: `L4859-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4859-L4860) · [Before (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4859-L4860)

```diff
-         const QB = jB || this.rV().fQB,
-           nB = BB.mode === MB.b.ORTHOGRAPHIC_CAMERA ? BB.minZ : QB.centerWorld.subtract(BB.globalPosition).length();
+         const TB = IB || this.qm().ZJB,
+           JB = BB.mode === sB.c.ORTHOGRAPHIC_CAMERA ? BB.minZ : TB.centerWorld.subtract(BB.globalPosition).length();
```

#### 470. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4925-L4926` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4925-L4926) · [Before (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4925-L4926)

```diff
-       dQB(BB, jB) {
-         return this._geometry ? this._geometry.dQB(BB, jB) : []
+       MTB(BB, IB) {
+         return this._geometry ? this._geometry.MTB(BB, IB) : []
```

#### 471. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4936` → after: `L4936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4936) · [Before (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4936)

```diff
-         if (!this.cL || 0 === this.cL.length) return !0;
+         if (!this.EW || 0 === this.EW.length) return !0;
```

#### 472. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4938-L4939` → after: `L4938-L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4938-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4938-L4939) · [Before (L4938-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4938-L4939)

```diff
-         const zB = this.wJ(),
-           QB = this.aY(),
+         const ZB = this.PN(),
+           TB = this.JR(),
```

#### 473. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4945-L4946` → after: `L4945-L4946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4945-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4945-L4946) · [Before (L4945-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4945-L4946)

```diff
-             for (const NB of this.cL) {
-               const BB = NB.bJ();
+             for (const vB of this.EW) {
+               const BB = vB.LN();
```

#### 474. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4963-L4964` → after: `L4963-L4964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4963-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4963-L4964) · [Before (L4963-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4963-L4964)

```diff
-                 for (const jB of this.cL)
-                   if (!BB.isReady(jB, nB, jB.bJ()?.needAlphaBlendingForMesh(this) ?? !1)) return zB.currentRenderPassId = IB, !1
+                 for (const IB of this.EW)
+                   if (!BB.isReady(IB, JB, IB.LN()?.needAlphaBlendingForMesh(this) ?? !1)) return ZB.currentRenderPassId = GB, !1
```

#### 475. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4994` → after: `L4994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4994) · [Before (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L4994)

```diff
-           jB = this.aY().getRenderId();
+           IB = this.JR().getRenderId();
```

#### 476. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5010` → after: `L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5010) · [Before (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5010)

```diff
-         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.cJ || this.thinInstanceRefreshBoundingInfo(!1))
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.XN || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 477. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5018-L5019` → after: `L5018-L5019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5018-L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5018-L5019) · [Before (L5018-L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5018-L5019)

```diff
-         if (this.hasBoundingInfo && this.rV().isLocked) return this;
-         BB = "object" === typeof jB ? jB : {
+         if (this.hasBoundingInfo && this.qm().isLocked) return this;
+         BB = "object" === typeof IB ? IB : {
```

#### 478. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5024` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5024) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5024)

```diff
-         return this._refreshBoundingInfo(this._getData(BB, null, fB.l.PositionKind), QB), this
+         return this._refreshBoundingInfo(this._getData(BB, null, iB.i.PositionKind), TB), this
```

#### 479. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5028-L5030` → after: `L5028-L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5028-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5028-L5030) · [Before (L5028-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5028-L5030)

```diff
-         if (!jB || !this.dQB()) return null;
-         if (this.cL && this.cL.length > 0) {
-           const zB = this.dQB();
+         if (!IB || !this.MTB()) return null;
+         if (this.EW && this.EW.length > 0) {
+           const ZB = this.MTB();
```

#### 480. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5036` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5036) · [Before (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5036)

```diff
-             for (const BB of this.cL) {
+             for (const BB of this.EW) {
```

#### 481. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5046` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5046) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5046)

```diff
-           if (!nB) return this.cL[0]
+           if (!JB) return this.EW[0]
```

#### 482. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5048` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5048) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5048)

```diff
-         return this.releaseSubMeshes(), new FB.d(0, 0, jB, 0, this.getTotalIndices() || (this.isUnIndexed ? jB : 0), this)
+         return this.releaseSubMeshes(), new MB.e(0, 0, IB, 0, this.getTotalIndices() || (this.isUnIndexed ? IB : 0), this)
```

#### 483. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5057` → after: `L5057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5057) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5057)

```diff
-         for (let nB = 0; nB < BB && !(QB >= jB); nB++) FB.d.CreateFromIndices(0, QB, QB + zB >= jB ? jB - QB : zB, this, void 0, !1), QB += zB;
+         for (let JB = 0; JB < BB && !(TB >= IB); JB++) MB.e.CreateFromIndices(0, TB, TB + ZB >= IB ? IB - TB : ZB, this, void 0, !1), TB += ZB;
```

#### 484. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5065` → after: `L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5065) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5065)

```diff
-           const QB = new oB.e;
+           const TB = new pB.c;
```

#### 485. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5067-L5068` → after: `L5067-L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5067-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5067-L5068) · [Before (L5067-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5067-L5068)

```diff
-           const nB = this.aY();
-           new HB.c(HB.c.RandomId(), nB, QB, zB, this)
+           const JB = this.JR();
+           new aB.e(aB.e.RandomId(), JB, TB, ZB, this)
```

#### 486. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5083` → after: `L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5083) · [Before (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5083)

```diff
-         return this._geometry || (this._geometry = HB.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(BB, zB, jB), this
+         return this._geometry || (this._geometry = aB.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(BB, ZB, IB), this
```

#### 487. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5090` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5090) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5090)

```diff
-         const zB = this.getVerticesData(fB.l.PositionKind);
+         const ZB = this.getVerticesData(iB.i.PositionKind);
```

#### 488. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5092-L5094` → after: `L5092-L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5092-L5094) · [Before (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5092-L5094)

```diff
-         if (BB(zB), this.updateVerticesData(fB.l.PositionKind, zB, !1, !1), jB) {
-           const BB = this.dQB(),
-             jB = this.getVerticesData(fB.l.NormalKind);
+         if (BB(ZB), this.updateVerticesData(iB.i.PositionKind, ZB, !1, !1), IB) {
+           const BB = this.MTB(),
+             IB = this.getVerticesData(iB.i.NormalKind);
```

#### 489. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5096)

```diff
-           oB.e.ComputeNormals(zB, BB, jB), this.updateVerticesData(fB.l.NormalKind, jB, !1, !1)
+           pB.c.ComputeNormals(ZB, BB, IB), this.updateVerticesData(iB.i.NormalKind, IB, !1, !1)
```

#### 490. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5104)

```diff
-           jB = this._geometry.copy(HB.c.RandomId());
+           IB = this._geometry.copy(aB.e.RandomId());
```

#### 491. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5110` → after: `L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5110) · [Before (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5110)

```diff
-         nB || (nB = new HB.c(HB.c.RandomId(), this.aY(), void 0, void 0, this)), nB.setIndexBuffer(BB, jB, zB, QB)
+         JB || (JB = new aB.e(aB.e.RandomId(), this.JR(), void 0, void 0, this)), JB.setIndexBuffer(BB, IB, ZB, TB)
```

#### 492. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5118` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5118) · [Before (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5118)

```diff
-           const QB = new oB.e;
+           const TB = new pB.c;
```

#### 493. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5120-L5121` → after: `L5120-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5120-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5120-L5121) · [Before (L5120-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5120-L5121)

```diff
-           const nB = this.aY();
-           new HB.c(HB.c.RandomId(), nB, QB, zB, this, jB)
+           const JB = this.JR();
+           new aB.e(aB.e.RandomId(), JB, TB, ZB, this, IB)
```

#### 494. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5135` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5135) · [Before (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5135)

```diff
-         const nB = this.aY().wJ();
+         const JB = this.JR().PN();
```

#### 495. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5138` → after: `L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5138) · [Before (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5138)

```diff
-           if (this._getRenderingFillMode(zB) === YB.b.WireFrameFillMode) dB = BB._getLinesIndexBuffer(this.dQB(), nB);
+           if (this._getRenderingFillMode(ZB) === jB.e.WireFrameFillMode) oB = BB._getLinesIndexBuffer(this.MTB(), JB);
```

#### 496. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5141` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5141) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5141)

```diff
-           case YB.b.PointFillMode:
+           case jB.e.PointFillMode:
```

#### 497. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5144-L5145` → after: `L5144-L5145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5144-L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5144-L5145) · [Before (L5144-L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5144-L5145)

```diff
-           case YB.b.WireFrameFillMode:
-             dB = BB._getLinesIndexBuffer(this.dQB(), nB);
+           case jB.e.WireFrameFillMode:
+             oB = BB._getLinesIndexBuffer(this.MTB(), JB);
```

#### 498. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5148` → after: `L5148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5148) · [Before (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5148)

```diff
-           case YB.b.TriangleFillMode:
+           case jB.e.TriangleFillMode:
```

#### 499. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5168)

```diff
-         const QB = this.aY().wJ(),
+         const TB = this.JR().PN(),
```

#### 500. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5171)

```diff
-         return this._unIndexed && jB !== YB.b.WireFrameFillMode || jB == YB.b.PointFillMode ? QB.drawArraysType(jB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || zB) : jB == YB.b.WireFrameFillMode ? QB.drawElementsType(jB, 0, BB._linesIndexCount, this.forcedInst … [truncated]
+         return this._unIndexed && IB !== jB.e.WireFrameFillMode || IB == jB.e.PointFillMode ? TB.drawArraysType(IB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || ZB) : IB == jB.e.WireFrameFillMode ? TB.drawElementsType(IB, 0, BB._linesIndexCount, this.forcedInst … [truncated]
```

#### 501. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5192` → after: `L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5192) · [Before (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5192)

```diff
-         const QB = this.aY(),
+         const TB = this.JR(),
```

#### 502. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5220-L5221` → after: `L5220-L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5220-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5220-L5221) · [Before (L5220-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5220-L5221)

```diff
-             this._scene.needsPreviousWorldMatrices && (UB.masterMeshPreviousWorldMatrix ? (UB.masterMeshPreviousWorldMatrix.copyToArray(uB.instancesPreviousData, rB), UB.masterMeshPreviousWorldMatrix.jH(jB)) : (UB.masterMeshPreviousWorldMatrix = jB.clone(), UB.masterMeshPreviousW … [truncated]
-             const BB = jB.nQB();
+             this._scene.needsPreviousWorldMatrices && (cB.masterMeshPreviousWorldMatrix ? (cB.masterMeshPreviousWorldMatrix.copyToArray(kB.instancesPreviousData, zB), cB.masterMeshPreviousWorldMatrix.TY(IB)) : (cB.masterMeshPreviousWorldMatrix = IB.clone(), cB.masterMeshPreviousW … [truncated]
+             const BB = IB.HTB();
```

#### 503. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5225)

```diff
-             if (vB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.bJ()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
+             if (KB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.LN()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
```

#### 504. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5229` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5229) · [Before (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5229)

```diff
-                 zB._distanceToCamera = EB.m.Distance(zB.rV().fQB.centerWorld, BB)
+                 ZB._distanceToCamera = wB.s.Distance(ZB.qm().ZJB.centerWorld, BB)
```

#### 505. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5236-L5237` → after: `L5236-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5236-L5237) · [Before (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5236-L5237)

```diff
-               zB.copyToArray(uB.instancesData, rB), this._scene.needsPreviousWorldMatrices && (jB._previousWorldMatrix ? (jB._previousWorldMatrix.copyToArray(uB.instancesPreviousData, rB), jB._previousWorldMatrix.jH(zB)) : (jB._previousWorldMatrix = zB.clone(), jB._previousWorldM … [truncated]
-               const QB = zB.nQB();
+               ZB.copyToArray(kB.instancesData, zB), this._scene.needsPreviousWorldMatrices && (IB._previousWorldMatrix ? (IB._previousWorldMatrix.copyToArray(kB.instancesPreviousData, zB), IB._previousWorldMatrix.TY(ZB)) : (IB._previousWorldMatrix = ZB.clone(), IB._previousWorldM … [truncated]
+               const TB = ZB.HTB();
```

#### 506. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5249)

```diff
-               vertexArrayObjects: this.wJ().getCaps().vertexArrayObject ? {} : void 0
+               vertexArrayObjects: this.PN().getCaps().vertexArrayObject ? {} : void 0
```

#### 507. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5258` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5258) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5258)

```diff
-         this._processInstancedBuffers(IB, JB), dB && void 0 !== nB && (this.aY()._activeIndices.addCount(BB.indexCount * sB, !1), QB._currentDrawContext && (QB._currentDrawContext.useInstancing = !0), this._bind(BB, dB, nB), this._draw(BB, nB, sB)), !this._scene.needsPreviousWorl … [truncated]
+         this._processInstancedBuffers(GB, NB), oB && void 0 !== JB && (this.JR()._activeIndices.addCount(BB.indexCount * FB, !1), TB._currentDrawContext && (TB._currentDrawContext.useInstancing = !0), this._bind(BB, oB, JB), this._draw(BB, JB, FB)), !this._scene.needsPreviousWorl … [truncated]
```

#### 508. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5271` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5271) · [Before (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5271)

```diff
-         this.aY()._activeIndices.addCount(BB.indexCount * nB, !1), QB._currentDrawContext && (QB._currentDrawContext.useInstancing = !0), this._bind(BB, zB, jB), this._draw(BB, jB, nB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && … [truncated]
+         this.JR()._activeIndices.addCount(BB.indexCount * JB, !1), TB._currentDrawContext && (TB._currentDrawContext.useInstancing = !0), this._bind(BB, ZB, IB), this._draw(BB, IB, JB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && … [truncated]
```

#### 509. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5275-L5276` → after: `L5275-L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5275-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5275-L5276) · [Before (L5275-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5275-L5276)

```diff
-         const uB = this.aY(),
-           UB = uB.wJ();
+         const kB = this.JR(),
+           cB = kB.PN();
```

#### 510. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5327-L5328` → after: `L5327-L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5327-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5327-L5328) · [Before (L5327-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5327-L5328)

```diff
-         if (this.cL) {
-           for (let BB = 0; BB < this.cL.length; BB++) this._getInstancesRenderList(BB);
+         if (this.EW) {
+           for (let BB = 0; BB < this.EW.length; BB++) this._getInstancesRenderList(BB);
```

#### 511. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5341` → after: `L5341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5341) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5341)

```diff
-         const dB = this._scene.wJ(),
+         const oB = this._scene.PN(),
```

#### 512. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5345-L5346` → after: `L5345-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5345-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5345-L5346) · [Before (L5345-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5345-L5346)

```diff
-           for (let NB = 0; NB < this.cL.length; NB++) {
-             const BB = this.cL[NB];
+           for (let vB = 0; vB < this.EW.length; vB++) {
+             const BB = this.EW[vB];
```

#### 513. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5352-L5353` → after: `L5352-L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5352-L5353) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5352-L5353)

```diff
-         if (!this.cL) return this;
-         for (const BB of this.cL) this.render(BB, !1);
+         if (!this.EW) return this;
+         for (const BB of this.EW) this.render(BB, !1);
```

#### 514. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5357-L5358` → after: `L5357-L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5357-L5358) · [Before (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5357-L5358)

```diff
-         const QB = this.aY(),
-           nB = QB.wJ();
+         const TB = this.JR(),
+           JB = TB.PN();
```

#### 515. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5373` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5373) · [Before (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5373)

```diff
-           JB = BB.bJ();
+           NB = BB.LN();
```

#### 516. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5389` → after: `L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5389) · [Before (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5389)

```diff
-               nB.setAlphaMode(void 0 !== zB ? zB : 2, !1, jB)
+               JB.setAlphaMode(void 0 !== ZB ? ZB : 2, !1, IB)
```

#### 517. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5403` → after: `L5403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5403) · [Before (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5403)

```diff
-           GB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (GB = GB === YB.b.ClockWiseSideOrientation ? YB.b.CounterClockWiseSideOrientation : YB.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = GB
+           UB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (UB = UB === jB.e.ClockWiseSideOrientation ? jB.e.CounterClockWiseSideOrientation : jB.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = UB
```

#### 518. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5413` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5413) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5413)

```diff
-           VB.c._BindAttachmentsForEffect(nB, yB) && (!gB.backFaceCulling && gB.separateCullingPass && (nB.setState(!0, gB.zOffset, !1, !LB, gB.cullBackFaces, gB.stencil, gB.zOffsetUnits), this._processRendering(this, BB, yB, tB, uB, rB, this._onBeforeDraw, this._internalMeshDataI … [truncated]
+           PB.b._BindAttachmentsForEffect(JB, qB) && (!dB.backFaceCulling && dB.separateCullingPass && (JB.setState(!0, dB.zOffset, !1, !WB, dB.cullBackFaces, dB.stencil, dB.zOffsetUnits), this._processRendering(this, BB, qB, CB, kB, zB, this._onBeforeDraw, this._internalMeshDataI … [truncated]
```

#### 519. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5415` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5415) · [Before (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5415)

```diff
-           VB.c._RestoreAttachments(nB)
+           PB.b._RestoreAttachments(JB)
```

#### 520. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5427` → after: `L5427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5427) · [Before (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5427)

```diff
-         const nB = BB.bJ();
+         const JB = BB.LN();
```

#### 521. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5438)

```diff
-         if (void 0 !== UB && UB !== DB.e.OCCLUSION_TYPE_NONE || !nB._canBindRunFollower(zB, QB, this, BB, IB)) return !1;
+         if (void 0 !== cB && cB !== HB.b.OCCLUSION_TYPE_NONE || !JB._canBindRunFollower(ZB, TB, this, BB, GB)) return !1;
```

#### 522. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5458` → after: `L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5458) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5458)

```diff
-           BB < 0 && (jB = jB === YB.b.ClockWiseSideOrientation ? YB.b.CounterClockWiseSideOrientation : YB.b.ClockWiseSideOrientation), uB._effectiveSideOrientation = jB
+           BB < 0 && (IB = IB === jB.e.ClockWiseSideOrientation ? jB.e.CounterClockWiseSideOrientation : jB.e.ClockWiseSideOrientation), kB._effectiveSideOrientation = IB
```

#### 523. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5465` → after: `L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5465) · [Before (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5465)

```diff
-         this.isVerticesDataPresent(fB.l.MatricesWeightsKind) && (this.isVerticesDataPresent(fB.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
+         this.isVerticesDataPresent(iB.i.MatricesWeightsKind) && (this.isVerticesDataPresent(iB.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
```

#### 524. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5468` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5468) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5468)

```diff
-         const BB = this.getVerticesData(fB.l.MatricesWeightsKind),
+         const BB = this.getVerticesData(iB.i.MatricesWeightsKind),
```

#### 525. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5478` → after: `L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5478) · [Before (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5478)

```diff
-         this.setVerticesData(fB.l.MatricesWeightsKind, BB)
+         this.setVerticesData(iB.i.MatricesWeightsKind, BB)
```

#### 526. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5481-L5482` → after: `L5481-L5482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5481-L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5481-L5482) · [Before (L5481-L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5481-L5482)

```diff
-         const BB = this.getVerticesData(fB.l.MatricesWeightsExtraKind),
-           jB = this.getVerticesData(fB.l.MatricesWeightsKind),
+         const BB = this.getVerticesData(iB.i.MatricesWeightsExtraKind),
+           IB = this.getVerticesData(iB.i.MatricesWeightsKind),
```

#### 527. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5492` → after: `L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5492) · [Before (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5492)

```diff
-         this.setVerticesData(fB.l.MatricesWeightsKind, jB), this.setVerticesData(fB.l.MatricesWeightsKind, BB)
+         this.setVerticesData(iB.i.MatricesWeightsKind, IB), this.setVerticesData(iB.i.MatricesWeightsKind, BB)
```

#### 528. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5495-L5496` → after: `L5495-L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5495-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5495-L5496) · [Before (L5495-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5495-L5496)

```diff
-         const BB = this.getVerticesData(fB.l.MatricesWeightsExtraKind),
-           jB = this.getVerticesData(fB.l.MatricesWeightsKind);
+         const BB = this.getVerticesData(iB.i.MatricesWeightsExtraKind),
+           IB = this.getVerticesData(iB.i.MatricesWeightsKind);
```

#### 529. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5500` → after: `L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5500) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5500)

```diff
-           JJ: "not skinned"
+           JN: "not skinned"
```

#### 530. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5527-L5528` → after: `L5527-L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5527-L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5527-L5528) · [Before (L5527-L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5527-L5528)

```diff
-           aB = this.getVerticesData(fB.l.MatricesIndicesKind),
-           pB = this.getVerticesData(fB.l.MatricesIndicesExtraKind);
+           nB = this.getVerticesData(iB.i.MatricesIndicesKind),
+           hB = this.getVerticesData(iB.i.MatricesIndicesExtraKind);
```

#### 531. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5538` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5538) · [Before (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5538)

```diff
-           JJ: "Number of Weights = " + zB / 4 + "\nMaximum influences = " + dB + "\nMissing Weights = " + nB + "\nNot Sorted = " + QB + "\nNot Normalized = " + IB + "\nWeightCounts = [" + uB + "]\nNumber of bones = " + UB + "\nBad Bone Indices = " + rB
+           JN: "Number of Weights = " + ZB / 4 + "\nMaximum influences = " + oB + "\nMissing Weights = " + JB + "\nNot Sorted = " + TB + "\nNot Normalized = " + GB + "\nWeightCounts = [" + kB + "]\nNumber of bones = " + cB + "\nBad Bone Indices = " + zB
```

#### 532. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5542` → after: `L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5542) · [Before (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5542)

```diff
-         const BB = this.aY();
+         const BB = this.JR();
```

#### 533. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5555` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5555) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5555)

```diff
-             BB.removePendingData(this), BB.aE || AB.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${zB}`)
+             BB.removePendingData(this), BB.mC || XB.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZB}`)
```

#### 534. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5563` → after: `L5563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5563) · [Before (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5563)

```diff
-         const jB = this.aY().materials;
+         const IB = this.JR().materials;
```

#### 535. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5567` → after: `L5567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5567) · [Before (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5567)

```diff
-         const QB = this.aY().multiMaterials;
+         const TB = this.JR().multiMaterials;
```

#### 536. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5577-L5578` → after: `L5577-L5578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5577-L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5577-L5578) · [Before (L5577-L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5577-L5578)

```diff
-         if (!this.isVerticesDataPresent(fB.l.PositionKind)) return this;
-         const jB = this.cL.splice(0);
+         if (!this.isVerticesDataPresent(iB.i.PositionKind)) return this;
+         const IB = this.EW.splice(0);
```

#### 537. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5580-L5581` → after: `L5580-L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5580-L5581) · [Before (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5580-L5581)

```diff
-         let zB = this.getVerticesData(fB.l.PositionKind);
-         const QB = EB.m.Zero();
+         let ZB = this.getVerticesData(iB.i.PositionKind);
+         const TB = wB.s.Zero();
```

#### 538. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5583-L5586` → after: `L5583-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5583-L5586) · [Before (L5583-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5583-L5586)

```diff
-         for (nB = 0; nB < zB.length; nB += 3) EB.m.TransformCoordinatesFromFloatsToRef(zB[nB], zB[nB + 1], zB[nB + 2], BB, QB).toArray(zB, nB);
-         if (this.setVerticesData(fB.l.PositionKind, zB, this.getVertexBuffer(fB.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(fB.l.NormalKind)) {
-           for (zB = this.getVerticesData(fB.l.NormalKind), nB = 0; nB < zB.length; nB += 3) EB.m.TransformNormalFromFloatsToRef(zB[nB], zB[nB + 1], zB[nB + 2], BB, QB).normalize().toArray(zB, nB);
-           this.setVerticesData(fB.l.NormalKind, zB, this.getVertexBuffer(fB.l.NormalKind).isUpdatable())
+         for (JB = 0; JB < ZB.length; JB += 3) wB.s.TransformCoordinatesFromFloatsToRef(ZB[JB], ZB[JB + 1], ZB[JB + 2], BB, TB).toArray(ZB, JB);
+         if (this.setVerticesData(iB.i.PositionKind, ZB, this.getVertexBuffer(iB.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(iB.i.NormalKind)) {
+           for (ZB = this.getVerticesData(iB.i.NormalKind), JB = 0; JB < ZB.length; JB += 3) wB.s.TransformNormalFromFloatsToRef(ZB[JB], ZB[JB + 1], ZB[JB + 2], BB, TB).normalize().toArray(ZB, JB);
+           this.setVerticesData(iB.i.NormalKind, ZB, this.getVertexBuffer(iB.i.NormalKind).isUpdatable())
```

#### 539. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5588-L5590` → after: `L5588-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5588-L5590) · [Before (L5588-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5588-L5590)

```diff
-         if (this.isVerticesDataPresent(fB.l.TangentKind)) {
-           for (zB = this.getVerticesData(fB.l.TangentKind), nB = 0; nB < zB.length; nB += 4) EB.m.TransformNormalFromFloatsToRef(zB[nB], zB[nB + 1], zB[nB + 2], BB, QB).normalize().toArray(zB, nB);
-           this.setVerticesData(fB.l.TangentKind, zB, this.getVertexBuffer(fB.l.TangentKind).isUpdatable())
+         if (this.isVerticesDataPresent(iB.i.TangentKind)) {
+           for (ZB = this.getVerticesData(iB.i.TangentKind), JB = 0; JB < ZB.length; JB += 4) wB.s.TransformNormalFromFloatsToRef(ZB[JB], ZB[JB + 1], ZB[JB + 2], BB, TB).normalize().toArray(ZB, JB);
+           this.setVerticesData(iB.i.TangentKind, ZB, this.getVertexBuffer(iB.i.TangentKind).isUpdatable())
```

#### 540. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5592` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5592) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5592)

```diff
-         return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.cL = jB, this
+         return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.EW = IB, this
```

#### 541. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5614` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5614) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5614)

```diff
-           return bB.source = this, bB.doNotCloneChildren = zB.doNotCloneChildren, bB.clonePhysicsImpostor = zB.clonePhysicsImpostor, bB.cloneThinInstances = zB.cloneThinInstances, new vB(BB, this.aY(), bB)
+           return DB.source = this, DB.doNotCloneChildren = ZB.doNotCloneChildren, DB.clonePhysicsImpostor = ZB.clonePhysicsImpostor, DB.cloneThinInstances = ZB.cloneThinInstances, new KB(BB, this.JR(), DB)
```

#### 542. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5616` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5616) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5616)

```diff
-         return new vB(BB, this.aY(), jB, this, zB, QB)
+         return new KB(BB, this.JR(), IB, this, ZB, TB)
```

#### 543. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5630` → after: `L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5630) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5630)

```diff
-           const BB = this.aY().meshes;
+           const BB = this.JR().meshes;
```

#### 544. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5644-L5645` → after: `L5644-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5644-L5645) · [Before (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5644-L5645)

```diff
-         const uB = this.aY();
-         return (0, LB.r)(BB, (BB => {
+         const kB = this.JR();
+         return (0, WB.l)(BB, (BB => {
```

#### 545. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5648` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5648) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5648)

```diff
-             UB = this.wJ().createCanvas(NB, uB).getContext("2d");
+             cB = this.PN().createCanvas(vB, kB).getContext("2d");
```

#### 546. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5656-L5663` → after: `L5656-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5656-L5663) · [Before (L5656-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5656-L5663)

```diff
-         if (!this.isVerticesDataPresent(fB.l.PositionKind) || !this.isVerticesDataPresent(fB.l.NormalKind) || !this.isVerticesDataPresent(fB.l.UVKind)) return AB.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
-         const uB = this.getVerticesData(fB.l.PositionKind, !0, !0),
-           UB = this.getVerticesData(fB.l.NormalKind),
-           aB = this.getVerticesData(fB.l.UVKind);
-         let pB = EB.m.Zero();
-         const rB = EB.m.Zero(),
-           sB = EB.i.Zero();
-         dB = dB || EB.i.Zero(), IB = IB || new EB.i(1, 1);
+         if (!this.isVerticesDataPresent(iB.i.PositionKind) || !this.isVerticesDataPresent(iB.i.NormalKind) || !this.isVerticesDataPresent(iB.i.UVKind)) return XB.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const kB = this.getVerticesData(iB.i.PositionKind, !0, !0),
+           cB = this.getVerticesData(iB.i.NormalKind),
+           nB = this.getVerticesData(iB.i.UVKind);
+         let hB = wB.s.Zero();
+         const zB = wB.s.Zero(),
+           FB = wB.p.Zero();
+         oB = oB || wB.p.Zero(), GB = GB || new wB.p(1, 1);
```

#### 547. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/255.js#L5665)

```diff
-           EB.m.FromArrayToRef(uB, JB, pB), EB.m.FromArrayToRef(UB, JB, rB), EB.i.FromArrayToRef(aB, JB / 3 * 2, sB);
+           wB.s.FromArrayToRef(kB, NB, hB), wB.s.FromArrayToRef(cB, NB, zB), wB.p.FromArrayToRef(nB, NB / 3 * 2, FB);
```
