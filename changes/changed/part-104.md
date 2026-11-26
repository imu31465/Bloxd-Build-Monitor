# Changed — Bundle Modifications Report (Part 104 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `104 / 116` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 103](part-103.md) · [Part 105 →](part-105.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (956 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L950-L951` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L825-L826) · [Before (L950-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L950-L951)

```diff
-           eV = kV.s.chunkSlotsPtr(VV, 0),
-           xV = kV.s.chunkSlotsLen(VV, 0);
+           BH = uH.y.chunkSlotsPtr(HH, 0),
+           LH = uH.y.chunkSlotsLen(HH, 0);
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L956-L957` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L831-L832) · [Before (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L956-L957)

```diff
-           eV = kV.s.walkThroughPtr(VV, 0),
-           xV = kV.s.walkThroughLen(VV, 0);
+           BH = uH.y.walkThroughPtr(HH, 0),
+           LH = uH.y.walkThroughLen(HH, 0);
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L970` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L845) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L970)

```diff
-         VV !== this.slotsBuffer && (this.slotsBuffer = VV, this.slots = null !== (eV = (0, rV.r)(Uint32Array, VV, this.slotsPtr, this.slotsLen * ee, "the chunk directory")) && void 0 !== eV ? eV : Qe);
+         HH !== this.slotsBuffer && (this.slotsBuffer = HH, this.slots = null !== (BH = (0, YH.o)(Uint32Array, HH, this.slotsPtr, this.slotsLen * BB, "the chunk directory")) && void 0 !== BH ? BH : zB);
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L976` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L851) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L976)

```diff
-           return null !== (xV = (0, rV.r)(Uint16Array, VV, eV, IV, "a chunk's voxels")) && void 0 !== xV ? xV : xe
+           return null !== (LH = (0, YH.o)(Uint16Array, HH, BH, iH, "a chunk's voxels")) && void 0 !== LH ? LH : LB
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L984` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L859) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L984)

```diff
-         return null !== (JV = this.chunks.get((0, SV.d)(VV, eV, xV))) && void 0 !== JV ? JV : null
+         return null !== (AH = this.chunks.get((0, JH.e)(HH, BH, LH))) && void 0 !== AH ? AH : null
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L997` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L872) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L997)

```diff
-         return null !== (JV = pV.written(QV)) && void 0 !== JV ? JV : pV.voxelData()[QV]
+         return null !== (AH = tH.written(zH)) && void 0 !== AH ? AH : tH.voxelData()[zH]
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1006` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L881) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1006)

```diff
-         return null !== (JV = null === (YV = this.chunks.get((0, SV.d)(VV, eV, xV))) || void 0 === YV ? void 0 : YV.kb) && void 0 !== JV ? JV : null
+         return null !== (AH = null === (rH = this.chunks.get((0, JH.e)(HH, BH, LH))) || void 0 === rH ? void 0 : rH.au) && void 0 !== AH ? AH : null
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1009` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L884) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1009)

```diff
-         const QV = kV.z;
+         const zH = uH.H;
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1018` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L893) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1018)

```diff
-               const bV = this.chunks.get((0, SV.d)(YV, wV, JV));
+               const QH = this.chunks.get((0, JH.e)(rH, EH, AH));
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1023` → after: `L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L898) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1023)

```diff
-                 qV = bV.Yk,
+                 vH = QH.jY,
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1044` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L919) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1044)

```diff
-         (0, sV.c)(((VV, eV, xV) => {
+         (0, sH.b)(((HH, BH, LH) => {
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1046` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L921) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1046)

```diff
-           return null !== (JV = this.chunks.get((0, SV.d)(VV, eV, xV))) && void 0 !== JV ? JV : null
+           return null !== (AH = this.chunks.get((0, JH.e)(HH, BH, LH))) && void 0 !== AH ? AH : null
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1065` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L940) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1065)

```diff
-         VV !== this.walkBuffer && (this.walkBuffer = VV, this.walk = null !== (eV = (0, rV.r)(Uint32Array, VV, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== eV ? eV : Qe);
+         HH !== this.walkBuffer && (this.walkBuffer = HH, this.walk = null !== (BH = (0, YH.o)(Uint32Array, HH, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== BH ? BH : zB);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1070` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L945) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1070)

```diff
-         const JV = (0, SV.d)(VV >> dV, eV >> dV, xV >> dV);
+         const AH = (0, JH.e)(HH >> pH, BH >> pH, LH >> pH);
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1074-L1081` → after: `L949-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L949-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L949-L956) · [Before (L1074-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1074-L1081)

```diff
-     var Ze = xV(39662),
-       ve = xV(38966),
-       re = xV(39343),
-       ke = xV(37977),
-       be = xV(37786),
-       Ee = xV(35268),
-       Be = xV(40328),
-       je = xV(206);
+     var XB = LH(39385),
+       GB = LH(38667),
+       YB = LH(39096),
+       uB = LH(37654),
+       QB = LH(37496),
+       WB = LH(34942),
+       MB = LH(40056),
+       xB = LH(176);
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1587-L1590` → after: `L1462-L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1462-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1462-L1465) · [Before (L1587-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1587-L1590)

```diff
-     var Xe = xV(37935),
-       Me = xV(37952),
-       ze = xV(37950),
-       Ge = xV(275);
+     var kB = LH(37626),
+       mB = LH(37642),
+       oB = LH(37640),
+       IB = LH(225);
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1593` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1468) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1593)

```diff
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ge.e;
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.d;
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1636` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1511) · [Before (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1636)

```diff
-     var Re = xV(42179);
+     var lB = LH(42209);
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1658` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1533) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1658)

```diff
-       return 1 === xV ? eV : eV + Math.floor(JV() * xV)
+       return 1 === LH ? BH : BH + Math.floor(AH() * LH)
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1681` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1556) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1681)

```diff
-       oe = je.f.nB * je.f.playerEyeToHeightRatio,
+       NB = xB.g.iW * xB.g.playerEyeToHeightRatio,
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1720-L1721` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1595-L1596) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1720-L1721)

```diff
-             const nV = 0 !== (YV & kV.ee.Loop);
-             YV & kV.ee.TwoD ? this.start(JV, !1, yV, UV, pV, nV, ie(JV)) : this.startSpatial(JV, yV, UV, pV, nV, VV, eV, xV, QV, this.earDistSq(VV, eV, xV), ie(JV))
+             const CH = 0 !== (rH & uH.ke.Loop);
+             rH & uH.ke.TwoD ? this.start(AH, !1, hH, SH, tH, CH, eB(AH)) : this.startSpatial(AH, hH, SH, tH, CH, HH, BH, LH, zH, this.earDistSq(HH, BH, LH), eB(AH))
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1737` → after: `L1612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1612) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1737)

```diff
-             void 0 !== YV && this.fade(YV, eV, xV, 0 !== (JV & kV.de.StopAfter))
+             void 0 !== rH && this.fade(rH, BH, LH, 0 !== (AH & uH.ie.StopAfter))
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1759` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1634) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1759)

```diff
-           if (Me.e.has(qe[Te[VV]])) continue;
+           if (mB.d.has(vB[UB[HH]])) continue;
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1779` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1654) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1779)

```diff
-               of eV) this.howls.delete(VV), "loaded" === xV.state() ? (0, Xe.i)(xV) : xV.unload()
+               of BH) this.howls.delete(HH), "loaded" === LH.state() ? (0, kB.d)(LH) : LH.unload()
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1783` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1658) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1783)

```diff
-         if (VV < kV.n.PlaySound || VV > kV.n.SoundReset) return !1;
+         if (HH < uH.t.PlaySound || HH > uH.t.SoundReset) return !1;
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1785` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1660) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1785)

```diff
-           return (0, kV.se)(VV, eV, xV, JV, this.handlers)
+           return (0, uH.we)(HH, BH, LH, AH, this.handlers)
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1792` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1667) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1792)

```diff
-         for (let JV = 0; JV < 3; JV++) eV[2 - JV] = kV.u.listener(VV, 0, JV), eV[5 - JV] = kV.u.forward(VV, 0, JV), eV[8 - JV] = kV.u.up(VV, 0, JV);
+         for (let AH = 0; AH < 3; AH++) BH[2 - AH] = uH.C.listener(HH, 0, AH), BH[5 - AH] = uH.C.forward(HH, 0, AH), BH[8 - AH] = uH.C.up(HH, 0, AH);
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1806` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1681) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1806)

```diff
-         if (null === pV) return Re.c;
+         if (null === tH) return lB.d;
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1808` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1683) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1808)

```diff
-           nV = pV[1] > 1 ? pV : null;
+           CH = tH[1] > 1 ? tH : null;
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1819` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1694) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1819)

```diff
-         if (!Number.isFinite(wV) || !Number.isFinite(ZV) || !Number.isFinite(vV)) return Re.c;
+         if (!Number.isFinite(EH) || !Number.isFinite(XH) || !Number.isFinite(GH)) return lB.d;
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1825` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1700) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1825)

```diff
-           if (rV = VV * VV + eV * eV + xV * xV, rV > YV * YV) return Re.c
+           if (YH = HH * HH + BH * BH + LH * LH, YH > rH * rH) return lB.d
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1828` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1703) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1828)

```diff
-         return kV ? this.gameSound(kV.howl, kV.id, !0) : Re.c
+         return uH ? this.gameSound(uH.howl, uH.id, !0) : lB.d
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1855` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1730) · [Before (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1855)

```diff
-             const pV = this.level > 0 ? xV / this.level : xV > 0 && null !== (UV = null === (yV = this.live.get(eV)) || void 0 === yV ? void 0 : yV.rel) && void 0 !== UV ? UV : 0;
+             const tH = this.level > 0 ? LH / this.level : LH > 0 && null !== (SH = null === (hH = this.live.get(BH)) || void 0 === hH ? void 0 : hH.rel) && void 0 !== SH ? SH : 0;
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1861` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1736) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1861)

```diff
-               return VV > 0 && VV < 1 / 0 ? VV : 1
+               return HH > 0 && HH < 1 / 0 ? HH : 1
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1866` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1741) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1866)

```diff
-             return (null !== (VV = null === (xV = this.live.get(eV)) || void 0 === xV ? void 0 : xV.rel) && void 0 !== VV ? VV : 0) * this.level
+             return (null !== (HH = null === (LH = this.live.get(BH)) || void 0 === LH ? void 0 : LH.rel) && void 0 !== HH ? HH : 0) * this.level
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1870` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1745) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1870)

```diff
-             return null !== (VV = null === (xV = this.live.get(eV)) || void 0 === xV ? void 0 : xV.rel) && void 0 !== VV ? VV : 0
+             return null !== (HH = null === (LH = this.live.get(BH)) || void 0 === LH ? void 0 : LH.rel) && void 0 !== HH ? HH : 0
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1877` → after: `L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1752) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1877)

```diff
-                 refDistance: ke.h
+                 refDistance: uB.i
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1925` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1800) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1925)

```diff
-         const nV = QV.play(Xe.e),
+         const CH = zH.play(kB.b),
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2011-L2012` → after: `L1886-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1886-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1886-L1887) · [Before (L2011-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2011-L2012)

```diff
-     var He = xV(41876),
-       ue = xV(40335);
+     var dB = LH(41928),
+       aB = LH(40060);
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2015` → after: `L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1890) · [Before (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2015)

```diff
-         this.key = VV, this.model = eV, this.host = JV, this.Jv = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.uUV = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = HH, this.model = BH, this.host = AH, this.aX = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.fSH = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2021` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1896) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2021)

```diff
-         !this.ik && VV >= 0 && VV < this.Jv && VV < kV.sc.Max && this.Jb(VV, VV + 1)
+         !this.Mu && HH >= 0 && HH < this.aX && HH < uH.wc.Max && this.gu(HH, HH + 1)
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2024-L2025` → after: `L1899-L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1899-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1899-L1900) · [Before (L2024-L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2024-L2025)

```diff
-         if (this.ik) return;
-         (VV = Math.min(Math.max(Math.floor(VV), 0), this.Jv, kV.sc.Max)) > this.count && this.Jb(this.count, VV), this.count = VV;
+         if (this.Mu) return;
+         (HH = Math.min(Math.max(Math.floor(HH), 0), this.aX, uH.wc.Max)) > this.count && this.gu(this.count, HH), this.count = HH;
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1905) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-         } = this, YV = this.uUV !== VV, UV = xV[0] !== eV[0] || xV[1] !== eV[1] || xV[2] !== eV[2];
+         } = this, rH = this.fSH !== HH, SH = LH[0] !== BH[0] || LH[1] !== BH[1] || LH[2] !== BH[2];
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2041-L2043` → after: `L1916-L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1916-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916-L1918) · [Before (L2041-L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2041-L2043)

```diff
-             eV = VV * Ze.e,
-             xV = wV * kV.sc.Bytes,
-             YV = 0 !== QV[eV + Ze.g] ? kV.sc.Hidden : 0;
+             BH = HH * XB.d,
+             LH = EH * uH.wc.Bytes,
+             rH = 0 !== zH[BH + XB.g] ? uH.wc.Hidden : 0;
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2046` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1921) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2046)

```diff
-         if ((0, kV.Qe)(yV, 0, this.key, VV, eV, pV, this.tailOf(pV))) {
+         if ((0, uH.$e)(hH, 0, this.key, HH, BH, tH, this.tailOf(tH))) {
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2048` → after: `L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1923) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2048)

```diff
-           JV.length = 0, this.uUV = VV, xV[0] = eV[0], xV[1] = eV[1], xV[2] = eV[2]
+           AH.length = 0, this.fSH = HH, LH[0] = BH[0], LH[1] = BH[1], LH[2] = BH[2]
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2052` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1927) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2052)

```diff
-         (VV = Math.ceil(VV)) <= this.Jv || this.ik || (this.records = (0, ue.c)(this.records, new Float32Array(VV * Ze.e)), this.isDirty = (0, ue.c)(this.isDirty, new Uint8Array(VV)), this.tail = new Uint8Array(VV * kV.sc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (HH = Math.ceil(HH)) <= this.aX || this.Mu || (this.records = (0, aB.c)(this.records, new Float32Array(HH * XB.d)), this.isDirty = (0, aB.c)(this.isDirty, new Uint8Array(HH)), this.tail = new Uint8Array(HH * uH.wc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2055` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2055)

```diff
-         this.ik || (this.ik = !0, this.host.ik(this, this.made ? this.key : null))
+         this.Mu || (this.Mu = !0, this.host.Mu(this, this.made ? this.key : null))
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2064` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1939) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064)

```diff
-           this.made = (0, kV.Ue)(VV, 0, this.key, eV, xV, JV)
+           this.made = (0, uH.ff)(HH, 0, this.key, BH, LH, AH)
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2069` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1944) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2069)

```diff
-         const eV = VV * kV.sc.Bytes;
+         const BH = HH * uH.wc.Bytes;
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2080-L2081` → after: `L1955-L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1955-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1955-L1956) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2080-L2081)

```diff
-     var Se = xV(654),
-       Ie = xV(45462);
+     var JB = LH(614),
+       iB = LH(46020);
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2099-L2100` → after: `L1974-L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1974-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1974-L1975) · [Before (L2099-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2099-L2100)

```diff
-         return xV = VV, Se.k.includes(xV) ? this.add({
-           lifeform: wV.m.indexOf(VV)
+         return LH = HH, JB.q.includes(LH) ? this.add({
+           lifeform: EH.j.indexOf(HH)
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2126` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2001) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2126)

```diff
-         this.key = VV, this.source = eV, this.scale = xV, this.host = JV, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = Oe, this.perch = null, this.owed = 1, this.ik = !1, this.sync()
+         this.key = HH, this.source = BH, this.scale = LH, this.host = AH, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = yB, this.perch = null, this.owed = 1, this.Mu = !1, this.sync()
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2129` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2004) · [Before (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2129)

```diff
-         this.ik || (this.feet[0] = VV[0], this.feet[1] = VV[1], this.feet[2] = VV[2], this.yaw = eV, this.owed |= 2, this.sync())
+         this.Mu || (this.feet[0] = HH[0], this.feet[1] = HH[1], this.feet[2] = HH[2], this.yaw = BH, this.owed |= 2, this.sync())
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2132` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2007) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132)

```diff
-         this.ik || VV === this.visible || (this.visible = VV, this.owed |= 4, this.sync())
+         this.Mu || HH === this.visible || (this.visible = HH, this.owed |= 4, this.sync())
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2135` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2010) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2135)

```diff
-         this.ik || VV === this.clip || (this.clip = VV, this.clipBytes = null === VV ? Oe : de.encode(VV), this.owed |= 16, this.sync())
+         this.Mu || HH === this.clip || (this.clip = HH, this.clipBytes = null === HH ? yB : pB.encode(HH), this.owed |= 16, this.sync())
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2138` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2013) · [Before (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2138)

```diff
-         this.ik || (this.perch = VV, this.owed |= 32, this.sync())
+         this.Mu || (this.perch = HH, this.owed |= 32, this.sync())
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2141` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2016) · [Before (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2141)

```diff
-         this.ik || (this.ik = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.Mu || (this.Mu = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2145` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2020) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2145)

