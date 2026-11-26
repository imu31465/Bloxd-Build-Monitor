# Changed — Bundle Modifications Report (Part 068 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `68 / 116` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 067](part-067.md) · [Part 069 →](part-069.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4629 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 3419. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25616` → after: `L26598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26598) · [Before (L25616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25616)

```diff
-       YV.fogMode = 3, YV.fogStart = eV, YV.fogEnd = xV, YV.fogColour.set(JV), VV.bUV.setBabylonFog(VV, eV, xV, JV)
+       rH.fogMode = 3, rH.fogStart = BH, rH.fogEnd = LH, rH.fogColour.set(AH), HH.HSH.setBabylonFog(HH, BH, LH, AH)
```

#### 3420. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25624` → after: `L26606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26606) · [Before (L25624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25624)

```diff
-         UV = JV.h;
+         SH = AH.j;
```

#### 3421. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25626-L25627` → after: `L26608-L26609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26608-L26609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26608-L26609) · [Before (L25626-L25627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25626-L25627)

```diff
-         const VV = yV * JV.d;
-         YV.lights[VV + UV.kind] = JV.e.directional, YV.lights[VV + UV.vector] = xV[yV][0], YV.lights[VV + UV.vector + 1] = xV[yV][1], YV.lights[VV + UV.vector + 2] = xV[yV][2], YV.lights.fill(nV[yV], VV + UV.diffuse, VV + UV.specular + 3), YV.lights[VV + UV.range] = Number.MAX_VA … [truncated]
+         const HH = hH * AH.e;
+         rH.lights[HH + SH.kind] = AH.f.directional, rH.lights[HH + SH.vector] = LH[hH][0], rH.lights[HH + SH.vector + 1] = LH[hH][1], rH.lights[HH + SH.vector + 2] = LH[hH][2], rH.lights.fill(CH[hH], HH + SH.diffuse, HH + SH.specular + 3), rH.lights[HH + SH.range] = Number.MAX_VA … [truncated]
```

#### 3422. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25633` → after: `L26615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26615) · [Before (L25633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25633)

```diff
-       VV.ynV = eV(VV, "camScreen", (0, YV.k)({
+       HH.FzH = BH(HH, "camScreen", (0, rH.j)({
```

#### 3423. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25636-L25637` → after: `L26618-L26619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26618-L26619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26618-L26619) · [Before (L25636-L25637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25636-L25637)

```diff
-       })), VV.ynV.Sk = !0, VV.ynV.position.set(0, 0, VV.model.K9.near + 1 / 512), VV.ynV.parent = VV.camera, VV.wE(VV.ynV);
-       const xV = (0, UV.r)("camera_screen_mat", VV.yE);
+       })), HH.FzH.fu = !0, HH.FzH.position.set(0, 0, HH.model.N_.near + 1 / 512), HH.FzH.parent = HH.camera, HH.FQ(HH.FzH);
+       const LH = (0, SH.r)("camera_screen_mat", HH.NQ);
```

#### 3424. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25639` → after: `L26621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26621) · [Before (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25639)

```diff
-       VV.pnV = xV.mirror, (JV = VV.pnV).uniqueId = Number.MAX_SAFE_INTEGER, (0, UV.eb)(JV).uniqueId = Number.MAX_SAFE_INTEGER, (0, UV.tb)(xV, {
+       HH.DzH = LH.mirror, (AH = HH.DzH).uniqueId = Number.MAX_SAFE_INTEGER, (0, SH.V)(AH).uniqueId = Number.MAX_SAFE_INTEGER, (0, SH.db)(LH, {
```

#### 3425. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25644` → after: `L26626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26626) · [Before (L25644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25644)

```diff
-       }), VV.ynV.pW(!1), (0, yV.l)(VV.pnV), VV.ynV.material = VV.pnV
+       }), HH.FzH.vI(!1), (0, hH.j)(HH.DzH), HH.FzH.material = HH.DzH
```

#### 3426. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25647` → after: `L26629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26629) · [Before (L25647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25647)

```diff
-   38523: (VV, eV, xV) => {
+   38229: (HH, BH, LH) => {
```

#### 3427. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25653-L25654` → after: `L26636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26636) · [Before (L25653-L25654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25653-L25654)

```diff
-       o: () => tV,
-       q: () => jV,
+       p: () => xH,
```

#### 3428. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25657-L25661` → after: `L26639-L26643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26639-L26643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26639-L26643) · [Before (L25657-L25661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25657-L25661)

```diff
-     var JV = xV(38263),
-       YV = xV(38519),
-       UV = xV(38545),
-       yV = xV(38530),
-       pV = xV(38550);
+     var AH = LH(37961),
+       rH = LH(38222),
+       SH = LH(38247),
+       hH = LH(38231),
+       tH = LH(38256);
```

#### 3429. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25664` → after: `L26646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26646) · [Before (L25664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25664)

```diff
-         this.holderPosition = new Float64Array(3), this.holderRotation = new Float64Array(3), this.I9 = new Float64Array(3), this.fov = .8, this.near = 1 / 32, this.far = 1e4
+         this.holderPosition = new Float64Array(3), this.holderRotation = new Float64Array(3), this.R_ = new Float64Array(3), this.fov = .8, this.near = 1 / 32, this.far = 1e4
```

#### 3430. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25667-L25670` → after: `L26649-L26652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26649-L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26649-L26652) · [Before (L25667-L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25667-L25670)

```diff
-     var nV = xV(38515),
-       wV = xV(38547),
-       ZV = xV(38421),
-       vV = xV(38437);
+     var CH = LH(38206),
+       EH = LH(38251),
+       XH = LH(38118),
+       GH = LH(38135);
```

#### 3431. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25673` → after: `L26655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26655) · [Before (L25673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25673)

```diff
-         this.view = new nV.i, this.K9 = new QV, this.earthSky = null, this.nodes = new UV.h, this.meshes = new yV.h(this.nodes)
+         this.view = new CH.m, this.N_ = new zH, this.earthSky = null, this.nodes = new SH.i, this.meshes = new hH.o(this.nodes)
```

#### 3432. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25680` → after: `L26662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26662) · [Before (L25680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25680)

```diff
-           materials: (0, ZV.E)(),
+           materials: (0, XH.C)(),
```

#### 3433. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25682-L25683` → after: `L26664-L26665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26664-L26665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26664-L26665) · [Before (L25682-L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25682-L25683)

```diff
-           geometries: (0, wV.o)(),
-           batches: (0, pV.g)(),
+           geometries: (0, EH.u)(),
+           batches: (0, tH.f)(),
```

#### 3434. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25689` → after: `L26671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26671) · [Before (L25689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25689)

```diff
-     var kV = xV(38556);
+     var uH = LH(38261);
```

#### 3435. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25707` → after: `L26689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26689) · [Before (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25707)

```diff
-       VV.position.rQV(eV, xV, JV) || VV.position.set(eV, xV, JV)
+       HH.position.dtH(BH, LH, AH) || HH.position.set(BH, LH, AH)
```

#### 3436. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25725` → after: `L26707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26707) · [Before (L25725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25725)

```diff
-       JV.setListed(eV.row, xV && (0 === (YV.flags[eV.row] & UV.e.mesh) || Number.isNaN(JV.radius[eV.row]))), JV.setFlag(eV.row, yV.b.visible, xV)
+       AH.setListed(BH.row, LH && (0 === (rH.flags[BH.row] & SH.e.mesh) || Number.isNaN(AH.radius[BH.row]))), AH.setFlag(BH.row, hH.e.visible, LH)
```

#### 3437. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25733` → after: `L26715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26715) · [Before (L25733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25733)

```diff
-       xV.meshes.setListed(YV, !1, yV), JV.nodes[YV] = null, yV && xV.meshes.setParts(YV, null), xV.nodes.dispose(YV), eV.metadata && (eV.metadata[kV.E] = void 0)
+       LH.meshes.setListed(rH, !1, hH), AH.nodes[rH] = null, hH && LH.meshes.setParts(rH, null), LH.nodes.dispose(rH), BH.metadata && (BH.metadata[uH.C] = void 0)
```

#### 3438. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25739-L25742` → after: `L26721-L26724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26721-L26724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26721-L26724) · [Before (L25739-L25742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25739-L25742)

```diff
-       YYV: VV => VV.model.view,
-       K9: VV => VV.model.K9,
-       ZC: YV.f,
-       gYV(VV, eV) {
+       FAH: HH => HH.model.view,
+       N_: HH => HH.model.N_,
+       fR: rH.f,
+       QrH(HH, BH) {
```

#### 3439. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25750` → after: `L26732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26732) · [Before (L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25750)

```diff
-           if (null !== YV && void 0 !== YV && YV[kV.C] && !eV.parent) {
+           if (null !== rH && void 0 !== rH && rH[uH.B] && !BH.parent) {
```

#### 3440. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25754` → after: `L26736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26736) · [Before (L25754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25754)

```diff
-             YV[kV.E] = UV, xV.setRadius(JV, UV), xV.setFlag(JV, yV.b.textPlane | yV.b.alwaysSelect, !0)
+             rH[uH.C] = SH, LH.setRadius(AH, SH), LH.setFlag(AH, hH.e.textPlane | hH.e.alwaysSelect, !0)
```

#### 3441. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25759` → after: `L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26741) · [Before (L25759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25759)

```diff
-       xeV(VV, eV, xV) {
+       RHH(HH, BH, LH) {
```

#### 3442. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25762` → after: `L26744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26744) · [Before (L25762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25762)

```diff
-       teV(VV, eV) {
+       rBH(HH, BH) {
```

#### 3443. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25771` → after: `L26753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26753) · [Before (L25771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25771)

```diff
-           if (0 !== (JV.flags[yV] & UV.e.mesh) && !(0, kV.z)(VV)) {
+           if (0 !== (AH.flags[hH] & SH.e.mesh) && !(0, uH.x)(HH)) {
```

#### 3444. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25779` → after: `L26761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26761) · [Before (L25779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25779)

```diff
-   39055: (VV, eV, xV) => {
+   38785: (HH, BH, LH) => {
```

#### 3445. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25781-L25782` → after: `L26763-L26766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26763-L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26763-L26766) · [Before (L25781-L25782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25781-L25782)

```diff
-       c: () => ZV,
-       g: () => rV,
+       b: () => XH,
+       e: () => YH,
+       f: () => vH,
+       h: () => GH,
```

#### 3446. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25784-L25788` → after: `L26768-L26770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26768-L26770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26768-L26770) · [Before (L25784-L25788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25784-L25788)

```diff
-       m: () => vV,
-       p: () => jV,
-       r: () => nV,
-       t: () => kV,
-       w: () => wV
+       n: () => CH,
+       q: () => uH,
+       r: () => EH
```

#### 3447. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25790-L25795` → after: `L26772-L26777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26772-L26777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26772-L26777) · [Before (L25790-L25795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25790-L25795)

```diff
-     var JV = xV(39058),
-       YV = xV(39066),
-       UV = xV(38519),
-       yV = xV(38547),
-       pV = xV(39053),
-       QV = xV(38662);
+     var AH = LH(38790),
+       rH = LH(38797),
+       SH = LH(38222),
+       hH = LH(38251),
+       tH = LH(38777),
+       zH = LH(38339);
```

#### 3448. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25798` → after: `L26780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26780) · [Before (L25798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25798)

```diff
-       return VV.jb ? qV(VV, eV, xV, YV.e) : (0, QV.e)().meshFromArrays(eV, xV, VV.dD())
+       return HH.yu ? vH(HH, BH, LH, rH.b) : (0, zH.c)().meshFromArrays(BH, LH, HH.yN())
```

#### 3449. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25802` → after: `L26784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26784) · [Before (L25802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25802)

```diff
-       return VV.jb ? nV(VV, eV, xV) : (0, QV.e)().plainMeshFromArrays(eV, xV, VV.dD(), !0)
+       return HH.yu ? CH(HH, BH, LH) : (0, zH.c)().plainMeshFromArrays(BH, LH, HH.yN(), !0)
```

#### 3450. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25807` → after: `L26789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26789) · [Before (L25807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25807)

```diff
-         const xV = (0, yV.i)(eV);
+         const LH = (0, hH.p)(BH);
```

#### 3451. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25809` → after: `L26791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26791) · [Before (L25809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25809)

```diff
-       } else Object.assign(new((0, QV.e)().VertexData), eV).applyToMesh(VV, !0)
+       } else Object.assign(new((0, zH.c)().VertexData), BH).applyToMesh(HH, !0)
```

#### 3452. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25813` → after: `L26795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26795) · [Before (L25813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25813)

```diff
-       return VV.bUV.linesFromArrays(VV, eV, xV)
+       return HH.HSH.linesFromArrays(HH, BH, LH)
```

#### 3453. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25817` → after: `L26799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26799) · [Before (L25817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25817)

```diff
-       return VV.jb ? new YV.e(VV, eV, VV.dD().getUniqueId(), null, !1, new Int32Array(0)) : new((0, QV.e)().Mesh)(eV, VV.dD())
+       return HH.yu ? new rH.b(HH, BH, HH.yN().getUniqueId(), null, !1, new Int32Array(0)) : new((0, zH.c)().Mesh)(BH, HH.yN())
```

#### 3454. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25821` → after: `L26803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26803) · [Before (L25821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25821)

```diff
-       return VV.jb ? (0, UV.j)(VV, eV) : new((0, QV.e)().TransformNode)(eV, VV.dD())
+       return HH.yu ? (0, SH.i)(HH, BH) : new((0, zH.c)().TransformNode)(BH, HH.yN())
```

#### 3455. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25846` → after: `L26828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26828) · [Before (L25846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25846)

```diff
-         indices: null !== (eV = VV.RYV()) && void 0 !== eV ? eV : [],
+         indices: null !== (BH = HH.vrH()) && void 0 !== BH ? BH : [],
```

#### 3456. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25857` → after: `L26839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26839) · [Before (L25857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25857)

```diff
-       if (!(0, UV.f)(VV[0])) return (0, QV.e)().MirroredGeometry.mergeMeshes(VV, !0, xV, null, !1, eV);
+       if (!(0, SH.f)(HH[0])) return (0, zH.c)().MirroredGeometry.mergeMeshes(HH, !0, LH, null, !1, BH);
```

#### 3457. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25861` → after: `L26843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26843) · [Before (L25861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25861)

```diff
-         ZV = JV.some((VV => VV.JC || VV.sideOrientation !== nV.sideOrientation));
+         XH = AH.some((HH => HH.xR || HH.sideOrientation !== CH.sideOrientation));
```

#### 3458. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25868` → after: `L26850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26850) · [Before (L25868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25868)

```diff
-           return (null !== (xV = null === (JV = VV.material) || void 0 === JV ? void 0 : JV.uniqueId) && void 0 !== xV ? xV : -1) - (null !== (YV = null === (UV = eV.material) || void 0 === UV ? void 0 : UV.uniqueId) && void 0 !== YV ? YV : -1)
+           return (null !== (LH = null === (AH = HH.material) || void 0 === AH ? void 0 : AH.uniqueId) && void 0 !== LH ? LH : -1) - (null !== (rH = null === (SH = BH.material) || void 0 === SH ? void 0 : SH.uniqueId) && void 0 !== rH ? rH : -1)
```

#### 3459. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25879-L25881` → after: `L26861-L26863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26861-L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26861-L26863) · [Before (L25879-L25881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25879-L25881)

```diff
-           for (let eV = 0; eV < xV.TE.length; eV += 4) {
-             const [UV, yV] = [YV + xV.TE[eV], xV.TE[eV + 1]], pV = rV.length - 4;
-             pV >= 0 && rV[pV + 2] === JV && rV[pV] + rV[pV + 1] === UV ? rV[pV + 1] += yV : rV.push(UV, yV, JV, 0), VV = Math.max(VV, UV + yV)
+           for (let BH = 0; BH < LH.rW.length; BH += 4) {
+             const [SH, hH] = [rH + LH.rW[BH], LH.rW[BH + 1]], tH = YH.length - 4;
+             tH >= 0 && YH[tH + 2] === AH && YH[tH] + YH[tH + 1] === SH ? YH[tH + 1] += hH : YH.push(SH, hH, AH, 0), HH = Math.max(HH, SH + hH)
```

#### 3460. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25885-L25886` → after: `L26867-L26868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26867-L26868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26867-L26868) · [Before (L25885-L25886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25885-L25886)

```diff
-       const kV = (0, pV.d)(JV.map((VV => [EV(VV), VV.getWorldMatrix().m]))),
-         bV = `${nV.name}_merged`,
+       const uH = (0, tH.g)(AH.map((HH => [WH(HH), HH.getWorldMatrix().m]))),
+         QH = `${CH.name}_merged`,
```

#### 3461. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25888-L25889` → after: `L26870-L26871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26870-L26871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26870-L26871) · [Before (L25888-L25889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25888-L25889)

```diff
-         tV = Int32Array.from(rV, ((VV, eV) => eV % 4 === 2 ? 0 : eV % 4 === 3 ? jV : VV)),
-         FV = qV(nV.gZ, bV, kV, YV.e, eV ? tV : void 0);
+         PH = Int32Array.from(YH, ((HH, BH) => BH % 4 === 2 ? 0 : BH % 4 === 3 ? xH : HH)),
+         TH = vH(CH.mX, QH, uH, rH.b, BH ? PH : void 0);
```

#### 3462. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25895` → after: `L26877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26877) · [Before (L25895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25895)

```diff
-         const [VV, eV] = (0, yV.s)(rV[YV + 1], ((VV, eV) => kV.positions[3 * kV.indices[rV[YV] + VV] + eV]));
+         const [HH, BH] = (0, hH.y)(YH[rH + 1], ((HH, BH) => uH.positions[3 * uH.indices[YH[rH] + HH] + BH]));
```

#### 3463. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25900-L25901` → after: `L26882-L26883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26882-L26883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26882-L26883) · [Before (L25900-L25901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25900-L25901)

```diff
-         uniqueId: nV.dD().getUniqueId(),
-         BeV: vV,
+         uniqueId: CH.yN().getUniqueId(),
+         BBH: GH,
```

#### 3464. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25909-L25912` → after: `L26891-L26894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26891-L26894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26891-L26894) · [Before (L25909-L25912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25909-L25912)

```diff
-       const pV = (0, yV.i)(xV);
-       (0, yV.m)(pV);
-       const QV = new YV(VV, eV, VV.dD().getUniqueId(), pV, !0, UV);
-       return (0, JV.d)(), QV
+       const tH = (0, hH.p)(LH);
+       (0, hH.r)(tH);
+       const zH = new rH(HH, BH, HH.yN().getUniqueId(), tH, !0, SH);
+       return (0, AH.e)(), zH
```

#### 3465. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25915` → after: `L26897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26897) · [Before (L25915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25915)

```diff
-   38399: (VV, eV, xV) => {
+   38086: (HH, BH, LH) => {
```

#### 3466. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25920-L25923` → after: `L26901-L26904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26901-L26904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26901-L26904) · [Before (L25920-L25923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25920-L25923)

```diff
-       Db: () => BV,
-       F: () => wV,
-       Gb: () => GV,
-       Ib: () => EV,
+       Cb: () => IH,
+       Eb: () => WH,
+       G: () => OH,
+       Hb: () => vH,
```

#### 3467. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25925-L25928` → after: `L26906-L26908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26906-L26908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26906-L26908) · [Before (L25925-L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25925-L25928)

```diff
-       Jb: () => qV,
-       Kb: () => XV,
-       N: () => RV,
-       Nb: () => MV,
+       Lb: () => kH,
+       M: () => SH,
+       Mb: () => mH,
```

