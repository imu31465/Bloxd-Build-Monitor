# Changed — Bundle Modifications Report (Part 017 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `17 / 56` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/314.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/314.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/314.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/314.js#L4-L6)

```diff
-   42034: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       _IESTextureLoader: () => xp
+   41991: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       parseShaderPack: () => wQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L11-L17` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/314.js#L10-L15) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/314.js#L11-L17)

```diff
-       return pp.split(" ").filter((pp => "" !== pp)).map((pp => parseFloat(pp)))
-     }
- 
-     function Ip(pp, ip, cp) {
-       for (; cp.length !== ip;) {
-         const ip = op(pp.lines[pp.index++]);
-         cp.push(...ip)
+       var WQ, XQ;
+       const wQ = QQ.get("shaderPackUrl"),
+         qQ = null !== (WQ = QQ.get("shaderPackMode")) && void 0 !== WQ ? WQ : "strict";
+       if (null === wQ) {
+         if (QQ.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L19-L99` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/314.js#L17-L25) · [Before (L19-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/314.js#L19-L99)

```diff
-     }
- 
-     function Sp(pp, ip, cp) {
-       let op = 0,
-         Ip = 0,
-         Sp = 0,
-         xp = 0,
-         Lp = 0,
-         Yp = 0;
-       for (let Op = 0; Op < pp.numberOfHorizontalAngles - 1; Op++)
-         if (cp < pp.horizontalAngles[Op + 1] || Op === pp.numberOfHorizontalAngles - 2) {
-           Ip = Op, Sp = pp.horizontalAngles[Op], xp = pp.horizontalAngles[Op + 1];
-           break
-         } for (let Op = 0; Op < pp.numberOfVerticalAngles - 1; Op++)
-         if (ip < pp.verticalAngles[Op + 1] || Op === pp.numberOfVerticalAngles - 2) {
-           op = Op, Lp = pp.verticalAngles[Op], Yp = pp.verticalAngles[Op + 1];
- ... (65 more removed lines; see GitHub link above)
+       if ("lite" !== QQ.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(QQ) {
+           return "strict" === QQ || "allow" === QQ
+         }(qQ)) throw new Error(`Unknown shaderPackMode "${qQ}" - use strict or allow`);
+       const TQ = (null !== (XQ = QQ.get("variants")) && void 0 !== XQ ? XQ : "").split(",").find((QQ => QQ.trim().startsWith("liteShaderPack")));
+       if (void 0 !== TQ) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${TQ.trim()}`);
+       return {
+         url: wQ,
+         mode: qQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/315.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/315.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/315.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/315.js#L4-L6)

```diff
-   42046: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       _BasisTextureLoader: () => tp
+   42014: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => PQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L8-L11` → after: `L8-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L8-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/315.js#L8-L156) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/315.js#L8-L11)

```diff
-     var Op, op = cp(40304),
-       Ip = cp(38905),
-       Sp = cp(40654),
-       xp = cp(40033);
+     var wQ = XQ(37370),
+       qQ = XQ(37404),
+       TQ = XQ(40250),
+       zQ = XQ(37374),
+       sQ = XQ(37546);
+     class FQ {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.name = QQ, this.worldAxisForNormal = WQ, this.worldAxisForFileX = XQ, this.worldAxisForFileY = wQ
+       }
+     }
+     class PQ {
+       static _NearestPow2Floor(QQ) {
+         return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
+         if (!QQ.isCube) return null;
+ ... (133 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L13-L42` → after: `L158-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L158-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/315.js#L158-L401) · [Before (L13-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/315.js#L13-L42)

```diff
-     function Lp() {
-       const pp = 0,
-         ip = 1,
-         cp = 2,
-         Op = 3,
-         op = 6,
-         Ip = 8,
-         Sp = 9,
-         xp = 10,
-         Lp = 14;
-       let Yp = null;
- 
-       function Dp(pp, ip, cp, Op, op) {
-         const Ip = pp.getImageTranscodedSizeInBytes(ip, cp, Op);
-         let Sp = new Uint8Array(Ip);
-         if (!pp.transcodeImage(Sp, ip, cp, Op, 1, 0)) return null;
- ... (14 more removed lines; see GitHub link above)
+     function PQ(QQ) {
+       return QQ.charCodeAt(0) + (QQ.charCodeAt(1) << 8) + (QQ.charCodeAt(2) << 16) + (QQ.charCodeAt(3) << 24)
+     }
+     const gQ = PQ("DXT1"),
+       JQ = PQ("DXT3"),
+       rQ = PQ("DXT5"),
+       IQ = PQ("DX10");
+     class jQ {
+       static GetDDSInfo(QQ) {
+         const WQ = new Int32Array(QQ.buffer, QQ.byteOffset, 31),
+           XQ = new Int32Array(QQ.buffer, QQ.byteOffset, 35);
+         let wQ = 1;
+         WQ[2] & sQ && (wQ = Math.max(1, WQ[7]));
+         const qQ = WQ[21],
+           TQ = qQ === IQ ? XQ[32] : 0;
+         let zQ = 0;
+ ... (228 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L44-L283` → after: `L403-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L403-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/315.js#L403-L426) · [Before (L44-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/315.js#L44-L283)

```diff
-               }
-             return Ip
-           }(Sp, 0, pp.getImageWidth(ip, cp) + 3 & -4, pp.getImageHeight(ip, cp) + 3 & -4)
-         }
-         return Sp
-       }
-       onmessage = Ap => {
-         if ("init" === Ap.data.action) {
-           if (Ap.data.url) try {
-             importScripts(Ap.data.url)
-           } catch (Pp) {
-             postMessage({
-               action: "error",
-               error: Pp
-             })
-           }
- ... (224 more removed lines; see GitHub link above)
+                 wQ && QQ._uploadDataToTextureDirectly(WQ, wQ, qQ, TQ)
+               } else if (wQ.isRGB) WQ.type = 0, 24 === cQ ? (WQ.format = 4, lQ = UQ * bQ * 3, dQ = jQ._GetRGBArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer, EQ, CQ, uQ), QQ._uploadDataToTextureDirectly(WQ, dQ, qQ, TQ)) : (WQ.format = 5, lQ = UQ * bQ * 4, dQ = jQ._GetRGBAAr … [truncated]
+               else if (wQ.isLuminance) {
+                 const wQ = QQ._getUnpackAlignement(),
+                   zQ = UQ;
+                 lQ = Math.floor((UQ + wQ - 1) / wQ) * wQ * (bQ - 1) + zQ, dQ = jQ._GetLuminanceArrayBuffer(UQ, bQ, XQ.byteOffset + vQ, lQ, XQ.buffer), WQ.format = 1, WQ.type = 0, QQ._uploadDataToTextureDirectly(WQ, dQ, qQ, TQ)
+               } else lQ = Math.max(4, UQ) / 4 * Math.max(4, bQ) / 4 * iQ, dQ = new Uint8Array(XQ.buffer, XQ.byteOffset + vQ, lQ), WQ.type = 0, QQ._uploadCompressedDataToTextureDirectly(WQ, hQ, UQ, bQ, dQ, qQ, TQ)
+             }
+             vQ += cQ ? UQ * bQ * (cQ / 8) : lQ, UQ *= .5, bQ *= .5, UQ = Math.max(1, UQ), bQ = Math.max(1, bQ)
+           }
+           if (void 0 !== BQ) break
+         }
+         VQ && VQ.length > 0 ? wQ.sphericalPolynomial = TQ.d.ConvertCubeMapToSphericalPolynomial({
+           size: pQ[4],
+           right: VQ[0],
+           left: VQ[1],
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/316.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/316.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2)

```diff
- export const ids = [316];
+ export const ids = [315, 316];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L4-L6)

```diff
-   42087: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => vp
+   42025: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       _DDSTextureLoader: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L8-L19` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L9) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L19)

```diff
-     var Op = cp(37349),
-       op = cp(37320),
-       Ip = cp(40654),
-       Sp = cp(40345),
-       xp = cp(40143),
-       Lp = cp(38905),
-       Yp = cp(40332),
-       Dp = cp(40358),
-       Ap = cp(37329),
-       Pp = cp(40107),
-       Wp = cp(40314),
-       yp = cp(40398);
+     var wQ = XQ(40250),
+       qQ = XQ(42012);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L155` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L11-L18) · [Before (L21-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L21-L155)

```diff
-       get renderList() {
-         return this._renderList
-       }
-       set renderList(pp) {
-         this._renderList !== pp && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), pp && (this._unObserveRenderList = (0, Ap.j)(pp, this._renderListHasChanged)), this._renderList = pp)
-       }
-       get disableImageProcessing() {
-         return this._disableImageProcessing
-       }
-       set disableImageProcessing(pp) {
-         pp !== this._disableImageProcessing && (this._disableImageProcessing = pp, this._scene.markAllMaterialsAsDirty(64))
-       }
-       get disableDepthPrePass() {
-         return this._disableDepthPrePass
-       }
-       set disableDepthPrePass(pp) {
- ... (119 more removed lines; see GitHub link above)
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(QQ, WQ, XQ, TQ) {
+         const zQ = WQ.Uj();
+         let sQ, FQ = !1,
+           PQ = 1e3;
+         if (Array.isArray(QQ))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L158-L681` → after: `L21-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L21-L32) · [Before (L158-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L158-L681)

```diff
-             this.renderListPredicate(cp) && this.renderList.push(cp)
-           }
-         }
-         this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
-       }
-       initRender(pp, ip) {
-         const cp = this.activeCamera ?? this._scene.activeCamera;
-         this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers … [truncated]
-       }
-       finishRender() {
-         const pp = this._scene;
-         this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (pp.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), pp._activeCamera = this._currentSceneCamera, this._currentSceneCamera  … [truncated]
-       }
-       render() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
- ... (508 more removed lines; see GitHub link above)
+             sQ = qQ.DDSTools.GetDDSInfo(XQ), WQ.width = sQ.width, WQ.height = sQ.height, FQ = (sQ.isRGB || sQ.isLuminance || sQ.mipmapCount > 1) && WQ.generateMipMaps, zQ._unpackFlipY(sQ.isCompressed), qQ.DDSTools.UploadDDSLevels(zQ, WQ, XQ, sQ, FQ, 6, -1, wQ), sQ.isFourCC || 1 ! … [truncated]
+           } else {
+             const TQ = QQ;
+             sQ = qQ.DDSTools.GetDDSInfo(TQ), WQ.width = sQ.width, WQ.height = sQ.height, XQ && (sQ.sphericalPolynomial = new wQ.e), FQ = (sQ.isRGB || sQ.isLuminance || sQ.mipmapCount > 1) && WQ.generateMipMaps, zQ._unpackFlipY(sQ.isCompressed), qQ.DDSTools.UploadDDSLevels(zQ, WQ, … [truncated]
+           }
+         zQ._setCubeMapTextureParams(WQ, FQ, PQ), WQ.isReady = !0, WQ.onLoadedObservable.notifyObservers(WQ), WQ.onLoadedObservable.clear(), TQ && TQ({
+           isDDS: !0,
+           width: WQ.width,
+           info: sQ,
+           data: QQ,
+           texture: WQ
+         })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L683-L685` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L34-L38) · [Before (L683-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L683-L685)

```diff
-       _unbindFrameBuffer(pp, ip) {
-         this._renderTarget && pp.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
-           this.onAfterRenderObservable.notifyObservers(ip)
+       loadData(QQ, WQ, XQ) {
+         const wQ = qQ.DDSTools.GetDDSInfo(QQ),
+           TQ = (wQ.isRGB || wQ.isLuminance || wQ.mipmapCount > 1) && WQ.generateMipMaps && Math.max(wQ.width, wQ.height) >> wQ.mipmapCount - 1 === 1;
+         XQ(wQ.width, wQ.height, TQ, wQ.isFourCC, (() => {
+           qQ.DDSTools.UploadDDSLevels(WQ.Uj(), WQ, QQ, wQ, TQ, 1)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L747` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L43) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L747)

```diff
-   42069: (pp, ip, cp) => {
+   42014: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L749-L750` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L45) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L749-L750)

