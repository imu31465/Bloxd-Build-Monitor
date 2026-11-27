# Changed — Bundle Modifications Report (Part 017 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `17 / 86` (**287** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (93 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 92. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4259-L4266` → after: `L1095-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1095-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L1095-L1108) · [Before (L4259-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4259-L4266)

```diff
-     function RB(BB) {
-       switch (BB) {
-         case JB.b.TEXTURETYPE_HALF_FLOAT:
-           return 65504;
-         case JB.b.TEXTURETYPE_FLOAT:
-           return 3e38;
-         default:
-           return 1
+     function XW(WW, iW, OW) {
+       let mW = 0,
+         EW = 0,
+         NW = 0,
+         PW = 0;
+       if ("object" === typeof OW) {
+         const LW = OW.precision ? Math.abs(OW.precision) : 1;
+         OW.width && OW.height ? (mW = OW.height * LW, EW = OW.width * LW) : OW.width && !OW.height ? (EW = OW.width * LW, mW = Math.round(EW / WW.getAspectRatio(iW))) : OW.height && !OW.width ? (mW = OW.height * LW, EW = Math.round(mW * WW.getAspectRatio(iW))) : (EW = Math.round( … [truncated]
+       } else isNaN(OW) || (mW = OW, EW = OW, NW = OW, PW = OW);
+       return EW && (EW = Math.floor(EW)), mW && (mW = Math.floor(mW)), NW && (NW = Math.floor(NW)), PW && (PW = Math.floor(PW)), {
+         height: 0 | mW,
+         width: 0 | EW,
+         finalWidth: 0 | NW,
+         finalHeight: 0 | PW
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4269-L4594` → after: `L1111-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1111-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L1111-L1126) · [Before (L4269-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4269-L4594)

```diff
-     let WB = (() => {
-       var BB;
-       let OB, jB, JB, zB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB = yB.d,
-         IB = [],
-         FB = [],
-         iB = [],
-         LB = [],
-         gB = [],
-         rB = [],
-         XB = [],
-         wB = [],
-         EB = [],
-         cB = [],
-         hB = [],
-         aB = [],
-         eB = [],
- ... (310 more removed lines; see GitHub link above)
+     const BW = {
+       CreateScreenshot: gW,
+       CreateScreenshotAsync: DW,
+       CreateScreenshotWithResizeAsync: VW,
+       CreateScreenshotUsingRenderTarget: pW,
+       CreateScreenshotUsingRenderTargetAsync: fW,
+       CreateScreenshotForFrameGraphAsync: CW
+     };
+     let qW = !1;
+ 
+     function RW() {
+       if (qW) return;
+       qW = !0;
+       lW.f.CreateScreenshot = gW, lW.f.CreateScreenshotAsync = DW, lW.f.CreateScreenshotUsingRenderTarget = pW, lW.f.CreateScreenshotUsingRenderTargetAsync = fW
+     }
+     RW()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L163` → after: `L4-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L72) · [Before (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L163)

```diff
-   42093: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB,
-       h: () => MB,
-       l: () => JB
-     });
-     var YB, DB = GB(37807),
-       QB = GB(37778);
-     ! function(BB) {
-       BB[BB.CW = 0] = "CW", BB[BB.CCW = 1] = "CCW"
-     }(YB || (YB = {}));
-     class oB {
-       static Interpolate(BB, OB, GB, YB, DB) {
-         if (0 === BB) return 0;
-         const QB = 1 - 3 * YB + 3 * OB,
-           oB = 3 * YB - 6 * OB,
- ... (144 more removed lines; see GitHub link above)
+   38937: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW
+     });
+     var mW = OW(38939);
+     class EW {
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
+       }
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
+       }
+       static GetFarPlaneToRef(WW, iW) {
+ ... (53 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L165-L300` → after: `L74-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L74-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/272.js#L74-L138) · [Before (L165-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/272.js#L165-L300)

```diff
-         for (let GB = BB - 1, YB = 0; YB < BB; GB = YB++) OB += this._points[GB].x * this._points[YB].y - this._points[YB].x * this._points[GB].y;
-         return .5 * OB
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(BB) {
-         if (BB < 0 || BB > 1) return QB.o.Zero();
-         const OB = BB * this.length();
-         let GB = 0;
-         for (let YB = 0; YB < this._points.length; YB++) {
-           const BB = (YB + 1) % this._points.length,
-             DB = this._points[YB],
-             oB = this._points[BB].subtract(DB),
-             jB = oB.length() + GB;
-           if (OB >= GB && OB <= jB) {
- ... (120 more removed lines; see GitHub link above)
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+           ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
+         return new EW(cW, wW, tW, ZW)
+       }
+ ... (49 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L339` → after: `L177-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L177-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/272.js#L177-L188) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/272.js#L339)

```diff
-   39366: (BB, OB, GB) => {
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
+     }
+     OW.d(iW, {
+       b: () => mW
+     })
+   },
+   39911: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L362` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/272.js#L211) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/272.js#L362)

```diff
-         const OB = BB => BB < 10 ? "0" + BB : "" + BB,
+         const iW = WW => WW < 10 ? "0" + WW : "" + WW,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L377` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/272.js#L226) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/272.js#L377)

```diff
-         const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
+         const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L2)

```diff
- export const ids = [273];
+ export const ids = [272, 273];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L10` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L11) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L10)

```diff
-   42113: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => lB,
-       e: () => JB,
-       i: () => PB,
-       j: () => MB,
-       m: () => zB
+   64398: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       RegisterShaderMaterial: () => mW.b,
+       ShaderMaterial: () => mW.o,
+       ShaderMaterialCreateFromSnippetAsync: () => mW.d,
+       ShaderMaterialParse: () => mW.k,
+       ShaderMaterialParseFromFileAsync: () => mW.h,
+       ShaderMaterialParseFromSnippetAsync: () => mW.i
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L12-L127` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L13-L14) · [Before (L12-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L12-L127)

```diff
-     var YB = GB(1217),
-       DB = GB(2392),
-       QB = GB(37849),
-       oB = GB(38201);
-     class jB {
-       constructor(BB, OB) {
-         this.pose = BB, this.nodes = void 0, this.nodes = BB.boneNames.map((BB => OB.get(BB)))
-       }
-       write(BB) {
-         this.pose.pose(BB), (0, oB.q)(this.pose, this.nodes)
-       }
-     }
- 
-     function yB(BB) {
-       BB.unfreezeWorldMatrix();
-       for (const OB of BB.getChildren()) yB(OB)
- ... (100 more removed lines; see GitHub link above)
+     var mW = OW(41985);
+     (0, mW.b)()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L129-L133` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L16-L18) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L129-L133)

```diff
-   42079: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       openMobLineupPreview: () => TB,
-       openMobPreview: () => eB,
-       openPetPreview: () => bB
+   38937: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L135-L331` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L20) · [Before (L135-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L135-L331)

```diff
-     var YB = GB(40825),
-       DB = GB(41089),
-       QB = GB(42087),
-       oB = GB(37885),
-       jB = GB(37771),
-       yB = GB(41246),
-       JB = GB(42111),
-       MB = GB(39127),
-       PB = GB(37845),
-       zB = GB(37836),
-       lB = GB(37769),
-       pB = GB(39039),
-       qB = GB(39035),
-       ZB = GB(38771),
-       NB = GB(37849),
-       RB = GB(3088),
- ... (181 more removed lines; see GitHub link above)
+     var mW = OW(38939);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L333-L346` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L22-L25) · [Before (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L333-L346)

```diff
-       constructor(BB, OB) {
-         this.place = OB, this.remove = null;
-         const {
-           engine: GB,
-           eq: YB,
-           canvas: DB
-         } = gB();
-         BB.appendChild(DB), GB.resize(), GB.runRenderLoop((() => {
-           YB.render()
-         }))
-       }
-       show(BB) {
-         var OB;
-         null === (OB = this.remove) || void 0 === OB || OB.call(this), this.remove = this.place(BB)
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L348-L353` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L27-L29) · [Before (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L348-L353)

```diff
-       resize(BB, OB) {
-         const {
-           engine: GB,
-           canvas: YB
-         } = gB();
-         YB.width = BB, YB.height = OB, GB.resize()
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L355-L357` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L31-L33) · [Before (L355-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L355-L357)

```diff
-       close() {
-         var BB;
-         gB().engine.stopRenderLoop(), null === (BB = this.remove) || void 0 === BB || BB.call(this), this.remove = null
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L359-L365` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L35-L37) · [Before (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L359-L365)

```diff
-     }
-     class aB {
-       constructor(BB) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new hB(BB, (() => () => {}))
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L367-L368` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L39-L41) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L367-L368)

```diff
-       show(BB) {
-         BB.figures !== this.view.figures && this.preload(BB.figures), this.view = BB, this.place()
+       static GetRightPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L370-L371` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L43-L45) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L370-L371)

```diff
-       resize(BB, OB) {
-         this.preview.resize(BB, OB), this.aspect = BB / OB, this.place()
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L373-L376` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L47-L49) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L373-L376)

```diff
-       close() {
-         this.preview.close();
-         for (const BB of this.placed) null === BB || void 0 === BB || BB.remove();
-         this.placed = []
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L378-L385` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L51-L52) · [Before (L378-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L378-L385)

```diff
-       preload(BB) {
-         const OB = () => {};
-         rB("NPC").catch(OB);
-         for (const {
-             cW: GB,
-             cosmetics: YB
-           }
-           of BB) null !== GB && XB(GB).catch(OB), SB(gB().eq, YB).catch(OB)
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L387-L404` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L54-L57) · [Before (L387-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L387-L404)

```diff
-       place() {
-         const {
-           figures: BB,
-           shown: OB
-         } = this.view, GB = BB.map(((GB, YB) => {
-           var DB;
-           const QB = null !== (DB = this.placed[YB]) && void 0 !== DB ? DB : null;
-           if (!OB[YB]) return null === QB || void 0 === QB || QB.remove(), null;
-           const oB = (jB = (YB + .5) / BB.length, yB = this.aspect, (.5 - jB) * (2 * dB * Math.tan(gB().camera.fov / 2)) * yB);
-           var jB, yB;
-           return null !== QB && QB.figure === GB && QB.x === oB ? QB : (null === QB || void 0 === QB || QB.remove(), {
-             figure: GB,
-             x: oB,
-             remove: EB(GB, oB)
-           })
-         }));
- ... (2 more removed lines; see GitHub link above)
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L420` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L61) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L420)

```diff
-   39497: (BB, OB, GB) => {
+   38939: (WW, iW, OW) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L422-L545` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L63) · [Before (L422-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L422-L545)

```diff
-       d: () => zB
-     });
-     var YB = GB(37903),
-       DB = GB(38008),
-       QB = GB(38042),
-       oB = GB(37919),
-       jB = GB(37910);
- 
-     function yB(BB) {
-       return `\n\t\t\t\t${(0,jB.q)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, jB.t)(BB, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, jB.t)(BB, "float", "c", "cos(ang)")
-       }\
- ... (108 more removed lines; see GitHub link above)
+       c: () => EW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L547-L577` → after: `L65-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L65-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L65-L144) · [Before (L547-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L547-L577)

```diff
-     var YB = GB(42129),
-       DB = GB(38682);
-     class QB extends((0, YB.e)(DB.e)) {}(0, YB.h)(DB.e, QB);
-     var oB = GB(38005);
-     class jB extends((0, YB.e)(oB.f)) {}(0, YB.h)(oB.f, jB);
-     var yB = GB(38531);
-     class JB extends((0, YB.e)(yB.f)) {}(0, YB.h)(yB.f, JB);
-     var MB = GB(38025),
-       PB = GB(41258),
-       zB = GB(38019);
-     class lB extends((0, YB.e)(zB.f)) {
-       constructor(BB, OB, GB) {
-         super(BB, OB, GB), (0, MB.j)(BB)
-       }
-       dispose(BB) {
-         (0, MB.m)(this._material), super.dispose(BB)
- ... (15 more removed lines; see GitHub link above)
+     var mW = OW(38241);
+     class EW {
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
+       }
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+ ... (64 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L579` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L146) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L579)

```diff
-   42129: (BB, OB, GB) => {
+   39908: (WW, iW, OW) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L581-L583` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L148) · [Before (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L581-L583)

```diff
-       b: () => cB,
-       e: () => RB,
-       h: () => CB
+       c: () => NW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L585-L661` → after: `L150-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L150-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L150-L183) · [Before (L585-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L585-L661)

```diff
-     var YB = GB(41258),
-       DB = GB(42131),
-       QB = GB(42177),
-       oB = GB(42133),
-       jB = GB(38494),
-       yB = GB(38504),
-       JB = GB(38513),
-       MB = GB(38515),
-       PB = GB(37958),
-       zB = GB(37962),
-       lB = GB(42140),
-       pB = GB(37919),
-       qB = GB(37946),
-       ZB = GB(37910);
- 
-     function NB(BB, OB) {
- ... (61 more removed lines; see GitHub link above)
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+           const iW = [];
+           do {
+             const OW = Object.getOwnPropertyNames(WW);
+             for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
+           } while (WW = Object.getPrototypeOf(WW));
+           return iW
+         }(WW);
+         for (const wW of LW) {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L795-L798` → after: `L188-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L188-L194) · [Before (L795-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L795-L798)

```diff
-     const bB = new Map;
- 
-     function CB(BB, OB) {
-       bB.set(BB, OB)
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L800-L881` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L196-L197) · [Before (L800-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L800-L881)

```diff
-     CB(jB.e, WB), CB(yB.f, kB), CB(JB.i, TB), CB(MB.f, EB), (0, PB.c)({
-       create: (BB, OB) => {
-         const GB = new YB.StandardMaterial(BB.name, OB);
-         return (0, hB.n)(BB, GB), GB.detailMap._pluginDefineNames
-       },
-       write: (BB, OB, GB) => {
-         (0, hB.M)(BB.mirror, OB, GB)
-       },
-       addFeature: (BB, OB, GB) => {
-         const YB = bB.get(OB.feature);
-         if (!YB) throw new Error(`${OB.feature.name} has no plugin class (registerPluginClass)`);
-         new YB(BB.mirror, OB.state, ...GB)
-       },
-       texture: (BB, OB, GB) => {
-         let {
-           url: YB,
- ... (66 more removed lines; see GitHub link above)
+     OW.d(iW, {
+       b: () => mW
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L884` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L200) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L884)

```diff
-   42169: (BB, OB, GB) => {
+   39911: (WW, iW, OW) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L886-L888` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L202) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L886-L888)

```diff
-       d: () => MB,
-       g: () => PB,
-       h: () => zB
+       b: () => mW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L890-L1051` → after: `L204-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L204-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/273.js#L204-L254) · [Before (L890-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/273.js#L890-L1051)

```diff
-     var YB = GB(42160),
-       DB = GB(41067),
-       QB = GB(41300),
-       oB = GB(41426),
-       jB = GB(42167),
-       yB = GB(41423),
-       JB = GB(38087);
-     class MB extends oB.d {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (BB, OB) => {
-           this.releaseUnlessInstanced(OB)
-         }, this.onLinked = null
-       }
-       link(BB) {
-         var OB;
-         (0, JB.k)(BB), this.model = BB, null === (OB = this.onLinked) || void 0 === OB || OB.call(this, BB)
- ... (146 more removed lines; see GitHub link above)
+     class mW {
+       static _CheckLimit(WW, iW) {
+         let OW = mW._LogLimitOutputs[WW];
+         return OW ? OW.current++ : (OW = {
+           limit: iW,
+           current: 1
+         }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
+       }
+       static _GenerateLimitMessage(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const OW = mW._LogLimitOutputs[WW];
+         if (!OW || !mW.MessageLimitReached) return;
+         const EW = this._Levels[iW];
+         OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
+       }
+       static _AddLogEntry(WW) {
+ ... (35 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L4)

```diff
-   42048: (BB, OB, GB) => {
+   39689: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L9-L13` → after: `L8-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L8-L39) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L9-L13)

```diff
-     var YB = GB(2034);
-     let DB = !1;
- 
-     function QB() {
-       DB = !0
+     var mW = OW(39696);
+     const EW = [0, 0, 0];
+     class NW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW;
+         this.pool = WW, this.origin = iW, this.count = 0, this.free = []
+       }
+       take() {
+         var WW;
+         const iW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.count++;
+         return iW >= this.pool.aZ && this.pool.grow(Math.max(2 * this.pool.aZ, iW + 1)), this.hide(iW), iW
+       }
+       release(WW) {
+         this.hide(WW), this.free.push(WW)
+       }
+       write(WW, iW, OW, EW) {
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L15-L17` → after: `L41-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L41-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L41-L71) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L15-L17)

```diff
- 
-     function oB() {
-       DB && (DB = !1, (0, YB.b)())
+     class PW {
+       constructor(WW, iW, OW) {
+         this.api = WW, this.model = iW, this.initialCapacity = OW, this.kinds = new Map, this.origin = [0, 0, 0]
+       }
+       kindOf(WW) {
+         let iW = this.kinds.get(WW);
+         if (void 0 === iW) {
+           const OW = this.api.createInstancePool({
+             ...this.model,
+             item: WW
+           }, this.initialCapacity);
+           null === OW || void 0 === OW || OW.setOrigin(this.origin[0], this.origin[1], this.origin[2]), iW = OW && new NW(OW, this.origin), this.kinds.set(WW, iW)
+         }
+         return iW
+       }
+       follow(WW) {
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L20` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L74) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L20)

```diff
-   42045: (BB, OB, GB) => {
+   39708: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L23-L24` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L77-L78) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L23-L24)

```diff
-       e: () => QB,
-       i: () => jB
+       h: () => LW,
+       k: () => cW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L26-L62` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L80-L85) · [Before (L26-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L26-L62)

```diff
-     var YB = GB(41579),
-       DB = GB(41593);
- 
-     function QB(BB) {
-       if (BB.queries.drawCensus() < YB.Cb.BYTES) return null;
-       const OB = BB.memoryData(BB.scratch(), YB.Cb.BYTES, 4, "the draw census");
-       return null === OB ? null : {
-         terrainOpaque: YB.Cb.terrainOpaque(OB, 0),
-         terrainTransparent: YB.Cb.terrainTransparent(OB, 0),
-         terrainPack: YB.Cb.terrainPack(OB, 0),
-         earthSky: YB.Cb.earthSky(OB, 0),
-         skyMeshes: YB.Cb.skyMeshes(OB, 0),
-         regular: YB.Cb.regular(OB, 0),
-         thin: YB.Cb.thin(OB, 0),
-         line: YB.Cb.line(OB, 0),
-         text: YB.Cb.text(OB, 0),
- ... (21 more removed lines; see GitHub link above)
+     const mW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       EW = [0, 1, 2, 0, 2, 3],
+       NW = [4, 5];
+ 
+     function PW(WW, iW, OW, mW, EW) {
+       for (let PW = 0; PW < 6; PW++) NW.includes(PW) === EW && wW(WW, iW, OW, mW, PW)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L65-L84` → after: `L88-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L88-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L88-L521) · [Before (L65-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L65-L84)

```diff
-     function jB() {
-       const BB = (0, DB.j)();
-       return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
-         const OB = QB(BB);
-         if (null === OB) return [];
-         const {
-           terrainOpaque: GB,
-           terrainTransparent: YB,
-           terrainPack: DB,
-           earthSky: jB,
-           skyMeshes: yB,
-           regular: JB,
-           thin: MB,
-           line: PB,
-           text: zB,
-           particles: lB
- ... (4 more removed lines; see GitHub link above)
+     function LW(WW, iW, OW, mW) {
+       for (let EW = 0; EW < 6; EW++) wW(WW, iW, OW, mW, EW)
+     }
+ 
+     function cW(WW, iW, OW, NW, PW) {
+       for (let LW = 0; LW < 6; LW++)
+         for (const cW of [0, 1]) {
+           const [wW, tW, ZW] = [cW + 2, cW + 1, (cW + 3) % 4], xW = WW.length / 3;
+           for (const [iW, EW] of [
+               [cW, tW],
+               [wW, tW],
+               [wW, ZW],
+               [cW, ZW]
+             ])
+             for (let cW = 0; cW < 3; cW++) {
+               const wW = mW[3 * (4 * LW + iW) + cW],
+ ... (418 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L86-L87` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L523-L524) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L86-L87)

```diff
-           label: "Terrain",
-           value: `${GB} opaque / ${YB} transparent (${DB} shader pack)`
+           item: "Glow Dust",
+           amount: 16
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L89-L90` → after: `L526-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L526-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L526-L554) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L89-L90)

```diff
-           label: "Meshes / Thin bases",
-           value: `${JB} / ${MB}`
+           item: "Comet Core",
+           amount: 3
+         }],
+         charge: {
+           items: [{
+             item: "Glow Dust",
+             amount: 4
+           }],
+           powerPerS: 1e4,
+           seconds: 120
+         },
+         islandRadius: 78,
+         machineAllowance: 616,
+         beltAllowance: 2640,
+         newDeposits: [{
+           block: "Uranium Deposit",
+ ... (13 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L92-L93` → after: `L556-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L556-L557) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L92-L93)

```diff
-           label: "Text / Lines",
-           value: `${zB} / ${PB}`
+           item: "Plutonium Pellet",
+           amount: 6
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L95-L98` → after: `L559-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L559-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L559-L584) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L95-L98)

```diff
-           label: "Sky / Particles",
-           value: `${jB+yB} / ${lB}`
-         }]
-       }(BB.api) : []
+           item: "Comet Core",
+           amount: 3
+         }],
+         charge: {
+           items: [{
+             item: "Spent Pellet",
+             amount: 4
+           }, {
+             item: "Plutonium Pellet",
+             amount: 1
+           }],
+           powerPerS: 1e4,
+           seconds: 120
+         },
+         islandRadius: 80,
+         machineAllowance: 680,
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L117-L118` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L588) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L117-L118)

```diff
-       const OB = (0, QB.j)();
-       return null !== OB && +BB === OB.api.localId
+       PW = WW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L122-L140` → after: `L599-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L599-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L599-L604) · [Before (L122-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L122-L140)

```diff
-       MB || (MB = !0, (0, yB.g)(oB.n, (BB => {
-         var OB, GB;
-         const YB = (0, jB.h)(oB.n, BB);
-         if (!(0, jB.e)(YB)) return;
-         const DB = YB;
-         PB(DB.pY) && lB(DB.qY, {
-           icon: DB.NY,
-           level: DB.WY,
-           displayName: null !== (OB = DB.ZY) && void 0 !== OB ? OB : null,
-           durationMs: null !== (GB = DB.RY) && void 0 !== GB ? GB : null
-         })
-       })), (0, yB.g)(oB.P, (BB => {
-         const OB = (0, jB.h)(oB.P, BB);
-         if (!(0, jB.e)(OB)) return;
-         const GB = OB;
-         PB(GB.pY) && YB.c.remove(GB.qY)
- ... (3 more removed lines; see GitHub link above)
+       return PW ? EW.length : NW
+     }
+ 
+     function ZW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = EW[WW - 1]) || void 0 === OW ? void 0 : OW.reactorTier) && void 0 !== iW ? iW : 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L144-L146` → after: `L608-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L608-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L608-L623) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L144-L146)

```diff
-       YB.c.update(BB, OB), JB.forEach((OB => {
-         OB(BB)
-       }))
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZW(WW) > 0;
+       return OW && !PW ? "hidden" : WW <= iW ? "open" : OW ? iW < 5 ? "hidden" : iW < NW ? "teaser" : "locked" : "locked"
+     }
+ 
+     function lW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const {
+         kind: mW,
+         n: EW
+       } = jW(WW);
+       return {
+         key: iW[mW],
+         params: {
+           [mW]: OW ? String(EW) : EW
+         }
+       }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L149-L150` → after: `L626-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L626-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L626-L652) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L149-L150)

```diff
-       localEffectUpdated: {
-         watch: BB => JB.add(BB)
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function bW(WW, iW) {
+       return ZW(WW) > 0 && iW < NW
+     }
+ 
+     function jW(WW) {
+       const iW = ZW(WW);
+       if (iW > 0) return {
+         kind: "atomic",
+         n: iW,
+         short: `A${iW}`
+       };
+ ... (11 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L153-L164` → after: `L655-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L655-L658) · [Before (L153-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L153-L164)

```diff
-   },
-   42039: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => MB
-     });
-     var YB = GB(5287),
-       DB = GB(5281),
-       QB = GB(41630),
-       oB = GB(41637);
-     const jB = new Set(YB.R),
-       yB = YB.R.map((BB => (new TextEncoder).encode(BB))),
-       JB = new Map;
+ 
+     function UW(WW) {
+       return EW[Math.max(1, Math.min(WW, EW.length)) - 1]
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L168-L207` → after: `L673-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L673-L675) · [Before (L168-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L168-L207)

```diff
-       return null === (GB = JB.get(BB)) || void 0 === GB ? void 0 : GB[OB]
-     }(0, oB.g)(YB.oc.NewOtherEntitySettings, (BB => {
-       BB.payloadKind === DB.sc.Msgpack && yB.some((OB => function(BB, OB) {
-         const GB = OB[0];
-         for (let YB = BB.indexOf(GB); - 1 !== YB && YB + OB.length <= BB.length; YB = BB.indexOf(GB, YB + 1)) {
-           let GB = 1;
-           for (; GB < OB.length && BB[YB + GB] === OB[GB];) GB++;
-           if (GB === OB.length) return !0
-         }
-         return !1
-       }(BB.payload, OB))) && function(BB) {
-         if (null === BB || "object" !== typeof BB || null === BB.settings || "object" !== typeof BB.settings) return;
-         const OB = String(BB.eId),
-           GB = BB.settings;
-         let YB = JB.get(OB);
-         for (const DB in GB) {
- ... (24 more removed lines; see GitHub link above)
+       return null !== (iW = WW.baf2CoreOpen) && void 0 !== iW ? iW : NW
+     }
+     const yW = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L210` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L678) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L210)

```diff
-       return MB[BB]
+       return yW.includes(WW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L212` → after: `L680-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L680-L682) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L212)

```diff
-     const zB = new QB.d;
+     const JW = (WW, iW) => iW.map((iW => [iW, [WW]])),
+       hW = Object.fromEntries([...JW("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...JW("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...JW("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator",  … [truncated]
+     new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L215` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L685-L686) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L215)

```diff
-       return zB.add(BB)
+       var iW;
+       return null !== (iW = hW[WW]) && void 0 !== iW ? iW : ["Workbench"]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L219-L296` → after: `L690-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L690-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L690-L694) · [Before (L219-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L219-L296)

```diff
-       zB.callEach(BB, "a roster listener")
-     }(0, yB.g)(oB.X, (BB => {
-       const OB = (0, jB.h)(oB.X, BB);
-       if (void 0 === OB) return;
-       const GB = OB.YY.some((BB => {
-           let {
-             DY: OB,
-             QY: GB
-           } = BB;
-           return null !== GB && JB.has(OB) && JB.getName(OB) !== GB
-         })),
-         {
-           added: YB,
-           removed: QB,
-           settingChanges: yB
-         } = JB.apply(OB),
- ... (62 more removed lines; see GitHub link above)
+       return HW(WW)[0]
+     }
+     EW.slice(1).map(((WW, iW) => `Core Tier ${iW+2}`));
+     var uW = OW(5725);
+     const oW = ["on", "hud", "off"];
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L299-L316` → after: `L697-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L697-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L697-L723) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L299-L316)

```diff
-       let {
-         deadEId: OB,
-         killerEId: GB,
-         killerLifeformType: YB,
-         withItem: DB,
-         killstreak: QB
-       } = BB;
-       return {
-         killer: AB({
-           eId: GB,
-           lifeformType: YB
-         }),
-         victim: AB({
-           eId: OB
-         }),
-         withItem: DB,
- ... (2 more removed lines; see GitHub link above)
+       return "on" === WW
+     }
+     var eW = OW(344);
+     const vW = "Mob Farm",
+       gW = {
+         Pig: 1,
+         Cow: 1,
+         Sheep: 1,
+         Deer: 1,
+         Stag: 1,
+         "Draugr Zombie": 2,
+         "Draugr Skeleton": 2,
+         "Cave Golem": 3,
+         "Magma Golem": 3
+       },
+       DW = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
+ ... (11 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L320-L329` → after: `L727-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L727-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L727-L734) · [Before (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L320-L329)

```diff
-       let {
-         killer: OB,
-         victim: GB,
-         withItem: YB
-       } = BB;
-       return {
-         killer: AB(OB),
-         victim: AB(GB),
-         withItem: YB,
-         killstreak: 0
+       if (!WW) return null;
+       if (WW.startsWith(fW)) {
+         const iW = WW.slice(6);
+         return DW.includes(iW) ? iW : null
+       }
+       if (WW.endsWith(CW)) {
+         const iW = WW.slice(0, -14);
+         return void 0 !== gW[iW] ? iW : null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L334` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L740) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L334)

```diff
-       UB && kB((() => "killed" === BB.kind ? pB(BB.body) : qB(BB.body)))
+       return !0 === WW.mobFarm
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L340-L341` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L744) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L340-L341)

```diff
-       var GB;
-       return PB.d.has(BB) ? null === (GB = PB.d.getSettings(BB)) || void 0 === GB ? void 0 : GB[OB] : (0, MB.c)(BB, OB)
+       return VW[gW[iW]] * WW.opMs / 1e3
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L345-L381` → after: `L751-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L751-L752) · [Before (L345-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L345-L381)

```diff
-       var OB, GB, oB, jB, MB;
-       let {
-         eId: zB,
-         name: lB,
-         colour: pB,
-         lifeformType: qB
-       } = BB;
-       if (void 0 === zB || null === zB || "" === zB) {
-         const BB = lB || null;
-         return {
-           id: null,
-           shownName: BB,
-           lifeformType: null === BB && null !== qB && void 0 !== qB ? qB : null,
-           colour: pB || null,
-           local: !1,
-           realName: null
- ... (21 more removed lines; see GitHub link above)
+       const iW = EW.findIndex((iW => iW.unlocks.includes(WW)));
+       return iW < 0 ? 1 : iW + 1
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L390` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L756) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L390)

```diff
-       null === nB ? (SB.length === VB && SB.shift(), SB.push(BB)) : nB(BB())
+       return Math.floor(WW).toLocaleString("en-US")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L393-L402` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L763-L764) · [Before (L393-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L393-L402)

```diff
-     function dB() {
-       fB || (fB = !0, (0, lB.g)(oB.oc.PlayerKilled, (BB => {
-         const OB = (0, zB.l)(BB);
-         (0, zB.e)(OB) && kB((() => pB(OB)))
-       })), (0, lB.g)(oB.oc.CustomKillfeed, (BB => {
-         const OB = (0, zB.l)(BB);
-         (0, zB.e)(OB) && (0, zB.e)(OB.killer) && (0, zB.e)(OB.victim) && kB((() => qB(OB)))
-       })), (0, lB.d)((() => {
-         SB = []
-       })))
+     function Oi(WW, iW, OW) {
+       return `${QW} ${WW} ${iW} ${OW}`
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L404-L441` → after: `L766-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L766-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L766-L800) · [Before (L404-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L404-L441)

```diff
-     const KB = Object.freeze([0, 0, 0]),
-       uB = [0, 0, 0],
-       mB = [0, 0, 0],
-       IB = {
-         kill: {
-           watch(BB) {
-             if (UB = !0, 0 === SB.length) return nB = BB, () => {
-               UB = !1, nB = null
-             };
-             const OB = setTimeout((() => {
-               const OB = SB;
-               SB = [], nB = BB;
-               for (const YB of OB) try {
-                 BB(YB())
-               } catch (GB) {
-                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", GB)
- ... (22 more removed lines; see GitHub link above)
+ 
+     function mi(WW, iW, OW) {
+       return `${Wi} ${WW} ${iW} ${OW}`
+     }
+ 
+     function Ei(WW) {
+       return `${Wi} ${WW}`
+     }
+     const Ni = [
+       [`${QW} `, "take"],
+       [`${Wi} `, "put"]
+     ];
+ 
+     function Pi(WW) {
+       const iW = Ni.find((iW => {
+         let [OW] = iW;
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L443-L450` → after: `L802-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L802-L881) · [Before (L443-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L443-L450)

```diff
-   },
-   39710: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     class YB {
-       constructor() {
-         this.members = new Map
+     }
+ 
+     function Li(WW, iW) {
+       const OW = "number" === typeof WW ? WW : "one" === WW ? 1 : "stack" === WW ? 99 : iW;
+       return Math.min(iW, OW)
+     }
+ 
+     function ci(WW, iW) {
+       const OW = WW => "number" === typeof WW ? WW : "one" === WW ? 1 : 99;
+       return "fill" === WW || "fill" === iW ? "fill" : OW(WW) + OW(iW)
+     }
+ 
+     function wi(WW, iW) {
+       const OW = Pi(WW),
+         mW = Pi(iW),
+         EW = OW && mW ? function(WW, iW) {
+ ... (64 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L452-L471` → after: `L883-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L883-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L883-L894) · [Before (L452-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L452-L471)

```diff
-       apply(BB) {
-         const OB = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const YB of BB.YY) {
-           let BB = this.members.get(YB.DY);
-           if (BB || (BB = {
-               name: null,
-               settings: {}
-             }, this.members.set(YB.DY, BB), OB.added.push(YB.DY)), null !== YB.QY && (BB.name = YB.QY), null !== YB.oY || YB.jY.length > 0) {
-             const GB = null === YB.oY ? {} : JSON.parse(YB.oY);
-             Object.assign(BB.settings, GB);
-             for (const OB of YB.jY) delete BB.settings[OB], GB[OB] = void 0;
-             OB.settingChanges.push({
- ... (4 more removed lines; see GitHub link above)
+     }
+     const Ji = "baf2synth",
+       Hi = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
+       ni = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
+       ui = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
+       oi = function(WW, iW) {
+         return {
+           input: WW,
+           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           output: iW,
+           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           bonus: arguments.length > 4 ? arguments[4] : void 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L473-L479` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L896-L900) · [Before (L473-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L473-L479)

```diff
-         for (const YB of BB.yY) {
-           const BB = this.members.get(YB);
-           var GB;
-           if (BB) this.members.delete(YB), OB.removed.push({
-             playerId: YB,
-             name: null !== (GB = BB.name) && void 0 !== GB ? GB : void 0
-           })
+       },
+       di = function(WW, iW) {
+         return {
+           ...oi(WW, iW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+           nuclear: !0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L481` → after: `L902-L16510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L902-L16510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L902-L16510) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L481)

```diff
-         return OB
+       },
+       ei = ni.map((WW => di(WW, "Biomass", 2))),
+       vi = {
+         "Burner Drill": {
+           kind: "Burner Drill",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [1, 2, 3],
+           recipes: []
+         },
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+ ... (15593 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L483-L484` → after: `L16512-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16512-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16512-L16868) · [Before (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L483-L484)

```diff
-       has(BB) {
-         return this.members.has(BB)
+       clearMeshes(WW) {
+         for (const iW of this.meshes) WW.disposeGameMesh(iW);
+         this.meshes = []
+       }
+     }
+     const TU = 1 / .6,
+       JU = 200,
+       hU = {
+         colours: [
+           [127, 233, 255],
+           [180, 140, 255]
+         ],
+         life: [.12, .22],
+         size: [.12, .2],
+         perBlock: 3
+       },
+ ... (341 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L486-L487` → after: `L16870-L16909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16870-L16909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16870-L16909) · [Before (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L486-L487)

```diff
-       ids() {
-         return [...this.members.keys()]
+       barsBox() {
+         if (this.barsStale) {
+           var WW;
+           this.barsStale = !1;
+           const iW = null === (WW = this.statBars[0]) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
+           this.bars = iW && iW.width > 0 && iW.height > 0 ? {
+             left: iW.left,
+             top: iW.top,
+             right: iW.right,
+             bottom: iW.bottom
+           } : null
+         }
+         return this.bars
+       }
+       toastBox(WW) {
+         var iW;
+ ... (24 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L489` → after: `L16911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16911) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L489)

```diff
-       getName(BB) {
+       watch(WW) {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L491` → after: `L16913-L16930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16913-L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16913-L16930) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L491)

```diff
-         return null !== (OB = null === (GB = this.members.get(BB)) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : void 0
+         this.tracker && this.sizes.unobserve(this.tracker), null === (iW = this.hud) || void 0 === iW || iW.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = WW, this.hud = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.closest(". … [truncated]
+           passive: !0
+         }), this.hudStyle.observe(this.hud, {
+           attributes: !0,
+           attributeFilter: ["style", "class"]
+         }))
+       }
+       shiftLeftOf(WW, iW) {
+         var OW;
+         const mW = this.anchorOf(WW);
+         if (!mW) return 0;
+         const {
+           y: EW
+         } = mW, NW = mW.x + (null !== (OW = this.labelOffsets.get(WW)) && void 0 !== OW ? OW : 0), PW = this.em, {
+           halfWidth: LW,
+           labelled: cW
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L493` → after: `L16932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16932) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L493)

```diff
-       getSettings(BB) {
+       shiftOnScreen(WW) {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L495` → after: `L16934-L16939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16934-L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16934-L16939) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L495)

```diff
-         return null === (OB = this.members.get(BB)) || void 0 === OB ? void 0 : OB.settings
+         const OW = this.anchorOf(WW);
+         if (!OW) return 0;
+         const {
+           halfWidth: mW
+         } = this.extentOf(WW), EW = OW.x + (null !== (iW = this.labelOffsets.get(WW)) && void 0 !== iW ? iW : 0), NW = EW + mW - (this.innerWidth - 6);
+         return NW > 0 ? -NW : Math.max(0, 6 - (EW - mW))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L497` → after: `L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16941) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L497)

```diff
-       getSetting(BB, OB) {
+       runLabelAside(WW, iW) {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L499` → after: `L16943-L17011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L16943-L17011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L16943-L17011) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L499)

```diff
-         return null === (GB = this.members.get(BB)) || void 0 === GB ? void 0 : GB.settings[OB]
+         let mW = null;
+         for (let PW = 0; PW < WW.children.length; PW++) WW.children[PW].classList.contains("DirectionArrowLabel") && (mW = WW.children[PW]);
+         if (!mW) return 0;
+         const EW = WW.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(WW) : null,
+           NW = (EW && this.api ? this.side.sideOf(this.api, {
+             x: EW.x / this.innerWidth * 100,
+             y: EW.y / this.innerHeight * 100
+           }, iW, this.project) : 0) * this.halfWidthOf(mW);
+         return NW !== (null !== (OW = this.sideLabels.get(mW)) && void 0 !== OW ? OW : 0) && (mW.style.transform = 0 === NW ? "" : `translateX(-50%) translateX(${NW}px)`, 0 === NW ? this.sideLabels.delete(mW) : this.sideLabels.set(mW, NW)), NW
+       }
+       extentOf(WW) {
+         let iW = this.em,
+           OW = !1;
+         for (let mW = 0; mW < WW.children.length; mW++) {
+           const EW = WW.children[mW],
+             NW = EW.classList.contains("DirectionArrowLabel");
+ ... (53 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L502` → after: `L17014-L17764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R17014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L17014-L17764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/274.js#L17014-L17764) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/274.js#L502)

```diff
-         this.members.clear()
+         this.picks.clear()
+       }
+       Kl(WW, iW, OW) {
+         this.picks.set(WW, {
+           item: iW,
+           had: OW(iW)
+         }), this.select(WW, iW)
+       }
+     }(vE.s);
+ 
+     function aU(WW) {
+       return iW => {
+         let OW = 0;
+         for (const mW of WW.getInventoryItems())(null === mW || void 0 === mW ? void 0 : mW.name) === iW && (OW += null === mW.amount ? 1 : Math.max(mW.amount, 0));
+         return OW
+       }
+ ... (735 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L8)

```diff
-   40167: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB,
-       i: () => DB,
-       k: () => QB
+   53479: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       PostMatchPodium: () => kW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L10-L43` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L8-L21) · [Before (L10-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L10-L43)

```diff
-     var YB = GB(56);
- 
-     function DB(BB) {
-       return jB(BB, yB)
-     }
- 
-     function QB(BB) {
-       return jB(BB, JB)
-     }
- 
-     function oB(BB) {
-       return `${Math.floor(BB/60)}:${String(BB%60).padStart(2,"0")}`
-     }
- 
-     function jB(BB, OB) {
-       const [, GB] = (0, YB.useState)(null);
- ... (18 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(35264),
+       LW = OW(53483),
+       cW = OW(53489),
+       wW = OW(2075),
+       tW = OW(2021),
+       ZW = OW(1172),
+       xW = OW(37872),
+       lW = OW(1283);
+     const AW = [1, 0, 2],
+       bW = [.26, .17, .1],
+       jW = [.78, .7, .7];
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L46-L233` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L24) · [Before (L46-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L46-L233)

```diff
-       return Math.max(0, Math.ceil(yB(BB)))
-     }
-   },
-   40190: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => DB
-     });
-     var YB = GB(40197);
-     async function DB() {
-       const {
-         averageColors: BB
-       } = await GB.e(228).then((() => GB(34878)));
-       return new YB.c(BB)
-     }
-   },
-   40172: (BB, OB, GB) => {
- ... (172 more removed lines; see GitHub link above)
+       return PW.f.openMobLineup(WW)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L235-L245` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L26) · [Before (L235-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L235-L245)

```diff
-     var lB = GB(1090),
-       pB = GB.n(lB),
-       qB = GB(16),
-       ZB = GB(37263),
-       NB = GB(2012),
-       RB = GB(1480),
-       WB = GB(2085),
-       AB = GB(1175);
-     const VB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAF1CAYAAADftMc3AAAQAElEQVR4Aex9B6AkV3XlfVXd///J82dGYaRRFpJGKEwQCkgzGkVQAgQG5YDxEmxss7Yx0YE1YAzYJngNthevwQbDgvECZndtDJhkhNLMKIxGWZN+Tp1TVb29p/q/P+/Xr+pYnfv/vv3Sfffde+uduq9eVXcb1MK/7fdfe34Lh+8P3fdA13mgZYDeft/V73By+c … [truncated]
-     var SB = GB(1282);
-     const nB = (0, jB.forwardRef)((function(BB, OB) {
+     const kW = (0, mW.memo)((function(WW) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L247-L250` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L28) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L247-L250)

```diff
-         contents: GB,
-         CP: YB,
-         full: DB,
-         children: QB
+         view: iW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L252-L266` → after: `L30-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L30-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L30-L54) · [Before (L252-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L252-L266)

```diff
-       const oB = [...GB].sort(((BB, OB) => {
-         let [GB] = BB, [YB] = OB;
-         return GB.localeCompare(YB)
-       }));
-       let jB = 0;
-       return (0, SB.jsxs)("div", {
-         ref: OB,
-         className: "GreenvilleBackpackBag",
-         children: [QB, (0, SB.jsx)("img", {
-           className: pB()("GreenvilleBackpackArt", {
-             Full: DB
-           }),
-           src: VB,
-           alt: "",
-           draggable: !1
+       const OW = (0, wW.g)("players"),
+         EW = (0, mW.useRef)(null),
+         NW = AW.filter((WW => WW < iW.podium.length)),
+         PW = (0, mW.useMemo)((() => NW.map((WW => {
+           const mW = iW.podium[WW];
+           return {
+             cosmetics: (0, xW.w)(mW, OW.byId),
+             size: jW[WW],
+             nS: null,
+             animation: LW.h,
+             lift: bW[WW]
+           }
+         }))), [iW.wZ]),
+         tW = (0, mW.useMemo)((() => ({
+           figures: PW,
+           shown: PW.map((() => !0))
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L268-L278` → after: `L56-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L56-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L56-L61) · [Before (L268-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L268-L278)

```diff
-           className: "GreenvilleBackpackWindow",
-           children: oB.map((BB => {
-             let [OB, GB] = BB;
-             const DB = Math.min(1 - jB, GB / YB),
-               QB = (0, SB.jsx)(fB, {
-                 item: OB,
-                 below: jB,
-                 share: DB
-               }, OB);
-             return jB += DB, QB
-           }))
+           className: "PostMatchPodiumSteps",
+           children: NW.map((WW => (0, lW.jsx)(sW, {
+             view: iW,
+             row: iW.podium[WW],
+             place: WW
+           }, WW)))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L346` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L69-L71) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L346)

```diff
-         view: OB
+         view: OW,
+         row: mW,
+         place: EW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L350-L408` → after: `L75-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L75-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L75-L85) · [Before (L350-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L350-L408)

```diff
-       } = (0, AB.H)(), {
-         isTouchScreen: YB
-       } = (0, qB.o)(["isTouchScreen"]), [DB, QB] = (0, jB.useState)([]), oB = (0, jB.useRef)(null), yB = (0, jB.useRef)(null), JB = (0, jB.useRef)([]), MB = (0, jB.useRef)({
-         arrival: OB.arrival,
-         showToken: OB.showToken
-       }), {
-         arrival: PB,
-         showToken: zB
-       } = OB;
-       (0, jB.useLayoutEffect)((() => {
-         var BB;
-         if (zB !== MB.current.showToken) QB([]);
-         else if (null !== PB && PB.token !== (null === (BB = MB.current.arrival) || void 0 === BB ? void 0 : BB.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
-           const BB = {
-             id: KB++,
-             item: PB.item,
- ... (43 more removed lines; see GitHub link above)
+       } = (0, ZW.B)(), LW = (0, xW.s)(OW, mW);
+       return (0, lW.jsx)("div", {
+         className: NW()("PostMatchPodiumStep", `Place-${EW+1}`, {
+           IsLocal: mW.isLocal
+         }),
+         style: {
+           "--stepHeight": .151 + bW[EW],
+           "--teamColour": null !== (iW = mW.colour) && void 0 !== iW ? iW : void 0
+         },
+         children: (0, lW.jsxs)("div", {
+           className: "PostMatchPodiumBlock",
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L410-L467` → after: `L87-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L87-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L87-L100) · [Before (L410-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L410-L467)

```diff
-             ref: yB,
-             className: pB()("GreenvilleBackpackTotal", {
-               Full: VB
-             }),
-             children: RB
-           }), (0, SB.jsxs)("span", {
-             className: "GreenvilleBackpackCapacity",
-             children: ["/ ", OB.CP]
-           })]
-         }), (0, SB.jsxs)("div", {
-           className: "GreenvilleBackpackRow",
-           children: [(0, SB.jsx)(nB, {
-             ref: oB,
-             contents: UB,
-             CP: OB.CP,
-             full: VB,
- ... (42 more removed lines; see GitHub link above)
+             className: "PostMatchPodiumPlace FullyFancyText",
+             children: EW + 1
+           }), (0, lW.jsx)("span", {
+             className: "PostMatchPodiumName SmallTextBold",
+             children: mW.name
+           }), (mW.isMvp || mW.isSvp) && (0, lW.jsx)("span", {
+             className: NW()("PostMatchTag", mW.isMvp ? "Tag-mvp" : "Tag-svp"),
+             children: PW(mW.isMvp ? "postMatch:mvp" : "postMatch:svp")
+           }), null !== LW && (0, lW.jsxs)("span", {
+             className: "PostMatchPodiumStat SmallTextBold",
+             children: [(0, lW.jsx)("b", {
+               children: LW.value
+             }), " ", (0, lW.jsx)(tW.d, {
+               text: LW.label
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L533-L566` → after: `L106-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L106-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L106-L112) · [Before (L533-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L533-L566)

```diff
-     var iB = GB(70),
-       LB = GB(34815),
-       gB = GB(2653),
-       rB = GB(2854);
-     const XB = [{
-         transform: "scale(1.18)"
-       }, {
-         transform: "scale(1)"
-       }],
-       wB = [{
-         transform: "scale(1)",
-         filter: "brightness(1)"
-       }, {
-         transform: "scale(1.3)",
-         filter: "brightness(1.5)",
-         offset: .3
- ... (18 more removed lines; see GitHub link above)
+   },
+   53489: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
+     });
+     var mW = OW(62),
+       EW = OW(3809);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L568-L618` → after: `L114-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L114-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L114-L119) · [Before (L568-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L568-L618)

```diff
-     function aB(BB) {
-       let {
-         gold: OB,
-         sounds: GB
-       } = BB;
-       const YB = (0, rB.d)(),
-         [DB, QB] = (0, jB.useState)([]),
-         oB = (0, jB.useRef)(null),
-         yB = (0, jB.useRef)(null),
-         JB = (0, jB.useRef)(null),
-         MB = (0, jB.useRef)(OB);
-       (0, jB.useLayoutEffect)((() => {
-         const BB = OB - MB.current;
-         if (MB.current = OB, !(BB <= 0) && (GB.onGain(), !YB && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
-           const OB = function(BB) {
-             const OB = Math.max(1, Math.min(8, Math.floor(BB))),
- ... (35 more removed lines; see GitHub link above)
+     function NW(WW, iW, OW) {
+       const NW = (0, mW.useRef)(null),
+         {
+           width: PW,
+           height: LW
+         } = (0, EW.d)(WW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L620-L651` → after: `L121-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L121-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L121-L129) · [Before (L620-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L620-L651)

```diff
-         var BB, OB;
-         zB < lB.current && (null === (BB = JB.current) || void 0 === BB || BB.cancel(), JB.current = (null !== (OB = cB) && void 0 !== OB ? OB : oB.current).animate(0 === zB ? wB : XB, {
-           duration: 0 === zB ? 380 : 160,
-           easing: "ease-out"
-         }));
-         lB.current = zB
-       }), [zB]);
-       const pB = DB.reduce(((BB, OB) => BB + OB.gold), 0);
-       return (0, SB.jsxs)(SB.Fragment, {
-         children: [(0, SB.jsx)("div", {
-           className: "GreenvilleGoldPurse",
-           children: (0, SB.jsxs)("div", {
-             ref: oB,
-             className: "GreenvilleGoldPurseBody",
-             children: [(0, SB.jsx)("span", {
-               ref: yB,
- ... (16 more removed lines; see GitHub link above)
+         const OW = iW(WW.current);
+         return NW.current = OW, () => {
+           OW.close(), NW.current = null
+         }
+       }), [WW, iW]), (0, mW.useEffect)((() => {
+         PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
+       }), [PW, LW]), (0, mW.useEffect)((() => {
+         NW.current.show(OW)
+       }), [OW])
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L654-L699` → after: `L141-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L141-L147) · [Before (L654-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L654-L699)

```diff
-     function eB(BB) {
-       let {
-         coin: OB,
-         target: GB,
-         onLanded: YB
-       } = BB;
-       const DB = (0, jB.useRef)(null);
-       return (0, jB.useEffect)((() => {
-         var BB;
-         const QB = (null !== (BB = cB) && void 0 !== BB ? BB : GB.current).getBoundingClientRect(),
-           {
-             burst: oB
-           } = OB,
-           jB = window.innerWidth / 2,
-           yB = window.innerHeight / 2,
-           JB = QB.left + QB.width / 2,
- ... (30 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       let [OW, mW, EW] = WW;
+       return [0, .5, 1].map((WW => ({
+         timeFraction: WW,
+         rotation: {
+           YO: "catmull-rom-spline",
+           point: [OW, mW, EW + (.5 === WW ? iW : 0)]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L701-L708` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L149) · [Before (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L701-L708)

```diff
-       }), [OB, GB, YB]), (0, SB.jsx)("div", {
-         ref: DB,
-         className: "GreenvilleGoldCoin",
-         children: (0, SB.jsx)(NB.c, {
-           itemName: "Gold Coin",
-           amount: 0
-         })
-       })
+       })))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L710-L718` → after: `L151-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L151-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L151-L171) · [Before (L710-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L710-L718)

```diff
-     class TB {
-       constructor(BB, OB, GB) {
-         this.pacer = BB, this.send = OB, this.onAnswersTimedOut = GB, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
-           if (!this.flushing) {
-             this.flushing = !0;
-             try {
-               for (; this.queued.length > 0 && this.pacer.tryStart();) {
-                 const BB = this.queued.shift();
-                 this.unanswered.push(BB), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(BB)
+ 
+     function PW(WW, iW, OW) {
+       return {
+         kO: 3200,
+         loop: !0,
+         MO: {
+           Root: {
+             timeline: [0, .5, 1].map((WW => ({
+               timeFraction: WW,
+               position: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .5 === WW ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L720-L722` → after: `L173-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L173-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L173-L179) · [Before (L720-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L720-L722)

```diff
-             } finally {
-               this.flushing = !1
-             }
+             })))
+           },
+           ArmLeftMesh: {
+             timeline: NW(WW, OW)
+           },
+           ArmRightMesh: {
+             timeline: NW(iW, -OW)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L724-L864` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L181) · [Before (L724-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L724-L864)

```diff
-         }, this.onAnswerTimeout = () => {
-           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
-         }, BB.subscribe(this.flush)
-       }
-       getPending() {
-         return [...this.unanswered, ...this.queued]
-       }
-       NP() {
-         return 0 === this.unanswered.length && 0 === this.queued.length
-       }
-       getLastSent() {
-         return this.unanswered.at(-1)
-       }
-       getLastPending() {
-         var BB;
-         return null !== (BB = this.queued.at(-1)) && void 0 !== BB ? BB : this.unanswered.at(-1)
- ... (125 more removed lines; see GitHub link above)
+         }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L867-L1073` → after: `L184-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L184-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L184-L196) · [Before (L867-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L867-L1073)

```diff
-     var xB = GB(1383),
-       tB = GB(1485),
-       BO = GB(34813),
-       OO = GB(3708),
-       GO = GB(2e3),
-       YO = GB(4946);
- 
-     function DO(BB) {
-       var OB;
-       let {
-         item: GB,
-         className: YB
-       } = BB;
-       return (0, SB.jsx)(GO.b, {
-         className: YB,
-         text: null !== (OB = (0, BO.displayNameOf)((0, OO.c)(GB))) && void 0 !== OB ? OB : GB
- ... (191 more removed lines; see GitHub link above)
+     const LW = PW([0, 0, 0], [0, 0, 0], .07),
+       cW = (0, EW.e)((0, mW.h)(LW), "mobIdle"),
+       wW = PW([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       tW = PW([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       ZW = (0, EW.e)((0, mW.h)(wW), "gunReady"),
+       xW = (0, EW.e)((0, mW.h)(tW), "gunAimed")
+   },
+   39881: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       h: () => NW
+     });
+     const mW = new WeakMap;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1075-L1086` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L198-L199) · [Before (L1075-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L1075-L1086)

```diff
-     function lO(BB) {
-       let {
-         line: OB,
-         picked: GB,
-         level: YB
-       } = BB;
-       const DB = OB[3];
-       return (0, SB.jsxs)(SB.Fragment, {
-         children: [GB && (0, SB.jsx)(zO, {}), DB > YB && (0, SB.jsx)(PO, {
-           level: DB
-         })]
-       })
+     function EW(WW, iW) {
+       return mW.set(WW, iW), WW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L5290-L5667` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/275.js#L204) · [Before (L5290-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/275.js#L5290-L5667)

```diff
-       let {
-         controller: GB,
-         nav: YB
-       } = BB;
-       (0, RB.i)(wG, null), (0, RB.i)(sY, null);
-       const {
-         t: DB
-       } = (0, AB.H)(), QB = (0, rB.d)(), oB = (0, jB.useRef)(null), yB = (0, jB.useRef)(null), JB = (0, jB.useRef)(null), MB = (0, jB.useRef)(null), PB = (0, jB.useRef)(null), zB = (0, jB.useRef)(null), lB = (0, mO.g)("hiddenPlayerNames"), pB = GB.getPlace(), qB = YB.getAddress() … [truncated]
-       if ((0, jB.useLayoutEffect)((() => {
-           var BB, OB, GB, YB;
-           if (null === NB) return null === (GB = MB.current) || void 0 === GB || GB.cancel(), void(null === (YB = PB.current) || void 0 === YB || YB.cancel());
-           if (oB.current === NB) return;
-           if (oB.current = NB, QB) return;
-           const DB = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
-           null === (BB = MB.current) || void 0 === BB || BB.cancel(), MB.current = yB.current.animate(DB ? cD : ED, {
-             duration: DB ? 400 : 2200
- ... (362 more removed lines; see GitHub link above)
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L9)

```diff
-   40537: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => JB
-     });
-     var YB = GB(5122);
-     const DB = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+   40925: (WW, iW, OW) => {
+     WW.exports = EW;
+     var mW = OW(352);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L11-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L8-L11) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L11-L18)

```diff
-     function QB(BB) {
-       return new Promise(((OB, GB) => {
-         BB.onsuccess = () => {
-           OB(BB.result)
-         }, BB.onerror = () => {
-           GB(BB.error)
-         }
-       }))
+     function EW(WW, iW) {
+       if (!(this instanceof EW)) return new EW(WW, iW);
+       var OW = mW.create();
+       mW.add(OW, WW, iW), this.base = mW.min(mW.create(), WW, OW), this.vec = mW.clone(iW), this.max = mW.max(mW.create(), WW, OW), this.mag = mW.length(this.vec)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L20-L29` → after: `L13-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L13-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L13-L67) · [Before (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L20-L29)

```diff
- 
-     function oB(BB) {
-       return new Promise(((OB, GB) => {
-         BB.oncomplete = () => {
-           OB()
-         }, BB.onerror = () => {
-           GB(BB.error)
-         }, BB.onabort = () => {
-           var OB;
-           GB(null !== (OB = BB.error) && void 0 !== OB ? OB : new Error("IndexedDB transaction aborted"))
+     var NW = EW.prototype;
+     NW.width = function() {
+       return this.vec[0]
+     }, NW.height = function() {
+       return this.vec[1]
+     }, NW.depth = function() {
+       return this.vec[2]
+     }, NW.x0 = function() {
+       return this.base[0]
+     }, NW.y0 = function() {
+       return this.base[1]
+     }, NW.z0 = function() {
+       return this.base[2]
+     }, NW.x1 = function() {
+       return this.max[0]
+     }, NW.y1 = function() {
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L31` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L69-L70) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L31)

```diff
-       }))
+         return cW && (cW[0] = iW + tW * EW, cW[1] = OW + tW * NW, cW[2] = mW + tW * PW), wW && (wW[0] = wW[1] = wW[2] = 0), 0
+       }(WW, PW, LW, cW, wW /= xW, tW /= xW, ZW /= xW, mW = "undefined" === typeof mW ? 64 : +mW, EW, NW)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L35` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L82) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L35)

```diff
-       return IDBKeyRange.bound([BB], [BB, []])
+       return null !== EW && WW === EW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L38-L39` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L85-L86) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L38-L39)

```diff
-     function yB(BB, OB) {
-       return IDBKeyRange.bound([BB, OB], [BB, OB, []])
+     function PW() {
+       this.Qq = !1, this.stopPropagation = !1, this.xR = !1, this.disabled = !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L42-L52` → after: `L89-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L89-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L89-L119) · [Before (L42-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L42-L52)

```diff
-       constructor() {
-         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
-       }
-       get working() {
-         return !this.failed
-       }
-       static get supported() {
-         try {
-           return "undefined" !== typeof indexedDB
-         } catch {
-           return !1
+       constructor(WW, iW) {
+         this.version = "0.7.0";
+         var OW = Object.assign({}, new PW, iW || {});
+         this.element = WW || document, this.Qq = !!OW.Qq, this.stopPropagation = !!OW.stopPropagation, this.xR = !!OW.xR, this.disabled = !!OW.disabled, this.filterEvents = (WW, iW) => !0, this.ignoreEvent = WW => !1, this.down = new mW.EventEmitter, this.up = new mW.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           diW: 0,
+           eiW: 0,
+           viW: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? wW(this) : document.addEventListener("DOMContentLoaded", (WW => {
+           wW(this)
+         }), {
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L55-L157` → after: `L122-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L122-L126) · [Before (L55-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L55-L157)

```diff
-       putRecording(BB) {
-         this.write(["recordings"], (OB => {
-           OB.objectStore("recordings").put(BB)
-         }))
-       }
-       putVideoSequence(BB, OB, GB) {
-         this.write(["recordings", "videoSequences"], (YB => {
-           YB.objectStore("recordings").put(BB), YB.objectStore("videoSequences").put({
-             recordingId: BB.recordingId,
-             segmentId: OB,
-             sequence: GB
-           })
-         }))
-       }
-       appendVideo(BB, OB) {
-         this.write(["videoHeaders", "videoChunks"], (GB => {
- ... (87 more removed lines; see GitHub link above)
+       getBindings() {
+         var WW = {};
+         for (var iW in this._keyBindmap) {
+           this._keyBindmap[iW].forEach((OW => {
+             WW[OW] = WW[OW] || [], WW[OW].push(iW)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L161-L247` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L131-L132) · [Before (L161-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L161-L247)

```diff
-       async deleteRecording(BB) {
-         const OB = (await this.open()).transaction([...DB], "readwrite");
-         OB.objectStore("recordings").delete(BB);
-         for (const GB of DB.slice(1)) OB.objectStore(GB).delete(jB(BB));
-         await oB(OB)
-       }
-       async forgetSent(BB, OB) {
-         const GB = (await this.open()).transaction([...DB], "readwrite"),
-           {
-             recordingId: YB
-           } = BB;
-         GB.objectStore("recordings").put(BB);
-         for (const DB of OB.videoSegmentIds) GB.objectStore("videoHeaders").delete([YB, DB]), GB.objectStore("videoChunks").delete(yB(YB, DB)), GB.objectStore("videoSequences").delete([YB, DB]), GB.objectStore("videoProgress").delete([YB, DB]);
-         for (const DB of OB.telemetrySequences) GB.objectStore("telemetry").delete([YB, DB]);
-         for (const DB of OB.domSequences) GB.objectStore("dom").delete([YB, DB]);
-         for (const DB of OB.domTailChunks) GB.objectStore("domTail").delete(yB(YB, DB));
- ... (71 more removed lines; see GitHub link above)
+       hZ() {
+         cW(this.bR), cW(this.pressCount), cW(this.releaseCount)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L260-L307` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L136-L137) · [Before (L260-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L260-L307)

```diff
-     function QB(BB, OB) {
-       return new Blob([DB.encode(`${JSON.stringify(BB)}\n`), OB], {
-         type: "text/plain"
-       })
-     }
-     class oB {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-         this.token = BB, this.relay = OB, this.nowMs = GB, this.refused = !1, this.skipUntilMs = 0
-       }
-       async send(BB, OB, GB, DB, oB) {
-         if (this.goesDirect(OB, GB)) return null;
-         const jB = QB({
-             token: this.token,
-             contentType: GB,
-             target: BB
- ... (32 more removed lines; see GitHub link above)
+     function cW(WW) {
+       for (var iW in WW) WW[iW] = 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L311` → after: `L141-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L141-L147) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L311)

```diff
-       return void 0 === (null === BB || void 0 === BB ? void 0 : BB.relay) ? null : new oB(BB.token, BB.relay)
+       window.addEventListener("keydown", jW.bind(null, WW, !0), !1), window.addEventListener("keyup", jW.bind(null, WW, !1), !1);
+       var iW = {
+         passive: !0
+       };
+       WW.element.addEventListener("touchstart", lW.bind(void 0, WW), {
+         passive: !1
+       }), WW.element.addEventListener("touchend", bW.bind(void 0, WW), iW), WW.element.addEventListener("mousedown", UW.bind(null, WW, !0), iW), window.document.addEventListener("mouseup", UW.bind(null, WW, !1), iW), WW.element.addEventListener("touchmove", kW.bind(null, WW), iW) … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L313-L320` → after: `L149-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L149-L154) · [Before (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L313-L320)

```diff
-     class yB {
-       constructor() {
-         this.relays = new Map
-       }
-       for (BB) {
-         let OB = this.relays.get(BB.recordingId);
-         return void 0 === OB && (OB = jB(BB.partJoiner), this.relays.set(BB.recordingId, OB)), OB
-       }
+     var tW = 0,
+       ZW = 0,
+       xW = null;
+ 
+     function lW(WW, iW) {
+       iW.preventDefault(), AW(iW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L335` → after: `L158-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L158-L170) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L335)

```diff
-       return 6e4 + Math.ceil(BB / 16384 * 1e3)
+       let iW = !1;
+       for (let OW = 0; OW < WW.touches.length; ++OW)
+         if (WW.touches[OW].identifier === xW) {
+           iW = !0;
+           break
+         } if (!iW) {
+         const iW = WW.changedTouches[0];
+         tW = iW.clientX, ZW = iW.clientY, xW = iW.identifier
+       }
+     }
+ 
+     function bW(WW, iW) {
+       for (var OW = iW.changedTouches, mW = 0; mW < OW.length; ++mW) OW[mW].identifier === xW && (xW = null)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L339-L346` → after: `L174-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L174-L177) · [Before (L339-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L339-L346)

```diff
-       const DB = new FormData;
-       let QB = OB.byteLength + oB;
-       for (const [oB, jB] of Object.entries(BB.fields)) DB.append(oB, jB), QB += (0, YB.m)(oB) + (0, YB.m)(jB);
-       return DB.append("file", new Blob([OB], {
-         type: GB
-       })), {
-         form: DB,
-         byteLength: QB
+       if (!WW.ignoreEvent(OW)) try {
+         yW(WW, OW), iW && OW.isTrusted && !OW.repeat && WW._keyStates[OW.code] && TW(WW, OW.code)
+       } finally {
+         JW(OW.code, iW, WW, OW)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L351` → after: `L182-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L182-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L182-L196) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L351)

```diff
-       return new QB.e(`Segment ${BB} failed with ${OB}${null===GB?"":` (${GB})`}`, OB, GB)
+       if (!WW.ignoreEvent(OW)) try {
+         yW(WW, OW)
+       } finally {
+         ! function(WW, iW, OW) {
+           if ("pointerId" in OW)
+             if (iW) {
+               if (null !== WW._touches.currID) return;
+               WW._touches.currID = OW.pointerId
+             } else {
+               if (WW._touches.currID !== OW.pointerId) return;
+               WW._touches.currID = null
+             } var mW = "button" in OW ? OW.button + 1 : 1;
+           JW("Mouse" + mW, iW, WW, OW)
+         }(WW, iW, OW)
+       }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L354-L355` → after: `L199-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L199-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L199-L214) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L354-L355)

```diff
-     function MB(BB) {
-       if (BB < 200 || BB > 299) throw JB("POST", BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
+     function kW(WW, iW) {
+       var OW = iW.movementX || iW.mozMovementX || 0,
+         mW = iW.movementY || iW.mozMovementY || 0;
+       if (iW.touches && 0 === (OW | mW)) {
+         var EW = function(WW) {
+           AW(WW);
+           for (let iW = 0; iW < WW.changedTouches.length; ++iW)
+             if (WW.changedTouches[iW].identifier == xW) {
+               const OW = WW.changedTouches[iW],
+                 mW = [OW.clientX - tW, OW.clientY - ZW];
+               return tW = OW.clientX, ZW = OW.clientY, mW
+             } return console.error(`Did not find touch id ${xW}`), [0, 0]
+         }(iW);
+         OW = EW[0], mW = EW[1]
+       }
+       WW.bR.dx += OW, WW.bR.dy += mW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L359` → after: `L218-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L218-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L218-L230) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L359)

```diff
-       if ((BB < 200 || BB > 299) && (!OB || 412 !== BB)) throw JB("PUT", BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+       yW(WW, iW);
+       var OW = 1;
+       switch (iW.deltaMode) {
+         case 0:
+           OW = 1;
+           break;
+         case 1:
+           OW = 12;
+           break;
+         case 2:
+           OW = WW.element.clientHeight || window.innerHeight
+       }
+       WW.bR.diW += (iW.deltaX || 0) * OW, WW.bR.eiW += (iW.deltaY || 0) * OW, WW.bR.viW += (iW.deltaZ || 0) * OW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L361-L370` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L232-L234) · [Before (L361-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L361-L370)

```diff
-     async function zB(BB) {
-       var OB, GB;
-       if (BB.ok) return null;
-       let YB;
-       try {
-         YB = await BB.text()
-       } catch (DB) {
-         return console.warn("Session replay couldn't read storage's error answer", DB), null
-       }
-       return null !== (OB = null === (GB = /<Code>([^<]+)<\/Code>/.exec(YB)) || void 0 === GB ? void 0 : GB[1]) && void 0 !== OB ? OB : null
+ 
+     function MW(WW, iW) {
+       if (!WW.xR) return iW.preventDefault(), !1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L372-L440` → after: `L236-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L236-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L236-L248) · [Before (L372-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L372-L440)

```diff
-     class lB {
-       constructor(BB) {
-         var OB;
-         let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         this.segmentUploadUrl = BB, this.deadline = void 0, this.relay = void 0, this.deadline = GB.deadline, this.relay = null !== (OB = GB.relay) && void 0 !== OB ? OB : null
-       }
-       requestPutUrl(BB) {
-         return this.presign(BB)
-       }
-       requestPostTargets(BB) {
-         return this.presign(BB)
-       }
-       async presign(BB) {
-         const OB = await fetch(this.segmentUploadUrl, {
-           method: "POST",
-           headers: {
- ... (53 more removed lines; see GitHub link above)
+     var KW = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ 
+     function SW(WW, iW) {
+       return !!WW[KW[iW]] || ("AltRight" === iW || "ControlLeft" === iW) && "function" === typeof WW.getModifierState && !0 === WW.getModifierState("AltGraph")
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L442-L457` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L250-L257) · [Before (L442-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L442-L457)

```diff
-     class pB {
-       async requestPutUrl(BB) {
-         return {
-           uploadUrl: "",
-           ifNoneMatch: !1
-         }
-       }
-       async requestPostTargets(BB) {
-         return {
-           targets: Array.from({
-             length: BB.parts.count
-           }, (() => ({
-             url: "",
-             fields: {}
-           }))),
-           expiresInSecs: 900
+ 
+     function YW(WW, iW) {
+       for (var OW in WW._modifiersHeldThroughBlur = {}, KW) WW._keyStates[OW] && (WW._modifiersHeldThroughBlur[OW] = !0);
+       iW && iW.isTrusted && function() {
+         try {
+           return window.self !== window.top
+         } catch (WW) {
+           return !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L460-L465` → after: `L284-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L284-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L284-L306) · [Before (L460-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L460-L465)

```diff
-       put() {
-         return Promise.resolve()
-       }
-       post() {
-         return Promise.resolve()
-       }
+     }
+ 
+     function JW(WW, iW, OW, mW) {
+       var EW = OW._keyBindmap[WW];
+       EW && (hW(OW._keyStates[WW], iW) && (OW._keyStates[WW] = iW, EW.forEach((WW => {
+         (!OW.filterEvents || OW.filterEvents(mW, WW)) && function(WW, iW, OW, mW) {
+           var EW = iW ? OW.pressCount : OW.releaseCount;
+           EW[WW] = (EW[WW] || 0) + 1;
+           var NW = OW._bindPressCount[WW] || 0;
+           (NW += iW ? 1 : -1) < 0 && (NW = 0);
+           OW._bindPressCount[WW] = NW;
+           var PW = OW.state[WW];
+           if (hW(PW, NW)) {
+             OW.state[WW] = NW > 0;
+             var LW = iW ? OW.down : OW.up;
+             OW.disabled || LW.emit(WW, mW)
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L468` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L309) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L468)

```diff
-   40457: (BB, OB, GB) => {
+   40907: (WW, iW, OW) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L470` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L311) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L470)

```diff
-       b: () => oB
+       d: () => mW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L480-L549` → after: `L315-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L315-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L315-L382) · [Before (L480-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L480-L549)

```diff
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
-         this.quietMs = BB, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
-       }
-       pack(BB) {
-         return new Promise(((OB, GB) => {
-           var YB;
-           const DB = null !== (YB = this.worker) && void 0 !== YB ? YB : this.start();
-           if (null === DB) return void GB(this.failure);
-           const QB = this.nextId++;
-           this.waiting.set(QB, {
-             resolve: OB,
-             reject: GB
-           });
-           const oB = {
-             id: QB,
-             text: BB
- ... (54 more removed lines; see GitHub link above)
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.rV = !1, this.zV = !1, this.Fv = 30, this.XV = 0, this.mp = 100, this.PU = !1, this.fullscreen = !1, this.Hk = function(WW) {}, this.kp = function(WW, iW, OW) {}, this.uZ = function() {}, this.Lk = function() {}, this.Xp = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(WW) {
+             if ("loading" === document.readyState) {
+               var iW = () => {
+                 document.removeEventListener("readystatechange", iW), WW()
+               };
+               document.addEventListener("readystatechange", iW)
+             } else setTimeout(WW, 0)
+           }((() => {
+             ! function(WW) {
+               var iW = WW._data,
+                 OW = iW.nowObject.now();
+               iW.lastTickStarted = OW, iW.lastFrameStarted = OW, iW.lastRenderStarted = OW, iW.frameCB = () => function(WW) {
+                 var iW = WW._data;
+ ... (52 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L552-L557` → after: `L385-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L385-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L385-L391) · [Before (L552-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L552-L557)

```diff
-   },
-   40432: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => DB
-     });
-     var YB = GB(40436);
+ 
+     function EW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
+       this.nowObject = performance || Date, this.pollTime = WW, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     }
+     var NW = 3,
+       PW = 20;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L560-L564` → after: `L394-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L394-L398) · [Before (L560-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L560-L564)

```diff
-       const OB = (new TextEncoder).encode(BB);
-       return {
-         bytes: (0, YB.e)(OB),
-         inflatedBytes: OB.byteLength
-       }
+       for (var iW = WW._data, OW = 1e3 / WW.Fv, mW = iW.nowObject.now() + PW, EW = 0; iW.nowObject.now() >= iW.lastTickStarted + OW && iW.nowObject.now() < mW && ++EW <= NW;) WW.Hk(OW), iW.lastTickStarted += OW;
+       var LW = 5 * (OW + 5),
+         cW = iW.nowObject.now();
+       if (cW - iW.lastTickStarted > LW)
+         for (; cW >= iW.lastTickStarted + OW;) iW.lastTickStarted += OW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L567-L577` → after: `L401-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L401-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L401-L408) · [Before (L567-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L567-L577)

```diff
-   40497: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => QB
-     });
-     const YB = 20;
-     let DB = Date.now() - performance.now();
- 
-     function QB() {
-       const BB = performance.now(),
-         OB = Date.now();
-       return Math.abs(OB - (BB + DB)) > YB && (DB = OB - BB), BB + DB
+   40189: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW, EW) {
+       var NW = {};
+       return Object.keys(mW).forEach((function(WW) {
+         NW[WW] = mW[WW]
+       })), NW.enumerable = !!NW.enumerable, NW.configurable = !!NW.configurable, ("value" in NW || NW.initializer) && (NW.writable = !0), NW = OW.slice().reverse().reduce((function(OW, mW) {
+         return mW(WW, iW, OW) || OW
+       }), NW), EW && void 0 !== NW.initializer && (NW.value = NW.initializer ? NW.initializer.call(EW) : void 0, NW.initializer = void 0), void 0 === NW.initializer && (Object.defineProperty(WW, iW, NW), NW = null), NW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L580` → after: `L414-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L414-L422) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L580)

```diff
-   40464: (BB, OB, GB) => {
+   40181: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW) {
+       OW && Object.defineProperty(WW, iW, {
+         enumerable: OW.enumerable,
+         configurable: OW.configurable,
+         writable: OW.writable,
+         value: OW.initializer ? OW.initializer.call(mW) : void 0
+       })
+     }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L584-L590` → after: `L431-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L431-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L431-L466) · [Before (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L584-L590)

```diff
-     var YB = GB(40469),
-       DB = GB(1186);
- 
-     function QB() {
-       return {
-         segmentUploadUrl: `${DB.clientSideServerUrls.indexUrl}${YB.h}`,
-         manifestUrl: `${DB.clientSideServerUrls.indexUrl}${YB.f}`
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+           const iW = [];
+           do {
+             const OW = Object.getOwnPropertyNames(WW);
+             for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
+           } while (WW = Object.getPrototypeOf(WW));
+           return iW
+         }(WW);
+         for (const wW of LW) {
+ ... (20 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L594` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L470) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L594)

```diff
-   40477: (BB, OB, GB) => {
+   39938: (WW, iW, OW) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L596` → after: `L472-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L472-L473) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L596)

```diff
-       e: () => YB,
+       d: () => EW,
+       g: () => NW,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L600-L626` → after: `L477-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L477-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L477-L480) · [Before (L600-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L600-L626)

```diff
-     const YB = 32768;
- 
-     function DB(BB) {
-       return (new TextEncoder).encode(BB).byteLength
-     }
-     const QB = new class {
-       constructor() {
-         this.inFlightBytes = 0, this.inFlightLabels = new Map
-       }
-       async fetch(BB, OB, GB, YB) {
-         if (this.inFlightBytes + GB > 49152) return await fetch(BB, OB);
-         this.inFlightBytes += GB, this.countLabel(YB, 1);
-         const DB = () => {
-           this.inFlightBytes -= GB, this.countLabel(YB, -1)
-         };
-         let QB;
- ... (11 more removed lines; see GitHub link above)
+     var mW = OW(38372);
+     class EW {
+       constructor(WW, iW, OW) {
+         this.gradient = WW, this.color1 = iW, this.color2 = OW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L628-L630` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L482-L483) · [Before (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L628-L630)

```diff
-       isInFlight(BB) {
-         var OB;
-         return (null !== (OB = this.inFlightLabels.get(BB)) && void 0 !== OB ? OB : 0) > 0
+       getColorToRef(WW) {
+         this.color2 ? mW.d.LerpToRef(this.color1, this.color2, Math.random(), WW) : WW.HJ(this.color1)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L632-L636` → after: `L485-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L485-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L485-L488) · [Before (L632-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L632-L636)

```diff
-       sendBeacon(BB, OB) {
-         const GB = DB(OB);
-         return !(this.inFlightBytes + GB > 57344) && this.beaconSent(navigator.sendBeacon(BB, new Blob([OB], {
-           type: "text/plain"
-         })), GB)
+     }
+     class NW {
+       constructor(WW, iW) {
+         this.gradient = WW, this.color = iW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L638-L639` → after: `L490-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L490-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L490-L493) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L638-L639)

```diff
-       sendUploadBeacon(BB, OB, GB) {
-         return !(this.inFlightBytes + GB > 40960) && this.beaconSent(navigator.sendBeacon(BB, OB), GB)
+     }
+     class PW {
+       constructor(WW, iW, OW) {
+         this.gradient = WW, this.factor1 = iW, this.factor2 = OW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L641-L643` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L495-L496) · [Before (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L641-L643)

```diff
-       countLabel(BB, OB) {
-         var GB;
-         void 0 !== BB && this.inFlightLabels.set(BB, (null !== (GB = this.inFlightLabels.get(BB)) && void 0 !== GB ? GB : 0) + OB)
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L645-L648` → after: `L498-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L498-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L498-L510) · [Before (L645-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L645-L648)

```diff
-       beaconSent(BB, OB) {
-         return BB && (this.inFlightBytes += OB, setTimeout((() => {
-           this.inFlightBytes -= OB
-         }), 1e4)), BB
+     }
+     class LW {
+       static GetCurrentGradient(WW, iW, OW) {
+         if (iW[0].gradient > WW) return void OW(iW[0], iW[0], 1);
+         for (let EW = 0; EW < iW.length - 1; EW++) {
+           const mW = iW[EW],
+             NW = iW[EW + 1];
+           if (WW >= mW.gradient && WW <= NW.gradient) {
+             return void OW(mW, NW, (WW - mW.gradient) / (NW.gradient - mW.gradient))
+           }
+         }
+         const mW = iW.length - 1;
+         OW(iW[mW], iW[mW], 1)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L652` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L514) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L652)

```diff
-   40505: (BB, OB, GB) => {
+   39911: (WW, iW, OW) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L654` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L516) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L654)

```diff
-       c: () => oB
+       b: () => mW
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L656-L676` → after: `L518-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L518-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L518-L568) · [Before (L656-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L656-L676)

```diff
-     var YB = GB(40477),
-       DB = GB(1200);
-     const QB = 6e4;
-     async function oB(BB, OB) {
-       const GB = JSON.stringify(OB);
-       try {
-         const OB = await YB.i.fetch(BB, {
-           method: "POST",
-           headers: {
-             "Content-Type": "application/json"
-           },
-           body: GB,
-           signal: (0, DB.t)(QB)
-         }, (0, YB.m)(GB));
-         return await async function(BB) {
-           if (!BB.ok) return 413 === BB.status ? "refused" : "retryLater";
- ... (5 more removed lines; see GitHub link above)
+     class mW {
+       static _CheckLimit(WW, iW) {
+         let OW = mW._LogLimitOutputs[WW];
+         return OW ? OW.current++ : (OW = {
+           limit: iW,
+           current: 1
+         }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
+       }
+       static _GenerateLimitMessage(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const OW = mW._LogLimitOutputs[WW];
+         if (!OW || !mW.MessageLimitReached) return;
+         const EW = this._Levels[iW];
+         OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
+       }
+       static _AddLogEntry(WW) {
+ ... (35 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L680` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L585) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L680)

```diff
-   40514: (BB, OB, GB) => {
+   39940: (WW, iW, OW) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L682-L683` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L587) · [Before (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L682-L683)

```diff
-       d: () => jB,
-       g: () => yB
+       d: () => PW
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L685-L721` → after: `L589-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L589-L631) · [Before (L685-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L685-L721)

```diff
-     var YB = GB(40477);
-     const DB = 16384,
-       QB = 100,
-       oB = (0, YB.m)(',"domSegments":[]');
- 
-     function jB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB;
-       const {
-         domSegments: jB,
-         ...yB
-       } = BB.manifest, JB = () => ({
-         ...BB,
-         manifest: {
-           ...yB,
-           videoSegments: [],
-           telemetrySegments: [],
- ... (21 more removed lines; see GitHub link above)
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(39908);
+     class PW {
+       constructor() {
+         this.direction1 = new mW.q(0, 1, 0), this.direction2 = new mW.q(0, 1, 0), this.minEmitBox = new mW.q(-.5, -.5, -.5), this.maxEmitBox = new mW.q(.5, .5, .5)
+       }
+       startDirectionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
+           LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
+           cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
+         if (NW) return iW.x = PW, iW.y = LW, void(iW.z = cW);
+         mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
+       }
+       startPositionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
+ ... (27 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L754` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L635) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L754)

```diff
-   40491: (BB, OB, GB) => {
+   39906: (WW, iW, OW) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L756` → after: `L637-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L637-L638) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L756)

```diff
-       e: () => YB
+       e: () => LW,
+       i: () => PW
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L758-L761` → after: `L640-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L640-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L640-L726) · [Before (L758-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L758-L761)

```diff
-     class YB extends Error {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         super(BB), this.status = OB, this.storageCode = GB
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(39908);
+     class PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = WW, this.height = iW, this.radiusRange = OW, this.directionRandomizer = EW, this._tempVector = mW.q.Zero()
+       }
+       startDirectionFunction(WW, iW, OW, NW, PW) {
+         OW.position.subtractToRef(WW.getTranslation(), this._tempVector), this._tempVector.normalize(), mW.q.TransformNormalToRef(this._tempVector, PW, this._tempVector);
+         const LW = (0, EW.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
+         let cW = Math.atan2(this._tempVector.x, this._tempVector.z);
+         cW += (0, EW.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = LW, this._tempVector.x = Math.sin(cW), this._tempVector.z = Math.cos(cW), this._tempVector.normalize(), NW ? iW.HJ(this._tempVector) : mW.q.TransformNormalFromFloatsToRef … [truncated]
+ ... (71 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L765` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L730) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L765)

```diff
-   40469: (BB, OB, GB) => {
+   40009: (WW, iW, OW) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L767-L771` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L732) · [Before (L767-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L767-L771)

```diff
-       c: () => jB,
-       f: () => DB,
-       g: () => QB,
-       h: () => YB,
-       l: () => oB
+       d: () => ZW
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L773-L780` → after: `L734-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L734-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/276.js#L734-L951) · [Before (L773-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/276.js#L773-L780)

```diff
-     const YB = "/index/replay/segment-upload-url",
-       DB = "/index/replay/manifest";
-     const QB = 65536;
- 
-     function oB(BB) {
-       return {
-         count: Math.ceil(BB.segmentDurationMs / BB.partDurationMs) + 1,
-         maxBytes: Math.ceil(1.5 * BB.bitrate / 8 * (BB.partDurationMs / 1e3)) + 32768
+     const mW = .5 * (Math.sqrt(3) - 1),
+       EW = (3 - Math.sqrt(3)) / 6,
+       NW = 1 / 3,
+       PW = 1 / 6,
+       LW = (Math.sqrt(5) - 1) / 4,
+       cW = (5 - Math.sqrt(5)) / 20,
+       wW = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
+       tW = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
+     const ZW = class {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+         const iW = "function" == typeof WW ? WW : function(WW) {
+           let iW = 0,
+             OW = 0,
+             mW = 0,
+             EW = 1;
+ ... (202 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (281 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4)

```diff
-   40563: (BB, OB, GB) => {
+   53781: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6-L7)

```diff
-       d: () => NJ,
-       f: () => al
+       d: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9-L159` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L8-L20) · [Before (L9-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L9-L159)

```diff
-     const YB = "0.9.4",
-       DB = {
-         DEBUG: !1,
-         LIB_VERSION: "1.438.7",
-         LIB_NAME: "web",
-         JS_SDK_VERSION: YB
-       };
-     var QB = DB;
-     const oB = "$early_access_features",
-       jB = "$active_feature_flags",
-       yB = "$feature_flag_details",
-       JB = "$feature_flag_errors",
-       MB = "$feature_flag_evaluated_at",
-       PB = "$feature_flag_request_id",
-       zB = "$minimal_flag_called_events",
-       lB = "$enabled_feature_flags",
- ... (135 more removed lines; see GitHub link above)
+     var mW = OW(41628),
+       EW = OW(53788);
+     class NW {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = OW, this.sEW = [], this._maxBlockCapacity = iW || 64, this._selectionContent = new mW.d(1024), this._creationFunc = WW
+       }
+       update(WW, iW, OW) {
+         EW.e._CreateBlocks(WW, iW, OW, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       xEW(WW) {
+         for (let iW = 0; iW < this.blocks.length; iW++) {
+           this.blocks[iW].addEntry(WW)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L161-L175` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L22-L25) · [Before (L161-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L161-L175)

```diff
-       }))) && void 0 !== OB ? OB : "null"
-     }
-     const ZG = Object.prototype,
-       NG = ZG.hasOwnProperty,
-       RG = ZG.toString,
-       WG = Array.isArray || function(BB) {
-         return "[object Array]" === RG.call(BB)
-       },
-       AG = BB => "function" == typeof BB,
-       VG = BB => BB === Object(BB) && !WG(BB),
-       SG = BB => {
-         if (VG(BB)) {
-           for (const OB in BB)
-             if (NG.call(BB, OB)) return !1;
-           return !0
+       }
+       pD(WW) {
+         for (let iW = 0; iW < this.blocks.length; iW++) {
+           this.blocks[iW].removeEntry(WW)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L177-L207` → after: `L27-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L27-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L27-L47) · [Before (L177-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L177-L207)

```diff
-         return !1
-       },
-       nG = BB => void 0 === BB,
-       UG = BB => "[object String]" == RG.call(BB),
-       fG = BB => UG(BB) && 0 === BB.trim().length,
-       kG = BB => null === BB,
-       dG = BB => nG(BB) || kG(BB),
-       KG = BB => "[object Number]" == RG.call(BB) && BB == BB,
-       uG = BB => KG(BB) && BB > 0,
-       mG = BB => "[object Boolean]" === RG.call(BB),
-       IG = BB => zG(MG, BB),
-       FG = BB => zG(PG, BB);
- 
-     function iG(BB) {
-       return null === BB || "object" != typeof BB
-     }
- ... (15 more removed lines; see GitHub link above)
+       }
+       select(WW, iW) {
+         this._selectionContent.reset();
+         for (let OW = 0; OW < this.blocks.length; OW++) {
+           this.blocks[OW].select(WW, this._selectionContent, iW)
+         }
+         return iW ? this._selectionContent.concat(this.sEW) : this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
+       }
+       intersects(WW, iW, OW) {
+         this._selectionContent.reset();
+         for (let mW = 0; mW < this.blocks.length; mW++) {
+           this.blocks[mW].intersects(WW, iW, this._selectionContent, OW)
+         }
+         return OW ? this._selectionContent.concat(this.sEW) : this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
+       }
+       intersectsRay(WW) {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L210-L212` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L50-L54) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L210-L212)

```diff
- 
-     function rG(BB) {
-       return "u" > typeof Event && XG(BB, Event)
+     NW.CreationFuncForMeshes = (WW, iW) => {
+       const OW = WW.KV();
+       !WW.isBlocked && OW.boundingBox.intersectsMinMax(iW.ZEW, iW.tEW) && iW.entries.push(WW)
+     }, NW.CreationFuncForSubMeshes = (WW, iW) => {
+       WW.KV().boundingBox.intersectsMinMax(iW.ZEW, iW.tEW) && iW.entries.push(WW)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L214-L219` → after: `L56-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L56-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L56-L65) · [Before (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L214-L219)

```diff
- 
-     function XG(BB, OB) {
-       try {
-         return BB instanceof OB
-       } catch (BB) {
-         return !1
+   },
+   53788: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW
+     });
+     var mW = OW(38241),
+       EW = OW(41825);
+     class NW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+         this.entries = [], this.MEW = new Array, this._capacity = OW, this._depth = mW, this._maxDepth = EW, this._creationFunc = NW, this._minPoint = WW, this._maxPoint = iW, this.MEW.push(WW.clone()), this.MEW.push(iW.clone()), this.MEW.push(WW.clone()), this.MEW[2].x = iW.x, t … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L221-L231` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L67-L68) · [Before (L221-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L221-L231)

```diff
-     }
-     const wG = [!0, "true", 1, "1", "yes"],
-       EG = BB => zG(wG, BB),
-       cG = [!1, "false", 0, "0", "no"];
- 
-     function hG(BB, OB, GB, YB, DB, QB, oB) {
-       try {
-         var jB = BB[QB](oB),
-           yB = jB.value
-       } catch (BB) {
-         return void GB(BB)
+       get aZ() {
+         return this._capacity
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L233-L244` → after: `L70-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L70-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L70-L85) · [Before (L233-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L233-L244)

```diff
-       jB.done ? OB(yB) : Promise.resolve(yB).then(YB, DB)
-     }
- 
-     function aG(BB) {
-       return function() {
-         var OB = this,
-           GB = arguments;
-         return new Promise((function(YB, DB) {
-           var QB = BB.apply(OB, GB);
- 
-           function oB(BB) {
-             hG(QB, YB, DB, oB, jB, "next", BB)
+       get ZEW() {
+         return this._minPoint
+       }
+       get tEW() {
+         return this._maxPoint
+       }
+       addEntry(WW) {
+         if (this.blocks)
+           for (let iW = 0; iW < this.blocks.length; iW++) {
+             this.blocks[iW].addEntry(WW)
+           } else this._creationFunc(WW, this), this.entries.length > this.aZ && this._depth < this._maxDepth && this.createInnerBlocks()
+       }
+       removeEntry(WW) {
+         if (this.blocks) {
+           for (let iW = 0; iW < this.blocks.length; iW++) {
+             this.blocks[iW].removeEntry(WW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L246-L248` → after: `L87-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L87-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L87-L104) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L246-L248)

```diff
- 
-           function jB(BB) {
-             hG(QB, YB, DB, oB, jB, "throw", BB)
+           return
+         }
+         const iW = this.entries.indexOf(WW);
+         iW > -1 && this.entries.splice(iW, 1)
+       }
+       addEntries(WW) {
+         for (let iW = 0; iW < WW.length; iW++) {
+           const OW = WW[iW];
+           this.addEntry(OW)
+         }
+       }
+       select(WW, iW, OW) {
+         if (EW.b.IsInFrustum(this.MEW, WW)) {
+           if (this.blocks) {
+             for (let mW = 0; mW < this.blocks.length; mW++) {
+               this.blocks[mW].select(WW, iW, OW)
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L250-L251` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L106-L107) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L250-L251)

```diff
-           oB(void 0)
-         }))
+           OW ? iW.concat(this.entries) : iW.concatWithNoDuplicate(this.entries)
+         }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L253-L263` → after: `L109-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L109-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L109-L113) · [Before (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L253-L263)

```diff
-     }
-     const eG = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
-       TG = new Map,
-       bG = function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         if (!BB) return !1;
-         const GB = function(BB, OB) {
-             let GB = "";
-             for (let YB = 0; OB.length > YB; YB++) {
-               const BB = OB[YB];
-               GB += BB.length + ":" + BB
+       intersects(WW, iW, OW, mW) {
+         if (EW.b.IntersectsSphere(this._minPoint, this._maxPoint, WW, iW)) {
+           if (this.blocks) {
+             for (let EW = 0; EW < this.blocks.length; EW++) {
+               this.blocks[EW].intersects(WW, iW, OW, mW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L265-L279` → after: `L115-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L115-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L115-L129) · [Before (L265-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L265-L279)

```diff
-             return BB.length + ":" + BB + "|" + OB.length + ":" + GB
-           }(BB, OB),
-           YB = TG.get(GB);
-         if (void 0 !== YB) return YB;
-         const DB = BB.toLowerCase(),
-           QB = eG.concat(OB).some((BB => -1 !== DB.indexOf(BB.toLowerCase())));
-         return 256 > TG.size || TG.clear(), TG.set(GB, QB), QB
-       };
- 
-     function CG(BB, OB, GB, YB, DB) {
-       return OB > GB && (YB.warn("min cannot be greater than max."), OB = GB), KG(BB) ? BB > GB ? (YB.warn(" cannot be  greater than max: " + GB + ". Using max value instead."), GB) : OB > BB ? (YB.warn(" cannot be less than min: " + OB + ". Using min value instead."), OB) : BB : … [truncated]
-     }
-     var HG = class {
-       constructor(BB) {
-         this._buckets = {}, this._onBucketRateLimited = BB._onBucketRateLimited, this._bucketSize = CG(BB.bucketSize, 0, 100, BB._logger), this._refillRate = CG(BB.refillRate, 0, this._bucketSize, BB._logger), this._refillInterval = CG(BB.refillInterval, 0, 864e5, BB._logger)
+             return
+           }
+           mW ? OW.concat(this.entries) : OW.concatWithNoDuplicate(this.entries)
+         }
+       }
+       intersectsRay(WW, iW) {
+         if (WW.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let OW = 0; OW < this.blocks.length; OW++) {
+               this.blocks[OW].intersectsRay(WW, iW)
+             }
+             return
+           }
+           iW.concatWithNoDuplicate(this.entries)
+         }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L281-L283` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L131-L132) · [Before (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L281-L283)

```diff
-       _applyRefill(BB, OB) {
-         const GB = Math.floor((OB - BB.lastAccess) / this._refillInterval);
-         GB > 0 && (BB.tokens = Math.min(BB.tokens + GB * this._refillRate, this._bucketSize), BB.lastAccess = BB.lastAccess + GB * this._refillInterval)
+       createInnerBlocks() {
+         NW._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L285-L293` → after: `L134-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L134-L144) · [Before (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L285-L293)

```diff
-       consumeRateLimit(BB) {
-         var OB;
-         const GB = Date.now(),
-           YB = String(BB);
-         let DB = this._buckets[YB];
-         return DB ? this._applyRefill(DB, GB) : (DB = {
-           tokens: this._bucketSize,
-           lastAccess: GB
-         }, this._buckets[YB] = DB), 0 === DB.tokens || (DB.tokens--, 0 === DB.tokens && (null === (OB = this._onBucketRateLimited) || void 0 === OB || OB.call(this, BB)), 0 === DB.tokens)
+       static _CreateBlocks(WW, iW, OW, EW, PW, LW, cW, wW) {
+         cW.blocks = new Array;
+         const tW = new mW.q((iW.x - WW.x) / 2, (iW.y - WW.y) / 2, (iW.z - WW.z) / 2);
+         for (let mW = 0; mW < 2; mW++)
+           for (let iW = 0; iW < 2; iW++)
+             for (let ZW = 0; ZW < 2; ZW++) {
+               const xW = WW.add(tW.multiplyByFloats(mW, iW, ZW)),
+                 lW = WW.add(tW.multiplyByFloats(mW + 1, iW + 1, ZW + 1)),
+                 AW = new NW(xW, lW, EW, PW + 1, LW, wW);
+               AW.addEntries(OW), cW.blocks.push(AW)
+             }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L295-L296` → after: `L146-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L146-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L146-L161) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L295-L296)

```diff
-       stop() {
-         this._buckets = {}
+     }
+   },
+   53797: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW
+     });
+     var mW = OW(41612),
+       EW = OW(38241),
+       NW = OW(41942),
+       PW = OW(53729),
+       LW = OW(41689),
+       cW = OW(38270),
+       wW = OW(53781);
+     class tW {
+       constructor(WW) {
+         this.name = LW.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new PW.t(EW.q.Zero(), new EW.q(1, 1, 1)), (WW = WW || cW.d.LastCreatedScene) && (this.rb = WW, this.rb.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.rb.getActiveSubMeshCandidat … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L298-L419` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L163-L167) · [Before (L298-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L298-L419)

```diff
-     };
-     const vG = "Mobile",
-       sG = "Android",
-       xG = "Tablet",
-       tG = "Android Tablet",
-       BY = "iPad",
-       OY = "Apple Watch",
-       GY = "Safari",
-       YY = "BlackBerry",
-       DY = "Samsung Internet",
-       QY = "Chrome",
-       oY = "Chrome iOS",
-       jY = "Internet Explorer",
-       yY = "Internet Explorer Mobile",
-       JY = "Opera",
-       MY = "Microsoft Edge",
- ... (106 more removed lines; see GitHub link above)
+       register() {
+         this.rb.onMeshRemovedObservable.add((WW => {
+           const iW = this.rb.selectionOctree;
+           if (void 0 !== iW && null !== iW) {
+             const OW = iW.sEW.indexOf(WW); - 1 !== OW && iW.sEW.splice(OW, 1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L421-L440` → after: `L169-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L169-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L169-L179) · [Before (L421-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L421-L440)

```diff
-           return [RY, ""]
-         }],
-         [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, BB => BB && BB[3] ? ["iOS", [BB[3], BB[4], BB[5] || "0"].join(".")] : ["iOS", ""]],
-         [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, BB => {
-           let OB = "";
-           return BB && BB.length >= 3 && (OB = nG(BB[2]) ? BB[3] : BB[2]), ["watchOS", OB]
-         }],
-         [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), BB => BB && BB[2] ? [sG, [BB[2], BB[3], BB[4] || "0"].join(".")] : [sG, ""]],
-         [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, BB => {
-           const OB = ["Mac OS X", ""];
-           return BB && BB[1] && (OB[1] = [BB[1], BB[2], BB[3] || "0"].join(".")), OB
-         }],
-         [/Mac/i, ["Mac OS X", ""]],
-         [/CrOS/, ["Chrome OS", ""]],
-         [/Linux|debian/i, ["Linux", ""]]
-       ],
- ... (4 more removed lines; see GitHub link above)
+         })), this.rb.onMeshImportedObservable.add((WW => {
+           const iW = this.rb.selectionOctree;
+           void 0 !== iW && null !== iW && iW.xEW(WW)
+         }))
+       }
+       getActiveMeshCandidates() {
+         return this.rb.JEW?.select(this.rb.frustumPlanes) || this.rb._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(WW) {
+         if (WW._submeshesOctree && WW.useOctreeForRenderingSelection) {
+           return WW._submeshesOctree.select(this.rb.frustumPlanes)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L442-L483` → after: `L181-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L181-L186) · [Before (L442-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L442-L483)

```diff
-         return ["", ""]
-       },
-       sY = function(BB) {
-         return hY.test(BB) ? lY : cY.test(BB) ? pY : EY.test(BB) ? qY : new RegExp(VY, "i").test(BB) ? VY : new RegExp("(Windows Phone|WPDesktop)", "i").test(BB) ? WY : /iPad/.test(BB) ? BY : /iPod/.test(BB) ? "iPod Touch" : /iPhone/.test(BB) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\ … [truncated]
-       },
-       xY = function(BB, OB) {
-         var GB;
-         const YB = sY(BB);
-         return YB === BY || YB === tG || "Kobo" === YB || "Kindle Fire" === YB || YB === nY ? xG : YB === lY || YB === qY || YB === pY || YB === VY ? "Console" : YB === OY ? "Wearable" : YB ? vG : "Android" === (null == OB ? void 0 : OB.userAgentDataPlatform) && (null !== (GB = n … [truncated]
-         var DB, QB, oB
-       },
-       tY = /\bFBAV\/(\d+(?:\.\d+)*)/i,
-       BD = [
-         [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
-         [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
-         [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", tY],
- ... (26 more removed lines; see GitHub link above)
+         return this.rb._getDefaultSubMeshCandidates(WW)
+       }
+       getIntersectingSubMeshCandidates(WW, iW) {
+         if (WW._submeshesOctree && WW.useOctreeForPicking) {
+           PW.t.TransformToRef(iW, WW.getWorldMatrix(), this._tempRay);
+           return WW._submeshesOctree.intersectsRay(this._tempRay)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L486-L502` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L190-L193) · [Before (L486-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L486-L502)

```diff
-       return OB
-     }
- 
-     function DD(BB, OB) {
-       if (!OB) return BB;
-       let GB = [];
-       try {
-         GB = Object.keys(OB)
-       } catch (BB) {
-         GB = []
-       }
-       for (const YB of GB) {
-         let GB;
-         try {
-           GB = OB[YB]
-         } catch (BB) {
- ... (1 more removed lines; see GitHub link above)
+       getCollidingSubMeshCandidates(WW, iW) {
+         if (WW._submeshesOctree && WW.useOctreeForCollisions) {
+           const OW = iW._velocityWorldLength + Math.max(iW._radius.x, iW._radius.y, iW._radius.z);
+           return WW._submeshesOctree.intersects(iW._basePointWorld, OW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L504-L509` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L195) · [Before (L504-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L504-L509)

```diff
-         Object.defineProperty(BB, YB, {
-           value: GB,
-           enumerable: !0,
-           writable: !0,
-           configurable: !0
-         })
+         return this.rb._getDefaultSubMeshCandidates(WW)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L511` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L197-L198) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L511)

```diff
-       return BB
+       rebuild() {}
+       dispose() {}
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L513-L533` → after: `L200-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L200-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L200-L271) · [Before (L513-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L513-L533)

```diff
-     Date, Date;
-     const QD = 3e5;
-     var oD = class {
-       record(BB) {
-         if ("too-large" === BB.kind) return;
-         if ("retry-later" !== BB.kind) return void this.reset();
-         if (!BB.retryAfterMs) return;
-         const OB = this.isOpen(),
-           GB = Date.now(),
-           YB = Math.min(BB.retryAfterMs, QD);
-         if (!OB) return this._installedAt = GB, void(this._until = GB + YB);
-         this._until = Math.max(this._until, Math.min(GB + YB, this._installedAt + QD))
-       }
-       remainingMs() {
-         const BB = Date.now();
-         if (this._installedAt - 5e3 > BB) return this.reset(), 0;
- ... (5 more removed lines; see GitHub link above)
+     let ZW = !1;
+     ZW || (ZW = !0, mW.i.prototype.createOrUpdateSelectionOctree = function() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         OW = this._getComponent(LW.b.NAME_OCTREE);
+       OW || (OW = new tW(this), this.MmW(OW)), this.JEW || (this.JEW = new wW.d(wW.d.CreationFuncForMeshes, WW, iW));
+       const mW = this.getWorldExtends();
+       return this.JEW.update(mW.min, mW.max, this.meshes), this.JEW
+     }, Object.defineProperty(mW.i.prototype, "selectionOctree", {
+       get: function() {
+         return this.JEW
+       },
+       enumerable: !0,
+       configurable: !0
+     }), NW.b.prototype.createOrUpdateSubmeshesOctree = function() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (56 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L535-L536` → after: `L273-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L273-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L273-L316) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L535-L536)

```diff
-       reset() {
-         this._until = 0, this._installedAt = 0
+       intersectsBox(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.intersectsBoxMinMax(WW.minimum, WW.maximum, iW)
+       }
+       intersectsSphere(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = WW.center.x - this.origin.x,
+           mW = WW.center.y - this.origin.y,
+           EW = WW.center.z - this.origin.z,
+           NW = OW * OW + mW * mW + EW * EW,
+           PW = WW.radius + iW,
+           LW = PW * PW;
+         if (NW <= LW) return !0;
+         const cW = OW * this.direction.x + mW * this.direction.y + EW * this.direction.z;
+         if (cW < 0) return !1;
+         return NW - cW * cW <= LW
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L538-L539` → after: `L318-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L318-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L318-L419) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L538-L539)

```diff
-       constructor() {
-         this._until = 0, this._installedAt = 0
+       intersectsAxis(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (WW) {
+           case "y": {
+             const WW = (this.origin.y - iW) / this.direction.y;
+             return WW > 0 ? null : new EW.q(this.origin.x + this.direction.x * -WW, iW, this.origin.z + this.direction.z * -WW)
+           }
+           case "x": {
+             const WW = (this.origin.x - iW) / this.direction.x;
+             return WW > 0 ? null : new EW.q(iW, this.origin.y + this.direction.y * -WW, this.origin.z + this.direction.z * -WW)
+           }
+           case "z": {
+             const WW = (this.origin.z - iW) / this.direction.z;
+             return WW > 0 ? null : new EW.q(this.origin.x + this.direction.x * -WW, this.origin.y + this.direction.y * -WW, iW)
+           }
+           default:
+ ... (86 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L541-L570` → after: `L421-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L421-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L421-L430) · [Before (L541-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L541-L570)

```diff
-     };
-     const jD = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
- 
-     function yD(BB, OB) {
-       return "string" == typeof(GB = BB) && jD.test(GB) ? BB : OB();
-       var GB
-     }
- 
-     function JD(BB, OB) {
-       const GB = new Error(OB);
-       try {
-         Object.defineProperty(GB, "name", {
-           value: BB,
-           writable: !0,
-           enumerable: !0,
-           configurable: !0
- ... (14 more removed lines; see GitHub link above)
+       unprojectRayToRef(WW, iW, OW, mW, NW, PW, LW) {
+         const wW = EW.l.Matrix[0];
+         NW.multiplyToRef(PW, wW), wW.multiplyToRef(LW, wW), wW.invert();
+         const tW = cW.d.LastCreatedEngine,
+           ZW = EW.l.fA[0];
+         ZW.x = WW / OW * 2 - 1, ZW.y = -(iW / mW * 2 - 1), ZW.z = tW?.nmW ? 1 : tW?.isNDCHalfZRange ? 0 : -1;
+         const xW = EW.l.fA[1].yWW(ZW.x, ZW.y, 1 - 1e-8),
+           lW = EW.l.fA[2],
+           AW = EW.l.fA[3];
+         EW.q.TransformCoordinatesToRef(ZW, wW, lW), EW.q.TransformCoordinatesToRef(xW, wW, AW), this.origin.HJ(lW), AW.subtractToRef(lW, this.direction), this.direction.normalize()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L574-L576` → after: `L434-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L434-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L434-L454) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L574-L576)

```diff
-     function zD(BB, OB) {
-       const GB = setTimeout(BB, OB);
-       return null != GB && GB.unref && (null == GB || GB.unref()), GB
+     function xW(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const PW = ZW.Zero();
+       return lW(WW, iW, OW, mW, PW, EW, NW), PW
+     }
+ 
+     function lW(WW, iW, OW, mW, NW, PW) {
+       let LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const wW = WW.VA();
+       if (!PW && !(PW = WW.activeCamera) && !(PW = WW.cameraToUseForPointers)) return WW;
+       const tW = PW.viewport,
+         ZW = wW.getRenderHeight(),
+         {
+           x: xW,
+           y: lW,
+ ... (5 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L579-L580` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L457-L459) · [Before (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L579-L580)

```diff
-     function lD(BB, OB, GB) {
-       return pD.apply(this, arguments)
+     function AW(WW, iW, OW, mW) {
+       const EW = ZW.Zero();
+       return bW(WW, iW, OW, EW, mW), EW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L583-L599` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L462-L476) · [Before (L583-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L583-L599)

```diff
-     function pD() {
-       return (pD = aG((function*(BB, OB, GB) {
-         let YB;
-         try {
-           return yield Promise.race([BB, new Promise(((BB, DB) => {
-             YB = zD((() => {
-               try {
-                 null == GB || GB(), BB()
-               } catch (BB) {
-                 DB(BB)
-               }
-             }), OB)
-           }))])
-         } finally {
-           clearTimeout(YB)
-         }
- ... (1 more removed lines; see GitHub link above)
+     function bW(WW, iW, OW, mW, NW) {
+       if (!LW.b) return WW;
+       const PW = WW.VA();
+       if (!NW && !(NW = WW.activeCamera) && !(NW = WW.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const cW = NW.viewport,
+         wW = PW.getRenderHeight(),
+         {
+           x: tW,
+           y: ZW,
+           width: xW,
+           height: lW
+         } = cW.toGlobal(PW.getRenderWidth(), wW),
+         AW = EW.d.Identity(),
+         bW = 1 / PW.getHardwareScalingLevel();
+       return iW = iW * bW - tW, OW = OW * bW - (wW - ZW - lW), mW.update(iW, OW, xW, lW, AW, AW, NW.getProjectionMatrix()), WW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L602-L607` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L479-L480) · [Before (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L602-L607)

```diff
-     function qD(BB) {
-       return qD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
-         return typeof BB
-       } : function(BB) {
-         return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
-       }, qD(BB)
+     function jW(WW, iW, OW, mW, EW, NW, PW, LW) {
+       return UW(WW, OW, mW, iW(mW, OW.enableDistantPicking), EW, NW, PW, LW)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L610-L628` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L483-L485) · [Before (L610-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L610-L628)

```diff
-     function ZD(BB, OB, GB) {
-       return (OB = function(BB) {
-         var OB = function(BB) {
-           if ("object" != qD(BB) || !BB) return BB;
-           var OB = BB[Symbol.toPrimitive];
-           if (void 0 !== OB) {
-             var GB = OB.call(BB, "string");
-             if ("object" != qD(GB)) return GB;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return String(BB)
-         }(BB);
-         return "symbol" == qD(OB) ? OB : OB + ""
-       }(OB)) in BB ? Object.defineProperty(BB, OB, {
-         value: GB,
-         enumerable: !0,
- ... (3 more removed lines; see GitHub link above)
+     function UW(WW, iW, OW, mW, EW, NW, PW, LW) {
+       const cW = iW.intersects(mW, EW, PW, NW, OW, LW);
+       return cW && cW.hit ? !EW && null != WW && cW.distance >= WW.distance ? null : cW : null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L632-L639` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L489) · [Before (L632-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L632-L639)

```diff
-       var GB = Object.keys(BB);
-       if (Object.getOwnPropertySymbols) {
-         var YB = Object.getOwnPropertySymbols(BB);
-         OB && (YB = YB.filter((function(OB) {
-           return Object.getOwnPropertyDescriptor(BB, OB).enumerable
-         }))), GB.push.apply(GB, YB)
-       }
-       return GB
+       return "InstancedLinesMesh" === WW || "LinesMesh" === WW ? iW.intersectionThreshold : 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L643-L649` → after: `L493-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L493-L501) · [Before (L643-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L643-L649)

```diff
-       for (var OB = 1; arguments.length > OB; OB++) {
-         var GB = null != arguments[OB] ? arguments[OB] : {};
-         OB % 2 ? ND(Object(GB), !0).forEach((function(OB) {
-           ZD(BB, OB, GB[OB])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : ND(Object(GB)).forEach((function(OB) {
-           Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
-         }))
+       const iW = WW.getClassName();
+       if ("GreasedLineMesh" === iW) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const OW = WW.rawBoundingInfo;
+       return {
+         rawBoundingInfo: OW,
+         intersectionThreshold: OW ? kW(iW, WW) : 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L655-L668` → after: `L505-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L505-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L505-L524) · [Before (L655-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L655-L668)

```diff
-     function nD(BB) {
-       var OB;
-       const GB = globalThis._posthogChunkIds,
-         YB = globalThis._debugIds;
-       if (!GB && !YB) return;
-       const DB = GB ? Object.keys(GB) : [],
-         QB = YB ? Object.keys(YB) : [];
-       if (SD && UD(GB, DB, AD) && UD(YB, QB, VD)) return SD;
-       AD = GB ? RD({}, GB) : void 0, VD = YB ? RD({}, YB) : void 0, SD = {}, null !== (OB = WD) && void 0 !== OB || (WD = {});
-       const oB = (OB, GB) => {
-         for (const DB of OB) {
-           const OB = GB[DB];
-           if (!OB) continue;
-           const QB = null == WD ? void 0 : WD[DB];
+     function MW(WW, iW, OW, mW, EW) {
+       const NW = WW(OW, iW.enableDistantPicking);
+       return NW.intersectsSphere(mW.HEW, EW) && NW.intersectsBox(mW.boundingBox, EW) ? NW : null
+     }
+ 
+     function KW(WW, iW, OW, mW, NW, PW) {
+       let cW = null;
+       const wW = !!(WW.activeCameras && WW.activeCameras.length > 1 && WW.cameraToUseForPointers !== WW.activeCamera),
+         ZW = WW.cameraToUseForPointers || WW.activeCamera,
+         xW = tW.internalPickerForMesh || jW,
+         lW = xW === jW;
+       for (let LW = 0; LW < WW.meshes.length; LW++) {
+         const tW = WW.meshes[LW];
+         if (OW) {
+           if (!OW(tW, -1)) continue
+         } else if (!tW.isEnabled() || !tW.isVisible || !tW.Fb) continue;
+ ... (4 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L670-L676` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L526-L530) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L670-L676)

```diff
-             SD[QB] = OB;
-             continue
-           }
-           const oB = BB(DB);
-           for (let BB = oB.length - 1; BB >= 0; BB--) {
-             var YB;
-             const GB = null === (YB = oB[BB]) || void 0 === YB ? void 0 : YB.filename;
+             if (NW) return WW;
+             const {
+               rawBoundingInfo: LW,
+               intersectionThreshold: wW
+             } = sW(tW), ZW = tW._thinInstanceDataStorage.matrixData;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L678-L679` → after: `L532-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L532-L542) · [Before (L678-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L678-L679)

```diff
-               SD[GB] = OB, WD[DB] = GB;
-               break
+               const WW = EW.l.Matrix[0],
+                 AW = EW.l.Matrix[1],
+                 jW = Math.min(tW.OWW, ZW.length >> 4);
+               for (let kW = 0; kW < jW; kW++) {
+                 if (OW && !OW(tW, kW)) continue;
+                 EW.d.FromArrayToRef(ZW, kW << 4, WW), WW.multiplyToRef(bW, AW);
+                 const jW = lW && LW ? MW(iW, tW, AW, LW, wW) : null;
+                 if (lW && LW && !jW) continue;
+                 const sW = lW && jW ? UW(cW, tW, AW, jW, mW, NW, PW, !0) : xW(cW, iW, tW, AW, mW, NW, PW, !0);
+                 if (sW && (cW = sW, cW.thinInstanceIndex = kW, mW)) return cW
+               }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L683-L684` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L549-L550) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L683-L684)

```diff
-       };
-       return YB && oB(QB, YB), GB && oB(DB, GB), SD
+       }
+       return cW || new LW.b
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L687-L858` → after: `L553-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L553-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L553-L583) · [Before (L687-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L687-L858)

```diff
-     function UD(BB, OB, GB) {
-       return BB && GB ? OB.length === Object.keys(GB).length && OB.every((OB => BB[OB] === GB[OB])) : BB === GB
-     }
-     var fD = class {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         this.coercers = BB, this.stackParser = OB, this.modifiers = GB
-       }
-       buildFromUnknown(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const GB = OB && OB.mechanism || {
-             handled: !0,
-             type: "generic"
-           },
-           YB = this.buildCoercingContext(GB, OB, 0).apply(BB),
-           DB = this.buildParsingContext(OB),
- ... (156 more removed lines; see GitHub link above)
+     function SW(WW, iW, OW, mW) {
+       if (!LW.b) return null;
+       const NW = [],
+         PW = !!(WW.activeCameras && WW.activeCameras.length > 1 && WW.cameraToUseForPointers !== WW.activeCamera),
+         cW = WW.cameraToUseForPointers || WW.activeCamera,
+         wW = tW.internalPickerForMesh || jW,
+         ZW = wW === jW;
+       for (let LW = 0; LW < WW.meshes.length; LW++) {
+         const tW = WW.meshes[LW];
+         if (OW) {
+           if (!OW(tW, -1)) continue
+         } else if (!tW.isEnabled() || !tW.isVisible || !tW.Fb) continue;
+         const xW = PW && tW.isWorldMatrixCameraDependent(),
+           lW = tW.computeWorldMatrix(xW, cW);
+         if (tW.hasThinInstances && tW.OOW) {
+           if (wW(null, iW, tW, lW, !0, !0, mW)) {
+ ... (15 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L885` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L587-L590) · [Before (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L885)

```diff
-         })
+         } else {
+           const WW = wW(null, iW, tW, lW, !1, !1, mW);
+           WW && NW.push(WW)
+         }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L887-L889` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L592-L593) · [Before (L887-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L887-L889)

```diff
-     };
-     const kD = /^([a-z][a-z0-9.+-]+):/i,
-       dD = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+       return NW
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L891-L894` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L595-L598) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L891-L894)

```diff
-     function KD(BB) {
-       if (!BB || "<anonymous>" === BB) return !1;
-       const OB = kD.exec(BB);
-       return !OB || dD.includes(OB[1].toLowerCase())
+     function YW(WW, iW, OW, mW, NW, PW) {
+       if (!LW.b) return null;
+       const cW = KW(WW, (mW => (WW._tempPickingRay || (WW._tempPickingRay = ZW.Zero()), lW(WW, iW, OW, mW, WW._tempPickingRay, PW || null), WW._tempPickingRay)), mW, NW, !0);
+       return cW && (cW.ray = xW(WW, iW, OW, EW.d.Identity(), PW || null)), cW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L897-L904` → after: `L601-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L601-L603) · [Before (L897-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L897-L904)

```diff
-     function uD(BB, OB, GB, YB, DB) {
-       const QB = {
-         platform: BB,
-         filename: OB,
-         function: "<anonymous>" === GB ? "?" : GB,
-         in_app: KD(OB)
-       };
-       return nG(YB) || (QB.lineno = YB), nG(DB) || (QB.colno = DB), QB
+     function yW(WW, iW, OW, mW, NW, PW, LW) {
+       const cW = KW(WW, ((mW, EW) => (WW._tempPickingRay || (WW._tempPickingRay = ZW.Zero()), lW(WW, iW, OW, mW, WW._tempPickingRay, PW || null, !1, EW), WW._tempPickingRay)), mW, NW, !1, LW);
+       return cW && (cW.ray = xW(WW, iW, OW, EW.d.Identity(), PW || null)), cW
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L946-L947` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L606-L608) · [Before (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L946-L947)

```diff
-     function ED(BB, OB) {
-       return BB.filename === OB.filename && BB.function === OB.function && BB.module === OB.module && BB.lineno === OB.lineno && BB.colno === OB.colno
+     function TW(WW, iW, OW, mW, NW) {
+       const PW = KW(WW, (OW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = EW.d.Identity()), OW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = ZW.Zero()), ZW.TransformToRef(iW, WW._pickWithRayInverseMatrix … [truncated]
+       return PW && (PW.ray = iW), PW
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L950-L966` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L611-L612) · [Before (L950-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L950-L966)

```diff
-     function cD(BB) {
-       for (let OB = 1; 10 >= OB; OB++) {
-         const GB = BB.length - 2 * OB;
-         if (0 > GB) break;
-         let YB = !0;
-         for (let DB = 0; OB > DB; DB++)
-           if (!ED(BB[GB + DB], BB[GB + OB + DB])) {
-             YB = !1;
-             break
-           } if (YB) {
-           for (let YB = 0; OB > YB; YB++) BB[GB + YB] = BB[GB + OB + YB];
-           return BB.length = GB + OB, {
-             start: GB,
-             length: OB
-           }
-         }
- ... (1 more removed lines; see GitHub link above)
+     function JW(WW, iW, OW, mW, EW, NW) {
+       return SW(WW, (mW => xW(WW, iW, OW, mW, EW || null)), mW, NW)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L969-L978` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L615-L616) · [Before (L969-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L969-L978)

```diff
-     function hD(BB, OB) {
-       const GB = OB.start + OB.length,
-         YB = eD(BB, OB);
-       YB && BB.splice(GB + YB === BB.length ? GB : OB.start, YB)
-     }
- 
-     function aD(BB, OB) {
-       let GB = OB.start;
-       for (; GB > 0 && ED(BB[GB - 1], BB[GB - 1 + OB.length]);) GB--;
-       return OB.start - GB
+     function hW(WW, iW, OW, mW) {
+       return SW(WW, (OW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = EW.d.Identity()), OW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = ZW.Zero()), ZW.TransformToRef(iW, WW._pickWithRayInverseMatrix, WW … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L982-L985` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L620-L627) · [Before (L982-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L982-L985)

```diff
-       const GB = OB.start + OB.length;
-       let YB = GB;
-       for (; BB.length > YB && ED(BB[YB], BB[YB - OB.length]);) YB++;
-       return YB - GB
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+         mW = arguments.length > 3 ? arguments[3] : void 0,
+         NW = arguments.length > 4 ? arguments[4] : void 0;
+       mW || (mW = WW.getWorldMatrix()), iW.length = OW, NW ? iW.origin.HJ(NW) : iW.origin.HJ(WW.position);
+       const PW = EW.l.fA[2];
+       PW.set(0, 0, WW._scene.useRightHandedSystem ? -1 : 1);
+       const LW = EW.l.fA[3];
+       return EW.q.TransformNormalToRef(PW, mW, LW), EW.q.NormalizeToRef(LW, iW.direction), iW
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L989-L1001` → after: `L631-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L631-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L631-L640) · [Before (L989-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L989-L1001)

```diff
-       const GB = OB[0];
-       let YB = BB.length - (GB ? aD(BB, GB) : 0);
-       for (const DB of OB) YB -= eD(BB, DB);
-       return YB
-     }
- 
-     function bD(BB, OB, GB) {
-       for (let YB = 0; BB.length > YB; YB++) {
-         const DB = BB[(OB + YB) % BB.length],
-           QB = BB[(GB + YB) % BB.length];
-         if (DB !== QB) return QB > DB
-       }
-       return !1
+       iW && (iW.prototype.getForwardRay = function() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         return HW(this, new ZW(EW.q.Zero(), EW.q.Zero(), WW), WW, iW, OW)
+       }, iW.prototype.getForwardRayToRef = function(WW) {
+         return HW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
+       }), WW && (wW.b._IsPickingAvailable = !0, WW.prototype.createPickingRay = function(WW, iW, OW, mW) {
+         return xW(this, WW, iW, OW, mW, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
+       })
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1003-L1014` → after: `L642-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L642-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L642-L702) · [Before (L1003-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1003-L1014)

```diff
-     var CD = class {
-         match(BB) {
-           return this.isDOMException(BB) || this.isDOMError(BB)
-         }
-         coerce(BB, OB) {
-           const GB = UG(BB.stack);
-           return {
-             type: this.getType(BB),
-             value: this.getValue(BB),
-             stack: GB ? BB.stack : void 0,
-             cause: BB.cause ? OB.next(BB.cause) : void 0,
-             synthetic: !1
+     ZW._TmpVector3 = (0, NW.c)(6, EW.q.Zero), ZW._RayDistant = ZW.Zero(), ZW._Smallnum = 1e-8, ZW._Rayl = 1e9
+   },
+   53720: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW.t
+     });
+     var mW = OW(41612),
+       EW = OW(41723),
+       NW = OW(53729);
+     let PW = !1;
+     PW || (PW = !0, (0, NW.b)(mW.i, EW.e), mW.i.prototype.createPickingRayToRef = function(WW, iW, OW, mW, EW) {
+       let PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, NW.i)(this, WW, iW, OW, mW, EW, PW, LW)
+     }, mW.i.prototype.createPickingRayInCameraSpace = function(WW, iW, OW) {
+       return (0, NW.h)(this, WW, iW, OW)
+ ... (45 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1016-L1045` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L704-L705) · [Before (L1016-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1016-L1045)

```diff
-         }
-         getType(BB) {
-           return this.isDOMError(BB) ? "DOMError" : "DOMException"
-         }
-         getValue(BB) {
-           const OB = BB.name || (this.isDOMError(BB) ? "DOMError" : "DOMException");
-           return BB.message ? `${OB}: ${BB.message}` : OB
-         }
-         isDOMException(BB) {
-           return LG(BB, "DOMException")
-         }
-         isDOMError(BB) {
-           return LG(BB, "DOMError")
-         }
-       },
-       HD = class {
- ... (14 more removed lines; see GitHub link above)
+           set shadowFrustumSize(WW) {
+             this._shadowFrustumSize = WW, this.forceProjectionMatrixCompute()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1047-L1062` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L707-L708) · [Before (L1047-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1047-L1062)

```diff
-         }
-         getType(BB) {
-           return BB.name || BB.constructor.name
-         }
-         getMessage(BB, OB) {
-           const GB = BB.message;
-           return String(GB.error && "string" == typeof GB.error.message ? GB.error.message : GB)
-         }
-         getStack(BB) {
-           try {
-             const OB = BB.stacktrace;
-             if ("string" == typeof OB && OB.length > 0) return OB;
-             const GB = BB.stack;
-             return "string" == typeof GB && GB.length > 0 ? GB : void 0
-           } catch (BB) {
-             return
+           get shadowOrthoScale() {
+             return this._shadowOrthoScale
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1064-L1136` → after: `L710-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L710-L711) · [Before (L1064-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1064-L1136)

```diff
-         }
-       },
-       vD = class {
-         match(BB) {
-           return !!LG(BB, "ErrorEvent") && (null != BB.error || this._hasUsableMessage(BB))
-         }
-         coerce(BB, OB) {
-           var GB;
-           if (null != BB.error) return OB.apply(BB.error);
-           const YB = OB.apply(BB.message);
-           return RD(RD({}, YB), {}, {
-             stack: null !== (GB = this._buildLocationStack(BB)) && void 0 !== GB ? GB : YB.stack,
-             synthetic: !0
-           })
-         }
-         _hasUsableMessage(BB) {
- ... (57 more removed lines; see GitHub link above)
+           set shadowOrthoScale(WW) {
+             this._shadowOrthoScale = WW, this.forceProjectionMatrixCompute()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1138-L1147` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L713-L714) · [Before (L1138-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1138-L1147)

```diff
-         }
-         getType(BB) {
-           if (rG(BB)) return BB.constructor.name;
-           const OB = "name" in BB ? BB.name : void 0;
-           return UG(OB) && !fG(OB) ? OB : "Error"
-         }
-         getValue(BB) {
-           if ("name" in BB && "string" == typeof BB.name) {
-             let OB = `'${BB.name}' captured as exception`;
-             return "message" in BB && "string" == typeof BB.message && (OB += ` with message: '${BB.message}'`), OB
+           get orthoLeft() {
+             return this._orthoLeft
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1149-L1160` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L716-L717) · [Before (L1149-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1149-L1160)

```diff
-           if ("message" in BB && "string" == typeof BB.message) return BB.message;
-           const OB = this.getObjectClassName(BB);
-           return `${OB&&"Object"!==OB?`'${OB}'`:"Object"} captured as exception with keys: ${BQ(BB)}`
-         }
-         isSeverityLevel(BB) {
-           return UG(BB) && !fG(BB) && tD.indexOf(BB) >= 0
-         }
-         getStack(BB) {
-           try {
-             return UG(BB.stacktrace) && BB.stacktrace.length > 0 ? BB.stacktrace : UG(BB.stack) && BB.stack.length > 0 ? BB.stack : void 0
-           } catch (BB) {
-             return
+           set orthoLeft(WW) {
+             this._orthoLeft = WW
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1162-L1175` → after: `L719-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L719-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L719-L720) · [Before (L1162-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1162-L1175)

```diff
-         }
-         getErrorPropertyFromObject(BB) {
-           for (const OB in BB)
-             if ({}.hasOwnProperty.call(BB, OB)) {
-               const GB = BB[OB];
-               if (gG(GB)) return GB
-             }
-         }
-         getObjectClassName(BB) {
-           try {
-             const OB = Object.getPrototypeOf(BB);
-             return OB ? OB.constructor.name : void 0
-           } catch (BB) {
-             return
+           get orthoRight() {
+             return this._orthoRight
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1177-L1190` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L722-L723) · [Before (L1177-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1177-L1190)

```diff
-         }
-       },
-       GQ = class {
-         match(BB) {
-           return rG(BB)
-         }
-         coerce(BB, OB) {
-           var GB;
-           const YB = BB.constructor.name;
-           return {
-             type: YB,
-             value: `${YB} captured as exception with keys: ${BQ(BB)}`,
-             stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
-             synthetic: !0
+           set orthoRight(WW) {
+             this._orthoRight = WW
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1192-L1204` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L725-L726) · [Before (L1192-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1192-L1204)

```diff
-         }
-       },
-       YQ = class {
-         match(BB) {
-           return iG(BB)
-         }
-         coerce(BB, OB) {
-           var GB;
-           return {
-             type: "Error",
-             value: `Primitive value captured as exception: ${String(BB)}`,
-             stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
-             synthetic: !0
+           get orthoTop() {
+             return this._orthoTop
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1206-L1218` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L728-L729) · [Before (L1206-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1206-L1218)

```diff
-         }
-       },
-       DQ = class {
-         match(BB) {
-           return LG(BB, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(BB)
-         }
-         isCustomEventWrappingRejection(BB) {
-           if (!rG(BB)) return !1;
-           try {
-             const OB = BB.detail;
-             return null != OB && "object" == typeof OB && "reason" in OB
-           } catch (BB) {
-             return !1
+           set orthoTop(WW) {
+             this._orthoTop = WW
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1220-L1267` → after: `L731-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L731-L732) · [Before (L1220-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1220-L1267)

```diff
-         }
-         coerce(BB, OB) {
-           var GB;
-           const YB = this.getUnhandledRejectionReason(BB);
-           return iG(YB) ? {
-             type: "UnhandledRejection",
-             value: `Non-Error promise rejection captured with value: ${String(YB)}`,
-             stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
-             synthetic: !0
-           } : OB.apply(YB)
-         }
-         getUnhandledRejectionReason(BB) {
-           try {
-             if ("reason" in BB) return BB.reason;
-             if ("detail" in BB && null != BB.detail && "object" == typeof BB.detail && "reason" in BB.detail) return BB.detail.reason
-           } catch (BB) {}
- ... (32 more removed lines; see GitHub link above)
+           get orthoBottom() {
+             return this._orthoBottom
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1269-L1282` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L734-L735) · [Before (L1269-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1269-L1282)

```diff
-           try {
-             const BB = JSON.parse(OB);
-             if (!VG(BB)) return;
-             const GB = BB,
-               YB = GB[QQ],
-               DB = GB[oQ];
-             if (!UG(YB) || 0 === YB.trim().length) return;
-             if (!UG(DB) && !KG(DB)) return;
-             return {
-               step: GB,
-               json: OB
-             }
-           } catch (BB) {
-             return
+           set orthoBottom(WW) {
+             this._orthoBottom = WW
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1284-L1311` → after: `L737-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L737-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L737-L919) · [Before (L1284-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1284-L1311)

```diff
-         }(BB);
-         if (!OB) return;
-         const GB = function(BB) {
-           if ("u" > typeof TextEncoder) return (new TextEncoder).encode(BB).length;
-           const OB = encodeURIComponent(BB);
-           let GB = 0;
-           for (let YB = 0; OB.length > YB; YB++) "%" === OB[YB] ? (GB += 1, YB += 2) : GB += 1;
-           return GB
-         }(OB.json);
-         GB > this._config.max_bytes || (this._entries.push({
-           step: OB.step,
-           bytes: GB
-         }), this._totalBytes += GB, this._trimToMaxBytes())
-       }
-       getAttachable() {
-         return this._entries.map((BB => BB.step))
- ... (12 more removed lines; see GitHub link above)
+           constructor(WW, iW, OW, EW) {
+             super(WW, OW, EW), this._shadowFrustumSize = ((0, mW.g)(this, bW), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, mW.g)(this, jW, !0), this.autoCalcShadowZBounds = ((0, mW.g)(this, UW), (0, mW.g)(this, kW, !1)), this._orthoLeft = ((0, mW.g)(this, sW), ( … [truncated]
+           }
+           getClassName() {
+             return "DirectionalLight"
+           }
+           getTypeID() {
+             return PW.b.LIGHTTYPEID_DIRECTIONALLIGHT
+           }
+           _setDefaultShadowProjectionMatrix(WW, iW, OW) {
+             this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(WW) : this._setDefaultAutoExtendShadowProjectionMatrix(WW, iW, OW)
+           }
+           _setDefaultFixedFrustumShadowProjectionMatrix(WW) {
+             const iW = this.bD().activeCamera;
+             NW.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : iW ? iW.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : iW ? iW.maxZ : 1e4, WW, this.bD().VA().isNDCHalfZRange)
+           }
+ ... (167 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1320-L1325` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L922-L924) · [Before (L1320-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1320-L1325)

```diff
-     const zQ = BB => {
-       if ("string" != typeof BB) return BB;
-       try {
-         return JSON.parse(BB)
-       } catch (DB) {
-         return BB
+     class NW {
+       constructor(WW, iW) {
+         this.gradient = WW, this.color = iW
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1332-L1334` → after: `L927-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L927-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L927-L933) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1332-L1334)

```diff
- 
-     function pQ(BB) {
-       return "string" == typeof BB ? BB : void 0
+     class PW {
+       constructor(WW, iW, OW) {
+         this.gradient = WW, this.factor1 = iW, this.factor2 = OW
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1336-L1393` → after: `L935-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L935-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L935-L943) · [Before (L1336-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1336-L1393)

```diff
-     const qQ = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
-       ZQ = "NativeGzipValidationError",
-       NQ = BB => BB.length >= 2 && 31 === BB[0] && 139 === BB[1],
-       RQ = (BB, OB) => BB === JG.GZipJS || OB === JG.GZipJS || "gzip" === OB,
-       WQ = BB => !(!BB || "object" != typeof BB) && "NotReadableError" === ("name" in BB ? String(BB.name) : "");
-     let AQ;
-     const VQ = BB => {
-         throw JD(ZQ, `Native gzip produced invalid output: ${BB}`)
-       },
-       SQ = (nQ = aG((function*(BB, OB) {
-         18 > BB.size && VQ("too-short");
-         const GB = new Uint8Array(yield BB.slice(0, 10).arrayBuffer());
-         NQ(GB) && 8 === GB[2] || VQ("invalid-header");
-         const YB = new DataView(yield BB.slice(BB.size - 8).arrayBuffer());
-         YB.getUint32(0, !0) !== (BB => {
-           const OB = (() => {
- ... (42 more removed lines; see GitHub link above)
+     class LW {
+       static GetCurrentGradient(WW, iW, OW) {
+         if (iW[0].gradient > WW) return void OW(iW[0], iW[0], 1);
+         for (let EW = 0; EW < iW.length - 1; EW++) {
+           const mW = iW[EW],
+             NW = iW[EW + 1];
+           if (WW >= mW.gradient && WW <= NW.gradient) {
+             return void OW(mW, NW, (WW - mW.gradient) / (NW.gradient - mW.gradient))
+           }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1395-L1396` → after: `L945-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L945-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L945-L947) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1395-L1396)

```diff
-         var YB
-       })), UQ.apply(this, arguments)
+         const mW = iW.length - 1;
+         OW(iW[mW], iW[mW], 1)
+       }
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1398-L1412` → after: `L949-L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L949-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L949-L996) · [Before (L1398-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1398-L1412)

```diff
- 
-     function fQ(BB, OB) {
-       if (null == BB) return {};
-       var GB, YB, DB = function(BB, OB) {
-         if (null == BB) return {};
-         var GB = {};
-         for (var YB in BB)
-           if ({}.hasOwnProperty.call(BB, YB)) {
-             if (OB.includes(YB)) continue;
-             GB[YB] = BB[YB]
-           } return GB
-       }(BB, OB);
-       if (Object.getOwnPropertySymbols) {
-         var QB = Object.getOwnPropertySymbols(BB);
-         for (YB = 0; QB.length > YB; YB++) OB.includes(GB = QB[YB]) || {}.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
+   },
+   39940: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(39908);
+     class PW {
+       constructor() {
+         this.direction1 = new mW.q(0, 1, 0), this.direction2 = new mW.q(0, 1, 0), this.minEmitBox = new mW.q(-.5, -.5, -.5), this.maxEmitBox = new mW.q(.5, .5, .5)
+       }
+       startDirectionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
+           LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
+           cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
+ ... (32 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1416-L1445` → after: `L999-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L999-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L999-L1053) · [Before (L1416-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1416-L1445)

```diff
-     const kQ = "[redacted]",
-       dQ = /^[A-Za-z0-9+/\n\r]+=*$/,
-       KQ = /^[A-Za-z0-9_-]+={0,2}$/,
-       uQ = /[-_]/,
-       mQ = /^data:[^,\s]*;base64,/i,
-       IQ = /^[A-Za-z0-9+/_-]+={0,2}$/,
-       FQ = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
-       iQ = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
-       LQ = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
-       gQ = /[\s<>"]/,
-       rQ = new RegExp(LQ.source, "i"),
-       XQ = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
-       wQ = new RegExp(`^${XQ.source}`, "i"),
-       EQ = new RegExp(XQ.source, "gi"),
-       cQ = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
-       hQ = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
- ... (14 more removed lines; see GitHub link above)
+   },
+   39906: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => LW,
+       i: () => PW
+     });
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(39908);
+     class PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = WW, this.height = iW, this.radiusRange = OW, this.directionRandomizer = EW, this._tempVector = mW.q.Zero()
+ ... (39 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1447-L1449` → after: `L1055-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1055-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1055-L1092) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1447-L1449)

```diff
- 
-     function Bo(BB) {
-       return BB.split("&", 129).length > 128
+     class LW extends PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new mW.q(0, 1, 0),
+           NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new mW.q(0, 1, 0);
+         super(WW, iW, OW), this.direction1 = EW, this.direction2 = NW
+       }
+       startDirectionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
+           LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
+           cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
+         NW ? iW.yWW(PW, LW, cW) : mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
+       }
+       clone() {
+ ... (22 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1451-L1458` → after: `L1094-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1094-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1094-L1145) · [Before (L1451-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1451-L1458)

```diff
- 
-     function Oo(BB, OB, GB) {
-       return tQ(BB) || OB.includes(";") && function(BB) {
-         return BB.split(";").some((BB => tQ(BB.split("=", 1)[0])))
-       }(OB) ? kQ : rQ.test(OB) ? GB ? jo(OB, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : kQ : OB
+   },
+   53756: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => Ii
+     });
+     var mW = OW(39938),
+       EW = OW(38276),
+       NW = OW(38241),
+       PW = OW(41660),
+       LW = OW(53763),
+       cW = OW(38270),
+       wW = OW(41795),
+       tW = OW(38372),
+       ZW = OW(39940),
+       xW = OW(39908),
+       lW = OW(38285);
+ ... (36 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1460-L1470` → after: `L1147-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1147-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1147-L1189) · [Before (L1460-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1460-L1470)

```diff
- 
-     function Go(BB, OB) {
-       const GB = new URLSearchParams;
-       let YB = !1,
-         DB = !1;
-       for (const [QB, oB] of new URLSearchParams(BB)) {
-         const BB = yo(QB),
-           jB = yo(oB);
-         YB || (YB = BB !== QB || jB !== oB);
-         const yB = Oo(BB, jB, OB);
-         YB || (YB = yB !== jB), DB = tQ(BB) || yB !== jB, GB.append(BB, yB)
+     class bW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = WW, this.radiusRange = iW, this.directionRandomizer = OW
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         const EW = OW.position.subtract(WW.getTranslation()).normalize(),
+           PW = (0, lW.RandomRange)(0, this.directionRandomizer),
+           LW = (0, lW.RandomRange)(0, this.directionRandomizer),
+           cW = (0, lW.RandomRange)(0, this.directionRandomizer);
+         EW.x += PW, EW.y += LW, EW.z += cW, EW.normalize(), mW ? iW.HJ(EW) : NW.q.TransformNormalFromFloatsToRef(EW.x, EW.y, EW.z, WW, iW)
+       }
+       startPositionFunction(WW, iW, OW, mW) {
+         const EW = this.radius - (0, lW.RandomRange)(0, this.radius * this.radiusRange),
+ ... (27 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1472-L1475` → after: `L1191-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1191-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1191-L1192) · [Before (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1472-L1475)

```diff
-       return {
-         changed: YB,
-         lastFieldSensitive: DB,
-         serialized: GB.toString()
+       parse(WW) {
+         this.radius = WW.radius, this.radiusRange = WW.radiusRange, this.directionRandomizer = WW.directionRandomizer
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1478-L1487` → after: `L1195-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1195-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1195-L1240) · [Before (L1478-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1478-L1487)

```diff
- 
-     function Yo(BB, OB) {
-       if (!BB.includes("=")) return {
-         value: Do(BB, OB),
-         lastFieldSensitive: !1
-       };
-       const GB = Go(BB, OB);
-       return {
-         value: GB.changed ? GB.serialized : BB,
-         lastFieldSensitive: GB.lastFieldSensitive
+     class jW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = WW, this.radiusRange = iW, this.directionRandomizer = OW
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         const EW = OW.position.subtract(WW.getTranslation()).normalize(),
+           PW = (0, lW.RandomRange)(0, this.directionRandomizer),
+           LW = (0, lW.RandomRange)(0, this.directionRandomizer),
+           cW = (0, lW.RandomRange)(0, this.directionRandomizer);
+         EW.x += PW, EW.y += LW, EW.z += cW, EW.normalize(), mW ? iW.HJ(EW) : NW.q.TransformNormalFromFloatsToRef(EW.x, EW.y, EW.z, WW, iW)
+       }
+       startPositionFunction(WW, iW, OW, mW) {
+         const EW = this.radius - (0, lW.RandomRange)(0, this.radius * this.radiusRange),
+ ... (30 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1490-L1495` → after: `L1243-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1243-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1243-L1278) · [Before (L1490-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1490-L1495)

```diff
- 
-     function Do(BB, OB) {
-       return OB ? jo(BB, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : rQ.test(BB) ? kQ : BB
+     class UW extends jW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NW.q(0, 1, 0),
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0);
+         super(WW), this.direction1 = iW, this.direction2 = OW
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
+           PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
+           LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
+         mW ? iW.yWW(EW, PW, LW) : NW.q.TransformNormalFromFloatsToRef(EW, PW, LW, WW, iW)
+       }
+       clone() {
+         const WW = new UW(this.radius, this.direction1, this.direction2);
+         return xW.c.DeepCopy(this, WW), WW
+ ... (20 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1497-L1499` → after: `L1280-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1280-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1280-L1345) · [Before (L1497-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1497-L1499)

```diff
- 
-     function Qo(BB, OB, GB) {
-       return "#" === BB ? !OB.fragment && (OB.fragment = !0) : "?" === BB && (OB.fragment ? "=" !== GB && !OB.fragmentQuery && (OB.fragmentQuery = !0) : !OB.query && (OB.query = !0))
+     var kW = OW(39906);
+     class sW {
+       get radius() {
+         return this._radius
+       }
+       set radius(WW) {
+         this._radius = WW, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(WW) {
+         this._angle = WW, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (50 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1501-L1619` → after: `L1347-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1347-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1347-L1383) · [Before (L1501-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1501-L1619)

```diff
- 
-     function oo(BB, OB) {
-       var GB;
-       if (BB.length > 8192 && wQ.test(BB)) return kQ;
-       const {
-         address: YB,
-         suffix: DB
-       } = OB.stripPunctuation ? function(BB) {
-         let OB = BB.length;
-         for (; OB > 0 && ".,;:!?)]}'".includes(BB[OB - 1]);) OB--;
-         return {
-           address: BB.slice(0, OB),
-           suffix: BB.slice(OB)
-         }
-       }(BB) : {
-         address: BB,
- ... (103 more removed lines; see GitHub link above)
+     class MW extends sW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0),
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0);
+         super(WW, iW), this.direction1 = OW, this.direction2 = mW
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
+           PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
+           LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
+         mW ? iW.yWW(EW, PW, LW) : NW.q.TransformNormalFromFloatsToRef(EW, PW, LW, WW, iW)
+       }
+       clone() {
+         const WW = new MW(this.radius, this.angle, this.direction1, this.direction2);
+ ... (21 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1621-L1630` → after: `L1385-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1385-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1385-L1439) · [Before (L1621-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1621-L1630)

```diff
-     const Po = {}.propertyIsEnumerable;
- 
-     function zo(BB, OB) {
-       try {
-         return Zo(BB, OB, {
-           ancestors: new WeakSet,
-           remainingNodes: 1e4
-         }, 0)
-       } catch (BB) {
-         return []
+     class KW {
+       get mesh() {
+         return this._mesh
+       }
+       set mesh(WW) {
+         this._mesh !== WW && (this._mesh = WW, WW ? (this._indices = WW.IEW(), this._positions = WW.getVerticesData(PW.k.PositionKind), this._normals = WW.getVerticesData(PW.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
+       }
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this._indices = null, this._positions = null, this._normals = null, this._storedNormal = NW.q.Zero(), this._mesh = null, this.direction1 = new NW.q(0, 1, 0), this.direction2 = new NW.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = WW
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         if (this.useMeshNormalsForDirection && this._normals) return void NW.q.TransformNormalToRef(this._storedNormal, WW, iW);
+         const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
+           PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
+           LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
+ ... (39 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1633-L1670` → after: `L1442-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1442-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1442-L1444) · [Before (L1633-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1633-L1670)

```diff
- 
-     function po(BB, OB, GB, YB) {
-       if (0 >= GB.remainingNodes) return {
-         stringValue: OD
-       };
-       if (GB.remainingNodes--, mG(BB)) return {
-         boolValue: BB
-       };
-       if ("bigint" == typeof BB) return function(BB, OB) {
-         const GB = BB.toString(),
-           YB = BigInt("9223372036854775808");
-         return BB >= YB || -YB > BB ? (null == OB || OB.debug(`Attribute ${GB} is outside the int64 range; encoding it as a string`), {
-           stringValue: GB
-         }) : {
-           intValue: GB
-         }
- ... (22 more removed lines; see GitHub link above)
+     class SW {
+       get targetStopDuration() {
+         return this._targetStopDuration
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1672-L1711` → after: `L1446-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1446-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1446-L1508) · [Before (L1672-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1672-L1711)

```diff
-       if ("string" == typeof BB) return {
-         stringValue: YD(BB)
-       };
-       if ("function" == typeof BB) return {
-         stringValue: "[Function]"
-       };
-       if ("symbol" == typeof BB) return {
-         stringValue: String(BB)
-       };
-       if ("object" == typeof BB && null !== BB) {
-         if (GB.ancestors.has(BB)) return {
-           stringValue: "[Circular]"
-         };
-         if (YB >= 20) return {
-           stringValue: OD
-         };
- ... (24 more removed lines; see GitHub link above)
+       set targetStopDuration(WW) {
+         this._targetStopDuration !== WW && (this._targetStopDuration = WW)
+       }
+       get isNodeGenerated() {
+         return !1
+       }
+       get noiseTexture() {
+         return this._noiseTexture
+       }
+       set noiseTexture(WW) {
+         this._noiseTexture !== WW && (this._noiseTexture = WW, this._reset())
+       }
+       get attractors() {
+         return this._attractors.slice(0)
+       }
+       addAttractor(WW) {
+ ... (47 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1714-L1715` → after: `L1512-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1512-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1512-L1513) · [Before (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1714-L1715)

```diff
-       return {
-         stringValue: YD(String(BB))
+       getDragGradients() {
+         return this._dragGradients
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1717-L1730` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1515-L1516) · [Before (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1717-L1730)

```diff
-     }
- 
-     function qo(BB, OB, GB, YB) {
-       const DB = [],
-         QB = Math.min(BB.length, 1e3);
-       let oB = 0;
-       for (; QB > oB && GB.remainingNodes > 0; oB++) try {
-         const QB = oB in BB ? BB[oB] : void 0;
-         if (dG(QB)) continue;
-         DB.push(po(QB, OB, GB, YB))
-       } catch (BB) {
-         DB.push({
-           stringValue: GD
-         })
+       getLimitVelocityGradients() {
+         return this._limitVelocityGradients
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1732-L1746` → after: `L1518-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1518-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1518-L1606) · [Before (L1732-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1732-L1746)

```diff
-       return BB.length > oB && DB.push({
-         stringValue: OD
-       }), DB
-     }
- 
-     function Zo(BB, OB, GB, YB) {
-       const DB = [];
-       for (const QB in BB)
-         if (Po.call(BB, QB)) {
-           if (!QB) {
-             null == OB || OB.debug("Dropping an attribute with an empty key");
-             continue
-           }
-           if (DB.length >= 1e3 || 0 >= GB.remainingNodes) {
-             null == OB || OB.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
+       getColorGradients() {
+         return this._colorGradients
+       }
+       getSizeGradients() {
+         return this._sizeGradients
+       }
+       getColorRemapGradients() {
+         return this._colorRemapGradients
+       }
+       getAlphaRemapGradients() {
+         return this._alphaRemapGradients
+       }
+       getLifeTimeGradients() {
+         return this._lifeTimeGradients
+       }
+       getAngularSpeedGradients() {
+ ... (73 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1749-L1824` → after: `L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1609) · [Before (L1749-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1749-L1824)

```diff
-           try {
-             const oB = BB[QB];
-             if (kG(oB) || nG(oB)) continue;
-             DB.push({
-               key: YD(QB),
-               value: po(oB, OB, GB, YB)
-             })
-           } catch (BB) {
-             DB.push({
-               key: YD(QB),
-               value: {
-                 stringValue: GD
-               }
-             })
-           }
-         } return DB
- ... (60 more removed lines; see GitHub link above)
+           OW++
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1835-L1857` → after: `L1612-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1612-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1612-L1614) · [Before (L1835-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1835-L1857)

```diff
-     }
- 
-     function Uo(BB, OB, GB, YB) {
-       const DB = BB.level || "info",
-         {
-           text: QB,
-           number: oB
-         } = Vo[DB] || So,
-         jB = function() {
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-           return String(BB) + "000000"
-         }(KG(YB) ? YB : void 0),
-         yB = {};
-       OB.distinctId && (yB.posthogDistinctId = OB.distinctId), OB.sessionId && (yB.sessionId = OB.sessionId), OB.windowId && (yB["window.id"] = OB.windowId), dG(OB.sessionStartTimestamp) || (yB.sessionStartTimestamp = String(OB.sessionStartTimestamp)), dG(OB.lastActivityTimestamp … [truncated]
-       const JB = RD({}, yB),
-         MB = BB.attributes;
- ... (7 more removed lines; see GitHub link above)
+       _removeGradientAndTexture(WW, iW, OW) {
+         if (!iW) return this;
+         let mW = 0;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1859-L1863` → after: `L1616-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1616-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1616-L1618) · [Before (L1859-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1859-L1863)

```diff
-           let BB;
-           try {
-             BB = MB[GB]
-           } catch (OB) {
-             BB = GD
+           if (EW.gradient === WW) {
+             iW.splice(mW, 1);
+             break
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1865-L1870` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1620) · [Before (L1865-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1865-L1870)

```diff
-           Object.defineProperty(JB, GB, {
-             value: BB,
-             enumerable: !0,
-             writable: !0,
-             configurable: !0
-           })
+           mW++
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1908` → after: `L1625-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1625-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1625-L1632) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1908)

```diff
-         this._onFire = BB, this._firesAt = 0
+         this.animations = [], this.renderingGroupId = 0, this.emitter = NW.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
+       }
+       createPointEmitter(WW, iW) {
+         const OW = function(WW, iW) {
+           const OW = new AW;
+           return OW.direction1 = WW, OW.direction2 = iW, OW
+         }(WW, iW);
+         return this.particleEmitterType = OW, OW
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1910-L1911` → after: `L1634-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1634-L1638) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1910-L1911)

```diff
-       get pending() {
-         return !!this._timer
+       createHemisphericEmitter() {
+         const WW = function() {
+           return new bW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
+         return this.particleEmitterType = WW, WW
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1913-L1916` → after: `L1640-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1640-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1640-L1644) · [Before (L1913-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1913-L1916)

```diff
-       arm(BB) {
-         this.clear(), this._firesAt = Date.now() + BB, this._timer = zD((() => {
-           this._timer = void 0, this._onFire()
-         }), BB)
+       createSphereEmitter() {
+         const WW = function() {
+           return new jW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
+         return this.particleEmitterType = WW, WW
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1918-L1919` → after: `L1646-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1646-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1646-L1682) · [Before (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1918-L1919)

```diff
-       armNoEarlierThan(BB) {
-         this._timer && Date.now() + BB <= this._firesAt || this.arm(BB)
+       createDirectedSphereEmitter() {
+         const WW = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+             iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NW.q(0, 1, 0),
+             OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0);
+           return new UW(WW, iW, OW)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NW.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0));
+         return this.particleEmitterType = WW, WW
+       }
+       createCylinderEmitter() {
+         const WW = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+             iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+             OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+             mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+           return new kW.i(WW, iW, OW, mW)
+ ... (21 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1921-L1922` → after: `L1684-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1684-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1684-L1702) · [Before (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1921-L1922)

```diff
-       clear() {
-         this._timer && (clearTimeout(this._timer), this._timer = void 0)
+       createDirectedConeEmitter() {
+         const WW = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+             iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
+             OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0),
+             mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0);
+           return new MW(WW, iW, OW, mW)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0), arguments.length > 3 && void 0 !== argum … [truncated]
+         return this.particleEmitterType = WW, WW
+       }
+       createBoxEmitter(WW, iW, OW, mW) {
+         const EW = new ZW.d;
+         return this.particleEmitterType = EW, this.direction1 = WW, this.direction2 = iW, this.minEmitBox = OW, this.maxEmitBox = mW, EW
+       }
+       createMeshEmitter() {
+         const WW = function() {
+ ... (3 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1935-L1943` → after: `L1705-L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1705-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1705-L1708) · [Before (L1935-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1935-L1943)

```diff
-     var Io = class {
-       constructor(BB, OB, GB, YB, DB) {
-         let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
-           oB = arguments.length > 6 ? arguments[6] : void 0;
-         var jB;
-         this._instance = BB, this._config = OB, this._logger = GB, this._getContext = YB, this._onReady = DB, this._waitForStoragePersist = QB, this._scopeName = oB, this._flushTimer = new Ko((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
-       }
-       clearQueue() {
-         this._queueGeneration++, this._instance.setPersistedProperty(yG.LogsQueue, [])
+     SW.BLENDMODE_ONEONE = 0, SW.BLENDMODE_STANDARD = 1, SW.BLENDMODE_ADD = 2, SW.BLENDMODE_MULTIPLY = 3, SW.BLENDMODE_MULTIPLYADD = 4, SW.BLENDMODE_SUBTRACT = -1;
+     class YW {
+       constructor() {
+         this.attachedSubEmitters = null, this.currentColor1 = new tW.d(0, 0, 0, 0), this.currentColor2 = new tW.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVeloci … [truncated]
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1946` → after: `L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1711) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1946)

```diff
-         this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
+         this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoor … [truncated]
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1948-L1949` → after: `L1713-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1713-L1716) · [Before (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1948-L1949)

```diff
-       onReconnect() {
-         this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
+     }
+     class yW {
+       constructor(WW) {
+         this.particleSystem = WW, this.position = NW.q.Zero(), this.direction = NW.q.Zero(), this.color = new tW.d(0, 0, 0, 0), this.colorStep = new tW.d(0, 0, 0, 0), this.initialColor = new tW.d(0, 0, 0, 0), this.colorDead = new tW.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, … [truncated]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1951-L1977` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1718-L1719) · [Before (L1951-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1951-L1977)

```diff
-       captureLog(BB, OB) {
-         var GB;
-         if (this._instance.isDisabled) return;
-         if (this._instance.optedOut) return;
-         if (!(null == BB ? void 0 : BB.body)) return;
-         const YB = this._runBeforeSend(BB);
-         if (null === YB) return;
-         if (!YB.body) return void this._logger.info("Log was rejected in beforeSend function");
-         if (!this._checkRateLimit()) return;
-         const DB = {
-           record: Uo(YB, null !== (GB = null == OB ? void 0 : OB.context) && void 0 !== GB ? GB : this._getContext(), this._logger, null == OB ? void 0 : OB.occurredAtMs)
-         };
-         this._onReady((() => this._enqueue(DB)))
-       }
-       _runBeforeSend(BB) {
-         const OB = this._config.beforeSend;
- ... (11 more removed lines; see GitHub link above)
+       _updateCellInfoFromSystem() {
+         this.cellIndex = this.particleSystem.startSpriteCellID
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1979-L2015` → after: `L1721-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1721-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1721-L1734) · [Before (L1979-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L1979-L2015)

```diff
-       _checkRateLimit() {
-         if (void 0 === this._maxLogsPerInterval) return !0;
-         const BB = Date.now(),
-           OB = BB - this._intervalWindowStart;
-         return this._rateCapWindowMs > OB && OB >= 0 || (this._intervalWindowStart = BB, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`capture … [truncated]
-       }
-       flush() {
-         var BB = this;
-         return aG((function*() {
-           if (!BB._instance.isDisabled) return BB._flushPromise || (BB._flushPromise = BB._flushInner().finally((() => {
-             BB._flushPromise = null
-           }))), BB._flushPromise
-         }))()
-       }
-       _flushInner() {
-         var BB = this;
- ... (21 more removed lines; see GitHub link above)
+       updateCellIndex() {
+         let WW = this.age,
+           iW = this.particleSystem.spriteCellChangeSpeed;
+         this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === iW ? (iW = 1, WW = this._properties.randomCellOffset) : WW += this._properties.randomCellOffset);
+         const OW = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
+         let mW;
+         mW = this._properties.initialSpriteCellLoop ? (0, lW.Clamp)(WW * iW % this.lifeTime / this.lifeTime) : (0, lW.Clamp)(WW * iW / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + mW * OW | 0
+       }
+       _inheritParticleInfoToSubEmitter(WW) {
+         if (WW.particleSystem.emitter.position) {
+           const iW = WW.particleSystem.emitter;
+           if (iW.position.HJ(this.position), WW.inheritDirection) {
+             const WW = NW.l.fA[0];
+             this.direction.normalizeToRef(WW), iW.setDirection(WW, 0, Math.PI / 2)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2017` → after: `L1736-L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1736-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1736-L1739) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2017)

```diff
-         }))()
+         } else {
+           WW.particleSystem.emitter.HJ(this.position)
+         }
+         this.direction.scaleToRef(WW.inheritedVelocityAmount / 2, NW.l.fA[0]), WW.particleSystem._inheritedVelocityOffset.HJ(NW.l.fA[0])
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2019-L2026` → after: `L1741-L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1741-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1741-L1743) · [Before (L2019-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2019-L2026)

```diff
-       _persistQueueAdvance(BB) {
-         var OB = this;
-         return aG((function*() {
-           var GB;
-           const YB = Math.max(0, BB - OB._evictedSinceAdvance),
-             DB = null !== (GB = OB._instance.getPersistedProperty(yG.LogsQueue)) && void 0 !== GB ? GB : [];
-           OB._instance.setPersistedProperty(yG.LogsQueue, DB.slice(YB)), yield OB._waitForStoragePersist()
-         }))()
+       _inheritParticleInfoToSubEmitters() {
+         if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
+           for (const WW of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(WW)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2028-L2029` → after: `L1745-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1745-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1745-L1746) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2028-L2029)

```diff
-       _buildResourceAttributes() {
-         return fo(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
+       _reset() {
+         this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = yW._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2031-L2071` → after: `L1748-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1748-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1748-L1749) · [Before (L2031-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2031-L2071)

```diff
-       _enqueue(BB) {
-         var OB;
-         if (this._instance.optedOut) return;
-         const GB = null !== (OB = this._instance.getPersistedProperty(yG.LogsQueue)) && void 0 !== OB ? OB : [];
-         this._maxQueueSize > GB.length || (GB.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), GB.push(BB), this._instance.setPersistedProperty(yG.LogsQueue, GB), this._maxBufferSize > GB.length || this._retryAfter.isOpen()  … [truncated]
-       }
-       _armFlushTimer() {
-         this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
-       }
-       _nextFlushDelay() {
-         return Math.max(mo(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
-       }
-       _hasQueuedRecords() {
-         const BB = this._instance.getPersistedProperty(yG.LogsQueue);
-         return !!BB && BB.length > 0
-       }
- ... (25 more removed lines; see GitHub link above)
+       copyTo(WW) {
+         WW.position.HJ(this.position), this._properties.initialDirection ? WW._properties.initialDirection ? WW._properties.initialDirection.HJ(this._properties.initialDirection) : WW._properties.initialDirection = this._properties.initialDirection.clone() : WW._properties.initia … [truncated]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2079-L2088` → after: `L1752-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1752-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1752-L1756) · [Before (L2079-L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2079-L2088)

```diff
- 
-     function Lo(BB, OB, GB, YB) {
-       let DB = "";
-       return YB && (DB = Object.keys(YB).sort().map((BB => `${JSON.stringify(BB)}:${JSON.stringify(YB[BB])}`)).join(",")), `${BB}\0${OB}\0${null!=GB?GB:""}\0${DB}`
-     }
-     var go = class {
-       constructor(BB, OB, GB) {
-         this._instance = BB, this._config = OB, this._logger = GB, this._series = new Map, this._flushTimer = new Ko((() => this.flush().catch((BB => {
-           this._logger.error("Metrics flush failed:", BB)
-         })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new oD, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
+     yW._Count = 0;
+     var TW = OW(42580);
+     class JW {
+       get currentFrame() {
+         return this._currentFrame
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2090-L2099` → after: `L1758-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1758-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1758-L1759) · [Before (L2090-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2090-L2099)

```diff
-       count(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GB = arguments.length > 2 ? arguments[2] : void 0;
-         this._capture({
-           name: BB,
-           type: "count",
-           value: OB,
-           unit: null == GB ? void 0 : GB.unit,
-           attributes: null == GB ? void 0 : GB.attributes
-         })
+       get _evaluatedFrom() {
+         return this._playbackFrom
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2101-L2108` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1761-L1762) · [Before (L2101-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2101-L2108)

```diff
-       gauge(BB, OB, GB) {
-         this._capture({
-           name: BB,
-           type: "gauge",
-           value: OB,
-           unit: null == GB ? void 0 : GB.unit,
-           attributes: null == GB ? void 0 : GB.attributes
-         })
+       get _evaluatedTo() {
+         return this._playbackTo
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2110-L2117` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1764-L1765) · [Before (L2110-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2110-L2117)

```diff
-       histogram(BB, OB, GB) {
-         this._capture({
-           name: BB,
-           type: "histogram",
-           value: OB,
-           unit: null == GB ? void 0 : GB.unit,
-           attributes: null == GB ? void 0 : GB.attributes
-         })
+       get _evaluatedProgress() {
+         return this._playbackProgress
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2119-L2132` → after: `L1767-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1767-L1768) · [Before (L2119-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2119-L2132)

```diff
-       flush() {
-         var BB = this;
-         const OB = this._flushPromise,
-           GB = function() {
-             var GB = aG((function*() {
-               OB && (yield OB.catch((() => {}))), yield BB._doFlush()
-             }));
-             return function() {
-               return GB.apply(this, arguments)
-             }
-           }()().finally((() => {
-             this._flushPromise === GB && (this._flushPromise = null)
-           }));
-         return this._flushPromise = GB, GB
+       get _evaluatedSyncRoot() {
+         return this._playbackSyncRoot
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2134-L2137` → after: `L1770-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1770-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1770-L1771) · [Before (L2134-L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2134-L2137)

```diff
-       drainWindow() {
-         if (0 === this._series.size) return null;
-         const BB = this._series;
-         return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(BB)
+       get _evaluatedJump() {
+         return this._playbackJumped
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2139-L2167` → after: `L1773-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1773-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1773-L1774) · [Before (L2139-L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2139-L2167)

```diff
-       reset() {
-         this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Se … [truncated]
-       }
-       _capture(BB) {
-         if (this._instance.isDisabled || this._instance.optedOut) return;
-         const OB = this._runBeforeSend(BB);
-         if (null === OB) return;
-         if (!OB.name || "string" != typeof OB.name) return void this._logger.warn("Dropping metric with empty name");
-         if ("number" != typeof OB.value || !Number.isFinite(OB.value)) return void this._logger.warn(`Dropping metric '${OB.name}': value must be a finite number`);
-         if ("count" === OB.type && 0 > OB.value) return void this._logger.warn(`Dropping count '${OB.name}': counters are monotonic, value must be >= 0`);
-         let GB, YB;
-         try {
-           GB = OB.attributes ? RD({}, OB.attributes) : void 0, YB = Lo(OB.type, OB.name, OB.unit, GB)
-         } catch (BB) {
-           return void this._logger.warn(`Dropping metric '${OB.name}': attributes could not be serialized`, BB)
-         }
- ... (13 more removed lines; see GitHub link above)
+       get weight() {
+         return this._weight
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2169-L2170` → after: `L1776-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1776-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1776-L1777) · [Before (L2169-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2169-L2170)

```diff
-       _admitNewSeries() {
-         return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribut … [truncated]
+       get currentValue() {
+         return this._currentValue
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2172-L2197` → after: `L1779-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1779-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1779-L1780) · [Before (L2172-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2172-L2197)

```diff
-       _fold(BB, OB) {
-         switch (BB.type) {
-           case "count":
-             var GB;
-             BB.total = (null !== (GB = BB.total) && void 0 !== GB ? GB : 0) + OB;
-             break;
-           case "gauge":
-             BB.last = OB;
-             break;
-           case "histogram": {
-             BB.hist || (BB.hist = {
-               count: 0,
-               sum: 0,
-               min: OB,
-               max: OB,
-               bucketCounts: new Array(Fo.length + 1).fill(0)
- ... (10 more removed lines; see GitHub link above)
+       get targetPath() {
+         return this._targetPath
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2199-L2209` → after: `L1782-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1782-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1782-L1798) · [Before (L2199-L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2199-L2209)

```diff
-       _runBeforeSend(BB) {
-         const OB = this._config.beforeSend;
-         if (!OB) return BB;
-         const GB = WG(OB) ? OB : [OB];
-         let YB = BB;
-         for (const DB of GB) try {
-           const BB = DB(YB);
-           if (!BB) return this._logger.info("Metric was rejected in beforeSend function"), null;
-           YB = BB
-         } catch (BB) {
-           return this._logger.error("Error in beforeSend function for metric:", BB), null
+       get target() {
+         return this._currentActiveTarget
+       }
+       get isAdditive() {
+         return this._host && this._host.isAdditive
+       }
+       constructor(WW, iW, OW, mW) {
+         if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget  … [truncated]
+             key: 0,
+             repeatCount: 0,
+             sO: this._getCorrectLoopMode()
+           }, this._animation.dataType === TW.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = NW.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
+           const WW = {
+             frame: 0,
+             value: this._keys[0].value
+           };
+ ... (1 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2211` → after: `L1800-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1800-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1800-L1833) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2211)

```diff
-         return YB
+         if (this.HZ instanceof Array) {
+           let WW = 0;
+           for (const iW of this.HZ) this._preparePath(iW, WW), this._getOriginalValues(WW), WW++;
+           this._targetIsArray = !0
+         } else this._preparePath(this.HZ), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
+         const EW = iW.getEvents();
+         if (EW && EW.length > 0)
+           for (const NW of EW) this._events.push(NW._clone());
+         this._enableBlending = WW && WW.animationPropertiesOverride ? WW.animationPropertiesOverride.enableBlending : this._animation.enableBlending
+       }
+       _preparePath(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = this._animation.targetPropertyPath;
+         if (OW.length > 1) {
+           let mW = WW;
+           for (let WW = 0; WW < OW.length - 1; WW++) {
+ ... (18 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2213-L2235` → after: `L1835-L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1835-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1835-L1861) · [Before (L2213-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2213-L2235)

```diff
-       _armFlushTimer() {
-         this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
-       }
-       _nextFlushDelay() {
-         return Math.max(mo(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
-       }
-       _doFlush() {
-         var BB = this;
-         return aG((function*() {
-           if (BB._flushTimer.clear(), 0 === BB._series.size) return;
-           const OB = BB._series;
-           BB._series = new Map, BB._seriesCapWarned = !1, BB._typeByName = new Map, BB._typeCollisionWarned = new Set;
-           const GB = BB._generation,
-             YB = yield BB._instance._sendMetricsBatch(BB._buildPayload(OB));
-           if (GB === BB._generation) switch (BB._retryAfter.record(YB), "retry-later" === YB.kind ? (BB._consecutiveFlushFailures++, BB._flushJitter = uo()) : (BB._consecutiveFlushFailures = 0, BB._flushJitter = 1), BB._flushTimer.pending && BB._flushTimer.arm(BB._nextFlushDelay( … [truncated]
-             case "ok":
- ... (7 more removed lines; see GitHub link above)
+       isStopped() {
+         return this._stopped
+       }
+       dispose() {
+         const WW = this._animation.runtimeAnimations.indexOf(this);
+         WW > -1 && this._animation.runtimeAnimations.splice(WW, 1)
+       }
+       setValue(WW, iW) {
+         if (this._targetIsArray)
+           for (let OW = 0; OW < this.HZ.length; OW++) {
+             const mW = this.HZ[OW];
+             this._setValue(mW, this._activeTargets[OW], WW, iW, OW)
+           } else this._setValue(this.HZ, this._directTarget, WW, iW, 0)
+       }
+       _getOriginalValues() {
+         let WW, iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+ ... (11 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2310-L2318` → after: `L1864-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1864-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1864-L1967) · [Before (L2310-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2310-L2318)

```diff
-         return Array.from(GB.values())
-       }
-       _mergeWindowBack(BB) {
-         for (const [YB, DB] of BB) {
-           const BB = this._series.get(YB);
-           if (BB) switch (BB.windowStartMs = Math.min(BB.windowStartMs, DB.windowStartMs), BB.type) {
-             case "count":
-               var OB, GB;
-               BB.total = (null !== (OB = BB.total) && void 0 !== OB ? OB : 0) + (null !== (GB = DB.total) && void 0 !== GB ? GB : 0);
+         WW = OW.getLocalMatrix && "_matrix" === this._targetPath ? OW.getLocalMatrix() : OW[this._targetPath], WW && WW.clone ? this._originalValue[iW] = WW.clone() : this._originalValue[iW] = WW
+       }
+       _registerTargetForLateAnimationBinding(WW, iW) {
+         const OW = WW.target;
+         this._scene._registeredForLateAnimationBindings.pushNoDuplicate(OW), OW._lateAnimationHolders || (OW._lateAnimationHolders = {}), OW._lateAnimationHolders[WW.targetPath] || (OW._lateAnimationHolders[WW.targetPath] = {
+           totalWeight: 0,
+           totalAdditiveWeight: 0,
+           animations: [],
+           additiveAnimations: [],
+           originalValue: iW
+         }), WW.isAdditive ? (OW._lateAnimationHolders[WW.targetPath].additiveAnimations.push(WW), OW._lateAnimationHolders[WW.targetPath].totalAdditiveWeight += WW.weight) : (OW._lateAnimationHolders[WW.targetPath].animations.push(WW), OW._lateAnimationHolders[WW.targetPath].tota … [truncated]
+       }
+       _setValue(WW, iW, OW, mW, EW) {
+         const PW = this._scene._animationWrites,
+           LW = this._scene._animationWriteCount++;
+         let cW = PW[LW];
+ ... (88 more added lines; see GitHub link above)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2320` → after: `L1969-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1969-L1970) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2320)

```diff
-             case "gauge":
+             case TW.d.ANIMATIONTYPE_QUATERNION:
+               NW = TW.o;
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2322-L2408` → after: `L1972-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1972-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L1972-L2014) · [Before (L2322-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2322-L2408)

```diff
-             case "histogram":
-               if (DB.hist)
-                 if (BB.hist) {
-                   BB.hist.count += DB.hist.count, BB.hist.sum += DB.hist.sum, BB.hist.min = Math.min(BB.hist.min, DB.hist.min), BB.hist.max = Math.max(BB.hist.max, DB.hist.max);
-                   for (let OB = 0; BB.hist.bucketCounts.length > OB; OB++) BB.hist.bucketCounts[OB] += DB.hist.bucketCounts[OB]
-                 } else BB.hist = DB.hist
-           } else this._admitNewSeries() && this._series.set(YB, DB)
-         }
-       }
-     };
-     const ro = function(BB) {
-         let {
-           debugEnabled: OB
-         } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const GB = {
-           _log(GB) {
- ... (71 more removed lines; see GitHub link above)
+             case TW.d.ANIMATIONTYPE_VECTOR3:
+               NW = TW.y;
+               break;
+             case TW.d.ANIMATIONTYPE_VECTOR2:
+               NW = TW.v;
+               break;
+             case TW.d.ANIMATIONTYPE_SIZE:
+               NW = TW.r;
+               break;
+             case TW.d.ANIMATIONTYPE_COLOR3:
+               NW = TW.i;
+               break;
+             case TW.d.ANIMATIONTYPE_COLOR4:
+               NW = TW.l
+           }
+           const bW = this._host ? this._host.syncRoot : null;
+ ... (27 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2411-L2449` → after: `L2018-L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2018-L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2018-L2025) · [Before (L2411-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2411-L2449)

```diff
-       },
-       To = function(BB) {
-         const OB = {};
-         return co(BB, (function(BB, GB) {
-           (UG(BB) && BB.length > 0 || KG(BB)) && (OB[GB] = BB)
-         })), OB
-       };
- 
-     function bo(BB) {
-       const OB = RD({}, BB);
-       for (const GB of ["name", "message", "stack", "cause", "errors"]) try {
-         GB in BB && (OB[GB] = BB[GB])
-       } catch (BB) {}
-       return OB
-     }
-     const Co = ["herokuapp.com", "vercel.app", "netlify.app"];
- ... (23 more removed lines; see GitHub link above)
+         const xW = PW._interpolate(cW, this._animationState);
+         if (this.setValue(xW, NW), tW.length)
+           for (let lW = 0; lW < tW.length; lW++)
+             if (ZW >= 0 && cW >= tW[lW].frame && tW[lW].frame >= iW || ZW < 0 && cW <= tW[lW].frame && tW[lW].frame <= iW) {
+               const WW = tW[lW];
+               WW.isDone || (WW.onlyOnce && (tW.splice(lW, 1), lW--), WW.isDone = !0, WW.action(cW))
+             } return wW || (this._stopped = !0), wW
+       }
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2451-L2463` → after: `L2027-L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2027-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2027-L2030) · [Before (L2451-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2451-L2463)

```diff
-     const xo = BB => {
-       if (tO) {
-         try {
-           const OB = BB + "=",
-             GB = tO.cookie.split(";").filter((BB => BB.length));
-           for (let BB = 0; GB.length > BB; BB++) {
-             let YB = GB[BB];
-             for (;
-               " " == YB.charAt(0);) YB = YB.substring(1, YB.length);
-             if (0 === YB.indexOf(OB)) return decodeURIComponent(YB.substring(OB.length, YB.length))
-           }
-         } catch (BB) {}
-         return null
+     var hW = OW(41431);
+     class HW {
+       get syncRoot() {
+         return this._syncRoot
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2465-L2490` → after: `L2032-L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2032-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2032-L2046) · [Before (L2465-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2465-L2490)

```diff
-     };
-     Math.trunc || (Math.trunc = function(BB) {
-       return 0 > BB ? Math.ceil(BB) : Math.floor(BB)
-     }), Number.isInteger || (Number.isInteger = function(BB) {
-       return KG(BB) && isFinite(BB) && Math.floor(BB) === BB
-     });
-     var to = class BB {
-         constructor(BB) {
-           if (this.bytes = BB, 16 !== BB.length) throw new TypeError("not 128-bit length")
-         }
-         static fromFieldsV7(OB, GB, YB, DB) {
-           if (!Number.isInteger(OB) || !Number.isInteger(GB) || !Number.isInteger(YB) || !Number.isInteger(DB) || 0 > OB || 0 > GB || 0 > YB || 0 > DB || OB > 0xffffffffffff || GB > 4095 || YB > 1073741823 || DB > 4294967295) throw new RangeError("invalid field value");
-           const QB = new Uint8Array(16);
-           return QB[0] = OB / Math.pow(2, 40), QB[1] = OB / Math.pow(2, 32), QB[2] = OB / Math.pow(2, 24), QB[3] = OB / Math.pow(2, 16), QB[4] = OB / 256, QB[5] = OB, QB[6] = 112 | GB >>> 8, QB[7] = GB, QB[8] = 128 | YB >>> 24, QB[9] = YB >>> 16, QB[10] = YB >>> 8, QB[11] = YB, Q … [truncated]
-         }
-         toString() {
- ... (10 more removed lines; see GitHub link above)
+       get masterFrame() {
+         return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
+       }
+       get weight() {
+         return this._weight
+       }
+       set weight(WW) {
+         this._weight = -1 !== WW ? Math.min(Math.max(WW, 0), 1) : -1
+       }
+       get speedRatio() {
+         return this._speedRatio
+       }
+       set speedRatio(WW) {
+         for (let iW = 0; iW < this._runtimeAnimations.length; iW++) {
+           this._runtimeAnimations[iW]._prepareForSpeedRatioChange(WW)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2492-L2497` → after: `L2048-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2048-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2048-L2081) · [Before (L2492-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2492-L2497)

```diff
-         compareTo(BB) {
-           for (let OB = 0; 16 > OB; OB++) {
-             const GB = this.bytes[OB] - BB.bytes[OB];
-             if (0 !== GB) return Math.sign(GB)
-           }
-           return 0
+         this._speedRatio = WW, null !== this._goToFrame && this.goToFrame(this._goToFrame)
+       }
+       get elapsedTime() {
+         return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
+       }
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
+           NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+           LW = arguments.length > 6 ? arguments[6] : void 0,
+           cW = arguments.length > 7 ? arguments[7] : void 0,
+           wW = arguments.length > 8 ? arguments[8] : void 0,
+           tW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+           ZW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
+         this.target = iW, this.fromFrame = OW, this.toFrame = mW, this.loopAnimation = NW, this.onAnimationEnd = LW, this.onAnimationLoop = wW, this.isAdditive = tW, this.playOrder = ZW, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._ … [truncated]
+ ... (18 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2499-L2508` → after: `L2083-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2083-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2083-L2144) · [Before (L2499-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2499-L2508)

```diff
-       },
-       Bj = class {
-         generate() {
-           const BB = this.generateOrAbort();
-           if (!nG(BB)) return BB;
-           {
-             this._timestamp = 0;
-             const BB = this.generateOrAbort();
-             if (nG(BB)) throw new Error("Could not generate UUID after timestamp reset");
-             return BB
+       }
+       getAnimationByTargetProperty(WW) {
+         const iW = this._runtimeAnimations;
+         for (let OW = 0; OW < iW.length; OW++)
+           if (iW[OW].animation.targetProperty === WW) return iW[OW].animation;
+         return null
+       }
+       getRuntimeAnimationByTargetProperty(WW) {
+         const iW = this._runtimeAnimations;
+         for (let OW = 0; OW < iW.length; OW++)
+           if (iW[OW].animation.targetProperty === WW) return iW[OW];
+         return null
+       }
+       reset() {
+         const WW = this._runtimeAnimations;
+         for (let iW = 0; iW < WW.length; iW++) WW[iW].reset(!0);
+ ... (46 more added lines; see GitHub link above)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2510-L2519` → after: `L2146-L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2146-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2146-L2152) · [Before (L2510-L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2510-L2519)

```diff
-         }
-         generateOrAbort() {
-           const BB = (() => {
-             const BB = Date.now();
-             return KG(BB) && isFinite(BB) ? Math.min(Math.max(Math.floor(BB), 0), 0xffffffffffff) : 0
-           })();
-           if (BB > this._timestamp) this._timestamp = BB, this._resetCounter();
-           else {
-             if (this._timestamp >= BB + 1e4) return;
-             this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
+         } else {
+           const WW = this._scene._activeAnimatables.indexOf(this);
+           if (WW > -1) {
+             OW || this._scene._activeAnimatables.splice(WW, 1);
+             const iW = this._runtimeAnimations;
+             for (let WW = 0; WW < iW.length; WW++) iW[WW].dispose();
+             this._runtimeAnimations.length = 0, mW || this._raiseOnAnimationEnd()
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2540-L2541` → after: `L2156-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2156-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2156-L2161) · [Before (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2540-L2541)

```diff
-       constructor() {
-         this._buffer = new Uint32Array(8), this._cursor = 1 / 0
+       async waitAsync() {
+         return await new Promise((WW => {
+           this.onAnimationEndObservable.add((() => {
+             WW(this)
+           }), void 0, void 0, this, !0)
+         }))
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2543-L2565` → after: `L2163-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2163-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2163-L2168) · [Before (L2543-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2543-L2565)

```diff
-     };
-     let Yj;
-     const Dj = () => Qj().toString(),
-       Qj = () => (Yj || (Yj = new Bj)).generate();
-     let oj = "";
-     const jj = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
-     let yj = null;
-     const Jj = {
-       _is_supported() {
-         if (!kG(yj)) return yj;
-         if (yj = !1, tO) try {
-           const BB = `__ph_cookie_support_${Dj()}`;
-           Jj._set(BB, "xyz"), yj = '"xyz"' === xo(BB), Jj._remove(BB)
-         } catch (YB) {
-           yj = !1
-         }
- ... (7 more removed lines; see GitHub link above)
+       _animate(WW) {
+         if (this.JZ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = WW), !0;
+         if (null === this._localDelayOffset ? (this._localDelayOffset = WW, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += WW - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.sp … [truncated]
+         this._previousWeight = this._weight;
+         let iW = !1;
+         const OW = this._runtimeAnimations;
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2567-L2613` → after: `L2170-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2170-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2170-L2172) · [Before (L2567-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2567-L2613)

```diff
-         try {
-           OB = JSON.parse(Jj._get(BB)) || {}
-         } catch (BB) {}
-         return OB
-       },
-       _set(BB, OB, GB, YB, DB) {
-         if (!tO) return !1;
-         try {
-           let QB = "",
-             oB = "";
-           const jB = function(BB, OB) {
-             if (OB) {
-               let OB = function(BB) {
-                 let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tO;
-                 if (oj) return oj;
-                 if (!OB) return "";
- ... (31 more removed lines; see GitHub link above)
+         for (mW = 0; mW < OW.length; mW++) {
+           const EW = OW[mW].animate(WW - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
+           iW = iW || EW
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2615-L2620` → after: `L2174-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2174-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2174-L2177) · [Before (L2615-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2615-L2620)

```diff
-       },
-       _remove(BB, OB) {
-         if ((null == tO ? void 0 : tO.cookie) && (!OB || !kG(xo(BB)))) try {
-           Jj._set(BB, "", -1, OB)
-         } catch (BB) {
-           return
+         if (this.animationStarted = iW, !iW) {
+           if (this.disposeOnEnd)
+             for (mW = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(mW, 1), mW = 0; mW < OW.length; mW++) OW[mW].dispose();
+           this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2623-L2668` → after: `L2181-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2181-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2181-L2241) · [Before (L2623-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2623-L2668)

```diff
-     };
-     let Mj = null;
-     const Pj = {
-         _is_supported() {
-           if (!kG(Mj)) return Mj;
-           let BB = !0;
-           if (nG(vO)) BB = !1;
-           else try {
-             const OB = "__mplssupport__";
-             Pj._set(OB, "xyz"), '"xyz"' !== Pj._get(OB) && (BB = !1), Pj._remove(OB)
-           } catch (DB) {
-             BB = !1
-           }
-           return BB || Xo.error("localStorage unsupported; falling back to cookie store"), Mj = BB, BB
-         },
-         _error(BB) {
- ... (30 more removed lines; see GitHub link above)
+     }
+ 
+     function nW(WW) {
+       if (0 === WW.totalWeight && 0 === WW.totalAdditiveWeight) return WW.originalValue;
+       let iW = 1;
+       const OW = NW.l.fA[0],
+         mW = NW.l.fA[1],
+         EW = NW.l.Quaternion[0];
+       let PW = 0;
+       const LW = WW.animations[0],
+         cW = WW.originalValue;
+       let wW, tW = !1;
+       if (WW.totalWeight < 1) wW = 1 - WW.totalWeight, cW.decompose(mW, EW, OW);
+       else {
+         if (PW = 1, iW = WW.totalWeight, wW = LW.weight / iW, 1 == wW) {
+           if (!WW.totalAdditiveWeight) return LW.currentValue;
+ ... (45 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2670-L2695` → after: `L2243-L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2243-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2243-L2245) · [Before (L2670-L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2670-L2695)

```diff
-       },
-       zj = [qB, jB, lB, yB, RB, PB, MB, JB, ZB],
-       lj = [UB, nB, xB, tB, UO, nO, uB, RO],
-       pj = BB => BB + "_cpm",
-       qj = ["__proto__", "constructor", "prototype"],
-       Zj = BB => {
-         if (!VG(BB)) return {};
-         const OB = {};
-         return Object.keys(BB).forEach((GB => {
-           -1 === qj.indexOf(GB) && (OB[GB] = BB[GB])
-         })), OB
-       },
-       Nj = function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         const GB = {};
-         return [...lj, ...OB].forEach((OB => {
- ... (10 more removed lines; see GitHub link above)
+         for (let iW = 0; iW < WW.animations.length; iW++) {
+           const mW = WW.animations[iW];
+           OW.push(mW.currentValue), PW.push(mW.weight / LW)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2697-L2719` → after: `L2247-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2247-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2247-L2286) · [Before (L2697-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2697-L2719)

```diff
-         return BB.length.toString(36) + "." + (OB >>> 0).toString(36) + "." + (GB >>> 0).toString(36)
-       },
-       Wj = (BB, OB) => ({
-         p: OB,
-         f: Rj(JSON.stringify(BB))
-       }),
-       Aj = (BB, OB) => {
-         if (!OB) return {
-           properties: [],
-           isValid: !1
-         };
-         try {
-           const GB = Jj._parse(pj(BB)),
-             YB = (null == GB ? void 0 : GB.f) === Rj(OB) && WG(GB.p);
-           return {
-             properties: YB ? GB.p : [],
- ... (7 more removed lines; see GitHub link above)
+         let cW = 0;
+         for (let WW = 0; WW < OW.length;) WW ? (cW += PW[WW], NW.g.SlerpToRef(EW, OW[WW], PW[WW] / cW, EW), WW++) : (NW.g.SlerpToRef(OW[WW], OW[WW + 1], PW[WW + 1] / (PW[WW] + PW[WW + 1]), iW), EW = iW, cW = PW[WW] + PW[WW + 1], WW += 2)
+       }
+       for (let PW = 0; PW < WW.additiveAnimations.length; PW++) {
+         const iW = WW.additiveAnimations[PW];
+         0 !== iW.weight && (EW.multiplyToRef(iW.currentValue, NW.l.Quaternion[0]), NW.g.SlerpToRef(EW, NW.l.Quaternion[0], iW.weight, EW))
+       }
+       return EW
+     }
+ 
+     function oW(WW, iW) {
+       iW && (iW.prototype.copyAnimationRange = function(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+         0 === this.animations.length && (this.animations.push(new TW.d(this.name, "_matrix", WW.animations[0].framePerSecond, TW.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
+         const NW = WW.animations[0].getRange(iW);
+ ... (24 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2721-L2733` → after: `L2288-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2288-L2290) · [Before (L2721-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2721-L2733)

```diff
-       },
-       Vj = (BB, OB) => OB + "|" + (Jj._get(pj(BB)) || ""),
-       Sj = {},
-       nj = {
-         _is_supported: () => !0,
-         _error(BB) {
-           Xo.error("memoryStorage error: " + BB)
-         },
-         _get: BB => BB in Sj ? Sj[BB] : null,
-         _parse: BB => BB in Sj ? Sj[BB] : null,
-         _set: (BB, OB) => (Sj[BB] = OB, !0),
-         _remove(BB) {
-           delete Sj[BB]
+         for (let NW = mW; NW < OW; NW++) {
+           const WW = iW[NW];
+           WW.runtimeAnimation = null, WW.target = null
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2735-L2745` → after: `L2292-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2292-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2292-L2296) · [Before (L2735-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2735-L2745)

```diff
-       };
-     let Uj = null;
-     const fj = {
-       _is_supported() {
-         if (!kG(Uj)) return Uj;
-         if (Uj = !0, nG(vO)) Uj = !1;
-         else try {
-           const BB = "__support__";
-           fj._set(BB, "xyz"), '"xyz"' !== fj._get(BB) && (Uj = !1), fj._remove(BB)
-         } catch (YB) {
-           Uj = !1
+         if (this._animationWriteCount = mW, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
+         const EW = hW.d.Now;
+         if (!this._animationTimeLast) {
+           if (this._pendingData.length > 0) return;
+           this._animationTimeLast = EW
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2748-L2756` → after: `L2392-L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2392-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2392-L2396) · [Before (L2748-L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2748-L2756)

```diff
-       },
-       _error(BB) {
-         Xo.error("sessionStorage error: ", BB)
-       },
-       _get(BB) {
-         try {
-           return null == vO ? void 0 : vO.sessionStorage.getItem(BB)
-         } catch (BB) {
-           fj._error(BB)
+       }, WW.prototype.beginDirectAnimation = function(WW, iW, OW, mW, EW) {
+         let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
+         if (NW < 0) {
+           const WW = OW;
+           OW = mW, mW = WW, NW = -NW
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2759-L2779` → after: `L2411-L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2411-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2411-L2432) · [Before (L2759-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2759-L2779)

```diff
-       },
-       _parse(BB) {
-         try {
-           return JSON.parse(fj._get(BB)) || null
-         } catch (BB) {}
-         return null
-       },
-       _set(BB, OB) {
-         try {
-           return null == vO || vO.sessionStorage.setItem(BB, JSON.stringify(OB)), !0
-         } catch (BB) {
-           fj._error(BB)
-         }
-         return !1
-       },
-       _remove(BB) {
- ... (5 more removed lines; see GitHub link above)
+       }, WW.prototype.getAllAnimatablesByTarget = function(WW) {
+         const iW = [];
+         for (let OW = 0; OW < this._activeAnimatables.length; OW++) this._activeAnimatables[OW].target === WW && iW.push(this._activeAnimatables[OW]);
+         return iW
+       }, WW.prototype.stopAnimation = function(WW, iW, OW) {
+         const mW = this.getAllAnimatablesByTarget(WW);
+         for (const EW of mW) EW.stop(iW, OW)
+       }, WW.prototype.stopAllAnimations = function() {
+         if (this._activeAnimatables) {
+           for (let WW = 0; WW < this._activeAnimatables.length; WW++) this._activeAnimatables[WW].stop(void 0, void 0, !0);
+           this._activeAnimatables.length = 0
+         }
+         for (const WW of this.animationGroups) WW.stop()
+       })
+     }
+     HW.ProcessPausedAnimatables = !1;
+ ... (6 more added lines; see GitHub link above)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2781-L2784` → after: `L2434-L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2434-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2434-L2435) · [Before (L2781-L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2781-L2784)

```diff
-     };
-     var kj = class {
-       constructor(BB) {
-         this._instance = BB
+       set _matrix(WW) {
+         (WW.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.HJ(WW), this._markAsDirtyAndDecompose())
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2786-L2787` → after: `L2437-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2437-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2437-L2443) · [Before (L2786-L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2786-L2787)

```diff
-       get _config() {
-         return this._instance.config
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+           PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+           LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
+         super(WW, iW.bD(), !1), this.name = WW, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTr … [truncated]
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2789-L2790` → after: `L2445-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2445-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2445-L2446) · [Before (L2789-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2789-L2790)

```diff
-       get consent() {
-         return this._getDnt() ? 0 : this._storedConsent
+       getClassName() {
+         return "Bone"
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2792-L2793` → after: `L2448-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2448-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2448-L2449) · [Before (L2792-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2792-L2793)

```diff
-       isOptedOut() {
-         return "always" === this._config.cookieless_mode || this.isRejected() || -1 === this.consent && "on_reject" === this._config.cookieless_mode
+       getSkeleton() {
+         return this._skeleton
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2795-L2796` → after: `L2451-L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2451-L2452) · [Before (L2795-L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2795-L2796)

```diff
-       isOptedIn() {
-         return !this.isOptedOut()
+       get parent() {
+         return this._parentNode
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2798-L2799` → after: `L2454-L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2454-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2454-L2455) · [Before (L2798-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2798-L2799)

```diff
-       isExplicitlyOptedOut() {
-         return 0 === this.consent
+       getParent() {
+         return this.parent
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2801-L2802` → after: `L2457-L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2457-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2457-L2458) · [Before (L2801-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2801-L2802)

```diff
-       isRejected() {
-         return 0 === this.consent || -1 === this.consent && this._config.opt_out_capturing_by_default
+       getChildren() {
+         return this.children
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2804-L2805` → after: `L2460-L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2460-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2460-L2461) · [Before (L2804-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2804-L2805)

```diff
-       optInOut(BB) {
-         this.Vq._set(this._storageKey, BB ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
+       getIndex() {
+         return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2807-L2808` → after: `L2463-L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2463-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2463-L2464) · [Before (L2807-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2807-L2808)

```diff
-       reset() {
-         this.Vq._remove(this._storageKey, this._config.cross_subdomain_cookie)
+       set parent(WW) {
+         this.setParent(WW)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2810-L2816` → after: `L2466-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2466-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2466-L2473) · [Before (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2810-L2816)

```diff
-       get _storageKey() {
-         const {
-           token: BB,
-           opt_out_capturing_cookie_prefix: OB,
-           consent_persistence_name: GB
-         } = this._instance.config;
-         return GB || (OB ? OB + BB : "__ph_opt_in_out_" + BB)
+       setParent(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (this.parent !== WW) {
+           if (this.parent) {
+             const WW = this.parent.children.indexOf(this); - 1 !== WW && this.parent.children.splice(WW, 1)
+           }
+           this._parentNode = WW, this.parent && this.parent.children.push(this), iW && this._updateAbsoluteBindMatrices(), this.xOW()
+         }
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2818-L2820` → after: `L2475-L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2475-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2475-L2476) · [Before (L2818-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2818-L2820)

```diff
-       get _storedConsent() {
-         const BB = this.Vq._get(this._storageKey);
-         return EG(BB) ? 1 : zG(cG, BB) ? 0 : -1
+       getLocalMatrix() {
+         return this._compose(), this._localMatrix
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2822-L2831` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2478-L2479) · [Before (L2822-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2822-L2831)

```diff
-       get Vq() {
-         const BB = this._config.opt_out_capturing_persistence_type,
-           OB = "localStorage" === BB ? Pj : Jj,
-           GB = OB._is_supported() ? OB : nj;
-         if (!this._persistentStore || this._persistentStore !== GB) {
-           this._persistentStore = GB;
-           const OB = "localStorage" === BB ? Jj : Pj;
-           OB._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(EG(OB._get(this._storageKey))), OB._remove(this._storageKey, this._config.cross_subdomain_cookie))
-         }
-         return this._persistentStore
+       getBindMatrix() {
+         return this._bindMatrix
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2833-L2834` → after: `L2481-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2481-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2481-L2482) · [Before (L2833-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2833-L2834)

```diff
-       _getDnt() {
-         return !!this._config.respect_dnt && [null == xO ? void 0 : xO.doNotTrack, null == xO ? void 0 : xO.msDoNotTrack, jG.doNotTrack, null == xO ? void 0 : xO.globalPrivacyControl].some((BB => EG(BB)))
+       getBaseMatrix() {
+         return this.getBindMatrix()
```