#### 3468. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25930` → after: `L26910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26910) · [Before (L25930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25930)

```diff
-       S: () => iV,
+       R: () => cH,
```

#### 3469. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25936-L25937` → after: `L26918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26918) · [Before (L25936-L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25936-L25937)

```diff
-       db: () => YV,
-       f: () => bV,
+       eb: () => jH,
```

#### 3470. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25939` → after: `L26920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26920) · [Before (L25939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25939)

```diff
-       i: () => NV,
+       g: () => bH,
```

#### 3471. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25941` → after: `L26922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26922) · [Before (L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25941)

```diff
-       jb: () => LV,
+       j: () => xH,
```

#### 3472. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25943` → after: `L26924-L26926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26924-L26926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26924-L26926) · [Before (L25943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25943)

```diff
-       m: () => jV,
+       l: () => zH,
+       nb: () => nH,
+       o: () => qH,
```

#### 3473. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25950-L25952` → after: `L26932-L26934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26932-L26934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26932-L26934) · [Before (L25950-L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25950-L25952)

```diff
-       v: () => aV,
-       w: () => vV,
-       wb: () => FV,
+       ub: () => CH,
+       x: () => YH,
+       yb: () => MH,
```

#### 3474. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25965` → after: `L26947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26947) · [Before (L25965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25965)

```diff
-       return YV(VV) ? xV : eV
+       return rH(HH) ? LH : BH
```

#### 3475. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25981` → after: `L26963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26963) · [Before (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25981)

```diff
-       if (!xV) throw new Error(`No WGSL name for shader type "${eV}"`);
+       if (!LH) throw new Error(`No WGSL name for shader type "${BH}"`);
```

#### 3476. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25987` → after: `L26969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26969) · [Before (L25987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25987)

```diff
-       return `${pV(VV,eV)}(${JV.join(", ")})`
+       return `${tH(HH,BH)}(${AH.join(", ")})`
```

#### 3477. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25995` → after: `L26977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26977) · [Before (L25995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25995)

```diff
-       return YV(VV) ? `var ${xV}: ${pV(VV,eV)} = ${JV};` : `${kV(VV,UV)}${eV} ${xV} = ${JV};`
+       return rH(HH) ? `var ${LH}: ${tH(HH,BH)} = ${AH};` : `${uH(HH,SH)}${BH} ${LH} = ${AH};`
```

#### 3478. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25999` → after: `L26981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26981) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L25999)

```diff
-       return YV(VV) ? `var ${xV}: ${pV(VV,eV)};` : `${eV} ${xV};`
+       return rH(HH) ? `var ${LH}: ${tH(HH,BH)};` : `${BH} ${LH};`
```

#### 3479. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26003` → after: `L26985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26985) · [Before (L26003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26003)

```diff
-       return YV(VV) ? `const ${xV}: ${pV(VV,eV)} = ${JV};` : `const ${eV} ${xV} = ${JV};`
+       return rH(HH) ? `const ${LH}: ${tH(HH,BH)} = ${AH};` : `const ${BH} ${LH} = ${AH};`
```

#### 3480. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26008` → after: `L26990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26990) · [Before (L26008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26008)

```diff
-         return `fn ${xV}(${JV.map((eV=>`${eV.name}: ${pV(VV,eV.type)}`)).join(", ")}) -> ${pV(VV,eV)} {${UV}}`
+         return `fn ${LH}(${AH.map((BH=>`${BH.name}: ${tH(HH,BH.type)}`)).join(", ")}) -> ${tH(HH,BH)} {${SH}}`
```

#### 3481. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26010` → after: `L26992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26992) · [Before (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26010)

```diff
-       return `${eV} ${xV}(${JV.map((VV=>`${VV.type} ${VV.name}`)).join(", ")}) {${UV}}`
+       return `${BH} ${LH}(${AH.map((HH=>`${HH.type} ${HH.name}`)).join(", ")}) {${SH}}`
```

#### 3482. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26014` → after: `L26996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L26996) · [Before (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26014)

```diff
-       return !eV || YV(VV) ? "" : `${eV} `
+       return !BH || rH(HH) ? "" : `${BH} `
```

#### 3483. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26018` → after: `L27000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27000) · [Before (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26018)

```diff
-       return YV(VV) ? `attribute ${eV}: ${pV(VV,xV)};` : `attribute ${kV(VV,JV)}${xV} ${eV};`
+       return rH(HH) ? `attribute ${BH}: ${tH(HH,LH)};` : `attribute ${uH(HH,AH)}${LH} ${BH};`
```

#### 3484. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26022` → after: `L27004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27004) · [Before (L26022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26022)

```diff
-       return YV(VV) ? `varying ${eV}: ${pV(VV,xV)};` : `varying ${kV(VV,JV)}${xV} ${eV};`
+       return rH(HH) ? `varying ${BH}: ${tH(HH,LH)};` : `varying ${uH(HH,AH)}${LH} ${BH};`
```

#### 3485. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26026` → after: `L27008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27008) · [Before (L26026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26026)

```diff
-       return YV(VV) ? `uniform ${eV}: ${pV(VV,xV)};` : `uniform ${xV} ${eV};`
+       return rH(HH) ? `uniform ${BH}: ${tH(HH,LH)};` : `uniform ${LH} ${BH};`
```

#### 3486. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26034` → after: `L27016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27016) · [Before (L26034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26034)

```diff
-       return YV(VV) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${eV}}` : `void main() {${eV}}`
+       return rH(HH) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${BH}}` : `void main() {${BH}}`
```

#### 3487. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26038` → after: `L27020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27020) · [Before (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26038)

```diff
-       return YV(VV) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${eV}}` : `void main() {${eV}}`
+       return rH(HH) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${BH}}` : `void main() {${BH}}`
```

#### 3488. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26043` → after: `L27025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27025) · [Before (L26043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26043)