```diff
-         return this.write(VV) ? (this.host.settled(this, this.ik), !0) : (this.host.owes(this), !1)
+         return this.write(HH) ? (this.host.settled(this, this.Mu), !0) : (this.host.owes(this), !1)
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2150` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2025) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2150)

```diff
-           if (!("lifeform" in this.source ? (0, kV.cf)(VV, 0, this.key, this.source.lifeform, this.scale) : (0, kV.Ae)(VV, 0, this.key, this.source.attachment, this.scale))) return !1;
+           if (!("lifeform" in this.source ? (0, uH.nf)(HH, 0, this.key, this.source.lifeform, this.scale) : (0, uH.Fe)(HH, 0, this.key, this.source.attachment, this.scale))) return !1;
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2156` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2031) · [Before (L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2156)

```diff
-         } = this, JV = (2 & eV ? kV.Lc.Pose : 0) | (4 & eV ? kV.Lc.Visible : 0) | (16 & eV ? kV.Lc.Clip : 0) | (32 & eV ? kV.Lc.Perch : 0);
+         } = this, AH = (2 & BH ? uH.Wc.Pose : 0) | (4 & BH ? uH.Wc.Visible : 0) | (16 & BH ? uH.Wc.Clip : 0) | (32 & BH ? uH.Wc.Perch : 0);
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2159` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2034) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2159)

```diff
-           if (!(0, kV._e)(VV, 0, this.key, JV, this.visible ? 1 : 0, xV ? 1 : 0, this.feet, this.yaw, xV ? this.host.serverId(xV.EY) : 0, null !== (YV = null === xV || void 0 === xV ? void 0 : xV.offset) && void 0 !== YV ? YV : Vx, null !== (UV = null === xV || void 0 === xV ? vo … [truncated]
+           if (!(0, uH.jf)(HH, 0, this.key, AH, this.visible ? 1 : 0, LH ? 1 : 0, this.feet, this.yaw, LH ? this.host.serverId(LH.vB) : 0, null !== (rH = null === LH || void 0 === LH ? void 0 : LH.offset) && void 0 !== rH ? rH : HL, null !== (SH = null === LH || void 0 === LH ? vo … [truncated]
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2163` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2038) · [Before (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2163)

```diff
-           if (!(0, kV.We)(VV, 0, this.key)) return !1;
+           if (!(0, uH.gf)(HH, 0, this.key)) return !1;
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2169` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2044) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2169)

```diff
-     var Jx = xV(42305);
+     var AL = LH(42314);
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2172` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2047) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2172)

```diff
-       return (0, Jx.e)(), (0, kV.Lf)(VV, eV, xV, JV)
+       return (0, AL.b)(), (0, uH.Wf)(HH, BH, LH, AH)
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2174-L2176` → after: `L2049-L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2049-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2049-L2051) · [Before (L2174-L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2174-L2176)

```diff
-     var Ux = xV(40357),
-       yx = xV(41867),
-       px = xV(42314);
+     var SL = LH(40084),
+       hL = LH(41920),
+       tL = LH(42327);
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2189` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064) · [Before (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2189)

```diff
-     const Bx = ve.d;
+     const ML = GB.e;
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2192-L2193` → after: `L2067-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067-L2068) · [Before (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2192-L2193)

```diff
-       const eV = ve.b[VV],
-         xV = eV && ve.d[eV.mainMultiblock];
+       const BH = GB.c[HH],
+         LH = BH && GB.e[BH.mainMultiblock];
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2203` → after: `L2078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2078) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2203)

```diff
-       if (null === VV || void 0 === VV) return kV.Uc;
+       if (null === HH || void 0 === HH) return uH.bd;
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2205` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2080) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2205)

```diff
-       return Number.isInteger(eV) && eV >= -2147483648 && eV <= 2147483647 && String(eV) === String(VV) ? eV : kV.Uc
+       return Number.isInteger(BH) && BH >= -2147483648 && BH <= 2147483647 && String(BH) === String(HH) ? BH : uH.bd
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2209` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2084) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2209)

```diff
-       return (0, kV.Sf)(VV, 0, eV, null !== xV && void 0 !== xV ? xV : Number.NaN)
+       return (0, uH.ag)(HH, 0, BH, null !== LH && void 0 !== LH ? LH : Number.NaN)
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2220` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2095) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2220)

```diff
-           ik: (VV, eV) => {
+           Mu: (HH, BH) => {
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2229` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2104) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2229)

```diff
-         if (!this.isLocal(VV)) throw new Error(`Attempted to ${eV} for a player that is not the local player`)
+         if (!this.isLocal(HH)) throw new Error(`Attempted to ${BH} for a player that is not the local player`)
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2232-L2233` → after: `L2107-L2108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2107-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2107-L2108) · [Before (L2232-L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2232-L2233)

```diff
-         const eV = this.api.YF(VV);
-         if (!eV) throw new Error(`Entity ${VV} has no replicated position`);
+         const BH = this.api.hT(HH);
+         if (!BH) throw new Error(`Entity ${HH} has no replicated position`);
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2251` → after: `L2126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2126) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2251)

```diff
-         this.assertLocal(VV, "open shop"), yV.h.QZ("showShopFromServer", {
+         this.assertLocal(HH, "open shop"), hH.k.AX("showShopFromServer", {
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2253` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2128) · [Before (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2253)

```diff
-           vY: xV
+           qS: LH
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2262` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2137) · [Before (L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2262)

```diff
-         yV.h.QZ("chat", {
+         hH.k.AX("chat", {
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2271` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2146) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2271)

```diff
-         return eV === kV.Uc ? void 0 : (0, He.k)(this.api, eV)
+         return BH === uH.bd ? void 0 : (0, dB.k)(this.api, BH)
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2275` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2150) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2275)

```diff
-         return xV !== kV.Uc && (0, He.g)(this.api, xV, eV)
+         return LH !== uH.bd && (0, dB.h)(this.api, LH, BH)
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2284` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2159) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2284)

```diff
-         if (!this.chunks.dataCleared(VV, eV, xV)) return (0, He.c)(this.api, VV, eV, xV)
+         if (!this.chunks.dataCleared(HH, BH, LH)) return (0, dB.d)(this.api, HH, BH, LH)
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2291-L2292` → after: `L2166-L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2166-L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2166-L2167) · [Before (L2291-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2291-L2292)

```diff
-         if (!Object.hasOwn(kV.gd, xV)) throw new Error(`Unknown other-entity setting ${xV}`);
-         const YV = kV.gd[xV],
+         if (!Object.hasOwn(uH.md, LH)) throw new Error(`Unknown other-entity setting ${LH}`);
+         const rH = uH.md[LH],
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2294` → after: `L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2169) · [Before (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2294)

```diff
-         if (UV === kV.Uc || !this.deps.beforeWrite()) return;
+         if (SH === uH.bd || !this.deps.beforeWrite()) return;
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2296` → after: `L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2171) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296)

```diff
-         if (yV.length > 16384) throw new Error(`The other-entity setting ${xV}'s value is over 16384 bytes`);
+         if (hH.length > 16384) throw new Error(`The other-entity setting ${LH}'s value is over 16384 bytes`);
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2309` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2184) · [Before (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2309)

```diff
-         if (1 === kV.ob.headingIsDrawn(eV, 0)) return kV.ob.heading(eV, 0);
+         if (1 === uH.vb.headingIsDrawn(BH, 0)) return uH.vb.heading(BH, 0);
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2311` → after: `L2186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2186) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2311)

```diff
-         return this.isLocal(VV) && 0 === (kV.s.playerFlags(xV, 0) & kV.Ld.FreeCam) ? kV.s.heading(xV, 0) : null
+         return this.isLocal(HH) && 0 === (uH.y.playerFlags(LH, 0) & uH.Md.FreeCam) ? uH.y.heading(LH, 0) : null
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2315-L2316` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2190-L2191) · [Before (L2315-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2315-L2316)

```diff
-           xV = eV ? kV.ob.eyeHeight(eV, 0) : 0;
-         return xV > 0 ? xV : null
+           LH = BH ? uH.vb.eyeHeight(BH, 0) : 0;
+         return LH > 0 ? LH : null
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2320` → after: `L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2195) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2320)

```diff
-         return eV === kV.Uc || this.api.queries.directorEntity(eV) < kV.ob.BYTES ? null : this.api.scratchData(kV.ob.BYTES, "the drawn DirectorEntity")
+         return BH === uH.bd || this.api.queries.directorEntity(BH) < uH.vb.BYTES ? null : this.api.scratchData(uH.vb.BYTES, "the drawn DirectorEntity")
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2324` → after: `L2199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2199) · [Before (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2324)

```diff
-         return eV !== kV.Uc && 1 === this.api.queries.entityDrawn(eV)
+         return BH !== uH.bd && 1 === this.api.queries.entityDrawn(BH)
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2327` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202) · [Before (L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2327)

```diff
-         return px.e.ids()
+         return tL.f.ids()
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2331` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2206) · [Before (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2331)

```diff
-         return null !== (eV = (0, px.f)(VV)) && void 0 !== eV ? eV : null
+         return null !== (BH = (0, tL.j)(HH)) && void 0 !== BH ? BH : null
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2334-L2337` → after: `L2209-L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2209-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2209-L2212) · [Before (L2334-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2334-L2337)

```diff
-         const VV = kV.s.playerFlags(this.api.apiView, 0);
-         return 0 === (VV & kV.Ld.Replay) && this.api.readDrawnPosition(this.api.localId, wx) ? {
-           onGround: 0 !== (VV & kV.Ld.OnGround),
-           jumpHeld: 0 !== (VV & kV.Ld.JumpHeld)
+         const HH = uH.y.playerFlags(this.api.apiView, 0);
+         return 0 === (HH & uH.Md.Replay) && this.api.readDrawnPosition(this.api.localId, EL) ? {
+           onGround: 0 !== (HH & uH.Md.OnGround),
+           jumpHeld: 0 !== (HH & uH.Md.JumpHeld)
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2341` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2216) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2341)

```diff
-         return (0, re.t)(this.deps.localPhysicsType())
+         return (0, YB.v)(this.deps.localPhysicsType())
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2343-L2344` → after: `L2218-L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2218-L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2218-L2219) · [Before (L2343-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2343-L2344)

```diff
-       bJV(VV) {
-         return this.isLocal(VV) ? this.items.hn() : null
+       yLH(HH) {
+         return this.isLocal(HH) ? this.items.LX() : null
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2354` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2229) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2354)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.hn()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.LX()
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2358` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2233) · [Before (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2358)

```diff
-         const xV = (0, be.c)(JV.b.get("crosshairGameView"), JV.b.get("crosshairShownOverride"));
+         const LH = (0, QB.b)(AH.c.get("crosshairGameView"), AH.c.get("crosshairShownOverride"));
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2363-L2365` → after: `L2238-L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2238-L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2238-L2240) · [Before (L2363-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2363-L2365)

```diff
-           pV = 0 === (kV.s.playerFlags(this.api.apiView, 0) & kV.Ld.ZoomFirstPerson),
-           QV = null !== (eV = this.tables.getClientOption("gunshotOrigin")) && void 0 !== eV ? eV : null;
-         return (0, be.g)({
+           tH = 0 === (uH.y.playerFlags(this.api.apiView, 0) & uH.Md.ZoomFirstPerson),
+           zH = null !== (BH = this.tables.getClientOption("gunshotOrigin")) && void 0 !== BH ? BH : null;
+         return (0, QB.f)({
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2371` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2246) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371)

```diff
-         JV.b.set({
+         AH.c.set({
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2388` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2263) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388)

```diff
-         if (this.isLocal(VV)) return 0 !== (kV.s.playerFlags(this.api.apiView, 0) & kV.Ld.Crouching);
+         if (this.isLocal(HH)) return 0 !== (uH.y.playerFlags(this.api.apiView, 0) & uH.Md.Crouching);
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2390` → after: `L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2265) · [Before (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2390)

```diff
-         return eV !== kV.Uc && 1 === this.api.queries.entityCrouching(eV)
+         return BH !== uH.bd && 1 === this.api.queries.entityCrouching(BH)
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2396` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2271) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2396)

```diff
-         return 0 !== (kV.s.playerFlags(this.api.apiView, 0) & kV.Ld.AttemptingBreak)
+         return 0 !== (uH.y.playerFlags(this.api.apiView, 0) & uH.Md.AttemptingBreak)
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2399` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2274) · [Before (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2399)

```diff
-         return this.live.IeV()
+         return this.live.cBH()
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2403` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2278) · [Before (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2403)

```diff
-         for (let eV = 0; eV < 3; eV++) vx.origin[eV] = kV.s.rxV(VV, 0, eV), vx.direction[eV] = kV.s.actionDir(VV, 0, eV);
+         for (let BH = 0; BH < 3; BH++) GL.origin[BH] = uH.y.iBH(HH, 0, BH), GL.direction[BH] = uH.y.actionDir(HH, 0, BH);
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2419-L2420` → after: `L2294-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2294-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2294-L2295) · [Before (L2419-L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2419-L2420)

```diff
-       axV(VV, eV, xV, JV, YV) {
-         return 1 === this.api.queries.terrainBlocked(JV, VV, eV, xV, qx(null !== YV && void 0 !== YV ? YV : null))
+       PLH(HH, BH, LH, AH, rH) {
+         return 1 === this.api.queries.terrainBlocked(AH, HH, BH, LH, vL(null !== rH && void 0 !== rH ? rH : null))
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2435` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2310) · [Before (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2435)

```diff
-         return this.chunks.vp(VV, eV, xV)
+         return this.chunks.ph(HH, BH, LH)
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2441` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2316) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2441)

```diff
-         return 1 === JV ? yV : yV.rate(JV)
+         return 1 === AH ? hH : hH.rate(AH)
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2450-L2453` → after: `L2325-L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2325-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2325-L2328) · [Before (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2450-L2453)

```diff
-         if (!yV) return Re.c;
-         const pV = null === xV || void 0 === xV ? void 0 : xV.cY,
-           QV = null !== (YV = null === xV || void 0 === xV ? void 0 : xV.maxHearDist) && void 0 !== YV ? YV : ke.f,
-           nV = null !== (UV = null === xV || void 0 === xV ? void 0 : xV.refDistance) && void 0 !== UV ? UV : ke.h;
+         if (!hH) return lB.d;
+         const tH = null === LH || void 0 === LH ? void 0 : LH.SH,
+           zH = null !== (rH = null === LH || void 0 === LH ? void 0 : LH.maxHearDist) && void 0 !== rH ? rH : uB.f,
+           CH = null !== (SH = null === LH || void 0 === LH ? void 0 : LH.refDistance) && void 0 !== SH ? SH : uB.i;
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2459` → after: `L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2334) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2459)

```diff
-             if (!this.api.readPosition(VV, Qx)) return Re.c;
+             if (!this.api.readPosition(HH, zL)) return lB.d;
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2469-L2470` → after: `L2344-L2345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2344-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2344-L2345) · [Before (L2469-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2469-L2470)

```diff
-           if (0 === kV.s.viewProj(VV, 0, 3) && 0 === kV.s.viewProj(VV, 0, 7) && 0 === kV.s.viewProj(VV, 0, 11)) return null;
-           for (let eV = 0; eV < 3; eV++) nx[eV] = kV.s.eye(VV, 0, eV)
+           if (0 === uH.y.viewProj(HH, 0, 3) && 0 === uH.y.viewProj(HH, 0, 7) && 0 === uH.y.viewProj(HH, 0, 11)) return null;
+           for (let BH = 0; BH < 3; BH++) CL[BH] = uH.y.eye(HH, 0, BH)
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2472` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2347) · [Before (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2472)

```diff
-         return Number.isFinite(nx[0] + nx[1] + nx[2]) ? nx : null
+         return Number.isFinite(CL[0] + CL[1] + CL[2]) ? CL : null
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2475` → after: `L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2350) · [Before (L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2475)

```diff
-         if (!Number.isInteger(JV) || JV < 0 || JV > 65535) throw new Error(`Invalid block id ${JV}`);
+         if (!Number.isInteger(AH) || AH < 0 || AH > 65535) throw new Error(`Invalid block id ${AH}`);
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2481` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2356) · [Before (L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2481)

```diff
-         if (1 === this.api.queries.gR(YV, UV, yV, JV)) {
+         if (1 === this.api.queries.oq(rH, SH, hH, AH)) {
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2510` → after: `L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2385) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2510)

```diff
-                 look: kV.ac.FlatOnTop,
+                 look: uH.gc.FlatOnTop,
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2513` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2513)

```diff
-                 look: kV.ac.FlatOpaque,
+                 look: uH.gc.FlatOpaque,
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2516` → after: `L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2391) · [Before (L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2516)

```diff
-                 look: kV.ac.Flat,
+                 look: uH.gc.Flat,
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2521` → after: `L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2396) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521)

```diff
-                 look: kV.ac.Chevrons, colour: [...(0, Be.e)(VV.colour), VV.alpha]
+                 look: uH.gc.Chevrons, colour: [...(0, MB.e)(HH.colour), HH.alpha]
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2525` → after: `L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2400) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2525)