```diff
-       b: () => Yp,
-       f: () => Dp
+       d: () => PQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L752-L760` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L47-L51) · [Before (L752-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L752-L760)

```diff
-     var Op = cp(40342),
-       op = cp(38313),
-       Ip = cp(37349),
-       Sp = cp(40053),
-       xp = cp(40509);
-     const Lp = {
-       positions: [1, 1, -1, 1, -1, -1, 1, -1],
-       indices: [0, 1, 2, 0, 2, 3]
-     };
+     var wQ = XQ(37370),
+       qQ = XQ(37404),
+       TQ = XQ(40250),
+       zQ = XQ(37374),
+       sQ = XQ(37546);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L762-L809` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L53-L54) · [Before (L762-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L762-L809)

```diff
-       constructor(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lp;
-         this._fullscreenViewport = new op.c(0, 0, 1, 1);
-         const cp = ip.positions ?? Lp.positions,
-           Ip = ip.indices ?? Lp.indices;
-         this.engine = pp, this._vertexBuffers = {
-           [Op.j.PositionKind]: new Op.j(pp, cp, Op.j.PositionKind, !1, !1, 2)
-         }, this._indexBuffer = pp.createIndexBuffer(Ip), this._indexBufferLength = Ip.length, this._onContextRestoredObserver = pp.Fy.add((() => {
-           this._indexBuffer = pp.createIndexBuffer(Ip);
-           for (const pp in this._vertexBuffers) {
-             this._vertexBuffers[pp]._rebuild()
-           }
-         }))
-       }
-       setViewport() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
- ... (32 more removed lines; see GitHub link above)
+       constructor(QQ, WQ, XQ, wQ) {
+         this.name = QQ, this.worldAxisForNormal = WQ, this.worldAxisForFileX = XQ, this.worldAxisForFileY = wQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L813-L873` → after: `L58-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L58-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L58-L100) · [Before (L813-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L813-L873)

```diff
-       static RegisterShaderCodeProcessing(pp, ip) {
-         ip ? Dp._CustomShaderCodeProcessing[pp ?? ""] = ip : delete Dp._CustomShaderCodeProcessing[pp ?? ""]
-       }
-       static _GetShaderCodeProcessing(pp) {
-         return Dp._CustomShaderCodeProcessing[pp] ?? Dp._CustomShaderCodeProcessing[""]
-       }
-       get name() {
-         return this.options.name
-       }
-       set name(pp) {
-         this.options.name = pp
-       }
-       isReady() {
-         return this._drawWrapper.effect?.isReady() ?? !1
-       }
-       get drawWrapper() {
- ... (45 more removed lines; see GitHub link above)
+       static _NearestPow2Floor(QQ) {
+         return QQ <= 1 ? 1 : 1 << Math.floor(Math.log2(QQ))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(QQ) {
+         if (!QQ.isCube) return null;
+         QQ.sE()?.Uj().flushFramebuffer();
+         const WQ = QQ.getSize().width,
+           XQ = QQ._sphericalPolynomialTargetSize,
+           wQ = XQ > 0 ? this._NearestPow2Floor(XQ) : 0,
+           qQ = !QQ.noMipmap && !0 === QQ._texture?.generateMipMaps,
+           TQ = wQ > 0 && wQ < WQ && qQ,
+           zQ = TQ ? Math.max(0, Math.round(Math.log2(WQ / wQ))) : 0,
+           sQ = TQ ? Math.max(1, Math.floor(WQ / Math.pow(2, zQ))) : WQ,
+           FQ = QQ.readPixels(0, zQ, void 0, !1),
+           PQ = QQ.readPixels(1, zQ, void 0, !1);
+         let gQ, JQ;
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L875-L882` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L102-L103) · [Before (L875-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L875-L882)

```diff
-       _gatherImports() {}
-       _postConstructor(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           Op = arguments.length > 2 ? arguments[2] : void 0,
-           op = arguments.length > 3 ? arguments[3] : void 0;
-         this._importPromises.length = 0, op && this._importPromises.push(...op);
-         const Ip = this.options.engine.isWebGPU && !Dp.ForceGLSL;
-         this._gatherImports(Ip, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Ip && this._webGPUReady ? cp.e(368).then((() => cp(61499))) : cp.e(358).then((() => cp(61392)))), void 0 !== Op && Op(Ip, t … [truncated]
+       static _AreaElement(QQ, WQ) {
+         return Math.atan2(QQ * WQ, Math.sqrt(QQ * QQ + WQ * WQ + 1))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L884-L898` → after: `L105-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L105-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L105-L124) · [Before (L884-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L884-L898)

```diff
-       updateEffect() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           Op = arguments.length > 3 ? arguments[3] : void 0,
-           op = arguments.length > 4 ? arguments[4] : void 0,
-           Ip = arguments.length > 5 ? arguments[5] : void 0,
-           xp = arguments.length > 6 ? arguments[6] : void 0,
-           Lp = arguments.length > 7 ? arguments[7] : void 0;
-         const Yp = Dp._GetShaderCodeProcessing(this.name);
-         if (Yp?.defineCustomBindings) {
-           const Op = ip?.slice() ?? [];
-           Op.push(...this.options.uniforms);
-           const op = cp?.slice() ?? [];
-           op.push(...this.options.samplers), pp = Yp.defineCustomBindings(this.name, pp, Op, op), ip = Op, cp = op
+       static _DownsampleFace(QQ, WQ, XQ, wQ) {
+         const qQ = QQ instanceof Float32Array ? QQ : Float32Array.from(QQ),
+           TQ = XQ * XQ * wQ,
+           zQ = new Float32Array(TQ),
+           sQ = WQ / XQ,
+           FQ = 1 / (sQ * sQ);
+         for (let gQ = 0; gQ < XQ; gQ++) {
+           const QQ = Math.floor(gQ * sQ),
+             TQ = Math.floor((gQ + 1) * sQ);
+           for (let PQ = 0; PQ < XQ; PQ++) {
+             const JQ = Math.floor(PQ * sQ),
+               rQ = Math.floor((PQ + 1) * sQ),
+               IQ = (gQ * XQ + PQ) * wQ;
+             for (let XQ = 0; XQ < wQ; XQ++) {
+               let sQ = 0;
+               for (let zQ = QQ; zQ < TQ; zQ++)
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L900-L931` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L126-L129) · [Before (L900-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L900-L931)

```diff
-         this.options.defines = pp || "";
-         const Ap = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
-           await Promise.all(this._importPromises), this._shadersLoaded = !0
-         };
-         let Pp;
-         Pp = this.options.extraInitializationsAsync ? async () => {
-           await (Ap?.()), await this.options.extraInitializationsAsync()
-         }: Ap, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
-           vertex: xp ?? this._shaderPath.vertex,
-           fragment: Lp ?? this._shaderPath.fragment
-         }, {
-           attributes: this.options.attributeNames,
-           uniformsNames: ip || this.options.uniforms,
-           uniformBuffersNames: this.options.uniformBuffers,
-           samplers: cp || this.options.samplers,
-           defines: null !== pp ? pp : "",
- ... (16 more removed lines; see GitHub link above)
+         if (QQ instanceof Float32Array) return zQ;
+         const PQ = new(0, QQ.constructor)(TQ);
+         for (let gQ = 0; gQ < TQ; gQ++) PQ[gQ] = zQ[gQ] + .5 | 0;
+         return PQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L933-L990` → after: `L131-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L131-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L131-L142) · [Before (L933-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L933-L990)

```diff
-     }
-     Dp.ForceGLSL = !1, Dp._CustomShaderCodeProcessing = {}
-   },
-   42102: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       Dispose: () => tp,
-       DumpData: () => vp,
-       DumpDataAsync: () => wp,
-       DumpFramebuffer: () => Up,
-       DumpTools: () => Hp,
-       EncodeImageAsync: () => yp,
-       RegisterDumpTools: () => ep
-     });
-     var Op = cp(40203),
-       op = cp(42069),
-       Ip = cp(40304),
- ... (42 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const XQ = WQ > 0 ? this._NearestPow2Floor(WQ) : 0;
+         if (XQ > 0 && QQ.size > XQ) {
+           const WQ = 5 === QQ.format ? 4 : 3,
+             wQ = ["right", "left", "up", "down", "front", "back"],
+             qQ = {};
+           for (const TQ of wQ) qQ[TQ] = this._DownsampleFace(QQ[TQ], QQ.size, XQ, WQ);
+           QQ = {
+             ...QQ,
+             ...qQ,
+             size: XQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L993-L1049` → after: `L145-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L145-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L145-L178) · [Before (L993-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L993-L1049)

```diff
-       }()), await Ap
-     }
-     let Wp = (() => {
-       var pp;
-       let ip, cp = [];
-       return pp = class {
-         static async EncodeImageAsync(pp, ip, cp, Op, op, Sp) {
-           const xp = await Pp(),
-             Lp = xp.dumpEngine;
-           Lp.engine.setSize(ip, cp, !0);
-           const Yp = Lp.engine.createRawTexture(pp, ip, cp, 5, !1, !op, 1);
-           return Lp.renderer.setViewport(), Lp.renderer.applyEffectWrapper(Lp.wrapper), Lp.wrapper.effect._bindTexture("textureSampler", Yp), Lp.renderer.draw(), Yp.dispose(), await new Promise(((pp, ip) => {
-             Ip.i.ToBlob(xp.canvas, (cp => {
-               cp ? pp(cp) : ip(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
-             }), Op, Sp)
-           }))
- ... (41 more removed lines; see GitHub link above)
+         const wQ = new TQ.b;
+         let FQ = 0;
+         const PQ = 2 / QQ.size,
+           gQ = PQ,
+           JQ = .5 * PQ,
+           rQ = JQ - 1;
+         for (let TQ = 0; TQ < 6; TQ++) {
+           const WQ = this._FileFaces[TQ],
+             XQ = QQ[WQ.name];
+           let IQ = rQ;
+           const jQ = 5 === QQ.format ? 4 : 3;
+           for (let TQ = 0; TQ < QQ.size; TQ++) {
+             let BQ = rQ;
+             for (let gQ = 0; gQ < QQ.size; gQ++) {
+               const rQ = WQ.worldAxisForFileX.scale(BQ).add(WQ.worldAxisForFileY.scale(IQ)).add(WQ.worldAxisForNormal);
+               rQ.normalize();
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1051` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L180-L181) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1051)

```diff
-         cp = pp
+         const IQ = 6 * (4 * Math.PI) / 6 / FQ;
+         return wQ.scaleInPlace(IQ), wQ.convertIncidentRadianceToIrradiance(), wQ.convertIrradianceToLambertianRadiance(), TQ.e.FromHarmonics(wQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1085` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L186) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1085)

```diff
-   42080: (pp, ip, cp) => {
+   42012: (QQ, WQ, XQ) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1087-L1089` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L188) · [Before (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1087-L1089)

```diff
-       c: () => Wp,
-       d: () => yp,
-       h: () => Up
+       DDSTools: () => jQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1091-L1177` → after: `L190-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L190-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L190-L195) · [Before (L1091-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1091-L1177)

```diff
-     var Op = cp(40654),
-       op = cp(42087),
-       Ip = cp(40203),
-       Sp = cp(42060),
-       xp = cp(40233),
-       Lp = cp(42094),
-       Yp = cp(40210);
-     class Dp extends Sp.c {
-       getClassName() {
-         return "PassPostProcess"
-       }
-       constructor(pp, ip) {
-         let cp = arguments.length > 4 ? arguments[4] : void 0;
-         const Op = {
-           size: "number" === typeof ip ? ip : void 0,
-           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
- ... (71 more removed lines; see GitHub link above)
+     var wQ = XQ(37404),
+       qQ = XQ(38956),
+       TQ = XQ(42014),
+       zQ = XQ(40337);
+     const sQ = 131072,
+       FQ = 131072;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1179-L1202` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L197-L198) · [Before (L1179-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1179-L1202)

```diff
-     function Wp(pp, ip, cp, Op, op, Ip, xp, Lp) {
-       const Yp = ip.gy();
-       return ip.isReady = !1, op = op ?? ip.samplingMode, Op = Op ?? ip.type, Ip = Ip ?? ip.format, xp = xp ?? ip.width, Lp = Lp ?? ip.height, -1 === Op && (Op = 0), new Promise((Dp => {
-         const Ap = new Sp.c("postprocess", pp, null, null, 1, null, op, Yp, !1, void 0, Op, void 0, null, !1, Ip);
-         Ap.externalTextureSamplerBinding = !0;
-         const Pp = Yp.createRenderTargetTexture({
-           width: xp,
-           height: Lp
-         }, {
-           generateDepthBuffer: !1,
-           generateMipMaps: !1,
-           generateStencilBuffer: !1,
-           samplingMode: op,
-           type: Op,
-           format: Ip
-         });
- ... (8 more removed lines; see GitHub link above)
+     function PQ(QQ) {
+       return QQ.charCodeAt(0) + (QQ.charCodeAt(1) << 8) + (QQ.charCodeAt(2) << 16) + (QQ.charCodeAt(3) << 24)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1204-L1329` → after: `L200-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L200-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L200-L227) · [Before (L1204-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1204-L1329)

```diff
-     async function yp(pp, ip, Ip) {
-       let xp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         Lp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         Yp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Dp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(pp) {
-         if (pp.isReady()) return;
-         if (pp.loadingError) throw new Error(pp.errorObject?.message || `Texture ${pp.name} errored while loading.`);
-         const ip = pp.onLoadObservable;
-         if (ip) return await new Promise((pp => ip.addOnce((() => pp()))));
-         const cp = pp._texture?.onLoadedObservable;
-         if (cp) return await new Promise((pp => cp.addOnce((() => pp()))));
-         throw new Error(`Cannot determine readiness of texture ${pp.name}.`)
-       }(pp);
-       const Pp = pp.getInternalTexture(),
-         Wp = pp.is3D || !!Pp?.is3D,
- ... (110 more removed lines; see GitHub link above)
+     const gQ = PQ("DXT1"),
+       JQ = PQ("DXT3"),
+       rQ = PQ("DXT5"),
+       IQ = PQ("DX10");
+     class jQ {
+       static GetDDSInfo(QQ) {
+         const WQ = new Int32Array(QQ.buffer, QQ.byteOffset, 31),
+           XQ = new Int32Array(QQ.buffer, QQ.byteOffset, 35);
+         let wQ = 1;
+         WQ[2] & sQ && (wQ = Math.max(1, WQ[7]));
+         const qQ = WQ[21],
+           TQ = qQ === IQ ? XQ[32] : 0;
+         let zQ = 0;
+         switch (qQ) {
+           case 113:
+             zQ = 2;
+ ... (12 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1331-L1333` → after: `L229-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L229-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L229-L250) · [Before (L1331-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1331-L1333)

```diff
-             throw Error("Render to texture failed.")
-           } finally {
-             Up.dispose(), yp.dispose()
+         }
+         return {
+           width: WQ[4],
+           height: WQ[3],
+           mipmapCount: wQ,
+           isFourCC: 4 === (4 & WQ[20]),
+           isRGB: 64 === (64 & WQ[20]),
+           isLuminance: (WQ[20] & FQ) === FQ,
+           isCube: 512 === (512 & WQ[28]),
+           isCompressed: qQ === gQ || qQ === JQ || qQ === rQ,
+           dxgiFormat: TQ,
+           textureType: zQ
+         }
+       }
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
+         const sQ = new Float32Array(wQ),
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1335` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L252) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1335)

```diff
-         }(pp, wp, vp, xp, Lp, Dp)
+         return sQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1337-L1344` → after: `L254-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L254-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L254-L264) · [Before (L1337-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1337-L1344)

```diff
-       let tp = await pp.readPixels(xp, Lp);
-       if (!tp) throw new Error(`Failed to read pixels from texture ${pp.name}.`);
-       if (tp instanceof Float32Array) {
-         const pp = new Uint8Array(tp.length);
-         let ip = tp.length;
-         for (; ip--;) {
-           const cp = tp[ip];
-           pp[ip] = Math.round(255 * (0, Ap.Clamp)(cp))
+       static _GetHalfFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
+         if (jQ.StoreLODInAlphaChannel) {
+           const sQ = new Uint16Array(wQ),
+             FQ = new Uint16Array(qQ, XQ);
+           let PQ = 0;
+           for (let XQ = 0; XQ < WQ; XQ++)
+             for (let WQ = 0; WQ < QQ; WQ++) {
+               const wQ = 4 * (WQ + XQ * QQ);
+               sQ[PQ] = FQ[wQ], sQ[PQ + 1] = FQ[wQ + 1], sQ[PQ + 2] = FQ[wQ + 2], sQ[PQ + 3] = (0, zQ.i)(TQ), PQ += 4
+             }
+           return sQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1346-L1358` → after: `L266-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L266-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L266-L276) · [Before (L1346-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1346-L1358)

```diff
-         tp = pp
-       }
-       const Hp = wp * vp,
-         dp = 4 * Hp;
-       if (tp.length !== dp) {
-         const pp = 0 === Hp ? 0 : tp.length / Hp;
-         if (1 === pp || 2 === pp || 3 === pp) {
-           const ip = new Uint8Array(dp);
-           for (let cp = 0, Op = 0, op = 0; cp < Hp; cp++, op += 4) {
-             const cp = tp[Op++];
-             if (1 === pp) {
-               ip[op] = cp, ip[op + 1] = cp, ip[op + 2] = cp, ip[op + 3] = 255;
-               continue
+         return new Uint16Array(qQ, XQ, wQ)
+       }
+       static _GetFloatRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
+         if (jQ.StoreLODInAlphaChannel) {
+           const zQ = new Float32Array(wQ),
+             sQ = new Float32Array(qQ, XQ);
+           let FQ = 0;
+           for (let XQ = 0; XQ < WQ; XQ++)
+             for (let WQ = 0; WQ < QQ; WQ++) {
+               const wQ = 4 * (WQ + XQ * QQ);
+               zQ[FQ] = sQ[wQ], zQ[FQ + 1] = sQ[wQ + 1], zQ[FQ + 2] = sQ[wQ + 2], zQ[FQ + 3] = TQ, FQ += 4
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1366-L1723` → after: `L290-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L290-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L290-L297) · [Before (L1366-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1366-L1723)

```diff
-       return tp
-     }
-     const Up = {
-       CreateResizedCopy: function(pp, ip, cp) {
-         let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const Sp = pp.Gl(),
-           xp = Sp.gy(),
-           Lp = new op.e("resized" + pp.name, {
-             width: ip,
-             height: cp
-           }, Sp, !pp.noMipmap, !0, pp._texture.type, !1, pp.samplingMode, !1);
-         Lp.wrapU = pp.wrapU, Lp.wrapV = pp.wrapV, Lp.uOffset = pp.uOffset, Lp.vOffset = pp.vOffset, Lp.uScale = pp.uScale, Lp.vScale = pp.vScale, Lp.uAng = pp.uAng, Lp.vAng = pp.vAng, Lp.wAng = pp.wAng, Lp.coordinatesIndex = pp.coordinatesIndex, Lp.level = pp.level, Lp.anisotropi … [truncated]
-         const Yp = new Dp("pass", 1, null, Ip ? Op.d.BILINEAR_SAMPLINGMODE : Op.d.NEAREST_SAMPLINGMODE, xp, !1, 0);
-         return Yp.externalTextureSamplerBinding = !0, Yp.onEffectCreatedObservable.addOnce((ip => {
-           ip.executeWhenCompiled((() => {
-             Yp.onApply = function(ip) {
- ... (342 more removed lines; see GitHub link above)
+       static _GetFloatAsUIntRGBAArrayBuffer(QQ, WQ, XQ, qQ, TQ, zQ) {
+         const sQ = new Uint8Array(qQ),
+           FQ = new Float32Array(TQ, XQ);
+         let PQ = 0;
+         for (let gQ = 0; gQ < WQ; gQ++)
+           for (let WQ = 0; WQ < QQ; WQ++) {
+             const XQ = 4 * (WQ + gQ * QQ);
+             sQ[PQ] = 255 * (0, wQ.Clamp)(FQ[XQ]), sQ[PQ + 1] = 255 * (0, wQ.Clamp)(FQ[XQ + 1]), sQ[PQ + 2] = 255 * (0, wQ.Clamp)(FQ[XQ + 2]), jQ.StoreLODInAlphaChannel ? sQ[PQ + 3] = zQ : sQ[PQ + 3] = 255 * (0, wQ.Clamp)(FQ[XQ + 3]), PQ += 4
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1725-L1726` → after: `L299-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L299-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L299-L308) · [Before (L1725-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1725-L1726)

```diff
-           static _Parse(ip, cp, Op, op) {
-             return Yp.c.Parse((() => new pp(ip.name, ip.fragmentUrl, ip.parameters, ip.samplers, ip.options, cp, ip.renderTargetSamplingMode, ip._engine, ip.reusable, ip.defines, ip.textureType, ip.vertexUrl, ip.indexParameters, !1, ip.textureFormat)), ip, Op, op)
+         return sQ
+       }
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(QQ, WQ, XQ, qQ, TQ, sQ) {
+         const FQ = new Uint8Array(qQ),
+           PQ = new Uint16Array(TQ, XQ);
+         let gQ = 0;
+         for (let JQ = 0; JQ < WQ; JQ++)
+           for (let WQ = 0; WQ < QQ; WQ++) {
+             const XQ = 4 * (WQ + JQ * QQ);
+             FQ[gQ] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ])), FQ[gQ + 1] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ + 1])), FQ[gQ + 2] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ + 2])), jQ.StoreLODInAlphaChannel ? FQ[gQ + 3] = sQ : FQ[gQ + 3] = 255 * (0, wQ.Clamp)((0, zQ.d)(PQ[XQ + 3])), gQ … [truncated]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1728-L1964` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L310) · [Before (L1728-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1728-L1964)

```diff
-         }, (() => {
-           const cp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           ip = [(0, Lp.K)()], xp = [(0, Lp.K)()], Ap = [(0, Lp.K)()], yp = [(0, Lp.K)()], Up = [(0, Lp.K)()], vp = [(0, Lp.q)()], tp = [(0, Lp.K)()], Hp = [(0, Lp.K)()], dp = [(0, Lp.K)()], ep = [(0, Lp.K)()], jp = [(0, Lp.K)()], kp = [(0, Lp.K)()], mp = [(0, Lp.K)()], Rp = [(0,  … [truncated]
-             kind: "getter",
-             name: "name",
-             static: !1,
-             private: !1,
-             access: {
-               has: pp => "name" in pp,
-               get: pp => pp.name
-             },
-             metadata: cp
-           }, null, Cp), (0, Op.j)(pp, null, dp, {
-             kind: "getter",
-             name: "alphaMode",
-             static: !1,
- ... (221 more removed lines; see GitHub link above)
+         return FQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1966-L1976` → after: `L312-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L312-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L312-L321) · [Before (L1966-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1966-L1976)

```diff
-       constructor(pp) {
-         let ip = arguments.length > 2 ? arguments[2] : void 0;
-         const cp = {
-           name: pp,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || op.e.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: Ip.FragmentUrl,
-           ...ip
-         };
-         cp.engine || (cp.engine = op.e.LastCreatedEngine), super(cp)
+       static _GetRGBAArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
+         const PQ = new Uint8Array(wQ),
+           gQ = new Uint8Array(qQ, XQ);
+         let JQ = 0;
+         for (let rQ = 0; rQ < WQ; rQ++)
+           for (let WQ = 0; WQ < QQ; WQ++) {
+             const XQ = 4 * (WQ + rQ * QQ);
+             PQ[JQ] = gQ[XQ + TQ], PQ[JQ + 1] = gQ[XQ + zQ], PQ[JQ + 2] = gQ[XQ + sQ], PQ[JQ + 3] = gQ[XQ + FQ], JQ += 4
+           }
+         return PQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1978-L1982` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L323-L324) · [Before (L1978-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1978-L1982)

```diff
-     }
-     Ip.FragmentUrl = "pass";
-     class Sp extends Op.f {
-       _gatherImports(pp, ip) {
-         pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(377).then((() => cp(61565)))]))) : ip.push(Promise.all([cp.e(378).then((() => cp(61570)))])), super._gatherImports(pp, ip)
+       static _ExtractLongWordOrder(QQ) {
+         return 0 === QQ || 255 === QQ || -16777216 === QQ ? 0 : 1 + jQ._ExtractLongWordOrder(QQ >> 8)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1984-L1993` → after: `L326-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L326-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L326-L335) · [Before (L1984-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1984-L1993)

```diff
-       constructor(pp) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: pp,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || op.e.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: Sp.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
+       static _GetRGBArrayBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+         const FQ = new Uint8Array(wQ),
+           PQ = new Uint8Array(qQ, XQ);
+         let gQ = 0;
+         for (let JQ = 0; JQ < WQ; JQ++)
+           for (let WQ = 0; WQ < QQ; WQ++) {
+             const XQ = 3 * (WQ + JQ * QQ);
+             FQ[gQ] = PQ[XQ + TQ], FQ[gQ + 1] = PQ[XQ + zQ], FQ[gQ + 2] = PQ[XQ + sQ], gQ += 3
+           }
+         return FQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1995-L1996` → after: `L337-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L337-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L337-L346) · [Before (L1995-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1995-L1996)

```diff
-       get face() {
-         return this._face
+       static _GetLuminanceArrayBuffer(QQ, WQ, XQ, wQ, qQ) {
+         const TQ = new Uint8Array(wQ),
+           zQ = new Uint8Array(qQ, XQ);
+         let sQ = 0;
+         for (let FQ = 0; FQ < WQ; FQ++)
+           for (let WQ = 0; WQ < QQ; WQ++) {
+             const XQ = WQ + FQ * QQ;
+             TQ[sQ] = zQ[XQ], sQ++
+           }
+         return TQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L1998-L2001` → after: `L348-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L348-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L348-L368) · [Before (L1998-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L1998-L2001)

```diff
-       set face(pp) {
-         if (!(pp < 0 || pp > 5)) switch (this._face = pp, this._face) {
-           case 0:
-             this.updateEffect("#define POSITIVEX");
+       static UploadDDSLevels(QQ, WQ, XQ, wQ, zQ, FQ) {
+         let PQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           BQ = arguments.length > 7 ? arguments[7] : void 0,
+           yQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           VQ = null;
+         wQ.sphericalPolynomial && (VQ = []);
+         const DQ = !!QQ.getCaps().s3tc;
+         WQ.generateMipMaps = zQ;
+         const pQ = new Int32Array(XQ.buffer, XQ.byteOffset, 31);
+         let GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ = 0,
+           hQ = 0,
+           iQ = 1;
+         if (542327876 !== pQ[0]) return void qQ.b.Error("Invalid magic number in DDS header");
+         if (!wQ.isFourCC && !wQ.isRGB && !wQ.isLuminance) return void qQ.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (wQ.isCompressed && !DQ) return void qQ.b.Error("Compressed textures are not supported on this platform.");
+         let cQ = pQ[22];
+ ... (5 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2003-L2004` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L370-L371) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case JQ:
+             iQ = 16, hQ = 33778;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2006-L2007` → after: `L373-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L373-L374) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case rQ:
+             iQ = 16, hQ = 33779;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2009-L2010` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L376-L377) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case 113:
+             AQ = !0, cQ = 64;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2012-L2013` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L379-L380) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case 116:
+             AQ = !0, cQ = 128;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2015-L2016` → after: `L382-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L382-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L382-L452) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case IQ: {
+             vQ += 20;
+             let QQ = !1;
+             switch (wQ.dxgiFormat) {
+               case 10:
+                 AQ = !0, cQ = 64, QQ = !0;
+                 break;
+               case 2:
+                 AQ = !0, cQ = 128, QQ = !0;
+                 break;
+               case 88:
+                 wQ.isRGB = !0, wQ.isFourCC = !1, cQ = 32, QQ = !0
+             }
+             if (QQ) break
+           }
+           default:
+ ... (55 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2020` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/316.js#L468) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/316.js#L2020)

```diff
-     Sp.FragmentUrl = "passCube"
+     jQ.StoreLODInAlphaChannel = !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/317.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/317.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691)

#### 1. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L4)

```diff
-   42115: (pp, ip, cp) => {
+   42034: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L6)

```diff
-       _HDRTextureLoader: () => Dp
+       _ENVTextureLoader: () => HQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L80` → after: `L8-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L8-L37) · [Before (L8-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L8-L80)

```diff
-     var Op = cp(37320);
-     class op {
-       static ConvertPanoramaToCubemap(pp, ip, cp, Op) {
-         let op, Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!pp) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (pp.length != ip * cp * 3) {
-           if (pp.length != ip * cp * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           op = 4
-         } else op = 3;
-         return {
-           front: this.CreateCubemapTexture(Op, this.FACE_FRONT, pp, ip, cp, Ip, Sp, op),
-           back: this.CreateCubemapTexture(Op, this.FACE_BACK, pp, ip, cp, Ip, Sp, op),
-           left: this.CreateCubemapTexture(Op, this.FACE_LEFT, pp, ip, cp, Ip, Sp, op),
-           right: this.CreateCubemapTexture(Op, this.FACE_RIGHT, pp, ip, cp, Ip, Sp, op),
-           up: this.CreateCubemapTexture(Op, this.FACE_UP, pp, ip, cp, Ip, Sp, op),
- ... (57 more removed lines; see GitHub link above)
+     var wQ = XQ(40206),
+       qQ = XQ(37370),
+       TQ = XQ(37404),
+       zQ = XQ(40250),
+       sQ = XQ(40103),
+       FQ = XQ(40253),
+       PQ = (XQ(40355), XQ(42041)),
+       gQ = XQ(38956),
+       JQ = (XQ(42055), XQ(42076), XQ(40331));
+     const rQ = "image/png",
+       IQ = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function jQ(QQ) {
+       const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
+       let XQ = 0;
+       for (let zQ = 0; zQ < IQ.length; zQ++)
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L84-L85` → after: `L41-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L41-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L41-L51) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L84-L85)

```diff
-       let cp, Op = "";
-       for (let op = ip; op < pp.length - ip && (cp = String.fromCharCode(pp[op]), "\n" != cp); op++) Op += cp;
+       const XQ = (WQ = BQ(WQ)).specular;
+       let wQ = Math.log2(WQ.width);
+       if (wQ = Math.round(wQ) + 1, XQ.mipmaps.length !== 6 * wQ) throw new Error(`Unsupported specular mipmaps number "${XQ.mipmaps.length}"`);
+       const qQ = new Array(wQ);
+       for (let TQ = 0; TQ < wQ; TQ++) {
+         qQ[TQ] = new Array(6);
+         for (let wQ = 0; wQ < 6; wQ++) {
+           const zQ = XQ.mipmaps[6 * TQ + wQ];
+           qQ[TQ][wQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + WQ.binaryDataPosition + zQ.position, zQ.length)
+         }
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L89-L91` → after: `L55-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L55-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L55-L123) · [Before (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L89-L91)

```diff
-     function xp(pp) {
-       let ip = Sp(pp, 0);
-       if ("#" != ip[0] || "?" != ip[1]) throw "Bad HDR Format.";
+     function VQ(QQ, WQ) {
+       WQ = BQ(WQ);
+       const XQ = new Array(6),
+         wQ = WQ.irradiance?.irradianceTexture;
+       if (wQ) {
+         if (6 !== wQ.faces.length) throw new Error(`Incorrect irradiance texture faces number "${wQ.faces.length}"`);
+         for (let qQ = 0; qQ < 6; qQ++) {
+           const TQ = wQ.faces[qQ];
+           XQ[qQ] = new Uint8Array(QQ.buffer, QQ.byteOffset + WQ.binaryDataPosition + TQ.position, TQ.length)
+         }
+       }
+       return XQ
+     }
+ 
+     function DQ(QQ, WQ, XQ) {
+       const wQ = (XQ = BQ(XQ)).specular;
+ ... (53 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L94-L109` → after: `L126-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L126-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L126-L213) · [Before (L94-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L94-L109)

```diff
-         op = 0;
-       do {
-         op += ip.length + 1, ip = Sp(pp, op), "FORMAT=32-bit_rle_rgbe" == ip ? Op = !0 : 0 == ip.length && (cp = !0)
-       } while (!cp);
-       if (!Op) throw "HDR Bad header format, unsupported FORMAT";
-       op += ip.length + 1, ip = Sp(pp, op);
-       const Ip = /^-Y (.*) \+X (.*)$/g.exec(ip);
-       if (!Ip || Ip.length < 3) throw "HDR Bad header format, no size";
-       const xp = parseInt(Ip[2]),
-         Lp = parseInt(Ip[1]);
-       if (xp < 8 || xp > 32767) throw "HDR Bad header format, unsupported size";
-       return op += ip.length + 1, {
-         height: Lp,
-         width: xp,
-         dataPosition: op
-       }
+         yQ = null,
+         VQ = null,
+         DQ = null;
+       const GQ = IQ.getCaps();
+       GQ.textureLOD ? IQ._features.supportRenderAndCopyToLodForFloatTextures ? GQ.textureHalfFloatRender && GQ.textureHalfFloatLinearFiltering ? (jQ = !0, QQ.type = 2) : GQ.textureFloatRender && GQ.textureFloatLinearFiltering && (jQ = !0, QQ.type = 1) : jQ = !1 : (jQ = !1, BQ = q … [truncated]
+       let UQ = 0;
+       if (jQ) IQ.isWebGPU ? (UQ = 1, await XQ.e(351).then((() => XQ(61658)))) : await XQ.e(333).then((() => XQ(61663))), yQ = new PQ.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, IQ, !1, void 0, QQ.type, void 0, null, !1, void 0, UQ), QQ._isRGBD = !1, QQ.invertY = !1, VQ  … [truncated]
+         generateDepthBuffer: !1,
+         generateMipMaps: !0,
+         generateStencilBuffer: !1,
+         samplingMode: 3,
+         type: QQ.type,
+         format: 5
+       });
+       else if (QQ._isRGBD = !0, QQ.invertY = !0, BQ) {
+         const WQ = 3;
+ ... (72 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L113-L152` → after: `L217-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L217-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L217-L222) · [Before (L113-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L113-L152)

```diff
-       return function(pp, ip) {
-         let cp = ip.height;
-         const Op = ip.width;
-         let op, Sp, xp, Lp, Dp, Ap, Pp, Wp, yp = ip.dataPosition;
-         const Up = new ArrayBuffer(4 * Op),
-           wp = new Uint8Array(Up),
-           vp = new ArrayBuffer(ip.width * ip.height * 4 * 3),
-           tp = new Float32Array(vp);
-         for (; cp > 0;) {
-           if (op = pp[yp++], Sp = pp[yp++], xp = pp[yp++], Lp = pp[yp++], 2 != op || 2 != Sp || 128 & xp || ip.width < 8 || ip.width > 32767) return Yp(pp, ip);
-           if ((xp << 8 | Lp) != Op) throw "HDR Bad header format, wrong scan line width";
-           for (Ap = 0, Wp = 0; Wp < 4; Wp++)
-             for (Pp = (Wp + 1) * Op; Ap < Pp;)
-               if (op = pp[yp++], Sp = pp[yp++], op > 128) {
-                 if (Dp = op - 128, 0 == Dp || Dp > Pp - Ap) throw "HDR Bad Format, bad scanline data (run)";
-                 for (; Dp-- > 0;) wp[Ap++] = Sp
- ... (24 more removed lines; see GitHub link above)
+       const XQ = (WQ = BQ(WQ)).irradiance;
+       if (!XQ) return;
+       const wQ = new zQ.e;
+       qQ.s.FromArrayToRef(XQ.x, 0, wQ.x), qQ.s.FromArrayToRef(XQ.y, 0, wQ.y), qQ.s.FromArrayToRef(XQ.z, 0, wQ.z), qQ.s.FromArrayToRef(XQ.xx, 0, wQ.xx), qQ.s.FromArrayToRef(XQ.yy, 0, wQ.yy), qQ.s.FromArrayToRef(XQ.zz, 0, wQ.zz), qQ.s.FromArrayToRef(XQ.yz, 0, wQ.yz), qQ.s.FromArray … [truncated]
+     }
+     var dQ = XQ(42083);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L157-L169` → after: `L227-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L227-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/317.js#L227-L333) · [Before (L157-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/317.js#L157-L169)

```diff
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(pp, ip, cp) {
-         const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
-           op = xp(Op),
-           Ip = Lp(Op, op),
-           Sp = op.width * op.height,
-           Yp = new Float32Array(4 * Sp);
-         for (let xp = 0; xp < Sp; xp += 1) Yp[4 * xp] = Ip[3 * xp], Yp[4 * xp + 1] = Ip[3 * xp + 1], Yp[4 * xp + 2] = Ip[3 * xp + 2], Yp[4 * xp + 3] = 1;
-         cp(op.width, op.height, ip.generateMipMaps, !1, (() => {
-           const pp = ip.gy();
-           ip.type = 1, ip.format = 5, ip._gammaSpace = !1, pp._uploadDataToTextureDirectly(ip, Yp)
+       loadCubeData(QQ, WQ, XQ, wQ, qQ) {
+         if (Array.isArray(QQ)) return;
+         const TQ = jQ(QQ);
+         if (TQ) {
+           WQ.width = TQ.width, WQ.height = TQ.width;
+           try {
+             (0, dQ.b)(), vQ(WQ, TQ), DQ(WQ, QQ, TQ).then((() => {
+               WQ.isReady = !0, WQ.onLoadedObservable.notifyObservers(WQ), WQ.onLoadedObservable.clear(), wQ && wQ()
+             }), (QQ => {
+               qQ?.("Can not upload environment levels", QQ)
+             }))
+           } catch (zQ) {
+             qQ?.("Can not upload environment file", zQ)
+           }
+         } else qQ && qQ("Can not parse the environment file", null)
+       }
+ ... (91 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/318.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/318.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L4)

```diff
-   42119: (pp, ip, cp) => {
+   42021: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L6)

```diff
-       _KTXTextureLoader: () => yp
+       _IESTextureLoader: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L8-L51` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L8) · [Before (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L51)

```diff
-     var Op = cp(38905);
-     class op {
-       constructor(pp, ip) {
-         if (this.data = pp, this.isInvalid = !1, !op.IsValid(pp)) return this.isInvalid = !0, void Op.e.Error("texture missing KTX identifier");
-         const cp = Uint32Array.BYTES_PER_ELEMENT,
-           Ip = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * cp),
-           Sp = 67305985 === Ip.getUint32(0, !0);
-         return this.glType = Ip.getUint32(1 * cp, Sp), this.glTypeSize = Ip.getUint32(2 * cp, Sp), this.glFormat = Ip.getUint32(3 * cp, Sp), this.glInternalFormat = Ip.getUint32(4 * cp, Sp), this.glBaseInternalFormat = Ip.getUint32(5 * cp, Sp), this.pixelWidth = Ip.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(pp, ip) {
-         switch (this.loadType) {
-           case op.COMPRESSED_2D:
-             this._upload2DCompressedLevels(pp, ip);
-           case op.TEX_2D:
-           case op.COMPRESSED_3D:
-           case op.TEX_3D:
- ... (28 more removed lines; see GitHub link above)
+     var wQ = XQ(37404);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L53-L55` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L10-L11) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L53-L55)

```diff
-     function Dp(pp, ip) {
-       const cp = ip?.jsDecoderModule || KTX2DECODER;
-       pp && (pp.wasmBaseUrl && (cp.Transcoder.WasmBaseUrl = pp.wasmBaseUrl), pp.wasmUASTCToASTC && (cp.LiteTranscoder_UASTC_ASTC.WasmModuleURL = pp.wasmUASTCToASTC), pp.wasmUASTCToBC7 && (cp.LiteTranscoder_UASTC_BC7.WasmModuleURL = pp.wasmUASTCToBC7), pp.wasmUASTCToRGBA_UNORM &&  … [truncated]
+     function qQ(QQ) {
+       return QQ.split(" ").filter((QQ => "" !== QQ)).map((QQ => parseFloat(QQ)))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L58-L241` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L14-L17) · [Before (L58-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L58-L241)

```diff
-     function Ap(pp) {
-       let ip;
-       "undefined" === typeof pp && "undefined" !== typeof KTX2DECODER && (pp = KTX2DECODER), onmessage = cp => {
-         if (cp.data) switch (cp.data.action) {
-           case "init": {
-             const Op = cp.data.urls;
-             Op && (Op.jsDecoderModule && "undefined" === typeof pp && (importScripts(Op.jsDecoderModule), pp = KTX2DECODER), Dp(Op)), cp.data.wasmBinaries && Dp(void 0, {
-               ...cp.data.wasmBinaries,
-               jsDecoderModule: pp
-             }), ip = new pp.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             pp.KTX2Decoder.DefaultDecoderOptions = cp.data.options;
- ... (168 more removed lines; see GitHub link above)
+     function TQ(QQ, WQ, XQ) {
+       for (; XQ.length !== WQ;) {
+         const WQ = qQ(QQ.lines[QQ.index++]);
+         XQ.push(...WQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L245-L290` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L21-L44) · [Before (L245-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L245-L290)

```diff
-     function Wp(pp) {
-       switch (pp) {
-         case 35916:
-           return 33776;
-         case 35918:
-           return 33778;
-         case 35919:
-           return 33779;
-         case 37493:
-           return 37492;
-         case 37497:
-           return 37496;
-         case 37495:
-           return 37494;
-         case 37840:
-           return 37808;
- ... (30 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ, XQ) {
+       let qQ = 0,
+         TQ = 0,
+         zQ = 0,
+         sQ = 0,
+         FQ = 0,
+         PQ = 0;
+       for (let wQ = 0; wQ < QQ.numberOfHorizontalAngles - 1; wQ++)
+         if (XQ < QQ.horizontalAngles[wQ + 1] || wQ === QQ.numberOfHorizontalAngles - 2) {
+           TQ = wQ, zQ = QQ.horizontalAngles[wQ], sQ = QQ.horizontalAngles[wQ + 1];
+           break
+         } for (let wQ = 0; wQ < QQ.numberOfVerticalAngles - 1; wQ++)
+         if (WQ < QQ.verticalAngles[wQ + 1] || wQ === QQ.numberOfVerticalAngles - 2) {
+           qQ = wQ, FQ = QQ.verticalAngles[wQ], PQ = QQ.verticalAngles[wQ + 1];
+           break
+         } const gQ = sQ - zQ,
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L366-L374` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L50-L51) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L366-L374)

```diff
-       loadCubeData(pp, ip, cp, Op) {
-         if (Array.isArray(pp)) return;
-         ip._invertVScale = !ip.invertY;
-         const Ip = ip.gy(),
-           Sp = new op(pp, 6),
-           xp = Wp(Sp.glInternalFormat);
-         null !== xp ? (ip.format = xp, ip._useSRGBBuffer = Ip._getUseSRGBBuffer(!0, !ip.generateMipMaps), ip._gammaSpace = !0) : ip.format = Sp.glInternalFormat;
-         const Lp = Sp.numberOfMipmapLevels > 1 && ip.generateMipMaps;
-         Ip._unpackFlipY(!0), Sp.uploadLevels(ip, ip.generateMipMaps), ip.width = Sp.pixelWidth, ip.height = Sp.pixelHeight, Ip._setCubeMapTextureParams(ip, Lp, Sp.numberOfMipmapLevels - 1), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), … [truncated]
+       loadCubeData() {
+         throw ".ies not supported in Cube."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L376-L424` → after: `L53-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L53-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/318.js#L53-L98) · [Before (L376-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/318.js#L376-L424)

```diff
-       loadData(pp, ip, cp, Ip) {
-         if (op.IsValid(pp)) {
-           ip._invertVScale = !ip.invertY;
-           const Op = new op(pp, 1),
-             Ip = Wp(Op.glInternalFormat);
-           null !== Ip ? (ip.format = Ip, ip._useSRGBBuffer = ip.gy()._getUseSRGBBuffer(!0, !ip.generateMipMaps), ip._gammaSpace = !0) : ip.format = Op.glInternalFormat, cp(Op.pixelWidth, Op.pixelHeight, ip.generateMipMaps, !0, (() => {
-             Op.uploadLevels(ip, ip.generateMipMaps)
-           }), Op.isInvalid)
-         } else if (Pp.IsValid(pp)) {
-           new Pp(ip.gy())._uploadAsync(pp, ip, Ip).then((() => {
-             cp(ip.width, ip.height, ip.generateMipMaps, !0, (() => {}), !1)
-           }), (pp => {
-             Op.e.Warn(`Failed to load KTX2 texture data: ${pp.message}`), cp(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else Op.e.Error("texture missing KTX identifier"), cp(0, 0, !1, !1, (() => {}), !0)
-       }
- ... (33 more removed lines; see GitHub link above)
+       loadData(QQ, WQ, XQ) {
+         const wQ = function(QQ) {
+           const WQ = {
+               lines: new TextDecoder("utf-8").decode(QQ).split("\n"),
+               index: 0
+             },
+             XQ = {
+               version: WQ.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (WQ.index = 1; WQ.lines.length > 0 && !WQ.lines[WQ.index].includes("TILT=");) WQ.index++;
+           WQ.lines[WQ.index].includes("INCLUDE"), WQ.index++;
+ ... (30 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/319.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/319.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L4)

```diff
-   42125: (pp, ip, cp) => {
+   42032: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L6)

```diff
-       _TGATextureLoader: () => xp
+       _BasisTextureLoader: () => DQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L8` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L8-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L8)

```diff
-     var Op = cp(38905);
+     var wQ, qQ = XQ(40357),
+       TQ = XQ(38956),
+       zQ = XQ(40724),
+       sQ = XQ(40103);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L10-L25` → after: `L13-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L13-L23) · [Before (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L10-L25)

```diff
-     function op(pp) {
-       let ip = 0;
-       return {
-         id_length: pp[ip++],
-         colormap_type: pp[ip++],
-         image_type: pp[ip++],
-         colormap_index: pp[ip++] | pp[ip++] << 8,
-         colormap_length: pp[ip++] | pp[ip++] << 8,
-         colormap_size: pp[ip++],
-         origin: [pp[ip++] | pp[ip++] << 8, pp[ip++] | pp[ip++] << 8],
-         width: pp[ip++] | pp[ip++] << 8,
-         height: pp[ip++] | pp[ip++] << 8,
-         pixel_size: pp[ip++],
-         flags: pp[17]
-       }
-     }
+     function FQ() {
+       const QQ = 0,
+         WQ = 1,
+         XQ = 2,
+         wQ = 3,
+         qQ = 6,
+         TQ = 8,
+         zQ = 9,
+         sQ = 10,
+         FQ = 14;
+       let PQ = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L27-L66` → after: `L25-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L25-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L25-L58) · [Before (L27-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L27-L66)

```diff
-     function Ip(pp, ip) {
-       if (ip.length < 19) return void Op.e.Error("Unable to load TGA file - Not enough data to contain header");
-       let cp = 18;
-       const Ip = op(ip);
-       if (Ip.id_length + cp > ip.length) return void Op.e.Error("Unable to load TGA file - Not enough data");
-       cp += Ip.id_length;
-       let xp, Lp = !1,
-         Yp = !1,
-         Dp = !1;
-       switch (Ip.image_type) {
-         case 9:
-           Lp = !0;
-         case 1:
-           Yp = !0;
-           break;
-         case 10:
- ... (24 more removed lines; see GitHub link above)
+       function gQ(QQ, WQ, XQ, wQ, qQ) {
+         const TQ = QQ.getImageTranscodedSizeInBytes(WQ, XQ, wQ);
+         let zQ = new Uint8Array(TQ);
+         if (!QQ.transcodeImage(zQ, WQ, XQ, wQ, 1, 0)) return null;
+         if (qQ) {
+           zQ = function(QQ, WQ, XQ, wQ) {
+             const qQ = new Uint16Array(4),
+               TQ = new Uint16Array(XQ * wQ),
+               zQ = XQ / 4,
+               sQ = wQ / 4;
+             for (let FQ = 0; FQ < sQ; FQ++)
+               for (let wQ = 0; wQ < zQ; wQ++) {
+                 const sQ = WQ + 8 * (FQ * zQ + wQ);
+                 qQ[0] = QQ[sQ] | QQ[sQ + 1] << 8, qQ[1] = QQ[sQ + 2] | QQ[sQ + 3] << 8, qQ[2] = (2 * (31 & qQ[0]) + 1 * (31 & qQ[1])) / 3 | (2 * (2016 & qQ[0]) + 1 * (2016 & qQ[1])) / 3 & 2016 | (2 * (63488 & qQ[0]) + 1 * (63488 & qQ[1])) / 3 & 63488, qQ[3] = (2 * (31 & qQ[1]) +  … [truncated]
+                 for (let WQ = 0; WQ < 4; WQ++) {
+                   const zQ = QQ[sQ + 4 + WQ];
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L68-L86` → after: `L60-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L60-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L60-L135) · [Before (L68-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L68-L86)

```diff
-       } else xp = ip.subarray(cp, cp + (Yp ? Ip.width * Ip.height : Pp));
-       switch ((48 & Ip.flags) >> 4) {
-         default:
-         case 2:
-           yp = 0, wp = 1, Hp = Ip.width, Up = 0, vp = 1, tp = Ip.height;
-           break;
-         case 0:
-           yp = 0, wp = 1, Hp = Ip.width, Up = Ip.height - 1, vp = -1, tp = -1;
-           break;
-         case 3:
-           yp = Ip.width - 1, wp = -1, Hp = -1, Up = 0, vp = 1, tp = Ip.height;
-           break;
-         case 1:
-           yp = Ip.width - 1, wp = -1, Hp = -1, Up = Ip.height - 1, vp = -1, tp = -1
-       }
-       const dp = "_getImageData" + (Dp ? "Grey" : "") + Ip.pixel_size + "bits",
- ... (3 more removed lines; see GitHub link above)
+           PQ || (PQ = BASIS({
+             wasmBinary: JQ.data.wasmBinary
+           })), null !== PQ && PQ.then((QQ => {
+             BASIS = QQ, QQ.initializeBasis(), postMessage({
+               action: "init"
+             })
+           }))
+         } else if ("transcode" === JQ.data.action) {
+           const PQ = JQ.data.config,
+             rQ = JQ.data.imageData,
+             IQ = new BASIS.BasisFile(rQ),
+             jQ = function(QQ) {
+               const WQ = QQ.getHasAlpha(),
+                 XQ = QQ.getNumImages(),
+                 wQ = [];
+               for (let qQ = 0; qQ < XQ; qQ++) {
+ ... (60 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L88-L98` → after: `L137-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L137-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L137-L233) · [Before (L88-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L88-L98)

```diff
-       GetTGAHeader: op,
-       UploadContent: Ip,
-       _getImageData8bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
-         const Yp = cp,
-           Dp = ip,
-           Ap = pp.width,
-           Pp = pp.height;
-         let Wp, yp, Up, wp = 0;
-         const vp = new Uint8Array(Ap * Pp * 4);
-         for (Up = Op; Up !== Ip; Up += op)
-           for (yp = Sp; yp !== Lp; yp += xp, wp++) Wp = Yp[wp], vp[4 * (yp + Ap * Up) + 3] = 255, vp[4 * (yp + Ap * Up) + 2] = Dp[3 * Wp + 0], vp[4 * (yp + Ap * Up) + 1] = Dp[3 * Wp + 1], vp[4 * (yp + Ap * Up) + 0] = Dp[3 * Wp + 2];
+       JSModuleURL: `${qQ.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${qQ.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
+     };
+     let gQ = null,
+       JQ = null,
+       rQ = 0;
+     const IQ = async () => (gQ || (gQ = new Promise(((QQ, WQ) => {
+       JQ ? QQ(JQ) : qQ.g.LoadFileAsync(qQ.g.GetBabylonScriptURL(PQ.WasmModuleURL)).then((XQ => {
+         if ("function" !== typeof URL) return WQ("Basis transcoder requires an environment with a URL constructor");
+         const wQ = URL.createObjectURL(new Blob([`(${FQ})()`], {
+           type: "application/javascript"
+         }));
+         JQ = new Worker(wQ), async function(QQ, WQ, XQ) {
+           return await new Promise(((wQ, TQ) => {
+             const zQ = WQ => {
+               "init" === WQ.data.action ? (QQ.removeEventListener("message", zQ), wQ(QQ)) : "error" === WQ.data.action && TQ(WQ.data.error || "error initializing worker")
+ ... (81 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L101-L156` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L236-L237) · [Before (L101-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L101-L156)

```diff
-       _getImageData16bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
-         const Yp = cp,
-           Dp = pp.width,
-           Ap = pp.height;
-         let Pp, Wp, yp, Up = 0;
-         const wp = new Uint8Array(Dp * Ap * 4);
-         for (yp = Op; yp !== Ip; yp += op)
-           for (Wp = Sp; Wp !== Lp; Wp += xp, Up += 2) {
-             Pp = Yp[Up + 0] + (Yp[Up + 1] << 8);
-             const pp = 255 * ((31744 & Pp) >> 10) / 31 | 0,
-               ip = 255 * ((992 & Pp) >> 5) / 31 | 0,
-               cp = 255 * (31 & Pp) / 31 | 0;
-             wp[4 * (Wp + Dp * yp) + 0] = pp, wp[4 * (Wp + Dp * yp) + 1] = ip, wp[4 * (Wp + Dp * yp) + 2] = cp, wp[4 * (Wp + Dp * yp) + 3] = 32768 & Pp ? 0 : 255
-           }
-         return wp
-       },
- ... (40 more removed lines; see GitHub link above)
+       TranscodeAsync: jQ,
+       LoadTextureFromTranscodeResult: yQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L162-L163` → after: `L243-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L243-L261) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L162-L163)

```diff
-       loadCubeData() {
-         throw ".env not supported in Cube."
+       loadCubeData(QQ, WQ, XQ, wQ, TQ) {
+         if (Array.isArray(QQ)) return;
+         const zQ = WQ.Uj().getCaps(),
+           sQ = {
+             supportedCompressionFormats: {
+               etc1: !!zQ.etc1,
+               s3tc: !!zQ.s3tc,
+               pvrtc: !!zQ.pvrtc,
+               etc2: !!zQ.etc2,
+               astc: !!zQ.astc,
+               bc7: !!zQ.bptc
+             }
+           };
+         jQ(QQ, sQ).then((QQ => {
+           const XQ = QQ.fileInfo.images[0].levels.length > 1 && WQ.generateMipMaps;
+           yQ(WQ, QQ), WQ.Uj()._setCubeMapTextureParams(WQ, XQ), WQ.isReady = !0, WQ.onLoadedObservable.notifyObservers(WQ), WQ.onLoadedObservable.clear(), wQ && wQ()
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L166-L169` → after: `L264-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L264-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/319.js#L264-L282) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/319.js#L166-L169)

```diff
-         const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
-           Sp = op(Op);
-         cp(Sp.width, Sp.height, ip.generateMipMaps, !1, (() => {
-           Ip(ip, Op)
+         const wQ = WQ.Uj().getCaps(),
+           TQ = {
+             supportedCompressionFormats: {
+               etc1: !!wQ.etc1,
+               s3tc: !!wQ.s3tc,
+               pvrtc: !!wQ.pvrtc,
+               etc2: !!wQ.etc2,
+               astc: !!wQ.astc,
+               bc7: !!wQ.bptc
+             }
+           };
+         jQ(QQ, TQ).then((QQ => {
+           const wQ = QQ.fileInfo.images[0].levels[0],
+             qQ = QQ.fileInfo.images[0].levels.length > 1 && WQ.generateMipMaps;
+           XQ(wQ.width, wQ.height, qQ, -1 !== QQ.format, (() => {
+             yQ(WQ, QQ)
+ ... (3 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/320.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/320.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68)

#### 1. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L7)

```diff
-   42134: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       ReadExrDataAsync: () => Wi,
-       _ExrTextureLoader: () => Pi
+   42064: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => VQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L9-L132` → after: `L8-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L8-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L8-L49) · [Before (L9-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L9-L132)

```diff
-     var Op = cp(38905),
-       op = cp(37356),
-       Ip = cp(40276);
-     const Sp = 4,
-       xp = 4,
-       Lp = 1,
-       Yp = 2,
-       Dp = 8,
-       Ap = 65536,
-       Pp = Ap >> 3,
-       Wp = 14,
-       yp = 65537,
-       Up = 1 << Wp,
-       wp = Up - 1,
-       vp = 59,
-       tp = 63,
- ... (108 more removed lines; see GitHub link above)
+     var wQ = XQ(37399),
+       qQ = XQ(37370),
+       TQ = XQ(40724),
+       zQ = XQ(40406),
+       sQ = XQ(40206),
+       FQ = XQ(38956),
+       PQ = XQ(40400),
+       gQ = XQ(40422),
+       JQ = XQ(37379),
+       rQ = XQ(40164),
+       IQ = XQ(40371),
+       jQ = XQ(40470);
+     class BQ {
+       get renderList() {
+         return this._renderList
+       }
+ ... (26 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L134-L163` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L51) · [Before (L134-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L134-L163)

```diff
-           }(pp, ip);
-         case "lineOrder":
-           return function(pp, ip) {
-             const cp = Rp(pp, ip);
-             return ep[cp]
-           }(pp, ip);
-         case "float":
-           return Ep(pp, ip);
-         case "v2f":
-           return function(pp, ip) {
-             return [Ep(pp, ip), Ep(pp, ip)]
-           }(pp, ip);
-         case "v3f":
-           return function(pp, ip) {
-             return [Ep(pp, ip), Ep(pp, ip), Ep(pp, ip)]
-           }(pp, ip);
- ... (14 more removed lines; see GitHub link above)
+         }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L165-L170` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L53-L54) · [Before (L165-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L165-L170)

```diff
-     }
- 
-     function Jp(pp) {
-       for (let ip = 1; ip < pp.length; ip++) {
-         const cp = pp[ip - 1] + pp[ip] - 128;
-         pp[ip] = cp
+       get renderPassIds() {
+         return this._renderPassIds
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L172-L213` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L56-L57) · [Before (L172-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L172-L213)

```diff
-     }
- 
-     function Bp(pp, ip) {
-       let cp = 0,
-         Op = Math.floor((pp.length + 1) / 2),
-         op = 0;
-       const Ip = pp.length - 1;
-       for (; !(op > Ip) && (ip[op++] = pp[cp++], !(op > Ip));) ip[op++] = pp[Op++]
-     }! function(pp) {
-       pp[pp.NO_COMPRESSION = 0] = "NO_COMPRESSION", pp[pp.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", pp[pp.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", pp[pp.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", pp[pp.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", pp[pp.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(dp || (dp = {})),
-     function(pp) {
-       pp[pp.INCREASING_Y = 0] = "INCREASING_Y", pp[pp.DECREASING_Y = 1] = "DECREASING_Y"
-     }(ep || (ep = {}));
-     const Np = 20000630;
- 
- ... (26 more removed lines; see GitHub link above)
+       get currentRefreshId() {
+         return this._currentRefreshId
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L215-L224` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L59-L60) · [Before (L215-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L215-L224)

```diff
-     }
-     const fp = 32768,
-       bp = 65535;
- 
-     function hp(pp, ip, cp, Op, op) {
-       for (; cp < pp;) ip = ip << 8 | Mp(Op, op), cp += 8;
-       return {
-         l: ip >> (cp -= pp) & (1 << pp) - 1,
-         c: ip,
-         lc: cp
+       getActiveMeshes() {
+         return this._activeMeshes
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L226-L231` → after: `L62-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L62-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L62-L69) · [Before (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L226-L231)

```diff
-     }
- 
-     function ap(pp, ip, cp, Op) {
-       return {
-         c: pp = pp << 8 | Mp(cp, Op),
-         lc: ip += 8
+       setMaterialForRendering(QQ, WQ) {
+         let XQ;
+         XQ = Array.isArray(QQ) ? QQ : [QQ];
+         for (let wQ = 0; wQ < XQ.length; ++wQ)
+           for (let QQ = 0; QQ < this.options.numPasses; ++QQ) {
+             let qQ = XQ[wQ];
+             XQ[wQ].pE && (qQ = XQ[wQ].bqQ), qQ.setMaterialForRenderPass(this._renderPassIds[QQ], void 0 !== WQ ? Array.isArray(WQ) ? WQ[QQ] : WQ : void 0)
+           }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L233-L239` → after: `L71-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L71-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L71-L159) · [Before (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L233-L239)

```diff
-     }
- 
-     function np(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
-       if (pp == ip) {
-         if (Op < 8) {
-           const pp = ap(cp, Op, op, Ip);
-           cp = pp.c, Op = pp.lc
+       _freezeActiveMeshes(QQ) {
+         this._freezeActiveMeshesCancel = (0, rQ.e)((() => this._checkReadiness()), (() => {
+           if (this._freezeActiveMeshesCancel = null, QQ)
+             for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
+           this._prepareRenderingManager(0, !0), this._isFrozen = !0
+         }), ((QQ, WQ) => {
+           this._freezeActiveMeshesCancel = null, WQ ? (FQ.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), QQ && FQ.b.Error(QQ)) : (FQ.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), QQ && (FQ.b.E … [truncated]
+         }))
+       }
+       _unfreezeActiveMeshes() {
+         this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
+         for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._unFreeze();
+         this._isFrozen = !1
+       }
+       constructor(QQ, WQ, XQ) {
+         this._unObserveRenderList = null, this._renderListHasChanged = (QQ, WQ) => {
+ ... (73 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L241-L251` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L161) · [Before (L241-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L241-L251)

```diff
-         let pp = cp >> (Op -= 8);
-         if (pp = new Uint8Array([pp])[0], xp.value + pp > Lp) return null;
-         const ip = Sp[xp.value - 1];
-         for (; pp-- > 0;) Sp[xp.value++] = ip
-       } else {
-         if (!(xp.value < Lp)) return null;
-         Sp[xp.value++] = pp
-       }
-       return {
-         c: cp,
-         lc: Op
+         this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L253-L275` → after: `L163-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L163-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L163-L181) · [Before (L253-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L253-L275)

```diff
-     }
-     const Fp = new Array(59);
- 
-     function gp(pp, ip, cp, Op, op, Ip) {
-       const Sp = ip;
-       let xp = 0,
-         Lp = 0;
-       for (; Op <= op; Op++) {
-         if (Sp.value - ip.value > cp) return;
-         let Yp = hp(6, xp, Lp, pp, Sp);
-         const Dp = Yp.l;
-         if (xp = Yp.c, Lp = Yp.lc, Ip[Op] = Dp, Dp == tp) {
-           if (Sp.value - ip.value > cp) throw new Error("Error in HufUnpackEncTable");
-           Yp = hp(8, xp, Lp, pp, Sp);
-           let Dp = Yp.l + Hp;
-           if (xp = Yp.c, Lp = Yp.lc, Op + Dp > op + 1) throw new Error("Error in HufUnpackEncTable");
- ... (7 more removed lines; see GitHub link above)
+       initRender(QQ, WQ) {
+         const XQ = this.activeCamera ?? this._scene.activeCamera;
+         this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers … [truncated]
+       }
+       finishRender() {
+         const QQ = this._scene;
+         this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (QQ.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), QQ._activeCamera = this._currentSceneCamera, this._currentSceneCamera  … [truncated]
+       }
+       render() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const XQ = this._engine.currentRenderPassId;
+         this._engine.currentRenderPassId = this._renderPassIds[QQ], this.onBeforeRenderObservable.notifyObservers(QQ);
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(QQ);
+         else {
+           const WQ = this._prepareRenderingManager(QQ),
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L277-L283` → after: `L183-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L183-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L183-L227) · [Before (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L277-L283)

```diff
-       }! function(pp) {
-         for (let cp = 0; cp <= 58; ++cp) Fp[cp] = 0;
-         for (let cp = 0; cp < yp; ++cp) Fp[pp[cp]] += 1;
-         let ip = 0;
-         for (let cp = 58; cp > 0; --cp) {
-           const pp = ip + Fp[cp] >> 1;
-           Fp[cp] = ip, ip = pp
+         WQ || this.onAfterRenderObservable.notifyObservers(QQ), this._engine.currentRenderPassId = XQ
+       }
+       _checkReadiness() {
+         const QQ = this._scene,
+           WQ = this._engine.currentRenderPassId;
+         let XQ = !0;
+         QQ.getViewMatrix() || QQ.updateTransformMatrix();
+         const wQ = this.options.numPasses;
+         for (let qQ = 0; qQ < wQ && XQ; qQ++) {
+           const WQ = this.renderList ? this.renderList : QQ.frameGraph ? QQ.meshes : QQ.getActiveMeshes().data,
+             TQ = this.renderList || QQ.frameGraph ? WQ.length : QQ.getActiveMeshes().length;
+           this._engine.currentRenderPassId = this._renderPassIds[qQ], this.onBeforeRenderObservable.notifyObservers(qQ);
+           let zQ = null,
+             sQ = TQ;
+           this.getCustomRenderList && (zQ = this.getCustomRenderList(qQ, WQ, TQ), zQ && (sQ = zQ.length)), zQ || (zQ = WQ), this.options.doNotChangeAspectRatio || QQ.updateTransformMatrix(!0);
+           for (let QQ = 0; QQ < sQ && XQ; ++QQ) {
+ ... (29 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L285-L287` → after: `L229-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L229-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L229-L241) · [Before (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L285-L287)

```diff
-         for (let cp = 0; cp < yp; ++cp) {
-           const ip = pp[cp];
-           ip > 0 && (pp[cp] = ip | Fp[ip]++ << 6)
+         return this._engine.currentRenderPassId = WQ, XQ
+       }
+       _prepareRenderingManager() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const XQ = this._scene;
+         let wQ, qQ, TQ = null;
+         const zQ = this.renderList ? this.renderList : XQ.frameGraph ? XQ.meshes : XQ.getActiveMeshes().data,
+           sQ = this.renderList || XQ.frameGraph ? zQ.length : XQ.getActiveMeshes().length;
+         if (this.getCustomRenderList && (TQ = this.getCustomRenderList(QQ, zQ, sQ)), TQ) wQ = TQ.length, qQ = this.forceLayerMaskCheck;
+         else {
+           if (this._defaultRenderListPrepared && !WQ && !this._engine.isWebGPU) return zQ;
+           this._defaultRenderListPrepared = !0, TQ = zQ, wQ = sQ, qQ = !this.renderList || this.forceLayerMaskCheck
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L289-L332` → after: `L243-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L243-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L243-L251) · [Before (L289-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L289-L332)

```diff
-       }(Ip)
-     }
- 
-     function Gp(pp) {
-       return 63 & pp
-     }
- 
-     function rp(pp) {
-       return pp >> 6
-     }
- 
-     function Zp(pp, ip, cp, Op, op, Ip) {
-       const Sp = cp.value,
-         xp = mp(ip, cp),
-         Lp = mp(ip, cp);
-       cp.value += 4;
- ... (28 more removed lines; see GitHub link above)
+         const FQ = XQ.activeCamera,
+           PQ = this.cameraForLOD ?? FQ,
+           gQ = XQ.getBoundingBoxRenderer?.();
+         if (XQ._activeMeshesFrozen && this._isFrozen) {
+           if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && gQ) {
+             gQ.reset();
+             for (let QQ = 0; QQ < this._activeBoundingBoxes.length; QQ++) {
+               const WQ = this._activeBoundingBoxes.data[QQ];
+               gQ.renderList.push(WQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L336-L360` → after: `L256-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L256-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L256-L283) · [Before (L336-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L336-L360)

```diff
-       }(Dp, xp, Lp, Ap),
-       function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
-         let Yp = 0,
-           Dp = 0;
-         const Ap = Sp,
-           Pp = Math.trunc(Op.value + (op + 7) / 8);
-         for (; Op.value < Pp;) {
-           let op = ap(Yp, Dp, cp, Op);
-           for (Yp = op.c, Dp = op.lc; Dp >= Wp;) {
-             const Sp = ip[Yp >> Dp - Wp & wp];
-             if (Sp.len) {
-               Dp -= Sp.len;
-               const pp = np(Sp.lit, Ip, Yp, Dp, cp, Op, xp, Lp, Ap);
-               pp && (Yp = pp.c, Dp = pp.lc)
-             } else {
-               if (!Sp.p) throw new Error("hufDecode issues");
- ... (9 more removed lines; see GitHub link above)
+         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), gQ && gQ.reset(), this.renderMeshes) {
+           const QQ = XQ.getRenderId(),
+             WQ = XQ.getFrameId();
+           for (let zQ = 0; zQ < wQ; zQ++) {
+             const wQ = TQ[zQ];
+             if (wQ && !wQ.isBlocked) {
+               if (this.customIsReadyFunction) {
+                 if (!this.customIsReadyFunction(wQ, this.refreshRate, !1)) {
+                   this.resetRefreshCounter();
+                   continue
+                 }
+               } else if (!wQ.isReady(0 === this.refreshRate)) {
+                 this.resetRefreshCounter();
+                 continue
+               }
+               let TQ, zQ;
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L367-L374` → after: `L290-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L290-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L290-L301) · [Before (L367-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L367-L374)

```diff
-         const yp = 8 - op & 7;
-         for (Yp >>= yp, Dp -= yp; Dp > 0;) {
-           const pp = ip[Yp << Wp - Dp & wp];
-           if (!pp.len) throw new Error("HufDecode issues");
-           {
-             Dp -= pp.len;
-             const ip = np(pp.lit, Ip, Yp, Dp, cp, Op, xp, Lp, Ap);
-             ip && (Yp = ip.c, Dp = ip.lc)
+         if (this.enableBoundingBoxRendering && gQ && WQ)
+           for (let JQ = 0; JQ < gQ.renderList.length; JQ++) {
+             const QQ = gQ.renderList.data[JQ];
+             this._activeBoundingBoxes.push(QQ)
+           }
+         if (this._scene.particlesEnabled && this.renderParticles) {
+           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
+           const QQ = this.particleSystemList || XQ.KD;
+           for (let WQ = 0; WQ < QQ.length; WQ++) {
+             const XQ = QQ[WQ],
+               wQ = XQ.emitter;
+             XQ.isStarted() && wQ && (!wQ.position || wQ.isEnabled()) && this._renderingManager.dispatchParticles(XQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L377-L383` → after: `L305-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L305-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L305-L341) · [Before (L377-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L377-L383)

```diff
-       }(Dp, Ap, pp, cp, Yp, Lp, Ip, op, {
-         value: 0
-       })
-     }
- 
-     function zp(pp) {
-       return 65535 & pp
+         return TQ
+       }
+       get renderingManager() {
+         return this._renderingManager
+       }
+       setRenderingOrder(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         this._renderingManager.setRenderingOrder(QQ, WQ, XQ, wQ)
+       }
+       setRenderingAutoClearDepthStencil(QQ, WQ) {
+         let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         this._renderingManager.setRenderingAutoClearDepthStencil(QQ, WQ, XQ, wQ), this._renderingManager._useSceneAutoClearSetup = !1
+       }
+ ... (21 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L385-L388` → after: `L343-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L343-L742) · [Before (L385-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L385-L388)

```diff
- 
-     function sp(pp) {
-       const ip = zp(pp);
-       return ip > 32767 ? ip - 65536 : ip
+     BQ.REFRESHRATE_RENDER_ONCE = 0, BQ.REFRESHRATE_RENDER_ONEVERYFRAME = 1, BQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
+     var yQ = XQ(40153);
+     class VQ extends TQ.g {
+       get renderListPredicate() {
+         return this._objectRenderer.renderListPredicate
+       }
+       set renderListPredicate(QQ) {
+         this._objectRenderer.renderListPredicate = QQ
+       }
+       get renderList() {
+         return this._objectRenderer.renderList
+       }
+       set renderList(QQ) {
+         this._objectRenderer.renderList = QQ
+       }
+       get particleSystemList() {
+ ... (384 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L390-L397` → after: `L744-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L744-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L744-L809) · [Before (L390-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L390-L397)

```diff
- 
-     function Kp(pp, ip) {
-       const cp = sp(pp),
-         Op = sp(ip),
-         op = cp + (1 & Op) + (Op >> 1);
-       return {
-         a: op,
-         b: op - Op
+     VQ.REFRESHRATE_RENDER_ONCE = BQ.REFRESHRATE_RENDER_ONCE, VQ.REFRESHRATE_RENDER_ONEVERYFRAME = BQ.REFRESHRATE_RENDER_ONEVERYFRAME, VQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = BQ.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
+     Object.getOwnPropertyDescriptor(VQ.prototype, "noPrePassRenderer") || Object.defineProperty(VQ.prototype, "noPrePassRenderer", (0, yQ.g)("RenderTargetTexture", "noPrePassRenderer"))
+   },
+   42050: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => PQ,
+       i: () => gQ
+     });
+     var wQ = XQ(40404),
+       qQ = XQ(38377),
+       TQ = XQ(37399),
+       zQ = XQ(40122),
+       sQ = XQ(40578);
+     const FQ = {
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+ ... (50 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L400-L407` → after: `L812-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L812-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L812-L931) · [Before (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L400-L407)

```diff
- 
-     function Vp(pp, ip) {
-       const cp = zp(pp),
-         Op = zp(ip),
-         op = cp - (Op >> 1) & bp;
-       return {
-         a: Op + op - fp & bp,
-         b: op
+     class gQ {
+       static RegisterShaderCodeProcessing(QQ, WQ) {
+         WQ ? gQ._CustomShaderCodeProcessing[QQ ?? ""] = WQ : delete gQ._CustomShaderCodeProcessing[QQ ?? ""]
+       }
+       static _GetShaderCodeProcessing(QQ) {
+         return gQ._CustomShaderCodeProcessing[QQ] ?? gQ._CustomShaderCodeProcessing[""]
+       }
+       get name() {
+         return this.options.name
+       }
+       set name(QQ) {
+         this.options.name = QQ
+       }
+       isReady() {
+         return this._drawWrapper.effect?.isReady() ?? !1
+       }
+ ... (104 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L410-L442` → after: `L934-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L934-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L934-L990) · [Before (L410-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L410-L442)

```diff
- 
-     function ii(pp, ip, cp, Op, op, Ip, Sp) {
-       const xp = Sp < 16384,
-         Lp = cp > op ? op : cp;
-       let Yp, Dp, Ap = 1;
-       for (; Ap <= Lp;) Ap <<= 1;
-       for (Ap >>= 1, Yp = Ap, Ap >>= 1; Ap >= 1;) {
-         Dp = 0;
-         const Sp = Dp + Ip * (op - Yp),
-           Lp = Ip * Ap,
-           Pp = Ip * Yp,
-           Wp = Op * Ap,
-           yp = Op * Yp;
-         let Up, wp, vp, tp;
-         for (; Dp <= Sp; Dp += Pp) {
-           let op = Dp;
- ... (17 more removed lines; see GitHub link above)
+     gQ.ForceGLSL = !1, gQ._CustomShaderCodeProcessing = {}
+   },
+   42076: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       Dispose: () => DQ,
+       DumpData: () => VQ,
+       DumpDataAsync: () => yQ,
+       DumpFramebuffer: () => BQ,
+       DumpTools: () => pQ,
+       EncodeImageAsync: () => jQ,
+       RegisterDumpTools: () => UQ
+     });
+     var wQ = XQ(40260),
+       qQ = XQ(42050),
+       TQ = XQ(40357),
+       zQ = XQ(37404),
+ ... (41 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L445-L452` → after: `L993-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L993-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L993-L1049) · [Before (L445-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L445-L452)

```diff
-         if (op & Ap) {
-           let op = Dp;
-           const Ip = Dp + Op * (cp - Yp);
-           for (; op <= Ip; op += yp) {
-             const cp = op + Wp;
-             let Op;
-             Op = xp ? Kp(pp[op + ip], pp[cp + ip]) : Vp(pp[op + ip], pp[cp + ip]), Up = Op.a, pp[cp + ip] = Op.b, pp[op + ip] = Up
-           }
+       }()), await JQ
+     }
+     let IQ = (() => {
+       var QQ;
+       let WQ, XQ = [];
+       return QQ = class {
+         static async EncodeImageAsync(QQ, WQ, XQ, wQ, qQ, zQ) {
+           const sQ = await rQ(),
+             FQ = sQ.dumpEngine;
+           FQ.engine.setSize(WQ, XQ, !0);
+           const PQ = FQ.engine.createRawTexture(QQ, WQ, XQ, 5, !1, !qQ, 1);
+           return FQ.renderer.setViewport(), FQ.renderer.applyEffectWrapper(FQ.wrapper), FQ.wrapper.effect._bindTexture("textureSampler", PQ), FQ.renderer.draw(), PQ.dispose(), await new Promise(((QQ, WQ) => {
+             TQ.g.ToBlob(sQ.canvas, (XQ => {
+               XQ ? QQ(XQ) : WQ(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
+             }), wQ, zQ)
+           }))
+ ... (41 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L454` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1051) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L454)

```diff
-         Yp = Ap, Ap >>= 1
+         XQ = QQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L456` → after: `L1053-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1053-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1053-L1056) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L456)

```diff
-       return Dp
+       const rQ = await IQ.EncodeImageAsync(XQ, QQ, WQ, wQ, sQ, JQ);
+       void 0 !== qQ && TQ.g.DownloadBlob(rQ, qQ), rQ.type !== wQ && FQ.b.Warn(`DumpData: The requested mimeType '${wQ}' is not supported. The result has mimeType '${rQ.type}' instead.`);
+       const jQ = await rQ.arrayBuffer();
+       return gQ ? jQ : `data:${wQ};base64,${(0,PQ.d)(jQ)}`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L459-L460` → after: `L1059-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1059-L1063) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L459-L460)

```diff
-     function ci(pp) {
-       return new DataView(pp.array.buffer, pp.offset.value, pp.size)
+     function VQ(QQ, WQ, XQ, wQ) {
+       let qQ = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== qQ || wQ || (qQ = ""), yQ(QQ, WQ, XQ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", qQ, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         wQ && wQ(QQ)
+       }))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L463-L486` → after: `L1066-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1066-L1069) · [Before (L463-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L463-L486)

```diff
-     function Oi(pp) {
-       const ip = pp.viewer.buffer.slice(pp.offset.value, pp.offset.value + pp.size),
-         cp = new Uint8Array(function(pp) {
-           let ip = pp.byteLength;
-           const cp = [];
-           let Op = 0;
-           const op = new DataView(pp);
-           for (; ip > 0;) {
-             const pp = op.getInt8(Op++);
-             if (pp < 0) {
-               const Ip = -pp;
-               ip -= Ip + 1;
-               for (let pp = 0; pp < Ip; pp++) cp.push(op.getUint8(Op++))
-             } else {
-               const Ip = pp;
-               ip -= 2;
- ... (8 more removed lines; see GitHub link above)
+     function DQ() {
+       JQ && (JQ?.then((QQ => {
+         QQ.canvas instanceof HTMLCanvasElement && QQ.canvas.remove(), QQ.dumpEngine && (QQ.dumpEngine.engine.dispose(), QQ.dumpEngine.renderer.dispose(), QQ.dumpEngine.wrapper.dispose())
+       })), JQ = null)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L489-L493` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1079-L1082) · [Before (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L489-L493)

```diff
-     function oi(pp) {
-       const ip = pp.array.slice(pp.offset.value, pp.offset.value + pp.size),
-         cp = fflate.unzlibSync(ip),
-         Op = new Uint8Array(cp.length);
-       return Jp(cp), Bp(cp, Op), new DataView(Op.buffer)
+     function UQ() {
+       if (GQ) return;
+       GQ = !0;
+       TQ.g.DumpData = VQ, TQ.g.DumpDataAsync = yQ, TQ.g.DumpFramebuffer = BQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L495-L519` → after: `L1084-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1084-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1084-L1128) · [Before (L495-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L495-L519)

```diff
- 
-     function Ii(pp) {
-       const ip = pp.array.slice(pp.offset.value, pp.offset.value + pp.size),
-         cp = fflate.unzlibSync(ip),
-         Op = pp.lines * pp.channels * pp.width,
-         op = 1 == pp.type ? new Uint16Array(Op) : new Uint32Array(Op);
-       let Ip = 0,
-         Sp = 0;
-       const xp = new Array(4);
-       for (let Lp = 0; Lp < pp.lines; Lp++)
-         for (let ip = 0; ip < pp.channels; ip++) {
-           let ip = 0;
-           switch (pp.type) {
-             case 1:
-               xp[0] = Ip, xp[1] = xp[0] + pp.width, Ip = xp[1] + pp.width;
-               for (let Op = 0; Op < pp.width; ++Op) {
- ... (9 more removed lines; see GitHub link above)
+   },
+   42062: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => IQ,
+       d: () => jQ,
+       f: () => BQ
+     });
+     var wQ = XQ(40724),
+       qQ = XQ(42064),
+       TQ = XQ(40260),
+       zQ = XQ(42041),
+       sQ = XQ(40286),
+       FQ = XQ(42070),
+       PQ = XQ(40268);
+     class gQ extends zQ.b {
+       getClassName() {
+ ... (29 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L521-L562` → after: `L1130-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1130-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1130-L1151) · [Before (L521-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L521-L562)

```diff
-       return new DataView(op.buffer)
-     }
- 
-     function Si(pp) {
-       const ip = pp.viewer,
-         cp = {
-           value: pp.offset.value
-         },
-         Op = new Uint16Array(pp.width * pp.scanlineBlockSize * (pp.channels * pp.type)),
-         op = new Uint8Array(Pp);
-       let Ip = 0;
-       const Sp = new Array(pp.channels);
-       for (let Yp = 0; Yp < pp.channels; Yp++) Sp[Yp] = {}, Sp[Yp].start = Ip, Sp[Yp].end = Sp[Yp].start, Sp[Yp].nx = pp.width, Sp[Yp].ny = pp.lines, Sp[Yp].size = pp.type, Ip += Sp[Yp].nx * Sp[Yp].ny * Sp[Yp].size;
-       const xp = qp(ip, cp),
-         Lp = qp(ip, cp);
-       if (Lp >= Pp) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
- ... (26 more removed lines; see GitHub link above)
+         set face(QQ) {
+           this._effectWrapper.face = QQ
+         }
+         getClassName() {
+           return "PassCubePostProcess"
+         }
+         constructor(QQ, WQ) {
+           let XQ = arguments.length > 4 ? arguments[4] : void 0;
+           const qQ = {
+             size: "number" === typeof WQ ? WQ : void 0,
+             camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             samplingMode: arguments.length > 3 ? arguments[3] : void 0,
+             engine: XQ,
+             reusable: arguments.length > 5 ? arguments[5] : void 0,
+             textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
+             blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+ ... (6 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L564` → after: `L1153-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1153-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1153-L1202) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L564)

```diff
-       return new DataView(wp.buffer)
+         static _Parse(WQ, XQ, wQ, qQ) {
+           return sQ.b.Parse((() => new QQ(WQ.name, WQ.options, XQ, WQ.renderTargetSamplingMode, WQ._engine, WQ.reusable)), WQ, wQ, qQ)
+         }
+       }, (() => {
+         const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(XQ[Symbol.metadata] ?? null) : void 0;
+         WQ = [(0, PQ.I)()], (0, TQ.k)(QQ, null, WQ, {
+           kind: "getter",
+           name: "face",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "face" in QQ,
+             get: QQ => QQ.face
+           },
+           metadata: qQ
+         }, null, wQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
+ ... (34 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L566-L653` → after: `L1204-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1204-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1204-L1344) · [Before (L566-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L566-L653)

```diff
-     var xi, Li = cp(40304);
-     ! function(pp) {
-       pp[pp.Float = 0] = "Float", pp[pp.HalfFloat = 1] = "HalfFloat"
-     }(xi || (xi = {}));
-     class Yi {}
-     async function Di(pp, ip, cp, Op) {
-       const op = {
-         size: 0,
-         viewer: ip,
-         array: new Uint8Array(ip.buffer),
-         offset: cp,
-         width: pp.dataWindow.xMax - pp.dataWindow.xMin + 1,
-         height: pp.dataWindow.yMax - pp.dataWindow.yMin + 1,
-         channels: pp.channels.length,
-         channelLineOffsets: {},
-         scanOrder: () => 0,
- ... (72 more removed lines; see GitHub link above)
+     async function jQ(QQ, WQ, TQ) {
+       let sQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         FQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+         PQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         gQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+       await async function(QQ) {
+         if (QQ.isReady()) return;
+         if (QQ.loadingError) throw new Error(QQ.errorObject?.message || `Texture ${QQ.name} errored while loading.`);
+         const WQ = QQ.onLoadObservable;
+         if (WQ) return await new Promise((QQ => WQ.addOnce((() => QQ()))));
+         const XQ = QQ._texture?.onLoadedObservable;
+         if (XQ) return await new Promise((QQ => XQ.addOnce((() => QQ()))));
+         throw new Error(`Cannot determine readiness of texture ${QQ.name}.`)
+       }(QQ);
+       const rQ = QQ.getInternalTexture(),
+         IQ = QQ.is3D || !!rQ?.is3D,
+ ... (125 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L656-L669` → after: `L1348-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1348-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1348-L1363) · [Before (L656-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L656-L669)

```diff
-       if (1 === op.type) switch (Op) {
-         case xi.Float:
-           op.getter = Xp, op.inputSize = Yp;
-           break;
-         case xi.HalfFloat:
-           op.getter = qp, op.inputSize = Yp
-       } else {
-         if (2 !== op.type) throw new Error("Unsupported pixelType " + op.type + " for " + pp.compression);
-         switch (Op) {
-           case xi.Float:
-             op.getter = Ep, op.inputSize = xp;
-             break;
-           case xi.HalfFloat:
-             op.getter = lp, op.inputSize = xp
+       const pQ = yQ * VQ,
+         GQ = 4 * pQ;
+       if (DQ.length !== GQ) {
+         const QQ = 0 === pQ ? 0 : DQ.length / pQ;
+         if (1 === QQ || 2 === QQ || 3 === QQ) {
+           const WQ = new Uint8Array(GQ);
+           for (let XQ = 0, wQ = 0, qQ = 0; XQ < pQ; XQ++, qQ += 4) {
+             const XQ = DQ[wQ++];
+             if (1 === QQ) {
+               WQ[qQ] = XQ, WQ[qQ + 1] = XQ, WQ[qQ + 2] = XQ, WQ[qQ + 3] = 255;
+               continue
+             }
+             const TQ = DQ[wQ++];
+             2 !== QQ ? (WQ[qQ] = XQ, WQ[qQ + 1] = TQ, WQ[qQ + 2] = DQ[wQ++], WQ[qQ + 3] = 255) : (WQ[qQ] = XQ, WQ[qQ + 1] = TQ, WQ[qQ + 2] = 0, WQ[qQ + 3] = 255)
+           }
+           return WQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L672-L687` → after: `L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1366) · [Before (L672-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L672-L687)

```diff
-       op.blockCount = op.height / op.scanlineBlockSize;
-       for (let xp = 0; xp < op.blockCount; xp++) Cp(ip, cp);
-       const Lp = op.width * op.height * op.outputChannels;
-       switch (Op) {
-         case xi.Float:
-           op.byteArray = new Float32Array(Lp), op.textureType = 1, Sp && op.byteArray.fill(1, 0, Lp);
-           break;
-         case xi.HalfFloat:
-           op.byteArray = new Uint16Array(Lp), op.textureType = 2, Sp && op.byteArray.fill(15360, 0, Lp);
-           break;
-         default:
-           throw new Error("Unsupported type: " + Op)
-       }
-       let Dp = 0;
-       for (const xp of pp.channels) void 0 !== op.decodeChannels[xp.name] && (op.channelLineOffsets[xp.name] = Dp * op.width), Dp += 2 * xp.pixelType;
-       return op.bytesPerLine = op.width * Dp, op.outLineWidth = op.width * op.outputChannels, "INCREASING_Y" === pp.lineOrder ? op.scanOrder = pp => pp : op.scanOrder = pp => op.height - 1 - pp, 4 == op.outputChannels ? (op.format = 5, op.linearSpace = !0) : (op.format = 6, op.li … [truncated]
+       return DQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L689-L713` → after: `L1368-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1368-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1368-L1606) · [Before (L689-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L689-L713)

```diff
- 
-     function Ai(pp, ip, cp, Op) {
-       const op = {
-         value: 0
-       };
-       for (let Ip = 0; Ip < pp.height / pp.scanlineBlockSize; Ip++) {
-         const Sp = kp(cp, Op) - ip.dataWindow.yMin;
-         pp.size = mp(cp, Op), pp.lines = Sp + pp.scanlineBlockSize > pp.height ? pp.height - Sp : pp.scanlineBlockSize;
-         const xp = pp.size < pp.lines * pp.bytesPerLine && pp.uncompress ? pp.uncompress(pp) : ci(pp);
-         Op.value += pp.size;
-         for (let cp = 0; cp < pp.scanlineBlockSize; cp++) {
-           const Op = Ip * pp.scanlineBlockSize,
-             Sp = cp + pp.scanOrder(Op);
-           if (Sp >= pp.height) continue;
-           const Lp = cp * pp.bytesPerLine,
-             Yp = (pp.height - 1 - Sp) * pp.outLineWidth;
- ... (9 more removed lines; see GitHub link above)
+     const BQ = {
+       CreateResizedCopy: function(QQ, WQ, XQ) {
+         let TQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const zQ = QQ.sE(),
+           sQ = zQ.Uj(),
+           FQ = new qQ.c("resized" + QQ.name, {
+             width: WQ,
+             height: XQ
+           }, zQ, !QQ.noMipmap, !0, QQ._texture.type, !1, QQ.samplingMode, !1);
+         FQ.wrapU = QQ.wrapU, FQ.wrapV = QQ.wrapV, FQ.uOffset = QQ.uOffset, FQ.vOffset = QQ.vOffset, FQ.uScale = QQ.uScale, FQ.vScale = QQ.vScale, FQ.uAng = QQ.uAng, FQ.vAng = QQ.vAng, FQ.wAng = QQ.wAng, FQ.coordinatesIndex = QQ.coordinatesIndex, FQ.level = QQ.level, FQ.anisotropi … [truncated]
+         const PQ = new gQ("pass", 1, null, TQ ? wQ.g.BILINEAR_SAMPLINGMODE : wQ.g.NEAREST_SAMPLINGMODE, sQ, !1, 0);
+         return PQ.externalTextureSamplerBinding = !0, PQ.onEffectCreatedObservable.addOnce((WQ => {
+           WQ.executeWhenCompiled((() => {
+             PQ.onApply = function(WQ) {
+               WQ.setTexture("textureSampler", QQ)
+             };
+ ... (223 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L717-L718` → after: `L1651-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1651-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1651-L1952) · [Before (L717-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L717-L718)

```diff
-         }
-       }
+           activate(QQ) {
+             let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               XQ = arguments.length > 2 ? arguments[2] : void 0;
+             const wQ = null === QQ || void 0 !== QQ.cameraRigMode ? QQ || this.XM : null,
+               qQ = wQ?.sE() ?? QQ,
+               TQ = qQ.Uj(),
+               zQ = TQ.getCaps().maxTextureSize,
+               sQ = (WQ ? WQ.width : this._engine.getRenderWidth(!0)) * this._options | 0,
+               FQ = (WQ ? WQ.height : this._engine.getRenderHeight(!0)) * this._options | 0;
+             let PQ = this._options.width || sQ,
+               gQ = this._options.height || FQ;
+             const JQ = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
+             let IQ = null;
+             if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
+               if (this.adaptScaleToCurrentViewport) {
+                 const QQ = TQ.currentViewport;
+ ... (286 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L720-L726` → after: `L1954-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1954-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1954-L1964) · [Before (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L720-L726)

```diff
-     Yi.DefaultOutputType = xi.HalfFloat, Yi.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class Pi {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData(pp, ip, cp, Op, op) {
-         throw ".exr not supported in Cube."
+   },
+   42070: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ,
+       g: () => TQ
+     });
+     var wQ = XQ(42050),
+       qQ = XQ(37392);
+     class TQ extends wQ.i {
+       _gatherImports(QQ, WQ) {
+         QQ ? (this._webGPUReady = !0, WQ.push(Promise.all([XQ.e(379).then((() => XQ(61713)))]))) : WQ.push(Promise.all([XQ.e(380).then((() => XQ(61717)))])), super._gatherImports(QQ, WQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L728-L744` → after: `L1966-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1966-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1966-L1976) · [Before (L728-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L728-L744)

```diff
-       loadData(pp, ip, cp) {
-         const op = new DataView(pp.buffer),
-           Ip = {
-             value: 0
-           },
-           Sp = Tp(op, Ip);
-         Di(Sp, op, Ip, Yi.DefaultOutputType).then((pp => {
-           Ai(pp, Sp, op, Ip);
-           const Op = Sp.dataWindow.xMax - Sp.dataWindow.xMin + 1,
-             xp = Sp.dataWindow.yMax - Sp.dataWindow.yMin + 1;
-           cp(Op, xp, ip.generateMipMaps, !1, (() => {
-             const cp = ip.gy();
-             ip.format = Sp.format, ip.type = pp.textureType, ip.invertY = !1, ip._gammaSpace = !Sp.linearSpace, pp.byteArray && cp._uploadDataToTextureDirectly(ip, pp.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((pp => {
-           Op.e.Error("Failed to load EXR texture: ", pp)
- ... (1 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         let WQ = arguments.length > 2 ? arguments[2] : void 0;
+         const XQ = {
+           name: QQ,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: TQ.FragmentUrl,
+           ...WQ
+         };
+         XQ.engine || (XQ.engine = qQ.d.LastCreatedEngine), super(XQ)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L747-L765` → after: `L1979-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1979-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1979-L1982) · [Before (L747-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L747-L765)

```diff
-     async function Wi(pp) {
-       const ip = new DataView(pp),
-         cp = {
-           value: 0
-         },
-         op = Tp(ip, cp);
-       try {
-         const pp = await Di(op, ip, cp, xi.Float);
-         return Ai(pp, op, ip, cp), pp.byteArray ? {
-           width: op.dataWindow.xMax - op.dataWindow.xMin + 1,
-           height: op.dataWindow.yMax - op.dataWindow.yMin + 1,
-           data: new Float32Array(pp.byteArray)
-         } : (Op.e.Error("Failed to decode EXR data: No byte array available."), {
-           width: 0,
-           height: 0,
-           data: null
- ... (3 more removed lines; see GitHub link above)
+     TQ.FragmentUrl = "pass";
+     class zQ extends wQ.i {
+       _gatherImports(QQ, WQ) {
+         QQ ? (this._webGPUReady = !0, WQ.push(Promise.all([XQ.e(381).then((() => XQ(61726)))]))) : WQ.push(Promise.all([XQ.e(382).then((() => XQ(61733)))])), super._gatherImports(QQ, WQ)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L767-L770` → after: `L1984-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L1984-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/320.js#L1984-L2017) · [Before (L767-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/320.js#L767-L770)

```diff
-       return {
-         width: 0,
-         height: 0,
-         data: null
+       constructor(QQ) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: QQ,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qQ.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: zQ.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+       get face() {
+         return this._face
+       }
+       set face(QQ) {
+         if (!(QQ < 0 || QQ > 5)) switch (this._face = QQ, this._face) {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/321.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/321.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/321.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/321.js#L4-L6)

```diff
-   42316: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
+   42086: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       _HDRTextureLoader: () => gQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/321.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/321.js#L8-L14)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertex",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     var wQ = XQ(37370);
+     class qQ {
+       static ConvertPanoramaToCubemap(QQ, WQ, XQ, wQ) {
+         let qQ, TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!QQ) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (QQ.length != WQ * XQ * 3) {
+           if (QQ.length != WQ * XQ * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           qQ = 4
+         } else qQ = 3;
+         return {
+           front: this.CreateCubemapTexture(wQ, this.FACE_FRONT, QQ, WQ, XQ, TQ, zQ, qQ),
+           back: this.CreateCubemapTexture(wQ, this.FACE_BACK, QQ, WQ, XQ, TQ, zQ, qQ),
+           left: this.CreateCubemapTexture(wQ, this.FACE_LEFT, QQ, WQ, XQ, TQ, zQ, qQ),
+           right: this.CreateCubemapTexture(wQ, this.FACE_RIGHT, QQ, WQ, XQ, TQ, zQ, qQ),
+           up: this.CreateCubemapTexture(wQ, this.FACE_UP, QQ, WQ, XQ, TQ, zQ, qQ),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L16-L27` → after: `L76-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/321.js#L76-L80) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/321.js#L16-L27)

```diff
-   },
-   42220: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bumpVertexDeclaration",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+ 
+     function TQ(QQ, WQ, XQ, wQ, qQ, TQ) {
+       qQ > 0 ? (qQ = function(QQ, WQ) {
+         return WQ > 1023 ? QQ * Math.pow(2, 1023) * Math.pow(2, WQ - 1023) : WQ < -1074 ? QQ * Math.pow(2, -1074) * Math.pow(2, WQ + 1074) : QQ * Math.pow(2, WQ)
+       }(1, qQ - 136), QQ[TQ + 0] = WQ * qQ, QQ[TQ + 1] = XQ * qQ, QQ[TQ + 2] = wQ * qQ) : (QQ[TQ + 0] = 0, QQ[TQ + 1] = 0, QQ[TQ + 2] = 0)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L29-L41` → after: `L82-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/321.js#L82-L86) · [Before (L29-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/321.js#L29-L41)

```diff
-   },
-   42164: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     cp(42157), cp(42159);
-     const op = "defaultUboDeclaration",
-       Ip = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+ 
+     function zQ(QQ, WQ) {
+       let XQ, wQ = "";
+       for (let qQ = WQ; qQ < QQ.length - WQ && (XQ = String.fromCharCode(QQ[qQ]), "\n" != XQ); qQ++) wQ += XQ;
+       return wQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L43-L104` → after: `L88-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L88-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/321.js#L88-L171) · [Before (L43-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/321.js#L43-L104)

```diff
-   },
-   42143: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       defaultVertexShader: () => zp
-     });
-     var Op = cp(40062),
-       op = cp(42151);
-     const Ip = "defaultVertexDeclaration",
-       Sp = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     Op.b.IncludesShadersStore[Ip] || (Op.b.IncludesShadersStore[Ip] = Sp);
-     const xp = {
-       name: Ip,
-       shader: Sp
-     };
-     var Lp = cp(42157),
-       Yp = cp(42159),
- ... (46 more removed lines; see GitHub link above)
+ 
+     function sQ(QQ) {
+       let WQ = zQ(QQ, 0);
+       if ("#" != WQ[0] || "?" != WQ[1]) throw "Bad HDR Format.";
+       let XQ = !1,
+         wQ = !1,
+         qQ = 0;
+       do {
+         qQ += WQ.length + 1, WQ = zQ(QQ, qQ), "FORMAT=32-bit_rle_rgbe" == WQ ? wQ = !0 : 0 == WQ.length && (XQ = !0)
+       } while (!XQ);
+       if (!wQ) throw "HDR Bad header format, unsupported FORMAT";
+       qQ += WQ.length + 1, WQ = zQ(QQ, qQ);
+       const TQ = /^-Y (.*) \+X (.*)$/g.exec(WQ);
+       if (!TQ || TQ.length < 3) throw "HDR Bad header format, no size";
+       const sQ = parseInt(TQ[2]),
+         FQ = parseInt(TQ[1]);
+ ... (68 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/322.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/322.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L97` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L4-L6) · [Before (L4-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L4-L97)

```diff
-   42298: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bakedVertexAnimation",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42182: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
- ... (78 more removed lines; see GitHub link above)
+   42092: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       _KTXTextureLoader: () => jQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L99-L105` → after: `L8-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L8-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L8-L47) · [Before (L99-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L99-L105)

```diff
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     var wQ = XQ(38956);
+     class qQ {
+       constructor(QQ, WQ) {
+         if (this.data = QQ, this.isInvalid = !1, !qQ.IsValid(QQ)) return this.isInvalid = !0, void wQ.b.Error("texture missing KTX identifier");
+         const XQ = Uint32Array.BYTES_PER_ELEMENT,
+           TQ = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * XQ),
+           zQ = 67305985 === TQ.getUint32(0, !0);
+         return this.glType = TQ.getUint32(1 * XQ, zQ), this.glTypeSize = TQ.getUint32(2 * XQ, zQ), this.glFormat = TQ.getUint32(3 * XQ, zQ), this.glInternalFormat = TQ.getUint32(4 * XQ, zQ), this.glBaseInternalFormat = TQ.getUint32(5 * XQ, zQ), this.pixelWidth = TQ.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(QQ, WQ) {
+         switch (this.loadType) {
+           case qQ.COMPRESSED_2D:
+             this._upload2DCompressedLevels(QQ, WQ);
+           case qQ.TEX_2D:
+           case qQ.COMPRESSED_3D:
+           case qQ.TEX_3D:
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L107-L118` → after: `L49-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L49-L55) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L107-L118)

```diff
-   },
-   42232: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "fogVertexDeclaration",
-       Ip = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     qQ.HEADER_LEN = 64, qQ.COMPRESSED_2D = 0, qQ.COMPRESSED_3D = 1, qQ.TEX_2D = 2, qQ.TEX_3D = 3;
+     var TQ, zQ, sQ, FQ = XQ(42100),
+       PQ = XQ(40357);
+ 
+     function gQ(QQ, WQ) {
+       const XQ = WQ?.jsDecoderModule || KTX2DECODER;
+       QQ && (QQ.wasmBaseUrl && (XQ.Transcoder.WasmBaseUrl = QQ.wasmBaseUrl), QQ.wasmUASTCToASTC && (XQ.LiteTranscoder_UASTC_ASTC.WasmModuleURL = QQ.wasmUASTCToASTC), QQ.wasmUASTCToBC7 && (XQ.LiteTranscoder_UASTC_BC7.WasmModuleURL = QQ.wasmUASTCToBC7), QQ.wasmUASTCToRGBA_UNORM &&  … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L120-L157` → after: `L57-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L57-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L57-L242) · [Before (L120-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L120-L157)

```diff
-   },
-   42174: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42190: (pp, ip, cp) => {
-     cp.d(ip, {
- ... (22 more removed lines; see GitHub link above)
+ 
+     function JQ(QQ) {
+       let WQ;
+       "undefined" === typeof QQ && "undefined" !== typeof KTX2DECODER && (QQ = KTX2DECODER), onmessage = XQ => {
+         if (XQ.data) switch (XQ.data.action) {
+           case "init": {
+             const wQ = XQ.data.urls;
+             wQ && (wQ.jsDecoderModule && "undefined" === typeof QQ && (importScripts(wQ.jsDecoderModule), QQ = KTX2DECODER), gQ(wQ)), XQ.data.wasmBinaries && gQ(void 0, {
+               ...XQ.data.wasmBinaries,
+               jsDecoderModule: QQ
+             }), WQ = new QQ.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+ ... (170 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L159-L170` → after: `L244-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L244-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L244-L290) · [Before (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L159-L170)

```diff
-   },
-   42238: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "lightVxFragmentDeclaration",
-       Ip = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+ 
+     function IQ(QQ) {
+       switch (QQ) {
+         case 35916:
+           return 33776;
+         case 35918:
+           return 33778;
+         case 35919:
+           return 33779;
+         case 37493:
+           return 37492;
+         case 37497:
+           return 37496;
+         case 37495:
+           return 37494;
+         case 37840:
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L172-L183` → after: `L292-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L292-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L292-L391) · [Before (L172-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L172-L183)

```diff
-   },
-   42246: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "lightVxUboDeclaration",
-       Ip = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     rQ.URLConfig = {
+       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
+       wasmUASTCToASTC: null,
+       wasmUASTCToBC7: null,
+       wasmUASTCToRGBA_UNORM: null,
+       wasmUASTCToRGBA_SRGB: null,
+       wasmUASTCToR8_UNORM: null,
+       wasmUASTCToRG8_UNORM: null,
+       jsMSCTranscoder: null,
+       wasmMSCTranscoder: null,
+       wasmZSTDDecoder: null
+     }, rQ.DefaultNumWorkers = rQ.GetDefaultNumWorkers(), rQ.DefaultDecoderOptions = new class {
+       constructor() {
+         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
+       }
+       get isDirty() {
+ ... (84 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L186` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L394) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L186)

```diff
-   42266: (pp, ip, cp) => {
+   42100: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L190-L196` → after: `L398-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L398-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L398-L426) · [Before (L190-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L190-L196)

```diff
-     var Op = cp(40062);
-     const op = "logDepthDeclaration",
-       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     class wQ {
+       constructor(QQ) {
+         this._pendingActions = new Array, this._workerInfos = QQ.map((QQ => ({
+           workerPromise: Promise.resolve(QQ),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const QQ of this._workerInfos) QQ.workerPromise.then((QQ => {
+           QQ.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(QQ) {
+         this._executeOnIdleWorker(QQ) || this._pendingActions.push(QQ)
+       }
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L198-L209` → after: `L428-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L428-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L428-L454) · [Before (L198-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L198-L209)

```diff
-   },
-   42346: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "logDepthVertex",
-       Ip = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+     class qQ extends wQ {
+       constructor(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.DefaultOptions;
+         super([]), this._maxWorkers = QQ, this._createWorkerAsync = WQ, this._options = XQ
+       }
+       push(QQ) {
+         if (!this._executeOnIdleWorker(QQ))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const WQ = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(WQ), this._execute(WQ, QQ)
+           } else this._pendingActions.push(QQ)
+       }
+       _execute(QQ, WQ) {
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L211-L404` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/322.js#L456-L457) · [Before (L211-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/322.js#L211-L404)

```diff
-   },
-   42206: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "mainUVVaryingDeclaration",
-       Ip = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42159: (pp, ip, cp) => {
-     cp.d(ip, {
- ... (178 more removed lines; see GitHub link above)
+     qQ.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/323.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/323.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/323.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/323.js#L4-L6)

```diff
-   42359: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
+   42105: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       _TGATextureLoader: () => sQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L8-L40` → after: `L8-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/323.js#L8-L24) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/323.js#L8-L40)

```diff
-     var Op = cp(40062);
-     const op = "decalFragmentDeclaration",
-       Ip = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42460: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "depthPrePass",
-       Ip = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
- ... (17 more removed lines; see GitHub link above)
+     var wQ = XQ(38956);
+ 
+     function qQ(QQ) {
+       let WQ = 0;
+       return {
+         id_length: QQ[WQ++],
+         colormap_type: QQ[WQ++],
+         image_type: QQ[WQ++],
+         colormap_index: QQ[WQ++] | QQ[WQ++] << 8,
+         colormap_length: QQ[WQ++] | QQ[WQ++] << 8,
+         colormap_size: QQ[WQ++],
+         origin: [QQ[WQ++] | QQ[WQ++] << 8, QQ[WQ++] | QQ[WQ++] << 8],
+         width: QQ[WQ++] | QQ[WQ++] << 8,
+         height: QQ[WQ++] | QQ[WQ++] << 8,
+         pixel_size: QQ[WQ++],
+         flags: QQ[17]
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L42-L53` → after: `L26-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L26-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/323.js#L26-L85) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/323.js#L42-L53)

```diff
-   },
-   42376: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "lightUboDeclaration",
-       Ip = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
+ 
+     function TQ(QQ, WQ) {
+       if (WQ.length < 19) return void wQ.b.Error("Unable to load TGA file - Not enough data to contain header");
+       let XQ = 18;
+       const TQ = qQ(WQ);
+       if (TQ.id_length + XQ > WQ.length) return void wQ.b.Error("Unable to load TGA file - Not enough data");
+       XQ += TQ.id_length;
+       let sQ, FQ = !1,
+         PQ = !1,
+         gQ = !1;
+       switch (TQ.image_type) {
+         case 9:
+           FQ = !0;
+         case 1:
+           PQ = !0;
+           break;
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L182-L183` → after: `L88-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L88-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/323.js#L88-L171) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/323.js#L182-L183)

```diff
-       name: op,
-       shader: Ip
+       GetTGAHeader: qQ,
+       UploadContent: TQ,
+       _getImageData8bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
+         const PQ = XQ,
+           gQ = WQ,
+           JQ = QQ.width,
+           rQ = QQ.height;
+         let IQ, jQ, BQ, yQ = 0;
+         const VQ = new Uint8Array(JQ * rQ * 4);
+         for (BQ = wQ; BQ !== TQ; BQ += qQ)
+           for (jQ = zQ; jQ !== FQ; jQ += sQ, yQ++) IQ = PQ[yQ], VQ[4 * (jQ + JQ * BQ) + 3] = 255, VQ[4 * (jQ + JQ * BQ) + 2] = gQ[3 * IQ + 0], VQ[4 * (jQ + JQ * BQ) + 1] = gQ[3 * IQ + 1], VQ[4 * (jQ + JQ * BQ) + 0] = gQ[3 * IQ + 2];
+         return VQ
+       },
+       _getImageData16bits: function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
+         const PQ = XQ,
+           gQ = QQ.width,
+ ... (68 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/324.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/324.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L4-L252` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/324.js#L4) · [Before (L4-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/324.js#L4-L252)

```diff
-   42452: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bumpFragment",
-       Ip = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42429: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
- ... (233 more removed lines; see GitHub link above)
+   42114: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L254` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/324.js#L6-L7) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/324.js#L254)

```diff
-       geometryPixelShader: () => Ep
+       ReadExrDataAsync: () => JW,
+       _ExrTextureLoader: () => gW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L256-L290` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/324.js#L9-L771) · [Before (L256-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/324.js#L256-L290)

```diff
-     var Op = cp(40062),
-       op = cp(42362),
-       Ip = cp(42436);
-     const Sp = "mrtFragmentDeclaration",
-       xp = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     Op.b.IncludesShadersStore[Sp] || (Op.b.IncludesShadersStore[Sp] = xp);
-     const Lp = {
-       name: Sp,
-       shader: xp
-     };
-     var Yp = cp(42423),
-       Dp = cp(42403),
-       Ap = cp(42429),
-       Pp = cp(42174),
-       Wp = cp(61660),
-       yp = cp(61840),
- ... (19 more removed lines; see GitHub link above)
+     var wQ = XQ(38956),
+       qQ = XQ(37404),
+       TQ = XQ(40337);
+     const zQ = 4,
+       sQ = 4,
+       FQ = 1,
+       PQ = 2,
+       gQ = 8,
+       JQ = 65536,
+       rQ = JQ >> 3,
+       IQ = 14,
+       jQ = 65537,
+       BQ = 1 << IQ,
+       yQ = BQ - 1,
+       VQ = 59,
+       DQ = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/325.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/325.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02)

#### 1. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L4-L43)

```diff
-   42298: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "bakedVertexAnimation",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42182: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
- ... (24 more removed lines; see GitHub link above)
+   42294: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L47-L60` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L8) · [Before (L47-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L47-L60)

```diff
-     var Op = cp(40062);
-     const op = "bonesVertex",
-       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42316: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L69` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L17) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L69)

```diff
-   42319: (pp, ip, cp) => {
+   42193: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L71` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L19) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L71)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L73-L75` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L21-L23) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bumpVertexDeclaration",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L82` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L30) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L82)

```diff
-   42226: (pp, ip, cp) => {
+   42148: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L84` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L32) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L84)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L86-L88` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L34-L37) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L86-L88)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     var wQ = XQ(40126);
+     XQ(42137), XQ(42143);
+     const qQ = "defaultUboDeclaration",
+       TQ = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L95-L97` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L44-L46) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L95-L97)

```diff
-   61640: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   42122: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       defaultVertexShader: () => ZQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L99-L210` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L48-L51) · [Before (L99-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L99-L210)

```diff
-     var Op = cp(40062);
-     const op = "harmonicsFunctions",
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42190: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "instancesDeclaration",
-       Ip = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
- ... (96 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42131);
+     const TQ = "defaultVertexDeclaration",
+       zQ = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L216-L218` → after: `L57-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L57-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L57-L90) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L216-L218)

```diff
-     var Pp = cp(42157);
-     const Wp = "geometryUboDeclaration",
-       yp = "#include<sceneUboDeclaration>\n";
+     var FQ = XQ(42137),
+       PQ = XQ(42143),
+       gQ = XQ(42148),
+       JQ = XQ(42155),
+       rQ = XQ(42158),
+       IQ = XQ(42162),
+       jQ = XQ(42164),
+       BQ = XQ(42169),
+       yQ = XQ(42175),
+       VQ = XQ(42184),
+       DQ = XQ(42188),
+       pQ = XQ(42193),
+       GQ = XQ(42199),
+       UQ = XQ(42207),
+       bQ = XQ(42209),
+       vQ = XQ(42218),
+ ... (18 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L224-L234` → after: `L96-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L96-L98) · [Before (L224-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L224-L234)

```diff
-     var wp = cp(42226),
-       vp = cp(61640),
-       tp = cp(42272),
-       Hp = cp(42277),
-       dp = cp(42286),
-       ep = cp(42291),
-       jp = cp(42298),
-       kp = cp(42319),
-       mp = cp(42316);
-     const Rp = "geometryVertexShader",
-       qp = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
+     var nQ = XQ(42319);
+     const xQ = "defaultVertexShader",
+       YQ = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L236` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/325.js#L100) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/325.js#L236)

```diff
-     const Mp = [op.b, Ip.c, Sp.b, xp.c, Lp.e, Ap, Pp.d, Up, wp.c, vp.c, tp.e, Hp.b, dp.b, ep.d, jp.e, kp.c, mp.d];
+     const NQ = [qQ.e, sQ, FQ.e, PQ.b, gQ.e, JQ.b, rQ.b, IQ.e, jQ.e, BQ.c, yQ.d, VQ.e, DQ.c, pQ.b, GQ.c, UQ.b, bQ.e, vQ.b, dQ.c, HQ.b, aQ.e, lQ.c, hQ.e, iQ.d, cQ.e, AQ.c, RQ.d, EQ.e, CQ.c, uQ.d, LQ.d, kQ.e, fQ.d, SQ.d, eQ, nQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/326.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/326.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea)

#### 1. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L8-L11` → after: `L333-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L333-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L333-L335) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L8-L11)

```diff
-     var Op = cp(40062);
-     cp(42157), cp(42159);
-     const op = "defaultUboDeclaration",
-       Ip = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "samplerVertexImplementation",
+       TQ = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L18-L20` → after: `L342-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L342-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L342-L344) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L18-L20)

```diff
-   42350: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       defaultPixelShader: () => ii
+   42137: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L22-L25` → after: `L346-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L346-L348) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L22-L25)

```diff
-     var Op = cp(40062),
-       op = cp(42359);
-     const Ip = "defaultFragmentDeclaration",
-       Sp = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "sceneUboDeclaration",
+       TQ = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L30-L44` → after: `L353-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L353-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L353-L361) · [Before (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L30-L44)

```diff
-     };
-     var Lp = cp(42157),
-       Yp = cp(42159),
-       Dp = cp(42164),
-       Ap = cp(42362),
-       Pp = cp(42365),
-       Wp = cp(42369),
-       yp = cp(42206),
-       Up = cp(42174),
-       wp = cp(42373),
-       vp = cp(42376),
-       tp = cp(42385),
-       Hp = cp(42392);
-     const dp = "lightsFragmentFunctions",
-       ep = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     }
+   },
+   42313: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "shadowsVertex",
+       TQ = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L49-L53` → after: `L366-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L366-L374) · [Before (L49-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L49-L53)

```diff
-     };
-     var kp = cp(42397),
-       mp = cp(42403);
-     const Rp = "fresnelFunction",
-       qp = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     }
+   },
+   42155: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "uvAttributeDeclaration",
+       TQ = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L58-L72` → after: `L379-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L379-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L379-L387) · [Before (L58-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L58-L72)

```diff
-     };
-     var Cp = cp(42406),
-       Ep = cp(42412),
-       Xp = cp(42416),
-       lp = cp(42418),
-       Qp = cp(42423),
-       Jp = cp(42429),
-       Bp = cp(42436),
-       Np = cp(42266),
-       Tp = cp(42443),
-       fp = cp(42449),
-       bp = cp(42452),
-       hp = cp(42457);
-     const ap = "defaultFragmentAlpha",
-       np = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     }
+   },
+   42284: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "uvVariableDeclaration",
+       TQ = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L77-L87` → after: `L392-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L392-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/326.js#L392-L401) · [Before (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/326.js#L77-L87)

```diff
-     };
-     var gp = cp(42460),
-       Gp = cp(42466),
-       rp = cp(42470),
-       Zp = cp(42476),
-       zp = cp(42484);
-     const sp = "defaultPixelShader",
-       Kp = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
-     Op.b.ShadersStore[sp] || (Op.b.ShadersStore[sp] = Kp);
-     const Vp = [op.e, xp, Lp.d, Yp.d, Dp.c, Ap.e, Pp.c, Wp.b, yp.e, Up.c, wp.e, vp.c, tp.b, Hp.e, jp, kp.b, mp.e, Mp, Cp.d, Ep.b, Xp.c, lp.e, Qp.c, Jp.e, Bp.e, Np.e, Tp.b, fp.d, bp.c, hp.e, Fp, gp.c, Gp.e, rp.c, Zp.b, zp.d];
-     for (const ci of Vp) Op.b.IncludesShadersStore[ci.name] || (Op.b.IncludesShadersStore[ci.name] = ci.shader);
+     }
+   },
+   42316: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "vertexColorMixing",
+       TQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/327.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/327.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L4)

```diff
-   42449: (pp, ip, cp) => {
+   42328: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L6)

```diff
-       d: () => Sp
+       c: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "decalFragmentDeclaration",
+       TQ = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L17)

```diff
-   42436: (pp, ip, cp) => {
+   42460: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L19)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragmentDeclaration",
-       Ip = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "depthPrePass",
+       TQ = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L30)

```diff
-   42476: (pp, ip, cp) => {
+   42351: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "fogFragment",
-       Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "lightFragmentDeclaration",
+       TQ = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L43)

```diff
-   42443: (pp, ip, cp) => {
+   42355: (QQ, WQ, XQ) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "fogFragmentDeclaration",
-       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "lightUboDeclaration",
+       TQ = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L56)

```diff
-   42174: (pp, ip, cp) => {
+   42364: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L58)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L60-L62` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L60-L62) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L60-L62)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "ltcHelperFunctions",
+       TQ = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L69` → after: `L69-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L69-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L69-L82) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L69)

```diff
-   42412: (pp, ip, cp) => {
+   42184: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "mainUVVaryingDeclaration",
+       TQ = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42143: (QQ, WQ, XQ) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L73-L75` → after: `L86-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L86-L88) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "imageProcessingDeclaration",
-       Ip = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "meshUboDeclaration",
+       TQ = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L82` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L95) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L82)

```diff
-   42416: (pp, ip, cp) => {
+   42349: (QQ, WQ, XQ) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L86-L88` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L99-L101) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L86-L88)

```diff
-     var Op = cp(40062);
-     const op = "imageProcessingFunctions",
-       Ip = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "oitDeclaration",
+       TQ = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L95` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L108) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L95)

```diff
-   42266: (pp, ip, cp) => {
+   42482: (QQ, WQ, XQ) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L97` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L110) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L97)

```diff
-       e: () => Sp
+       d: () => zQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L99-L101` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L112-L114) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L99-L101)

```diff
-     var Op = cp(40062);
-     const op = "logDepthDeclaration",
-       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "oitFragment",
+       TQ = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L108` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L121) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L108)

```diff
-   42470: (pp, ip, cp) => {
+   42391: (QQ, WQ, XQ) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L112-L114` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L125-L127) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L112-L114)

```diff
-     var Op = cp(40062);
-     const op = "logDepthFragment",
-       Ip = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "reflectionFunction",
+       TQ = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L121` → after: `L134-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L134-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L134-L147) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L121)

```diff
-   42362: (pp, ip, cp) => {
+   42387: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "samplerFragmentDeclaration",
+       TQ = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42137: (QQ, WQ, XQ) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L125-L127` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L151-L153) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L125-L127)

```diff
-     var Op = cp(40062);
-     const op = "objectIdFunctions",
-       Ip = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "sceneUboDeclaration",
+       TQ = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L134` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L160) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L134)

```diff
-   42365: (pp, ip, cp) => {
+   42380: (QQ, WQ, XQ) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L136` → after: `L162-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L162-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L162-L175) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L136)

```diff
-       c: () => Sp
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "shadowsFragmentFunctions",
+       TQ = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42408: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L138-L141` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/327.js#L177-L179) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/327.js#L138-L141)

```diff
-     var Op = cp(40062);
-     cp(42362);
-     const op = "prePassDeclaration",
-       Ip = "#ifdef PREPASS\n#extension GL_EXT_draw_buffers : require\n#ifdef PREPASS_MESH_BLEND_TAG\n#if {X}>0\n#if PREPASS_MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if  … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "textureRepetitionFunctions",
+       TQ = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/328.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/328.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L4)

```diff
-   42449: (pp, ip, cp) => {
+   42447: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L6` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L6-L19) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L6)

```diff
-       d: () => Sp
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bumpFragment",
+       TQ = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42421: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L8` → after: `L21-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L21-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L21-L48) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L8)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
+     XQ(42387);
+     const qQ = "bumpFragmentFunctions",
+       TQ = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42414: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bumpFragmentMainFunctions",
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L17` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L57) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L17)

```diff
-   42436: (pp, ip, cp) => {
+   42425: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L19` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L59) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L19)

```diff
-       e: () => Sp
+       c: () => zQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L21` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L61) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L21)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L30` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L70) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L30)

```diff
-   42476: (pp, ip, cp) => {
+   42158: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L34-L36` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L74-L76) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "fogFragment",
-       Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L43` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L83) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L43)

```diff
-   42443: (pp, ip, cp) => {
+   42335: (QQ, WQ, XQ) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L45` → after: `L85-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L85-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L85-L124) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L45)

```diff
-       b: () => Sp
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "objectIdFunctions",
+       TQ = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   62028: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+ ... (24 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L47-L49` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L126-L128) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "fogFragmentDeclaration",
-       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "openpbrIblFunctions",
+       TQ = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L56` → after: `L135-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L135-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L135-L161) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L56)

```diff
-   42174: (pp, ip, cp) => {
+   62052: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "openpbrSubsurfaceLayerData",
+       TQ = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   62045: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+ ... (11 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L60-L62` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L165-L167) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L60-L62)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "pbrBRDFFunctions",
+       TQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L69` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L174) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L69)

```diff
-   42266: (pp, ip, cp) => {
+   61838: (QQ, WQ, XQ) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L73-L75` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L178-L180) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "logDepthDeclaration",
-       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "pbrFragmentReflectionDeclaration",
+       TQ = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L82` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L187) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L82)

```diff
-   42470: (pp, ip, cp) => {
+   61874: (QQ, WQ, XQ) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L86-L88` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L191-L193) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L86-L88)

```diff
-     var Op = cp(40062);
-     const op = "logDepthFragment",
-       Ip = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "pbrIBLFunctions",
+       TQ = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L95` → after: `L200-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L200-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L200-L252) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L95)

```diff
-   61425: (pp, ip, cp) => {
+   42391: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "reflectionFunction",
+       TQ = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42387: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+ ... (37 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L97-L115` → after: `L254-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L254-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L254-L284) · [Before (L97-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L97-L115)

```diff
-       skyPixelShader: () => vp
-     });
-     var Op = cp(40062),
-       op = cp(42436),
-       Ip = cp(42266),
-       Sp = cp(42443),
-       xp = cp(42174),
-       Lp = cp(42449),
-       Yp = cp(42470),
-       Dp = cp(42476);
-     const Ap = "imageProcessingCompatibility",
-       Pp = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     Op.b.IncludesShadersStore[Ap] || (Op.b.IncludesShadersStore[Ap] = Pp);
-     const Wp = {
-         name: Ap,
-         shader: Pp
- ... (3 more removed lines; see GitHub link above)
+       geometryPixelShader: () => iQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42335),
+       TQ = XQ(42425);
+     const zQ = "mrtFragmentDeclaration",
+       sQ = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     wQ.b.IncludesShadersStore[zQ] || (wQ.b.IncludesShadersStore[zQ] = sQ);
+     const FQ = {
+       name: zQ,
+       shader: sQ
+     };
+     var PQ = XQ(42414),
+       gQ = XQ(42387),
+       JQ = XQ(42421),
+       rQ = XQ(42158),
+ ... (15 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L117` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/328.js#L286) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/328.js#L117)

```diff
-     const wp = [op.e, Ip.e, Sp.b, xp.c, Lp.d, Yp.c, Dp.b, Wp];
+     const hQ = [qQ.e, TQ.c, FQ, PQ.b, gQ.b, JQ.b, rQ.b, IQ.e, jQ.e, BQ.e, yQ.c, VQ.d, DQ.c, pQ.c, GQ.d, UQ.e, bQ.e, vQ.c, dQ.d, HQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/329.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/329.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L4-L17` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/329.js#L4-L199) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/329.js#L4-L17)

```diff
-   42174: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61491: (pp, ip, cp) => {
+   42270: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimation",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42164: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L19-L24` → after: `L201-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L201-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/329.js#L201-L234) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/329.js#L19-L24)

```diff
-       rgbdDecodePixelShader: () => Lp
-     });
-     var Op = cp(40062),
-       op = cp(42174);
-     const Ip = "rgbdDecodePixelShader",
-       Sp = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+       geometryVertexShader: () => hQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(42162),
+       TQ = XQ(42164),
+       zQ = XQ(42224),
+       sQ = XQ(42230),
+       FQ = XQ(42169);
+     const PQ = "geometryVertexDeclaration",
+       gQ = "uniform mat4 viewProjection;uniform mat4 view;";
+     wQ.b.IncludesShadersStore[PQ] || (wQ.b.IncludesShadersStore[PQ] = gQ);
+     const JQ = {
+       name: PQ,
+       shader: gQ
+     };
+     var rQ = XQ(42137);
+ ... (18 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L26` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/329.js#L236) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/329.js#L26)

```diff
-     const xp = [op.c];
+     const lQ = [qQ.e, TQ.e, zQ.c, sQ.b, FQ.c, JQ, rQ.e, BQ, yQ.c, VQ.c, DQ.c, pQ.e, GQ.d, UQ.e, bQ.c, vQ.d, dQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/330.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/330.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L4)

```diff
-   42174: (pp, ip, cp) => {
+   42148: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L6)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L8-L10` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L8-L11) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "helperFunctions",
-       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     var wQ = XQ(40126);
+     XQ(42137), XQ(42143);
+     const qQ = "defaultUboDeclaration",
+       TQ = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L17)

```diff
-   61507: (pp, ip, cp) => {
+   42325: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L19)

```diff
-       rgbdEncodePixelShader: () => Lp
+       defaultPixelShader: () => MQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L21-L24` → after: `L22-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L22-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L22-L84) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L21-L24)

```diff
-     var Op = cp(40062),
-       op = cp(42174);
-     const Ip = "rgbdEncodePixelShader",
-       Sp = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     var wQ = XQ(40126),
+       qQ = XQ(42328);
+     const TQ = "defaultFragmentDeclaration",
+       zQ = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     wQ.b.IncludesShadersStore[TQ] || (wQ.b.IncludesShadersStore[TQ] = zQ);
+     const sQ = {
+       name: TQ,
+       shader: zQ
+     };
+     var FQ = XQ(42137),
+       PQ = XQ(42143),
+       gQ = XQ(42148),
+       JQ = XQ(42335),
+       rQ = XQ(42341),
+       IQ = XQ(42349),
+       jQ = XQ(42184),
+ ... (47 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L26` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/330.js#L86) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/330.js#L26)

```diff
-     const xp = [op.c];
+     const mQ = [qQ.c, sQ, FQ.e, PQ.b, gQ.e, JQ.e, rQ.c, IQ.c, jQ.e, BQ.b, yQ.b, VQ.b, DQ.b, pQ.e, bQ, vQ.d, dQ.b, lQ, hQ.c, iQ.d, cQ.e, AQ.b, RQ.b, EQ.b, CQ.c, uQ.e, LQ.e, kQ.e, fQ.c, SQ.b, eQ, nQ.b, xQ.b, YQ.d, NQ.b, ZQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/331.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/331.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824)

#### 1. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L4)

```diff
-   42298: (pp, ip, cp) => {
+   42439: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "bakedVertexAnimation",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L17)

```diff
-   42182: (pp, ip, cp) => {
+   42425: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "bakedVertexAnimationDeclaration",
-       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragmentDeclaration",
+       TQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L30)

```diff
-   42178: (pp, ip, cp) => {
+   42473: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "bonesDeclaration",
-       Ip = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogFragment",
+       TQ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L43)

```diff
-   42291: (pp, ip, cp) => {
+   42433: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L45)

```diff
-       d: () => Sp
+       e: () => zQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "bonesVertex",
-       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "fogFragmentDeclaration",
+       TQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L56)

```diff
-   42319: (pp, ip, cp) => {
+   42158: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L58)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L60-L62` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L60-L62) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L60-L62)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L69)

```diff
-   42226: (pp, ip, cp) => {
+   42396: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L71)

```diff
-       c: () => Sp
+       d: () => zQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L73-L75` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L73-L75) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "imageProcessingDeclaration",
+       TQ = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L82)

```diff
-   42327: (pp, ip, cp) => {
+   42402: (QQ, WQ, XQ) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L84)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L86-L88` → after: `L86-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L86-L88) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L86-L88)

```diff
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "imageProcessingFunctions",
+       TQ = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L95)

```diff
-   42232: (pp, ip, cp) => {
+   42237: (QQ, WQ, XQ) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L99-L101` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L99-L101) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L99-L101)

```diff
-     var Op = cp(40062);
-     const op = "fogVertexDeclaration",
-       Ip = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "logDepthDeclaration",
+       TQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L108)

```diff
-   42190: (pp, ip, cp) => {
+   42469: (QQ, WQ, XQ) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L110)

```diff
-       e: () => Sp
+       d: () => zQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L112-L114` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L112-L114) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L112-L114)

```diff
-     var Op = cp(40062);
-     const op = "instancesDeclaration",
-       Ip = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "logDepthFragment",
+       TQ = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L121)

```diff
-   42286: (pp, ip, cp) => {
+   42335: (QQ, WQ, XQ) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L123)

```diff
-       b: () => Sp
+       e: () => zQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L125-L127` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L125-L127) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L125-L127)

```diff
-     var Op = cp(40062);
-     const op = "instancesVertex",
-       Ip = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "objectIdFunctions",
+       TQ = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L138-L140` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/331.js#L138-L141) · [Before (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/331.js#L138-L140)

```diff
-     var Op = cp(40062);
-     const op = "vertexColorMixing",
-       Ip = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+     var wQ = XQ(40126);
+     XQ(42335);
+     const qQ = "prePassDeclaration",
+       TQ = "#ifdef PREPASS\n#extension GL_EXT_draw_buffers : require\n#ifdef PREPASS_MESH_BLEND_TAG\n#if {X}>0\n#if PREPASS_MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if  … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/332.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/332.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782)

#### 1. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L4)

```diff
-   42190: (pp, ip, cp) => {
+   42439: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "instancesDeclaration",
-       Ip = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragment",
+       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L17)

```diff
-   42286: (pp, ip, cp) => {
+   42425: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L19)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "instancesVertex",
-       Ip = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "clipPlaneFragmentDeclaration",
+       TQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L30` → after: `L30-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L30-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L30-L95) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L30)

```diff
-   61972: (pp, ip, cp) => {
+   42473: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "fogFragment",
+       TQ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42433: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+ ... (50 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L32` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L97) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L32)

```diff
-       greasedLineVertexShader: () => Yp
+       skyPixelShader: () => VQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L34-L38` → after: `L99-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L99-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L99-L115) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L34-L38)

```diff
-     var Op = cp(40062),
-       op = cp(42190),
-       Ip = cp(42286);
-     const Sp = "greasedLineVertexShader",
-       xp = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42425),
+       TQ = XQ(42237),
+       zQ = XQ(42433),
+       sQ = XQ(42158),
+       FQ = XQ(42439),
+       PQ = XQ(42469),
+       gQ = XQ(42473);
+     const JQ = "imageProcessingCompatibility",
+       rQ = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     wQ.b.IncludesShadersStore[JQ] || (wQ.b.IncludesShadersStore[JQ] = rQ);
+     const IQ = {
+         name: JQ,
+         shader: rQ
+       },
+       jQ = "skyPixelShader",
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L40` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/332.js#L117) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/332.js#L40)

```diff
-     const Lp = [op.e, Ip.b];
+     const yQ = [qQ.c, TQ.e, zQ.e, sQ.b, FQ.e, PQ.d, gQ.b, IQ];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/333.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/333.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/333.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/333.js#L4)

```diff
-   42316: (pp, ip, cp) => {
+   42158: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/333.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/333.js#L6)

```diff
-       d: () => Sp
+       b: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/333.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/333.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertex",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/333.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/333.js#L17-L19)

```diff
-   42220: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
+   61663: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       rgbdDecodePixelShader: () => FQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L21-L119` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/333.js#L21-L24) · [Before (L21-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/333.js#L21-L119)

```diff
-     var Op = cp(40062);
-     const op = "bumpVertexDeclaration",
-       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61640: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "harmonicsFunctions",
-       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
- ... (83 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42158);
+     const TQ = "rgbdDecodePixelShader",
+       zQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L121` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/333.js#L26) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/333.js#L121)

```diff
-     const rp = [op.e, xp, Lp.d, Yp.d, Dp.b, Ap.c, Pp.e, Wp.c, yp.e, Up.b, wp.c, vp.e, tp.c, Hp.e, dp.c, ep.e, jp.c, kp.e, mp.b, Rp.d, qp.b, Mp.c, Cp.e, Ep.e, Xp.b, lp.b, Qp.d, Jp.e, Bp.c, Np.b, Tp.b, fp.d, bp.c, hp.c, ap.e, np.c, Fp.b];
+     const sQ = [qQ.b];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/334.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/334.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/334.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/334.js#L4)

```diff
-   42319: (pp, ip, cp) => {
+   42158: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/334.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/334.js#L6)

```diff
-       c: () => Sp
+       b: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/334.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/334.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertex",
-       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "helperFunctions",
+       TQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/334.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/334.js#L17-L19)

```diff
-   42226: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   61673: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       rgbdEncodePixelShader: () => FQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L21-L94` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/334.js#L21-L24) · [Before (L21-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/334.js#L21-L94)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneVertexDeclaration",
-       Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42327: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "fogVertex",
-       Ip = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
- ... (58 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42158);
+     const TQ = "rgbdEncodePixelShader",
+       zQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L96` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/334.js#L26) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/334.js#L96)

```diff
-     const Pp = [op.c, Ip.e, Sp.e, xp.c, Lp.c, Yp.b];
+     const sQ = [qQ.b];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/335.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/335.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L4)

```diff
-   42319: (pp, ip, cp) => {
+   42270: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L8` → after: `L8-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L8-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L8-L60) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L8)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimation",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42164: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "bakedVertexAnimationDeclaration",
+       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+ ... (37 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L17` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L69) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L17)

```diff
-   42226: (pp, ip, cp) => {
+   42199: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L21` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L73) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L21)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L30` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L82) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L30)

```diff
-   42327: (pp, ip, cp) => {
+   42304: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L32` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L84) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L32)

```diff
-       c: () => Sp
+       e: () => zQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L34` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L86) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L34)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L43` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L95) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L43)

```diff
-   42232: (pp, ip, cp) => {
+   42207: (QQ, WQ, XQ) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L45` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L97) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L45)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L47` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L99) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L47)

```diff
-     var Op = cp(40062);
+     var wQ = XQ(40126);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L56` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L108) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L56)

```diff
-   42266: (pp, ip, cp) => {
+   42169: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L58` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L110) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L58)

```diff
-       e: () => Sp
+       c: () => zQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L60-L62` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L112-L114) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L60-L62)

```diff
-     var Op = cp(40062);
-     const op = "logDepthDeclaration",
-       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "instancesDeclaration",
+       TQ = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L69` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L121) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L69)

```diff
-   42346: (pp, ip, cp) => {
+   42257: (QQ, WQ, XQ) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L71` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L123) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L71)

```diff
-       b: () => Sp
+       d: () => zQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L73-L75` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L125-L127) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L73-L75)

```diff
-     var Op = cp(40062);
-     const op = "logDepthVertex",
-       Ip = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "instancesVertex",
+       TQ = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L82` → after: `L134-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L134-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L134-L147) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L82)

```diff
-   61421: (pp, ip, cp) => {
+   42316: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "vertexColorMixing",
+       TQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   42843: (QQ, WQ, XQ) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L84` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L149) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L84)

```diff
-       skyVertexShader: () => Wp
+       colorVertexShader: () => DQ
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L86-L94` → after: `L151-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L151-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L151-L164) · [Before (L86-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L86-L94)

```diff
-     var Op = cp(40062),
-       op = cp(42266),
-       Ip = cp(42226),
-       Sp = cp(42232),
-       xp = cp(42319),
-       Lp = cp(42346),
-       Yp = cp(42327);
-     const Dp = "skyVertexShader",
-       Ap = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42162),
+       TQ = XQ(42164),
+       zQ = XQ(42199),
+       sQ = XQ(42207),
+       FQ = XQ(42169),
+       PQ = XQ(42257),
+       gQ = XQ(42262),
+       JQ = XQ(42270),
+       rQ = XQ(42299),
+       IQ = XQ(42304),
+       jQ = XQ(42316);
+     const BQ = "colorVertexShader",
+       yQ = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L96` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/335.js#L166) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/335.js#L96)

```diff
-     const Pp = [op.e, Ip.c, Sp.e, xp.c, Lp.b, Yp.c];
+     const VQ = [qQ.e, TQ.e, zQ.c, sQ.b, FQ.c, PQ.d, gQ.e, JQ.c, rQ.d, IQ.e, jQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/336.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/336.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L4)

```diff
-   42452: (pp, ip, cp) => {
+   42169: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "bumpFragment",
-       Ip = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "instancesDeclaration",
+       TQ = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L17)

```diff
-   42429: (pp, ip, cp) => {
+   42257: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L19)

```diff
-       e: () => Sp
+       d: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L21-L24` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L21-L23) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L21-L24)

```diff
-     var Op = cp(40062);
-     cp(42403);
-     const op = "bumpFragmentFunctions",
-       Ip = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "instancesVertex",
+       TQ = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L31-L33` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L30-L32) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L31-L33)

```diff
-   42423: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
+   62164: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       greasedLineVertexShader: () => PQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L35-L77` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/336.js#L34-L41) · [Before (L35-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/336.js#L35-L77)

```diff
-     var Op = cp(40062);
-     const op = "bumpFragmentMainFunctions",
-       Ip = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   42392: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "clusteredLightingFunctions",
-       Ip = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
- ... (27 more removed lines; see GitHub link above)
+     var wQ = XQ(40126),
+       qQ = XQ(42169),
+       TQ = XQ(42257);
+     const zQ = "greasedLineVertexShader",
+       sQ = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     wQ.b.ShadersStore[zQ] || (wQ.b.ShadersStore[zQ] = sQ);
+     const FQ = [qQ.c, TQ.d];
+     for (const gQ of FQ) wQ.b.IncludesShadersStore[gQ.name] || (wQ.b.IncludesShadersStore[gQ.name] = gQ.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/337.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/337.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L4)

```diff
-   42449: (pp, ip, cp) => {
+   42294: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragment",
-       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bumpVertex",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L17)

```diff
-   42436: (pp, ip, cp) => {
+   42193: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L19)

```diff
-       e: () => Sp
+       b: () => zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L21-L23)

```diff
-     var Op = cp(40062);
-     const op = "clipPlaneFragmentDeclaration",
-       Ip = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "bumpVertexDeclaration",
+       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L30)

```diff
-   42476: (pp, ip, cp) => {
+   61816: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L32)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L34-L36)

```diff
-     var Op = cp(40062);
-     const op = "fogFragment",
-       Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     var wQ = XQ(40126);
+     const qQ = "harmonicsFunctions",
+       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L43)

```diff
-   42443: (pp, ip, cp) => {
+   61807: (QQ, WQ, XQ) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L45)

```diff
-       b: () => Sp
+       c: () => zQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "fogFragmentDeclaration",
-       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "pbrBRDFFunctions",
+       TQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L56` → after: `L56-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L56-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L56-L70) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L56)

```diff
-   42863: (pp, ip, cp) => {
+   61805: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     XQ(42137), XQ(42143);
+     const qQ = "pbrUboDeclaration",
+       TQ = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   61797: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L58` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L72) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L58)

```diff
-       colorPixelShader: () => Ap
+       pbrVertexShader: () => NQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L60-L66` → after: `L74-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L74-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L74-L119) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L60-L66)

```diff
-     var Op = cp(40062),
-       op = cp(42436),
-       Ip = cp(42443),
-       Sp = cp(42449),
-       xp = cp(42476);
-     const Lp = "colorPixelShader",
-       Yp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42131);
+     const TQ = "pbrVertexDeclaration",
+       zQ = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     wQ.b.IncludesShadersStore[TQ] || (wQ.b.IncludesShadersStore[TQ] = zQ);
+     const sQ = {
+       name: TQ,
+       shader: zQ
+     };
+     var FQ = XQ(42137),
+       PQ = XQ(42143),
+       gQ = XQ(61805),
+       JQ = XQ(42155),
+       rQ = XQ(42184),
+       IQ = XQ(42158),
+       jQ = XQ(61807),
+ ... (30 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L68` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/337.js#L121) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/337.js#L68)

```diff
-     const Dp = [op.e, Ip.b, Sp.d, xp.b];
+     const YQ = [qQ.e, sQ, FQ.e, PQ.b, gQ.d, JQ.b, rQ.e, IQ.b, jQ.c, BQ.e, yQ.e, VQ.c, DQ.d, pQ.c, GQ.c, UQ.b, bQ.c, vQ.b, dQ.e, HQ.b, aQ.c, lQ.b, hQ.e, iQ.c, cQ.e, AQ.d, RQ.e, EQ.c, CQ.d, uQ.e, LQ.c, kQ.d, fQ.d, SQ.e, tQ.d, oQ.d, eQ.d];
```