```diff
-         return [`var ${eV}Sampler: sampler;`, `var ${eV}: ${"2dArray"===xV?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+         return [`var ${BH}Sampler: sampler;`, `var ${BH}: ${"2dArray"===LH?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 3489. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26045` → after: `L27027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27027) · [Before (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26045)

```diff
-       return `uniform highp ${"2dArray"===xV?"sampler2DArray":"sampler2D"} ${eV};`
+       return `uniform highp ${"2dArray"===LH?"sampler2DArray":"sampler2D"} ${BH};`
```

#### 3490. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26049` → after: `L27031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27031) · [Before (L26049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26049)

```diff
-       return YV(VV) ? `textureSample(${eV}, ${eV}Sampler, ${xV})` : `texture2D(${eV}, ${xV})`
+       return rH(HH) ? `textureSample(${BH}, ${BH}Sampler, ${LH})` : `texture2D(${BH}, ${LH})`
```

#### 3491. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26054` → after: `L27036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27036) · [Before (L26054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26054)

```diff
-         return `${UV?"textureSampleLevel":"textureSample"}(${eV}, ${eV}Sampler, ${xV}, ${nV(VV,`round(${JV})`)}${UV?`, ${UV}`:""})`
+         return `${SH?"textureSampleLevel":"textureSample"}(${BH}, ${BH}Sampler, ${LH}, ${CH(HH,`round(${AH})`)}${SH?`, ${SH}`:""})`
```

#### 3492. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26057` → after: `L27039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27039) · [Before (L26057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26057)

```diff
-       return UV ? `textureLod(${eV}, ${yV}, ${UV})` : `texture(${eV}, ${yV})`
+       return SH ? `textureLod(${BH}, ${hH}, ${SH})` : `texture(${BH}, ${hH})`
```

#### 3493. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26073` → after: `L27055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27055) · [Before (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26073)

```diff
-       return YV(VV) ? `vertexInputs.${eV}` : eV
+       return rH(HH) ? `vertexInputs.${BH}` : BH
```

#### 3494. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26077` → after: `L27059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27059) · [Before (L26077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26077)

```diff
-       return YV(VV) ? `vertexOutputs.${eV}` : eV
+       return rH(HH) ? `vertexOutputs.${BH}` : BH
```

#### 3495. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26081` → after: `L27063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27063) · [Before (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26081)

```diff
-       return YV(VV) ? `fragmentInputs.${eV}` : eV
+       return rH(HH) ? `fragmentInputs.${BH}` : BH
```

#### 3496. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26085` → after: `L27067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27067) · [Before (L26085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26085)

```diff
-       return YV(VV) ? `uniforms.${eV}` : eV
+       return rH(HH) ? `uniforms.${BH}` : BH
```

#### 3497. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26089` → after: `L27071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27071) · [Before (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26089)

```diff
-       return YV(VV) ? `frame.${eV}` : xV
+       return rH(HH) ? `frame.${BH}` : LH
```

#### 3498. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26109` → after: `L27091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27091) · [Before (L26109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26109)

```diff
-       return YV(VV) ? `dpdx(${eV})` : `dFdx(${eV})`
+       return rH(HH) ? `dpdx(${BH})` : `dFdx(${BH})`
```

#### 3499. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26113` → after: `L27095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27095) · [Before (L26113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26113)

```diff
-       return YV(VV) ? `dpdy(${eV})` : `dFdy(${eV})`
+       return rH(HH) ? `dpdy(${BH})` : `dFdy(${BH})`
```

#### 3500. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26117` → after: `L27099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27099) · [Before (L26117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26117)

```diff
-       return YV(VV) ? `inverseSqrt(${eV})` : `inversesqrt(${eV})`
+       return rH(HH) ? `inverseSqrt(${BH})` : `inversesqrt(${BH})`
```

#### 3501. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26121` → after: `L27103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27103) · [Before (L26121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26121)

```diff
-       return YV(VV) ? `select(${JV}, ${xV}, ${eV})` : `((${eV}) ? (${xV}) : (${JV}))`
+       return rH(HH) ? `select(${AH}, ${LH}, ${BH})` : `((${BH}) ? (${LH}) : (${AH}))`
```

#### 3502. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26125` → after: `L27107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27107) · [Before (L26125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26125)

```diff
-       return YV(VV) ? `((${eV}) - (${xV}) * floor((${eV}) / (${xV})))` : `mod(${eV}, ${xV})`
+       return rH(HH) ? `((${BH}) - (${LH}) * floor((${BH}) / (${LH})))` : `mod(${BH}, ${LH})`
```

#### 3503. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26129` → after: `L27111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27111) · [Before (L26129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26129)

```diff
-       return YV(VV) ? `${eV} = vec4f(${xV}, ${eV}.a);` : `${eV}.rgb = ${xV};`
+       return rH(HH) ? `${BH} = vec4f(${LH}, ${BH}.a);` : `${BH}.rgb = ${LH};`
```

#### 3504. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26133` → after: `L27115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27115) · [Before (L26133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26133)

```diff
-       return YV(VV) ? `${eV} = vec4f(${eV}.rgb * (${xV}), ${eV}.a);` : `${eV}.rgb *= ${xV};`
+       return rH(HH) ? `${BH} = vec4f(${BH}.rgb * (${LH}), ${BH}.a);` : `${BH}.rgb *= ${LH};`
```

#### 3505. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26137` → after: `L27119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27119) · [Before (L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26137)

```diff
-       return YV(VV) ? `${eV} = vec4f(${xV}, ${eV}.w);` : `${eV}.xyz = ${xV};`
+       return rH(HH) ? `${BH} = vec4f(${LH}, ${BH}.w);` : `${BH}.xyz = ${LH};`
```

#### 3506. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26140` → after: `L27122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27122) · [Before (L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26140)

```diff
-   38612: (VV, eV, xV) => {
+   38299: (HH, BH, LH) => {
```

#### 3507. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26142-L26144` → after: `L27124-L27126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27124-L27126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27124-L27126) · [Before (L26142-L26144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26142-L26144)

```diff
-       e: () => UV,
-       i: () => YV,
-       j: () => yV
+       c: () => SH,
+       d: () => rH,
+       g: () => hH
```

#### 3508. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26146` → after: `L27128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27128) · [Before (L26146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26146)

```diff
-     var JV = xV(38595);
+     var AH = LH(38283);
```

#### 3509. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26151` → after: `L27133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27133) · [Before (L26151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26151)

```diff
-       return null !== (eV = VV.vertexCount) && void 0 !== eV ? eV : VV.vertices.byteLength / (0, JV.k)(VV.usesAtlas)
+       return null !== (BH = HH.vertexCount) && void 0 !== BH ? BH : HH.vertices.byteLength / (0, AH.j)(HH.usesAtlas)
```

#### 3510. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26156` → after: `L27138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27138) · [Before (L26156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26156)

```diff
-       return [xV, eV[0], eV[1], eV[2]].map((eV => VV ? (0, JV.l)(eV) : 255))
+       return [LH, BH[0], BH[1], BH[2]].map((BH => HH ? (0, AH.k)(BH) : 255))
```

#### 3511. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26159` → after: `L27141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27141) · [Before (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26159)

```diff
-   38604: (VV, eV, xV) => {
+   38295: (HH, BH, LH) => {
```

#### 3512. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26174` → after: `L27156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27156) · [Before (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26174)

```diff
-       (null !== (eV = null === (xV = VV.getBuffer()) || void 0 === xV ? void 0 : xV.Jv) && void 0 !== eV ? eV : 0) > 0 && (JV.add(VV), 0 === YV ? yV(VV, null) : UV.add(VV))
+       (null !== (BH = null === (LH = HH.getBuffer()) || void 0 === LH ? void 0 : LH.aX) && void 0 !== BH ? BH : 0) > 0 && (AH.add(HH), 0 === rH ? hH(HH, null) : SH.add(HH))
```

#### 3513. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26183` → after: `L27165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27165) · [Before (L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26183)

```diff
-             for (const YV of Object.values(null !== (xV = null === VV || void 0 === VV ? void 0 : VV.getVertexBuffers()) && void 0 !== xV ? xV : {})) {
+             for (const rH of Object.values(null !== (LH = null === HH || void 0 === HH ? void 0 : HH.getVertexBuffers()) && void 0 !== LH ? LH : {})) {
```

#### 3514. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26202` → after: `L27184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27184) · [Before (L26202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26202)

```diff
-       if (!eV || !(eV.Jv > 0)) return;
+       if (!BH || !(BH.aX > 0)) return;
```

#### 3515. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26204` → after: `L27186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27186) · [Before (L26204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26204)

```diff
-         JV = new Uint8Array(eV.Jv);
+         AH = new Uint8Array(BH.aX);
```

#### 3516. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26208` → after: `L27190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27190) · [Before (L26208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26208)

```diff
-   38621: (VV, eV, xV) => {
+   38302: (HH, BH, LH) => {
```

#### 3517. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26214-L26216` → after: `L27195-L27198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27195-L27198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27195-L27198) · [Before (L26214-L26216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26214-L26216)

```diff
-       k: () => pV,
-       o: () => YV,
-       p: () => nV
+       m: () => AH,
+       q: () => tH,
+       t: () => rH,
+       v: () => CH
```

#### 3518. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26235` → after: `L27217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27217) · [Before (L26235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26235)

```diff
-   38673: (VV, eV, xV) => {
+   38353: (HH, BH, LH) => {
```

#### 3519. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26237-L26238` → after: `L27219-L27220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27219-L27220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27219-L27220) · [Before (L26237-L26238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26237-L26238)

```diff
-       d: () => pV,
-       e: () => JV
+       b: () => tH,
+       c: () => AH
```

#### 3520. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26243` → after: `L27225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27225) · [Before (L26243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26243)

```diff
-       for (const YV of null !== (eV = VV._drawWrappers) && void 0 !== eV ? eV : []) {
+       for (const rH of null !== (BH = HH._drawWrappers) && void 0 !== BH ? BH : []) {
```

#### 3521. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26250` → after: `L27232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27232) · [Before (L26250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26250)

```diff
-       for (const xV of null !== (eV = VV.hT) && void 0 !== eV ? eV : []) {
+       for (const LH of null !== (BH = HH.jU) && void 0 !== BH ? BH : []) {
```

#### 3522. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26252` → after: `L27234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27234) · [Before (L26252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26252)

```diff
-         const VV = xV.eb();
+         const HH = LH.eu();
```

#### 3523. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26267` → after: `L27249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27249) · [Before (L26267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26267)

```diff
-           if (eV.iN()) {
+           if (BH.mV()) {
```

#### 3524. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26282` → after: `L27264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27264) · [Before (L26282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26282)

```diff
-   38968: (VV, eV, xV) => {
+   38675: (HH, BH, LH) => {
```

#### 3525. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26284` → after: `L27266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27266) · [Before (L26284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26284)

```diff
-       b: () => vV,
+       c: () => GH,
```

#### 3526. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26286` → after: `L27268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27268) · [Before (L26286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26286)

```diff
-       f: () => BV,
+       g: () => MH,
```

#### 3527. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26289-L26297` → after: `L27271-L27279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27271-L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27271-L27279) · [Before (L26289-L26297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26289-L26297)

```diff
-     var JV = xV(38977),
-       YV = xV(38985),
-       UV = xV(38987),
-       yV = xV(38991),
-       pV = xV(38421),
-       QV = xV(38437),
-       nV = xV(38653),
-       wV = xV(38994),
-       ZV = xV(38445);
+     var AH = LH(38681),
+       rH = LH(38687),
+       SH = LH(38695),
+       hH = LH(38697),
+       tH = LH(38118),
+       zH = LH(38135),
+       CH = LH(38327),
+       EH = LH(38705),
+       XH = LH(38141);
```

#### 3528. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26300` → after: `L27282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27282) · [Before (L26300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26300)

```diff
-         this.iv = VV, this._defaultMat = void 0, this.allMaterials = void 0, this._blockMatIDtoTerrainID = void 0, this._idCounter = void 0, this._terrainIDtoMatObject = void 0, this._texURLtoTerrainID = void 0, this._renderMatToTerrainID = void 0, this._defaultMat = qV(VV, "base … [truncated]
+         this.bG = HH, this._defaultMat = void 0, this.allMaterials = void 0, this._blockMatIDtoTerrainID = void 0, this._idCounter = void 0, this._terrainIDtoMatObject = void 0, this._texURLtoTerrainID = void 0, this._renderMatToTerrainID = void 0, this._defaultMat = vH(HH, "base … [truncated]
```

#### 3529. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26302` → after: `L27284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27284) · [Before (L26302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26302)

```diff
-       vVV(VV) {
+       K8(HH) {
```

#### 3530. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26305-L26308` → after: `L27287-L27290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27287-L27290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27287-L27290) · [Before (L26305-L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26305-L26308)

```diff
-           var xV = VV.iv.jZ.Wb(eV);
-           if (xV.Rb) {
-             var JV = xV.Rb;
-             return VV._renderMatToTerrainID.has(JV) || ((0, ZV.g)(JV), VV._renderMatToTerrainID.set(JV, VV._idCounter++), EV.add(JV)), VV._renderMatToTerrainID.get(JV)
+           var LH = HH.bG.YX.XQ(BH);
+           if (LH.GQ) {
+             var AH = LH.GQ;
+             return HH._renderMatToTerrainID.has(AH) || ((0, XH.d)(AH), HH._renderMatToTerrainID.set(AH, HH._idCounter++), WH.add(AH)), HH._renderMatToTerrainID.get(AH)
```

#### 3531. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26310-L26312` → after: `L27292-L27294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27292-L27294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27292-L27294) · [Before (L26310-L26312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26310-L26312)

```diff
-           if (xV.xVV.length) {
-             var YV = xV.xVV[0];
-             return (YV = (0, nV.f)(VV.iv, xV, YV)) in VV._texURLtoTerrainID || (VV._texURLtoTerrainID[YV] = VV._idCounter++), VV._texURLtoTerrainID[YV]
+           if (LH.Y1.length) {
+             var rH = LH.Y1[0];
+             return (rH = (0, CH.e)(HH.bG, LH, rH)) in HH._texURLtoTerrainID || (HH._texURLtoTerrainID[rH] = HH._idCounter++), HH._texURLtoTerrainID[rH]
```

#### 3532. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26319` → after: `L27301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27301) · [Before (L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26319)

```diff
-               iv: xV
+               bG: LH
```

#### 3533. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26321-L26323` → after: `L27303-L27305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27303-L27305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27303-L27305) · [Before (L26321-L26323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26321-L26323)

```diff
-             var UV = xV.jZ.Wb(eV);
-             if (UV.Rb) return UV.Rb;
-             if (0 === UV.xVV.length) {
+             var SH = LH.YX.XQ(BH);
+             if (SH.GQ) return SH.GQ;
+             if (0 === SH.Y1.length) {
```

#### 3534. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26326` → after: `L27308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27308) · [Before (L26326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26326)

```diff
-                 (0, pV.tb)(VV, {
+                 (0, tH.db)(HH, {
```

#### 3535. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26333-L26339` → after: `L27315-L27321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27315-L27321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27315-L27321) · [Before (L26333-L26339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26333-L26339)

```diff
-               const eV = UV.xVV,
-                 yV = UV.YVV >= 0,
-                 QV = yV && (0, nV.h)(xV, UV),
-                 ZV = !QV && (UV.JVV || yV && eV.some((VV => xV.jZ.jVV(VV)))),
-                 vV = eV.map((VV => jV(VV, xV.gZ.yE, ZV))),
-                 rV = QV ? pV.p.opaque : ZV ? pV.p.alphaTest : null;
-               (0, pV.tb)(VV, {
+               const BH = SH.Y1,
+                 hH = SH.R7 >= 0,
+                 zH = hH && (0, CH.f)(LH, SH),
+                 XH = !zH && (SH.U1 || hH && BH.some((HH => LH.YX.rHH(HH)))),
+                 GH = BH.map((HH => xH(HH, LH.mX.NQ, XH))),
+                 YH = zH ? tH.o.opaque : XH ? tH.o.alphaTest : null;
+               (0, tH.db)(HH, {
```

#### 3536. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26345` → after: `L27327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27327) · [Before (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26345)

```diff
-                 XE: kV
+                 zW: uH
```

#### 3537. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26351-L26352` → after: `L27333-L27334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27333-L27334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27333-L27334) · [Before (L26351-L26352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26351-L26352)

```diff
-                   pixels: null !== (bV = UV.UVV) && void 0 !== bV ? bV : null,
-                   layerWidth: null !== (EV = UV.yVV) && void 0 !== EV ? EV : null
+                   pixels: null !== (QH = SH.W9) && void 0 !== QH ? QH : null,
+                   layerWidth: null !== (WH = SH.o9) && void 0 !== WH ? WH : null
```

#### 3538. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26354-L26355` → after: `L27336-L27337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27336-L27337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27336-L27337) · [Before (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26354-L26355)

```diff
-                 (0, pV.q)(VV, YV.h, (0, wV.d)(JV, vV, kV, xV.gZ.Ab(), !0))
-               } else kV && (0, pV.q)(VV, JV.b, (0, JV.g)(kV[0] + 1, kV[2]))
+                 (0, tH.p)(HH, rH.g, (0, EH.j)(AH, GH, uH, LH.mX.SQ(), !0))
+               } else uH && (0, tH.p)(HH, AH.c, (0, AH.k)(uH[0] + 1, uH[2]))
```

#### 3539. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26367` → after: `L27349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27349) · [Before (L26367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26367)

```diff
-         return (0, pV.eb)(this._terrainIDtoMatObject[VV])
+         return (0, tH.V)(this._terrainIDtoMatObject[HH])
```

#### 3540. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26370-L26372` → after: `L27352-L27354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27352-L27354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27352-L27354) · [Before (L26370-L26372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26370-L26372)

```diff
-         const eV = (0, pV.eb)(VV).diffuseTexture;
-         eV.mirror && (eV.mirror.hasAlpha = !0), eV.hasAlpha = !0, (0, ZV.J)(VV, {
-           transparencyMode: pV.p.alphaTest,
+         const BH = (0, tH.V)(HH).diffuseTexture;
+         BH.mirror && (BH.mirror.hasAlpha = !0), BH.hasAlpha = !0, (0, XH.R)(HH, {
+           transparencyMode: tH.o.alphaTest,
```

#### 3541. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26379` → after: `L27361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27361) · [Before (L26379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26379)

```diff
-       return !VV.Rb && 0 === VV.xVV.length && VV.alpha > 0 && VV.alpha < 1
+       return !HH.GQ && 0 === HH.Y1.length && HH.alpha > 0 && HH.alpha < 1
```

#### 3542. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26393` → after: `L27375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27375) · [Before (L26393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26393)

```diff
-       return (0, QV.v)(eV, {
+       return (0, zH.r)(BH, {
```

#### 3543. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26397` → after: `L27379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27379) · [Before (L26397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26397)

```diff
-         samplingMode: QV.h.nearestNearestMipLinear,
+         samplingMode: zH.f.nearestNearestMipLinear,
```

#### 3544. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26406-L26408` → after: `L27388-L27390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27388-L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27388-L27390) · [Before (L26406-L26408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26406-L26408)

```diff
-         gZ: JV
-       } = VV, YV = (0, pV.r)(eV, JV.yE);
-       (0, pV.tb)(YV, ZV.e), null === xV || void 0 === xV || xV(YV);
+         mX: AH
+       } = HH, rH = (0, tH.r)(BH, AH.NQ);
+       (0, tH.db)(rH, XH.c), null === LH || void 0 === LH || LH(rH);
```

#### 3545. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26410` → after: `L27392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27392) · [Before (L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26410)

```diff
-       return (0, pV.q)(YV, yV.j, (0, yV.k)(JV, QV)), (0, UV.i)(YV, (0, nV.d)(VV)), (0, ZV.l)(QV), QV
+       return (0, tH.p)(rH, hH.h, (0, hH.k)(AH, zH)), (0, SH.h)(rH, (0, CH.b)(HH)), (0, XH.j)(zH), zH
```

#### 3546. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26413` → after: `L27395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27395) · [Before (L26413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26413)

```diff
-   38589: (VV, eV, xV) => {
+   38280: (HH, BH, LH) => {
```

#### 3547. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26418-L26422` → after: `L27400-L27404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27400-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27400-L27404) · [Before (L26418-L26422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26418-L26422)

```diff
-     var JV = xV(3189),
-       YV = xV(38595),
-       UV = xV(38598),
-       yV = xV(38601),
-       pV = xV(38604);
+     var AH = LH(3166),
+       rH = LH(38283),
+       SH = LH(38286),
+       hH = LH(38291),
+       tH = LH(38295);
```

#### 3548. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26430` → after: `L27412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27412) · [Before (L26430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26430)

```diff
-       const JV = VV.sk(),
+       const AH = HH.Iu(),
```

#### 3549. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26438` → after: `L27420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27420) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26438)

```diff
-             YV = (0, UV.d)(new Uint32Array(6 * JV), JV),
+             rH = (0, SH.g)(new Uint32Array(6 * AH), AH),
```

#### 3550. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26443` → after: `L27425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27425) · [Before (L26443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26443)

```diff
-           return xV ? VV._releaseBuffer(xV.buffer) : VV.uk.addOnce((() => {
+           return LH ? HH._releaseBuffer(LH.buffer) : HH.ou.addOnce((() => {
```

#### 3551. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26457` → after: `L27439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27439) · [Before (L26457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26457)

```diff
-       return !!VV && eV <= VV.Jv && VV.Jv <= 2 * eV + 64 * xV
+       return !!HH && BH <= HH.aX && HH.aX <= 2 * BH + 64 * LH
```

#### 3552. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26470` → after: `L27452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27452) · [Before (L26470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26470)

```diff
-         this.terrainMatManager = VV, this.babylon = eV, this.PZ = xV, this.releasesCpuCopies = JV
+         this.terrainMatManager = HH, this.babylon = BH, this.xX = LH, this.releasesCpuCopies = AH
```

#### 3553. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26482` → after: `L27464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27464) · [Before (L26482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26482)

```diff
-           Ik: eV
+           lu: BH
```

#### 3554. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26484` → after: `L27466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27466) · [Before (L26484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26484)

```diff
-           PZ: xV
+           xX: LH
```

#### 3555. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26493` → after: `L27475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27475) · [Before (L26493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26493)

```diff
-           Ok: wV,
+           Ku: EH,
```

#### 3556. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26497-L26498` → after: `L27479-L27480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27479-L27480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27479-L27480) · [Before (L26497-L26498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26497-L26498)

```diff
-         VV.Vb || console.warn(`assignMeshData: chunk mesh "${VV.name}" missing doNotSyncBoundingInfo`), VV.name = `chunk_${wV}_${ZV}`;
-         const rV = (0, YV.k)(pV),
+         HH.cu || console.warn(`assignMeshData: chunk mesh "${HH.name}" missing doNotSyncBoundingInfo`), HH.name = `chunk_${EH}_${XH}`;
+         const YH = (0, rH.j)(tH),
```

#### 3557. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26500-L26501` → after: `L27482-L27483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27482-L27483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27482-L27483) · [Before (L26500-L26501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26500-L26501)

```diff
-           bV = eV.Gk ? (0, yV.e)(eV.Gk) : kV > 0 ? function(VV) {
-             return (!nV || nV.length < VV) && (nV = new Float32Array(VV).fill(JV.j)), nV.subarray(0, VV)
+           QH = BH.Gu ? (0, hH.e)(BH.Gu) : uH > 0 ? function(HH) {
+             return (!CH || CH.length < HH) && (CH = new Float32Array(HH).fill(AH.g)), CH.subarray(0, HH)
```

#### 3558. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26505` → after: `L27487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27487) · [Before (L26505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26505)

```diff
-         VV.material = null !== EV && void 0 !== EV ? EV : this.terrainMatManager.eb(ZV)
+         HH.material = null !== WH && void 0 !== WH ? WH : this.terrainMatManager.eu(XH)
```

#### 3559. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26516` → after: `L27498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27498) · [Before (L26516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26516)

```diff
-             return JV ? JV.getWrapperBuffer() === QV : !xV
+             return AH ? AH.getWrapperBuffer() === zH : !LH
```

#### 3560. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26528` → after: `L27510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27510) · [Before (L26528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26528)

```diff
-           nZ: QV,
+           rX: zH,
```

#### 3561. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26530` → after: `L27512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27512) · [Before (L26530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26530)

```diff
-         } = this.babylon, ZV = VV.sk(), vV = function(VV) {
+         } = this.babylon, XH = HH.Iu(), GH = function(HH) {
```

#### 3562. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26542` → after: `L27524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27524) · [Before (L26542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26542)

```diff
-           wx: BV,
+           TH: MH,
```

#### 3563. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26547` → after: `L27529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27529) · [Before (L26547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26547)

```diff
-         } = YV.i;
+         } = rH.g;
```

#### 3564. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26552` → after: `L27534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27534) · [Before (L26552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26552)

```diff
-         TV.useBoundingInfoFromGeometry || (TV.useBoundingInfoFromGeometry = !0, TV._boundingInfo = this.newChunkBoundingInfo()), VV.setVerticesBuffer(bV("position", BV, 3, nV.FLOAT, !1), !0, JV), rV(VV, JV, yV.length), VV.xb(), pV && VV.setVerticesData("aPackedLightLevels", EV(pV … [truncated]
+         UH.useBoundingInfoFromGeometry || (UH.useBoundingInfoFromGeometry = !0, UH._boundingInfo = this.newChunkBoundingInfo()), HH.setVerticesBuffer(QH("position", MH, 3, CH.FLOAT, !1), !0, AH), YH(HH, AH, hH.length), HH.qu(), tH && HH.setVerticesData("aPackedLightLevels", WH(tH … [truncated]
```

#### 3565. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26556` → after: `L27538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27538) · [Before (L26556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26556)

```diff
-   38573: (VV, eV, xV) => {
+   38269: (HH, BH, LH) => {
```

#### 3566. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26558-L26561` → after: `L27540-L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27540-L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27540-L27543) · [Before (L26558-L26561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26558-L26561)

```diff
-       b: () => oV,
-       f: () => WV,
-       g: () => RV,
-       k: () => GV
+       c: () => NH,
+       d: () => fH,
+       h: () => lH,
+       l: () => IH
```

#### 3567. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26565` → after: `L27547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27547) · [Before (L26565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26565)

```diff
-         this.Ur = new Float64Array(54), this.useSeed = !1, this.seed = null
+         this.aG = new Float64Array(54), this.useSeed = !1, this.seed = null
```

#### 3568. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26577` → after: `L27559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27559) · [Before (L26577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26577)

```diff
-         Ur: VV.Ur,
+         aG: HH.aG,
```

#### 3569. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26584` → after: `L27566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27566) · [Before (L26584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26584)

```diff
-         this.enabled = !0, this.ZZ = new WeakMap, this.inFlight = new WeakMap
+         this.enabled = !0, this.hX = new WeakMap, this.inFlight = new WeakMap
```

#### 3570. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26587-L26590` → after: `L27569-L27572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27569-L27572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27569-L27572) · [Before (L26587-L26590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26587-L26590)

```diff
-         const JV = this.ZZ.get(VV);
-         return !!JV && (JV.Gk !== eV ? (this.ZZ.delete(VV), !1) : this.enabled && function(VV, eV) {
-           const xV = VV.Ur,
-             JV = eV.Ur;
+         const AH = this.hX.get(HH);
+         return !!AH && (AH.Gu !== BH ? (this.hX.delete(HH), !1) : this.enabled && function(HH, BH) {
+           const LH = HH.aG,
+             AH = BH.aG;
```

#### 3571. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26603-L26604` → after: `L27585-L27586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27585-L27586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27585-L27586) · [Before (L26603-L26604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26603-L26604)

```diff
-         const xV = this.ZZ.get(VV);
-         if (xV && xV.Gk === eV) return xV.inputs.seed
+         const LH = this.hX.get(HH);
+         if (LH && LH.Gu === BH) return LH.inputs.seed
```

#### 3572. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26615` → after: `L27597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27597) · [Before (L26615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26615)

```diff
-           if (this.inFlight.delete(VV), "clientBfs" === xV) return void this.ZZ.set(VV, {
+           if (this.inFlight.delete(HH), "clientBfs" === LH) return void this.hX.set(HH, {
```

#### 3573. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26617` → after: `L27599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27599) · [Before (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26617)

```diff
-             Gk: JV
+             Gu: AH
```

#### 3574. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26619-L26620` → after: `L27601-L27602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27601-L27602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27601-L27602) · [Before (L26619-L26620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26619-L26620)

```diff
-           const eV = this.ZZ.get(VV);
-           if ("reused" === xV && eV) return void this.ZZ.set(VV, {
+           const BH = this.hX.get(HH);
+           if ("reused" === LH && BH) return void this.hX.set(HH, {
```

#### 3575. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26622` → after: `L27604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27604) · [Before (L26622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26622)

```diff
-             Gk: JV
+             Gu: AH
```

#### 3576. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26625` → after: `L27607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27607) · [Before (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26625)

```diff
-         this.ZZ.delete(VV)
+         this.hX.delete(HH)
```

#### 3577. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26628-L26630` → after: `L27610-L27612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27610-L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27610-L27612) · [Before (L26628-L26630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26628-L26630)

```diff
-     var yV = xV(3187),
-       pV = xV(3189),
-       QV = xV(38582);
+     var hH = LH(3157),
+       tH = LH(3166),
+       zH = LH(38274);
```

#### 3578. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26643-L26645` → after: `L27625-L27627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27625-L27627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27625-L27627) · [Before (L26643-L26645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26643-L26645)

```diff
-     var wV = xV(38589),
-       ZV = xV(38601),
-       vV = xV(38612);
+     var EH = LH(38280),
+       XH = LH(38291),
+       GH = LH(38299);
```

#### 3579. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26649` → after: `L27631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27631) · [Before (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26649)

```diff
-         this.material = null, this.visibility = 1, this.vertexCount = 0, this.metadata = {}, this.hT = rV, this.ik = !1
+         this.material = null, this.visibility = 1, this.vertexCount = 0, this.metadata = {}, this.jU = YH, this.Mu = !1
```

#### 3580. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26652` → after: `L27634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27634) · [Before (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26652)

```diff
-         return this.ik
+         return this.Mu
```

#### 3581. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26655` → after: `L27637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27637) · [Before (L26655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26655)

```diff
-         this.ik = !0
+         this.Mu = !0
```

#### 3582. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26658-L26659` → after: `L27640-L27641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27640-L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27640-L27641) · [Before (L26658-L26659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26658-L26659)

```diff
-     var bV = xV(38621),
-       EV = xV(38630);
+     var QH = LH(38302),
+       WH = LH(38304);
```

#### 3583. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26733-L26736` → after: `L27715-L27718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27715-L27718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27715-L27718) · [Before (L26733-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26733-L26736)

```diff
-     var jV = xV(38639),
-       qV = xV(38647);
-     var tV = xV(38650),
-       FV = xV(38653);
+     var xH = LH(38313),
+       vH = LH(38319);
+     var PH = LH(38325),
+       TH = LH(38327);
```

#### 3584. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26741` → after: `L27723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27723) · [Before (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26741)

```diff
-         this.budget = VV, this.hn = new Map, this.heldBytes = 0, this.jobs = 0, this.forgotten = [], this.forgetAll = !1
+         this.budget = HH, this.LX = new Map, this.heldBytes = 0, this.jobs = 0, this.forgotten = [], this.forgetAll = !1
```

#### 3585. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26757-L26758` → after: `L27739-L27740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27739-L27740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27739-L27740) · [Before (L26757-L26758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26757-L26758)

```diff
-           const ZV = QV.kb;
-           let vV = this.hn.get(wV);
+           const XH = zH.au;
+           let GH = this.LX.get(EH);
```

#### 3586. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26768` → after: `L27750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27750) · [Before (L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26768)

```diff
-           }, this.hn.set(wV, vV)), vV.version = ZV, vV.bytes = rV.byteLength, vV.used = JV, this.heldBytes += rV.byteLength, UV.push(wV), yV.push(rV)
+           }, this.LX.set(EH, GH)), GH.version = XH, GH.bytes = YH.byteLength, GH.used = AH, this.heldBytes += YH.byteLength, SH.push(EH), hH.push(YH)
```

#### 3587. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26770` → after: `L27752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27752) · [Before (L26770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26770)

```diff
-         this.heldBytes > this.budget && this.hn.size > TV && this.forgetOldest(JV);
+         this.heldBytes > this.budget && this.LX.size > UH && this.forgetOldest(AH);
```

#### 3588. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26781` → after: `L27763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27763) · [Before (L26781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26781)

```diff
-         const eV = [...this.hn].sort(((VV, eV) => {
+         const BH = [...this.LX].sort(((HH, BH) => {
```

#### 3589. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26790` → after: `L27772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27772) · [Before (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26790)

```diff
-           this.hn.delete(xV), this.heldBytes -= JV, this.forgotten.push(xV)
+           this.LX.delete(LH), this.heldBytes -= AH, this.forgotten.push(LH)
```

#### 3590. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26794-L26795` → after: `L27776-L27777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27776-L27777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27776-L27777) · [Before (L26794-L26795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26794-L26795)

```diff
-         const eV = this.hn.get(VV);
-         eV && (this.hn.delete(VV), this.heldBytes -= eV.bytes, this.forgotten.push(VV))
+         const BH = this.LX.get(HH);
+         BH && (this.LX.delete(HH), this.heldBytes -= BH.bytes, this.forgotten.push(HH))
```

#### 3591. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26798` → after: `L27780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27780) · [Before (L26798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26798)

```diff
-         this.hn.clear(), this.heldBytes = 0, this.forgotten = [], this.forgetAll = !0
+         this.LX.clear(), this.heldBytes = 0, this.forgotten = [], this.forgetAll = !0
```

#### 3592. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26801` → after: `L27783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27783) · [Before (L26801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26801)

```diff
-         return this.hn.size
+         return this.LX.size
```

#### 3593. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26810` → after: `L27792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27792) · [Before (L26810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26810)

```diff
-         this.Jv = VV, this.hn = new Map, this.job = 1, this.forgotten = [], this.forgetAll = !1
+         this.aX = HH, this.LX = new Map, this.job = 1, this.forgotten = [], this.forgetAll = !1
```

#### 3594. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26813` → after: `L27795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27795) · [Before (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26813)

```diff
-         const xV = this.hn.get(VV);
+         const LH = this.LX.get(HH);
```

#### 3595. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26823-L26825` → after: `L27805-L27807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27805-L27807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27805-L27807) · [Before (L26823-L26825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26823-L26825)

```diff
-           }] of this.hn) {
-           if (this.hn.size <= this.Jv) break;
-           YV !== this.job && (this.hn.delete(JV), this.forgotten.push(JV))
+           }] of this.LX) {
+           if (this.LX.size <= this.aX) break;
+           rH !== this.job && (this.LX.delete(AH), this.forgotten.push(AH))
```

#### 3596. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26834` → after: `L27816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27816) · [Before (L26834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26834)

```diff
-         eV.job = this.job, this.hn.delete(VV), this.hn.set(VV, eV)
+         BH.job = this.job, this.LX.delete(HH), this.LX.set(HH, BH)
```

#### 3597. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26837` → after: `L27819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27819) · [Before (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26837)

```diff
-         this.hn.delete(VV) && this.forgotten.push(VV)
+         this.LX.delete(HH) && this.forgotten.push(HH)
```

#### 3598. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26841` → after: `L27823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27823) · [Before (L26841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26841)

```diff
-         (null === (xV = this.hn.get(VV)) || void 0 === xV ? void 0 : xV.tag) === eV && this.drop(VV)
+         (null === (LH = this.LX.get(HH)) || void 0 === LH ? void 0 : LH.tag) === BH && this.drop(HH)
```

#### 3599. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26844` → after: `L27826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27826) · [Before (L26844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26844)

```diff
-         this.hn.clear(), this.forgotten = [], this.forgetAll = !0
+         this.LX.clear(), this.forgotten = [], this.forgetAll = !0
```

#### 3600. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26847` → after: `L27829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27829) · [Before (L26847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26847)

```diff
-         return this.hn.size
+         return this.LX.size
```

#### 3601. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26893` → after: `L27875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27875) · [Before (L26893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26893)

```diff
-         return null !== (VV = null === (eV = this.busynessTracker) || void 0 === eV ? void 0 : eV.totalInFlightCount) && void 0 !== VV ? VV : 0
+         return null !== (HH = null === (BH = this.busynessTracker) || void 0 === BH ? void 0 : BH.totalInFlightCount) && void 0 !== HH ? HH : 0
```

#### 3602. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26909` → after: `L27891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27891) · [Before (L26909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26909)

```diff
-         this.iv = VV, this.terrainMatManager = eV, this.babylon = xV, this.opts = JV, this.allTerrainMaterials = void 0, this._defaultMaterial = void 0, this.meshBuilder = void 0, this.workers = [], this.busynessTracker = null, this.workersStopped = !1, this.workerScanStartIndex  … [truncated]
+         this.bG = HH, this.terrainMatManager = BH, this.babylon = LH, this.opts = AH, this.allTerrainMaterials = void 0, this._defaultMaterial = void 0, this.meshBuilder = void 0, this.workers = [], this.busynessTracker = null, this.workersStopped = !1, this.workerScanStartIndex  … [truncated]
```

#### 3603. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26912` → after: `L27894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27894) · [Before (L26912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26912)

```diff
-             return !(null === (eV = this.currentChunkOf(VV)) || void 0 === eV || !eV.bb)
+             return !(null === (BH = this.currentChunkOf(HH)) || void 0 === BH || !BH.Ju)
```

#### 3604. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26921` → after: `L27903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27903) · [Before (L26921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26921)

```diff
-         }), this._nextMeshJobId = 0, this._meshJobsDone = 0, this.queueBudget = new nV, this._serverLightCompletionsSinceReset = 0, this._clientLightCompletionsSinceReset = 0, this._editCausedLightCompletionsSinceReset = 0, this._reusedLightCompletionsSinceReset = 0, this._client … [truncated]
+         }), this._nextMeshJobId = 0, this._meshJobsDone = 0, this.queueBudget = new CH, this._serverLightCompletionsSinceReset = 0, this._clientLightCompletionsSinceReset = 0, this._editCausedLightCompletionsSinceReset = 0, this._reusedLightCompletionsSinceReset = 0, this._client … [truncated]
```

#### 3605. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26925` → after: `L27907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27907) · [Before (L26925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26925)

```diff
-           Ok: null,
+           Ku: null,
```

#### 3606. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26927-L26930` → after: `L27909-L27912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27909-L27912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27909-L27912) · [Before (L26927-L26930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26927-L26930)

```diff
-           Rk: !1,
-           Mk: !1,
-           Yk: null,
-           Ck: null
+           uu: !1,
+           Eu: !1,
+           jY: null,
+           xu: null
```

#### 3607. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26934-L26936` → after: `L27916-L27918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27916-L27918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27916-L27918) · [Before (L26934-L26936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26934-L26936)

```diff
-           return (null === (eV = xV) || void 0 === eV ? void 0 : eV.version) !== VV.kb && (xV = {
-             version: VV.kb,
-             runs: this.iv.cZ.Bb.encode(VV.Ur)
+           return (null === (BH = LH) || void 0 === BH ? void 0 : BH.version) !== HH.au && (LH = {
+             version: HH.au,
+             runs: this.bG.cX.pu.encode(HH.aG)
```

#### 3608. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26938` → after: `L27920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27920) · [Before (L26938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26938)

```diff
-         }, this.allTerrainMaterials = eV.allMaterials, this._defaultMaterial = eV._defaultMat, this.PZ = null !== (YV = JV.PZ) && void 0 !== YV ? YV : 32
+         }, this.allTerrainMaterials = BH.allMaterials, this._defaultMaterial = BH._defaultMat, this.xX = null !== (rH = AH.xX) && void 0 !== rH ? rH : 32
```

#### 3609. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26944-L26952` → after: `L27926-L27934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27926-L27934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27926-L27934) · [Before (L26944-L26952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26944-L26952)

```diff
-           jZ: YV,
-           gZ: UV
-         } = this.iv;
-         this.chunkStandIns = !(null === (VV = UV.jb) || void 0 === VV || !VV.terrain);
-         const yV = YV.ar,
-           pV = UV.qb,
-           QV = UV.Kk === UV.mk[0],
-           nV = YV.tb,
-           ZV = YV.Fb,
+           YX: rH,
+           mX: SH
+         } = this.bG;
+         this.chunkStandIns = !(null === (HH = SH.yu) || void 0 === HH || !HH.terrain);
+         const hH = rH.VY,
+           tH = SH.HQ,
+           zH = SH.ku === SH.Ou[0],
+           CH = rH.BQ,
+           XH = rH.LQ,
```

#### 3610. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26954-L26958` → after: `L27936-L27940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27936-L27940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27936-L27940) · [Before (L26954-L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26954-L26958)

```diff
-           rV = UV.mk,
-           kV = UV.Kk,
-           EV = YV.Tb,
-           BV = YV.Pb,
-           jV = this.iv.Xk ? function(VV, eV) {
+           YH = SH.Ou,
+           uH = SH.ku,
+           WH = rH.AQ,
+           MH = rH.rQ,
+           xH = this.bG.Cu ? function(HH, BH) {
```

#### 3611. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26967-L26969` → after: `L27949-L27951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27949-L27951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27949-L27951) · [Before (L26967-L26969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26967-L26969)

```diff
-           }(ZV, YV.yb) : null,
-           tV = (UV.jb ? !(null === (eV = UV.jb.terrain) || void 0 === eV || !eV.faceGroups) : UV.Ab()) ? this.listFaceGroupTerrainIds(vV) : [],
-           FV = UV.jb ? bV.o : bV.c;
+           }(XH, rH.ju) : null,
+           PH = (SH.yu ? !(null === (BH = SH.yu.terrain) || void 0 === BH || !BH.faceGroups) : SH.SQ()) ? this.listFaceGroupTerrainIds(GH) : [],
+           TH = SH.yu ? QH.t : QH.c;
```

#### 3612. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26971-L26973` → after: `L27953-L27955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27953-L27955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27953-L27955) · [Before (L26971-L26973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26971-L26973)

```diff
-         (UV.jb ? !(null === (xV = UV.jb.terrain) || void 0 === xV || !xV.visibilityGraph) : UV.Ab()) && (TV = this.listVisOccluders(nV, ZV, vV), this.visibility = new qV.e(TV, nV, ((VV, eV, xV, JV) => this.settledAirStamp(VV, eV, xV, JV)), this.visAirSource()), this.visibility.bu … [truncated]
-         const PV = UV.jb ? null : UV.engine,
-           AV = !!PV && (null !== (JV = PV.Nb) && void 0 !== JV ? JV : 0) >= 2;
+         (SH.yu ? !(null === (LH = SH.yu.terrain) || void 0 === LH || !LH.visibilityGraph) : SH.SQ()) && (UH = this.listVisOccluders(CH, XH, GH), this.visibility = new vH.e(UH, CH, ((HH, BH, LH, AH) => this.settledAirStamp(HH, BH, LH, AH)), this.visAirSource()), this.visibility.bu … [truncated]
+         const VH = SH.yu ? null : SH.engine,
+           OH = !!VH && (null !== (AH = VH.hQ) && void 0 !== AH ? AH : 0) >= 2;
```

#### 3613. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26985` → after: `L27967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27967) · [Before (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26985)

```diff
-         this.meshBuilder = new wV.e(this.terrainMatManager, this.babylon, this.PZ, AV);
+         this.meshBuilder = new EH.e(this.terrainMatManager, this.babylon, this.xX, OH);
```

#### 3614. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26987-L26989` → after: `L27969-L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27969-L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27969-L27971) · [Before (L26987-L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26987-L26989)

```diff
-           Xb: NV,
-           Mb: XV,
-           zb: MV
+           tQ: bH,
+           zQ: kH,
+           CQ: mH
```

#### 3615. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26991` → after: `L27973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27973) · [Before (L26991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26991)

```diff
-           PZ: this.PZ,
+           xX: this.xX,
```

#### 3616. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26998-L26999` → after: `L27980-L27981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27980-L27981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27980-L27981) · [Before (L26998-L26999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L26998-L26999)

```diff
-           mk: rV,
-           Kk: kV,
+           Ou: YH,
+           ku: uH,
```

#### 3617. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27010` → after: `L27992-L27993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27992-L27993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L27992-L27993) · [Before (L27010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27010)

```diff
-           keptLightStates: this.opts.keptLightStates
+           keptLightStates: this.opts.keptLightStates,
+           fluidLookup: this.opts.fluidMeshColumn
```

#### 3618. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27019` → after: `L28002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28002) · [Before (L27019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27019)

```diff
-         const eV = null !== (VV = this.opts.meshingWorkerCount) && void 0 !== VV ? VV : 1;
+         const BH = null !== (HH = this.opts.meshingWorkerCount) && void 0 !== HH ? HH : 1;
```

#### 3619. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27030` → after: `L28013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28013) · [Before (L27030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27030)

```diff
-         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
+         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
```

#### 3620. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27034` → after: `L28017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28017) · [Before (L27034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27034)

```diff
-         for (const xV of new Set(Object.values(VV)))(0, bV.p)(this.terrainMatManager.getModel(xV)) && eV.push(xV);
+         for (const LH of new Set(Object.values(HH)))(0, QH.v)(this.terrainMatManager.getModel(LH)) && BH.push(LH);
```

#### 3621. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27047` → after: `L28030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28030) · [Before (L27047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27047)

```diff
-               const VV = this.iv.jZ.Wb(JV),
+               const HH = this.bG.YX.XQ(AH),
```

#### 3622. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27050` → after: `L28033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28033) · [Before (L27050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27050)

```diff
-               pV = !!VV && (0, jV.l)(UV, (0, FV.m)(VV), !!VV.Rb), YV.set(JV, pV)
+               tH = !!HH && (0, xH.q)(SH, (0, TH.i)(HH), !!HH.GQ), rH.set(AH, tH)
```

#### 3623. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27062-L27063` → after: `L28045-L28046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28045-L28046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28045-L28046) · [Before (L27062-L27063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27062-L27063)

```diff
-         const UV = VV.Ck,
-           yV = (null !== (eV = UV.get(-1, 0, 0)) && void 0 !== eV && eV.Ur ? 1 : 0) | (null !== (xV = UV.get(0, -1, 0)) && void 0 !== xV && xV.Ur ? 2 : 0) | (null !== (JV = UV.get(0, 0, -1)) && void 0 !== JV && JV.Ur ? 4 : 0),
+         const SH = HH.xu,
+           hH = (null !== (BH = SH.get(-1, 0, 0)) && void 0 !== BH && BH.aG ? 1 : 0) | (null !== (LH = SH.get(0, -1, 0)) && void 0 !== LH && LH.aG ? 2 : 0) | (null !== (AH = SH.get(0, 0, -1)) && void 0 !== AH && AH.aG ? 4 : 0),
```

#### 3624. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27067-L27069` → after: `L28050-L28052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28050-L28052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28050-L28052) · [Before (L27067-L27069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27067-L27069)

```diff
-           const eV = VV.Ur.data;
-           QV = (0, jV.p)(eV, VV.Rk, VV.size, YV.occluders, this.visScratch, VV.Yk), this.visKept.set(VV, {
-             voxelVersion: VV.kb,
+           const BH = HH.aG.data;
+           zH = (0, xH.r)(BH, HH.uu, HH.size, rH.occluders, this.visScratch, HH.jY), this.visKept.set(HH, {
+             voxelVersion: HH.au,
```

#### 3625. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27077` → after: `L28060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28060) · [Before (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27077)

```diff
-         return eV && eV.voxelVersion === VV.kb ? eV.graphs : void 0
+         return BH && BH.voxelVersion === HH.au ? BH.graphs : void 0
```

#### 3626. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27084` → after: `L28067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28067) · [Before (L27084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27084)

```diff
-         void 0 === UV ? UV = YV && null !== (yV = YV.graphs) && void 0 !== yV ? yV : null : YV && this.visKept.set(VV, {
+         void 0 === SH ? SH = rH && null !== (hH = rH.graphs) && void 0 !== hH ? hH : null : rH && this.visKept.set(HH, {
```

#### 3627. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27088` → after: `L28071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28071) · [Before (L27088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27088)

```diff
-         this.visibility.setChunk(VV.i, VV.j, VV.k, UV, xV, null !== (JV = null === YV || void 0 === YV ? void 0 : YV.stamps) && void 0 !== JV ? JV : zV)
+         this.visibility.setChunk(HH.i, HH.j, HH.k, SH, LH, null !== (AH = null === rH || void 0 === rH ? void 0 : rH.stamps) && void 0 !== AH ? AH : oH)
```

#### 3628. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27091` → after: `L28074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28074) · [Before (L27091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27091)

```diff
-         return this.chunkObjectId(VV) * 2 ** 24 + VV.gb[eV] % 2 ** 24
+         return this.chunkObjectId(HH) * 2 ** 24 + HH.YQ[BH] % 2 ** 24
```

#### 3629. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27099` → after: `L28082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28082) · [Before (L27099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27099)

```diff
-           xV = VV.Ck,
+           LH = HH.xu,
```

#### 3630. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27104` → after: `L28087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28087) · [Before (L27104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27104)

```diff
-           eV[3 + YV] = null !== xV && void 0 !== xV && xV.Ur ? this.visStamp(xV, YV) : -1
+           BH[3 + rH] = null !== LH && void 0 !== LH && LH.aG ? this.visStamp(LH, rH) : -1
```

#### 3631. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27111` → after: `L28094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28094) · [Before (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27111)

```diff
-         null !== xV && (VV.Rk || eV) && xV(VV.i, VV.j, VV.k)
+         null !== LH && (HH.uu || BH) && LH(HH.i, HH.j, HH.k)
```

#### 3632. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27114-L27115` → after: `L28097-L28098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28097-L28098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28097-L28098) · [Before (L27114-L27115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27114-L27115)

```diff
-         const YV = this.iv.cZ.Cb.ab(VV, eV, xV);
-         return !YV || !YV.Rk || YV.Db || YV.nb ? -1 : this.visStamp(YV, JV)
+         const rH = this.bG.cX.WQ.MQ(HH, BH, LH);
+         return !rH || !rH.uu || rH.uQ || rH.Du ? -1 : this.visStamp(rH, AH)
```

#### 3633. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27118` → after: `L28101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28101) · [Before (L27118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27118)

```diff
-         const VV = this.iv.cZ.Cb;
+         const HH = this.bG.cX.WQ;
```

#### 3634. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27121` → after: `L28104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28104) · [Before (L27121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27121)

```diff
-           chunkAt: (eV, xV, JV) => VV.ab(eV, xV, JV),
+           chunkAt: (BH, LH, AH) => HH.MQ(BH, LH, AH),
```

#### 3635. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27125` → after: `L28108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28108) · [Before (L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27125)

```diff
-             if (!JV.Rk || JV.Db || JV.nb) xV[0] = xV[1] = xV[2] = -1;
+             if (!AH.uu || AH.uQ || AH.Du) LH[0] = LH[1] = LH[2] = -1;
```

#### 3636. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27127` → after: `L28110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28110) · [Before (L27127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27127)

```diff
-               for (let YV = 0; YV < 3; YV++) xV[YV] = eV * 2 ** 24 + JV.gb[YV] % 2 ** 24
+               for (let rH = 0; rH < 3; rH++) LH[rH] = BH * 2 ** 24 + AH.YQ[rH] % 2 ** 24
```

#### 3637. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27152` → after: `L28135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28135) · [Before (L27152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27152)

```diff
-           null === (JV = this.meshProbe) || void 0 === JV || JV.received(YV), this.busynessTracker.onJobCompleted(VV), this.jobsInFlight[VV].delete(YV.meshJobId), this._meshJobsDone++, this.queueBudget.jobDone(YV.jobMs), this.refillReplacements(VV), !1 === YV.lightOnlyUpdate && ( … [truncated]
+           null === (AH = this.meshProbe) || void 0 === AH || AH.received(rH), this.busynessTracker.onJobCompleted(HH), this.jobsInFlight[HH].delete(rH.meshJobId), this._meshJobsDone++, this.queueBudget.jobDone(rH.jobMs), this.refillReplacements(HH), !1 === rH.lightOnlyUpdate && ( … [truncated]
```

#### 3638. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27168` → after: `L28151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28151) · [Before (L27168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27168)

```diff
-         return ++this.workerScanStartIndex >= xV && (this.workerScanStartIndex = 0), VV >= 0 && VV < xV && JV(VV) === yV ? VV : UV
+         return ++this.workerScanStartIndex >= LH && (this.workerScanStartIndex = 0), HH >= 0 && HH < LH && AH(HH) === hH ? HH : SH
```

#### 3639. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27173` → after: `L28156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28156) · [Before (L27173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27173)

```diff
-         console.warn(`Meshing worker ${VV} was lost (${xV}): queueing its ${JV.size} jobs in flight again`);
+         console.warn(`Meshing worker ${HH} was lost (${LH}): queueing its ${AH.size} jobs in flight again`);
```

#### 3640. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27176` → after: `L28159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28159) · [Before (L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27176)

```diff
-           this.busynessTracker.onJobCancelled(VV), null === (YV = this.meshProbe) || void 0 === YV || YV.failed(UV), yV.nb === UV && this.iv.cZ.Cb.ab(yV.i, yV.j, yV.k) === yV && (yV.nb = 0, yV.Db = !0, yV.cb = !0, this.iv.cZ.ib(yV, !0))
+           this.busynessTracker.onJobCancelled(HH), null === (rH = this.meshProbe) || void 0 === rH || rH.failed(SH), hH.Du === SH && this.bG.cX.WQ.MQ(hH.i, hH.j, hH.k) === hH && (hH.Du = 0, hH.uQ = !0, hH.vQ = !0, this.bG.cX.QQ(hH, !0))
```

#### 3641. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27187-L27188` → after: `L28170-L28171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28170-L28171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28170-L28171) · [Before (L27187-L27188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27187-L27188)

```diff
-           JV = null !== (eV = this.workerReplacements[VV]) && void 0 !== eV ? eV : 0;
-         if (JV >= 3) this.retireWorker(VV, `3 replacements used: ${xV}`);
+           AH = null !== (BH = this.workerReplacements[HH]) && void 0 !== BH ? BH : 0;
+         if (AH >= 3) this.retireWorker(HH, `3 replacements used: ${LH}`);
```

#### 3642. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27194` → after: `L28177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28177) · [Before (L27194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27194)

```diff
-             return void this.retireWorker(VV, `no new worker (${YV instanceof Error?YV.message:String(YV)}): ${xV}`)
+             return void this.retireWorker(HH, `no new worker (${rH instanceof Error?rH.message:String(rH)}): ${LH}`)
```

#### 3643. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27196` → after: `L28179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28179) · [Before (L27196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27196)

```diff
-           this.lostWorkers.delete(VV), this.iv.hb(`Meshing worker ${VV} replaced (${JV+1} of 3): ${xV}`)
+           this.lostWorkers.delete(HH), this.bG.PQ(`Meshing worker ${HH} replaced (${AH+1} of 3): ${LH}`)
```

#### 3644. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27202-L27203` → after: `L28185-L28186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28185-L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28185-L28186) · [Before (L27202-L27203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27202-L27203)

```diff
-         const xV = (null !== (eV = this.jobsTowardRefill[VV]) && void 0 !== eV ? eV : 0) + 1;
-         xV < 1e3 ? this.jobsTowardRefill[VV] = xV : (this.jobsTowardRefill[VV] = 0, this.workerReplacements[VV]--)
+         const LH = (null !== (BH = this.jobsTowardRefill[HH]) && void 0 !== BH ? BH : 0) + 1;
+         LH < 1e3 ? this.jobsTowardRefill[HH] = LH : (this.jobsTowardRefill[HH] = 0, this.workerReplacements[HH]--)
```

#### 3645. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27206` → after: `L28189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28189) · [Before (L27206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27206)

```diff
-         if (this.workers[VV].terminate(), this.retiredWorkers.add(VV), this.iv.hb(`Meshing worker ${VV} is out for good, ${eV}`), this.retiredWorkers.size === this.workers.length) {
+         if (this.workers[HH].terminate(), this.retiredWorkers.add(HH), this.bG.PQ(`Meshing worker ${HH} is out for good, ${BH}`), this.retiredWorkers.size === this.workers.length) {
```

#### 3646. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27212` → after: `L28195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28195) · [Before (L27212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27212)

```diff
-         null !== eV.message && this.iv.hb(`Meshing worker ${VV}: ${eV.message}`);
+         null !== BH.message && this.bG.PQ(`Meshing worker ${HH}: ${BH.message}`);
```

#### 3647. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27217` → after: `L28200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28200) · [Before (L27217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27217)

```diff
-           const VV = null !== (JV = eV.message) && void 0 !== JV ? JV : `Wasm light failure: ${xV}`,
+           const HH = null !== (AH = BH.message) && void 0 !== AH ? AH : `Wasm light failure: ${LH}`,
```

#### 3648. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27219` → after: `L28202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28202) · [Before (L27219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27219)

```diff
-           this.iv.lb(new Error(VV), {
+           this.bG.TQ(new Error(HH), {
```

#### 3649. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27222` → after: `L28205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28205) · [Before (L27222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27222)

```diff
-             deviceMemory: String(null !== yV && void 0 !== yV ? yV : "unreported")
+             deviceMemory: String(null !== hH && void 0 !== hH ? hH : "unreported")
```

#### 3650. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27229` → after: `L28212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28212) · [Before (L27229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27229)

```diff
-         eV.lost && this.markLost(VV, null !== (yV = eV.message) && void 0 !== yV ? yV : "no message")
+         BH.lost && this.markLost(HH, null !== (hH = BH.message) && void 0 !== hH ? hH : "no message")
```

#### 3651. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27243-L27247` → after: `L28226-L28230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28226-L28230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28226-L28230) · [Before (L27243-L27247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27243-L27247)

```diff
-         this.iv.hb(`Meshing worker ${VV} failed chunk (${YV}, ${UV}, ${pV}): ${nV}`), this.jobEnded(VV, QV), null === (xV = this.meshProbe) || void 0 === xV || xV.failed(QV), wV ? this.lightUnused(YV, UV, pV, QV) : (this.chunkMirrors[VV].reset(), this.lightMirrors[VV].reset()), Z … [truncated]
-         const kV = this.iv.cZ.Cb.ab(YV, UV, pV);
-         if (!kV || kV.nb !== QV) return;
-         kV.nb = 0, kV.Db = !0, kV.cb = !0;
-         const bV = null !== (JV = this.meshFailures.get(kV)) && void 0 !== JV ? JV : {
+         this.bG.PQ(`Meshing worker ${HH} failed chunk (${rH}, ${SH}, ${tH}): ${CH}`), this.jobEnded(HH, zH), null === (LH = this.meshProbe) || void 0 === LH || LH.failed(zH), EH ? this.lightUnused(rH, SH, tH, zH) : (this.chunkMirrors[HH].reset(), this.lightMirrors[HH].reset()), X … [truncated]
+         const uH = this.bG.cX.WQ.MQ(rH, SH, tH);
+         if (!uH || uH.Du !== zH) return;
+         uH.Du = 0, uH.uQ = !0, uH.vQ = !0;
+         const QH = null !== (AH = this.meshFailures.get(uH)) && void 0 !== AH ? AH : {
```

#### 3652. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27254-L27256` → after: `L28237-L28239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28237-L28239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28237-L28239) · [Before (L27254-L27256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27254-L27256)

```diff
-           const VV = bV.lostMesher >= 2 ? `lost its worker's mesher ${bV.lostMesher} times` : bV.refused >= 6 ? `was refused memory ${bV.refused} times` : `failed ${bV.failed} times in a row`;
-           this.iv.hb(`Meshing chunk (${YV}, ${UV}, ${pV}) ${VV}, so it is dropped until it reloads: ${nV}`)
-         } else this.meshFailures.set(kV, bV), this.iv.cZ.ib(kV, !0)
+           const HH = QH.lostMesher >= 2 ? `lost its worker's mesher ${QH.lostMesher} times` : QH.refused >= 6 ? `was refused memory ${QH.refused} times` : `failed ${QH.failed} times in a row`;
+           this.bG.PQ(`Meshing chunk (${rH}, ${SH}, ${tH}) ${HH}, so it is dropped until it reloads: ${CH}`)
+         } else this.meshFailures.set(uH, QH), this.bG.cX.QQ(uH, !0)
```

#### 3653. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27259` → after: `L28242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28242) · [Before (L27259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27259)

```diff
-         this.droppedChunks.add(VV), VV.Db = !1, VV.cb = !1, this.rb(VV)
+         this.droppedChunks.add(HH), HH.uQ = !1, HH.vQ = !1, this.Zu(HH)
```

#### 3654. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27275-L27276` → after: `L28258-L28259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28258-L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28258-L28259) · [Before (L27275-L27276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27275-L27276)

```diff
-           cZ: eV
-         } = this.iv, {
+           cX: BH
+         } = this.bG, {
```

#### 3655. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27280-L27281` → after: `L28263-L28264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28263-L28264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28263-L28264) · [Before (L27280-L27281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27280-L27281)

```diff
-         } = VV, UV = eV.Cb.ab(xV, JV, YV);
-         return UV && UV.nb === VV.meshJobId ? eV.fb.includes(xV, JV, YV) || eV.Kb.includes(xV, JV, YV) ? null : UV : null
+         } = HH, SH = BH.WQ.MQ(LH, AH, rH);
+         return SH && SH.Du === HH.meshJobId ? BH.VQ.includes(LH, AH, rH) || BH.OQ.includes(LH, AH, rH) ? null : SH : null
```

#### 3656. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27284` → after: `L28267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28267) · [Before (L27284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27284)

```diff
-         VV.computedLightData && (0, yV.z)(VV.computedLightData), this.lightUnused(VV.i, VV.j, VV.k, VV.meshJobId)
+         HH.computedLightData && (0, hH.A)(HH.computedLightData), this.lightUnused(HH.i, HH.j, HH.k, HH.meshJobId)
```

#### 3657. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27287` → after: `L28270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28270) · [Before (L27287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27287)

```diff
-         const YV = this.iv.cZ.Cb.ab(VV, eV, xV);
+         const rH = this.bG.cX.WQ.MQ(HH, BH, LH);
```

#### 3658. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27295` → after: `L28278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28278) · [Before (L27295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27295)

```diff
-           if (this.remeshesLostContext && (0, tV.c)(this.iv.gZ.engine)) return this.dropResult(VV), eV.nb = 0, void this.chunksToRemeshOnRestore.add(eV);
+           if (this.remeshesLostContext && (0, PH.e)(this.bG.mX.engine)) return this.dropResult(HH), BH.Du = 0, void this.chunksToRemeshOnRestore.add(BH);
```

#### 3659. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27299` → after: `L28282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28282) · [Before (L27299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27299)

```diff
-             this.iv.hb(`Applying the mesh of chunk (${VV.i}, ${VV.j}, ${VV.k}) failed`, xV)
+             this.bG.PQ(`Applying the mesh of chunk (${HH.i}, ${HH.j}, ${HH.k}) failed`, LH)
```

#### 3660. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27308` → after: `L28291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28291) · [Before (L27308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27308)

```diff
-         if (VV.nb = 0, this.meshFailures.delete(VV), VV.Hb = !!YV || VV.Mk || VV.Rk, !0 === eV.lightOnlyUpdate) this.assignLightOnlyData(VV, eV.lightDataArrays) || (VV.Db = !0, VV.cb = !0);
+         if (HH.Du = 0, this.meshFailures.delete(HH), HH.bQ = !!rH || HH.Eu || HH.uu, !0 === BH.lightOnlyUpdate) this.assignLightOnlyData(HH, BH.lightDataArrays) || (HH.uQ = !0, HH.vQ = !0);
```

#### 3661. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27311-L27312` → after: `L28294-L28295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28294-L28295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28294-L28295) · [Before (L27311-L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27311-L27312)

```diff
-           const xV = this.iv.cZ;
-           !xV.ub && eV.vertexDataInfo.length > 0 && (xV.ub = !0, xV.emit("ub")), this.visibility && void 0 !== eV.visNegNeighbours && this.setVisibilityFromWorker(VV, eV.visGraphs, eV.visNegNeighbours)
+           const LH = this.bG.cX;
+           !LH.kQ && BH.vertexDataInfo.length > 0 && (LH.kQ = !0, LH.emit("kQ")), this.visibility && void 0 !== BH.visNegNeighbours && this.setVisibilityFromWorker(HH, BH.visGraphs, BH.visNegNeighbours)
```

#### 3662. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27314` → after: `L28297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28297) · [Before (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27314)

```diff
-         if (VV.sb = null !== (xV = eV.faceLayout) && void 0 !== xV ? xV : null, YV && "clientBfs" === eV.lightSource || this.lightUnused(eV.i, eV.j, eV.k, eV.meshJobId), YV) {
+         if (HH.mQ = null !== (LH = BH.faceLayout) && void 0 !== LH ? LH : null, rH && "clientBfs" === BH.lightSource || this.lightUnused(BH.i, BH.j, BH.k, BH.meshJobId), rH) {
```

#### 3663. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27320-L27322` → after: `L28303-L28305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28303-L28305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28303-L28305) · [Before (L27320-L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27320-L27322)

```diff
-           this.storeAndPropagateLight(VV, YV, eV.wJ, "server" === eV.lightSource), this.lightReuse.lightStored(VV, eV.meshJobId, eV.lightSource, YV, eV.lightSeedColumnsRead), eV.lightSeedColumnsRead && (0, yV.D)(eV.lightSeedColumnsRead)
-         } else this.iv.Sb.Ib(VV);
-         VV.Db ? this.iv.cZ.ib(VV, !0) : VV.bb = !1, this.checkSkySeedAtReply(VV, !VV.Db), this.rb(VV), null === (JV = this.meshProbe) || void 0 === JV || JV.applied(VV, eV.meshJobId)
+           this.storeAndPropagateLight(HH, rH, BH.FB, "server" === BH.lightSource), this.lightReuse.lightStored(HH, BH.meshJobId, BH.lightSource, rH, BH.lightSeedColumnsRead), BH.lightSeedColumnsRead && (0, hH.C)(BH.lightSeedColumnsRead)
+         } else this.bG.oQ.IQ(HH);
+         HH.uQ ? this.bG.cX.QQ(HH, !0) : HH.Ju = !1, this.checkSkySeedAtReply(HH, !HH.uQ), this.Zu(HH), null === (AH = this.meshProbe) || void 0 === AH || AH.applied(HH, BH.meshJobId)
```

#### 3664. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27325` → after: `L28308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28308) · [Before (L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27325)

```diff
-         VV.VE.length = 0
+         HH.lQ.length = 0
```

#### 3665. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27329-L27332` → after: `L28312-L28315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28312-L28315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28312-L28315) · [Before (L27329-L27332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27329-L27332)

```diff
-         const xV = null === (eV = this.iv.gZ.jb) || void 0 === eV ? void 0 : eV.terrain;
-         VV.VE.forEach((VV => {
-           this.iv.emit("removingTerrainMesh", VV), null === xV || void 0 === xV || xV.removeChunkMesh(VV), VV.dispose()
-         })), VV.VE.length = 0, VV.sb = null
+         const LH = null === (BH = this.bG.mX.yu) || void 0 === BH ? void 0 : BH.terrain;
+         HH.lQ.forEach((HH => {
+           this.bG.emit("removingTerrainMesh", HH), null === LH || void 0 === LH || LH.removeChunkMesh(HH), HH.dispose()
+         })), HH.lQ.length = 0, HH.mQ = null
```

#### 3666. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27346` → after: `L28329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28329) · [Before (L27346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27346)

```diff
-         if (this.lazyInitMeshingObjs(), VV.nb) return !1;
+         if (this.lazyInitMeshingObjs(), HH.Du) return !1;
```

#### 3667. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27349-L27350` → after: `L28332-L28333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28332-L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28332-L28333) · [Before (L27349-L27350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27349-L27350)

```diff
-             if (!VV.Mk) return !1;
-             const eV = VV.Ck,
+             if (!HH.Eu) return !1;
+             const BH = HH.xu,
```

#### 3668. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27352` → after: `L28335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28335) · [Before (L27352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27352)

```diff
-             if (xV && !xV.Mk) return !1;
+             if (LH && !LH.Eu) return !1;
```

#### 3669. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27354` → after: `L28337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28337) · [Before (L27354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27354)

```diff
-             if (JV && !JV.Mk) return !1;
+             if (AH && !AH.Eu) return !1;
```

#### 3670. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27356` → after: `L28339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28339) · [Before (L27356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27356)

```diff
-             if (YV && !YV.Mk) return !1;
+             if (rH && !rH.Eu) return !1;
```

#### 3671. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27358-L27359` → after: `L28341-L28342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28341-L28342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28341-L28342) · [Before (L27358-L27359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27358-L27359)

```diff
-           }(VV)) return this.meshFailures.delete(VV), this.assignMeshDataToChunk(VV, []), this.setVisibilityOnThisThread(VV), VV.Hb = !0, this.iv.Sb.Ib(VV), this.checkHeldSkySeedReaders(VV), !0;
-         const YV = this.iv.gZ.eE;
+           }(HH)) return this.meshFailures.delete(HH), this.assignMeshDataToChunk(HH, []), this.setVisibilityOnThisThread(HH), HH.bQ = !0, this.bG.oQ.IQ(HH), this.checkHeldSkySeedReaders(HH), !0;
+         const rH = this.bG.mX.KQ;
```

#### 3672. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27362` → after: `L28345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28345) · [Before (L27362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27362)

```diff
-         YV && (UV = this.iv.cZ.ak(VV.i, VV.k), QV = (0, pV.I)(VV.Rk, VV.j, UV));
+         rH && (SH = this.bG.cX.vu(HH.i, HH.k), zH = (0, tH.t)(HH.uu, HH.j, SH));
```

#### 3673. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27365` → after: `L28348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28348) · [Before (L27365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27365)

```diff
-         this.providedLightEligible(VV, UV) && VV.xE && VV.Gk && (nV = VV.Gk, wV = VV.gk);
+         this.providedLightEligible(HH, SH) && HH.cQ && HH.Gu && (CH = HH.Gu, EH = HH.Qu);
```

#### 3674. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27369` → after: `L28352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28352) · [Before (L27369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27369)

```diff
-         !YV || QV || VV.Mk || nV || (rV = (0, yV.l)(VV, pV.l), ZV = function(VV, eV, xV, YV) {
+         !rH || zH || HH.Eu || CH || (YH = (0, hH.l)(HH, tH.j), XH = function(HH, BH, LH, rH) {
```

#### 3675. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27371` → after: `L28354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28354) · [Before (L27371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27371)

```diff
-             yV = UV.Ur;
+             hH = SH.aG;
```

#### 3676. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27377` → after: `L28360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28360) · [Before (L27377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27377)

```diff
-                 !UV || UV.Rk && 0 !== (JV | xV | YV) ? (yV[pV] = -1, yV[pV + 1] = -1) : (yV[pV] = eV(UV), yV[pV + 1] = UV.kb)
+                 !SH || SH.uu && 0 !== (AH | LH | rH) ? (hH[tH] = -1, hH[tH + 1] = -1) : (hH[tH] = BH(SH), hH[tH + 1] = SH.au)
```

#### 3677. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27380` → after: `L28363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28363) · [Before (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27380)

```diff
-         }(VV.Ck, this.chunkObjectIdOf, (0, pV.U)(VV.j, UV), rV), this.lightReuse.canReuse(VV, VV.Gk, ZV) && (nV = VV.Gk, wV = VV.gk, vV = !0, (0, yV.D)(rV), rV = null));
+         }(HH.xu, this.chunkObjectIdOf, (0, tH.A)(HH.j, SH), YH), this.lightReuse.canReuse(HH, HH.Gu, XH) && (CH = HH.Gu, EH = HH.Qu, GH = !0, (0, hH.C)(YH), YH = null));
```

#### 3678. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27382` → after: `L28365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28365) · [Before (L27382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27382)

```diff
-           bV = null === nV && VV.JE;
+           QH = null === CH && HH.eQ;
```

#### 3679. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27384-L27385` → after: `L28367-L28368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28367-L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28367-L28368) · [Before (L27384-L27385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27384-L27385)

```diff
-             if (!VV.Rk) return !1;
-             const eV = VV.Ck,
+             if (!HH.uu) return !1;
+             const BH = HH.xu,
```

#### 3680. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27389` → after: `L28372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28372) · [Before (L27389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27389)

```diff
-             if (YV && !YV.Rk && 0 !== YV.Yk[xV - 1]) return !1;
+             if (rH && !rH.uu && 0 !== rH.jY[LH - 1]) return !1;
```

#### 3681. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27391` → after: `L28374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28374) · [Before (L27391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27391)

```diff
-             if (UV && !UV.Rk && cV(UV.Ur.data, (xV - 1) * JV, 1, JV)) return !1;
+             if (SH && !SH.uu && RH(SH.aG.data, (LH - 1) * AH, 1, AH)) return !1;
```

#### 3682. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27393` → after: `L28376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28376) · [Before (L27393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27393)

```diff
-             if (yV && !yV.Rk && cV(yV.Ur.data, xV - 1, xV, JV)) return !1;
+             if (hH && !hH.uu && RH(hH.aG.data, LH - 1, LH, AH)) return !1;
```

#### 3683. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27395-L27396` → after: `L28378-L28379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28378-L28379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28378-L28379) · [Before (L27395-L27396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27395-L27396)

```diff
-           }(VV)) return this.meshFailures.delete(VV), this.assignMeshDataToChunk(VV, []), this.setVisibilityOnThisThread(VV), VV.Hb = !0, VV.sb = null, this.iv.Sb.Ib(VV), this.checkHeldSkySeedReaders(VV), !0;
-         const EV = this.getLeastLoadedWorkerIndex(null !== (eV = this.stateWorkerOf.get(VV)) && void 0 !== eV ? eV : -1),
+           }(HH)) return this.meshFailures.delete(HH), this.assignMeshDataToChunk(HH, []), this.setVisibilityOnThisThread(HH), HH.bQ = !0, HH.mQ = null, this.bG.oQ.IQ(HH), this.checkHeldSkySeedReaders(HH), !0;
+         const WH = this.getLeastLoadedWorkerIndex(null !== (BH = this.stateWorkerOf.get(HH)) && void 0 !== BH ? BH : -1),
```

#### 3684. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27402` → after: `L28385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28385) · [Before (L27402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27402)

```diff
-             Ok: FV,
+             Ku: TH,
```

#### 3685. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27404-L27406` → after: `L28387-L28389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28387-L28389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28387-L28389) · [Before (L27404-L27406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27404-L27406)

```diff
-             Rk: PV,
-             Mk: AV,
-             Yk: NV
+             uu: VH,
+             Eu: OH,
+             jY: bH
```

#### 3686. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27408` → after: `L28391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28391) · [Before (L27408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27408)

```diff
-         this.tempChunk.i = jV, this.tempChunk.j = qV, this.tempChunk.k = tV, this.tempChunk.Ok = FV, this.tempChunk.size = TV, this.tempChunk.Rk = PV, this.tempChunk.Mk = AV, this.tempChunk.Yk = NV, this.tempChunk.Ck = null;
+         this.tempChunk.i = xH, this.tempChunk.j = vH, this.tempChunk.k = PH, this.tempChunk.Ku = TH, this.tempChunk.size = UH, this.tempChunk.uu = VH, this.tempChunk.Eu = OH, this.tempChunk.jY = bH, this.tempChunk.xu = null;
```

#### 3687. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27418-L27420` → after: `L28401-L28403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28401-L28403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28401-L28403) · [Before (L27418-L27420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27418-L27420)

```diff
-               xV = (0, yV.k)(VV, this.iv.cZ, (VV => {
-                 const xV = this.lightTags.get(VV.Gk);
-                 return eV.holds(this.chunkObjectId(VV), xV) ? xV : 0
+               LH = (0, hH.j)(HH, this.bG.cX, (HH => {
+                 const LH = this.lightTags.get(HH.Gu);
+                 return BH.holds(this.chunkObjectId(HH), LH) ? LH : 0
```

#### 3688. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27426` → after: `L28409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28409) · [Before (L27426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27426)

```diff
-           RV = (0, yV.d)();
+           lH = (0, hH.c)();
```

#### 3689. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27429-L27430` → after: `L28412-L28413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28412-L28413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28412-L28413) · [Before (L27429-L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27429-L27430)

```diff
-         let gV = VV.sb;
-         const DV = YV && !VV.cb && VV.Hb && VV.VE.length > 0 && !!gV;
+         let KH = HH.mQ;
+         const cH = rH && !HH.vQ && HH.bQ && HH.lQ.length > 0 && !!KH;
```

#### 3690. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27432` → after: `L28415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28415) · [Before (L27432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27432)

```diff
-           for (const xV of eV) VV.push(xV.is.buffer), VV.push(xV.js.buffer), VV.push(xV.ks.buffer), VV.push(xV.wids.buffer), VV.push(xV.hts.buffer), VV.push(xV.lU.buffer), VV.push(xV.diagonals.buffer)
+           for (const LH of BH) HH.push(LH.is.buffer), HH.push(LH.js.buffer), HH.push(LH.ks.buffer), HH.push(LH.wids.buffer), HH.push(LH.hts.buffer), HH.push(LH.pS.buffer), HH.push(LH.diagonals.buffer)
```

#### 3691. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27436` → after: `L28419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28419) · [Before (L27436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27436)

```diff
-         if (VV.nb = iV, this.jobsInFlight[EV].set(iV, VV), ZV && this.lightReuse.dispatched(VV, iV, ZV), this.visibility) {
+         if (HH.Du = eH, this.jobsInFlight[WH].set(eH, HH), XH && this.lightReuse.dispatched(HH, eH, XH), this.visibility) {
```

#### 3692. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27440` → after: `L28423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28423) · [Before (L27440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27440)

```diff
-             voxelVersion: VV.kb,
+             voxelVersion: HH.au,
```

#### 3693. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27476` → after: `L28459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28459) · [Before (L27476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27476)

```diff
-             type: "pb",
+             type: "nu",
```

#### 3694. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27480` → after: `L28463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28463) · [Before (L27480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27480)

```diff
-           return this.iv.hb(`Meshing worker ${EV} postMessage failed`, LV), VV.nb = 0, this.jobEnded(EV, iV), this.chunkMirrors[EV].reset(), this.lightMirrors[EV].reset(), (0, yV.s)(RV), WV && (0, yV.D)(WV), VV.Db = !0, this.iv.cZ.ib(VV, !0), !1
+           return this.bG.PQ(`Meshing worker ${WH} postMessage failed`, FH), HH.Du = 0, this.jobEnded(WH, eH), this.chunkMirrors[WH].reset(), this.lightMirrors[WH].reset(), (0, hH.s)(lH), fH && (0, hH.C)(fH), HH.uQ = !0, this.bG.cX.QQ(HH, !0), !1
```

#### 3695. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27482` → after: `L28465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28465) · [Before (L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27482)

```diff
-         return DV && (VV.sb = null), null === (xV = this.meshProbe) || void 0 === xV || xV.sent(VV, iV, this.busynessTracker.inFlightCounts[EV] - 1, this.workerInFlightCount, this.jobCapacity()), !0
+         return cH && (HH.mQ = null), null === (LH = this.meshProbe) || void 0 === LH || LH.sent(HH, eH, this.busynessTracker.inFlightCounts[WH] - 1, this.workerInFlightCount, this.jobCapacity()), !0
```

#### 3696. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27488` → after: `L28471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28471) · [Before (L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27488)

```diff
-           const [eV, YV, yV] = MV(UV), pV = VV.Ck.get(eV, YV, yV);
+           const [BH, rH, hH] = mH(SH), tH = HH.xu.get(BH, rH, hH);
```

#### 3697. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27501` → after: `L28484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28484) · [Before (L27501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27501)

```diff
-         const nV = YV ? this.lightTags.get(VV.Gk) : void 0;
+         const CH = rH ? this.lightTags.get(HH.Gu) : void 0;
```

#### 3698. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27509` → after: `L28492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28492) · [Before (L27509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27509)

```diff
-         } = yV.dispatched(JV ? pV : -1, xV);
+         } = hH.dispatched(AH ? tH : -1, LH);
```

#### 3699. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27520-L27522` → after: `L28503-L28505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28503-L28505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28503-L28505) · [Before (L27520-L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27520-L27522)

```diff
-         const JV = !VV.YE && this.iv.gZ.UE() ? performance.now() : 0;
-         VV.YE = !0;
-         const YV = null === (xV = this.iv.gZ.jb) || void 0 === xV ? void 0 : xV.terrain;
+         const AH = !HH.qQ && this.bG.mX.gQ() ? performance.now() : 0;
+         HH.qQ = !0;
+         const rH = null === (LH = this.bG.mX.yu) || void 0 === LH ? void 0 : LH.terrain;
```

#### 3700. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27524` → after: `L28507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28507) · [Before (L27524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27524)

```diff
-         const UV = VV.VE;
+         const SH = HH.lQ;
```

#### 3701. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27528` → after: `L28511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28511) · [Before (L27528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27528)

```diff
-           xV && (pV = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.iv.gZ.yE), pV.Vb = !0, pV._updateBoundingInfo = gV, pV._refreshBoundingInfo = gV, UV.push(pV)), this.meshBuilder.assignMeshData(pV, eV[yV]), YV || (0, EV.k)(pV, eV[yV].faceGroups), xV || this.iv.gZ.pE(pV), null = … [truncated]
+           LH && (tH = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.bG.mX.NQ), tH.cu = !0, tH._updateBoundingInfo = KH, tH._refreshBoundingInfo = KH, SH.push(tH)), this.meshBuilder.assignMeshData(tH, BH[hH]), rH || (0, WH.h)(tH, BH[hH].faceGroups), LH || this.bG.mX.RQ(tH), null = … [truncated]
```

#### 3702. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27532` → after: `L28515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28515) · [Before (L27532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27532)

```diff
-           this.iv.emit("removingTerrainMesh", VV), null === YV || void 0 === YV || YV.removeChunkMesh(VV), VV.dispose()
+           this.bG.emit("removingTerrainMesh", HH), null === rH || void 0 === rH || rH.removeChunkMesh(HH), HH.dispose()
```

#### 3703. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27536` → after: `L28519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28519) · [Before (L27536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27536)

```diff
-         const YV = VV.VE;
+         const rH = HH.lQ;
```

#### 3704. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27540-L27541` → after: `L28523-L28524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28523-L28524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28523-L28524) · [Before (L27540-L27541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27540-L27541)

```diff
-             QV = pV ? new kV : YV[UV];
-           pV && YV.push(QV), QV.vertexCount = (0, vV.i)(yV);
+             zH = tH ? new uH : rH[SH];
+           tH && rH.push(zH), zH.vertexCount = (0, GH.d)(hH);
```

#### 3705. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27543` → after: `L28526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28526) · [Before (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27543)

```diff
-           QV.material = null !== nV && void 0 !== nV ? nV : this.terrainMatManager.eb(yV.terrainID), xV.setChunkMesh(QV, (0, ZV.f)(yV), VV.pos), pV && (QV.metadata[WV] = VV.i, QV.metadata[RV] = VV.k, QV.metadata[GV] = !0, JV && this.iv.gZ.ZE(QV, JV), this.iv.emit("addingTerrainMe … [truncated]
+           zH.material = null !== CH && void 0 !== CH ? CH : this.terrainMatManager.eu(hH.terrainID), LH.setChunkMesh(zH, (0, XH.i)(hH), HH.pos), tH && (zH.metadata[fH] = HH.i, zH.metadata[lH] = HH.k, zH.metadata[IH] = !0, AH && this.bG.mX.DQ(zH, AH), this.bG.emit("addingTerrainMe … [truncated]
```

#### 3706. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27547` → after: `L28530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28530) · [Before (L27547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27547)

```diff
-           this.iv.emit("removingTerrainMesh", VV), xV.removeChunkMesh(VV), VV.dispose()
+           this.bG.emit("removingTerrainMesh", HH), LH.removeChunkMesh(HH), HH.dispose()
```

#### 3707. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27551-L27552` → after: `L28534-L28535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28534-L28535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28534-L28535) · [Before (L27551-L27552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27551-L27552)

```diff
-         const xV = VV.VE;
-         if (eV.length !== xV.length) return console.warn(`Light-only update submesh count mismatch: ${eV.length} light arrays vs ${xV.length} meshes`), !1;
+         const LH = HH.lQ;
+         if (BH.length !== LH.length) return console.warn(`Light-only update submesh count mismatch: ${BH.length} light arrays vs ${LH.length} meshes`), !1;
```

#### 3708. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27557` → after: `L28540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28540) · [Before (L27557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27557)

```diff
-           if (QV.length !== nV) return console.warn(`Light-only update vertex count mismatch on submesh ${pV}: ${QV.length} vs ${nV}`), !1;
+           if (zH.length !== CH) return console.warn(`Light-only update vertex count mismatch on submesh ${tH}: ${zH.length} vs ${CH}`), !1;
```

#### 3709. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27559` → after: `L28542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28542) · [Before (L27559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27559)

```diff
-           if (VV instanceof kV) QV.length > 0 && (null === (JV = this.iv.gZ.jb) || void 0 === JV || null === (YV = JV.terrain) || void 0 === YV || YV.setChunkMeshLight(VV, (0, ZV.h)(QV)));
+           if (HH instanceof uH) zH.length > 0 && (null === (AH = this.bG.mX.yu) || void 0 === AH || null === (rH = AH.terrain) || void 0 === rH || rH.setChunkMeshLight(HH, (0, XH.k)(zH)));
```

#### 3710. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27564` → after: `L28547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28547) · [Before (L27564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27564)

```diff
-             xV && xV.isUpdatable() ? xV.updateDirectly(eV, 0) : VV.setVerticesData("aPackedLightLevels", eV, !0, 1), this.meshBuilder.releaseCpuCopies(VV), null === (UV = this.iv.gZ.jb) || void 0 === UV || null === (yV = UV.terrain) || void 0 === yV || yV.setChunkMeshLight(VV, (0 … [truncated]
+             LH && LH.isUpdatable() ? LH.updateDirectly(BH, 0) : HH.setVerticesData("aPackedLightLevels", BH, !0, 1), this.meshBuilder.releaseCpuCopies(HH), null === (SH = this.bG.mX.yu) || void 0 === SH || null === (hH = SH.terrain) || void 0 === hH || hH.setChunkMeshLight(HH, (0 … [truncated]
```

#### 3711. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27570` → after: `L28553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28553) · [Before (L27570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27570)

```diff
-         return this.iv.gZ.eE && !VV.Mk && !(0, pV.I)(VV.Rk, VV.j, eV)
+         return this.bG.mX.KQ && !HH.Eu && !(0, tH.t)(HH.uu, HH.j, BH)
```

#### 3712. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27573` → after: `L28556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28556) · [Before (L27573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27573)

```diff
-         this.providedLightEligible(VV, this.iv.cZ.ak(VV.i, VV.k)) && (VV.JE = !0, this.storeAndPropagateLight(VV, eV, xV, !0), VV.xE = !0)
+         this.providedLightEligible(HH, this.bG.cX.vu(HH.i, HH.k)) && (HH.eQ = !0, this.storeAndPropagateLight(HH, BH, LH, !0), HH.cQ = !0)
```

#### 3713. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27577-L27579` → after: `L28560-L28562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28560-L28562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28560-L28562) · [Before (L27577-L27579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27577-L27579)

```diff
-         const YV = VV.Gk,
-           UV = VV.gk;
-         if ((0, yV.v)(VV, eV, xV), !VV.Mk) {
+         const rH = HH.Gu,
+           SH = HH.Qu;
+         if ((0, hH.w)(HH, BH, LH), !HH.Eu) {
```

#### 3714. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27583` → after: `L28566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28566) · [Before (L27583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27583)

```diff
-             const [xV, YV, UV] = pV.f[eV], nV = VV.Ck.get(xV, YV, UV);
+             const [LH, rH, SH] = tH.e[BH], CH = HH.xu.get(LH, rH, SH);
```

#### 3715. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27586-L27587` → after: `L28569-L28570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28569-L28570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28569-L28570) · [Before (L27586-L27587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27586-L27587)

```diff
-             nV.kE > 0 && (nV.Db ? this.iv.cZ.ib(nV) : wV = !0);
-             const ZV = !JV && nV.xE;
+             CH.dQ > 0 && (CH.uQ ? this.bG.cX.QQ(CH) : EH = !0);
+             const XH = !AH && CH.cQ;
```

#### 3716. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27591` → after: `L28574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28574) · [Before (L27591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27591)

```diff
-             const nV = (0, pV.v)(VV.size, YV, UV, eV, xV, yV);
+             const CH = (0, tH.n)(HH.size, rH, SH, BH, LH, hH);
```

#### 3717. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27595` → after: `L28578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28578) · [Before (L27595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27595)

```diff
-               xV && (JV || this.invalidateProvidedLightFrom(VV, xV), xV.kE > 0 && (xV.Db = !0, VV.bb && (xV.bb = !0), this.iv.cZ.ib(xV, VV.bb)))
+               LH && (AH || this.invalidateProvidedLightFrom(HH, LH), LH.dQ > 0 && (LH.uQ = !0, HH.Ju && (LH.Ju = !0), this.bG.cX.QQ(LH, HH.Ju)))
```

#### 3718. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27599-L27600` → after: `L28582-L28583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28582-L28583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28582-L28583) · [Before (L27599-L27600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27599-L27600)

```diff
-         const QV = (0, pV.N)(VV.size, pV.l, YV, UV, eV, xV);
-         this.requeueSkySeedReaders(VV, QV, !JV, !VV.Db), YV && (0, yV.z)(YV), this.iv.Sb.Ib(VV)
+         const zH = (0, tH.w)(HH.size, tH.j, rH, SH, BH, LH);
+         this.requeueSkySeedReaders(HH, zH, !AH, !HH.uQ), rH && (0, hH.A)(rH), this.bG.oQ.IQ(HH)
```

#### 3719. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27603` → after: `L28586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28586) · [Before (L27603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27603)

```diff
-         eV.xE = !1, VV.JE || (eV.JE = !1)
+         BH.cQ = !1, HH.eQ || (BH.eQ = !1)
```

#### 3720. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27609-L27610` → after: `L28592-L28593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28592-L28593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28592-L28593) · [Before (L27609-L27610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27609-L27610)

```diff
-               const JV = eV >> 3 * (UV + 1) + xV + 1 & 1 ? VV.Ck.get(UV, -1, xV) : null;
-               null !== JV && void 0 !== JV && JV.xE && this.invalidateProvidedLightFrom(VV, JV)
+               const AH = BH >> 3 * (SH + 1) + LH + 1 & 1 ? HH.xu.get(SH, -1, LH) : null;
+               null !== AH && void 0 !== AH && AH.cQ && this.invalidateProvidedLightFrom(HH, AH)
```

#### 3721. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27613` → after: `L28596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28596) · [Before (L27613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27613)

```diff
-         if (YV && (eV = pV.d), eV)
+         if (rH && (BH = tH.c), BH)
```

#### 3722. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27619-L27620` → after: `L28602-L28603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28602-L28603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28602-L28603) · [Before (L27619-L27620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27619-L27620)

```diff
-                 const YV = VV.Ck.get(xV, -1, JV);
-                 YV && 0 !== YV.kE && !YV.Db && (YV.nb ? this.skySeedRecheck.add(YV) : this.skySeedStale(YV, VV) && (YV.Db = !0, this.iv.cZ.ib(YV)))
+                 const rH = HH.xu.get(LH, -1, AH);
+                 rH && 0 !== rH.dQ && !rH.uQ && (rH.Du ? this.skySeedRecheck.add(rH) : this.skySeedStale(rH, HH) && (rH.uQ = !0, this.bG.cX.QQ(rH)))
```

#### 3723. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27629` → after: `L28612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28612) · [Before (L27629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27629)

```diff
-         this.skySeedRecheck.delete(VV), eV && (this.checkHeldSkySeedReaders(VV), xV && this.skySeedStale(VV, null) && (VV.Db = !0, this.iv.cZ.ib(VV)))
+         this.skySeedRecheck.delete(HH), BH && (this.checkHeldSkySeedReaders(HH), LH && this.skySeedStale(HH, null) && (HH.uQ = !0, this.bG.cX.QQ(HH)))
```

#### 3724. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27632` → after: `L28615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28615) · [Before (L27632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27632)

```diff
-         this.requeueSkySeedReaders(VV, pV.d, !1, !VV.Db)
+         this.requeueSkySeedReaders(HH, tH.c, !1, !HH.uQ)
```

#### 3725. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27635-L27636` → after: `L28618-L28619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28618-L28619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28618-L28619) · [Before (L27635-L27636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27635-L27636)

```diff
-         const xV = VV.Gk;
-         if (!xV || VV.Mk) return !1;
+         const LH = HH.Gu;
+         if (!LH || HH.Eu) return !1;
```

#### 3726. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27638` → after: `L28621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28621) · [Before (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27638)

```diff
-         if (void 0 === JV) return !VV.xE;
+         if (void 0 === AH) return !HH.cQ;
```

#### 3727. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27644-L27645` → after: `L28627-L28628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28627-L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28627-L28628) · [Before (L27644-L27645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27644-L27645)

```diff
-             const QV = VV.Ck.get(yV, 1, xV);
-             if ((!eV || QV === eV) && (0, pV.K)(JV, null !== (UV = null === QV || void 0 === QV ? void 0 : QV.Gk) && void 0 !== UV ? UV : null, !(null === QV || void 0 === QV || !QV.gk), yV, xV, YV, pV.l, 255)) return !0
+             const zH = HH.xu.get(hH, 1, LH);
+             if ((!BH || zH === BH) && (0, tH.u)(AH, null !== (SH = null === zH || void 0 === zH ? void 0 : zH.Gu) && void 0 !== SH ? SH : null, !(null === zH || void 0 === zH || !zH.Qu), hH, LH, rH, tH.j, 255)) return !0
```

#### 3728. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27655` → after: `L28638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28638) · [Before (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27655)

```diff
-         const xV = null !== (VV = null === (eV = this.busynessTracker) || void 0 === eV ? void 0 : eV.sample()) && void 0 !== VV ? VV : null,
+         const LH = null !== (HH = null === (BH = this.busynessTracker) || void 0 === BH ? void 0 : BH.sample()) && void 0 !== HH ? HH : null,
```

#### 3729. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27666` → after: `L28648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28648) · [Before (L27666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27666)

```diff
-         return this._serverLightCompletionsSinceReset = 0, this._clientLightCompletionsSinceReset = 0, this._editCausedLightCompletionsSinceReset = 0, this._reusedLightCompletionsSinceReset = 0, this._clientLightMsSinceReset = 0, this._clientLightWasmCompletionsSinceReset = 0, th … [truncated]
+         return this._serverLightCompletionsSinceReset = 0, this._clientLightCompletionsSinceReset = 0, this._editCausedLightCompletionsSinceReset = 0, this._reusedLightCompletionsSinceReset = 0, this._clientLightMsSinceReset = 0, this._fullMeshCompletionsSinceReset = 0, this._ful … [truncated]
```

#### 3730. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27685` → after: `L28666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28666) · [Before (L27685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27685)

```diff
-         return this.queueBudget.Jv(this.liveWorkerCount)
+         return this.queueBudget.aX(this.liveWorkerCount)
```

#### 3731. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27688-L27690` → after: `L28669-L28671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28669-L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28669-L28671) · [Before (L27688-L27690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27688-L27690)

```diff
-         this.iv.cZ.EE.kZ.forEach((VV => {
-           const eV = this.iv.cZ.Cb.ab(VV[0], VV[1], VV[2]);
-           eV && eV.VE.length > 0 && (this.disposeChunkMeshes(eV), this.chunksToRemeshOnRestore.add(eV))
+         this.bG.cX.sQ.CX.forEach((HH => {
+           const BH = this.bG.cX.WQ.MQ(HH[0], HH[1], HH[2]);
+           BH && BH.lQ.length > 0 && (this.disposeChunkMeshes(BH), this.chunksToRemeshOnRestore.add(BH))
```

#### 3732. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27695` → after: `L28676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28676) · [Before (L27695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27695)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((eV => !(!VV.has(eV) && 0 === eV.VE.length) && (this.retryDroppedChunk(eV), !0)), !0)
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((BH => !(!HH.has(BH) && 0 === BH.lQ.length) && (this.retryDroppedChunk(BH), !0)), !0)
```

#### 3733. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27698` → after: `L28679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28679) · [Before (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27698)

```diff
-         this.requeueKnownChunks((VV => 0 !== VV.VE.length && (this.retryDroppedChunk(VV), !0)), !0)
+         this.requeueKnownChunks((HH => 0 !== HH.lQ.length && (this.retryDroppedChunk(HH), !0)), !0)
```

#### 3734. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27708` → after: `L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28689) · [Before (L27708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27708)

```diff
-         this.requeueKnownChunks((VV => !VV.Hb && VV.kE > 0), !1)
+         this.requeueKnownChunks((HH => !HH.bQ && HH.dQ > 0), !1)
```

#### 3735. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27711-L27713` → after: `L28692-L28694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28692-L28694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28692-L28694) · [Before (L27711-L27713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27711-L27713)

```diff
-         this.iv.cZ.EE.kZ.forEach((xV => {
-           const JV = this.iv.cZ.Cb.ab(xV[0], xV[1], xV[2]);
-           JV && VV(JV) && (JV.Db = !0, eV && (JV.cb = !0), this.iv.cZ.ib(JV))
+         this.bG.cX.sQ.CX.forEach((LH => {
+           const AH = this.bG.cX.WQ.MQ(LH[0], LH[1], LH[2]);
+           AH && HH(AH) && (AH.uQ = !0, BH && (AH.vQ = !0), this.bG.cX.QQ(AH))
```

#### 3736. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27724` → after: `L28705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28705) · [Before (L27724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27724)

```diff
-   38598: (VV, eV, xV) => {
+   38286: (HH, BH, LH) => {
```

#### 3737. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27726-L27727` → after: `L28707-L28708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28707-L28708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28707-L28708) · [Before (L27726-L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27726-L27727)

```diff
-       b: () => YV,
-       d: () => UV
+       c: () => rH,
+       g: () => SH
```

#### 3738. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27741` → after: `L28722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28722) · [Before (L27741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27741)

```diff
-   38595: (VV, eV, xV) => {
+   38283: (HH, BH, LH) => {
```

#### 3739. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27743-L27746` → after: `L28724-L28727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28724-L28727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28724-L28727) · [Before (L27743-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27743-L27746)

```diff
-       e: () => yV,
-       i: () => JV,
-       k: () => YV,
-       l: () => UV
+       d: () => hH,
+       g: () => AH,
+       j: () => rH,
+       k: () => SH
```

#### 3740. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27749` → after: `L28730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28730) · [Before (L27749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27749)

```diff
-       wx: 0,
+       TH: 0,
```

#### 3741. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27767` → after: `L28748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28748) · [Before (L27767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27767)

```diff
-   38919: (VV, eV, xV) => {
+   38623: (HH, BH, LH) => {
```

#### 3742. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27772` → after: `L28753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28753) · [Before (L27772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27772)

```diff
-     var JV = xV(38556);
+     var AH = LH(38261);
```

#### 3743. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27775-L27776` → after: `L28756-L28757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28756-L28757) · [Before (L27775-L27776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27775-L27776)

```diff
-       const xV = VV.WZ,
-         YV = VV.metadata[JV.E] * Math.max(Math.abs(xV.x), Math.abs(xV.y), Math.abs(xV.z)),
+       const LH = HH.bX,
+         rH = HH.metadata[AH.C] * Math.max(Math.abs(LH.x), Math.abs(LH.y), Math.abs(LH.z)),
```

#### 3744. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27788` → after: `L28769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28769) · [Before (L27788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27788)

```diff
-       return void 0 !== (null === (xV = VV.metadata) || void 0 === xV ? void 0 : xV[JV.E]) ? YV(VV, eV) : (VV.computeWorldMatrix(), VV.isInFrustum(eV))
+       return void 0 !== (null === (LH = HH.metadata) || void 0 === LH ? void 0 : LH[AH.C]) ? rH(HH, BH) : (HH.computeWorldMatrix(), HH.isInFrustum(BH))
```

#### 3745. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27791` → after: `L28772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28772) · [Before (L27791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27791)

```diff
-   38819: (VV, eV, xV) => {
+   38514: (HH, BH, LH) => {
```

#### 3746. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27795-L27796` → after: `L28776-L28777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28776-L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28776-L28777) · [Before (L27795-L27796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27795-L27796)

```diff
-       i: () => pV,
-       j: () => QV
+       h: () => tH,
+       i: () => zH
```

#### 3747. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27815` → after: `L28796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28796) · [Before (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27815)

```diff
-       return "function" === typeof VV && null !== (eV = VV[YV]) && void 0 !== eV ? eV : null
+       return "function" === typeof HH && null !== (BH = HH[rH]) && void 0 !== BH ? BH : null
```

#### 3748. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27818` → after: `L28799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28799) · [Before (L27818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27818)

```diff
-   38582: (VV, eV, xV) => {
+   38274: (HH, BH, LH) => {
```

#### 3749. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27866` → after: `L28847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28847) · [Before (L27866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27866)

```diff
-   39066: (VV, eV, xV) => {
+   38797: (HH, BH, LH) => {
```

#### 3750. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27868` → after: `L28849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28849) · [Before (L27868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27868)

```diff
-       e: () => ZV
+       b: () => XH
```

#### 3751. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27870-L27875` → after: `L28851-L28856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28851-L28856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28851-L28856) · [Before (L27870-L27875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27870-L27875)

```diff
-     var JV = xV(38263),
-       YV = xV(39058),
-       UV = xV(38530),
-       yV = xV(38421),
-       pV = xV(38547),
-       QV = xV(39053);
+     var AH = LH(37961),
+       rH = LH(38790),
+       SH = LH(38231),
+       hH = LH(38118),
+       tH = LH(38251),
+       zH = LH(38777);
```

#### 3752. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27877-L27878` → after: `L28858-L28859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28858-L28859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28858-L28859) · [Before (L27877-L27878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27877-L27878)

```diff
-     var wV = xV(38519);
-     class ZV extends wV.e {
+     var EH = LH(38222);
+     class XH extends EH.c {
```

#### 3753. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27880` → after: `L28861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28861) · [Before (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27880)

```diff
-         super(VV, eV, xV), this.model = JV, this.owned = YV, this.TE = yV, this.sideOrientation = void 0, this.sC = {}, this._userInstancedBuffersStorage = void 0, this.JC = !1, this.XUV = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(HH, BH, LH), this.model = AH, this.owned = rH, this.rW = hH, this.sideOrientation = void 0, this.kF = {}, this._userInstancedBuffersStorage = void 0, this.xR = !1, this.XSH = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3754. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27885` → after: `L28866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28866) · [Before (L27885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27885)

```diff
-         }, this.VJV = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.Vb = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.gLH = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.cu = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```

#### 3755. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27889` → after: `L28870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28870) · [Before (L27889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27889)

```diff
-         pV.create(this.row, 0, UV.b.isVisible), JV && pV.setBounds(this.row, JV.boundsMin, JV.boundsMax), this.materialIndices = new Array(yV.length / 4).fill(0), this.sideOrientation = VV.dD().useRightHandedSystem ? 0 : 1, this.material = null
+         tH.create(this.row, 0, SH.e.isVisible), AH && tH.setBounds(this.row, AH.boundsMin, AH.boundsMax), this.materialIndices = new Array(hH.length / 4).fill(0), this.sideOrientation = HH.yN().useRightHandedSystem ? 0 : 1, this.material = null
```

#### 3756. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27892` → after: `L28873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28873) · [Before (L27892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27892)

```diff
-         return this.meshFlag(UV.b.alwaysSelect)
+         return this.meshFlag(SH.e.alwaysSelect)
```

#### 3757. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27895` → after: `L28876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28876) · [Before (L27895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27895)

```diff
-         this.gZ.model.meshes.setFlag(this.row, UV.b.alwaysSelect, VV)
+         this.mX.model.meshes.setFlag(this.row, SH.e.alwaysSelect, HH)
```

#### 3758. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27898` → after: `L28879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28879) · [Before (L27898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27898)

```diff
-         return this.meshFlag(UV.b.isVisible)
+         return this.meshFlag(SH.e.isVisible)
```

#### 3759. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27901` → after: `L28882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28882) · [Before (L27901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27901)

```diff
-         this.gZ.model.meshes.setFlag(this.row, UV.b.isVisible, VV)
+         this.mX.model.meshes.setFlag(this.row, SH.e.isVisible, HH)
```

#### 3760. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27903` → after: `L28884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28884) · [Before (L27903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27903)

```diff
-       get NUV() {
+       get ESH() {
```

#### 3761. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27907` → after: `L28888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28888) · [Before (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27907)

```diff
-         return this.gZ.model.meshes.visibility[this.row]
+         return this.mX.model.meshes.visibility[this.row]
```

#### 3762. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27910` → after: `L28891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28891) · [Before (L27910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27910)

```diff
-         for (const eV of [this, ...this.instances]) this.gZ.model.meshes.setVisibility(eV.row, VV)
+         for (const BH of [this, ...this.instances]) this.mX.model.meshes.setVisibility(BH.row, HH)
```

#### 3763. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27913` → after: `L28894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28894) · [Before (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27913)

```diff
-         return this.gZ.model.meshes.layer[this.row]
+         return this.mX.model.meshes.layer[this.row]
```

#### 3764. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27916` → after: `L28897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28897) · [Before (L27916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27916)

```diff
-         for (const eV of [this, ...this.instances]) this.gZ.model.meshes.setLayer(eV.row, VV)
+         for (const BH of [this, ...this.instances]) this.mX.model.meshes.setLayer(BH.row, HH)
```

#### 3765. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27919` → after: `L28900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28900) · [Before (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27919)

```diff
-         return this.meshFlag(UV.b.pickable)
+         return this.meshFlag(SH.e.pickable)
```

#### 3766. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27922` → after: `L28903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28903) · [Before (L27922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27922)

```diff
-         this.gZ.model.meshes.setFlag(this.row, UV.b.pickable, VV)
+         this.mX.model.meshes.setFlag(this.row, SH.e.pickable, HH)
```

#### 3767. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27929` → after: `L28910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28910) · [Before (L27929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27929)

```diff
-         const eV = "MultiMaterial" === (null === VV || void 0 === VV ? void 0 : VV.getClassName()) ? VV.BeV : null,
+         const BH = "MultiMaterial" === (null === HH || void 0 === HH ? void 0 : HH.getClassName()) ? HH.BBH : null,
```

#### 3768. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27933` → after: `L28914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28914) · [Before (L27933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27933)

```diff
-             return null !== (JV = YV && (0, yV.eb)(YV)) && void 0 !== JV ? JV : null
+             return null !== (AH = rH && (0, hH.V)(rH)) && void 0 !== AH ? AH : null
```

#### 3769. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27935-L27936` → after: `L28916-L28917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28916-L28917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28916-L28917) · [Before (L27935-L27936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27935-L27936)

```diff
-           JV = new UV.e(this, this.model, this.TE, xV);
-         for (const YV of [this, ...this.instances]) this.gZ.model.meshes.setParts(YV.row, JV)
+           AH = new SH.i(this, this.model, this.rW, LH);
+         for (const rH of [this, ...this.instances]) this.mX.model.meshes.setParts(rH.row, AH)
```

#### 3770. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27938` → after: `L28919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28919) · [Before (L27938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27938)

```diff
-       get VeV() {
+       get gHH() {
```

#### 3771. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27941` → after: `L28922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28922) · [Before (L27941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27941)

```diff
-       set VeV(VV) {
+       set gHH(HH) {
```

#### 3772. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27948` → after: `L28929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28929) · [Before (L27948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27948)

```diff
-         return (this.forcedInstanceCount || this.VeV) > 0
+         return (this.forcedInstanceCount || this.gHH) > 0
```

#### 3773. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27952` → after: `L28933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28933) · [Before (L27952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27952)

```diff
-         return this.gZ.dD().sk()
+         return this.mX.yN().Iu()
```

#### 3774. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27955` → after: `L28936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28936) · [Before (L27955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27955)

```diff
-         return this.gZ.model.meshes.parts[this.row]
+         return this.mX.model.meshes.parts[this.row]
```

#### 3775. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27962` → after: `L28943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28943) · [Before (L27962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27962)

```diff
-         } = null !== (VV = this.model) && void 0 !== VV ? VV : {
+         } = null !== (HH = this.model) && void 0 !== HH ? HH : {
```

#### 3776. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27971` → after: `L28952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28952) · [Before (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27971)

```diff
-             QV = .5 * JV.Ik.Distance(VV, eV);
+             zH = .5 * AH.lu.Distance(HH, BH);
```

#### 3777. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27973` → after: `L28954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28954) · [Before (L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27973)

```diff
-             UV.HVV(Number.MAX_VALUE), yV.HVV(-Number.MAX_VALUE);
+             SH.IHH(Number.MAX_VALUE), hH.IHH(-Number.MAX_VALUE);
```

#### 3778. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27978` → after: `L28959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28959) · [Before (L27978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27978)

```diff
-               JV.Ik.CheckExtends(JV.Ik.TransformCoordinatesFromFloatsToRef(pV, QV, nV, xV, new JV.Ik), UV, yV)
+               AH.lu.CheckExtends(AH.lu.TransformCoordinatesFromFloatsToRef(tH, zH, CH, LH, new AH.lu), SH, hH)
```

#### 3779. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27980-L27981` → after: `L28961-L28962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28961-L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28961-L28962) · [Before (L27980-L27981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27980-L27981)

```diff
-             pV = JV.Ik.TransformCoordinates(YV, xV);
-             const wV = JV.Ik.TransformNormalFromFloatsToRef(1, 1, 1, xV, new JV.Ik);
+             tH = AH.lu.TransformCoordinates(rH, LH);
+             const EH = AH.lu.TransformNormalFromFloatsToRef(1, 1, 1, LH, new AH.lu);
```

#### 3780. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27995` → after: `L28976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28976) · [Before (L27995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L27995)

```diff
-             xUV: {
+             nrH: {
```

#### 3781. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28003` → after: `L28984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28984) · [Before (L28003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28003)

```diff
-         }(JV.Ik.FromArray(eV), JV.Ik.FromArray(xV), this.getWorldMatrix())
+         }(AH.lu.FromArray(BH), AH.lu.FromArray(LH), this.getWorldMatrix())
```

#### 3782. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28006` → after: `L28987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28987) · [Before (L28006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28006)

```diff
-         return this.qL().xUV.isInFrustum(VV)
+         return this.jF().nrH.isInFrustum(HH)
```

#### 3783. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28010` → after: `L28991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L28991) · [Before (L28010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28010)

```diff
-         return null !== (VV = null === (eV = this.model) || void 0 === eV ? void 0 : eV.vertexCount) && void 0 !== VV ? VV : 0
+         return null !== (HH = null === (BH = this.model) || void 0 === BH ? void 0 : BH.vertexCount) && void 0 !== HH ? HH : 0
```

#### 3784. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28029` → after: `L29010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29010) · [Before (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28029)

```diff
-         return yV === pV.d && 0 === JV && YV === 4 * UV && (Array.isArray(xV) || xV instanceof Float32Array) && xV.length === this.model.vertexCount * UV ? xV : (0, pV.g)(eV, this.model.vertexCount)
+         return hH === tH.d && 0 === AH && rH === 4 * SH && (Array.isArray(LH) || LH instanceof Float32Array) && LH.length === this.model.vertexCount * SH ? LH : (0, tH.l)(BH, this.model.vertexCount)
```

#### 3785. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28038` → after: `L29019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29019) · [Before (L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28038)

```diff
-         }))) && void 0 !== VV ? VV : []
+         }))) && void 0 !== HH ? HH : []
```

#### 3786. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28040` → after: `L29021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29021) · [Before (L28040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28040)

```diff
-       RYV() {
+       vrH() {
```

#### 3787. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28042` → after: `L29023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29023) · [Before (L28042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28042)

```diff
-         return null !== (VV = null === (eV = this.model) || void 0 === eV ? void 0 : eV.indexData) && void 0 !== VV ? VV : []
+         return null !== (HH = null === (BH = this.model) || void 0 === BH ? void 0 : BH.indexData) && void 0 !== HH ? HH : []
```

#### 3788. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28054` → after: `L29035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29035) · [Before (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28054)

```diff
-           return null !== (eV = this.getVerticesData(VV)) && void 0 !== eV ? eV : void 0
+           return null !== (BH = this.getVerticesData(HH)) && void 0 !== BH ? BH : void 0
```

#### 3789. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28060` → after: `L29041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29041) · [Before (L28060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28060)

```diff
-         return (0, QV.f)({
+         return (0, zH.i)({
```

#### 3790. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28063` → after: `L29044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29044) · [Before (L28063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28063)

```diff
-           indices: null !== (eV = this.model.indexData) && void 0 !== eV ? eV : [],
+           indices: null !== (BH = this.model.indexData) && void 0 !== BH ? BH : [],
```

#### 3791. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28076` → after: `L29057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29057) · [Before (L28076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28076)

```diff
-         return this.position = JV.Ik.ZeroReadOnly, this.rotation = JV.Ik.ZeroReadOnly, this.WZ = JV.Ik.OneReadOnly, VV && (this.rotationQuaternion = {
+         return this.position = AH.lu.ZeroReadOnly, this.rotation = AH.lu.ZeroReadOnly, this.bX = AH.lu.OneReadOnly, HH && (this.rotationQuaternion = {
```

#### 3792. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28085` → after: `L29066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29066) · [Before (L28085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28085)

```diff
-         xV.set(eV), (0, pV.v)(this.model, xV)
+         LH.set(BH), (0, tH.A)(this.model, LH)
```

#### 3793. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28088` → after: `L29069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29069) · [Before (L28088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28088)

```diff
-         (0, pV.m)(VV), this.owned && (0, pV.u)(this.model), this.model = VV, this.owned = !0, eV !== this.TE && (this.TE = eV, this.materialIndices = new Array(eV.length / 4).fill(0), this.partBoxes = null), this.gZ.model.meshes.setBounds(this.row, VV.boundsMin, VV.boundsMax), th … [truncated]
+         (0, tH.r)(HH), this.owned && (0, tH.z)(this.model), this.model = HH, this.owned = !0, BH !== this.rW && (this.rW = BH, this.materialIndices = new Array(BH.length / 4).fill(0), this.partBoxes = null), this.mX.model.meshes.setBounds(this.row, HH.boundsMin, HH.boundsMax), th … [truncated]
```

#### 3794. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28091` → after: `L29072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29072) · [Before (L28091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28091)

```diff
-         return new kV(this, this.gZ, VV, this.gZ.dD().getUniqueId(), this.model, !1, this.TE)
+         return new uH(this, this.mX, HH, this.mX.yN().getUniqueId(), this.model, !1, this.rW)
```

#### 3795. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28094` → after: `L29075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29075) · [Before (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28094)

```diff
-         const eV = new ZV(this.gZ, VV, this.gZ.dD().getUniqueId(), this.model, !1, this.TE);
+         const BH = new XH(this.mX, HH, this.mX.yN().getUniqueId(), this.model, !1, this.rW);
```

#### 3796. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28096` → after: `L29077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29077) · [Before (L28096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28096)

```diff
-         return rV(xV = this, JV = eV), JV.parent = xV.parent, JV.pW(xV.isEnabled(!1)),
+         return YH(LH = this, AH = BH), AH.parent = LH.parent, AH.vI(LH.isEnabled(!1)),
```

#### 3797. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28104` → after: `L29085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29085) · [Before (L28104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28104)

```diff
-         (0, YV.d)()
+         (0, rH.e)()
```

#### 3798. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28112` → after: `L29093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29093) · [Before (L28112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28112)

```diff
-         for (const UV of [this, ...this.instances]) UV.sC[VV] = null;
+         for (const SH of [this, ...this.instances]) SH.kF[HH] = null;
```

#### 3799. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28135-L28136` → after: `L29116-L29117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29116-L29117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29116-L29117) · [Before (L28135-L28136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28135-L28136)

```diff
-         const eV = null === (VV = this.XUV) || void 0 === VV ? void 0 : VV.instances;
-         null === eV || void 0 === eV || eV.splice(eV.indexOf(this), 1), this.owned && (0, pV.u)(this.model)
+         const BH = null === (HH = this.XSH) || void 0 === HH ? void 0 : HH.instances;
+         null === BH || void 0 === BH || BH.splice(BH.indexOf(this), 1), this.owned && (0, tH.z)(this.model)
```

#### 3800. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28152` → after: `L29133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29133) · [Before (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28152)

```diff
-           const VV = null !== eV && void 0 !== eV ? eV : vV.length / YV;
+           const HH = null !== BH && void 0 !== BH ? BH : GH.length / rH;
```

#### 3801. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28165-L28166` → after: `L29146-L29147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29146-L29147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29146-L29147) · [Before (L28165-L28166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28165-L28166)

```diff
-         } = VV, wV = nV ? (0, pV.s)(YV, ((VV, eV) => nV[3 * VV + eV])) : [UV, yV];
-         this.replaceModel(new pV.e(QV, JV, YV, wV[0], wV[1]), this.TE)
+         } = HH, EH = CH ? (0, tH.y)(rH, ((HH, BH) => CH[3 * HH + BH])) : [SH, hH];
+         this.replaceModel(new tH.h(zH, AH, rH, EH[0], EH[1]), this.rW)
```

#### 3802. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28173` → after: `L29154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29154) · [Before (L28173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28173)

```diff
-         return 0 !== (this.gZ.model.meshes.flags[this.row] & VV)
+         return 0 !== (this.mX.model.meshes.flags[this.row] & HH)
```

#### 3803. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28176` → after: `L29157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29157) · [Before (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28176)

```diff
-     const vV = ["billboardMode", "infiniteDistance", "isVisible", "QE", "Sk", "visibility", "renderingGroupId", "sideOrientation", "VJV", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "Vb", "metadata"];
+     const GH = ["billboardMode", "infiniteDistance", "isVisible", "jQ", "fu", "visibility", "renderingGroupId", "sideOrientation", "gLH", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "cu", "metadata"];
```

#### 3804. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28179` → after: `L29160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29160) · [Before (L28179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28179)

```diff
-       eV.position = VV.position, eV.rotation = VV.rotation, VV.rotationQuaternion && (eV.rotationQuaternion = VV.rotationQuaternion), eV.WZ = VV.WZ
+       BH.position = HH.position, BH.rotation = HH.rotation, HH.rotationQuaternion && (BH.rotationQuaternion = HH.rotationQuaternion), BH.bX = HH.bX
```

#### 3805. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28184` → after: `L29165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29165) · [Before (L28184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28184)

```diff
-         super(...xV), this.XUV = VV, this.JC = !0, VV.instances.push(this);
+         super(...LH), this.XSH = HH, this.xR = !0, HH.instances.push(this);
```

#### 3806. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28187-L28188` → after: `L29168-L29169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29168-L29169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29168-L29169) · [Before (L28187-L28188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28187-L28188)

```diff
-         } = this.gZ.model;
-         YV.setParts(this.row, YV.parts[VV.row]), this.partBoxes = VV.partBoxes, YV.setVisibility(this.row, VV.visibility), YV.setLayer(this.row, VV.renderingGroupId), rV(VV, this), this.infiniteDistance = VV.infiniteDistance, Object.assign(this.sC, VV.sC), this.parent = VV.parent
+         } = this.mX.model;
+         rH.setParts(this.row, rH.parts[HH.row]), this.partBoxes = HH.partBoxes, rH.setVisibility(this.row, HH.visibility), rH.setLayer(this.row, HH.renderingGroupId), YH(HH, this), this.infiniteDistance = HH.infiniteDistance, Object.assign(this.kF, HH.kF), this.parent = HH.parent
```

#### 3807. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28191` → after: `L29172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29172) · [Before (L28191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28191)

```diff
-         return this.XUV.visibility
+         return this.XSH.visibility
```

#### 3808. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28195` → after: `L29176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29176) · [Before (L28195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28195)

```diff
-         return this.XUV.renderingGroupId
+         return this.XSH.renderingGroupId
```

#### 3809. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28199` → after: `L29180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29180) · [Before (L28199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28199)

```diff
-         return this.XUV.material
+         return this.XSH.material
```

#### 3810. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28204` → after: `L29185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29185) · [Before (L28204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28204)

```diff
-   38519: (VV, eV, xV) => {
+   38222: (HH, BH, LH) => {
```

#### 3811. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28206` → after: `L29187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29187) · [Before (L28206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28206)

```diff
-       e: () => ZV,
+       c: () => XH,
```

#### 3812. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28208` → after: `L29189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29189) · [Before (L28208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28208)

```diff
-       j: () => vV
+       i: () => GH
```

#### 3813. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28210-L28212` → after: `L29191-L29193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29191-L29193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29191-L29193) · [Before (L28210-L28212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28210-L28212)

```diff
-     var JV = xV(38263),
-       YV = xV(38523),
-       UV = xV(38545);
+     var AH = LH(37961),
+       rH = LH(38229),
+       SH = LH(38247);
```

#### 3814. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28214` → after: `L29195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29195) · [Before (L28214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28214)

```diff
-       pV = new JV.Ik;
+       tH = new AH.lu;
```

#### 3815. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28238` → after: `L29219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29219) · [Before (L28238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28238)

```diff
-       HVV(VV) {
+       IHH(HH) {
```

#### 3816. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28241` → after: `L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29222) · [Before (L28241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28241)

```diff
-       rQV(VV, eV, xV) {
+       dtH(HH, BH, LH) {
```

#### 3817. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28244` → after: `L29225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29225) · [Before (L28244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28244)

```diff
-       WYV() {
+       xrH() {
```

#### 3818. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28252` → after: `L29233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29233) · [Before (L28252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28252)

```diff
-         return new JV.Ik(this.x, this.y, this.z)
+         return new AH.lu(this.x, this.y, this.z)
```

#### 3819. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28255` → after: `L29236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29236) · [Before (L28255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28255)

```diff
-         return new JV.Ik(this.x * VV, this.y * VV, this.z * VV)
+         return new AH.lu(this.x * HH, this.y * HH, this.z * HH)
```

#### 3820. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28295` → after: `L29276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29276) · [Before (L28295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28295)

```diff
-         this.gZ = VV, this.name = eV, this.uniqueId = xV, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.eC = new wV, this.onEffectiveEnabledStateChangedObservable = new wV, this.EQV = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
+         this.mX = HH, this.name = BH, this.uniqueId = LH, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.uR = new EH, this.onEffectiveEnabledStateChangedObservable = new EH, this.JtH = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
```

#### 3821. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28303` → after: `L29284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29284) · [Before (L28303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28303)

```diff
-         })), this.rowScaling = new QV((() => YV.WZ), 3 * UV, ((VV, eV, xV) => {
+         })), this.rowScaling = new zH((() => rH.bX), 3 * SH, ((HH, BH, LH) => {
```

#### 3822. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28338` → after: `L29319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29319) · [Before (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28338)

```diff
-         } = this.gZ.model, xV = this.row;
+         } = this.mX.model, LH = this.row;
```

#### 3823. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28356` → after: `L29337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29337) · [Before (L28356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28356)

```diff
-         return 0 !== (this.gZ.model.nodes.flags[this.row] & UV.e.infiniteDistance)
+         return 0 !== (this.mX.model.nodes.flags[this.row] & SH.e.infiniteDistance)
```

#### 3824. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28359` → after: `L29340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29340) · [Before (L28359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28359)

```diff
-         this.gZ.model.nodes.setInfiniteDistance(this.row, VV)
+         this.mX.model.nodes.setInfiniteDistance(this.row, HH)
```

#### 3825. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28366` → after: `L29347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29347) · [Before (L28366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28366)

```diff
-         this.billboard = VV, this.gZ.model.nodes.setBillboard(this.row, null !== (eV = YV.d[VV]) && void 0 !== eV ? eV : UV.b.none)
+         this.billboard = HH, this.mX.model.nodes.setBillboard(this.row, null !== (BH = rH.b[HH]) && void 0 !== BH ? BH : SH.b.none)
```

#### 3826. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28372` → after: `L29353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29353) · [Before (L28372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28372)

```diff
-         if (VV === this.parentNode || this.ik) return;
+         if (HH === this.parentNode || this.Mu) return;
```

#### 3827. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28374` → after: `L29355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29355) · [Before (L28374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28374)

```diff
-         this.leaveParent(), this.parentNode = VV, VV && nV(VV) && VV.children.push(this), this.gZ.model.nodes.setParent(this.row, -1), (0, YV.k)(this.gZ, this, this.row), this.syncEnabled(eV)
+         this.leaveParent(), this.parentNode = HH, HH && CH(HH) && HH.children.push(this), this.mX.model.nodes.setParent(this.row, -1), (0, rH.g)(this.mX, this, this.row), this.syncEnabled(BH)
```

#### 3828. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28382` → after: `L29363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29363) · [Before (L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28382)

```diff
-         return 0 !== (this.gZ.model.nodes.flags[this.row] & UV.e.enabled) && (!VV || null === this.parentNode || this.parentNode.isEnabled())
+         return 0 !== (this.mX.model.nodes.flags[this.row] & SH.e.enabled) && (!HH || null === this.parentNode || this.parentNode.isEnabled())
```

#### 3829. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28387` → after: `L29368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29368) · [Before (L28387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28387)

```diff
-           this.gZ.model.nodes.pW(this.row, VV), this.syncEnabled(eV)
+           this.mX.model.nodes.vI(this.row, HH), this.syncEnabled(BH)
```

#### 3830. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28391` → after: `L29372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29372) · [Before (L28391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28391)

```diff
-         return this.gZ.model.nodes.worldNow(this.row, this.gZ.model.view, yV), JV.Matrix.FromArrayToRef(yV, 0, this.cZ)
+         return this.mX.model.nodes.worldNow(this.row, this.mX.model.view, hH), AH.Matrix.FromArrayToRef(hH, 0, this.cX)
```

#### 3831. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28400-L28401` → after: `L29381-L29382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29381-L29382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29381-L29382) · [Before (L28400-L28401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28400-L28401)

```diff
-           yV = JV.Ik.TransformNormal(this.rowPosition.clone(), UV.clone().invert()).add(VV.scale(eV));
-         return this.position = JV.Ik.TransformNormal(yV, UV), this
+           hH = AH.lu.TransformNormal(this.rowPosition.clone(), SH.clone().invert()).add(HH.scale(BH));
+         return this.position = AH.lu.TransformNormal(hH, SH), this
```

#### 3832. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28409` → after: `L29390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29390) · [Before (L28409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28409)

```diff
-       nJV() {}
+       dLH() {}
```

#### 3833. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28412-L28413` → after: `L29393-L29394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29393-L29394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29393-L29394) · [Before (L28412-L28413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28412-L28413)

```diff
-         const xV = vV(this.gZ, VV);
-         return this.gZ.model.nodes.setWorldSource(xV.row, eV), xV
+         const LH = GH(this.mX, HH);
+         return this.mX.model.nodes.setWorldSource(LH.row, BH), LH
```

#### 3834. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28425` → after: `L29406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29406) · [Before (L28425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28425)

```diff
-         const VV = new JV.Ik(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         const HH = new AH.lu(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
```

#### 3835. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28433-L28434` → after: `L29414-L29415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29414-L29415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29414-L29415) · [Before (L28433-L28434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28433-L28434)

```diff
-             } = YV.qL();
-             JV.Ik.CheckExtends(xV.minimumWorld, VV, eV), JV.Ik.CheckExtends(xV.maximumWorld, VV, eV)
+             } = rH.jF();
+             AH.lu.CheckExtends(LH.minimumWorld, HH, BH), AH.lu.CheckExtends(LH.maximumWorld, HH, BH)
```

#### 3836. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28447` → after: `L29428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29428) · [Before (L28447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28447)

```diff
-         return this.gZ.dD()
+         return this.mX.yN()
```

#### 3837. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28453` → after: `L29434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29434) · [Before (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28453)

```diff
-         return this.ik
+         return this.Mu
```

#### 3838. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28458` → after: `L29439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29439) · [Before (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28458)

```diff
-         if (!this.ik) {
+         if (!this.Mu) {
```

#### 3839. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28460` → after: `L29441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29441) · [Before (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28460)

```diff
-           this.ik = !0, (0, YV.m)(this.gZ, this), this.leaveParent(), this.release(), this.eC.notify(), this.eC.clear()
+           this.Mu = !0, (0, rH.k)(this.mX, this), this.leaveParent(), this.release(), this.uR.notify(), this.uR.clear()
```

#### 3840. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28480` → after: `L29461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29461) · [Before (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28480)

```diff
-       return new ZV(VV, eV, VV.dD().getUniqueId())
+       return new XH(HH, BH, HH.yN().getUniqueId())
```

#### 3841. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28483` → after: `L29464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29464) · [Before (L28483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28483)

```diff
-   38633: (VV, eV, xV) => {
+   38308: (HH, BH, LH) => {
```

#### 3842. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28485-L28487` → after: `L29466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29466) · [Before (L28485-L28487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28485-L28487)

```diff
-       b: () => pV,
-       c: () => QV,
-       f: () => wV,
+       d: () => tH,
```

#### 3843. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28489` → after: `L29468-L29470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29468-L29470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29468-L29470) · [Before (L28489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28489)

```diff
-       i: () => kV
+       i: () => EH,
+       m: () => CH,
+       o: () => uH
```

#### 3844. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28491` → after: `L29472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29472) · [Before (L28491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28491)

```diff
-     var JV = xV(38621);
+     var AH = LH(38302);
```

#### 3845. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28495` → after: `L29476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR29476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L29476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L29476) · [Before (L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L28495)

```diff
-     JV.i;
+     AH.m;
```