```diff
-                 look: kV.ac.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: uH.gc.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2537` → after: `L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2412) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2537)

```diff
-             const eV = null !== (pV = VV.uvs) && void 0 !== pV ? pV : [];
+             const BH = null !== (tH = HH.uvs) && void 0 !== tH ? tH : [];
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2540` → after: `L2415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2415) · [Before (L2540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2540)

```diff
-               yV.setFloat32(4 * (3 * xV + VV), null !== (QV = eV[VV]) && void 0 !== QV ? QV : 0, !0)
+               hH.setFloat32(4 * (3 * LH + HH), null !== (zH = BH[HH]) && void 0 !== zH ? zH : 0, !0)
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2545-L2546` → after: `L2420-L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2420-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2420-L2421) · [Before (L2545-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2545-L2546)

```diff
-         }(VV, (0, Ze.h)(eV));
-         return (0, kV.He)(YV, 0, JV, UV, yV, xV, pV, VV.indices.length, QV) && this.liveMeshes.add(JV), JV
+         }(HH, (0, XB.k)(BH));
+         return (0, uH.Se)(rH, 0, AH, SH, hH, LH, tH, HH.indices.length, zH) && this.liveMeshes.add(AH), AH
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2553-L2555` → after: `L2428-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2428-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2428-L2430) · [Before (L2553-L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2553-L2555)

```diff
-         eV.anchor && (YV |= kV.bc.Anchor, rx[0] = eV.anchor[0], rx[1] = eV.anchor[1], rx[2] = eV.anchor[2]), void 0 !== eV.visible && (YV |= kV.bc.Visible), eV.uvOffset && (YV |= kV.bc.UvOffset, kx[0] = eV.uvOffset[0], kx[1] = eV.uvOffset[1]);
-         const UV = null !== (xV = eV.visibility) && void 0 !== xV ? xV : 1;
-         void 0 !== eV.visibility && (YV |= kV.bc.Visibility), eV.scale && (YV |= kV.bc.Scale, bx[0] = eV.scale[0], bx[1] = eV.scale[1], bx[2] = eV.scale[2]), 0 !== YV && (0, kV.Ne)(JV, 0, VV, YV, eV.visible ? 1 : 0, rx, kx, UV, bx)
+         BH.anchor && (rH |= uH.hc.Anchor, YL[0] = BH.anchor[0], YL[1] = BH.anchor[1], YL[2] = BH.anchor[2]), void 0 !== BH.visible && (rH |= uH.hc.Visible), BH.uvOffset && (rH |= uH.hc.UvOffset, uL[0] = BH.uvOffset[0], uL[1] = BH.uvOffset[1]);
+         const SH = null !== (LH = BH.visibility) && void 0 !== LH ? LH : 1;
+         void 0 !== BH.visibility && (rH |= uH.hc.Visibility), BH.scale && (rH |= uH.hc.Scale, QL[0] = BH.scale[0], QL[1] = BH.scale[1], QL[2] = BH.scale[2]), 0 !== rH && (0, uH.Ye)(AH, 0, HH, rH, BH.visible ? 1 : 0, YL, uL, SH, QL)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2559` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2434) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2559)

```diff
-         eV && !(0, kV.Ke)(eV, 0, VV) || this.liveMeshes.delete(VV)
+         BH && !(0, uH.We)(BH, 0, HH) || this.liveMeshes.delete(HH)
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2611` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2486) · [Before (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2611)

```diff
-         const eV = `${VV.colour} ${VV.alpha}`;
+         const BH = `${HH.colour} ${HH.alpha}`;
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2653` → after: `L2528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2528) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2653)

```diff
-         for (; xV < VV.length && (0, kV.Se)(eV, 0, VV[xV]);) xV++;
+         for (; LH < HH.length && (0, uH.bf)(BH, 0, HH[LH]);) LH++;
```

#### 240. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2657` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2532) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2657)

```diff
-           (JV ? (0, kV.Wf)(eV, 0, JV.width, JV.alpha, 1, JV.endAtSolidFace ? 1 : 0) : (0, kV.Wf)(eV, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (AH ? (0, uH.cg)(BH, 0, AH.width, AH.alpha, 1, AH.endAtSolidFace ? 1 : 0) : (0, uH.cg)(BH, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 241. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2660` → after: `L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2535) · [Before (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2660)

```diff
-         void 0 !== YV && (0, kV.Rf)(eV, 0, null !== YV && void 0 !== YV ? YV : 0, null === YV ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== rH && (0, uH.Zf)(BH, 0, null !== rH && void 0 !== rH ? rH : 0, null === rH ? 1 : 0) && (this.pendingFar = void 0)
```

#### 242. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2665` → after: `L2540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2540) · [Before (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2665)

```diff
-         xV && JV !== kV.Uc && (0, kV.ag)(xV, 0, JV, eV)
+         LH && AH !== uH.bd && (0, uH.ng)(LH, 0, AH, BH)
```

#### 243. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2670` → after: `L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2545) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2670)

```diff
-         xV && JV !== kV.Uc && tx(xV, JV, eV)
+         LH && AH !== uH.bd && PL(LH, AH, BH)
```

#### 244. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2686` → after: `L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2561) · [Before (L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2686)

```diff
-         return eV !== kV.Uc && 1 === this.api.queries.entityInteractable(eV)
+         return BH !== uH.bd && 1 === this.api.queries.entityInteractable(BH)
```

#### 245. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2699` → after: `L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2574) · [Before (L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2699)

```diff
-           return null !== VV && void 0 !== VV ? VV : null
+           return null !== HH && void 0 !== HH ? HH : null
```

#### 246. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2706` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2581) · [Before (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2706)

```diff
-         return Zx[0] = kV.s.eye(VV, 0, 0), Zx[1] = kV.s.eye(VV, 0, 1), Zx[2] = kV.s.eye(VV, 0, 2), Zx
+         return XL[0] = uH.y.eye(HH, 0, 0), XL[1] = uH.y.eye(HH, 0, 1), XL[2] = uH.y.eye(HH, 0, 2), XL
```

#### 247. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2709` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2584) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2709)

```diff
-         return kV.s.cameraFar(this.api.apiView, 0)
+         return uH.y.cameraFar(this.api.apiView, 0)
```

#### 248. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2720` → after: `L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2595) · [Before (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2720)

```diff
-         eV && xV !== kV.Uc && (0, kV.we)(eV, 0, xV)
+         BH && LH !== uH.bd && (0, uH.Be)(BH, 0, LH)
```

#### 249. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2725-L2727` → after: `L2600-L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2600-L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2600-L2602) · [Before (L2725-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2725-L2727)

```diff
-         xV && Yx(xV, 0, yx.d.Chat, (0, oV.g)((0, yx.m)({
-           yZ: VV,
-           pZ: eV
+         return null !== LH && rL(LH, 0, hL.d.Chat, (0, RH.g)((0, hL.k)({
+           kt: HH,
+           ot: BH
```

#### 250. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2731` → after: `L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2731)

```diff
-         VV.length <= 119 && this.sendChat(`/${VV}`)
+         HH.length <= 119 && this.sendChat(`/${HH}`)
```

#### 251. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2739` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2614) · [Before (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2739)

```diff
-           pV = YV.vp(VV, eV, xV),
+           tH = rH.ph(HH, BH, LH),
```

#### 252. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2742-L2743` → after: `L2617-L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2617-L2618) · [Before (L2742-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2742-L2743)

```diff
-           const [JV, UV, nV] = [VV - QV.x, eV - QV.y, xV - QV.z], wV = Bx[YV.vp(JV, UV, nV)], ZV = null === wV || void 0 === wV ? void 0 : wV.positions.some((VV => VV.id === pV && VV.x === QV.x && VV.y === QV.y && VV.z === QV.z));
-           for (const VV of (ZV && wV ? wV : QV.main).positions) YV.vp(JV + VV.x, UV + VV.y, nV + VV.z) === VV.id && yV(JV + VV.x, UV + VV.y, nV + VV.z, 0, VV.id)
+           const [AH, SH, CH] = [HH - zH.x, BH - zH.y, LH - zH.z], EH = ML[rH.ph(AH, SH, CH)], XH = null === EH || void 0 === EH ? void 0 : EH.positions.some((HH => HH.id === tH && HH.x === zH.x && HH.y === zH.y && HH.z === zH.z));
+           for (const HH of (XH && EH ? EH : zH.main).positions) rH.ph(AH + HH.x, SH + HH.y, CH + HH.z) === HH.id && hH(AH + HH.x, SH + HH.y, CH + HH.z, 0, HH.id)
```

#### 253. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2749` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2624) · [Before (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2749)

```diff
-             yV(JV, UV, pV, ZV.id, YV.vp(JV, UV, pV))
+             hH(AH, SH, tH, XH.id, rH.ph(AH, SH, tH))
```

#### 254. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2753` → after: `L2628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2628) · [Before (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2753)

```diff
-           let QV = YV.vp(VV, eV + 1, xV);
+           let zH = rH.ph(HH, BH + 1, LH);
```

#### 255. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2765` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2640) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2765)

```diff
-         return 0 !== YV && 0 !== UV && JV.blockRootId(VV) === JV.blockRootId(eV) ? yV && xV !== UV ? UV : void 0 : 0 === UV || !yV && 0 !== xV ? yV ? 0 : void 0 : UV
+         return 0 !== rH && 0 !== SH && AH.blockRootId(HH) === AH.blockRootId(BH) ? hH && LH !== SH ? SH : void 0 : 0 === SH || !hH && 0 !== LH ? hH ? 0 : void 0 : SH
```

#### 256. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2768` → after: `L2643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2643) · [Before (L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2768)

```diff
-     const Tx = kV.nc + kV.rc * kV.vc.BYTES,
+     const UL = uH.sc + uH.uc * uH.Ec.BYTES,
```

#### 257. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2773-L2774` → after: `L2648-L2649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2648-L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2648-L2649) · [Before (L2773-L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2773-L2774)

```diff
-         Ey: 0,
-         Bw: null,
+         ZC: 0,
+         fE: null,
```

#### 258. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2778` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2653) · [Before (L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2778)

```diff
-         get: () => () => kV.ed
+         get: () => () => uH.jd
```

#### 259. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2790` → after: `L2665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2665) · [Before (L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2790)

```diff
-         this.deps = VV, this.ix = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(kV.rc), this.ids = new Uint16Array(kV.rc), this.amounts = new Uint16Array(kV.rc), this.attrRead = new Float64Array(kV.rc).fill(-1 … [truncated]
+         this.deps = HH, this.OL = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(uH.uc), this.ids = new Uint16Array(uH.uc), this.amounts = new Uint16Array(uH.uc), this.attrRead = new Float64Array(uH.uc).fill(-1 … [truncated]
```

#### 260. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2806` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2681) · [Before (L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2806)

```diff
-         return Number.isInteger(VV) && VV >= 0 && VV < this.len && 0 !== this.ids[VV] && null !== (eV = this.facades[VV]) && void 0 !== eV ? eV : null
+         return Number.isInteger(HH) && HH >= 0 && HH < this.len && 0 !== this.ids[HH] && null !== (BH = this.facades[HH]) && void 0 !== BH ? BH : null
```

#### 261. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2813` → after: `L2688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2688) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2813)

```diff
-         for (let eV = 0; eV < Math.min(kV.pd, this.len); eV++) VV.push(this.slot(eV));
+         for (let BH = 0; BH < Math.min(uH.vd, this.len); BH++) HH.push(this.slot(BH));
```

#### 262. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2818` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2693) · [Before (L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2818)

```diff
-         for (let eV = 0; eV < Math.min(kV.pd - kV.h, this.len); eV++) 0 === this.ids[eV] && VV++;
+         for (let BH = 0; BH < Math.min(uH.vd - uH.i, this.len); BH++) 0 === this.ids[BH] && HH++;
```

#### 263. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2823` → after: `L2698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2698) · [Before (L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2823)

```diff
-         for (let JV = 0; JV < Math.min(kV.pd, this.len); JV++) {
+         for (let AH = 0; AH < Math.min(uH.vd, this.len); AH++) {
```

#### 264. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2826` → after: `L2701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2701) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2826)

```diff
-           if ((null === YV || void 0 === YV ? void 0 : YV.name) === VV) eV += null !== (xV = YV.amount) && void 0 !== xV ? xV : 1
+           if ((null === rH || void 0 === rH ? void 0 : rH.name) === HH) BH += null !== (LH = rH.amount) && void 0 !== LH ? LH : 1
```

#### 265. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2832` → after: `L2707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2707) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2832)

```diff
-         return null !== (eV = this.instances[VV]) && void 0 !== eV ? eV : 0
+         return null !== (BH = this.instances[HH]) && void 0 !== BH ? BH : 0
```

#### 266. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2853` → after: `L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2728) · [Before (L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2853)

```diff
-         this.ix[0] = VV, this.ix[1] = eV, this.ix[2] = xV, this.version++
+         this.OL[0] = HH, this.OL[1] = BH, this.OL[2] = LH, this.version++
```

#### 267. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2857-L2859` → after: `L2732-L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2732-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2732-L2734) · [Before (L2857-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2857-L2859)

```diff
-           eV = kV.s.inventoryViewPtr(VV, 0),
-           xV = kV.s.inventoryVersion(VV, 0),
-           JV = kV.s.selectedSlot(VV, 0);
+           BH = uH.y.inventoryViewPtr(HH, 0),
+           LH = uH.y.inventoryVersion(HH, 0),
+           AH = uH.y.selectedSlot(HH, 0);
```

#### 268. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2861` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2736) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2861)

```diff
-         const YV = kV.s.slotIcon(VV, 0);
+         const rH = uH.y.slotIcon(HH, 0);
```

#### 269. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2865` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2740) · [Before (L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2865)

```diff
-           yV = UV ? Math.min(UV.getUint32(0, !0), kV.rc) : 0;
+           hH = SH ? Math.min(SH.getUint32(0, !0), uH.uc) : 0;
```

#### 270. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2868-L2870` → after: `L2743-L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2743-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2743-L2745) · [Before (L2868-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2868-L2870)

```diff
-         for (let QV = 0; QV < kV.rc; QV++) {
-           const VV = kV.nc + QV * kV.vc.BYTES,
-             eV = null !== UV && QV < yV ? kV.vc.item(UV, VV) : 0;
+         for (let zH = 0; zH < uH.uc; zH++) {
+           const HH = uH.sc + zH * uH.Ec.BYTES,
+             BH = null !== SH && zH < hH ? uH.Ec.item(SH, HH) : 0;
```

#### 271. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2875-L2876` → after: `L2750-L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2750-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2750-L2751) · [Before (L2875-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2875-L2876)

```diff
-           const xV = kV.vc.amount(UV, VV),
-             JV = kV.vc.attrVersion(UV, VV);
+           const LH = uH.Ec.amount(SH, HH),
+             AH = uH.Ec.attrVersion(SH, HH);
```

#### 272. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2912` → after: `L2787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2787) · [Before (L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2912)

```diff
-           QV += 8 + (0, vV.ze)(eV);
+           zH += 8 + (0, GH.te)(BH);
```

#### 273. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2938-L2939` → after: `L2813-L2814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2813-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2813-L2814) · [Before (L2938-L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2938-L2939)

```diff
-           pV = yV === kV.ed ? kV.Hb : null !== (YV = null === (UV = this.extras()) || void 0 === UV ? void 0 : UV[1]) && void 0 !== YV ? YV : kV.Hb;
-         return this.settle(yV), pV === kV.Hb ? null : pV
+           tH = hH === uH.jd ? uH.Sb : null !== (rH = null === (SH = this.extras()) || void 0 === SH ? void 0 : SH[1]) && void 0 !== rH ? rH : uH.Sb;
+         return this.settle(hH), tH === uH.Sb ? null : tH
```

#### 274. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2966` → after: `L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2841) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2966)

```diff
-         const pV = UV === kV.ed ? null : this.extras();
+         const tH = SH === uH.jd ? null : this.extras();
```

#### 275. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2970-L2971` → after: `L2845-L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2845-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2845-L2846) · [Before (L2970-L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2970-L2971)

```diff
-             Ey: VV,
-             Bw: eV === kV.Hb ? null : eV,
+             ZC: HH,
+             fE: BH === uH.Sb ? null : BH,
```

#### 276. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2994` → after: `L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2869) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2994)

```diff
-           if (yV.length > 1024) return UV(new Error(`The crafting station ${VV}'s name is over 1024 bytes`)), null;
+           if (hH.length > 1024) return SH(new Error(`The crafting station ${HH}'s name is over 1024 bytes`)), null;
```

#### 277. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3000-L3001` → after: `L2875-L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2875-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2875-L2876) · [Before (L3000-L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3000-L3001)

```diff
-           QV = YV.queries.craftingView(null !== (JV = null === yV || void 0 === yV ? void 0 : yV.length) && void 0 !== JV ? JV : 0, pV ? eV : 0, pV ? xV : 0);
-         return QV < kV.gb.BYTES ? (YV.reportCorruption(`crafting_view's answer of ${QV} bytes`), null) : YV.memoryData(YV.scratch(), QV, 1, "crafting_view's answer")
+           zH = rH.queries.craftingView(null !== (AH = null === hH || void 0 === hH ? void 0 : hH.length) && void 0 !== AH ? AH : 0, tH ? BH : 0, tH ? LH : 0);
+         return zH < uH.ob.BYTES ? (rH.reportCorruption(`crafting_view's answer of ${zH} bytes`), null) : rH.memoryData(rH.scratch(), zH, 1, "crafting_view's answer")
```

#### 278. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3014-L3015` → after: `L2889-L2890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2889-L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889-L2890) · [Before (L3014-L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3014-L3015)

```diff
-         if (VV === kV.ad)(0, Jx.e)();
-         else if (VV !== kV.ed) {
+         if (HH === uH.hd)(0, AL.b)();
+         else if (HH !== uH.jd) {
```

#### 279. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3018-L3019` → after: `L2893-L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2893-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2893-L2894) · [Before (L3018-L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3018-L3019)

```diff
-             return (0, Jx.e)(), (0, kV.hg)(VV, eV, xV)
-           }(eV, 0, VV) || this.deps.onError(new Error(`Sync op ${VV}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, AL.b)(), (0, uH.yg)(HH, BH, LH)
+           }(BH, 0, HH) || this.deps.onError(new Error(`Sync op ${HH}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 280. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3021` → after: `L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2896) · [Before (L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3021)

```diff
-         return this.stopped || this.refresh(), VV !== kV.ed
+         return this.stopped || this.refresh(), HH !== uH.jd
```

#### 281. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3028` → after: `L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2903) · [Before (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3028)

```diff
-       Cx = 1.2 * je.f.QB,
+       qL = 1.2 * xB.g.JW,
```

#### 282. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3036` → after: `L2911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2911) · [Before (L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3036)

```diff
-       return eV || (hx.size >= 64 && hx.clear(), eV = ax.encode(`{"emitRate":${VV}}`), hx.set(VV, eV)), eV
+       return BH || (jL.size >= 64 && jL.clear(), BH = gL.encode(`{"emitRate":${HH}}`), jL.set(HH, BH)), BH
```

#### 283. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3040` → after: `L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2915) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3040)

```diff
-       return Number.isFinite(VV) && VV > 0 ? VV : 0
+       return Number.isFinite(HH) && HH > 0 ? HH : 0
```

#### 284. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3056` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2931) · [Before (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3056)

```diff
-       return VV.length > kV.Hd.MaxOpts ? (xV(new Error(`${eV}'s particle opts are over ${kV.Hd.MaxOpts} bytes of JSON`)), null) : VV
+       return HH.length > uH.Id.MaxOpts ? (LH(new Error(`${BH}'s particle opts are over ${uH.Id.MaxOpts} bytes of JSON`)), null) : HH
```

#### 285. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3080-L3081` → after: `L2955-L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2955-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2955-L2956) · [Before (L3080-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3080-L3081)

```diff
-           YV = null !== (xV = eV.half) && void 0 !== xV ? xV : Dx;
-         if (!JV || this.live >= kV.Hd.MaxLiveKeys || this.nextKey > kV.Hd.MaxKey || !fx(eV.pos, YV)) return Hx;
+           rH = null !== (LH = BH.half) && void 0 !== LH ? LH : cL;
+         if (!AH || this.live >= uH.Id.MaxLiveKeys || this.nextKey > uH.Id.MaxKey || !DL(BH.pos, rH)) return dL;
```

#### 286. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3087` → after: `L2962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2962) · [Before (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3087)

```diff
-               Jv: VV.Jv,
+               aX: HH.aX,
```

#### 287. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3095-L3097` → after: `L2970-L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2970-L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2970-L2972) · [Before (L3095-L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3095-L3097)

```diff
-               gravity: null !== (eV = VV.gravity) && void 0 !== eV ? eV : Dx,
-               dir1: null !== (xV = VV.dir1) && void 0 !== xV ? xV : gx,
-               dir2: null !== (JV = VV.dir2) && void 0 !== JV ? JV : gx,
+               gravity: null !== (BH = HH.gravity) && void 0 !== BH ? BH : cL,
+               dir1: null !== (LH = HH.dir1) && void 0 !== LH ? LH : KL,
+               dir2: null !== (AH = HH.dir2) && void 0 !== AH ? AH : KL,
```

#### 288. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3103` → after: `L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2978) · [Before (L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3103)

```diff
-         return yV && (0, kV.mf)(JV, 0, UV, 0, kV.Hd.PresetNone, 0, ox, cx, yV) ? (this.nextKey++, this.live++, this.started = !0, new sx(this, this.session, UV, VV, YV)) : Hx
+         return hH && (0, uH.vf)(AH, 0, SH, 0, uH.Id.PresetNone, 0, NL, RL, hH) ? (this.nextKey++, this.live++, this.started = !0, new sL(this, this.session, SH, HH, rH)) : dL
```

#### 289. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3115` → after: `L2990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2990) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3115)

```diff
-         YV && (0, kV.hf)(eV, 0, 0, kV.Hd.PresetNone, kV.Hd.HasBox, 0, ox, cx, YV)
+         rH && (0, uH.rf)(BH, 0, 0, uH.Id.PresetNone, uH.Id.HasBox, 0, NL, RL, rH)
```

#### 290. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3119-L3120` → after: `L2994-L2995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2994-L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2994-L2995) · [Before (L3119-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3119-L3120)

```diff
-           YV = Math.min(Math.floor(xV), kV.Hd.MaxBurst);
-         if (!JV || !Object.hasOwn(kV.dc, VV) || !(YV > 0)) return;
+           rH = Math.min(Math.floor(LH), uH.Id.MaxBurst);
+         if (!AH || !Object.hasOwn(uH.jc, HH) || !(rH > 0)) return;
```

#### 291. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3123` → after: `L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2998) · [Before (L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3123)

```diff
-         Number.isFinite(ox[0] + ox[1] + ox[2]) && (0, kV.hf)(JV, 0, 0, kV.dc[VV], kV.Hd.HasBox, YV, ox, cx, ix)
+         Number.isFinite(NL[0] + NL[1] + NL[2]) && (0, uH.rf)(AH, 0, 0, uH.jc[HH], uH.Id.HasBox, rH, NL, RL, eL)
```

#### 292. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3128` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3003) · [Before (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !VV || (0, kV.of)(VV, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !HH || (0, uH.yf)(HH, 0)
```

#### 293. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3135` → after: `L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3010) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3135)

```diff
-         xV && (0, kV.qf)(xV, 0, eV) && this.live--
+         LH && (0, uH.Cf)(LH, 0, BH) && this.live--
```

#### 294. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3152` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3027) · [Before (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3152)

```diff
-           fx(VV, this.half) && (0, kV.rf)(xV, 0, this.key, kV.Hd.HasBox, ox, cx, ix)
+           DL(HH, this.half) && (0, uH.Df)(LH, 0, this.key, uH.Id.HasBox, NL, RL, eL)
```

#### 295. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3158` → after: `L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3033) · [Before (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3158)

```diff
-         eV && xV !== this.rate && (0, kV.rf)(eV, 0, this.key, 0, Dx, Dx, lx(xV)) && (this.rate = xV, this.emitted ||= xV > 0)
+         BH && LH !== this.rate && (0, uH.Df)(BH, 0, this.key, 0, cL, cL, nL(LH)) && (this.rate = LH, this.emitted ||= LH > 0)
```

#### 296. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3162-L3163` → after: `L3037-L3038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3037-L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3037-L3038) · [Before (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3162-L3163)

```diff
-           xV = Math.min(Math.floor(VV), kV.Hd.MaxBurst);
-         eV && xV > 0 && (0, kV.hf)(eV, 0, this.key, kV.Hd.PresetNone, 0, xV, Dx, Dx, ix) && (this.emitted = !0)
+           LH = Math.min(Math.floor(HH), uH.Id.MaxBurst);
+         BH && LH > 0 && (0, uH.rf)(BH, 0, this.key, uH.Id.PresetNone, 0, LH, cL, cL, eL) && (this.emitted = !0)
```

#### 297. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3167` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3042) · [Before (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3167)

```diff
-           YV = Math.min(Math.floor(xV), kV.Hd.MaxPoints, Math.floor(eV.length / 4));
+           rH = Math.min(Math.floor(LH), uH.Id.MaxPoints, Math.floor(BH.length / 4));
```

#### 298. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3169-L3170` → after: `L3044-L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3044-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3044-L3045) · [Before (L3169-L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3169-L3170)

```diff
-         const UV = new Uint8Array(eV.buffer, eV.byteOffset, YV * kV.Hd.PointBytes);
-         (0, kV.if)(JV, 0, this.key, YV, VV, UV) && (this.emitted = !0)
+         const SH = new Uint8Array(BH.buffer, BH.byteOffset, rH * uH.Id.PointBytes);
+         (0, uH.sf)(AH, 0, this.key, rH, HH, SH) && (this.emitted = !0)
```

#### 299. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3179` → after: `L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3054) · [Before (L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3179)

```diff
-         (0, kV.rf)(xV, 0, this.key, 0, Dx, Dx, JV)
+         (0, uH.Df)(LH, 0, this.key, 0, cL, cL, AH)
```

#### 300. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3183` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3058) · [Before (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3183)

```diff
-         this.stopped = !0, VV && (this.emitted ? (this.rate > 0 && (0, kV.rf)(VV, 0, this.key, 0, Dx, Dx, lx(0)), setTimeout((() => {
+         this.stopped = !0, HH && (this.emitted ? (this.rate > 0 && (0, uH.Df)(HH, 0, this.key, 0, cL, cL, nL(0)), setTimeout((() => {
```

#### 301. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3194` → after: `L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3069) · [Before (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3194)

```diff
-     const Sx = Se.l,
+     const JL = JB.s,
```

#### 302. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3205` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3080) · [Before (L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3205)

```diff
-         if (VV !== kV.Uc && !FV(JV[UV])) {
+         if (HH !== uH.bd && !TH(AH[SH])) {
```

#### 303. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3220` → after: `L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3095) · [Before (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3220)

```diff
-       return VV.length >= eV ? VV : new Int32Array(Math.max(eV, 2 * VV.length))
+       return HH.length >= BH ? HH : new Int32Array(Math.max(BH, 2 * HH.length))
```

#### 304. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3232-L3234` → after: `L3107-L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3107-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3107-L3109) · [Before (L3232-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3232-L3234)

```diff
-         for (let VV = 0; VV + kV.Sb.BYTES <= pV;) {
-           const eV = kV.Sb.len(QV, VV);
-           JV(kV.Sb.serverId(QV, VV), eJ(QV, VV, eV)), VV += kV.Sb.BYTES + (0, vV.ze)(eV)
+         for (let HH = 0; HH + uH.$b.BYTES <= tH;) {
+           const BH = uH.$b.len(zH, HH);
+           AH(uH.$b.serverId(zH, HH), BA(zH, HH, BH)), HH += uH.$b.BYTES + (0, GH.te)(BH)
```

#### 305. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3242` → after: `L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3117) · [Before (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3242)

```diff
-       const yV = kV.Sb.kind(VV, eV),
+       const hH = uH.$b.kind(HH, BH),
```

#### 306. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3245-L3249` → after: `L3120-L3124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3120-L3124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3120-L3124) · [Before (L3245-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3245-L3249)

```diff
-       const QV = kV.Sb.variation(VV, eV),
-         nV = kV.Sb.pose(VV, eV),
-         wV = kV.Sb.meta(VV, eV),
-         ZV = kV.Sb.mesh(VV, eV),
-         vV = 0 !== (kV.Sb.flags(VV, eV) & kV.Ob.HasOpts),
+       const zH = uH.$b.variation(HH, BH),
+         CH = uH.$b.pose(HH, BH),
+         EH = uH.$b.meta(HH, BH),
+         XH = uH.$b.mesh(HH, BH),
+         GH = 0 !== (uH.$b.flags(HH, BH) & uH._b.HasOpts),
```

#### 307. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3253-L3257` → after: `L3128-L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3128-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128-L3132) · [Before (L3253-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3253-L3257)

```diff
-         variation: QV === kV.$c ? void 0 : null !== (JV = null !== (YV = null === rV || void 0 === rV ? void 0 : rV[QV]) && void 0 !== YV ? YV : null === rV || void 0 === rV ? void 0 : rV[0]) && void 0 !== JV ? JV : "default",
-         pose: nV === kV.mc ? void 0 : null !== (UV = kV.Ab[nV]) && void 0 !== UV ? UV : kV.Ab[0],
-         metaInfo: wV === kV.mc ? void 0 : kV.Jc[wV],
-         meshKind: ZV === kV.mc ? void 0 : kV.Fc[ZV],
-         meshOpts: vV ? Ix.decode(new Uint8Array(VV.buffer, VV.byteOffset + eV + kV.Sb.BYTES, xV)) : void 0
+         variation: zH === uH.gd ? void 0 : null !== (AH = null !== (rH = null === YH || void 0 === YH ? void 0 : YH[zH]) && void 0 !== rH ? rH : null === YH || void 0 === YH ? void 0 : YH[0]) && void 0 !== AH ? AH : "default",
+         pose: CH === uH.qc ? void 0 : null !== (SH = uH.Mb[CH]) && void 0 !== SH ? SH : uH.Mb[0],
+         metaInfo: EH === uH.qc ? void 0 : uH.Vc[EH],
+         meshKind: XH === uH.qc ? void 0 : uH.Uc[XH],
+         meshOpts: GH ? iL.decode(new Uint8Array(HH.buffer, HH.byteOffset + BH + uH.$b.BYTES, LH)) : void 0
```

#### 308. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3264` → after: `L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3139) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3264)

```diff
-         this.deps = VV, this.wanted = 0, this.hn = !1, this.refused = !1
+         this.deps = HH, this.wanted = 0, this.LX = !1, this.refused = !1
```

#### 309. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3267` → after: `L3142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3142) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3267)

```diff
-         return this.hn
+         return this.LX
```

#### 310. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3270` → after: `L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3145) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3270)

```diff
-         this.wanted = eV ? this.wanted | VV : this.wanted & ~VV;
+         this.wanted = BH ? this.wanted | HH : this.wanted & ~HH;
```

#### 311. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3272` → after: `L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3147) · [Before (L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3272)

```diff
-         if (xV === this.hn) return;
+         if (LH === this.LX) return;
```

#### 312. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3274` → after: `L3149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3149) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3274)

```diff
-         null !== JV ? (0, kV.jg)(JV, 0, xV ? 1 : 0) ? (this.hn = xV, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.hn = !1
+         null !== AH ? (0, uH.Cg)(AH, 0, LH ? 1 : 0) ? (this.LX = LH, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.LX = !1
```

#### 313. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3283` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3158) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3283)

```diff
-         return this.complete || this.fill(), null !== (eV = this.entries.get("string" === typeof VV ? VV : String(VV))) && void 0 !== eV ? eV : null
+         return this.complete || this.fill(), null !== (BH = this.entries.get("string" === typeof HH ? HH : String(HH))) && void 0 !== BH ? BH : null
```

#### 314. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3342` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3217) · [Before (L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3342)

```diff
-     var yJ = xV(5301);
+     var hA = LH(5268);
```

#### 315. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3345` → after: `L3220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3220) · [Before (L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3345)

```diff
-       if ("message" !== VV.type || VV.yZ !== yJ.mc.NewClientOptions || VV.payloadKind !== vV.sc.Msgpack) return null;
+       if ("message" !== HH.type || HH.kt !== hA.nc.NewClientOptions || HH.payloadKind !== GH.jc.Msgpack) return null;
```

#### 316. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3350-L3351` → after: `L3225-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3225-L3226) · [Before (L3350-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3350-L3351)

```diff
-     var QJ = xV(1269),
-       nJ = xV(37790);
+     var zA = LH(1182),
+       CA = LH(37504);
```

#### 317. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3356-L3358` → after: `L3231-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3231-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3231-L3233) · [Before (L3356-L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3356-L3358)

```diff
-         case kV.he.ToggleMenu: {
-           const VV = kV.D[eV];
-           yV.h.QZ("toggleMenu", void 0 === VV ? "inventory" : `inventory|${VV}`);
+         case uH.oe.ToggleMenu: {
+           const HH = uH.K[BH];
+           hH.k.AX("toggleMenu", void 0 === HH ? "inventory" : `inventory|${HH}`);
```

#### 318. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3361-L3362` → after: `L3236-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3236-L3237) · [Before (L3361-L3362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3361-L3362)

```diff
-         case kV.he.EditBoard:
-           yV.h.QZ("EditBoard", {
+         case uH.oe.EditBoard:
+           hH.k.AX("EditBoard", {
```

#### 319. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3366-L3368` → after: `L3241-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3241-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3241-L3243) · [Before (L3366-L3368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3366-L3368)

```diff
-         case kV.he.EditCodeBlock:
-         case kV.he.ViewCodeBlock:
-           yV.h.QZ("EditCodeBlock", {
+         case uH.oe.EditCodeBlock:
+         case uH.oe.ViewCodeBlock:
+           hH.k.AX("EditCodeBlock", {
```

#### 320. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3370` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3245) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3370)

```diff
-             canChangePos: VV === kV.he.EditCodeBlock
+             canChangePos: HH === uH.oe.EditCodeBlock
```

#### 321. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3373-L3374` → after: `L3248-L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3248-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3248-L3249) · [Before (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3373-L3374)

```diff
-         case kV.he.EditCustomLobbyBlock:
-           yV.h.QZ("EditCustomLobbyBlock", {
+         case uH.oe.EditCustomLobbyBlock:
+           hH.k.AX("EditCustomLobbyBlock", {
```

#### 322. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3378-L3379` → after: `L3253-L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3253-L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3253-L3254) · [Before (L3378-L3379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3378-L3379)

```diff
-         case kV.he.OpenIronChest:
-           yV.h.QZ("OpenIronChest", {
+         case uH.oe.OpenIronChest:
+           hH.k.AX("OpenIronChest", {
```

#### 323. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3383-L3384` → after: `L3258-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3258-L3259) · [Before (L3383-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3383-L3384)

```diff
-         case kV.he.EditNameTag:
-           yV.h.QZ("EditNameTag", null !== (QV = null === (nV = YV.hn()) || void 0 === nV || null === (wV = nV.attributes.customAttributes) || void 0 === wV ? void 0 : wV.text) && void 0 !== QV ? QV : "");
+         case uH.oe.EditNameTag:
+           hH.k.AX("EditNameTag", null !== (zH = null === (CH = rH.LX()) || void 0 === CH || null === (EH = CH.attributes.customAttributes) || void 0 === EH ? void 0 : EH.text) && void 0 !== zH ? zH : "");
```

#### 324. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3386-L3391` → after: `L3261-L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3261-L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3261-L3266) · [Before (L3386-L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3386-L3391)

```diff
-         case kV.he.EditBook: {
-           var ZV, vV, bV;
-           const VV = null === (ZV = YV.hn()) || void 0 === ZV ? void 0 : ZV.attributes;
-           yV.h.QZ("EditBook", {
-             pages: (0, QJ.R)(null === VV || void 0 === VV || null === (vV = VV.customAttributes) || void 0 === vV ? void 0 : vV.pages),
-             title: null !== (bV = null === VV || void 0 === VV ? void 0 : VV.customDisplayName) && void 0 !== bV ? bV : "Title",
+         case uH.oe.EditBook: {
+           var XH, GH, QH;
+           const HH = null === (XH = rH.LX()) || void 0 === XH ? void 0 : XH.attributes;
+           hH.k.AX("EditBook", {
+             pages: (0, zA.N)(null === HH || void 0 === HH || null === (GH = HH.customAttributes) || void 0 === GH ? void 0 : GH.pages),
+             title: null !== (QH = null === HH || void 0 === HH ? void 0 : HH.customDisplayName) && void 0 !== QH ? QH : "Title",
```

#### 325. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3396` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3271) · [Before (L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3396)

```diff
-         case kV.he.CantChangeBlock:
+         case uH.oe.CantChangeBlock:
```

#### 326. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3400-L3401` → after: `L3275-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3275-L3276) · [Before (L3400-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3400-L3401)

```diff
-               YV = VV ? xV : JV;
-             (eV.getClientOption("canChange") || YV || "You cannot modify this block" !== xV) && yV.h.QZ("showBottomMessage", {
+               rH = HH ? LH : AH;
+             (BH.getClientOption("canChange") || rH || "You cannot modify this block" !== LH) && hH.k.AX("showBottomMessage", {
```

#### 327. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3407-L3408` → after: `L3282-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3282-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3282-L3283) · [Before (L3407-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3407-L3408)

```diff
-         case kV.he.MiddleBarStart:
-           yV.h.QZ("middleScreenBarInitiate", {
+         case uH.oe.MiddleBarStart:
+           hH.k.AX("middleScreenBarInitiate", {
```

#### 328. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3410` → after: `L3285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3285) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3410)

```diff
-             tJ: 1 === xV[0],
+             NS: 1 === LH[0],
```

#### 329. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3414-L3415` → after: `L3289-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290) · [Before (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3414-L3415)

```diff
-         case kV.he.MiddleBarStop:
-           yV.h.QZ("middleScreenBarRemove");
+         case uH.oe.MiddleBarStop:
+           hH.k.AX("middleScreenBarRemove");
```

#### 330. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3417-L3419` → after: `L3292-L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3292-L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3292-L3294) · [Before (L3417-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3417-L3419)

```diff
-         case kV.he.Hitmarker:
-           yV.h.QZ("localGunHitmarker", {
-             TJ: 1 === eV
+         case uH.oe.Hitmarker:
+           hH.k.AX("localGunHitmarker", {
+             aA: 1 === BH
```

#### 331. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3422-L3423` → after: `L3297-L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3297-L3298) · [Before (L3422-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3422-L3423)

```diff
-         case kV.he.ShotsLeft:
-           yV.h.QZ("localPlayerNewShotsLeft", JV);
+         case uH.oe.ShotsLeft:
+           hH.k.AX("localPlayerNewShotsLeft", AH);
```

#### 332. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3425-L3426` → after: `L3300-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3300-L3301) · [Before (L3425-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3425-L3426)

```diff
-         case kV.he.AimingOverlay:
-           yV.h.QZ("aimingOverlay", 3 === (3 & eV) ? "sniper" : "none");
+         case uH.oe.AimingOverlay:
+           hH.k.AX("aimingOverlay", 3 === (3 & BH) ? "sniper" : "none");
```

#### 333. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3428-L3429` → after: `L3303-L3304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3303-L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3303-L3304) · [Before (L3428-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3428-L3429)

```diff
-         case kV.he.BottomMessage:
-           yV.h.QZ("showBottomMessage", JSON.parse(pV()));
+         case uH.oe.BottomMessage:
+           hH.k.AX("showBottomMessage", JSON.parse(tH()));
```

#### 334. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3431-L3432` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3306-L3307) · [Before (L3431-L3432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3431-L3432)

```diff
-         case kV.he.Crosshair:
-           YV.inaccuracy = (0, cV.f)(JV), (0, nJ.d)().crosshairAccuracy(YV.inaccuracy);
+         case uH.oe.Crosshair:
+           rH.inaccuracy = (0, jH.f)(AH), (0, CA.e)().crosshairAccuracy(rH.inaccuracy);
```

#### 335. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3434` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3309) · [Before (L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3434)

```diff
-         case kV.he.ChargeStage:
+         case uH.oe.ChargeStage:
```

#### 336. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3436-L3437` → after: `L3311-L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3311-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3311-L3312) · [Before (L3436-L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3436-L3437)

```diff
-         case kV.he.EmoteWheelClose:
-           yV.h.QZ("requestEmoteWheelClose");
+         case uH.oe.EmoteWheelClose:
+           hH.k.AX("requestEmoteWheelClose");
```

#### 337. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3439-L3440` → after: `L3314-L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3314-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3314-L3315) · [Before (L3439-L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3439-L3440)

```diff
-         case kV.he.BlockMined:
-           yV.h.QZ("localBlockMined");
+         case uH.oe.BlockMined:
+           hH.k.AX("localBlockMined");
```

#### 338. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3443` → after: `L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3318) · [Before (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3443)

```diff
-           throw new rV.d(`UiEvent of no kind: what ${VV}`)
+           throw new YH.d(`UiEvent of no kind: what ${HH}`)
```

#### 339. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3446-L3451` → after: `L3321-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3321-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3321-L3326) · [Before (L3446-L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3446-L3451)

```diff
-     var ZJ = xV(39166),
-       vJ = xV(35311),
-       rJ = xV(2094),
-       kJ = xV(37994),
-       bJ = xV(35319),
-       EJ = xV(5281);
+     var XA = LH(38871),
+       GA = LH(34996),
+       YA = LH(2045),
+       uA = LH(37659),
+       QA = LH(35006),
+       WA = LH(5255);
```

#### 340. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3475` → after: `L3350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3350) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3475)

```diff
-       const UV = () => (xV = (0, rJ.m)(xV, eV()), xV);
+       const SH = () => (LH = (0, YA.r)(LH, BH()), LH);
```

#### 341. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3483` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3358) · [Before (L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3483)

```diff
-           return null !== JV && yV.push((0, rJ.q)((VV => {
+           return null !== AH && hH.push((0, YA.v)((HH => {
```

#### 342. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3528` → after: `L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3403) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3528)

```diff
-             displayName: null !== (JV = wV.attributes.customDisplayName) && void 0 !== JV ? JV : eV.getDisplayName(ZV),
+             displayName: null !== (AH = EH.attributes.customDisplayName) && void 0 !== AH ? AH : BH.getDisplayName(XH),
```

#### 343. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3530` → after: `L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3405) · [Before (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3530)

```diff
-             clipSize: null !== (YV = null !== (UV = null === (yV = wV.attributes.customAttributes) || void 0 === yV || null === (pV = yV.gunStats) || void 0 === pV ? void 0 : pV.clipSize) && void 0 !== UV ? UV : null === (QV = eV.getGunStats(ZV)) || void 0 === QV ? void 0 : QV.cl … [truncated]
+             clipSize: null !== (rH = null !== (SH = null === (hH = EH.attributes.customAttributes) || void 0 === hH || null === (tH = hH.gunStats) || void 0 === tH ? void 0 : tH.clipSize) && void 0 !== SH ? SH : null === (zH = BH.getGunStats(XH)) || void 0 === zH ? void 0 : zH.cl … [truncated]
```

#### 344. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3559` → after: `L3434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3434) · [Before (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3559)

```diff
-               const QV = VV.craftingView(xV.station, pV, null !== (UV = null === (yV = xV.recipe) || void 0 === yV ? void 0 : yV.ky) && void 0 !== UV ? UV : 0);
+               const zH = HH.craftingView(LH.station, tH, null !== (SH = null === (hH = LH.recipe) || void 0 === hH ? void 0 : hH.wC) && void 0 !== SH ? SH : 0);
```

#### 345. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3565` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3440) · [Before (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3565)

```diff
-                 let JV = kV.gb.BYTES;
+                 let AH = uH.ob.BYTES;
```

#### 346. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3567-L3568` → after: `L3442-L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3442-L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3442-L3443) · [Before (L3567-L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3567-L3568)

```diff
-                 for (let wV = kV.gb.recipes(VV, 0); wV > 0; wV--) {
-                   const xV = kV.Y.flags(VV, JV),
+                 for (let EH = uH.ob.recipes(HH, 0); EH > 0; EH--) {
+                   const LH = uH.gb.flags(HH, AH),
```

#### 347. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3570-L3571` → after: `L3445-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3445-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3445-L3446) · [Before (L3570-L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3570-L3571)

```diff
-                       name: eV.nameOfId(kV.Y.item(VV, JV)),
-                       ky: kV.Y.recipe(VV, JV),
+                       name: BH.nameOfId(uH.gb.item(HH, AH)),
+                       wC: uH.gb.recipe(HH, AH),
```

#### 348. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3573-L3575` → after: `L3448-L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3448-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3448-L3450) · [Before (L3573-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3573-L3575)

```diff
-                       produces: kV.Y.produces(VV, JV),
-                       haveIngredients: 0 !== (xV & kV.X.HaveIngredients),
-                       listed: 0 !== (xV & kV.X.Listed)
+                       produces: uH.gb.produces(HH, AH),
+                       haveIngredients: 0 !== (LH & uH.cb.HaveIngredients),
+                       listed: 0 !== (LH & uH.cb.Listed)
```

#### 349. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3577-L3579` → after: `L3452-L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3452-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3452-L3454) · [Before (L3577-L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3577-L3579)

```diff
-                   let yV = kV.Y.requires(VV, JV);
-                   for (JV += kV.Y.BYTES; yV > 0; yV--) {
-                     const xV = kV.$.items(VV, JV);
+                   let hH = uH.gb.requires(HH, AH);
+                   for (AH += uH.gb.BYTES; hH > 0; hH--) {
+                     const LH = uH.jb.items(HH, AH);
```

#### 350. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3581-L3583` → after: `L3456-L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3456-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3456-L3458) · [Before (L3581-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3581-L3583)

```diff
-                       items: zJ(VV, JV + kV.$.BYTES, xV, eV),
-                       amt: kV.$.amount(VV, JV)
-                     }), JV += kV.$.BYTES + 2 * xV
+                       items: oA(HH, AH + uH.jb.BYTES, LH, BH),
+                       amt: uH.jb.amount(HH, AH)
+                     }), AH += uH.jb.BYTES + 2 * LH
```

#### 351. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3587-L3588` → after: `L3462-L3463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3462-L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3462-L3463) · [Before (L3587-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3587-L3588)

```diff
-                 const UV = kV.gb.flags(VV, 0);
-                 if (null === xV.recipe || 0 === (UV & kV.cb.Detail)) return {
+                 const SH = uH.ob.flags(HH, 0);
+                 if (null === LH.recipe || 0 === (SH & uH.nb.Detail)) return {
```

#### 352. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3595-L3600` → after: `L3470-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3470-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3470-L3475) · [Before (L3595-L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3595-L3600)

```diff
-                 for (let wV = kV.gb.ingredients(VV, 0); wV > 0; wV--) {
-                   const xV = kV.W.item(VV, JV),
-                     YV = kV.W.from(VV, JV),
-                     UV = kV.W.amount(VV, JV);
-                   JV += kV.W.BYTES;
-                   const QV = YV === kV.C ? null : zJ(VV, JV, YV, eV);
+                 for (let EH = uH.ob.ingredients(HH, 0); EH > 0; EH--) {
+                   const LH = uH.ab.item(HH, AH),
+                     rH = uH.ab.from(HH, AH),
+                     SH = uH.ab.amount(HH, AH);
+                   AH += uH.ab.BYTES;
+                   const zH = rH === uH.I ? null : oA(HH, AH, rH, BH);
```

#### 353. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3607` → after: `L3482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3482) · [Before (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3607)

```diff
-                   ky: nV
+                   wC: CH
```

#### 354. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3614-L3616` → after: `L3489-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3489-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3489-L3491) · [Before (L3614-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3614-L3616)

```diff
-                     ky: nV,
-                     craftAllTimes: kV.gb.craftAllTimes(VV, 0),
-                     roomForOne: 0 !== (UV & kV.cb.RoomForOne),
+                     wC: CH,
+                     craftAllTimes: uH.ob.craftAllTimes(HH, 0),
+                     roomForOne: 0 !== (SH & uH.nb.RoomForOne),
```

#### 355. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3639` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3514) · [Before (L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3639)

```diff
-             for (let eV = 0; eV < kV.pd; eV++) JV.push(TJ(VV.slot(eV)));
+             for (let BH = 0; BH < uH.vd; BH++) AH.push(UA(HH.slot(BH)));
```

#### 356. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3649-L3650` → after: `L3524-L3525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3524-L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3524-L3525) · [Before (L3649-L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3649-L3650)

```diff
-             if (xV > kV.pd) {
-               for (let eV = kV.pd; eV < xV; eV++) pV.push(TJ(VV.slot(eV)));
+             if (LH > uH.vd) {
+               for (let BH = uH.vd; BH < LH; BH++) tH.push(UA(HH.slot(BH)));
```

#### 357. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3653-L3654` → after: `L3528-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3528-L3529) · [Before (L3653-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3653-L3654)

```diff
-                 pos: [...VV.ix],
-                 numSlots: xV - kV.pd,
+                 pos: [...HH.OL],
+                 numSlots: LH - uH.vd,
```

#### 358. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3666` → after: `L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3541) · [Before (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3666)

```diff
-           }), (0, rJ.i)("creative")),
+           }), (0, YA.l)("creative")),
```

#### 359. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3681` → after: `L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3556) · [Before (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3681)

```diff
-             const JV = null === (eV = VV.hn()) || void 0 === eV ? void 0 : eV.typeObj,
+             const AH = null === (BH = HH.LX()) || void 0 === BH ? void 0 : BH.typeObj,
```

#### 360. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3690` → after: `L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3565) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3690)

```diff
-             return (0, EJ.u)((() => {
+             return (0, WA.v)((() => {
```

#### 361. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3697-L3704` → after: `L3572-L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3572-L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3572-L3579) · [Before (L3697-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3697-L3704)

```diff
-           hotbarSlotRequested: (0, rJ.c)("setSelectedInventorySlotI"),
-           hotbarScrolled: (0, rJ.c)("ScrollInventorySlot"),
-           numberKeyPressed: (0, rJ.c)("numkeyPressed"),
-           inventoryDropRequested: (0, rJ.c)("DropInvenItem"),
-           chestToggled: (0, rJ.c)("chestToggleFromServer"),
-           chestRefreshed: (0, rJ.c)("chestRefreshedFromServer", MJ),
-           inventorySynced: (0, rJ.c)("syncedInvenFromServer", MJ),
-           enchantingTableOpened: (0, rJ.c)("enchantingTable", (VV => {
+           hotbarSlotRequested: (0, YA.b)("setSelectedInventorySlotI"),
+           hotbarScrolled: (0, YA.b)("ScrollInventorySlot"),
+           numberKeyPressed: (0, YA.b)("numkeyPressed"),
+           inventoryDropRequested: (0, YA.b)("DropInvenItem"),
+           chestToggled: (0, YA.b)("chestToggleFromServer"),
+           chestRefreshed: (0, YA.b)("chestRefreshedFromServer", mA),
+           inventorySynced: (0, YA.b)("syncedInvenFromServer", mA),
+           enchantingTableOpened: (0, YA.b)("enchantingTable", (HH => {
```

#### 362. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3707` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3582) · [Before (L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3707)

```diff
-               vp: JV
+               ph: AH
```

#### 363. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3752` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3627) · [Before (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3752)

```diff
-             VV.closeChest(), VV.flush(JV), yV.h.QZ("chestClosedByPlayer")
+             HH.closeChest(), HH.flush(AH), hH.k.AX("chestClosedByPlayer")
```

#### 364. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3760` → after: `L3635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3635) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3760)

```diff
-               ky: JV,
+               wC: AH,
```

#### 365. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3790` → after: `L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3665) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3790)

```diff
-               if (!YV || !eV.getClientOption("canCraft") || !(0, vJ.q)(JV) || (0, vJ.n)(YV.attributes)) return XJ;
+               if (!rH || !BH.getClientOption("canCraft") || !(0, GA.q)(AH) || (0, GA.o)(rH.attributes)) return kA;
```

#### 366. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3794` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3669) · [Before (L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3794)

```diff
-               for (let pV = 0; pV < kJ.b; pV++) {
+               for (let tH = 0; tH < uA.d; tH++) {
```

#### 367. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3837` → after: `L3712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3712) · [Before (L3837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3837)

```diff
-           VVV: 0,
+           y5: 0,
```

#### 368. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3840` → after: `L3715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3715) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3840)

```diff
-           FE: [0, 0, 0]
+           AW: [0, 0, 0]
```

#### 369. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3847` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3722) · [Before (L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3847)

```diff
-       IeV() {
+       cBH() {
```

#### 370. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3856-L3857` → after: `L3731-L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3731-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3731-L3732) · [Before (L3856-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3856-L3857)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (kV.s.playerFlags(VV, 0) & kV.Ld.Breaking) && kV.s.breakingProgress(VV, 0) >= 0, this.isBreaking)
-           for (let eV = 0; eV < 3; eV++) this.breaking[eV] = kV.s.breakingPos(VV, 0, eV)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (uH.y.playerFlags(HH, 0) & uH.Md.Breaking) && uH.y.breakingProgress(HH, 0) >= 0, this.isBreaking)
+           for (let BH = 0; BH < 3; BH++) this.breaking[BH] = uH.y.breakingPos(HH, 0, BH)
```

#### 371. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3861-L3862` → after: `L3736-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3736-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3736-L3737) · [Before (L3861-L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3861-L3862)

```diff
-           eV = kV.s.targetBlockId(VV, 0);
-         if (this.hasTarget = eV !== kV.Yc, this.hasTarget) {
+           BH = uH.y.targetBlockId(HH, 0);
+         if (this.hasTarget = BH !== uH.cd, this.hasTarget) {
```

#### 372. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3864-L3865` → after: `L3739-L3740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3739-L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3739-L3740) · [Before (L3864-L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3864-L3865)

```diff
-           xV.VVV = eV;
-           for (let eV = 0; eV < 3; eV++) xV.position[eV] = kV.s.targetBlock(VV, 0, eV), xV.normal[eV] = kV.s.targetNormal(VV, 0, eV), xV.FE[eV] = kV.s.targetAdjacent(VV, 0, eV)
+           LH.y5 = BH;
+           for (let BH = 0; BH < 3; BH++) LH.position[BH] = uH.y.targetBlock(HH, 0, BH), LH.normal[BH] = uH.y.targetNormal(HH, 0, BH), LH.AW[BH] = uH.y.targetAdjacent(HH, 0, BH)
```

#### 373. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3873-L3876` → after: `L3748-L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3748-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3748-L3751) · [Before (L3873-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3873-L3876)

```diff
-     var WJ = xV(41900),
-       RJ = xV(41880),
-       gJ = xV(37521),
-       DJ = xV(37985);
+     var fA = LH(41949),
+       lA = LH(41933),
+       KA = LH(37250),
+       cA = LH(37656);
```

#### 374. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3881` → after: `L3756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3756) · [Before (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3881)

```diff
-         this.game = new DJ.g, this.client = new DJ.g, this.hn = 0, this.movesFly = null
+         this.game = new cA.d, this.client = new cA.d, this.LX = 0, this.movesFly = null
```

#### 375. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3895` → after: `L3770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3770) · [Before (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3895)

```diff
-         this.game = new DJ.g, this.movesFly = null
+         this.game = new cA.d, this.movesFly = null
```

#### 376. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3901` → after: `L3776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3776) · [Before (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3901)

```diff
-         return (this.game._getTotalBooleanVal() ? iJ : 0) | (this.client._getTotalBooleanVal() ? CJ : 0)
+         return (this.game._getTotalBooleanVal() ? eA : 0) | (this.client._getTotalBooleanVal() ? qA : 0)
```

#### 377. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3908-L3910` → after: `L3783-L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3783-L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3783-L3785) · [Before (L3908-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3908-L3910)

```diff
-         if (eV === this.hn && null === xV) return !0;
-         let JV = kV.Vb.Keep;
-         return null !== xV && (JV = xV ? kV.Vb.On : kV.Vb.Off), !(!VV || !(0, kV.De)(VV, 0, JV, eV, xV ? 1 : 0)) && (this.hn = eV, this.movesFly = null, !0)
+         if (BH === this.LX && null === LH) return !0;
+         let AH = uH.bc.Keep;
+         return null !== LH && (AH = LH ? uH.bc.On : uH.bc.Off), !(!HH || !(0, uH.Ne)(HH, 0, AH, BH, LH ? 1 : 0)) && (this.LX = BH, this.movesFly = null, !0)
```

#### 378. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3917` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3792) · [Before (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3917)

```diff
-           x: pV.d,
+           x: tH.b,
```

#### 379. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3925` → after: `L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3800) · [Before (L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3925)

```diff
-           eV = kV.s.viewProj;
+           BH = uH.y.viewProj;
```

#### 380. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3933` → after: `L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3808) · [Before (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3933)

```diff
-         for (let xV = 0; xV < 3; xV++) eV[xV] = kV.s.eye(VV, 0, xV);
+         for (let LH = 0; LH < 3; LH++) BH[LH] = uH.y.eye(HH, 0, LH);
```

#### 381. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3938` → after: `L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3813) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3938)

```diff
-           eV = kV.s.viewProj,
+           BH = uH.y.viewProj,
```

#### 382. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3949` → after: `L3824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3824) · [Before (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3949)

```diff
-         return kV.s.heading(this.api.apiView, 0)
+         return uH.y.heading(this.api.apiView, 0)
```

#### 383. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3952` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3827) · [Before (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3952)

```diff
-         return kV.s.pitch(this.api.apiView, 0)
+         return uH.y.pitch(this.api.apiView, 0)
```

#### 384. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3955` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3830) · [Before (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3955)

```diff
-         return kV.s.tanHalfFovX(this.api.apiView, 0)
+         return uH.y.tanHalfFovX(this.api.apiView, 0)
```

#### 385. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3958` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3833) · [Before (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3958)

```diff
-         return kV.s.tanHalfFovY(this.api.apiView, 0)
+         return uH.y.tanHalfFovY(this.api.apiView, 0)
```

#### 386. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3978-L3980` → after: `L3853-L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3853-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3853-L3855) · [Before (L3978-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3978-L3980)

```diff
-           pV = kV.s.viewProj,
-           QV = UV > 0 ? eV / UV : 0,
-           nV = UV > 0 ? -xV / UV : 0,
+           tH = uH.y.viewProj,
+           zH = SH > 0 ? BH / SH : 0,
+           CH = SH > 0 ? -LH / SH : 0,
```

#### 387. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4008-L4011` → after: `L3883-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3883-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3883-L3886) · [Before (L4008-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4008-L4011)

```diff
-           xV = VV[0] - kV.s.origin(eV, 0, 0),
-           JV = VV[1] - kV.s.origin(eV, 0, 1),
-           YV = VV[2] - kV.s.origin(eV, 0, 2),
-           UV = kV.s.viewProj;
+           LH = HH[0] - uH.y.origin(BH, 0, 0),
+           AH = HH[1] - uH.y.origin(BH, 0, 1),
+           rH = HH[2] - uH.y.origin(BH, 0, 2),
+           SH = uH.y.viewProj;
```

#### 388. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4015` → after: `L3890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3890) · [Before (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4015)

```diff
-         return (0, pV.g)(VV, eV, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, tH.e)(HH, BH, this.screenBandPct.x, this.screenBandPct.y)
```

#### 389. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4018` → after: `L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3893) · [Before (L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4018)

```diff
-     var cJ = xV(5310);
+     var RA = LH(5279);
```

#### 390. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4020` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3895) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4020)

```diff
-       lJ = new Uint8Array(kV.J * kV.F);
+       nA = new Uint8Array(uH.P * uH.O);
```

#### 391. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4023` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3898) · [Before (L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4023)

```diff
-         this.buttons = [], this.hn = !0
+         this.buttons = [], this.LX = !0
```

#### 392. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4026` → after: `L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3901) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4026)

```diff
-         this.buttons = VV, this.hn = !1
+         this.buttons = HH, this.LX = !1
```

#### 393. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4029` → after: `L3904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3904) · [Before (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4029)

```diff
-         this.hn = 0 === this.buttons.length
+         this.LX = 0 === this.buttons.length
```

#### 394. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4032-L4034` → after: `L3907-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3907-L3909) · [Before (L4032-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4032-L4034)

```diff
-         if (this.hn) return;
-         const eV = new Uint8Array(kV.J),
-           xV = new Uint8Array(kV.J);
+         if (this.LX) return;
+         const BH = new Uint8Array(uH.P),
+           LH = new Uint8Array(uH.P);
```

#### 395. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4042` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3917) · [Before (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4042)

```diff
-           if (JV === kV.J) break;
+           if (AH === uH.P) break;
```

#### 396. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4046` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3921) · [Before (L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4046)

```diff
-           } = hJ.encodeInto(UV, lJ.subarray(YV, YV + kV.F));
+           } = jA.encodeInto(SH, nA.subarray(rH, rH + uH.O));
```

#### 397. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4048-L4049` → after: `L3923-L3924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3923-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3923-L3924) · [Before (L4048-L4049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4048-L4049)

```diff
-           const QV = cJ.p[yV];
-           eV[JV] = "number" === typeof QV ? QV : 0, xV[JV] = pV, JV++, YV += pV
+           const zH = RA.j[hH];
+           BH[AH] = "number" === typeof zH ? zH : 0, LH[AH] = tH, AH++, rH += tH
```

#### 398. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4051` → after: `L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3926) · [Before (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4051)

```diff
-         this.hn = (0, kV.ve)(VV, 0, JV, eV, xV, lJ.subarray(0, YV))
+         this.LX = (0, uH.xe)(HH, 0, AH, BH, LH, nA.subarray(0, rH))
```

#### 399. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4057-L4058` → after: `L3932-L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3932-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3932-L3933) · [Before (L4057-L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4057-L4058)

```diff
-       return JV.length <= kV.F && function(VV, eV, xV, JV) {
-         return (0, Jx.e)(), (0, kV.vf)(VV, eV, xV, JV)
+       return AH.length <= uH.O && function(HH, BH, LH, AH) {
+         return (0, AL.b)(), (0, uH.Gf)(HH, BH, LH, AH)
```

#### 400. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4061` → after: `L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3936) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4061)

```diff
-     var mJ = xV(40455);
+     var wA = LH(40193);
```

#### 401. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4067-L4069` → after: `L3942-L3944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3942-L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3942-L3944) · [Before (L4067-L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4067-L4069)

```diff
-         off: kV.Od.Off,
-         key: kV.Od.Key,
-         touch: kV.Od.Touch
+         off: uH.Qd.Off,
+         key: uH.Qd.Key,
+         touch: uH.Qd.Touch
```

#### 402. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4074-L4075` → after: `L3949-L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3949-L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3949-L3950) · [Before (L4074-L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4074-L4075)

```diff
-         this.options = VV, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
-           if ((0, rV.j)(VV)) throw VV;
+         this.options = HH, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+           if ((0, YH.h)(HH)) throw HH;
```

#### 403. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4077` → after: `L3952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3952) · [Before (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4077)

```diff
-         }, this.api = VV.api, this.tables = VV.tables, this.onError = null !== (eV = VV.onError) && void 0 !== eV ? eV : VV => {
+         }, this.api = HH.api, this.tables = HH.tables, this.onError = null !== (BH = HH.onError) && void 0 !== BH ? BH : HH => {
```

#### 404. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4134` → after: `L4013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4013) · [Before (L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4134)

```diff
-         return this.itemSources ??= NJ(this.items, this.tables, (() => this.localPlayerAlive()), this.EZ), this.itemSources
+         return this.itemSources ??= bA(this.items, this.tables, (() => this.localPlayerAlive()), this.XX), this.itemSources
```

#### 405. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4150` → after: `L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4029) · [Before (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4150)

```diff
-         return null !== eV && (xV = eV, JV = 0, YV = VV[0], UV = VV[1], yV = VV[2], (0, Jx.e)(), (0, kV.ye)(xV, JV, YV, UV, yV));
+         return null !== BH && (LH = BH, AH = 0, rH = HH[0], SH = HH[1], hH = HH[2], (0, AL.b)(), (0, uH.Ee)(LH, AH, rH, SH, hH));
```

#### 406. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4158` → after: `L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4037) · [Before (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4158)

```diff
-         return null === eV ? (this.pendingZoom = VV, !1) : (this.pendingZoom = null, (0, kV.eg)(eV, 0, VV, 1))
+         return null === BH ? (this.pendingZoom = HH, !1) : (this.pendingZoom = null, (0, uH.vg)(BH, 0, HH, 1))
```

#### 407. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4162` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4041) · [Before (L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4162)

```diff
-         return null !== eV && (0, kV.bg)(eV, 0, VV ? 1 : 0)
+         return null !== BH && (0, uH.og)(BH, 0, HH ? 1 : 0)
```

#### 408. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4166` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4045) · [Before (L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4166)

```diff
-         return null !== VV && (eV = VV, xV = 0, (0, Jx.e)(), (0, kV.Hf)(eV, xV));
+         return null !== HH && (BH = HH, LH = 0, (0, AL.b)(), (0, uH.Sf)(BH, LH));
```

#### 409. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4178` → after: `L4057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4057) · [Before (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4178)

```diff
-         return null !== yV && (0, kV.gf)(yV, 0, VV, eV, xV, JV, YV, UV)
+         return null !== hH && (0, uH.of)(hH, 0, HH, BH, LH, AH, rH, SH)
```

#### 410. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4182` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4061) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4182)

```diff
-         return null !== eV && (0, kV.ig)(eV, 0, null !== VV && void 0 !== VV ? VV : 1 / 0)
+         return null !== BH && (0, uH.Bg)(BH, 0, null !== HH && void 0 !== HH ? HH : 1 / 0)
```

#### 411. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4187` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4066) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4187)

```diff
-         return null !== JV && Yx(JV, xV ? vV.td : 0, VV, (0, oV.g)(eV))
+         return null !== AH && rL(AH, LH ? GH.nd : 0, HH, (0, RH.g)(BH))
```

#### 412. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4208` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4087) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4208)

```diff
-         this.overflowGen = kV.s.eventOverflowGen(xV, 0), this.resyncOwed = 0 !== kV.s.eventOverflowMask(xV, 0), VV.setGameHost(this), VV.setEventWalker((VV => {
+         this.overflowGen = uH.y.eventOverflowGen(LH, 0), this.resyncOwed = 0 !== uH.y.eventOverflowMask(LH, 0), HH.setGameHost(this), HH.setEventWalker((HH => {
```

#### 413. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4216` → after: `L4095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4095) · [Before (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4216)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : dJ(kV.s.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : pA(uH.y.promptEntity(this.api.apiView, 0))
```

#### 414. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4219` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4098) · [Before (L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4219)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? kV.uc.None : kV.s.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? uH.Ac.None : uH.y.interactLabel(this.api.apiView, 0)
```

#### 415. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4222` → after: `L4101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4101) · [Before (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4222)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : kV.s.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : uH.y.interactIcon(this.api.apiView, 0)
```

#### 416. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4232` → after: `L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4111) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4232)

```diff
-         "connection" === VV.type ? VV.phase === vV.H.Activated && VV.conn !== this.activeConn && VV.conn > this.closedThrough ? (this.endSession(), this.activeConn = VV.conn, this.endGameGrants(), this.dropGameCamera()) : VV.phase !== vV.H.Left && VV.phase !== vV.H.Closed || VV.c … [truncated]
+         "connection" === HH.type ? HH.phase === GH.C.Activated && HH.conn !== this.activeConn && HH.conn > this.closedThrough ? (this.endSession(), this.activeConn = HH.conn, this.endGameGrants(), this.dropGameCamera()) : HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.c … [truncated]
```

#### 417. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4249` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4128) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4249)

```diff
-             if ("message" !== VV.type || VV.yZ !== yJ.mc.GameCodeMessage || VV.payloadKind !== vV.sc.Msgpack) return null;
+             if ("message" !== HH.type || HH.kt !== hA.nc.GameCodeMessage || HH.payloadKind !== GH.jc.Msgpack) return null;
```

#### 418. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4263` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4142) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4263)

```diff
-             (0, WV.e)(VV, xV)
+             (0, fH.c)(HH, LH)
```

#### 419. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4293` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4172) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4293)

```diff
-         this.highlightOwed = null === eV ? !(0, kV.Pe)(VV, 0, sJ, sJ, 0) : !(0, kV.Pe)(VV, 0, eV.pos, eV.normal, 1)
+         this.highlightOwed = null === BH ? !(0, uH._e)(HH, 0, sA, sA, 0) : !(0, uH._e)(HH, 0, BH.pos, BH.normal, 1)
```

#### 420. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4306` → after: `L4185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4185) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4306)

```diff
-           YV = VV.gameNameWithVariation, UV = null !== (QV = (0, MV.Lb)(YV)) && void 0 !== QV ? QV : void 0, yV = (0, zV.r)(VV.lobbyName), pV = (0, zV.I)(VV.lobbyName)
+           rH = HH.gameNameWithVariation, SH = null !== (zH = (0, mH.Ob)(rH)) && void 0 !== zH ? zH : void 0, hH = (0, oH.v)(HH.lobbyName), tH = (0, oH.N)(HH.lobbyName)
```

#### 421. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4317` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4196) · [Before (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4317)

```diff
-           wV = null !== (vV = null === (rV = this.options.gameFactory((0, MV.Pb)(YV))) || void 0 === rV ? void 0 : rV(pV, yV, UV, nV)) && void 0 !== vV ? vV : {}
+           EH = null !== (GH = null === (YH = this.options.gameFactory((0, mH.Wb)(rH))) || void 0 === YH ? void 0 : YH(tH, hH, SH, CH)) && void 0 !== GH ? GH : {}
```

#### 422. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4319` → after: `L4198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4198) · [Before (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4319)

```diff
-           this.EZ(jV)
+           this.XX(xH)
```

#### 423. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4323` → after: `L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4202) · [Before (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4323)

```diff
-           ZV = (0, GV.b)(null === (kV = (bV = this.options).defaultPlugins) || void 0 === kV ? void 0 : kV.call(bV, pV, yV, UV, nV), wV.plugins)
+           XH = (0, IH.e)(null === (uH = (QH = this.options).defaultPlugins) || void 0 === uH ? void 0 : uH.call(QH, tH, hH, SH, CH), EH.plugins)
```

#### 424. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4325` → after: `L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4204) · [Before (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4325)

```diff
-           this.EZ(jV)
+           this.XX(xH)
```

#### 425. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4328` → after: `L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4207) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4328)

```diff
-         this.owners = EV, this.tickers = EV.filter((VV => void 0 !== VV.iZ)), this.renderers = EV.filter((VV => void 0 !== VV.onAfterRender)), this.receivers = EV.filter((VV => void 0 !== VV.onReceivedMessageFromServer)), this.writeAltVeto(EV), this.writeHooks(EV), this.writePubl … [truncated]
+         this.owners = WH, this.tickers = WH.filter((HH => void 0 !== HH.IX)), this.renderers = WH.filter((HH => void 0 !== HH.onAfterRender)), this.receivers = WH.filter((HH => void 0 !== HH.onReceivedMessageFromServer)), this.writeAltVeto(WH), this.writeHooks(WH), this.writePubl … [truncated]
```

#### 426. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4354` → after: `L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4233) · [Before (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4354)

```diff
-           this.round(this.tickers, OJ), (0, EJ.b)(performance.now() - VV)
+           this.round(this.tickers, yA), (0, WA.c)(performance.now() - HH)
```

#### 427. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4364-L4366` → after: `L4243-L4245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4243-L4245) · [Before (L4364-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4364-L4366)

```diff
-           JV = kV.s.frameMs(xV, 0);
-         gJ.k.frame(JV, kV.s.heading(xV, 0), kV.s.pitch(xV, 0), gJ.i[VV]);
-         const YV = (0, EJ.h)(VV, JV);
+           AH = uH.y.frameMs(LH, 0);
+         KA.f.frame(AH, uH.y.heading(LH, 0), uH.y.pitch(LH, 0), KA.d[HH]);
+         const rH = (0, WA.g)(HH, AH);
```

#### 428. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4370` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4249) · [Before (L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4370)

```diff
-             (0, nJ.d)().turnDamageIndicators(VV.cameraHeading)
+             (0, CA.e)().turnDamageIndicators(HH.cameraHeading)
```

#### 429. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4381` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4260) · [Before (L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4381)

```diff
-           this.EZ(yV)
+           this.XX(hH)
```

#### 430. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4383` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4262) · [Before (L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4383)

```diff
-         this.showZoom(), this.items.flush(this.EZ), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.XX), this.writePromptWatch(), this.writeCustomButtons();
```

#### 431. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4385` → after: `L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4264) · [Before (L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4385)

```diff
-         this.ticks = 0, (0, EJ.g)(UV, VV, YV, this.EZ)
+         this.ticks = 0, (0, WA.e)(SH, HH, rH, this.XX)
```

#### 432. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4392` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4271) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4392)

```diff
-           eV = kV.s.eventOverflowGen(VV, 0),
+           BH = uH.y.eventOverflowGen(HH, 0),
```

#### 433. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4396` → after: `L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4275) · [Before (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4396)

```diff
-         const JV = kV.s.eventOverflowMask(VV, 0),
+         const AH = uH.y.eventOverflowMask(HH, 0),
```

#### 434. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4398` → after: `L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4277) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4398)

```diff
-         0 === JV || null === YV || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, kV.Be)(YV, 0, JV);
+         0 === AH || null === rH || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, uH.Je)(rH, 0, AH);
```

#### 435. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4405` → after: `L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4284) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4405)

```diff
-         if (VV === kV.jc.Director) try {
+         if (HH === uH.oc.Director) try {
```

#### 436. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4408` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4287) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4408)

```diff
-           return this.EZ(nV), kV.jb.None
+           return this.XX(CH), uH.qb.None
```

#### 437. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4410` → after: `L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4289) · [Before (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4410)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return VV === kV.jc.AltVeto ? kV.i.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return HH === uH.oc.AltVeto ? uH.m.Allow : 0;
```

#### 438. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4414` → after: `L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4293) · [Before (L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4414)

```diff
-           throw (0, rV.j)(nV) && (this.fault = nV), nV
+           throw (0, YH.h)(CH) && (this.fault = CH), CH
```

#### 439. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4427-L4428` → after: `L4306-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4306-L4307) · [Before (L4427-L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4427-L4428)

```diff
-           case kV.jc.AltVeto:
-           case kV.jc.AltAction: {
+           case uH.oc.AltVeto:
+           case uH.oc.AltAction: {
```

#### 440. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4433` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4312) · [Before (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4433)

```diff
-             if (VV === kV.jc.AltAction) return this.first((VV => {
+             if (HH === uH.oc.AltAction) return this.first((HH => {
```

#### 441. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4441` → after: `L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4320) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4441)

```diff
-             return "preventAction" === EV ? kV.i.Prevent : "preventPlacement" === EV ? kV.i.PreventPlacement : kV.i.Allow
+             return "preventAction" === WH ? uH.m.Prevent : "preventPlacement" === WH ? uH.m.PreventPlacement : uH.m.Allow
```

#### 442. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4443` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4322) · [Before (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4443)

```diff
-           case kV.jc.Click: {
+           case uH.oc.Click: {
```

#### 443. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4445-L4446` → after: `L4324-L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4324-L4325) · [Before (L4445-L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4445-L4446)

```diff
-               wV = 0 !== (VV & kV.T.Alt),
-               ZV = 0 !== (VV & kV.T.HasPos),
+               EH = 0 !== (HH & uH.W.Alt),
+               XH = 0 !== (HH & uH.W.HasPos),
```

#### 444. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4450` → after: `L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4329) · [Before (L4450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4450)

```diff
-               jV = 0 !== (VV & kV.T.Up),
+               xH = 0 !== (HH & uH.W.Up),
```

#### 445. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4452` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4331) · [Before (L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4452)

```diff
-             if (0 === (VV & kV.T.AttackOnly) && this.first((VV => {
+             if (0 === (HH & uH.W.AttackOnly) && this.first((HH => {
```

#### 446. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4465` → after: `L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4344) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4465)

```diff
-           case kV.jc.ChangeBlock: {
+           case uH.oc.ChangeBlock: {
```

#### 447. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4473` → after: `L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4352) · [Before (L4473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4473)

```diff
-           case kV.jc.DropItem: {
+           case uH.oc.DropItem: {
```

#### 448. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4481` → after: `L4360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4360) · [Before (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4481)

```diff
-             return this.onError(new Error(`Unknown game call kind ${VV}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${HH}`)), 0
```

#### 449. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4485` → after: `L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4364) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4485)

```diff
-         const pV = YV === kV.Oc ? null : KJ.decode(this.api.eventBytes(UV, Math.min(YV, yV)));
+         const tH = rH === uH.Xc ? null : ZA.decode(this.api.eventBytes(SH, Math.min(rH, hH)));
```

#### 450. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4487-L4489` → after: `L4366-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4366-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4366-L4368) · [Before (L4487-L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4487-L4489)

```diff
-           RJ: [VV, eV, xV],
-           gJ: JV,
-           DJ: pV
+           sA: [HH, BH, LH],
+           JA: AH,
+           iA: tH
```

#### 451. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4497` → after: `L4376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4376) · [Before (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4497)

```diff
-         })), this.QZ("EditBoard", {
+         })), this.AX("blockChangeRefused", null), this.AX("EditBoard", {
```

#### 452. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4499` → after: `L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4378) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4499)

```diff
-         }), this.QZ("EditCodeBlock", {
+         }), this.AX("EditCodeBlock", {
```

#### 453. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4505` → after: `L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4384) · [Before (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4505)

```diff
-         VV === kV.xc.ChestOpened ? this.items.chestOpened(xV, JV, YV) : VV !== kV.xc.Synced && VV !== kV.xc.ChestClosed && VV !== kV.xc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         HH === uH.Gc.ChestOpened ? this.items.chestOpened(LH, AH, rH) : HH !== uH.Gc.Synced && HH !== uH.Gc.ChestClosed && HH !== uH.Gc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 454. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4508-L4509` → after: `L4387-L4388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4387-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4387-L4388) · [Before (L4508-L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4508-L4509)

```diff
-               case kV.xc.Synced:
-                 yV.h.QZ("syncedInvenFromServer");
+               case uH.Gc.Synced:
+                 hH.k.AX("syncedInvenFromServer");
```

#### 455. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4511-L4513` → after: `L4390-L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4390-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4390-L4392) · [Before (L4511-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4511-L4513)

```diff
-               case kV.xc.ChestOpened:
-               case kV.xc.ChestClosed:
-                 yV.h.QZ("chestToggleFromServer", VV === kV.xc.ChestOpened, !0);
+               case uH.Gc.ChestOpened:
+               case uH.Gc.ChestClosed:
+                 hH.k.AX("chestToggleFromServer", HH === uH.Gc.ChestOpened, !0);
```

#### 456. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4515-L4516` → after: `L4394-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4394-L4395) · [Before (L4515-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4515-L4516)

```diff
-               case kV.xc.ChestRefreshed:
-                 yV.h.QZ("chestRefreshedFromServer");
+               case uH.Gc.ChestRefreshed:
+                 hH.k.AX("chestRefreshedFromServer");
```

#### 457. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4518-L4520` → after: `L4397-L4399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4397-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4397-L4399) · [Before (L4518-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4518-L4520)

```diff
-               case kV.xc.EnchantingTable:
-                 yV.h.QZ("enchantingTable", {
-                   vp: JV,
+               case uH.Gc.EnchantingTable:
+                 hH.k.AX("enchantingTable", {
+                   ph: AH,
```

#### 458. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4524-L4525` → after: `L4403-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4403-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4403-L4404) · [Before (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4524-L4525)

```diff
-               case kV.xc.HotbarRequest:
-                 yV.h.QZ("setSelectedInventorySlotI", eV, !0);
+               case uH.Gc.HotbarRequest:
+                 hH.k.AX("setSelectedInventorySlotI", BH, !0);
```

#### 459. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4527-L4528` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4406-L4407) · [Before (L4527-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4527-L4528)

```diff
-               case kV.xc.Scrolled:
-                 yV.h.QZ("ScrollInventorySlot", eV);
+               case uH.Gc.Scrolled:
+                 hH.k.AX("ScrollInventorySlot", BH);
```

#### 460. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4530-L4531` → after: `L4409-L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4409-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4409-L4410) · [Before (L4530-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4530-L4531)

```diff
-               case kV.xc.NumberKey:
-                 yV.h.QZ("numkeyPressed", eV + 1);
+               case uH.Gc.NumberKey:
+                 hH.k.AX("numkeyPressed", BH + 1);
```

#### 461. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4533-L4534` → after: `L4412-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4412-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4412-L4413) · [Before (L4533-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4533-L4534)

```diff
-               case kV.xc.DropRequested:
-                 yV.h.QZ("DropInvenItem", 0 !== eV);
+               case uH.Gc.DropRequested:
+                 hH.k.AX("DropInvenItem", 0 !== BH);
```

#### 462. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4537` → after: `L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4416) · [Before (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4537)

```diff
-                 throw new rV.d(`InventoryEvent of no kind: what ${VV}`)
+                 throw new YH.d(`InventoryEvent of no kind: what ${HH}`)
```

#### 463. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4546` → after: `L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4425) · [Before (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4546)

```diff
-         this.QZ("shotPlayer", {
+         this.AX("shotPlayer", {
```

#### 464. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4554-L4556` → after: `L4433-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4433-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4433-L4435) · [Before (L4554-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4554-L4556)

```diff
-         this.QZ("closeShopOnDamaged", null), this.guard((() => {
-           yV.h.QZ("damagedByOtherPlayer", {
-             fU: null,
+         this.AX("closeShopOnDamaged", null), this.guard((() => {
+           hH.k.AX("damagedByOtherPlayer", {
+             DS: null,
```

#### 465. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4558` → after: `L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4437) · [Before (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4558)

```diff
-             aU: VV
+             xA: HH
```

#### 466. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4564-L4565` → after: `L4443-L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4443-L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4443-L4444) · [Before (L4564-L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564-L4565)

```diff
-           yV.h.QZ("yourAttackHit", {
-             TJ: JV,
+           hH.k.AX("yourAttackHit", {
+             aA: AH,
```

#### 467. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4572` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4451) · [Before (L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4572)

```diff
-         this.localPhysicsType = VV, this.QZ("PlayerPhysicsTypeUpdate", VV)
+         this.localPhysicsType = HH, this.AX("PlayerPhysicsTypeUpdate", HH)
```

#### 468. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4576` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4455) · [Before (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4576)

```diff
-           VV === vV.Id.UPDATE ? (0, gV.i)(eV, {
+           HH === GH.Ad.UPDATE ? (0, KH.e)(BH, {
```

#### 469. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4581` → after: `L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4460) · [Before (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4581)

```diff
-           }) : RV.d.remove(eV)
+           }) : lH.c.remove(BH)
```

#### 470. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4588` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4467) · [Before (L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4588)

```diff
-         this.QZ("showBottomMessage", {
+         this.AX("showBottomMessage", {
```

#### 471. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4595` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4474) · [Before (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4595)

```diff
-         this.QZ("showBottomMessage", mJ.b)
+         this.AX("showBottomMessage", wA.d)
```

#### 472. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4599` → after: `L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4478) · [Before (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4599)

```diff
-         !this.zoomUnshown || VV && this.zoomHeld || (this.zoomUnshown = !1, this.QZ("cameraZoomSet", this.zoom)), this.zoomHeld = VV
+         !this.zoomUnshown || HH && this.zoomHeld || (this.zoomUnshown = !1, this.AX("cameraZoomSet", this.zoom)), this.zoomHeld = HH
```

#### 473. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4604-L4608` → after: `L4483-L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4483-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4483-L4487) · [Before (L4604-L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4604-L4608)

```diff
-             fU: eV,
-             mU: xV
-           } = (0, WJ.b)(RJ.v, VV);
-           yV.h.QZ("damagedByOtherPlayer", {
-             fU: eV,
+             DS: BH,
+             wS: LH
+           } = (0, fA.d)(lA.q, HH);
+           hH.k.AX("damagedByOtherPlayer", {
+             DS: BH,
```

#### 474. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4629` → after: `L4508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4508) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4629)

```diff
-                   mode: kV.le.All,
+                   mode: uH.pe.All,
```

#### 475. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4633-L4634` → after: `L4512-L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4512-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4512-L4513) · [Before (L4633-L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4633-L4634)

```diff
-               } return JV ? xV.size > kV.Dc ? {
-               mode: kV.le.All,
+               } return AH ? LH.size > uH.Rc ? {
+               mode: uH.pe.All,
```

#### 476. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4637` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4516) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4637)

```diff
-               mode: kV.le.Filter,
+               mode: uH.pe.Filter,
```

#### 477. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4640` → after: `L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4519) · [Before (L4640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4640)

```diff
-               mode: kV.le.Off,
+               mode: uH.pe.Off,
```

#### 478. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4646` → after: `L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4525) · [Before (L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4646)

```diff
-             mode: kV.le.All,
+             mode: uH.pe.All,
```

#### 479. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4650` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4529) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4650)

```diff
-         if (xV.mode === kV.le.Off && !this.vetoSet) return;
+         if (LH.mode === uH.pe.Off && !this.vetoSet) return;
```

#### 480. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4652` → after: `L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4531) · [Before (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4652)

```diff
-         (0, kV.Pf)(eV, 0, xV.mode, xV.roots.length, JV) ? this.vetoSet = xV.mode !== kV.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, uH.Xf)(BH, 0, LH.mode, LH.roots.length, AH) ? this.vetoSet = LH.mode !== uH.pe.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 481. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4665` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4544) · [Before (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4665)

```diff
-           for (const xV of VV) xV.onPlayerAltAction && (eV |= 1 << kV.jc.AltAction), (xV.onPlayerClick || xV.onPlayerClickUp || xV.onPlayerAttackEntity) && (eV |= 1 << kV.jc.Click), xV.onPlayerChangeBlock && (eV |= 1 << kV.jc.ChangeBlock), xV.onPlayerDropItem && (eV |= 1 << kV.jc … [truncated]
+           for (const LH of HH) LH.onPlayerAltAction && (BH |= 1 << uH.oc.AltAction), (LH.onPlayerClick || LH.onPlayerClickUp || LH.onPlayerAttackEntity) && (BH |= 1 << uH.oc.Click), LH.onPlayerChangeBlock && (BH |= 1 << uH.oc.ChangeBlock), LH.onPlayerDropItem && (BH |= 1 << uH.oc … [truncated]
```

#### 482. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4668` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4547) · [Before (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4668)

```diff
-         (0 !== xV || this.hooksSet) && ((0, kV.Xf)(eV, 0, xV) ? this.hooksSet = 0 !== xV : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== LH || this.hooksSet) && ((0, uH.fg)(BH, 0, LH) ? this.hooksSet = 0 !== LH : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 483. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4677` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4556) · [Before (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4677)

```diff
-         eV !== this.promptWatchSent && VV && !this.stopped() && (0, kV.ng)(VV, 0, SJ[eV]) && (this.promptWatchSent = eV)
+         BH !== this.promptWatchSent && HH && !this.stopped() && (0, uH.Dg)(HH, 0, JA[BH]) && (this.promptWatchSent = BH)
```

#### 484. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4681` → after: `L4560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4560) · [Before (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4681)

```diff
-         eV && VV !== this.writtenPublicLobby && ((0, kV.cg)(eV, 0, VV ? 1 : 0) ? this.writtenPublicLobby = VV : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         BH && HH !== this.writtenPublicLobby && ((0, uH.sg)(BH, 0, HH ? 1 : 0) ? this.writtenPublicLobby = HH : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 485. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4685` → after: `L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564) · [Before (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4685)

```diff
-         eV && ((0, kV.Zf)(eV, 0, null === VV ? 0 : 1, null === VV ? uJ : HJ.encode(VV)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         BH && ((0, uH.jg)(BH, 0, null === HH ? 0 : 1, null === HH ? aA : dA.encode(HH)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 486. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4695` → after: `L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4574) · [Before (L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4695)

```diff
-             this.EZ(xV)
+             this.XX(LH)
```

#### 487. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4701` → after: `L4580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4580) · [Before (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4701)

```diff
-           yV.h.QZ(VV, eV)
+           hH.k.AX(HH, BH)
```

#### 488. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4708` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4587) · [Before (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4708)

```diff
-           this.EZ(VV)
+           this.XX(HH)
```

#### 489. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4715` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4594) · [Before (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4715)

```diff
-           this.EZ(VV)
+           this.XX(HH)
```

#### 490. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4720` → after: `L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4599) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4720)

```diff
-         this.sessionLive = !1, this.localPhysicsType = XV.q.DEFAULT;
+         this.sessionLive = !1, this.localPhysicsType = kH.o.DEFAULT;
```

#### 491. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4750` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4629) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4750)

```diff
-         void 0 !== eV && this.EZ(eV)
+         void 0 !== BH && this.XX(BH)
```

#### 492. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4760` → after: `L4639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4639) · [Before (L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4760)

```diff
-             xV ? this.onError(YV) : this.EZ(YV)
+             LH ? this.onError(rH) : this.XX(rH)
```

#### 493. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4768` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4647) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4768)

```diff
-           this.EZ(eV)
+           this.XX(BH)
```

#### 494. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4774` → after: `L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4653) · [Before (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4774)

```diff
-       return VV === kV.Sc ? null : String(VV)
+       return HH === uH.$c ? null : String(HH)
```

#### 495. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4778` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4657) · [Before (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4778)

```diff
-       VV.iZ(vV.Bd)
+       HH.IX(GH.td)
```

#### 496. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4802-L4805` → after: `L4681-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4681-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4681-L4684) · [Before (L4802-L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4802-L4805)

```diff
-     var xY = xV(37593),
-       JY = xV(5353),
-       YY = xV(37930),
-       UY = xV(37964);
+     var Lr = LH(37326),
+       Ar = LH(5335),
+       rr = LH(37617),
+       Sr = LH(37650);
```

#### 497. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4809` → after: `L4688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4688) · [Before (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4809)

```diff
-           src: [...(0, YY.w)(VV).src],
+           src: [...(0, rr.v)(HH).src],
```

#### 498. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4814` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4693) · [Before (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4814)

```diff
-       return eV.load = () => (eV._preload = !0, (0, UY.d)(VV), xV()), eV
+       return BH.load = () => (BH._preload = !0, (0, Sr.i)(HH), LH()), BH
```

#### 499. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4842-L4843` → after: `L4721-L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4721-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4721-L4722) · [Before (L4842-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4842-L4843)

```diff
-     var wY = xV(37720),
-       ZY = xV(40434);
+     var Er = LH(37442),
+       Xr = LH(40176);
```

#### 500. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4852` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4731) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4852)

```diff
-       return rY ??= new ZY.c(new wY.d(kY)), rY
+       return Yr ??= new Xr.e(new Er.e(ur)), Yr
```

#### 501. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4861` → after: `L4740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4740) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4861)

```diff
-       JV.b.get("scriptedCameraFacing") !== VV && JV.b.set({
+       AH.c.get("scriptedCameraFacing") !== HH && AH.c.set({
```

#### 502. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4865-L4870` → after: `L4744-L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4744-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4744-L4749) · [Before (L4865-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4865-L4870)

```diff
-     var jY = xV(9922),
-       qY = xV(9861),
-       tY = xV(40472),
-       FY = xV(42344),
-       TY = xV(3719);
-     const PY = Object.entries(kV.fc).reduce(((VV, eV) => {
+     var xr = LH(10030),
+       vr = LH(9979),
+       Pr = LH(40210),
+       Tr = LH(42352),
+       Ur = LH(3639);
+     const Vr = Object.entries(uH.lc).reduce(((HH, BH) => {
```

#### 503. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4877` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4756) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4877)

```diff
-       return 0 !== ((null !== (xV = VV.itemFlags[eV]) && void 0 !== xV ? xV : 0) & kV.yc.Stackable)
+       return 0 !== ((null !== (LH = HH.itemFlags[BH]) && void 0 !== LH ? LH : 0) & uH.Ic.Stackable)
```

#### 504. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4891` → after: `L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4770) · [Before (L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4891)

```diff
-           return xV === kV.Ac ? void 0 : xV
+           return LH === uH.Oc ? void 0 : LH
```

#### 505. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4895` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4774) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4895)

```diff
-           const JV = null !== (xV = VV.itemHarvests[eV]) && void 0 !== xV ? xV : 0;
+           const AH = null !== (LH = HH.itemHarvests[BH]) && void 0 !== LH ? LH : 0;
```

#### 506. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4900-L4901` → after: `L4779-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4779-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4779-L4780) · [Before (L4900-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4900-L4901)

```diff
-           const YV = null !== (xV = VV.itemLevels[eV]) && void 0 !== xV ? xV : kV.Ac;
-           return YV !== kV.Ac ? YV : null !== (JV = (0, bJ.harvestsNullLevelOf)(eV)) && void 0 !== JV ? JV : void 0
+           const rH = null !== (LH = HH.itemLevels[BH]) && void 0 !== LH ? LH : uH.Oc;
+           return rH !== uH.Oc ? rH : null !== (AH = (0, QA.harvestsNullLevelOf)(BH)) && void 0 !== AH ? AH : void 0
```

#### 507. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4922` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4801) · [Before (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4922)

```diff
-           if (void 0 === eV) throw new Error(`No item is named ${VV}, an item's root`);
+           if (void 0 === BH) throw new Error(`No item is named ${HH}, an item's root`);
```

#### 508. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4933-L4940` → after: `L4812-L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4812-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4812-L4819) · [Before (L4933-L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4933-L4940)

```diff
-           blockFlags: MY(YV, kV.w.BYTES, kV.w.flags),
-           blockHarvestTypes: MY(YV, kV.w.BYTES, kV.w.harvestType),
-           blockHarvestLevels: MY(YV, kV.w.BYTES, kV.w.harvestLevel),
-           blockAttachedTops: zY(YV, kV.w.BYTES, kV.w.attachedTop),
-           itemFlags: MY(UV, kV.zc.BYTES, kV.zc.flags),
-           itemHarvests: MY(UV, kV.zc.BYTES, kV.zc.harvests),
-           itemLevels: MY(UV, kV.zc.BYTES, kV.zc.level)
-         }, (0, TY.l)(Object.freeze(JV)), (0, FY.f)()
+           blockFlags: mr(rH, uH.G.BYTES, uH.G.flags),
+           blockHarvestTypes: mr(rH, uH.G.BYTES, uH.G.harvestType),
+           blockHarvestLevels: mr(rH, uH.G.BYTES, uH.G.harvestLevel),
+           blockAttachedTops: or(rH, uH.G.BYTES, uH.G.attachedTop),
+           itemFlags: mr(SH, uH.Kc.BYTES, uH.Kc.flags),
+           itemHarvests: mr(SH, uH.Kc.BYTES, uH.Kc.harvests),
+           itemLevels: mr(SH, uH.Kc.BYTES, uH.Kc.level)
+         }, (0, Ur.k)(Object.freeze(AH)), (0, Tr.f)()
```

#### 509. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4943-L4945` → after: `L4822-L4824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4822-L4824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4822-L4824) · [Before (L4943-L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4943-L4945)

```diff
-         if ("number" === typeof VV) return void 0 === (0, TY.g)(VV) ? void 0 : VV;
-         const eV = (0, TY.d)(VV);
-         return void 0 === eV && NY.test(VV) ? void 0 === (0, TY.g)(+VV) ? void 0 : +VV : eV
+         if ("number" === typeof HH) return void 0 === (0, Ur.h)(HH) ? void 0 : HH;
+         const BH = (0, Ur.e)(HH);
+         return void 0 === BH && br.test(HH) ? void 0 === (0, Ur.h)(+HH) ? void 0 : +HH : BH
```

#### 510. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4948` → after: `L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4827) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4948)

```diff
-         if (!VV || VV === jY.d) return jY.f;
+         if (!HH || HH === xr.e) return xr.f;
```

#### 511. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4950` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4829) · [Before (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4950)

```diff
-         if (void 0 === eV) throw new Error(`Item ${VV} not found in registry`);
+         if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
```

#### 512. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4954` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4833) · [Before (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4954)

```diff
-         return 0 !== VV && void 0 !== (0, TY.g)(VV) ? this.metaOf(VV).rootId : VV
+         return 0 !== HH && void 0 !== (0, Ur.h)(HH) ? this.metaOf(HH).rootId : HH
```

#### 513. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4957` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4836) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4957)

```diff
-         return this.metas[VV] ??= (0, qY.k)((0, TY.g)(VV), VV, this.rootIdOf, (0, bJ.rootMetaDescOf)(VV))
+         return this.metas[HH] ??= (0, vr.k)((0, Ur.h)(HH), HH, this.rootIdOf, (0, QA.rootMetaDescOf)(HH))
```

#### 514. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4960` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4839) · [Before (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4960)

```diff
-         if (!VV || VV === jY.d) return 0;
+         if (!HH || HH === xr.e) return 0;
```

#### 515. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4962` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4841) · [Before (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4962)

```diff
-         if (void 0 === eV) throw new Error(`Invalid block name. You sent ${VV}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 516. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4966` → after: `L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4845) · [Before (L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4966)

```diff
-         if (!VV || VV === jY.d) return jY.d;
+         if (!HH || HH === xr.e) return xr.e;
```

#### 517. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4968-L4969` → after: `L4847-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4847-L4848) · [Before (L4968-L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4968-L4969)

```diff
-         if (void 0 === eV) throw new Error(`Item ${VV} not found in registry`);
-         return (0, TY.g)(eV)
+         if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
+         return (0, Ur.h)(BH)
```

#### 518. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4973` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4852) · [Before (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4973)

```diff
-         if (VV === jY.d) return 0;
+         if (HH === xr.e) return 0;
```

#### 519. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4977-L4978` → after: `L4856-L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4856-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4856-L4857) · [Before (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4977-L4978)

```diff
-             JV = eV > 0 ? (0, TY.d)(VV.slice(0, eV)) : void 0;
-           xV = void 0 !== JV && this.isBlockId(JV) && (0, bJ.rootMetaDescOf)(JV) === VV ? JV : void 0
+             AH = BH > 0 ? (0, Ur.e)(HH.slice(0, BH)) : void 0;
+           LH = void 0 !== AH && this.isBlockId(AH) && (0, QA.rootMetaDescOf)(AH) === HH ? AH : void 0
```

#### 520. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4981` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4860) · [Before (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4981)

```diff
-         if (!eV) throw new Error(`Invalid block name. You sent ${VV}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 521. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4988` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4867) · [Before (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4988)

```diff
-         return 0 !== VV && (0, TY.g)(VV) || jY.d
+         return 0 !== HH && (0, Ur.h)(HH) || xr.e
```

#### 522. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4996` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4875) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4996)

```diff
-           name: (0, TY.g)(eV),
+           name: (0, Ur.h)(BH),
```

#### 523. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5006` → after: `L4885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4885) · [Before (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5006)

```diff
-         if (tY.d.has(eV)) {
+         if (Pr.c.has(BH)) {
```

#### 524. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5008` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4887) · [Before (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5008)

```diff
-             JV = this.options.get((0, tY.h)(xV, eV));
+             AH = this.options.get((0, Pr.d)(LH, BH));
```

#### 525. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5022-L5023` → after: `L4901-L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4901-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4901-L4902) · [Before (L5022-L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5022-L5023)

```diff
-           throw new Error(`ClientApi.${VV} is not available yet in the wasm client (${eV})`)
-         }(`getItemStat("${VV}")`, `a table of the stat: the wasm client answers ${Object.keys(XY).join(", ")}`), eV
+           throw new Error(`ClientApi.${HH} is not available yet in the wasm client (${BH})`)
+         }(`getItemStat("${HH}")`, `a table of the stat: the wasm client answers ${Object.keys(kr).join(", ")}`), BH
```

#### 526. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5028` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4907) · [Before (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5028)

```diff
-         return null !== YV && void 0 !== YV || "displayName" !== eV ? YV : this.getItemName(VV)
+         return null !== rH && void 0 !== rH || "displayName" !== BH ? rH : this.getItemName(HH)
```

#### 527. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5034` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4913) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5034)

```diff
-         return this.getClientOption(`${VV}GunStats`)
+         return this.getClientOption(`${HH}GunStats`)
```

#### 528. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5041` → after: `L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4920) · [Before (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5041)

```diff
-         return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.Solid)
+         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Solid)
```

#### 529. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5048` → after: `L4927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4927) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5048)

```diff
-         return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.Fluid)
+         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Fluid)
```

#### 530. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5052` → after: `L4931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4931) · [Before (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5052)

```diff
-         return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.PlaceOver)
+         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.PlaceOver)
```

#### 531. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5056` → after: `L4935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4935) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5056)

```diff
-         return null !== (eV = this.props.blockAttachedTops[VV]) && void 0 !== eV ? eV : 0
+         return null !== (BH = this.props.blockAttachedTops[HH]) && void 0 !== BH ? BH : 0
```
